function printDivisibleBy3Not2(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 !== 0) {
            continue;
        }   
        if (numbers[i] % 2 === 0) {
            continue;
        }
        console.log(numbers[i]);
    }
}
const numbersArray = [1, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
printDivisibleBy3Not2(numbersArray);
