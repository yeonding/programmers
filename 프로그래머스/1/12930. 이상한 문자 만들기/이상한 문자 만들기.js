function solution(s) {
    const aryBySpace = s.split(' ');
    return aryBySpace.map( word => {
        return word.  split('').map( (char, idx) => {
            return idx%2==0 ? char.toUpperCase() : char.toLowerCase();
        }).join('')
    }).join(' ');
}