import { useState } from 'react'

const BASE = 'https://nomadz.xyz'

function IconX() {
  return (
    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
      <path d="M16.1279 16.0698L10.7288 7.59056L16.0146 1.77638C16.2001 1.56731 16.2957 1.29356 16.2806 1.01448C16.2656 0.735398 16.1412 0.473483 15.9344 0.285517C15.7276 0.0975503 15.455 -0.00131693 15.1757 0.0103499C14.8965 0.0220167 14.6331 0.143277 14.4427 0.347842L9.55075 5.73275L6.21484 0.492112C6.11897 0.341377 5.98663 0.217258 5.83006 0.13124C5.6735 0.0452212 5.49776 8.23661e-05 5.31912 0H1.07068C0.880416 8.76987e-05 0.693671 0.0512811 0.529964 0.148229C0.366256 0.245177 0.231595 0.38432 0.140058 0.551113C0.0485206 0.717907 0.00346741 0.906226 0.0096075 1.09639C0.0157476 1.28655 0.0728555 1.47157 0.174962 1.63211L5.57403 10.1113L0.284714 15.9255C0.188946 16.0284 0.11455 16.1492 0.0658357 16.2811C0.0171216 16.4129 -0.0049413 16.5531 0.000925855 16.6935C0.00679301 16.8339 0.0404736 16.9718 0.100015 17.0991C0.159557 17.2264 0.243776 17.3407 0.34779 17.4352C0.451805 17.5297 0.573547 17.6027 0.705959 17.6498C0.838372 17.6969 0.978822 17.7173 1.11917 17.7098C1.25952 17.7022 1.39697 17.6669 1.52356 17.6058C1.65015 17.5447 1.76337 17.4592 1.85664 17.354L6.75209 11.9691L10.088 17.2098C10.1839 17.3605 10.3162 17.4846 10.4728 17.5706C10.6293 17.6566 10.8051 17.7018 10.9837 17.7019H15.2322C15.4224 17.7018 15.6092 17.6506 15.7729 17.5536C15.9366 17.4567 16.0712 17.3175 16.1628 17.1507C16.2543 16.984 16.2994 16.7956 16.2932 16.6055C16.2871 16.4153 16.23 16.2303 16.1279 16.0698ZM11.567 15.5776L3.00549 2.12422H4.73585L13.2974 15.5776H11.567Z" fill="currentColor" />
    </svg>
  )
}
function IconTelegram() {
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.9056 0.119281C18.9868 -0.335944 20.1458 0.578272 19.9549 1.73573L17.7001 15.407C17.4827 16.7252 16.0349 17.4815 14.8256 16.8246C13.8136 16.275 12.3122 15.429 10.959 14.5448C10.2834 14.1032 8.21439 12.6875 8.4687 11.6797C8.68614 10.818 12.1643 7.58031 14.1519 5.65484C14.9326 4.8985 14.577 4.46156 13.655 5.15795C11.3677 6.88545 7.69545 9.51194 6.48108 10.2511C5.40965 10.9032 4.85023 11.0145 4.18295 10.9032C2.96443 10.7002 1.83472 10.3858 0.912408 10.0035C-0.334171 9.48669 -0.273451 7.7736 0.911563 7.27472L17.9056 0.119281Z" fill="currentColor" />
    </svg>
  )
}
function IconLinkedIn() {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
      <path d="M18.7826 0H1.56522C1.1501 0 0.751977 0.164906 0.458441 0.458441C0.164906 0.751977 0 1.1501 0 1.56522V18.7826C0 19.1977 0.164906 19.5958 0.458441 19.8894C0.751977 20.1829 1.1501 20.3478 1.56522 20.3478H18.7826C19.1977 20.3478 19.5958 20.1829 19.8894 19.8894C20.1829 19.5958 20.3478 19.1977 20.3478 18.7826V1.56522C20.3478 1.1501 20.1829 0.751977 19.8894 0.458441C19.5958 0.164906 19.1977 0 18.7826 0ZM7.04348 14.8696C7.04348 15.0771 6.96102 15.2762 6.81426 15.423C6.66749 15.5697 6.46843 15.6522 6.26087 15.6522C6.05331 15.6522 5.85425 15.5697 5.70748 15.423C5.56071 15.2762 5.47826 15.0771 5.47826 14.8696V8.6087C5.47826 8.40113 5.56071 8.20208 5.70748 8.05531C5.85425 7.90854 6.05331 7.82609 6.26087 7.82609C6.46843 7.82609 6.66749 7.90854 6.81426 8.05531C6.96102 8.20208 7.04348 8.40113 7.04348 8.6087V14.8696ZM6.26087 7.04348C6.02869 7.04348 5.80173 6.97463 5.60868 6.84564C5.41563 6.71665 5.26517 6.53331 5.17632 6.3188C5.08746 6.1043 5.06422 5.86826 5.10951 5.64055C5.15481 5.41283 5.26661 5.20366 5.43079 5.03948C5.59496 4.87531 5.80413 4.7635 6.03185 4.71821C6.25957 4.67291 6.4956 4.69616 6.71011 4.78501C6.92461 4.87386 7.10795 5.02433 7.23694 5.21737C7.36593 5.41042 7.43478 5.63739 7.43478 5.86957C7.43478 6.18091 7.3111 6.4795 7.09095 6.69965C6.8708 6.9198 6.57221 7.04348 6.26087 7.04348ZM15.6522 14.8696C15.6522 15.0771 15.5697 15.2762 15.423 15.423C15.2762 15.5697 15.0771 15.6522 14.8696 15.6522C14.662 15.6522 14.4629 15.5697 14.3162 15.423C14.1694 15.2762 14.087 15.0771 14.087 14.8696V11.3478C14.087 10.8289 13.8808 10.3313 13.5139 9.96436C13.147 9.59744 12.6493 9.3913 12.1304 9.3913C11.6115 9.3913 11.1139 9.59744 10.747 9.96436C10.38 10.3313 10.1739 10.8289 10.1739 11.3478V14.8696C10.1739 15.0771 10.0915 15.2762 9.94469 15.423C9.79792 15.5697 9.59886 15.6522 9.3913 15.6522C9.18374 15.6522 8.98468 15.5697 8.83792 15.423C8.69115 15.2762 8.6087 15.0771 8.6087 14.8696V8.6087C8.60967 8.417 8.68096 8.23233 8.80906 8.08971C8.93715 7.94709 9.11314 7.85645 9.30363 7.83498C9.49412 7.8135 9.68587 7.86269 9.8425 7.97321C9.99913 8.08373 10.1097 8.2479 10.1534 8.43457C10.6828 8.07542 11.3 7.86727 11.9388 7.83246C12.5776 7.79766 13.2138 7.93752 13.7792 8.23702C14.3445 8.53652 14.8175 8.98434 15.1475 9.53241C15.4775 10.0805 15.652 10.7081 15.6522 11.3478V14.8696Z" fill="currentColor" />
    </svg>
  )
}
function IconMedium() {
  return (
    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
      <path d="M20.9424 7.39847C20.9428 7.40183 20.9431 7.40522 20.9435 7.40858C20.8566 9.11201 20.4262 11.0205 19.2889 12.3419C18.8557 12.8453 18.2639 13.2026 17.6415 13.2278C17.0461 13.2518 16.4928 12.9696 16.0776 12.5693C14.7418 11.278 14.2682 9.02105 14.2008 7.24256C14.1252 5.24408 14.5461 2.71282 15.9452 1.18747C16.3466 0.749865 16.9256 0.415245 17.5299 0.400425C18.1218 0.385905 18.6898 0.675614 19.1056 1.08988C20.1552 2.13568 20.6419 3.75862 20.8444 5.1889C20.8832 5.46322 20.9251 5.83829 20.9305 6.1103C20.9188 6.23798 20.9257 6.36365 20.9217 6.49085C20.9114 6.81059 20.9143 7.07966 20.9424 7.39847Z" fill="currentColor" />
      <path d="M0 6.32059C0.0393087 6.17101 0.0481782 5.94976 0.0709761 5.78974C0.112016 5.51974 0.168887 5.25241 0.241296 4.9891C1.09517 1.84789 4.14771 -0.288797 7.38294 0.031783C7.66788 0.060013 7.93269 0.0905832 8.21193 0.157183C8.59089 0.244303 8.96259 0.360403 9.32376 0.504493C10.6561 1.05862 11.7785 2.02066 12.53 3.25249C13.4748 4.80376 13.7671 6.66604 13.3427 8.43214C12.9125 10.1987 11.795 11.7204 10.2383 12.6596C8.70531 13.5866 6.8655 13.8628 5.12793 13.4267C3.39594 12.9903 1.90661 11.8871 0.984606 10.3573C0.552348 9.6442 0.255426 8.85742 0.108758 8.0365C0.0700557 7.82185 0.0424848 7.61368 0.0263213 7.39636C0.0219116 7.33705 0.015329 7.28434 0 7.22656V6.32059Z" fill="currentColor" />
      <path d="M22.8052 12.5712C22.7541 12.5564 22.7004 12.5396 22.6548 12.5117C22.2771 12.2803 22.0673 11.3571 21.9767 10.9337C21.7195 9.73151 21.6433 8.47628 21.6245 7.24952C21.6028 5.82995 21.6566 4.40459 21.914 3.00485C22.0115 2.47484 22.1518 1.78658 22.4509 1.33103C22.5229 1.22129 22.6299 1.09643 22.7651 1.07219C22.8494 1.05707 22.9282 1.08827 22.9947 1.13882C23.6382 1.62842 23.8805 4.15787 23.9351 5.00855C23.9503 5.24201 23.962 5.47568 23.9704 5.70947C23.9758 5.87684 23.9728 6.09854 24.0001 6.26207V7.60097C23.9812 7.67954 23.9758 7.9031 23.9719 7.99241C23.9622 8.20799 23.9507 8.42348 23.9374 8.63885C23.8636 9.70304 23.7045 11.1256 23.2635 12.113C23.1653 12.3331 23.0367 12.4926 22.8052 12.5712Z" fill="currentColor" />
    </svg>
  )
}
function IconEthos() {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
      <path d="M9.26143 7.40402C9.91911 7.38904 10.6384 7.40264 11.3016 7.40237L15.5652 7.40358L17.2179 7.40602C17.4596 7.40501 18.128 7.3844 18.3234 7.43012C18.378 7.55435 18.3557 8.14296 18.3567 8.32851L18.3696 9.63241C18.3717 9.91059 18.4082 10.9855 18.3606 11.1603C18.2469 11.2075 17.4624 11.1865 17.2842 11.1863L15.4141 11.1842L9.0995 11.1875C9.07046 11.2623 8.89316 12.068 8.89411 12.1186C8.90187 12.5401 8.17255 14.5287 8.20757 14.7534C8.28249 14.8136 9.05523 14.7913 9.19689 14.7913L10.9395 14.7934L15.966 14.8047C16.7136 14.8067 17.5947 14.7824 18.3303 14.8081C18.3547 15.207 18.3362 15.7659 18.3357 16.1758L18.332 18.5726C17.9686 18.5838 17.5498 18.5733 17.1819 18.573L9.27048 18.5758L7.15306 18.5746C6.81528 18.5753 6.44275 18.5845 6.104 18.5654C6.0442 18.5622 6.04355 18.548 6.01603 18.5092C6.01366 18.4345 6.03154 18.398 6.07623 18.3357C6.7312 17.4218 7.40174 16.5014 7.824 15.451C7.86807 15.3414 8.06368 14.9531 8.01607 14.8598C7.84541 14.8231 7.47398 14.8362 7.28163 14.8373C6.96471 14.8394 6.64777 14.8394 6.33083 14.8378L2.15653 14.8426L0.932334 14.8495C0.693146 14.8515 0.447768 14.8577 0.20853 14.8486C0.15674 14.8465 0.0892943 14.8396 0.0594751 14.7913C0.0277351 14.7399 0.0159788 14.6689 0.0130564 14.6087C0.0134056 14.3084 0.0205302 14.0056 0.0192023 13.7058L0.0150208 12.0148C0.0149749 11.7643 -0.0214381 11.3851 0.0378005 11.1512C0.0448952 11.1232 0.156197 11.1203 0.184119 11.1182C0.725715 11.0775 1.30765 11.111 1.85312 11.1113C2.65268 11.1117 8.9225 11.1472 9.00896 11.0956C9.22348 10.8216 9.12089 8.56906 9.13578 8.11397C9.14104 7.95241 9.05512 7.64854 9.09103 7.45813C9.14012 7.41514 9.19464 7.41477 9.26143 7.40402Z" fill="currentColor" />
      <path d="M6.10417 0.0127343C6.59119 -0.0135031 7.30371 0.00894365 7.81197 0.0088977L11.1703 0.00841532L15.7601 0.00965564C16.591 0.00988539 17.4967 -0.00837985 18.3229 0.0175589C18.3555 0.332822 18.3311 1.02777 18.3356 1.37724L18.3561 2.8549C18.3597 3.07732 18.3811 3.56731 18.345 3.75729C18.3102 3.78904 18.2158 3.78773 18.1639 3.78704C17.3635 3.77643 16.5611 3.77808 15.7608 3.77755L10.1267 3.78596L9.04154 3.78743C8.82962 3.78688 8.44224 3.77369 8.25152 3.81406C8.22437 3.85321 8.24631 3.97831 8.25941 4.02414C8.4016 4.52201 8.57143 5.00715 8.66781 5.51775C8.68927 5.63143 8.73664 5.69867 8.7479 5.82405L8.74965 5.84509C8.82289 6.3786 8.97613 6.87963 9.0412 7.44732C8.37616 7.46375 7.67131 7.45346 7.00345 7.45548L3.21651 7.46754L1.16696 7.47172C0.861897 7.47257 0.305684 7.48992 0.0222186 7.45826C-0.0012389 7.28404 0.00686653 7.00976 0.00706182 6.82718L0.00715612 5.82552L0.00243008 4.51275C0.00169259 4.29072 -0.00768574 3.94139 0.01616 3.72841C0.162042 3.6216 7.91575 3.79724 8.09219 3.66778C8.09399 3.62075 7.94917 3.36345 7.91811 3.29804C7.5498 2.52254 7.14482 1.79761 6.69338 1.06862C6.56171 0.856008 6.12937 0.2684 6.05755 0.106081C6.06387 0.0404189 6.05321 0.0655309 6.10417 0.0127343Z" fill="currentColor" />
    </svg>
  )
}

