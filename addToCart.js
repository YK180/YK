// JavaScript code for Add to Cart functionality

// Initialize an empty array to store cart items
let cart = [];

// Function to handle "Add to Cart" button clicks
function addToCart(productName, productPrice) {
    // Create an object for the product
    const product = {
        name: productName,
        price: productPrice,
    };

    // Add product to the cart
    cart.push(product);

    // Show a message to the user
    alert(`${productName} has been added to your cart!`);

    // Display the updated cart in the console (for debugging)
    console.log("Cart:", cart);
}

// Attach event listeners to all "Add to Cart" buttons
document.querySelectorAll(".product-card, .product-card2, .product-card3, .product-card4, .product-card5, .product-card6, .product-card7, .product-card8, .product-card9")
    .forEach((productCard) => {
        const button = productCard.querySelector("button");
        const productName = productCard.querySelector("h3").innerText;
        const productPrice = productCard.querySelector("p").innerText;

        button.addEventListener("click", () => addToCart(productName, productPrice));
    });
