"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4765],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95070:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],p={sidebar_position:2,description:"\u968f\u5fc3\u6240\u6b32\u5730\u66f4\u6362 Spine \u52a8\u753b\u7684\u90e8\u4efd\u7eb9\u7406\u3002"},l="SpriteFrame \u6362\u88c5",s={unversionedId:"user-guide/spine/spine-skin",id:"version-1.2.0/user-guide/spine/spine-skin",title:"SpriteFrame \u6362\u88c5",description:"\u968f\u5fc3\u6240\u6b32\u5730\u66f4\u6362 Spine \u52a8\u753b\u7684\u90e8\u4efd\u7eb9\u7406\u3002",source:"@site/versioned_docs/version-1.2.0/user-guide/spine/spine-skin.md",sourceDirName:"user-guide/spine",slug:"/user-guide/spine/spine-skin",permalink:"/cocos-enhance-kit/docs/1.2.0/user-guide/spine/spine-skin",draft:!1,tags:[],version:"1.2.0",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"\u968f\u5fc3\u6240\u6b32\u5730\u66f4\u6362 Spine \u52a8\u753b\u7684\u90e8\u4efd\u7eb9\u7406\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u52a8\u6001\u5408\u56fe",permalink:"/cocos-enhance-kit/docs/1.2.0/user-guide/spine/spine-batch"},next:{title:"TiledMap",permalink:"/cocos-enhance-kit/docs/1.2.0/user-guide/tiledmap/tiledmap-intro"}},c={},u=[{value:"\u8ba4\u8bc6 RegionData",id:"\u8ba4\u8bc6-regiondata",level:2},{value:"\u4f7f\u7528 SpriteFrame \u4fee\u6539 Region \u6570\u636e",id:"\u4f7f\u7528-spriteframe-\u4fee\u6539-region-\u6570\u636e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u591a\u5b9e\u4f8b\u95ee\u9898",id:"\u591a\u5b9e\u4f8b\u95ee\u9898",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spriteframe-\u6362\u88c5"},"SpriteFrame \u6362\u88c5"),(0,i.kt)("p",null,"\u5f15\u64ce\u63d0\u4f9b\u4e86\u4e00\u4e2a\u66ff\u6362\u63d2\u69fd\u7684 attachment \u5bf9\u8c61\u8fdb\u884c\u6362\u88c5\u7684\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cocos.com/creator/2.4/manual/zh/components/spine.html"},"Spine \u7ec4\u4ef6\u53c2\u8003")," \u5b98\u65b9\u6587\u6863\u8fdb\u884c\u4e86\u89e3\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\u4f7f\u7528\u66ff\u6362\u63d2\u69fd\u7684 attachment \u5bf9\u8c61\u8fd9\u79cd\u65b9\u6cd5\u6bd4\u8f83\u7ed5\uff0c\u5e76\u4e14 Spine \u52a8\u753b\u4e2d\u6709\u5207\u6362 attachment \u7684\u5173\u952e\u5e27\u65f6\u8fd9\u79cd\u65b9\u6cd5\u5c31\u6ca1\u7528\u4e86\u3002"),(0,i.kt)("p",null,"\u800c attachment \u5bf9\u8c61\u6301\u6709\u4e00\u4e2a region \u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u7c7b\u4f3c\u5f15\u64ce\u7684 SpriteFrame\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 region \u5bf9\u8c61\u7684\u6570\u636e\u6765\u8fdb\u884c\u6362\u88c5\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u8ba4\u8bc6-regiondata"},"\u8ba4\u8bc6 RegionData"),(0,i.kt)("p",null,"\u8bf7\u52ff\u6df7\u6dc6 RegionData \u4e0e region\uff0cRegionData \u4e3b\u8981\u4f5c\u4e3a SpriteFrame \u548c region \u5bf9\u8c61\u4e4b\u95f4\u7684\u6865\u6881\uff0c\u5b9e\u73b0\u4e24\u8005\u7684\u76f8\u4e92\u8f6c\u6362\u3002"),(0,i.kt)("p",null,"\u5c06 SpriteFrame \u8f6c\u6362\u4e3a RegionData\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const regionData = new sp.RegionData(spriteFrame);\n")),(0,i.kt)("p",null,"\u5c06 RegionData \u8f6c\u6362\u4e3a SpriteFrame\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const spriteFrame = regionData.toSpriteFrame();\n")),(0,i.kt)("p",null,"\u5c06 attachment \u5bf9\u8c61\u7684 region \u6570\u636e\u8f6c\u6362\u4e3a RegionData \uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const regionData = new sp.RegionData(attachment);\n")),(0,i.kt)("p",null,"\u5c06 RegionData \u6570\u636e\u66f4\u65b0\u5230 attachment \u5bf9\u8c61\u4e0a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"regionData.assignToAttachment(attachment);\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Spine \u7684 Region \u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"90"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"180"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"270")," \u56db\u79cd\u65cb\u8f6c\u89d2\u5ea6\uff0c\u800c Cocos Creator \u7684 SpriteFrame \u53ea\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," \u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"270")," \u4e24\u79cd\u65cb\u8f6c\u89d2\u5ea6\uff0c\u6240\u4ee5\u5982\u679c\u662f RegionData \u8f6c\u4e3a SpriteFrame \u5219\u53ef\u80fd\u5bfc\u81f4\u65b9\u5411\u4e0d\u540c\u7684\u95ee\u9898\u3002"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u8981\u8fdb\u884c\u6362\u88c5\u7684\u8bdd\u4f7f\u7528\u7684\u662f SpriteFrame \u8f6c\u4e3a RegionData\uff0c\u6240\u4ee5\u4e0d\u7528\u62c5\u5fc3\u8fd9\u4e2a\u95ee\u9898\u3002")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u4f7f\u7528-spriteframe-\u4fee\u6539-region-\u6570\u636e"},"\u4f7f\u7528 SpriteFrame \u4fee\u6539 Region \u6570\u636e"),(0,i.kt)("p",null,"\u867d\u7136\u4f7f\u7528\u4e0a\u9762\u7684 RegionData \u5373\u53ef\u5b9e\u73b0\u4f7f\u7528 SpriteFrame \u6362\u88c5\u7684\u9700\u6c42\uff0c\u4f46\u6211\u4eec\u8fd8\u5728 Spine \u7ec4\u4ef6\u4e0a\u63d0\u4f9b\u4e86\u4e24\u4e2a\u66f4\u65b9\u4fbf\u7684\u63a5\u53e3\uff1a"),(0,i.kt)("p",null,"\u53ea\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"regionData.assignToAttachment(attachment)")," \u53ea\u4f1a\u4fee\u6539 SkeletonData \u7684\u6570\u636e\uff0c\u4f46\u4e0d\u4f1a\u89e6\u53d1 Spine \u7ec4\u4ef6\u7684\u6e32\u67d3\u66f4\u65b0\u3002"),(0,i.kt)("p",null,"\u63a8\u8350\u76f4\u63a5\u4f7f\u7528\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"skeletonComponent.setRegionData('Head', 'Head', new sp.RegionData(spriteFrame));\n")),(0,i.kt)("p",null,"\u5728\u4fee\u6539\u7684\u540c\u65f6\u5237\u65b0\u7ec4\u4ef6\u7684\u6e32\u67d3\u5b9e\u73b0\u6362\u88c5\uff0c\u5e76\u4e14\u4e0d\u4f1a\u6253\u65ad\u5f53\u524d\u6b63\u5728\u64ad\u653e\u7684\u52a8\u753b\u3002"),(0,i.kt)("p",null,"\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u901a\u8fc7 attachment \u540d\u79f0\u83b7\u53d6 RegionData \u7684\u63a5\u53e3\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"a.getRegion(slotName, attachmentName);\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("h3",{id:"\u591a\u5b9e\u4f8b\u95ee\u9898"},"\u591a\u5b9e\u4f8b\u95ee\u9898"),(0,i.kt)("p",null,"\u7531\u4e8e\u662f\u76f4\u63a5\u4fee\u6539 Spine \u7ec4\u4ef6\u6240\u4f7f\u7528 SkeletonData \u7684 attachment \u6570\u636e\uff0c\u6240\u4ee5\u6240\u6709 Spine \u7ec4\u4ef6\u90fd\u4f1a\u53d7\u5230\u5f71\u54cd\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u53ea\u60f3\u66ff\u6362\u5176\u4e2d\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u514b\u9686\u8fd9\u4e2a SkeletonData \u8ba9\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u4f7f\u7528\u4e0d\u540c\u7684 SkeletonData \u5b9e\u4f8b\u8fdb\u884c\u6e32\u67d3\u3002"),(0,i.kt)("p",null,"\u589e\u5f3a\u5305\u63d0\u4f9b\u4e86\u4e00\u4e2a\u514b\u9686\u6570\u636e\u7684\u63a5\u53e3\u6765\u5b9e\u73b0\u8fd9\u4e2a\u9700\u6c42\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const clonedSkeletonData = skeletonData.clone();\n")),(0,i.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0a\u4ee3\u7801\u514b\u9686 SkeletonData \u540e\u518d\u8fdb\u884c\u6362\u88c5\uff0c\u8d4b\u503c\u7ed9 Spine \u7ec4\u4ef6\uff0c\u90a3\u4e48\u66ff\u6362\u64cd\u4f5c\u5c31\u53ea\u4f1a\u5bf9\u8fd9\u4e2a Spine \u7ec4\u4ef6\u751f\u6548\u3002"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u4ee5\u4e0a\u6240\u6709\u7528\u6cd5\u4f60\u53ef\u4ee5\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://smallmain.gitee.io/cocos-enhance-kit/demo/v1.0.0/web-desktop/index.html"},"\u6f14\u793a\u9879\u76ee")," \u4e2d\u627e\u5230\u793a\u8303\u4ee3\u7801\u3002"))}d.isMDXComponent=!0}}]);