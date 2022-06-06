
class TreeNode{
    constructor(val)
    {
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
function max(a,b)
{
    if(a>b) return a;
    else return b;
}
function maxdepth(root)
{
    if(root==null) return 0;
    return 1+max(maxdepth(root.left),maxdepth(root.right));
}

let root=new TreeNode(1);
root.left=new TreeNode(2);
root.right=new TreeNode(3);
root.left.left=new TreeNode(4);
console.log(maxdepth(root));