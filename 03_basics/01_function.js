function addtwonumber(number1,number2){
return number1+number2
}

const result=addtwonumber(3,2)
// console.log("result is:", result);



function loginUserMessage(username){
    if(username===undefined){
console.log("please enter your name");
// return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());