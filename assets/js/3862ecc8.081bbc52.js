"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1216],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54389:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],c={sidebar_position:1,description:"\u8be6\u7ec6\u4e86\u89e3\u8be5\u7f13\u5b58\u6a21\u5f0f\u91cd\u6784\u540e\u7684\u6240\u6709\u65b0\u7279\u6027\u3002"},i="\u65b0\u7684 Char \u7f13\u5b58\u6a21\u5f0f",u={unversionedId:"user-guide/text-render/text-char-mode",id:"version-1.0.0/user-guide/text-render/text-char-mode",title:"\u65b0\u7684 Char \u7f13\u5b58\u6a21\u5f0f",description:"\u8be6\u7ec6\u4e86\u89e3\u8be5\u7f13\u5b58\u6a21\u5f0f\u91cd\u6784\u540e\u7684\u6240\u6709\u65b0\u7279\u6027\u3002",source:"@site/versioned_docs/version-1.0.0/user-guide/text-render/text-char-mode.md",sourceDirName:"user-guide/text-render",slug:"/user-guide/text-render/text-char-mode",permalink:"/cocos-enhance-kit/docs/1.0.0/user-guide/text-render/text-char-mode",draft:!1,tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"\u8be6\u7ec6\u4e86\u89e3\u8be5\u7f13\u5b58\u6a21\u5f0f\u91cd\u6784\u540e\u7684\u6240\u6709\u65b0\u7279\u6027\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u6587\u672c\u6e32\u67d3",permalink:"/cocos-enhance-kit/docs/1.0.0/user-guide/text-render/text-render-intro"},next:{title:"\u9ad8 DPI \u652f\u6301",permalink:"/cocos-enhance-kit/docs/1.0.0/user-guide/text-render/text-high-dpi"}},p={},s=[{value:"\u5728\u573a\u666f\u5207\u6362\u65f6\u6e05\u7a7a\u6240\u6709\u5b57\u7b26\u56fe\u96c6",id:"\u5728\u573a\u666f\u5207\u6362\u65f6\u6e05\u7a7a\u6240\u6709\u5b57\u7b26\u56fe\u96c6",level:2},{value:"\u5b57\u7b26\u56fe\u96c6\u7684\u6570\u91cf\u4e0e\u5185\u7f6e\u6750\u8d28",id:"\u5b57\u7b26\u56fe\u96c6\u7684\u6570\u91cf\u4e0e\u5185\u7f6e\u6750\u8d28",level:2},{value:"\u4e0e\u52a8\u6001\u56fe\u96c6\u5408\u6279\u7684\u6ce8\u610f\u4e8b\u9879",id:"\u4e0e\u52a8\u6001\u56fe\u96c6\u5408\u6279\u7684\u6ce8\u610f\u4e8b\u9879",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u65b0\u7684-char-\u7f13\u5b58\u6a21\u5f0f"},"\u65b0\u7684 Char \u7f13\u5b58\u6a21\u5f0f"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("a",{parentName:"p",href:"/cocos-enhance-kit/docs/1.0.0/start-guide/batcher-guide#%E5%85%85%E5%88%86%E5%88%A9%E7%94%A8%E5%8A%A8%E6%80%81%E5%90%88%E5%9B%BE"},"\u65b0 UI \u6e32\u67d3\u6279\u6b21\u5408\u5e76\u6307\u5357")," \u4e2d\u63d0\u5230 Bitmap \u4e0e Char \u7f13\u5b58\u6a21\u5f0f\u90fd\u652f\u6301\u4e86\u5e9f\u5f03\u5b57\u7b26\u7a7a\u95f4\u590d\u7528\u7684\u7279\u6027\uff0c\u4f46 Char \u7f13\u5b58\u6a21\u5f0f\u7684\u5185\u90e8\u53d8\u5316\u6bd4\u8f83\u5927\uff0c\u5e76\u4e14\u63d0\u4f9b\u4e86\u4e00\u4e9b\u53ef\u8c03\u6574\u7684\u8bbe\u7f6e\u9879\uff0c\u4f7f\u7528\u4e0a\u4f9d\u65e7\u53ea\u9700\u8981\u8bbe\u7f6e\u7f13\u5b58\u6a21\u5f0f\u5373\u53ef\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u5728\u573a\u666f\u5207\u6362\u65f6\u6e05\u7a7a\u6240\u6709\u5b57\u7b26\u56fe\u96c6"},"\u5728\u573a\u666f\u5207\u6362\u65f6\u6e05\u7a7a\u6240\u6709\u5b57\u7b26\u56fe\u96c6"),(0,l.kt)("p",null,"\u63a7\u5236\u5728\u573a\u666f\u5207\u6362\u65f6\u662f\u5426\u4f1a\u6e05\u7a7a\u6240\u6709\u7684\u5b57\u7b26\u56fe\u96c6\uff0c\u9ed8\u8ba4\u4e3a\u5f00\u542f\u72b6\u6001\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"cc.sp.charAtlasAutoResetBeforeSceneLoad = false;\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5728\u5f15\u64ce\u539f\u6765\u7684\u8bbe\u8ba1\u4e2d\uff0c\u8be5\u673a\u5236\u4e0d\u53ef\u88ab\u5173\u95ed\uff0c\u7531\u4e8e\u65e7 Char \u7f13\u5b58\u6a21\u5f0f\u4e0d\u652f\u6301\u590d\u7528\u5e9f\u5f03\u7684\u7a7a\u95f4\uff0c\u56fe\u96c6\u7ec8\u7a76\u4f1a\u88ab\u7528\u5b8c\uff0c\u6240\u4ee5\u5f15\u64ce\u52a0\u5165\u4e86\u8fd9\u4e2a\u6cbb\u6807\u4e0d\u6cbb\u672c\u7684\u529f\u80fd\u3002"),(0,l.kt)("p",{parentName:"div"},"\u73b0\u5728\u63a8\u8350\u5173\u95ed\u8be5\u673a\u5236\uff0c\u9664\u975e\u4f60\u77e5\u9053\u4f60\u9700\u8981\u3002"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u5b57\u7b26\u56fe\u96c6\u7684\u6570\u91cf\u4e0e\u5185\u7f6e\u6750\u8d28"},"\u5b57\u7b26\u56fe\u96c6\u7684\u6570\u91cf\u4e0e\u5185\u7f6e\u6750\u8d28"),(0,l.kt)("p",null,"\u73b0\u5728\u5728\u5185\u90e8\u6700\u591a\u4f1a\u521b\u5efa 8 \u5f20\u5b57\u7b26\u56fe\u96c6\uff0c\u4e0e\u591a\u7eb9\u7406\u6750\u8d28\u7684\u6700\u5927\u7eb9\u7406\u63d2\u69fd\u6570\u4e00\u81f4\uff0c\u5982\u679c\u5408\u7406\u4f7f\u7528\u7f13\u5b58\u6a21\u5f0f\uff0c8 \u5f20\u5e94\u8be5\u5bf9\u6240\u6709\u9879\u76ee\u90fd\u662f\u8db3\u591f\u7684\u3002"),(0,l.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u53d1\u751f\u7684\u4e8b\u662f Char \u7f13\u5b58\u6a21\u5f0f\u7684\u7ec4\u4ef6\u4f7f\u7528\u4e86\u4e00\u4e2a\u666e\u901a\u6750\u8d28\uff0c\u8fd9\u4e2a\u6750\u8d28\u53ea\u80fd\u4f7f\u7528\u7b2c\u4e00\u5f20\u5b57\u7b26\u56fe\u96c6\u8fdb\u884c\u6e32\u67d3\uff0c\u90a3\u4e48\u5c31\u4f1a\u5bfc\u81f4\u5176\u4ed6\u56fe\u96c6\u4e0a\u7684\u5b57\u5c31\u65e0\u6cd5\u6e32\u67d3\u51fa\u6765\u4e86\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cChar \u7f13\u5b58\u6a21\u5f0f\u4f1a\u5728\u5185\u90e8\u7ef4\u62a4\u4e00\u4e2a\u4f7f\u7528\u5185\u7f6e\u591a\u7eb9\u7406 Effect \u7740\u8272\u5668\u7684\u6750\u8d28\uff0c\u5982\u679c\u4f60\u6709\u7279\u6b8a\u7684\u7528\u9014\uff0c\u53ef\u4ee5\u901a\u8fc7"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const material = cc.Label._shareAtlas.material;\n")),(0,l.kt)("p",null,"\u83b7\u53d6\u3001\u4fee\u6539\u6216\u66ff\u6362\u8be5\u6750\u8d28\u3002"),(0,l.kt)("p",null,"\u6e32\u67d3\u65f6\u5185\u90e8\u4f1a\u5148\u5224\u65ad\u5f53\u524d\u6240\u4f7f\u7528\u7684\u662f\u5426\u4e3a\u591a\u7eb9\u7406\u6750\u8d28\uff0c\u662f\u7684\u8bdd\u5224\u65ad\u662f\u5426\u80fd\u5728\u6750\u8d28\u7eb9\u7406\u63d2\u69fd\u4e2d\u627e\u5230\u5b57\u7b26\u56fe\u96c6\u7eb9\u7406\uff0c\u5982\u679c\u6709\u4e00\u4e2a\u5224\u65ad\u4e0d\u6ee1\u8db3\u5219\u4f1a\u5c06\u7ec4\u4ef6\u7684\u6750\u8d28\u8bbe\u4e3a\u5185\u90e8\u7ef4\u62a4\u7684\u6750\u8d28\u3002"),(0,l.kt)("p",null,"\u4f46 Char \u5b57\u7b26\u56fe\u96c6\u662f\u8fd0\u884c\u65f6\u624d\u521b\u5efa\u7684\uff0c\u6240\u4ee5",(0,l.kt)("strong",{parentName:"p"},"\u6682\u65f6\u65e0\u6cd5\u5728\u4f7f\u7528 Char \u7f13\u5b58\u6a21\u5f0f\u65f6\u76f4\u63a5\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u6750\u8d28"),"\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee3\u7801\u521b\u5efa\u542b\u6709\u5f53\u524d\u6240\u6709\u5b57\u7b26\u56fe\u96c6\u7eb9\u7406\u7684\u81ea\u5b9a\u4e49\u6750\u8d28\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f46\u5185\u90e8\u4f1a\u4e0d\u65ad\u521b\u5efa\u65b0\u7684\u5b57\u7b26\u56fe\u96c6\uff08\u76f4\u5230 8 \u5f20\uff09\uff0c\u6240\u4ee5\u9700\u6ce8\u610f\u540c\u6b65\u66f4\u65b0\u8fd9\u4e2a\u81ea\u5b9a\u4e49\u6750\u8d28\uff0c\u5efa\u8bae\u6709\u81ea\u5b9a\u4e49\u6750\u8d28\u9700\u6c42\u65f6\u4f7f\u7528 Bitmap \u7f13\u5b58\u6a21\u5f0f\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u4e0e\u52a8\u6001\u56fe\u96c6\u5408\u6279\u7684\u6ce8\u610f\u4e8b\u9879"},"\u4e0e\u52a8\u6001\u56fe\u96c6\u5408\u6279\u7684\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("p",null,"\u591a\u7eb9\u7406\u6750\u8d28\u53ea\u6709 8 \u4e2a\u7eb9\u7406\u63d2\u69fd\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5b57\u7b26\u56fe\u96c6\u81ea\u52a8\u591a\u7eb9\u7406\u5408\u6279\u7684\u6570\u91cf\u4e3a 1\uff0c\u4e5f\u5c31\u662f\u8bf4\u4f1a\u5c06\u7b2c 1 \u5f20\u5b57\u7b26\u56fe\u96c6\u7eb9\u7406\u653e\u5165\u6750\u8d28\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f60\u53ef\u4ee5\u81ea\u5df1\u8c03\u6574\u8fd9\u4e2a\u5206\u914d\u503c\uff0c\u4f46\u8bf7\u6ce8\u610f\u8c03\u6574\u7684\u65f6\u673a\u3002")),(0,l.kt)("p",null,"\u4e0b\u9762\u4e3e\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5047\u8bbe\u6709\u4e00\u4e2a\u811a\u672c ",(0,l.kt)("inlineCode",{parentName:"p"},"example.ts")," \u7684\u90e8\u5206\u5185\u5bb9\u662f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\nclass Example extends cc.Component {\n\n    onLoad() {\n        // 1\n    }\n\n}\n\n// 2\n\n")),(0,l.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u4ee3\u7801\u4f4d\u7f6e 2 \u662f\u5f53\u7528\u6237\u811a\u672c\u88ab\u52a0\u8f7d\u65f6\u5c31\u4f1a\u88ab\u6267\u884c\uff0c\u800c\u4ee3\u7801\u4f4d\u7f6e 1 \u53ef\u80fd\u9700\u8981\u7b49\u5230\u5f15\u64ce\u9996\u573a\u666f\u52a0\u8f7d\u540e\u7684\u67d0\u4e2a\u65f6\u95f4\u6267\u884c\u3002"),(0,l.kt)("p",null,"\u589e\u5f3a\u5305\u4f1a\u81ea\u52a8\u8c03\u6574\u52a8\u6001\u56fe\u96c6\u7684\u6700\u5927\u6570\u91cf\uff0c\u8fd9\u4e2a\u8c03\u6574\u7684\u65f6\u673a\u662f\u5728\u4ee3\u7801\u4f4d\u7f6e 2 \u4e4b\u540e\u7684\uff0c\u6240\u4ee5\u6bd4\u5982\u4f60\u7684\u9879\u76ee\u5bf9 Char \u7f13\u5b58\u6a21\u5f0f\u4f7f\u7528\u91cf\u6bd4\u8f83\u5927\u65f6\uff0c\u60f3\u5c1d\u8bd5\u5c06\u52a8\u6001\u56fe\u96c6\u6700\u5927\u6570\u91cf\u8c03\u6574\u4e3a 6\uff0c\u81ea\u52a8\u5408\u6279\u7684\u5b57\u7b26\u56fe\u96c6\u6570\u91cf\u8c03\u6574\u4e3a 2\uff0c\u90a3\u4e48\u4f60\u53ea\u9700\u8981\u5728\u4ee3\u7801\u4f4d\u7f6e 2 \u4fee\u6539\u5b57\u7b26\u56fe\u96c6\u81ea\u52a8\u591a\u7eb9\u7406\u5408\u6279\u7684\u6570\u91cf\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"cc.sp.charAtlasAutoBatchCount = 2;\n")),(0,l.kt)("p",null,"\u4e4b\u540e\u589e\u5f3a\u5305\u4f1a\u81ea\u52a8\u5c06\u52a8\u6001\u56fe\u96c6\u7684\u6700\u5927\u6570\u91cf\u8c03\u6574\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"8 - 2"),"\uff0c\u5373 6\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u81ea\u52a8\u8c03\u6574\u7684\u65f6\u673a\u5e76\u4e0d\u610f\u5473\u7740\u4f60\u5728\u4ee3\u7801\u4f4d\u7f6e 2 \u4fee\u6539\u52a8\u6001\u56fe\u96c6\u7684\u6700\u5927\u6570\u91cf\u662f\u65e0\u6548\u7684\uff0c\u56e0\u4e3a\u4e00\u5f00\u59cb\u52a8\u6001\u56fe\u96c6\u7684\u6700\u5927\u6570\u91cf\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"-1"),"\uff0c\u4f60\u6253\u5370\u4e00\u4e0b\u53ef\u4ee5\u770b\u5230"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"console.log(cc.dynamicAtlasManager.maxAtlasCount);      // -1\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5728\u4ee3\u7801\u4f4d\u7f6e 2 \u4fee\u6539\u4e86\u52a8\u6001\u56fe\u96c6\u7684\u6700\u5927\u6570\u91cf\uff0c\u589e\u5f3a\u5305\u5c31\u4e0d\u4f1a\u8c03\u6574\u8be5\u503c\u4e86\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"cc.dynamicAtlasManager.maxAtlasCount = 5;\n")),(0,l.kt)("p",null,"\u8fd9\u65f6\u5019\u52a8\u6001\u56fe\u96c6\u7684\u6700\u5927\u6570\u91cf\u662f 5\uff0c\u5b57\u7b26\u56fe\u96c6\u81ea\u52a8\u591a\u7eb9\u7406\u5408\u6279\u7684\u6570\u91cf\u4f9d\u65e7\u9ed8\u8ba4\u4e3a 1\uff0c\u591a\u7eb9\u7406\u6750\u8d28\u4f1a\u6709 2 \u4e2a\u7a7a\u7eb9\u7406\u63d2\u69fd\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u8fd9\u4e24\u4e2a\u6570\u91cf\u52a0\u8d77\u6765\u8d85\u8fc7 8 \u5c31\u4f1a\u4f7f\u7528\u66f4\u591a\u7684\u6750\u8d28\u8fdb\u884c\u6e32\u67d3\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u9879\u76ee\u7684 Draw Call \u6570\u91cf\u5347\u9ad8\uff0c\u5efa\u8bae\u4fdd\u6301\u52a0\u8d77\u6765\u7684\u6570\u91cf\u4e0d\u8d85\u8fc7 8 \u5f20\uff0c\u80fd\u4fdd\u6301 1 Draw Call\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"cc.dynamicAtlasManager.maxAtlasCount = 13;\ncc.sp.charAtlasAutoBatchCount = 3;\n")),(0,l.kt)("p",null,"\u6bd4\u5982\u4e0a\u9762\u8fd9\u4e2a\u8bbe\u7f6e\uff0c\u8fd9\u4f1a\u4f7f\u5f97\u5f15\u64ce\u9700\u8981\u7528 2 \u4e2a\u6750\u8d28\u8fdb\u884c\u6e32\u67d3\uff0c\u4f46\u662f\u53ef\u7528\u7684\u52a8\u6001\u56fe\u96c6\u6269\u5145\u5230\u4e86 13 \u5f20\uff0cChar \u80fd\u81ea\u52a8\u5408\u6279\u7684\u56fe\u96c6\u6570\u91cf\u6269\u5145\u5230\u4e86 3 \u5f20\uff0c\u5bf9\u4e8e\u67d0\u4e9b\u9879\u76ee\u6765\u8bf4\u53ef\u80fd\u5e76\u4e0d\u662f\u4e00\u4ef6\u574f\u4e8b\u3002"),(0,l.kt)("p",null,"\u589e\u5f3a\u5305\u4f7f\u7528\u8fd9\u4e2a \u201c7 + 1\u201d \u7684\u9ed8\u8ba4\u503c\u6709\u4ee5\u4e0b\u51e0\u70b9\u539f\u56e0\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f15\u64ce\u539f\u672c\u5c31\u53ea\u6709 1 \u5f20 Char \u5b57\u7b26\u56fe\u96c6"),(0,l.kt)("li",{parentName:"ul"},"\u5927\u591a\u6570\u9879\u76ee\u4f7f\u7528 1 \u5f20 Char \u5b57\u7b26\u56fe\u96c6\u662f\u8db3\u591f\u7684")))}m.isMDXComponent=!0}}]);