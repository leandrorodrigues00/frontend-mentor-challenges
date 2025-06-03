import { Component, inject } from "@angular/core";

import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart-dialog",
  templateUrl: "./cart-dialog.component.html",
  styleUrls: ["./cart-dialog.component.scss"],
})
export class CartDialogComponent {
  protected _cartSvc = inject(CartService);

  get qtdProduct() {
    return this._cartSvc.getQtdProduct();
  }

  get finalPriceProduct() {
    const UNIT_PRICE = 125.0;

    return this.qtdProduct ? this.qtdProduct * UNIT_PRICE : null;
  }

  onDelete() {
    this._cartSvc.clearCart();
  }
}
