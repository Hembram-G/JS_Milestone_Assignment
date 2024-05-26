function mixColors(color1, color2) {
    let result;

    switch (true) {
        case (color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red"):
            result = "purple";
            break;
        case (color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red"):
            result = "orange";
            break;
        case (color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue"):
            result = "green";
            break;
        default:
            result = "invalid color combination";
            break;
    }

    console.log(result);
}
mixColors("red", "blue"); // Output: purple
mixColors("blue", "red"); // Output: purple
mixColors("red", "yellow"); // Output: orange
mixColors("yellow", "red"); // Output: orange
mixColors("blue", "yellow"); // Output: green
mixColors("yellow", "blue"); // Output: green
mixColors("red", "green"); // Output: invalid color combination