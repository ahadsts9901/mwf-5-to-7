function weather(){


    let temp = document.getElementById("input").value

    let result = ""

    switch (true){
        // if
        case temp < 0 :
        result = "too cold you may die"
        break;
        // else if
        case temp > 40 :
        result = "heat stroke"
        break;
        // else if
        case temp >= 30 :
        result = "normal weather"
        break;
        // else if
        case temp >= 20 :
        result = "good weather"
        break;
        // else if
        case temp >= 10 :
        result = "cold weather"
        break;
        //else
        default : // between 0 and 10
        result = "too cold"
    }

    let output = document.getElementById("result")

    output.innerHTML = result

}