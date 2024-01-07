var TheWeight = [
    [10, 20, 20, 50],
    [10, 10, 30, 50],
    [10, 10, 20, 60],
    [10, 10, 10, 70],
    [10, 30, 60],
    [10, 20, 70],
    [10, 10, 80]
];

var GradeInput = [0, 0, 0, 0];
var selected = -1;

function changeTheWeight() {
    for (var i = 0; i < 4; i++) {
        GradeInput[i] = 0;
    }
    selected = document.getElementById("weight").value;
    //console.log(selected); console.log(TheWeight[selected]);
    var table = document.getElementById('gradeTable');
    var rows = 2;
    var columns = TheWeight[selected].length;
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
    for (var i = 0; i < rows; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j < columns+1; j++) {
            if (i == 0) {
                var cell = document.createElement('th');
                if (j == columns) {
                    cell.innerHTML = "Tổng kết";
                } else {
                    cell.innerHTML = "Điểm " + TheWeight[selected][j] + "%";
                }
                row.appendChild(cell);
            } else {
                if (j != columns) {
                    var cell = document.createElement('td');
                    var input = document.createElement('input');
                    input.type = 'number';
                    input.name = 'cellInput';
                    input.min = 0;
                    input.max = 10;
                    input.step = 'any';
                    input.value = 0;
                    input.addEventListener('input', function() {
                        var idx = this.parentNode.cellIndex;
                        GradeInput[idx] = this.value;
                        calculateFinalGrade();
                    });
                    cell.appendChild(input);
                } else {
                    var cell = document.createElement('th');
                }
                row.appendChild(cell);
            }
        }
    }
}

function calculateFinalGrade() {
    var finalGrade = 0.0;
    for (var i = 0; i < TheWeight[selected].length; i++) {
        finalGrade += TheWeight[selected][i] * GradeInput[i];
    }
    //console.log(finalGrade / 100);
    var table = document.getElementById('gradeTable');
    var cell = table.rows[1].cells[TheWeight[selected].length];

    cell.innerHTML = roundGrade(finalGrade/100);
}

function roundGrade(finalGrade) {
    var tmp = finalGrade.toFixed(2);
    finalGrade = Math.round(finalGrade * 10) / 10;
    if (tmp > 10.0) return "&#128548;";
    //return "" + finalGrade + getCharGrade(finalGrade);
    return "" + tmp + getCharGrade(finalGrade);
}

function getCharGrade(finalGrade) {
    if (finalGrade >= 9.0) {
        return " (A+)" + " " + "&#x1F618;";
    } else if (finalGrade >= 8.5) {
        return " (A)";
    } else if (finalGrade >= 8.0) {
        return " (B+)";
    } else if (finalGrade >= 7.0) {
        return " (B)";
    } else if (finalGrade >= 6.5) {
        return " (C+)";
    } else if (finalGrade >= 5.5) {
        return " (C)";
    } else if (finalGrade >= 5.0) {
        return " (D+)";
    } else if (finalGrade >= 4.0) {
        return " (D)";
    }
    return " (F)"
}