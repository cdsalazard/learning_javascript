// array


// Declaración, hay varias formas de declarar arrays

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

myArray = [1] // Se agrega un uno al array
myArray = [1,2,3,4] // Se aagregan varios valores al array

myArray2 = new Array(3) // Se crea un array de tres elementos vacia
myArray2 = new Array(1, 2, 3) // Aqui si crea un array de tres elementos


// Los arrays guardan valores de distinta naturaleza
myArray = [1,2,3, true, "hola"] // Se aagregan varios 
myArray2 = new Array(1, 2, 3, false, "adios") // Aqui si crea un array de tres elementos

// Agregar elemento a elemento al array
myArray2 = new Array(3) // Se crea un array de tres elementos vacia
myArray2[1] = "hola"
myArray2[2] = "adios"

myArray = []
myArray[1] = "hola"
myArray[2] = "adios"


// Métodos comunes
myArray = []

// push
myArray.push("Dave")
myArray.push("dev")
myArray.push(10)

// pop
let pop = myArray.pop() // Elimina el ultimo elemento y lo devuelve
pop = myArray.pop()
console.log(pop)
pop = myArray.pop()
console.log(pop)


// shift: Elimina el primer elemtento del arreglo y lo devuleve
myArray = [1,2,3,4]
console.log(myArray.shift())

// unshift: agrega elementos al principio
myArray.unshift("hola", "mundo")

// lenght: longitud del array
console.log(myArray.length)

// slide
let new_array = myArray.slice(0,2)
console.log(new_array)

// splice
console.log("antes de splice")

console.log(myArray)

new_array = myArray.splice(1,3) // Elimina y devuelve los elementos. Desde el 1 elimina 3 elementos
console.log(new_array)


console.log("despues de splice")

console.log(myArray)
