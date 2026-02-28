'use client'

import { useEffect, useRef, useState } from 'react'
import { Phone, FileSearch, FileText, CheckCircle, Handshake } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    step: '01',
    title: '무료 상담 신청',
    desc: '전화·카카오톡·온라인 폼으로 간단하게 상담을 신청하세요. 24시간 이내 전담 컨설턴트가 연락드립니다.',
  },
  {
    icon: FileSearch,
    step: '02',
    title: '기업 진단 및 매칭',
    desc: '기업 현황, 업종, 재무상태를 분석하여 지원 가능한 정책자금 목록을 도출하고 최적 자금을 추천합니다.',
  },
  {
    icon: FileText,
    step: '03',
    title: '서류 준비 및 신청 대행',
    desc: '사업계획서, 재무제표, 각종 증빙서류를 전문가가 직접 작성·검토하여 승인율을 극대화합니다.',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: '심사 대응 및 모니터링',
    desc: '심사 과정에서 발생하는 추가 요청사항에 실시간으로 대응하고 진행 상황을 투명하게 보고합니다.',
  },
  {
    icon: Handshake,
    step: '05',
    title: '자금 수령 및 사후 관리',
    desc: '자금 수령 이후에도 약정 관리, 보고 의무 이행, 추가 자금 발굴까지 지속적으로 지원합니다.',
  },
]

export default function ProcessSection() {
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
    <section id="process" className="py-28 md:py-24 bg-background overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 scroll-reveal ${visible ? 'is-visible' : ''}`}>
          <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">
            프로세스
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-5 leading-snug text-balance">
            신청부터 수령까지
            <br />
            <span className="text-brand-blue">5단계</span>로 완성됩니다
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-loose">
            복잡한 서류와 절차는
            <br className="block sm:hidden" />
            저희가 대신합니다.
            <br className="hidden sm:block" />
            고객님은 사업에만 집중하세요.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.step}
                className={`relative flex flex-col items-center text-center scroll-reveal ${visible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                {/* Circle */}
                <div className="relative z-10 w-24 h-24 rounded-2xl bg-card border-2 border-border flex flex-col items-center justify-center mb-4 shadow-sm group-hover:border-brand-blue transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-subtle flex items-center justify-center mb-1">
                    <step.icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <span className="text-[10px] font-black text-brand-blue">STEP {step.step}</span>
                </div>

                <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
