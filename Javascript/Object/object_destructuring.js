/* WITHOUT DISTRUCTURING
const person = {
  name: "Shreya",
  age: 22
};

const name = person.name;
const age = person.age;

console.log(name);
console.log(age); */


const students={
    name:'shreya',
    age:34,
    course:'mca'
}

const {name,age,course}=students
console.log(name, age , course)