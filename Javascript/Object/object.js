//object is used to combine the data and function together

//this object returns an undefined value also because the function does not contain any return statement

//Arrow function brehavior inside object -->Example: defined inside person, but "this" still points to outer scope, not person  in case of browser.
//but in case of nodejs debugger it shows undefined it can't access the value abhishek assigned to name variable outside the object -->it returns undefined

//Regular Function/Tradional function This --> refers to object 


var name='abhishek'
const person={
    name:'shreya',
    age:23,
    greet:function(name){// here name is a local variable so it expect value 
        console.log("argument property =" +name)
        console.log("object Property=" +this.name)//this --> refers to person , this.name --> refers name inside object person
    },
    meet:()=>{
console.log("name=" +this.name)
    }
}

console.log(person.greet("abhi"), person.meet())
person.meet()