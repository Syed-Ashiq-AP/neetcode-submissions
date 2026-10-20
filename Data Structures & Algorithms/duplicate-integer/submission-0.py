class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        e=[]
        for i in nums:
            if i not in e:
                e.append(i)
            else:
                return True
        return False
        
