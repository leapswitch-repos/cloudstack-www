"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8318],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>p});var o=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,l=function(e,t){if(null==e)return{};var a,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=o.createContext({}),c=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=l,p=u["".concat(i,".").concat(d)]||u[d]||k[d]||n;return a?o.createElement(p,r(r({ref:t},h),{},{components:a})):o.createElement(p,r({ref:t},h))}));function p(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,r=new Array(n);r[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:l,r[1]=s;for(var c=2;c<n;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9098:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>k,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=a(7462),l=(a(7294),a(3905));const n={layout:"post",title:"Apache CloudStack Weekly News - 4 March 2013",slug:"apache_cloudstack_weekly_news_41"},r=void 0,s={permalink:"/blog/apache_cloudstack_weekly_news_41",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/blog/2013-03-05-apache_cloudstack_weekly_news_41.md",source:"@site/blog/2013-03-05-apache_cloudstack_weekly_news_41.md",title:"Apache CloudStack Weekly News - 4 March 2013",description:'This week, a vote on updating the project bylaws, fixing the "Tomcat situation" after 4.1, and discussions around the support lifecycle. Some respectable progress in knocking out major and blocker bugs for 4.1.0 as well. The project also welcomes two new PPMC members and three new committers.',date:"2013-03-05T00:00:00.000Z",formattedDate:"March 5, 2013",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack Weekly News - 4 March 2013",slug:"apache_cloudstack_weekly_news_41"},prevItem:{title:"Apache CloudStack Weekly News - 11 March 2013",permalink:"/blog/apache_cloudstack_weekly_news_111"},nextItem:{title:"Apache Cloudstack Weekly News - 25 February 2013",permalink:"/blog/apache_cloudstack_weekly_news_25"}},i={authorsImageUrls:[]},c=[],h={toc:c},u="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{href:"/img/imported/3b5a1e4e-90cb-469e-a58a-512bdcc28007"},(0,l.kt)("img",{src:"/img/imported/3b5a1e4e-90cb-469e-a58a-512bdcc28007?t=true",alt:"acwn-icon.png",align:"left"})),'This week, a vote on updating the project bylaws, fixing the "Tomcat situation" after 4.1, and discussions around the support lifecycle. Some respectable progress in knocking out major and blocker bugs for 4.1.0 as well. The project also welcomes two new PPMC members and three new committers.'),(0,l.kt)("h3",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4March2013-MajorDiscussions"}),"Major Discussions"),(0,l.kt)("p",null,"Some of the major discussions and issues that have taken place on cloudstack-dev and cloudstack-users in the past week. This is by no means exhaustive, if you need to be up-to-date on all development issues in the project, you'll definitely want to be subscribed to the mailing lists!"),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4March2013-SummaryofWhyWhereandHowDevelopmentHappensMatters"}),"Summary of Why Where and How Development Happens Matters"),(0,l.kt)("p",null,"Chip Childers kicked off a thread about ",(0,l.kt)("a",{href:"http://markmail.org/message/ydbkugl5sqpnz6m5",class:"external-link",rel:"nofollow"},"why it matters where and how development happens"),", based on a discussion that had taken place on cloudstack-private:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",null,"It's largely a re-hash of things that have already been discussed, but we wanted to get this summary moved into the dev list so that the points are available for reference. We should probably distill this into a wiki page somewhere, but that's not done quite yet (volunteer?).  Keep in mind",(0,l.kt)("br",null),"that I've tried to pull the important parts of the conversation into this email...  it was a fairly long thread of discussion and debate.",(0,l.kt)("br",null),"I'd suggest reading it all the way to the end to form your own understanding of why we have to be careful about how we work as a community."),(0,l.kt)("p",null,"The TL;DR version:"),(0,l.kt)("p",null,'The issue that we ran into with several features being developed "outside the community" for 4.1 was a major deal, and it had several',(0,l.kt)("br",null),"implications.  First, doing that effectively hurts our community.  The other issue is related to the legal right of the project to accept the",(0,l.kt)("br",null),"code developed elsewhere.")),(0,l.kt)("p",null,"Rather than summarizing it here, I'd recommend that readers spend the time to read Chip's initial email and the replies in the thread."),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4March2013-UsingDIYSystemVMs"}),"Using DIY System VMs"),(0,l.kt)("p",null,"Rohit Yadav ",(0,l.kt)("a",{href:"http://markmail.org/message/josnaa7tgvnmruva",class:"external-link",rel:"nofollow"},'shared "that the do-it-yourself systemvm appliance feature works for me, for Xen,"'),":"),(0,l.kt)("blockquote",null,(0,l.kt)("p",null,"There is one catch though, VirtualBox exports VHD appliance which is said to be compliant with HyperV. I thought we may need to do something for Xen separately, so I followed and ",(0,l.kt)("a",{href:"http://rohityadav.in/logs/building-systemvms/",class:"external-link",rel:"nofollow"},"found a way"),'. The "way" is to export a raw disk image and convert it to a VHD ',(0,l.kt)("a",{href:"/confluence/pages/createpage.action?spaceKey=CLOUDSTACK&title=1&linkCreation=true&fromPageId=30755264",class:"createlink"},"1")," but the problem is the VHD created from that \"way\" fails when vhd-util tries to scan for any dependent VHDs (parents etc.), I don't know what's the reason.")),(0,l.kt)("p",null,"Read the rest of the thread if you have an interest in creating custom system VMs for CloudStack."),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4March2013-FixingtheTomcatSituation%2CPost4.1"}),"Fixing the Tomcat Situation, Post 4.1"),(0,l.kt)("p",null,"Noa Resare has ",(0,l.kt)("a",{href:"http://markmail.org/message/l63bhfmzbdmh37oa",class:"external-link",rel:"nofollow"},"admitted being intensely frustrate"),' with "the current tomcat situation" when working on packaging CloudStack. The current setup, says Noa, has many problems. In response, Noa has started a proof-of-concept "of a replacement for this whole mess yesterday, a few tens of lines of code setting up an embedded jetty web container. A few lines of code to parse a config file, set up logging and spawn an embedded servlet container."'),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4March2013-ChangingProjectBylawstoModifyPMCChairVotingProcessandTerm"}),"Changing Project Bylaws to Modify PMC Chair Voting Process and Term"),(0,l.kt)("p",null,"Chip kicked off a VOTE thread last week ",(0,l.kt)("a",{href:"http://markmail.org/message/w6fn62vqsphyqd6q",class:"external-link",rel:"nofollow"},"to modify the project bylaws slightly"),":"),(0,l.kt)("blockquote",null,(0,l.kt)("p",null,"As ",(0,l.kt)("a",{href:"http://markmail.org/message/ifwwce657u36yuwz",class:"external-link",rel:"nofollow"},"previously discussed"),", we'd like to make a ",(0,l.kt)("a",{href:"https://cwiki.apache.org/confluence/display/CLOUDSTACK/Apache+CloudStack+Project+Bylaws",class:"external-link",rel:"nofollow"},"change to our bylaws")," to modify the method of selecting a PMC chair.  We also want to add a term for the chair.")),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{href:"http://markmail.org/message/sgqllgaogduwybhr",class:"external-link",rel:"nofollow"},"text was clarified slightly")," during the vote. The vote remains open until March 5."),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4March2013-SupportLifetime"}),"Support Lifetime"),(0,l.kt)("p",null,"With the 4.1 release getting closer, David Nalley ",(0,l.kt)("a",{href:"http://markmail.org/thread/a327j3vqw6pklhho",class:"external-link",rel:"nofollow"},"raised the topic of the support lifetime for releases"),". Chip ",(0,l.kt)("a",{href:"http://markmail.org/message/xvvudgauegit3j4t",class:"external-link",rel:"nofollow"},"proposed a model")," that would consist of only bug fix releases for:"),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{class:"alternate",type:"square"},(0,l.kt)("li",null,"The latest feature release of our active major version number (i.e.: 4.x)"),(0,l.kt)("li",null,"The latest feature release of our last major version number (doesn't exist today, but will be 4.x when / if we bump to 5.0)"))),(0,l.kt)("p",null,'Joe Brockmeier replied with a +1, saying that with the current level of participation in the bug-fix releases "this is the most realistic approach that\'s good for the community."'),(0,l.kt)("p",null,'David asked whether an end of support means an end to bug fixes and security fixes at the same time. "Wearing your enterprise software consumer hat - does a supportlifetime of approximately 12 months make sense?" Instead, David proposed "we should add a month (so that EOL is one month after 4.n+2 releases, with the understanding that 4.n is likely to only receive security fixes if any during that extra one month window.)"'),(0,l.kt)("p",null,"The discussion continues, so developers and users that have a vested interest in the support lifetime for ACS releases would do well to follow and respond to the discussion."),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4March2013-APIThrottling"}),"API Throttling"),(0,l.kt)("p",null,"Parth Jagirdar has ",(0,l.kt)("a",{href:"http://markmail.org/thread/nj75xlemzxcy5qr2",class:"external-link",rel:"nofollow"},"started a discuss thread")," about API throttling. \"API throttling number can be set to anything at this point. Suggestions here is to have this number set to a value that is 'greater than' number of API that can be fired by any potential action on UI.\" (Note, Parth then sent out a follow-up email to correct the initial subject line from [DISCUSS} to ",(0,l.kt)("a",{href:"/confluence/pages/createpage.action?spaceKey=CLOUDSTACK&title=DISCUSS&linkCreation=true&fromPageId=30755264",class:"createlink"},"DISCUSS"),", but all relevant discussion has happened in the original thread. It's probably not necessary to send a follow-up in those situations and may fragment the conversation.)"),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4March2013-BranchStabilityStatus"}),"Branch Stability Status"),(0,l.kt)("p",null,"Sudha Ponnaganti posted a report to the -dev mailing list about ",(0,l.kt)("a",{href:"http://markmail.org/message/tpxixcsatkduodq4",class:"external-link",rel:"nofollow"},"branch stability for QA testing"),":"),(0,l.kt)("blockquote",null,(0,l.kt)("p",null,"4.1 Branch:",(0,l.kt)("br",null),"*Xen and VMWare are blocked with the following two issues. KVM is working fine (agent issue-1469 has been fixed by Hugo).",(0,l.kt)("br",null),"CLOUDSTACK-1252",(0,l.kt)("br",null),"Failed to download default template in VMware",(0,l.kt)("br",null),"CLOUDSTACK-1470",(0,l.kt)("br",null),"Xen - unhandled exception executing api command: deployVirtualMachine"),(0,l.kt)("p",null,"Master:",(0,l.kt)("br",null),"There are no blockers now on Master / 4.2. Below are the only blockers and you",(0,l.kt)("br",null),"can continue to use older templates to make progress on master till new one gets",(0,l.kt)("br",null),"hardened.",(0,l.kt)("br",null),"CLOUDSTACK-1462",(0,l.kt)("br",null),"Used Master Branch System VM Template: Volume of System VM Failed to Create on",(0,l.kt)("br",null),"the XenServer due to IOError")),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4March2013-SummaryofIRCMeetingfor27February2013"}),"Summary of IRC Meeting for 27 February 2013"),(0,l.kt)("p",null,"The ASFBot ",(0,l.kt)("a",{href:"http://markmail.org/message/7nsbfzhtbs3krbb4",class:"external-link",rel:"nofollow"},"shot a summary of the weekly IRC meeting")," to the -dev mailing list. If you missed it or need a reminder of what happened, check it out."),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4March2013-ReportfromtheDocSprintonFriday"}),"Report from the Doc Sprint on Friday"),(0,l.kt)("p",null,"Joe sent out a ",(0,l.kt)("a",{href:"http://markmail.org/message/sy3bkyq7mgs2wqaq",class:"external-link",rel:"nofollow"},"short report")," about the doc sprint that took place on Friday, March 1st. Another is planned for Friday, March 8th."),(0,l.kt)("h3",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4March2013-CloudStackPlanetPostsfromtheCloudStackCommunity"}),"CloudStack Planet - Posts from the CloudStack Community"),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4March2013-ProvisionrAutomatedDeploymentofMassiveInfraintheClouds"}),"Provisionr - Automated Deployment of Massive Infra in the Clouds"),(0,l.kt)("p",null,"David ",(0,l.kt)("a",{href:"http://buildacloud.org/blog/229-provisionr-automated-deployment-of-massive-infra-in-the-clouds.html",class:"external-link",rel:"nofollow"},"reported on a talk at ApacheCon North America")," about Andrei Savu's demo of \"software that Axemblr had been working on around deploying pools of interrelated virtual machines called ",(0,l.kt)("a",{href:"https://github.com/axemblr/axemblr-provisionr",class:"external-link",rel:"nofollow"},"Provisionr"),'."'),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4March2013-ApacheConNorthAmericaReport%3ATroubleshootingCloudStack"}),"ApacheCon North America Report: Troubleshooting CloudStack"),(0,l.kt)("p",null,"Joe Brockmeier ",(0,l.kt)("a",{href:"http://buildacloud.org/blog/230-apachecon-north-america-report-troubleshooting-cloudstack.html",class:"external-link",rel:"nofollow"},"wrote a report")," on two talks at ApacheCon North America by Kirk Kosinski on troubleshooting CloudStack. The talks covered common networking issues and how to use log files to troubleshoot CloudStack."),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4March2013-CloudTalksfromApacheConNorthAmerica"}),"Cloud Talks from ApacheCon North America"),(0,l.kt)("p",null,"Mark Hinkle ",(0,l.kt)("a",{href:"http://buildacloud.org/blog/232-cloud-talks-from-apachecon-na-2013.html",class:"external-link",rel:"nofollow"},"has put up a post about Cloud talks at ApacheCon North America")," with links to presentations."),(0,l.kt)("h3",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4March2013-UpcomingEvents"}),"Upcoming Events"),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("b",null,"CloudStack India, Bangalore Chapter"),": ",(0,l.kt)("a",{href:"http://www.meetup.com/CloudStack-Bangalore-Group/events/103142162/",class:"external-link",rel:"nofollow"},"March Meetup - Cloud Storage & Monitoring")," - Koramangala, Bangalore, Thursday March 7, 2013.")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("b",null,"Doc Sprint (IRC)"),": The doc team is running another sprint on Friday, March 8th from 16:00 to 23:00 UTC (that's 08:00 to 15:00 Pacific time, 11:00 to 18:00 Eastern in the USA) in #cloudstack-dev. All CloudStack contributors who have an interest in making the docs awesome are encouraged to attend and help out. See ",(0,l.kt)("a",{href:"https://cwiki.apache.org/confluence/display/CLOUDSTACK/4.1+Doc+Sprints+every+Friday",class:"external-link",rel:"nofollow"},"the wiki")," for more info.")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("b",null,"New York City Cloud Computing Group"),": ",(0,l.kt)("a",{href:"http://www.meetup.com/nyccloudcomputing/events/104771232/",class:"external-link",rel:"nofollow"},"Deploying Apache CloudStack from API to UI")," - New York City, Wednesday March 13, 2013.")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("b",null,"NYLUG Meetup"),": ",(0,l.kt)("a",{href:"http://www.meetup.com/nylug-meetings/events/82181872/",class:"external-link",rel:"nofollow"},(0,l.kt)("em",null,"Open Source Private Clouds with CloudStack, Eucalyptus and OpenStack"))," - New York City, Thursday March 14, 2013. RSVPs open on February 28th at 6:15 p.m. Eastern.")),(0,l.kt)("h3",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4March2013-Jira"}),"Jira"),(0,l.kt)("p",null,"Big bug-fixing week for Apache CloudStack! The community knocked out 5 blocker bugs, 3 critical bugs, 9 major bugs, and 3 minor bugs. Still plenty of work left to do before 4.1.0 is ready for prime-time, though."),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Last week: 9 blocker bugs. This week: 4 ",(0,l.kt)("a",{href:"http://is.gd/blockers41acs",class:"external-link",rel:"nofollow"},"blocker bugs")),(0,l.kt)("li",null,"Last week: 21 critical bugs. This week: 18 ",(0,l.kt)("a",{href:"http://is.gd/critical41acs",class:"external-link",rel:"nofollow"},"critical bugs")),(0,l.kt)("li",null,"Last week: 200 major bugs. This week: 191 ",(0,l.kt)("a",{href:"http://is.gd/major41acs",class:"external-link",rel:"nofollow"},"major bugs")),(0,l.kt)("li",null,"Last week: 33 minor bugs. This week: 30 ",(0,l.kt)("a",{href:"http://is.gd/minor41acs",class:"external-link",rel:"nofollow"},"minor bugs"))),(0,l.kt)("p",null,"It's worth noting that the doc sprint helped quite a bit, bringing the total number of docs bugs for 4.1.0 to 44 (down from 64 just two weeks ago). Of the remaining bugs for 4.1.0, 80 are ",(0,l.kt)("a",{href:"http://is.gd/unassigned41acs",class:"external-link",rel:"nofollow"},"currently unassigned"),", down from 99 last week."),(0,l.kt)("h3",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4March2013-NewCommittersandPPMCMembers"}),"New Committers and PPMC Members"),(0,l.kt)("p",null,"A big week for new committers and PPMC members."),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Marcus Sorenson ",(0,l.kt)("a",{href:"http://markmail.org/message/dpt6eczdsokaealm",class:"external-link",rel:"nofollow"},"has been invited to join the PPMC and has accepted"),"."),(0,l.kt)("li",null,"Sebastien Goasguen ",(0,l.kt)("a",{href:"http://markmail.org/message/xjk4beb6rtupsuj7",class:"external-link",rel:"nofollow"},"has been invited to join the PPMC and has accepted"),"."),(0,l.kt)("li",null,"Radhika Puthiyetath ",(0,l.kt)("a",{href:"http://markmail.org/message/dkrzj6eo66umqamj",class:"external-link",rel:"nofollow"},"has been invited to become a committer and has accepted")),(0,l.kt)("li",null,"Sateesh Chodapuneedi ",(0,l.kt)("a",{href:"http://markmail.org/message/7epxyg6s5kmiebcb",class:"external-link",rel:"nofollow"},"has been invited to become a committer and has accepted")),(0,l.kt)("li",null,"Noa Resare ",(0,l.kt)("a",{href:"http://markmail.org/message/uqhbwwhhfrgfu67g",class:"external-link",rel:"nofollow"},"has been invited to become a committer and has accepted"),".")),(0,l.kt)("h3",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4March2013-ContributingtotheApacheCloudStackWeeklyNews"}),"Contributing to the Apache CloudStack Weekly News"),(0,l.kt)("p",null,"If you have an event, discussion, or other item to contribute to the ",(0,l.kt)("em",null,"Weekly News"),", you can add it directly to the ",(0,l.kt)("a",{href:"https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Weekly+News",class:"external-link",rel:"nofollow"},"wiki")," by editing the issue you want your item to appear in. (The next week's issue is created before the current issue is published - so at any time there should be at least one issue ready to edit.) Alternatively, you can send to the cloudstack-dev mailing list with a subject including ",(0,l.kt)("a",{href:"",title:"News"},"News"),": ",(0,l.kt)("em",null,"description of topic")," or email the newsletter editor directly (jzb at apache.org), again with the subject ",(0,l.kt)("a",{href:"",title:"News"},"News"),": ",(0,l.kt)("em",null,"description of topic"),". ",(0,l.kt)("b",null,"Please include a link to the discussion in the mailing list archive or Web page with details of the event, etc.")))}k.isMDXComponent=!0}}]);