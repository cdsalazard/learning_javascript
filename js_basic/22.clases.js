// Clases: Son objetos completos
 // Se inicializan con la palabra reservada class

 // Tiene un método especial llamado constructor que no permite crear las propiedades iniciales de la clase
 class Person {

    constructor(name1, age1, alias1) {
        this.name = name1
        this.age = age1
        this.alias = alias1
    }
 }

 // Para instanciarlo usamos la palabra new
 let person = new Person("Dave", 30, "DaveDev")
 let person2 = new Person("Dave", 30, "DaveDev")
 console.log(person)
 console.log(person2)

 // Si quiero instanciarlo con unos valores por defecto
  class defaultPerson {

    constructor(name = "Sin usuario", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }
 }

 let person3 = new defaultPerson("Dave", 30)

 person3.alias = "davedev"
 console.log(person3)


 // Person con funciones
 class personWithMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
    walk() {
        console.log("La persona camina")
    }
 }

 let person6 = new personWithMethod("Dave", 10, "DaveDev")

 person6.walk()


// Propiedades privadas. Son propiedades que no queremos que sean modificados, ni que sean vistos
class PrivatePerson {
    #bank = null// Asi definimos la propiedad como privada
    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }
}

let person7 = new PrivatePerson("Dave", 20, "davedev", "DJDFH334I54HF")

console.log(Object.keys(person7)); 
console.log(JSON.stringify(person7)); 


// Setters y getters

// Propiedades privadas. Son propiedades que no queremos que sean modificados, ni que sean vistos
class PrivatePersonSetGet {
    #name
    #age
    #alias
    #bank// Asi definimos la propiedad como privada
    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }
    get name(){
        return this.#name
    }
    set bank(newBank) {
        this.#bank = newBank
    }

}

person8 = new PrivatePersonSetGet("Dave", 18, "davedev", "asdfad3344")
console.log("Private person")
console.log(person8)
console.log(JSON.stringify(person8)); 

// Como tenemos get, podemos obtener el nombre
console.log(person8.name)

// Cambiamos el banco con el set
person8.bank = "new bank account 234123412"
console.log(person8)

// Herencia de clases
class Animal {

    constructor(name){
        this.name = name
    }
    sound (){
        console.log("Emite un sonido genérico")
    }
}

// Queremos que una clase herede los atributos y le añada otras propiedades
class Dog extends Animal{
    // Puedo redefinir soung aqui
    sound (){
        console.log("El perro ladra")
    }

    run(){
        console.log("El perro corre")
    }
}

class Fish extends Animal{
    constructor(name, size){
        super(name) //Super hace una llamada a la clase superrior
        this.size = size
    }

    swim(){
        console.log("El pez nada")
    }
}


let myDog = new Dog("DaveDog")
myDog.run()
myDog.sound()

let myFish = new Fish("DaveFish", "20")
myFish.swim()
myFish.sound()

// Método estáticos. Estas clases no se instancian, es decir, no se crea un nuevo objeto usando la palabra reservada New
class MathOperations {
    static sum(a,b){
        return a + b
    }
}

let a_masb= MathOperations.sum(4,3)
