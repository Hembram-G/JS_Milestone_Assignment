const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    // Calculate the discount amount
    const discountAmount = originalPrice - discountedPrice;

    // Calculate the discount percentage
    const discountPercentage = (discountAmount / originalPrice) * 100;

    // Round off the discount percentage to two decimal places
    const roundedDiscountPercentage = Math.round(discountPercentage * 100) / 100;

    return roundedDiscountPercentage;
};

const originalPrice = 100; // Original price of the product
const discountedPrice = 70; // Discounted price of the product
const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log("Discount percentage:", discountPercentage + "%");
