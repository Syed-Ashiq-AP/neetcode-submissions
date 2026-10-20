class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const d:{[key:number]:number} = {}
        nums.forEach(v=>{
            if (!d[v]) d[v]=0;
            d[v]+=1;
        })
        let max=Infinity 
        return Array.from({length:k}).map(()=>{
           const nm = Object.keys(d).reduce((m,i)=> (d[i]<=max && d[i]>d[m])?i:m)
           max = d[nm]
           delete d[nm]
           return parseInt(nm)
        })

        

    }
}
