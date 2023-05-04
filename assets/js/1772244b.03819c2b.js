"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2962,5238],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),k=a,h=d["".concat(i,".").concat(k)]||d[k]||p[k]||n;return r?o.createElement(h,s(s({ref:t},u),{},{components:r})):o.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=k;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<n;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}k.displayName="MDXCreateElement"},4003:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=r(7462),a=(r(7294),r(3905)),n=r(613);const s={},l=void 0,i={type:"mdx",permalink:"/kubernetes",source:"@site/src/pages/kubernetes.mdx",description:"Kubernetes on CloudStack in Production",frontMatter:{}},c=[],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"container"},(0,a.kt)("div",{class:"row footer blocks"},(0,a.kt)("div",{class:"col col--8"},(0,a.kt)("h2",null,"Kubernetes on CloudStack in Production"),(0,a.kt)("p",{class:"hero__subtitle"},(0,a.kt)("a",null,"Reduces operational overhead and infrastrucrture costs")),(0,a.kt)("a",{class:"button button--primary",href:"/download"},"Download CloudStack"),"\xa0",(0,a.kt)("a",{class:"button button--secondary",href:"https://cluster-api-cloudstack.sigs.k8s.io/"},"Get CloudStack CAPI Provider")),(0,a.kt)("div",{class:"col col--4"},(0,a.kt)("img",{src:"/img/k8s/capc-logo.png"}))),(0,a.kt)("br",null),(0,a.kt)("div",{class:"row"},(0,a.kt)("div",{class:"col col--8"},(0,a.kt)("p",null,"Apache CloudStack is an open-source IaaS platform that is used to build public or private cloud environments. CloudStack allows you to easily deploy Kubernetes clusters into your own infrastructure without worrying about the underlying infrastructure and removing the coupling to specific virtualization platforms. It also allows easy deployment of Kubernetes as a Service (KaaS) offerings."),(0,a.kt)("p",null,"Host your Kubernetes clusters on it to simplify your work and ensure consistent and predictable behavior of your applications, no matter the underlying infrastructure."),(0,a.kt)("p",null,"CloudStack provides a Kubernetes Cluster API Provider and also the CloudStack Kubernetes Service - giving a choice of integration techniques."),(0,a.kt)("p",null,"CloudStack is in widespread production usage at many of the world\u2019s largest organizations including many Fortune 500 companies. It includes the entire \u201cstack\u201d of features you need: compute orchestration, Network-as-a-Service, user and account management, a complete and open native API, resource accounting, and a first-class User Interface.")),(0,a.kt)("div",{className:"hero col col--4"},(0,a.kt)("img",{src:"/img/k8s/capc-servers.png"}))),(0,a.kt)("div",{class:"row"},(0,a.kt)("div",{class:"col col--2"}),(0,a.kt)("div",{class:"col col--8 text-center"},(0,a.kt)("h2",null,"Explore the Kubernetes Cluster API Provider for Apache CloudStack")),(0,a.kt)("div",{class:"col col--2"}),(0,a.kt)("div",{class:"col col--2"}),(0,a.kt)("div",{class:"col col--8"},(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/NcfVkVT48Kk",title:"Bootstrapping K8S Cluster using CAPC - Apache CloudStack - Kubernetes",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,a.kt)("div",{class:"col col--2"}),(0,a.kt)("div",{class:"col col--12"},(0,a.kt)("p",null,"The Kubernetes Cluster API (CAPI) provider for Apache CloudStack allows Ku- bernetes users to build and manage resources on Apache CloudStack. The pro- vider is available under the Apache 2 open-source license and is managed by the Cloud Native Computing Foundation (CNCF). The Cluster API brings declara- tive, Kubernetes-style APIs to cluster creation, configuration and management. The API itself is shared across multiple cloud providers allowing for true Apache CloudStack hybrid deployments of Kubernetes. It is built atop the lessons learned from previous cluster managers such as kops and kubicorn."))),(0,a.kt)("div",{class:"row footer footer--dark blocks"},(0,a.kt)("div",{class:"col col--8"},(0,a.kt)("h2",null,"Launching a Kubernetes cluster on Apache CloudStack"),(0,a.kt)("p",null,"If users want to launch a Kubernetes cluster on Apache Cloudstack, they can check out the Getting Started Guide to create your first Kubernetes cluster on Apache CloudStack using Cluster API."),(0,a.kt)("p",null,"CloudStack hybrid deployments of Kubernetes. It is built atop the lessons learned from pre- vious cluster managers such as kops and kubicorn."),(0,a.kt)("a",{class:"button button--primary",href:"https://cluster-api-cloudstack.sigs.k8s.io/getting-started.html"},"Read More")),(0,a.kt)("div",{class:"col col--4"},(0,a.kt)("img",{src:"/img/k8s/k8s-logo.svg"}))),(0,a.kt)("br",null),(0,a.kt)("div",{class:"row"},(0,a.kt)("div",{class:"col col--2"}),(0,a.kt)("div",{class:"col col--8 text-center"},(0,a.kt)("h2",null,"Explore the CloudStack Kubernetes Service")),(0,a.kt)("div",{class:"col col--2"}),(0,a.kt)("div",{class:"col col--6"},(0,a.kt)("img",{src:"/img/k8s/acs-ui.jpg"})),(0,a.kt)("div",{class:"col col--6"},(0,a.kt)("p",null,"The CloudStack Kubernetes Service (CKS) gives Cloud Service Providers a Container as a Service (CaaS) offering within their existing IaaS environments, with no disruption to user experience or business process."),(0,a.kt)("p",null,"The CloudStack Kubernetes Service is developed as a plug-in to Apache CloudStack. It gives users the ability to create Kubernetes clusters within an existing multi-tenant environment provided by CloudStack. The user experience is seamless: users can now manage container clusters and deploy & manage cloud-native applications all in the same user-interface they use to manage their existing compute, network and storage."))),(0,a.kt)("br",null),(0,a.kt)("div",{class:"row"},(0,a.kt)("div",{class:"col col--2"}),(0,a.kt)("div",{class:"col col--8 text-center"},(0,a.kt)("h1",null,"Use Cases")),(0,a.kt)("div",{class:"col col--2"}),(0,a.kt)("div",{class:"col col--4"},(0,a.kt)("h2",{class:"text-center"},"Self-Healing"),(0,a.kt)("br",null),(0,a.kt)("img",{src:"/img/k8s/self-healing.png"}),(0,a.kt)("p",null,"The ClusterAPI provides self-healing when a Kubernetes node fails, spawning new Instances of the pod on a new node, as native Kubernetes does not have the ability to provision new infrastructure when this occurs. Since ClusterAPI manages infrastructure and Kubernetes at the same time, it can throw more resources onto CloudStack when a failure occurs."),(0,a.kt)("p",null,"The MachineHealthCheck controller is used to monitor and certify the health of the control plane of the work nodes, guaranteeing the integrity of the services. When a node fails, or resources are insufficient, or the services are unavailable, a new node is provisioned and added to the cluster. In this case, Kubernetes will reschedule the podes from failed nodes.")),(0,a.kt)("div",{class:"col col--4"},(0,a.kt)("h2",{class:"text-center"},"Multiple Cluster Management"),(0,a.kt)("img",{src:"/img/k8s/multiple-clusters-management.png"}),(0,a.kt)("p",null,"When Kubernetes cluster expansion is considered, ClusterAPI provides support for a range of different providers, including Apache CloudStack. This ClusterAPI capability is important for companies that use heterogeneous providers from different service providers."),(0,a.kt)("p",null,"The ClusterAPI abstracts away the different deployment mechanisms that are offered by various providers and infrastructure vendors, allowing operators to fully standardize the entire deployment, regardless of vendor or datacenter or edge. As a result, operators have more control over the entire application environment in a standardized approach to cluster lifecycle management, enabling reuse of existing components across multiple clusters, thus reducing rework.")),(0,a.kt)("div",{class:"col col--4"},(0,a.kt)("h2",{class:"text-center"},"Scaling"),(0,a.kt)("br",null),(0,a.kt)("img",{src:"/img/k8s/scaling.png"}),(0,a.kt)("p",null,"Application workload is often unpredictable, and to scale up and down Kubernetes clusters, the ClusterAPI facilitates scaling when workloads change. The main task of the ClusterAPI is to ensure that there is enough capacity to meet the current demand for access to the application, also guaranteeing redundancy so that, if a control plane fails, another can attend."),(0,a.kt)("p",null,"With the Kubeadm Control Plane provider (KCP), the operator can declaratively expand the Kubernetes control plane, thus managing availability and ensuring that the control nodes are organized, minimizing failures during the cluster lifecycle."),(0,a.kt)("p",null,"For worker nodes, just specify the number of nodes; the clusterAPI will provision the new CloudStack Instances and add them to the cluster. When using the Cluster Autoscaler, the number of worker nodes is automatically adjusted to the number of pods needed, thus meeting the access demand. Metrics can refer to application workload or average CPU usage for cluster tuning.")))),(0,a.kt)(n.default,{mdxType:"LearnMore"}))}p.isMDXComponent=!0},613:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>i});var o=r(7462),a=(r(7294),r(3905));const n={title:"Learn More about Apache CloudStack"},s=void 0,l={type:"mdx",permalink:"/learn-more",source:"@site/src/pages/learn-more.mdx",title:"Learn More about Apache CloudStack",description:"Learn More about Apache CloudStack",frontMatter:{title:"Learn More about Apache CloudStack"}},i=[],c={toc:i},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{class:"text-center"},"Learn More about Apache CloudStack"),(0,a.kt)("div",{class:"container"},(0,a.kt)("div",{class:"row"},(0,a.kt)("div",{class:"col col--6"},(0,a.kt)("div",{class:"blocks"},(0,a.kt)("img",{style:{"border-radius":"10px 10px 0 0"},src:"/img/learn-more/acs-glance.jpg"}),(0,a.kt)("div",{style:{padding:"10px"}},(0,a.kt)("h4",null,"Apache CloudStack at a Glance"),(0,a.kt)("p",null,"Learn more about Apache CloudStack and the capabilities it provides for IaaS builders"),(0,a.kt)("a",{class:"button button--primary",href:"/files/cloudstack-at-a-glance.pdf",target:"_blank"},"Download")))),(0,a.kt)("div",{class:"col col--6"},(0,a.kt)("div",{class:"blocks"},(0,a.kt)("img",{style:{"border-radius":"10px 10px 0 0"},src:"/img/learn-more/step-by-step-guide.jpg"}),(0,a.kt)("div",{style:{padding:"10px"}},(0,a.kt)("h4",null,"Apache CloudStack Proof of Concept Guide"),(0,a.kt)("p",null,"This guide gives you all the guidance you need to perform a successful PoC of Apache CloudStack"),(0,a.kt)("a",{class:"button button--primary",href:"/files/Apache CloudStack PoC Guide Step-by-Step Guide Installation and Use Cases.pdf",target:"_blank"},"Download"))))),(0,a.kt)("br",null),(0,a.kt)("div",{class:"row"},(0,a.kt)("div",{class:"col col--4"},(0,a.kt)("p",null,"Solution Brief"),(0,a.kt)("div",{class:"blocks"},(0,a.kt)("img",{style:{"border-radius":"10px 10px 0 0"},src:"/img/learn-more/acs-solution-brief.jpg"}),(0,a.kt)("div",{style:{padding:"10px"}},(0,a.kt)("h4",null,"Delivering Public Cloud Services with CloudStack"),(0,a.kt)("p",null,"Discover how to use opensource turnkey Apache CloudStack to provision public cloud services and improve your profitability"),(0,a.kt)("a",{class:"button button--primary",href:"/files/cloudstack-at-a-glance.pdf",target:"_blank"},"Download")))),(0,a.kt)("div",{class:"col col--4"},(0,a.kt)("p",null,"Case Study"),(0,a.kt)("div",{class:"blocks"},(0,a.kt)("img",{style:{"border-radius":"10px 10px 0 0"},src:"/img/learn-more/ikoula-case-study.jpg"}),(0,a.kt)("div",{style:{padding:"10px"}},(0,a.kt)("h4",null,"IKOULA - The cloud leader and innovator in France"),(0,a.kt)("p",null,"IKOULA Simplifies the Management of Large-Scale Cloud Infrastructure with Apache CloudStack and XCP-ng"),(0,a.kt)("a",{class:"button button--primary",href:"/files/acs-case-study-ikoula-2021.pdf",target:"_blank"},"Download")))),(0,a.kt)("div",{class:"col col--4"},(0,a.kt)("p",null,"Case Study"),(0,a.kt)("div",{class:"blocks"},(0,a.kt)("img",{style:{"border-radius":"10px 10px 0 0"},src:"/img/learn-more/your-online-case-study.jpg"}),(0,a.kt)("div",{style:{padding:"10px"}},(0,a.kt)("h4",null,"Your.Online - a leading European online services platform"),(0,a.kt)("p",null,"Future-Proof Open-Source Platform Hosting Millions of Websites for Your.Online Powered by CloudStack, KVM and Ceph"),(0,a.kt)("a",{class:"button button--primary",href:"/files/acs-case-study-your-online.pdf",target:"_blank"},"Download")))))))}d.isMDXComponent=!0}}]);