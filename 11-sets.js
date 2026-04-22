// set

// Declaración
let mySet = new Set()

// Inicialización, es entre ([])
mySet = new Set(["elemento1", "elemento2", "elemento3"])
console.log(mySet)

// Métodos comunes

// add
mySet.add("Dave")
console.log(mySet)

// delete: le indico el elemtento que quiero borrar
mySet.delete("elemento1") // Retorna true, si el elemento existe y false si no existe
console.log(mySet)

// has: para comprobar si existe un elemento
console.log(mySet.has("estrella"))
console.log(mySet.has("Dave"))

// size, propiedad de longitud
console.log(mySet.size)

// Convertir set en array
let myArray = Array.from(mySet)
console.log(myArray)


// Convertir array en set, los sets no guardan duplicados
let myArray3 = new Set(myArray)
console.log(myArray3)