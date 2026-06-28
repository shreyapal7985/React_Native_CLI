/* there are two promises in this code 
1--> fetch method
2--> value.json */

//first way to write this code
const getuser=username=>{
    const Api_url=`https://api.github.com/users/${username}`
    return fetch(Api_url).then((value)=>value.json())
}

getuser('openai').then((val)=>console.log(val))

//second way 
const printuser=username=>{
    const url=`https://api.github.com/users/${username}`
    return fetch(url)
    .then((value)=>value.json())
    .then((data)=>{console.log("print user function has called",data.login);
console.log("followers",data.followers)
console.log('public repos',data.public_repos)})
}

printuser('openai')


//third way using promise new
const getGit=username=>{
    return new Promise((resolve,reject) => {
        fetch(`https://api.github.com/users/${username}`)
        .then((response)=>response.json())
        .then((data)=>{
            if(data.message=='Not Found')
            {
                reject("user not found")
            }
            else
            {
                resolve(data)
            }
        }).catch(err=>reject(err))

    })
}

getGit('abhishek').then((val)=>console.log("getGit invoked",val.followers)).catch((err)=>console.log("error",err))
