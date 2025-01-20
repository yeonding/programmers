function solution(myString) {
    const stringsByX = myString.split("x");
    let strings = [];
    
    stringsByX.forEach( str => {
        const strs = str.split("");
        strings.push(strs.length);
    })
    
    return strings;
}