"use client"

import { useMemo, useState } from "react"
import powders from "@/data/powders.json"
import PowderCard from "@/components/PowderCard"

export default function PowdersPage() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(powders.map((p) => p.category)))],
    []
  )
  const [activeCategory, setActiveCategory] = useState(categories[0] || "All")

  const filteredPowders = useMemo(() => {
    if (activeCategory === "All") {
      return powders
    }
    return powders.filter((product) => product.category === activeCategory)
  }, [activeCategory])

  return (
    <main className="bg-[#f5f6f0]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_55%)]">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-200/70 blur-3xl" />
        <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-teal-300/50 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-xs font-semibold tracking-[0.35em] text-emerald-800">
            ATHA POWDERS
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-emerald-950 sm:text-5xl">
            Herbal Beauty Powders
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-700">
            A curated collection of botanical powders for skin, hair, and
            wellness rituals.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-emerald-100/70 via-emerald-50 to-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-4 rounded-3xl border border-emerald-200/70 bg-white/80 p-5 shadow-[0_20px_40px_-32px_rgba(15,23,42,0.5)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-emerald-700">
                FILTER BY RITUAL
              </p>
              <p className="mt-2 text-sm text-slate-700">
                Pick a ritual focus to discover powders that match your beauty
                routine.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const isActive = activeCategory === category
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest transition ${
                      isActive
                        ? "bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-700 text-white shadow-lg shadow-emerald-900/25"
                        : "border border-emerald-900/15 bg-white text-emerald-900 shadow-sm hover:bg-emerald-50"
                    }`}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {filteredPowders.map((product, index) => (
              <PowderCard key={index} product={product} />
            ))}
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-emerald-700">
            Showing {filteredPowders.length} powders
          </p>
        </div>
      </section>
    </main>
  )
}
