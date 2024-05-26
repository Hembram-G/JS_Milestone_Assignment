function removeDuplicates(cart) {
    let uniqueCart = [...new Set(cart)];
    return uniqueCart;
}
const customerCart = ["apple", "banana", "apple", "orange", "banana", "grape"];
const updatedCart = removeDuplicates(customerCart);
console.log(updatedCart);
