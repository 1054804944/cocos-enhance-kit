"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7564],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,f=d["".concat(p,".").concat(m)]||d[m]||l[m]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},53329:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],c={sidebar_position:2,description:"\u50cf\u5176\u5b83\u6e32\u67d3\u7ec4\u4ef6\u4e00\u6837\u5728 Spine \u7ec4\u4ef6\u4e0a\u4f7f\u7528\u52a8\u6001\u5408\u56fe\u3002"},p="\u52a8\u6001\u5408\u56fe",s={unversionedId:"user-guide/spine/spine-batch",id:"user-guide/spine/spine-batch",title:"\u52a8\u6001\u5408\u56fe",description:"\u50cf\u5176\u5b83\u6e32\u67d3\u7ec4\u4ef6\u4e00\u6837\u5728 Spine \u7ec4\u4ef6\u4e0a\u4f7f\u7528\u52a8\u6001\u5408\u56fe\u3002",source:"@site/docs/user-guide/spine/spine-batch.md",sourceDirName:"user-guide/spine",slug:"/user-guide/spine/spine-batch",permalink:"/cocos-enhance-kit/docs/next/user-guide/spine/spine-batch",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"\u50cf\u5176\u5b83\u6e32\u67d3\u7ec4\u4ef6\u4e00\u6837\u5728 Spine \u7ec4\u4ef6\u4e0a\u4f7f\u7528\u52a8\u6001\u5408\u56fe\u3002"},sidebar:"tutorialSidebar",previous:{title:"Spine",permalink:"/cocos-enhance-kit/docs/next/user-guide/spine/spine-intro"},next:{title:"SpriteFrame \u6362\u88c5",permalink:"/cocos-enhance-kit/docs/next/user-guide/spine/spine-skin"}},u={},l=[],d={toc:l};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u52a8\u6001\u5408\u56fe"},"\u52a8\u6001\u5408\u56fe"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u50cf\u5176\u5b83\u6e32\u67d3\u7ec4\u4ef6\u4e00\u6837\u5728 Spine \u7ec4\u4ef6\u4e0a\u4f7f\u7528\u52a8\u6001\u5408\u56fe\uff0c\u5982\u679c\u60f3\u4e86\u89e3\u6709\u5173\u52a8\u6001\u5408\u56fe\u7684\u66f4\u591a\u8be6\u60c5\uff0c\u53ef\u4ee5\u9605\u8bfb ",(0,o.kt)("a",{parentName:"p",href:"../dynamic-batcher/dynamic-batcher-intro"},"\u52a8\u6001\u5408\u56fe")," \u6587\u6863\u3002"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u7531\u4e8e\u5f15\u64ce\u5b9e\u73b0\u5dee\u5f02\uff0c\u5728\u539f\u751f\u5e73\u53f0\u4e0a Spine \u6682\u4e0d\u652f\u6301\u4e0e\u5176\u5b83\u7ec4\u4ef6\u5408\u6279\u3002"))))}m.isMDXComponent=!0}}]);