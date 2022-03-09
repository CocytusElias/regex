import * as regex from '../lib';

enum UserRegex {
  CnNameFull = 'cnNameFull',
  CnNameShort = 'cnNameShort',
  EnName = 'enName',
  Email = 'email',
  CnTelPhone = 'cnTelPhone',
  CnStrictMobilePhone = 'cnStrictMobilePhone',
  CnMobilePhone = 'cnMobilePhone',
  WxId = 'wxId',
  QQId = 'qqId',
  CnPassport = 'cnPassport',
  CnIdCard = 'cnIdCard',
  CnLpnNer = 'cnLpnNer',
  CnLprFe = 'cnLprFe',
  CnLpr = 'cnLpr',
  ZipCode = 'zipCode',
}

const {
  CnNameFull,
  CnNameShort,
  EnName,
  Email,
  CnTelPhone,
  CnStrictMobilePhone,
  CnMobilePhone,
  WxId,
  QQId,
  CnPassport,
  CnIdCard,
  CnLpnNer,
  CnLprFe,
  CnLpr,
  ZipCode,
} = UserRegex;

const TestCase = [
  {
    case: '葛朗台',
    match: [CnNameFull, CnNameShort],
  },
  {
    case: '葛•朗台',
    match: [CnNameFull],
  },
  {
    case: 'elias sama',
    match: [EnName],
  },
  {
    case: 'elias@elias.ink',
    match: [Email],
  },
  {
    case: '13316623920',
    match: [CnMobilePhone, CnStrictMobilePhone],
  },
  {
    case: '010-68800520',
    match: [CnTelPhone],
  },
  {
    case: 'eliassama',
    match: [WxId],
  },
  {
    case: '10000',
    match: [QQId],
  },
  {
    case: 'G28232515',
    match: [CnPassport],
  },
  {
    case: '340223198306142213',
    match: [CnIdCard],
  },
  {
    case: '浙AKW973',
    match: [CnLpnNer, CnLpr],
  },
  {
    case: '浙AVC856',
    match: [CnLprFe, CnLpr],
  },
  {
    case: '242332',
    match: [ZipCode],
  },
];

for (const testCase of TestCase) {
  for (const rg of testCase.match) {
    test(`user regex ，testCase：${testCase.case}, regex: ${rg}`, () => {
      expect(regex[rg].test(testCase.case)).toBe(true);
    });
  }
}
