import { useContext } from "react";

import { CartContext } from "../store/shopping-card-context";

export default function Product({ id, image, title, price, description }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <article className="flex flex-col gap-4 rounded-lg p-4 bg-amber-50 shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-auto rounded-md object-cover"
      />

      <div className="flex flex-col gap-1">
        <h3 className="text-lg text-amber-700 m-0">{title}</h3>
        <p className="text-base text-amber-500 m-0">€{price}</p>
        <p className="text-amber-950">{description}</p>
      </div>
      <p className="text-right">
        <button
          onClick={() => addItemToCart(id)}
          className="w- bg-lime-800 hover:bg-lime-600 text-lime-100 border-0 rounded-md py-2 px-4 text-base cursor-pointer"
        >
          Add to Cart
        </button>
      </p>
    </article>
  );
}
