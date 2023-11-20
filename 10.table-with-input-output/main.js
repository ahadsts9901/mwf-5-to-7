function printTable() {

    document.getElementById("result").innerHTML = ""

    let num = +document.getElementById("input").value

    for (let i = 1; i <= 10; i++) {

        //  2 X 2 = 4
        //   2      X    5      =       10
        let table = `${num} X ${i} = ${num * i}` //${} ==> templating

        let output = document.getElementById("result")

        output.innerHTML += `${table} <br/>`

    }

}