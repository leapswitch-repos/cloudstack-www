"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1414],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),p=n,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||r;return a?o.createElement(m,i(i({ref:t},u),{},{components:a})):o.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3573:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=a(7462),n=(a(7294),a(3905));const r={layout:"post",title:"What's New in Apache CloudStack 4.17",slug:"what-s-new-in-apache1"},i=void 0,s={permalink:"/blog/what-s-new-in-apache1",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2022-06-07-what-s-new-in-apache1.md",source:"@site/blog/2022-06-07-what-s-new-in-apache1.md",title:"What's New in Apache CloudStack 4.17",description:"Apache CloudStack 4.17 is the latest release of the cloud management platform from the Apache Software Foundation and is a result of months of work from the development community. Apache CloudStack 4.17 is an LTS (Long Term Support) release so will be maintained for a period of 18 months after release.",date:"2022-06-07T00:00:00.000Z",formattedDate:"June 7, 2022",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"What's New in Apache CloudStack 4.17",slug:"what-s-new-in-apache1"},prevItem:{title:"Apache CloudStack 4.17.0.0 LTS Release",permalink:"/blog/apache-cloudstack-4-17-release"},nextItem:{title:"CloudStack Collaboration Conference 2022 - November 14-16",permalink:"/blog/cloudstack-collaboration-conference-2022-november"}},l={authorsImageUrls:[]},c=[],u={toc:c},d="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Apache CloudStack 4.17 is the latest release of the cloud management platform from the Apache Software Foundation and is a result of months of work from the development community. Apache CloudStack 4.17 is an LTS (Long Term Support) release so will be maintained for a period of 18 months after release."),(0,n.kt)("p",null,"As always, the release contains a myriad of small improvements and bug fixes but here we focus on the major new functionality of the release."),(0,n.kt)("p",null,(0,n.kt)("strong",null,"VR Zero Downtime upgrades and Live Patching")),(0,n.kt)("a",{href:"/img/imported/bc49a766-6b83-4e9c-b4f9-a233a176699f"},(0,n.kt)("img",{src:"/img/imported/bc49a766-6b83-4e9c-b4f9-a233a176699f",alt:"0.png",width:"750",height:"393"})),(0,n.kt)("p",null,"This is one of the most anticipated improvements by existing Apache CloudStack operators. CloudStack has always been easier to upgrade than many of its competitors but has required its virtual routers to be redeployed during an upgrade."),(0,n.kt)("p",null,(0,n.kt)("strong",null,"o Zero Downtime Upgrades for Virtual Routers"),(0,n.kt)("br",null),"With this new feature, the virtual router does not have to go through the process of complete removal and instantiating a new one involving shutdown, resource release, system VM template copy from secondary storage to primary, starting and VR configuration",(0,n.kt)("br",null),"Previously when a new release of Apache CloudStack was deployed, the operations team had to organize maintenance windows to allow the redeployment of every virtual router. Now an in-place upgrade of CloudStack virtual routers can be performed with zero downtime.",(0,n.kt)("br",null)),(0,n.kt)("p",null,(0,n.kt)("strong",null,"o VR Live Patching"),(0,n.kt)("br",null),"Underpinning zero downtime upgrades is the new feature VR live patching. This feature can also be used independently of upgrades and allow CloudStack admins to apply software updates to Virtual Routers on the fly. Previously all Apache CloudStack scripts to manage the Virtual Router were stored in an ISO image and mounted during the first boot and then copied to the Virtual Router. Now the update is performed dynamically , as long as the base OS remains constant , users to not need to recreate the Virtual Router."),(0,n.kt)("p",null,(0,n.kt)("strong",null,"IPv6 support for Isolated and VPC Networks")),(0,n.kt)("a",{href:"/img/imported/919e55f8-b723-4680-b538-f9afc2ce0e01"},(0,n.kt)("img",{src:"/img/imported/919e55f8-b723-4680-b538-f9afc2ce0e01",alt:"2.png",width:"750",height:"393"})),(0,n.kt)("p",null,"IPv6 is considered a natural evolution of any system that intends to be present in computing environments in the future. The RIPE NCC, which assigns IP addresses in 76 countries to ISPs and other organizations, got its final allocation of IPv4 addresses from the Internet Assigned Numbers Authority (IANA) in 2012.",(0,n.kt)("br",null),"Apache CloudStack already supported IPv6 for Shared Networks; now IPv6 is also supported for Isolated Networks and VPC. Users can deploy IPv6 networks where routing is currently static, allowing users to use subnets of IPv6 networks directly in CloudStack instances.",(0,n.kt)("br",null),"In this context, unlike IPv4 that relies on NAT to deliver network services to users, the Virtual Router behaves like a real router, routing IPv6 packets and allowing users to configure firewall."),(0,n.kt)("p",null,(0,n.kt)("strong",null,"StorPool Storage Plugin")),(0,n.kt)("a",{href:"/img/imported/c15f95e5-3b77-4bc5-b518-dc42ca867041"},(0,n.kt)("img",{src:"/img/imported/c15f95e5-3b77-4bc5-b518-dc42ca867041",alt:"3.png",width:"710",height:"456"})),(0,n.kt)("p",null,"StorPool is a software defined storage platform in use by many CloudStack operators globally. StorPool has had \u201cmanaged storage\u201d integration with CloudStack for some time but now the StorPool Storage plug-in is natively included with Apache CloudStack. Thanks to the built-in automation of the plug-in, cloud builders can seamlessly manage their cloud from CloudStack\u2019s familiar user interfaces, and all storage-related operations are transparently passed down to the underlying StorPool primary storage system."),(0,n.kt)("p",null,"With the Storpool plug-in, the features available in StorPool get inherited by each cloud-deployed - enabling cloned provisioning, instant snapshots, thin provisioning, backup/DR and QoS policies per virtual disk and/or per Instance. Instance provisioning is nearly instantaneous and data placement policies and other settings can be changed in-flight to address changes in user requirements."),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Self-service Network Improvements")),(0,n.kt)("a",{href:"/img/imported/417bd9d1-ba39-4904-b56b-bcf226dab4ff"},(0,n.kt)("img",{src:"/img/imported/417bd9d1-ba39-4904-b56b-bcf226dab4ff",alt:"4.png",width:"668",height:"575"})),(0,n.kt)("p",null,"Previously, the creation of Shared Networks and Private Gateways was an admin- only feature. When a user needed a Shared Network or Private Gateway, they would have to make a service request to the Service Provider or infrastructure operations team. Only after that, users could configure and use their respective resources."),(0,n.kt)("p",null,"With Apache CloudStack 4.17, users can self-serve the creation of these resources through the UI or API with no involvement of the admin."),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Multi-account Network Access")),(0,n.kt)("a",{href:"/img/imported/6c540c73-9951-4cb7-8a4c-7fdf1b25a000"},(0,n.kt)("img",{src:"/img/imported/6c540c73-9951-4cb7-8a4c-7fdf1b25a000",alt:"5.png",width:"750",height:"242"})),(0,n.kt)("p",null,"In Apache CloudStack, users are organized into a logical structure of Accounts and Domains. In previous version of Apache CloudStack, the resources of each Account weren\u2019t shared, and each Account had its own resources. As an example, sometimes\u200b\u200b\u200b\u200b\u200b\u200b a particular software application from a specific Account needed to access an application in another account under the same Domain. For this to be feasible, users configured their networks with the firewall rules, port forwarding, load balancing or private gateway to allow this type of use case. In addition, this configuration caused a lot of network overhead as all packets had to go through 2 different Virtual Routers to reach their destination."),(0,n.kt)("p",null,"With Apache CloudStack 4.17, users can connect their instances by adding a new network interface from an Account under the same Domain, simplifying this kind of use case. Furthermore, if the communication between instances occurs only at OSI layer 2, several overheads are removed, considering that the I/O packets will be established between the instances directly in the same network layer to which they are connected."),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Multiple SSH Keys")),(0,n.kt)("a",{href:"/img/imported/6242bd8e-d5ad-4027-aed4-3dd576a58199"},(0,n.kt)("img",{src:"/img/imported/6242bd8e-d5ad-4027-aed4-3dd576a58199",alt:"6.png",width:"750",height:"393"})),(0,n.kt)("p",null,"CloudStack users can now create Instances and include multiple SSH Keys. This avoids the need to share private keys between users that access the Instance."),(0,n.kt)("p",null,"Previously, if users needed to add more SSH Keys to access the instance, it was necessary to connect to the instance and then edit the .ssh/authorized_keys file, however now all the keys needed can be selected during the instance creation itself."),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Structured System Events")),(0,n.kt)("a",{href:"/img/imported/69265134-a914-48d2-8af0-70cb5d8d0828"},(0,n.kt)("img",{src:"/img/imported/69265134-a914-48d2-8af0-70cb5d8d0828",alt:"Untitled design.png",width:"750",height:"647"})),(0,n.kt)("p",null,"Apache CloudStack 4.17 brings much more structure to its system Events. Auditability and traceability of operations performed are important requirements for most organisations."),(0,n.kt)("p",null,"CloudStack Events are the primary data-source for auditing and troubleshooting a CloudStack environment. Events have now been improved by being explicitly linking to the resource that the event concerns. This allows Events to be searched, filtered and sorted by object."),(0,n.kt)("p",null,"Navigation is also improved, allowing users to navigate easily to the events for a specific object i.e. Instance, Network, Host"),(0,n.kt)("p",null,"Many CloudStack operators had previously parsed the Event messages to store them in a 3rd party data source. The messages remain unchanged to allow backwards compatibility of such integrations."),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Snapshot improvements")),(0,n.kt)("p",null,"Apache CloudStack 4.17 introduces storage-based snapshots - an alternative for taking snapshots of virtual machines running under the KVM hypervisor. The current implementation uses libvirt to perform the snapshot and doesn\u2019t allow storage providers that keep VM virtual disks in RAW format (e.g., Ceph/NetApp SolidFire/LINSTOR/StorPool Storage) to take VM snapshots."),(0,n.kt)("p",null,"The storage-based snapshots feature provides for such storage systems the functionality to take crash-consistent snapshots of any VM\u2019s virtual disks without the memory. The feature relies on each underlying storage plug-in\u2019s capability to create/revert/delete virtual disk snapshots."),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Instance and Volumes migration improvements")),(0,n.kt)("p",null,"Apache CloudStack allows admins to migrate Instances and volumes using a wizard. Previously this wizard would automatically allocate Primary Storage for Instance Volumes based solely on storage tags. CloudStack 4.17 now allows the admin to explicitly allocate each Instance Volume to different specific Primary Storages."),(0,n.kt)("p",null,"In addition, to make more informed decisions while selecting destination host and storage, additional information is presented in the UI such as the occupancy of existing capacity of these resources, which brings a significant improvement in migration functionality."),(0,n.kt)("p",null,(0,n.kt)("strong",null,"More flexible service offerings")),(0,n.kt)("a",{href:"/img/imported/7d34a18b-a0d9-4da5-8ffe-bfb66496aaf3"},(0,n.kt)("img",{src:"/img/imported/7d34a18b-a0d9-4da5-8ffe-bfb66496aaf3",alt:"9.png",width:"750",height:"596"})),(0,n.kt)("p",null,"Apache CloudStack 4.17 redefines the relationship between the Service Offerings used for Instance Root Disks and the Service Offering for the Instance itself."),(0,n.kt)("p",null,"Instance Root Volumes were previously handled decoupled from Disk Offerings: a change of the Root Volume characteristics wasn\u2019t possible due to this logical disconnection. Thus, users couldn\u2019t, for example, change to a Disk Offering that guaranteed higher I/O needs if necessary. So, there were two types of resources, Root volume and Data volume, but the treatment used in both was not unified."),(0,n.kt)("p",null,"The existing model is still fully supported if required, but this improvement gives operators far greater flexibility when it comes to the provisioning and billing for root volumes."),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Server Status Report"),"Apache CloudStack 4.17 now gives admins the ability to see the status/health of their Management Servers, the Usage Server, and the underlying database server (and their respective individual components). This feature is available in the UI and API for integration/monitoring purposes."),(0,n.kt)("p",null,(0,n.kt)("strong",null,"KVM multiple local storage")),(0,n.kt)("p",null,"Apache CloudStack 4.17 now supports multiple local storage volumes for KVM based Hosts. Previously, for KVM hosts, it was only possible to have one primary local storage, which prevented providers from adding extra disks to be offered on CloudStack."),(0,n.kt)("p",null,"With this improvement, if more than one local disk on the KVM host is available, it is possible to designate them to be offered as a local disk offering , thus enabling a better use of allocated resources."),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Reserve and release Public IPs"),"Users can now reserve public IPs for later use on their networks. This new functionality makes managing this feature easier, as users often need to have IP information available beforehand to parameterize DNS records, for example."))}h.isMDXComponent=!0}}]);