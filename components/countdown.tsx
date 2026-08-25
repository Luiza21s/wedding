'use client'

import { useEffect, useState } from 'react'

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now())
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: 'days', label: 'дней' },
  { key: 'hours', label: 'часов' },
  { key: 'minutes', label: 'минут' },
  { key: 'seconds', label: 'секунд' },
]

export function Countdown({ targetDate }: { targetDate: string }) {
  const target = new Date(targetDate).getTime()
  const [time, setTime] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTime(getTimeLeft(target))
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  return (
    <div className="flex items-stretch justify-center gap-2 sm:gap-4">
      {UNITS.map(({ key, label }) => (
        <div
          key={key}
          className="flex min-w-[64px] flex-col items-center rounded-md border border-gold/50 bg-card/70 px-3 py-3 shadow-sm sm:min-w-[80px] sm:px-4"
        >
          <span className="font-serif text-3xl font-bold leading-none text-bordeaux tabular-nums sm:text-4xl">
            {time ? String(time[key]).padStart(2, '0') : '--'}
          </span>
          <span className="mt-1 text-xs uppercase tracking-wider text-muted-foreground sm:text-sm">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}
