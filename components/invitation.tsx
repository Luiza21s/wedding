'use client'

import Image from 'next/image'
import { Reveal } from './reveal'
import { Countdown } from './countdown'
import { RsvpForm } from './rsvp-form'

const WEDDING_DATE = '2026-09-15T15:00:00'

/* ============================================================
   DATA
   ============================================================ */

const WISHES = [
  {
    title: 'Подарки',
    text:
      'Самый желанный подарок для нас — ваши тёплые слова и совместное будущее. ' +
      'Если захотите поддержать нашу семью, будем признательны за вклад в наше свадебное путешествие.',
  },
  {
    title: 'Цветы',
    text:
      'Мы очень любим цветы, но за один вечер они, к сожалению, увядают. ' +
      'Будем рады, если вместо букета вы подарите нам бутылочку хорошего вина в нашу коллекцию.',
  },
  {
    title: '«Горько!»',
    text:
      'Обещаем, что этот вечер будет наполнен искренними эмоциями. ' +
      'Кричите «Горько!» громко и от души — мы с радостью подарим друг другу поцелуй.',
  },
]

const DRESS_COLORS = [
  { name: 'Песочный', hex: '#d9c7a3' },
  { name: 'Коричневый', hex: '#6b4a30' },
  { name: 'Серый', hex: '#8a8d8f' },
  { name: 'Чёрный', hex: '#2b2622' },
]

const CONTACTS = [
  {
    role: 'Жених',
    name: 'Даниил',
    phone: '+7 900 000-00-01',
    tg: 'danil',
  },
  {
    role: 'Невеста',
    name: 'Луиза',
    phone: '+7 900 000-00-02',
    tg: 'luiza',
  },
]

/* ============================================================
   SMALL DECORATIVE ELEMENTS
   ============================================================ */

function OrnamentDivider() {
  return (
    <div className="ornament-divider" aria-hidden="true">
      <span />
      <i>◆</i>
      <span />
    </div>
  )
}

function SectionHeading({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <h2 className="invite-section-title">
      {children}
    </h2>
  )
}

/* ============================================================
   HEADER / DATE / VENUE
   ============================================================ */

function MainInfo() {
  return (
    <>
      <header className="invite-header">
        <p className="invite-eyebrow">
          Приглашаем на свадьбу
        </p>

        <h1 className="invite-names">
          Луиза
          <span> &amp; </span>
          Даниил
        </h1>

        <p className="invite-lead">
          Мы будем счастливы разделить с вами
          <br />
          один из самых важных дней нашей жизни
        </p>

        <OrnamentDivider />
      </header>

      <section className="invite-date-section">
        <p className="invite-weekday">
          Вторник
        </p>

        <div className="invite-date-circle">
          <strong>15</strong>
          <span>сентября</span>
          <small>2026</small>
        </div>
      </section>

      <section className="invite-venue">
        <SectionHeading>
          Место
        </SectionHeading>

        <h3>
          Усадьба «Золотая роща»
        </h3>

        <p>
          г. Москва, ул. Садовая, 15
        </p>
      </section>
    </>
  )
}

/* ============================================================
   PROGRAM
   ============================================================ */

