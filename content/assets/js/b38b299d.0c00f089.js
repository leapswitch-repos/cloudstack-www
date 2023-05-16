"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[150],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var o=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,l=function(e,t){if(null==e)return{};var a,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=o.createContext({}),c=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},h="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(a),p=l,d=h["".concat(i,".").concat(p)]||h[p]||k[p]||n;return a?o.createElement(d,r(r({ref:t},u),{},{components:a})):o.createElement(d,r({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,r=new Array(n);r[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[h]="string"==typeof e?e:l,r[1]=s;for(var c=2;c<n;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6896:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>k,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=a(7462),l=(a(7294),a(3905));const n={layout:"post",title:"Apache CloudStack Weekly News - 13 May 2013",slug:"apache_cloudstack_weekly_news_13"},r=void 0,s={permalink:"/blog/apache_cloudstack_weekly_news_13",source:"@site/blog/2013-05-13-apache_cloudstack_weekly_news_13.md",title:"Apache CloudStack Weekly News - 13 May 2013",description:"What's new in Apache CloudStack? This issue, we take a look at progress towards the 4.1.0 release, major discussions in the community, and the upcoming CloudStack Collaboration Conference. We also welcome three new committers to the Apache CloudStack project, Clayton Weise, Isaac Chiang, and Phong Nguyen.",date:"2013-05-13T00:00:00.000Z",formattedDate:"May 13, 2013",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack Weekly News - 13 May 2013",slug:"apache_cloudstack_weekly_news_13"},prevItem:{title:"4.1.0 VOTE in Progress: Testers Welcome!",permalink:"/blog/4_1_0_vote_in"},nextItem:{title:"The CloudStack Conference CFP Deadline is Approaching! Submit Talks by Sunday",permalink:"/blog/the_cloudstack_conference_cfp_deadline"}},i={authorsImageUrls:[]},c=[],u={toc:c},h="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(h,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{href:"/img/imported/ab378739-3c34-48ea-9495-2c49e23e58d6"},(0,l.kt)("img",{src:"/img/imported/ab378739-3c34-48ea-9495-2c49e23e58d6?t=true",alt:"square-cloudmonkey.png",align:"left"})),"What's new in Apache CloudStack? This issue, we take a look at progress towards the 4.1.0 release, major discussions in the community, and the upcoming CloudStack Collaboration Conference. We also welcome three new committers to the Apache CloudStack project, Clayton Weise, Isaac Chiang, and Phong Nguyen."),(0,l.kt)("p",null,"As you may have noticed, we skipped the newsletter last week. Apologies about that! This week's newsletter catches up from the beginning of May. "),(0,l.kt)("h3",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-13May2013-CloudStackNorthAmericaCollaborationConference2013%5C%21"}),"CloudStack North America Collaboration Conference 2013!"),(0,l.kt)("p",null,"The Apache CloudStack community is going to have its second conference in late June. If you missed the first one, or couldn't wait to do it again, you'll want to hurry up and make plans to be there! "),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("b",null,(0,l.kt)("a",{href:"http://cloudstackcollab.net/",class:"external-link",rel:"nofollow"},"CloudStack Collaboration Conference 2013"))," is being held from 23 June to 25 June in Santa Clara, CA at the Santa Clara Convention Center."),(0,l.kt)("li",null,(0,l.kt)("b",null,(0,l.kt)("a",{href:"http://www.cloudstackcollab.com/register/",class:"external-link",rel:"nofollow"},"Register now as spots are limited!")),' It\'s important to join in our yearly conference to learn and truly collaborate with the community in person. This year we are including a "Hack Day", where collaboration will be happening in a real time!'),(0,l.kt)("li",null,(0,l.kt)("b",null,"Are you ready to share your CloudStack vision?")," See the ",(0,l.kt)("a",{href:"http://cloudstackcollab.net/CfP/",class:"external-link",rel:"nofollow"},"Call for Proposals")," if you're interested in speaking. Proposals close on May 19th."),(0,l.kt)("li",null,(0,l.kt)("b",null,"We are still looking for")," ",(0,l.kt)("b",null,(0,l.kt)("a",{href:"http://www.cloudstackcollab.com/sponsors/prospectus/",class:"external-link",rel:"nofollow"},"Conference Sponsors")),(0,l.kt)("b",null,"!")," Have your company be part of this great event. Contact Nancy Asche at (407) 601-6228 or nancy.asche@conferencedirect.com for more details on how to get involved.")),(0,l.kt)("h3",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-13May2013-MajorDiscussions"}),"Major Discussions"),(0,l.kt)("p",null,"Several major discussions this week, summarized below. Note that this is only a fraction of the activity in the project. For a full overview of project activity, you may want to subscribe to dev@cloudstack.apache.org."),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-13May2013-4.1.0Update"}),"4.1.0 Update"),(0,l.kt)("p",null,"Chip Childers sent out an ",(0,l.kt)("a",{href:"http://markmail.org/message/5yfg5uht4pl6rcbu",class:"external-link",rel:"nofollow"},"update on the latest blockers")," on Monday, May 13th. "),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-13May2013-SecurityMailingList"}),"Security Mailing List"),(0,l.kt)("p",null,"To better help communicate about security related matters, announce security concerns, and determine additional security needs for CloudStack, a new mailing list security@cloudstack.apache.org is being set up and run similarly to security@apache.org. The list is only open to members of the security team, but anyone can email the list with security issues."),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-13May2013-NetworkGuruRefactoring"}),"Network Guru Refactoring"),(0,l.kt)("p",null,"Daan Hoogland has ",(0,l.kt)("a",{href:"http://markmail.org/message/okwbwwwwrr6ylike",class:"external-link",rel:"nofollow"},"proposed")," refactoring the network guru. Chiradeep Vittal points out that, for major changes, ",(0,l.kt)("a",{href:"http://markmail.org/message/lzvnvao5adr5x2qt",class:"external-link",rel:"nofollow"},"we should have a functional specification")," (FS) in addition to an email bringing the topic up on dev@. Daan has agreed to provide one, which should help spark an intelligent discussion about the proposed feature. "),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-13May2013-TestPlanReviewforBetterVMSync"}),"Test Plan Review for Better VM Sync"),(0,l.kt)("p",null,"Suresh Sadhu has asked for ",(0,l.kt)("a",{href:"http://markmail.org/message/5lqutxmwem6gsfxf",class:"external-link",rel:"nofollow"},"review of a QA Test Plan"),' for "Better VM Sync" and for comments on the plan. '),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-13May2013-FeatureFreezefor4.2.0isComing"}),"Feature Freeze for 4.2.0 is Coming"),(0,l.kt)("p",null,"Animesh Chaturvedi has ",(0,l.kt)("a",{href:"http://markmail.org/message/wqktunfusupwok46",class:"external-link",rel:"nofollow"},"posted a reminder about the 4.2.0 feature freeze"),", along with the ",(0,l.kt)("a",{href:"https://issues.apache.org/jira/secure/Dashboard.jspa?selectPageId=12320942",class:"external-link",rel:"nofollow"},"dashboard for tracking 4.2.0 progress"),". "),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-13May2013-ChangeStatuswhenFeaturesareMergedtoMaster"}),"Change Status when Features are Merged to Master"),(0,l.kt)("p",null,"Sudha Ponnaganti reminds contributors to ",(0,l.kt)("a",{href:"http://markmail.org/message/ny53ttq3s4v7ergy",class:"external-link",rel:"nofollow"},"change the status in Jira"),". It's important to help folks doing QA to pick up the feature for validation. "),(0,l.kt)("h3",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-13May2013-CloudStackPlanetPostsfromtheCloudStackCommunity"}),"CloudStack Planet - Posts from the CloudStack Community"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Chiradeep has created ",(0,l.kt)("a",{href:"https://github.com/chiradeep/stackmate",class:"external-link",rel:"nofollow"},"Stackmate"),", a tool to execute CloudFormation templates against CloudStack, and ",(0,l.kt)("a",{href:"http://cloudierthanthou.wordpress.com/2013/04/26/stackmate-execute-cloudformation-templates-on-cloudstack/",class:"external-link",rel:"nofollow"},"wrote a great post about it"),"."),(0,l.kt)("li",null,(0,l.kt)("a",{href:"http://www.chipchilders.com/blog/2013/4/29/where-is-apache-cloudstack-410.html",class:"external-link",rel:"nofollow"},"Where is Apache CloudStack 4.1.0?")," - Chip wrote a post talking about the 4.1.0 release status."),(0,l.kt)("li",null,"Tariq Iqbal shared some Google trends on the Cloud OpenSource communities: Interesting Google trends data on the CloudStack, OpenStack and Eucalyptus: ",(0,l.kt)("a",{href:"http://www.google.com/trends/explore#cat=0-5&q=openstack%2C%20cloudstack%2C%20eucalyptus&date=4%2F2011%2025m&cmpt=q",class:"external-link",rel:"nofollow"},"http://www.google.com/trends/explore#cat=0-5&q=openstack%2C%20cloudstack%2C%20eucalyptus&date=4%2F2011%2025m&cmpt=q"))),(0,l.kt)("h3",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-13May2013-UpcomingEvents"}),"Upcoming Events"),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("b",null,(0,l.kt)("a",{href:"http://www.meetup.com/Geneva-CloudStack-User-Group/",class:"external-link",rel:"nofollow"},"Geneva, Switzerland Meet-up"))," Geneva, May 14th, 7pm."),(0,l.kt)("li",null,(0,l.kt)("b",null,(0,l.kt)("a",{href:"http://buildacloud.org/about-diy-cloud-computing/cloud-events/viewevent/148-build-a-cloud-day-cloudcon-san-francisco-ca.html",class:"external-link",rel:"nofollow"},"Build a Cloud Day CloudCon San Francisco"))," being held at the South San Francisco Conference Center on 15 May."),(0,l.kt)("li",null,(0,l.kt)("b",null,(0,l.kt)("a",{href:"http://www.linuxtag.org/2013/de/program/mittwoch-22-mai-2013.html",class:"external-link",rel:"nofollow"},"Linux Tag"))," Berlin, May 22-25, Sebastien Goasguen will talk about CloudStack and Big Data. There will also be a CloudStack booth at the expo."),(0,l.kt)("li",null,(0,l.kt)("b",null,(0,l.kt)("a",{href:"http://www.bjug.ro",class:"external-link",rel:"nofollow"},"Bucarest JUG"))," May 30th, Sebastien Goasguen will talk about CloudStack and Big Data. Announcement yet to be posted."),(0,l.kt)("li",null,(0,l.kt)("b",null,(0,l.kt)("a",{href:"https://www.ch-open.ch/events/aktuelle-events/open-cloud-day-2013/",class:"external-link",rel:"nofollow"},"Open Cloud Day "))," in Zurich, June 11th. Sebastien Goasguen will talk about the Apache Cloud ecosystem."),(0,l.kt)("li",null,(0,l.kt)("b",null,(0,l.kt)("a",{href:"http://bacdparis.eventbrite.com",class:"external-link",rel:"nofollow"},"Build a Cloud Day Paris"))," Paris, June 19th."),(0,l.kt)("li",null,(0,l.kt)("b",null,(0,l.kt)("a",{href:"http://www.shapeblue.com/cloudstack-bootcamp-training-course",class:"external-link",rel:"nofollow"},"ShapeBlue CloudStack BootCamp"))," being held June 22/23 at the Santa Clara Convention Center."),(0,l.kt)("li",null,(0,l.kt)("b",null,"CloudStack San Francisco Users Group Event")," being held at SAP Labs in Palo Alto CA. on June 27th. Contact Karen Vuong for more details.")),(0,l.kt)("p",null,"If you have an event you wanted added here, please send to the marketing@cloudstack.apache.org or see how to contribute to the news below."),(0,l.kt)("h3",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-13May2013-NewCommittersandPMCMembers"}),"New Committers and PMC Members"),(0,l.kt)("p",null,"Clayton Weise has been invited to become a committer and ",(0,l.kt)("a",{href:"http://markmail.org/message/47fjhh3uec3upu2x",class:"external-link",rel:"nofollow"},"has accepted"),"."),(0,l.kt)("p",null,"Phong Nguyen has been invited to become a committer and ",(0,l.kt)("a",{href:"http://markmail.org/message/sswcpp26rylai5my",class:"external-link",rel:"nofollow"},"has accepted"),". "),(0,l.kt)("p",null,"Isaac Chiang has been invited to become a committer and ",(0,l.kt)("a",{href:"http://markmail.org/message/bwfigenld43msoyg",class:"external-link",rel:"nofollow"},"has accepted"),"."),(0,l.kt)("h3",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-13May2013-ContributingtotheWeeklyNews"}),"Contributing to the Weekly News"),(0,l.kt)("p",null,'Want to keep reading the CloudStack Weekly News? Many hands make light work, but having only one editor means getting the weekly news out every week is a "best effort" activity. A healthy community publication needs several contributors to ensure weekly issues go out on time.'),(0,l.kt)("p",null,"If you have an event, discussion, or other item to contribute to the ",(0,l.kt)("em",null,"Weekly News"),", you can add it directly to the ",(0,l.kt)("a",{href:"https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Weekly+News",class:"external-link",rel:"nofollow"},"wiki")," by editing the issue you want your item to appear in. (The next week's issue is created before the current issue is published - so at any time there should be at least one issue ready to edit.)"),(0,l.kt)("p",null,"Alternatively, you can send a note to the marketing@cloudstack.apache.org mailing list with a subject including ",(0,l.kt)("a",{href:"",title:"News"},"News"),": ",(0,l.kt)("em",null,"description of topic")," or email the newsletter editor directly (jzb at apache.org), again with the subject ",(0,l.kt)("a",{href:"",title:"News"},"News"),": ",(0,l.kt)("em",null,"description of topic"),". ",(0,l.kt)("b",null,"Please include a link to the discussion in the mailing list archive or Web page with details of the event, etc.")))}k.isMDXComponent=!0}}]);