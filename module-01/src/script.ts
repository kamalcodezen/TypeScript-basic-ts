//** Basic Types in TypeScript
let myName: string = "kamalUddin";
let age: number = 26;
let isStudent: boolean = true;
let mySymbol: symbol = Symbol();
let myBigInt: bigint = 4740991n;

//** Type safe function--------------
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(20, 50));

