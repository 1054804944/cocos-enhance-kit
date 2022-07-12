"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2325],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7892:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(7294),o=n(6010),i=n(9960),a=n(2802),c="cardContainer_S8oU",u="cardTitle_HoSo",l="cardDescription_c27F";n(5999);function s(e){var t=e.href,n=e.children;return r.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",c)},n)}function d(e){var t=e.href,n=e.icon,i=e.title,a=e.description;return r.createElement(s,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",u),title:i},n," ",i),a&&r.createElement("p",{className:(0,o.Z)("text--truncate",l),title:a},a))}function p(e){var t,n=e.item,o=((0,a.xz)(null!=(t=n.docId)?t:void 0),(0,a.Wl)(n));return o?r.createElement(d,{href:o,icon:"",title:n.label,description:n.description}):null}function m(e){var t,n=e.item,o=(0,a.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(d,{href:n.href,icon:"",title:n.label,description:null==o?void 0:o.description})}function f(e){var t=e.item;switch(t.type){case"link":return r.createElement(m,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.items,n=e.className;return r.createElement("section",{className:(0,o.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,a.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{key:t,item:e}))})))}},2942:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=(n(7892),["components"]),c={},u="\u539f\u7406\u6587\u6863",l={unversionedId:"theory-guide/theory-guide-intro",id:"version-1.0.0/theory-guide/theory-guide-intro",title:"\u539f\u7406\u6587\u6863",description:"\u65bd\u5de5\u4e2d...",source:"@site/versioned_docs/version-1.0.0/theory-guide/theory-guide-intro.mdx",sourceDirName:"theory-guide",slug:"/theory-guide/theory-guide-intro",permalink:"/cocos-enhance-kit/docs/1.0.0/theory-guide/theory-guide-intro",draft:!1,tags:[],version:"1.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SpriteFrame \u6362\u88c5",permalink:"/cocos-enhance-kit/docs/1.0.0/user-guide/spine/spine-skin"},next:{title:"\u591a\u7eb9\u7406\u6e32\u67d3",permalink:"/cocos-enhance-kit/docs/1.0.0/theory-guide/multi-theory"}},s={},d=[],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u539f\u7406\u6587\u6863"},"\u539f\u7406\u6587\u6863"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"TODO")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u65bd\u5de5\u4e2d..."))))}m.isMDXComponent=!0}}]);