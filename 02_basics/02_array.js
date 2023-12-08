const marvel_heroes=["thor","spiderman","ironman"]
const dc_heroes=["superman","bataman","aquaman"]
const_all_heroes=[...marvel_heroes,...dc_heroes]
console.log(const_all_heroes);


const new_array=[1,2,3,[6,7],[8,9,4,[4,6,7]]]
const another_array=new_array.flat(Infinity)
console.log(another_array);

console.log(Array.isArray("fahad"));
console.log(Array.from("fahad"));


console.log(Array.from({name:"fahad"}));//interesting
 const score1=100
 const score2=200
 const score3=300
 console.log(Array.of(score1,score2,score3));
