import { Buildings, UsersThree, TreePalm, type Icon } from '@phosphor-icons/react'
import { useIconGradient } from '@/utils/iconGradient'
import { FadeUp } from '@/utils/FadeUp'

interface FeatureCardProps {
  Icon: Icon
  title: string
  description: string
}

function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  const iconRef = useIconGradient()

  return (
    <div className="w-full border border-[#27272A] bg-[#1A1A1A] pt-6 pb-[56px] px-8 flex flex-row max-lg:items-center lg:flex-col gap-6">
      <Icon className='shrink-0' ref={iconRef} size={36} weight="fill" />
      <div className="flex flex-col gap-1.5 lg:gap-2.5">
        <p className="text-xl font-bold uppercase tracking-wide text-white">{title}</p>
        <p className="text-[#9F9FA9]">{description}</p>
      </div>
    </div>
  )
}

const FEATURES: FeatureCardProps[] = [
  {
    Icon: Buildings,
    title: 'Private Hotel Block',
    description: 'Exclusively reserved for Solana community members',
  },
  {
    Icon: UsersThree,
    title: 'Curated Community',
    description: 'Founders, builders, and ecosystem contributors only',
  },
  {
    Icon: TreePalm,
    title: 'High Signal Environment',
    description: 'Spontaneous collabs, side sessions & workouts',
  },
]

export function HomeAbout() {
  return (
    <section
      id="apply"
      className="border border-[#272727] text-white flex items-center justify-center xl:h-screen p-8 bg-no-repeat bg-cover"
      style={{
        backgroundImage: 'url(/landing/images/pull-bg.webp)',
        backgroundPosition: 'center center',
      }}
    >
      <div className="xl:max-w-[1250px]">
        {/* Heading */}
        <FadeUp className="text-center flex flex-col items-center">
          <img
            src="/landing/svgs/solana-hotel-heading.svg"
            alt="The Solana Hotel"
            className="w-full max-w-[800px] lg:block hidden"
            draggable={false}
          />
          <img
            src="/landing/svgs/solana-hotel-heading-mobile.svg"
            alt="The Solana Hotel"
            className="w-full max-w-[200px] lg:hidden block"
            draggable={false}
          />
          <p className="text-white text-lg lg:text-2xl text-center my-10 font-light">
            <span>
              A coliving hotel block for founders, builders & ecosystem
              contributors
            </span>
            <br className="" />
            <span className="font-medium">June 1-8, Lisbon</span>
          </p>
        </FadeUp>

        {/* Feature cards */}
        <div className="flex max-xl:items-center xl:justify-center gap-4 sm:gap-6 max-xl:flex-col">
          {FEATURES.map((feature, i) => (
            <FadeUp
              key={feature.title}
              delay={i * 100}
              className="flex-1 max-w-[368px] w-full"
            >
              <FeatureCard {...feature} />
            </FadeUp>
          ))}
        </div>

        <div className="mt-12 lg:mt-24 flex justify-center">
          <a
            href={import.meta.env.VITE_SOLANA_HOTEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-white text-white text-sm font-bold uppercase w-full max-w-[420px] lg:max-w-[184px] h-[54px] py-3 text-center"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
