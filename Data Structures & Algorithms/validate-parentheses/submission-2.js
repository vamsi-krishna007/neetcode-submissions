class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let a = [];
        let b = {
            "}": "{",
            "]": "[",
            ")": "("
        }
        for (let i = 0; i < s.length; i++) {
            if (["(", "[", "{"].includes(s[i])) {
                a.push(s[i]);
            } else if ([")", "]", "}"].includes(s[i])) {
                if (b[s[i]] == a.pop()) {
                    // continue;
                } else {
                    return false;
                }
            }
        }
        if (a.length == 0) {
            return true;
        } else {
            return false;
        }
    }
}
