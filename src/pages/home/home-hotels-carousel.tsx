import { useState, useCallback } from 'react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

interface Hotel {
  id: number
  name: string
  city: string
  country: string
  discount?: number
  images: string[]
}

const HOTELS: Hotel[] = [
  {
    id: 1,
    name: 'Lisbon Marriott Hotel',
    city: 'Lisbon',
    country: 'PT',
    discount: 34,
    images: [
      '/landing/images/hotel/image-1.png',
      '/landing/images/hotel/image-2.png',
      '/landing/images/hotel/image-3.png',
      '/landing/images/hotel/image-4.png',
    ],
  },
  {
    id: 2,
    name: 'Bairro Alto Hotel',
    city: 'Lisbon',
    country: 'PT',
    discount: 28,
    images: [
      '/landing/images/hotel/image-3.png',
      '/landing/images/hotel/image-1.png',
      '/landing/images/hotel/image-4.png',
    ],
  },
  {
    id: 3,
    name: 'The Lumiares Hotel & Spa',
    city: 'Lisbon',
    country: 'PT',
    discount: 41,
    images: [
      '/landing/images/hotel/image-2.png',
      '/landing/images/hotel/image-4.png',
      '/landing/images/hotel/image-1.png',
    ],
  },
  {
    id: 4,
    name: 'Memmo Alfama Design Hotel',
    city: 'Lisbon',
    country: 'PT',
    discount: 19,
    images: [
      '/landing/images/hotel/image-4.png',
      '/landing/images/hotel/image-2.png',
      '/landing/images/hotel/image-3.png',
    ],
  },
  {
    id: 5,
    name: 'Hotel Avenida Palace',
    city: 'Lisbon',
    country: 'PT',
    discount: 55,
    images: [
      '/landing/images/hotel/image-1.png',
      '/landing/images/hotel/image-3.png',
    ],
  },
  {
    id: 6,
    name: 'Altis Grand Hotel',
    city: 'Lisbon',
    country: 'PT',
    images: [
      '/landing/images/hotel/image-2.png',
      '/landing/images/hotel/image-1.png',
      '/landing/images/hotel/image-4.png',
    ],
  },
]

function HotelImageCarousel({ images, name }: { images: string[]; name: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative overflow-hidden aspect-[371/248] group">
      <div
        className="flex h-full transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${name} — photo ${i + 1}`}
            className="flex-shrink-0 w-full h-full object-cover object-center"
            draggable={false}
          />
        ))}
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      {/* Controls — visible on hover */}
      {images.length > 1 && (
        <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={handlePrev}
            className="p-2 bg-black/50 hover:bg-black/75 transition-colors"
            aria-label="Previous photo"
          >
            <CaretLeft className="w-4 h-4 text-white" weight="bold" />
          </button>

          <div className="flex items-center gap-3.5">
            {(() => {
              const dotCount = 7
              const half = Math.floor(dotCount / 2)
              let start = Math.max(0, currentIndex - half)
              const end = Math.min(images.length - 1, start + dotCount - 1)
              start = Math.max(0, end - dotCount + 1)
              return Array.from({ length: end - start + 1 }, (_, k) => start + k).map(i => (
                <button
                  key={i}
                  onClick={e => {
                    e.preventDefault()
                    e.stopPropagation()
                    setCurrentIndex(i)
                  }}
                  className={`shrink-0 rounded-[0.5px] transition-all duration-200 ${
                    i === currentIndex
                      ? 'bg-white w-[2.5px] h-3'
                      : 'bg-[#C8C8C8] w-[5px] h-0.5'
                  }`}
                  aria-label={`Photo ${i + 1}`}
                />
              ))
            })()}
          </div>

          <button
            onClick={handleNext}
            className="p-2 bg-black/50 hover:bg-black/75 transition-colors"
            aria-label="Next photo"
          >
            <CaretRight className="w-4 h-4 text-white" weight="bold" />
          </button>
        </div>
      )}
    </div>
  )
}

function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <div className="bg-[#151515]/90 backdrop-blur-sm border border-[#27272A] flex flex-col">
      <HotelImageCarousel images={hotel.images} name={hotel.name} />

      <div className="p-4 flex flex-col gap-2 flex-1">
        <span className="text-white text-sm font-medium line-clamp-2 leading-snug flex-1 text-left">
          {hotel.name}
        </span>

        <div className="flex items-center justify-between gap-2 mt-auto">
          <span className="text-[#A9A9A9] text-xs shrink-0">
            {hotel.city}
          </span>

          {hotel.discount && hotel.discount > 0 ? (
            <div className="border border-[#444444] px-2.5 py-1.5 shrink-0">
              <span
                className="text-sm font-bold uppercase whitespace-nowrap"
                style={{
                  background: 'linear-gradient(-65deg, #4effd3 0%, #50b1d8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {hotel.discount}% discount
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

const CARDS_PER_SLIDE = 3

export function HomeHotelsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const groups: Hotel[][] = []
  for (let i = 0; i < HOTELS.length; i += CARDS_PER_SLIDE) {
    groups.push(HOTELS.slice(i, i + CARDS_PER_SLIDE))
  }

  const totalSlides = groups.length

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? totalSlides - 1 : prev - 1))
  }, [totalSlides])

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev === totalSlides - 1 ? 0 : prev + 1))
  }, [totalSlides])

  return (
    <>
      {/* ── Mobile: 3 cards in a column ── */}
      <div className="flex lg:hidden flex-col gap-8 items-center max-w-[400px] mx-auto w-full">
        {HOTELS.slice(0, 3).map(hotel => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>

      {/* ── Desktop: carousel with side arrows ── */}
      <div className="hidden lg:flex items-center gap-3 w-full">
        {/* Left arrow */}
        <button
          onClick={handlePrev}
          className="shrink-0 w-8 h-12 bg-[#262626]/80 hover:bg-[#262626] flex items-center justify-center transition-colors"
          aria-label="Previous slide"
        >
          <CaretLeft weight="bold" className="text-white w-6 h-6" />
        </button>

        {/* Cards */}
        <div className="overflow-hidden flex-1">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {groups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="flex-shrink-0 w-full grid grid-cols-3 gap-10 lg:gap-8"
              >
                {group.map(hotel => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={handleNext}
          className="shrink-0 w-8 h-12 bg-[#262626]/80 hover:bg-[#262626] flex items-center justify-center transition-colors"
          aria-label="Next slide"
        >
          <CaretRight weight="bold" className="text-white w-6 h-6" />
        </button>
      </div>
    </>
  )
}
