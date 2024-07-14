//  =====Async and Await=========== //
//     Async and Await help krta he promises ki handling ke doran
function washing() {
    console.log("Washing started..");
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            // console.log('Washing Done!');
            reslove("Washing Done");
        }, 5000);
    });
}
console.log("I am making Biryani");
function soaking() {
    console.log("Soaking Started...");
    return new Promise((reslove, rejecct) => {
        setTimeout(() => {
            reslove("Soaking  done");
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
// async function runWashingMachine() {
//   //jb bhi await ka function use kary make sure ke function se pehly async likha ho
//   const result1 = await washing(); //function ko invoke kiya he or promise ke result ko variable me store krliya he
//   console.log(result1);
//   const result2 = await soaking();
//   console.log(result2);
//   const result3 = await drying();
//   console.log(result3);
// }
// runWashingMachine();
//line 31 to 4o sb fucntion reslove horhy he agr koi function reject hojaye to try catch use krty he
//try ka code tb tk execute hota he jb tk promise resolve he
//catch ka code tb execute hota he jb  promise reject hota he
async function runWashingMachine() {
    try {
        const result1 = await washing();
        console.log(result1);
        const result2 = await soaking();
        console.log(result2);
        const result3 = await drying();
        console.log(result3);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("I will run anyway!");
    }
}
runWashingMachine();
export {};
