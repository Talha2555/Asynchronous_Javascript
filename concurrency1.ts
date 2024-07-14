// why to use concurrency
// concurrency allows us to manage multiple tasking at once
// To enchance the performance of application and code

// There are 3 stratigies to achieve concurrency
//1)Callbacks
//2) Promisses
//3) Async / Await 
//4) Set TimeOut

// console.log("one");
// setTimeout(function(){
//     console.log("Hello World");
    
// },5000)
// console.log('two');

// function greet (){
//     console.log("HELLo Friends");
    
// }
// setTimeout(greet,2000)

//
function washing(callback:()=>void){
    console.log("Washing Started...");
    setTimeout(()=>{console.log("Washing done!");
        callback()
    },5000)
  
}
function soaking (callback:()=>void){
console.log("Soaking Started...");
setTimeout(() => {
    console.log("Soaking done!");
    callback()
}, 3000);

}
function drying(){
    console.log("Drying started...");
    setTimeout(()=>{
        console.log("Drying done");
        
    },2000)
}
console.log("Folding Laundry");

washing(()=>{
    soaking(()=>{
        drying()
    })
})
console.log("I am Making Biryani");

//above code is callback hell 
// call back hell ko avoid krny keliye  hmary pass Promisess aye 






