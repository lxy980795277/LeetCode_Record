function f(a,m,b,n)
{
    let i=m-1;
    let j=n-1;
    let k=m+n-1;
    while(i>=0&&j>=0)
    {
        if(a[i]>b[j])
        a[k--]=a[i--];
        else
        a[k--]=b[j--];
    }
    while(i>=0)
    a[k--]=a[i--];
    while(j>=0)
    a[k--]=b[j--];
    return a;

}
let a=[1,2,3,0,0,0];
let b=[2,5,6];
let c=f(a,3,b,3);
console.log(c);