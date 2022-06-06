
function myall(promises)
{
    let len=promises.length;
    let data=[];
    let count=0;
    return new Promise((resolve,reject)=>{
        for(let i in promises)
        {
            promises[i].then((res)=>{
                data[i]=res;
                count++;
                if(count==len)
                resolve(data);
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

myall([promise1, promise2, promise3]).then(function(values) {
    console.log(values);
});

