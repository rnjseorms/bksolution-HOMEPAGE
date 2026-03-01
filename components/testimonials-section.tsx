'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: '김지훈 대표',
    company: '(주)테크스타트',
    industry: 'AI 스타트업',
    amount: '₩3.2억 지원',
    content:
      '사업 초기에 자금이 부족해 고민이 많았는데, 펀딩브릿지 덕분에 3.2억 원의 R&D 과제에 선정될 수 있었습니다. 사업계획서 작성부터 심사 대응까지 전문가답게 도와주셔서 정말 감사합니다.',
    rating: 5,
  },
  {
    name: '이수진 대표',
    company: '대한제조(주)',
    industry: '제조업',
    amount: '₩5.0억 지원',
    content:
      '기존에 혼자 신청했을 때는 계속 탈락했는데, 펀딩브릿지와 함께하니 처음 신청에 바로 5억 원 시설자금을 받았습니다. 서류 하나하나 꼼꼼히 챙겨주시는 모습이 정말 믿음직스럽습니다.',
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

export default function TestimonialsSection() {
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
    <section className="py-28 md:py-24 bg-secondary/30 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 scroll-reveal ${visible ? 'is-visible' : ''}`}>
          <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">
            고객 후기
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-5 leading-snug text-balance">
            실제 고객사의
            <br />생생한 성공 스토리
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-loose">
            1,400+ 기업이 선택한 이유를
            <br className="block sm:hidden" />
            직접 들어보세요.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-brand-blue/20 transition-shadow scroll-reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
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
                <div className="text-right">
                  <span className="inline-block bg-brand-blue-subtle text-brand-blue text-xs font-bold px-3 py-1 rounded-full">
                    {t.amount}
                  </span>
                </div>
              </div>

              <div className="relative">
                <Quote className="w-6 h-6 text-brand-blue/20 absolute -top-1 -left-1" />
                <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                  {t.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
