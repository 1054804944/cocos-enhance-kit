"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1866],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7892:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(7294),i=n(6010),a=n(9960),o=n(2802),c="cardContainer_S8oU",l="cardTitle_HoSo",u="cardDescription_c27F";n(5999);function s(e){var t=e.href,n=e.children;return r.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",c)},n)}function m(e){var t=e.href,n=e.icon,a=e.title,o=e.description;return r.createElement(s,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",l),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",u),title:o},o))}function p(e){var t,n=e.item,i=((0,o.xz)(null!=(t=n.docId)?t:void 0),(0,o.Wl)(n));return i?r.createElement(m,{href:i,icon:"",title:n.label,description:n.description}):null}function d(e){var t,n=e.item,i=(0,o.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(m,{href:n.href,icon:"",title:n.label,description:null==i?void 0:i.description})}function f(e){var t=e.item;switch(t.type){case"link":return r.createElement(d,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.items,n=e.className;return r.createElement("section",{className:(0,i.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,o.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{key:t,item:e}))})))}},2219:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=n(7892),c=n(2802),l=["components"],u={},s="\u591a\u7eb9\u7406\u6e32\u67d3",m={unversionedId:"user-guide/multi-render/multi-render-intro",id:"user-guide/multi-render/multi-render-intro",title:"\u591a\u7eb9\u7406\u6e32\u67d3",description:"\u591a\u7eb9\u7406\u6e32\u67d3\u5c5e\u5e95\u5c42\u8bbe\u65bd\uff0c\u5982\u679c\u4f60\u4e0d\u662f\u51c6\u5907\u624b\u52a8\u4f7f\u7528\u591a\u7eb9\u7406\u6750\u8d28\u6216\u8005\u591a\u7eb9\u7406\u5408\u6279\u7ba1\u7406\u5668\u7684\u8bdd\uff0c\u8bf7\u8df3\u8fc7\u672c\u7279\u6027\u6587\u6863\u3002",source:"@site/docs/user-guide/multi-render/multi-render-intro.mdx",sourceDirName:"user-guide/multi-render",slug:"/user-guide/multi-render/multi-render-intro",permalink:"/cocos-enhance-kit/docs/next/user-guide/multi-render/multi-render-intro",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u6307\u5357",permalink:"/cocos-enhance-kit/docs/next/user-guide/user-guide-intro"},next:{title:"\u591a\u7eb9\u7406\u6750\u8d28",permalink:"/cocos-enhance-kit/docs/next/user-guide/multi-render/multi-material"}},p={},d=[],f={toc:d};function v(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u591a\u7eb9\u7406\u6e32\u67d3"},"\u591a\u7eb9\u7406\u6e32\u67d3"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u591a\u7eb9\u7406\u6e32\u67d3\u5c5e\u5e95\u5c42\u8bbe\u65bd\uff0c\u5982\u679c\u4f60\u4e0d\u662f\u51c6\u5907\u624b\u52a8\u4f7f\u7528\u591a\u7eb9\u7406\u6750\u8d28\u6216\u8005\u591a\u7eb9\u7406\u5408\u6279\u7ba1\u7406\u5668\u7684\u8bdd\uff0c\u8bf7\u8df3\u8fc7\u672c\u7279\u6027\u6587\u6863\u3002"))),(0,a.kt)("p",null,"\u591a\u7eb9\u7406\u6e32\u67d3\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/cocos-enhance-kit/docs/next/start-guide/batcher-guide#%E4%BB%80%E4%B9%88%E6%98%AF%E5%A4%9A%E7%BA%B9%E7%90%86%E6%B8%B2%E6%9F%93"},"\u65b0 UI \u6e32\u67d3\u6279\u6b21\u5408\u5e76\u6307\u5357")," \u4e2d\u6709\u6240\u4ecb\u7ecd\u3002"),(0,a.kt)("p",null,"\u5176\u539f\u7406\u975e\u5e38\u7b80\u5355\uff0c\u5e76\u4e14\u4e3a\u4e86\u8ba9\u5b83\u80fd\u4ee5\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u5728\u5f15\u64ce\u4e2d\u4f7f\u7528\uff0c\u5df2\u7ecf\u5728\u5185\u90e8\u505a\u597d\u4e86\u5c01\u88c5\uff1a"),(0,a.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u652f\u6301\u7684\u6e32\u67d3\u7ec4\u4ef6")),(0,a.kt)("p",{parentName:"li"},"  cc.Sprite\u3001cc.Label\u3001cc.RichText\u3001cc.MotionSteak\u3001Spine \u7ec4\u4ef6\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u652f\u6301\u7684\u6e32\u67d3\u7ec4\u4ef6")),(0,a.kt)("p",{parentName:"li"},"  cc.ParticleSystem\u3001TiledMap \u7ec4\u4ef6\uff1a\u8fd9\u4e24\u4e2a\u7ec4\u4ef6\u5f53\u524d\u7684\u5f15\u64ce\u5b9e\u73b0\u4f1a\u5f3a\u5236\u6253\u65ad\u5408\u6279\uff0c\u6682\u65f6\u4e0d\u652f\u6301\u3002"),(0,a.kt)("p",{parentName:"li"},"  DragonBones \u7ec4\u4ef6\uff1a\u56e0\u4eba\u529b\u6709\u9650\uff0c\u5e76\u4e14\u8fd9\u4e2a\u7ec4\u4ef6\u4e0e Spine \u7ec4\u4ef6\u53ef\u4ee5\u76f8\u4e92\u4ee3\u66ff\uff0c\u6240\u4ee5\u6682\u65f6\u4e0d\u652f\u6301\u8be5\u7ec4\u4ef6\u3002"))))))}v.isMDXComponent=!0}}]);