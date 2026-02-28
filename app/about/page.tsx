'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Target, Eye, Users2, BarChart3, Trophy, Zap, Building2, Handshake } from 'lucide-react'

const stats = [
  { icon: BarChart3, value: '1,200억+', label: '누적 지원 금액', desc: '2026년 설립 이래 누적' },
  { icon: Users2, value: '3,200+', label: '고객사 수', desc: '전국 중소기업·스타트업' },
  { icon: Trophy, value: '94.2%', label: '자금 승인율', desc: '업계 평균 대비 2배' },
  { icon: Zap, value: '평균 14일', label: '처리 기간', desc: '신청에서 승인까지' },
]

const partners = [
  '중소벤처기업부', '신용보증기금', '기술보증기금',
  '산업기술평가관리원', '한국산업은행', '중소기업진흥공단',
  'TIPS운영사', '한국수출입은행',
]

const values = [
  {
    icon: Target,
    title: '정확한 매칭',
    desc: '기업 상황을 정밀 분석하여 최적의 정책자금을 찾아드립니다. 불필요한 신청으로 시간을 낭비하지 않습니다.',
  },
  {
    icon: Eye,
    title: '투명한 프로세스',
    desc: '컨설팅 전 과정을 투명하게 공유하며, 성공 보수 방식으로 고객 부담을 최소화합니다.',
  },
  {
    icon: Handshake,
    title: '끝까지 함께',
    desc: '자금 수령 이후에도 약정 관리, 보고 의무 이행, 추가 자금 발굴까지 지속적으로 지원합니다.',
  },
  {
    icon: Building2,
    title: '전문 인력',
    desc: '50명 이상의 전문 컨설턴트가 업종별·자금별 전문성을 갖추고 맞춤형 서비스를 제공합니다.',
  },
]

export default function AboutPage() {
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
          <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">회사소개</p>
          <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-6 leading-snug">
            기업의 성장 파트너,<br />
            <span className="text-brand-blue">부광솔루션즈</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-loose">
            2026년 설립 이래 3,200개 이상의 기업에게
            <br className="hidden sm:block" />
            1,200억 원 이상의 정책자금을 연결한 대한민국 대표 정책자금 전문 컨설팅 기업입니다.
          </p>
        </div>
      </section>

      {/* 대표 인사말 */}
      <section className="py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">대표 인사말</p>
              <h2 className="text-3xl font-black text-foreground mb-6 leading-snug">
                &ldquo;기업이 자금 걱정 없이<br />사업에만 집중할 수 있도록&rdquo;
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  안녕하세요, 부광솔루션즈 대표 권대근입니다.
                </p>
                <p>
                  많은 중소기업과 스타트업이 좋은 기술과 아이디어를 가지고 있으면서도
                  자금 문제로 성장의 기회를 놓치는 것을 보며, 이 문제를 해결하고자
                  부광솔루션즈를 설립하였습니다.
                </p>
                <p>
                  정부는 매년 수십조 원의 정책자금을 중소기업에 지원하고 있지만,
                  복잡한 절차와 정보 부족으로 많은 기업이 이를 활용하지 못하고 있습니다.
                  저희는 이 간극을 메우는 다리 역할을 합니다.
                </p>
                <p className="font-semibold text-foreground">
                  부광솔루션즈는 앞으로도 기업의 성장을 가장 가까이에서 돕겠습니다.
                </p>
              </div>

            </div>
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg border border-border">
                <Image
                  src="/profile-ceo.png"
                  alt="부광솔루션즈 대표 권대근"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-lg font-bold text-foreground">부광솔루션즈 대표 권대근</p>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">핵심 가치</p>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-5 leading-snug">
              부광솔루션즈가 일하는 방식
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:border-brand-blue/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-blue-subtle flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 실적 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">실적</p>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-5 leading-snug">
              숫자로 증명하는 <span className="text-brand-blue">압도적인 실력</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-brand-blue/30 hover:shadow-lg transition-all">
                <div className="w-11 h-11 rounded-xl bg-brand-blue-subtle flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-brand-blue" />
                </div>
                <p className="text-2xl sm:text-3xl font-black text-foreground mb-1">{stat.value}</p>
                <p className="text-sm font-semibold text-foreground mb-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.desc}</p>
              </div>
            ))}
          </div>

          {/* 협력기관 */}
          <div>
            <p className="text-center text-xs text-muted-foreground font-semibold uppercase tracking-widest mb-6">협력 기관</p>
            <div className="flex flex-wrap justify-center gap-3">
              {partners.map((p) => (
                <span key={p} className="bg-card border border-border text-muted-foreground text-sm font-medium px-4 py-2 rounded-full hover:border-brand-blue/30 hover:text-foreground transition-colors">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
