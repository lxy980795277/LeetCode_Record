
class ListNode{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
function f(head)
{
    if(head==null) return null;
    let pre=null;
    let cur=head;
    while(cur!=null)
    {
        let next=cur.next;
        cur.next=pre;
        pre=cur;
        cur=next;
    }
    return pre;
}
let head=new ListNode(1);
let p1=head;
let k=2;
while(k<=5)
{
    p1.next=new ListNode(k);
    k++;
    p1=p1.next;
}

let p2=head;
while(p2!=null)
{
    console.log(p2.val);
    p2=p2.next;
}
console.log("-----------------------");
let p3=f(head);
while(p3!=null)
{
    console.log(p3.val);
    p3=p3.next;
}