const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"fahad",
            secondname:"iqbal",
        }
    }

}
// console.log(regularuser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"b",3:"b"}
const obj3={4:"a",5:"b"}

const obj4={...obj1,...obj2,...obj3}
console.log(obj4);

const tinderuser={}

tinderuser.id="1123abs",
tinderuser.name="fahad",
tinderuser.isloggedin=true,
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
// console.log(object.length(tinderuser.fahad));
console.log(tinderuser.hasOwnProperty('isloggedin'));
 
