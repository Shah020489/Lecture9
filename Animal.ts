type Animal={
    name:string,
    age:number,
    eat:()=>void,
    sleep:()=>void
}

const dog:Animal={
    name:"Dog",
    age:5,
    eat:()=>{
        console.log("Eating");
    },
    sleep:()=>{
        console.log("Sleeping");
    }
}

console.log(dog.age);
console.log(dog.name);
console.log(dog.sleep());