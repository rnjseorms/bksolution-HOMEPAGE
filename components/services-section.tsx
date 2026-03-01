'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import {
  Building2, Microscope, Lightbulb, Users, Banknote, Award
} from 'lucide-react'

const services = [
  {
    icon: Microscope,
    title: 'R&D 정부과제',
    desc: '산업부·중기부·과기부 R&D 과제를 발굴하고 사업계획서 작성부터 협약까지 전 과정을 대행합니다.',
    tags: ['TIPS', 'KEIT', '중소기업청'],
    highlight: false,
  },
  {
    icon: Building2,
    title: '중소기업 정책자금',
    desc: '중소벤처기업부·신용보증기금·기술보증기금 등을 통한 저금리 운전자금·시설자금 조달을 지원합니다.',
    tags: ['운전자금', '시설자금', '긴급경영안정'],
    highlight: true,
  },
  {
    icon: Lightbulb,
    title: '창업 지원금',
    desc: '예비·초기창업자 패키지, 청년창업사관학교, 로컬크리에이터 등 창업 단계별 최적 지원사업을 매칭합니다.',
    tags: ['창업패키지', '청년창업', 'TIPS'],
    highlight: false,
  },
  {
    icon: Users,
    title: '고용·인력 지원',
    desc: '청년고용장려금, 일자리 안정자금, 스마트공장 보조금 등 인건비·설비 투자를 지원받을 수 있도록 안내합니다.',
    tags: ['고용장려금', '청년일자리', '스마트공장'],
    highlight: false,
  },
  {
    icon: Banknote,
    title: '수출·글로벌 자금',
    desc: '무역보험공사·수출입은행의 수출금융과 해외진출 지원사업을 통해 글로벌 성장을 가속화합니다.',
    tags: ['K-스타트업', '수출바우처', '해외진출'],
    highlight: false,
  },
  {
    icon: Award,
    title: '벤처인증·인증지원',
    desc: '벤처기업·이노비즈·메인비즈 인증 취득으로 각종 세제혜택과 금융 우대를 누릴 수 있도록 지원합니다.',
    tags: ['벤처인증', '이노비즈', '메인비즈'],
    highlight: false,
  },
]

function ServiceCard({
  service,
  i,
  visible,
  className = '',
}: {
  service: (typeof services)[number]
  i: number
  visible: boolean
  className?: string
}) {
  return (
    <div
      className={`group relative rounded-2xl border p-6 cursor-pointer scroll-reveal ${visible ? 'is-visible' : ''} ${
        service.highlight
          ? 'bg-brand-blue border-brand-blue text-white'
          : 'bg-card border-border hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5'
      } ${className}`}
      style={{ transitionDelay: `${200 + i * 80}ms` }}
    >
      {service.highlight && (
        <div className="absolute top-3 right-3 bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          인기
        </div>
      )}

      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
          service.highlight ? 'bg-white/20' : 'bg-brand-blue-subtle'
        }`}
      >
        <service.icon
          className={`w-5 h-5 ${service.highlight ? 'text-white' : 'text-brand-blue'}`}
        />
      </div>

      <h3
        className={`text-lg font-bold mb-2 ${
          service.highlight ? 'text-white' : 'text-foreground'
        }`}
      >
        {service.title}
      </h3>

      <p
        className={`text-sm leading-relaxed mb-4 ${
          service.highlight ? 'text-white/80' : 'text-muted-foreground'
        }`}
      >
        {service.desc}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
              service.highlight
                ? 'bg-white/20 text-white'
                : 'bg-brand-blue-subtle text-brand-blue'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const userInteractedRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Track active slide from scroll position (center-based)
  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const centerX = el.scrollLeft + el.clientWidth / 2
    let closest = 0
    let minDist = Infinity
    const children = el.children
    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement
      const childCenter = child.offsetLeft + child.offsetWidth / 2
      const dist = Math.abs(centerX - childCenter)
      if (dist < minDist) {
        minDist = dist
        closest = i
      }
    }
    setActiveIndex(closest)
  }, [])

  // Auto-play for mobile
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const isMobile = window.matchMedia('(max-width: 767px)').matches
    if (!isMobile) return

    let currentIdx = 0
    const scrollToCenter = (index: number) => {
      const child = el.children[index] as HTMLElement
      if (!child) return
      const scrollLeft = child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2
      el.scrollTo({ left: scrollLeft, behavior: 'smooth' })
    }

    const startAutoPlay = () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
      autoPlayRef.current = setInterval(() => {
        if (userInteractedRef.current) return
        currentIdx = (currentIdx + 1) % services.length
        scrollToCenter(currentIdx)
      }, 3000)
    }

    startAutoPlay()

    // Pause on touch, resume after
    const onTouchStart = () => {
      userInteractedRef.current = true
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
    const onTouchEnd = () => {
      setTimeout(() => {
        userInteractedRef.current = false
        startAutoPlay()
      }, 5000)
    }

    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  // Scroll to specific slide (center-aligned)
  const scrollToIndex = useCallback((index: number) => {
    const el = scrollRef.current
    if (!el) return
    const child = el.children[index] as HTMLElement
    if (!child) return
    const scrollLeft = child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2
    el.scrollTo({ left: scrollLeft, behavior: 'smooth' })
  }, [])

  return (
    <section id="services" className="py-16 md:py-24 bg-background overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 scroll-reveal ${visible ? 'is-visible' : ''}`}>
          <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">
            서비스
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-5 leading-snug text-balance">
            기업 성장의 모든 단계,
            <br />전문가가 함께합니다
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-loose">
            창업부터 글로벌 진출까지,
            <br className="hidden sm:block" />
            기업 성장 단계에 맞는
            <br className="block sm:hidden" />
            최적의 정책자금을 찾아드립니다.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ paddingLeft: 'calc((100vw - 80vw) / 2)', paddingRight: 'calc((100vw - 80vw) / 2)' }}
          >
            {services.map((service, i) => (
              <div key={service.title} className="snap-center shrink-0 w-[80vw] max-w-[320px]">
                <ServiceCard service={service} i={i} visible={visible} className="h-full" />
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-1.5 mt-4">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-6 h-2 bg-brand-blue'
                    : 'w-2 h-2 bg-border hover:bg-muted-foreground/40'
                }`}
                aria-label={`슬라이드 ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} i={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
