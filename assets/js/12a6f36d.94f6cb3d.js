"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=o,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,c(c({ref:t},u),{},{components:n})):a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<r;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={layout:"post",title:"Announcing Apache CloudStack LTS Maintenance Release 4.11.2.0",tags:["announcement"],slug:"announcing-apache-cloudstack-lts-maintenance1"},c=void 0,l={permalink:"/blog/announcing-apache-cloudstack-lts-maintenance1",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2018-11-26-announcing-apache-cloudstack-lts-maintenance1.md",source:"@site/blog/2018-11-26-announcing-apache-cloudstack-lts-maintenance1.md",title:"Announcing Apache CloudStack LTS Maintenance Release 4.11.2.0",description:"Announcing Apache CloudStack LTS Maintenance Release 4.11.2.0",date:"2018-11-26T00:00:00.000Z",formattedDate:"November 26, 2018",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Announcing Apache CloudStack LTS Maintenance Release 4.11.2.0",tags:["announcement"],slug:"announcing-apache-cloudstack-lts-maintenance1"},prevItem:{title:"What's coming in CloudMonkey v6.0.0",permalink:"/blog/what-s-coming-in-cloudmonkey"},nextItem:{title:"Announcing Apache CloudStack LTS Maintenance Release 4.11.1.0",permalink:"/blog/announcing-apache-cloudstack-lts-maintenance"}},i={authorsImageUrls:[]},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Announcing Apache CloudStack LTS Maintenance Release 4.11.2.0"),(0,o.kt)("p",null,"The Apache CloudStack project is pleased to announce the release of CloudStack 4.11.2.0 as part of its LTS 4.11.x releases. The CloudStack 4.11.2.0 release contains more than 70 fixes since the CloudStack 4.11.1.0 release. CloudStack LTS branches are supported for 20 months and will receive updates for the first 14 months. For the final six months only security updates are provided."),(0,o.kt)("p",null,"Apache CloudStack is an integrated Infrastructure-as-a-Service (IaaS) software platform allowing users to build feature-rich public and private cloud environments. CloudStack includes an intuitive user interface and rich API for managing the compute, networking, software, and storage resources. The project became an Apache top level project in March, 2013. More information about Apache CloudStack can be found at:\n",(0,o.kt)("a",{parentName:"p",href:"http://cloudstack.apache.org/"},"http://cloudstack.apache.org/")),(0,o.kt)("h1",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"The 4.11.2.0 release notes include a full list of issues fixed:\n",(0,o.kt)("a",{parentName:"p",href:"http://docs.cloudstack.apache.org/en/4.11.2.0/releasenotes/index.html"},"http://docs.cloudstack.apache.org/en/4.11.2.0/releasenotes/index.html")),(0,o.kt)("p",null,"The CloudStack documentation includes upgrade instructions from previous versions of Apache CloudStack, and can be found at:\n",(0,o.kt)("a",{parentName:"p",href:"http://docs.cloudstack.apache.org/en/4.11.2.0/upgrading/index.html"},"http://docs.cloudstack.apache.org/en/4.11.2.0/upgrading/index.html")),(0,o.kt)("p",null,"The official installation, administration and API documentation for each of the releases are available on our documentation page:\n",(0,o.kt)("a",{parentName:"p",href:"http://docs.cloudstack.apache.org/"},"http://docs.cloudstack.apache.org/")),(0,o.kt)("h1",{id:"downloads"},"Downloads"),(0,o.kt)("p",null,"The official source code for the 4.11.2.0 release can be downloaded from our downloads page:\n",(0,o.kt)("a",{parentName:"p",href:"http://cloudstack.apache.org/downloads.html"},"http://cloudstack.apache.org/downloads.html")),(0,o.kt)("p",null,"In addition to the official source code release, individual contributors have also made convenience binaries available on the Apache CloudStack download page, and can be found at:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://download.cloudstack.org/ubuntu/dists/"},"http://download.cloudstack.org/ubuntu/dists/"),"\n",(0,o.kt)("a",{parentName:"p",href:"http://download.cloudstack.org/centos/6/"},"http://download.cloudstack.org/centos/6/"),"\n",(0,o.kt)("a",{parentName:"p",href:"http://download.cloudstack.org/centos/7/"},"http://download.cloudstack.org/centos/7/"),"\n",(0,o.kt)("a",{parentName:"p",href:"http://www.shapeblue.com/packages/"},"http://www.shapeblue.com/packages/")))}d.isMDXComponent=!0}}]);