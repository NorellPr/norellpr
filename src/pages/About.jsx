import { Link } from 'react-router-dom'

const whatHowWhy = [
  {
    num: '01',
    title: 'What We Do',
    body: 'We build visibility, credibility, and lasting influence for brands and founders. Through strategic communications, media relations, and integrated campaigns, we ensure your story reaches the people who matter most.',
  },
  {
    num: '02',
    title: 'How We Do It',
    body: 'Every strategy starts with insight. We immerse ourselves in your brand, your audience, and your landscape — then craft communications that are intentional, precise, and built to cut through the noise.',
  },
  {
    num: '03',
    title: 'Why We Do It',
    body: "Because visibility is not accidental. We believe that when the right brands are seen and heard, they create real change — in markets, in communities, in culture. That's the work we show up to do.",
  },
]

const promises = [
  {
    title: 'Insight-Driven',
    body: 'We root every strategy in research and deep understanding of your brand, your audience, and the landscape you operate in.',
  },
  {
    title: 'Purpose-Led',
    body: 'Every campaign has a reason to exist beyond visibility. We build communications that connect to something that matters.',
  },
  {
    title: 'Results-Measured',
    body: 'We track what actually matters to your brand — not just impressions, but the influence that moves the needle.',
  },
]

export default function About() {
  return (
    <>
      {/* ── SECTION 1: HERO ─────────────────────────────────── */}
      <div className="relative h-screen bg-dark rounded-[20px] overflow-hidden flex flex-col justify-between pt-[86px] pb-10 px-[clamp(28px,4vw,64px)] max-md:pt-[72px] max-md:pb-7">
        {/* Star watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
          <svg width="620" height="620" viewBox="0 0 100 100" fill="none" className="max-md:w-[280px] max-md:h-[280px]">
            <path d="M50 2 L54 44 L96 50 L54 56 L50 98 L46 56 L4 50 L46 44 Z" fill="#eadfc4" />
            <path d="M22 22 L46 47 L22 72" stroke="#eadfc4" strokeWidth="3" fill="none" />
            <path d="M78 22 L54 47 L78 72" stroke="#eadfc4" strokeWidth="3" fill="none" />
          </svg>
        </div>

        {/* Eyebrow — top */}
        <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-cream/35 relative z-10">
          Strategic PR & Communications
        </div>

        {/* Massive type — bottom */}
        <div className="relative z-10">
          <div
            className="font-syne font-extrabold leading-[0.88] uppercase tracking-[-0.03em] text-cream"
            style={{ fontSize: 'clamp(60px, 12.5vw, 172px)' }}
          >
            About
          </div>
          <div
            className="font-syne font-extrabold leading-[0.88] uppercase tracking-[-0.03em] text-wine"
            style={{ fontSize: 'clamp(60px, 12.5vw, 172px)' }}
          >
            Norell PR
          </div>
          <p className="text-cream/40 text-[13px] tracking-[0.04em] mt-6 leading-[1.7] max-w-[360px]">
            Visibility is not accidental. Influence is built.
          </p>
        </div>
      </div>

      {/* ── SECTION 2: STATEMENT ────────────────────────────── */}
      <div className="section bg-dark border border-cream/[0.08] rounded-[20px] py-[clamp(48px,7vh,88px)] px-[clamp(28px,4vw,64px)] grid grid-cols-2 gap-16 items-start max-md:grid-cols-1 max-md:gap-10">
        {/* Left: pull quote */}
        <div className="border-r border-cream/10 pr-16 max-md:border-r-0 max-md:pr-0 max-md:pb-10 max-md:border-b max-md:border-cream/10">
          <div className="font-syne text-[clamp(20px,2.6vw,34px)] font-bold text-cream leading-[1.3] tracking-[-0.02em]">
            "We partner with founders and organizations to define their voice and cut through the noise."
          </div>
        </div>
        {/* Right: body */}
        <div>
          <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-cream/30 mb-5">
            About Norell PR
          </div>
          <p className="text-[clamp(14px,1.2vw,16px)] text-cream/55 leading-[1.9] mb-5">
            Norell PR is a strategic PR and communications firm that helps brands build visibility, credibility, and lasting influence.
          </p>
          <p className="text-[clamp(14px,1.2vw,16px)] text-cream/55 leading-[1.9]">
            We partner with founders and organizations to define their voice and cut through the noise with intentional, insight-driven strategy.
          </p>
        </div>
      </div>

      {/* ── SECTION 3: WHAT / HOW / WHY ─────────────────────── */}
      <div className="section relative bg-wine rounded-[20px] py-[clamp(48px,6vh,80px)] overflow-hidden">
        {/* Curved dashed line — desktop only */}
        <div className="absolute left-[clamp(20px,3.5vw,52px)] top-0 bottom-0 w-6 pointer-events-none max-md:hidden">
          <svg width="24" height="100%" viewBox="0 0 24 700" fill="none" preserveAspectRatio="none" className="h-full w-full">
            <path
              d="M12 0 C12 80, 3 130, 12 200 C21 270, 21 320, 12 390 C3 460, 3 510, 12 580 C18 630, 12 700, 12 700"
              stroke="#eadfc4"
              strokeWidth="1.2"
              strokeDasharray="4 7"
              opacity="0.22"
              fill="none"
            />
          </svg>
        </div>

        <div className="pl-[clamp(28px,6vw,96px)] pr-[clamp(28px,4vw,64px)] max-md:px-[clamp(20px,4vw,40px)]">
          {whatHowWhy.map((item, i) => (
            <div
              key={i}
              className={`grid grid-cols-[40px_1fr_1.4fr] gap-8 py-[clamp(28px,4.5vh,48px)] items-start max-md:grid-cols-1 max-md:gap-2 ${
                i < 2 ? 'border-b border-cream/10' : ''
              }`}
            >
              <span className="font-syne text-[11px] text-cream/25 tracking-[0.1em] pt-[6px] max-md:mb-1">
                {item.num}
              </span>
              <div className="font-syne text-[clamp(18px,2vw,28px)] font-extrabold text-cream uppercase leading-[1.1] tracking-[-0.02em] max-md:mb-2">
                {item.title}
              </div>
              <p className="text-[clamp(13px,1.05vw,15px)] text-cream/55 leading-[1.85]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── SECTION 4: STATS BENTO ──────────────────────────── */}
      <div className="section grid grid-cols-3 gap-[10px] max-md:grid-cols-1 max-md:gap-2">
        <div className="rounded-[20px] py-[clamp(28px,4.5vh,52px)] px-[clamp(24px,3vw,44px)] flex flex-col gap-3 bg-cream border border-dark/10">
          <div className="font-syne text-[clamp(36px,5vw,72px)] font-extrabold text-dark leading-none tracking-[-0.03em]">
            2026
          </div>
          <div className="text-[11px] tracking-[0.1em] uppercase text-dark/50">Est. This Year</div>
        </div>
        <div className="rounded-[20px] py-[clamp(28px,4.5vh,52px)] px-[clamp(24px,3vw,44px)] flex flex-col gap-3 bg-wine">
          <div className="font-syne text-[clamp(36px,5vw,72px)] font-extrabold text-cream leading-none tracking-[-0.03em]">
            100%
          </div>
          <div className="text-[11px] tracking-[0.1em] uppercase text-cream/50">Intentional. Every campaign.</div>
        </div>
        <div className="rounded-[20px] py-[clamp(28px,4.5vh,52px)] px-[clamp(24px,3vw,44px)] flex flex-col gap-3 bg-cream border border-dark/10">
          <div className="font-syne text-[clamp(36px,5vw,72px)] font-extrabold text-dark leading-none tracking-[-0.03em]">
            Africa
          </div>
          <div className="text-[11px] tracking-[0.1em] uppercase text-dark/50">Focused & Built for</div>
        </div>
      </div>

      {/* ── SECTION 5: THE NORELL PROMISE ───────────────────── */}
      <div className="section bg-dark border border-cream/[0.08] rounded-[20px] py-[clamp(48px,6vh,72px)] px-[clamp(28px,4vw,56px)]">
        <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-cream/30 mb-3">
          Our Values
        </div>
        <div className="font-syne text-[clamp(22px,3vw,42px)] font-extrabold text-cream uppercase tracking-[-0.02em] mb-12 max-md:mb-8">
          The Norell Promise
        </div>
        <div className="grid grid-cols-3 gap-[10px] max-md:grid-cols-1">
          {promises.map((p, i) => (
            <div
              key={i}
              className="border border-cream/[0.1] rounded-[16px] p-8 flex flex-col gap-5 max-md:p-6"
            >
              <div className="w-[5px] h-[5px] rounded-full bg-wine" />
              <div className="font-syne text-[clamp(15px,1.5vw,19px)] font-bold text-cream uppercase tracking-[-0.01em]">
                {p.title}
              </div>
              <p className="text-[clamp(12px,1vw,14px)] text-cream/50 leading-[1.75]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── SECTION 6: CTA ──────────────────────────────────── */}
      <div className="section bg-wine rounded-[20px] py-[clamp(56px,8vh,96px)] px-[clamp(28px,4vw,56px)] flex flex-col items-center text-center gap-6 relative overflow-hidden">
        {/* Watermark */}
        <div className="absolute bottom-[-60px] right-[-50px] opacity-[0.05] pointer-events-none">
          <svg width="320" height="320" viewBox="0 0 100 100" fill="none">
            <path d="M50 2 L54 44 L96 50 L54 56 L50 98 L46 56 L4 50 L46 44 Z" fill="#eadfc4" />
          </svg>
        </div>

        <div className="font-syne text-[clamp(22px,3.5vw,48px)] font-extrabold text-cream uppercase tracking-[-0.02em] leading-[1.1] max-w-[560px] relative z-10">
          Ready to build your influence?
        </div>
        <p className="text-cream/50 text-[13px] leading-[1.75] max-w-[380px] relative z-10">
          Let's define your voice, shape your narrative, and put your brand in front of the people who matter.
        </p>
        <Link
          to="/contact"
          className="relative z-10 inline-flex items-center gap-2 mt-2 text-[12px] font-semibold tracking-[0.08em] uppercase no-underline bg-cream text-dark py-[14px] px-8 rounded-full transition-all duration-300 hover:bg-dark hover:text-cream"
        >
          Get in Touch →
        </Link>
      </div>
    </>
  )
}
