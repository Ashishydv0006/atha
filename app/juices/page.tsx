import products from "@/data/products.json"
import ProductCard from "@/components/ProductCard"

export default function JuicesPage() {
  return (
    <main className="bg-[#f5f6f0]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_55%)]">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-200/70 blur-3xl" />
        <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-teal-300/50 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-xs font-semibold tracking-[0.35em] text-emerald-800">
            ATHA JUICES
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-emerald-950 sm:text-5xl">
            Herbal Wellness Juices
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-700">
            Explore our full range of targeted Ayurvedic juice blends crafted
            for daily vitality and balance.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-emerald-100/70 via-emerald-50 to-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
