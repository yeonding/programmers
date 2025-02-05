function solution(name, yearning, photo) {
    let result = [];
    photo.forEach( pic => {
        const score = pic.map( person => {
            let total = 0;
            const idx = name.indexOf(person);
            if(idx != -1) {
                total += yearning[idx];
            }
            return total;
        }).reduce((acc,cur)=>{
            return acc + cur;
        })
        
        result.push(score);
    })
    
    return result;
}