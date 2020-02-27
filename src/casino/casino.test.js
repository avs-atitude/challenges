const { solution } = require('./casino');

describe('CASSINO', () => {
  test("shoud be definied function 'solution'", () => {
      expect(solution).toBeDefined();
  });
  
  
  test("the return of the 'solution' must equal the value of the response", () => {
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
  
          {
              n: 30,
              k: 4,
              expected: 7
          },
      ];
  
  
      tests.forEach(test => {
          let response = solution(test.n, test.k)
          expect(response).toEqual(test.expected);
      });
      
  });
});