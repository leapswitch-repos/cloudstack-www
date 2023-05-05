"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9805],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>p});var a=l(7294);function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){o(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,a,o=function(e,t){if(null==e)return{};var l,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(o[l]=e[l]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var l=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(l),d=o,p=h["".concat(s,".").concat(d)]||h[d]||k[d]||n;return l?a.createElement(p,r(r({ref:t},c),{},{components:l})):a.createElement(p,r({ref:t},c))}));function p(e,t){var l=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=l.length,r=new Array(n);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:o,r[1]=i;for(var u=2;u<n;u++)r[u]=l[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,l)}d.displayName="MDXCreateElement"},9735:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>k,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var a=l(7462),o=(l(7294),l(3905));const n={layout:"post",title:"Apache CloudStack Weekly News - 29 April 2013",slug:"apache_cloudstack_weekly_news_29"},r=void 0,i={permalink:"/blog/apache_cloudstack_weekly_news_29",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2013-05-02-apache_cloudstack_weekly_news_29.md",source:"@site/blog/2013-05-02-apache_cloudstack_weekly_news_29.md",title:"Apache CloudStack Weekly News - 29 April 2013",description:"This week, we had discussions about the release cycle and whether a six-month cycle may be more appropriate. Work continued on the 4.1.0 release, and Apache CloudStack 4.0.2 was released.",date:"2013-05-02T00:00:00.000Z",formattedDate:"May 2, 2013",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack Weekly News - 29 April 2013",slug:"apache_cloudstack_weekly_news_29"},prevItem:{title:"The CloudStack Conference CFP Deadline is Approaching! Submit Talks by Sunday",permalink:"/blog/the_cloudstack_conference_cfp_deadline"},nextItem:{title:"Apache CloudStack 2013 Collaboration Conference Call for Proposals",permalink:"/blog/apache_cloudstack_2013_collaboration_conference"}},s={authorsImageUrls:[]},u=[],c={toc:u},h="wrapper";function k(e){let{components:t,...l}=e;return(0,o.kt)(h,(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This week, we had discussions about the release cycle and whether a six-month cycle may be more appropriate. Work continued on the 4.1.0 release, and Apache CloudStack 4.0.2 was released. "),(0,o.kt)("h3",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-29April2013-MajorDiscussions"}),"Major Discussions"),(0,o.kt)("p",null,"Several major discussions this week, summarized below. Note that this is only a fraction of the activity in the project. For a full overview of project activity, you may want to subscribe to dev@cloudstack.apache.org. "),(0,o.kt)("h5",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-29April2013-ReleaseCycle%3AFourMonths%2CorSix%3F"}),"Release Cycle: Four Months, or Six?"),(0,o.kt)("p",null,"Animesh Chaturvedi ",(0,o.kt)("a",{href:"http://markmail.org/message/3ctdwor5hfbpa3vx",class:"external-link",rel:"nofollow"},"started new thread for a discussion that cropped up in the timeline thread")," about the four-month vs. six-month release cycle ideas. After much discussion, ",(0,o.kt)("a",{href:"http://markmail.org/message/rqqbtbumx6xnzrcr",class:"external-link",rel:"nofollow"},"Animesh summed up the discussion")," saying:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",null,"I still see there is difference of opinion and not a clear consensus with 12 out",(0,o.kt)("br",null),"of 21 ( approx. 60%) preferring 6 months.  But going by the argument of not",(0,o.kt)("br",null),"having given proper shot to 4 month cycle I will say we can keep 4.2 as a 4",(0,o.kt)("br",null),"month cycle and pull in all effort to make it successful.  If it turns out that",(0,o.kt)("br",null),"we can work with 4 month schedule that's well and good otherwise we can bring",(0,o.kt)("br",null),"this topic again based on the results of running 4 month cycle.")),(0,o.kt)("h5",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-29April2013-4.1.0Approaches"}),"4.1.0 Approaches"),(0,o.kt)("p",null,"After clearing out a number of last-minute blockers, it looks like 4.1.0 may be just about ready to roll. Chip Childers ",(0,o.kt)("a",{href:"http://markmail.org/message/fe44ea4vy4yughwm",class:"external-link",rel:"nofollow"},"posted on Friday"),' that he was waiting on confirmation on CLOUDSTACK-528 and CLOUDSTACK-2194 being fixed. If those are fixed, Chip says he will "proceed with starting the VOTE thread" Monday morning, Eastern time. '),(0,o.kt)("h5",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-29April2013-ApacheCloudStack4.0.2Released"}),"Apache CloudStack 4.0.2 Released "),(0,o.kt)("p",null,"Joe Brockmeier ",(0,o.kt)("a",{href:"http://markmail.org/message/vyukwk2nof5gaqko",class:"external-link",rel:"nofollow"},"announced the 4.0.2 release")," on 24 April, along with security fixes for two security vulnerabilities. "),(0,o.kt)("h5",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-29April2013-SecurityVulnerabilitiesinCloudStack4.0.x"}),"Security Vulnerabilities in CloudStack 4.0.x"),(0,o.kt)("p",null,"John Kinsella ",(0,o.kt)("a",{href:"http://markmail.org/message/36mipmcuj7ryo7py",class:"external-link",rel:"nofollow"},"sent out an announcement detailing two security vulnerabilities")," on 24 April:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",null,"Description:",(0,o.kt)("br",null),"The CloudStack PMC was notified of two issues found in Apache CloudStack:"),(0,o.kt)("p",null,"1) An attacker with knowledge of CloudStack source code could gain",(0,o.kt)("br",null),"unauthorized access to the console of another tenant's VM."),(0,o.kt)("p",null,"2) Insecure hash values may lead to information disclosure. URLs",(0,o.kt)("br",null),"generated by Apache CloudStack to provide console access to virtual",(0,o.kt)("br",null),"machines contained a hash of a predictable sequence, the hash of",(0,o.kt)("br",null),"which was generated with a weak algorithm. While not easy to leverage,",(0,o.kt)("br",null),"this may allow a malicious user to gain unauthorized console access."),(0,o.kt)("p",null,"Mitigation:",(0,o.kt)("br",null),"Updating to Apache CloudStack versions 4.0.2 or higher will mitigate",(0,o.kt)("br",null),"these vulnerabilities."),(0,o.kt)("p",null,"Credit:",(0,o.kt)("br",null),"These issues were identified by Wolfram Schlich and Mathijs Schmittmann",(0,o.kt)("br",null),"to the Citrix security team, who in turn notified the Apache",(0,o.kt)("br",null),"CloudStack PMC.")),(0,o.kt)("h5",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-29April2013-ExposingAPIsthatcarryPOSTdata"}),"Exposing APIs that carry POST data"),(0,o.kt)("p",null,"Prasanna Santhanam ",(0,o.kt)("a",{href:"http://markmail.org/message/ji4d23xozub3nehi",class:"external-link",rel:"nofollow"},"raised a discussion")," about adding the ability to send user data as POST to commands. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",null,"I'm guessing we'll have to put in additional annotations on our APIs",(0,o.kt)("br",null),"that support POST so that API discovery can print the methods",(0,o.kt)("br",null),"supported (GET/POST). Right now it's only the deployVMCmd (AFAIK). But",(0,o.kt)("br",null),"I expect this will need to be done for others soon."),(0,o.kt)("p",null,"I've included POST support for ",(0,o.kt)("em",null,"every")," command in marvin but that's",(0,o.kt)("br",null),"just brute-force. To make it more intelligent I think we should apply",(0,o.kt)("br",null),"it to only apis that make sense as POST (causing side-effects). But",(0,o.kt)("br",null),"that needs to be exposed by the api endpoint.")),(0,o.kt)("h5",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-29April2013-EnablingGitHubPullRequestNotification"}),"Enabling GitHub Pull Request Notification"),(0,o.kt)("p",null,"A discussion was brought up on dev@ this weekend about enabling notifications for pull requests made via GitHub. David Nalley ",(0,o.kt)("a",{href:"http://markmail.org/message/f6cmckyakfa6sof4",class:"external-link",rel:"nofollow"},"remarked"),' that in his opinion, "there really isn\'t an option - if we are going to have a GitHub mirror, we also need to be able to deal with the pull requests there. Ignoring folks that submit pull requests is inappropriate."'),(0,o.kt)("p",null,"Chip ",(0,o.kt)("a",{href:"http://markmail.org/message/vwyio3i5merrwrv5",class:"external-link",rel:"nofollow"},"questioned the need for a GitHub mirror at all"),'. "Not sure the value, when you consider the confusion it causes WRT the canonical source repo."'),(0,o.kt)("h3",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-29April2013-CloudStackPlanetPostsfromtheCloudStackCommunity"}),"CloudStack Planet - Posts from the CloudStack Community"),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,(0,o.kt)("a",{href:"http://kirkjantzer.blogspot.com/2013/04/more-fun-with-cloudstack-api.html",class:"external-link",rel:"nofollow"},"More Fun with the CloudStack API")),' - Kirk Jantzer writes about playing with the CloudStack API and writing a tool "in an effort to make deployment of a mass amount of servers with as little effort as possible."')),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,(0,o.kt)("a",{href:"http://buildacloud.org/blog/257-doing-it-twice-write-it-down.html",class:"external-link",rel:"nofollow"},"Doing it Twice? Write it Down!"))," - A post by Joe Brockmeier talking about the need for documenting crucial operations for maintaining projects.")),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,(0,o.kt)("a",{href:"http://communityovercode.com/2013/04/thanks-apache-cloudstack/",class:"external-link",rel:"nofollow"},"Thanks to the Apache CloudStack community!")),' - Shane Curcuru writes about the Apache CloudStack graduation and its incubation. "',(0,o.kt)("em",null,"The desire to get things 'right' at Apache was clear in everything the CloudStack community did, and the end result looks to be an incredibly strong project that\u2019s quickly gathering developers from a wide variety of vendors and users. Part of this growth is about the great technology; but a lot is due to the helpful and welcoming face that the CloudStack committers put on their project."),'"')),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,(0,o.kt)("a",{href:"http://www.chipchilders.com/blog/2013/4/22/release-verification-tool-for-cloudstack.html",class:"external-link",rel:"nofollow"},"Release Verification Tool for CloudStack")),' - Chip Childers writes about a "simple tool to use for CloudStack release voting verification." The tool is on ',(0,o.kt)("a",{href:"https://github.com/chipchilders/cloudstack-release-verification-tool",class:"external-link",rel:"nofollow"},"GitHub"),", as a Python script that will help verifying releases.")),(0,o.kt)("h3",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-29April2013-UpcomingEvents"}),"Upcoming Events"),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,"Storage in Apache CloudStack")," being held by the ",(0,o.kt)("a",{href:"http://www.meetup.com/CloudStack-SF-Bay-Area-Users-Group/events/108916562/",class:"external-link",rel:"nofollow"},"CloudStack SF Bay Area Users Group")," on April 30, 2013 @ Citrix Conference Center, sign up on the Meetup.com Website."),(0,o.kt)("li",null,(0,o.kt)("b",null,(0,o.kt)("a",{href:"http://buildacloud.org/about-diy-cloud-computing/cloud-events/viewevent/148-build-a-cloud-day-cloudcon-san-francisco-ca.html",class:"external-link",rel:"nofollow"},"Build a Cloud Day CloudCon San Francisco"))," being held at the South San Francisco Conference Center on 15 May."),(0,o.kt)("li",null,(0,o.kt)("b",null,(0,o.kt)("a",{href:"http://cloudstackcollab.net/",class:"external-link",rel:"nofollow"},"CloudStack Collaboration Conference 2013"))," is being held from 23 June to 25 June in Santa Clara, CA at the Santa Clara Convention Center. See the ",(0,o.kt)("a",{href:"http://cloudstackcollab.net/CfP/",class:"external-link",rel:"nofollow"},"Call for Proposals")," if you're interested in speaking!"),(0,o.kt)("li",null,(0,o.kt)("b",null,(0,o.kt)("a",{href:"https://www.ch-open.ch/events/aktuelle-events/open-cloud-day-2013/",class:"external-link",rel:"nofollow"},"Open Cloud Day "))," in Zurich, June 11th. Sebastien Goasguen will talk about the Apache Cloud ecosystem"),(0,o.kt)("li",null,(0,o.kt)("b",null,(0,o.kt)("a",{href:"http://www.bjug.ro",class:"external-link",rel:"nofollow"},"Bucarest JUG"))," May 30th, Sebastien Goasguen will talk about CloudStack and Big Data. Announcement yet to be posted"),(0,o.kt)("li",null,(0,o.kt)("b",null,(0,o.kt)("a",{href:"http://www.linuxtag.org/2013/de/program/mittwoch-22-mai-2013.html",class:"external-link",rel:"nofollow"},"Linux Tag"))," Berlin, May 22-25, Sebastien Goasguen will talk about CloudStack and Big Data. There will also be a CloudStack booth at the expo.")),(0,o.kt)("h3",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-29April2013-Jira"}),"Jira"),(0,o.kt)("p",null,"Checking in on the upcoming 4.2.0 release, we have added a few bugs over the past week:"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Last week we had 5 blocker bugs for 4.2.0. This week, we have 11 ",(0,o.kt)("a",{href:"http://is.gd/blocker_acs420",class:"external-link",rel:"nofollow"},"blocker bugs for 4.2.0"),"."),(0,o.kt)("li",null,"Last week we had 34 critical bugs for 4.2.0. This week, we have 40 ",(0,o.kt)("a",{href:"http://is.gd/critical_acs420",class:"external-link",rel:"nofollow"},"critical bugs for 4.2.0"),"."),(0,o.kt)("li",null,"Last week we had 263 major bugs for 4.2.0. This week, we have 273 ",(0,o.kt)("a",{href:"http://is.gd/major_acs420",class:"external-link",rel:"nofollow"},"major bugs for 4.2.0"),"."),(0,o.kt)("li",null,"Last week we had 35 minor bugs for 4.2.0. This week we have 37 ",(0,o.kt)("a",{href:"http://is.gd/minor_acs420",class:"external-link",rel:"nofollow"},"minor bugs for 4.2.0"),".")),(0,o.kt)("h3",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-29April2013-NewCommittersandPMCMembers"}),"New Committers and PMC Members"),(0,o.kt)("p",null,"No new committers or PMC members announced this week."),(0,o.kt)("h3",null,(0,o.kt)("a",{name:"ApacheCloudStackWeeklyNews-29April2013-ContributingtotheWeeklyNews"}),"Contributing to the Weekly News"),(0,o.kt)("p",null,'Want to keep reading the CloudStack Weekly News? Many hands make light work, but having only one editor means getting the weekly news out every week is a "best effort" activity. A healthy community publication needs several contributors to ensure weekly issues go out on time.'),(0,o.kt)("p",null,"If you have an event, discussion, or other item to contribute to the ",(0,o.kt)("em",null,"Weekly News"),", you can add it directly to the ",(0,o.kt)("a",{href:"https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Weekly+News",class:"external-link",rel:"nofollow"},"wiki")," by editing the issue you want your item to appear in. (The next week's issue is created before the current issue is published - so at any time there should be at least one issue ready to edit.) "),(0,o.kt)("p",null,"Alternatively, you can send a note to the marketing@cloudstack.apache.org mailing list with a subject including ",(0,o.kt)("a",{href:"",title:"News"},"News"),": ",(0,o.kt)("em",null,"description of topic")," or email the newsletter editor directly (jzb at apache.org), again with the subject ",(0,o.kt)("a",{href:"",title:"News"},"News"),": ",(0,o.kt)("em",null,"description of topic"),". ",(0,o.kt)("b",null,"Please include a link to the discussion in the mailing list archive or Web page with details of the event, etc.")," "))}k.isMDXComponent=!0}}]);