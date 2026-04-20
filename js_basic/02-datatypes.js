// String (cadena de texto)
let name = "Dave_dev"

// Numeros
let age = 10. // Enteros. (64 bits)
let height = 1.77 // Decimales

// Boolean
let isStudent = true
let isNotStudent = false

// Undefined: Declaramos la variable y no le hemos asignado un valor
let UndefinedValue
console.log(UndefinedValue)

// Null: variable nula
let nullValue = null //Si se imprime su tipo de dato aparece como objeto
console.log(nullValue)

// Symbol: Intentan representar valores únicos, que pueden ser utilizados con identificadores de propiedades
let mySymbol = Symbol("mysymbol")

//BigInt: Numeros enteros muy grandes 
let myBigInt = BigInt(6857544452544543254343543535435435435434)

// Mostramos los tipos de datos typeof
console.log(typeof name)
console.log(typeof age)
console.log(typeof height)
console.log(typeof isNotStudent)
console.log(typeof isStudent)
console.log(typeof UndefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)