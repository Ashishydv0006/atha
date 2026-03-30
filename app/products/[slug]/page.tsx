import productsData from "@/data/products.json"
import { notFound } from "next/navigation"
import AddToCartButton from "@/components/AddToCartButton"
import Image from "next/image"
import ProductCard from "@/components/ProductCard"
import { getProductSlug, normalizeSlug } from "@/lib/product-utils"
import type { CatalogItem } from "@/lib/product-utils"

const products = productsData as CatalogItem[]

export function generateStaticParams() {
  return products.map((product) => ({
    slug: getProductSlug(product)
  }))
}

export const dynamicParams = true

export default async function ProductPage({
  params
}:{
  params: Promise<{ slug: string }>
}){

const { slug } = await params
const requestedSlug = normalizeSlug(slug)

const product = products.find((p) => getProductSlug(p) === requestedSlug)

if(!product) return notFound()

const currentSlug = getProductSlug(product)

const moreProducts = products
  .filter((p) => getProductSlug(p) !== currentSlug)
  .slice(0,4)

return(

<main className="bg-[#f5f6f0]">
  <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_55%)]">
    <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-200/70 blur-3xl" />
    <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-teal-300/50 blur-3xl" />
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-emerald-200/80 bg-gradient-to-br from-emerald-100 via-white to-emerald-50 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.7)]">
          <Image
            src={product.image || "/images/logo.png"}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/35 via-transparent to-transparent" />
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.35em] text-emerald-800">
            {product.category}
          </p>

          <h1 className="mt-4 text-4xl font-semibold text-emerald-950">
            {product.name}
          </h1>

          <p className="mt-4 text-slate-700">
            {product.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {product.certifications?.map((c, i) => (
              <span
                key={i}
                className="rounded-full border border-emerald-200/70 bg-white/80 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-sm backdrop-blur"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="rounded-2xl border border-emerald-200/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-slate-600">
                Starting at
              </p>
              <p className="text-2xl font-semibold text-emerald-900">
                Rs. {product.price?.ml500}
              </p>
            </div>
            <AddToCartButton product={product} className="px-6 py-3" />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-100/80 bg-white/90 p-4 text-sm shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-800">
                Dosage
              </p>
              <p className="mt-2 text-slate-700">
                {product.dosage}
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-100/80 bg-white/90 p-4 text-sm shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-800">
                Available Volume
              </p>
              <p className="mt-2 text-slate-700">
                {product.volume?.join(", ")}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-100/80 bg-white/95 p-5 text-sm shadow-[0_12px_30px_-24px_rgba(15,23,42,0.7)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-800">
                Use Of
              </p>
              <p className="mt-3 text-slate-700">
                Designed for {product.category.toLowerCase()} support. {product.description}
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-100/80 bg-white/95 p-5 text-sm shadow-[0_12px_30px_-24px_rgba(15,23,42,0.7)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-800">
                How To Use
              </p>
              <p className="mt-3 text-slate-700">
                {product.dosage}
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-emerald-700">
                Best with water
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-emerald-950">
                Key Benefits
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-slate-700">
                {product.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-950">
                Ingredients
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-slate-700">
                {product.ingredients.map((i, index) => (
                  <li key={index}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="py-16 bg-gradient-to-b from-white via-emerald-100/60 to-white">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold tracking-[0.35em] text-emerald-700">
          KEEP EXPLORING
        </p>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-emerald-900">
            More Products
          </h2>
          <p className="text-xs uppercase tracking-widest text-emerald-800">
            Explore the range
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {moreProducts.map((item) => (
          <ProductCard key={item.slug} product={item} />
        ))}
      </div>
    </div>
  </section>
</main>

)
};
