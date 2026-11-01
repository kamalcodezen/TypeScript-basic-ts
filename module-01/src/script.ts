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


//** Array and Tuple and readonly modifier -------------------->

const number: number[] = [2, 5, 7, 7]; 
// Array baniye oi variable a type hiasbe number and empty array difine kore  diyechi jate proper type check hoy ata array of number.

const players: string[] = ["neymar", "messi", "ronaldo"]; 
// array baniye oi variable a type hisabe string and empty array difine kore diyechi jate proper type check hoy je ata akta array of string.

const delhiLatLong: [number, number] = [28.65, 77.23]; 
// ata akta tuple je akhane proti ta index a fixed type define kora ache...tai ata akta tuple fixed type of index.

const  kolkataLatLong: readonly [number, number] = [22.57, 88.36]; 
// ata akta readonly tuple je akhane proti ta index a fixed type define kora ache...tai ata akta tuple fixed type of index and readonly modifier use kora hoyeche jate kono value change korte parbo na.
