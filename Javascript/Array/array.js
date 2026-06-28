const property=['sheya',23,{course:'mca'},[name='abhi',age=45]]
console.log(property)

//accessing the property using loops
 for(let hobby in property){
    console.log(property[hobby])
 }

 //Another way using lopp
 for(let hobby of property){
    console.log(hobby)
 }