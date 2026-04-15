import { HomeHotelsCarousel } from './home-hotels-carousel'
import { HomeNfc } from './home-nfc'
import { HomeAbout } from './home-about'
// import { HomeExperience } from './home-experience'
// import { HomeHotel } from './home-hotel'
// import { HomeGallery } from './home-gallery'
// import { HomeCommunity } from './home-community'
// import { HomeReviews } from './home-reviews'
// import { HomeApply } from './home-apply'
// import { HomeFaq } from './home-faq'
import { HomeFooter } from './home-footer'
import { useEffect, useState } from 'react'
import { NOMADZ_EVENT_URL } from '@/utils/constants'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Location', href: '#location' },
  { label: 'The Hotel', href: '#hotel' },
]

export function HomeDetails() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <div className="font-primary text-white bg-[#0A0A0A]">
      {/* ── Mobile fullscreen nav overlay ── */}
      <div
        className={`fixed inset-0 z-50 bg-[#0A0A0A] flex-col transition-opacity duration-300 hidden ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay header */}
        <div className="flex items-center justify-between px-6 py-5">
          <img
            src="/header/nomadz-logo-white.svg"
            alt="NOMADZ"
            className="w-auto h-6"
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="p-1 text-white"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col items-center justify-center flex-1 gap-8">
          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-xl font-medium tracking-[0.2em] uppercase text-white"
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
                opacity: menuOpen ? 1 : 0,
                transition: `opacity 0.3s ease ${i * 60}ms, transform 0.3s ease ${i * 60}ms, color 0.2s`,
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* ── Hero (full viewport) ── */}
      <div className="relative lg:h-screen lg:overflow-hidden bg-black">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover hidden lg:block"
          style={{ backgroundImage: 'url(/landing/images/background.png)' }}
        />

        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover lg:hidden"
          style={{
            backgroundImage: 'url(/landing/images/background-mobile.png)',
          }}
        />

        {/* ── Header ── */}
        <header className="lg:flex hidden absolute top-0 left-0 right-0 z-20 items-center justify-between px-6 sm:pl-[100px] sm:pr-[132px] py-5 bg-[#0A0A0A]/80 border-b border-[#27272A]">
          <img
            src="/header/nomadz-logo-white.svg"
            alt="NOMADZ"
            className="w-[300px] lg:w-auto h-6"
          />
          <nav className="hidden md:block">
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

          {/* Mobile burger */}
          <button
            className="p-1 text-white hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </header>

        <div className="lg:hidden flex w-full absolute top-0 left-0 right-0 z-20 items-center justify-center mt-10">
          <img
            src="/header/nomadz-logo-white.svg"
            alt="NOMADZ"
            className="w-auto h-6"
          />
        </div>

        {/* takes place of absolute header */}
        <div
          style={{
            height: 24 + 20 + 20, // padding 20 top, content - 24, padding 20 bottom
          }}
        />

        {/* ── Hero content — centered in viewport ── */}
        <main className="lg:mt-0 mt-10 relative z-10 h-[calc(100%-64px)] flex flex-col items-center justify-center px-8 text-center gap-6">
          <img
            src="/landing/svgs/nfc-summit-logo.svg"
            alt="The NFC summit"
            className="w-full max-w-[280px] lg:max-w-[470px]"
            draggable={false}
          />

          <p className="text-xl lg:text-2xl text-white font-medium">
            4-6 June, Lisbon
          </p>

          {/* Hotel cards carousel */}
          <div className="w-full max-w-[1200px] lg:px-4">
            <HomeHotelsCarousel />
          </div>

          <div className="flex lg:flex-row flex-col items-center gap-4 lg:pb-0 pb-8 lg:w-auto w-full">
            <a
              href={NOMADZ_EVENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase w-full max-w-[420px] lg:w-[204px] py-3 bg-[#F4F4F5] text-[#18181B] text-center"
            >
              Book Your Spot
            </a>
            <a
              href={NOMADZ_EVENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white text-sm font-bold uppercase w-full max-w-[420px] lg:w-[204px] py-3 text-center"
            >
              Learn More
            </a>
          </div>
        </main>
      </div>

      {/* ── Sections below the fold ── */}
      <HomeNfc />
      <HomeAbout />
      {/* <HomeExperience />
      <HomeHotel />
      <HomeGallery />
      <HomeCommunity />
      <HomeReviews />
      <HomeApply />
      <HomeFaq /> */}
      <HomeFooter />
    </div>
  )
}
