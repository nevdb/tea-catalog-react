export default function Cart({ items, onUpdateItemQuantity }) {
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const formattedTotalPrice = `€${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items" className="list-none my-4 p-0 flex flex-col gap-2">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li
                key={item.id}
                className="flex justify-between items-center px-4 py-2 bg-orange-300 rounded-md text-base"
              >
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="text-base flex gap-2 items-center">
                  <button
                    onClick={() => onUpdateItemQuantity(item.id, -1)}
                    className="bg-transparent border-none rounded-md text-amber-950 cursor-pointer text-lg"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => onUpdateItemQuantity(item.id, 1)}
                    className="bg-transparent border-none rounded-md text-amber-950 cursor-pointer text-lg"
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p>
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
