import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="mb-2 text-xl font-semibold uppercase tracking-widest">
            Atha
          </h2>
          <p className="text-sm text-emerald-100">
            Authentic Ayurveda wellness juices made from 100% fresh botanical
            ingredients.
          </p>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">Quick Links</h3>
          <ul className="space-y-1 text-sm text-emerald-100">
            <li>
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#products" className="transition hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link href="/why-atha" className="transition hover:text-white">
                Why Atha
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">Trust</h3>
          <ul className="space-y-1 text-sm text-emerald-100">
            <li>GMP Certified</li>
            <li>ISO Certified</li>
            <li>No Added Sugar</li>
            <li>BPA Free</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">Legal</h3>
          <ul className="space-y-1 text-sm text-emerald-100">
            <li>
              <Link
                href="/terms-and-conditions"
                className="transition hover:text-white"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-emerald-100">
        (c) {new Date().getFullYear()} Atha. All rights reserved.
      </p>
    </footer>
  )
}
