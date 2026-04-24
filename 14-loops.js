// Loops o bucles

// for 
// {} es el código que se va a repetie
for (let i  =  0; i < 5; i++) {
    console.log(`hola ${i}`)
}

const numbers = [1,2,3,4,5]

for (let  i = 0; i < numbers.length; i++) {
    console.log(`Elemento ${numbers[i]}`)
}


// while
// la condiciónn se evalua antes de iniciar el bucle
let i = 0
while (i < 5){
    console.log(`hola ${i}`)
    i ++
}

// do - while
// se ejecuta al menos una vez, se cumpla o no la condición

i = 0
do {
    console.log(`hola ${i}`)
    i ++
} while(i < 0)

myArray = [1,2,3,4]
// for of: para recorrer algo iterable
for (let valor of myArray){
    console.log(`${valor}`)
}


// break - continue
for(let i = 0; i < 10; i++){
    if(i ==5){
        continue // Se salta el 5
    } else if ( i ==6){
        break // Detiene el bucle en 6
    }
    console.log(i)
}