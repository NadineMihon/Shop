import { square } from "./square"

describe('Squaring' , () => {
    test('0 squared === 0', () => {
        expect(square(0)).toBe(0);
    })
    test('2 squared === 4', () => {
        expect(square(2)).toBe(4);
    })
    test('5 squared === 25', () => {
        expect(square(5)).toBe(25);
    })
    test('3 squared !== 10', () => {
        expect(square(3)).not.toBe(10);
    })
    test('6 squared !== 25', () => {
        expect(square(6)).not.toBe(25);
    })  
});

describe('Checking Math.pow call', () => {
    test('Math.pow was called', () => {
        const spy = jest.spyOn(Math, 'pow');
        square(2);

        expect(spy).toHaveBeenCalled();
    })
    test('Math.pow was called once', () => {
        const spy = jest.spyOn(Math, 'pow');
        square(2);

        expect(spy).toHaveBeenCalledTimes(1);
    })
    test('Math.pow was not called', () => {
        const spy = jest.spyOn(Math, 'pow');
        square(1);

        expect(spy).not.toHaveBeenCalled();
    })
});