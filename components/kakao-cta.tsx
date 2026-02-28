'use client'

export default function KakaoCta() {
  return (
    <>
      {/* Desktop: floating right side */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-center gap-3">
        {/* 카카오톡 상담 */}
        <a
          href="https://open.kakao.com/o/sL3gxyth"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 group"
          aria-label="카카오톡 상담하기"
        >
          <div className="w-14 h-14 rounded-full bg-[#FEE500] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200">
            <svg width="28" height="28" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <path d="M128 36C70.6 36 24 72.2 24 116.8c0 29 19.5 54.4 48.8 68.8-2.1 7.8-7.6 28.3-8.7 32.7-.1.5-.2 1.1 0 1.5.3.5.8.7 1.3.7.7 0 1.2-.3 1.2-.3 4.5-3 32.2-21.8 46.5-31.6 5-.7 10.2-1.1 15.5-1.1 57.4 0 104-36.2 104-80.8S185.4 36 128 36z" fill="#3C1E1E"/>
            </svg>
          </div>
          <span className="text-[10px] font-bold text-foreground bg-background/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm border border-border">
            카카오톡 상담
          </span>
        </a>

        {/* 전화 상담 */}
        <a
          href="tel:1599-7457"
          className="flex flex-col items-center gap-1 group"
          aria-label="전화 상담"
        >
          <div className="w-14 h-14 rounded-full bg-brand-blue flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" fill="white"/>
            </svg>
          </div>
          <span className="text-[10px] font-bold text-foreground bg-background/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm border border-border">
            즉시 상담연결
          </span>
        </a>
      </div>

      {/* Mobile & Tablet: fixed bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 z-50 flex w-screen max-w-full overflow-hidden">
        <a
          href="https://open.kakao.com/o/sL3gxyth"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-0 flex items-center justify-center gap-1.5 py-3.5 text-xs sm:text-sm font-bold text-[#3C1E1E] bg-[#FEE500] active:bg-[#FEE500]/80 transition-colors"
          aria-label="카카오톡 상담하기"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <path d="M128 36C70.6 36 24 72.2 24 116.8c0 29 19.5 54.4 48.8 68.8-2.1 7.8-7.6 28.3-8.7 32.7-.1.5-.2 1.1 0 1.5.3.5.8.7 1.3.7.7 0 1.2-.3 1.2-.3 4.5-3 32.2-21.8 46.5-31.6 5-.7 10.2-1.1 15.5-1.1 57.4 0 104-36.2 104-80.8S185.4 36 128 36z" fill="#3C1E1E"/>
          </svg>
          <span className="truncate">카카오톡 상담</span>
        </a>
        <a
          href="tel:1599-7457"
          className="flex-1 min-w-0 flex items-center justify-center gap-1.5 py-3.5 text-xs sm:text-sm font-bold text-white bg-brand-blue active:bg-brand-blue/80 transition-colors"
          aria-label="전화 상담"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" fill="white"/>
          </svg>
          <span className="truncate">즉시 상담연결</span>
        </a>
      </div>
    </>
  )
}
