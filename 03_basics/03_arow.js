const user={
    username:"fahad",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username}, welcome to website`);
    }
}
user.welcomemessage()
user.username="sam"
user.welcomemessage()


function chai(){
    let username="fahad"
    console.log(this.username);//undefined
}
chai()


const chai2=()=>{
    let username="fahad"
    console.log(this);//{}
    console.log(this.username);//undefined
}
chai2()

const addtwo=(num1,num2)=>(num1+num2)
console.log(addtwo(3,4));

const addtwo1=(num1,num2)=>({username:"fahad"})
console.log(addtwo1(3,4));
