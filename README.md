# @eliassama/regex
[![standard-readme compliant](https://img.shields.io/badge/@eliassama/regex-v0.0.0--alpha.1-green.svg?style=flat-square)](https://github.com/eliassama/@eliassama/regex)

Comprehensive and accurate regular expressions

## Table of Contents

- [Install](#install)
  - [CNPM](#cnpm)
  - [NPM](#npm)
  - [YARN](#yarn)
  - [PNPM](#pnpm)
- [Usage](#usage)
  - [Introduce](#introduce)
  - [Import](#import)
  - [Description](#description)
    - [Chart Regex](#chart-regex)
    - [DateTime Regex](#datetime-regex)
    - [FilePath Regex](#filepath-regex)
    - [Financial Regex](#financial-regex)
    - [User Regex](#user-regex)
    - [Web Regex](#web-regex)
- [Maintainers](#maintainers)

## Install
### CNPM
```
cnpm i @eliassama/regex --save
```

### NPM 
```
npm i @eliassama/regex --save
```

### YARN
```
yarn add @eliassama/regex
```

### PNPM
```
pnpm add @eliassama/regex
```

## Usage

### Introduce
Some common regular expressions.

### Import
```javascript
const regex = require('@eliassama/regex')
```

```typescript
import * as regex from '@eliassama/regex'
```

### Description

#### Chart Regex

  + **Binary**: Matches binary regular expressions.
    ```javascript
      regex.binary.test("0101")
    ```

  + **Hex**: Matches a hexadecimal regular expression, case - insensitive.
    ```javascript
        regex.hex.test("1A2f")
    ```

  + **HexLower**: Matches hexadecimal regular expressions, all lowercase.
    ```javascript
       regex.hexLower.test("1a2f")
    ```

  + **HexUpper**: Matches hexadecimal regular expressions, all uppercase.
    ```javascript
        regex.hexLower.test("1A2F")
    ```

  + **HexColor**: Matches hexadecimal color codes, which must start with # and have only 3 or 6 hexadecimal characters.
    ```javascript
       regex.hexLower.test("#FFF")
    ```

  + **CnChart**: Matching Chinese Characters.
    ```javascript
       regex.cnChart.test("你好")
    ```

  + **EnChart**: Matches English characters, case insensitive.
    ```javascript
       regex.cnChart.test("elias")
    ```

  + **EnLowerChart**: Match English characters in all lowercase.
    ```javascript
       regex.cnChart.test("elias")
    ```

  + **EnUpperChart**: Match English characters in all uppercase.
    ```javascript
       regex.enUpperChart.test("ELIAS")
    ```

  + **EnNumChart**: Matches English characters with digits, case insensitive.
    ```javascript
       regex.enNumChart.test("Elias2022")
    ```

  + **EnLowerNumChart**: Matches alphanumeric characters in lowercase.
    ```javascript
       regex.enLowerNumChart.test("elias2022")
    ```

  + **EnUpperNumChart**: Matches alphanumeric characters in uppercase.
    ```javascript
       regex.enUpperNumChart.test("ELIAS2022")
    ```

#### DateTime Regex

  + **DateTime24**: Matches yyyy-MM-dd hh:mm:ss in the 24-hour system.
    ```javascript
       regex.dateTime24.test("2020-01-02 12:52:52")  
    ```

  + **DateTime12**: Matches yyyy-MM-dd hh:mm:ss in the 12-hour system.
    ```javascript
       regex.dateTime12.test("2020-01-02 11:52:52")
    ```

  + **Date**: Matches yyyy-MM-dd.
    ```javascript
       regex.date.test("2020-01-02")
    ```

  + **YearMonth**: Matches yyyy-MM.
    ```javascript
       regex.yearMonth.test("2020-01")
    ```

  + **MonthDay**: Matches MM-dd.
    ```javascript
       regex.monthDay.test("01-02")
    ```

  + **Time24**: Matches hh:mm:ss in the 24-hour system.
    ```javascript
       regex.time24.test("12:12:12")
    ```

  + **Time12**: Matches hh:mm:ss in the 12-hour system.
    ```javascript
       regex.time12.test("11:11:11")
    ```

  + **HmTime24**: Matches hh:mm in the 24-hour system.
    ```javascript
       regex.hmTime24.test("12:12")
    ```

  + **HmTime12**: Matches hh:mm in the 12-hour system.
    ```javascript
       regex.hmTime12.test("11:11")
    ```

  + **MsTime**: Matches mm:ss.
    ```javascript
       regex.msTime.test("59:59")
    ```

#### FilePath Regex

  + **VideoFile**: Matches strings ending in [ mp4, ts, mov, mxf, mpg, flv, wmv, avi, m4v, f4v, mpeg, 3gp, asf, mkv ] .
    ```javascript
       regex.videoFile.test("eliasSing.mp4")
    ```

  + **MusicFile**: Matches strings ending in [ mp3, ogg, wav, wma, ape, flac, aac, ac3, mmf, amr, m4a, m4r, wv, mp2 ] .
    ```javascript
       regex.musicFile.test("eliasSing.mp3")
    ```

  + **ImageFile**: Matches strings ending in [ gif, png, jpg, jpeg, webp ] .
    ```javascript
       regex.imageFile.test("eliasSing.png")
    ```

  + **ExecFile**: Matches strings ending in [ apk, aab, app, pkg, dmg, exe, bat, msi, sh ] .
    ```javascript
       regex.execFile.test("eliasSing.apk")
    ```

  + **AndroidExecFile**: Matches strings ending in [ apk, aab ] .
    ```javascript
       regex.androidExecFile.test("eliasSing.apk")
    ```

  + **MacosExecFile**: Matches strings ending in [ app, pkg, dmg ] .
    ```javascript
       regex.macosExecFile.test("eliasSing.app")
    ```

  + **WindowsExecFile**: Matches strings ending in [ exe, bat, msi ] .
    ```javascript
       regex.windowsExecFile.test("eliasSing.exe")
    ```

  + **LinuxExecFile**: Matches strings ending in [ sh ] .
    ```javascript
       regex.linuxExecFile.test("eliasSing.sh")
    ```

  + **CmpFile**: Matches strings ending in [ zip, rar, 7a, gz ] .
    ```javascript
       regex.cmpFile.test("eliasSing.zip")
    ```

#### Financial Regex

  + **BankCardId**: Match Chinese bank card number, support debit and credit account for public and personal.
    ```javascript
       regex.bankCardId.test("6223029378992462")
    ```

#### User Regex

  + **CnNameFull**: Match Chinese names, including full names of ethnic minorities.
    ```javascript
       regex.enUpperNumChart.test("葛朗台")
    ```

  + **CnNameShort**: Match Chinese name or abbreviation of minority Chinese name.
    ```javascript
       regex.enUpperNumChart.test("葛•朗台")
    ```

  + **EnName**: Match English name, First name and last name are separated by Spaces.
    ```javascript
       regex.enUpperNumChart.test("elias sama")
    ```

  + **Email**: Match Email.
    ```javascript
       regex.enUpperNumChart.test("elias@elias.ink")
    ```
 
  + **CnTelPhone**: Match China landline number, must bring area code, transfer number can be brought with or without.
    ```javascript
       regex.cnTelPhone.test("010-68800520")
       regex.cnTelPhone.test("010-68800520-2")
    ```

  + **CnStrictMobilePhone**: Match Chinese mobile phone number, more strict.
    ```javascript
       regex.cnStrictMobilePhone.test("13316623920")
    ```

  + **CnMobilePhone**: Match Chinese mobile phone number, relatively loose.
    ```javascript
       regex.cnMobilePhone.test("13316623920")
    ```

  + **WxId**: Matching micro signal.
    ```javascript
       regex.wxId.test("eliassama")
    ```

  + **QQId**: Match the qq number.
    ```javascript
       regex.qqId.test("10000")
    ```

  + **CnPassport**: Match Chinese passport number.
    ```javascript
       regex.cnPassport.test("G28232515")
    ```

  + **CnIdCard**: Match Chinese second generation ID card.
    ```javascript
       regex.cnIdCard.test("340223198306142213")
    ```

  + **CnLprNer**: Match China new energy license plate number.
    ```javascript
       regex.cnLprNer.test("浙AKW973")
    ```

  + **CnLprFe**: Match license plates of non-new energy vehicles in China.
    ```javascript
       regex.cnLprFe.test("浙AVC856")
    ```

  + **CnLpr**: Match the Chinese license plate.
    ```javascript
       regex.cnLpr.test("浙AVC856")
    ```

  + **ZipCode**: Match Chinese zip code.
    ```javascript
       regex.zipCode.test("242332")
    ```

#### Web Regex

  + **Ipv4**: Matching an ipv4 Address.
    ```javascript
       regex.ipv4.test("192.168.0.1")
    ```

  + **Ipv4HttpUrl**: Matches an ipv4 address starting with HTTP or HTTPS, No / at the end.
    ```javascript
       regex.ipv4HttpUrl.test("http://192.168.0.1")
    ```

  + **Ipv4WsUrl**: Matches an ipv4 address starting with WS or WSS, No / at the end.
    ```javascript
       regex.ipv4WsUrl.test("ws://192.168.0.1")
    ```

  + **Ipv6**: Matching an ipv6 Address.
    ```javascript
       regex.ipv6.test("fe80::ee9c:6d3b:a43d:3184")
    ```

  + **Ipv6HttpUrl**: Matches an ipv6 address starting with HTTP or HTTPS, No / at the end.
    ```javascript
       regex.ipv6HttpUrl.test("http://fe80::ee9c:6d3b:a43d:3184")
    ```

  + **Ipv6WsUrl**: Matches an ipv6 address starting with WS or WSS,, No / at the end.
    ```javascript
       regex.ipv6WsUrl.test("ws://fe80::ee9c:6d3b:a43d:3184")
    ```

  + **Domain**: Matching pure domain names, No / at the end.
    ```javascript
       regex.domain.test("github.com")
    ```

  + **DomainHttpUrl**: Matches a domain name starting with HTTP or HTTPS, No / at the end.
    ```javascript
       regex.domainHttpUrl.test("http://github.com")
    ```

  + **DomainWsUrl**: Matches a domain name starting with WS or WSS, No / at the end.
    ```javascript
       regex.domainWsUrl.test("ws://github.com")
    ```

  + **Port**: Matches with a valid port number address, ranging from 0 to 65535.
    ```javascript
       regex.port.test("18185")
    ```

  + **SubnetMask**: Matches to a valid subnet mask.
    ```javascript
       regex.subnetMask.test("255.255.248.0")
    ```

  + **Ftp**: Matches url links that start with FTP.
    ```javascript
       regex.ftp.test("ftp://127.0.0.1")
    ```

  + **Ftps**: Matches url links that start with FTPS.
    ```javascript
       regex.ftps.test("ftps://127.0.0.1")
    ```

  + **Http**: Matches url links that start with HTTP.
    ```javascript
       regex.http.test("http://127.0.0.1")
    ```

  + **Https**: Matches url links that start with HTTPS.
    ```javascript
       regex.https.test("https://127.0.0.1")
    ```

  + **Ws**: Matches url links that start with WS.
    ```javascript
       regex.ws.test("ws://127.0.0.1")
    ```

  + **Wss**: Matches url links that start with WSS.
    ```javascript
       regex.wss.test("wss://127.0.0.1")
    ```

  + **MacAddress**: Matching a MAC Address.
    ```javascript
       regex.macAddress.test("ce:c5:2b:45:36:c9")
    ```

## Maintainers
[@elias](https://github.com/eliassama/@eliassama/regex)
