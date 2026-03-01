'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { RippleButton } from '@/components/ui/ripple-button'
import confetti from 'canvas-confetti'
import { Send, CheckCircle2, Loader2, X } from 'lucide-react'
import { ShineBorder } from '@/components/ui/shine-border'

const termsContent = `【이용약관】

제1조 (목적)
본 약관은 부광솔루션즈(이하 "회사")가 운영하는 정책자금 무료상담 신청 서비스(이하 "서비스")의 이용과 관련하여, 회사와 이용자 간의 권리·의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.

제2조 (용어의 정의)
① "서비스"란 회사가 제공하는 정책자금 상담 신청 접수 및 관련 정보 제공 서비스를 말합니다.
② "이용자"란 본 약관에 동의하고 서비스를 이용하는 자를 말합니다.
③ "상담 신청"이란 이용자가 서비스를 통해 정책자금 관련 무료상담을 요청하는 행위를 말합니다.

제3조 (약관의 효력 및 변경)
① 본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.
② 회사는 관련 법령에 위배되지 않는 범위에서 약관을 개정할 수 있으며, 개정 시 적용일 7일 전부터 서비스 내 공지합니다.
③ 이용자가 변경된 약관에 동의하지 않을 경우, 서비스 이용을 중단하고 상담 신청을 철회할 수 있습니다.

제4조 (서비스의 내용)
① 회사는 이용자에게 다음의 서비스를 제공합니다.
  1. 정책자금 무료상담 신청 접수
  2. 정책자금 관련 정보 제공
  3. 전문 컨설팅 업체 및 금융기관 연결
② 회사는 상담 신청 정보를 바탕으로 이용자에게 적합한 정책자금 상품 및 컨설팅 서비스를 안내할 수 있습니다.

제5조 (서비스 이용)
① 이용자는 상담 신청 시 정확한 정보를 제공하여야 하며, 허위 정보 입력으로 인한 불이익은 이용자에게 귀속됩니다.
② 회사는 상담 신청 접수 후 영업일 기준 3일 이내에 이용자에게 연락을 시도합니다. 다만, 업무 상황에 따라 연락이 지연될 수 있습니다.

제6조 (회사의 의무)
① 회사는 관련 법령과 본 약관이 정한 바에 따라 지속적이고 안정적으로 서비스를 제공하기 위해 노력합니다.
② 회사는 이용자의 개인정보를 보호하기 위해 개인정보처리방침을 수립하고 이를 준수합니다.
③ 회사는 이용자로부터 제기되는 의견이나 불만이 정당하다고 인정할 경우, 합리적인 기간 내에 처리합니다.

제7조 (이용자의 의무)
① 이용자는 서비스 이용 시 다음 행위를 하여서는 안 됩니다.
  1. 타인의 정보를 도용하여 상담을 신청하는 행위
  2. 서비스의 운영을 고의로 방해하는 행위
  3. 기타 관련 법령에 위반되는 행위
② 이용자가 본 조를 위반하여 회사 또는 제3자에게 손해를 끼친 경우, 해당 이용자는 손해를 배상할 책임이 있습니다.

제8조 (면책사항)
① 회사는 정책자금 지원의 승인, 금액, 조건 등에 대해 보증하지 않으며, 상담 결과에 대한 최종 판단은 이용자의 책임입니다.
② 회사는 무료로 제공되는 상담 서비스와 관련하여, 이용자에게 발생한 손해에 대하여 회사의 고의 또는 중대한 과실이 없는 한 책임을 지지 않습니다.
③ 회사는 천재지변, 시스템 장애 등 불가항력적 사유로 서비스를 제공할 수 없는 경우 책임이 면제됩니다.

제9조 (분쟁해결)
① 본 약관과 관련한 분쟁은 대한민국 법률에 따라 해결합니다.
② 서비스 이용과 관련하여 분쟁이 발생한 경우, 회사의 본점 소재지를 관할하는 법원을 전속 관할 법원으로 합니다.

부칙
본 약관은 2026년 2월 28일부터 시행합니다.`

