const PENDING="pending";
const FULFILLED="fulfilled";
const REJECTED="rejected";

//同步版
class mypromise{
    constructor(executor){
        this.state=PENDING;
        this.result=undefined;
        executor(this.resolve.bind(this),this.reject.bind(this));
    }
    resolve(value){
        if(this.state!=PENDING) return;

        this.state=FULFILLED;
        this.result=value;
       
    };
    reject(reason){
        if(this.state!=PENDING) return;
        this.state=REJECTED;
        this.result=reason;
        

    }
}

mypromise.prototype.then=function (onResolve,onReject){
    let that=this;
    return new mypromise((resolve,reject)=>{
        
        if(that.state===FULFILLED)
        {
            let res=onResolve(this.state) ;
            resolve(res)
           
    
        }
        else if(that.state===REJECTED)
        {
            let err=onReject(this.state);
            reject(err)
           
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
            resolve("success")

    })
    let b=a.then((res)=>{
        console.log("success then res is ",res);
    },(err)=>{
        console.log("fail then err is ",err);

    })
    console.log(a);
    console.log(b);
