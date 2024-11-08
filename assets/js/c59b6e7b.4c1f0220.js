"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9598],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},67892:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(67294),i=n(86010),o=n(39960),a=n(52802),c="cardContainer_S8oU",l="cardTitle_HoSo",u="cardDescription_c27F";n(95999);function s(e){var t=e.href,n=e.children;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",c)},n)}function p(e){var t=e.href,n=e.icon,o=e.title,a=e.description;return r.createElement(s,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",l),title:o},n," ",o),a&&r.createElement("p",{className:(0,i.Z)("text--truncate",u),title:a},a))}function f(e){var t,n=e.item,i=((0,a.xz)(null!=(t=n.docId)?t:void 0),(0,a.Wl)(n));return i?r.createElement(p,{href:i,icon:"",title:n.label,description:n.description}):null}function m(e){var t,n=e.item,i=(0,a.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(p,{href:n.href,icon:"",title:n.label,description:null==i?void 0:i.description})}function d(e){var t=e.item;switch(t.type){case"link":return r.createElement(m,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.items,n=e.className;return r.createElement("section",{className:(0,i.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,a.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(d,{key:t,item:e}))})))}},5397:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=n(67892),c=n(52802),l=["components"],u={},s="\u5b89\u88c5\u6307\u5357",p={unversionedId:"installation-guide/installation-intro",id:"version-1.1.0/installation-guide/installation-intro",title:"\u5b89\u88c5\u6307\u5357",description:"\u589e\u5f3a\u5305\u4e3b\u8981\u4f7f\u7528 \u81ea\u5b9a\u4e49\u5f15\u64ce \u7684\u65b9\u5f0f\u5bf9\u5f15\u64ce\u8fdb\u884c\u4fee\u6539\u3002",source:"@site/versioned_docs/version-1.1.0/installation-guide/installation-intro.mdx",sourceDirName:"installation-guide",slug:"/installation-guide/installation-intro",permalink:"/cocos-enhance-kit/docs/1.1.0/installation-guide/installation-intro",draft:!1,tags:[],version:"1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/cocos-enhance-kit/docs/1.1.0/intro"},next:{title:"\u4f7f\u7528\u5f15\u64ce\u6269\u5c55\u5b89\u88c5",permalink:"/cocos-enhance-kit/docs/1.1.0/installation-guide/installation-engine-plugin"}},f={},m=[],d={toc:m};function y(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5b89\u88c5\u6307\u5357"},"\u5b89\u88c5\u6307\u5357"),(0,o.kt)("p",null,"\u589e\u5f3a\u5305\u4e3b\u8981\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cocos.com/creator/2.4/manual/zh/advanced-topics/engine-customization.html"},"\u81ea\u5b9a\u4e49\u5f15\u64ce")," \u7684\u65b9\u5f0f\u5bf9\u5f15\u64ce\u8fdb\u884c\u4fee\u6539\u3002"),(0,o.kt)("p",null,"\u4f46\u7531\u4e8e\u81ea\u5b9a\u4e49\u5f15\u64ce\u4e0d\u80fd\u6dfb\u52a0\u5185\u7f6e\u8d44\u6e90\u4e0e\u6269\u5c55\u5185\u7f6e\u7ec4\u4ef6\u7684 Inspector\uff0c\u6240\u4ee5\u8fd8\u9700\u8981\u5b89\u88c5\u914d\u5957\u7684\u5f15\u64ce\u6269\u5c55\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528 TypeScript \u7684\u9879\u76ee\uff0c\u589e\u5f3a\u5305\u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"creator-sp.d.ts")," \u7c7b\u578b\u63d0\u793a\u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e24\u79cd\u5e38\u7528\u7684\u5b89\u88c5\u65b9\u5f0f\uff1a"),(0,o.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);