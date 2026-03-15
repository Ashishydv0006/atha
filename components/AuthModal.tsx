"use client"

import { useEffect, useState } from "react"

type Mode = "signin" | "signup"

export default function AuthModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<Mode>("signup")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null
    if (!isLoggedIn) {
      timer = setTimeout(() => setIsOpen(true), 5000)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [isLoggedIn])

  if (!isOpen) return null

  const handleLogin = () => {
    setIsLoggedIn(true)
    setIsOpen(false)
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 px-4 pt-24 backdrop-blur-sm sm:items-center sm:pt-0">
      <div className="relative w-full max-w-[22rem] overflow-hidden rounded-[24px] border border-emerald-900/10 bg-white shadow-[0_40px_120px_-60px_rgba(15,23,42,0.9)] sm:max-w-2xl sm:rounded-[30px] lg:max-w-4xl lg:rounded-[36px]">
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Skip"
          className="absolute right-4 top-4 z-20 rounded-full border border-emerald-900/10 bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-slate-600 transition hover:bg-emerald-50 sm:right-5 sm:top-5 sm:text-xs"
        >
          Skip
        </button>

        <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
          <div className="relative min-h-[260px] bg-gradient-to-br from-emerald-50 via-white to-emerald-100 p-5 sm:min-h-[360px] sm:p-8 lg:min-h-[420px] lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_60%)]" />

            <div className="relative z-10 flex h-full flex-col items-start justify-center">
              <p className="text-xs font-semibold tracking-[0.35em] text-emerald-700">
                ATHA SIGN IN
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-emerald-950">
                Wellness starts here.
              </h2>
              <p className="mt-4 max-w-sm text-sm text-slate-700">
                Access your personalized blends, order history, and premium
                rituals with one seamless account.
              </p>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="aloe-stage">
                <div className="aloe-leaf aloe-left" />
                <div className="aloe-leaf aloe-right" />
                <div className="aloe-core" />
              </div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-4 p-5 sm:gap-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3 rounded-full border border-emerald-900/10 bg-emerald-50/70 p-1 text-xs font-semibold uppercase tracking-widest text-emerald-800">
              <button
                onClick={() => setMode("signup")}
                className={`flex-1 rounded-full px-4 py-2 transition ${
                  mode === "signup"
                    ? "bg-white text-emerald-900 shadow-sm"
                    : "text-emerald-700 hover:bg-white/70"
                }`}
              >
                Sign Up
              </button>
              <button
                onClick={() => setMode("signin")}
                className={`flex-1 rounded-full px-4 py-2 transition ${
                  mode === "signin"
                    ? "bg-white text-emerald-900 shadow-sm"
                    : "text-emerald-700 hover:bg-white/70"
                }`}
              >
                Sign In
              </button>
            </div>

            <form
              className="space-y-4"
              onSubmit={(event) => {
                event.preventDefault()
                handleLogin()
              }}
            >
              {mode === "signup" && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First name"
                    className="rounded-2xl border border-emerald-900/10 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-emerald-500"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="rounded-2xl border border-emerald-900/10 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-emerald-500"
                  />
                </div>
              )}
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border border-emerald-900/10 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-emerald-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-2xl border border-emerald-900/10 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-emerald-500"
              />
            </form>

            <button
              onClick={handleLogin}
              className="w-full rounded-full bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-700 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white shadow-lg shadow-emerald-900/25 transition hover:-translate-y-0.5"
            >
              {mode === "signup" ? "Create Account" : "Sign In"}
            </button>

            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
              <span className="h-px flex-1 bg-emerald-900/10" />
              or continue with
              <span className="h-px flex-1 bg-emerald-900/10" />
            </div>

            <button
              onClick={handleLogin}
              className="flex w-full items-center justify-center gap-3 rounded-full border border-emerald-900/15 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-widest text-emerald-900 shadow-sm transition hover:bg-emerald-50"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                  <path
                    fill="#0f5132"
                    d="M12 10.2v3.6h5.1c-.2 1.3-1.5 3.8-5.1 3.8a5.8 5.8 0 0 1 0-11.6 5.2 5.2 0 0 1 3.7 1.4l2.5-2.4A8.6 8.6 0 0 0 12 3.4a8.6 8.6 0 1 0 0 17.2c5 0 8.3-3.5 8.3-8.4 0-.6-.1-1-.2-1.4H12z"
                  />
                </svg>
              </span>
              Continue with Google
            </button>

            <p className="text-center text-xs text-slate-500">
              By continuing, you agree to our Terms and Privacy Policy.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .aloe-stage {
          position: relative;
          width: 320px;
          height: 320px;
        }
        .aloe-leaf {
          position: absolute;
          top: 40px;
          width: 140px;
          height: 240px;
          border-radius: 120px 120px 24px 24px;
          background: linear-gradient(135deg, #c9f0d9, #4caf79);
          box-shadow: 0 30px 60px -40px rgba(15, 23, 42, 0.6);
        }
        .aloe-left {
          left: 10px;
          transform-origin: right center;
          animation: aloeLeft 1.2s ease forwards;
        }
        .aloe-right {
          right: 10px;
          transform-origin: left center;
          animation: aloeRight 1.2s ease forwards;
        }
        .aloe-core {
          position: absolute;
          left: 50%;
          top: 70px;
          width: 40px;
          height: 180px;
          transform: translateX(-50%);
          border-radius: 20px;
          background: linear-gradient(180deg, #dff8e8, #7bcf9c);
          animation: aloeCore 1.2s ease forwards;
          opacity: 0;
        }
        @keyframes aloeLeft {
          0% {
            transform: translateX(-140px) rotate(0deg);
            opacity: 0;
          }
          60% {
            opacity: 1;
          }
          100% {
            transform: translateX(0) rotate(-12deg);
          }
        }
        @keyframes aloeRight {
          0% {
            transform: translateX(140px) rotate(0deg);
            opacity: 0;
          }
          60% {
            opacity: 1;
          }
          100% {
            transform: translateX(0) rotate(12deg);
          }
        }
        @keyframes aloeCore {
          0% {
            opacity: 0;
            transform: translate(-50%, 20px);
          }
          70% {
            opacity: 0.9;
          }
          100% {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
      `}</style>
    </div>
  )
}
