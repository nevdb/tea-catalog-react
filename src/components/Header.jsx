import { useRef, useContext } from "react";
import teaTime from "../assets/tea-time.png";
import CartModal from "./CartModal";
import { CartContext } from "../store/shopping-card-context";

export default function Header() {
  const modal = useRef();
  const { items } = useContext(CartContext);

  const cartQuantity = items.length;

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
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
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
