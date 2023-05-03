const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
    test('Whole Number Input', () => {
        assert.equal(convertHandler.getNum('32L'), 32);
    })
    test('decimal number input', () => {
        assert.equal(convertHandler.getNum('32.2L'), 32.2)
    })
    test('fractional input', () => {
        assert.equal(convertHandler.getNum('32/2L'), 16)
    })
    test('fractional input with a decimal', () => {
        assert.equal(convertHandler.getNum('32.4/2L'), 16.2)
    })
    test('error on a double-fraction', () => {
        assert.equal(convertHandler.getNum('3/2/3mi'), null)
    })
    test('numerical input of 1 when no numerical input is provided', () => {
        assert.equal(convertHandler.getNum('kg'), 1)
    })
    test('read each valid input unit', () => {
        assert.equal(convertHandler.getUnit('10mi'), 'mi')
    })
    test('return an error for an invalid input unit', () => {
        assert.equal(convertHandler.getReturnUnit('min'), null)
    })
    test('return the correct return unit for each valid input unit', () => {
        assert.equal(convertHandler.getReturnUnit('mi'), 'km')
    })
    test('return the spelled-out string unit for each valid input unit', () => {
        assert.equal(convertHandler.spellOutUnit('mi'), 'miles')
    })
    test('convert gal to L', () => {
        assert.equal(convertHandler.convert(1, 'gal'), 3.78541)
    })
    test('convert L to gal', () => {
        assert.equal(convertHandler.convert(1, 'L'), 0.26417)
    })
    test('convert mi to km', () => {
        assert.equal(convertHandler.convert(1, 'mi'), 1.60934)
    })
    test('convert km to mi', () => {
        assert.equal(convertHandler.convert(1, 'km'), 0.62137)
    })
    test('convert lbs to kg', () => {
        assert.equal(convertHandler.convert(1, 'lbs'), 0.45359)
    })
    test('convert kg to lbs', () => {
        assert.equal(convertHandler.convert(1, 'kg'), 2.20462)
    })


});