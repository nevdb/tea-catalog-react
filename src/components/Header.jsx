import { useRef } from "react";
import teaTime from "../assets/tea-time.png";
import CartModal from "./CartModal";

export default function Header({ cart, onUpdateCartItemQuantity }) {
  const modal = useRef();
  const cartQuantity = cart.items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = (
    <button className="bg-transparent border-none rounded-md text-amber-950 hover:text-amber-700 cursor-pointer text-lg">
      Close
    </button>
  );

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button className="bg-transparent border-none rounded-md text-amber-950 hover:text-amber-700 cursor-pointer text-lg">
          Close
        </button>
        <button className="bg-transparent border-none rounded-md text-amber-950 hover:text-amber-700 cursor-pointer text-lg">
          Checkout
        </button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        cartItems={cart.items}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
        title="Your Cart"
        actions={modalActions}
      />
      <header className="flex justify-between items-center py-12">
        <div className="flex items-center">
          <img src={teaTime} alt="Tea time logo" className="w-20 " />
          <h1 className="text-center uppercase text-amber-400 text-4xl mx-6">
            Taste of the nature
          </h1>
        </div>
        <p>
          <button
            onClick={handleOpenCartClick}
            className="bg-lime-700 hover:bg-lime-600 text-amber-100 border-0 rounded-md py-2 px-6 text-lg cursor-pointer"
          >
            Cart ({cartQuantity})
          </button>
        </p>
      </header>
    </>
  );
}
