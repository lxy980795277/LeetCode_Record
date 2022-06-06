function node(val){
    this.val=val;
    this.next=null;
}
function merge(l1,l2){
    if(l1==null) return l2;
    if(l2==null) return l1;
    if(l1.val<l2.val)
    {
        l1.next=merge(l1.next,l2);
        return l1;
    }
    else
    {
        l2.next=merge(l1,l2.next);
        return l2;
    }
    
}
let head1=new node(1);
let p1=head1;
p1.next=new node(2);
p1=p1.next;
p1.next=new node(4);

let head2=new node(1);
let p2=head2;
p2.next=new node(3);
p2=p2.next;
p2.next=new node(4);

let newhead=merge(head1,head2);
while(newhead)
{
    console.log(newhead.val);
    newhead=newhead.next;
}