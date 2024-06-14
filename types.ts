type Name=String;

var name1:Name="Ahmed";
let name2:Name="Ahmed";
const name3:Name="Ahmed";

/** following code show error */
// var name4=10;
// name4:number=25;

console.log(name1);
console.log(name2);
console.log(name3);

type PhoneNumber=number;
let aN:PhoneNumber=10;
let bN:PhoneNumber=20;
const cN:PhoneNumber=30;

console.log(aN);
console.log(bN);
console.log(cN);

type UserStatus=boolean;
let active:UserStatus=true;
let inactive:UserStatus=false;
console.log(active);
console.log(inactive);

type Marks=number[];

let mark1:Marks=[1,2,3,4,5];
console.log(mark1[0]);
console.log(mark1[1]);
console.log(mark1[2]);
console.log(mark1[3]);
console.log(mark1[4]);
console.log(mark1[5]);

type StudentList=String[];
let class1:StudentList=["Ahmed","Ali"];
let class2:StudentList=["Ahmed","Ali","Mohamed"];
let class3:StudentList=["Ahmed","Ali","Mohamed","Sayed"];

console.log(class1);