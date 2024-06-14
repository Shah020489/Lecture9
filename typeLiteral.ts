type WeekDaysName="Monday"|"Tuesday"|"Wednesday"|"Thursday"|"Friday"|"Saturday"|"Sunday";

let today:WeekDaysName="Monday";
console.log(today);

type Direction ="north"| "east" | "south" | "west";
let myDirection:Direction="north";
console.log(myDirection)

type Color="red"|"green"|"blue";
function printColor(color:Color){
    console.log(color);
}
printColor("red");

function setAlignment(alignment:"left"|"center"|"right"){
    console.log(alignment);
}
setAlignment("center");
