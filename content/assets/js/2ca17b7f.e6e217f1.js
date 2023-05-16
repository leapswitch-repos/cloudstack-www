"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1564],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,y=p["".concat(l,".").concat(h)]||p[h]||f[h]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2418:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={layout:"post",title:"Apache CloudStack registerUserKeys authorization vulnerability",tags:["announcement"],slug:"apache_cloudstack_registeruserkeys_authorization_vulnerability"},i=void 0,s={permalink:"/blog/apache_cloudstack_registeruserkeys_authorization_vulnerability",source:"@site/blog/2016-10-27-apache_cloudstack_registeruserkeys_authorization_vulnerability.md",title:"Apache CloudStack registerUserKeys authorization vulnerability",description:"The CloudStack security team recently received notice of a significant vulnerability in a CloudStack API call - registerUserKeys. The original intention for this call was for it to only be exposed for integration work - eg not to the public network in general. A weakness in the API call's implementation allows a malicious user to reset the API keys for other users on the system, thus accessing resources and services available to that user. We have released CloudStack versions 4.8.1.1 and 4.9.0.1 with patches for this issue. More details about the release can be read on the official announcement post.",date:"2016-10-27T00:00:00.000Z",formattedDate:"October 27, 2016",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!0,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack registerUserKeys authorization vulnerability",tags:["announcement"],slug:"apache_cloudstack_registeruserkeys_authorization_vulnerability"},prevItem:{title:"Dnsmasq Vulnerabilities Advisory for CloudStack",permalink:"/blog/dnsmasq-vulnerabilities-advisory-for-cloudstack"},nextItem:{title:"Apache CloudStack\u2122 Collab Conference for June 2016",permalink:"/blog/apache_cloudstack_collab_conference_for"}},l={authorsImageUrls:[]},c=[],u={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{href:"http://cloudstack.apache.org/security.html"},"CloudStack security team")," recently received notice of a significant vulnerability in a CloudStack API call - registerUserKeys. The original intention for this call was for it to only be exposed for integration work - eg not to the public network in general. A weakness in the API call's implementation allows a malicious user to reset the API keys for other users on the system, thus accessing resources and services available to that user. We have released CloudStack versions 4.8.1.1 and 4.9.0.1 with patches for this issue. More details about the release can be read on the ",(0,a.kt)("a",{href:"https://s.apache.org/qV5l"},"official announcement post"),"."))}f.isMDXComponent=!0}}]);