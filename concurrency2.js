// =========Promises===============//
//Promise itself 1 functionality he jo ke concurrency ko achiecve krny keliye istamal hoti he hm is ko khud nhi banaty hm sirf is ka istamal krty he ta ke concurrency achieve krasahkhy
// There are 3 States of Promise
//1)pending
//2)Fullfilled--->    .then
//3)Reject-->       .catch
//Promise ke first parameter me vo value aye go jo resolve honi ho
//promise ke second parameter me vo value aye gi jo rejecct honi ho
// const promise = new Promise ((resolve ,reject)=>{
// // resolve("succsess")//agr promise pora hoga
// resolve("Succsess")
// })
// //promsie reslove
// promise.then((value)=>{ //.then me bhi callback pass krsakhty he  or promsie resolve hony ke  bad jo value mili he us ko accses krsakhty he
// console.log(value);
// })
//  const promise = new Promise((reslove,rejecct)=>{
//     rejecct("Failed!")
//  })
//  //Promise reject
//  promise.catch((value)=>{// agr promise reject hoga to .catch exucute hoga
// console.log(value);
//  })
// //Promise
// const returnMoney=new Promise ((reslove,rejecct)=>{
//     setTimeout(()=>{
//         reslove('Monday Returned')
//     },3000)
// })
// returnMoney.then((value)=>{
//     console.log(value);
//     console.log("Thanks for Returning money");
// }).catch(()=>{
//     console.log("Sorry I'am  unable to return money");
// }).finally(()=>{//agr kabhi esa ho ke apny kuch particular code execute krna hi krna chahy promise resolve ho ya reject ho to us case me hm .finally( ) use krty he
//     console.log('Ainda Paise nhi donga');
// })
//if Resolve
// const returnMoney=new Promise ((reslove,rejecct)=>{
//     setTimeout(()=>{
//         reslove('Monday Returned')
//     },3000)
// })
// returnMoney.then((value)=>{
//     console.log(value);
//     console.log("Thanks for Returning money");
// //if rejects
// const returnMoney = new Promise((reslove, rejecct) => {
//   setTimeout(() => {
//     rejecct("Failure");
//   }, 3000);
// });
// returnMoney.catch((value) => {
//   console.log(value);
//   console.log("Sorry I am unable to return money");
// });
//Now jo concurrency callback ki help se achieve ki thi ab achieve kry ge Promises ki help se
//washing,soaking,drying
function washing() {
    console.log("Washing started..");
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            // console.log('Washing Done!');
            reslove("Washing Done");
        }, 5000);
    });
}
console.log("I am making Biryani!");
function soaking() {
    console.log("Soaking Started...");
    return new Promise((reslove, rejecct) => {
        setTimeout(() => {
            reslove("Soaking done");
        }, 3000);
    });
}
function drying() {
    return new Promise((resolve, rejecct) => {
        console.log("Drying started...");
        setTimeout(() => {
            resolve("Drying Done");
        }, 2000);
    });
}
washing()
    .then((value) => {
    //washing functionpromise return krrha he promise
    console.log(value);
    return soaking();
})
    .then((value) => {
    //S
    console.log(value);
    return drying();
})
    .then((value) => {
    console.log(value);
})
    .catch((error) => {
    console.log(error);
}); //hm ne hr promise ke liye .then banana hota he but .catch sirf 1 hi banaty he because .catcch is smart enough ye khud hi dekh lega ke ksi promise  me error aya he
export {};
//abhi tk hm apny promiises ko .then or .catch se handle krrhy he
//1 or behtr way he jis se hm  promises ko  handle krsakhtyhe vo he Async or Await
