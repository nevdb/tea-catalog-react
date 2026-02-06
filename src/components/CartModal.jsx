import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";

const CartModal = forwardRef(function Modal(
  { cartItems, onUpdateCartItemQuantity, title, actions },
  ref,
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      id="modal"
      ref={dialog}
      className="md:w-1/3 p-4 bg-[#d3b17b] rounded-md shadow-md container absolute inset-x-3 top-10  m-auto"
    >
      <h2 className="text-2xl text-amber-950 uppercase m-0">{title}</h2>
      <Cart items={cartItems} onUpdateItemQuantity={onUpdateCartItemQuantity} />
      <form
        method="dialog"
        id="modal-actions"
        className="flex gap-4 justify-end items-center"
      >
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal"),
  );
});

export default CartModal;

<style scoped></style>;
