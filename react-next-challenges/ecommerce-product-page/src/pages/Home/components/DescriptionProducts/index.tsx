import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { useTheme } from "styled-components";
import { CartContext } from "../../../../contexts/CartContext";
import {
  ButtonContainer,
  DescriptionProductContainer,
  PriceContainer,
} from "./styles";

export function DescriptionProducts() {
  const { setQuantity, quantity, HandleAddProductToCart } =
    useContext(CartContext);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  const colors = useTheme();
  return (
    <DescriptionProductContainer>
      <div>
        <span>Sneaker company</span>

        <h1>Fall limited edition Sneaker</h1>

        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>

        <PriceContainer>
          <span>
            $125.00 <strong>50%</strong>
          </span>
          <del>$250.00</del>
        </PriceContainer>

        <ButtonContainer>
          <div>
            <button
              disabled={quantity <= 0}
              onClick={handleDecrease}
              title="removes items from cart"
            >
              <Minus size={12} color={colors.Orange} weight="bold" />
            </button>
            {quantity}
            <button onClick={handleIncrease} title="adds items to cart">
              <Plus size={12} color={colors.Orange} weight="bold" />
            </button>
          </div>

          <button
            disabled={quantity <= 0}
            onClick={() => HandleAddProductToCart(quantity)}
          >
            <ShoppingCart size={20} />
            Add to cart
          </button>
        </ButtonContainer>
      </div>
    </DescriptionProductContainer>
  );
}
