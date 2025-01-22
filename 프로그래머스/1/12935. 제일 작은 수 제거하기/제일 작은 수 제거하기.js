function solution(arr) {
    let answer = [];
    if(arr.length == 1){
        answer.push(-1);
    } else {
        const min = [...arr].sort((a, b) => a - b).filter((ele,idx) => idx == 0);
        answer = arr.filter( ele => ele != min);
    }
    return answer;
}