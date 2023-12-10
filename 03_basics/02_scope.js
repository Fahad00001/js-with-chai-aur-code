function one(){
    const username="fahad"
    function two(){
        const website="youtube"
        console.log(username);
        console.log(website);
    }
    //console.log(website);
    two()
}
one()

console.log(addone(5));//6

function addone(num){
    return num+1
}
console.log(addtwo(8));//error

const addtwo=function(num){
    return num+1
}
// console.log(addtwo(8));//9