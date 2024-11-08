"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1487],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,f=p["".concat(l,".").concat(d)]||p[d]||s[d]||a;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},67892:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(67294),i=n(86010),a=n(39960),o=n(52802),c="cardContainer_S8oU",l="cardTitle_HoSo",u="cardDescription_c27F";n(95999);function m(e){var t=e.href,n=e.children;return r.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",c)},n)}function s(e){var t=e.href,n=e.icon,a=e.title,o=e.description;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",l),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",u),title:o},o))}function p(e){var t,n=e.item,i=((0,o.xz)(null!=(t=n.docId)?t:void 0),(0,o.Wl)(n));return i?r.createElement(s,{href:i,icon:"",title:n.label,description:n.description}):null}function d(e){var t,n=e.item,i=(0,o.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(s,{href:n.href,icon:"",title:n.label,description:null==i?void 0:i.description})}function f(e){var t=e.item;switch(t.type){case"link":return r.createElement(d,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.items,n=e.className;return r.createElement("section",{className:(0,i.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,o.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{key:t,item:e}))})))}},11777:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=n(67892),c=n(52802),l=["components"],u={},m="\u591a\u7eb9\u7406\u6e32\u67d3",s={unversionedId:"user-guide/multi-render/multi-render-intro",id:"version-2.1.0/user-guide/multi-render/multi-render-intro",title:"\u591a\u7eb9\u7406\u6e32\u67d3",description:"\u591a\u7eb9\u7406\u6e32\u67d3\u5c5e\u4e8e\u5e95\u5c42\u8bbe\u65bd\uff0c\u82e5\u4f60\u4e0d\u51c6\u5907\u624b\u52a8\u4f7f\u7528\u591a\u7eb9\u7406\u6750\u8d28\u6216\u8005\u591a\u7eb9\u7406\u5408\u6279\u7ba1\u7406\u5668\u7684\u8bdd\uff0c\u8bf7\u8df3\u8fc7\u672c\u7279\u6027\u6587\u6863\u3002",source:"@site/versioned_docs/version-2.1.0/user-guide/multi-render/multi-render-intro.mdx",sourceDirName:"user-guide/multi-render",slug:"/user-guide/multi-render/multi-render-intro",permalink:"/cocos-enhance-kit/docs/2.1.0/user-guide/multi-render/multi-render-intro",draft:!1,tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u65b0\u5f15\u64ce\u7279\u6027",permalink:"/cocos-enhance-kit/docs/2.1.0/best-practices/new-features"},next:{title:"\u591a\u7eb9\u7406\u6750\u8d28",permalink:"/cocos-enhance-kit/docs/2.1.0/user-guide/multi-render/multi-material"}},p={},d=[{value:"\u4ec0\u4e48\u662f\u591a\u7eb9\u7406\u6e32\u67d3\uff1f",id:"\u4ec0\u4e48\u662f\u591a\u7eb9\u7406\u6e32\u67d3",level:2}],f={toc:d};function v(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u591a\u7eb9\u7406\u6e32\u67d3"},"\u591a\u7eb9\u7406\u6e32\u67d3"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u591a\u7eb9\u7406\u6e32\u67d3\u5c5e\u4e8e\u5e95\u5c42\u8bbe\u65bd\uff0c\u82e5\u4f60\u4e0d\u51c6\u5907\u624b\u52a8\u4f7f\u7528\u591a\u7eb9\u7406\u6750\u8d28\u6216\u8005\u591a\u7eb9\u7406\u5408\u6279\u7ba1\u7406\u5668\u7684\u8bdd\uff0c\u8bf7\u8df3\u8fc7\u672c\u7279\u6027\u6587\u6863\u3002"))),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f\u591a\u7eb9\u7406\u6e32\u67d3"},"\u4ec0\u4e48\u662f\u591a\u7eb9\u7406\u6e32\u67d3\uff1f"),(0,a.kt)("p",null,"\u5728\u4ee5\u524d\u7684\u8ba4\u8bc6\u91cc\uff0c\u6211\u4eec\u77e5\u9053\u76f8\u90bb\u7684\u8282\u70b9\u4f7f\u7528\u4e0d\u540c\u7684\u7eb9\u7406\uff08Texture\uff09\u4f1a\u5bfc\u81f4\u4e0d\u80fd\u5408\u5e76\u6279\u6b21\u3002"),(0,a.kt)("p",null,"\u5176\u6839\u672c\u539f\u56e0\u662f\u7eb9\u7406\u662f\u4f7f\u7528 uniform \u53d8\u91cf\u4f20\u7ed9\u7740\u8272\u5668\u7684\uff0c\u800c\u9700\u8981\u5408\u5e76\u6279\u6b21\u7684\u8bdd\u4e0d\u5141\u8bb8\u6bcf\u6b21\u6e32\u67d3\u90fd\u62e5\u6709\u4e0d\u540c\u7684 uniform \u53d8\u91cf\u503c\u3002"),(0,a.kt)("p",null,'\u793e\u533a\u7248\u73b0\u5728\u7684\u5b9e\u73b0\u662f\u5148\u8bbe\u7f6e\u591a\u4e2a uniform \u53d8\u91cf\uff0c\u6bd4\u5982\u5c06 8 \u5f20\u7eb9\u7406\u5199\u5165\u5230 "texture1" "texture2" "texture3"... \u7684 8 \u4e2a uniform \u53d8\u91cf\u4e2d\uff0c\u7136\u540e\u5728\u7740\u8272\u5668\u91cc\u518d\u5224\u65ad\u5e94\u8be5\u5728\u6e32\u67d3\u65f6\u4f7f\u7528\u54ea\u4e2a uniform \u53d8\u91cf\u3002'),(0,a.kt)("p",null,"\u8fd9\u6837\u7684\u8bdd\u5982\u679c\u6240\u6709\u6e32\u67d3\u90fd\u53ea\u7528\u8fd9 8 \u5f20\u7eb9\u7406\uff0c\u5c31\u90fd\u80fd\u5408\u5e76\u4e3a 1 \u4e2a\u6279\u6b21\u3002"),(0,a.kt)("p",null,"\u8fd9\u8981\u6c42\u8bbe\u5907\u652f\u6301\u91c7\u6837\u591a\u4e2a\u7eb9\u7406\uff0c\u800c\u5728\u73b0\u4ee3\u7edd\u5927\u591a\u6570\u8bbe\u5907\u4e2d\u90fd\u81f3\u5c11\u652f\u6301\u91c7\u6837 8 \u5f20\u7eb9\u7406\uff0c\u6240\u4ee5\u8fd9\u4e0d\u662f\u95ee\u9898\u3002"),(0,a.kt)("p",null,'\u5f53\u7136\u9664\u4e86\u8fd9\u79cd\u65b9\u6cd5\uff0c\u8fd8\u6709\u53e6\u5916\u51e0\u79cd\u8fdb\u884c\u591a\u7eb9\u7406\u5408\u6279\u7684\u65b9\u6cd5\uff0c\u4f8b\u5982 "Texture Array" \u548c "Bindless"\uff0c\u4f46\u90fd\u6709\u5b9e\u7528\u6027\u4e0e\u517c\u5bb9\u6027\u7684\u95ee\u9898\u3002'),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u90a3\u4e48\uff0c\u4ee3\u4ef7\u662f\u4ec0\u4e48\uff1f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u56e0\u4e3a\u4f1a\u591a\u4f20\u9012\u4e00\u4e2a\u9876\u70b9\u5c5e\u6027\uff0c\u5e76\u4e14\u9700\u8981\u5728\u7740\u8272\u5668\u4e2d\u53bb\u5224\u65ad\u8be5\u4f7f\u7528\u54ea\u4e2a\u7eb9\u7406\uff0c\u5bfc\u81f4",(0,a.kt)("strong",{parentName:"p"},"\u5408\u5e76\u6279\u6b21\u5e76\u4e0d\u4e00\u5b9a\u4f1a\u63d0\u5347\u6027\u80fd"),"\u3002"),(0,a.kt)("p",{parentName:"div"},"\u6240\u4ee5\u6211\u4eec\u5efa\u8bae\u5728\u591a\u4e2a\u6863\u6b21\u8bbe\u5907\u4e2d\u5b9e\u9645\u6d4b\u8bd5\u9879\u76ee\u662f\u5426\u4f7f\u7528\u591a\u7eb9\u7406\u6e32\u67d3\u7684\u6027\u80fd\u5dee\u8ddd\u3002"))),(0,a.kt)("p",null,"\u4e3a\u4e86\u8ba9\u591a\u7eb9\u7406\u6e32\u67d3\u80fd\u4ee5\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u5728\u5f15\u64ce\u4e2d\u4f7f\u7528\uff0c\u793e\u533a\u7248\u5df2\u7ecf\u5728\u5185\u90e8\u5bf9\u5176\u505a\u597d\u4e86\u4e00\u4e9b\u5c01\u88c5\uff1a"),(0,a.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u652f\u6301\u7684\u6e32\u67d3\u7ec4\u4ef6")),(0,a.kt)("p",{parentName:"li"},"  cc.Sprite\u3001cc.Label\u3001cc.RichText\u3001cc.MotionSteak\u3001Spine \u7ec4\u4ef6\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u652f\u6301\u7684\u6e32\u67d3\u7ec4\u4ef6")),(0,a.kt)("p",{parentName:"li"},"  cc.ParticleSystem\u3001TiledMap \u7ec4\u4ef6\uff1a\u8fd9\u4e24\u4e2a\u7ec4\u4ef6\u5f53\u524d\u7684\u5f15\u64ce\u5b9e\u73b0\u4f1a\u5f3a\u5236\u6253\u65ad\u5408\u6279\uff0c\u6682\u65f6\u4e0d\u652f\u6301\u3002"),(0,a.kt)("p",{parentName:"li"},"  DragonBones \u7ec4\u4ef6\uff1a\u56e0\u4eba\u529b\u6709\u9650\uff0c\u5e76\u4e14\u8fd9\u4e2a\u7ec4\u4ef6\u4e0e Spine \u7ec4\u4ef6\u53ef\u4ee5\u76f8\u4e92\u4ee3\u66ff\uff0c\u6240\u4ee5\u6682\u65f6\u4e0d\u652f\u6301\u8be5\u7ec4\u4ef6\u3002"))))))}v.isMDXComponent=!0}}]);