function solution(my_string, indices) {
    return [...my_string]
        .filter((str, idx) => {
            return !indices.includes(idx);
        })
        .join("")
}