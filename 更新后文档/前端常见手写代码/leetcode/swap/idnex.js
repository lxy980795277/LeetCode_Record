//值传递和引用传递

let a=[1,2,3];
let b=[4,5,6];
function swap(a,b)
{
    a.push(4);

}
swap(a,b);
console.log(a);//[1,2,3,4]
console.log(b);//[4,5,6]