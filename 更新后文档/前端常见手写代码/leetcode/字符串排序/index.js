
let s="vdamnsd";
let arr=[];
for(let i=0;i<s.length;i++)
arr.push(s[i]);
arr.sort();
s="";
for(let i=0;i<arr.length;i++)
s+=arr[i];
console.log(s);