const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}

const greetings="hello world"
for (const greet of greetings) {
    console.log(greet);
    
}

const map=new Map()
map.set('IN','india')
map.set('usa',"united")
map.set('fr','france')
console.log(map);
for (const [key,values] of map) {
    console.log(key,":-",values);
    
}
const myobj={
    game1:'nfs',
    game2:'pubg' 
    }
    for (const [key,values] of myobj) {
        console.log(key,':-', values);//this will not work
    }

