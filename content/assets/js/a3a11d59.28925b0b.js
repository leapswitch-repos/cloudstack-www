"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7635],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=l.createContext({}),i=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=i(e.components);return l.createElement(u.Provider,{value:t},e.children)},k="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=i(a),d=n,h=k["".concat(u,".").concat(d)]||k[d]||p[d]||o;return a?l.createElement(h,r(r({ref:t},c),{},{components:a})):l.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[k]="string"==typeof e?e:n,r[1]=s;for(var i=2;i<o;i++)r[i]=a[i];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1072:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var l=a(7462),n=(a(7294),a(3905));const o={layout:"post",title:"Apache CloudStack Weekly News - 14 January 2013",slug:"apache_cloudstack_weekly_news_14"},r=void 0,s={permalink:"/blog/apache_cloudstack_weekly_news_14",source:"@site/blog/2013-01-14-apache_cloudstack_weekly_news_14.md",title:"Apache CloudStack Weekly News - 14 January 2013",description:"Each week, we'll summarize the most important issues and developments in the Apache CloudStack (incubating) community. This week, the vote on accepting Marvin tests, Apache CloudStack bylaws, issues with features for 4.1.0, and upcoming events.",date:"2013-01-14T00:00:00.000Z",formattedDate:"January 14, 2013",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack Weekly News - 14 January 2013",slug:"apache_cloudstack_weekly_news_14"},prevItem:{title:"Apache CloudStack Weekly News - 21 January 2013",permalink:"/blog/apache_cloudstack_weekly_news_21"},nextItem:{title:"Apache CloudStack 4.0.0-incubating Released",permalink:"/blog/apache_cloudstack_4_0_0"}},u={authorsImageUrls:[]},i=[],c={toc:i},k="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(k,(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Each week, we'll summarize the most important issues and developments in the Apache CloudStack (incubating) community. This week, the vote on accepting Marvin tests, Apache CloudStack bylaws, issues with features for 4.1.0, and upcoming events."),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-14January2013-MajorDiscussionsandIssues"}),"Major Discussions and Issues"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"Project Bylaws were ",(0,n.kt)("a",{href:"http://markmail.org/thread/ma3g6hdgegu76g44",class:"external-link",rel:"nofollow"},"discussed previously")," and after a substantial discussion on cloudstack-dev have ",(0,n.kt)("a",{href:"http://markmail.org/thread/2q5b2y7oahgobqfg",class:"external-link",rel:"nofollow"},"passed"),". The bylaws are intended to go into effect once Apache CloudStack graduates from the Apache Incubator. (Note that a vote on graduation is not currently pending.)"),(0,n.kt)("li",null,"Discussion about whether CloudStack should make a concerted effort to ",(0,n.kt)("a",{href:"http://markmail.org/thread/moyctvlxmgrrorb5",class:"external-link",rel:"nofollow"},"get into Linux distros"),"."),(0,n.kt)("li",null,"There are some ",(0,n.kt)("a",{href:"http://markmail.org/thread/nu4f6tphsnsv7ls6",class:"external-link",rel:"nofollow"},"concerns about where development is happening")," for major features being targeted for CloudStack 4.1.0. A number of features have been developed outside of the community, and may need to go through IP clearance to be accepted into master for 4.1.0."),(0,n.kt)("li",null,"Discussion on how CloudMonkey should be released, whether it makes sense to ",(0,n.kt)("a",{href:"http://markmail.org/thread/moyctvlxmgrrorb5",class:"external-link",rel:"nofollow"},"release CloudMonkey out-of-band via pypi or stick with major releases"),"."),(0,n.kt)("li",null,"Reminder to developers to ",(0,n.kt)("a",{href:"http://markmail.org/thread/pb3bmv44m6vwro4w",class:"external-link",rel:"nofollow"},"update status, risk, and issues in Jira items"),"."),(0,n.kt)("li",null,"Vote to accept Marvin automated tests from Citrix ",(0,n.kt)("a",{href:"http://markmail.org/thread/cqkim6v5nk73tur7",class:"external-link",rel:"nofollow"},"started on January 9th")," the vote ",(0,n.kt)("a",{href:"http://markmail.org/thread/vxwtwnhapmf7inw7",class:"external-link",rel:"nofollow"},"passed")," and now will begin going through IP clearance."),(0,n.kt)("li",null,(0,n.kt)("a",{href:"http://markmail.org/thread/jhkqwujf23zegn5d",class:"external-link",rel:"nofollow"},"Minutes from QA Scrum on 8 January 2013"),"."),(0,n.kt)("li",null,(0,n.kt)("a",{href:"https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Meeting+9+January+2013+Minutes",class:"external-link",rel:"nofollow"},"Minutes from CloudStack IRC Meeting 9 January 2013")," and the ",(0,n.kt)("a",{href:"https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Meeting+9+January+2013+Log",class:"external-link",rel:"nofollow"},"full log"),".")),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-14January2013-UpcomingEvents"}),"Upcoming Events"),(0,n.kt)("p",null,"CloudStack will be represented at a number of events in the next few weeks:"),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("b",null,"OSSI DHS Industry Day")," David Nalley is on a panel and will talk about Apache CloudStack at the ",(0,n.kt)("a",{href:"http://www.oss-institute.org/component/events/event/30",class:"external-link",rel:"nofollow"},"OSSI Industry Day")," in Linthicum, Maryland on Monday, 14 January 2013."),(0,n.kt)("li",null,(0,n.kt)("b",null,"DC Riak Users Group")," David Nalley is speaking about CloudStack at the ",(0,n.kt)("a",{href:"http://www.meetup.com/Riak-DC/events/94513602/",class:"external-link",rel:"nofollow"},"DC Riak Users Group")," in Washington DC on Wednesday, 16 January 2013."),(0,n.kt)("li",null,(0,n.kt)("b",null,"PuppetCamp Silicon Valley"),": David Nalley is ",(0,n.kt)("a",{href:"http://puppetcampsiliconvalley2013.eventbrite.com/",class:"external-link",rel:"nofollow"},"speaking about CloudStack at PuppetCamp Silicon Valley")," on Friday, 18 January 2013."),(0,n.kt)("li",null,(0,n.kt)("b",null,"PuppetCamp Sydney"),": Joe Brockmeier is ",(0,n.kt)("a",{href:"http://puppetcampsydney2013.eventbrite.com/",class:"external-link",rel:"nofollow"},"speaking about Apache CloudStack at PuppetCamp Sydney")," on Thursday, 24 January 2013."),(0,n.kt)("li",null,(0,n.kt)("b",null,"Linux.conf.au"),": Joe Brockmeier is ",(0,n.kt)("a",{href:"https://lca2013.linux.org.au/schedule/30073/view_talk?day=monday",class:"external-link",rel:"nofollow"},"speaking about Apache CloudStack during the Cloud Infrastructure, Distributed Storage and High Availability miniconf")," on Monday (28 January, 2013)."),(0,n.kt)("li",null,(0,n.kt)("b",null,"FOSDEM"),": Sebastien Goasguen is ",(0,n.kt)("a",{href:"https://fosdem.org/2013/schedule/event/cloudstack/",class:"external-link",rel:"nofollow"},"speaking about Apache CloudStack features and tools")," during the ",(0,n.kt)("a",{href:"https://fosdem.org/2013/schedule/track/cloud/",class:"external-link",rel:"nofollow"},"cloud DevRoom")," at FOSDEM on Sunday (3 February, 2013)."),(0,n.kt)("li",null,(0,n.kt)("b",null,"Build a Cloud Day (BACD)"),": Full day ",(0,n.kt)("a",{href:"http://buildacloud.org/about-cloudstack/cloudstack-events/viewevent/140-build-a-cloud-day-ghent-2013.html",class:"external-link",rel:"nofollow"},"workshop")," on CloudStack co-located with Puppet Camp in Ghent, Belgium (1 February, 2013)."),(0,n.kt)("li",null,(0,n.kt)("b",null,"UK/European User Group Meet-up")," : Shapeblue is organizing a ",(0,n.kt)("a",{href:"http://buildacloud.org/about-cloudstack/cloudstack-events/viewevent/141-ukeuropean-user-group-meet-up.html",class:"external-link",rel:"nofollow"},"meet-up"),". (January 16th, 2013)")),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-14January2013-Jira"}),"Jira"),(0,n.kt)("p",null,"In the last 30 days (as of 11 January, 2013) 345 issues have been created in Jira, and 85 have been resolved."),(0,n.kt)("ul",null,(0,n.kt)("li",null,"Unassigned Issues: 299 as of 11 January, 2013. ",(0,n.kt)("a",{href:"http://is.gd/Nj4yuN",class:"external-link",rel:"nofollow"},"Please see if any of the issues are something you can help with"),"."),(0,n.kt)("li",null,"There are ",(0,n.kt)("a",{href:"http://is.gd/Nj4yuN",class:"external-link",rel:"nofollow"},"84 open issues affecting 4.1.0"),"."),(0,n.kt)("li",null,"75 issues are of ",(0,n.kt)("a",{href:"http://is.gd/1eRl59",class:"external-link",rel:"nofollow"},"blocker, critical, or major status"),".")),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-14January2013-NewCommittersandPPMCMembers"}),"New Committers and PPMC Members"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"Sebastien Goasguen and Kelcey Damage were welcomed as new committers.")))}p.isMDXComponent=!0}}]);