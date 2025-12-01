import { getString } from "./setTimeout";

describe('Get string', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });
  
    afterEach(() => {
        jest.useRealTimers();
    });

    test('Get the correct string', async () => {

        const stringPromise = getString();
        
        jest.runAllTimers();

        const resultString = await stringPromise;
        expect(resultString).toBe('string');
    });
});