(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,i=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,i){var r=e&&e.prototype instanceof y?e:y,o=Object.create(r.prototype),a=new O(i||[]);return o._invoke=function(t,e,n){var i=h;return function(r,o){if(i===d)throw new Error("Generator is already running");if(i===v){if("throw"===r)throw o;return A()}for(n.method=r,n.arg=o;;){var a=n.delegate;if(a){var s=x(a,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=d;var c=l(t,e,n);if("normal"===c.type){if(i=n.done?v:f,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=v,n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",v="completed",p={};function y(){}function m(){}function g(){}var b={};c(b,o,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(S([])));k&&k!==n&&i.call(k,o)&&(b=k);var L=g.prototype=y.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function M(t,e){function n(r,o,a,s){var c=l(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var r;this._invoke=function(t,i){function o(){return new e((function(e,r){n(t,i,e,r)}))}return r=r?r.then(o,o):o()}}function x(t,n){var i=t.iterator[n.method];if(i===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,x(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=l(i,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,p;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function S(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function n(){for(;++r<t.length;)if(i.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:A}}function A(){return{value:e,done:!0}}return m.prototype=g,c(L,"constructor",g),c(g,"constructor",m),m.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(M.prototype),c(M.prototype,a,(function(){return this})),t.AsyncIterator=M,t.async=function(e,n,i,r,o){void 0===o&&(o=Promise);var a=new M(u(e,n,i,r),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),c(L,s,"Generator"),c(L,o,(function(){return this})),c(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},t.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(i,r){return s.type="throw",s.arg=t,n.next=i,r&&(n.method="next",n.arg=e),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;C(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,i){return this.delegate={iterator:S(t),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}var r=function(){function e(n,i){t(this,e),this.linksInternos=document.querySelectorAll(n),this.options=void 0===i?{behavior:"smooth",block:"start"}:i,this.scrollToSection=this.scrollToSection.bind(this)}return i(e,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.linksInternos.length&&this.addLinkEvent(),this}}]),e}(),o=function(){function e(n){t(this,e),this.accordionList=document.querySelectorAll(n),this.activeClass="active"}return i(e,[{key:"toggleAccordion",value:function(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}},{key:"addAccordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",(function(){t.toggleAccordion(e)}))}))}},{key:"init",value:function(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}]),e}(),a=function(){function e(n,i){t(this,e),this.activeClass="active",this.tabMenu=document.querySelectorAll(n),this.tabContent=document.querySelectorAll(i)}return i(e,[{key:"activeTab",value:function(t){var e=this;this.tabContent.forEach((function(t){t.classList.remove(e.activeClass)}));var n=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,n)}},{key:"addTabNavEvent",value:function(){var t=this;this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){return t.activeTab(n)}))}))}},{key:"init",value:function(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}]),e}(),s=function(){function e(n,i,r){t(this,e),this.activeClass="active",this.buttonOpen=document.querySelector(n),this.buttonClose=document.querySelector(i),this.containerModal=document.querySelector(r),this.eventToggleModal=this.eventToggleModal.bind(this),this.clickOutside=this.clickOutside.bind(this)}return i(e,[{key:"toggleModal",value:function(){this.containerModal.classList.toggle(this.activeClass)}},{key:"eventToggleModal",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"clickOutside",value:function(t){t.target===this.containerModal&&this.toggleModal(t)}},{key:"addModalEvents",value:function(){this.buttonOpen.addEventListener("click",this.eventToggleModal),this.buttonClose.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.clickOutside)}},{key:"init",value:function(){return this.buttonOpen&&this.buttonClose&&this.containerModal&&this.addModalEvents(),this}}]),e}(),c=function(){function e(n){t(this,e),this.tooltips=document.querySelectorAll(n),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}return i(e,[{key:"onMouseMove",value:function(t){this.tooltipBox.style.top="".concat(t.pageY+20,"px"),t.pageX+240>window.innerWidth?this.tooltipBox.style.left="".concat(t.pageX-190,"px"):this.tooltipBox.style.left="".concat(t.pageX+20,"px")}},{key:"onMouseLeave",value:function(t){var e=t.currentTarget;this.tooltipBox.remove(),e.removeEventListener("mouseleave",this.onMouseLeave),e.removeEventListener("mousemove",this.onMouseMove)}},{key:"createTooltipBox",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");this.tooltipBox=e,e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e)}},{key:"onMouseOver",value:function(t){var e=t.currentTarget;this.createTooltipBox(e),e.addEventListener("mousemove",this.onMouseMove),e.addEventListener("mouseleave",this.onMouseLeave)}},{key:"addTooltipsEvent",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.tooltips.length&&this.addTooltipsEvent(),this}}]),e}();function u(t,e,n,i,r,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(i,r)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var o=t.apply(e,n);function a(t){u(o,i,r,a,s,"next",t)}function s(t){u(o,i,r,a,s,"throw",t)}a(void 0)}))}}var h=n(757),f=n.n(h),d=function(){function e(n,i,r){t(this,e),this.numbers=document.querySelectorAll(n),this.observerTarget=document.querySelector(i),this.observerClass=r,this.handleMutation=this.handleMutation.bind(this)}return i(e,[{key:"updateNumbers",value:function(){var t=this;this.numbers.forEach((function(e){t.constructor.addNumbers(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observerClass),this.observer.disconnect(),this.updateNumbers()}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}},{key:"init",value:function(){return this.numbers.length&&this.observerTarget&&this.addMutationObserver(),this}}],[{key:"addNumbers",value:function(t){var e=+t.innerText,n=Math.floor(e/100),i=0,r=setInterval((function(){i+=n,t.innerText=i,i>e&&(t.innerText=e,clearInterval(r))}),25*Math.random())}}]),e}();function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var p=function(){function e(n){t(this,e),this.activeClass="active",this.sections=document.querySelectorAll(n),this.windowHalf=.4*window.innerHeight,this.checkDistance=this.checkDistance.bind(this)}return i(e,[{key:"getDistance",value:function(){var t,e=this;this.distance=(t=this.sections,function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var n=t.offsetTop;return{element:t,offset:Math.floor(n-e.windowHalf)}}))}},{key:"checkDistance",value:function(){var t=this;this.distance.forEach((function(e){window.pageYOffset>e.offset?e.element.classList.add(t.activeClass):e.element.classList.contains(t.activeClass)&&e.element.classList.remove(t.activeClass)}))}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}}]),e}();function y(t,e,n){var i=document.documentElement,r="data-outside";function o(a){t.contains(a.target)||(t.removeAttribute(r),e.forEach((function(t){i.removeEventListener(t,o)})),n())}t.hasAttribute(r)||(e.forEach((function(t){setTimeout((function(){i.addEventListener(t,o)}))})),t.setAttribute(r,""))}var m=function(){function e(n,i){t(this,e),this.activeClass="active",this.dropdownMenu=document.querySelectorAll(n),this.events=void 0===i?["touch","click"]:i,this.dropdownMenuActive=this.dropdownMenuActive.bind(this)}return i(e,[{key:"dropdownMenuActive",value:function(t){var e=this;t.preventDefault();var n=t.currentTarget;n.classList.add(this.activeClass),y(n,this.events,(function(){n.classList.remove(e.activeClass)}))}},{key:"addDropdownMenuEvent",value:function(){var t=this;this.dropdownMenu.forEach((function(e){t.events.forEach((function(n){e.addEventListener(n,t.dropdownMenuActive)}))}))}},{key:"init",value:function(){return this.dropdownMenu.length&&this.addDropdownMenuEvent(),this}}]),e}(),g=function(){function e(n,i,r){t(this,e),this.activeClass="active",this.menuBtn=document.querySelector(n),this.menuList=document.querySelector(i),this.events=void 0===r?["touch","click"]:r,this.openMenu=this.openMenu.bind(this)}return i(e,[{key:"openMenu",value:function(){var t=this;this.menuList.classList.add(this.activeClass),this.menuBtn.classList.add(this.activeClass),y(this.menuList,this.events,(function(){t.menuList.classList.remove(t.activeClass),t.menuBtn.classList.remove(t.activeClass)}))}},{key:"addMenuMobileEvents",value:function(){var t=this;this.events.forEach((function(e){t.menuBtn.addEventListener(e,t.openMenu)}))}},{key:"init",value:function(){return this.menuBtn&&this.menuList&&this.addMenuMobileEvents(),this}}]),e}(),b=function(){function e(n,i){t(this,e),this.operation=document.querySelector(n),this.activeClass=i}return i(e,[{key:"operationData",value:function(){this.weekDay=this.operation.dataset.week.split(",").map(Number),this.weekShift=this.operation.dataset.shift.split(",").map(Number)}},{key:"dataFromNow",value:function(){this.dateNow=new Date,this.dayNow=this.dateNow.getDay(),this.timeNow=this.dateNow.getUTCHours()-3}},{key:"isItOpen",value:function(){var t=-1!==this.weekDay.indexOf(this.dayNow),e=this.timeNow>=this.weekShift[0]&&this.timeNow<this.weekShift[1];return t&&e}},{key:"open",value:function(){this.isItOpen()&&this.operation.classList.add(this.activeClass)}},{key:"init",value:function(){return this.operation&&(this.operationData(),this.dataFromNow(),this.open()),this}}]),e}();new r('[data-menu="smooth"] a[href^="#"]').init(),new o('[data-anime="accordion"] dt').init(),new a('[data-tab="menu"] li','[data-tab="content"] section').init(),new s('[data-modal="open"]','[data-modal="close"]','[data-modal="container"]').init(),new c("[data-tooltip]").init(),new p('[data-anime="scroll"]').init(),new m("[data-dropdown]").init(),new g('[data-menu="button"]','[data-menu="list"]').init(),new b("[data-week]","open").init(),function(t,e){var n=document.querySelector(".numbers-grid");function i(t){var e=function(t){var e=document.createElement("div");return e.classList.add("flowers-numbers"),e.innerHTML="<h3>".concat(t.specie,"</h3><span data-numbers>").concat(t.total,"</span>"),e}(t);n.appendChild(e)}function r(){new d("[data-numbers]",".numbers","active").init()}function o(){return(o=l(f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:e.sent.forEach((function(t){return i(t)})),r(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){o.apply(this,arguments)}()}("./flowersAPI.json"),fetch("https://blockchain.info/ticker").then((function(t){return t.json()})).then((function(t){document.querySelector(".btc-price").innerText=(100/t.BRL.sell).toFixed(4)})).catch((function(t){console.log(Error(t))}))})()})();