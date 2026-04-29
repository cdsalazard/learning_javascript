// Console

//log
console.log("Hola, Javascript")

//error
console.error("Este es un mensaje de error")
console.error("Error al conectarse a una base de datos: ", new Error("Conexión errada"))

// warn
console.warn("Este es un mensaje de advertencia")

// info
console.info("Este es un mensaje de eror adicional")

// Tambien podemos formatear datos con console

//table
let data = [
    ["Brais", 37],
    ["Dave", 27]
]


console.table(data)

data = [
    {name:"Dave", age:"21"},
    {name:"DaveDev", age:"31"},
]
console.table(data)

// Operaciones de grupo
console.group("Usuario:")
console.log("Nombre: Brais")
console.log("Edad:37")
console.groupEnd()

// time
console.time("Tiempo de ejecución")

for (let i = 0; i < 1000; i++){

}
console.timeEnd("Tiempo de ejecución")

// assert: muestra un mensaje de error, si lo que se evalua es falso
let age = 18
console.assert(age >= 17, "El usuario debe ser mayor de edad")

// count
console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// trace: muestra el seguimiento de la pila de ejecución
// console.trace("Seguimiento de la ejecución.")

function functionA(){
    functionB()
}

function functionB(){
    console.trace("seguimiento de ejecución")
}

functionA()

//clear
console.clear()