function capitalizeFirstLetter(name) {
    let modifiedName = (name.charAt(0) === name.charAt(0).toLowerCase()) 
                        ? name.charAt(0).toUpperCase() + name.slice(1) 
                        : name;
    return modifiedName;
}


const userName = "goutam";
const modifiedName = capitalizeFirstLetter(userName);
console.log(modifiedName); 

const anotherUserName = "Niyati";
const anotherModifiedName = capitalizeFirstLetter(anotherUserName);
console.log(anotherModifiedName);
