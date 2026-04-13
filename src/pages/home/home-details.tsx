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
  { label: 'Experience', href: '#experience' },
  { label: 'The Hotel', href: '#hotel' },
  { label: 'Apply', href: '#apply' },
  { label: 'FAQ', href: '#faq' },
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

        {/* ── Header — floats above centered content ── */}
        <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between pl-[100px] pr-[132px] py-5 bg-[#0A0A0A]/80">
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

        {/* ── Hero content — vertically centered in full viewport ── */}
        <main className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
          <img
            src="/landing/svgs/solana-hotel-heading.svg"
            alt="The Solana Hotel"
            className="w-full max-w-[820px] mb-8"
            draggable={false}
          />

          <p className="mb-1 text-2xl font-light text-white">
            A coliving hotel block for founders, builders &amp; ecosystem contributors
          </p>
          <p className="text-2xl text-white font-medium mb-[72px]">
            Lisbon, June 1–8, 2026
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#apply"
              className="text-sm font-bold uppercase w-[180px] sm:w-[200px] py-4 bg-[#F4F4F5] text-[#18181B] text-center"
            >
              Book Your Spot
            </a>
            <a
              href="#about"
              className="border border-white text-white text-sm font-bold uppercase w-[164px] sm:w-[180px] py-4 text-center"
            >
              Learn More
            </a>
          </div>

          {/* ── Sponsor bar ── */}
          <div className="flex items-center justify-center gap-4 sm:gap-7 px-8 mt-[92px]">
            <a href="https://www.nfcsummit.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="/landing/images/nfc-summit.png"
                alt="NFC Summit"
                className="h-6 sm:h-[35px] w-auto hover:scale-105 transition-transform"
                draggable={false}
              />
            </a>
            <a href="https://solana.org/" target="_blank" rel="noopener noreferrer">
              <img
                src="/landing/svgs/solana-foundation-logo.svg"
                alt="Solana Foundation"
                className="h-3.5 sm:h-6 w-auto hover:scale-105 transition-transform"
                draggable={false}
              />
            </a>
            <a href="https://monkedao.io/" target="_blank" rel="noopener noreferrer">
              <img
                src="/landing/images/monke-dao.png"
                alt="Monke DAO"
                className="h-3.5 sm:h-6 w-auto hover:scale-105 transition-transform"
                draggable={false}
              />
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