function ProgramSection() {
  return (
    <section className="invite-section">
      <SectionHeading>
        Программа дня
      </SectionHeading>

      <OrnamentDivider />

      <div className="program-grid">
        <div className="program-item">
          <strong>15:00</strong>
          <span>Сбор гостей</span>
        </div>

        <div className="program-item">
          <strong>16:00</strong>
          <span>Церемония</span>
        </div>

        <div className="program-item">
          <strong>20:00</strong>
          <span>Торт</span>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   DRESS CODE
   ============================================================ */

function DressCodeSection() {
  return (
    <section className="invite-section">
      <SectionHeading>
        Дресс-код
      </SectionHeading>

      <p className="invite-text">
        Мы будем благодарны, если вы поддержите
        атмосферу вечера и выберете наряды
        в нашей цветовой палитре.
      </p>

      <div
        className="dress-palette"
        aria-label="Палитра дресс-кода"
      >
        {DRESS_COLORS.map((color) => (
          <div
            key={color.name}
            className="dress-palette-item"
          >
            <span
              className="dress-color"
              style={{
                backgroundColor: color.hex,
              }}
            />

            <small>
              {color.name}
            </small>
          </div>
        ))}
      </div>

      <div className="dress-image">
        <Image
          src="/images/dresscode.png"
          alt="Примеры образов для дресс-кода"
          width={1568}
          height={992}
          className="h-auto w-full"
        />
      </div>
    </section>
  )
}

/* ============================================================
   WISHES
   ============================================================ */

function WishesSection() {
  return (
    <section className="invite-section">
      <SectionHeading>
        Пожелания
      </SectionHeading>

      <OrnamentDivider />

      <div className="wishes-list">
        {WISHES.map((wish) => (
          <Reveal
            key={wish.title}
            as="div"
          >
            <article className="wish-item">
              <h3>
                {wish.title}
              </h3>

              <p>
                {wish.text}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ============================================================
   RSVP
   ============================================================ */

function RsvpSection() {
  return (
    <section className="invite-section">
      <SectionHeading>
        Анкета гостя
      </SectionHeading>

      <OrnamentDivider />

      <p className="invite-text">
        Пожалуйста, подтвердите ваше присутствие
        до 1 августа 2026 года.
      </p>

      <div className="rsvp-wrapper">
        <RsvpForm />
      </div>
    </section>
  )
}

/* ============================================================
   CONTACTS
   ============================================================ */

function ContactsSection() {
  return (
    <section className="invite-section">
      <SectionHeading>
        Контакты
      </SectionHeading>

      <OrnamentDivider />

      <div className="contacts-grid">
        {CONTACTS.map((person) => (
          <article
            key={person.role}
            className="contact-item"
          >
            <small>
              {person.role}
            </small>

            <h3>
              {person.name}
            </h3>

            <a
              href={`tel:${person.phone.replace(
                /[^\d+]/g,
                '',
              )}`}
            >
              {person.phone}
            </a>

            <a
              href={`https://t.me/${person.tg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-telegram"
            >
              Telegram
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ============================================================
   COUNTDOWN
   ============================================================ */

function CountdownSection() {
  return (
    <section className="invite-section invite-final-section">
      <SectionHeading>
        До встречи осталось
      </SectionHeading>

      <OrnamentDivider />

      <div className="countdown-wrapper">
        <Countdown
          targetDate={WEDDING_DATE}
        />
      </div>

      <p className="invite-signature">
        С любовью,
        <br />
        Луиза &amp; Даниил
      </p>
    </section>
  )
}

/* ============================================================
   RESPONSIVE FRAME

   Рамка теперь НЕ является одной картинкой.

   Геометрия:

        TL ───── TOP ───── TR
        │                  │
        │                  │
      LEFT              RIGHT
        │                  │
        │                  │
        BL ─── BOTTOM ─── BR

   LEFT и RIGHT повторяются через repeat-y.
   Поэтому высота рамки может быть любой.
   ============================================================ */

function ResponsiveFrame() {
  return (
    <div
      className="responsive-frame"
      aria-hidden="true"
    >
      {/* Повторяемые боковые части */}

      <div className="frame-repeat-left" />

      <div className="frame-repeat-right" />

      {/* Верх */}

      <div className="frame-top-center">
        <Image
          src="/images/frame/top-center.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>

      {/* Низ */}

      <div className="frame-bottom-center">
        <Image
          src="/images/frame/bottom-center.png"
          alt=""
          fill
          sizes="100vw"
        />
      </div>

      {/* 4 угла */}

      <div className="frame-corner frame-corner-tl">
        <Image
          src="/images/frame/top-left.png"
          alt=""
          fill
          priority
          sizes="200px"
        />
      </div>

      <div className="frame-corner frame-corner-tr">
        <Image
          src="/images/frame/top-right.png"
          alt=""
          fill
          priority
          sizes="200px"
        />
      </div>

      <div className="frame-corner frame-corner-bl">
        <Image
          src="/images/frame/bottom-left.png"
          alt=""
          fill
          sizes="200px"
        />
      </div>

      <div className="frame-corner frame-corner-br">
        <Image
          src="/images/frame/bottom-right.png"
          alt=""
          fill
          sizes="200px"
        />
      </div>
    </div>
  )
}

/* ============================================================
   MAIN INVITATION
   ============================================================ */

export function Invitation() {
  return (
    <main className="invitation-page">
      <article className="invitation-sheet">
        {/* бумажный фон */}

        <div
          className="invitation-paper"
          aria-hidden="true"
        />

        {/* вся рамка */}

        <ResponsiveFrame />

        {/* ВЕСЬ контент теперь внутри одной рамки */}

        <div className="invitation-content">
          <MainInfo />

          <ProgramSection />

          <DressCodeSection />

          <WishesSection />

          <RsvpSection />

          <ContactsSection />

          <CountdownSection />
        </div>
      </article>

      <style jsx global>{`

        /* ==================================================
           PAGE
           ================================================== */

        .invitation-page {
          position: relative;

          width: 100%;
          min-height: 100vh;

          overflow-x: hidden;

          background: #090807;
        }

        /* ==================================================
           SHEET

           Высота = высота реального контента.

           Больше никакого fixed aspect-ratio.
           Больше никакой отдельной карточки,
           после которой идут остальные секции.
           ================================================== */

        .invitation-sheet {
          /*
           * Главные размеры рамки.
           */

          --side-frame-width:
            clamp(
              48px,
              9vw,
              138px
            );

          --top-frame-height:
            clamp(
              125px,
              19vw,
              275px
            );

          --bottom-frame-height:
            clamp(
              115px,
              17vw,
              250px
            );

          --corner-width:
            clamp(
              86px,
              15vw,
              220px
            );

          position: relative;

          width: 100%;

          min-height: 100vh;

          overflow: hidden;

          isolation: isolate;

          background: #f4e6c9;
        }

        /* ==================================================
           PAPER
           ================================================== */

        .invitation-paper {
          position: absolute;

          inset: 0;

          z-index: 0;

          background:
            radial-gradient(
              circle at 50% 8%,
              rgba(
                255,
                249,
                225,
                0.95
              ),
              transparent 30%
            ),
            radial-gradient(
              circle at 20% 45%,
              rgba(
                178,
                124,
                69,
                0.055
              ),
              transparent 34%
            ),
            radial-gradient(
              circle at 80% 72%,
              rgba(
                178,
                124,
                69,
                0.045
              ),
              transparent 34%
            ),
            linear-gradient(
              180deg,
              #f7e9ca 0%,
              #efddba 50%,
              #f6e8ca 100%
            );
        }

        /* ==================================================
           CONTENT

           Учитывает ширину боковой рамки.

           padding сверху и снизу гарантирует,
           что контент не попадёт под декоративные углы.
           ================================================== */

        .invitation-content {
          position: relative;

          z-index: 10;

          box-sizing: border-box;

          width: min(
            860px,
            calc(
              100% -
              var(--side-frame-width) * 2 -
              48px
            )
          );

          margin: 0 auto;

          padding-top:
            calc(
              var(--top-frame-height) * 0.82
            );

          padding-bottom:
            calc(
              var(--bottom-frame-height) * 0.82
            );

          color: #682430;

          text-align: center;
        }

        /* ==================================================
           HEADER
           ================================================== */

        .invite-header {
          width: min(
            100%,
            690px
          );

          margin: 0 auto;
        }

        .invite-eyebrow {
          margin: 0;

          font-family:
            var(--font-serif),
            Georgia,
            serif;

          font-size:
            clamp(
              11px,
              1.25vw,
              18px
            );

          line-height: 1.2;

          letter-spacing: 0.32em;

          text-transform: uppercase;

          color:
            rgba(
              104,
              36,
              48,
              0.76
            );
        }

        .invite-names {
          margin:
            clamp(
              14px,
              1.6vw,
              24px
            )
            0
            0;

          font-family:
            var(--font-script),
            Georgia,
            serif;

          font-size:
            clamp(
              40px,
              5.5vw,
              78px
            );

          font-weight: 400;

          line-height: 0.98;

          color: #761c2b;
        }

        .invite-names span {
          color: #bd8b3f;
        }

        .invite-lead {
          margin:
            clamp(
              16px,
              1.8vw,
              26px
            )
            0
            0;

          font-family:
            var(--font-serif),
            Georgia,
            serif;

          font-size:
            clamp(
              13px,
              1.45vw,
              19px
            );

          line-height: 1.5;

          color:
            rgba(
              74,
              53,
              46,
              0.86
            );
        }

        /* ==================================================
           DIVIDER
           ================================================== */

        .ornament-divider {
          display: flex;

          align-items: center;

          justify-content: center;

          gap:
            clamp(
              12px,
              1.8vw,
              22px
            );

          margin:
            clamp(
              22px,
              2.8vw,
              34px
            )
            auto
            0;
        }

        .ornament-divider span {
          width:
            clamp(
              55px,
              8vw,
              110px
            );

          height: 1px;

          background:
            rgba(
              186,
              135,
              58,
              0.5
            );
        }

        .ornament-divider i {
          font-size: 10px;

          font-style: normal;

          color: #bc893c;
        }

        /* ==================================================
           DATE
           ================================================== */

        .invite-date-section {
          margin-top:
            clamp(
              48px,
              7vh,
              90px
            );
        }

        .invite-weekday {
          margin:
            0
            0
            15px;

          font-family:
            var(--font-serif),
            Georgia,
            serif;

          font-size:
            clamp(
              13px,
              1.6vw,
              20px
            );

          line-height: 1;

          letter-spacing: 0.2em;

          text-transform: uppercase;
        }

        .invite-date-circle {
          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          width:
            clamp(
              135px,
              18vw,
              205px
            );

          aspect-ratio: 1 / 1;

          margin: 0 auto;

          border:
            1px
            solid
            rgba(
              134,
              40,
              55,
              0.4
            );

          border-radius: 50%;

          box-shadow:
            0 0 0 5px
              rgba(
                189,
                139,
                72,
                0.08
              ),
            inset 0 0 30px
              rgba(
                189,
                139,
                72,
                0.05
              );
        }

        .invite-date-circle strong {
          font-family:
            var(--font-script),
            Georgia,
            serif;

          font-size:
            clamp(
              60px,
              7vw,
              90px
            );

          font-weight: 400;

          line-height: 0.76;

          color: #902639;
        }

        .invite-date-circle span {
          margin-top: 12px;

          font-family:
            var(--font-serif),
            Georgia,
            serif;

          font-size:
            clamp(
              16px,
              1.8vw,
              23px
            );
        }

        .invite-date-circle small {
          margin-top: 7px;

          font-family:
            var(--font-serif),
            Georgia,
            serif;

          font-size:
            clamp(
              12px,
              1.3vw,
              17px
            );

          letter-spacing: 0.14em;
        }

        /* ==================================================
           SECTION BASICS
           ================================================== */

        .invite-section,
        .invite-venue {
          width: min(
            100%,
            720px
          );

          margin:
            clamp(
              62px,
              9vh,
              110px
            )
            auto
            0;
        }

        .invite-section-title {
          margin: 0;

          font-family:
            var(--font-script),
            Georgia,
            serif;

          font-size:
            clamp(
              31px,
              4vw,
              52px
            );

          font-weight: 400;

          line-height: 1;

          color: #8f2939;
        }

        .invite-text {
          max-width: 580px;

          margin:
            20px
            auto
            0;

          font-family:
            var(--font-serif),
            Georgia,
            serif;

          font-size:
            clamp(
              13px,
              1.45vw,
              18px
            );

          line-height: 1.55;

          color:
            rgba(
              75,
              54,
              46,
              0.84
            );
        }

        /* ==================================================
           VENUE
           ================================================== */

        .invite-venue h3 {
          margin:
            16px
            0
            0;

          font-family:
            var(--font-serif),
            Georgia,
            serif;

          font-size:
            clamp(
              18px,
              2.1vw,
              28px
            );

          color: #62483e;
        }

        .invite-venue > p {
          margin:
            9px
            0
            0;

          font-family:
            var(--font-serif),
            Georgia,
            serif;

          font-size:
            clamp(
              13px,
              1.5vw,
              19px
            );

          color:
            rgba(
              74,
              53,
              46,
              0.82
            );
        }

        /* ==================================================
           PROGRAM
           ================================================== */

        .program-grid {
          display: grid;

          grid-template-columns:
            repeat(
              3,
              minmax(
                0,
                1fr
              )
            );

          gap:
            clamp(
              12px,
              3vw,
              38px
            );

          margin-top: 28px;
        }

        .program-item strong {
          display: block;

          font-family:
            var(--font-serif),
            Georgia,
            serif;

          font-size:
            clamp(
              20px,
              2.5vw,
              31px
            );

          color: #912638;
        }

        .program-item span {
          display: block;

          margin-top: 8px;

          font-family:
            var(--font-serif),
            Georgia,
            serif;

          font-size:
            clamp(
              11px,
              1.4vw,
              17px
            );

          color:
            rgba(
              74,
              53,
              46,
              0.84
            );
        }

        /* ==================================================
           DRESS CODE
           ================================================== */

        .dress-palette {
          display: flex;

          flex-wrap: wrap;

          justify-content: center;

          gap:
            clamp(
              14px,
              2vw,
              26px
            );

          margin-top: 28px;
        }

        .dress-palette-item {
          display: flex;

          flex-direction: column;

          align-items: center;

          gap: 8px;
        }

        .dress-color {
          display: block;

          width:
            clamp(
              38px,
              5vw,
              58px
            );

          aspect-ratio: 1;

          border:
            1px
            solid
            rgba(
              187,
              137,
              60,
              0.65
            );
        }

        .dress-palette-item small {
          font-size:
            clamp(
              9px,
              1vw,
              13px
            );

          color:
            rgba(
              72,
              52,
              45,
              0.65
            );
        }

        .dress-image {
          width: min(
            100%,
            560px
          );

          margin:
            32px
            auto
            0;

          overflow: hidden;

          border:
            1px
            solid
            rgba(
              187,
              137,
              60,
              0.35
            );

          border-radius: 8px;
        }

        /* ==================================================
           WISHES
           ================================================== */

        .wishes-list {
          display: grid;

          gap: 24px;

          margin-top: 30px;
        }

        .wish-item {
          max-width: 620px;

          margin: 0 auto;

          padding:
            20px
            18px;

          border-top:
            1px
            solid
            rgba(
              187,
              137,
              60,
              0.35
            );

          border-bottom:
            1px
            solid
            rgba(
              187,
              137,
              60,
              0.35
            );
        }

        .wish-item h3 {
          margin: 0;

          font-family:
            var(--font-script),
            Georgia,
            serif;

          font-size:
            clamp(
              25px,
              3vw,
              38px
            );

          font-weight: 400;

          color: #8f2939;
        }

        .wish-item p {
          margin:
            12px
            0
            0;

          font-family:
            var(--font-serif),
            Georgia,
            serif;

          font-size:
            clamp(
              12px,
              1.35vw,
              17px
            );

          line-height: 1.55;

          color:
            rgba(
              73,
              53,
              46,
              0.83
            );
        }

        /* ==================================================
           RSVP
           ================================================== */

        .rsvp-wrapper {
          width: min(
            100%,
            540px
          );

          margin:
            30px
            auto
            0;
        }

        /* ==================================================
           CONTACTS
           ================================================== */

        .contacts-grid {
          display: grid;

          grid-template-columns:
            repeat(
              2,
              minmax(
                0,
                1fr
              )
            );

          gap: 24px;

          margin-top: 32px;
        }

        .contact-item {
          padding: 24px;

          border:
            1px
            solid
            rgba(
              187,
              137,
              60,
              0.35
            );

          background:
            rgba(
              255,
              248,
              229,
              0.25
            );
        }

        .contact-item small {
          text-transform: uppercase;

          letter-spacing: 0.16em;

          color:
            rgba(
              76,
              55,
              47,
              0.62
            );
        }

        .contact-item h3 {
          margin:
            8px
            0
            0;

          font-family:
            var(--font-script),
            Georgia,
            serif;

          font-size:
            clamp(
              28px,
              3vw,
              40px
            );

          font-weight: 400;

          color: #8f2939;
        }

        .contact-item > a {
          display: block;

          margin-top: 10px;

          color: #65483c;
        }

        .contact-item .contact-telegram {
          display: inline-flex;

          margin-top: 15px;

          padding:
            8px
            16px;

          border:
            1px
            solid
            #bc893c;

          border-radius: 999px;

          text-decoration: none;

          color: #792637;
        }

        /* ==================================================
           COUNTDOWN
           ================================================== */

        .countdown-wrapper {
          margin-top: 32px;
        }

        .invite-final-section {
          margin-bottom:
            clamp(
              80px,
              11vh,
              140px
            );
        }

        .invite-signature {
          margin:
            50px
            0
            0;

          font-family:
            var(--font-script),
            Georgia,
            serif;

          font-size:
            clamp(
              30px,
              4vw,
              48px
            );

          line-height: 1.2;

          color: #943b4b;
        }

        /* ==================================================
           FRAME BASE
           ================================================== */

        .responsive-frame {
          position: absolute;

          inset: 0;

          z-index: 30;

          pointer-events: none;

          user-select: none;
        }

        /* ==================================================
           REPEATING LEFT / RIGHT

           Здесь происходит продление рамки.

           repeat-y автоматически повторяет картинку
           столько раз, сколько требуется по высоте.
           ================================================== */

        .frame-repeat-left {
          position: absolute;

          top:
            calc(
              var(--corner-width) * 0.7
            );

          bottom:
            calc(
              var(--corner-width) * 0.7
            );

          left: 0;

          width:
            var(--side-frame-width);

          background-image:
            url('/images/frame/left.png');

          background-repeat:
            repeat-y;

          background-position:
            left top;

          background-size:
            100% auto;
        }

        .frame-repeat-right {
          position: absolute;

          top:
            calc(
              var(--corner-width) * 0.7
            );

          right: 0;

          bottom:
            calc(
              var(--corner-width) * 0.7
            );

          width:
            var(--side-frame-width);

          background-image:
            url('/images/frame/right.png');

          background-repeat:
            repeat-y;

          background-position:
            right top;

          background-size:
            100% auto;
        }

        /* ==================================================
           TOP CENTER
           ================================================== */

        .frame-top-center {
          position: absolute;

          top: 0;

          left:
            calc(
              var(--corner-width) * 0.72
            );

          right:
            calc(
              var(--corner-width) * 0.72
            );

          height:
            var(--top-frame-height);
        }

        .frame-top-center img {
          width: 100% !important;

          height: 100% !important;

          object-fit: fill !important;
        }

        /* ==================================================
           BOTTOM CENTER
           ================================================== */

        .frame-bottom-center {
          position: absolute;

          right:
            calc(
              var(--corner-width) * 0.72
            );

          bottom: 0;

          left:
            calc(
              var(--corner-width) * 0.72
            );

          height:
            var(--bottom-frame-height);
        }

        .frame-bottom-center img {
          width: 100% !important;

          height: 100% !important;

          object-fit: fill !important;
        }

        /* ==================================================
           CORNERS
           ================================================== */

        .frame-corner {
          position: absolute;

          width:
            var(--corner-width);

          aspect-ratio: 1 / 1;

          z-index: 35;
        }

        .frame-corner img {
          width: 100% !important;

          height: 100% !important;

          object-fit: contain !important;
        }

        .frame-corner-tl {
          top: 0;
          left: 0;
        }

        .frame-corner-tr {
          top: 0;
          right: 0;
        }

        .frame-corner-bl {
          bottom: 0;
          left: 0;
        }

        .frame-corner-br {
          right: 0;
          bottom: 0;
        }

        /* ==================================================
           MOBILE
           ================================================== */

        @media (
          max-width: 640px
        ) {
          .invitation-sheet {
            --side-frame-width:
              clamp(
                34px,
                10vw,
                44px
              );

            --top-frame-height:
              clamp(
                98px,
                27vw,
                120px
              );

            --bottom-frame-height:
              clamp(
                94px,
                26vw,
                116px
              );

            --corner-width:
              clamp(
                75px,
                21vw,
                92px
              );
          }

          .invitation-content {
            width:
              calc(
                100% -
                var(--side-frame-width) *
                2 -
                18px
              );

            padding-top:
              calc(
                var(--top-frame-height)
                * 0.94
              );

            padding-bottom:
              calc(
                var(--bottom-frame-height)
                * 0.9
              );
          }

          .invite-names {
            font-size:
              clamp(
                36px,
                10.4vw,
                46px
              );

            line-height: 0.95;
          }

          .invite-lead br {
            display: none;
          }

          .invite-date-section {
            margin-top: 48px;
          }

          .invite-section,
          .invite-venue {
            margin-top: 72px;
          }

          .program-grid {
            gap: 5px;
          }

          .program-item strong {
            font-size: 18px;
          }

          .program-item span {
            font-size: 10px;
          }

          .contacts-grid {
            grid-template-columns: 1fr;
          }

          .wish-item {
            padding:
              18px
              4px;
          }
        }

        /* ==================================================
           VERY SMALL PHONE
           ================================================== */

        @media (
          max-width: 360px
        ) {
          .invitation-sheet {
            --side-frame-width:
              34px;

            --corner-width:
              72px;
          }

          .invitation-content {
            width:
              calc(
                100% - 82px
              );
          }

          .invite-eyebrow {
            letter-spacing: 0.2em;
          }
        }

        /* ==================================================
           TABLET
           ================================================== */

        @media (
          min-width: 641px
        ) and (
          max-width: 1024px
        ) {
          .invitation-sheet {
            --side-frame-width:
              clamp(
                70px,
                9vw,
                96px
              );

            --top-frame-height:
              clamp(
                160px,
                20vw,
                220px
              );

            --bottom-frame-height:
              clamp(
                150px,
                18vw,
                205px
              );

            --corner-width:
              clamp(
                135px,
                18vw,
                190px
              );
          }
        }

        /* ==================================================
           DESKTOP
           ================================================== */

        @media (
          min-width: 1025px
        ) {
          .invitation-sheet {
            --side-frame-width:
              clamp(
                100px,
                8vw,
                150px
              );

            --top-frame-height:
              clamp(
                210px,
                16vw,
                300px
              );

            --bottom-frame-height:
              clamp(
                195px,
                15vw,
                280px
              );

            --corner-width:
              clamp(
                180px,
                15vw,
                260px
              );
          }
        }
      `}</style>
    </main>
  )
}