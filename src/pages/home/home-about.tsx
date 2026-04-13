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
    <div className="w-full border border-[#27272A] bg-[#1A1A1A] pt-6 pb-[56px] px-8 flex flex-col gap-6">
      <Icon ref={iconRef} size={36} weight="fill" />
      <div className="flex flex-col gap-2.5">
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
    <section id="about" className="bg-[#161616] border border-[#272727] text-white pt-[72px] pb-[145px] flex items-center justify-center">
      <div className='xl:max-w-[1104px]'>
        {/* Heading */}
        <FadeUp className="text-center mb-12">
          <h2 className="font-display font-bold text-[48px] uppercase mb-9 leading-[1.1]">
            More than a hotel.
            <br />A Solana Hub.
          </h2>
          <p className="text-[#9F9FA9] text-lg">
            Nomadz is hosting a dedicated Solana coliving space during NFC Summit (4–6 June) – a
            private hotel block exclusively for Solana founders, builders, and ecosystem contributors.
            More than accommodation, it's a curated gathering point where the community eats, works,
            exercises, and connects under one roof.
          </p>
        </FadeUp>

        {/* Feature cards */}
        <div className="flex max-xl:items-center xl:justify-center gap-4 sm:gap-6 max-xl:flex-col">
          {FEATURES.map((feature, i) => (
            <FadeUp key={feature.title} delay={i * 100} className="flex-1 max-w-[368px] w-full">
              <FeatureCard {...feature} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
