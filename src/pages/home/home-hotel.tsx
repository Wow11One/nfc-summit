import { Timer, Star, Bed, Barbell, type Icon } from '@phosphor-icons/react'
import { useIconGradient } from '@/utils/iconGradient'
import { FadeUp } from '@/utils/FadeUp'

interface BulletProps {
  text: string
  Icon: Icon
}

function Bullet({ text, Icon }: BulletProps) {
  const ref = useIconGradient()
  return (
    <li className="flex items-center gap-3">
      <span className="shrink-0">
        <Icon ref={ref} size={20} weight="fill" />
      </span>
      <span className="text-sm sm:text-lg text-[#D4D4D8]">{text}</span>
    </li>
  )
}

const BULLETS: BulletProps[] = [
  { Icon: Timer, text: '3-7 nights (June 1–8)' },
  { Icon: Star, text: 'Curated community events' },
  { Icon: Bed, text: 'Different room categories available' },
  { Icon: Barbell, text: 'Premium amenities: pool, gym, conference room' },
]

export function HomeHotel() {
  return (
    <section id="hotel" className="bg-[#101010] text-white px-5 sm:px-10 xl:px-[132px] py-20 sm:py-24">
      <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16 xl:max-w-[1154px] mx-auto">

        {/* ── Left column ── */}
        <FadeUp className="flex flex-col gap-8 lg:flex-1">
          {/* Marriott logo + hotel name */}
          <div>
            <img
              src="/landing/images/hotel/logo.png"
              alt="Marriott"
              className="w-auto h-10 mb-3"
              draggable={false}
            />
            <p className="text-xs tracking-[0.2em] uppercase text-[#9F9FA9]">
              Lisbon Marriott Hotel
            </p>
          </div>

          {/* Bullets */}
          <ul className="flex flex-col gap-4">
            {BULLETS.map(({ Icon, text }) => (
              <Bullet key={text} Icon={Icon} text={text} />
            ))}
          </ul>

          {/* CTA */}
          <div>
            <a
              href="#apply"
              className="inline-block bg-[#F4F4F5] text-[#18181B] text-sm font-bold uppercase px-8 py-4 hover:bg-white/85 transition-colors"
            >
              Book Your Room
            </a>
          </div>
        </FadeUp>

        {/* ── Right column: 2×2 photo grid ── */}
        <FadeUp delay={150} className="flex gap-2.5 sm:gap-4 sm:w-[570px] max-lg:mx-auto">
          <div className='space-y-2.5 sm:space-y-4'>
            <img
              src="/landing/images/hotel/image-1.png"
              alt="Hotel lobby"
              className="w-full h-[3/7] object-cover border border-[#27272A]"
              draggable={false}
            />
            <img
              src="/landing/images/hotel/image-2.png"
              alt="Hotel pool"
              className="w-full h-[4/7] object-cover border border-[#27272A]"
              draggable={false}
            />
          </div>
          <div className='mt-5 space-y-2.5 sm:space-y-4 sm:mt-8'>
            <img
              src="/landing/images/hotel/image-3.png"
              alt="Hotel bar"
              className="w-full h-[4/7] object-cover border border-[#27272A]"
              draggable={false}
            />
            <img
              src="/landing/images/hotel/image-4.png"
              alt="Hotel conference"
              className="w-full h-[3/7] object-cover border border-[#27272A]"
              draggable={false}
            />
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
