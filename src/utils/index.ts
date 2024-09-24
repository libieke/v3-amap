import { isObject } from './is';

export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = '';
  for (const key in obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&';
  }
  parameters = parameters.replace(/&$/, '');
  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters;
}

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}

export const parseTime = (time:string | number | undefined | null, cFormat = '{y}-{m}-{d}') => {
  if (time === -2209017600000 || time === undefined || time === null) {
    return '--';
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time);
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
  return time_str;
};

export const str4 = (srt:string) =>{
  return  srt.substr(0,4);
};

export const findOneDataObj = (data,key) =>{
  return data.filter(item=> item.data.itemName === key)[0];
};

export const restoreContentFcImgUrl = (content) => {
  if (!content) return '';
  const regex = /(<img\s[^>]*):fileId="(fi[\w\d\-]+)"(?:\s+:size="([^"]*)")?([^>]*\/>)/g;
  const replaceValue = '$1src="' + api + '/a/file/dl/$2"$4';
  return content.replace(regex, replaceValue);
};

export const top = ()=>{
  window.scrollTo(0,0);
};

//身份证号码隐藏处理
export const maskCode = (value)=> {
  if (!value) return '';
  const str = value.toString();
  const star = '********';
  return str.substring(0, 6) + star + str.substring(14,str.length);
};
