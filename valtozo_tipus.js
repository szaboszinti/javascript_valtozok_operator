// változó típusok
console.log(typeof(2)); // number
console.log(typeof(true)); // boolean
console.log(typeof('Aladár')); // string
console.log(typeof({name:'Béla', age: 42})); // object
console.log(typeof(function f(a, b) {return a + b})); // function
console.log(typeof(nonexisting)); // undefined

let a = 0.1+0.2;
console.log(a);
console.log(a.toFixed(2)); // kerekítés két tizedesjegyre
console.log(typeof(a.toFixed(2))); // string lesz a típusa

// string ( szöveg) típus műveletek
let firstName = 'József';
let lastName = 'Nagy';
console.log('Hello, ' + firstName + ' ' + lastName + '!'); // konkatenáció
console.log(`Hello, ${firstName} ${lastName}!`); // template string

let kocka = "kocka";
let has = "has";
let doboz = kocka + has;
console.log(doboz); // kockahas

// boolean típus műveletek
console.log('Boolean műveletek:');
console.log(typeof true); // boolean    
console.log(Boolean(0)); // boolean false
console.log(Boolean(1)); // boolean true
console.log(Boolean('')); // boolean false
console.log(Boolean('a')); // boolean true

// object típus műveletek
let person = {
    name: 'Anna',
    age: 30,
    isStudent: false

}
console.log(person);
console.log(typeof(person)); // object
console.log(person.name); // Anna
console.log(person.age); // 30
console.log(person.isStudent); // false
console.log(person.address); // undefined (nincs ilyen tulajdonság)

let xy;
console.log(xy); // undefined
console.log(typeof xy); // undefined

