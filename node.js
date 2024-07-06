const cart = [];
const cartElement = document.createElement('div');
cartElement.classList.add('cart');
cartElement.innerHTML = '<ul></ul><div class="cart-total">Total: <span>0</span> Rs.</div>';
document.body.appendChild(cartElement);

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseInt(button.getAttribute('data-price'));

        const item = cart.find(item => item.name === name);
        if (item) {
            item.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        updateCart();
    });
});

function updateCart() {
    const ul = cartElement.querySelector('ul');
    ul.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        ul.innerHTML += `<li><span>${item.name} x ${item.quantity}</span><span>${item.price * item.quantity} Rs.</span></li>`;
    });

    cartElement.querySelector('.cart-total span').textContent = total;
}