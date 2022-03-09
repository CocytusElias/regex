import * as regex from '../lib';

enum DateTimeRegex {
  VideoFile = 'videoFile',
  MusicFile = 'musicFile',
  ImageFile = 'imageFile',
  ExecFile = 'execFile',
  AndroidExecFile = 'androidExecFile',
  MacosExecFile = 'macosExecFile',
  WindowsExecFile = 'windowsExecFile',
  LinuxExecFile = 'linuxExecFile',
  CmpFile = 'cmpFile',
}

const {
  VideoFile,
  MusicFile,
  ImageFile,
  ExecFile,
  AndroidExecFile,
  MacosExecFile,
  WindowsExecFile,
  LinuxExecFile,
  CmpFile,
} = DateTimeRegex;

const TestCase = [
  {
    case: '/eliasSing.mp4',
    match: [VideoFile],
  },
  {
    case: '/eliasSing.mp3',
    match: [MusicFile],
  },
  {
    case: '/eliasSing.png',
    match: [ImageFile],
  },
  {
    case: 'E:\\\\elias\\\\eliasSing.png',
    match: [ImageFile],
  },

  {
    case: '/play/Elias-GTA6.apk',
    match: [ExecFile, AndroidExecFile],
  },
  {
    case: 'Elias-GTA6.pkg',
    match: [ExecFile, MacosExecFile],
  },
  {
    case: 'D:\\\\elias\\\\Elias-GTA6.exe',
    match: [ExecFile, WindowsExecFile],
  },
  {
    case: '/home/elias/Elias-GTA6.start.sh',
    match: [ExecFile, LinuxExecFile],
  },
  {
    case: '/elias-gta5.zip',
    match: [CmpFile],
  },
];

for (const testCase of TestCase) {
  for (const rg of testCase.match) {
    test(`file-path regex ，testCase：${testCase.case}, regex: ${rg}`, () => {
      expect(regex[rg].test(testCase.case)).toBe(true);
    });
  }
}
