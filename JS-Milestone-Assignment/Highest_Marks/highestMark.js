function findHighestMarks(marks) {
    let highestMarks = marks[0];

    for (let i = 1; i < marks.length; i++) {
        highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks;
    }

    console.log(`The highest marks scored by student is: ${highestMarks}`);
}

const marks = [85, 92, 88, 79, 95];
findHighestMarks(marks); 
