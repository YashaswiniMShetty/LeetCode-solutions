public class Solution {
    public boolean judgeSquareSum(int c) {
        int left = 0;
        int right = (int) Math.sqrt(c);

        while (left <= right) {
            long result = (long) left * left + (long) right * right;

            if (result == c) {
                return true;
            } else if (result < c) {
                left++;
            } else {
                right--;
            }
        }

        return false;
    }
}