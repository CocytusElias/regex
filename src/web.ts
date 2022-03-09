export const ipv4 =
  /^((1?([\d]{1,2})|2([0-4]\d|5[0-5])))(\.)((1?([\d]{1,2})|2([0-4]\d|5[0-5])))(\.)((1?([\d]{1,2})|2([0-4]\d|5[0-5])))(\.)((1?([\d]{1,2})|2([0-4]\d|5[0-5])))$/;

export const ipv6 =
  /^((1?([\d]{1,2})|2([0-4]\d|5[0-5])))(\.)((1?([\d]{1,2})|2([0-4]\d|5[0-5])))(\.)((1?([\d]{1,2})|2([0-4]\d|5[0-5])))(\.)((1?([\d]{1,2})|2([0-4]\d|5[0-5])))$/;

export const domain =
  /^([a-zA-Z\d]([a-zA-Z\d-]{0,61}[a-zA-Z\d])?\.)+[a-zA-Z]{2,6}$/;

export const port =
  /^([\d]{1,4}|[1-5]\d{4}|6([0-4]\d{3}|5([0-4]\d{2}|5([0-2]\d{1}|3[0-5]))))$/;

export const subnetMask =
  /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(255|254|252|248|240|224|192|128|0)$/;

export const ftp = /^ftp:\/\//;

export const ftps = /^ftps:\/\//;

export const http = /^http:\/\//;

export const https = /^https:\/\//;

export const ws = /^ws:\/\//;

export const wss = /^wss:\/\//;

export const thunderUrl = /^thunderx?:\/\/[a-zA-Z\d]+=$/;

export const ed2kUrl = /^ed2k:\/\/\|file\|.+\|\/$/;

export const magnetUrl = /^magnet:\?xt=urn:btih:[\da-fA-F]{40,}.*$/;

export const macAddress =
  /^((([a-f\d]{2}:){5})|(([a-f\d]{2}-){5}))[a-f\d]{2}$/i;
