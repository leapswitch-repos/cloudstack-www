"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9750],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),i=s(n),k=a,h=i["".concat(u,".").concat(k)]||i[k]||d[k]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=k;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[i]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={layout:"post",title:"Apache CloudStack 4.17.0.0 LTS Release",tags:["announcement"],slug:"apache-cloudstack-4-17-release"},l=void 0,c={permalink:"/blog/apache-cloudstack-4-17-release",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/blog/2022-06-07-apache-cloudstack-4-17-release.md",source:"@site/blog/2022-06-07-apache-cloudstack-4-17-release.md",title:"Apache CloudStack 4.17.0.0 LTS Release",description:"The Apache Software Foundation Announces Apache&reg; CloudStack&reg; v4.17",date:"2022-06-07T00:00:00.000Z",formattedDate:"June 7, 2022",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack 4.17.0.0 LTS Release",tags:["announcement"],slug:"apache-cloudstack-4-17-release"},prevItem:{title:"[ADVISORY] Apache CloudStack Advisory on KVM Shared Mount Point issues on version 4.17.0.0",permalink:"/blog/advisory-apache-cloudstack-advisory-on"},nextItem:{title:"What's New in Apache CloudStack 4.17",permalink:"/blog/what-s-new-in-apache1"}},u={authorsImageUrls:[]},s=[],p={toc:s},i="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(i,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"*The Apache Software Foundation Announces Apache**\xae** CloudStack**\xae** v4.17*",(0,a.kt)("br",null),(0,a.kt)("p",null,"Apache CloudStack 4.17.0.0 is a 4.17 LTS release with 383 new features, improvements and bug fixes since 4.16, including 16 major new features. Some of the highlights include:",(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IPv6 with Static Routing",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"Zero Downtime Upgrades",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"Virtual Router Live Patching",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"CloudStack Status ","&"," management",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"User Shared Networks",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"StorPool storage plugin",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"Storage-based Snapshots for KVM Instances",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"Attach and detach features to UI for ROOT disks",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"Enable CloudStack to use multiple LOCAL storage pools",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"Multiple SSH Keys support",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"Reserve and release Public IPs",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",null,"# Documentation"),(0,a.kt)("br",null),"The full list of new features can be found in the project release",(0,a.kt)("br",null),"notes at\xa0",(0,a.kt)("a",{href:"http://docs.cloudstack.apache.org/en/4.17.0.0/releasenotes/changes.html",rel:"noopener noreferrer",target:"_blank"},"http://docs.cloudstack.apache.org/en/4.17.0.0/releasenotes/changes.html"),(0,a.kt)("br",null))),(0,a.kt)("p",null,"The CloudStack documentation includes upgrade instructions from",(0,a.kt)("br",null),"\nprevious versions of Apache CloudStack, and can be found at:",(0,a.kt)("br",null)),(0,a.kt)("a",{href:"http://docs.cloudstack.apache.org/en/4.17.0.0/upgrading/index.html",rel:"noopener noreferrer",target:"_blank"},"http://docs.cloudstack.apache.org/en/4.17.0.0/upgrading/index.html"),(0,a.kt)("br",null),(0,a.kt)("p",null,"The official installation, administration and API documentation for",(0,a.kt)("br",null),"\neach of the releases are available on our documentation page:",(0,a.kt)("br",null)),(0,a.kt)("a",{href:"http://docs.cloudstack.apache.org/",rel:"noopener noreferrer",target:"_blank"},"http://docs.cloudstack.apache.org/"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",null,"# Downloads"),(0,a.kt)("br",null),"The official source code for the 4.17.0.0 release can be downloaded",(0,a.kt)("br",null),"from our downloads page:\xa0",(0,a.kt)("a",{href:"http://cloudstack.apache.org/downloads.html",rel:"noopener noreferrer",target:"_blank"},"http://cloudstack.apache.org/downloads.html"),(0,a.kt)("br",null),(0,a.kt)("p",null,"In addition to the official source code release, individual",(0,a.kt)("br",null),"\ncontributors have also made convenience binaries available on the",(0,a.kt)("br",null),"\nApache CloudStack download page, and can be found at:",(0,a.kt)("br",null)),(0,a.kt)("a",{href:"https://download.cloudstack.org/ubuntu/dists/",rel:"noopener noreferrer",target:"_blank"},"https://download.cloudstack.org/ubuntu/dists/"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://download.cloudstack.org/centos/7/",rel:"noopener noreferrer",target:"_blank"},"https://download.cloudstack.org/centos/7/"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://download.cloudstack.org/centos/8/",rel:"noopener noreferrer",target:"_blank"},"https://download.cloudstack.org/centos/8/"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://download.cloudstack.org/suse/15",rel:"noopener noreferrer",target:"_blank"},"https://download.cloudstack.org/suse/15"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://www.shapeblue.com/packages/",rel:"noopener noreferrer",target:"_blank"},"https://www.shapeblue.com/packages/")))}d.isMDXComponent=!0}}]);