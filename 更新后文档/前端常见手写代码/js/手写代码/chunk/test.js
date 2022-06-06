function chunk(arr,n)
{
    let len=Math.ceil(arr.length/n);
    return Array.from(new Array(len),(value,index)=>{
        return arr.slice(n*index,n*index+n);
    })
}
let arr=[1,2,3,4,5];
console.log(chunk(arr,2));