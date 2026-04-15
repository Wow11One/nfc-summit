import { NOMADZ_EVENT_URL } from '@/utils/constants'
import { FadeUp } from '@/utils/FadeUp'

export function HomeNfc() {
  return (
    <>
      {/* ── NFC Conference ── */}
      <section
        id="about"
        className="bg-[#000704] text-white px-8 sm:px-10 xl:px-[132px] py-14 sm:py-20 border-t border-[#27272A]"
      >
        <div className="mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-[1250px]">
          {/* Left: image with button overlay */}
          <FadeUp className="w-full lg:w-[610px] shrink-0 relative group">
            <img
              src="/landing/images/nfc.png"
              alt="Non Fungible Conference"
              className="w-full object-cover hidden lg:block"
              draggable={false}
            />
            <img
              src="/landing/images/nfc-mobile.png"
              alt="Non Fungible Conference"
              className="w-full object-cover block lg:hidden"
              draggable={false}
            />

            <div className="absolute top-0 left-0 lg:block hidden">
              <a
                href={NOMADZ_EVENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white inline-flex items-center justify-center text-center text-xs font-bold uppercase px-4 py-2.5 tracking-[0.1em] hover:bg-white/10 transition-colors w-[184px] h-[54px]"
              >
                Learn More
              </a>
            </div>
          </FadeUp>

          {/* Right: text */}
          <FadeUp delay={100} className="flex flex-col gap-4 lg:gap-6">
            <h2 className="font-medium uppercase lg:text-6xl text-5xl">
              Non Fungible Conference
            </h2>
            <p className="text-white/65 text-base sm:text-lg leading-relaxed">
              When Creative economy meet Web 3. Art Fashion, Gaming, and music, live performance stage, blending virtual and reality in unprecedented ways.
            </p>

            <div className="flex justify-center">
              <a
                href={NOMADZ_EVENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-sm font-bold uppercase w-full max-w-[480px] lg:hidden py-4 bg-[#F4F4F5] text-[#18181B] text-center"
              >
                Book Your Spot
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── The Venue ── */}
      <section
        id="location"
        className="bg-[#000704] text-white px-8 sm:px-10 xl:px-[132px] pb-14 sm:pb-20"
      >
        <div className="mx-auto max-w-[1250px]">
          {/* Heading + description */}
          <FadeUp className="mb-8">
            <h2 className="font-medium uppercase lg:text-6xl text-5xl mb-4">
              The Venue
            </h2>
            <p className="text-white text-base sm:text-lg leading-relaxed max-w-[1220px]">
              NFC is taking place at Unicorn Factory Lisboa, Rua da Manutenção
              118, Lisbon, Portugal.
              <br className="lg:block hidden" />
              Located in the Beato district, the venue offers a modern
              industrial space for talks, exhibitions, and networking.
            </p>
          </FadeUp>

          <FadeUp delay={100} className="relative">
            <div className="w-full lg:aspect-[16/7] lg:overflow-hidden">
              <img
                src="/landing/images/venue.png"
                alt="Venue aerial view"
                className="w-full h-full object-center lg:block hidden"
                draggable={false}
              />
              <img
                src="/landing/images/venue-mobile.png"
                alt="Venue aerial view"
                className="w-full h-80 object-center lg:hidden block"
                draggable={false}
              />
            </div>
            <a
              href={NOMADZ_EVENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[254px] h-[52px] absolute bottom-0 right-0 bg-white text-black hidden lg:inline-flex items-center justify-center text-xs font-bold uppercase px-8 py-4 tracking-[0.1em] hover:bg-white/90 transition-colors"
            >
              BOOK YOUR SPOT
            </a>
          </FadeUp>

          {/* Footer info */}
          <FadeUp
            delay={150}
            className="mt-7 flex flex-col-reverse lg:flex-row justify-between gap-6 sm:gap-10"
          >
            <div className="flex justify-center lg:hidden">
              <a
                href={NOMADZ_EVENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-sm font-bold uppercase w-full max-w-[480px] lg:hidden py-4 bg-[#F4F4F5] text-[#18181B] text-center"
              >
                Book Your Spot
              </a>
            </div>

            {/* Transport */}
            <div className="flex flex-col gap-2 text-sm text-white/60 leading-relaxed">
              <a
                className="underline underline-offset-2"
                href="https://maps.app.goo.gl/mdutRtCahYfw9U267"
                target="_blank"
              >
                <span className="uppercase tracking-wide">AIRPORT:</span>{' '}
                Aeroporto Humberto Delgado - Lisbon, Portugal - ~15 min ride to
                the venue
              </a>
              <a
                className="underline underline-offset-2"
                href="https://maps.app.goo.gl/StSERS29KNs4dX2X6"
                target="_blank"
              >
                <span className="uppercase tracking-wide">Train:</span> Santa
                Apolónia Station - ~10 min drive
              </a>
            </div>

            {/* Address + coordinates */}
            <div className="flex flex-col gap-2.5 lg:gap-5 shrink-0 text-left">
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
