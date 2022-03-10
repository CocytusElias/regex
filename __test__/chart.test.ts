import * as regex from '../lib';

enum ChartRegex {
  Binary = 'binary',
  Hex = 'hex',
  HexLower = 'hexLower',
  HexUpper = 'hexUpper',
  HexColor = 'hexColor',
  CnChart = 'cnChart',
  EnChart = 'enChart',
  EnLowerChart = 'enLowerChart',
  EnUpperChart = 'enUpperChart',
  EnNumChart = 'enNumChart',
  EnLowerNumChart = 'enLowerNumChart',
  EnUpperNumChart = 'enUpperNumChart',
}

const {
  Binary,
  Hex,
  HexLower,
  HexUpper,
  HexColor,
  CnChart,
  EnChart,
  EnLowerChart,
  EnUpperChart,
  EnNumChart,
  EnLowerNumChart,
  EnUpperNumChart,
} = ChartRegex;

const TestCase = [
  {
    case: '0100101',
    match: [
      Binary,
      Hex,
      HexLower,
      HexUpper,
      EnNumChart,
      EnLowerNumChart,
      EnUpperNumChart,
    ],
  },
  {
    case: '0120130',
    match: [
      Hex,
      HexLower,
      HexUpper,
      EnNumChart,
      EnLowerNumChart,
      EnUpperNumChart,
    ],
  },
  {
    case: '#120130',
    match: [HexColor],
  },
  {
    case: '#EA1',
    match: [HexColor],
  },
  {
    case: 'CADEF',
    match: [Hex, HexUpper, EnChart, EnUpperChart, EnNumChart, EnUpperNumChart],
  },
  {
    case: 'cade',
    match: [Hex, HexLower, EnChart, EnLowerChart, EnNumChart, EnLowerNumChart],
  },
  {
    case: '1Ad3E',
    match: [Hex, EnNumChart],
  },
  {
    case: '你好',
    match: [CnChart],
  },
  {
    case: '中文',
    match: [CnChart],
  },
];

for (const testCase of TestCase) {
  for (const rg of testCase.match) {
    test(`chart regex ，testCase：${testCase.case}, regex: ${rg}`, () => {
      expect(regex[rg].test(testCase.case)).toBe(true);
    });
  }
}
