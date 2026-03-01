'use client'

import { useEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'
import { RippleButton } from '@/components/ui/ripple-button'

const plans = [
  {
    name: '스타터',
    price: '무료',
    period: '',
    desc: '자금 가능성을 먼저 확인해보세요',
    features: [
      '기업 진단 및 자금 매칭 (1회)',
      '지원 가능 목록 제공',
      '이메일 상담',
      '기본 FAQ 제공',
    ],
    cta: '무료로 시작',
    highlight: false,
  },
  {
    name: '스탠다드',
    price: '성공 보수',
    period: '',
    desc: '가장 많이 선택하는 합리적인 플랜',
    features: [
      '기업 진단 무제한',
      '사업계획서 작성 대행',
      '서류 준비 및 제출 대행',
      '심사 모니터링',
      '전담 컨설턴트 1:1 배정',
      '카카오톡 실시간 소통',
    ],
    cta: '상담 신청하기',
    highlight: true,
  },
  {
    name: '엔터프라이즈',
    price: '월정액',
    period: '맞춤 견적',
    desc: '지속적인 자금 전략이 필요한 기업',
    features: [
      '스탠다드 플랜 전체 포함',
      '분기별 자금 전략 보고서',
      '벤처·이노비즈 인증 지원',
      'IR 자료 작성 지원',
      '전략 컨설팅 무제한',
      '전용 계정 관리자',
    ],
    cta: '견적 문의하기',
    highlight: false,
  },
]

export default function PricingSection() {
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
    <section id="pricing" className="py-28 md:py-24 bg-background overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 scroll-reveal ${visible ? 'is-visible' : ''}`}>
          <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">
            요금제
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-5 leading-snug text-balance">
            투명하고 합리적인
            <br />성과 기반 수수료
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-loose">
            승인이 안 되면
            <br className="block sm:hidden" />
            비용이 없습니다.
            <br className="hidden sm:block" />
            진짜 결과로만 증명합니다.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-7 flex flex-col scroll-reveal ${visible ? 'is-visible' : ''} ${
                plan.highlight
                  ? 'bg-brand-blue border-brand-blue ring-4 ring-brand-blue/20 scale-105'
                  : 'bg-card border-border hover:border-brand-blue/30 hover:shadow-lg'
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-gold text-foreground text-xs font-black px-4 py-1 rounded-full whitespace-nowrap">
                  가장 인기
                </div>
              )}

              <div className="mb-6">
                <p
                  className={`text-xs font-bold uppercase tracking-widest mb-1 ${
                    plan.highlight ? 'text-white/70' : 'text-brand-blue'
                  }`}
                >
                  {plan.name}
                </p>
                <p className={`text-3xl font-black ${plan.highlight ? 'text-white' : 'text-foreground'}`}>
                  {plan.price}
                </p>
                {plan.period && (
                  <p className={`text-sm mt-1 ${plan.highlight ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {plan.period}
                  </p>
                )}
                <p className={`text-sm mt-3 ${plan.highlight ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {plan.desc}
                </p>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        plan.highlight ? 'text-white' : 'text-brand-blue'
                      }`}
                    />
                    <span
                      className={`text-sm leading-relaxed ${
                        plan.highlight ? 'text-white/90' : 'text-foreground'
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <RippleButton
                rippleColor={plan.highlight ? 'oklch(0.45 0.18 250)' : '#ffffff'}
                className={`w-full font-bold h-11 rounded-lg ${
                  plan.highlight
                    ? 'bg-white text-brand-blue hover:bg-white/90'
                    : 'bg-brand-blue hover:bg-brand-blue/90 text-primary-foreground'
                }`}
              >
                {plan.cta}
              </RippleButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
