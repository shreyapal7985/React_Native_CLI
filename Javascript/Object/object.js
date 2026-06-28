//object is used to combine the data and function together

//this object returns an undefined value also because the function does not contain any return statement

const person={
    name:'shreya',
    age:23,
    greet:function(name){// here name is a local variable so it expect value 
        console.log("argument property =" +name)
        console.log("object Property=" +this.name)//this --> refers to person , this.name --> refers name inside object person
    }
}

console.log(person.greet("abhi"))