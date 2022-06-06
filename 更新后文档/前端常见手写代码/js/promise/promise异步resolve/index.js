
let p=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("hhh");
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