import * as regex from '../lib';

enum DateTimeRegex {
  BankCardId = 'bankCardId',
}

const {
  BankCardId,
} = DateTimeRegex;

const TestCase = [
  {
    case: '6223029378992462',
    match: [BankCardId],
  },
  {
    case: '6226815962340014282',
    match: [BankCardId],
  },
  {
    case: '4047383956958604',
    match: [BankCardId],
  },
  {
    case: '5522882068712560',
    match: [BankCardId],
  },
  {
    case: '6227505820022533',
    match: [BankCardId],
  },
];

for (const testCase of TestCase) {
  for (const rg of testCase.match) {
    test(`financial regex ，testCase：${testCase.case}, regex: ${rg}`, () => {
      expect(regex[rg].test(testCase.case)).toBe(true);
    });
  }
}
