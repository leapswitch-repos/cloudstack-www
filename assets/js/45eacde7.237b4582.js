"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3303],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>p});var a=l(7294);function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){o(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,a,o=function(e,t){if(null==e)return{};var l,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(o[l]=e[l]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},h="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var l=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(l),d=o,p=h["".concat(i,".").concat(d)]||h[d]||k[d]||n;return l?a.createElement(p,r(r({ref:t},u),{},{components:l})):a.createElement(p,r({ref:t},u))}));function p(e,t){var l=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=l.length,r=new Array(n);r[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[h]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<n;c++)r[c]=l[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,l)}d.displayName="MDXCreateElement"},2489:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>k,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=l(7462),o=(l(7294),l(3905));const n={layout:"post",title:"Apache CloudStack Weekly News - 22 April 2013",slug:"apache_cloudstack_weekly_news_22"},r=void 0,s={permalink:"/blog/apache_cloudstack_weekly_news_22",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/blog/2013-04-23-apache_cloudstack_weekly_news_22.md",source:"@site/blog/2013-04-23-apache_cloudstack_weekly_news_22.md",title:"Apache CloudStack Weekly News - 22 April 2013",description:"This time around, we have two release VOTEs in progress, which means that 4.1.0 is just about out the door. The CloudStack Collaboration Conference 2013 has been announced for June 23rd through 25th. You'll also want to check in on the discussions about the length of the release cycle, Chip Childers and David Nalley appearing on FLOSS Weekly, and much more.",date:"2013-04-23T00:00:00.000Z",formattedDate:"April 23, 2013",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack Weekly News - 22 April 2013",slug:"apache_cloudstack_weekly_news_22"},prevItem:{title:"Apache CloudStack 4.0.2 Released",permalink:"/blog/apache_cloudstack_4_0_2"},nextItem:{title:"Apache CloudStack Weekly News - 8 April 2013",permalink:"/blog/apache_cloudstack_weekly_news_8"}},i={authorsImageUrls:[]},c=[],u={toc:c},h="wrapper";function k(e){let{components:t,...l}=e;return(0,o.kt)(h,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{href:"/img/imported/ab378739-3c34-48ea-9495-2c49e23e58d6"},(0,o.kt)("img",{src:"/img/imported/ab378739-3c34-48ea-9495-2c49e23e58d6?t=true",alt:"square-cloudmonkey.png",align:"left",hspace:"5",vspace:"5"})),"This time around, we have two release VOTEs in progress, which means that 4.1.0 is just about out the door. The CloudStack Collaboration Conference 2013 ",(0,o.kt)("a",{href:"http://markmail.org/message/uqj2nazm6dcpg7h7",class:"external-link",rel:"nofollow"},"has been announced for June 23rd through 25th"),". You'll also want to check in on the discussions about the length of the release cycle, Chip Childers and David Nalley appearing on FLOSS Weekly, and much more. "),(0,o.kt)("p",null,"A lot has happened since the last issue of the CloudStack Weekly News, and not just because the community's been busy \u2013 we missed getting last week's issue out. Sorry about that! If you'd like to see consistent weekly delivery, check the end of the newsletter to see how you can help."),(0,o.kt)("h3",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-22April2013-MajorDiscussions"}),"Major Discussions"),(0,o.kt)("p",null,"In this section, we summarize some of the more interesting discussions taking place in the CloudStack community. While we try to pull out the discussions that are \"don't miss\" discussions to anyone who's involved in using or contributing to CloudStack, it's a really good idea to ",(0,o.kt)("a",{href:"http://cloudstack.apache.org/mailing-lists.html",class:"external-link",rel:"nofollow"},"make sure you're subscribed")," to the mailing lists and follow along. "),(0,o.kt)("h5",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-22April2013-ReleaseSchedule"}),"Release Schedule"),(0,o.kt)("p",null,"Animesh Chaturvedi ",(0,o.kt)("a",{href:"http://markmail.org/message/6suq2fhltdvgvcxd",class:"external-link",rel:"nofollow"},"started a discussion last week")," about the release schedule for 4.2.0, trying to nail down the specific dates for feature freeze, docs freeze, etc. That was ",(0,o.kt)("a",{href:"http://markmail.org/message/cp23tewephjuxv7f",class:"external-link",rel:"nofollow"},"accompanied by a question of whether we should consider a six-month cycle"),". Ultimately, no resolution was reached on the schedule. "),(0,o.kt)("p",null,"Animesh has ",(0,o.kt)("a",{href:"http://markmail.org/message/3ctdwor5hfbpa3vx",class:"external-link",rel:"nofollow"},"started a new thread to discuss the release cycle"),"."),(0,o.kt)("h5",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-22April2013-EasierSimpleInstalls"}),"Easier Simple Installs"),(0,o.kt)("p",null,"David has ",(0,o.kt)("a",{href:"http://markmail.org/message/zvo3t26zjvedblah",class:"external-link",rel:"nofollow"},"started a conversation on dev@ about the ease, or lack thereof, of installing CloudStack"),". David says, \"what I want to do is get rid of sections 2-4 of the quick install guide, and replace it with - 'run this one or two lines worth of commands' (",(0,o.kt)("a",{href:"http://s.apache.org/runbook",class:"external-link",rel:"nofollow"},"http://s.apache.org/runbook"),").\" David describes what he'd like to see: "),(0,o.kt)("blockquote",null,(0,o.kt)("p",null,"The all-in-one installation process I'd like to see:"),(0,o.kt)("p",null,"Install your host OS Install an meta-RPM/Deb that either (installs everything, or alternatively configures a repo - or just installs the repo and the stuff I need to install with) Run a command that activates one of these config tools - configures the machine, installs the packages I need, and gets me to the point where I'm ready to login and go through the beautiful new user gui setup stuff. ")),(0,o.kt)("p",null,"No further comments on this so far. "),(0,o.kt)("h5",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-22April2013-DevelopingaStorageBackupObjectStorePluginFramework"}),"Developing a Storage Backup Object Store Plugin Framework"),(0,o.kt)("p",null,"Min Chin ",(0,o.kt)("a",{href:"http://markmail.org/message/cspb6xweeupfvpit",class:"external-link",rel:"nofollow"},"has proposed a storage backup object store plugin framework"),' that would "allow CloudStack to systematically manage and configure various types of backup data stores from different vendors, like NFS, S3, Swift, etc." Specifically, Min says:'),(0,o.kt)("blockquote",null,(0,o.kt)("p",null,"With this new plugin framework, we would like to achieve following functionalities: "),(0,o.kt)("p",null,"1. Support different object store providers in a uniform and pluggable fashion. ",(0,o.kt)("br",null),"2. Enable region wide object backup using S3-like object store. ",(0,o.kt)("br",null),"3. Provide pluggable data motion strategies to handle data transfer from one data store to another data store. ",(0,o.kt)("br",null),"4. Provide a scalable cache storage framework while moving data between primary storage and backup storage for certain hypervisor needs.  ",(0,o.kt)("br",null),"5. Support flexible combinations of primary storage, secondary storage and hypervisors, such as (NFS, NFS, Xen), (NF3, S3, Vmware), (ISCSI, Swift, KVM), ..., etc.")),(0,o.kt)("p",null,"The FS is ",(0,o.kt)("a",{href:"https://cwiki.apache.org/CLOUDSTACK/storage-backup-object-store-plugin-framework.html",class:"external-link",rel:"nofollow"},"on the wiki"),', and Min says in a follow-up that there\'s a plan to "provide a sample plugin implementation" for the work.'),(0,o.kt)("p",null,"With regards to compatibility concerns, Edison Su ",(0,o.kt)("a",{href:"http://markmail.org/message/sstnaimx62mnyles",class:"external-link",rel:"nofollow"},"responds"),' that existing APIs "can still be wired to new code" so that they continue to work, but "we can mark them as deprecated in the API document." Edison also notes that it can co-exist with the existing deployments and upgrades from pre-4.2.0 versions to 4.2.0 if the feature is accepted.'),(0,o.kt)("h5",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-22April2013-VOTEsfor4.1.0and4.0.2"}),"VOTEs for 4.1.0 and 4.0.2"),(0,o.kt)("p",null,"After a couple of false starts, it looks like the third time is the charm for the 4.0.2 release. Joe Brockmeier ",(0,o.kt)("a",{href:"http://markmail.org/message/nfe2lyxj4mjsmxdb",class:"external-link",rel:"nofollow"},"started the third voting round on Saturday 20 April"),", and it has quite a few +1 (binding) votes so far. Unless -1'ed by Tuesday morning, it will be ready for release. "),(0,o.kt)("p",null,"Chip has also ",(0,o.kt)("a",{href:"http://markmail.org/thread/vfcje3fs5ilvm47c",class:"external-link",rel:"nofollow"},"started the first vote")," for 4.1.0, which will be open for 72 hours \u2013 assuming no show-stopping defects are found, and it garners at least 3 +1 PMC votes. Note that ",(0,o.kt)("b",null,"everyone"),' in the CloudStack community is encouraged to test out the release candidate and cast a vote, regardless of whether the vote is "binding" or not. More testing is always better, and an informed -1 from a non-PMC member isn\'t going to be ignored when deciding whether to release or not. '),(0,o.kt)("h5",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-22April2013-DomainAdminLimitations"}),"Domain Admin Limitations"),(0,o.kt)("p",null,"Pranav Saxena has ",(0,o.kt)("a",{href:"http://markmail.org/message/ucxsapyannat2z6b",class:"external-link",rel:"nofollow"},"raised a discussion about the limitations for DOMAIN admins"),", and wonders \"why hasn't the domain -admin been given the privilege of creating sub-child domains himself? Are there any concerns/threats because of which the current architecture doesn't serve this purpose?\" Alena Prokharchyk responds that there ",(0,o.kt)("a",{href:"http://markmail.org/message/nyzosjot2ov5lb7m",class:"external-link",rel:"nofollow"},"may be a feature request matching Pranav's concerns")," and suggests checking its status. This might be a good feature/improvement to see in 4.2.0 if there's not already work afoot."),(0,o.kt)("h3",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-22April2013-CloudStackPlanetPostsfromtheCloudStackCommunity"}),"CloudStack Planet - Posts from the CloudStack Community"),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,(0,o.kt)("a",{href:"http://www.chipchilders.com/blog/2013/4/10/floss-weekly-interview-on-apache-cloudstack.html",class:"external-link",rel:"nofollow"},"FLOSS Weekly Interview on Apache CloudStack")),": Chip and David appeared on FLOSS Weekly on April 10th. If you missed the live show, be sure to checkout the ",(0,o.kt)("a",{href:"http://twit.tv/show/floss-weekly/247",class:"external-link",rel:"nofollow"},"video"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,(0,o.kt)("a",{href:"http://www.youtube.com/watch?v=vvgIkF1e1QE",class:"external-link",rel:"nofollow"},"4.0.2 Testing Procedure")),": Sebastien Goasguen has ",(0,o.kt)("a",{href:"http://www.youtube.com/watch?v=vvgIkF1e1QE",class:"external-link",rel:"nofollow"},"put together a screencast")," for testing the 4.0.2 release that also might be worth looking over for folks interested in testing any CloudStack release.")),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,(0,o.kt)("a",{href:"http://buildacloud.org/blog/254-google-summer-of-code-2013-with-cloudstack.html",class:"external-link",rel:"nofollow"},"Google Summer of Code with CloudStack")),": Sebastien has also ",(0,o.kt)("a",{href:"http://buildacloud.org/blog/254-google-summer-of-code-2013-with-cloudstack.html",class:"external-link",rel:"nofollow"},"put together a slide show")," about contributing to the Google Summer of Code (GSoC) with CloudStack.")),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,(0,o.kt)("a",{href:"http://www.cupfighter.net/index.php/2013/04/knife-cloudstack-plugin-0-0-14-has-been-released-but-what-does-this-mean/",class:"external-link",rel:"nofollow"},"Knife CloudStack plugin 0.0.14 has been released")),": Sander Botman writes about the latest release of the CloudStack plugin. David has also ",(0,o.kt)("a",{href:"http://buildacloud.org/blog/252-a-new-version-of-the-knife-cloudstack-plugin-appears.html",class:"external-link",rel:"nofollow"},"written about the new knife-cloudstack plugin"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,(0,o.kt)("a",{href:"http://buildacloud.org/blog/253-to-rest-or-not-to-rest.html",class:"external-link",rel:"nofollow"},"To REST or not to REST")),': Sebastien tackles the question, "is the CloudStack API RESTful?" The short answer is "',(0,o.kt)("a",{href:"http://buildacloud.org/blog/253-to-rest-or-not-to-rest.html",class:"external-link",rel:"nofollow"},"the CloudStack API is RESTlike but not RESTful"),' since it is only based on the GET method. Being an http based API that can return JSON does not make it a RESTfull API. This should not be seen as negative criticism but just a clarification." Read the rest for the full scoop.')),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,(0,o.kt)("a",{href:"http://blog.widodh.nl/2013/04/cloudstack-zone-x-is-is-not-ready-to-launch-console-proxy-yet/",class:"external-link",rel:"nofollow"},"Zone X is Not Ready to Launch Console Proxy Yet")),": Wido den Hollander writes about an odd error that he troubleshot to find an unlikely culprit.")),(0,o.kt)("h3",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-22April2013-UpcomingEvents"}),"Upcoming Events"),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,(0,o.kt)("a",{href:"http://linuxfestnorthwest.org/",class:"external-link",rel:"nofollow"},"LinuxFest Northwest"))," is being held in Bellingham, Washington from 27 April to 28 April.",(0,o.kt)("ul",null,(0,o.kt)("li",null,"Mark Hinkle is presenting the ",(0,o.kt)("a",{href:"http://linuxfestnorthwest.org/content/hitchikers-guide-open-source-cloud-computing",class:"external-link",rel:"nofollow"},"Hitchhiker's Guide to Open Source Cloud Computing")," on Saturday 27 April at 11:00."),(0,o.kt)("li",null,"David Nalley is presenting ",(0,o.kt)("a",{href:"http://linuxfestnorthwest.org/content/building-iaas-clouds-apache-cloudstack",class:"external-link",rel:"nofollow"},"Building IaaS Clouds with Apache CloudStack")," on Saturday 27 April at 1:30."))),(0,o.kt)("li",null,(0,o.kt)("b",null,"Storage in Apache CloudStack")," being held by the ",(0,o.kt)("a",{href:"http://www.meetup.com/CloudStack-SF-Bay-Area-Users-Group/events/108916562/",class:"external-link",rel:"nofollow"},"CloudStack SF Bay Area Users Group")," on April 30, 2013 @ Citrix Conference Center, sign up on the Meetup.com Website."),(0,o.kt)("li",null,(0,o.kt)("b",null,(0,o.kt)("a",{href:"http://buildacloud.org/about-diy-cloud-computing/cloud-events/viewevent/148-build-a-cloud-day-cloudcon-san-francisco-ca.html",class:"external-link",rel:"nofollow"},"Build a Cloud Day CloudCon San Francisco"))," being held at the South San Francisco Conference Center on 15 May."),(0,o.kt)("li",null,(0,o.kt)("b",null,(0,o.kt)("a",{href:"http://cloudstackcollab.net/",class:"external-link",rel:"nofollow"},"CloudStack Collaboration Conference 2013"))," is being held from 23 June to 25 June in Santa Clara, CA at the Santa Clara Convention Center. See the ",(0,o.kt)("a",{href:"http://cloudstackcollab.net/CfP/",class:"external-link",rel:"nofollow"},"Call for Proposals")," if you're interested in speaking!")),(0,o.kt)("p",null,"If you want to to check in on events related to Apache CloudStack, see the ",(0,o.kt)("a",{href:"http://lanyrd.com/topics/apache-cloudstack/",class:"external-link",rel:"nofollow"},"Lanyard Page for the Apache CloudStack topic"),". "),(0,o.kt)("h3",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-22April2013-Jira"}),"Jira"),(0,o.kt)("p",null,"With the 4.0.2 and 4.1.0 VOTES in process, it's time to start looking at bugs against ",(0,o.kt)("a",{href:"https://issues.apache.org/jira/browse/CLOUDSTACK/fixforversion/12324122",class:"external-link",rel:"nofollow"},"4.1.1")," and ",(0,o.kt)("a",{href:"https://issues.apache.org/jira/browse/CLOUDSTACK/fixforversion/12323906",class:"external-link",rel:"nofollow"},"4.2.0"),"."),(0,o.kt)("p",null,"At the moment, bugs against 4.1.0 haven't been re-assigned to 4.1.1. This means that the bug counts for 4.1.1 are much lower than they should be. Taking into account the actual number of bugs, we're looking at one blocker bug, two critical bugs, 114 major bugs, and 25 minor."),(0,o.kt)("p",null,"For 4.2.0, we have:"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"5 ",(0,o.kt)("a",{href:"http://is.gd/blocker_acs420",class:"external-link",rel:"nofollow"},"blocker bugs for 4.2.0"),"."),(0,o.kt)("li",null,"34 ",(0,o.kt)("a",{href:"http://is.gd/critical_acs420",class:"external-link",rel:"nofollow"},"critical bugs for 4.2.0"),"."),(0,o.kt)("li",null,"263 ",(0,o.kt)("a",{href:"http://is.gd/major_acs420",class:"external-link",rel:"nofollow"},"major bugs for 4.2.0"),"."),(0,o.kt)("li",null,"35 ",(0,o.kt)("a",{href:"http://is.gd/minor_acs420",class:"external-link",rel:"nofollow"},"minor bugs for 4.2.0"),".")),(0,o.kt)("h3",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-22April2013-NewCommittersandPMCMembers"}),"New Committers and PMC Members"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Bruno Demion was invited to become a committer and ",(0,o.kt)("a",{href:"http://markmail.org/search/list:org.apache.incubator.cloudstack-dev+New+Committer:+Bruno+Demion+%28a.k.a+milamber%29",class:"external-link",rel:"nofollow"},"has accepted"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Go Chiba was invited to become a committer and ",(0,o.kt)("a",{href:"http://markmail.org/message/5yn6fbeim33bm7d3",class:"external-link",rel:"nofollow"},"has accepted"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Prasanna Santhanam was invited to become a PMC member and ",(0,o.kt)("a",{href:"http://markmail.org/message/iifnhhkfext3gbve",class:"external-link",rel:"nofollow"},"has accepted"),".")),(0,o.kt)("p",null,"Please join us in congratulating all of the new committers and PMC members!"),(0,o.kt)("h3",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-22April2013-ContributingtotheWeeklyNews"}),"Contributing to the Weekly News"),(0,o.kt)("p",null,'Want to keep reading the CloudStack Weekly News? Many hands make light work, but having only one editor means getting the weekly news out every week is a "best effort" activity. A healthy community publication needs several contributors to ensure weekly issues go out on time.'),(0,o.kt)("p",null,"If you have an event, discussion, or other item to contribute to the ",(0,o.kt)("em",null,"Weekly News"),", you can add it directly to the ",(0,o.kt)("a",{href:"https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Weekly+News",class:"external-link",rel:"nofollow"},"wiki")," by editing the issue you want your item to appear in. (The next week's issue is created before the current issue is published - so at any time there should be at least one issue ready to edit.) "),(0,o.kt)("p",null,"Alternatively, you can send a note to the marketing@cloudstack.apache.org mailing list with a subject including ",(0,o.kt)("a",{href:"",title:"News"},"News"),": ",(0,o.kt)("em",null,"description of topic")," or email the newsletter editor directly (jzb at apache.org), again with the subject ",(0,o.kt)("a",{href:"",title:"News"},"News"),": ",(0,o.kt)("em",null,"description of topic"),". ",(0,o.kt)("b",null,"Please include a link to the discussion in the mailing list archive or Web page with details of the event, etc.")," "))}k.isMDXComponent=!0}}]);