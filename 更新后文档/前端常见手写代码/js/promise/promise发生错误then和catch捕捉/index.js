
let p=new Promise((resolve,reject)=>{
    throw "error";
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
//catch是then的语法糖，因此then中捕获了之后，不会再传递到catch中了