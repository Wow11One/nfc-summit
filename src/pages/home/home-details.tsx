import { HomeHotelsCarousel } from './home-hotels-carousel'
import { HomeAbout } from './home-about'
import { HomeExperience } from './home-experience'
import { HomeHotel } from './home-hotel'
import { HomeGallery } from './home-gallery'
import { HomeCommunity } from './home-community'
import { HomeReviews } from './home-reviews'
import { HomeApply } from './home-apply'
import { HomeFaq } from './home-faq'
import { HomeFooter } from './home-footer'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Location', href: '#location' },
  { label: 'The Hotel', href: '#hotel' },
  { label: 'Apply', href: '#apply' },
]

export function HomeDetails() {
  return (
    <div className="font-primary text-white bg-[#0A0A0A]">
      {/* ── Hero (full viewport) ── */}
      <div className="relative h-screen overflow-hidden bg-black">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: 'url(/landing/images/background.png)' }}
        />

        {/* ── Header ── */}
        <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between pl-[100px] pr-[132px] py-5 bg-[#0A0A0A]/80 border-b border-[#27272A]">
          <img
            src="/header/nomadz-logo-white.svg"
            alt="NOMADZ"
            className="w-auto h-6"
          />
          <nav>
            <ul className="flex items-center gap-[30px]">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm font-medium tracking-[0.15em] uppercase text-[#9F9FA9] hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* takes place of absolute header */}
        <div
          style={{
            height: 24 + 20 + 20, // padding 20 top, content - 24, padding 20 bottom
          }}
        />

        {/* ── Hero content — centered in viewport ── */}
        <main className="relative z-10 h-[calc(100%-64px)] flex flex-col items-center justify-center px-8 text-center gap-6">
          <img
            src="/landing/svgs/nfc-summit-logo.svg"
            alt="The Solana Hotel"
            className="w-full max-w-[470px]"
            draggable={false}
          />

          <p className="text-2xl text-white font-medium">
            Lisbon, June 1–8, 2026
          </p>

          {/* Hotel cards carousel */}
          <div className="w-full max-w-6xl px-4">
            <HomeHotelsCarousel />
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#apply"
              className="text-sm font-bold uppercase w-[180px] sm:w-[200px] py-3 bg-[#F4F4F5] text-[#18181B] text-center"
            >
              Book Your Spot
            </a>
            <a
              href="#about"
              className="border border-white text-white text-sm font-bold uppercase w-[164px] sm:w-[180px] py-3 text-center"
            >
              Learn More
            </a>
          </div>
        </main>
      </div>

      {/* ── Sections below the fold ── */}
      <HomeAbout />
      <HomeExperience />
      <HomeHotel />
      <HomeGallery />
      <HomeCommunity />
      <HomeReviews />
      <HomeApply />
      <HomeFaq />
      <HomeFooter />
    </div>
  )
}
