import { Observable } from 'rxjs';
import { merge } from 'lodash';
import { environment } from 'src/environments/environment';
import DateTimeConvertHelper from './datetime-convert-helper';
export default class Utils {
  constructor(
  ) { }
  static capitalizeFirstLetter(text) {
    return text ? text.charAt(0).toUpperCase() + text.slice(1) : '';
  }

  static regenerativePassword(length = 8): string {
    const charLowercase = 'abcdefghijklmnopqrstuvwxyz';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = charLowercase.charAt(Math.floor(Math.random() * charLowercase.length)).toUpperCase()
      + charLowercase.charAt(Math.floor(Math.random() * charLowercase.length))
      + Math.floor(Math.random() * (10));
    const charactersLength = characters.length;
    while (result.length < 8) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  static parseAssignTo(assignToFormValue) {
    if (!assignToFormValue) {
      return null;
    }
    return {
      assignToType: assignToFormValue.split('_')[0],
      assignToId: assignToFormValue.split('_')[1]
    };
  }

  static createSearchParam(searchStr: string): URLSearchParams {
    const result = new URLSearchParams();
    result.append('searchTerm', searchStr);
    return result;
  }
  static precisionRound(number, precision) {
    const factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  static isEqual(value: any, other: any): boolean {
    // Get the value type
    const type = Object.prototype.toString.call(value);

    // If the two objects are not the same type, return false
    if (type !== Object.prototype.toString.call(other)) {
      return false;
    }

    // If items are not an object or array, return false
    if (['[object Array]', '[object Object]'].indexOf(type) < 0) {
      return false;
    }

    // Compare the length of the length of the two items
    const valueLen =
      type === '[object Array]' ? value.length : Object.keys(value).length;
    const otherLen =
      type === '[object Array]' ? other.length : Object.keys(other).length;
    if (valueLen !== otherLen) {
      return false;
    }

    // Compare properties
    if (type === '[object Array]') {
      for (let i = 0; i < valueLen; i++) {
        if (this.compare(value[i], other[i]) === false) {
          return false;
        }
      }
    } else {
      for (const key in value) {
        if (value.hasOwnProperty(key)) {
          if (this.compare(value[key], other[key]) === false) {
            return false;
          }
        }
      }
    }

    // If nothing failed, return true
    return true;
  }

  static compare(item1: any, item2: any): boolean {
    const itemType = Object.prototype.toString.call(item1);

    // If an object or array, compare recursively
    if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
      if (!this.isEqual(item1, item2)) {
        return false;
      }
    } else {
      // Otherwise, do a simple comparison
      // If the two items are not the same type, return false
      if (itemType !== Object.prototype.toString.call(item2)) {
        return false;
      }

      // Else if it's a function, convert to a string and compare
      // Otherwise, just compare
      if (itemType === '[object Function]') {
        if (item1.toString() !== item2.toString()) {
          return false;
        }
      } else {
        if (item1 !== item2) {
          return false;
        }
      }
    }
  }

  static checkTypeFile(file: File[]): boolean {
    const typeAllow = [
      'jpg',
      'jpeg',
      'pdf',
      'doc',
      'docx',
      'xls',
      'xlsx',
      'ppt',
      'pptx'
    ];
    let isReturn = true;
    for (const image of file) {
      const typeAray = image.name.split('.');
      if (
        !(
          typeAllow.includes(typeAray[typeAray.length - 1].toLowerCase()) &&
          typeAray.length >= 2
        )
      ) {
        isReturn = false;
        break;
      }
    }
    return isReturn;
  }

  static checkTypeFileScan(file: File[]): boolean {
    const typeAllow = ['jpg', 'jpeg', 'png', 'gif', 'pdf'];
    return Utils.checkSpecialTypeFileImage(file, typeAllow);
  }

  static checkTypeFileImage(file: File[]): boolean {
    const typeAllow = ['jpg', 'jpeg', 'png', 'gif'];
    return Utils.checkSpecialTypeFileImage(file, typeAllow);
  }

  static checkSpecialTypeFileImage(
    files: File[],
    typeAllow: string[]
  ): boolean {
    let isReturn = true;
    for (const image of files) {
      const typeAray = image.name.split('.');
      if (
        !(
          typeAllow.includes(typeAray[typeAray.length - 1].toLowerCase()) &&
          typeAray.length >= 2
        )
      ) {
        isReturn = false;
        break;
      }
    }
    return isReturn;
  }

  static formatNumber(
    value: number | string,
    fractionSize: number = 2
  ): string {
    const DECIMAL_SEPARATOR = '.';
    const THOUSANDS_SEPARATOR = ',';
    const CURRENCY_UNIT = '';
    const PADDING = '000000';
    if (!value) {
      return '';
    }
    if (isNaN(+value)) {
      return value.toString();
    }

    let [integer, fraction = ''] = (+value).toString().split(DECIMAL_SEPARATOR);

    if (value < 0.01) {
      return '0.00';
    }

    if (+(fraction + PADDING)[fractionSize] > 4) {
      fraction =
        fractionSize > 0
          ? DECIMAL_SEPARATOR +
          (+(fraction + PADDING).substring(0, fractionSize) + 1 > 9
            ? (
              +(fraction + PADDING).substring(0, fractionSize) + 1
            ).toString()
            : '0' +
            (
              +(fraction + PADDING).substring(0, fractionSize) + 1
            ).toString())
          : '';
    } else {
      if ((fraction + PADDING).substring(0, fractionSize) !== '00') {
        fraction =
          fractionSize > 0
            ? DECIMAL_SEPARATOR +
            (fraction + PADDING).substring(0, fractionSize)
            : '';
      } else {
        fraction = '';
      }
    }

    if (fraction.toString().length === fractionSize + 2) {
      integer = (+integer + 1)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, THOUSANDS_SEPARATOR);
      fraction = DECIMAL_SEPARATOR + PADDING.substring(0, fractionSize);
    } else {
      integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, THOUSANDS_SEPARATOR);
    }

