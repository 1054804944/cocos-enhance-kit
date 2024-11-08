"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[429],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},67892:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(67294),o=r(86010),i=r(39960),c=r(52802),a="cardContainer_S8oU",u="cardTitle_HoSo",l="cardDescription_c27F";r(95999);function s(e){var t=e.href,r=e.children;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",a)},r)}function f(e){var t=e.href,r=e.icon,i=e.title,c=e.description;return n.createElement(s,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",u),title:i},r," ",i),c&&n.createElement("p",{className:(0,o.Z)("text--truncate",l),title:c},c))}function p(e){var t,r=e.item,o=((0,c.xz)(null!=(t=r.docId)?t:void 0),(0,c.Wl)(r));return o?n.createElement(f,{href:o,icon:"",title:r.label,description:r.description}):null}function d(e){var t,r=e.item,o=(0,c.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(f,{href:r.href,icon:"",title:r.label,description:null==o?void 0:o.description})}function m(e){var t=e.item;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.items,r=e.className;return n.createElement("section",{className:(0,o.Z)("row",r)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,c.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(m,{key:t,item:e}))})))}},7740:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return f},toc:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c=r(67892),a=r(52802),u=["components"],l={},s="\u5165\u95e8\u6307\u5357",f={unversionedId:"start-guide/start-guide-intro",id:"version-1.0.0/start-guide/start-guide-intro",title:"\u5165\u95e8\u6307\u5357",description:"\u8fd9\u4e2a\u6559\u7a0b\u4f1a\u7b80\u5355\u5730\u4ecb\u7ecd\u5982\u4f55\u5229\u7528\u589e\u5f3a\u5305\u63d0\u4f9b\u7684\u65b0\u7279\u6027\u6765\u66f4\u597d\u5730\u4f7f\u7528 Cocos Creator \u5f15\u64ce\uff1a",source:"@site/versioned_docs/version-1.0.0/start-guide/start-guide-intro.mdx",sourceDirName:"start-guide",slug:"/start-guide/start-guide-intro",permalink:"/cocos-enhance-kit/docs/1.0.0/start-guide/start-guide-intro",draft:!1,tags:[],version:"1.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u624b\u52a8\u5b89\u88c5",permalink:"/cocos-enhance-kit/docs/1.0.0/installation-guide/installation-manual"},next:{title:"\u65b0 UI \u6e32\u67d3\u6279\u6b21\u5408\u5e76\u6307\u5357",permalink:"/cocos-enhance-kit/docs/1.0.0/start-guide/batcher-guide"}},p={},d=[],m={toc:d};function y(e){var t=e.components,r=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5165\u95e8\u6307\u5357"},"\u5165\u95e8\u6307\u5357"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u6559\u7a0b\u4f1a\u7b80\u5355\u5730\u4ecb\u7ecd\u5982\u4f55\u5229\u7528\u589e\u5f3a\u5305\u63d0\u4f9b\u7684\u65b0\u7279\u6027\u6765\u66f4\u597d\u5730\u4f7f\u7528 Cocos Creator \u5f15\u64ce\uff1a"),(0,i.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);