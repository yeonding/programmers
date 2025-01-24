function solution(n) {
    for(let i = 1; i < n; i++){
        if(n % i == 1){
            x = i;
            return x;
        }
    }
}