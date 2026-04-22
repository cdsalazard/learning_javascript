// Los maps (diccionarios) permiten guardar estructuras de datos y no solo datos primitivos

// Declaración
let myMap = new Map()
console.log(myMap)

// Inicialización
myMap = new Map([
    ["name", "dave"],
    ["email", "davedev@davedev.com"],
    ["age", 21],
])

console.log(myMap)

// Métodos y propiedades

//set: 
// actualizar o agregar un elemtno
myMap.set("alias", "dave")
myMap.set("name", "DAVE")

console.log(myMap)

// get: 
// Obtener elementos
console.log(myMap.get("name"))
console.log(myMap.get("name_sub"))

// has: 
// saber si contiene una llave
console.log(myMap.has("name"))
console.log(myMap.has("name_sub"))

//delete 
// para eliminar un elemento a través de su llave
myMap.delete("email")
console.log(myMap)

// keys
// ver las llaves

console.log(myMap.keys())

// values
console.log(myMap.values())

// entries, 
// nos da todas las claves y valores, es un iterador
console.log(myMap.entries())

//size
//para ver el tamaño del map
console.log(myMap.size)


//delete
// // limpiar todo el mapa
myMap.clear()
console.log(myMap)