const SOCIAL = [
  { href: 'https://x.com/NOMADZxyz', label: 'X', icon: <IconX /> },
  { href: 'https://t.me/nomadz_co', label: 'Telegram', icon: <IconTelegram /> },
  { href: 'https://www.linkedin.com/company/nomadzxyz/', label: 'LinkedIn', icon: <IconLinkedIn /> },
  { href: 'https://medium.com/@nomadzxyz', label: 'Medium', icon: <IconMedium /> },
  { href: 'https://app.ethos.network/profile/x/NOMADZxyz', label: 'Ethos', icon: <IconEthos /> },
]

const PARTNERS = [
  {
    href: 'https://solanamobile.radiant.nexus/',
    label: 'solana-mobile-hackaton',
    eyebrow: 'winner',
    img: `${BASE}/images/elements/landing/solana-mobile-hackaton.png`,
    imgClass: 'w-auto h-9',
  },
  {
    href: 'https://solana.org/',
    label: 'solana-foundation',
    eyebrow: 'supported by',
    img: `${BASE}/svgs/supporters/solana-foundation.svg`,
    imgClass: 'w-auto h-[22px]',
  },
  {
    href: 'https://partners.circle.com/partner/nomadz',
    label: 'circle',
    eyebrow: 'alliance member',
    img: `${BASE}/svgs/supporters/circle.svg`,
    imgClass: 'w-auto h-[30px]',
  },
]

