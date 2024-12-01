// Initialize cart
let cart = [];

// Function to add items to the cart
function addToCart(product) {
    // Check if the item already exists in the cart
    const existingProduct = cart.find(item => item.name === product.name);
    if (existingProduct) {
        // If exists, increase quantity
        existingProduct.quantity += 1;
    } else {
        // If not, add as a new item
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
}

// Function to update the cart UI
function updateCartUI() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = ""; // Clear previous cart items

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <p class="cart-item-name">${item.name}</p>
            <p class="cart-item-price">$${(item.price * item.quantity).toFixed(2)} x ${item.quantity}</p>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    // Calculate the total price and ensure two decimal places
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalDiv = document.createElement("div");
    totalDiv.innerHTML = `<p style="text-align: right; font-size: 16px; font-weight: bold;">Total: $${totalPrice.toFixed(2)}</p>`;
    cartContainer.appendChild(totalDiv);
}

// Function to remove an item from the cart
function removeFromCart(productName) {
    // Remove the item from the cart
    cart = cart.filter(item => item.name !== productName);
    updateCartUI();
}

// Helper function to clean the price text and extract a valid number
function parsePrice(priceText) {
    // Remove non-numeric characters (e.g., currency symbols, EUR, etc.)
    return parseFloat(priceText.replace(/[^0-9.-]+/g, ""));
}

// Event listener for "Add to Cart" buttons
document.addEventListener("DOMContentLoaded", () => {
    // Handle all "Add to Cart" buttons across product cards
    document.querySelectorAll(".product-card button").forEach((button) => {
        button.addEventListener("click", () => {
            const productCard = button.parentElement;
            const product = {
                name: productCard.querySelector("h3").innerText,
                price: parsePrice(productCard.querySelector("p").innerText) // Use parsePrice here
            };
            addToCart(product);
        });
    });
});

// Repeat the same for other product cards (if you have more)
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".product-card2 button").forEach((button) => {
        button.addEventListener("click", () => {
            const productCard = button.parentElement;
            const product = {
                name: productCard.querySelector("h3").innerText,
                price: parsePrice(productCard.querySelector("p").innerText) // Use parsePrice here
            };
            addToCart(product);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".product-card3 button").forEach((button) => {
        button.addEventListener("click", () => {
            const productCard = button.parentElement;
            const product = {
                name: productCard.querySelector("h3").innerText,
                price: parsePrice(productCard.querySelector("p").innerText) // Use parsePrice here
            };
            addToCart(product);
        });
    });
});

// Functionality to toggle cart sidebar
const cartIcon = document.getElementById("cart-icon");
const cartSidebar = document.getElementById("cart-sidebar");
const closeCart = document.getElementById("close-cart");

cartIcon.addEventListener("click", () => {
    cartSidebar.style.right = "0"; // Slide the cart into view
});

closeCart.addEventListener("click", () => {
    cartSidebar.style.right = "-350px"; // Hide the cart
});
