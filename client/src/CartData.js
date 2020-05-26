const cart = {
    products: [],
    totalPrice: 0,
    quantity: 0
}

const removeItemFromCart = (product, evt) => {
    evt.preventDefault()
    cart.products.splice(product, 1)
    return cart
}

export {
    cart,
    removeItemFromCart
}