const privacyContent = `【개인정보 수집·이용 동의】

부광솔루션즈(이하 "회사")는 「개인정보 보호법」 제15조 및 제17조에 따라 이용자의 개인정보를 아래와 같이 수집·이용 및 제3자에게 제공하고자 합니다. 내용을 확인하신 후 동의 여부를 결정하여 주시기 바랍니다.

1. 개인정보의 수집·이용 목적
  - 정책자금 무료상담 신청 접수 및 처리
  - 상담 진행을 위한 연락(전화, 문자메시지 등)
  - 이용자에게 적합한 정책자금 상품 및 컨설팅 서비스 안내
  - 서비스 품질 개선 및 통계 분석(비식별 처리)

2. 수집하는 개인정보 항목
  - 필수항목: 이름, 연락처(휴대전화번호), 업체명, 사업자번호, 사업장 지역, 연 매출, 업종

3. 개인정보의 보유 및 이용 기간
  - 수집일로부터 2년간 보유 후 지체 없이 파기합니다.
  - 다만, 관련 법령에 따라 보존이 필요한 경우 해당 법령에서 정한 기간 동안 보관합니다.

4. 개인정보의 제3자 제공
  회사는 이용자의 상담 신청 처리 및 적합한 서비스 연결을 위해 아래와 같이 개인정보를 제3자에게 제공합니다.

  [제공받는 자]
  - 정책자금 컨설팅 업체 (회사와 업무 제휴 관계에 있는 컨설팅 파트너사)
  - 금융기관 및 은행 (정책자금 대출 안내 및 심사 관련)
  - 기타 업무 제휴 파트너사 (정책자금 관련 서비스 제공 업체)

  [제공 항목]
  - 이름, 연락처, 업체명, 사업자번호, 사업장 지역, 연 매출, 업종

  [제공받는 자의 이용 목적]
  - 정책자금 안내, 컨설팅, 대출 심사 및 관련 서비스 제공

  [제공받는 자의 보유·이용 기간]
  - 제공 목적 달성 시까지 또는 제공일로부터 2년 중 먼저 도래하는 시점까지

5. 동의를 거부할 권리 및 거부 시 불이익
  - 이용자는 개인정보 수집·이용 및 제3자 제공에 대한 동의를 거부할 권리가 있습니다.
  - 다만, 필수항목에 대한 동의를 거부하실 경우 정책자금 무료상담 신청이 제한됩니다.

6. 개인정보 처리 위탁
  - 회사는 서비스 운영을 위해 필요한 경우, 개인정보 처리 업무를 외부 전문업체에 위탁할 수 있으며, 위탁 시 관련 법령에 따라 위탁사를 관리·감독합니다.

7. 이용자의 권리
  - 이용자는 언제든지 자신의 개인정보에 대해 열람, 수정, 삭제, 처리정지를 요청할 수 있습니다.
  - 개인정보 관련 문의: 부광솔루션즈 고객센터
  - 동의 철회를 요청하실 경우, 회사는 지체 없이 해당 개인정보를 파기합니다.`

