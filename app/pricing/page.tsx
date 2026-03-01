'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, Star, Quote, ArrowRight, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
    notIncluded: [
      '사업계획서 작성 대행',
      '전담 컨설턴트 배정',
      '심사 모니터링',
    ],
    cta: '무료로 시작',
    highlight: false,
  },
  {
    name: '스탠다드',
    price: '성공 보수',
    period: '승인 금액의 3~5%',
    desc: '가장 많이 선택하는 합리적인 플랜',
    features: [
      '기업 진단 무제한',
      '사업계획서 작성 대행',
      '서류 준비 및 제출 대행',
      '심사 모니터링',
      '전담 컨설턴트 1:1 배정',
      '카카오톡 실시간 소통',
    ],
    notIncluded: [
      '분기별 자금 전략 보고서',
      '벤처·이노비즈 인증 지원',
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
    notIncluded: [],
    cta: '견적 문의하기',
    highlight: false,
  },
]

const testimonials = [
  {
    name: '김지훈 대표',
    company: '(주)테크스타트',
    industry: 'AI 스타트업',
    amount: '₩3.2억 지원',
    content:
      '사업 초기에 자금이 부족해 고민이 많았는데, 부광솔루션즈 덕분에 3.2억 원의 R&D 과제에 선정될 수 있었습니다. 사업계획서 작성부터 심사 대응까지 전문가답게 도와주셔서 정말 감사합니다.',
    rating: 5,
  },
  {
    name: '이수진 대표',
    company: '대한제조(주)',
    industry: '제조업',
    amount: '₩5.0억 지원',
    content:
      '기존에 혼자 신청했을 때는 계속 탈락했는데, 부광솔루션즈와 함께하니 처음 신청에 바로 5억 원 시설자금을 받았습니다. 서류 하나하나 꼼꼼히 챙겨주시는 모습이 정말 믿음직스럽습니다.',
    rating: 5,
  },
  {
    name: '박민준 대표',
    company: '미래푸드(주)',
    industry: '외식·식품업',
    amount: '₩1.8억 지원',
    content:
      '정책자금이 있다는 건 알았지만 어디서 시작해야 할지 몰랐습니다. 무료 상담 한 번으로 우리 기업에 맞는 자금을 정확히 알려주시고, 20일 만에 승인까지 받았습니다. 추천합니다!',
    rating: 5,
  },
  {
    name: '정유나 대표',
    company: '클린테크(주)',
    industry: '환경·에너지',
    amount: '₩8.5억 지원',
    content:
      '엔터프라이즈 플랜으로 계약하고 분기마다 자금 전략 보고서를 받으니 자금 계획이 훨씬 체계적이 됐습니다. 벤처인증과 이노비즈 인증도 함께 취득해 금융 우대 혜택도 누리고 있습니다.',
    rating: 5,
  },
]

const pricingFaq = [
  { q: '성공 보수란 무엇인가요?', a: '자금이 승인된 이후에만 비용이 발생하는 방식입니다. 승인되지 않으면 비용이 전혀 없습니다.' },
  { q: '스타터 플랜은 정말 무료인가요?', a: '네, 기업 진단 1회와 지원 가능 자금 목록 제공까지 완전 무료입니다. 이후 서비스를 원하실 경우에만 유료 플랜을 선택하시면 됩니다.' },
  { q: '엔터프라이즈 월정액은 얼마인가요?', a: '기업 규모, 필요 서비스 범위에 따라 맞춤 견적을 드립니다. 무료 상담을 통해 정확한 금액을 안내받으실 수 있습니다.' },
  { q: '중도 해지가 가능한가요?', a: '네, 별도의 위약금 없이 언제든 해지 가능합니다. 진행 중인 건에 대해서만 정산이 이루어집니다.' },
]

export default function PricingPage() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null)

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
          <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">요금제</p>
          <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-6 leading-snug">
            투명하고 합리적인<br />
            <span className="text-brand-blue">성과 기반 수수료</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-loose">
            승인이 안 되면 비용이 없습니다.
            <br className="hidden sm:block" />
            진짜 결과로만 증명합니다.
          </p>
        </div>
      </section>

      {/* 요금제 카드 */}
      <section className="py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-7 flex flex-col transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${
                  plan.highlight
                    ? 'bg-brand-blue border-brand-blue ring-4 ring-brand-blue/20 scale-105'
                    : 'bg-card border-border hover:border-brand-blue/30 hover:shadow-lg'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-gold text-foreground text-xs font-black px-4 py-1 rounded-full whitespace-nowrap">
                    가장 인기
                  </div>
                )}

                <div className="mb-6">
                  <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.highlight ? 'text-white/70' : 'text-brand-blue'}`}>
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

                <ul className="flex flex-col gap-3 mb-4 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-white' : 'text-brand-blue'}`} />
                      <span className={`text-sm leading-relaxed ${plan.highlight ? 'text-white/90' : 'text-foreground'}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                  {plan.notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 opacity-40">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-white' : 'text-muted-foreground'}`} />
                      <span className={`text-sm leading-relaxed line-through ${plan.highlight ? 'text-white/60' : 'text-muted-foreground'}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a href="/#contact">
                  <Button
                    className={`w-full font-bold h-11 ${
                      plan.highlight
                        ? 'bg-white text-brand-blue hover:bg-white/90'
                        : 'bg-brand-blue hover:bg-brand-blue/90 text-primary-foreground'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 고객 후기 */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">고객 후기</p>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-5 leading-snug">
              실제 고객사의 <span className="text-brand-blue">생생한 성공 스토리</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-loose">
              1,400+ 기업이 선택한 이유를 직접 들어보세요.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-brand-blue/20 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                      ))}
                    </div>
                    <p className="font-black text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.company} · {t.industry}
                    </p>
                  </div>
                  <span className="inline-block bg-brand-blue-subtle text-brand-blue text-xs font-bold px-3 py-1 rounded-full">
                    {t.amount}
                  </span>
                </div>
                <div className="relative">
                  <Quote className="w-6 h-6 text-brand-blue/20 absolute -top-1 -left-1" />
                  <p className="text-sm text-muted-foreground leading-relaxed pl-4">{t.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 요금제 FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">요금 FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-5 leading-snug">
              요금제 관련 <span className="text-brand-blue">자주 묻는 질문</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {pricingFaq.map((faq, i) => (
              <div
                key={i}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  openFaqIdx === i
                    ? 'border-brand-blue/50 bg-brand-blue-subtle'
                    : 'border-border bg-card hover:border-brand-blue/30'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenFaqIdx(openFaqIdx === i ? null : i)}
                  aria-expanded={openFaqIdx === i}
                >
                  <span className={`font-semibold text-sm leading-relaxed ${openFaqIdx === i ? 'text-brand-blue' : 'text-foreground'}`}>
                    {faq.q}
                  </span>
                  <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${openFaqIdx === i ? 'text-brand-blue' : 'text-muted-foreground'}`} />
                </button>
                {openFaqIdx === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
