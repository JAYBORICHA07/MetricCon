'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res) => {
    const input = req.query.input;
    console.log(input)

    const initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input).toLowerCase();
    if (initUnit == 'l')
      initUnit = 'L';
    console.log(initUnit)
    const returnNum = convertHandler.convert(initNum, initUnit);
    const returnUnit = convertHandler.getReturnUnit(initUnit);


    if (!returnUnit) {
      if (!initNum) {
        console.log('\t\t\tinvalid number and unit');
        res.send('invalid number and unit');
      }
      else {
        console.log('\t\t\tinvalid unit');
        res.send('invalid unit');
      }
    }
    else if (!initNum) {
      console.log('\t\t\tinvalid number')
      res.send('invalid number');
    }
    else {
      let ansObj = {
        initNum: initNum,
        initUnit: initUnit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: convertHandler.getString(initNum, initUnit, returnNum, returnUnit)
      }
      console.log(ansObj)
      res.json(ansObj)
    }
  })
};