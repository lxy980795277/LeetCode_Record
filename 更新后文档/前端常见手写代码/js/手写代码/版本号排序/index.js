
function f(arr)
{
    arr.sort((n1,n2)=>{
        let tempn1=n1.split(".");
        let tempn2=n2.split(".");
        let len=Math.max(tempn1.length,tempn2.length);
        for(let i=0;i<len;i++)
        {
            let item1=Number(tempn1[i]||0);
            let item2=Number(tempn2[i]||0);
            if(item1>item2) return 1;
            if(item1<item2) return -1;
        }
        return 0;

    })
}



const arr = ['4.8', '1.7.1', '4.1.9', '4.1'];
    f(arr)

	console.log(arr);