const regionData: Record<string, string[]> = {
  '서울특별시': ['강남구','강동구','강북구','강서구','관악구','광진구','구로구','금천구','노원구','도봉구','동대문구','동작구','마포구','서대문구','서초구','성동구','성북구','송파구','양천구','영등포구','용산구','은평구','종로구','중구','중랑구'],
  '부산광역시': ['강서구','금정구','기장군','남구','동구','동래구','부산진구','북구','사상구','사하구','서구','수영구','연제구','영도구','중구','해운대구'],
  '대구광역시': ['남구','달서구','달성군','동구','북구','서구','수성구','중구','군위군'],
  '인천광역시': ['강화군','계양구','남동구','동구','미추홀구','부평구','서구','연수구','옹진군','중구'],
  '광주광역시': ['광산구','남구','동구','북구','서구'],
  '대전광역시': ['대덕구','동구','서구','유성구','중구'],
  '울산광역시': ['남구','동구','북구','울주군','중구'],
  '세종특별자치시': ['세종시'],
  '경기도': ['가평군','고양시','과천시','광명시','광주시','구리시','군포시','김포시','남양주시','동두천시','부천시','성남시','수원시','시흥시','안산시','안성시','안양시','양주시','양평군','여주시','연천군','오산시','용인시','의왕시','의정부시','이천시','파주시','평택시','포천시','하남시','화성시'],
  '강원도': ['강릉시','고성군','동해시','삼척시','속초시','양구군','양양군','영월군','원주시','인제군','정선군','철원군','춘천시','태백시','평창군','홍천군','화천군','횡성군'],
  '충청북도': ['괴산군','단양군','보은군','영동군','옥천군','음성군','제천시','증평군','진천군','청주시','충주시'],
  '충청남도': ['계룡시','공주시','금산군','논산시','당진시','보령시','부여군','서산시','서천군','아산시','예산군','천안시','청양군','태안군','홍성군'],
  '전라북도': ['고창군','군산시','김제시','남원시','무주군','부안군','순창군','완주군','익산시','임실군','장수군','전주시','정읍시','진안군'],
  '전라남도': ['강진군','고흥군','곡성군','광양시','구례군','나주시','담양군','목포시','무안군','보성군','순천시','신안군','여수시','영광군','영암군','완도군','장성군','장흥군','진도군','함평군','해남군','화순군'],
  '경상북도': ['경산시','경주시','고령군','구미시','김천시','문경시','봉화군','상주시','성주군','안동시','영덕군','영양군','영주시','영천시','예천군','울릉군','울진군','의성군','청도군','청송군','칠곡군','포항시'],
  '경상남도': ['거제시','거창군','고성군','김해시','남해군','밀양시','사천시','산청군','양산시','의령군','진주시','창녕군','창원시','통영시','하동군','함안군','함양군','합천군'],
  '제주특별자치도': ['제주시','서귀포시'],
}

const revenueOptions = [
  '1억 미만', '1억 ~ 5억', '5억 ~ 10억', '10억 ~ 50억', '50억 ~ 100억', '100억 이상',
]

const industryOptions = [
  'IT·소프트웨어', '제조업', '유통·물류', '외식·식품', '건설·부동산',
  '바이오·헬스케어', '환경·에너지', '교육·콘텐츠', '금융·보험', '기타',
]

// TODO: Apps Script 배포 후 아래 URL을 실제 배포 URL로 교체하세요
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxLk0NB4atKJ4nqTtQGgyhbURQeme4EDs6gTTeC-1y-yLRSUczehCB6TdZ4e4ErnZnm/exec'

