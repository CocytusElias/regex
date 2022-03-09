import * as regex from '../lib';

enum DateTimeRegex {
  DateTime24 = 'dateTime24',
  DateTime12 = 'dateTime12',
  Date = 'date',
  YearMonth = 'yearMonth',
  MonthDay = 'monthDay',
  Time24 = 'time24',
  Time12 = 'time12',
  HmTime24 = 'hmTime24',
  HmTime12 = 'hmTime12',
  MsTime = 'msTime',
}

const {
  DateTime24,
  DateTime12,
  Date,
  YearMonth,
  MonthDay,
  Time24,
  Time12,
  HmTime24,
  HmTime12,
  MsTime,
} = DateTimeRegex;

const TestCase = [
  {
    case: '2021-01-02 11:59:59',
    match: [
      DateTime24, DateTime12
    ],
  },
  {
    case: '2021-01-02 00:00:00',
    match: [
      DateTime24, DateTime12
    ],
  },
  {
    case: '2021-01-02 23:00:00',
    match: [
      DateTime24
    ],
  },
  {
    case: '2021-01-02',
    match: [
      Date
    ],
  },
  {
    case: '2021-01',
    match: [
      YearMonth
    ],
  },
  {
    case: '01-01',
    match: [
      MonthDay
    ],
  },
  {
    case: '11:59:59',
    match: [
      Time24, Time12
    ],
  },
  {
    case: '21:59:59',
    match: [
      Time24
    ],
  },
  {
    case: '11:59',
    match: [
      HmTime24, HmTime12
    ],
  },
  {
    case: '12:59',
    match: [
      HmTime24
    ],
  },
  {
    case: '00:00',
    match: [
      MsTime
    ],
  },
  {
    case: '59:59',
    match: [
      MsTime
    ],
  },
];

for (const testCase of TestCase) {
  for (const rg of testCase.match) {
    test(`date-time regex ，testCase：${testCase.case}, regex: ${rg}`, () => {
      expect(regex[rg].test(testCase.case)).toBe(true);
    });
  }
}
