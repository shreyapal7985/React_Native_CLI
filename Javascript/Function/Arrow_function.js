

//Arrow function with arguments
const add =(a,b)=>{  
    return a+b
}
   
//Arrow function without curly braces but with arguments
const sub=(a,b)=> a-b;

//Arrow function without argument and curly braces as well
const empty= ()=>10

console.log(sub(15,7), add(2,2), empty())