import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CartService {
  qtdProduct: number | null = null;

  getQtdProduct() {
    return this.qtdProduct;
  }

  setQtdProduct(qtd: number) {
    this.qtdProduct = qtd;
  }

  clearCart() {
    this.qtdProduct = 0;
  }
}