    return integer + fraction + (integer && CURRENCY_UNIT);
  }

  // Return Address
  static address(data: any[]): string {
    let address = '';
    data.forEach(item => {
      address =
        address +
        (address !== '' ? (item ? ', ' + item : '') : item ? item : '');
      // (address ? '' : ', ') +
    });
    return address;
  }

  

  static createFilterParam(filter: any): any {
    for (const key in filter) {
      if (filter[key] instanceof Date) {
        filter[key] = DateTimeConvertHelper.fromDtObjectToTimestamp(
          filter[key]
        );
      }
    }
    return merge({}, filter);
  }

  static checkApprovedStatus(status: string): boolean {
    if (status === null) {
      return null;
    } else if (status === 'Approved') {
      return true;
    }
    return false;
  }

  static webSiteUrl(websiteUrl: string) {
    if (!websiteUrl) {
      return '';
    }
    const urlHttpOrHttps =
      websiteUrl.match(/^https?:\/\//i) || websiteUrl.match(/^http?:\/\//i);
    if (!urlHttpOrHttps) {
      return  websiteUrl;
    }
    return  websiteUrl.replace(urlHttpOrHttps[0], '');
  }

  static urlOfWeb(websiteUrl: string) {
    if (!websiteUrl) {
      return '';
    }
    const urlHttpOrHttps = websiteUrl.match(/#/gi);
    if (!urlHttpOrHttps) {
      return websiteUrl;
    }
    return websiteUrl.split(urlHttpOrHttps[0]).reverse()[0];
  }

  static removeDuplicate(arr: any, compareKey: string) {
    return (
      arr
        .map(e => e[compareKey])
        // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
        // eliminate the dead keys & store unique objects
        .filter(e => arr[e])
        .map(e => arr[e])
    );
  }

  static sort(arr: any, key: string, typeSort: string) {
    return arr.sort((a, b) => {
      return a[key] &&
        b[key] &&
        a[key].toString().toLowerCase() > b[key].toString().toLowerCase()
        ? typeSort === 'ascend'
          ? 1
          : -1
        : b[key] > a[key]
          ? typeSort !== 'ascend'
            ? 1
            : -1
          : 0;
    });
  }

  static viewImageUrl(id: string): string {
    return `${environment.API_ENDPOINT}api/file/${id}`;
  }

  static formatCodeUser(
    data: string,
    codeTemplate: string,
    specialCharacters: string[]
  ) {
    for (var position = 0; position < codeTemplate.length - 1; position++) {
      if (
        specialCharacters.includes(codeTemplate[position]) &&
        data[position] !== codeTemplate[position]
      ) {
        data = [
          data.slice(0, position),
          codeTemplate[position],
          data.slice(position)
        ].join('');
      }
    }
    return data;
  }
}
