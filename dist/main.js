!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}("undefined"!=typeof self?self:this,function(){return function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n){function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();e.exports=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(this,e),this.configure=n,this}return r(e,[{key:"next",value:function(){return this.proxy=this.clone(this.configure),this.condition=this.conversion(arguments),this.recursive()}},{key:"clone",value:function(e){return Object.assign({},e)}},{key:"conversion",value:function(e){return Array.prototype.slice.apply(e)}},{key:"except",value:function(e,n){try{e()}catch(e){n(e)}}},{key:"rance",value:function(e,n,t){var r=this;return e.constructor===Function?this.except(function(){return t=new e(n)},function(o){/is not a constructor/.test(o.message)?r.except(function(){return t=e(n)},function(e){return console.error(e)}):console.error(o)}):t=e,t}},{key:"recursive",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.condition.shift();return Object.assign(this.proxy,this.rance(e,this.proxy)),this.condition.length?this.recursive():this}}]),e}()}])});