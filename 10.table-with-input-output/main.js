function printTable() {

    document.getElementById("result").innerHTML = ""

    let num = +document.getElementById("input").value
    let from = +document.getElementById("from").value
    let to = +document.getElementById("to").value

    if (from >= to) {
        document.getElementById("result").innerHTML = "Number is greater"
        return;
    }

    for (let i = from; i <= to; i++) {

        //  2 X 2 = 4
        //   2      X    5      =       10
        let table = `${num} X ${i} = ${num * i}` //${} ==> templating

        let output = document.getElementById("result")

        output.innerHTML += `${table} <br/>`

    }

}