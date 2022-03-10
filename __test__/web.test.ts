import * as regex from '../lib';

enum WebRegex {
  Ipv4 = 'ipv4',
  Ipv4HttpUrl = 'ipv4HttpUrl',
  Ipv4WsUrl = 'ipv4WsUrl',
  Ipv6 = 'ipv6',
  Ipv6HttpUrl = 'ipv6HttpUrl',
  Ipv6WsUrl = 'ipv6WsUrl',
  Domain = 'domain',
  DomainHttpUrl = 'domainHttpUrl',
  DomainWsUrl = 'domainWsUrl',
  Port = 'port',
  SubnetMask = 'subnetMask',
  Ftp = 'ftp',
  Ftps = 'ftps',
  Http = 'http',
  Https = 'https',
  Ws = 'ws',
  Wss = 'wss',
  MacAddress = 'macAddress',
}

const {
  Ipv4,
  Ipv4HttpUrl,
  Ipv4WsUrl,
  Ipv6,
  Ipv6HttpUrl,
  Ipv6WsUrl,
  Domain,
  DomainHttpUrl,
  DomainWsUrl,
  Port,
  SubnetMask,
  Ftp,
  Ftps,
  Http,
  Https,
  Ws,
  Wss,
  MacAddress,
} = WebRegex;

const TestCase = [
  {
    case: '192.168.0.1',
    match: [Ipv4],
  },
  {
    case: 'http://192.168.0.1',
    match: [Ipv4HttpUrl, Http],
  },
  {
    case: 'https://192.168.0.1',
    match: [Ipv4HttpUrl, Https],
  },
  {
    case: 'ws://192.168.0.1',
    match: [Ipv4WsUrl, Ws],
  },
  {
    case: 'wss://192.168.0.1',
    match: [Ipv4WsUrl, Wss],
  },
  {
    case: 'fe80::ee9c:6d3b:a43d:3184',
    match: [Ipv6],
  },
  {
    case: 'http://fe80::ee9c:6d3b:a43d:3184',
    match: [Ipv6HttpUrl, Http],
  },
  {
    case: 'https://fe80::ee9c:6d3b:a43d:3184',
    match: [Ipv6HttpUrl, Https],
  },
  {
    case: 'ws://fe80::ee9c:6d3b:a43d:3184',
    match: [Ipv6WsUrl, Ws],
  },
  {
    case: 'wss://fe80::ee9c:6d3b:a43d:3184',
    match: [Ipv6WsUrl, Wss],
  },

  {
    case: 'github.com',
    match: [Domain],
  },
  {
    case: 'http://github.com',
    match: [DomainHttpUrl, Http],
  },
  {
    case: 'https://github.com',
    match: [DomainHttpUrl, Https],
  },
  {
    case: 'ws://github.com',
    match: [DomainWsUrl, Ws],
  },
  {
    case: 'wss://github.com',
    match: [DomainWsUrl, Wss],
  },
  {
    case: '18185',
    match: [Port],
  },
  {
    case: '255.255.248.0',
    match: [SubnetMask],
  },
  {
    case: 'ftp://127.0.0.1',
    match: [Ftp],
  },
  {
    case: 'ftps://127.0.0.1',
    match: [Ftps],
  },
  {
    case: 'ce:c5:2b:45:36:c9',
    match: [MacAddress],
  },
];

for (const testCase of TestCase) {
  for (const rg of testCase.match) {
    test(`web regex ，testCase：${testCase.case}, regex: ${rg}`, () => {
      expect(regex[rg].test(testCase.case)).toBe(true);
    });
  }
}
