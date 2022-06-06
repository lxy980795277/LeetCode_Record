
function myrace(promises)
{
    return new Promise((resolve,reject)=>{
        for(let i in promises)
        {
            promises[i].then((res)=>{
                
                resolve(res);
            },(err)=>{
                reject(err);
            })
        }
    })
}
const promise1 = Promise.resolve('promise1');
const promise2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 2000, 'promise2');
});
const promise3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000, 'promise3');
});

myrace([promise2,promise1, promise3]).then(function(values) {
    console.log(values);
});

