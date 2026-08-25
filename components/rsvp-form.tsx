'use client'

import { useState, type FormEvent } from 'react'

const DRINKS = ['Вино красное', 'Вино белое', 'Шампанское', 'Крепкие напитки', 'Безалкогольные']

export function RsvpForm() {
  const [name, setName] = useState('')
  const [attending, setAttending] = useState<'yes' | 'no' | ''>('')
  const [drinks, setDrinks] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  function toggleDrink(drink: string) {
    setDrinks((prev) =>
      prev.includes(drink) ? prev.filter((d) => d !== drink) : [...prev, drink],
    )
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name.trim() || !attending) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-md border border-gold/60 bg-card/80 p-6 text-center">
        <p className="font-script text-3xl text-bordeaux">Спасибо!</p>
        <p className="mt-2 text-lg leading-relaxed text-foreground/80">
          {attending === 'yes'
            ? `${name}, мы очень рады, что вы будете с нами в этот день.`
            : `${name}, спасибо, что дали знать. Нам будет вас не хватать.`}
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-md border border-gold/50 bg-card/70 p-5 shadow-sm sm:p-6"
    >
      <div>
        <label
          htmlFor="rsvp-name"
          className="mb-2 block text-lg font-medium text-foreground"
        >
          Ваше имя
        </label>
        <input
          id="rsvp-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Имя и фамилия"
          required
          className="w-full rounded-md border border-gold/60 bg-background/60 px-4 py-3 text-lg text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-bordeaux focus:ring-2 focus:ring-gold/40"
        />
      </div>

      <fieldset>
        <legend className="mb-2 text-lg font-medium text-foreground">
          Придёте ли вы?
        </legend>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
          {[
            { value: 'yes', label: 'С радостью приду' },
            { value: 'no', label: 'К сожалению, не смогу' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex flex-1 cursor-pointer items-center gap-3 rounded-md border px-4 py-3 text-base transition-colors ${
                attending === option.value
                  ? 'border-bordeaux bg-bordeaux/10 text-bordeaux'
                  : 'border-gold/50 bg-background/50 text-foreground hover:border-gold'
              }`}
            >
              <input
                type="radio"
                name="attending"
                value={option.value}
                checked={attending === option.value}
                onChange={() => setAttending(option.value as 'yes' | 'no')}
                className="h-4 w-4 accent-[var(--bordeaux)]"
                required
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      {attending === 'yes' && (
        <fieldset>
          <legend className="mb-2 text-lg font-medium text-foreground">
            Предпочтения по напиткам
          </legend>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {DRINKS.map((drink) => (
              <label
                key={drink}
                className="flex cursor-pointer items-center gap-3 rounded-md border border-gold/40 bg-background/50 px-4 py-2.5 text-base text-foreground transition-colors hover:border-gold"
              >
                <input
                  type="checkbox"
                  checked={drinks.includes(drink)}
                  onChange={() => toggleDrink(drink)}
                  className="h-4 w-4 accent-[var(--bordeaux)]"
                />
                {drink}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <button
        type="submit"
        className="w-full rounded-md bg-bordeaux px-6 py-3.5 text-lg font-medium tracking-wide text-primary-foreground shadow-sm transition-all hover:bg-bordeaux/90 hover:shadow-md active:scale-[0.99]"
      >
        Отправить ответ
      </button>
    </form>
  )
}
