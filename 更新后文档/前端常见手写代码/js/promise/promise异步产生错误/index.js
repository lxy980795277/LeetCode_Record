
let p=new Promise((resolve,reject)=>{
    setTimeout(() => {
        throw "error";
        // reject("err")
    }, 1000);
})
p.then((res)=>{
    console.log("success ",res);
}
,(err)=>{
    console.log("fail ",err);

}
).catch((err)=>{
    console.log("catch fail ",err);

})
//异步产生的错误捕捉不到，此时then已经执行完毕，已经注册了resolve和reject的回调函数
//可以等待resolve和reject来调用回调函数，但是不能捕获异常了