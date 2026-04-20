// Strings

// Concatenar strings
let myName = "Dave"
let saludo = "Hola, " + myName
console.log(saludo)

// Longitud del texto .lenght
console.log(saludo.length)

// Acceso a caracteres
console.log(saludo[0] + saludo[1] + saludo[2] + saludo[3] )

// Métodos comunes
console.log(saludo.toUpperCase())
console.log(saludo.toLowerCase())
console.log(saludo.indexOf("Dave")) // El indice donde encuentra el indice de la palabra. si no hay ningun indice devuelve -1
console.log(saludo.indexOf("Mesa"))

// Validar si contiene una cadena de texto
console.log(saludo.includes("Dave"))
console.log(saludo.includes("Mesa"))

// Slice
console.log(saludo.slice(0, 8))

// Reemplazar un texto
console.log(saludo.replace("Dave", "Dave_dev"))

// Template literals: para escribir en varias lineas
let texto_largo = `Este es un texto largo
que solo se puede hacer con la comilla invertida`

// Para poner una variable dentro del texto, se usa el acento invertido
console.log(`Hola mundo, soy ${myName}`)
