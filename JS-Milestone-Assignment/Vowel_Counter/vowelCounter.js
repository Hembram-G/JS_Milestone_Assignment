function countVowels(name) {
   
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < name.length; i++) {
        
        if (vowels.includes(name[i])) {
            count++;
        }
    }

    return count;
}

const userName = "Goutam";
const vowelCount = countVowels(userName);
console.log(`The number of vowels in the name ${userName} is: ${vowelCount}`);
