

let a=[[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]];
a.sort(cmp);
console.log(a);
function cmp(a,b)
{
    if(a[0]>b[0]) return 1;
    else if(a[0]==b[0]&&a[1]<b[1]) return 1;
    return -1;
}