function thisNumberIsPar(number){
    return number % 2 === 0;
}

/**
 * 
 * @param {*} n numner chips
 * @param {*} k all-in
 * @return the minimum number of rounds
 */
function solution(n, k) {
    let rounds = 0;
    let chips = n;
    
    while (chips != 1) {
        if (thisNumberIsPar(chips) && k > 0) {
            chips /= 2;
            k = k-1;
        } else {
            chips -= 1;
        }
    
        rounds++;
    }

    return rounds;
}

exports.solution = solution;
