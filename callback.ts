function parentFucntion(func: () => void) { //func: () => void means parent function jo child function accept krrha he ye child function na koi argument expect krrha he
  console.log("I am the Parent Function");
  func()//yaha child function invoke horaha he
}

function childFucntion(){
    console.log("I am the Child function");
    
}
parentFucntion(childFucntion)//callback function ki invokation ka control hmary pass nhi hota parent function ke pass hotahe 
