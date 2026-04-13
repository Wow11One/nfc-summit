import { FadeUp } from '@/utils/FadeUp'

export function HomeNfc() {
  return (
    <>
      {/* ── NFC Conference ── */}
      <section className="bg-[#000704] text-white px-5 sm:px-10 xl:px-[132px] py-20 sm:py-20 border-t border-[#27272A]">
        <div className="mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-[1250px]">
          {/* Left: image with button overlay */}
          <FadeUp className="w-full lg:w-[610px] shrink-0 relative group">
            <img
              src="/landing/images/nfc.png"
              alt="Non Fungible Conference"
              className="w-full object-cover"
              draggable={false}
            />
            <div className="absolute top-0 left-0">
              <a
                href="https://www.nfcsummit.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white inline-flex items-center justify-center text-center text-xs font-bold uppercase px-4 py-2.5 tracking-[0.1em] hover:bg-white/10 transition-colors w-[184px] h-[54px]"
              >
                Learn More
              </a>
            </div>
          </FadeUp>

          {/* Right: text */}
          <FadeUp delay={100} className="flex flex-col gap-6 max-w-[70%]">
            <h2 className="font-medium uppercase text-6xl">
              Non Fungible Conference
            </h2>
            <p className="text-white/65 text-base sm:text-lg leading-relaxed">
              When Creative economy meet Web 3. Art Fashion, Gaming, and music,
              live performance stage, blending virtual and reality in
              unprecedented ways.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── The Venue ── */}
      <section className="bg-[#000704] text-white px-5 sm:px-10 xl:px-[132px] pb-20 sm:pb-24">
        <div className="mx-auto max-w-[1250px]">
          {/* Heading + description */}
          <FadeUp className="mb-4">
            <h2 className="font-medium uppercase text-6xl mb-4">The Venue</h2>
            <p className="text-white text-base sm:text-lg leading-relaxed max-w-[1220px]">
              NFC is taking place at Unicorn Factory Lisboa, Rua da Manutenção
              119, Lisbon, Portugal.
              <br />
              Located in the Beato district, the venue offers a modern
              industrial space for talks, exhibitions, and networking.
            </p>
          </FadeUp>

          <FadeUp delay={100} className="relative">
            <div className="w-full aspect-[16/7] overflow-hidden">
              <img
                src="/landing/images/venue.png"
                alt="Venue aerial view"
                className="w-full h-full object-center"
                draggable={false}
              />
            </div>
            <a
              href="https://www.nfcsummit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[254px] h-[52px] absolute bottom-0 right-0 bg-white text-black inline-flex items-center justify-center text-xs font-bold uppercase px-8 py-4 tracking-[0.1em] hover:bg-white/90 transition-colors"
            >
              BOOK YOUR SPOT
            </a>
          </FadeUp>

          {/* Footer info */}
          <FadeUp
            delay={150}
            className="mt-7 flex flex-col sm:flex-row justify-between gap-6 sm:gap-10"
          >
            {/* Transport */}
            <div className="flex flex-col gap-2 text-sm text-white/60 leading-relaxed">
              <p>
                <span className="uppercase tracking-wide">
                  AIRPORT:
                </span>{' '}
                Aeroporto Humberto Delgado - Lisbon, Portugal - ~15 min ride to the venue
              </p>
              <a className='underline underline-offset-2' href="https://www.nfcsummit.com/" target="_blank">
                <span className="uppercase tracking-wide">
                  Train:
                </span>{' '}
                Santa Apolónia Station - ~10 min drive
              </a>
              <a className='underline underline-offset-2' href="https://www.nfcsummit.com/" target="_blank">
                <span className="uppercase tracking-wide">
                  Parking:
                </span>{' '}
                On-site and nearby street parking available in Beato area
              </a>
            </div>

            {/* Address + coordinates */}
            <div className="flex flex-col gap-5 shrink-0 text-left">
              <p className="text-white text-lg font-medium uppercase tracking-wide">
                Rua da Manutenção 118 | LISBON | PORTUGAL
              </p>
              <p className="text-white text-lg">38.7256° N, 9.1149° W</p>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
