const clock=document.getElementById('clock')
// const clock=document.querySelector('clock')
// let date=new Date();
// console.log(date.toLocaleString());
setInterval(function(){
    let date=new Date();
    console.log(date.toLocaleString()); 
},1000)