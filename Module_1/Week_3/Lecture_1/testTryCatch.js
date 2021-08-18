console.log("hello");
try{
    console.log(a)
}
catch(myError){
    console.log(myError.message)
}


try{
    console.log(b)
}
catch(error){
    console.log(`The error name is ${error.name} and message is ${error.message}`)
}


console.log(a)