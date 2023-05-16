"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={layout:"post",title:"How to Mitigate OpenSSL HeartBleed Vulnerability in Apache CloudStack",tags:["announcement"],slug:"how_to_mitigate_openssl_heartbleed"},l=void 0,s={permalink:"/blog/how_to_mitigate_openssl_heartbleed",source:"@site/blog/2014-04-09-how_to_mitigate_openssl_heartbleed.md",title:"How to Mitigate OpenSSL HeartBleed Vulnerability in Apache CloudStack",description:'UPDATE 1: The instructions below are incomplete. The proper upgrade command is "apt-get install openssl libssl1.0.0". If you\'ve just updated openssl, please go back and update libssl as well.',date:"2014-04-09T00:00:00.000Z",formattedDate:"April 9, 2014",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"How to Mitigate OpenSSL HeartBleed Vulnerability in Apache CloudStack",tags:["announcement"],slug:"how_to_mitigate_openssl_heartbleed"},prevItem:{title:"ASF Mailing List Problems (Update: we are back to normal)",permalink:"/blog/asf_mailing_list_problems"},nextItem:{title:"Announcing Apache CloudStack 4.3.0",permalink:"/blog/announcing_apache_cloudstack_4_3"}},i={authorsImageUrls:[]},u=[],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("b",null,"UPDATE 1:"),' The instructions below are incomplete. The proper upgrade command is "apt-get install openssl libssl1.0.0". If you\'ve just updated openssl, please go back and update libssl as well.',(0,r.kt)("br",null),(0,r.kt)("b",null,"UPDATE 2:")," Adding instructions for VMWare-hosted System VMs (Thanks to Geoff Higginbottom at ShapeBlue)",(0,r.kt)("br",null),(0,r.kt)("b",null,"UPDATE 3:")," Added instructions for verification of correct versions installed",(0,r.kt)("br",null),(0,r.kt)("b",null,"UPDATE 4:")," Apache CloudStack 4.0-4.1 not vulnerable, they use older Debian/openssl.",(0,r.kt)("br",null),(0,r.kt)("p",null,"Earlier this week, a security vulnerability was disclosed in OpenSSL, one of the software libraries that Apache CloudStack uses to encrypt data sent over network network connections. As the vulnerability has existed in OpenSSL since early 2012, System VMs in Apache CloudStack versions 4.1.1-4.3 are running software using vulnerable versions of OpenSSL. This includes CloudStack's Virtual Router VMs, Console Proxy VMs, and Secondary Storage VMs."),(0,r.kt)("p",null,"We are actively working on creating updated System VM templates for each recent version of Apache CloudStack, and for each of the hypervisor platforms which Apache CloudStack supports. Due to our testing and QA processes, this will take several days. In the meantime, we want to provide our users with a temporary workaround for currently running System VMs."),(0,r.kt)("p",null,"If you are running Apache CloudStack 4.0.0-incubating through the recent 4.3 release, the the following steps will help ensure the security of your cloud infrastructure until an updated version of the System VM template is available:"),(0,r.kt)("h2",null," For KVM/Xen hosted systems"),(0,r.kt)("ol",null,(0,r.kt)("li",null," As an administrator in the CloudStack web UI, navigate to Infrastructure->System VMs"),(0,r.kt)("li",null,' For each System VM listed, note the host it is running on, and it\u2019s \u201cLink Local IP address."'),(0,r.kt)("li",null," With that data, perform the following steps for each System VM:",(0,r.kt)("ol",{type:"a"},(0,r.kt)("li",null," ssh into that host as root"),(0,r.kt)("li",null," From the host, ssh into the SSVM via it\u2019s link local IP address: (e.g. ssh -i /root/.ssh/id_rsa.cloud -p 3922 169.254.3.33)"),(0,r.kt)("li",null,' On the System VM, first run "apt-get update"'),(0,r.kt)("li",null,' Then run apt-get install "openssl libssl1.0.0". If a dialog appears asking to restart programs, accept it\u2019s request.'),(0,r.kt)("li",null," Next, for Secondary Storage VMs, run /etc/init.d/apache2 restart"),(0,r.kt)("li",null," Log out of the System VM and host server"))),(0,r.kt)("li",null,"Back in the CloudStack UI, now navigate to Infrastructure->Virtual Routers. For each VR, host it's running on and it's link local IP address, and then repeat steps a-f above.")),(0,r.kt)("h2",null," For VMWare hosted systems"),(0,r.kt)("ol",null,(0,r.kt)("li",null," As an administrator in the CloudStack web UI, navigate to Infrastructure->System VMs"),(0,r.kt)("li",null," For each System VM listed, note it's management IP address"),(0,r.kt)("li",null," With that data, perform the following steps for each System VM:"),(0,r.kt)("li",null," From the Management Server, ssh to the System VM via it's management IP: (eg ssh -i /var/lib/cloud/management/.ssh/id_rsa -p 3922 root@10.40.50.8)"),(0,r.kt)("li",null,' On the System VM, first run "apt-get update"'),(0,r.kt)("li",null,' Then run apt-get install "openssl libssl1.0.0". If a dialog appears asking to restart programs, accept it\u2019s request.'),(0,r.kt)("li",null," Next, for Secondary Storage VMs, run /etc/init.d/apache2 restart"),(0,r.kt)("li",null," Log out of the System VM"),(0,r.kt)("li",null,"Back in the CloudStack UI, now navigate to Infrastructure->Virtual Routers. For each VR, host it's running on and it's link local IP address, and then repeat steps a-f above.")),(0,r.kt)("h2",null,"Verification"),(0,r.kt)("p",null,"On each System VM, you can test if it has non-vulnerable openssl packages installed by listing installed packages and looking at the installed versions of openssl and libssl. As in the example below, for a system to be non-vulnerable, the packages need to be at or above version 1.0.1e-2+deb7u6:"),(0,r.kt)("pre",null,"root@v-14-VM:~# dpkg -l|grep ssl ii  libssl1.0.0:i386                     1.0.1e-2+deb7u6                  i386         SSL shared libraries ii  openssl                              1.0.1e-2+deb7u6                  i386         Secure Socket Layer (SSL) binary and related cryptographic tools"),(0,r.kt)("p",null,"We realize that for larger installations where System VMs are being actively created and destroyed based on customer demand, this is a very rough stop-gap. The Apache CloudStack security team is actively working on a more permanent fix and will be releasing that to the community as soon as possible."),(0,r.kt)("p",null,"For Apache CloudStack installations that secure the web-based user-interface with SSL, these may also be vulnerable to HeartBleed, but that is outside the scope of this blog post. We recommend testing your installation with [1] to determine if you need to patch/upgrade the SSL library used by any web servers (or other SSL-based services) you use."),(0,r.kt)("a",{target:"_new",href:"http://filippo.io/Heartbleed/"},"http://filippo.io/Heartbleed/"))}d.isMDXComponent=!0}}]);