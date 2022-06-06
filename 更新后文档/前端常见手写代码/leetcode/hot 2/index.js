function node(val)
{
    this.val=val;
    this.next=null;
}

function merge(l1,l2)
{
    let jinwei=0;
    let vhead=new node(0);
    let p=vhead;
    while(l1&&l2)
    {
        let sum=l1.val+l2.val+jinwei;
        jinwei=Math.floor(sum/10);
        sum=sum%10;
        p.next=new node(sum);
        p=p.next;
        l1=l1.next;
        l2=l2.next;
    }
    while(l1)
    {
        let sum=l1.val+jinwei;
        jinwei=Math.floor(sum/10);
        sum=sum%10;
        p.next=new node(sum);
        p=p.next;
        l1=l1.next;
    }
    while(l2)
    {
        let sum=l2.val+jinwei;
        jinwei=Math.floor(sum/10);
        sum=sum%10;
        p.next=new node(sum);
        p=p.next;
        l2=l2.next;
    }
    if(jinwei)
    {
        p.next=new node(jinwei);
    }
    return vhead.next;
}

let l1=new node(2);
let p1=l1;
p1.next=new node(4);
p1=p1.next;
p1.next=new node(3);

let l2=new node(5);
let p2=l2;
p2.next=new node(6);
p2=p2.next;
p2.next=new node(4);

let newhead=merge(l1,l2);
while(newhead)
{
    console.log(newhead.val);
    newhead=newhead.next;
}