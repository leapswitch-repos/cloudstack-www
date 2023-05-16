"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(a),h=o,f=p["".concat(i,".").concat(h)]||p[h]||d[h]||r;return a?n.createElement(f,c(c({ref:t},u),{},{components:a})):n.createElement(f,c({ref:t},u))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<r;s++)c[s]=a[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2700:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const r={layout:"post",title:"Announcing Apache CloudStack 4.2.0",tags:["announcement"],slug:"announcing_apache_cloudstack_4_2"},c=void 0,l={permalink:"/blog/announcing_apache_cloudstack_4_2",source:"@site/blog/2013-10-01-announcing_apache_cloudstack_4_2.md",title:"Announcing Apache CloudStack 4.2.0",description:"The Apache CloudStack project is excited to announce the 4.2 feature release of the CloudStack cloud orchestration platform. This is the next feature release of the 4.x line which first released on November 6, 2012 with the 4.1 release on June 5. This is the second major release from Apache CloudStack since its graduation from the Apache Incubator on March 20th.",date:"2013-10-01T00:00:00.000Z",formattedDate:"October 1, 2013",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Announcing Apache CloudStack 4.2.0",tags:["announcement"],slug:"announcing_apache_cloudstack_4_2"},prevItem:{title:"[CVE-2014-0031] CloudStack ListNetworkACL API discloses ACLs for other users",permalink:"/blog/cve_2014_0031_cloudstack_listnetworkacl"},nextItem:{title:"Announcing Apache CloudStack CloudMonkey 5.0.0!",permalink:"/blog/announcing_apache_cloudstack_cloudmonkey_5"}},i={authorsImageUrls:[]},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{href:"http://cloudstack.apache.org"},"Apache CloudStack")," project is excited to announce the 4.2 feature release of the CloudStack cloud orchestration platform. This is the next feature release of the 4.x line which first released on November 6, 2012 with the 4.1 release on June 5. This is the second major release from Apache CloudStack since its graduation from the Apache Incubator on March 20th."),(0,o.kt)("p",null,"This release represents over six months of work from the Apache CloudStack community with 57 new and 29 improved features being provided. Many new features incorporate contributions from major corporations and support for industry standards. New integrated support of the Cisco UCS compute chassis, SolidFire storage arrays, and the S3 storage protocol are just a few of the features available in this release."),(0,o.kt)("p",null,(0,o.kt)("strong",null,"Documentation")),(0,o.kt)("p",null,"The 4.2 release includes over 160 issues from 4.1.0 and 4.1.1 were fixed; including fixes for swift support, fixes to documentation, and more. Please see the ",(0,o.kt)("a",{href:"http://cloudstack.apache.org/docs/en-US/Apache_CloudStack/4.2.0/html/Release_Notes/index.html"},"Release Notes")," for a full list of corrected issues and upgrade instructions."),(0,o.kt)("p",null,"The official installation, administration and API documentation for each release are available on our ",(0,o.kt)("a",{href:"http://cloudstack.apache.org/docs/"},"Documentation Page"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",null,"Downloads")),(0,o.kt)("p",null,"The official source code for the 4.2 release can be downloaded from our ",(0,o.kt)("a",{href:"http://cloudstack.apache.org/downloads.html"},"Downloads Page"),"."),(0,o.kt)("p",null,"In addition to the official source code release, individual contributors have also made convenience binaries available on the",(0,o.kt)("a",{href:"http://cloudstack.apache.org/downloads.html"},"Apache CloudStack download page"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",null,"Apache CloudStack")),(0,o.kt)("p",null,"Apache CloudStack is an integrated Infrastructure-as-a-Service (IaaS) software platform that allows users to build feature-rich public and private cloud environments. CloudStack includes an intuitive user interface and rich APIs for managing the compute, networking, software, and storage infrastructure resources. The project became an Apache top level project in March 2013."),(0,o.kt)("p",null,"For additional marketing or communications information, please contact the ",(0,o.kt)("a",{href:"mailto:marketing@cloudstack.apache.org"},"marketing mailing list"),"."),(0,o.kt)("p",null,"To learn how to join and contribute to the Apache CloudStack community please visit our website at ",(0,o.kt)("a",{href:"http://cloudstack.apache.org"},"http://cloudstack.apache.org"),"."))}d.isMDXComponent=!0}}]);