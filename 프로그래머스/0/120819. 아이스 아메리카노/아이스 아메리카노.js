function solution(money) {
    let answer = [];
    const cups = Math.floor(money/5500);
    const extras = money % 5500;
    answer.push(cups);
    answer.push(extras);
    return answer
}