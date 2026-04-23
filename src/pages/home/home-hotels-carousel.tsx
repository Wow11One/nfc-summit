import { useState, useCallback } from 'react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

// ── Types ──────────────────────────────────────────────────────────────────

interface HotelImage {
  href: string
}

interface Hotel {
  id: string
  name: string
  city: string
  countryCode: string
  discount?: number
  images: HotelImage[]
  ratestellarId: string
}

interface SearchResponse {
  success: boolean
  data: {
    properties: Hotel[]
  }
}

const redirectToNomadz = (ratestellarId: string) =>
  `https://nomadz.xyz/property/${ratestellarId}?checkIn=2026-06-03&checkOut=2026-06-07&occupancies=1-&referralCode=NFC`

// ── API ────────────────────────────────────────────────────────────────────

async function fetchHotels(): Promise<Hotel[]> {
  const { data } = await axios.get<SearchResponse>(`${API_URL}/bookings/search`, {
    params: {
      latitude: 38.7310917,
      longitude: -9.1058659,
      radius: 5000,
      occupancies: '1-',
      checkIn: '2026-06-02',
      checkOut: '2026-06-06',
      stars: [2, 3, 4, 5],
      sortBy: 'discount',
      sortDirection: 'desc',
      limit: 15,
    },
    paramsSerializer: params => {
      const parts: string[] = []
      for (const [key, val] of Object.entries(params)) {
        if (Array.isArray(val)) {
          val.forEach(v => parts.push(`${key}[]=${encodeURIComponent(v)}`))
        } else {
          parts.push(`${key}=${encodeURIComponent(val as string)}`)
        }
      }
      return parts.join('&')
    },
  })

  console.log(data.data, 'data.data', `${API_URL}/bookings/search`)
  return data.data.properties
}

// ── Inner image carousel ───────────────────────────────────────────────────

function HotelImageCarousel({ images, name }: { images: HotelImage[]; name: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const srcs = images.map((img) => (typeof img === 'string' ? img : img.href))

  if (srcs.length === 0) {
    return (
      <div className="aspect-[371/248] bg-[#1a1a1a] flex items-center justify-center">
        <span className="text-[#555] text-xs uppercase tracking-widest">No images available</span>
      </div>
    )
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex(prev => (prev === 0 ? srcs.length - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex(prev => (prev === srcs.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative overflow-hidden aspect-[371/248] group">
      <div
        className="flex h-full transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {srcs.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${name} — photo ${i + 1}`}
            className="flex-shrink-0 w-full h-full object-cover object-center"
            draggable={false}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.55) 100%)' }}
      />

      {srcs.length > 1 && (
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
              const end = Math.min(srcs.length - 1, start + dotCount - 1)
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
                    i === currentIndex ? 'bg-white w-[2.5px] h-3' : 'bg-[#C8C8C8] w-[5px] h-0.5'
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

// ── Hotel card ─────────────────────────────────────────────────────────────

function HotelCard({ hotel }: { hotel: Hotel }) {

  console.log('hotel', hotel)
  return (
    <div
      className="bg-[#151515]/90 backdrop-blur-sm border border-[#27272A] flex flex-col cursor-pointer w-full"
      onClick={() => window.open(redirectToNomadz(hotel.ratestellarId), "_blank", "noopener,noreferrer")}    
    >
      <HotelImageCarousel images={hotel.images?.slice(0, 8) || []} name={hotel.name} />

      <div className="p-4 flex flex-col gap-2 flex-1">
        <span className="text-white text-sm font-medium line-clamp-2 leading-snug flex-1 text-left">
          {hotel.name}
        </span>

        <div className="flex items-center justify-between gap-2 mt-auto">
          <span className="text-[#A9A9A9] text-xs shrink-0">{hotel.city}</span>

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

// ── Skeleton card ──────────────────────────────────────────────────────────

function SkeletonCard() {
  return (
    <div className="bg-[#151515]/90 border border-[#27272A] flex flex-col animate-pulse w-full">
      <div className="aspect-[371/248] bg-[#2a2a2a]" />
      <div className="p-4 flex flex-col gap-3">
        <div className="h-4 bg-[#2a2a2a] rounded w-3/4" />
        <div className="h-3 bg-[#2a2a2a] rounded w-1/3" />
      </div>
    </div>
  )
}

// ── Main carousel ──────────────────────────────────────────────────────────

const CARDS_PER_SLIDE = 3

export function HomeHotelsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const { data: hotels = [], isLoading } = useQuery({
    queryKey: ['hotels-lisbon'],
    queryFn: fetchHotels,
    staleTime: 5 * 60 * 1000,
  })

  const groups: Hotel[][] = []
  for (let i = 0; i < hotels.length; i += CARDS_PER_SLIDE) {
    groups.push(hotels.slice(i, i + CARDS_PER_SLIDE))
  }

  const totalSlides = groups.length

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? totalSlides - 1 : prev - 1))
  }, [totalSlides])

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev === totalSlides - 1 ? 0 : prev + 1))
  }, [totalSlides])

  if (isLoading) {
    return (
      <>
        {/* Mobile skeleton */}
        <div className="flex lg:hidden flex-col gap-4 items-center max-w-[400px] mx-auto w-full">
          {Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
        {/* Desktop skeleton */}
        <div className="hidden lg:flex items-center gap-3 w-full">
          <div className="shrink-0 w-8 h-12" />
          <div className="flex-1 grid grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
          <div className="shrink-0 w-8 h-12" />
        </div>
      </>
    )
  }

  return (
    <>
      {/* ── Mobile: 3 cards in a column ── */}
      <div className="flex lg:hidden flex-col gap-4 items-center max-w-[400px] mx-auto w-full">
        {hotels.slice(0, 3).map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>

      {/* ── Desktop: carousel with side arrows ── */}
      <div className="hidden lg:flex items-center gap-3 w-full">
        {!!hotels.length && (
          <button
            onClick={handlePrev}
            className="shrink-0 w-8 h-12 bg-[#262626]/80 hover:bg-[#262626] flex items-center justify-center transition-colors"
            aria-label="Previous slide"
          >
            <CaretLeft weight="bold" className="text-white w-6 h-6" />
          </button>
        )}

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
                {group.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {!!hotels.length && (
          <button
            onClick={handleNext}
            className="shrink-0 w-8 h-12 bg-[#262626]/80 hover:bg-[#262626] flex items-center justify-center transition-colors"
            aria-label="Next slide"
          >
            <CaretRight weight="bold" className="text-white w-6 h-6" />
          </button>
        )}
      </div>
    </>
  )
}
