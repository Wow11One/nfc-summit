import { FadeUp } from '@/utils/FadeUp'

const ITEMS = [
  { image: '/landing/images/community/community-1.png', title: 'Solana Temple', date: 'Jan 2025' },
  { image: '/landing/images/community/community-2.png', title: 'Solana Sailing', date: 'June 2025' },
  { image: '/landing/images/community/community-3.png', title: 'Solana Prospera', date: 'Nov 2025' },
]

export function HomeCommunity() {
  return (
    <section className="bg-[#101010] text-white px-5 sm:px-10 xl:px-[132px] py-20 sm:py-24 border-b border-[#27272A]">
      <div className="mx-auto">
        {/* Heading */}
        <FadeUp className="mb-12 text-center sm:mb-16">
          <h2 className="font-display font-bold uppercase text-[44px] sm:text-[48px] leading-[1.05] mb-6">
            Trusted by the<br />Solana Community
          </h2>
          <p className="text-[#9F9FA9] text-lg mx-auto">
            We run coliving experiences for communities around the world.<br />
            We handle sourcing, logistics, curation, and on-the-ground management so you just show up.
          </p>
        </FadeUp>

        {/* Cards */}
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-3 lg:gap-6">
          {ITEMS.map(({ image, title, date }, i) => (
            <FadeUp key={title} delay={i * 100} className="flex flex-col flex-1 gap-3 border border-[#27272A] bg-[#27272A]/20 max-w-[366px] w-full">
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="object-cover w-full"
                  draggable={false}
                />
              </div>
              <div className="px-5 pt-5 pb-6 lg:px-6">
                <p className="text-xl font-semibold text-white uppercase">{title}</p>
                <p className="text-sm text-[#9F9FA9]">{date}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
