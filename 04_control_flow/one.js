// const score=200
// if(score<100){
//     const power="fly"
//     console.log(`user power:${power}`)
// }
// else{
//     console.log(`doesnt fly`);
// }

const userloggedin=true
const debitcard=true
// const aadharcard=false
const loggedinfromgoogle=false
const loggedinfromemail=true
if(userloggedin && debitcard && aadharcard ){
    console.log(`allow to shopping`);
}
if(loggedinfromgoogle || loggedinfromemail){
     console.log(`user logged in`);
}

