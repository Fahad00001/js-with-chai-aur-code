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


const user={
    username:"fahad",
    price:399
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)

const mynewarray=[100,2000,300]
function returnSecondValue(getarray){
    return getarray[1]
}
console.log(returnSecondValue(mynewarray));
console.log(returnSecondValue[100,2000,300]);