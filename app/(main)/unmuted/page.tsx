'use client'

import { useEffect, useRef, useState } from 'react'

export default function Page() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMask, setIsMask] = useState(true)

  const play = async () => {
    if (!videoRef.current) return

    try {
      await videoRef.current.play()
      setIsMask(false)
    } catch {
      setIsMask(true)
    }
  }

  useEffect(() => {
    play()
  }, [])

  return (
    <div className="relative w-full aspect-video">
      <video ref={videoRef} className="w-full h-full" src="/video.mp4" />

      {isMask && (
        <div className="absolute inset-0 z-50 bg-black/80 flex flex-col justify-center items-center">
          <button
            className="w-20 h-20 bg-white rounded-full flex justify-center items-center"
            onClick={play}
          >
            Play
          </button>
        </div>
      )}
    </div>
  )
}
