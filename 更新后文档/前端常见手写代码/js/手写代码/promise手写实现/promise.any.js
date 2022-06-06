function retry(promiseFunction,timelimit)
{
   let count=timelimit;
   let res=[];
   return new Promise((resolve,reject)=>{
            while(count--)
            {
                promiseFunction().then((res)=>{
                    resolve(res);
                },(err)=>{
                    res.push(err);
                    if(res.length===timelimit)
                    reject(res);
                    
                })
            }
   })
   
}

function randomPromise() {
    return new Promise((resolve, reject) => {
        let num = ~~(Math.random() * 10)
        console.log(num);
        if (num % 2) {
            resolve('ok')
        } else {
            reject('err')
        }
    })
}
retry(randomPromise, 3)
    .then(res => {
        console.log("success ",res);
    }).catch(err => {
        console.log("fail ",err);
    })




