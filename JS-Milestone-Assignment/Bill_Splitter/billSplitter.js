function calculateTotalBill(costPerDish, numberOfPeopleSharing) {
    // Calculate total bill
    const totalBill = costPerDish * numberOfPeopleSharing;

    // Calculate bill per person
    const billPerPerson = totalBill / numberOfPeopleSharing;

    // Return an object containing total bill and bill per person
    return {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };
}


const costPerDish = 500; // Cost of each dish
const numberOfPeopleSharing = 4; // Number of people sharing the dish
const billDetails = calculateTotalBill(costPerDish, numberOfPeopleSharing);
console.log("Total bill:", billDetails.totalBill);
console.log("Bill per person:", billDetails.billPerPerson);

