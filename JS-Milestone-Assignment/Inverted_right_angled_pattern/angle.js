function printInvertedTriangle(rows) {
    for (let i = rows; i > 0; i--) {
        let rowPattern = '';
        for (let j = 0; j < i; j++) {
            rowPattern += '*';
        }
        console.log(rowPattern);
    }
}

const rows = 5;
printInvertedTriangle(rows);