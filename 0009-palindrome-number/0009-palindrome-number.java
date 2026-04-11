class Solution {
    public boolean isPalindrome(int x) {
        int n,t;
        int r = x;
        if(x<0){
            return false;
        }
        n=0;
        while(x!=0){
            t=x%10;
            n=n*10+t;
            x=x/10;
        }
        if(r==n){
          return true;
        }
        return false;
    }
}