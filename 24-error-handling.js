// Uso de excepciones
let myObject

// try - catch - finally
try {
    console.log(myObject.email)
} catch (error) {
    console.log("Error en la ejecución:", error.message) // Podemos acceder al error
} finally {
    console.log("Este código se ejecuta si o si")
}


function suma(a,b){
    if (typeof a !== "number" || typeof b !== "number")
    {
        throw new TypeError("Esta operación solo suma números")
    }
    if (!(Number.isInteger(a)) || !(Number.isInteger(b))){
        throw new Error("Esta operación solo suma números enteros")
    } 
    if (a== 0 || b==0){
        throw new SumZeroIntegerError("Se esta intentando suma cero", a,b)
    }
    
    else {
        console.log(a+b)
        return a + b
    }
    


// Crear error personalizados




}
try {
   // suma(34,"10")
   // suma(5.5, 10)
} catch (error) { // Podemos tener distintos tipos de error y dependiendo del tipo de error mostrarlo por pantalla
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error) {
    console.log("Se ha producid un error:", error.message)
    }
}

class SumZeroIntegerError extends Error {
    constructor(message,a,b){
        super(message)
        this.a = a
        this.b = b
    }
    printNumbers(){
        console.log(this.a, '+', this.b)
    }
}

try {
    console.log(suma(0,10))
} catch (error) {
    console.log("Se ha producido un error:", error.message)
    error.printNumbers()
}

