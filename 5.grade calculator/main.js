

// make function on button click

function calculate() {

    //  get the input element in variable

    let per = document.getElementById("userInput").value
    let grade = ""

    // calculate grade conditionally

    if (per > 100 || per < 0) {
        grade = "Invalid Percentage"
    } else if (per >= 80) {
        grade = "A1 Grade"
    } else if (per >= 70) {
        grade = "A Grade"
    } else if (per >= 60) {
        grade = "B Grade"
    } else if (per >= 50) {
        grade = "C Grade"
    } else if (per >= 40) {
        grade = "D Grade"
    } else {
        grade = "Fail"
    }

    // show output

    let result = document.getElementById("result")
    result.innerText = grade

}