class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if not len(s) == len(t):
            return False
        for i in s:
            if i in t:
                t=t.replace(i,'-',1)
                print()
                pass
            else:
                return False
        return True

        