// Operadores aritmeticos
let a = 5
let b = 10

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b) // Modulo de la division
console.log(a ** b) // Exponente

a++ //Incrementoo
console.log(a)


b-- // Decremento
console.log(b)

// Operadores de asignación
let myVariable = 2
console.log("Imprimimos las operaciones")
// Tambien podemos hacer
myVariable += 2
console.log(myVariable)
myVariable *= 2
console.log(myVariable)
myVariable /= 2
console.log(myVariable)
myVariable **= 2
console.log(myVariable)
myVariable %= 3
console.log(myVariable)

// Operadores de comparacion
console.log(a < b)
console.log(a > b)
console.log(a <= b)
console.log(a >= b)
console.log(a == b) // Igualdad por valor
console.log(a == 6) // True
console.log(a == "6") // True aunque sea texto, porque tiene el valor de 6
console.log(a != 6) 

// Igualdad por identidad (tipo de dato)
console.log(a === 6) // True
console.log(a === "6") // False
console.log(a !== "6") // True

// Tambien se asigno a 0 como false y 1 como true
console.log(0 == false)
console.log(1 == true)

// Cero tambien es igual a las cadenas vacias, aunque no en tipo
console.log(0 == "") //True
console.log(0 == " ") //True
console.log(0 == '') //True
console.log(0 === "") // False
console.log(undefined == null) // true
console.log(undefined === null) // false


// Operadores Lógicos
// and &&, or ||

console.log(5 > 10 && 15 < 20)
console.log(5 > 10 || 15 < 20)
console.log(5 > 10 && 15 > 20 || 30 < 40) // Aqui al parecer el or se evalua de ultimo


// operador de negacion !
console.log(5 > 10 && 15 < 20)
console.log(!(5 > 10 && 15 < 20))

console.log(!false) //le cambia el valor al false
console.log(!true) //le cambia el valor al true

// Operadores ternarios
const isRaining = true

isRaining ? console.log("Si esta lloviendo") : console.log("No está lloviendo")

// El operador logico es asi
// true ? valor si true : valor si no true