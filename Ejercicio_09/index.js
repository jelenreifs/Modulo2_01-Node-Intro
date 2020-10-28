const aleatorio = require("./par");

function esPar(aleatorio) {
    if (aleatorio % 2 == 0) {
    // console.log(true)
        return true
    } else {
    // console.log(false)
        return false
    }  
}

console.log(esPar(aleatorio));

