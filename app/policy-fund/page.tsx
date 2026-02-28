'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Building2, Microscope, Lightbulb, Users, Banknote, ArrowRight,
  Phone, FileSearch, FileText, CheckCircle, Handshake,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Building2,
    title: '중소기업 정책자금',
    desc: '중소벤처기업부·신용보증기금·기술보증기금 등을 통한 저금리 운전자금·시설자금 조달을 지원합니다.',
    details: ['운전자금 (최대 10억)', '시설자금 (최대 100억)', '긴급경영안정자금', '소상공인 정책자금'],
  },
  {
    icon: Microscope,
    title: 'R&D 정부과제',
    desc: '산업부·중기부·과기부 R&D 과제를 발굴하고 사업계획서 작성부터 협약까지 전 과정을 대행합니다.',
    details: ['TIPS 프로그램', 'KEIT 산업기술 R&D', '중소기업 기술혁신개발', '창업성장기술개발'],
  },
  {
    icon: Lightbulb,
    title: '창업 지원금',
    desc: '예비·초기창업자 패키지, 청년창업사관학교, 로컬크리에이터 등 창업 단계별 최적 지원사업을 매칭합니다.',
    details: ['예비창업패키지 (최대 1억)', '초기창업패키지 (최대 1억)', '청년창업사관학교', '도약패키지 (최대 3억)'],
  },
  {
    icon: Users,
    title: '고용·인력 지원',
    desc: '청년고용장려금, 일자리 안정자금, 스마트공장 보조금 등 인건비·설비 투자를 지원받을 수 있도록 안내합니다.',
    details: ['청년일자리 도약장려금', '고용촉진장려금', '직업능력개발훈련', '스마트공장 보조금'],
  },
  {
    icon: Banknote,
    title: '수출·글로벌 자금',
    desc: '무역보험공사·수출입은행의 수출금융과 해외진출 지원사업을 통해 글로벌 성장을 가속화합니다.',
    details: ['수출바우처', 'K-스타트업 글로벌', '무역보험 지원', '해외시장 진출 지원'],
  },
]

const steps = [
  { icon: Phone, step: '01', title: '무료 상담 신청', desc: '전화·카카오톡·온라인 폼으로 간단하게 상담을 신청하세요.' },
  { icon: FileSearch, step: '02', title: '기업 진단 및 매칭', desc: '기업 현황을 분석하여 최적 자금을 추천합니다.' },
  { icon: FileText, step: '03', title: '서류 준비 및 신청', desc: '사업계획서, 재무제표 등 서류를 전문가가 작성합니다.' },
  { icon: CheckCircle, step: '04', title: '심사 대응', desc: '추가 요청사항에 실시간 대응하고 진행 상황을 보고합니다.' },
  { icon: Handshake, step: '05', title: '자금 수령 및 사후 관리', desc: '자금 수령 후에도 지속적으로 관리합니다.' },
]

export default function PolicyFundPage() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-background pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-brand-blue-subtle to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">정책자금</p>
          <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-6 leading-snug">
            기업 성장의 모든 단계,<br />
            <span className="text-brand-blue">최적의 자금</span>을 찾아드립니다
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-loose mb-8">
            창업부터 글로벌 진출까지,
            <br className="hidden sm:block" />
            기업 성장 단계에 맞는 정부 정책자금을 전문 컨설턴트가 매칭해드립니다.
          </p>
          <a href="/#contact">
            <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-primary-foreground font-bold px-8 h-12 group">
              무료 상담 신청하기
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </section>

      {/* 서비스 목록 */}
      <section className="py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-8 items-center bg-card border border-border rounded-2xl p-8 transition-all duration-700 hover:shadow-lg hover:border-brand-blue/30 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-blue-subtle flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-3">주요 지원 항목</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-brand-blue shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 프로세스 */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">프로세스</p>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-5 leading-snug">
              신청부터 수령까지 <span className="text-brand-blue">5단계</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={step.step} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-card border-2 border-border flex flex-col items-center justify-center mb-4 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-brand-blue-subtle flex items-center justify-center mb-1">
                    <step.icon className="w-4 h-4 text-brand-blue" />
                  </div>
                  <span className="text-[10px] font-black text-brand-blue">STEP {step.step}</span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
