"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,b=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={layout:"post",title:"[ADVISORY] Apache CloudStack SAML Single Sign-On XXE (CVE-2022-35741)",slug:"cve-2022-35741"},o=void 0,l={permalink:"/blog/cve-2022-35741",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/blog/2022-07-18-cve-2022-35741.md",source:"@site/blog/2022-07-18-cve-2022-35741.md",title:"[ADVISORY] Apache CloudStack SAML Single Sign-On XXE (CVE-2022-35741)",description:"Apache CloudStack version 4.5.0 and later has a SAML 2.0 authentication Service Provider plugin which is found to be vulnerable to XML external entity (XXE) injection. This plugin is not enabled by default and the attacker would require that this plugin be enabled to exploit the vulnerability. When the SAML 2.0 plugin is enabled in affected versions of Apache CloudStack could potentially allow the exploitation of XXE vulnerabilities. The SAML 2.0 messages constructed during the authentication flow in Apache CloudStack are XML-based and the XML data is parsed by various standard libraries that are now understood to be vulnerable to XXE injection attacks such as arbitrary file reading, possible denial of service, server-side request forgery (SSRF) on the CloudStack management server.",date:"2022-07-18T00:00:00.000Z",formattedDate:"July 18, 2022",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"[ADVISORY] Apache CloudStack SAML Single Sign-On XXE (CVE-2022-35741)",slug:"cve-2022-35741"},prevItem:{title:"Apache CloudStack LTS Maintenance Release 4.17.1.0",permalink:"/blog/apache-cloudstack-lts-release-41710"},nextItem:{title:"Meet the Community - K B Shiv Kumar ",permalink:"/blog/meet-the-community-k-b"}},c={authorsImageUrls:[]},s=[],u={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{href:"/img/imported/dc6a0532-c5b5-4ed0-b2f8-f40197d2d577"},(0,a.kt)("img",{src:"/img/imported/dc6a0532-c5b5-4ed0-b2f8-f40197d2d577",alt:"Screenshot 2022-07-18 at 15.33.00.png",width:"750",height:"393"})),(0,a.kt)("p",null,"Apache CloudStack version 4.5.0 and later has a SAML 2.0 authentication Service Provider plugin which is found to be vulnerable to XML external entity (XXE) injection. This plugin is not enabled by default and the attacker would require that this plugin be enabled to exploit the vulnerability. When the SAML 2.0 plugin is enabled in affected versions of Apache CloudStack could potentially allow the exploitation of XXE vulnerabilities. The SAML 2.0 messages constructed during the authentication flow in Apache CloudStack are XML-based and the XML data is parsed by various standard libraries that are now understood to be vulnerable to XXE injection attacks such as arbitrary file reading, possible denial of service, server-side request forgery (SSRF) on the CloudStack management server."),(0,a.kt)("p",null,"As of 18th July 2022, this is now tracked under CVE-2022-35741: ",(0,a.kt)("a",{href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-35741"},"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-35741")),(0,a.kt)("p",null,"To mitigate the risk, a CloudStack admin can do any of the following:"),(0,a.kt)("p",null,"1. Disable the SAML 2.0 plugin by setting `saml2.enabled` to false and restart the management servers."),(0,a.kt)("p",null,"2. Upgrade to Apache CloudStack 4.16.1.1 or 4.17.0.1 or higher."),(0,a.kt)("p",null,(0,a.kt)("b",null,"Credit"),'This issue was discovered and reported by "v3ged0ge".'))}p.isMDXComponent=!0}}]);