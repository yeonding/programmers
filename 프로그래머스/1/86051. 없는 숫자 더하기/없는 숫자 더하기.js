function solution(numbers) {
    let nums = numbers.sort();
    let answer = 0;
    for(let i = 0; i < 10; i ++){
        if(nums[i] != i){
            answer += i;
            nums.splice( i, 0, i);
        }
    }
    return answer;
}