"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8266],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=c(n),k=i,m=u["".concat(p,".").concat(k)]||u[k]||d[k]||r;return n?a.createElement(m,l(l({ref:e},s),{},{components:n})):a.createElement(m,l({ref:e},s))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49859:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={sidebar_position:2,description:"\u9700\u638c\u63e1\u4e00\u5b9a\u7684\u81ea\u5b9a\u4e49\u5f15\u64ce\u77e5\u8bc6\u3002"},p="\u624b\u52a8\u5b89\u88c5",c={unversionedId:"installation-guide/installation-manual",id:"version-1.0.0/installation-guide/installation-manual",title:"\u624b\u52a8\u5b89\u88c5",description:"\u9700\u638c\u63e1\u4e00\u5b9a\u7684\u81ea\u5b9a\u4e49\u5f15\u64ce\u77e5\u8bc6\u3002",source:"@site/versioned_docs/version-1.0.0/installation-guide/installation-manual.md",sourceDirName:"installation-guide",slug:"/installation-guide/installation-manual",permalink:"/cocos-enhance-kit/docs/1.0.0/installation-guide/installation-manual",draft:!1,tags:[],version:"1.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"\u9700\u638c\u63e1\u4e00\u5b9a\u7684\u81ea\u5b9a\u4e49\u5f15\u64ce\u77e5\u8bc6\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u5f15\u64ce\u6269\u5c55\u5b89\u88c5",permalink:"/cocos-enhance-kit/docs/1.0.0/installation-guide/installation-engine-plugin"},next:{title:"\u5165\u95e8\u6307\u5357",permalink:"/cocos-enhance-kit/docs/1.0.0/start-guide/start-guide-intro"}},s={},d=[{value:"Enhance Kit v1.0.0",id:"enhance-kit-v100",level:2},{value:"\u6807\u51c6\u5b89\u88c5",id:"\u6807\u51c6\u5b89\u88c5",level:2},{value:"1.\u66ff\u6362\u81ea\u5b9a\u4e49\u5f15\u64ce",id:"1\u66ff\u6362\u81ea\u5b9a\u4e49\u5f15\u64ce",level:3},{value:"2.\u5b89\u88c5\u5f15\u64ce\u6269\u5c55",id:"2\u5b89\u88c5\u5f15\u64ce\u6269\u5c55",level:3},{value:"3.TypeScript \u7c7b\u578b\u63d0\u793a\uff08\u53ef\u9009\uff09",id:"3typescript-\u7c7b\u578b\u63d0\u793a\u53ef\u9009",level:3},{value:"4.\u91cd\u542f Cocos Creator",id:"4\u91cd\u542f-cocos-creator",level:3},{value:"\u8865\u4e01\u5b89\u88c5",id:"\u8865\u4e01\u5b89\u88c5",level:2}],u={toc:d};function k(t){var e=t.components,o=(0,i.Z)(t,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u624b\u52a8\u5b89\u88c5"},"\u624b\u52a8\u5b89\u88c5"),(0,r.kt)("h2",{id:"enhance-kit-v100"},"Enhance Kit v1.0.0"),(0,r.kt)("p",null,"\u9002\u914d Cocos Creator v2.4.9 \u7248\u672c\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/smallmain/cocos-enhance-kit/releases/tag/v1.0.0"},"\u70b9\u6b64\u4e0b\u8f7d\u589e\u5f3a\u5305")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u6807\u51c6\u5b89\u88c5"},"\u6807\u51c6\u5b89\u88c5"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u786e\u4fdd\u60a8\u7684\u9879\u76ee\u6240\u4f7f\u7528\u7684\u5f15\u64ce\u7248\u672c\u4e0e\u589e\u5f3a\u5305\u9002\u914d\u7684\u5f15\u64ce\u7248\u672c\u4e00\u81f4\uff0c\u5426\u5219\u8bf7\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"strong",href:"#%E8%A1%A5%E4%B8%81%E5%AE%89%E8%A3%85"},"\u8865\u4e01\u5b89\u88c5"),"\u3002")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5efa\u8bae\u5347\u7ea7\u5230\u6700\u65b0\u7684\u5f15\u64ce\u7248\u672c\uff0c\u5b98\u65b9\u53ea\u4f1a\u5bf9 2.x \u7248\u672c\u53ea\u4f1a\u8fdb\u884c\u7ef4\u62a4\u6027\u66f4\u65b0\uff0c\u6240\u4ee5\u4e0d\u7528\u62c5\u5fc3\u5176\u7a33\u5b9a\u6027\u95ee\u9898\u3002"),(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u7684\u9879\u76ee\u5f15\u64ce\u7248\u672c\u8f83\u4f4e\uff0c\u53ef\u4ee5\u770b\u4e00\u770b ",(0,r.kt)("a",{parentName:"p",href:"/cocos-enhance-kit/docs/1.0.0/installation-guide/installation-engine-plugin"},"\u4f7f\u7528\u5f15\u64ce\u6269\u5c55\u5b89\u88c5")," \uff0c\u652f\u6301\u5bf9\u591a\u4e2a\u5f15\u64ce\u7248\u672c\u8fdb\u884c\u4e00\u952e\u5b89\u88c5\u3002"))),(0,r.kt)("h3",{id:"1\u66ff\u6362\u81ea\u5b9a\u4e49\u5f15\u64ce"},"1.\u66ff\u6362\u81ea\u5b9a\u4e49\u5f15\u64ce"),(0,r.kt)("p",null,"\u4e0b\u8f7d\u589e\u5f3a\u5305\u540e\uff0c\u89e3\u538b\u538b\u7f29\u5305\u53ef\u4ee5\u770b\u5230\u538b\u7f29\u5305\u5185\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"engine")," ",(0,r.kt)("inlineCode",{parentName:"p"},"cocos2d-x")," ",(0,r.kt)("inlineCode",{parentName:"p"},"jsb-adapter")," \u8fd9\u4e09\u4e2a\u76ee\u5f55\u5206\u522b\u662f\u5df2\u7ecf\u6574\u7406\u597d\u7684 ",(0,r.kt)("strong",{parentName:"p"},"JavaScript \u5f15\u64ce"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"Cocos2d-x \u5f15\u64ce")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"jsb-adpater"),"\u3002"),(0,r.kt)("p",null,"\u63a5\u7740\u6253\u5f00 Cocos Creator \u83dc\u5355\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u9879\u76ee - \u9879\u76ee\u8bbe\u7f6e - \u81ea\u5b9a\u4e49\u5f15\u64ce"),"\u3002"),(0,r.kt)("p",null,"\u5206\u522b\u586b\u5199 ",(0,r.kt)("strong",{parentName:"p"},"JavaScript \u5f15\u64ce\u8def\u5f84"),"\uff08\u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"p"},"engine")," \u76ee\u5f55\uff09\u548c ",(0,r.kt)("strong",{parentName:"p"},"Cocos2d-x \u5f15\u64ce\u8def\u5f84"),"\uff08\u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"p"},"cocos2d-x")," \u76ee\u5f55\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"custom-engine",src:n(38233).Z,width:"1196",height:"1134"})),(0,r.kt)("p",null,"\u7136\u540e\u70b9\u51fb Cocos Creator \u4e3b\u754c\u9762\u53f3\u4e0a\u89d2\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u7f16\u8f91\u5668")," \u6309\u94ae\uff0c\u8fdb\u5165\u5230\u7f16\u8f91\u5668\u7684\u8d44\u6e90\u76ee\u5f55\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ide-cocos-path",src:n(68796).Z,width:"686",height:"70"})),(0,r.kt)("p",null,"\u63a5\u7740\u4f7f\u7528\u538b\u7f29\u5305\u5185\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"jsb-adapter")," \u66ff\u6362\u6389\u7f16\u8f91\u5668\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Resources/builtin/jsb-adapter")," \u76ee\u5f55\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u7684\u9879\u76ee\u4e0d\u9700\u8981\u5728\u539f\u751f\u5e73\u53f0\u4e0a\u8fd0\u884c\uff0c\u5219\u53ea\u5b9a\u5236 JavaScript \u5f15\u64ce\u5373\u53ef\u3002"))),(0,r.kt)("h3",{id:"2\u5b89\u88c5\u5f15\u64ce\u6269\u5c55"},"2.\u5b89\u88c5\u5f15\u64ce\u6269\u5c55"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u52ff\u5c06\u6b64\u5f15\u64ce\u6269\u5c55\u4e0e ",(0,r.kt)("a",{parentName:"strong",href:"./installation-engine-plugin"},"\u4f7f\u7528\u5f15\u64ce\u6269\u5c55\u5b89\u88c5")," \u4e2d\u7684\u5f15\u64ce\u6269\u5c55\u6df7\u6dc6\uff01")),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"\u8be5\u6269\u5c55\u63d0\u4f9b\u4e86\u5fc5\u9700\u7684\u5185\u7f6e\u8d44\u6e90\uff0c\u662f\u589e\u5f3a\u5305\u5f00\u6e90\u7684\u4e00\u90e8\u5206\uff0c\u8bf7\u52ff\u540c\u65f6\u5b89\u88c5\u4e24\u4e2a\u5f15\u64ce\u6269\u5c55\uff0c\u8fd9\u4f1a\u5f15\u8d77\u51b2\u7a81\uff01")))),(0,r.kt)("p",null,"\u538b\u7f29\u5305\u5185 ",(0,r.kt)("inlineCode",{parentName:"p"},"enhance-kit-support")," \u76ee\u5f55\u5373\u662f\u6269\u5c55\u672c\u8eab\uff0c\u5c06\u5176\u653e\u5230\u9879\u76ee\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"packages")," \u76ee\u5f55\u5373\u53ef\u3002"),(0,r.kt)("p",null,"\u589e\u5f3a\u5305\u9700\u8981\u4f7f\u7528\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"sp")," \u7684 AssetBundle \u5b58\u653e\u8d44\u6e90\uff0c\u5982\u679c\u4f60\u7684\u9879\u76ee\u6709\u4f7f\u7528 AssetBundle\uff0c\u8bf7",(0,r.kt)("strong",{parentName:"p"},"\u786e\u4fdd\u8be5\u540d\u79f0\u672a\u88ab\u5360\u7528"),"\u3002"),(0,r.kt)("p",null,"\u6ca1\u6709\u5fc5\u8981\u5c06\u8fd9\u4e2a Asset Bundle \u8bbe\u4e3a\u8fdc\u7a0b\u5305\u6216\u8005 Zip \u538b\u7f29\uff0c\u91cc\u9762\u53ea\u6709 Effect \u7740\u8272\u5668\u8d44\u6e90\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u8be6\u60c5\u53ef\u9605\u8bfb\u5b98\u65b9\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cocos.com/creator/2.4/manual/zh/extension/install-and-share.html"},"\u5b89\u88c5\u6269\u5c55")," \u6587\u6863\u3002"),(0,r.kt)("h3",{id:"3typescript-\u7c7b\u578b\u63d0\u793a\u53ef\u9009"},"3.TypeScript \u7c7b\u578b\u63d0\u793a\uff08\u53ef\u9009\uff09"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u7684\u9879\u76ee\u4f7f\u7528 TypeScript\uff0c\u53ef\u5c06\u538b\u7f29\u5305\u5185 ",(0,r.kt)("inlineCode",{parentName:"p"},"creator-sp.d.ts")," \u6587\u4ef6\u62f7\u8d1d\u5230\u9879\u76ee\u6839\u76ee\u5f55\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dts",src:n(38433).Z,width:"712",height:"164"})),(0,r.kt)("p",null,"\u90e8\u5206\u4ee3\u7801\u7f16\u8f91\u5668\u53ef\u80fd\u9700\u8981\u91cd\u542f\u4e4b\u540e\u7c7b\u578b\u63d0\u793a\u624d\u4f1a\u751f\u6548\u3002"),(0,r.kt)("h3",{id:"4\u91cd\u542f-cocos-creator"},"4.\u91cd\u542f Cocos Creator"),(0,r.kt)("p",null,"\u5b8c\u6210\u4ee5\u4e0a\u7684\u6b65\u9aa4\u540e\u91cd\u542f Cocos Creator\u3002"),(0,r.kt)("p",null,"\u53ef\u5728\u9879\u76ee\u9884\u89c8\u65f6\u68c0\u67e5 Devtools Console \u6253\u5370\u7684\u662f\u5426\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Cocos Creator SP v2.4.x"),"\uff0c\u662f\u7684\u8bdd\u5219\u5df2\u7ecf\u6210\u529f\u5b89\u88c5\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5294).Z,width:"1081",height:"241"})),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u63a8\u8350\u4f60\u4ece ",(0,r.kt)("a",{parentName:"p",href:"/cocos-enhance-kit/docs/1.0.0/start-guide/start-guide-intro"},"\u5165\u95e8\u6559\u7a0b")," \u5f00\u59cb\u4e86\u89e3\u589e\u5f3a\u5305\u4e3a\u4f60\u7684\u5f00\u53d1\u90fd\u5e26\u6765\u4e86\u54ea\u4e9b\u65b0\u7279\u6027\uff01"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u8865\u4e01\u5b89\u88c5"},"\u8865\u4e01\u5b89\u88c5"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"\u5efa\u8bae\u81f3\u5c11\u5c06 Cocos Creator \u5347\u7ea7\u5230 v2.4.x \u7248\u672c\uff0c\u589e\u5f3a\u5305\u6240\u505a\u7684\u6539\u52a8\u4e0d\u4fdd\u8bc1\u5bf9 v2.4 \u7248\u672c\u4ee5\u4e0b\u7684\u517c\u5bb9\u6027\u3002")),(0,r.kt)("p",{parentName:"div"},"\u8865\u4e01\u5b89\u88c5\u9700\u8981\u638c\u63e1\u4e00\u5b9a\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/doc"},"Git")," \u77e5\u8bc6\u548c\u4fee\u6539\u5f15\u64ce\u6e90\u7801\u7684\u80fd\u529b\u3002"))),(0,r.kt)("p",null,"\u8865\u4e01\u5b89\u88c5\u5b9e\u9645\u4e0a\u5c31\u662f\u6253 Git Patch\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5728\u538b\u7f29\u5305\u5185\u7684 ",(0,r.kt)("inlineCode",{parentName:"strong"},"patches")," \u76ee\u5f55\u653e\u7740\u6700\u65b0\u7684 Git Patch \u6587\u4ef6\u3002")),(0,r.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u7406\u8bba\u4e0a\u53ef\u4ee5\u5728\u4efb\u610f\u7248\u672c\u7684\u5f15\u64ce\u4e0a\u8fdb\u884c\uff0c\u4f46\u7531\u4e8e\u8fd9\u79cd\u65b9\u5f0f\u5982\u679c\u9700\u8981\u6b63\u786e\u7684\u8fdb\u884c\u4e0b\u53bb\u672c\u5c31\u9700\u8981\u4f60\u62e5\u6709\u76f8\u5173\u7684\u77e5\u8bc6\u4e0e\u80fd\u529b\uff0c\u6240\u4ee5\u6211\u4eec\u4e0d\u4f1a\u8bf4\u7684\u5f88\u7ec6\u81f4\u3002"),(0,r.kt)("p",null,"Git Patch \u5b58\u50a8\u4e86\u6211\u4eec\u6240\u6709\u7684\u6e90\u7801\u63d0\u4ea4\u4fe1\u606f\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u53ea\u6311\u9009\u4f60\u60f3\u8981\u7684\u63d0\u4ea4\u8fdb\u884c\u5e94\u7528\uff0c\u5728\u5f15\u64ce\u76ee\u5f55\u53bb\u6253\u8865\u4e01\u6587\u4ef6\u5c31\u7b49\u540c\u4e8e\u5e94\u7528\u4e86\u6211\u4eec\u5bf9\u5f15\u64ce\u7684\u6539\u52a8\uff0c\u4e4b\u540e\u5c31\u53ef\u4ee5\u6309\u7167\u5b98\u65b9\u7684\u81ea\u5b9a\u4e49\u5f15\u64ce\u6587\u6863\u53bb\u4f7f\u7528\u4e86\u3002"),(0,r.kt)("p",null,"\u6253\u8865\u4e01\u4e00\u822c\u4f7f\u7528\u4e24\u79cd\u547d\u4ee4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u63d0\u4ea4\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"git am")),(0,r.kt)("li",{parentName:"ul"},"\u53ea\u5c06\u6539\u52a8\u4fdd\u7559\u5230\u5de5\u4f5c\u533a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"git apply"))),(0,r.kt)("p",null,"\u6700\u597d\u5728\u6253\u8865\u4e01\u65f6\u52a0\u4e0a\u8f93\u51fa\u8be6\u7ec6\u4fe1\u606f\u7684\u547d\u4ee4\u53c2\u6570\u4ee5\u66f4\u597d\u5730\u786e\u8ba4\u8865\u4e01\u5e94\u7528\u7684\u60c5\u51b5\u3002"),(0,r.kt)("p",null,"\u5e38\u89c1\u7684\u95ee\u9898\u662f\u6211\u4eec\u5728\u4ed3\u5e93\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"engine"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"jsb-adapter"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"cocos2d-x")," \u6587\u4ef6\u5939\u5b58\u653e\u6e90\u7801\uff0c\u90a3\u4e48\u63d0\u4f9b\u7684\u8865\u4e01\u6587\u4ef6\u5bf9\u6e90\u7801\u7684\u5e94\u7528\u8def\u5f84\u4e5f\u4f1a\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"./engine")," \u8fd9\u6837\u7684\u4e8c\u7ea7\u76ee\u5f55\uff0c\u5982\u679c\u4f60\u76f4\u63a5\u5728\u5f15\u64ce\u76ee\u5f55\u5e94\u7528\u8865\u4e01\uff0c\u53ef\u80fd\u4f1a\u53d1\u751f\u6ca1\u53cd\u5e94\u3001\u8865\u4e01\u88ab\u8df3\u8fc7\u7684\u95ee\u9898\uff0c\u9700\u8981\u4f7f\u7528\u76f8\u5e94\u7684\u547d\u4ee4\u53c2\u6570\u6765\u4fee\u6b63\u8865\u4e01\u5e94\u7528\u7684\u8def\u5f84\u3002"),(0,r.kt)("p",null,"\u5728\u5b8c\u6210\u81ea\u5b9a\u4e49\u5f15\u64ce\u7684\u5de5\u4f5c\u540e\uff0c\u8bf7\u522b\u5fd8\u4e86\u5b89\u88c5\u5f15\u64ce\u6269\u5c55\u54e6\u3002\uff08\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"#2%E5%AE%89%E8%A3%85%E5%BC%95%E6%93%8E%E6%89%A9%E5%B1%95"},"\u6807\u51c6\u5b89\u88c5\u7684\u7b2c 2 \u6b65"),"\u8fdb\u884c\u64cd\u4f5c\uff09\u3002"))}k.isMDXComponent=!0},38233:function(t,e,n){e.Z=n.p+"assets/images/custom-engine-b10844213e749d360ca03041db42661f.png"},38433:function(t,e){e.Z="data:image/png;base64,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"},68796:function(t,e){e.Z="data:image/png;base64,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"},5294:function(t,e,n){e.Z=n.p+"assets/images/installed-console-35205b4816104fc7211e69cda86c1b76.png"}}]);