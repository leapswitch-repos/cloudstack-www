"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9774],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},720:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={layout:"post",title:"Dnsmasq Vulnerabilities Advisory for CloudStack",slug:"dnsmasq-vulnerabilities-advisory-for-cloudstack"},s=void 0,l={permalink:"/blog/dnsmasq-vulnerabilities-advisory-for-cloudstack",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/blog/2017-10-13-dnsmasq-vulnerabilities-advisory-for-cloudstack.md",source:"@site/blog/2017-10-13-dnsmasq-vulnerabilities-advisory-for-cloudstack.md",title:"Dnsmasq Vulnerabilities Advisory for CloudStack",description:"Recently, a number of security flaws were recently found in the DNSMasq tool. This tool is used by many systems to provide DNS and DHCP services, including by the CloudStack System VMs.",date:"2017-10-13T00:00:00.000Z",formattedDate:"October 13, 2017",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Dnsmasq Vulnerabilities Advisory for CloudStack",slug:"dnsmasq-vulnerabilities-advisory-for-cloudstack"},prevItem:{title:"Announcing Apache CloudStack LTS Maintenance Release 4.11.1.0",permalink:"/blog/announcing-apache-cloudstack-lts-maintenance"},nextItem:{title:"Apache CloudStack registerUserKeys authorization vulnerability",permalink:"/blog/apache_cloudstack_registeruserkeys_authorization_vulnerability"}},i={authorsImageUrls:[]},u=[],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Recently, a number of security flaws were recently found in the DNSMasq tool. This tool is used by many systems to provide DNS and DHCP services, including by the CloudStack System VMs."),(0,o.kt)("p",null,"According to Google\u2019s investigation into the software, out of seven issues, three \u2014 CVE-2017-14491, CVE-2017-14492, and CVE-2017-14493 \u2014 are remote code execution flaws caused by heap buffer overflow and stack buffer overflow errors through DHCP and DNS vectors."),(0,o.kt)("p",null,"Another issue, CVE-2017-14494, can be exploited to bypass the Address space layout randomization (ASLR) memory protection function, leading to information leaks."),(0,o.kt)("p",null,"In addition, three more bugs, CVE-2017-14495, CVE-2017-14496, and CVE-2017-13704, can lead to denial-of-service (DoS) attacks caused by invalid boundary checks, bug collision, and a coding issue."),(0,o.kt)("h2",null,"Affect On CloudStack"),(0,o.kt)("p",null,"CloudStack\u2019s System VMs use DNSMasq to provide DNS and DHCP services to the guest VMs from the virtual routers.  These services are only exposed on the internal guest interface(s) of the virtual routers. Therefore a malicious user could compromise a virtual router to which they have a guest instance attached."),(0,o.kt)("h2",null,"The Fix"),(0,o.kt)("p",null,"On 9th October, an updated version of DNSMasq was released by the authors of DNSMasq for the Debian Wheezy Operating System which the CloudStack System VMs use.  We have created new versions of the System VM templates which should be used to replace your existing System VMs using the procedure described below."),(0,o.kt)("p",null,"A short-term fix for currently running System VMs (if they have internet access) is to log into the System VMs and run:"),(0,o.kt)("code",null,"apt-get update ",(0,o.kt)("br",null),"apt-get upgrade dnsmasq -y"),(0,o.kt)("p",null,"For information on logging into System VMs please see: http://docs.cloudstack.apache.org/en/latest/administration_guide.html?#accessing-system-vms"),(0,o.kt)("p",null,"The above procedure will patch existing virtual routers, but should a virtual router be destroyed and recreated or a new virtual router created, the subsequent virtual router will no longer be patched."),(0,o.kt)("p",null,"The full fix is to replace the existing System VM template(s) with the latest patched versions as well as recreating or patch existing virtual routers."),(0,o.kt)("h2",null,"System VM Patching Procedure"),(0,o.kt)("p",null,"New System VM templates with updated DNSMasq for major CloudStack versions for XenServer, VMware and KVM hypervisors have been built. We advise CloudStack users to upgrade to the appropriate System VM template and either;"),(0,o.kt)("p",null,"Patch all existing virtual routers using the procedure above or recreate all virtual routers using the procedure detailed in the link for updating system VM templates (below)",(0,o.kt)("br",null),"For ACS 4.10+: http://download.cloudstack.org/systemvm/4.10/dnsmasq/",(0,o.kt)("br",null),"For ACS 4.6-4.9: http://download.cloudstack.org/systemvm/4.6/dnsmasq/"),(0,o.kt)("p",null,"The procedure for updating the system VM templates can be found at http://docs.cloudstack.apache.org/projects/cloudstack-administration/en/latest/systemvm.html#enhanced-upgrade-for-virtual-routers."))}p.isMDXComponent=!0}}]);