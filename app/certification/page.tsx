'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Award, Shield, TrendingUp, FileCheck, Banknote, Building2,
  ArrowRight, CheckCircle, Clock, Users,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const certifications = [
  {
    icon: Award,
    title: '벤처기업 인증',
    desc: '기술성·사업성이 우수한 중소기업에 부여되는 인증으로, 세제·금융·입지 등 다양한 혜택을 받을 수 있습니다.',
    benefits: ['법인세·소득세 50% 감면', '취득세·재산세 면제', '병역특례 지정 가능', '코스닥 상장 시 우대'],
    requirements: ['중소기업 해당', '벤처투자·기술평가·연구개발 중 1가지 유형 충족'],
    color: 'brand-blue',
  },
  {
    icon: Shield,
    title: '이노비즈(INNO-BIZ) 인증',
    desc: '기술혁신형 중소기업 인증으로, 기술경영능력이 우수한 기업에 부여됩니다.',
    benefits: ['정책자금 우대 지원', '정부 R&D 과제 가점', '공공입찰 우대', '금리 우대 (최대 1.5%)'],
    requirements: ['업력 3년 이상', '기술혁신역량 평가 700점 이상'],
    color: 'brand-blue',
  },
  {
    icon: TrendingUp,
    title: '메인비즈(MAIN-BIZ) 인증',
    desc: '경영혁신형 중소기업 인증으로, 마케팅·조직관리·전략 등 경영혁신 역량이 우수한 기업에 부여됩니다.',
    benefits: ['정책자금 우대', '공공조달 우대', '세제 혜택', '기업 신용도 향상'],
    requirements: ['업력 3년 이상', '경영혁신역량 평가 600점 이상'],
    color: 'brand-blue',
  },
  {
    icon: FileCheck,
    title: 'ISO 인증 지원',
    desc: '국제표준 품질경영시스템(ISO 9001), 환경경영시스템(ISO 14001) 등 국제 인증 취득을 지원합니다.',
    benefits: ['글로벌 거래처 요구사항 충족', '공공조달 가산점', '기업 이미지 향상', '경영 시스템 체계화'],
    requirements: ['업종 제한 없음', '경영시스템 구축 및 운영'],
    color: 'brand-blue',
  },
]

const processSteps = [
  { icon: Users, step: '01', title: '무료 상담', desc: '기업 현황 파악 및 인증 가능성 진단' },
  { icon: FileCheck, step: '02', title: '서류 준비', desc: '인증 요건에 맞는 서류 작성 및 보완' },
  { icon: Clock, step: '03', title: '신청 및 심사', desc: '인증기관 신청 및 심사 대응' },
  { icon: Award, step: '04', title: '인증 취득', desc: '인증서 발급 및 혜택 활용 안내' },
]

const benefits = [
  { icon: Banknote, title: '세제 혜택', desc: '법인세·소득세 감면, 취득세·재산세 면제 등 다양한 세제 혜택' },
  { icon: Building2, title: '금융 우대', desc: '정책자금 우대 금리, 보증료 감면, 대출 한도 확대' },
  { icon: Shield, title: '공공조달 우대', desc: '정부·공공기관 입찰 시 가점 부여 및 수의계약 가능' },
  { icon: TrendingUp, title: '기업 가치 향상', desc: '기업 신용도 상승, 투자유치 시 긍정적 평가' },
]

export default function CertificationPage() {
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
          <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">기업인증</p>
          <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-6 leading-snug">
            인증 하나로<br />
            <span className="text-brand-blue">세제·금융·입찰 혜택</span>을 한번에
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-loose mb-8">
            벤처인증, 이노비즈, 메인비즈 등 기업인증 취득으로
            <br className="hidden sm:block" />
            세제 혜택부터 금융 우대까지 다양한 지원을 받으세요.
          </p>
          <a href="/#contact">
            <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-primary-foreground font-bold px-8 h-12 group">
              무료 인증 진단 받기
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </section>

      {/* 인증 혜택 요약 */}
      <section className="py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">혜택</p>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-5 leading-snug">
              기업인증으로 누리는 <span className="text-brand-blue">4대 혜택</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:border-brand-blue/30 transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue-subtle flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 인증 종류 상세 */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">인증 종류</p>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-5 leading-snug">
              기업에 맞는 <span className="text-brand-blue">최적의 인증</span>을 찾아드립니다
            </h2>
          </div>
          <div className="space-y-8">
            {certifications.map((cert, i) => (
              <div
                key={cert.title}
                className="grid lg:grid-cols-5 gap-8 items-start bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-brand-blue/30 transition-all"
              >
                <div className="lg:col-span-2">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue-subtle flex items-center justify-center mb-4">
                    <cert.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{cert.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{cert.desc}</p>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-foreground mb-2">인증 요건</p>
                    {cert.requirements.map((r) => (
                      <p key={r} className="text-sm text-muted-foreground flex items-center gap-2 mb-1">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                        {r}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-sm font-semibold text-foreground mb-3">주요 혜택</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cert.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-brand-blue shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 프로세스 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">프로세스</p>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-5 leading-snug">
              인증 취득 <span className="text-brand-blue">4단계</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-card border-2 border-border flex flex-col items-center justify-center mb-4 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-brand-blue-subtle flex items-center justify-center mb-1">
                    <step.icon className="w-4 h-4 text-brand-blue" />
                  </div>
                  <span className="text-[10px] font-black text-brand-blue">STEP {step.step}</span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
