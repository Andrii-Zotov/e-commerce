const slideWraper = document.querySelector(".slideWraper");
const itemsMenu = document.querySelectorAll(".item-menu");
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
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
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
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
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
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
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
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
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let chooseProduct = products[0];

const productImg = document.querySelector(".productImg");
const productTitle = document.querySelector(".productTitle");
const productPrice = document.querySelector(".productPrice");
const productColor = document.querySelectorAll(".color");
const productSize = document.querySelectorAll(".size");

itemsMenu.forEach((item, index) => {
  item.addEventListener("click", () => {
    slideWraper.style.transform = `translateX(${-100 * index}vw)`;

    chooseProduct = products[index];

    productTitle.textContent = chooseProduct.title;
    productPrice.textContent = "$" + chooseProduct.price;
    productImg.src = chooseProduct.colors[0].img;

    productColor.forEach((color, index) => {
      color.style.backgroundColor = chooseProduct.colors[index].code;
    });
  });
});
productColor.forEach((color, index) => {
  color.addEventListener("click", () => {
    productImg.src = chooseProduct.colors[index].img;
  });
});
productSize.forEach((size, index) => {
  size.addEventListener("click", () => {
    productSize.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });

    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const payButton = document.querySelector(".productBtn");
const payment = document.querySelector(".payment");
const closes = document.querySelector(".close");

payButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

closes.addEventListener("click", () => {
  payment.style.display = "none";
});
