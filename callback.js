function parentFucntion(func) {
    console.log("I am the Parent Function");
    func(); //yaha child function invoke horaha he
}
function childFucntion() {
    console.log("I am the Child function");
}
parentFucntion(childFucntion); //callback function ki invokation ka control hmary pass nhi hota parent function ke pass hotahe 
export {};
