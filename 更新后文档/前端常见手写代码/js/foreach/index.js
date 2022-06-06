

let arr=[1,2,3];
arr.forEach((item,index,input)=>{
    // 本质上还是通过下表方式修改的
    input[index]=item*10;
})
console.log(arr);//[10.20.30]

//以下方式无法修改原数组
// let arr=[1,2,3];
// arr.forEach((item,index)=>{
//     item=item*10;
// })
// console.log(arr);//[10.20.30]