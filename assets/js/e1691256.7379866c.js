"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,g=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={layout:"post",title:"Apache CloudStack and Tungsten Fabric SDN - Solution Brief",tags:["case-studies"],slug:"apache-cloudstack-and-tungsten-fabric"},i=void 0,l={permalink:"/blog/apache-cloudstack-and-tungsten-fabric",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/blog/2023-01-23-apache-cloudstack-and-tungsten-fabric.md",source:"@site/blog/2023-01-23-apache-cloudstack-and-tungsten-fabric.md",title:"Apache CloudStack and Tungsten Fabric SDN - Solution Brief",description:"CloudStack is a multi-hypervisor, multi-tenant, high-availability cloud management platform that delivers the flexibility and freedom of open-source technology and the power of an enterprise-grade virtualization management platform.",date:"2023-01-23T00:00:00.000Z",formattedDate:"January 23, 2023",tags:[{label:"case-studies",permalink:"/blog/tags/case-studies"}],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack and Tungsten Fabric SDN - Solution Brief",tags:["case-studies"],slug:"apache-cloudstack-and-tungsten-fabric"},prevItem:{title:"Meet Apache CloudStack at KubeCon + CloudNativeCon 2023",permalink:"/blog/meet-apache-cloudstack-at-kubecon"},nextItem:{title:"CloudStack European User Group - May 4th, 2023",permalink:"/blog/cloudstack-european-user-group-may"}},s={authorsImageUrls:[]},c=[],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{href:"/img/imported/b2495a18-898c-44c0-bbe4-5b227bad1565"},(0,a.kt)("img",{src:"/img/imported/b2495a18-898c-44c0-bbe4-5b227bad1565",alt:"Tungsten-Fabric-Banner.png",width:"750",height:"393"})),(0,a.kt)("p",null,"CloudStack is a multi-hypervisor, multi-tenant, high-availability cloud management platform that delivers the flexibility and freedom of open-source technology and the power of an enterprise-grade virtualization management platform."),(0,a.kt)("p",null,"In the ",(0,a.kt)("strong",null,"new blog series named CloudStack Integrations"),", we present a range of technologies with which CloudStack is integrated and can become part of your technology stack. You will be able to",(0,a.kt)("strong",null,"\xa0","learn more about different software solutions, which can be combined with CloudStack")," and dive deep into specialized","\xa0",(0,a.kt)("strong",null,"Technical Solution Briefs"),"\xa0","presenting the integrations."),(0,a.kt)("p",null,"Today we will introduce you to ",(0,a.kt)("a",{href:"https://tungsten.io/"},"Tungsten.")),(0,a.kt)("h1",null,"Tungsten Fabric's Integration with Apache CloudStack"),(0,a.kt)("p",null,"Tungsten Fabric (TF) comprises components like controller and vRouter; plus additional components for analytics and third-party integration. In this Solution Brief, TF integrates with CloudStack as an SDN plugin to enable rich networking capabilities and lifecycle management of VMs and containers where TF components or control functions are deployed."),(0,a.kt)("p",null,"The deployment and life-cycle management of Tungsten Fabric can be done with tools like Ansible. After Tungsten Fabric and CloudStack are installed, we need to create a zone with the TF isolation method, and then, when we create a network or a vm in CloudStack, TF plugin will call the TF Controller API to create the resources."),(0,a.kt)("a",{href:"/img/imported/d1ccefda-ebb0-4208-9835-57d1aed4922b"},(0,a.kt)("b",null,"DOWNLOAD THE SOLUTION BRIEF")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",null,"Key Outcomes for Users"),(0,a.kt)("p",null,"Apache Cloudstack has long provided flexibility regarding network configuration to serve the needed use case. Along with built-in functionality, ACS has supported a number of different Software Defined Networking (SDN) controllers, including VMware NSX multi-hypervisor (formally Nicara), Nuage and others."),(0,a.kt)("p",null,"However, Apache CloudStack lacked a fully-featured open-source SDN controller to deliver advanced networking features.\xa0\xa0"),(0,a.kt)("p",null,"Apache Cloudstack's integration with Tungsten Fabric will finally close this feature gap providing many long sought-after features, including BGP, MPLS, service stitching and deep security policy capabilities to meet even the most stringent industry requirements."),(0,a.kt)("p",null,"CloudStack will be able to manage these advanced functions via tight integration with the underlying best-of-breed network controller, while Tungsten Fabric handles the network fabric.\xa0"),(0,a.kt)("p",null,(0,a.kt)("span",null,(0,a.kt)("strong",null,"The Community Adopting the Integration of Apache CloudStack and Tungsten Fabric"))),(0,a.kt)("p",null,"A number of community members have already adopted Tungsten Fabric as part of their cloud infrastructure. We reached out to the community to hear their thoughts on the integration and how it benefits their organisation."),(0,a.kt)("p",null,(0,a.kt)("em",null,"\u2018\u2019The EWERK Group mainly serves organizations in system-relevant industries with regulated IT. In these industries, highly complex IT infrastructure projects place special demands on the network. In order to meet these requirements, a future-oriented further development with the highest demand on technological know-how and flexibility of the software is needed. The support of Tungsten Fabric helps us to meet these requirements.\u2019\u2019")),(0,a.kt)("p",null,"-\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,a.kt)("strong",null,"Sven Vogel, Senior Manager R&D for Cloud and Infrastructure - "),(0,a.kt)("a",{href:"https://www.ewerk.com/startseite"},(0,a.kt)("strong",null,"EWERK"))),(0,a.kt)("p",null,(0,a.kt)("em",null,'"ENA is committed to the continued success of Apache CloudStack and we felt integrating Tungsten Fabric, a class leading open source Software Defined Networking (SDN) product addresses a key feature gap"'),", remarked Simon Weller. ",(0,a.kt)("em",null,"\"ENA has been part of Apache CloudStack since its inception and we're proud that we're able to continue our work within the ACS community\".")),(0,a.kt)("p",null,"-\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,a.kt)("strong",null,"Simon Weller, VP of Technology \u2013 "),(0,a.kt)("a",{href:"https://www.ena.com/"},(0,a.kt)("strong",null,"Education Networks of America")),(0,a.kt)("strong",null,"\xa0")),(0,a.kt)("p",null,(0,a.kt)("strong",null,"About Tungsten Fabric")),(0,a.kt)("p",null,"Tungsten Fabric is an open-source network and security orchestrator which provides secure connectivity for cloud-native environments. Tungsten Fabric enables developers, network and security operations staff to deploy zero-trust micro-segmentation within a DevOps workflow to reduce the friction in application deployment. It ensures performance and security for deployments of tens of thousands of nodes at Tier 1 service providers, major research centers and enterprises with global operations."),(0,a.kt)("p",null,"With Tungsten Fabric, security and network engineers can build secure microservices that can be deployed on various container orchestration platforms, allowing them to work directly within the DevOps workflow. This ensures applications and infrastructure alike are secure against sophisticated attacks, while increasing development velocity and site reliability. Tungsten Fabric analytics provide flow-level visibility, while port mirroring provides application-level visibility.\xa0"),(0,a.kt)("p",null,"Together these features enable network and security operations staff, streamlining troubleshooting and mean time to resolution (MTTR). Tungsten Fabric manages and implements physical and virtual networking and security for cloud environments. Since the same controller and forwarding components are used in every implementation, Tungsten Fabric provides a consistent interface for managing connectivity and policy in all the environments it supports, and can provide seamless and secure connectivity between workloads managed by different orchestrators, whether virtual machines or containers."))}p.isMDXComponent=!0}}]);