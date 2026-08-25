'use client'

import Image from 'next/image'
import { useState } from 'react'

type Phase = 'idle' | 'merging' | 'flash' | 'reveal'

export function IntroScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<Phase>('idle')

  function handleOpen() {
    if (phase !== 'idle') return
    setPhase('merging')
    window.setTimeout(() => setPhase('flash'), 1000)
    window.setTimeout(() => setPhase('reveal'), 1280)
    window.setTimeout(() => onDone(), 1820)
  }

  const merging = phase === 'merging' || phase === 'flash' || phase === 'reveal'

  // Character positioning
  const initialOffsetPercent = 12
  const mergedOffsetPercent = 2
  
  const groomSlotInitial = `translateX(-${initialOffsetPercent}%)`
  const groomSlotMerged = `translateX(-${mergedOffsetPercent}%)`
  const brideSlotInitial = `translateX(${initialOffsetPercent}%)`
  const brideSlotMerged = `translateX(${mergedOffsetPercent}%)`

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Нажмите, чтобы открыть приглашение"
      onClick={handleOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleOpen()
        }
      }}
      className="fixed inset-0 z-50 flex cursor-pointer select-none items-center justify-center overflow-hidden bg-[#f2e8d7] transition-opacity duration-500 ease-out"
      style={{
        opacity: phase === 'reveal' ? 0 : 1,
        '--zodiac-size': 'min(135vw, 175vh)',
        '--zodiac-center-y': '96vh',
        '--cta-offset-y': '-120%',
      } as React.CSSProperties}
    >
      {/* DESKTOP ONLY: soft side volumes */}
      <div className="pointer-events-none hidden md:block absolute inset-y-0 left-0 w-[22vw] bg-[radial-gradient(circle_at_center,rgba(184,137,74,0.16),transparent_62%)] blur-2xl" />
      <div className="pointer-events-none hidden md:block absolute inset-y-0 right-0 w-[22vw] bg-[radial-gradient(circle_at_center,rgba(110,31,40,0.12),transparent_62%)] blur-2xl" />

      {/* ===== ZODIAC BACKDROP ===== */}
      
      {/* DESKTOP: Large zodiac with bottom half off-screen */}
      <div className="pointer-events-none hidden md:block absolute inset-0">
        {/* Positioner: handles only geometry */}
        <div
          className="absolute"
          style={{
            left: '50%',
            top: 'var(--zodiac-center-y)',
            width: 'var(--zodiac-size)',
            aspectRatio: '1 / 1',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Image: handles only rendering and spin animation */}
          <div className="animate-zodiac-spin absolute inset-0">
            <Image
              src="/images/зодиак круг.png"
              alt=""
              fill
              priority
              sizes="var(--zodiac-size)"
              className="object-contain opacity-96 drop-shadow-[0_20px_30px_rgba(71,42,22,0.16)]"
            />
          </div>
        </div>
      </div>

      {/* MOBILE: Full centered zodiac */}
      <div className="pointer-events-none md:hidden absolute inset-0 flex items-center justify-center">
        <div className="animate-zodiac-spin relative aspect-square w-[150vmin] max-w-none opacity-96">
          <Image
            src="/images/зодиак круг.png"
            alt=""
            fill
            priority
            sizes="150vmin"
            className="object-contain drop-shadow-[0_20px_30px_rgba(71,42,22,0.16)]"
          />
        </div>
      </div>

      {/* Cream oval under title */}
      <div className="pointer-events-none absolute top-[10%] left-1/2 -translate-x-1/2 z-10 w-[78%] max-w-[560px] h-[86px] sm:h-[120px]">
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(250,245,236,0.5) 0%, rgba(250,245,236,0.35) 40%, rgba(250,245,236,0.0) 100%)',
            filter: 'blur(10px)'
          }}
        />
      </div>

      {/* DESKTOP ONLY: soft vignette */}
      <div className="pointer-events-none hidden md:block absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 26%, rgba(242,232,215,0.45) 70%, rgba(242,232,215,0.92) 100%)',
        }}
      />

      {/* ===== GROOM CHARACTER SLOT ===== */}
      <div
        className="pointer-events-none absolute inset-0 md:pb-0 transition-transform duration-1000 ease-out"
        style={{ transform: merging ? groomSlotMerged : groomSlotInitial }}
      >
        {/* Desktop: characters centered vertically */}
        <div className="hidden md:flex absolute bottom-0 left-1/2 h-full items-end justify-center">
          <img
            src="/images/жених.png"
            alt="Жених"
            style={{
              height: 'clamp(280px, 45vh, 420px)',
              width: 'auto',
              maxWidth: '100%',
              transform: 'translateX(-78%)',
              objectFit: 'contain',
              WebkitMaskImage:
                'linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) calc(100% - 30px), rgba(0,0,0,0) 100%), linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) calc(100% - 30px), rgba(0,0,0,0) 100%)',
              maskImage:
                'linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) calc(100% - 30px), rgba(0,0,0,0) 100%), linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) calc(100% - 30px), rgba(0,0,0,0) 100%)',
              filter: 'drop-shadow(0 8px 24px rgba(58, 36, 23, 0.25))',
            }}
          />
        </div>
        
        {/* Mobile: characters at bottom */}
        <div className="md:hidden absolute left-1/2 bottom-0">
          <img
            src="/images/жених.png"
            alt="Жених"
            style={{
              height: 'clamp(280px, 45vh, 420px)',
              width: 'auto',
              maxWidth: '100%',
              transform: 'translateX(-78%)',
              objectFit: 'contain',
              WebkitMaskImage:
                'linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) calc(100% - 30px), rgba(0,0,0,0) 100%), linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) calc(100% - 30px), rgba(0,0,0,0) 100%)',
              maskImage:
                'linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) calc(100% - 30px), rgba(0,0,0,0) 100%), linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) calc(100% - 30px), rgba(0,0,0,0) 100%)',
              filter: 'drop-shadow(0 8px 24px rgba(58, 36, 23, 0.25))',
            }}
          />
        </div>
      </div>

      {/* ===== BRIDE CHARACTER SLOT ===== */}
      <div
        className="pointer-events-none absolute inset-0 md:pb-0 transition-transform duration-1000 ease-out"
        style={{ transform: merging ? brideSlotMerged : brideSlotInitial }}
      >
        {/* Desktop: characters centered vertically */}
        <div className="hidden md:flex absolute bottom-0 left-1/2 h-full items-end justify-center">
          <img
            src="/images/невеста.png"
            alt="Невеста"
            style={{
              height: 'clamp(280px, 45vh, 420px)',
              width: 'auto',
              maxWidth: '100%',
              transform: 'translateX(-22%)',
              objectFit: 'contain',
              WebkitMaskImage:
                'linear-gradient(to left, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) calc(100% - 30px), rgba(0,0,0,0) 100%), linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) calc(100% - 30px), rgba(0,0,0,0) 100%)',
              maskImage:
                'linear-gradient(to left, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) calc(100% - 30px), rgba(0,0,0,0) 100%), linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) calc(100% - 30px), rgba(0,0,0,0) 100%)',
              filter: 'drop-shadow(0 8px 24px rgba(58, 36, 23, 0.25))',
            }}
          />
        </div>
        
        {/* Mobile: characters at bottom */}
        <div className="md:hidden absolute left-1/2 bottom-0">
          <img
            src="/images/невеста.png"
            alt="Невеста"
            style={{
              height: 'clamp(280px, 45vh, 420px)',
              width: 'auto',
              maxWidth: '100%',
              transform: 'translateX(-22%)',
              objectFit: 'contain',
              WebkitMaskImage:
                'linear-gradient(to left, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) calc(100% - 30px), rgba(0,0,0,0) 100%), linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) calc(100% - 30px), rgba(0,0,0,0) 100%)',
              maskImage:
                'linear-gradient(to left, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) calc(100% - 30px), rgba(0,0,0,0) 100%), linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) calc(100% - 30px), rgba(0,0,0,0) 100%)',
              filter: 'drop-shadow(0 8px 24px rgba(58, 36, 23, 0.25))',
            }}
          />
        </div>
      </div>

      {/* Title */}
      <div
        className="pointer-events-none absolute top-[8%] md:top-[10%] left-1/2 -translate-x-1/2 text-center transition-opacity duration-500 z-20"
        style={{ opacity: merging ? 0 : 1 }}
      >
        <p className="font-serif text-xs md:text-sm uppercase tracking-[0.35em] text-bordeaux/80">
          Наша свадьба
        </p>
        <h1 className="mt-1 md:mt-2 font-script text-4xl md:text-5xl lg:text-6xl leading-[0.95] text-bordeaux">
          Луиза
          <span className="mx-1 md:mx-2 text-gold">&</span>
          Даниил
        </h1>
        <p className="mt-2 md:mt-4 font-serif text-sm md:text-[1.25rem] tracking-[0.18em] text-bordeaux/95">
          15.09.2026
        </p>
      </div>

      {/* CTA: DESKTOP — at zodiac center */}
      <div
        className="pointer-events-none hidden md:flex absolute left-1/2 text-center transition-opacity duration-500 z-30 items-center gap-2"
        style={{
          opacity: merging ? 0 : 1,
          top: 'var(--zodiac-center-y)',
          transform: `translate(-50%, var(--cta-offset-y))`,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
          <path d="M12 21s-6.716-4.18-9.071-6.536C.574 12.16 3.5 6 8.5 6c2.09 0 3.5 1.5 3.5 1.5S13.91 6 16 6c5 0 7.926 6.16 5.571 8.464C18.716 16.82 12 21 12 21z" stroke="#b8894a" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="animate-hint-pulse font-serif text-lg tracking-widest text-bordeaux/80">
          нажмите, чтобы открыть
        </p>
      </div>

      {/* CTA: MOBILE — above characters, centered */}
      <div
        className="pointer-events-none md:hidden absolute left-1/2 -translate-x-1/2 text-center transition-opacity duration-500 z-30 flex flex-col items-center gap-1"
        style={{
          opacity: merging ? 0 : 1,
          bottom: '28%',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21s-6.716-4.18-9.071-6.536C.574 12.16 3.5 6 8.5 6c2.09 0 3.5 1.5 3.5 1.5S13.91 6 16 6c5 0 7.926 6.16 5.571 8.464C18.716 16.82 12 21 12 21z" stroke="#b8894a" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="animate-hint-pulse font-serif text-xs tracking-wider text-bordeaux/80 text-center">
          нажмите<br />чтобы открыть
        </p>
      </div>

      {/* Flash overlay */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity ease-out"
        style={{
          background: 'radial-gradient(circle at center, #fffdf5 0%, #f7e2ac 45%, #f0d68c 100%)',
          opacity: phase === 'flash' || phase === 'reveal' ? 1 : 0,
          transitionDuration: phase === 'flash' ? '260ms' : '520ms',
        }}
      />
    </div>
  )
}
