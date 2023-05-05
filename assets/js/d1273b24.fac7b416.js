"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4989],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),i=p(a),h=o,f=i["".concat(s,".").concat(h)]||i[h]||d[h]||r;return a?n.createElement(f,c(c({ref:t},u),{},{components:a})):n.createElement(f,c({ref:t},u))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[i]="string"==typeof e?e:o,c[1]=l;for(var p=2;p<r;p++)c[p]=a[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6427:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={layout:"post",title:"Apache CloudStack LTS Maintenance Release 4.15.2.0",slug:"apache-cloudstack-lts-maintenance-release2"},c="Apache CloudStack LTS Maintenance Release 4.15.2.0",l={permalink:"/blog/apache-cloudstack-lts-maintenance-release2",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2021-09-20-apache-cloudstack-lts-maintenance-release2.md",source:"@site/blog/2021-09-20-apache-cloudstack-lts-maintenance-release2.md",title:"Apache CloudStack LTS Maintenance Release 4.15.2.0",description:"The Apache CloudStack project is pleased to announce the release ofCloudStack 4.15.2.0.",date:"2021-09-20T00:00:00.000Z",formattedDate:"September 20, 2021",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack LTS Maintenance Release 4.15.2.0",slug:"apache-cloudstack-lts-maintenance-release2"},prevItem:{title:"Apache CloudStack CloudMonkey v6.2.0 Release",permalink:"/blog/apache-cloudstack-cloudmonkey-v6-2"},nextItem:{title:"CloudStack Kubernetes Provider v1.0.0 Release",permalink:"/blog/cloudstack-kubernetes-provider-v1-0"}},s={authorsImageUrls:[]},p=[],u={toc:p},i="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(i,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Apache CloudStack project is pleased to announce the release ofCloudStack 4.15.2.0."),(0,o.kt)("p",null,"The CloudStack 4.15.2.0 release is a maintenance release as part of its\n4.15.x \xa0LTS branch and contains more than 75 fixes and improvements since\nthe CloudStack 4.15.0.0 release."),(0,o.kt)("p",null,"CloudStack LTS branches are supported for 18 months and will receive\nupdates for the first 12 months and only security updates in the last 6\nmonths."),(0,o.kt)("p",null,"Apache CloudStack is an integrated Infrastructure-as-a-Service (IaaS)\nsoftware platform that allows users to build feature-rich public and\nprivate cloud environments. CloudStack includes an intuitive user interface\nand rich API for managing the compute, networking, software, and storage\nresources. The project became an Apache top-level project in March, 2013."),(0,o.kt)("p",null,"ore information about Apache CloudStack can be found at:\n",(0,o.kt)("a",{parentName:"p",href:"https://cloudstack.apache.org/"},"https://cloudstack.apache.org/")),(0,o.kt)("h1",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"What's new in \xa0CloudStack 4.15.2.0:\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.cloudstack.apache.org/en/4.15.2.0/releasenotes/about.html"},"https://docs.cloudstack.apache.org/en/4.15.2.0/releasenotes/about.html")),(0,o.kt)("p",null,"The 4.15.2.0 release notes include a full list of issues fixed, as well as\nupgrade instructions from previous versions of Apache CloudStack, and can\nbe found at:\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.cloudstack.apache.org/en/4.15.2.0/releasenotes/"},"https://docs.cloudstack.apache.org/en/4.15.2.0/releasenotes/")),(0,o.kt)("p",null,"The official installation, administration, and API documentation for each\nof the releases are available on our documentation page:\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.cloudstack.apache.org/"},"https://docs.cloudstack.apache.org/")),(0,o.kt)("h1",{id:"downloads"},"Downloads"),(0,o.kt)("p",null,"The official source code for the 4.15.2.0 release can be downloaded from\nour downloads page:\n",(0,o.kt)("a",{parentName:"p",href:"https://cloudstack.apache.org/downloads.html"},"https://cloudstack.apache.org/downloads.html")),(0,o.kt)("p",null,"In addition to the official source code release, individual contributors\nhave also made convenience binaries available on the Apache CloudStack\ndownload page, and can be found at:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://download.cloudstack.org/el/7/"},"https://download.cloudstack.org/el/7/"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://download.cloudstack.org/el/8/"},"https://download.cloudstack.org/el/8/"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://download.cloudstack.org/ubuntu/dists/"},"https://download.cloudstack.org/ubuntu/dists/"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.shapeblue.com/packages/"},"https://www.shapeblue.com/packages/")),(0,o.kt)("p",null,"--"))}d.isMDXComponent=!0}}]);