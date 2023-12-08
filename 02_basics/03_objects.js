const Sym=Symbol("mykey1")
const jsuser={
    name:"fahad",
    "fullname":"fahad iqbal",
    email:"fahad@gamil.com",
    [Sym]:"mykey1",
    lastlogindays:["monday","tuesday"],
}
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["fullname"]);
console.log(jsuser[Sym]);
// console.log(jsuser.lastlogindays[0]);/

jsuser.email="fahad01@gamil.com"
// Object.freeze(jsuser)
jsuser.email="fahad09928@gmail.com"
console.log(jsuser);

jsuser.greeting=function(){
    console.log("hello js user");
}

jsuser.greetingtwo=function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());