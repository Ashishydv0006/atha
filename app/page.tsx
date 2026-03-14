import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import ValueCombo from "@/components/ValueCombo";
import Image from "next/image";
import Link from "next/link";
import { getProductSlug } from "@/lib/product-utils";

export default function Home() {
  const featured = products[0]

  return (
    <main>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_55%)]">
        <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-emerald-200/60 blur-3xl" />
        <div className="absolute -right-28 top-8 h-80 w-80 rounded-full bg-teal-300/45 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-2">
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
                className="rounded-full bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:-translate-y-0.5"
              >
                Shop Now
              </Link>
              <Link
                href={`/products/${encodeURIComponent(getProductSlug(featured))}`}
                className="rounded-full border border-emerald-900/20 bg-white/80 px-6 py-3 text-sm font-semibold text-emerald-900 shadow-sm backdrop-blur transition hover:bg-emerald-50"
              >
                Explore Best Seller
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-sm text-slate-600">
              {[
                { label: "Fresh Herbs", value: "100%" },
                { label: "Quality Standard", value: "GMP" },
                { label: "Additives", value: "Zero" }
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-emerald-200/60 bg-white/70 p-4 text-center shadow-sm backdrop-blur"
                >
                  <p className="text-lg font-semibold text-emerald-900">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-emerald-200/80 bg-gradient-to-br from-emerald-100 via-white to-emerald-50 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.7)]">
              <Image
                src={featured.image || "/images/logo.png"}
                alt={featured.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>
<section id="products" className="py-20 bg-gradient-to-b from-emerald-100/70 via-emerald-50 to-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-[0.35em] text-emerald-700">
              SIGNATURE RANGE
            </p>
            <h2 className="text-3xl font-semibold text-emerald-900">
              Our Herbal Wellness Range
            </h2>
            <p className="mt-1 text-sm text-slate-700">
              Eight targeted blends designed for specific wellness goals.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      <ValueCombo />
      <section id="why-atha" className="py-20 bg-gradient-to-b from-white via-emerald-100/60 to-white">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs font-semibold tracking-[0.35em] text-emerald-700">
            TRUSTED PROCESS
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-emerald-900">
            Why Choose Atha
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-700">
            A quick preview of what makes Atha different — from fresh botanicals
            to clean formulations and real wellness results.
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
                className="rounded-3xl border border-emerald-200/70 bg-white/90 p-6 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.7)]"
              >
                <h3 className="text-lg font-semibold text-emerald-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/why-atha"
              className="inline-flex items-center justify-center rounded-full border border-emerald-900/20 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:-translate-y-0.5"
            >
              Read the Full Why Atha Story
            </Link>
          </div>
        </div>
      </section>

      

    </main>
  )
}
