function solution(phone_number) {
    const numbers = [...phone_number];
    for(let i = 0; i < numbers.length-4; i++){
        numbers[i] = '*';
    }
    return numbers.join('');
}