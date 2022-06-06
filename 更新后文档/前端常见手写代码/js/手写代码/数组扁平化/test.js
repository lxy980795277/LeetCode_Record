

function flatter(args)
{
    return args.reduce((pre,cur)=>{
        return pre.concat(Array.isArray(cur)?flatter(cur):cur);
    },[])
}

let a=[1,[2,3],[4,[5,6]]];
let b=flatter(a);
console.log(b);