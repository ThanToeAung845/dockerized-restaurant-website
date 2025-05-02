const products = [
  {
    id: 0,
    image: "images/menu1.png",
    title: "Yotsuba Revoltech Figma",
    review: "Review pages/Yotsubafig.html",
    price: 50,
  },
  {
    id: 1,
    image: "images/menu1.png",
    title: "Megumin GoodSmile Figma",
    review: "Review pages/Meguminfig.html",
    price: 80,
  },
  {
    id: 2,
    image: "images/menu1.png",
    title: "Arcueid GoodSmile Figma DX Edition",
    review: "Review pages/Arcueidfig.html",
    price: 120,
  },

  {
    id: 3,
    image: "images/menu1.png",
    title: "Usada Pekora GoodSmile Figma",
    review: "Review pages/Pekorafig.html",
    price: 60,
  },
  {
    id: 4,
    image: "images/menu1.png",
    title: "Asuna Suna Stacia Figure",
    review: "Review pages/Asunafig.html",
    price: 80,
  },
  {
    id: 5,
    image: "images/menu1.png",
    title: "Mona GoodSmile Figma",
    review: "Review pages/Monafig.html",
    price: 70,
  },

  {
    id: 6,
    image: "images/menu1.png",
    title: "Kobeni GoodSmile Nendoroid",
    review: "Review pages/Kobenifig.html",
    price: 50,
  },
  {
    id: 7,
    image: "images/menu1.png",
    title: "1/4 Scale Satoru Gojo Figure",
    review: "Review pages/GojoFig.html",
    price: 70,
  },
  {
    id: 8,
    image: "images/menu1.png",
    title: "Chain Saw Man Season 1 DvD",
    review: "Anime Review pages/csm.html",
    price: 30,
  },

  {
    id: 9,
    image: "images/menu1.png",
    title: "Jujutsu Kaisen Season 0 DVD",
    review: "Anime Review pages/jjk.html",
    price: 30,
  },
  {
    id: 10,
    image: "images/menu1.png",
    title: "Jujutsu Kaisen Season 1 DVD",
    review: "Anime Review pages/jjk.html",
    price: 30,
  },
  {
    id: 11,
    image: "images/menu1.png",
    title: "Ponya Movie DvD",
    review: "Review pages/ponyo.html",
    price: 30,
  },

  {
    id: 12,
    image: "images/menu1.png",
    title: "Spy X Family Season 1 DVD",
    review: "Review pages/spyxfamily.html",
    price: 30,
  },

  {
    id: 13,
    image: "images/menu1.png",
    title: "Tokyo Revengers Season 1 DvD",
    review: "Review pages/tokyorev.html",
    price: 30,
  },

  {
    id: 14,
    image: "images/menu1.png",
    title: "Tokyo Revengers Season 2 DvD",
    review: "Review pages/tokyorev.html",
    price: 30,
  },

  {
    id: 15,
    image: "images/menu1.png",
    title: "Yotsuba Manga Volume 1",
    review: "manga review pages/yotsubamanga.html",
    price: 30,
  },

  {
    id: 16,
    image: "images/menu1.png",
    title: "Yotsuba Manga Volume 2",
    review: "manga review pages/yotsubamanga.html",
    price: 30,
  },
  {
    id: 17,
    image: "images/menu1.png",
    title: "Yotsuba Manga Volume 3",
    review: "manga review pages/yotsubamanga.html",
    price: 30,
  },
  {
    id: 18,
    image: "images/menu1.png",
    title: "Yotsuba Manga Volume 4",
    review: "manga review pages/yotsubamanga.html",
    price: 30,
  },
  {
    id: 19,
    image: "images/menu1.png",
    title: "Yotsuba Manga Volume 5",
    review: "manga review pages/yotsubamanga.html",
    price: 30,
  },
  {
    id: 20,
    image: "images/menu1.png",
    title: "Yotsuba Manga Volume 6",
    review: "manga review pages/yotsubamanga.html",
    price: 30,
  },
  {
    id: 21,
    image: "images/menu1.png",
    title: "Yotsuba Manga Volume 7",
    review: "manga review pages/yotsubamanga.html",
    price: 30,
  },
  {
    id: 22,
    image: "images/menu1.png",
    title: "Yotsuba Manga Volume 8",
    review: "manga review pages/yotsubamanga.html",
    price: 30,
  },
  {
    id: 23,
    image: "images/menu1.png",
    title: "Yotsuba Manga Volume 9",
    review: "manga review pages/yotsubamanga.html",
    price: 30,
  },
  {
    id: 24,
    image: "images/menu1.png",
    title: "Yotsuba Manga Volume 10",
    review: "manga review pages/yotsubamanga.html",
    price: 30,
  },
];

