declare global {
  interface Array<T> {
    type: any;
    getType(): string;
    position(element: any, compareFunction: any): number;
    pushSorted(element: any, compareFunction: any): number;
    pushUnique(element: any): boolean;
    cleanPush(element: any): number;
  }

  interface ArrayConstructor {
    cleanPush(array: any[], element: any): any[]
  }

  interface JQueryStatic {
    cache;
  }

  interface String {
    replaceAll(search: string, replacement: string): string;
  }
}

declare interface Array<T> {
  type: any;
  getType(): string;
}

declare interface JQueryStatic {
  cache;
}

declare interface String {
  replaceAll(search: string, replacement: string): string;
}

String.prototype.replaceAll = function (search, replacement) {
  let target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

Array.prototype.getType = function () {
  return this.type;
}

Array.prototype.pushUnique = function (element) {
  if (this.indexOf(element) == -1) {
    this.push(element);
    return true;
  }
  return false;
}

function checkPosition(m) {
  return ((-m - 1) >= 0) ? (-m - 1) : m;
}

Array.prototype.position = function (element, compareFunction) {
  let m = 0;
  let n = this.length - 1;
  while (m <= n) {
    let k = (n + m) >> 1;
    if (compareFunction(element, this[k])) {
      m = k + 1;
    } else {
      n = k - 1;
    }
  }
  return checkPosition(m);
}

Array.prototype.pushSorted = function (element, compareFunction) {
  let index = this.position(element, compareFunction);
  this.splice(index, 0, element);
  return index;
};

Array.cleanPush = function (array: any[], element: any): any[] {
  if (!Array.isArray(array) || !array.length)
    array = new Array<any>();
  array.push(element);
  return array;
}

// interface Object {
//     getClassName(): string;
//     getConstructor(): any;
// }

// Object.prototype.getConstructor = function() {
//   return this.constructor;
// }

// Object.prototype.getClassName = function() {
//   return this.constructor.name;
// }

export { Array, String }
