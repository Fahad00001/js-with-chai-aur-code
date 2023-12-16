const myobj={
    js:'javascript',
    rb:'ruby',
    cpp:'c++',

}
for (const key in myobj) {
//    console.log(key);
console.log(`${key} shortcut is for ${myobj[key]}`);
        
    }
