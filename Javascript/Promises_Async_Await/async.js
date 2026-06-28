/* difference between synchronous and asynchrounous
Synchronous code → Any code that runs one statement after another.
Synchronous function → A normal function whose execution is synchronous.
Asynchronous code → Code that doesn't block execution (e.g., fetch(), setTimeout()).
Asynchronous function → A function declared with async, which always returns a Promise.
Synchronous function = the caller waits until the function finishes and returns a value. calling the function is known as caller here
Asynchronous function = the caller immediately gets a Promise, and the actual result becomes available later */


//first way with console inside the async
const getuser=async username=>{
    const url=`https://api.github.com/users/${username}`
    const response=await fetch(url);
    const data=await response.json();
    console.log("getuser func",data);
}
getuser('openai')

const gituser=async username=>{
    const url=`https://api.github.com/users/${username}`
    const response=await fetch(url)
    const data=await response.json()
    return data
}
  gituser('openai').then((value)=>console.log(value.login))