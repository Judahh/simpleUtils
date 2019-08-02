declare global {
    interface Array<T> {
      type: any;
      getType(): string;
      pushSorted(element, compareFunction): string;
    }
    
    interface JQueryStatic {
      cache;
    }
    
    interface String {
      replaceAll(search:string, replacement:string): string;
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
    replaceAll(search:string, replacement:string): string;
  }
  
  String.prototype.replaceAll = function(search, replacement) {
      let target = this;
      return target.replace(new RegExp(search, 'g'), replacement);
  };
  
  Array.prototype.getType = function () {
    return this.type;
  }

  Array.prototype.pushSorted = function(element, compareFunction) {
    this.splice((function(arr) {
      var m = 0;
      var n = arr.length - 1;
  
      while(m <= n) {
        var k = (n + m) >> 1;
        if(compareFunction(element, arr[k])){
          m = k + 1;
        }else{
          n = k - 1;
        }
      }
  
      return ((-m - 1) >= 0) ? (-m - 1) : m;
    
    })(this), 0, element);
  
    return this.length;
  };
  
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