// Funciones
function myFunc(){
    console.log("mi function")
}
myFunc()

function myFunctionWithParams(name){
    console.log(`Hola con parametros ${name}`)
}

myFunctionWithParams("Dave")

// Funciones anonimas - Que no tienen un nombre definido, pero debe almacenarse en una variable
const myFunc2 = function(name){
    console.log(`Hola ${name}`)
}
myFunc2("Dave dev anonimo")

// Arrow functions: Forma mas concisa de escribir funciones. Aquí tambien debemos asignarla a una variable
const myFunc3 = (name) => {
    console.log(`Hola ${name}`)
}

myFunc3("Dave arrow")

// las arrow functions la podemos escribir sin {}
const myFunc4 = (name) =>  console.log(`Hola ${name}`)

myFunc4("Function arrow en una sola linea")


// Funciones com parámetros con defecto
function sum(a = 0,b = 0){
    console.log(a + b)
}
sum(3,4)
sum(5)
sum(a = 10)

// Retorno de valores
function mult(a, b){
    return a * b
}

console.log(mult(5,10))

// Funciones anidadas
function extern(){
    console.log("Funcion externa")
    function intern(){
        console.log("Funcion interna")
    }
    intern() // Ejecutamos la función interna dentro del scope
}

extern()

// Funciones de orden superior: Son funciones que reciben otras funciones como argumento
function applyFunc(func, param){
    func(param)
}   
applyFunc(myFunc4, "Funcion de orden superior")

//forEach: Es una función para ejecutar bucles de elementos iterables
myArray = [1,2,3,4,5]
 // Con arrow functions
myArray.forEach(element => console.log(element));

// Con funciones definidas normalmente
myArray.forEach(function (element) {
  console.log(element)
})
