// Objects: Se parecen mucho a los maps o los diccionarios, pero con mas poderes. Los objetos pueden tener propiedades, funcionalidades y mas objetos

// Inicialización

let person = {
    name:"Dave",
    edad: 37,
    alias:"Davedev"
}

// Acceso a sus propiedades
// Por punto
console.log(person.alias)

// Por corchetes
console.log(person["name"])

// Modificación
person.name = "Dave2"
console.log(person.name)

person.age = "treinta y siete"
console.log(person.age)

// Eliminación de porpuedades
delete person.edad
console.log(person)

// Métodos (funciones)
let person2 = {
    name: "Dave",
    age: 37,
    alias: "davedev",
    walk: function () {
        console.log("La persona camina")
    },
    job: {
        trabajo: "programador",
        experiencia: "10",
        work: function() {
            console.log("La persona trabaja")
        }

    }
}

person2.job.work()
 
console.log(person2)

// Iteración

console.log("Iteración sobre el objeto, solo devuelve valores para las propiedades")
for (let value in person2){
    console.log(value + ":" + person[value])
}


// Acceso a las propiedades dentro del objeto en el que se encuentra
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
        work: function() {
            console.log(`La persona trabaja de ${this.trabajo}`)
        }

    }
}

person5.job.work()