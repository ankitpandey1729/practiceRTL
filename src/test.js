    // function func(){
    // return new Promise((resolve, reject)=>{
    // resolve("resolved");
    // })
    // }
    // // func().then(()=>{
    // // console.log('promise resolved');
    // // console.log('after for loop')
    // // })
    // async function func2() {
    //     try{
    //         let a = await func();
    //         console.log(a);
    //     }
    //     catch (e) {
    //         console.log(e);
    //     }
//     //     return "";
//     // }
//     // func2();


// function func(){
// return new Promise((resolve, reject)=>{
// resolve();
// })
// }

// async function method(){
// //const response = await func();
// console.log('after async call');
// }

// function method2(){
//   console.log('method 2');
// }

// method();
// console.log('next to method call');
// method2();

// useEffect(() => {
//     let clear = componentWillUnmount();
// },[name])


let a = [2, 3, -4, 2, 1 ,1 ];
let b = 4;

let i = 0;
let j = a.length-1;

let ans = 0; //
while(b>0){
    if(a[i]<a[j]){
        ans+=a[j];
        j--;
    }
    else if(a[i]>a[j]){
        ans+=a[i];
        i++;
    }
    else{
        //todo
    }
    b--;
}
console.log(ans);


