"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6580],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(a),h=n,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return a?r.createElement(f,l(l({ref:t},u),{},{components:a})):r.createElement(f,l({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:n,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7029:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=a(7462),n=(a(7294),a(3905));const o={layout:"post",title:"Apache CloudStack 4.1.1 Released",slug:"apache_cloudstack_4_1_1"},l=void 0,c={permalink:"/blog/apache_cloudstack_4_1_1",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2013-08-06-apache_cloudstack_4_1_1.md",source:"@site/blog/2013-08-06-apache_cloudstack_4_1_1.md",title:"Apache CloudStack 4.1.1 Released",description:"The Apache CloudStack project is pleased to announce the 4.1.1 release",date:"2013-08-06T00:00:00.000Z",formattedDate:"August 6, 2013",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack 4.1.1 Released",slug:"apache_cloudstack_4_1_1"},prevItem:{title:"[CVE-2013-2136] Apache CloudStack Cross-site scripting (XSS) vulnerabiliity",permalink:"/blog/cve_2013_2136_apache_cloudstack"},nextItem:{title:"Apache CloudStack Weekly News - 24 July 2013",permalink:"/blog/apache_cloudstack_weekly_news_24"}},s={authorsImageUrls:[]},i=[],u={toc:i},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Apache CloudStack project is pleased to announce the 4.1.1 release of the Apache CloudStack cloud orchestration platform."),(0,n.kt)("p",null,"This is a minor release of the 4.1.0 branch which released on June 5, 2013. The 4.1.1 release contains more than 45 bug fixes. As a bug-fix only release, no new features are included."),(0,n.kt)("p",null,"Apache CloudStack is an integrated Infrastructure-as-a-Service (IaaS) software platform that allows users to build feature-rich public and private cloud environments. CloudStack includes an intuitive user interface and rich API for managing the compute, networking, software, and storage resources. The project became an Apache top level project in arch 2013."),(0,n.kt)("p",null,"More information about Apache CloudStack can be found at: ",(0,n.kt)("a",{href:"http://cloudstack.apache.org/"},"http://cloudstack.apache.org/")),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Release Notes")),(0,n.kt)("p",null,"The 4.1.1 release includes fixes for a number of issues; including problems with snapshots, fixes to documentation, and more. Please see the Release Notes file for a full list of corrected issues in this release and upgrade instructions."),(0,n.kt)("p",null,(0,n.kt)("a",{href:"http://cloudstack.apache.org/docs/en-US/Apache_CloudStack/4.1.1/html/Release_Notes/index.html"},"http://cloudstack.apache.org/docs/en-US/Apache_CloudStack/4.1.1/html/Release_Notes/index.html")),(0,n.kt)("p",null,"The 4.1.1 release also addresses a cross-site scripting (XSS) vulnerability identified by CVE-2013-2136."),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Downloads")),(0,n.kt)("p",null,"The official source code release can be downloaded from:"),(0,n.kt)("p",null,(0,n.kt)("a",{href:"http://cloudstack.apache.org/downloads.html"},"http://cloudstack.apache.org/downloads.html")),(0,n.kt)("p",null,"In addition to the official source code release, individual contributors have also made convenience binaries available on the Apache CloudStack download page."))}d.isMDXComponent=!0}}]);