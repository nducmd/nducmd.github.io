let correctAnswers = [];

function displayUserInfo(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const studentId = document.getElementById('studentId').value;
    const userClass = document.getElementById('class').value;

    if (!name || !dob || !studentId || !userClass) {
        alert("Vui lòng nhập đủ thông tin");
        return;
    }
    document.getElementById('userInfoDisplay').innerHTML = `
        <h3>Thông tin sinh viên:</h3>
        <p><strong>Họ Tên:</strong> ${name}</p>
        <p><strong>Ngày Sinh:</strong> ${dob}</p>
        <p><strong>Mã Sinh Viên:</strong> ${studentId}</p>
        <p><strong>Lớp:</strong> ${userClass}</p>
    `;
    var login = document.getElementById("login");
    login.style.display = "none";
    document.getElementById("questionForm").style.display = "block";
}

function showResult(event) {
    event.preventDefault();

    const result = document.getElementById("result");
    const strSingleAnswer = "ABABABABABABCDABCDAB";
    let score = 0;
    for (let i = 1; i <= 20; i++) {
        let currQuestion = 'input[name="q' + i + '"]:checked';
        //console.log(currQuestion)
        const currAnswer = document.querySelector(currQuestion);
        if (!currAnswer) {
            alert("Vui lòng trả lời câu hỏi " + i);
            return;
        }
        //console.log(currAnswer.value);
        if (currAnswer.value == strSingleAnswer[i-1]) {
            score++;
            correctAnswers.push(i);
        }
    }
    const arrMultiAnswer = [["A", "C"], ["A", "C"], ["A", "C"], ["A", "C"], ["A", "C"], ["A", "C"], ["A", "C"], ["A", "C"], ["A", "C"], ["A", "C"]];
    for (let i = 21; i <= 30; i++) {
        let currQuestion = 'input[name="q' + i + '"]:checked';
        //console.log(currQuestion)
        const currAnswer = Array.from(document.querySelectorAll(currQuestion)).map(input => input.value)
        //console.log(currAnswer.value);
        //console.log(currAnswer);
        if (currAnswer.length == 0) {
            alert("Vui lòng trả lời câu hỏi " + i);
            return;
        }
        let tmp = 0;
        for (let j = 0; j < currAnswer.length; j++) {
            if (arrMultiAnswer[i-20-1].includes(currAnswer[j])) {
                tmp++;
            }
        }
        if (tmp == arrMultiAnswer[i-20-1].length) {
            score++;
            correctAnswers.push(i);
        }
    }
    const fillAnswer = ["6", "4", "15", "4", "10", "2", "4", "10", "3", "21"]

    for (let i = 31; i <= 40; i++) {
        let currQuestion = 'input[name="q' + i + '"]';
        //console.log(currQuestion)
        const currAnswer = document.querySelector(currQuestion);
        if (!currAnswer.value) {
            alert("Vui lòng trả lời câu hỏi " + i);
            return;
        }
        //console.log(currAnswer.value);
        //console.log(currAnswer);
        if (currAnswer.value.trim() == fillAnswer[i-30-1]) {
            score++;
            correctAnswers.push(i);
        }
    }
    
    let correctAnswersString = "Các câu đúng là: ";
    correctAnswers.forEach((answer, index) => {
        if (index !== 0) {
            correctAnswersString += ", ";
        }
        correctAnswersString += answer;
    });
    result.innerHTML = "Điểm: " + score + "/40" + "<br>" + correctAnswersString;
}