function solution(my_string, n) {
    let answer = '';
    let strings = my_string.split("");

    strings.forEach( str => {  
            answer += str.repeat(n);
        }
    );
    
    return answer;
}