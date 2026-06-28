/* copy method for obejcts -->   {...obj}, Object.assign() */


//first method to copy(Object.assign())
const student={
    name:'sana',
    age:43,
    course:'mca'
}
const property= Object.assign({},student)
console.log(property)
console.log(student)


//second method to copy ({...obj}) 
const hobby={
    name1:'cricket',
    name2:"football",

}
const hobbies=({...hobby})
console.log(hobbies)