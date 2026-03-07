import AddToCartButton from "./AddToCartButton"
import Link from "next/link"

export default function ProductCard({ product }: any) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">

      <div>
        <h2 className="text-xl font-bold text-green-800 mb-2">
          {product.name}
        </h2>

        <p className="text-gray-600 mb-3">
          {product.description}
        </p>

        <h3 className="font-semibold text-green-700 mb-2">
          Key Benefits
        </h3>

        <ul className="list-disc ml-5 text-sm mb-4">
          {product.benefits?.map((b: string, i: number) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-4">
          {product.certifications?.map((c: string, i: number) => (
            <span
              key={i}
              className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">

        <Link
          href={`/products/${product.slug}`}
          className="bg-green-700 text-white text-center py-2 rounded"
        >
          View Product
        </Link>

        <AddToCartButton product={product} />

      </div>

    </div>
  )
}