// összehasonlító operátorok példák
console.log(5 == '5'); // true, mert csak az értéket hasonlítja össze
console.log(typeof(5)); // number
console.log(typeof('5')); // string
console.log(5 === '5'); // false, mert a típust is ellenőrzi   

// logikai operátorok példák &&(ÉS), ||(VAGY), !(NEM)
let szam = 6;
console.log(szam > 5 && szam < 10); // true, mert mindkét feltétel igaz
console.log(szam === 5 || szam === 6); // true, mert az egyik feltétel igaz

let z;
z=3+4; // összeadás
z=3-4; // kivonás
z=2*3; // szorzás
z=2/3; // osztás
z=3%2; // modulo
console.log(z); // maradékos osztás eredménye
z=3**2; // hatványképzés (hatványalap**hatványkitevő)
console.log(z); // 9

// pre és post increment és decrement
let x,y;
x=5;
y=++x; // preinkrement
console.log(`x=${x}, y=${y}`);
x=5;
y=x++; // posztinkrement
console.log(`x=${x}, y=${y}`);
x=5;

y=--x; // predekrement
console.log(`x=${x}, y=${y}`);
x=5;
y=x--; // posztdekrement
console.log(`x=${x}, y=${y}`);

let b = 3;
let c = 10;
let d = 20;
let a = b > 2 ? c : d; // feltételes (ternary) operátor
console.log(a); // 10, mert a feltétel igaz
console.log('a=' +a); // a=10

function myFunction() {
    let valtozo = 5;
    let valtozo2 = 10;
    let valtozo3 = 15;
    return valtozo
}

console.log(myFunction()); // 5
// console.log(valtozo); // hibát okoz, mert a változó csak a függvényen belül elérhető


