

let arr=[[1,2],[3,4]];
function f(arr)
{
    let temp=arr[0];
    arr[0]=arr[1];
    arr[1]=temp;
}
f(arr);
console.log(arr);