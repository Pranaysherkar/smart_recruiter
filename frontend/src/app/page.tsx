'use client'

import { useRouter } from 'next/navigation'
import { FaUpload } from 'react-icons/fa'

export default function Home() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#1e242a] via-[#2c363f] to-[#1e242a] px-4">
      {/* Glass Card */}
      <div className="backdrop-blur-lg bg-white/5 border border-[#3b4754] rounded-3xl p-10 shadow-2xl max-w-xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-[#f7f7ff] mb-4">
         Smart <span className="text-[#fca311]">Recruiter</span>
        </h1>

        <p className="text-lg text-[#dde3eb] mb-6">
          Your AI-powered recruitment assistant — fast, accurate, and smart.
        </p>

        <p className="text-sm text-[#c7d1d9] mb-10">
          Upload resumes or job descriptions. Let AI do the hard work and find your best match.
        </p>

        <button
          onClick={() => router.push('/upload')}
          className="flex items-center justify-center gap-2 bg-[#fca311] hover:bg-[#ffd591] transition-colors duration-300 text-black font-semibold px-6 py-3 rounded-xl shadow-lg mx-auto"
        >
          <FaUpload className="text-lg" />
          Upload Files
        </button>
      </div>

      {/* Optional Animated Background Glow */}
      <div className="absolute -z-10 w-[600px] h-[600px] rounded-full bg-[#fe5f55]/20 blur-[150px]" />
    </div>
  )
}
