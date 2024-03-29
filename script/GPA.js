
window.onload = function() {
  document.getElementById("courseList").style.display = "none";
}

var courseList = [];

function addCourse() {

  var courseName = document.getElementById("courseName").value;
  var credits = document.getElementById("credits").value;
  var grade = document.getElementById("grade").value;

  // Validate the input
  if (!grade || !credits) {
    alert("Nhập điểm và số tín chỉ!");
    return;
  }
  if (credits < 1) {
    alert("Số tín chỉ lớn hơn 0!");
    return;
  }
  if (!(grade == "A+" || grade == "A" || grade == "B+" || grade == "B" || grade == "C+" || grade == "C" ||grade == "D+" || grade == "D" || grade == "F")) {
    alert("Điểm không hợp lệ: " + courseName);
    return;
  }
  if (!courseName) {
    courseName = "Môn " + (courseList.length + 1);
  }
  var table = document.getElementById("courseList");
  var row = table.insertRow(-1);
  var nameCell = row.insertCell(0);
  nameCell.innerHTML = courseName;
  var creditsCell = row.insertCell(1);
  creditsCell.innerHTML = credits;
  var gradeCell = row.insertCell(2);
  gradeCell.innerHTML = grade;
  var deleteCell = row.insertCell(3);
  var deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("id", "buttonDel");
  deleteBtn.innerHTML = "X";
  deleteBtn.onclick = function() {
    deleteCourse(row);
  };
  deleteCell.appendChild(deleteBtn);
  courseList.push({ name: courseName, credits: credits, grade: grade });
  document.getElementById("courseList").style.display = "";
  calculateGPA();
  document.getElementById("courseName").value = "";
  document.getElementById("grade").value = "";
  document.getElementById("credits").value = "";
  document.getElementById("buttonAdd").style.background = "";
  document.getElementById("buttonAdd").style.color = "";
}

function changeTheColorOfButton() {
  var grade = document.getElementById("grade").value;
  var credits = document.getElementById("credits").value;
  if (grade != "" && credits != "" && credits > 0 && (grade == "A+" || grade == "A" || grade == "B+" || grade == "B" || grade == "C+" || grade == "C" ||grade == "D+" || grade == "D" || grade == "F")) {
     document.getElementById("buttonAdd").style.background = "green";
     document.getElementById("buttonAdd").style.color = "white";
  } else {
    document.getElementById("buttonAdd").style.background = "";
    document.getElementById("buttonAdd").style.color = "";
  }
}

function calculateGPA() {
  if(courseList.length == 0) {
    document.getElementById("gpa").innerHTML = "";
    document.getElementById("courseList").style.display = "none";
    return;
  }
  var totalPoints = 0;
  var totalCredits = 0;
  for (var i = 0; i < courseList.length; i++) {
    var course = courseList[i];
    var credits = course.credits;
    totalCredits += parseInt(credits);
    switch (course.grade) {
      case "A+":
        totalPoints += 4 * credits;
        break;
      case "A":
        totalPoints += 3.7 * credits;
        break;
      case "B+":
        totalPoints += 3.5 * credits;
        break;
      case "B":
        totalPoints += 3 * credits;
        break;
      case "C+":
        totalPoints += 2.5 * credits;
        break;
      case "C":
        totalPoints += 2 * credits;
        break;
      case "D+":
        totalPoints += 1.5 * credits;
        break;
      case "D":
        totalPoints += 1 * credits;
        break;
      case "F":
        totalPoints += 0;
        break;
      default: totalPoints += 0;
    }
  }
  var gpa = totalPoints / totalCredits;
  document.getElementById("gpa").innerHTML = "GPA: " + Math.round(gpa * 100) / 100;
}

  
function deleteCourse(row) {
  var table = document.getElementById("courseList");
  var index = row.rowIndex;
  table.deleteRow(index);
  courseList.splice(index-1, 1);
  calculateGPA();
}
