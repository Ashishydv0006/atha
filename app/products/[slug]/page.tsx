import products from "@/data/products.json"
import { notFound } from "next/navigation"
import AddToCartButton from "@/components/AddToCartButton"
import Image from "next/image"
import ProductCard from "@/components/ProductCard"

export function generateStaticParams() {
  return products.map((product: any) => ({
    slug: product.slug ?? product.name.toLowerCase().replace(/\s+/g, "-")
  }))
}

export const dynamicParams = true

export default function ProductPage({
params
}:{
params:{slug:string}
}){

const requestedSlug = decodeURIComponent(params.slug).toLowerCase()

const product = products.find((p:any)=>{
  const slug = (p.slug ?? p.name.toLowerCase().replace(/\s+/g,"-")).toLowerCase()
  return slug === requestedSlug
})

if(!product) return notFound()

const currentSlug =
  product.slug ?? product.name.toLowerCase().replace(/\s+/g, "-")

const moreProducts = products
  .filter((p:any)=>{
    const slug = p.slug ?? p.name.toLowerCase().replace(/\s+/g, "-")
    return slug !== currentSlug
  })
  .slice(0,4)

return(

<main className="bg-[#f1f1e9]">
  <section className="bg-gradient-to-b from-emerald-200/70 via-white to-white">
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-emerald-200 bg-emerald-100 shadow-xl">
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
            {product.certifications?.map((c:string,i:number)=>(
              <span
                key={i}
                className="rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-semibold text-emerald-800"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div>
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
            <div className="rounded-2xl border border-emerald-100 bg-white p-4 text-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-800">
                Dosage
              </p>
              <p className="mt-2 text-slate-700">
                {product.dosage}
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white p-4 text-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-800">
                Available Volume
              </p>
              <p className="mt-2 text-slate-700">
                {product.volume?.join(", ")}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-emerald-950">
                Key Benefits
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-slate-700">
                {product.benefits.map((b:string,i:number)=>(
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-950">
                Ingredients
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-slate-700">
                {product.ingredients.map((i:string,index:number)=>(
                  <li key={index}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="py-14 bg-gradient-to-b from-white via-emerald-100/60 to-white">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-emerald-900">
          More Products
        </h2>
        <p className="text-xs uppercase tracking-widest text-emerald-800">
          Explore the range
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {moreProducts.map((item:any)=>(
          <ProductCard key={item.slug} product={item} />
        ))}
      </div>
    </div>
  </section>
</main>

)
};
