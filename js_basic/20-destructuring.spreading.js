// Desestructuración
myArray = [1,2,3,4]


let myValue = myArray[2]
console.log(myValue)



// Desestructuración es obtener variabes variables a la vez de un lista, array, objeto, etc
let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Asignar una valor previo, si no lo obtengo del array
let [myValue5, myValue6, myValue7, myValue8, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// Obtener solo el primer y ultimo valor
let [myValue10, , , myValue11 ] = myArray
console.log(myValue10)
console.log(myValue11)


// Desestructuración de Objetos
let person = {
    name: "Dave",
    age:"30",
    alias: "DaveDev"

}

myValue = person.name
console.log(myValue)

let {name, age, alias} = person
console.log(name)
console.log(age)
console.log(alias)

// Sintaxis de objetos con valores predeterminados
// Aqui no podemos asignar los nombres name2, age2, alias2, porque los unicos nombres que podemos usar son los del objeto
let { name2, age2, alias2, email = "davedev@davedev.com"} = person
console.log(name2)
console.log(age2)
console.log(alias2)
console.log(email)

// Para asignar el nobmre debemos hacerlo asi
let { name: name3, age: age3, alias: alias3, email3 = "davedev@davedev.com"} = person
console.log(name3)
console.log(age3)
console.log(alias3)
console.log(email3)

// Para asignar variables que está dentro de un objeto dentro de un objeto

let person5 = {
    name: "Dave",
    age: 37,
    alias: "davedev",
    walk: function () {
        console.log("La persona camina")
    },
    job: {
        trabajo: "programador",
        experiencia: "10",
    } 
}


let {name: name4, age: age4, job: {trabajo: trabajo4}} = person5
console.log(name4)
console.log(age4)
console.log(trabajo4)

// Spreading o propagación (...) // Operador de propagación

let myArray2 = [...myArray] // Aqui fue practicamente copiar el elemento
console.log(myArray2)

// Propagar los valores junto a otros valores
let myArray3 = [...myArray, 1,2,3] // Aqui fue practicamente copiar el elemento
console.log(myArray3)

// Combinación de arrays
let myArray4 = [...myArray2, ...myArray3]
console.log(myArray4)

// Spreading o proapación en objetos
let person4 = {...person5, email: "davedev@davedev.com"}
console.log(person4.email)


