"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4579],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),s=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||n;return r?o.createElement(m,c(c({ref:t},u),{},{components:r})):o.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,c=new Array(n);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<n;s++)c[s]=r[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2234:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=r(7462),a=(r(7294),r(3905));const n={layout:"post",title:"Apache CloudStack Terraform Provider v0.4.0 Release",tags:["announcement"],authors:["ivet"],slug:"apache-cloudstack-terraform-provider-v0"},c=void 0,l={permalink:"/blog/apache-cloudstack-terraform-provider-v0",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2022-02-07-apache-cloudstack-terraform-provider-v0.md",source:"@site/blog/2022-02-07-apache-cloudstack-terraform-provider-v0.md",title:"Apache CloudStack Terraform Provider v0.4.0 Release",description:"Apache CloudStack is proven to be one of the most scalable, free and open-source cloud computing operating systems for large-scale private, public, and hybrid clouds. Terraform is an open-source infrastructure as code software tool that provides a consistent CLI workflow to manage resources in many cloud services.",date:"2022-02-07T00:00:00.000Z",formattedDate:"February 7, 2022",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!1,authors:[{name:"Ivet Petrova",title:"PMC Member",url:"https://twitter.com/Ivet_H_Petrova",imageURL:"https://pbs.twimg.com/profile_images/1331984193392435200/djCqv-vM_400x400.jpg",key:"ivet"}],frontMatter:{layout:"post",title:"Apache CloudStack Terraform Provider v0.4.0 Release",tags:["announcement"],authors:["ivet"],slug:"apache-cloudstack-terraform-provider-v0"},prevItem:{title:"Apache CloudStack LTS Maintenance Release 4.16.1.0",permalink:"/blog/apache-cloudstack-lts-maintenance-release3"},nextItem:{title:"Cloud IaaS Predictions for 2022 from the Apache CloudStack Community",permalink:"/blog/cloud-iaas-predictions-for-2022"}},i={authorsImageUrls:[void 0]},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{href:"/img/imported/02633cc4-0d22-4bde-966e-4e3efec8f357"},(0,a.kt)("img",{src:"/img/imported/02633cc4-0d22-4bde-966e-4e3efec8f357",alt:"cloudstack-terraform.jpg",width:"750",height:"393"})),(0,a.kt)("p",null,"Apache CloudStack is proven to be one of the most scalable, free and open-source cloud computing operating systems for large-scale private, public, and hybrid clouds. Terraform is an open-source infrastructure as code software tool that provides a consistent CLI workflow to manage resources in many cloud services."),(0,a.kt)("p",null,"To integrate CloudStack with Terraform, we are announcing today the availability of the latest release of Apache CloudStack Terraform Provider v0.4.0."),(0,a.kt)("p",null,(0,a.kt)("strong",null,"This is the first release after it has been brought under the Apache license.")),(0,a.kt)("p",null,(0,a.kt)("strong",null,"The release includes the following changes:"),(0,a.kt)("br",null),"- Relicensing with Apache License v2.0",(0,a.kt)("br",null),"- Validated and fixed all existing resource creations to work as expected",(0,a.kt)("br",null),"- Updated documentation on using and also developing the provider",(0,a.kt)("br",null),"- Bug fixes on syncing the data from CloudStack",(0,a.kt)("br",null),"- Fixed resource destroy using terraform for some resources",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",null,"Downloads and Documentation"),(0,a.kt)("br",null),"The Terraform registry link to install the CloudStack Provider is available at:",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://registry.terraform.io/providers/cloudstack/cloudstack/0.4.0",target:"_blank"},"https://registry.terraform.io/providers/cloudstack/cloudstack/0.4.0")," The documentation for the usage of resources to create and interact with CloudStack is available at: ",(0,a.kt)("a",{href:"https://registry.terraform.io/providers/cloudstack/cloudstack/0.4.0/docs",target:"_blank"},"https://registry.terraform.io/providers/cloudstack/cloudstack/0.4.0/docs")," ",(0,a.kt)("br",null),"The official source code for Apache CloudStack Terraform provider can be downloaded from:",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://github.com/apache/cloudstack-terraform-provider",target:"_blank"},"https://github.com/apache/cloudstack-terraform-provider"),(0,a.kt)("br",null),"The documentation for Apache CloudStack Terraform provider's usage is available at:",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://github.com/apache/cloudstack-terraform-provider/wiki",target:"_blank"},"https://github.com/apache/cloudstack-terraform-provider/wiki")))}d.isMDXComponent=!0}}]);