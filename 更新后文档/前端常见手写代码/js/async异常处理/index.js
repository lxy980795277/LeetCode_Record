// log
// error1

 
function req1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error1');
      // resolve('data1');
    }, 2000);
  });
}
 
function req2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error2');
      // resolve('data2');
    }, 2000);
  });
}
 
//每个await对应一个try catch，某个await的promise变为reject，后续的await仍然会执行
// async function req() {
//   try {
//         const res1 = await req1();
//         console.log("-----------------");
//         console.log(res1);
//     } catch (error) {
//         console.log(error);
//     }
//   try{
//         const res2 = await req2();
//         console.log(res2);
//     } catch (error) {
//         console.log(error);
//     }
// }
 
// 一个try catch情况 ，后续的await不会执行
// async function req() {
//     try {
//           const res1 = await req1();
//           console.log("-----------------");
//           console.log(res1);
//           const res2 = await req2();
//           console.log(res2);
//       } catch (error) {
//           console.log(error);
//       }
    
//   }
    // 一个try catch，后续的await仍然会执行
    // 本质上是使用.catch来对await之后的promise进行异常捕获，该异常不会再被try catch捕获
  async function req() {
    try {
          const res1 = await req1().catch((err)=>{console.log(err);});
          console.log(res1);
          const res2 = await req2().catch((err)=>{console.log(err);});
          console.log(res2);
      } catch (error) {
          console.log(error);
      }
    
  }
req();