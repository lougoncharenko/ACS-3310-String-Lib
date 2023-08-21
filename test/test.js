const {allCaps} = require("../src/allCaps.js");
const {camelCase} = require("../src/camelCase.js");
const {capitalize} = require("../src/capitalize.js");
const {capitalizeWords} = require ("../src/capitalizeWords.js");
const {kebabCase} = require("../src/kebabCase.js");
const { removeExtraSpaces } = require("../src/removeExtraSpaces.js");
// const {shift} = require("../src/shift.js");
const { snakeCase } = require("../src/snakeCase.js");

test('test allCaps', () => {
    expect(allCaps('fred')).toBe('FRED');
    expect(allCaps('the quick brown fox jumps over the lazy dog.')).toBe('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
    expect(allCaps('hello world')).toBe('HELLO WORLD');
})

test('test camelCase', () => {
    expect(camelCase('Camel Case Words')).toBe('camelCaseWords');
    expect(camelCase('hello world')).toBe('helloWorld');
    expect(camelCase('word')).toBe('word');
})

test('test capitalize', () => {
    expect(capitalize('word')).toBe('Word');
    expect(capitalize('hello world')).toBe('Hello world');
    expect(capitalize('the quick brown fox jumps over the lazy dog.')).toBe('The quick brown fox jumps over the lazy dog.');
})

test('test capitalizeWords', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
    expect(capitalizeWords('hi i am a developer')).toBe('Hi I Am A Developer');
})

test('test kebabCase', () => {
    expect(kebabCase('hello world')).toBe('hello-world');
    expect(kebabCase('hi i am a developer')).toBe('hi-i-am-a-developer');
    expect(kebabCase('   Hello    world   again')).toBe('hello-world-again');
})

test('test removeExtraSpaces', () => {
    expect(removeExtraSpaces('   Hello    world!   ')).toBe('Hello world!');
    expect(removeExtraSpaces('   Hello    world   again')).toBe('Hello world again');
})

test('test snakeCase', () => {
    expect(snakeCase('  what the    heck   ')).toBe('what_the_heck');
    expect(snakeCase('Hello world again')).toBe('hello_world_again');
})