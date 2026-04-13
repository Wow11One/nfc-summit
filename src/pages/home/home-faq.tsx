import { useState } from 'react'
import { FadeUp } from '@/utils/FadeUp'

const FAQS = [
  {
    q: 'What is the Solana Hotel?',
    a: "The Solana Hotel is a private, curated coliving block hosted by Nomadz during NFC Summit in Lisbon (June 4–6, 2026). We reserve a dedicated floor or wing of a hotel exclusively for Solana founders, builders, and ecosystem contributors - creating a shared home base where the community eats, works, exercises, and connects under one roof. It's not just accommodation - it's the highest-signal Solana gathering in Europe this summer.",
  },
  {
    q: 'Who can apply?',
    a: 'Applications are open to active Solana ecosystem participants - including protocol founders, core developers, dApp builders, ecosystem investors, community leads, and Solana Foundation contributors.',
  },
  {
    q: 'How much does it cost?',
    a: 'Room rates start from $170 per night (4-night minimum, June 2–6). Pricing is dynamic and will be growing based on demand. Rooms are limited, so early applications are encouraged.',
  },
  {
    q: 'Is the Solana Foundation involved?',
    a: "Yes. The Solana Foundation is providing support to help subsidize accommodation costs, merch for guests, and content production throughout the week. Their involvement reflects a shared commitment to creating a meaningful, high-signal gathering for the ecosystem - not just a place to sleep during a conference.",
  },
  {
    q: 'When should I arrive / depart?',
    a: 'We recommend arriving on Monday, June 1 to settle in, meet the group, and make the most of pre-summit networking. The main NFC Summit programming runs June 4–6. The earlier you arrive, the more value you get - some of the best conversations happen before the official events even begin.',
  },
  {
    q: 'Is this affiliated with NFC Summit officially?',
    a: 'The Solana Hotel is a Nomadz-organized coliving experience that runs alongside NFC Summit - it is not an official NFC Summit event.',
  },
  {
    q: "What's the application process?",
    a: "It's straightforward. Fill out the application form on this page - it takes under 3 minutes. We'll review your application and get back to you within 48 hours with a decision. If accepted, you'll receive a booking link to secure your room with a deposit. Spots fill up fast, so we recommend applying as early as possible. Priority is given to active Solana ecosystem contributors.",
  },
  {
    q: 'Can I bring a teammate?',
    a: "Yes - and we encourage it. Teams building together often get even more out of the coliving experience. Each person must submit their own application, and all applicants are reviewed individually to maintain the quality of the group. If you're applying as a team, mention it in your application so we can do our best to place you in rooms close to each other.",
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-[#27272A] bg-[#121212]">
      <button
        className="flex items-center justify-between w-full gap-4 px-6 py-5 text-left border-b border-[#27272A]"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-white sm:text-base">{q}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`shrink-0 text-white transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M3 5.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="px-6 pt-4 pb-6">
            <p className="text-sm sm:text-base text-[#9F9FA9] leading-relaxed">{a}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HomeFaq() {
  return (
    <section id="faq" className="bg-[#0A0A0A] text-white px-5 sm:px-10 xl:px-[132px] py-20 sm:py-16 border-b border-[#27272A]">
      <div className="max-w-[640px] mx-auto">

        <FadeUp>
          <h2 className="font-display font-bold uppercase text-[48px] leading-[1.05] text-center mb-5 sm:mb-16">
            FAQ
          </h2>
        </FadeUp>

        <div className="flex flex-col gap-4">
          {FAQS.map(({ q, a }, i) => (
            <FadeUp key={q} delay={i * 60}>
              <FaqItem q={q} a={a} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
