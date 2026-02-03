import { DUMMY_PRODUCTS } from "../dummy-products.js";

export default function Catalog() {
  return (
    <section className="w-2/3 my-4 mx-auto">
      <h2 className="text-xl text-amber-950 uppercase  my-8">
        Special Tea For Everyone
      </h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </section>
  );
}
