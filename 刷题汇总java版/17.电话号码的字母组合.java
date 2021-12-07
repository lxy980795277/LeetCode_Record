class Solution {   //三次方的方法 暴利
    public List<String> letterCombinations(String digits) {
        HashMap <Character,String> map = new HashMap<>();
        ArrayList <String> list = new ArrayList<>();
        map.put('2',"abc");
        map.put('3',"def");
        map.put('4',"ghi");
        map.put('5',"jkl");
        map.put('6',"mno");
        map.put('7',"pqrs");
        map.put('8',"tuv");
        map.put('9',"wxyz");
        int len = digits.length();
        if(len == 0){
            return list;
        }
        for(int i =0;i<map.get(digits.charAt(0)).length();i++){
            list.add(String.valueOf(map.get(digits.charAt(0)).charAt(i)));
        }
        for(int i =1;i<digits.length();i++){
            String s = map.get(digits.charAt(i));
            list = addlist(list,s);
        }
        return list;

    }
    public ArrayList<String> addlist(ArrayList list,String s ){
        ArrayList <String> m = new ArrayList<>();
        for(int i =0;i<list.size();i++){
            
            for(int j =0;j<s.length();j++){
                String r = "";
                r = list.get(i) + String.valueOf(s.charAt(j));
                m.add(r);
            }
            
        }
        return m;
    }
}




class Solution {    //回溯法递归
    HashMap <Character,String> map = new HashMap<>();
    ArrayList <String> list = new ArrayList<>();
    public List<String> letterCombinations(String digits) {  
        map.put('2',"abc");
        map.put('3',"def");
        map.put('4',"ghi");
        map.put('5',"jkl");
        map.put('6',"mno");
        map.put('7',"pqrs");
        map.put('8',"tuv");
        map.put('9',"wxyz");
        int len = digits.length();
        if(len == 0){
            return list;
        }
        String str = "";
        bfs(list,str,digits,0,len);
        return list;


    }

    public void bfs(ArrayList list,String str,String digits,int index,int len){
        if(index == len){
            list.add(str);
            return ;
        }
        for(int i =0;i<map.get(digits.charAt(index)).length();i++){
            str = str + String.valueOf(map.get(digits.charAt(index)).charAt(i));
            bfs(list,str,digits,index+1,len);
            str = str.substring(0,str.length()-1);
        }
    }
    
}
