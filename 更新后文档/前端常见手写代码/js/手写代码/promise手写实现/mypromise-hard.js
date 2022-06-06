const PENDING="pending";
const FULFILLED="fulfilled";
const REJECTED="rejected";

//异步版
class mypromise{
    constructor(executor){
        this.state=PENDING;
        this.result=undefined;
        this.callbacks=[];
        executor(this.resolve.bind(this),this.reject.bind(this));
    }
    resolve(value){
        if(this.state!=PENDING) return;

        this.state=FULFILLED;
        this.result=value;
        this.callbacks.map((item)=>{
            item.onResolve(this.result);
        })
    };
    reject(reason){
        if(this.state!=PENDING) return;
        this.state=REJECTED;
        this.result=reason;
        this.callbacks.map((item)=>{
            item.onReject(this.result);
        })

    }
}

mypromise.prototype.then=function (onResolve,onReject){
    let that=this;
    return new mypromise((resolve,reject)=>{
        function callback(type){
            let result=type(that.result);
            if(result instanceof mypromise)
            {
                result.then((value)=>{
                    resolve(value);
                },(err)=>{
                    reject(err);
                }
                )
            }
            else
            resolve(that.result)
        }
        if(that.state===FULFILLED)
        {
            callback(onResolve) ;
           
    
        }
        else if(that.state===REJECTED)
        {
            callback(onReject);
           
        }
        else if(that.state===PENDING)
        {
            that.callbacks.push({
                onResolve:function(){
                    callback(onResolve)
                },
                onReject:function(){
                    callback(onReject)
                }
            });
        }
    })
    
   
}
mypromise.prototype.catch=function (onReject){
   
    if(this.state===REJECTED)
    onReject(this.result);
    else if(this.state===PENDING)
    {
        this.callbacks.push({
            undefined,
            onReject
        });
    }

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

    })
    console.log(a);
