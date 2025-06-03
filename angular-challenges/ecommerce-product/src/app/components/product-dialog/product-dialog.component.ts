import { Component } from "@angular/core";

@Component({
  selector: "app-product-dialog",
  templateUrl: "./product-dialog.component.html",
  styleUrls: ["./product-dialog.component.scss"],
})
export class ProductDialogComponent {
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
  selectedImage: number = 1;

  get imagePath() {
    return `assets/products/image-product-${this.selectedImage}.jpg`;
  }

  onChangeImage(index: number) {
    this.selectedImage = index;
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
