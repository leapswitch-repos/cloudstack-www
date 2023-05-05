"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,k=p["".concat(i,".").concat(h)]||p[h]||d[h]||l;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const l={layout:"post",title:"Apache CloudStack Year in Review - 2022",slug:"year-in-review-2022"},r=void 0,s={permalink:"/blog/year-in-review-2022",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2022-12-30-year-in-review-2022.md",source:"@site/blog/2022-12-30-year-in-review-2022.md",title:"Apache CloudStack Year in Review - 2022",description:"2022 was a hugely successful year for the Apache CloudStack community. We collaborated on a successful major release - Apache CloudStack 4.17 bringing a bunch of new capabilities and improvements, as well as created multiple new CloudStack integrations. As well as this, the community created two minor releases as part of the LTS programme.",date:"2022-12-30T00:00:00.000Z",formattedDate:"December 30, 2022",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack Year in Review - 2022",slug:"year-in-review-2022"},prevItem:{title:"Meet Apache CloudStack at CloudFest 2023",permalink:"/blog/apache-cloudstack-at-cloudfest"},nextItem:{title:"Apache CloudStack LTS Maintenance Release 4.17.2.0",permalink:"/blog/apache-cloudstack-lts-release-41720"}},i={authorsImageUrls:[]},u=[],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{href:"/img/imported/a0b79998-d965-4a92-af6b-ce9cdb841c32"},(0,o.kt)("img",{src:"/img/imported/a0b79998-d965-4a92-af6b-ce9cdb841c32",alt:"Year in review.png",width:"750",height:"393"})),(0,o.kt)("p",null,"2022 was a hugely successful year for the Apache CloudStack community. We collaborated on a successful major release - Apache CloudStack 4.17 bringing a bunch of new capabilities and improvements, as well as created multiple new CloudStack integrations. As well as this, the community created two minor releases as part of the LTS programme."),(0,o.kt)("p",null,'The community also held two successful conferences, one of which being the first in-person CloudStack Collaboration Conference since the pandemic. The new &"Year in Review" blogs series encourages us to reflect on the community',"\u2019","s achievements, and thus lets us brainstorm the ways we will further develop Apache CloudStack in all facets in the new year. Find out what we managed to achieve together and what is coming in 2023 in this recap article!"),(0,o.kt)("span",null,(0,o.kt)("a",{href:"https://blogs.apache.org/cloudstack/entry/what-s-new-in-apache1"},(0,o.kt)("strong",null,(0,o.kt)("span",null,"Apache CloudStack 4.17 Release")))),(0,o.kt)("p",null,"The year saw the newest major release - Apache CloudStack 4.17, which brought a number of new and exciting features being introduced, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("span",null,(0,o.kt)("span",null,(0,o.kt)("strong",null,(0,o.kt)("span",null,"Zero Downtime Upgrades for Virtual Routers")))))),(0,o.kt)("p",null,(0,o.kt)("span",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"With this new feature, the virtual router does not have to go through the process of complete removal and instantiating a new one involving shutdown, resource release, system VM template copy from secondary storage to primary, starting and VR configuration")))),(0,o.kt)("p",null,(0,o.kt)("span",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"Previously when a new release of Apache CloudStack was deployed, the operations team had to organize maintenance windows to allow the redeployment of every virtual router. Now an in-place upgrade of CloudStack virtual routers can be performed with zero downtime.")))),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("span",null,(0,o.kt)("span",null,(0,o.kt)("strong",null,(0,o.kt)("span",null,"VR Live Patching")))))),(0,o.kt)("p",null,(0,o.kt)("span",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"Underpinning zero downtime upgrades is the new feature VR live patching. This feature can also be used independently of upgrades and allow CloudStack admins to apply software updates to Virtual Routers on the fly. Previously all Apache CloudStack scripts to manage the Virtual Router were stored in an ISO image and mounted during the first boot and then copied to the Virtual Router. Now the update is performed dynamically , as long as the base OS remains constant , users to not need to recreate the Virtual Router.")))),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("span",null,(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"IPv6 support for Isolated and VPC Networks")))))),(0,o.kt)("p",null,(0,o.kt)("span",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"IPv6 is considered a natural evolution of any system that intends to be present in computing environments in the future. The RIPE NCC, which assigns IP addresses in 76 countries to ISPs and other organizations, got its final allocation of IPv4 addresses from the Internet Assigned Numbers Authority (IANA) in 2012."))),(0,o.kt)("br",null),(0,o.kt)("span",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"Apache CloudStack already supported IPv6 for Shared Networks; now IPv6 is also supported for Isolated Networks and VPC. Users can deploy IPv6 networks where routing is currently static, allowing users to use subnets of IPv6 networks directly in CloudStack instances."),(0,o.kt)("br",null),(0,o.kt)("span",null,"In this context, unlike IPv4 that relies on NAT to deliver network services to users, the Virtual Router behaves like a real router, routing IPv6 packets and allowing users to configure firewall.")))),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("span",null,(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"Self-service Network Improvements")))))),(0,o.kt)("p",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"Previously, the creation of Shared Networks and Private Gateways was an admin- only feature. When a user needed a Shared Network or Private Gateway, they would have to make a service request to the Service Provider or infrastructure operations team. Only after that, users could configure and use their respective resources."))),(0,o.kt)("p",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"With Apache CloudStack 4.17, users can self-serve the creation of these resources through the UI or API with no involvement of the admin."))),(0,o.kt)("p",null,(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"To learn more about the remaining features introduced in the 4.17 release, read the "),(0,o.kt)("a",{href:"https://blogs.apache.org/cloudstack/entry/what-s-new-in-apache1"},(0,o.kt)("span",null,"release blog."))))),(0,o.kt)("p",null,(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("u",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"New CloudStack Integrations")))))),(0,o.kt)("p",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"The community has collaborated on a new blog series named \u2018CloudStack Integrations\u2019, introducing a range of technologies with which CloudStack is integrated with and can become part of your technology stack. You will be able to learn more about different software solutions, which can be combined with CloudStack and dive deep into specialized Technical Solution Briefs presenting the integrations."))),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("span",null,(0,o.kt)("strong",null,"Kubernetes CAPI Provider - CloudStack Integration")))),(0,o.kt)("p",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"The Kubernetes Cluster API (CAPI) provider for Apache CloudStack allows Kubernetes users to build and manage resources on Apache CloudStack. The Cluster API brings declarative, Kubernetes-style APIs to cluster creation, configuration and management. The API itself is shared across multiple cloud providers allowing for true Apache CloudStack hybrid deployments of Kubernetes. It is built atop the lessons learned from previous cluster managers such as kops and kubicorn."))),(0,o.kt)("p",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"If users want to launch a Kubernetes cluster on Apache Cloudstack, they can check out the "),(0,o.kt)("a",{href:"https://cluster-api-cloudstack.sigs.k8s.io/getting-started.html"},"Getting Started Guide"),(0,o.kt)("span",null," to create your first Kubernetes cluster on Apache CloudStack using Cluster API."))),(0,o.kt)("p",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"Watch the session below from the CloudStack European User Group this year, featuring Peter Motykowski from AWS discuss more about the newly developed provider, its capabilities and how you can benefit from it!"))),(0,o.kt)("a",{href:"https://www.youtube.com/watch?v=WuXdsDjPq9E",rel:"noopener noreferrer",target:"_blank"},(0,o.kt)("img",{src:"/img/imported/ce27ebce-d019-41d6-b105-c2827751a678",alt:"kubernetes CAPI.png",width:"750",height:"393"})),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("span",null,(0,o.kt)("a",{href:"https://storpool.com/"},(0,o.kt)("strong",null,"StorPool Storage")),(0,o.kt)("strong",null,(0,o.kt)("span",null," \u2013 CloudStack Integration"))))),(0,o.kt)("p",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"StorPool Storage volume management is integrated now with Apache CloudStack to allow seamless use of the capabilities of the StorPool Storage system through the CloudStack GUI, CLI, and API interfaces. With the integration, the features available in StorPool get inherited by each cloud deployed with StorPool Storage - enabling cloned provisioning, instant snapshots, thin provisioning, and backup, disaster recovery, and Quality of Service (QoS) policies per virtual disk or virtual machine (VM). Thanks to the way StorPool works, VM provisioning is nearly instantaneous, and data placement policies and other settings can be changed in-flight to address changes in user requirements. "),(0,o.kt)("a",{href:"/img/imported/5e069f87-a428-4f07-92ac-a8bf8d0d114b?api=v2"},"Click here"),(0,o.kt)("span",null," to download the solution brief. "))),(0,o.kt)("a",{href:"https://blogs.apache.org/cloudstack/entry/cloudstack-collaboration-conference-2022-roundup"},(0,o.kt)("strong",null,(0,o.kt)("span",null,"CloudStack Collaboration Conference"))),(0,o.kt)("p",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"The community re-joined in-person for the first time since the pandemic, at the CloudStack Collaboration Conference in Sofia last month.\xa0 The hybrid event hosted over 370 participants and 48 speakers from 32 countries! The conference broke its record for the most in-person attendees. In total, there were 38 sessions from leading CloudStack experts, users and skilful engineers from the open-source world. These sessions included: technical talks, user stories, new features and integrations presentations and more. You can watch back the sessions or retrieve the slides on the "),(0,o.kt)("a",{href:"https://blogs.apache.org/cloudstack/entry/cloudstack-collaboration-conference-2022-roundup"},"event roundup blog."),(0,o.kt)("span",null," Do keep in mind the sessions are still being released, so make sure you subscribe to the "),(0,o.kt)("a",{href:"https://www.youtube.com/@ApacheCloudStack/featured"},"Apache CloudStack YouTube channel"),(0,o.kt)("span",null," and turn on bell notifications."))),(0,o.kt)("p",null,"\xa0"),(0,o.kt)("p",null,(0,o.kt)("span",null,(0,o.kt)("a",{href:"https://blogs.apache.org/cloudstack/entry/cloudstack-european-user-group-virtual"},(0,o.kt)("strong",null,(0,o.kt)("span",null,"CloudStack European User Group"))))),(0,o.kt)("p",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"Taking place on April 7th, 2022, The CloudStack European User Group was a virtual get together for the European CloudStack Community, hosting 260+ attendees from 25 countries. The event hosted a total of 10 sessions, all of which you can watch back on the "),(0,o.kt)("a",{href:"https://www.youtube.com/playlist?list=PLnIKk7GjgFlYfut3ZIOrvN--_YuSPIerQ"},"Apache CloudStack YouTube channel"),(0,o.kt)("span",null,". Just like CCC, it was great to see new CloudStack committers and users, showing the growth of the global community.\xa0 "))),(0,o.kt)("p",null,(0,o.kt)("u",null,(0,o.kt)("span",null,(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"Looking to the Future - Apache CloudStack 4.18 Release")))))),(0,o.kt)("p",null,(0,o.kt)("span",null,"The community is looking forward to the upcoming 4.18 release, expected in late January 2023. Some exciting features you will be able to find in the new release are: ")),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("span",null,(0,o.kt)("span",null,(0,o.kt)("strong",null,"Edge computing (4.18)\xa0"))))),(0,o.kt)("p",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"Edge computing is a distributed computing paradigm that brings computation and data storage closer to the data source and end consumer. The presence of computing capabilities at the edge of the network reduces response times for applications while reducing connectivity costs.\xa0"))),(0,o.kt)("p",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"This new feature will enable"),(0,o.kt)("span",null," operators to leverage CloudStack in deploying light-weight Zones in edge locations. Compared to the traditional CloudStack zones, a dehydrated zone results in resource savings on the boards - solving problems related to latency at low cost in regions poorly served by the internet network."))),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("span",null,(0,o.kt)("span",null,(0,o.kt)("strong",null,"Tungsten SDN Fabric (4.18)"))))),(0,o.kt)("p",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"Tungsten Fabric is an open-source SDN project that solves tooling complexity with the simplicity of only one networking and security tool. It is maintained by The Linux Foundation and is designed to support any cloud anywhere.\xa0 "))),(0,o.kt)("p",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"From 4.18, Apache CloudStack users can leverage Tungsten Fabric as a Network Provider in Isolated and VPC Networks, adding this widely adopted SDN fabric to fill feature gaps in CloudStack, enhancing security and capabilities."))),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("span",null,(0,o.kt)("span",null,(0,o.kt)("strong",null,"Autoscaling (4.18)"))))),(0,o.kt)("p",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"This feature is an Apache CloudStack native solution, different from other approaches that created vendor lock-in of closed source products. From Apache CloudStack 4.18, cloud users can configure Autoscale VM Groups to dynamically scale up and down the number of Instances when the defined trigger conditions are met. "))),(0,o.kt)("p",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"\u2026 and a lot more new capabilities, which will enable cloud operators to achieve more and manage easier their virtualisation. "))),(0,o.kt)("p",null,"\xa0"),(0,o.kt)("p",null,(0,o.kt)("span",null,(0,o.kt)("strong",null,(0,o.kt)("u",null,(0,o.kt)("span",null,(0,o.kt)("span",null,"At the end of the year\u2026")))))),(0,o.kt)("p",null,(0,o.kt)("span",null,"It was great to see another year of expansion of the Apache CloudStack community. We are happy to see new companies around the world adopting the technology and becoming involved in the community, whether it is through collaborations, development or keeping active on the mailing lists. In order for an open-source project to develop and be successful, people need to give back to the project \u2013 something that the Apache CloudStack community does extremely well. We are very grateful to the community\u2019s efforts and progression in the technology, so kudos to all involved!\xa0 ")),(0,o.kt)("p",null,(0,o.kt)("span",null,"New use cases are being shared, such as ",(0,o.kt)("a",{href:"https://www.arsat.com.ar/"},"ARSAT")," covering their use cases regarding cloud services in Argentinian government entities and also sharing their mid-term roadmap strategy to include the private sector in Arsat\xb4s client portfolio. Another thing worth reflecting on is how companies who have been adopting Apache CloudStack long-term have managed to build reliable solutions and are using the technology continuously without looking for alternatives. The reason being because CloudStack is constantly expanding its supported integrations and technologies landscape, plus the amazing pace of development and new features released. Last but not least, we also see more vendors interested in both adopting CloudStack or building new solutions on top of it like ",(0,o.kt)("a",{href:"https://www.apiculus.io/"},"Apiculus")," and ",(0,o.kt)("a",{href:"https://www.stackbill.com/"},"StackBill")," for example. ")),(0,o.kt)("p",null,(0,o.kt)("span",null,"We would like to say a big thank you to everyone involved in the project and look forward to collaborating at the CloudStack European User Group in May!")))}d.isMDXComponent=!0}}]);