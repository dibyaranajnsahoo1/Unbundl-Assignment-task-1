const products = [
  {
    id: 1,
    name: "Dairy Milk Silk Bubbly",
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/chocolate/v/d/l/52-dairy-milk-silk-bubbly-chocolate-1-cadbury-original-imagmar8hd2cvkmz.jpeg?q=70",
    price: 150,
    quantity: 0,
  },
  {
    id: 2,
    name: "Dairy Milk Silk Oreo",
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/chocolate/t/a/3/-original-imaghqdbzh2qeemq.jpeg?q=70",
    price: 80,
    quantity: 0,
  },
  {
    id: 3,
    name: "Bournville Cranberry",
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/chocolate/s/u/x/-original-imagj5w9huh6xkue.jpeg?q=70",
    price: 100,
    quantity: 0,
  },
  {
    id: 4,
    name: "GALAXY Milk",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kzogn0w0/chocolate/s/z/p/208-milk-chocolate-with-fruit-nut-52g-pack-of-4-4x52g-4-galaxy-original-imagbmx3tzkxnnpx.jpeg?q=70",
    price: 80,
    quantity: 0,
  },
  {
    id: 5,
    name: `Sugarfree D'lite`,
    image:
      "https://rukminim1.flixcart.com/image/612/612/l5fnhjk0/chocolate/t/v/u/-original-imagg3ty67gnt6ku.jpeg?q=70",
    price: 180,
    quantity: 0,
  },
  {
    id: 6,
    name: "Perk",
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/chocolate/j/o/v/-original-imagzufqwa7nyhhd.jpeg?q=70",
    price: 150,
    quantity: 0,
  },
  {
    id: 7,
    name: "Cadbury Fuse",
    image:
      "https://m.media-amazon.com/images/I/713JP56Ox0L._AC_UL600_FMwebp_QL65_.jpg",
    price: 96,
    quantity: 0,
  },
  {
    id: 8,
    name: "Fabelle Rocky Road",
    image:
      "https://m.media-amazon.com/images/I/81JqI+-1YYL._AC_UL600_FMwebp_QL65_.jpg",
    price: 225,
    quantity: 0,
  },
  {
    id: 9,
    name: "Nestle Munch",
    image:
      "https://m.media-amazon.com/images/I/71uHoLv15iL._AC_UL600_FMwebp_QL65_.jpg",
    price: 425,
    quantity: 0,
  },
  {
    id: 10,
    name: "Amul Dark Chocolate",
    image:
      "https://m.media-amazon.com/images/I/41XQL-1sVTS._AC_UL600_FMwebp_QL65_.jpg",
    price: 335,
    quantity: 0,
  },
  {
    id: 11,
    name: "Dairy Milk Silk Bubbly",
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/chocolate/v/d/l/52-dairy-milk-silk-bubbly-chocolate-1-cadbury-original-imagmar8hd2cvkmz.jpeg?q=70",
    price: 150,
    quantity: 0,
  },
  {
    id: 12,
    name: "Fabelle Rocky Road",
    image:
      "https://m.media-amazon.com/images/I/81JqI+-1YYL._AC_UL600_FMwebp_QL65_.jpg",
    price: 225,
    quantity: 0,
  },
  {
    id: 13,
    name: `Sugarfree D'lite`,
    image:
      "https://rukminim1.flixcart.com/image/612/612/l5fnhjk0/chocolate/t/v/u/-original-imagg3ty67gnt6ku.jpeg?q=70",
    price: 180,
    quantity: 0,
  },
  {
    id: 14,
    name: "Bournville Cranberry",
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/chocolate/s/u/x/-original-imagj5w9huh6xkue.jpeg?q=70",
    price: 100,
    quantity: 0,
  },
  {
    id: 15,
    name: "GALAXY Milk",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kzogn0w0/chocolate/s/z/p/208-milk-chocolate-with-fruit-nut-52g-pack-of-4-4x52g-4-galaxy-original-imagbmx3tzkxnnpx.jpeg?q=70",
    price: 80,
    quantity: 0,
  },
  {
    id: 16,
    name: "Dairy Milk Silk Oreo",
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/chocolate/t/a/3/-original-imaghqdbzh2qeemq.jpeg?q=70",
    price: 80,
    quantity: 0,
  },
];

const productCardsContainer = document.getElementById("productCardsContainer");

const createProductCard = (product) => {
  const card = document.createElement("div");
  card.classList.add("col-12", "col-sm-6", "col-md-4","col-lg-3", "mb-4");
  card.innerHTML = `
      <div class="card">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h6 class="card-title">${product.name}</h6>
          <p class="card-text">Price: ₹${product.price}</p>
          <div class="quantity-container">
            <button class="btn-quantity btn-minus">-</button>
            <span class="text-quantity">${product.quantity}</span>
            <button class="btn-quantity btn-plus">+</button>
          </div>
        </div>
      </div>
    `;

  const quantityContainer = card.querySelector(".quantity-container");

  const minusButton = quantityContainer.querySelector(".btn-minus");
  const plusButton = quantityContainer.querySelector(".btn-plus");

  const quantityText = quantityContainer.querySelector(".text-quantity");


  const updateQuantityText = () => {
    quantityText.textContent = product.quantity;
  };

  minusButton.addEventListener("click", () => {
    if (product.quantity > 0) {
      product.quantity--;
      updateQuantityText();
    }
  });

  plusButton.addEventListener("click", () => {
    if (product.quantity < 8) { 
        product.quantity++;
        updateQuantityText();
      } else {
        alert("You can add only 8 quntity");
      }
  });

  return card;
};

const renderProductCards = (products) => {
  products.forEach((product) => {
    const productCard = createProductCard(product);
    productCardsContainer.appendChild(productCard);
  });
};

const viewCartButton = document.getElementById("viewCartButton");
viewCartButton.addEventListener("click", () => {
  localStorage.setItem("cartItems", JSON.stringify(products));
});

renderProductCards(products);
