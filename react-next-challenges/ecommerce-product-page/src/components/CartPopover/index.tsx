import * as Popover from "@radix-ui/react-popover";
import { Trash } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartPopoverItem, Content, EmptyCartPopover } from "./styles";

export function CartPopover() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const totalPrice = cartItems * 125;

  function handleCheckout() {
    alert("Form has been sent ! \nStatus Code: 🟢 200 OK");
  }
  return (
    <Popover.Portal>
      <Content>
        <header>
          <span>Cart</span>
        </header>

        {cartItems > 0 ? (
          <>
            <CartPopoverItem>
              <img
                src="./products/image-product-1-thumbnail.jpg"
                alt="product-1-thumbnail"
              />
              <p>
                Fall Limited Edition Sneakers $125.00 x {cartItems}{" "}
                <strong>${totalPrice}</strong>
              </p>

              <Trash size={32} weight="bold" onClick={() => setCartItems(0)} />
            </CartPopoverItem>

            <button onClick={handleCheckout}>Checkout</button>
          </>
        ) : (
          <EmptyCartPopover>Your cart is empty</EmptyCartPopover>
        )}
      </Content>
    </Popover.Portal>
  );
}
