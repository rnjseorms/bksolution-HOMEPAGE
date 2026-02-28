'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, TrendingUp, Shield, Clock, CheckCircle2 } from 'lucide-react'
import { RippleButton } from '@/components/ui/ripple-button'

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [started, target])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

const floatingCards = [
  {
    icon: TrendingUp,
    title: '승인 완료',
    value: '₩2.3억',
    sub: '중소기업 운전자금',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    delay: 'animation-delay-0',
    className: 'animate-float',
  },
  {
    icon: Shield,
    title: '지원 확정',
    value: '₩1.5억',
    sub: 'R&D 과제 선정',
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/10',
    delay: '',
    className: 'animate-float-delayed',
  },
  {
    icon: Clock,
    title: '처리 기간',
    value: '평균 14일',
    sub: '신속 심사 완료',
    color: 'text-brand-gold',
    bg: 'bg-brand-gold/10',
    delay: '',
    className: 'animate-float',
  },
]

const typingLines = [
  { text: '정책자금,', className: 'text-foreground' },
  { text: '빠르고 확실하게', className: 'text-brand-blue' },
  { text: '받아드립니다', className: 'text-foreground' },
]

function TypingHeading({ start }: { start: boolean }) {
  const [charIndex, setCharIndex] = useState(0)
  const [lineIndex, setLineIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!start || done) return

    const currentLine = typingLines[lineIndex]
    if (!currentLine) {
      setDone(true)
      return
    }

    if (charIndex < currentLine.text.length) {
      const timer = setTimeout(() => setCharIndex((c) => c + 1), 80)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      setLineIndex((l) => l + 1)
      setCharIndex(0)
    }, 300)
    return () => clearTimeout(timer)
  }, [start, charIndex, lineIndex, done])

  return (
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-snug mb-6">
      {typingLines.map((line, li) => {
        const isCurrentLine = li === lineIndex
        const isPastLine = li < lineIndex
        const visibleText = isPastLine
          ? line.text
          : isCurrentLine
          ? line.text.slice(0, charIndex)
          : ''

        return (
          <span key={li} className="block">
            <span className={line.className}>
              {visibleText}
              {isCurrentLine && !done && (
                <span className="inline-block w-[3px] h-[0.85em] bg-brand-blue ml-0.5 align-middle animate-cursor-blink" />
              )}
            </span>
            {li === typingLines.length - 1 && done && (
              <span className="inline-block w-[3px] h-[0.85em] bg-brand-blue ml-0.5 align-middle animate-cursor-blink" />
            )}
          </span>
        )
      })}
    </h1>
  )
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid opacity-50" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(600px,100vw)] h-[min(600px,100vw)] rounded-full bg-brand-blue/10 blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[min(400px,80vw)] h-[min(400px,80vw)] rounded-full bg-brand-gold/5 blur-[100px] animate-pulse-glow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`scroll-reveal ${visible ? 'is-visible' : ''}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-blue-subtle text-brand-blue px-3 py-1.5 rounded-full text-xs font-semibold mb-6 border border-brand-blue/20">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
              2026년 정책자금 지원 1,200억 달성
            </div>

            {/* Heading — 타이핑 모션 */}
            <TypingHeading start={visible} />

            <p className="text-lg text-muted-foreground leading-loose mb-8 max-w-lg">
              중소기업·스타트업의 성장을 막는 자금 장벽을 허물어 드립니다.
              <br className="hidden sm:block" />
              정부 지원금부터 저금리 정책 대출까지,
              <br className="hidden sm:block" />
              전문 컨설턴트가 처음부터 끝까지 함께합니다.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#contact">
                <RippleButton
                  rippleColor="#ffffff"
                  className="bg-brand-blue hover:bg-brand-blue/90 text-primary-foreground font-bold px-6 text-base h-12 rounded-lg group"
                >
                  무료 상담 신청하기
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </RippleButton>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { text: '승인율 94.2%', icon: CheckCircle2 },
                { text: '전문 컨설턴트 50+', icon: CheckCircle2 },
                { text: '누적 고객사 3,200+', icon: CheckCircle2 },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <item.icon className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Floating Cards */}
          <div
            className={`relative hidden lg:flex items-center justify-center h-[500px] scroll-reveal ${visible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '300ms' }}
          >
            {/* Central dashboard mockup */}
            <div className="relative w-80 bg-card border border-border rounded-2xl shadow-2xl p-5 z-10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-muted-foreground font-medium">이번 달 지원 현황</p>
                  <p className="text-2xl font-black text-foreground mt-0.5">
                    <CountUp target={12400000000} suffix="원" />
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-brand-blue" />
                </div>
              </div>

              {/* Mini bar chart */}
              <div className="flex items-end gap-1 h-16 mb-3">
                {[40, 65, 45, 80, 60, 90, 75, 95, 70, 100, 85, 92].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all"
                    style={{
                      height: `${h}%`,
                      background: i === 11
                        ? 'var(--brand-blue)'
                        : i >= 9
                        ? 'oklch(from var(--brand-blue) l c h / 0.5)'
                        : 'var(--border)',
                    }}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>1월</span>
                <span className="text-green-500 font-semibold">+23.4% ↑</span>
                <span>12월</span>
              </div>

              {/* Divider */}
              <div className="border-t border-border my-4" />

              {/* Recent items */}
              {[
                { name: '(주)테크스타트', amount: '₩3.2억', status: '승인', color: 'text-green-500 bg-green-500/10' },
                { name: '대한제조(주)', amount: '₩1.8억', status: '검토중', color: 'text-brand-gold bg-brand-gold/10' },
                { name: '미래솔루션(주)', amount: '₩5.0억', status: '신청완료', color: 'text-brand-blue bg-brand-blue/10' },
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between py-1.5">
                  <div>
                    <p className="text-xs font-semibold text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.amount}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.color}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Floating cards */}
            {floatingCards.map((card, i) => {
              const positions = [
                'absolute -top-4 -right-8',
                'absolute bottom-8 -left-10',
                'absolute top-1/2 -right-12 -translate-y-1/2',
              ]
              return (
                <div
                  key={i}
                  className={`${positions[i]} ${card.className} bg-card border border-border rounded-xl shadow-lg p-3 w-44 z-20`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-7 h-7 rounded-lg ${card.bg} flex items-center justify-center`}>
                      <card.icon className={`w-3.5 h-3.5 ${card.color}`} />
                    </div>
                    <p className="text-[11px] font-semibold text-muted-foreground">{card.title}</p>
                  </div>
                  <p className="text-base font-black text-foreground">{card.value}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{card.sub}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats bar */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-10 scroll-reveal ${visible ? 'is-visible' : ''}`}
          style={{ transitionDelay: '500ms' }}
        >
          {[
            { label: '누적 지원 금액', value: 1200, suffix: '억+', unit: '' },
            { label: '고객사 수', value: 3200, suffix: '+', unit: '' },
            { label: '평균 승인율', value: 94, suffix: '%', unit: '' },
            { label: '평균 처리 기간', value: 14, suffix: '일', unit: '' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-black text-foreground">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
