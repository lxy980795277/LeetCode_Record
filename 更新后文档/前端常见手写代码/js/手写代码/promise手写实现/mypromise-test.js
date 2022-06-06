const PENDING="pending";
const FULFILLED="fulfilled";
const REJECTED="rejected";

class mypromise{
    constructor(executor)
    {
        this.state=PENDING;
        this.result=undefined;
        this.callbacks=[];
        executor(this.resolve.bind(this),this.reject.bind(this));
    }
    resolve(value)
    {
        if(this.state!=PENDING) return ;
        this.state=FULFILLED;
        this.result=value;
        this.callbacks.map((item)=>{
            item.onResolve(this.result);
        })
        console.log(this);

    }
    reject(error)
    {
        if(this.state!=PENDING) return ;
        this.state=REJECTED;
        this.result=error;
        this.callbacks.map((item)=>{
            item.onReject(this.result);
        })
    }
}
mypromise.prototype.then=function (onReject,onResolve)
{
    let that=this;
    return new mypromise((resolve,reject)=>{
        function callback(type){
            let res=type(that.result);
            if(res instanceof mypromise)
            {
                res.then((res)=>{
                    resolve(res);
                },(err)=>{
                    reject(err);
                })
            }
            else
                resolve(res);
        }
        if(that.state===FULFILLED)
            callback(onResolve);
        else if(that.state===REJECTED)
            callback(onReject);
        else if(that.state===PENDING)
        {
            that.callbacks.push({
                onResolve:function(){
                    callback(onReject);
                },
                onReject:function(){
                    callback(onReject);
                }
            })
        }
    })
}


let a=new mypromise((resolve, reject) => {

       
    console.log('promise1');
    setTimeout(()=>{
        resolve("success")

    },1000)
})
a.then((res)=>{
    console.log("success then res is ",res);
},(err)=>{
    console.log("fail then err is ",err);

}).then((res)=>{
    console.log("res2 is ",res);
})
console.log(a);

