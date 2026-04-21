// if, else if, else


let age = 10
// if
if(age == 37){
    console.log("Tu edad es 37")
} else if (age < 18){
    console.log("Eres menor de edad")
} else  {
    console.log("Tu edad no es 37")
}


// Operador ternario

const message = age == 27 ? "La edad es 27" : "La edad no es 37"
console.log(message)

// switch: se usa para comparar condiciones que se revisan frente a unica varaible

let day = 10
let dayName
switch(day){
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Número de dia incorrecto"
}

console.log(dayName)