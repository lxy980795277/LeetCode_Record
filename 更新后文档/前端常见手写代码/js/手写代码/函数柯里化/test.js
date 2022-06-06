
function curry(fn,...parmas)
{
    let args=parmas||[];
    let length=fn.length;
    if(args.length>=length)
    return fn.apply(this,args);
    return (...res)=>{
        args.push(...res);
        if(args.length>=length)
        return fn.apply(this,args);
        else
        return curry.apply(this,[fn,...args]);
    }
}
function add(a,b,c,d)
{
    return a+b+c+d;
}
let f=curry(add);
console.log(f(1)(2)(3)(4));



