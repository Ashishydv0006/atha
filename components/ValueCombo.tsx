"use client"

import Image from "next/image"
import products from "@/data/products.json"
import { getProductSlug, normalizeSlug } from "@/lib/product-utils"
import { useCartStore } from "@/store/cartStore"

export default function ValueCombo() {
  const addToCart = useCartStore((state) => state.addToCart)
  const increaseQty = useCartStore((state) => state.increaseQty)
  const decreaseQty = useCartStore((state) => state.decreaseQty)
  const cart = useCartStore((state) => state.cart)

  const combos = [

    {
      name: "Heart & Blood Sugar Dual Care",
      products: "Cholesterol Care + Diabo Care",
      volume: "1000ml each",
      images: [
        "/images/products/cholesterol.jpg",
        "/images/products/diabo.jpg"
      ],
      slugs: ["cholesterol-care-juice", "diabo-care-juice"]
    },

    {
      name: "Complete Gut Health",
      products: "Digestive Care + Aloe Vera",
      volume: "1000ml each",
      images: [
        "/images/products/digestive.jpg",
        "/images/products/aloe.jpg"
      ],
      slugs: ["digestive-care-juice", "aloe-vera-juice"]
    },

    {
      name: "Women's Hormonal Wellness",
      products: "She Care + Thyroid Care",
      volume: "1000ml each",
      images: [
        "/images/products/she-care.jpg",
        "/images/products/thyroid.jpg"
      ],
      slugs: ["she-care-juice", "thyroid-care-juice"]
    },

    {
      name: "Skin Radiance Combo",
      products: "Sea Buckthorn + Skin & Pimple Care",
      volume: "500ml each",
      images: [
        "/images/products/sea-buckthorn.jpg",
        "/images/products/skin.jpg"
      ],
      slugs: ["sea-buckthorn-juice", "skin-pimple-care"]
    }

  ]

  return (

    <section id="combos" className="py-20 bg-gradient-to-b from-[#f7f4ec] via-white to-[#f2f7f1]">

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.35em] text-emerald-700">
            CURATED COMBOS
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            Value Combo Packs
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
            Curated pairings for complete, targeted wellness.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {combos.map((combo, i) => (
            (() => {
              const items = combo.slugs
                .map((slug) => products.find((p: any) => getProductSlug(p) === slug))
                .filter(Boolean) as any[]
              const comboId = `combo-${normalizeSlug(combo.name)}`
              const comboQuantity =
                cart.find((c) => c._id === comboId)?.quantity ?? 0
              const comboPrice = items.reduce(
                (sum, item) => sum + (item.price?.ml500 ?? item.price ?? 0),
                0
              )

              return (

                <div
                  key={i}
                  className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-emerald-900/10 bg-white/90 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.7)] transition hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-36px_rgba(15,23,42,0.7)]"
                >
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_60%)]" />
                    <div className="absolute left-5 top-6 h-24 w-24 overflow-hidden rounded-2xl border border-white/80 bg-white shadow-lg">
                      <Image
                        src={combo.images[0]}
                        alt={combo.products}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute right-6 top-10 h-24 w-24 overflow-hidden rounded-2xl border border-white/80 bg-white shadow-lg">
                      <Image
                        src={combo.images[1]}
                        alt={combo.products}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute bottom-4 left-5 text-[10px] font-semibold tracking-[0.3em] text-emerald-700">
                      DUO PACK
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col px-5 pb-6 pt-4">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {combo.name}
                    </h3>

                    <p className="mt-2 min-h-[3rem] text-sm text-slate-600">
                      {combo.products}
                    </p>


                    <div className="mt-auto flex items-center justify-between pt-4">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-700">
                          {combo.volume}
                        </p>
                        <p className="mt-2 text-xs uppercase tracking-widest text-slate-500">
                          Starting at
                        </p>
                        <p className="text-lg font-semibold text-emerald-900">
                          Rs. {comboPrice}
                        </p>
                      </div>
                      <span className="rounded-full border border-emerald-900/10 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-emerald-800">
                        Premium
                      </span>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => decreaseQty(comboId)}
                          className={`h-8 w-8 rounded-full border border-emerald-900/20 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50 ${
                            comboQuantity === 0 ? "pointer-events-none opacity-40" : ""
                          }`}
                          aria-label="Decrease combo quantity"
                        >
                          -
                        </button>
                        <span className="inline-flex h-8 min-w-[2.5rem] items-center justify-center rounded-full border border-emerald-900/20 bg-white text-center text-sm font-semibold text-emerald-900 shadow-sm tabular-nums">
                          {comboQuantity}
                        </span>
                        <button
                          onClick={() =>
                            comboQuantity === 0
                              ? addToCart({
                                  _id: comboId,
                                  name: `${combo.name} Combo`,
                                  price: comboPrice,
                                  quantity: 1,
                                  image: combo.images[0]
                                })
                              : increaseQty(comboId)
                          }
                          className="h-8 w-8 rounded-full border border-emerald-900/20 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50"
                          aria-label="Increase combo quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() =>
                          addToCart({
                            _id: comboId,
                            name: `${combo.name} Combo`,
                            price: comboPrice,
                            quantity: 1,
                            image: combo.images[0]
                          })
                        }
                        className="rounded-full border border-emerald-900/20 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-700 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow-lg shadow-emerald-900/25 transition hover:-translate-y-0.5"
                      >
                        Add Combo
                      </button>
                    </div>
                  </div>
                </div>

              )
            })()
          ))}

        </div>
      </div>

    </section>

  )
};
