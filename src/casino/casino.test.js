const { solution } = require('./casino');

test('shoud be definied', () => {
    expect(solution).toBeDefined();
});


test('shoud be equal', () => {
    const tests = [
        {
            n: 8,
            k: 0,
            expected: 7
        },
    
        {
            n: 18,
            k: 2,
            expected: 6
        },
    
        {
            n: 10,
            k: 10,
            expected: 4
        },
    ];


    tests.forEach(test => {
        let response = solution(test.n, test.k)
        expect(response).toEqual(test.expected);
    });
    
})