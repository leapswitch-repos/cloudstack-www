"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3407],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(a),h=n,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return a?o.createElement(f,i(i({ref:t},u),{},{components:a})):o.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8917:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=a(7462),n=(a(7294),a(3905));const r={layout:"post",title:"Announcing Apache CloudStack 4.3.0",slug:"announcing_apache_cloudstack_4_3"},i=void 0,l={permalink:"/blog/announcing_apache_cloudstack_4_3",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2014-03-25-announcing_apache_cloudstack_4_3.md",source:"@site/blog/2014-03-25-announcing_apache_cloudstack_4_3.md",title:"Announcing Apache CloudStack 4.3.0",description:"Flexible, scalable, Open Source Infrastructure as a Service (IaaS) used by organizations such as Zynga, Datapipe, and ISWest, among others, for creating, managing, and deploying public, private, and hybrid Cloud Computing environments",date:"2014-03-25T00:00:00.000Z",formattedDate:"March 25, 2014",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Announcing Apache CloudStack 4.3.0",slug:"announcing_apache_cloudstack_4_3"},prevItem:{title:"How to Mitigate OpenSSL HeartBleed Vulnerability in Apache CloudStack",permalink:"/blog/how_to_mitigate_openssl_heartbleed"},nextItem:{title:"Realhostip Service is Being Retired",permalink:"/blog/realhostip_service_is_being_retired"}},c={authorsImageUrls:[]},s=[],u={toc:s},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Flexible, scalable, Open Source Infrastructure as a Service (IaaS) used by organizations such as Zynga, Datapipe, and ISWest, among others, for creating, managing, and deploying public, private, and hybrid Cloud Computing environments"),(0,n.kt)("p",null,"Forest Hill, MD --25 March 2014-- The Apache Software Foundation (ASF), the all-volunteer developers, stewards, and incubators of more than 170 Open Source projects and initiatives, today announced Apache CloudStack v4.3, the latest feature release of the CloudStack cloud orchestration platform."),(0,n.kt)("p",null,'Apache CloudStack is an integrated Infrastructure-as-a-Service (IaaS) software platform that allows users to build feature-rich public, private, and hybrid cloud environments. CloudStack includes an intuitive user interface and rich APIs for managing the compute, networking, software, and storage infrastructure resources. CloudStack became an Apache Top-level Project (TLP) in March 2013. "We are proud to announce CloudStack v4.3," said Hugo Trippaers, Vice President of Apache CloudStack. "This release represents over six months of work from the Apache CloudStack community with many new and improved features."'),(0,n.kt)("h3",null,"Under The Hood"),(0,n.kt)("p",null,"CloudStack V4.3 is the next feature release of the 4.x line which first released on November 6, 2012. Some of the noteworthy new and improved features include:"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"Support for Microsoft Hyper-V - Apache CloudStack can now manage Hyper-V hypervisors in addition to KVM, XenServer, VMware, LXC, and Bare Metal"),(0,n.kt)("li",null,"Juniper OpenContrail integration - OpenContrail is a software defined networking controller from Juniper that CloudStack now integrates with to provide SDN services"),(0,n.kt)("li",null,"SSL Termination support for guest VMs - Apache CloudStack can configure and manage SSL termination in certain load balancer devices"),(0,n.kt)("li",null,"Palo Alto Firewall integration - Apache CloudStack can now manage and configure Palo Alto firewalls"),(0,n.kt)("li",null,"Remote access VPN for VPC networks - CloudStack's remote access VPN is now available for Virtual Private Cloud networks"),(0,n.kt)("li",null,"Site to Site VPN between VRs - CloudStack now allows site-to-site VPN connectivity to it's virtual routing devices. This permits your cloud computing environment to appear as a natural extension of your local network, or for you to easily interconnect multiple environments"),(0,n.kt)("li",null,"VXLAN support expansion to include KVM - CloudStack's support for integrating VXLAN, the network virtualization technology that attempts to ameliorate scalability problems with traditional networking"),(0,n.kt)("li",null,"SolidFire plugin extension to support KVM and hypervisor snapshots for XenServer and ESX - SolidFire provides guaranteed Storage Quality of Service at the Virtual Machine level"),(0,n.kt)("li",null,"Dynamic Compute offering - CloudStack now has the ability to dynamically scale the resources assigned to a running virtual machine instance for those hypervisors which support it")),(0,n.kt)("h3",null,"Downloads and Documentation"),(0,n.kt)("p",null,"The official source code for the v4.3 release, as well as individual contributors' convenience binaries, can be downloaded from the Apache CloudStack downloads page at ",(0,n.kt)("a",{href:"http://cloudstack.apache.org/downloads.html"},"http://cloudstack.apache.org/downloads.html")),(0,n.kt)("p",null,"The CloudStack 4.3 release includes over 110 issues from 4.2.0 and 4.2.1, including fixes for object storage support, documentation, and more. A full list of corrected issues and upgrade instructions are available in the Release Notes ",(0,n.kt)("a",{href:"http://docs.cloudstack.apache.org/projects/cloudstack-release-notes"},"http://docs.cloudstack.apache.org/projects/cloudstack-release-notes")),(0,n.kt)("p",null,"Official installation, administration, and API documentation for each release is available at ",(0,n.kt)("a",{href:"http://docs.cloudstack.apache.org/en/latest/"},"http://docs.cloudstack.apache.org/en/latest/"),"Apache CloudStack in Action"),(0,n.kt)("p",null,"Join members of the Apache CloudStack community at the CloudStack Collaboration Conference, taking place 9-11 April 2014 immediately following ApacheCon. For more information, visit ",(0,n.kt)("a",{href:"http://cloudstackcollab.org"},"http://cloudstackcollab.org")),(0,n.kt)("h3",null,"Availability and Oversight"),(0,n.kt)("p",null,"As with all Apache products, Apache CloudStack v4.3 is released under the Apache License v2.0, and is overseen by a self-selected team of active contributors to the project. A Project Management Committee (PMC) guides the Project\u2019s day-to-day operations, including community development and product releases. For documentation and ways to become involved with Apache CloudStack, visit http://cloudstack.apache.org/"),(0,n.kt)("h3",null,"About The Apache Software Foundation (ASF)"),(0,n.kt)("p",null,"Established in 1999, the all-volunteer Foundation oversees more than one hundred and seventy leading Open Source projects, including Apache HTTP Server --the world's most popular Web server software. Through the ASF's meritocratic process known as \"The Apache Way,\" more than 400 individual Members and 3,500 Committers successfully collaborate to develop freely available enterprise-grade software, benefiting millions of users worldwide: thousands of software solutions are distributed under the Apache License; and the community actively participates in ASF mailing lists, mentoring initiatives, and ApacheCon, the Foundation's official user conference, trainings, and expo. The ASF is a US 501(c)(3) charitable organization, funded by individual donations and corporate sponsors including Budget Direct, Citrix, Cloudera, Comcast, Facebook, Google, Hortonworks, HP, Huawei, IBM, InMotion Hosting, Matt Mullenweg, Microsoft, Pivotal, Produban, WANdisco, and Yahoo."),(0,n.kt)("p",null,"For more information, visit http://www.apache.org/ or follow @TheASF on Twitter."),(0,n.kt)("p",null,'"Apache", "CloudStack", "Apache CloudStack", and "ApacheCon" are trademarks of The Apache Software Foundation. All other brands and trademarks are the property of their respective owners.'))}p.isMDXComponent=!0}}]);