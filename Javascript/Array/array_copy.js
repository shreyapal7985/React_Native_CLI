/* copy methods of array --> slice(), [...arr], Array.from() 
Deep Copy (Object/Array) -->	structuredClone()*/

//first method(slice())
const student=['shaili','shahsi']
const property= [student.slice()]
console.log(property)
console.log(student)

//second method ([...arr])
const a=[1,2,3]
const b=[...a];
console.log(a)
console.log(b)

//third method (Array.from())
 const dance=['kathak','bharatnatyam','hip hop']
const dance1= Array.from(dance)
console.log(dance)
console.log(dance1)