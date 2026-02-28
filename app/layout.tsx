import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import CtaFooter from '@/components/cta-footer'
import KakaoCta from '@/components/kakao-cta'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-pretendard',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.solutionbk.com'),
  title: {
    default: '부광솔루션즈 | 정책자금 전문 컨설팅',
    template: '%s | 부광솔루션즈',
  },
  description:
    '부광솔루션즈 - 중소기업·스타트업 정책자금 전문 컨설팅. 누적 1,200억+ 지원, 94% 승인율. 정부지원금·R&D 과제·창업자금·기업인증까지 전문 컨설턴트가 무료 상담으로 최적 자금을 매칭해드립니다.',
  keywords: [
    '정책자금',
    '정부지원금',
    '중소기업 대출',
    'R&D 자금',
    '창업자금',
    '정책자금 컨설팅',
    '부광솔루션즈',
    '중소기업 정책자금',
    'R&D 정부과제',
    '창업 지원금',
    '고용 지원금',
    '수출 자금',
    '벤처인증',
    '이노비즈 인증',
    '메인비즈 인증',
    '기업인증',
    '사업계획서 작성',
    '정부 보조금',
    '중소벤처기업부',
    '신용보증기금',
    '기술보증기금',
  ],
  authors: [{ name: '부광솔루션즈' }],
  creator: '부광솔루션즈',
  publisher: '부광솔루션즈',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.solutionbk.com',
    siteName: '부광솔루션즈',
    title: '부광솔루션즈 | 정책자금 전문 컨설팅',
    description:
      '누적 1,200억+ 지원, 94% 승인율. 중소기업·스타트업 맞춤 정책자금을 전문 컨설턴트가 무료로 매칭해드립니다.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '부광솔루션즈 - 정책자금 전문 컨설팅',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '부광솔루션즈 | 정책자금 전문 컨설팅',
    description:
      '누적 1,200억+ 지원, 94% 승인율. 중소기업·스타트업 맞춤 정책자금을 전문 컨설턴트가 무료로 매칭해드립니다.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://www.solutionbk.com',
  },
  category: '비즈니스 컨설팅',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${notoSansKR.variable} font-sans antialiased break-keep`}>
        <Navbar />
        {children}
        <CtaFooter />
        <KakaoCta />
      </body>
    </html>
  )
}
