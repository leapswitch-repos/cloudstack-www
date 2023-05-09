"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8447],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8708:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={layout:"post",title:"CloudStack Advisory on Spring4Shell (CVE-2022-22965&nbsp;and&nbsp;CVE-2022-22963)",tags:["announcement"],authors:["ivet"],slug:"cloudstack-advisory-on-spring4shell-cve"},i=void 0,l={permalink:"/blog/cloudstack-advisory-on-spring4shell-cve",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2022-04-14-cloudstack-advisory-on-spring4shell-cve.md",source:"@site/blog/2022-04-14-cloudstack-advisory-on-spring4shell-cve.md",title:"CloudStack Advisory on Spring4Shell (CVE-2022-22965&nbsp;and&nbsp;CVE-2022-22963)",description:"At the beginning of April 2022, vulnerabilities in the Spring Framework for Java were publicly revealed. Many companies noticed active exploitation of the Spring4Shell vulnerability assigned as CVE-2022-22965. This vulnerability allows hackers to execute the Mirai botnet malware. The exploit allows threat actors to download the Mirai sample to the /tmp folder and execute them after changing its execute permission using chmod.",date:"2022-04-14T00:00:00.000Z",formattedDate:"April 14, 2022",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!1,authors:[{name:"Ivet Petrova",title:"PMC Member",url:"https://twitter.com/Ivet_H_Petrova",imageURL:"https://pbs.twimg.com/profile_images/1331984193392435200/djCqv-vM_400x400.jpg",key:"ivet"}],frontMatter:{layout:"post",title:"CloudStack Advisory on Spring4Shell (CVE-2022-22965&nbsp;and&nbsp;CVE-2022-22963)",tags:["announcement"],authors:["ivet"],slug:"cloudstack-advisory-on-spring4shell-cve"},prevItem:{title:"Meet the Community - Simon Weller - VP of Apache CloudStack",permalink:"/blog/meet-the-community-simon-weller"},nextItem:{title:"CloudStack European User Group Virtual - April 7th, 2022",permalink:"/blog/cloudstack-european-user-group-virtual"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At the beginning of April 2022, vulnerabilities in the Spring Framework for Java were publicly revealed. Many companies noticed active exploitation of the Spring4Shell vulnerability assigned as CVE-2022-22965. This vulnerability allows hackers to execute the Mirai botnet malware. The exploit allows threat actors to download the Mirai sample to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp")," folder and execute them after changing its execute permission using ",(0,a.kt)("inlineCode",{parentName:"p"},"chmod"),"."),(0,a.kt)("p",null,"Currently, there are two vulnerabilities that allow malicious actors to achieve remote code execution (RCE) for Spring Framework - ",(0,a.kt)("a",{href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-22965",target:"_blank",rel:"noopener"},"CVE-2022-22965"),", ",(0,a.kt)("a",{href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-22963",target:"_blank",rel:"noopener"},"CVE-2022-22963"),"."),(0,a.kt)("p",null,"The origin appears to be tracked to VMware products and spring-framework has published new releases ",(0,a.kt)("a",{href:"https://spring.io/blog/2022/03/31/spring-framework-rce-early-announcement#am-i-impacted",target:"_blank",rel:"noopener"},"v5.3.18 and v5.2.20")," as mitigation."),(0,a.kt)("p",null,"CloudStack is not affected by Spring4Shell RCE and these CVEs because it isn't deployed as a WAR package and doesn't use Tomcat as the servlet container (it uses embedded Jetty and is deployed as an uber-jar). Further, it doesn't use spring-webmvc or spring-webflux dependencies."),(0,a.kt)("p",null,"As part of the Apache CloudStack project's routine maintenance and release efforts, a pull request towards the next 4.17 LTS release (4.17.0.0 milestone) that upgrades the spring-framework dependency to the latest v5.3.18 has been merged:"),(0,a.kt)("a",{href:"https://github.com/apache/cloudstack/pull/6250/files",target:"_blank",rel:"noopener"},"https://github.com/apache/cloudstack/pull/6250/files"))}d.isMDXComponent=!0}}]);