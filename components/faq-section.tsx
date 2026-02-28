'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: '정책자금 컨설팅 비용은 얼마인가요?',
    a: '스탠다드 플랜의 경우 성공 보수 방식으로, 자금이 승인된 이후 계약서상 약정한 자문료를 받습니다. 자금 승인이 안 되면 비용이 발생하지 않습니다. 무료 상담 신청 후 상세 안내를 받으실 수 있습니다.',
  },
  {
    q: '모든 업종·규모의 기업이 신청할 수 있나요?',
    a: '네, 소기업·중기업·스타트업 모두 지원 가능합니다. 다만 업종, 매출, 설립 연도 등 기업 상황에 따라 받을 수 있는 자금의 종류와 한도가 달라질 수 있습니다. 무료 기업 진단을 통해 정확히 확인해 드립니다.',
  },
  {
    q: '자금 승인까지 얼마나 걸리나요?',
    a: '정책자금 종류에 따라 다르지만, 평균적으로 14~30일 내에 결과를 받아보실 수 있습니다. 긴급경영안정자금 등 일부 상품은 5~7일 이내 신속 처리도 가능합니다.',
  },
  {
    q: '혼자 신청했다가 탈락한 경우에도 재신청이 가능한가요?',
    a: '대부분의 경우 재신청이 가능합니다. 이전 탈락 사유를 분석하고 사업계획서와 서류를 보완하면 승인 가능성을 크게 높일 수 있습니다. 많은 고객사가 재신청을 통해 자금을 받으셨습니다.',
  },
  {
    q: '자금 수령 이후에도 지원이 계속되나요?',
    a: '네, 자금 수령 이후에도 약정 이행, 실적 보고, 추가 자금 발굴 등 사후 관리 서비스를 제공합니다. 엔터프라이즈 플랜의 경우 분기별 자금 전략 보고서와 전담 계정관리자가 배정됩니다.',
  },
  {
    q: '온라인으로만 진행할 수 있나요?',
    a: '네, 전 과정이 온라인으로 진행 가능합니다. 카카오톡, 화상회의, 이메일을 통해 전국 어디서나 편리하게 서비스를 이용하실 수 있습니다. 필요 시 오프라인 미팅도 가능합니다.',
  },
]

export default function FaqSection() {
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

  return (
    <section id="faq" className="py-28 md:py-24 bg-secondary/30 overflow-hidden" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 scroll-reveal ${visible ? 'is-visible' : ''}`}>
          <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4 text-balance">
            자주 묻는 질문
          </h2>
          <p className="text-muted-foreground text-lg leading-loose">
            궁금하신 점이 있으시면
            <br className="hidden sm:block" />
            언제든지 무료 상담을 신청해주세요.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border overflow-hidden scroll-reveal ${visible ? 'is-visible' : ''} ${
                openIdx === i
                  ? 'border-brand-blue/50 bg-brand-blue-subtle'
                  : 'border-border bg-card hover:border-brand-blue/30'
              }`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
              >
                <span
                  className={`font-semibold text-sm leading-relaxed ${
                    openIdx === i ? 'text-brand-blue' : 'text-foreground'
                  }`}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                    openIdx === i ? 'rotate-180 text-brand-blue' : 'text-muted-foreground'
                  }`}
                />
              </button>
              {openIdx === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
