import { Component, inject } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { ProductDialogComponent } from "../components/product-dialog/product-dialog.component";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"],
})
export class HeroComponent {
  // TODO: Refactor the carousel in the modal and the one on the homepage into a reusable component
  images = [
    {
      id: 1,
      src: "assets/products/image-product-1-thumbnail.jpg",
      alt: "shoes 1",
    },
    {
      id: 2,
      src: "assets/products/image-product-2-thumbnail.jpg",
      alt: "shoes 2",
    },
    {
      id: 3,
      src: "assets/products/image-product-3-thumbnail.jpg",
      alt: "shoes 3",
    },
    {
      id: 4,
      src: "assets/products/image-product-4-thumbnail.jpg",
      alt: "shoes 4",
    },
  ];
  protected _dialogSvc = inject(MatDialog);
  protected _cartSvc = inject(CartService);
  protected resizeObserver: ResizeObserver;

  constructor() {
    this.resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const WIDTH = entry.contentRect.width;
        if (WIDTH < 700) {
          this._dialogSvc.closeAll();
        }
      }
    });
    this.resizeObserver.observe(document.body);
  }

  ngOnDestroy() {
    this.resizeObserver.unobserve(document.body);
  }

  selectedImage: number = 1;
  productQtd: number = 0;

  get imagePath() {
    return `assets/products/image-product-${this.selectedImage}.jpg`;
  }

  onChangeImage(index: number) {
    this.selectedImage = index;
  }

  onAdd() {
    this.productQtd++;
  }

  onRemove() {
    if (this.productQtd > 0) {
      this.productQtd--;
    }
  }

  onAddCart() {
    this._cartSvc.setQtdProduct(this.productQtd);
    this.productQtd = 0;
  }

  openDialog() {
    if (window.innerWidth > 700) {
      const DIALOG_CONFIG = new MatDialogConfig();
      this._dialogSvc.open(ProductDialogComponent, DIALOG_CONFIG);
    }
  }

  onPreviousImage() {
    this.selectedImage =
      this.selectedImage > 1 ? this.selectedImage - 1 : this.images.length;
  }

  onNextImage() {
    this.selectedImage =
      this.selectedImage < this.images.length ? this.selectedImage + 1 : 1;
  }
}
