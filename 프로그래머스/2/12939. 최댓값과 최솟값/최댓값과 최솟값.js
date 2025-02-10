function solution(s) {
    let result = [];
    let nums = s.split(" ").sort((a,b)=> a-b);
    result.push(nums[0]);
    result.push(nums[nums.length-1]);
    return result.join(" ");
}