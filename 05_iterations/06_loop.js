const mynums=[1,2,3]
const mytotal1=mynums.reduce(function(acc,currval){
return acc+currval;
},0)
const mytotal=mynums.reduce((acc,currval)=>acc+currval,0)
console.log(mytotal);
console.log(mytotal1);