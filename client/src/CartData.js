const cart = {
    products: [],
    totalPrice: 0,
    quantity: 0
}

const removeItemFromCart = (product) => {
    cart.products.splice(product, 1)
    return cart.products
}

export {
    cart,
    removeItemFromCart
}