function solution(s) {
    const aryBySpace = s.split(" ")
    const aryByOne = aryBySpace.map( ary => {
        return ary.split('').map((char, idx) => {
            if (idx === 0) {
                return /[0-9]/.test(char) ? char : char.toUpperCase();
            } else {
                return /[A-Z]/.test(char) ? char.toLowerCase() : char;
            }
        }).join('')        
    })
    
    return aryByOne.join(' ');
}