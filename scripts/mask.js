"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==("undefined"==typeof exports?"undefined":_typeof(exports))?require("jquery"):jQuery)}(function(e){var t,n=navigator.userAgent,a=/iphone/i.test(n),i=/chrome/i.test(n),r=/android/i.test(n);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(n,o){var c,f,u,l,s,m,h,d;if(!n&&this.length>0){c=e(this[0]);var g=c.data(e.mask.dataName);return g?g():void 0}return o=e.extend({autoclear:e.mask.autoclear,placeholder:e.mask.placeholder,completed:null},o),f=e.mask.definitions,u=[],l=h=n.length,s=null,e.each(n.split(""),function(e,t){"?"==t?(h--,l=e):f[t]?(u.push(new RegExp(f[t])),null===s&&(s=u.length-1),l>e&&(m=u.length-1)):u.push(null)}),this.trigger("unmask").each(function(){function c(){if(o.completed){for(var e=s;m>=e;e++)if(u[e]&&C[e]===g(e))return;o.completed.call(w)}}function g(e){return o.placeholder.charAt(e<o.placeholder.length?e:0)}function p(e){for(;++e<h&&!u[e];);return e}function v(e){for(;--e>=0&&!u[e];);return e}function b(e,t){var n,a;if(!(0>e)){for(n=e,a=p(t);h>n;n++)if(u[n]){if(!(h>a&&u[n].test(C[a])))break;C[n]=C[a],C[a]=g(a),a=p(a)}A(),w.caret(Math.max(s,e))}}function y(e){var t,n,a,i;for(t=e,n=g(e);h>t;t++)if(u[t]){if(a=p(t),i=C[t],C[t]=n,!(h>a&&u[a].test(i)))break;n=i}}function k(){var e=w.val(),t=w.caret();if(d&&d.length&&d.length>e.length){for(T(!0);t.begin>0&&!u[t.begin-1];)t.begin--;if(0===t.begin)for(;t.begin<s&&!u[t.begin];)t.begin++;w.caret(t.begin,t.begin)}else{for(T(!0);t.begin<h&&!u[t.begin];)t.begin++;w.caret(t.begin,t.begin)}c()}function S(){T(),w.val()!=E&&w.change()}function x(e){if(!w.prop("readonly")){var t,n,i,r=e.which||e.keyCode;d=w.val(),8===r||46===r||a&&127===r?(t=w.caret(),n=t.begin,i=t.end,i-n===0&&(n=46!==r?v(n):i=p(n-1),i=46===r?p(i):i),R(n,i),b(n,i-1),e.preventDefault()):13===r?S.call(this,e):27===r&&(w.val(E),w.caret(0,T()),e.preventDefault())}}function j(t){if(!w.prop("readonly")){var n,a,i,o=t.which||t.keyCode,f=w.caret();if(!(t.ctrlKey||t.altKey||t.metaKey||32>o)&&o&&13!==o){if(f.end-f.begin!==0&&(R(f.begin,f.end),b(f.begin,f.end-1)),n=p(f.begin-1),h>n&&(a=String.fromCharCode(o),u[n].test(a))){if(y(n),C[n]=a,A(),i=p(n),r){var l=function(){e.proxy(e.fn.caret,w,i)()};setTimeout(l,0)}else w.caret(i);f.begin<=m&&c()}t.preventDefault()}}}function R(e,t){var n;for(n=e;t>n&&h>n;n++)u[n]&&(C[n]=g(n))}function A(){w.val(C.join(""))}function T(e){var t,n,a,i=w.val(),r=-1;for(t=0,a=0;h>t;t++)if(u[t]){for(C[t]=g(t);a++<i.length;)if(n=i.charAt(a-1),u[t].test(n)){C[t]=n,r=t;break}if(a>i.length){R(t+1,h);break}}else C[t]===i.charAt(a)&&a++,l>t&&(r=t);return e?A():l>r+1?o.autoclear||C.join("")===D?(w.val()&&w.val(""),R(0,h)):A():(A(),w.val(w.val().substring(0,r+1))),l?t:s}var w=e(this),C=e.map(n.split(""),function(e,t){return"?"!=e?f[e]?g(t):e:void 0}),D=C.join(""),E=w.val();w.data(e.mask.dataName,function(){return e.map(C,function(e,t){return u[t]&&e!=g(t)?e:null}).join("")}),w.one("unmask",function(){w.off(".mask").removeData(e.mask.dataName)}).on("focus.mask",function(){if(!w.prop("readonly")){clearTimeout(t);var e;E=w.val(),e=T(),t=setTimeout(function(){w.get(0)===document.activeElement&&(A(),e==n.replace("?","").length?w.caret(0,e):w.caret(e))},10)}}).on("blur.mask",S).on("keydown.mask",x).on("keypress.mask",j).on("input.mask paste.mask",function(){w.prop("readonly")||setTimeout(function(){var e=T(!0);w.caret(e),c()},0)}),i&&r&&w.off("input.mask").on("input.mask",k),T()})}})});