const myarr=[0,1,2,3,4,5]
const myheroes=["shaktiman","nagaraj"]


const myarr2=new Array(1,2,3,4)
console.log(myarr[5]);


//array methods
myarr.push(6)
myarr.pop()
console.log(myarr.includes(9));//false
console.log(myarr.indexOf(3));//3
const newArr=myarr.join()
console.log(myarr);
console.log(newArr);


console.log("A",myarr);
const myn1=myarr.slice(1,3)
console.log(myn1);
console.log("B ",myarr);
const myn2=myarr.splice(1,3)
// console.log(myn1);
console.log("c",myarr);
console.log(myn2);

