export const cnNameFull =
  /^([\u4e00-\u9fa5]{1,16})([·•]?)([\u4e00-\u9fa5]{1,16})$/;

export const cnNameShort = /^[\u4e00-\u9fa5]{2,16}$/;

export const enName = /^([a-zA-Z]{1,20})([\s]?)([a-zA-Z]{1,20})$/;

export const email =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/;

export const cnTelPhone = /^(0\d{2,3})-(\d{7,8})(-\d+)?$/;

export const cnStrictMobilePhone =
  /^(?:(?:\+|00)86)?1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;

export const cnMobilePhone = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;

export const wxId = /^[a-zA-Z][-_a-zA-Z\d]{5,19}$/;

export const qqId = /^[1-9][\d]{4,10}$/;

export const cnPassport =
  /(^[ekgdsph]\d{8}$)|(^(([e][a-f])|([dsp][e])|([k][j])|([m][a])|(1[45]))\d{7}$)/i;

export const cnIdCard =
  /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/;

export const cnLprNer =
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z](?:((\d{5}[A-HJK])|([A-HJK][A-HJ-NP-Z\d][\d]{4}))|[A-HJ-NP-Z\d]{4}[A-HJ-NP-Z\d挂学警港澳])$/;

export const cnLprFe =
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z\d]{4}[A-HJ-NP-Z\d挂学警港澳]$/;

export const cnLpr =
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z\d]{4,5}[A-HJ-NP-Z\d挂学警港澳]$/;

export const zipCode =
  /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/;
