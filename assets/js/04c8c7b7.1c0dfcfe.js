"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7048],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=i(a),m=o,k=s["".concat(c,".").concat(m)]||s[m]||d[m]||r;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:o,l[1]=p;for(var i=2;i<r;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2008:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var n=a(7462),o=(a(7294),a(3905));const r={layout:"post",title:"Apache CloudStack 4.18.0.0 LTS Release",authors:["ivet"],tags:["announcement"],slug:"apache-cloudstack-4-18-0"},l=void 0,p={permalink:"/blog/apache-cloudstack-4-18-0",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2023-03-20-apache-cloudstack-4-18.md",source:"@site/blog/2023-03-20-apache-cloudstack-4-18.md",title:"Apache CloudStack 4.18.0.0 LTS Release",description:"The Apache Software Foundation Announces Apache\xae CloudStack\xae v4.18.",date:"2023-03-20T00:00:00.000Z",formattedDate:"March 20, 2023",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!1,authors:[{name:"Ivet Petrova",title:"PMC Member",url:"https://twitter.com/Ivet_H_Petrova",imageURL:"https://pbs.twimg.com/profile_images/1331984193392435200/djCqv-vM_400x400.jpg",key:"ivet"}],frontMatter:{layout:"post",title:"Apache CloudStack 4.18.0.0 LTS Release",authors:["ivet"],tags:["announcement"],slug:"apache-cloudstack-4-18-0"},prevItem:{title:"Day 2 at CloudFest",permalink:"/blog/day-2-at-cloudfest"},nextItem:{title:"CloudStack Helps proIO to Become a More Profitable and Successful Managed Service Provider",permalink:"/blog/becoming-a-profitable"}},c={authorsImageUrls:[void 0]},i=[{value:"Documentation",id:"documentation",level:2},{value:"Downloads",id:"downloads",level:2}],u={toc:i},s="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(s,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{href:"/img/imported/6f7aa770-3f15-45d0-b27a-c3666a659caf"},(0,o.kt)("img",{src:"/img/imported/6f7aa770-3f15-45d0-b27a-c3666a659caf",width:"100%"})),(0,o.kt)("p",null,"The Apache Software Foundation Announces Apache\xae CloudStack\xae v4.18."),(0,o.kt)("p",null,"Apache CloudStack 4.18.0.0 is a 4.18 LTS release with 300+ new features,\nimprovements, and bug fixes since 4.17, including 19 major new features. Some of\nthe highlights include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Edge Zones")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Autoscaling")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Managed User Data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Two-Factor Authentication Framework")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Support for Time-based OTP (TOTP) Authenticator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Volume Encryption")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"SDN Integration \u2013 Tungsten Fabric")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ceph Multi Monitor Support")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"API-Driven Console Access")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Console Access Security Improvements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"New Global settings UI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Configurable MTU for VR")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Adaptative Affinity Groups")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Custom DNS Servers for Networks")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Improved Guest OS Support Framework")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Support for Enterprise Linux 9")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Networker Backup Plugin for KVM Hypervisor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Custom Quota Tariffs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Secure VNC for KVM"))),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"The full list of new features can be found in the project release notes at:\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.cloudstack.apache.org/en/4.18.0.0/releasenotes/changes.html"},"https://docs.cloudstack.apache.org/en/4.18.0.0/releasenotes/changes.html")),(0,o.kt)("p",null,"The CloudStack documentation includes upgrade instructions from previous\nversions of Apache CloudStack, and can be found at:\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.cloudstack.apache.org/en/4.18.0.0/upgrading/index.html"},"https://docs.cloudstack.apache.org/en/4.18.0.0/upgrading/index.html")),(0,o.kt)("p",null,"The official installation, administration and API documentation for each of the\nreleases are available on our documentation page:\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.cloudstack.apache.org/"},"https://docs.cloudstack.apache.org/")),(0,o.kt)("h2",{id:"downloads"},"Downloads"),(0,o.kt)("p",null,"The official source code for the 4.18.0.0 release can be downloaded from our\ndownloads page: ",(0,o.kt)("a",{parentName:"p",href:"https://cloudstack.apache.org/downloads.html"},"https://cloudstack.apache.org/downloads.html")),(0,o.kt)("p",null,"In addition to the official source code release, individual contributors have\nalso made convenience binaries available on the Apache CloudStack download page,\nand can be found at:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://download.cloudstack.org/ubuntu/dists/"},"http://download.cloudstack.org/ubuntu/dists/")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://download.cloudstack.org/centos/7/"},"http://download.cloudstack.org/centos/7/")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://download.cloudstack.org/centos/8/"},"http://download.cloudstack.org/centos/8/")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://download.cloudstack.org/suse/15"},"http://download.cloudstack.org/suse/15")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.shapeblue.com/packages/"},"https://www.shapeblue.com/packages/")))}d.isMDXComponent=!0}}]);