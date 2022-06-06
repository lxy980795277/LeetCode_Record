
function node(val){
    this.val=val;
    this.next=null;
}

function change(node)
{
    node.val=5;
}
let p=new node(3);
console.log(p);
change(p);
console.log(p);