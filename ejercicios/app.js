// let listnu = [2, 5, 1, 8, 3, 7, 12, 44, 67, 5, 9, 15, 60];

// let me = listnu[0];
// let ma = listnu[0];

// for (let i = 1; i < listnu.length; i++) {

//     if (listnu[i] < me) {
//         me = listnu[i];
//     }

//     if (listnu[i] > ma) {
//         ma = listnu[i];
//     }
// }

// console.log("El número menor es: " + me);
// console.log("El número mayor es: " + ma);


// let numero = 7

// for (let i = 1; i <= 10; i++) {

//     console.log(numero + " x " + i + " = " + (numero * i));

// }


// function sumar(...numeros) {
//     let total = 0;

//     for (let i = 0; i < numeros.length; i++) {
//         total = total + numeros[i];
//     }

//     console.log("Los números ingresados son: " + numeros);
//     console.log("El resultado de la suma es: " + total);
// }

// sumar(4, 7);
// sumar(1, 7, 8);
// sumar(2, 2, 3, 5);


let frutas = ['pera', 'kiwi', 'mango', 'fresa']
let frutasInvertidas = []

for (let i = frutas.length - 1; i >= 0; i--) {
    frutasInvertidas.push(frutas[i])
}

console.log(frutasInvertidas)