export default function ContactForm() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [modalContent, setModalContent] = useState<{ title: string; content: string } | null>(null)

  const [form, setForm] = useState({
    name: '',
    phone1: '010',
    phone2: '',
    phone3: '',
    company: '',
    bizNumber: '',
    region: '',
    city: '',
    revenue: '',
    industry: '',
    agreeAll: false,
    agreeTerms: false,
    agreePrivacy: false,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // 제출 완료 시 섹션 상단으로 스크롤 + 폭죽 효과 반복
  useEffect(() => {
    if (!submitted) return

    // 섹션 상단으로 스크롤하여 Thank you 카드가 보이도록
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

    // 초기 빵 터지는 효과
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } })

    // 3초마다 반복 폭죽
    const interval = setInterval(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
      })
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [submitted])

  const handleAgreeAll = (checked: boolean) => {
    setForm(prev => ({
      ...prev,
      agreeAll: checked,
      agreeTerms: checked,
      agreePrivacy: checked,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const payload = {
        name: form.name,
        phone: `${form.phone1}-${form.phone2}-${form.phone3}`,
        company: form.company,
        bizNumber: form.bizNumber,
        region: form.region,
        city: form.city,
        revenue: form.revenue,
        industry: form.industry,
      }

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-28 md:py-24 bg-background overflow-hidden" ref={ref}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 scroll-reveal ${visible ? 'is-visible' : ''}`}>
          <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">
            무료 상담
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-5 leading-snug text-balance">
            정책자금 무료상담 신청
          </h2>
          <p className="text-muted-foreground text-lg leading-loose">
            아래 정보를 입력해주시면
            <br className="hidden sm:block" />
            전문 컨설턴트가
            <br className="block sm:hidden" />
            24시간 이내 연락드립니다.
          </p>
        </div>

        {/* Form */}
        <div
          className={`scroll-reveal ${visible ? 'is-visible' : ''}`}
          style={{ transitionDelay: '200ms' }}
        >
          {submitted ? (
            <div className="relative overflow-hidden bg-card border border-border rounded-2xl p-10 text-center">
              <ShineBorder
                borderWidth={2}
                duration={10}
                shineColor={['#16a34a', '#22c55e', '#4ade80']}
              />
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">상담 신청이 완료되었습니다!</h3>
              <p className="text-muted-foreground">
                24시간 이내 전문 컨설턴트가 연락드리겠습니다.<br />
                감사합니다.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative overflow-hidden bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-5">
              <ShineBorder
                borderWidth={2}
                duration={10}
                shineColor={['#1e40af', '#3b82f6', '#60a5fa']}
              />
              {/* 이름 */}
              <div>
                <input
                  type="text"
                  placeholder="이름(국세 미납업체 신청불가능)"
                  required
                  value={form.name}
                  onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors"
                />
              </div>

              {/* 연락처 */}
              <div className="flex items-center gap-1.5 sm:gap-2 max-w-full">
                <select
                  value={form.phone1}
                  onChange={e => setForm(prev => ({ ...prev, phone1: e.target.value }))}
                  className="h-12 px-2 sm:px-3 rounded-lg border border-border bg-background text-foreground text-sm shrink-0 w-[72px] sm:w-auto focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors"
                >
                  <option value="010">010</option>
                  <option value="011">011</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="018">018</option>
                  <option value="019">019</option>
                </select>
                <span className="text-muted-foreground shrink-0">-</span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="0000"
                  required
                  maxLength={4}
                  value={form.phone2}
                  onChange={e => setForm(prev => ({ ...prev, phone2: e.target.value.replace(/\D/g, '') }))}
                  className="flex-1 min-w-0 h-12 px-3 sm:px-4 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors"
                />
                <span className="text-muted-foreground shrink-0">-</span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="0000"
                  required
                  maxLength={4}
                  value={form.phone3}
                  onChange={e => setForm(prev => ({ ...prev, phone3: e.target.value.replace(/\D/g, '') }))}
                  className="flex-1 min-w-0 h-12 px-3 sm:px-4 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors"
                />
              </div>

              {/* 업체명 */}
              <div>
                <input
                  type="text"
                  placeholder="업체명"
                  required
                  value={form.company}
                  onChange={e => setForm(prev => ({ ...prev, company: e.target.value }))}
                  className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors"
                />
              </div>

              {/* 사업자번호 */}
              <div>
                <input
                  type="text"
                  placeholder="사업자번호(꼭 컨설팅 필요하신분들만 신청)"
                  value={form.bizNumber}
                  onChange={e => setForm(prev => ({ ...prev, bizNumber: e.target.value }))}
                  className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors"
                />
              </div>

              {/* 사업장지역 */}
              <div className="grid grid-cols-2 gap-3">
                <select
                  required
                  value={form.region}
                  onChange={e => setForm(prev => ({ ...prev, region: e.target.value, city: '' }))}
                  className="h-12 px-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors"
                >
                  <option value="">사업장지역</option>
                  {Object.keys(regionData).map(r => <option key={r} value={r}>{r}</option>)}
                </select>
                <select
                  required
                  value={form.city}
                  disabled={!form.region}
                  onChange={e => setForm(prev => ({ ...prev, city: e.target.value }))}
                  className="h-12 px-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">{form.region ? '시/군/구' : '시/도를 먼저 선택'}</option>
                  {form.region && regionData[form.region]?.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              {/* 연 매출 */}
              <div>
                <select
                  required
                  value={form.revenue}
                  onChange={e => setForm(prev => ({ ...prev, revenue: e.target.value }))}
                  className="w-full h-12 px-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors"
                >
                  <option value="">-연 매출 선택-</option>
                  {revenueOptions.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>

              {/* 업종 */}
              <div>
                <select
                  required
                  value={form.industry}
                  onChange={e => setForm(prev => ({ ...prev, industry: e.target.value }))}
                  className="w-full h-12 px-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors"
                >
                  <option value="">-업종 선택-</option>
                  {industryOptions.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>

              {/* 동의 체크박스 */}
              <div className="space-y-3 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.agreeAll}
                    onChange={e => handleAgreeAll(e.target.checked)}
                    className="w-4 h-4 rounded border-border text-brand-blue focus:ring-brand-blue"
                  />
                  <span className="text-sm font-semibold text-foreground">전체 동의(약관/수집)</span>
                </label>
                <div className="ml-6 space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={form.agreeTerms}
                      onChange={e => setForm(prev => ({
                        ...prev,
                        agreeTerms: e.target.checked,
                        agreeAll: e.target.checked && prev.agreePrivacy,
                      }))}
                      className="w-4 h-4 rounded border-border text-brand-blue focus:ring-brand-blue"
                    />
                    <span className="text-sm text-muted-foreground">
                      이용약관 동의 <button type="button" onClick={() => setModalContent({ title: '이용약관', content: termsContent })} className="text-brand-blue hover:underline">[보기]</button>
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={form.agreePrivacy}
                      onChange={e => setForm(prev => ({
                        ...prev,
                        agreePrivacy: e.target.checked,
                        agreeAll: e.target.checked && prev.agreeTerms,
                      }))}
                      className="w-4 h-4 rounded border-border text-brand-blue focus:ring-brand-blue"
                    />
                    <span className="text-sm text-muted-foreground">
                      개인정보 수집·이용 동의 <button type="button" onClick={() => setModalContent({ title: '개인정보 수집·이용 동의', content: privacyContent })} className="text-brand-blue hover:underline">[보기]</button>
                    </span>
                  </label>
                </div>
              </div>

              {/* 제출 버튼 */}
              <RippleButton
                type="submit"
                disabled={submitting}
                rippleColor="#ffffff"
                className="w-full bg-brand-blue hover:bg-brand-blue/90 text-primary-foreground font-bold h-14 text-base mt-4 disabled:opacity-70 rounded-lg"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    전송 중...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    정책자금 무료상담 신청
                  </>
                )}
              </RippleButton>
            </form>
          )}
        </div>
      </div>

      {/* 약관/개인정보 모달 */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setModalContent(null)}>
          <div className="absolute inset-0 bg-black/50" />
          <div
            className="relative bg-card border border-border rounded-2xl w-full max-w-lg max-h-[80vh] flex flex-col shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <h3 className="text-lg font-bold text-foreground">{modalContent.title}</h3>
              <button
                type="button"
                onClick={() => setModalContent(null)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-secondary transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
            <div className="px-6 py-5 overflow-y-auto flex-1">
              <pre className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap font-sans">
                {modalContent.content}
              </pre>
            </div>
            <div className="px-6 py-4 border-t border-border">
              <RippleButton
                type="button"
                onClick={() => setModalContent(null)}
                rippleColor="#ffffff"
                className="w-full bg-brand-blue hover:bg-brand-blue/90 text-primary-foreground font-bold h-11 rounded-lg"
              >
                확인
              </RippleButton>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
