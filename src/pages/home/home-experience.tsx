import { Ticket, ForkKnife, SneakerMove, Desktop, Martini, type Icon } from '@phosphor-icons/react'
import { SolanaIcon } from '@/components/SolanaIcon'
import { FadeUp } from '@/utils/FadeUp'

interface ExperienceItem {
  title: string
  description: string
  renderIcon: (isMobile: boolean) => React.ReactNode
}

function FlatIcon({ PhosphorIcon, isMobile }: { PhosphorIcon: Icon; isMobile: boolean }) {
  return <PhosphorIcon size={isMobile ? 25 : 32} weight="fill" />
}

function ExperienceCard({ title, description, renderIcon }: ExperienceItem) {
  return (
    <div className="border border-[#27272A] bg-[#161616] size-[160px] min-[400px]:size-[180px] sm:w-[290px] md:w-[350px] lg:w-[368px] sm:h-[220px] md:h-[200px] py-5 sm:p-8 flex flex-col">
      <div className="mx-auto sm:hidden">{renderIcon(true)}</div>
      <div className="hidden sm:block">{renderIcon(false)}</div>

      <div className="flex flex-col mt-3 space-y-1 max-sm:items-center sm:space-y-3 sm:mt-5">
        <span className="font-primary text-xs min-[400px]:text-sm sm:leading-[28px] font-bold text-white uppercase sm:text-lg tracking-tighter">
          {title}
        </span>
        <p className="max-sm:px-5 text-[10px] min-[400px]:text-xs sm:text-sm text-[#9F9FA9] leading-[16px] min-[400px]:leading-[18px] sm:leading-[22px]">{description}</p>
      </div>
    </div>
  )
}

const ITEMS: ExperienceItem[] = [
  {
    title: 'NFC Summit Access',
    description: 'Co-located with one of Europe\u2019s top Web3 conferences (June 4\u20136).',
    renderIcon: (m) => <FlatIcon PhosphorIcon={Ticket} isMobile={m} />,
  },
  {
    title: 'Shared Meals',
    description: 'Morning & evening communal dining \u2013 the best deals happen over food.',
    renderIcon: (m) => <FlatIcon PhosphorIcon={ForkKnife} isMobile={m} />,
  },
  {
    title: 'Morning Movement',
    description: 'Group workouts, yoga sessions, or morning runs through Lisbon.',
    renderIcon: (m) => <FlatIcon PhosphorIcon={SneakerMove} isMobile={m} />,
  },
  {
    title: 'Co-Working Space',
    description: 'Dedicated working areas for heads-down building or impromptu meetings.',
    renderIcon: (m) => <FlatIcon PhosphorIcon={Desktop} isMobile={m} />,
  },
  {
    title: 'Rooftop Socials',
    description: 'Curated evening gatherings \u2013 no randoms, just builders.',
    renderIcon: (m) => <FlatIcon PhosphorIcon={Martini} isMobile={m} />,
  },
  {
    title: 'Solana Merch Drop',
    description: 'Exclusive Solana Foundation-backed merch for Nomadz guests.',
    renderIcon: (m) => <SolanaIcon size={m ? 25 : 32} className="text-white" />,
  },
]

export function HomeExperience() {
  return (
    <section id="experience" className="relative py-20 overflow-hidden text-white">
      {/* Background already has a dark layer baked in */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: 'url(/landing/images/background-2.png)' }}
      />

      <div className="relative z-10 flex flex-col items-center px-3 sm:px-8">
        <FadeUp>
          <h2 className="font-display font-bold text-[36px] sm:text-[62px] uppercase leading-[1.08] text-center mb-10 sm:mb-14">
            A full week of
            <br />
            Solana culture
          </h2>
        </FadeUp>

        <div className="grid grid-cols-2 gap-x-1.5 gap-y-2 xl:grid-cols-3 sm:gap-4">
          {ITEMS.map((item, i) => (
            <FadeUp key={item.title} delay={i * 80}>
              <ExperienceCard {...item} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
