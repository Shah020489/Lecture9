type Person={
    name:string;
    age:number;
}

type Employee={
    employeeId:number;
    position:string;
}

type PersonEmployee=Person & Employee;
const john:PersonEmployee={
    name:"John",
    age:30,
    employeeId:123,
    position:"Manager"
}

console.log(john);
