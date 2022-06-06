
// let f=(fn,...params)=>{

//     let args=params||[];
//     let len=fn.length;
//     if(len<=args.length)
//     {
//         return fn.apply(this,args)
//     }
   
//     return (...res)=>{
//         let change_args=args.slice(0);
//         change_args.push(...res);
//         if(change_args.length>=len)
//         return fn.apply(this,change_args);
//         else
//         return f.call(this,fn,...change_args);
//     }
// }







function curry(fn,...params)
{
    console.log("param is ",params);
    let args=params||[];
    let len=fn.length;
    if(len<=args.length)
    return fn.call(this,...params);
    return (...res)=>{
        let change_args=args.slice(0);
        change_args.push(...res);
        if(change_args.length>=len)
        return fn.call(this,...change_args);
        else
        return curry.call(this,fn,...change_args);
    }
}
function add(a,b,c,d){
    return a + b + c + d;
}
let curryAdd = curry(add);
console.log(curryAdd(1)(2)(3)(4)); // 10
