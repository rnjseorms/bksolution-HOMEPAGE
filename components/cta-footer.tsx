'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import { RippleButton } from '@/components/ui/ripple-button'

export default function CtaFooter() {
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
    <>
      {/* CTA Section */}
      <section className="py-28 md:py-24 bg-brand-blue relative overflow-hidden" ref={ref}>
        {/* Background decoration */}
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-[80px]" />

        <div className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-reveal ${visible ? 'is-visible' : ''}`}>
          <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-4">
            지금 바로 시작하세요
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-8 leading-snug text-balance">
            지금 신청하면
            <br />
            24시간 내
            <br className="block sm:hidden" />
            진단 결과 제공
          </h2>
          <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            매달 한정 인원만 상담을 진행합니다.
            <br className="hidden sm:block" />
            지금 바로 무료 상담을 신청하고
            <br className="block sm:hidden" />
            내 기업에 맞는 정책자금을 확인하세요.
          </p>

          <div className="flex justify-center mb-12">
            <a href="#contact">
              <RippleButton
                rippleColor="oklch(0.45 0.18 250)"
                className="bg-white text-brand-blue hover:bg-white/90 font-bold px-8 text-base h-12 rounded-lg group"
              >
                무료 상담 신청하기
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </RippleButton>
            </a>
          </div>

          {/* Contact badges */}
          <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>1599-7457</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>rnjseorms26@naver.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Image
                src="/logo-horizontal.png"
                alt="부광솔루션즈"
                width={140}
                height={36}
                className="h-7 w-auto dark:hidden"
              />
              <Image
                src="/logo-horizontal-white.png"
                alt="부광솔루션즈"
                width={140}
                height={36}
                className="h-7 w-auto hidden dark:block"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-loose">
              기업 성장을 위한 정책자금 전문 컨설팅.
              <br />
              빠르고 정확하게 자금을 연결합니다.
            </p>
          </div>

          {/* Contact info */}
          <div className="border-t border-border pt-6 mb-6">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span>1599-7457</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>rnjseorms26@naver.com</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <a
                  href="https://map.naver.com/p/entry/place/2067838548?placePath=/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  경기도 화성시 병점노을5로20, 골든스퀘어2 503호
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6 text-center sm:text-left">
            <p className="text-xs text-muted-foreground">
              © 2026 부광솔루션즈. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
