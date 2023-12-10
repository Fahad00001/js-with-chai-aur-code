(function chai(){
    console.log(`db connected`);
})();//named iife immediatedly invoked function expresson

((name)=>{
    console.log(`db connected two ${name}`);
})(`fahad`);//unnamed

((name1)=>{
    console.log(`fahad iqbal ${name1}`);
})('sohan');


(function chai(){
    console.log(`db connected`);
})()