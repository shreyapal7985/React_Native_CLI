//hobbiesArray.slice(0,2)-->temporary delete the index 2 item not affect the original array

let hobbiesArray=['sports','football','chess']
let hobbyslice=hobbiesArray.slice(0,2)//temporary delete the index 2 item not affect the original array
console.log(hobbyslice)
console.log(hobbiesArray)

let filterhobbies=hobbiesArray.filter((val)=> val!=='sports')
console.log(filterhobbies)