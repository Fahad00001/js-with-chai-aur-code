const useremail = []
if (useremail) {
    console.log(`got user email`);
}
else{
    console.log(`dont have user email`);
}


//falsy values
// false,0,-0,bigint 0n,"",null, undefined, nan

if(useremail.length===0){
    console.log(`array is empty`);
}
const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log(`obj is empty`);
}

//nulllish coalishing operator

let val1;
val1=5??10//5
val1=null??10 //10
console.log(val1);


//terniary operator

// condition?true:false
const iceteaprice=100
iceteaprice<=80?console.log(`less than 80`):console.log(`more than 80`);
