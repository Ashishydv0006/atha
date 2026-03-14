import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import ValueCombo from "@/components/ValueCombo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featured = products[0]

  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-300/70 via-emerald-100 to-white">
        <div className="absolute -right-20 top-32 h-72 w-72 rounded-full bg-teal-300/70 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.35em] text-emerald-800">
              ATHA AYURVEDA
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-emerald-950 sm:text-5xl">
              Premium Ayurvedic Juices for Daily Vitality
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-700">
              Small-batch herbal wellness juices crafted from fresh botanicals,
              clinically trusted ingredients, and zero-compromise standards.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#products"
                className="rounded-full bg-gradient-to-r from-emerald-950 to-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:-translate-y-0.5"
              >
                Shop Now
              </Link>
              <Link
                href={`/products/${featured.slug}`}
                className="rounded-full border border-emerald-900/40 bg-white px-6 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-100"
              >
                Explore Best Seller
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-slate-700 sm:grid-cols-4">
              {["Fresh Herbs", "GMP Certified", "Clinically Backed", "No Added Sugar"].map(
                (label) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-emerald-200 bg-white/80 px-4 py-3"
                  >
                    {label}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-emerald-200 bg-emerald-100 shadow-xl">
              <Image
                src={featured.image || "/images/logo.png"}
                alt={featured.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-emerald-200 bg-white px-5 py-4 text-sm text-emerald-900 shadow-lg">
              Featured: {featured.name}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white via-emerald-100/60 to-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold text-emerald-900">
            Why Choose Atha
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-700">
            We blend authentic Ayurveda with modern, premium formulation standards
            so you can feel the difference from the first sip.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Fresh Herbs Only",
                text: "Made from 100% fresh botanical ingredients - never dried extracts."
              },
              {
                title: "GMP Certified",
                text: "Manufactured in ISO certified facilities for trusted quality."
              },
              {
                title: "Clinically Backed",
                text: "Validated by experienced Ayurvedic physicians."
              },
              {
                title: "Zero Compromises",
                text: "No Added Sugar. BPA Free packaging."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-emerald-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-16 bg-gradient-to-b from-emerald-200/70 via-emerald-100 to-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-semibold text-emerald-900">
                Our Herbal Wellness Range
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Eight targeted blends designed for specific wellness goals.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>

      <ValueCombo />
    </main>
  )
}
