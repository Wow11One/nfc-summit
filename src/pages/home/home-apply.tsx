import { APPLY_MACROS_URL } from '@/constants/applicationForm'
import { useState } from 'react'
import { FadeUp } from '@/utils/FadeUp'

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
}

function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <label className="text-xs font-bold uppercase tracking-[0.15em] text-[#9F9FA9]">
        {label}
      </label>
      <input
        {...props}
        className="bg-[#121212] border border-[#3F3F46] text-white text-sm px-4 py-[18px] placeholder:text-[#52525B] focus:outline-none focus:border-[#52525B] transition-colors"
      />
    </div>
  )
}

function Textarea({ label, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#9F9FA9]">
        {label}
      </label>
      <textarea
        {...props}
        className="bg-[#121212] border border-[#3F3F46] text-white text-sm px-4 py-[18px] placeholder:text-[#52525B] focus:outline-none focus:border-[#52525B] transition-colors resize-none"
      />
    </div>
  )
}

export function HomeApply() {
  const [form, setForm] = useState({
    fullName: '',
    twitter: '',
    email: '',
    telegram: '',
    role: '',
    project: '',
    why: '',
    howHeard: '',
  })
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  const set = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitState('loading')
    fetch(APPLY_MACROS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        Host: 'script.google.com',
      },
      body: JSON.stringify(form),
    })
      .then(() => setSubmitState('success'))
      .catch(() => setSubmitState('error'))
  }

  return (
    <section id="apply" className="bg-[#161616] text-white px-5 sm:px-10 mx-auto pt-20 pb-6 border-b border-[#27272A]">
      <div className="max-w-[1104px] mx-auto">

        {/* Heading */}
        <FadeUp className="mb-12 text-center">
          <h2 className="font-display font-bold uppercase text-[48px] leading-[1.05] mb-4">
            Secure Your Partial Subsidy
          </h2>
          <p className="text-[#9F9FA9] text-base">
            Applications are open. Space is limited to 50+ curated guests.
          </p>
        </FadeUp>

        {/* Form card */}
        <FadeUp delay={100} className="md:max-w-[768px] mx-auto border border-[#27272A] bg-[#1A1A1A] px-12 pt-9 pb-5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8">

            {/* Row 1 */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Input
                label="Full Name"
                type="text"
                placeholder="Your name"
                value={form.fullName}
                onChange={set('fullName')}
              />
              <Input
                label="X (Twitter) Handle"
                type="text"
                placeholder="@solanabuilder"
                value={form.twitter}
                onChange={set('twitter')}
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Input
                label="Mail"
                type="email"
                placeholder="mail@example.com"
                value={form.email}
                onChange={set('email')}
              />
              <Input
                label="Telegram"
                type="text"
                placeholder="@solana_builder"
                value={form.telegram}
                onChange={set('telegram')}
              />
            </div>

            <Input
              label="Role"
              type="text"
              placeholder="Your role"
              value={form.role}
              onChange={set('role')}
            />

            <Input
              label="Project / Company"
              type="text"
              placeholder="What are you working on?"
              value={form.project}
              onChange={set('project')}
            />

            <Textarea
              label="Why do you want to attend?"
              placeholder="Tell us what you're hoping to get out of the experience"
              rows={4}
              value={form.why}
              onChange={set('why')}
            />

            <Input
              label="How did you hear about us?"
              type="text"
              placeholder="X, Friend, NFC Summit, etc."
              value={form.howHeard}
              onChange={set('howHeard')}
            />

            <div className='space-y-5'>
              <button
                type="submit"
                className="w-full bg-[#F4F4F5] text-[#18181B] text-sm font-bold uppercase py-4 mt-2 hover:bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Submit Application
              </button>

              {submitState === 'error' && (
                <p className="text-xs text-center text-red-400">Something went wrong. Please try again.</p>
              )}

              <p className="text-center text-xs text-[#71717B]">
                All applicants will be reviewed within 48 hours. Priority given to active Solana ecosystem contributors.
              </p>
            </div>
          </form>
        </FadeUp>

      </div>
    </section>
  )
}
