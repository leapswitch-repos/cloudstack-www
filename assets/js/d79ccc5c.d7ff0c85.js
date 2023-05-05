"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[919],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var o=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),s=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=s(e.components);return o.createElement(i.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||n;return t?o.createElement(m,c(c({ref:r},u),{},{components:t})):o.createElement(m,c({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,c=new Array(n);c[0]=f;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<n;s++)c[s]=t[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3646:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=t(7462),a=(t(7294),t(3905));const n={layout:"post",title:"Apache CloudStack Terraform Provider v0.4.0 Release",slug:"apache-cloudstack-terraform-provider-v0"},c=void 0,l={permalink:"/blog/apache-cloudstack-terraform-provider-v0",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2022-02-07-apache-cloudstack-terraform-provider-v0.md",source:"@site/blog/2022-02-07-apache-cloudstack-terraform-provider-v0.md",title:"Apache CloudStack Terraform Provider v0.4.0 Release",description:"Apache CloudStack is proven to be one of the most scalable, free and open-source cloud computing operating systems for large-scale private, public, and hybrid clouds. Terraform is an open-source infrastructure as code software tool that provides a consistent CLI workflow to manage resources in many cloud services.",date:"2022-02-07T00:00:00.000Z",formattedDate:"February 7, 2022",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack Terraform Provider v0.4.0 Release",slug:"apache-cloudstack-terraform-provider-v0"},prevItem:{title:"Apache CloudStack LTS Maintenance Release 4.16.1.0",permalink:"/blog/apache-cloudstack-lts-maintenance-release3"},nextItem:{title:"Cloud IaaS Predictions for 2022 from the Apache CloudStack Community",permalink:"/blog/cloud-iaas-predictions-for-2022"}},i={authorsImageUrls:[]},s=[],u={toc:s},p="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("a",{href:"/img/imported/02633cc4-0d22-4bde-966e-4e3efec8f357"},(0,a.kt)("img",{src:"/img/imported/02633cc4-0d22-4bde-966e-4e3efec8f357",alt:"cloudstack-terraform.jpg",width:"750",height:"393"})),(0,a.kt)("p",null,"Apache CloudStack is proven to be one of the most scalable, free and open-source cloud computing operating systems for large-scale private, public, and hybrid clouds. Terraform is an open-source infrastructure as code software tool that provides a consistent CLI workflow to manage resources in many cloud services."),(0,a.kt)("p",null,(0,a.kt)("br",null),"To integrate CloudStack with Terraform, we are announcing today the availability of the latest release of Apache CloudStack Terraform Provider v0.4.0."),(0,a.kt)("p",null,(0,a.kt)("br",null),(0,a.kt)("strong",null,"This is the first release after it has been brought under the Apache license.")),(0,a.kt)("p",null,(0,a.kt)("strong",null,"The release includes the following changes:"),(0,a.kt)("br",null),"- Relicensing with Apache License v2.0",(0,a.kt)("br",null),"- Validated and fixed all existing resource creations to work as expected",(0,a.kt)("br",null),"- Updated documentation on using and also developing the provider",(0,a.kt)("br",null),"- Bug fixes on syncing the data from CloudStack",(0,a.kt)("br",null),"- Fixed resource destroy using terraform for some resources",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",null,"Downloads and Documentation"),(0,a.kt)("br",null),"The Terraform registry link to install the CloudStack Provider is available at:",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://registry.terraform.io/providers/cloudstack/cloudstack/0.4.0",target:"_blank"},"https://registry.terraform.io/providers/cloudstack/cloudstack/0.4.0")," The documentation for the usage of resources to create and interact with CloudStack is available at: ",(0,a.kt)("a",{href:"https://registry.terraform.io/providers/cloudstack/cloudstack/0.4.0/docs",target:"_blank"},"https://registry.terraform.io/providers/cloudstack/cloudstack/0.4.0/docs")," ",(0,a.kt)("br",null),"The official source code for Apache CloudStack Terraform provider can be downloaded from:",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://github.com/apache/cloudstack-terraform-provider",target:"_blank"},"https://github.com/apache/cloudstack-terraform-provider"),(0,a.kt)("br",null),"The documentation for Apache CloudStack Terraform provider's usage is available at:",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://github.com/apache/cloudstack-terraform-provider/wiki",target:"_blank"},"https://github.com/apache/cloudstack-terraform-provider/wiki")),(0,a.kt)("p",null,"\xa0"))}d.isMDXComponent=!0}}]);