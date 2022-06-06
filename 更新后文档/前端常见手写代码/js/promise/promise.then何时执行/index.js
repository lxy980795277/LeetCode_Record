// let p=new Promise((resolve,reject)=>{
//     console.log(1);
//     resolve();
//     Promise.resolve().then(()=>{
//         console.log(2);
//     })
// }).then(()=>{
//     console.log(3);
// }).then(()=>{
//     console.log(4);
// }).then(()=>{
//     console.log(5);
// })

let p=new Promise((resolve,reject)=>{
    console.log(1);
    setTimeout(()=>{
        resolve();
    },3000)
    Promise.resolve().then(()=>{
        console.log(2);
    })
}).then(()=>{
    console.log(3);
}).then(()=>{
    console.log(4);
}).then(()=>{
    console.log(5);
})
console.log(6);