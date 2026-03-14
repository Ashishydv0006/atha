import AddToCartButton from "./AddToCartButton"
import Link from "next/link"
import Image from "next/image"

export default function ProductCard({ product }: { product: any }) {
  const slug =
    product?.slug ?? product?.name?.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-emerald-200/70 bg-white/90 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-44 w-full overflow-hidden bg-emerald-100/60">
        <Image
          src={product.image || "/images/logo.png"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/35 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold tracking-widest text-emerald-700">
          {product.category}
        </p>

        <h2 className="mt-2 text-xl font-semibold text-slate-900">
          {product.name}
        </h2>

        <p className="mt-2 text-sm text-slate-600">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-slate-500">From</span>
          <span className="text-lg font-semibold text-emerald-800">
            Rs. {product.price?.ml500}
          </span>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <Link
            href={`/products/${slug}`}
            className="rounded-full border border-emerald-900/30 bg-gradient-to-r from-emerald-900 to-emerald-700 px-4 py-2 text-center text-sm font-semibold text-white shadow-md shadow-emerald-900/20 transition hover:brightness-110"
          >
            View Product
          </Link>

          <AddToCartButton product={product} className="w-full" />
        </div>
      </div>
    </div>
  )
}
