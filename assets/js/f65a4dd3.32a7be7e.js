"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6327],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(a),h=r,f=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9429:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={layout:"post",title:"Apache CloudStack 4.1.0 Released",slug:"apache_cloudstack_4_1_0"},l=void 0,c={permalink:"/blog/apache_cloudstack_4_1_0",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2013-06-05-apache_cloudstack_4_1_0.md",source:"@site/blog/2013-06-05-apache_cloudstack_4_1_0.md",title:"Apache CloudStack 4.1.0 Released",description:"The Apache CloudStack project is pleased to announce the 4.1.0 release of the CloudStack Infrastructure-as-a-Service (IaaS) cloud orchestration platform. This is the first major release from Apache CloudStack since its graduation from the Apache Incubator on March 20th.",date:"2013-06-05T00:00:00.000Z",formattedDate:"June 5, 2013",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack 4.1.0 Released",slug:"apache_cloudstack_4_1_0"},prevItem:{title:"Apache CloudStack Weekly News - 10 June 2013",permalink:"/blog/apache_cloudstack_weekly_news_10"},nextItem:{title:"4.1.0 VOTE in Progress: Testers Welcome!",permalink:"/blog/4_1_0_vote_in"}},i={authorsImageUrls:[]},s=[],u={toc:s},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{href:"/img/imported/ab378739-3c34-48ea-9495-2c49e23e58d6"},(0,r.kt)("img",{src:"/img/imported/ab378739-3c34-48ea-9495-2c49e23e58d6?t=true",alt:"square-cloudmonkey.png",align:"left",vspace:"5",hspace:"5"}))," The Apache CloudStack project is pleased to announce the 4.1.0 release of the CloudStack Infrastructure-as-a-Service (IaaS) cloud orchestration platform. This is the first major release from Apache CloudStack since its graduation from the Apache Incubator on March 20th. "),(0,r.kt)("p",null,"Apache CloudStack is an integrated software platform that allows users to build a feature-rich IaaS. CloudStack includes an intuitive user interface and rich API for managing the compute, networking, accounting, and storage resources for private, hybrid, or public clouds. "),(0,r.kt)("p",null,"The 4.1.0 release represents more than five months of development effort by the Apache CloudStack community. The release includes many new features and bugfixes from the 4.0.x cycle. The 4.1.0 release also marks major changes in the codebase to make CloudStack easier for developers, a new structure for creating RPM/Debian packages, and completes the changeover to using Maven as a build tool."),(0,r.kt)("h2",{id:"newfeatures"},"New Features"),(0,r.kt)("p",null,"Some of the notable new features in Apache CloudStack 4.1.0 include:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"An API discovery service that allows an end point to list its supported APIs and their details."),(0,r.kt)("li",null,"Added an Events Framework to CloudStack to provide an \u201cevent bus\u201d with publish, subscribe, and unsubscribe semantics. Includes a RabbitMQ plugin that can interact with AMQP servers. Introduces the notion of a state change event."),(0,r.kt)("li",null,"Implement L3 router functionality in the Nicira NVP plugin, and including support for KVM (previously Xen-only)."),(0,r.kt)("li",null,"API request throttling to prevent attacks via frequent API requests."),(0,r.kt)("li",null,"AWS-style regions."),(0,r.kt)("li",null,"Egress firewall rules for guest networks."),(0,r.kt)("li",null,"Resizing root and data volumes."),(0,r.kt)("li",null,"Reset SSH key to access VMs."),(0,r.kt)("li",null,"Support for EC2 Query API."),(0,r.kt)("li",null,"Autoscaling support in conjunction with load balancing devices such as NetScaler.")),(0,r.kt)("h2",{id:"downloads"},"Downloads"),(0,r.kt)("p",null,"The official source is available from:"),(0,r.kt)("p",null,"http://cloudstack.apache.org/downloads.html"),(0,r.kt)("p",null,"In addition to the official source code release, individual contributors also make convenience binaries available. 4.1.0 convenience binaries should be available within a day or so of the release announcement."),(0,r.kt)("p",null,"Note that there is a known issue with 4.1.0 and a recent Tomcat release. This has been addressed in the convenience binaries, but is still present in 4.1.0 source release. We will be working on a 4.1.1 release that will contain that fix shortly."),(0,r.kt)("h2",{id:"cloudstackcollaborationconference"},"CloudStack Collaboration Conference"),(0,r.kt)("p",null,"The CloudStack community will be gathering for its second conference this month in Santa Clara, CA. The event will start on June 23rd with a hackathon, then formal programming on June 24th and 25th. This year we\u2019ve gotten some fantastic keynotes, including DevOps legend Gene Kim (author of \u201cThe Phoenix Project\u201d). You can find all the details at http://www.cloudstackcollab.org/, and the schedule at http://www.cloudstackcollab.org/schedule/. "),(0,r.kt)("h2",{id:"aboutapachecloudstack"},"About Apache CloudStack"),(0,r.kt)("p",null,"Apache CloudStack is a complete software suite for creating Infrastructure-as-a-Service (IaaS) clouds. Target environments include service providers and enterprises. It is used by many service providers to set up an on-demand, elastic cloud computing services and by enterprises to set up a private cloud for use by their own employees. Apache CloudStack is also available to individuals and organizations that wish to study and implement an IaaS for personal, educational, and/or production use."),(0,r.kt)("p",null,"Further information on Apache CloudStack can be found at cloudstack.apache.org."))}p.isMDXComponent=!0}}]);