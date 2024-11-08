"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[642],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=s(r),m=o,f=l["".concat(u,".").concat(m)]||l[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},54828:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={sidebar_position:2,description:"\u5728\u591a\u7ebf\u7a0b\u4e2d\u64cd\u4f5c\u97f3\u9891\u3002"},u="\u97f3\u9891\u7cfb\u7edf",s={unversionedId:"user-guide/multithread/thread-audio-system",id:"version-2.0.0/user-guide/multithread/thread-audio-system",title:"\u97f3\u9891\u7cfb\u7edf",description:"\u5728\u591a\u7ebf\u7a0b\u4e2d\u64cd\u4f5c\u97f3\u9891\u3002",source:"@site/versioned_docs/version-2.0.0/user-guide/multithread/thread-audio-system.md",sourceDirName:"user-guide/multithread",slug:"/user-guide/multithread/thread-audio-system",permalink:"/cocos-enhance-kit/docs/2.0.0/user-guide/multithread/thread-audio-system",draft:!1,tags:[],version:"2.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"\u5728\u591a\u7ebf\u7a0b\u4e2d\u64cd\u4f5c\u97f3\u9891\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u8d44\u6e90\u7ba1\u7ebf",permalink:"/cocos-enhance-kit/docs/2.0.0/user-guide/multithread/thread-asset-pipeline"},next:{title:"\u7834\u574f\u6027\u53d8\u66f4",permalink:"/cocos-enhance-kit/docs/2.0.0/breaking-change"}},d={},p=[],l={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u97f3\u9891\u7cfb\u7edf"},"\u97f3\u9891\u7cfb\u7edf"),(0,a.kt)("p",null,"\u4f9d\u6b21\u70b9\u51fb\u7f16\u8f91\u5668\u7684\u83dc\u5355\u9879 ",(0,a.kt)("strong",{parentName:"p"},"\u9879\u76ee - \u793e\u533a\u7248\u8bbe\u7f6e"),"\uff0c\u7136\u540e\u52fe\u9009 ",(0,a.kt)("strong",{parentName:"p"},"\u591a\u7ebf\u7a0b\u9a71\u52a8\u97f3\u9891\u7cfb\u7edf"),"\uff0c\u5373\u53ef\u542f\u7528\u8fd9\u4e00\u7279\u6027\u3002"),(0,a.kt)("p",null,"\u542f\u7528\u540e\uff0c\u97f3\u9891\u7684\u6240\u6709\u64cd\u4f5c\u90fd\u4f1a\u5728 Worker \u7ebf\u7a0b\u4e2d\u6267\u884c\uff0c\u5b8c\u5168\u91ca\u653e\u5bf9\u4e3b\u7ebf\u7a0b\u7684\u5360\u7528\u3002"),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u8be5\u7279\u6027\u6b63\u5728\u5f00\u53d1\u4e2d\uff0c\u8bf7\u52ff\u542f\u7528\u3002"))))}m.isMDXComponent=!0}}]);