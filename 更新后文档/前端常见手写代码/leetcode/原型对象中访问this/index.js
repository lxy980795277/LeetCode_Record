let Trie = function(val) {
    this.val=val
};


Trie.prototype.insert = function() {
    console.log(this.val);
};
let n=new Trie(3);
n.insert();