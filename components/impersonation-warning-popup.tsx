"use client"

import { useEffect, useState } from "react"
import { AlertTriangle, X } from "lucide-react"

export default function ImpersonationWarningPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem("impersonation-warning-dismissed")
    if (!dismissed) {
      setIsOpen(true)
    }
  }, [])

  const handleClose = () => {
    sessionStorage.setItem("impersonation-warning-dismissed", "true")
    setIsOpen(false)
  }

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", onKeyDown)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto overscroll-contain"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="impersonation-warning-title"
    >
      <div className="min-h-full py-6 px-4 sm:py-10">
        <div
          className="relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
          aria-label="닫기"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="bg-gradient-to-br from-red-50 to-orange-50 px-6 pt-8 pb-6 border-b border-red-100">
          <div className="flex items-center justify-center w-14 h-14 mx-auto bg-red-100 rounded-full mb-4">
            <AlertTriangle className="w-7 h-7 text-red-600" />
          </div>
          <h2
            id="impersonation-warning-title"
            className="text-xl md:text-2xl font-bold text-center text-gray-900"
          >
            사칭 업체 주의 안내
          </h2>
        </div>

        <div className="px-6 py-6">
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            최근 <span className="font-bold text-red-600">부광솔루션즈를 사칭</span>하여
            정책자금 컨설팅을 빙자한 부당한 영업 행위가 확인되고 있습니다.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-red-900 font-semibold mb-2">
              ⚠️ 반드시 확인해 주세요
            </p>
            <ul className="text-sm text-red-800 leading-relaxed space-y-1.5 list-disc list-inside">
              <li>
                저희는 <span className="font-bold">정부기관이 아닙니다.</span>
              </li>
              <li>
                <span className="font-bold">민간 경영자문(컨설팅) 회사</span>로,
                정부 부처·공공기관을 사칭하지 않습니다.
              </li>
              <li>
                정부 직원·공무원·공공기관을 사칭하며 접근하는 업체에
                <span className="font-bold"> 피해당하지 않도록 주의하세요.</span>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-900 mb-2">
              사칭범 명함 (실제 사례)
            </p>
            <div className="relative rounded-lg overflow-hidden border-2 border-red-300">
              <img
                src="/사기 명함.jpg"
                alt="부광솔루션즈를 사칭한 명함"
                className="w-full h-auto block"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-red-600 text-3xl md:text-4xl font-black border-4 border-red-600 px-4 py-1 rotate-[-15deg] bg-white/70 tracking-wider">
                  사칭 주의
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              위 명함의 인물(<span className="font-semibold">김상일</span>) 및 연락처(
              <span className="font-semibold">010-3934-5502</span>)는
              부광솔루션즈와 무관하며, 회사명을 도용한 사칭 사례입니다.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
            <p className="text-sm text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-900">공식 연락처</span>
              <br />
              대표번호: <span className="font-medium">1599-7457</span>
              <br />
              이메일: <span className="font-medium">rnjseorms26@naver.com</span>
              <br />
              공식 도메인: <span className="font-medium">www.solutionbk.com</span>
            </p>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            위 공식 채널 외에 부광솔루션즈를 사칭하는 연락이나 안내를 받으셨다면,
            반드시 대표번호로 확인 후 진행해 주시기 바랍니다.
          </p>
        </div>

        <div className="px-6 pb-6">
          <button
            onClick={handleClose}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            확인했습니다
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}
