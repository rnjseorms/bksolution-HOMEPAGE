'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const categories = ['전체', '서비스 일반', '비용·요금', '신청·절차', '인증 관련']

const faqs = [
  {
    category: '서비스 일반',
    q: '부광솔루션즈는 어떤 서비스를 제공하나요?',
    a: '정책자금 컨설팅(중소기업 정책자금, R&D 정부과제, 창업 지원금, 고용·인력 지원, 수출·글로벌 자금)과 기업인증 지원(벤처인증, 이노비즈, 메인비즈, ISO 등) 서비스를 제공합니다.',
  },
  {
    category: '서비스 일반',
    q: '모든 업종·규모의 기업이 신청할 수 있나요?',
    a: '네, 소기업·중기업·스타트업 모두 지원 가능합니다. 다만 업종, 매출, 설립 연도 등 기업 상황에 따라 받을 수 있는 자금의 종류와 한도가 달라질 수 있습니다. 무료 기업 진단을 통해 정확히 확인해 드립니다.',
  },
  {
    category: '서비스 일반',
    q: '온라인으로만 진행할 수 있나요?',
    a: '네, 전 과정이 온라인으로 진행 가능합니다. 카카오톡, 화상회의, 이메일을 통해 전국 어디서나 편리하게 서비스를 이용하실 수 있습니다. 필요 시 오프라인 미팅도 가능합니다.',
  },
  {
    category: '서비스 일반',
    q: '자금 수령 이후에도 지원이 계속되나요?',
    a: '네, 자금 수령 이후에도 약정 이행, 실적 보고, 추가 자금 발굴 등 사후 관리 서비스를 제공합니다. 엔터프라이즈 플랜의 경우 분기별 자금 전략 보고서와 전담 계정관리자가 배정됩니다.',
  },
  {
    category: '비용·요금',
    q: '정책자금 컨설팅 비용은 얼마인가요?',
    a: '스탠다드 플랜의 경우 성공 보수 방식으로, 자금이 승인된 이후 계약서상 약정한 자문료를 받습니다. 자금 승인이 안 되면 비용이 발생하지 않습니다. 무료 상담 신청 후 상세 안내를 받으실 수 있습니다.',
  },
  {
    category: '비용·요금',
    q: '스타터 플랜은 정말 무료인가요?',
    a: '네, 기업 진단 1회와 지원 가능 자금 목록 제공까지 완전 무료입니다. 이후 서비스를 원하실 경우에만 유료 플랜을 선택하시면 됩니다.',
  },
  {
    category: '비용·요금',
    q: '추가 비용이 발생하는 경우가 있나요?',
    a: '스탠다드 플랜의 경우 성공 보수 외 추가 비용은 없습니다. 엔터프라이즈 플랜은 월정액으로, 계약 시 확정된 금액 외에 추가 비용이 발생하지 않습니다.',
  },
  {
    category: '신청·절차',
    q: '자금 승인까지 얼마나 걸리나요?',
    a: '정책자금 종류에 따라 다르지만, 평균적으로 14~30일 내에 결과를 받아보실 수 있습니다. 긴급경영안정자금 등 일부 상품은 5~7일 이내 신속 처리도 가능합니다.',
  },
  {
    category: '신청·절차',
    q: '혼자 신청했다가 탈락한 경우에도 재신청이 가능한가요?',
    a: '대부분의 경우 재신청이 가능합니다. 이전 탈락 사유를 분석하고 사업계획서와 서류를 보완하면 승인 가능성을 크게 높일 수 있습니다. 많은 고객사가 재신청을 통해 자금을 받으셨습니다.',
  },
  {
    category: '신청·절차',
    q: '상담 신청 후 어떤 절차로 진행되나요?',
    a: '상담 신청 → 기업 진단 및 자금 매칭 → 사업계획서·서류 작성 → 심사 대응 → 자금 수령 및 사후관리 순서로 진행됩니다. 각 단계마다 전담 컨설턴트가 밀착 지원합니다.',
  },
  {
    category: '인증 관련',
    q: '벤처인증과 이노비즈 인증의 차이는 무엇인가요?',
    a: '벤처인증은 기술성·사업성이 우수한 기업에, 이노비즈 인증은 기술혁신 역량이 우수한 기업(업력 3년 이상)에 부여됩니다. 벤처인증이 세제혜택이 더 크고, 이노비즈는 정책자금·공공입찰 우대에 강점이 있습니다.',
  },
  {
    category: '인증 관련',
    q: '인증 취득까지 얼마나 걸리나요?',
    a: '인증 종류에 따라 다르지만, 벤처인증은 약 2~4주, 이노비즈·메인비즈 인증은 약 4~8주 정도 소요됩니다. 서류 준비 상태에 따라 달라질 수 있습니다.',
  },
  {
    category: '인증 관련',
    q: '인증이 만료되면 갱신이 필요한가요?',
    a: '네, 벤처인증은 2년, 이노비즈·메인비즈 인증은 3년 유효기간이 있으며, 만료 전 갱신 신청이 필요합니다. 저희가 갱신 시기를 사전에 안내해 드리고 절차를 지원합니다.',
  },
]

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체')
  const [openIdx, setOpenIdx] = useState<number | null>(null)
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

  const filteredFaqs = selectedCategory === '전체'
    ? faqs
    : faqs.filter((f) => f.category === selectedCategory)

  return (
    <main className="min-h-screen bg-background pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-brand-blue-subtle to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">FAQ</p>
          <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
            자주 묻는 질문
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-loose">
            궁금하신 점이 있으시면 아래에서 답변을 찾아보세요.
            <br />
            원하는 답변이 없다면 무료 상담을 신청해주세요.
          </p>
        </div>
      </section>

      {/* FAQ 카테고리 + 아코디언 */}
      <section className="py-20" ref={ref}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 카테고리 필터 */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setSelectedCategory(cat); setOpenIdx(null) }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-blue text-white'
                    : 'bg-card border border-border text-muted-foreground hover:border-brand-blue/30 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 아코디언 */}
          <div
            className={`flex flex-col gap-3 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {filteredFaqs.map((faq, i) => (
              <div
                key={`${faq.category}-${i}`}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  openIdx === i
                    ? 'border-brand-blue/50 bg-brand-blue-subtle'
                    : 'border-border bg-card hover:border-brand-blue/30'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  aria-expanded={openIdx === i}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-brand-blue bg-brand-blue-subtle px-2 py-0.5 rounded-full shrink-0">
                      {faq.category}
                    </span>
                    <span className={`font-semibold text-sm leading-relaxed ${openIdx === i ? 'text-brand-blue' : 'text-foreground'}`}>
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      openIdx === i ? 'rotate-180 text-brand-blue' : 'text-muted-foreground'
                    }`}
                  />
                </button>
                {openIdx === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-muted-foreground leading-relaxed ml-[calc(theme(spacing.3)+theme(spacing.2)+theme(spacing.4))]">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <p className="text-center text-muted-foreground py-8">해당 카테고리에 질문이 없습니다.</p>
          )}
        </div>
      </section>

    </main>
  )
}
