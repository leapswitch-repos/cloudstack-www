"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8555],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=s(a),h=o,f=p["".concat(u,".").concat(h)]||p[h]||d[h]||r;return a?n.createElement(f,c(c({ref:t},i),{},{components:a})):n.createElement(f,c({ref:t},i))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<r;s++)c[s]=a[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},718:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const r={layout:"post",title:"Announcing Apache CloudStack\xae 4.12.0.0",slug:"announcing-apache-cloudstack-4-12"},c=void 0,l={permalink:"/blog/announcing-apache-cloudstack-4-12",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2019-04-09-announcing-apache-cloudstack-4-12.md",source:"@site/blog/2019-04-09-announcing-apache-cloudstack-4-12.md",title:"Announcing Apache CloudStack\xae 4.12.0.0",description:"The Apache\xae CloudStack\xae project is pleased to announce the release of the CloudStack 4.12.0.0. The CloudStack version 4.12.0.0 is a 4.12 non-LTS release, adding multiple features for those who want to access a fresh CloudStack prior to the next LTS. The release 4.12.0.0 combines 12 months of work and adds +200 commits, with multiple new features and fixes.",date:"2019-04-09T00:00:00.000Z",formattedDate:"April 9, 2019",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Announcing Apache CloudStack\xae 4.12.0.0",slug:"announcing-apache-cloudstack-4-12"},prevItem:{title:"Announcing Apache CloudStack LTS Maintenance Release 4.11.3.0",permalink:"/blog/announcing-apache-cloudstack-lts-maintenance2"},nextItem:{title:"What's coming in CloudMonkey v6.0.0",permalink:"/blog/what-s-coming-in-cloudmonkey"}},u={authorsImageUrls:[]},s=[],i={toc:s},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Apache",(0,o.kt)("sup",null,"\xae")," CloudStack",(0,o.kt)("sup",null,"\xae")," project is pleased to announce the release of the CloudStack 4.12.0.0. The CloudStack version 4.12.0.0 is a 4.12 non-LTS release, adding multiple features for those who want to access a fresh CloudStack prior to the next LTS. The release 4.12.0.0 combines 12 months of work and adds +200 commits, with multiple new features and fixes."),(0,o.kt)("p",null,"Apache CloudStack is an integrated Infrastructure-as-a-Service (IaaS) software platform that allows users to build feature-rich public and private cloud environments. CloudStack includes an intuitive user interface and rich API for managing the compute, networking, software, and storage resources. The project became an Apache top level project in March, 2013."),(0,o.kt)("p",null,"More information about Apache CloudStack can be found at\xa0",(0,o.kt)("a",{href:"http://cloudstack.apache.org/"},"http://cloudstack.apache.org/"),(0,o.kt)("br",null),(0,o.kt)("strong",null)),(0,o.kt)("p",null," "),(0,o.kt)("p",null,(0,o.kt)("strong",null,"# Documentation")),(0,o.kt)("p",null,"What's new in CloudStack 4.12.0.0\xa0",(0,o.kt)("a",{href:"http://docs.cloudstack.apache.org/en/4.12.0.0/releasenotes/about.html"},"http://docs.cloudstack.apache.org/en/4.12.0.0/releasenotes/about.html")),(0,o.kt)("p",null,"The 4.12.0.0 release notes include a full list of corrected issues, as well as upgrade instructions from previous versions of Apache CloudStack, and can be found at\xa0",(0,o.kt)("a",{href:"http://docs.cloudstack.apache.org/en/4.12.0.0/upgrading/index.html"},"http://docs.cloudstack.apache.org/en/4.12.0.0/upgrading/index.html")),(0,o.kt)("p",null,"The official installation, administration and API documentation for each release are available on our Documentation Page\xa0",(0,o.kt)("a",{href:"http://docs.cloudstack.apache.org/en/4.12.0.0/"},"http://docs.cloudstack.apache.org/en/4.12.0.0/")),(0,o.kt)("p",null,(0,o.kt)("strong",null,"# Downloads")),(0,o.kt)("p",null,"The official source code for the 4.12.0.0 release can be downloaded from our downloads page ",(0,o.kt)("a",{href:"http://cloudstack.apache.org/downloads.html"},"http://cloudstack.apache.org/downloads.html")),(0,o.kt)("p",null,"The official source code release can be downloaded from ",(0,o.kt)("a",{href:"http://cloudstack.apache.org/downloads.html"},"http://cloudstack.apache.org/downloads.html")),(0,o.kt)("p",null,"In addition to the official source code release, individual contributors have also made convenience binaries available on the Apache CloudStack download page, and can be found at\xa0",(0,o.kt)("a",{href:"https://download.cloudstack.org/"},"https://download.cloudstack.org/")),(0,o.kt)("p",null,(0,o.kt)("br",null)),(0,o.kt)("p",null,(0,o.kt)("strong",null,"### END ### ")))}d.isMDXComponent=!0}}]);