function solution(cards1, cards2, goal) {
    let result = "Yes";
    goal.forEach( word => {
        if(word == cards1[0]){
            cards1.shift();
            return;
        } else if(word == cards2[0]){
            cards2.shift();
            return;
        } else {
            result = "No"
        }
    })
    return result;
}