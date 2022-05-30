import { CustomMath } from "./math";

const customMath = new CustomMath();

test('sqrt should ', () => {
    expect(customMath.sqrt('25')).toBe(5)
});

test('root of three', () => {
    expect(customMath.rootOfThree('27')).toBe(3)
});

test('change sign', () => {
    expect(customMath.change('10')).toBe(-10)
});

test('power of two', () => {
    expect(customMath.powerOfTwo('25')).toBe(625)
});

test('power of three', () => {
    expect(customMath.powerOfThree('5')).toBe(125)
});

test('ten in power', () => {
    expect(customMath.tenInPower('3')).toBe(1000)
});

test('factorial', () => {
    expect(customMath.factorial('3')).toBe(6)
});