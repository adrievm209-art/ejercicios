let listnu = [2, 5, 1, 8, 3, 7, 12, 44, 67, 5, 9, 15, 60];

let me = listnu[0];
let ma = listnu[0];

for (let i = 1; i < listnu.length; i++) {

    if (listnu[i] < me) {
        me = listnu[i];
    }

    if (listnu[i] > ma) {
        ma = listnu[i];
    }
}

console.log("El número menor es: " + me);
console.log("El número mayor es: " + ma);