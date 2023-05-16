"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=o,f=p["".concat(u,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(f,c(c({ref:t},i),{},{components:n})):a.createElement(f,c({ref:t},i))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<r;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={layout:"post",title:"Announcing Apache CloudStack\xae 4.12.0.0",tags:["announcement"],slug:"announcing-apache-cloudstack-4-12"},c=void 0,l={permalink:"/blog/announcing-apache-cloudstack-4-12",source:"@site/blog/2019-04-09-announcing-apache-cloudstack-4-12.md",title:"Announcing Apache CloudStack\xae 4.12.0.0",description:"The Apache\xae CloudStack\xae project is pleased to announce the release of the CloudStack 4.12.0.0. The CloudStack version 4.12.0.0 is a 4.12 non-LTS release, adding multiple features for those who want to access a fresh CloudStack prior to the next LTS. The release 4.12.0.0 combines 12 months of work and adds +200 commits, with multiple new features and fixes.",date:"2019-04-09T00:00:00.000Z",formattedDate:"April 9, 2019",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!0,authors:[],frontMatter:{layout:"post",title:"Announcing Apache CloudStack\xae 4.12.0.0",tags:["announcement"],slug:"announcing-apache-cloudstack-4-12"},prevItem:{title:"Announcing Apache CloudStack LTS Maintenance Release 4.11.3.0",permalink:"/blog/announcing-apache-cloudstack-lts-maintenance2"},nextItem:{title:"What's coming in CloudMonkey v6.0.0",permalink:"/blog/what-s-coming-in-cloudmonkey"}},u={authorsImageUrls:[]},s=[],i={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Apache",(0,o.kt)("sup",null,"\xae")," CloudStack",(0,o.kt)("sup",null,"\xae")," project is pleased to announce the release of the CloudStack 4.12.0.0. The CloudStack version 4.12.0.0 is a 4.12 non-LTS release, adding multiple features for those who want to access a fresh CloudStack prior to the next LTS. The release 4.12.0.0 combines 12 months of work and adds +200 commits, with multiple new features and fixes."),(0,o.kt)("p",null,"Apache CloudStack is an integrated Infrastructure-as-a-Service (IaaS) software platform that allows users to build feature-rich public and private cloud environments. CloudStack includes an intuitive user interface and rich API for managing the compute, networking, software, and storage resources. The project became an Apache top level project in March, 2013."),(0,o.kt)("p",null,"More information about Apache CloudStack can be found at\xa0",(0,o.kt)("a",{href:"http://cloudstack.apache.org/"},"http://cloudstack.apache.org/"),(0,o.kt)("br",null),(0,o.kt)("strong",null)),(0,o.kt)("p",null," "),(0,o.kt)("p",null,(0,o.kt)("strong",null,"# Documentation")),(0,o.kt)("p",null,"What's new in CloudStack 4.12.0.0\xa0",(0,o.kt)("a",{href:"http://docs.cloudstack.apache.org/en/4.12.0.0/releasenotes/about.html"},"http://docs.cloudstack.apache.org/en/4.12.0.0/releasenotes/about.html")),(0,o.kt)("p",null,"The 4.12.0.0 release notes include a full list of corrected issues, as well as upgrade instructions from previous versions of Apache CloudStack, and can be found at\xa0",(0,o.kt)("a",{href:"http://docs.cloudstack.apache.org/en/4.12.0.0/upgrading/index.html"},"http://docs.cloudstack.apache.org/en/4.12.0.0/upgrading/index.html")),(0,o.kt)("p",null,"The official installation, administration and API documentation for each release are available on our Documentation Page\xa0",(0,o.kt)("a",{href:"http://docs.cloudstack.apache.org/en/4.12.0.0/"},"http://docs.cloudstack.apache.org/en/4.12.0.0/")),(0,o.kt)("p",null,(0,o.kt)("strong",null,"# Downloads")),(0,o.kt)("p",null,"The official source code for the 4.12.0.0 release can be downloaded from our downloads page ",(0,o.kt)("a",{href:"http://cloudstack.apache.org/downloads.html"},"http://cloudstack.apache.org/downloads.html")),(0,o.kt)("p",null,"The official source code release can be downloaded from ",(0,o.kt)("a",{href:"http://cloudstack.apache.org/downloads.html"},"http://cloudstack.apache.org/downloads.html")),(0,o.kt)("p",null,"In addition to the official source code release, individual contributors have also made convenience binaries available on the Apache CloudStack download page, and can be found at\xa0",(0,o.kt)("a",{href:"https://download.cloudstack.org/"},"https://download.cloudstack.org/")),(0,o.kt)("p",null,(0,o.kt)("br",null)),(0,o.kt)("p",null,(0,o.kt)("strong",null,"### END ### ")))}d.isMDXComponent=!0}}]);