// Initialize the cart as an empty array or retrieve it from localStorage
var cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add a product to the cart
function addtocart(productId) {
  const selectedProduct = filteredProducts[productId];
  cart.push(selectedProduct);
  displaycart();

  // Update localStorage with the cart data
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to remove a product from the cart
function delElement(cartIndex) {
  cart.splice(cartIndex, 1);
  displaycart();

  // Update localStorage with the updated cart data
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to display the cart
function displaycart() {
  let Total = 0;
  const cartItems = document.getElementById("cartItem");

  if (cart.length == 0) {
    cartItems.innerHTML = "Your cart is Empty";
    document.getElementById("Total").innerHTML = "$ " + 0 + " .00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((item, index) => {
        const { image, title, review, price } = item;
        Total = Total + price;
        document.getElementById("Total").innerHTML = "$" + Total + ".00";
        localStorage.setItem("items", JSON.stringify(cart));
        localStorage.setItem("totalPrice", Total);

        return `
                <div class="cart-item">
                    <div class="row-img">
                        <img class="rowimg" src="${image}">
                    </div>
                    <p style="font-size: 12px; margin: 0 5px;">${title}</p>
                    <h2 style="font-size: 15px; margin: 0 5px;">$ ${price}.00</h2>
                    <i class="fa-solid fa-trash-can" onclick="delElement(${index})"></i>
                </div>
            `;
      })
      .join("");

    document.getElementById("Total").innerHTML = `$ ${totalPrice.toFixed(2)}`;
    document.getElementById("count").innerHTML = cart.length;
  }
}

// Function to filter and display products based on user input
function filterProducts(searchText) {
  filteredProducts = products.filter((product) => {
    // Perform case-insensitive search
    return product.title.toLowerCase().includes(searchText.toLowerCase());
  });

  document.getElementById("root").innerHTML = filteredProducts
    .map((item, index) => {
      const { image, title, review, price } = item;

      return `
            <div class='figbox'>
                <div class='img-fbox'>
                    <img class='images' src='${image}' alt='${title}'>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>
                    <button onclick='addtocart(${index})'>Add to Cart</button>
                </div>
            </div>
        `;
    })
    .join("");
}

// Add an event listener to the search input
document.getElementById("search").addEventListener("input", function () {
  const searchText = this.value;
  filterProducts(searchText);
});

// Initial call to display all products
var filteredProducts = products; // Initialize with all products
displaycart(); // Display the cart

// const autoCompleteInputTag =
//   document.getElementsByClassName("autoCompleteInput")[0];

// const resultContainerTag =
//   document.getElementsByClassName("resultContainer")[0];

// let filteredProducts = [];

// autoCompleteInputTag.addEventListener("keyup", (event) => {
//   if (
//     event.key === "ArrowDown" ||
//     event.key === "ArrowUp" ||
//     event.key === "Enter"
//   ) {
//     navigateAndSelectProduct(event.key);
//     return;
//   }

//   resultContainerTag.innerHTML = "";
//   const searchText = event.target.value.toLowerCase();
//   if (searchText.length === 0) {
//     return;
//   }
//   filteredProducts = products.filter((product) => {
//     return product.title.toLowerCase().includes(searchText);
//   });

//   const hasProductsToShow = filteredProducts.length > 0;
//   if (hasProductsToShow) {
//     for (let i = 0; i < filteredProducts.length; i++) {
//       const productItemContainer = document.createElement("div");
//       productItemContainer.id = filteredProducts[i].id;
//       productItemContainer.classList.add("productItemContainer");

//       const productName = document.createElement("div");
//       productName.classList.add("productName");
//       productName.append(filteredProducts[i].title);

//       const productImage = document.createElement("img");
//       productImage.classList.add("productImage");
//       productImage.src = filteredProducts[i].image;

//       productItemContainer.append(productName, productImage);
//       resultContainerTag.append(productItemContainer);
//     }
//   }
// });

// let indexToSelect = -1;
// const navigateAndSelectProduct = (key) => {
//   if (key === "ArrowDown") {
//     if (indexToSelect === filteredProducts.length - 1) {
//       indexToSelect = -1;
//       deselectProduct();
//       return;
//     }
//     indexToSelect += 1;
//     const productItemContainerToSelect = selectProduct(indexToSelect);
//     if (indexToSelect > 0) {
//       deselectProduct();
//     }
//     productItemContainerToSelect.classList.add("selected");
//   } else if (key === "ArrowUp") {
//     if (indexToSelect === -1) {
//       return;
//     }

//     if (indexToSelect === 0) {
//       deselectProduct();
//       indexToSelect = -1;
//       return;
//     }
//     indexToSelect -= 1;
//     deselectProduct();
//     const productItemContainerToSelect = selectProduct(indexToSelect);
//     productItemContainerToSelect.classList.add("selected");
//   } else {
//     const enteredProduct = selectProduct(indexToSelect);
//     console.log("Entered product: ", enteredProduct);
//   }
// };

// const selectProduct = (index) => {
//   const productIdToSelect = filteredProducts[index].id.toString();
//   const productItemContainerToSelect =
//     document.getElementById(productIdToSelect);
//   productItemContainerToSelect.style.backgroundColor = "#237BFF";
//   productItemContainerToSelect.firstChild.style.color = "white";
//   return productItemContainerToSelect;
// };

// const deselectProduct = () => {
//   const productToDeselect = document.getElementsByClassName("selected")[0];
//   productToDeselect.style.backgroundColor = "white";
//   productToDeselect.firstChild.style.color = "black";
//   productToDeselect.classList.remove("selected");
// };
