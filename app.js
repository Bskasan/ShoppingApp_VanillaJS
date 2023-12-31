const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./images/air.png",
      },
      {
        code: "darkblue",
        img: "./images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./images/jordan.png",
      },
      {
        code: "green",
        img: "./images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./images/blazer.png",
      },
      {
        code: "green",
        img: "./images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./images/crater.png",
      },
      {
        code: "lightgray",
        img: "./images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./images/hippie.png",
      },
      {
        code: "black",
        img: "./images/hippie2.png",
      },
    ],
  },
];

// ------------------------------------------------------------- //
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

// ? -------------- CHOSEN PRODUCT -------------- //
let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImage");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //* Change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //* Change texts of the choosen product
    choosenProduct = products[index];
    currentProductTitle.textContent = products[index].title;
    currentProductPrice.textContent = `$${products[index].price}`;
    currentProductImg.src = choosenProduct.colors[0].img;

    //* Assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

//* Changing the image for shoes in different colors.
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

//* Changing the Size of Shoes
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    //! Reset other sizes
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });

    //! Change the color of chosen one
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

//? ---------------- PAYMENT PANEL & MODULE ------------------ //
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const closeButton = document.querySelector(".close");
const paymentButton = document.querySelector(".paymentButton");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  payment.style.display = "none";
});

paymentButton.addEventListener("click", (e) => {
  e.preventDefault();
  payment.style.display = "none";
  console.log("Payment Confirmed!");
});

