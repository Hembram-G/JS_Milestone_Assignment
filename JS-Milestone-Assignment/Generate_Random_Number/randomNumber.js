const randomGenerator = (() => {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
})();

console.log("Random number:", randomGenerator);
