function solution(s) {
    return [...s].filter((str, idx) => {
        const halfIdx = parseInt(s.length/2);
        if (s.length%2 == 0){
            return idx == halfIdx-1 || idx == halfIdx;
        }
        return idx == halfIdx;
    }).join('');
}