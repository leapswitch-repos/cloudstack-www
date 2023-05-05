"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4923],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(a),h=o,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return a?n.createElement(f,c(c({ref:t},i),{},{components:a})):n.createElement(f,c({ref:t},i))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var u=2;u<r;u++)c[u]=a[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7872:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));const r={layout:"post",title:"Announcing Apache CloudStack LTS Maintenance Release 4.11.3.0",slug:"announcing-apache-cloudstack-lts-maintenance2"},c=void 0,l={permalink:"/blog/announcing-apache-cloudstack-lts-maintenance2",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2019-07-13-announcing-apache-cloudstack-lts-maintenance2.md",source:"@site/blog/2019-07-13-announcing-apache-cloudstack-lts-maintenance2.md",title:"Announcing Apache CloudStack LTS Maintenance Release 4.11.3.0",description:"The Apache CloudStack project is pleased to announce the release of CloudStack 4.11.3.0 as part of its LTS 4.11.x releases. The CloudStack",date:"2019-07-13T00:00:00.000Z",formattedDate:"July 13, 2019",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Announcing Apache CloudStack LTS Maintenance Release 4.11.3.0",slug:"announcing-apache-cloudstack-lts-maintenance2"},prevItem:{title:"The Apache Software Foundation Announces Apache\xae CloudStack\xae v4.13",permalink:"/blog/the-apache-software-foundation-announces"},nextItem:{title:"Announcing Apache CloudStack\xae 4.12.0.0",permalink:"/blog/announcing-apache-cloudstack-4-12"}},s={authorsImageUrls:[]},u=[],i={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Apache CloudStack project is pleased to announce the release of CloudStack 4.11.3.0 as part of its LTS 4.11.x releases. The CloudStack\n4.11.3.0 release contains c. 50 fixes on top of the CloudStack 4.11.2.0 release. CloudStack LTS branches are supported for 20 months and will receive updates for the first 14 months. For the final six months, only security updates are provided."),(0,o.kt)("p",null,"Apache CloudStack is an integrated Infrastructure-as-a-Service (IaaS) software platform allowing users to build feature-rich public and private cloud environments. CloudStack includes an intuitive user interface and rich API for managing the compute, networking, software, and storage resources. The project became an Apache top level project in March, 2013.\nore information about Apache CloudStack can be found at:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://cloudstack.apache.org/"},"http://cloudstack.apache.org/")),(0,o.kt)("h1",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"The 4.11.3.0 release notes include a full list of issues fixed:\n",(0,o.kt)("a",{parentName:"p",href:"http://docs.cloudstack.apache.org/en/4.11.3.0/releasenotes/fixed_issues.html"},"http://docs.cloudstack.apache.org/en/4.11.3.0/releasenotes/fixed_issues.html")),(0,o.kt)("p",null,"The CloudStack documentation includes upgrade instructions from previous versions of Apache CloudStack, and can be found at:\n",(0,o.kt)("a",{parentName:"p",href:"http://docs.cloudstack.apache.org/en/4.11.3.0/upgrading/index.html"},"http://docs.cloudstack.apache.org/en/4.11.3.0/upgrading/index.html")),(0,o.kt)("p",null,"The official installation, administration and API documentation for each of the releases are available on our documentation page:\n",(0,o.kt)("a",{parentName:"p",href:"http://docs.cloudstack.apache.org/"},"http://docs.cloudstack.apache.org/")),(0,o.kt)("h1",{id:"downloads"},"Downloads"),(0,o.kt)("p",null,"The official source code for the 4.11.3.0 release can be downloaded from our downloads page:\n",(0,o.kt)("a",{parentName:"p",href:"http://cloudstack.apache.org/downloads.html"},"http://cloudstack.apache.org/downloads.html")),(0,o.kt)("p",null,"In addition to the official source code release, individual contributors have also made convenience binaries available on the Apache CloudStack download page, and can be found at:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://download.cloudstack.org/ubuntu/dists/"},"http://download.cloudstack.org/ubuntu/dists/"),"\n",(0,o.kt)("a",{parentName:"p",href:"http://download.cloudstack.org/centos/6/"},"http://download.cloudstack.org/centos/6/"),"\n",(0,o.kt)("a",{parentName:"p",href:"http://download.cloudstack.org/centos/7/"},"http://download.cloudstack.org/centos/7/"),"\n",(0,o.kt)("a",{parentName:"p",href:"http://www.shapeblue.com/packages/"},"http://www.shapeblue.com/packages/")))}d.isMDXComponent=!0}}]);