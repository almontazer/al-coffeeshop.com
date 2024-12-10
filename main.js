let cart = [];
let total = 0;

// Add item to cart
function addToCart(coffeeName, price) {
  cart.push({ name: coffeeName, price: price });
  total += price;
  updateCart();
  toggleCart();
}

// Update cart UI
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');
  cartItems.innerHTML = ''; // Clear previous cart items
  
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });

  totalPrice.textContent = total.toFixed(2);
}

// Toggle cart modal visibility
function toggleCart() {
  const cartModal = document.getElementById('cart-modal');
  cartModal.style.display = cartModal.style.display === 'flex' ? 'none' : 'flex';
}

// Checkout functionality (placeholder)
document.getElementById('checkout-btn').addEventListener('click', () => {
  alert('Proceeding to checkout...');
  cart = []; // Clear cart after checkout
  total = 0;
  updateCart();
  toggleCart();
});

