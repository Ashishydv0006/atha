export type ProductPrice = Record<string, number>

export interface CatalogItem {
  name: string
  slug?: string
  category: string
  description: string
  benefits: string[]
  ingredients: string[]
  dosage: string
  volume: string[]
  price: ProductPrice
  image: string
  certifications?: string[]
}

export type CartProduct = CatalogItem & {
  _id?: string
}

export type ProductSlugSource = {
  slug?: string
  name?: string
}

export function getStartingPrice(
  product: CatalogItem,
  preferredKeys: string[] = []
) {
  const price = product.price ?? {}
  for (const key of preferredKeys) {
    const value = price[key]
    if (typeof value === "number") {
      return value
    }
  }
  const fallback = Object.values(price).find(
    (value): value is number => typeof value === "number"
  )
  return fallback ?? 0
}

export function normalizeSlug(value: string) {
  const decoded = safeDecode(value)
  return decoded
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function getProductSlug(product: ProductSlugSource) {
  const base = product?.slug ?? product?.name ?? ""
  return normalizeSlug(String(base))
}

function safeDecode(value: string) {
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}
