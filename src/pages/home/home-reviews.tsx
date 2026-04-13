import { FadeUp } from '@/utils/FadeUp'

const REVIEWS = [
  {
    quote:
      '"The best environment I\'ve ever been in. Shipped a huge feature because of an impromptu whiteboard session at 2 AM."',
    name: 'Alex K.',
    role: 'DeFi Founder',
    avatar: '/landing/images/reviews/alex-avatar.png',
  },
  {
    quote:
      '"Nomadz takes care of everything. You just show up and immediately plug into a high-signal group of builders."',
    name: 'Sarah M.',
    role: 'Ecosystem Lead',
    avatar: '/landing/images/reviews/sarah-avatar.png',
  },
  {
    quote:
      '"The connections made here outlast any conference. It\'s an accelerator masquerading as a hotel."',
    name: 'David T.',
    role: 'Smart Contract Dev',
    avatar: '/landing/images/reviews/david-avatar.png',
  },
]

export function HomeReviews() {
  return (
    <section className="bg-[#121212] text-white px-5 sm:px-10 xl:px-[132px] py-16 sm:py-24 border-b border-[#27272A]">
      <div className="mx-auto">
        <FadeUp>
          <h2 className="font-display font-bold uppercase text-[36px] md:text-[48px] leading-[1.05] text-center mb-12 sm:mb-16">
            What Past Guests Say
          </h2>
        </FadeUp>

        <div className="flex flex-col justify-center gap-4 max-sm:items-center sm:flex-row lg:gap-6">
          {REVIEWS.map(({ quote, name, role, avatar }, i) => (
            <FadeUp
              key={name}
              delay={i * 100}
              className="flex-1 border border-[#27272A] bg-[#161616] p-6 lg:p-8 flex flex-col justify-between gap-7 md:gap-8 max-w-[366px] w-full"
            >
              <p className="text-[#D4D4D8] text-sm sm:text-base">{quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={avatar}
                  alt={name}
                  className="object-cover rounded-full size-[52px] shrink-0"
                  draggable={false}
                />
                <div>
                  <p className="text-sm font-bold tracking-wide text-white uppercase">{name}</p>
                  <p className="text-xs uppercase tracking-[0.1em] text-[#00D492]">{role}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
