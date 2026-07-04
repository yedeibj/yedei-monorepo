import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function BestSellers() {
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 8);

  return (
    <section id="meilleures-ventes" className="bg-sand">
      <div className="mx-auto max-w-container px-6 py-20 md:px-10">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl italic text-ink sm:text-4xl">
            Meilleures ventes
          </h2>
          
            href="/meilleures-ventes"
            className="hidden text-sm uppercase tracking-widest2 text-ink/70 underline-offset-4 hover:text-ink hover:underline sm:block"
          >
            Voir tout
          </a>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
