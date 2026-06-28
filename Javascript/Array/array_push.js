/*const does not make an array or object immutable(unchangeable). It only prevents reassignment of the variable 
means content can be modified but the reference will be the same
example:
const arr = [1, 2];
arr.push(3);      // ✅
arr = [10, 20];   // ❌
*/

const hobby=['sports','programming','dancing']
hobby.push('singing')
console.log(hobby);

