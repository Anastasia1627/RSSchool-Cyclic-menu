!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=n(0);class s{start(){const e=r.DOM.createElement("nav"),t=r.DOM.createDocumentFragment();Object.keys(r.items).forEach((e,n)=>{const s=r.DOM.createElement("a");s.setAttribute("href",r.items[e]),s.id=`menuLink_${n}`,s.classList.add("menuLink"),s.innerHTML=`${e.toUpperCase()}`,0===n&&s.classList.add("active"),t.appendChild(s)}),r.targetTag.appendChild(e),e.classList.add("keyboardMenu"),e.appendChild(t)}}class i{change(e,t){e.classList.toggle("active"),t.classList.toggle("active")}}const o=n(0);class c{constructor(){this.currentIndex=0,this.style=new i,this.maxIndex=Object.keys(o.items).length}decrementIndex(e){return(e-1+this.maxIndex)%this.maxIndex}incrementIndex(e){return(e+1)%this.maxIndex}controls(e){const t=o.DOM.getElementById(`menuLink_${this.currentIndex}`);if("ArrowLeft"===e.key){const e=this.decrementIndex(this.currentIndex),n=o.DOM.getElementById(`menuLink_${e}`);this.style.change(t,n),this.currentIndex=e}else if("ArrowRight"===e.key||"Enter"===e.key){const e=this.incrementIndex(this.currentIndex),n=o.DOM.getElementById(`menuLink_${e}`);this.style.change(t,n),this.currentIndex=e}}}const a=n(0);n.d(t,"items",function(){return d}),n.d(t,"targetTag",function(){return l}),n.d(t,"DOM",function(){return u});const d={main:"#",search:"#",library:"#",settings:"#"},u=window.document,l=u.querySelector("body");(new class{buildHandler(){const e=new c;this.handlerKeyboard=function(t){e.controls(t)}}create(){(new s).start(),this.buildHandler(),a.DOM.addEventListener("keydown",this.handlerKeyboard)}delete(){a.DOM.removeEventListener("keydown",this.handlerKeyboard);const e=a.DOM.querySelector(".keyboardMenu");a.targetTag.removeChild(e)}}).create()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hhbmRsZXJLZXlib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImNvbmZpZyIsIlJlbmRlciIsIltvYmplY3QgT2JqZWN0XSIsIm5hdmlnYXRpb24iLCJET00iLCJjcmVhdGVFbGVtZW50IiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50Iiwia2V5cyIsIml0ZW1zIiwiZm9yRWFjaCIsImVsZW0iLCJpbmRleCIsImxpbmtJdGVtIiwic2V0QXR0cmlidXRlIiwiaWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJ0b1VwcGVyQ2FzZSIsImFwcGVuZENoaWxkIiwidGFyZ2V0VGFnIiwiU3R5bGUiLCJjdXJyIiwibmV4dCIsInRvZ2dsZSIsImhhbmRsZXJLZXlib2FyZF9jb25maWciLCJoYW5kbGVyS2V5Ym9hcmRfSGFuZGxlcktleWJvYXJkIiwidGhpcyIsImN1cnJlbnRJbmRleCIsInN0eWxlIiwibWF4SW5kZXgiLCJsZW5ndGgiLCJldmVudCIsImN1cnJlbnRJdGVtIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0YXJnZXRJbmRleCIsImRlY3JlbWVudEluZGV4IiwibmV4dEl0ZW0iLCJjaGFuZ2UiLCJpbmNyZW1lbnRJbmRleCIsIm1lbnVfY29uZmlnIiwiX193ZWJwYWNrX2V4cG9ydHNfXyIsIm1haW4iLCJzZWFyY2giLCJsaWJyYXJ5Iiwic2V0dGluZ3MiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYW5kbGVyIiwiaGFuZGxlcktleWJvYXJkIiwiZSIsImNvbnRyb2xzIiwic3RhcnQiLCJidWlsZEhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxFQUFBLEdBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFDLFFBR0EsSUFBQUMsRUFBQUosRUFBQUUsR0FBQSxDQUNBRyxFQUFBSCxFQUNBSSxHQUFBLEVBQ0FILFFBQUEsSUFVQSxPQU5BSSxFQUFBTCxHQUFBTSxLQUFBSixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBRixHQUdBRyxFQUFBRSxHQUFBLEVBR0FGLEVBQUFELFFBS0FGLEVBQUFRLEVBQUFGLEVBR0FOLEVBQUFTLEVBQUFWLEVBR0FDLEVBQUFVLEVBQUEsU0FBQVIsRUFBQVMsRUFBQUMsR0FDQVosRUFBQWEsRUFBQVgsRUFBQVMsSUFDQUcsT0FBQUMsZUFBQWIsRUFBQVMsRUFBQSxDQUEwQ0ssWUFBQSxFQUFBQyxJQUFBTCxLQUsxQ1osRUFBQWtCLEVBQUEsU0FBQWhCLEdBQ0Esb0JBQUFpQixlQUFBQyxhQUNBTixPQUFBQyxlQUFBYixFQUFBaUIsT0FBQUMsWUFBQSxDQUF3REMsTUFBQSxXQUV4RFAsT0FBQUMsZUFBQWIsRUFBQSxjQUFpRG1CLE9BQUEsS0FRakRyQixFQUFB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RUEsTUFBQUssRUFBQSxDQUNBa0MsS0FBQSxJQUNBQyxPQUFBLElBQ0FDLFFBQUEsSUFDQUMsU0FBQSxLQUdBMUMsRUFBQTJDLE9BQUFDLFNBQ0EzQixFQUFBakIsRUFBQTZDLGNBQUEsU0FLQSxJRFRBLE1BQ0EvQyxlQUNBLE1BQUFnRCxFQUFBLElBQTRCdkIsRUFDNUJDLEtBQUF1QixnQkFBQSxTQUFBQyxHQUNBRixFQUFBRyxTQUFBRCxJQUlBbEQsVUFDQSxJQUEyQkQsR0FDM0JxRCxRQUNBMUIsS0FBQTJCLGVBQ1FkLEVBQU1yQyxJQUFBb0QsaUJBQUEsVUFBQTVCLEtBQUF1QixpQkFHZGpELFNBQ1F1QyxFQUFNckMsSUFBQXFELG9CQUFBLFVBQUE3QixLQUFBdUIsaUJBQ2QsTUFBQWhELEVBQTJCc0MsRUFBTXJDLElBQUE2QyxjQUFBLGlCQUN6QlIsRUFBTXBCLFVBQUFxQyxZQUFBdkQsTUNSZGIiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcblxuY2xhc3MgUmVuZGVyIHtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbiA9IGNvbmZpZy5ET00uY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gY29uZmlnLkRPTS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIGNvbnN0IGFycmF5ID0gT2JqZWN0LmtleXMoY29uZmlnLml0ZW1zKTtcbiAgICAgICAgYXJyYXkuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmtJdGVtID0gY29uZmlnLkRPTS5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBsaW5rSXRlbS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBjb25maWcuaXRlbXNbZWxlbV0pO1xuICAgICAgICAgICAgbGlua0l0ZW0uaWQgPSBgbWVudUxpbmtfJHtpbmRleH1gO1xuICAgICAgICAgICAgbGlua0l0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudUxpbmsnKTtcbiAgICAgICAgICAgIGxpbmtJdGVtLmlubmVySFRNTCA9IGAke2VsZW0udG9VcHBlckNhc2UoKX1gO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbGlua0l0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChsaW5rSXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25maWcudGFyZ2V0VGFnLmFwcGVuZENoaWxkKG5hdmlnYXRpb24pO1xuICAgICAgICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkTWVudScpO1xuICAgICAgICBuYXZpZ2F0aW9uLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFJlbmRlciB9O1xuIiwiY2xhc3MgU3R5bGUge1xuICAgIGNoYW5nZShjdXJyLCBuZXh0KSB7XG4gICAgICAgIGN1cnIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIG5leHQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBTdHlsZSB9O1xuIiwiaW1wb3J0IHsgU3R5bGUgfSBmcm9tICcuL3N0eWxlJztcblxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuXG5jbGFzcyBIYW5kbGVyS2V5Ym9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBuZXcgU3R5bGUoKTtcbiAgICAgICAgdGhpcy5tYXhJbmRleCA9IE9iamVjdC5rZXlzKGNvbmZpZy5pdGVtcykubGVuZ3RoO1xuICAgIH1cblxuICAgIGRlY3JlbWVudEluZGV4KGN1cnJlbnRJbmRleCkge1xuICAgICAgICByZXR1cm4gKGN1cnJlbnRJbmRleCAtIDEgKyB0aGlzLm1heEluZGV4KSAlIHRoaXMubWF4SW5kZXg7XG4gICAgfVxuXG4gICAgaW5jcmVtZW50SW5kZXgoY3VycmVudEluZGV4KSB7XG4gICAgICAgIHJldHVybiAoY3VycmVudEluZGV4ICsgMSkgJSB0aGlzLm1heEluZGV4O1xuICAgIH1cblxuICAgIGNvbnRyb2xzKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gY29uZmlnLkRPTS5nZXRFbGVtZW50QnlJZChgbWVudUxpbmtfJHt0aGlzLmN1cnJlbnRJbmRleH1gKTtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gdGhpcy5kZWNyZW1lbnRJbmRleCh0aGlzLmN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBjb25zdCBuZXh0SXRlbSA9IGNvbmZpZy5ET00uZ2V0RWxlbWVudEJ5SWQoYG1lbnVMaW5rXyR7dGFyZ2V0SW5kZXh9YCk7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmNoYW5nZShjdXJyZW50SXRlbSwgbmV4dEl0ZW0pO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSB0YXJnZXRJbmRleDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0JyB8fCBldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gdGhpcy5pbmNyZW1lbnRJbmRleCh0aGlzLmN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBjb25zdCBuZXh0SXRlbSA9IGNvbmZpZy5ET00uZ2V0RWxlbWVudEJ5SWQoYG1lbnVMaW5rXyR7dGFyZ2V0SW5kZXh9YCk7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmNoYW5nZShjdXJyZW50SXRlbSwgbmV4dEl0ZW0pO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSB0YXJnZXRJbmRleDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgSGFuZGxlcktleWJvYXJkIH07XG4iLCJpbXBvcnQgeyBSZW5kZXIgfSBmcm9tICcuL3JlbmRlcic7XG5pbXBvcnQgeyBIYW5kbGVyS2V5Ym9hcmQgfSBmcm9tICcuL2hhbmRsZXJLZXlib2FyZCc7XG5cbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcblxuXG5jbGFzcyBNZW51IHtcbiAgICBidWlsZEhhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBuZXcgSGFuZGxlcktleWJvYXJkKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlcktleWJvYXJkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGhhbmRsZXIuY29udHJvbHMoZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlciA9IG5ldyBSZW5kZXIoKTtcbiAgICAgICAgcmVuZGVyLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuYnVpbGRIYW5kbGVyKCk7XG4gICAgICAgIGNvbmZpZy5ET00uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlcktleWJvYXJkKTtcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIGNvbmZpZy5ET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlcktleWJvYXJkKTtcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbiA9IGNvbmZpZy5ET00ucXVlcnlTZWxlY3RvcignLmtleWJvYXJkTWVudScpO1xuICAgICAgICBjb25maWcudGFyZ2V0VGFnLnJlbW92ZUNoaWxkKG5hdmlnYXRpb24pO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgTWVudSB9O1xuIiwiaW1wb3J0IHsgTWVudSB9IGZyb20gJy4vbWVudSc7XG5cbmNvbnN0IGl0ZW1zID0ge1xuICAgIG1haW46ICcjJyxcbiAgICBzZWFyY2g6ICcjJyxcbiAgICBsaWJyYXJ5OiAnIycsXG4gICAgc2V0dGluZ3M6ICcjJyxcbn07XG5cbmNvbnN0IERPTSA9IHdpbmRvdy5kb2N1bWVudDtcbmNvbnN0IHRhcmdldFRhZyA9IERPTS5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmV4cG9ydCB7IGl0ZW1zLCB0YXJnZXRUYWcsIERPTSB9O1xuXG5cbmNvbnN0IG1lbnUgPSBuZXcgTWVudSgpO1xubWVudS5jcmVhdGUoKTtcbi8vIG1lbnUuZGVsZXRlKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9