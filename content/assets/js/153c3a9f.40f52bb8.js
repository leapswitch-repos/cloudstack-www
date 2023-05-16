"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={layout:"post",title:"CloudStack Advisory on Spring4Shell (CVE-2022-22965&nbsp;and&nbsp;CVE-2022-22963)",tags:["announcement"],authors:["ivet"],slug:"cloudstack-advisory-on-spring4shell-cve"},i=void 0,l={permalink:"/blog/cloudstack-advisory-on-spring4shell-cve",source:"@site/blog/2022-04-14-cloudstack-advisory-on-spring4shell-cve.md",title:"CloudStack Advisory on Spring4Shell (CVE-2022-22965&nbsp;and&nbsp;CVE-2022-22963)",description:"At the beginning of April 2022, vulnerabilities in the Spring Framework for Java were publicly revealed. Many companies noticed active exploitation of the Spring4Shell vulnerability assigned as CVE-2022-22965. This vulnerability allows hackers to execute the Mirai botnet malware. The exploit allows threat actors to download the Mirai sample to the /tmp folder and execute them after changing its execute permission using chmod.",date:"2022-04-14T00:00:00.000Z",formattedDate:"April 14, 2022",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!0,authors:[{name:"Ivet Petrova",title:"PMC Member",url:"https://github.com/IvetPM",imageURL:"https://github.com/IvetPM.png",key:"ivet"}],frontMatter:{layout:"post",title:"CloudStack Advisory on Spring4Shell (CVE-2022-22965&nbsp;and&nbsp;CVE-2022-22963)",tags:["announcement"],authors:["ivet"],slug:"cloudstack-advisory-on-spring4shell-cve"},prevItem:{title:"Meet the Community - Simon Weller - VP of Apache CloudStack",permalink:"/blog/meet-the-community-simon-weller"},nextItem:{title:"CloudStack European User Group Virtual - April 7th, 2022",permalink:"/blog/cloudstack-european-user-group-virtual"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At the beginning of April 2022, vulnerabilities in the Spring Framework for Java were publicly revealed. Many companies noticed active exploitation of the Spring4Shell vulnerability assigned as CVE-2022-22965. This vulnerability allows hackers to execute the Mirai botnet malware. The exploit allows threat actors to download the Mirai sample to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp")," folder and execute them after changing its execute permission using ",(0,o.kt)("inlineCode",{parentName:"p"},"chmod"),"."))}m.isMDXComponent=!0}}]);