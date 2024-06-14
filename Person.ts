type HasName={
    getName:()=>string;
}
type HasAge={
    getAge:()=>number;
}
type Human=HasName&HasAge;
const humanOne:Human={
    getName:()=>"Shakeel",
    getAge() {
        return 20
    }
};

console.log(humanOne.getName());
console.log(humanOne.getAge());