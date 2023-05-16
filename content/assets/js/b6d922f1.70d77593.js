"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9076],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,d=n(e,["components","mdxType","originalType","parentName"]),i=u(a),k=o,h=i["".concat(c,".").concat(k)]||i[k]||p[k]||s;return a?r.createElement(h,l(l({ref:t},d),{},{components:a})):r.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,l=new Array(s);l[0]=k;var n={};for(var c in t)hasOwnProperty.call(t,c)&&(n[c]=t[c]);n.originalType=e,n[i]="string"==typeof e?e:o,l[1]=n;for(var u=2;u<s;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5383:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>i,frontMatter:()=>s,metadata:()=>n,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));const s={title:"Apache CloudStack Downloads"},l=void 0,n={type:"mdx",permalink:"/downloads",source:"@site/src/pages/downloads.mdx",title:"Apache CloudStack Downloads",description:"CloudStack Releases",frontMatter:{title:"Apache CloudStack Downloads"}},c=[{value:"CloudStack Releases",id:"cloudstack-releases",level:2},{value:"Source Releases",id:"source-releases",level:3},{value:"Community Packages",id:"community-packages",level:3},{value:"3rd Party Packages",id:"3rd-party-packages",level:3},{value:"CloudMonkey Releases",id:"cloudmonkey-releases",level:2},{value:"Source Release",id:"source-release",level:3},{value:"Binary Builds Release",id:"binary-builds-release",level:3},{value:"CloudStack Go-SDK",id:"cloudstack-go-sdk",level:2},{value:"CloudStack Terraform Provider Release",id:"cloudstack-terraform-provider-release",level:2},{value:"Source Release",id:"source-release-1",level:3},{value:"Using Terraform Registry",id:"using-terraform-registry",level:3},{value:"CloudStack Kubernetes Provider Release",id:"cloudstack-kubernetes-provider-release",level:2},{value:"Source Release",id:"source-release-2",level:3},{value:"Docker Release",id:"docker-release",level:3},{value:"Verifying Downloads",id:"verifying-downloads",level:2},{value:"Archived Releases",id:"archived-releases",level:2}],u={toc:c},d="wrapper";function i(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"cloudstack-releases"},"CloudStack Releases"),(0,o.kt)("p",null,"The CloudStack community maintains two types of releases; the main releases and\nthe LTS (Long Term Support) releases. The LTS releases receive bug and security\nfixes for a period of 18 months after the main release (for more details ",(0,o.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/CLOUDSTACK/LTS"},"click\nhere"),"). The main\nreleases receive only critical bug fixes for a short period. The general\nexpectation is that the users of the main version will upgrade to a new version\nin order to receive fixes."),(0,o.kt)("p",null,"Looking for other versions of Apache CloudStack? You can find them in our\n",(0,o.kt)("a",{parentName:"p",href:"/archives"},"archives")," page and under ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/cloudstack/releases"},"Github\nreleases"),"."),(0,o.kt)("h3",{id:"source-releases"},"Source Releases"),(0,o.kt)("p",null,"Apache CloudStack's most recent release is ",(0,o.kt)("inlineCode",{parentName:"p"},"4.18.0.0"),". This is current\nCloudStack LTS release."),(0,o.kt)("a",{class:"button button--primary button--lg",href:"http://www.apache.org/dyn/closer.lua/cloudstack/releases/4.18.0.0/apache-cloudstack-4.18.0.0-src.tar.bz2"},"Get the 4.18.0.0 Source"),"\xa0",(0,o.kt)("a",{class:"button button--secondary button--sm",href:"https://downloads.apache.org/cloudstack/KEYS"},"KEYS"),"\xa0",(0,o.kt)("a",{class:"button button--secondary button--sm",href:"https://downloads.apache.org/cloudstack/releases/4.18.0.0/apache-cloudstack-4.18.0.0-src.tar.bz2.asc"},"PGP"),"\xa0",(0,o.kt)("a",{class:"button button--secondary button--sm",href:"https://downloads.apache.org/cloudstack/releases/4.18.0.0/apache-cloudstack-4.18.0.0-src.tar.bz2.sha512"},"SHA512"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Full release notes can be found in the version ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cloudstack.apache.org/en/4.18.0.0/releasenotes/"},"4.18.0.0 Release\nNotes")," website."),(0,o.kt)("p",null,"Instructions for building from source and installing Apache CloudStack can be\nfound in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cloudstack.apache.org/en/4.18.0.0/installguide/"},"Installation\nGuide"),".\nInstructions for building from source and upgrading from a previous version of\nCloudStack to Apache CloudStack 4.18.0.0 can be found in the upgrade section of\nthe Release Notes (see above)."),(0,o.kt)("p",null,"The latest CloudStack LTS maintenance release is ",(0,o.kt)("inlineCode",{parentName:"p"},"4.17.2.0")," as part of the LTS\n4.17.x releases."),(0,o.kt)("a",{class:"button button--primary button--lg",href:"http://www.apache.org/dyn/closer.lua/cloudstack/releases/4.17.2.0/apache-cloudstack-4.17.2.0-src.tar.bz2"},"Get the 4.17.2.0 Source"),"\xa0",(0,o.kt)("a",{class:"button button--secondary button--sm",href:"https://downloads.apache.org/cloudstack/KEYS"},"KEYS"),"\xa0",(0,o.kt)("a",{class:"button button--secondary button--sm",href:"https://downloads.apache.org/cloudstack/releases/4.17.2.0/apache-cloudstack-4.17.2.0-src.tar.bz2.asc"},"PGP"),"\xa0",(0,o.kt)("a",{class:"button button--secondary button--sm",href:"https://downloads.apache.org/cloudstack/releases/4.17.2.0/apache-cloudstack-4.17.2.0-src.tar.bz2.sha512"},"SHA512"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Full release notes can be found in the version ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cloudstack.apache.org/en/4.17.2.0/releasenotes/"},"4.17.2.0 Release\nNotes")," website."),(0,o.kt)("p",null,"Instructions for building from source and installing Apache CloudStack can be\nfound in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cloudstack.apache.org/en/4.17.2.0/installguide/"},"Installation\nGuide"),".\nInstructions for building from source and upgrading from a previous version of\nCloudStack to Apache CloudStack 4.17.2.0 can be found in the upgrade section of\nthe Release Notes (see above)."),(0,o.kt)("h3",{id:"community-packages"},"Community Packages"),(0,o.kt)("p",null,"For easier installation or upgrades, the official source code release has been\nsupplemented by community members who have chosen to provide package\nrepositories that also include noredist libraries:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ubuntu DEB repository: ",(0,o.kt)("a",{parentName:"li",href:"http://download.cloudstack.org/ubuntu"},"http://download.cloudstack.org/ubuntu")),(0,o.kt)("li",{parentName:"ul"},"EL9 RPM repository: ",(0,o.kt)("a",{parentName:"li",href:"http://download.cloudstack.org/el/9/"},"http://download.cloudstack.org/el/9/")),(0,o.kt)("li",{parentName:"ul"},"EL8 RPM repository: ",(0,o.kt)("a",{parentName:"li",href:"http://download.cloudstack.org/el/8/"},"http://download.cloudstack.org/el/8/")),(0,o.kt)("li",{parentName:"ul"},"EL7 RPM repository: ",(0,o.kt)("a",{parentName:"li",href:"http://download.cloudstack.org/el/7/"},"http://download.cloudstack.org/el/7/")),(0,o.kt)("li",{parentName:"ul"},"EL6 RPM repository (for 4.13 and older releases): ",(0,o.kt)("a",{parentName:"li",href:"http://download.cloudstack.org/centos/6/"},"http://download.cloudstack.org/centos/6/")),(0,o.kt)("li",{parentName:"ul"},"SUSE/openSUSE 15 RPM repository: ",(0,o.kt)("a",{parentName:"li",href:"http://download.cloudstack.org/suse/15/"},"http://download.cloudstack.org/suse/15/"))),(0,o.kt)("p",null,"Experimental ARM64 packages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ubuntu/DEB repository: ",(0,o.kt)("a",{parentName:"li",href:"http://download.cloudstack.org/arm64/"},"http://download.cloudstack.org/arm64/"))),(0,o.kt)("p",null,"Instructions for using these community provided repositories can be found in the\n",(0,o.kt)("a",{parentName:"p",href:"http://docs.cloudstack.apache.org/en/latest/installguide/management-server/#configure-package-repository"},"Configure Package\nRepository"),"\nsection of the Installation Guide."),(0,o.kt)("p",null,"Additional downloads:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CloudStack SystemVM Templates: ",(0,o.kt)("a",{parentName:"li",href:"http://download.cloudstack.org/systemvm/"},"http://download.cloudstack.org/systemvm/")),(0,o.kt)("li",{parentName:"ul"},"CloudStack Kubernetes Service (CKS) ISOs: ",(0,o.kt)("a",{parentName:"li",href:"http://download.cloudstack.org/cks/"},"http://download.cloudstack.org/cks/"))),(0,o.kt)("h3",{id:"3rd-party-packages"},"3rd Party Packages"),(0,o.kt)("p",null,"Apache CloudStack (noredist) packages and downloads by ",(0,o.kt)("a",{parentName:"p",href:"https://www.shapeblue.com/"},"ShapeBlue"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Packages Repository: ",(0,o.kt)("a",{parentName:"li",href:"https://shapeblue.com/packages"},"https://shapeblue.com/packages")),(0,o.kt)("li",{parentName:"ul"},"CloudStack SystemVM Templates: ",(0,o.kt)("a",{parentName:"li",href:"http://packages.shapeblue.com/systemvmtemplate/"},"http://packages.shapeblue.com/systemvmtemplate/")),(0,o.kt)("li",{parentName:"ul"},"CloudStack Kubernetes Service (CKS) ISOs: ",(0,o.kt)("a",{parentName:"li",href:"http://packages.shapeblue.com/cks/"},"http://packages.shapeblue.com/cks/")),(0,o.kt)("li",{parentName:"ul"},"Cluster API Provider CloudStack (CAPC) Templates: ",(0,o.kt)("a",{parentName:"li",href:"http://packages.shapeblue.com/cluster-api-provider-cloudstack/images/"},"http://packages.shapeblue.com/cluster-api-provider-cloudstack/images/"))),(0,o.kt)("h2",{id:"cloudmonkey-releases"},"CloudMonkey Releases"),(0,o.kt)("p",null,"Apache CloudStack's CloudMonkey tool is a CLI and shell environment designed for\ninteracting with CloudStack-based clouds. For installing, upgrade, usage, please\nsee the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/cloudstack-cloudmonkey/wiki/Getting-Started#installation"},"documentation\nwiki"),"."),(0,o.kt)("h3",{id:"source-release"},"Source Release"),(0,o.kt)("p",null,"CloudMonkey's current release is ",(0,o.kt)("inlineCode",{parentName:"p"},"v6.3.0"),"."),(0,o.kt)("a",{class:"button button--primary button--lg",href:"http://www.apache.org/dyn/closer.lua/cloudstack/releases/cloudmonkey-6.3.0/apache-cloudstack-cloudmonkey-6.3.0-src.tar.bz2"},"Get the 6.3.0 Source"),"\xa0",(0,o.kt)("a",{class:"button button--secondary button--sm",href:"https://downloads.apache.org/cloudstack/KEYS"},"KEYS"),"\xa0",(0,o.kt)("a",{class:"button button--secondary button--sm",href:"https://www.apache.org/dist/cloudstack/releases/cloudmonkey-6.3.0/apache-cloudstack-cloudmonkey-6.3.0-src.tar.bz2.asc"},"PGP"),"\xa0",(0,o.kt)("a",{class:"button button--secondary button--sm",href:"https://www.apache.org/dist/cloudstack/releases/cloudmonkey-6.3.0/apache-cloudstack-cloudmonkey-6.3.0-src.tar.bz2.sha512"},"SHA512"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"binary-builds-release"},"Binary Builds Release"),(0,o.kt)("p",null,"For easier installation or upgrades, the official source code release has been\nsupplemented by community members who have pushed the binary to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/cloudstack-cloudmonkey/releases"},"Apache\nCloudStack CloudMonkey Github release\npage"),"."),(0,o.kt)("h2",{id:"cloudstack-go-sdk"},"CloudStack Go-SDK"),(0,o.kt)("p",null,"The CloudStack Go-SDK provides CloudStack API client and binding enabling Go\nprograms to interact with CloudStack in a simple and uniform way. The CloudStack\nGo-SDK is widely used by several projects such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/cloudstack-terraform-provider"},"CloudStack Terraform Provider")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/cloudstack-kubernetes-provider"},"CloudStack Kubernetes Provider")),(0,o.kt)("li",{parentName:"ul"},"CAPC - the ",(0,o.kt)("a",{parentName:"li",href:"https://cluster-api-cloudstack.sigs.k8s.io/"},"Kubernetes Cluster API Provider for Apache CloudStack"))),(0,o.kt)("p",null,"The community-maintained releases are published directly as the project Github\nreleases for every CloudStack major release:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/cloudstack-go/releases"},"https://github.com/apache/cloudstack-go/releases")),(0,o.kt)("h2",{id:"cloudstack-terraform-provider-release"},"CloudStack Terraform Provider Release"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/cloudstack-terraform-provider"},"CloudStack Terraform\nProvider")," allows\nTerraform users to manage and use CloudStack. The ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/cloudstack/cloudstack/latest/docs"},"documentation is available\nhere"),"."),(0,o.kt)("h3",{id:"source-release-1"},"Source Release"),(0,o.kt)("p",null,"The current release is ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.4.0"),"."),(0,o.kt)("a",{class:"button button--primary button--lg",href:"https://www.apache.org/dyn/closer.lua/cloudstack/releases/terraform-provider-0.4.0/apache-cloudstack-terraform-provider-0.4.0-src.tar.bz2"},"Get the v0.4.0 Source"),"\xa0",(0,o.kt)("a",{class:"button button--secondary button--sm",href:"https://downloads.apache.org/cloudstack/KEYS"},"KEYS"),"\xa0",(0,o.kt)("a",{class:"button button--secondary button--sm",href:"https://downloads.apache.org/cloudstack/releases/terraform-provider-0.4.0/apache-cloudstack-terraform-provider-0.4.0-src.tar.bz2.asc"},"PGP"),"\xa0",(0,o.kt)("a",{class:"button button--secondary button--sm",href:"https://downloads.apache.org/cloudstack/releases/terraform-provider-0.4.0/apache-cloudstack-terraform-provider-0.4.0-src.tar.bz2.sha512"},"SHA512"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"using-terraform-registry"},"Using Terraform Registry"),(0,o.kt)("p",null,"Users can use the CloudStack Terraform provider directly using the registry:\n",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/cloudstack/cloudstack"},"https://registry.terraform.io/providers/cloudstack/cloudstack")),(0,o.kt)("p",null,"Binaries are also available at project releases page:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/cloudstack-terraform-provider"},"https://github.com/apache/cloudstack-terraform-provider")),(0,o.kt)("h2",{id:"cloudstack-kubernetes-provider-release"},"CloudStack Kubernetes Provider Release"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/cloudstack-kubernetes-provider"},"CloudStack Kubernetes\nProvider")," allows\nKubernetes users to facilitate Kubernetes deployments on Cloudstack.\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.cloudstack.apache.org/en/latest/plugins/cloudstack-kubernetes-provider.html"},"Documentation is available\nhere"),"."),(0,o.kt)("h3",{id:"source-release-2"},"Source Release"),(0,o.kt)("p",null,"The current release is ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.0.0"),"."),(0,o.kt)("a",{class:"button button--primary button--lg",href:"https://www.apache.org/dyn/closer.lua/cloudstack/releases/kubernetes-provider-v1.0.0/apache-cloudstack-kubernetes-provider-v1.0.0-src.tar.bz2"},"Get the v1.0.0 Source"),"\xa0",(0,o.kt)("a",{class:"button button--secondary button--sm",href:"https://downloads.apache.org/cloudstack/KEYS"},"KEYS"),"\xa0",(0,o.kt)("a",{class:"button button--secondary button--sm",href:"https://downloads.apache.org/cloudstack/releases/kubernetes-provider-v1.0.0/apache-cloudstack-kubernetes-provider-v1.0.0-src.tar.bz2.asc"},"PGP"),"\xa0",(0,o.kt)("a",{class:"button button--secondary button--sm",href:"https://downloads.apache.org/cloudstack/releases/kubernetes-provider-v1.0.0/apache-cloudstack-kubernetes-provider-v1.0.0-src.tar.bz2.sha512"},"SHA512"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"docker-release"},"Docker Release"),(0,o.kt)("p",null,"The CloudStack Kubernetes Provider is published as a docker image and available\nfor users at: ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/cloudstack-kubernetes-provider"},"https://hub.docker.com/r/apache/cloudstack-kubernetes-provider")),(0,o.kt)("h2",{id:"verifying-downloads"},"Verifying Downloads"),(0,o.kt)("p",null,"It's essential that you verify the integrity of the downloaded files using the\nPGP or SHA512 signatures. The PGP signatures can be verified using PGP or GPG.\nFirst download the ",(0,o.kt)("a",{parentName:"p",href:"https://downloads.apache.org/cloudstack/KEYS"},(0,o.kt)("inlineCode",{parentName:"a"},"KEYS"))," as well\nas the asc signature file for the relevant distribution. Make sure you get these\nfiles from the main distribution directory, rather than from a mirror. Then\nverify the signatures using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ gpg --import KEYS\n$ gpg --verify apache-cloudstack-X.X.X-src.tar.bz2.asc apache-cloudstack-X.X.X-src.tar.bz2\n")),(0,o.kt)("p",null,"or,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ pgp -ka KEYS\n$ pgp apache-cloudstack-X.X.X-src.tar.bz2.asc\n")),(0,o.kt)("p",null,"or,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ pgpk -a KEYS\n$ pgpv apache-cloudstack-X.X.X-src.tar.bz2.asc\n")),(0,o.kt)("p",null,"Please see\n",(0,o.kt)("a",{parentName:"p",href:"https://www.apache.org/info/verification.html#CheckingSignatures"},"CheckingSignatures"),"\nfor a more extensive explanation of the pgp verification."),(0,o.kt)("p",null,"Additionally, you can verify the SHA512 signatures on the files, by performing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sha512sum --check apache-cloudstack-X.X.X-src.tar.bz2.sha512\n")),(0,o.kt)("h2",{id:"archived-releases"},"Archived Releases"),(0,o.kt)("p",null,"You can find links to all the releases of Apache CloudStack on the ",(0,o.kt)("a",{parentName:"p",href:"/archives"},"archives")," page."))}i.isMDXComponent=!0}}]);