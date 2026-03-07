import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import ValueCombo from "@/components/ValueCombo";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-green-50 py-24 text-center">
        <h1 className="text-5xl font-bold text-green-800">
          Authentic Ayurveda. Real Results.
        </h1>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          100% Ayurvedic herbal wellness juices crafted from fresh botanical
          ingredients for complete health.
        </p>

        <button className="mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800">
          Shop Now
        </button>
      </section>


      {/* WHY CHOOSE ATHA */}
      <section className="py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
          Why Choose Atha
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="font-semibold">Fresh Herbs Only</h3>
            <p className="text-sm text-gray-600">
              Made from 100% fresh botanical ingredients — never dried extracts.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">GMP Certified</h3>
            <p className="text-sm text-gray-600">
              Manufactured in ISO certified facilities.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Clinically Backed</h3>
            <p className="text-sm text-gray-600">
              Validated by Ayurvedic physicians.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Zero Compromises</h3>
            <p className="text-sm text-gray-600">
              No Added Sugar. BPA Free packaging.
            </p>
          </div>

        </div>
      </section>


      {/* PRODUCTS */}
      <section className="py-16 bg-green-50">

        <h2 className="text-3xl text-center font-bold text-green-800 mb-10">
          Our Herbal Wellness Range
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">

          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}

        </div>
      </section>


      {/* VALUE COMBOS */}
      <ValueCombo />

    </main>
  );
};