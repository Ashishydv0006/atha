import Image from "next/image"
import Link from "next/link"

export default function WhyAthaPage() {
  return (
    <main className="bg-[#f6f4ef]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_60%)]">
        <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-emerald-200/70 blur-3xl" />
        <div className="absolute -right-28 top-14 h-80 w-80 rounded-full bg-teal-300/50 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.35em] text-emerald-700">
              WHY ATHA
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
              Ayurveda, Refined for Modern Wellness
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-700">
              We craft premium, small-batch juices using fresh botanicals, clean
              processes, and uncompromising quality standards. Every blend is
              created to support a specific wellness goal — from thyroid balance
              to gut comfort and skin clarity — with a taste that fits into your
              daily routine.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#products"
                className="rounded-full bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:-translate-y-0.5"
              >
                Explore Products
              </Link>
              <Link
                href="/#combos"
                className="rounded-full border border-emerald-900/20 bg-white/80 px-6 py-3 text-sm font-semibold text-emerald-900 shadow-sm backdrop-blur transition hover:bg-emerald-50"
              >
                View Combos
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-emerald-200/80 bg-gradient-to-br from-emerald-100 via-white to-emerald-50 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.7)]">
              <Image
                src="/images/products/sea-buckthorn.jpg"
                alt="Atha Ayurveda premium juice"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white via-emerald-50/50 to-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Thyroid Balance",
                text: "Supports healthy thyroid function, hormone balance, and steady energy."
              },
              {
                title: "Blood Sugar Support",
                text: "Helps maintain healthy glucose levels and improves metabolic comfort."
              },
              {
                title: "Gut & Digestion",
                text: "Soothes bloating, supports digestion, and promotes gut-friendly balance."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-emerald-200/70 bg-white/90 p-6 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.7)]"
              >
                <h3 className="text-lg font-semibold text-emerald-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f7f4ec]">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Women’s Wellness",
                text: "Encourages hormonal balance, cycle regularity, and calm vitality."
              },
              {
                title: "Heart & Cholesterol",
                text: "Supports healthy circulation and helps manage cholesterol levels."
              },
              {
                title: "Immunity & Vitality",
                text: "Rich in antioxidants to strengthen immunity and overall resilience."
              },
              {
                title: "Skin Clarity",
                text: "Helps purify and balance for clearer, healthier-looking skin."
              },
              {
                title: "Daily Detox",
                text: "A gentle cleanse that supports natural detox pathways and freshness."
              },
              {
                title: "Energy & Recovery",
                text: "Nourishes your system to feel lighter, balanced, and energized."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-emerald-200/70 bg-white/90 p-6 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.7)]"
              >
                <h3 className="text-lg font-semibold text-emerald-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white via-emerald-50/50 to-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[32px] border border-emerald-200/70 bg-white/90 p-8 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.7)]">
              <p className="text-xs font-semibold tracking-[0.35em] text-emerald-700">
                OUR STANDARD
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                Premium by Design
              </h2>
              <p className="mt-4 text-sm text-slate-700">
                From ingredient sourcing to bottling, every step is crafted to
                deliver a premium experience. We partner with expert Ayurvedic
                practitioners, ensure GMP-grade manufacturing, and test every
                batch for purity and consistency.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "GMP Certified Facilities",
                  "Clinically Trusted Herbs",
                  "Lab Tested for Purity",
                  "Ethically Sourced"
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-emerald-100/70 bg-emerald-50/60 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-emerald-800"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-emerald-200/70 bg-white/90 p-8 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.7)]">
              <p className="text-xs font-semibold tracking-[0.35em] text-emerald-700">
                EXPERIENCE
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                Wellness That Feels Luxurious
              </h2>
              <p className="mt-4 text-sm text-slate-700">
                Atha blends ancient knowledge with modern taste. Each juice is
                balanced, smooth, and designed to integrate effortlessly into
                your day — from morning rituals to evening resets.
              </p>
              <div className="mt-6 grid gap-4">
                {[
                  {
                    label: "Texture",
                    value: "Silky, easy to sip"
                  },
                  {
                    label: "Taste",
                    value: "Naturally bright & clean"
                  },
                  {
                    label: "Routine",
                    value: "Simple 30ml daily"
                  }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl border border-emerald-100/70 bg-white/80 px-4 py-3 text-sm text-slate-700"
                  >
                    <span className="text-xs font-semibold uppercase tracking-widest text-emerald-800">
                      {item.label}
                    </span>
                    <span className="font-semibold text-slate-900">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
