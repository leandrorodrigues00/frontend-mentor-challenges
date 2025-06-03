import { Component, inject } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { CartDialogComponent } from "../components/cart-dialog/cart-dialog.component";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  protected _cartSvc = inject(CartService);
  protected _dialogSvc = inject(MatDialog);

  get userProducts() {
    return this._cartSvc.getQtdProduct();
  }

  openDialog(buttonRef: HTMLElement) {
    const DIALOG_CONFIG = new MatDialogConfig();
    const OFFSET = window.innerWidth < 425 ? 270 : 330;

    DIALOG_CONFIG.backdropClass = "false";
    DIALOG_CONFIG.position = {
      top: `${buttonRef.getBoundingClientRect().bottom + window.scrollY}px`,
      left: `${
        buttonRef.getBoundingClientRect().right - OFFSET + window.scrollX
      }px`,
    };
    DIALOG_CONFIG.width = "360px";
    DIALOG_CONFIG.data = this.userProducts;

    this._dialogSvc.open(CartDialogComponent, DIALOG_CONFIG);
  }
}
