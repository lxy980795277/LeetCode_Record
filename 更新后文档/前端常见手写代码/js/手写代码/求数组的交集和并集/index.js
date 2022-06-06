
let a=[1,2,3];
let b=[2,3,4];
function jiaoji(a,b)
{
    let res=[];
    a.forEach(ele=>{
        if(b.includes(ele))
        res.push(ele);
    })
    return res;
}
function bingji(a,b){
   
    return Array.from(new Set([...a,...b]))
}
let c=jiaoji(a,b);
console.log(c);
let d=bingji(a,b);
console.log(d);