'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { BarChart3, Users2, Trophy, Zap } from 'lucide-react'

function CountUp({
  target,
  prefix = '',
  suffix = '',
  duration = 2000,
  started,
}: {
  target: number
  prefix?: string
  suffix?: string
  duration?: number
  started: boolean
}) {
  const [count, setCount] = useState(0)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    if (!started) return

    const startTime = performance.now()

    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // easeOutExpo for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(eased * target)
      setCount(current)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [started, target, duration])

  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  {
    icon: BarChart3,
    target: 342,
    prefix: '',
    suffix: '억',
    label: '누적 지원 금액',
    desc: '2026년 설립 이래 누적',
  },
  {
    icon: Users2,
    target: 1400,
    prefix: '',
    suffix: '+',
    label: '고객사 수',
    desc: '전국 중소기업·스타트업',
  },
  {
    icon: Trophy,
    target: 96,
    prefix: '',
    suffix: '%',
    label: '자금 승인율',
    desc: '업계 평균 대비 2배',
  },
  {
    icon: Zap,
    target: 20,
    prefix: '평균 ',
    suffix: '일',
    label: '처리 기간',
    desc: '신청에서 승인까지',
  },
]

const partners = [
  '중소벤처기업부', '신용보증기금', '기술보증기금',
  '산업기술평가관리원', '한국산업은행', '중소기업진흥공단',
  'TIPS운영사', '한국수출입은행',
]

export default function StatsSection() {
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
    <section id="stats" className="py-16 md:py-24 bg-secondary/30 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 scroll-reveal ${visible ? 'is-visible' : ''}`}>
          <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">실적</p>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4 text-balance">
            숫자로 증명하는
            <br />
            <span className="text-brand-blue">압도적인 실력</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            말이 아닌 실제 성과로
            <br className="block sm:hidden" />
            신뢰를 드립니다.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`bg-card border border-border rounded-2xl p-6 text-center hover:border-brand-blue/30 hover:shadow-lg transition-shadow scroll-reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-brand-blue-subtle flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-5 h-5 text-brand-blue" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-foreground mb-1 tabular-nums">
                <CountUp
                  target={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2000}
                  started={visible}
                />
              </p>
              <p className="text-sm font-semibold text-foreground mb-1">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div
          className={`scroll-reveal ${visible ? 'is-visible' : ''}`}
          style={{ transitionDelay: '500ms' }}
        >
          <p className="text-center text-xs text-muted-foreground font-semibold uppercase tracking-widest mb-6">
            협력 기관
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {partners.map((p) => (
              <span
                key={p}
                className="bg-card border border-border text-muted-foreground text-sm font-medium px-4 py-2 rounded-full hover:border-brand-blue/30 hover:text-foreground transition-colors cursor-default"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
