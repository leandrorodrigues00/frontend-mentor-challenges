const avatar = document.querySelector(".avatar");
const cart = document.querySelector(".cart");
const cartItems = document.querySelector(".cart-items");

const mainImage = document.querySelector(".img-principal");
const thumbnailImage = document.querySelectorAll(".products-thumb li");
const thumbnailImageOverlay = document.querySelectorAll(".products-thumb-2 li");

const titleSneaker = document.querySelector(".infos-container h1");

const minusButton = document.querySelector(".minus-button");
const plusButton = document.querySelector(".plus-button");
const productQuantity = document.querySelector(".quantity-button span");

const buttonCart = document.querySelector(".add-cart");
const imgCart = document.querySelector(".product-image");
const titleSneakerCart = document.querySelector(".title-sneaker-cart");
const quantityCartItem = document.querySelector(".item-quantity");
const itemTotal = document.querySelector(".item-total");
const numberCartItem = document.querySelector(".cart-content");
const emptyCartItem = document.querySelector(".empty-content");
const itemCart = document.querySelector(".item");

const deleteIcon = document.querySelector(".product-delete-icon");

const closeOverlay = document.querySelector(".close-overlay");
const overlay = document.querySelector(".overlay-container");
const mainImageOverlay = document.querySelector(".img-principal-2");
const nextArrow = document.querySelector(".next-arrow");
const previousArrow = document.querySelector(".previous-arrow");

/* ________ Showing cart on screen  _________ */
avatar.addEventListener("click", () => {
  avatar.classList.toggle("avatar-active");
  cartItems.classList.toggle("display-none");
});

cart.addEventListener("click", () => {
  cartItems.classList.toggle("display-none");
  avatar.classList.toggle("avatar-active");
});

function activeTab(index) {
  thumbnailImage.forEach((image) => {
    image.classList.remove("active-thumbs");
  });

  if (index !== 5) {
    thumbnailImage[index].classList.add("active-thumbs");
  }
}

/* ________ handle product infos  _________ */
thumbnailImage.forEach((image, index) => {
  image.addEventListener("click", () => {
    mainImage.src = `./images/image-product-${index + 1}.jpg`;
    activeTab(index);

    if (index === 0) {
      titleSneaker.innerText = "Fall Limited Edition Sneakers";
    }
    if (index === 1) {
      titleSneaker.innerText = "Winter Limited Edition Sneakers";
    }
    if (index === 2) {
      titleSneaker.innerText = "Summer Limited Edition Sneakers";
    }
    if (index === 3) {
      titleSneaker.innerText = "Spring Limited Edition Sneakers";
    }
  });
});

/* ________ handle quantity product  _________ */
minusButton.addEventListener("click", () => {
  let actualValue = +productQuantity.innerText;
  if (actualValue > 0) {
    productQuantity.innerText = actualValue - 1;
  }
});

plusButton.addEventListener("click", () => {
  let actualValue = +productQuantity.innerText;
  productQuantity.innerText = actualValue + 1;
});

/* ________ handle add to cart  _________ */

buttonCart.addEventListener("click", () => {
  let thumbCartImage = mainImage.src;
  let handleTitleSneaker = titleSneaker.innerText;
  let actualQuantityItens = productQuantity.innerText;

  if (actualQuantityItens > 0) {
    emptyCartItem.classList.add("display-none");
    itemCart.classList.remove("display-none");
    imgCart.src = thumbCartImage;
    titleSneakerCart.innerHTML = handleTitleSneaker;
    quantityCartItem.innerHTML = actualQuantityItens;
    numberCartItem.classList.remove("display-none");
    numberCartItem.innerHTML = actualQuantityItens;
    itemTotal.innerHTML = actualQuantityItens * 125.0;
  } else {
    numberCartItem.classList.add("display-none");
    emptyCartItem.classList.remove("display-none");
    itemCart.classList.add("display-none");
  }
});

/* ________ handle delete item cart  _________ */

deleteIcon.addEventListener("click", () => {
  actualQuantityItens = 0;
  productQuantity.innerText = "0";
  numberCartItem.classList.add("display-none");
  emptyCartItem.classList.remove("display-none");
  itemCart.classList.add("display-none");
});

/* ________ Overlay _________ */
let index = 1;

closeOverlay.addEventListener("click", () => {
  overlay.classList.add("display-none");
  index = 0;
});

mainImage.addEventListener("click", () => {
  overlay.classList.remove("display-none");
});

nextArrow.addEventListener("click", () => {
  let cont = 1;

  if (index <= 4) {
    index = index + cont;

    mainImageOverlay.src = `./images/image-product-${index}.jpg`;
  }
  if (index >= 4) {
    mainImageOverlay.src = `./images/image-product-${4}.jpg`;
  }
});
previousArrow.addEventListener("click", () => {
  if (index === 5) {
    index = 4;
  }
  if (index > 1) {
    index = index - 1;

    mainImageOverlay.src = `./images/image-product-${index}.jpg`;
  }
  if (index === 1) {
    mainImageOverlay.src = `./images/image-product-${1}.jpg`;
  }
});

thumbnailImageOverlay.forEach((image, index) => {
  image.addEventListener("click", () => {
    mainImageOverlay.src = `./images/image-product-${index + 1}.jpg`;
  });
});
