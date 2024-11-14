"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8654],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=l(r),p=o,m=f["".concat(u,".").concat(p)]||f[p]||d[p]||i;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},67892:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(67294),o=r(86010),i=r(39960),c=r(52802),a="cardContainer_S8oU",u="cardTitle_HoSo",l="cardDescription_c27F";r(95999);function s(e){var t=e.href,r=e.children;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",a)},r)}function d(e){var t=e.href,r=e.icon,i=e.title,c=e.description;return n.createElement(s,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",u),title:i},r," ",i),c&&n.createElement("p",{className:(0,o.Z)("text--truncate",l),title:c},c))}function f(e){var t,r=e.item,o=((0,c.xz)(null!=(t=r.docId)?t:void 0),(0,c.Wl)(r));return o?n.createElement(d,{href:o,icon:"",title:r.label,description:r.description}):null}function p(e){var t,r=e.item,o=(0,c.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(d,{href:r.href,icon:"",title:r.label,description:null==o?void 0:o.description})}function m(e){var t=e.item;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.items,r=e.className;return n.createElement("section",{className:(0,o.Z)("row",r)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,c.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(m,{key:t,item:e}))})))}},29724:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c=r(67892),a=r(52802),u=["components"],l={},s="\u6587\u672c\u6e32\u67d3",d={unversionedId:"user-guide/text-render/text-render-intro",id:"version-2.2.0/user-guide/text-render/text-render-intro",title:"\u6587\u672c\u6e32\u67d3",description:"\u6587\u672c\u6e32\u67d3\u4e00\u822c\u662f\u6e38\u620f\u6027\u80fd\u4f18\u5316\u9700\u8981\u91cd\u70b9\u5173\u6ce8\u7684\u5730\u65b9\uff0c\u5e76\u4e14\u5176\u663e\u793a\u6548\u679c\u4e5f\u975e\u5e38\u91cd\u8981\uff0c\u6240\u4ee5\u793e\u533a\u7248\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u65b0\u7279\u6027\uff1a",source:"@site/versioned_docs/version-2.2.0/user-guide/text-render/text-render-intro.mdx",sourceDirName:"user-guide/text-render",slug:"/user-guide/text-render/text-render-intro",permalink:"/cocos-enhance-kit/docs/2.2.0/user-guide/text-render/text-render-intro",draft:!1,tags:[],version:"2.2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u591a\u7eb9\u7406\u5408\u6279",permalink:"/cocos-enhance-kit/docs/2.2.0/user-guide/multi-render/multi-batcher"},next:{title:"Char \u7f13\u5b58\u6a21\u5f0f",permalink:"/cocos-enhance-kit/docs/2.2.0/user-guide/text-render/text-char-mode"}},f={},p=[],m={toc:p};function y(e){var t=e.components,r=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6587\u672c\u6e32\u67d3"},"\u6587\u672c\u6e32\u67d3"),(0,i.kt)("p",null,"\u6587\u672c\u6e32\u67d3\u4e00\u822c\u662f\u6e38\u620f\u6027\u80fd\u4f18\u5316\u9700\u8981\u91cd\u70b9\u5173\u6ce8\u7684\u5730\u65b9\uff0c\u5e76\u4e14\u5176\u663e\u793a\u6548\u679c\u4e5f\u975e\u5e38\u91cd\u8981\uff0c\u6240\u4ee5\u793e\u533a\u7248\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u65b0\u7279\u6027\uff1a"),(0,i.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);