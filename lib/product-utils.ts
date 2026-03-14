export function normalizeSlug(value: string) {
  const decoded = safeDecode(value)
  return decoded
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function getProductSlug(product: any) {
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
