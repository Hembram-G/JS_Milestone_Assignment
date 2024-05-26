function calculateRentalCost(daysRented, carType) {
    let rentalCostPerDay;

    // Determine rental cost per day based on car type
    switch (carType.toLowerCase()) {
        case 'economy':
            rentalCostPerDay = 4000;
            break;
        case 'midsize':
            rentalCostPerDay = 10000;
            break;
        case 'luxury':
            rentalCostPerDay = 20000;
            break;
        default:
            return 'Invalid car type';
    }

    // Calculate total rental cost
    const totalRentalCost = rentalCostPerDay * daysRented;
    return totalRentalCost;
}

const daysRented = 5;
const carType = 'luxury';
const totalCost = calculateRentalCost(daysRented, carType);
console.log(`Total rental cost for ${daysRented} days with ${carType} car: Rs. ${totalCost}/-`);
