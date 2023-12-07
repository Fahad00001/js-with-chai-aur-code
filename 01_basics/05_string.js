const name="fahad"
const repocount=50
console.log(`hello my name is ${name} and my repo count is ${repocount}`);



const gamenew=new String("hitesh-hc-com")
console.log(gamenew.length);
console.log(gamenew.charAt(2));
console.log(gamenew.indexOf('t'));



const newString=gamenew.substring(0,4)
console.log(newString);
const anotherString=gamenew.slice(-5,8)
console.log(anotherString);


const newStringone="    hitesh    "
console.log(newStringone);
console.log(newStringone.trim());


// const url="https://fahad.com/fahad%20iqbal"
// console.log(url.replace('%20','-'));

// console.log(url.includes('fahad'));
// console.log(gamenew.split('-'));
// console.log(newStringone.toUpperCase());


// const paragraph = 'he';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);

// console.log(found);



const inputstring="hello world! this is simple string"
const match=inputstring.match("hello")
console.log(match);

const orginalstring="42"
const paddedstring=orginalstring.padStart(7,"0")
console.log(paddedstring);//0000042


