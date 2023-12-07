let myDate=new Date()
//console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);//object

let myCreatedDate=new Date(2023, 0 ,23,5,3,50)
console.log(myCreatedDate.toLocaleString());




let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());