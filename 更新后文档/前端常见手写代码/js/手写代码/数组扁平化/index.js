

let arr=[1,[2,[3,4]]];

function flatten(arr){
    return arr.reduce((pre,cur)=>{
        return pre.concat(Array.isArray(cur)?flatten(cur):cur);
    },[])
    // 必须加上空数组[]为初始值，否则pre就不是个数组
}
console.log("arr is ",arr);
console.log("flatten arr is ",flatten(arr));
