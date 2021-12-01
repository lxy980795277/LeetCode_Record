class Solution { //Java堆栈的方法
    public boolean isValid(String s) {
        int len = s.length();
        if(len == 0){
            return true;
        }
        ArrayList <Character> list = new ArrayList<>();
        int location = -1;
        for(int i =0;i<len;i++){
            char c = s.charAt(i);
            if(c=='('||c=='['||c=='{'){
                list.add(c);
                location++;
            }
            else{
                if(list.size()==0){
                    return false;
                }
                char left = list.get(location);
                if((left=='('&&c==')')||(left=='{'&&c=='}')||(left=='['&&c==']')){
                    list.remove(location);
                    location--;
                }
                else{
                    return false;
                }
            }
        }
        if(list.size()>0){
            return false;
        }
        return true;
    }
}