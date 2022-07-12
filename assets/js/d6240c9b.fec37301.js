"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7173],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,c(c({ref:t},p),{},{components:n})):a.createElement(k,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9975:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),c=["components"],l={sidebar_position:1,description:"\u4e86\u89e3\u8c03\u6821\u52a8\u6001\u5408\u56fe\u7684\u65b9\u5f0f\u3002"},o="\u8c03\u6574\u5408\u56fe\u8bbe\u7f6e",s={unversionedId:"user-guide/dynamic-batcher/dynamic-batcher-basics",id:"version-1.0.0/user-guide/dynamic-batcher/dynamic-batcher-basics",title:"\u8c03\u6574\u5408\u56fe\u8bbe\u7f6e",description:"\u4e86\u89e3\u8c03\u6821\u52a8\u6001\u5408\u56fe\u7684\u65b9\u5f0f\u3002",source:"@site/versioned_docs/version-1.0.0/user-guide/dynamic-batcher/dynamic-batcher-basics.md",sourceDirName:"user-guide/dynamic-batcher",slug:"/user-guide/dynamic-batcher/dynamic-batcher-basics",permalink:"/cocos-enhance-kit/docs/1.0.0/user-guide/dynamic-batcher/dynamic-batcher-basics",draft:!1,tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"\u4e86\u89e3\u8c03\u6821\u52a8\u6001\u5408\u56fe\u7684\u65b9\u5f0f\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u52a8\u6001\u5408\u56fe",permalink:"/cocos-enhance-kit/docs/1.0.0/user-guide/dynamic-batcher/dynamic-batcher-intro"},next:{title:"\u624b\u52a8\u7ba1\u7406\u5408\u56fe",permalink:"/cocos-enhance-kit/docs/1.0.0/user-guide/dynamic-batcher/dynamic-batcher-manual"}},p={},d=[{value:"\u52a8\u6001\u56fe\u96c6\u6700\u5927\u6570\u91cf\u4e3a\u4ec0\u4e48\u662f 7",id:"\u52a8\u6001\u56fe\u96c6\u6700\u5927\u6570\u91cf\u4e3a\u4ec0\u4e48\u662f-7",level:2},{value:"\u63a7\u5236\u7eb9\u7406\u662f\u5426\u53c2\u4e0e\u52a8\u6001\u5408\u56fe",id:"\u63a7\u5236\u7eb9\u7406\u662f\u5426\u53c2\u4e0e\u52a8\u6001\u5408\u56fe",level:2},{value:"\u63a7\u5236\u7ec4\u4ef6\u662f\u5426\u53c2\u4e0e\u52a8\u6001\u5408\u56fe",id:"\u63a7\u5236\u7ec4\u4ef6\u662f\u5426\u53c2\u4e0e\u52a8\u6001\u5408\u56fe",level:2},{value:"\u662f\u5426\u81ea\u52a8\u591a\u7eb9\u7406\u5408\u6279",id:"\u662f\u5426\u81ea\u52a8\u591a\u7eb9\u7406\u5408\u6279",level:2},{value:"\u5728\u573a\u666f\u5207\u6362\u65f6\u6e05\u7a7a\u6240\u6709\u56fe\u96c6",id:"\u5728\u573a\u666f\u5207\u6362\u65f6\u6e05\u7a7a\u6240\u6709\u56fe\u96c6",level:2},{value:"\u4e0d\u8fdb\u884c\u590d\u7528\u7684\u533a\u57df\u7a7a\u95f4\u5927\u5c0f",id:"\u4e0d\u8fdb\u884c\u590d\u7528\u7684\u533a\u57df\u7a7a\u95f4\u5927\u5c0f",level:2}],u={toc:d};function m(e){var t=e.components,l=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8c03\u6574\u5408\u56fe\u8bbe\u7f6e"},"\u8c03\u6574\u5408\u56fe\u8bbe\u7f6e"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u52a8\u6001\u56fe\u96c6\u6700\u5927\u6570\u91cf\u4e3a\u4ec0\u4e48\u662f-7"},"\u52a8\u6001\u56fe\u96c6\u6700\u5927\u6570\u91cf\u4e3a\u4ec0\u4e48\u662f 7"),(0,i.kt)("p",null,"\u5728\u524d\u9762\u7684\u6587\u6863\u4e2d\u6709\u63d0\u5230\u52a8\u6001\u56fe\u96c6\u7684\u6700\u5927\u6570\u91cf\u9ed8\u8ba4\u4e3a ",(0,i.kt)("strong",{parentName:"p"},"\u8bbe\u5907\u80fd\u540c\u65f6\u91c7\u6837\u7eb9\u7406\u6570 - Char \u7f13\u5b58\u6a21\u5f0f\u81ea\u52a8\u5408\u6279\u56fe\u96c6\u6570"),"\u3002"),(0,i.kt)("p",null,"\u56e0\u4e3a\u8bbe\u5907\u80fd\u540c\u65f6\u91c7\u6837\u7eb9\u7406\u6570\u56fa\u5b9a\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"8"),"\uff0c\u800c Char \u7f13\u5b58\u6a21\u5f0f\u81ea\u52a8\u5408\u6279\u56fe\u96c6\u6570\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"\uff0c\u6240\u4ee5\u52a8\u6001\u5408\u56fe\u7684\u6700\u5927\u6570\u91cf\u9ed8\u8ba4\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"7"),"\u3002"),(0,i.kt)("p",null,"\u8fd9\u6837\u5c31\u53ea\u9700\u8981\u4f7f\u7528 1 \u4e2a\u6750\u8d28\uff0c\u4e5f\u5c31\u662f\u80fd\u5728 1 Draw Call \u91cc\u5b8c\u6210\u6240\u6709\u53c2\u4e0e\u52a8\u6001\u5408\u56fe\u7684\u7eb9\u7406\uff08\u5305\u62ec Bitmap \u7f13\u5b58\u6a21\u5f0f Label\uff09\u4e0e Char \u7f13\u5b58\u6a21\u5f0f Label \u7684\u6e32\u67d3\u3002"),(0,i.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\u4e0d\u63a8\u8350\u76f4\u63a5\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"maxAtlasCount"),"\uff0c\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/cocos-enhance-kit/docs/1.0.0/user-guide/text-render/text-char-mode#%E4%B8%8E%E5%8A%A8%E6%80%81%E5%9B%BE%E9%9B%86%E5%90%88%E6%89%B9%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9"},"\u65b0\u7684 Char \u7f13\u5b58\u6a21\u5f0f")," \u6587\u6863\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u96be\u9053\u771f\u6b63\u7684\u539f\u56e0\u662f..."),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"7\u7684\u610f\u5fd7",src:n(7270).Z,width:"32",height:"28"}))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u63a7\u5236\u7eb9\u7406\u662f\u5426\u53c2\u4e0e\u52a8\u6001\u5408\u56fe"},"\u63a7\u5236\u7eb9\u7406\u662f\u5426\u53c2\u4e0e\u52a8\u6001\u5408\u56fe"),(0,i.kt)("p",null,"\u53ef\u4ee5\u5728\u7f16\u8f91\u5668\u4e0a\u8c03\u6574\u7eb9\u7406\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"packable")," \u5c5e\u6027\uff0c\u6216\u8005\u7528\u4ee3\u7801\u63a7\u5236\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"texture.packable = false;\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u63a7\u5236\u7ec4\u4ef6\u662f\u5426\u53c2\u4e0e\u52a8\u6001\u5408\u56fe"},"\u63a7\u5236\u7ec4\u4ef6\u662f\u5426\u53c2\u4e0e\u52a8\u6001\u5408\u56fe"),(0,i.kt)("p",null,"\u4f7f\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u63a7\u5236\u7ec4\u4ef6\u662f\u5426\u9ed8\u8ba4\u6fc0\u6d3b\u52a8\u6001\u5408\u56fe\u673a\u5236\uff0c\u9ed8\u8ba4\u4e3a\u5f00\u542f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"cc.sp.allowDynamicAtlas = false;\n")),(0,i.kt)("p",null,"\u4e5f\u53ef\u4ee5\u63a7\u5236\u5355\u7ec4\u4ef6\u662f\u5426\u6fc0\u6d3b\u52a8\u6001\u5408\u56fe\u673a\u5236\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dynamic-batch-settings",src:n(7667).Z,width:"880",height:"1014"})),(0,i.kt)("p",null,"\u9664\u4e86\u5728\u7f16\u8f91\u5668\u8c03\u6574\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4ee3\u7801\u63a7\u5236\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// cc.RenderComponent.EnableType\n// GLOBAL: \u5168\u5c40\u9ed8\u8ba4\u503c\n// ENABLE: \u5f00\u542f\n// DISABLE: \u5173\u95ed\nlabel.allowDynamicAtlas = cc.RenderComponent.EnableType.ENABLE;\n")),(0,i.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u7eb9\u7406\u53c2\u4e0e\u52a8\u6001\u5408\u56fe\u4f46\u662f\u7ec4\u4ef6\u4e0d\u53c2\u4e0e\uff0c\u90a3\u4e48\u4f7f\u7528\u8be5\u7ec4\u4ef6\u8fdb\u884c\u6e32\u67d3\u65f6\u5c31\u4e0d\u4f1a\u53c2\u4e0e\uff0c\u4f46\u5982\u679c\u540c\u65f6\u5728\u5176\u5b83\u53c2\u4e0e\u7684\u7ec4\u4ef6\u4e0a\u6e32\u67d3\uff0c\u90a3\u4e48\u4f9d\u7136\u4f1a\u88ab\u6253\u5165\u52a8\u6001\u56fe\u96c6\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ec4\u4ef6\u6709\u810f\u68c0\u67e5\u6807\u8bb0\uff0c\u4fee\u6539\u540e\u53ef\u80fd\u9700\u8981\u5bf9\u6e32\u67d3\u7ec4\u4ef6\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"comp.setVertsDirty()")," \u624d\u4f1a\u751f\u6548\u3002"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u662f\u5426\u81ea\u52a8\u591a\u7eb9\u7406\u5408\u6279"},"\u662f\u5426\u81ea\u52a8\u591a\u7eb9\u7406\u5408\u6279"),(0,i.kt)("p",null,"\u63a7\u5236\u56fe\u96c6\u7eb9\u7406\u662f\u5426\u4f1a\u81ea\u52a8\u6dfb\u52a0\u5230\u591a\u7eb9\u7406\u5408\u6279\u7ba1\u7406\u5668\uff0c\u9ed8\u8ba4\u4e3a\u5f00\u542f\u72b6\u6001\uff0c\u5982\u679c\u5173\u95ed\u4e5f\u5c31\u610f\u5473\u7740",(0,i.kt)("strong",{parentName:"p"},"\u5931\u53bb\u4e86\u81ea\u52a8\u8fdb\u884c\u591a\u4e2a\u56fe\u96c6\u7eb9\u7406\u5408\u6279\u7684\u7279\u6027"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"cc.dynamicAtlasManager.autoMultiBatch = false;\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u5728\u573a\u666f\u5207\u6362\u65f6\u6e05\u7a7a\u6240\u6709\u56fe\u96c6"},"\u5728\u573a\u666f\u5207\u6362\u65f6\u6e05\u7a7a\u6240\u6709\u56fe\u96c6"),(0,i.kt)("p",null,"\u63a7\u5236\u5728\u573a\u666f\u5207\u6362\u65f6\u662f\u5426\u4f1a\u6e05\u7a7a\u6240\u6709\u7684\u52a8\u6001\u56fe\u96c6\uff0c\u9ed8\u8ba4\u4e3a\u5f00\u542f\u72b6\u6001\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"cc.dynamicAtlasManager.autoResetBeforeSceneLoad = false;\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728\u5f15\u64ce\u539f\u6765\u7684\u8bbe\u8ba1\u4e2d\uff0c\u8be5\u673a\u5236\u4e0d\u53ef\u88ab\u5173\u95ed\uff0c\u7531\u4e8e\u65e7\u52a8\u6001\u5408\u56fe\u4e0d\u652f\u6301\u590d\u7528\u5e9f\u5f03\u7684\u7a7a\u95f4\uff0c\u56fe\u96c6\u7ec8\u7a76\u4f1a\u88ab\u7528\u5b8c\uff0c\u6240\u4ee5\u5f15\u64ce\u52a0\u5165\u4e86\u8fd9\u4e2a\u6cbb\u6807\u4e0d\u6cbb\u672c\u7684\u529f\u80fd\u3002"),(0,i.kt)("p",{parentName:"div"},"\u4f46\u73b0\u5728\uff0c\u6211\u4eec\u8ba4\u4e3a\u8be5\u673a\u5236\u53ef\u4ee5\u5173\u95ed\uff0c\u4f60\u53ea\u9700\u8981\u7ba1\u7406\u597d\u7eb9\u7406\u8d44\u6e90\u7684\u91ca\u653e\u5373\u53ef\uff0c\u56e0\u4e3a\u7eb9\u7406\u8d44\u6e90\u91ca\u653e\u7684\u540c\u65f6\u4f1a\u91ca\u653e\u4f7f\u7528\u7684\u52a8\u6001\u56fe\u96c6\u7a7a\u95f4\u3002"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u4e0d\u8fdb\u884c\u590d\u7528\u7684\u533a\u57df\u7a7a\u95f4\u5927\u5c0f"},"\u4e0d\u8fdb\u884c\u590d\u7528\u7684\u533a\u57df\u7a7a\u95f4\u5927\u5c0f"),(0,i.kt)("p",null,"\u5728\u5b9e\u9645\u7684\u6d4b\u8bd5\u4e2d\uff0c\u6211\u4eec\u53d1\u73b0\u5e9f\u5f03\u7a7a\u95f4\u51fa\u73b0\u788e\u7247\u5316\u7684\u73b0\u8c61\uff0c\u6bd4\u5982\u5c3a\u5bf8 5 * 2 \u8fd9\u6837\u7684\u975e\u5e38\u5c0f\u7684\u5e9f\u5f03\u7a7a\u95f4\uff0c\u5f53\u788e\u56fe\u5c1d\u8bd5\u52a0\u5165\u56fe\u96c6\u7684\u65f6\u5019\u4f1a\u5728\u8fd9\u4e9b\u5e9f\u5f03\u7a7a\u95f4\u4e2d\u5bfb\u627e\uff0c\u8fd9\u4e9b\u6570\u91cf\u591a\u7684\u5c0f\u5e9f\u5f03\u7a7a\u95f4\u65e0\u6cd5\u88ab\u590d\u7528\uff0c\u5374\u8981\u5728\u6bcf\u6b21\u52a0\u5165\u65f6\u904d\u5386\u5224\u65ad\u4e00\u6b21\u3002"),(0,i.kt)("p",null,"\u6240\u4ee5\u6211\u4eec\u52a0\u5165\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"ignoreRectSize")," \u8bbe\u7f6e\uff0c\u5f53\u5e9f\u5f03\u7a7a\u95f4\u5c3a\u5bf8\u5c0f\u4e8e\u8fd9\u4e2a\u503c\u5c31\u4e0d\u4f1a\u88ab\u904d\u5386\u5230\uff08\u4f46\u662f\u80fd\u5408\u5e76\u4e3a\u5927\u7684\u5e9f\u5f03\u7a7a\u95f4\u65f6\u8fd8\u662f\u4f1a\u5408\u5e76\uff09\uff0c\u8fd9\u80fd\u63d0\u5347\u5927\u7ea6 50% \u7684\u7406\u8bba\u6027\u80fd\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u503c\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"10"),"\uff0c\u5982\u679c\u4f60\u7684\u9879\u76ee\u6709\u5f88\u591a\u5c0f\u4e8e 10 * 10 \u7684\u7eb9\u7406\uff0c\u53ef\u4ee5\u8003\u8651\u8fdb\u884c\u8c03\u6574\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"cc.dynamicAtlasManager.Atlas.ignoreRectSize = 2;\n")))}m.isMDXComponent=!0},7270:function(e,t){t.Z="data:image/png;base64,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"},7667:function(e,t,n){t.Z=n.p+"assets/images/dynamic-batch-settings-3163fd8d6c2a755dfb36cd1e5b1b052a.png"}}]);