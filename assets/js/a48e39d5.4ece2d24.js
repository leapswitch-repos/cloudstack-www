"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4181],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,y=p["".concat(l,".").concat(f)]||p[f]||h[f]||o;return r?a.createElement(y,i(i({ref:t},u),{},{components:r})):a.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},59:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={layout:"post",title:"Apache CloudStack registerUserKeys authorization vulnerability",tags:["announcement"],slug:"apache_cloudstack_registeruserkeys_authorization_vulnerability"},i=void 0,s={permalink:"/blog/apache_cloudstack_registeruserkeys_authorization_vulnerability",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2016-10-27-apache_cloudstack_registeruserkeys_authorization_vulnerability.md",source:"@site/blog/2016-10-27-apache_cloudstack_registeruserkeys_authorization_vulnerability.md",title:"Apache CloudStack registerUserKeys authorization vulnerability",description:"The CloudStack security team recently received notice of a significant vulnerability in a CloudStack API call - registerUserKeys. The original intention for this call was for it to only be exposed for integration work - eg not to the public network in general. A weakness in the API call's implementation allows a malicious user to reset the API keys for other users on the system, thus accessing resources and services available to that user. We have released CloudStack versions 4.8.1.1 and 4.9.0.1 with patches for this issue. More details about the release can be read on the official announcement post.",date:"2016-10-27T00:00:00.000Z",formattedDate:"October 27, 2016",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack registerUserKeys authorization vulnerability",tags:["announcement"],slug:"apache_cloudstack_registeruserkeys_authorization_vulnerability"},prevItem:{title:"Dnsmasq Vulnerabilities Advisory for CloudStack",permalink:"/blog/dnsmasq-vulnerabilities-advisory-for-cloudstack"},nextItem:{title:"Apache CloudStack\u2122 Collab Conference for June 2016",permalink:"/blog/apache_cloudstack_collab_conference_for"}},l={authorsImageUrls:[]},c=[],u={toc:c},p="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{href:"http://cloudstack.apache.org/security.html"},"CloudStack security team")," recently received notice of a significant vulnerability in a CloudStack API call - registerUserKeys. The original intention for this call was for it to only be exposed for integration work - eg not to the public network in general. A weakness in the API call's implementation allows a malicious user to reset the API keys for other users on the system, thus accessing resources and services available to that user. We have released CloudStack versions 4.8.1.1 and 4.9.0.1 with patches for this issue. More details about the release can be read on the ",(0,n.kt)("a",{href:"https://s.apache.org/qV5l"},"official announcement post"),"."),(0,n.kt)("p",null,"Some users may be protected from this weakness already, if they have configured their commands.properties file to limit access to this api call from the integration API port, instead of general API port. This can be accomplished by setting registerUserKeys to 1."),(0,n.kt)("p",null,'Users of Apache CloudStack version 4.9 whom are using the dynamic roles feature can delete the "Allow" rule for "registerUserKeys" for each non-administrator role under the Roles/Rules section of the user interface.'),(0,n.kt)("p",null,"Credit:",(0,n.kt)("br",null),"\nThis vulnerability was reported by Marc-Aur\xe8le Brothier from Exoscale.",(0,n.kt)("br",null)))}h.isMDXComponent=!0}}]);