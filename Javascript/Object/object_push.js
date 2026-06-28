/*const does not make an array or object immutable(unchangeable). It only prevents reassignment of the variable 
 */

const hobbies={
    name:'shraddha',
    age:34,
    course:'mca'
}

hobbies.total_subject=13;
console.log(hobbies);