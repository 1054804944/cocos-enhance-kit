"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3270],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=l(r),f=c,p=m["".concat(u,".").concat(f)]||m[f]||d[f]||i;return r?n.createElement(p,o(o({ref:t},s),{},{components:r})):n.createElement(p,o({ref:t},s))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=r.length,o=new Array(i);o[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:c,o[1]=a;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7892:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(7294),c=r(6010),i=r(9960),o=r(2802),a="cardContainer_S8oU",u="cardTitle_HoSo",l="cardDescription_c27F";r(5999);function s(e){var t=e.href,r=e.children;return n.createElement(i.Z,{href:t,className:(0,c.Z)("card padding--lg",a)},r)}function d(e){var t=e.href,r=e.icon,i=e.title,o=e.description;return n.createElement(s,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",u),title:i},r," ",i),o&&n.createElement("p",{className:(0,c.Z)("text--truncate",l),title:o},o))}function m(e){var t,r=e.item,c=((0,o.xz)(null!=(t=r.docId)?t:void 0),(0,o.Wl)(r));return c?n.createElement(d,{href:c,icon:"",title:r.label,description:r.description}):null}function f(e){var t,r=e.item,c=(0,o.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(d,{href:r.href,icon:"",title:r.label,description:null==c?void 0:c.description})}function p(e){var t=e.item;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.items,r=e.className;return n.createElement("section",{className:(0,c.Z)("row",r)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,o.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(p,{key:t,item:e}))})))}},4902:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return f}});var n=r(7462),c=r(3366),i=(r(7294),r(3905)),o=r(7892),a=r(2802),u=["components"],l={},s="\u52a8\u6001\u5408\u56fe",d={unversionedId:"user-guide/dynamic-batcher/dynamic-batcher-intro",id:"version-2.0.0/user-guide/dynamic-batcher/dynamic-batcher-intro",title:"\u52a8\u6001\u5408\u56fe",description:"\u52a8\u6001\u5408\u56fe\u662f\u4e00\u4e2a\u975e\u5e38\u597d\u7684\u5408\u6279\u624b\u6bb5\uff0c\u4f46\u662f\u5728\u4e4b\u524d\u5f15\u64ce\u5b9e\u73b0\u7684\u6bd4\u8f83\u7b80\u964b\uff0c\u6240\u4ee5\u793e\u533a\u7248\u91cd\u6784\u4e86\u52a8\u6001\u5408\u56fe\u7cfb\u7edf\uff0c\u5728\u539f\u6709\u529f\u80fd\u57fa\u7840\u4e0a\u589e\u52a0\u4e86\u8bb8\u591a\u91cd\u8981\u7279\u6027\u3002",source:"@site/versioned_docs/version-2.0.0/user-guide/dynamic-batcher/dynamic-batcher-intro.mdx",sourceDirName:"user-guide/dynamic-batcher",slug:"/user-guide/dynamic-batcher/dynamic-batcher-intro",permalink:"/cocos-enhance-kit/docs/2.0.0/user-guide/dynamic-batcher/dynamic-batcher-intro",draft:!1,tags:[],version:"2.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RichText \u81ea\u5b9a\u4e49\u6750\u8d28",permalink:"/cocos-enhance-kit/docs/2.0.0/user-guide/text-render/text-richtext"},next:{title:"\u8c03\u6574\u5408\u56fe\u8bbe\u7f6e",permalink:"/cocos-enhance-kit/docs/2.0.0/user-guide/dynamic-batcher/dynamic-batcher-basics"}},m={},f=[],p={toc:f};function y(e){var t=e.components,r=(0,c.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u52a8\u6001\u5408\u56fe"},"\u52a8\u6001\u5408\u56fe"),(0,i.kt)("p",null,"\u52a8\u6001\u5408\u56fe\u662f\u4e00\u4e2a\u975e\u5e38\u597d\u7684\u5408\u6279\u624b\u6bb5\uff0c\u4f46\u662f\u5728\u4e4b\u524d\u5f15\u64ce\u5b9e\u73b0\u7684\u6bd4\u8f83\u7b80\u964b\uff0c\u6240\u4ee5\u793e\u533a\u7248\u91cd\u6784\u4e86\u52a8\u6001\u5408\u56fe\u7cfb\u7edf\uff0c\u5728\u539f\u6709\u529f\u80fd\u57fa\u7840\u4e0a\u589e\u52a0\u4e86\u8bb8\u591a\u91cd\u8981\u7279\u6027\u3002"),(0,i.kt)("p",null,"\u6bd4\u5982\u652f\u6301\u590d\u7528\u5e9f\u5f03\u788e\u56fe\u7a7a\u95f4\uff0c\u4f18\u5316\u4e86\u56fe\u96c6\u88c5\u7bb1\u7b97\u6cd5\uff0c\u6240\u6709\u56fe\u96c6\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\u8fdb\u884c\u7ba1\u7406\u7b49\u7b49\uff0c\u4f60\u53ef\u4ee5\u9605\u8bfb\u4e0b\u9762\u7684\u6587\u6863\u4e86\u89e3\u8be6\u60c5\uff1a"),(0,i.kt)(o.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);