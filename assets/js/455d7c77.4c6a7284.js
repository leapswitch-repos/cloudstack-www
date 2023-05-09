"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={layout:"post",title:"CloudStack Advisory on Insecure Project Invitation Token (CVE-2022-26779)",tags:["announcement"],authors:["daan"],slug:"cloudstack-advisory-on-insecure-project"},i=void 0,c={permalink:"/blog/cloudstack-advisory-on-insecure-project",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2022-03-16-cloudstack-advisory-on-insecure-project.md",source:"@site/blog/2022-03-16-cloudstack-advisory-on-insecure-project.md",title:"CloudStack Advisory on Insecure Project Invitation Token (CVE-2022-26779)",description:"Apache CloudStack prior to 4.16.1.0 used insecure random number generation for project invitation tokens. If a project invite is created based only on an email address, a random token is generated. An attacker with knowledge of the project ID and the fact that the invite is sent, could generate time deterministic tokens and brute force attempt to use them prior to the legitimate receiver accepting the invite.",date:"2022-03-16T00:00:00.000Z",formattedDate:"March 16, 2022",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!1,authors:[{name:"Daan Hoogland",title:"PMC Member",url:"https://github.com/DaanHoogland",imageURL:"https://github.com/DaanHoogland.png",key:"daan"}],frontMatter:{layout:"post",title:"CloudStack Advisory on Insecure Project Invitation Token (CVE-2022-26779)",tags:["announcement"],authors:["daan"],slug:"cloudstack-advisory-on-insecure-project"},prevItem:{title:"Meet the Community - Nicolas Vazquez",permalink:"/blog/meet-the-community-nicolas-vazquez"},nextItem:{title:"Meet the Community - Slavka Peleva",permalink:"/blog/meet-the-community-slavka-peleva"}},l={authorsImageUrls:[void 0]},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache CloudStack prior to 4.16.1.0 used insecure random number generation for project invitation tokens. If a project invite is created based only on an email address, a random token is generated. An attacker with knowledge of the project ID and the fact that the invite is sent, could generate time deterministic tokens and brute force attempt to use them prior to the legitimate receiver accepting the invite."),(0,o.kt)("p",null,"This feature is not enabled by default, the attacker is required to know or guess the project ID for the invite in addition to the invitation token, and the attacker would need to be an existing authorized user of CloudStack. Due to this the impact is considered low risk. As of 9th March 2022, this is now tracked under CVE-2021-44228: ",(0,o.kt)("a",{href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-26779"},"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-26779")),(0,o.kt)("p",null,"To mitigate the risk, a CloudStack admin can do any of the following:"),(0,o.kt)("p",null,"1. Disable the feature by setting `project.invitation.required` to false."),(0,o.kt)("p",null,"2. Disable the project SMTP global settings."),(0,o.kt)("p",null,"3. Upgrade to Apache CloudStack 4.16.1.0 or higher."))}d.isMDXComponent=!0}}]);