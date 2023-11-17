function addMatrix() {


    // first values
    let a1 = +document.getElementById("a1").value
    let a2 = +document.getElementById("a2").value
    let a3 = +document.getElementById("a3").value
    let a4 = +document.getElementById("a4").value

    let firstValues = [a1, a2, a3, a4]

    // second values
    let b1 = +document.getElementById("b1").value
    let b2 = +document.getElementById("b2").value
    let b3 = +document.getElementById("b3").value
    let b4 = +document.getElementById("b4").value

    let secondValues = [b1, b2, b3, b4]

    // adding both arrays

    // firstValues = [a1, a2, a3, a4]
    // secondValues = [b1, b2, b3, b4]
    
    let c1 = firstValues[0] + secondValues[0]
    let c2 = firstValues[1] + secondValues[1]
    let c3 = firstValues[2] + secondValues[2]
    let c4 = firstValues[3] + secondValues[3]

    let result = [c1, c2, c3, c4]

    console.log(result);

    let result1 = document.getElementById("c1")
    let result2 = document.getElementById("c2")
    let result3 = document.getElementById("c3")
    let result4 = document.getElementById("c4")

    result1.value = result[0]
    result2.value = result[1]
    result3.value = result[2]
    result4.value = result[3]

}