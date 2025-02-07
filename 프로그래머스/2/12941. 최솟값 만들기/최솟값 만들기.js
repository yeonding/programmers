function solution(A,B){
    let total = 0;
    // 각 배열의 가장 큰수 * 가장 작은수 = 최소값
    A.sort((a,b) => b-a);
    B.sort((a,b) => a-b);

    for(let i = 0; i < A.length; i++){
        const sum = A[i]*B[i];
        total += sum;        
    }
    
    return total;
}