const CONTACT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxWAvIST7TjUAn3BRJXv_8p1xS0RNbHnKI04nkw2HyKKsCTJ0_QEl7e-OVWFt6EF9ntCQ/exec'

export function HomeFooter() {
  const [contact, setContact] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({ name: false, email: false, message: false })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const nameError = !contact.name.trim()
    const emailError = !contact.email.trim()
    const messageError = !contact.message.trim()

    if (nameError || emailError || messageError) {
      setErrors({ name: nameError, email: emailError, message: messageError })
      return
    }

    setErrors({ name: false, email: false, message: false })
    setIsLoading(true)

    fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json', Host: 'script.google.com' },
      body: JSON.stringify(contact),
    })
      .then(() => {
        setStatus('success')
        setContact({ name: '', email: '', message: '' })
      })
      .catch(() => setStatus('error'))
      .finally(() => setIsLoading(false))
  }

  return (
    <footer className="bg-[#101010] py-12 text-white">
      <div className="mx-auto max-lg:max-w-[780px] max-w-[1078px] px-5 sm:px-8">

        {/* Top row */}
        <div className="flex flex-wrap mb-12 gap-y-6 md:gap-y-12 gap-x-16">

          {/* Contact form — desktop only */}
          <div className="justify-center hidden md:flex">
            <div className="flex flex-col gap-4 w-80">
              <p className="font-medium tracking-wide text-white uppercase">Contact &amp; Support</p>
              <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <input
                  className={`text-sm bg-[#080808] border px-4 py-1.5 w-full text-white placeholder:text-[#AAAAAA] focus:outline-none focus:border-white/40 ${errors.name ? 'border-red-500' : 'border-[#222222]'}`}
                  type="text"
                  placeholder="name"
                  maxLength={100}
                  value={contact.name}
                  onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                />
                <input
                  className={`text-sm bg-[#080808] border px-4 py-1.5 w-full text-white placeholder:text-[#AAAAAA] focus:outline-none focus:border-white/40 ${errors.email ? 'border-red-500' : 'border-[#222222]'}`}
                  type="email"
                  placeholder="email"
                  maxLength={100}
                  value={contact.email}
                  onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                />
                <textarea
                  className={`text-sm bg-[#080808] border px-4 py-1.5 w-full text-white resize-none placeholder:text-[#AAAAAA] focus:outline-none focus:border-white/40 ${errors.message ? 'border-red-500' : 'border-[#222222]'}`}
                  placeholder="message"
                  rows={2}
                  maxLength={400}
                  value={contact.message}
                  onChange={(e) => setContact((c) => ({ ...c, message: e.target.value }))}
                />
                {status === 'success' && (
                  <p className="text-xs text-[#4effd3]">Thanks! We&apos;ll get back to you soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-xs text-red-400">Something went wrong. Please try again.</p>
                )}
                <button
                  type="submit"
                  disabled={isLoading || status === 'success'}
                  className="w-full h-[38px] border border-[#222222] bg-white font-bold uppercase text-sm transition-colors text-black disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'sending…' : status === 'success' ? 'sent!' : 'send'}
                </button>
              </form>
            </div>
          </div>

          {/* Nav + legal + social */}
          <div className="flex flex-col justify-between grow max-lg:contents">
            <div className="flex gap-16 max-lg:contents">

              {/* Navigation */}
              <div className="flex flex-col gap-8">
                <p className="font-medium tracking-wide text-white uppercase text-end">Navigation</p>
                <div className="flex flex-col gap-2 text-sm">
                  <a className="text-white hover:underline" href={`${BASE}/stays`} target="_blank" rel="noopener noreferrer">Stays</a>
                  <a className="text-white hover:underline" href={`${BASE}/events`} target="_blank" rel="noopener noreferrer">Events</a>
                </div>
              </div>

              {/* Legal */}
              <div className="flex flex-col gap-8">
                <p className="font-medium tracking-wide text-white uppercase">Legal &amp; Compliance</p>
                <div className="flex flex-col gap-2 text-sm">
                  <a className="text-white hover:underline" href={`${BASE}/terms-of-use`} target="_blank" rel="noopener noreferrer">Terms of use</a>
                  <a className="text-white hover:underline" href={`${BASE}/privacy-policy`} target="_blank" rel="noopener noreferrer">Privacy policy</a>
                </div>
              </div>

              {/* Social */}
              <div className="flex flex-col gap-4 justify-between border-[#292929] grow max-md:w-full max-md:mb-6 max-md:py-6 max-md:border-y max-md:-mx-8 max-md:px-8">
                <div className="space-y-8">
                  <p className="font-medium tracking-wide text-white uppercase lg:text-end">Social</p>
                  <div className="grid grid-cols-5 gap-4 lg:ml-auto w-fit">
                    {SOCIAL.map(({ href, label, icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center transition-colors rounded size-6"
                      >
                        {icon}
                        <span className="sr-only">{label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Partners */}
            <div className="flex items-center justify-end gap-10 mt-8 max-md:justify-between max-md:w-full lg:mt-0">
              {PARTNERS.map(({ href, label, eyebrow, img, imgClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-between gap-2 transition-colors bg-transparent cursor-pointer"
                >
                  <span className="text-[7px] sm:text-[10px]/[12px] font-medium text-white uppercase">{eyebrow}</span>
                  <div className="flex items-center flex-1">
                    <img src={img} className={imgClass} alt={label} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-9 mb-10 border-t border-[#292929] max-md:hidden" />

        {/* Bottom */}
        <div className="flex flex-col items-center gap-8 text-center">
          <p className="px-4 max-w-4xl text-sm text-[#CDCDCD]">
            Nomadz is a web3-native travel platform offering access to over 1 million stays with up to 60% discounts, alongside crypto payments and digital rewards. For us, freedom means unlocking borderless travel, crypto payments and rewarding adventure - for anyone, anywhere.
          </p>
          <div className="p-px bg-[#36363F] rounded-[8px]">
            <div className="bg-[#101010] rounded-[7px] p-0.5">
              <div className="p-px rounded-[5px] bg-gradient-to-r from-[#313145] to-[#181819]">
                <div className="bg-[#101010] rounded">
                  <div className="flex gap-2 items-center px-4 py-2 bg-[#0C0C0EA3] rounded">
                    <span className="text-xs text-white">powered by</span>
                    <div className="flex items-center gap-1">
                      <img src={`${BASE}/svgs/icons/solana-white.svg`} alt="SOLANA" className="h-[15px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
