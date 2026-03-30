import AddToCartButton from "./AddToCartButton"
import Link from "next/link"
import Image from "next/image"
import { getProductSlug } from "@/lib/product-utils"
import type { CatalogItem } from "@/lib/product-utils"

export default function ProductCard({ product }: { product: CatalogItem }) {
  const slug = getProductSlug(product)

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-emerald-900/10 bg-white/80 shadow-[0_15px_40px_-30px_rgba(15,23,42,0.6)] transition hover:-translate-y-1.5 hover:shadow-[0_25px_60px_-40px_rgba(15,23,42,0.65)]">
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-emerald-100 via-emerald-50 to-white">
        <Image
          src={product.image || "/images/logo.png"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/35 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-800 shadow-sm backdrop-blur">
          Herbal
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-semibold tracking-[0.3em] text-emerald-700">
          {product.category}
        </p>

        <h2 className="mt-2 text-xl font-semibold text-slate-900">
          {product.name}
        </h2>

        <p className="mt-2 min-h-[3.75rem] text-sm text-slate-600">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-slate-500">
            Starting at
          </span>
          <span className="text-lg font-semibold text-emerald-900">
            Rs. {product.price?.ml500}
          </span>
        </div>

        <div className="mt-auto pt-5 flex flex-col gap-2">
          <Link
            href={`/products/${encodeURIComponent(slug)}`}
            className="rounded-full border border-emerald-900/20 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-700 px-4 py-2 text-center text-sm font-semibold text-white shadow-md shadow-emerald-900/25 transition duration-300 hover:brightness-110"
          >
            View Product
          </Link>

          <AddToCartButton product={product} className="w-full" />
        </div>
      </div>
    </div>
  )
}
