"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6852],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=u(n),k=r,h=c["".concat(i,".").concat(k)]||c[k]||d[k]||o;return n?a.createElement(h,s(s({ref:e},p),{},{components:n})):a.createElement(h,s({ref:e},p))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,s=new Array(o);s[0]=k;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[c]="string"==typeof t?t:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6351:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={layout:"post",title:"Lorem Ipsum",tags:["news"],authors:["ivet"],slug:"fix-this-slug-for-post-url"},s=void 0,l={type:"mdx",permalink:"/website-guide",source:"@site/src/pages/website-guide.md",title:"Lorem Ipsum",description:"This is a website and blog guide which can be used as a reference which is",frontMatter:{layout:"post",title:"Lorem Ipsum",tags:["news"],authors:["ivet"],slug:"fix-this-slug-for-post-url"}},i=[{value:"Working with Blogs",id:"working-with-blogs",level:2},{value:"Buttons",id:"buttons",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Using Admonitions",id:"using-admonitions",level:2},{value:"Misc Examples",id:"misc-examples",level:2}],u={toc:i},p="wrapper";function c(t){let{components:e,...o}=t;return(0,r.kt)(p,(0,a.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4463).Z,title:"Header Image",width:"1484",height:"363"})),(0,r.kt)("p",null,"This is a website and blog guide which can be used as a reference which is\nwritten in markdown. Markdown allows to fix html, the above is an example of how\nto add an image which may exist within the blog folder directory."),(0,r.kt)("p",null,"Please co-related with the source at:"),(0,r.kt)("p",null,"For basic Markdown syntax reference, please refer:\n",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/"},"https://www.markdownguide.org/basic-syntax/")),(0,r.kt)("p",null,"Refer to the following for Docusauras supported markdown features:\n",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/2.3.1/markdown-features"},"https://docusaurus.io/docs/2.3.1/markdown-features")),(0,r.kt)("h2",null,"Images"),(0,r.kt)("p",null,"We can specify the path related to the ",(0,r.kt)("inlineCode",{parentName:"p"},"static/")," directory paths, all files\nin static folder are available from the root of the website such as:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4463).Z,title:"Example image title",width:"1484",height:"363"})),(0,r.kt)("p",null,"Further reference: ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/2.3.1/markdown-features/assets"},"https://docusaurus.io/docs/2.3.1/markdown-features/assets")),(0,r.kt)("p",null,"To add read-more we can add a ",(0,r.kt)("inlineCode",{parentName:"p"},"\x3c!-- truncate --\x3e")," in the post, such as after\nthis sentence."),(0,r.kt)("h2",{id:"working-with-blogs"},"Working with Blogs"),(0,r.kt)("p",null,"Read ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"https://docusaurus.io/docs/blog")),(0,r.kt)("h1",null,"Table of Contents"),(0,r.kt)("p",null,"If you don't want table of contents on right-side of a page, then don't use the\nmarkdown syntax for h2, h3, h4... instead use the html such this section's\nheader won't show up on the page's table of contents on the right side."),(0,r.kt)("p",null,"Further reference: ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/2.3.1/markdown-features/toc"},"https://docusaurus.io/docs/2.3.1/markdown-features/toc")),(0,r.kt)("h2",{id:"buttons"},"Buttons"),(0,r.kt)("p",null,"Here are some example for buttons, shapes and sizes which depends on the class\nwe use in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<a>")," tags. Note: for files within the website/blog source\nfolders, always use a target ",(0,r.kt)("inlineCode",{parentName:"p"},"_blank"),"."),(0,r.kt)("p",null,"For examples:"),(0,r.kt)("a",{class:"button button--primary button--sm",href:"https://cloudstack.apache.org/",target:"_blank"},"BUTTON"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("a",{class:"button button--primary",href:"https://cloudstack.apache.org/",target:"_blank"},"BUTTON"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("a",{class:"button button--primary button--lg",href:"https://cloudstack.apache.org/",target:"_blank"},"BUTTON"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"Buttons can also have colours depending on the class used, such as:"),(0,r.kt)("a",{class:"button button--secondary",href:"https://cloudstack.apache.org/",target:"_blank"},"BUTTON"),(0,r.kt)("br",null),(0,r.kt)("a",{class:"button button--info",href:"https://cloudstack.apache.org/",target:"_blank"},"BUTTON"),(0,r.kt)("br",null),(0,r.kt)("a",{class:"button button--success",href:"https://cloudstack.apache.org/",target:"_blank"},"BUTTON"),(0,r.kt)("br",null),(0,r.kt)("a",{class:"button button--warning",href:"https://cloudstack.apache.org/",target:"_blank"},"BUTTON"),(0,r.kt)("br",null),(0,r.kt)("a",{class:"button button--danger",href:"https://cloudstack.apache.org/",target:"_blank"},"BUTTON"),(0,r.kt)("h2",{id:"code-blocks"},"Code Blocks"),(0,r.kt)("p",null,"Example of code block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# dnf install cloudstack-management\n")),(0,r.kt)("h2",{id:"using-admonitions"},"Using Admonitions"),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/2.3.1/markdown-features/admonitions"},"https://docusaurus.io/docs/2.3.1/markdown-features/admonitions")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"link")),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"link")),".")),(0,r.kt)("h2",{id:"misc-examples"},"Misc Examples"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is a quote"),(0,r.kt)("p",{parentName:"blockquote"},"-By somebody")),(0,r.kt)("p",null,"In this sentence, here is how you ",(0,r.kt)("strong",{parentName:"p"},"bold"),", ",(0,r.kt)("em",{parentName:"p"},"italics")," or  ",(0,r.kt)("del",{parentName:"p"},"strike"),"."),(0,r.kt)("p",null,"Here is a horizontal line:"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Here is a list of things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Item1"),(0,r.kt)("li",{parentName:"ul"},"Item2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Item3"))),(0,r.kt)("li",{parentName:"ul"},"Item4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Item 5"),(0,r.kt)("li",{parentName:"ul"},"Item 5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Item 5")))))))}c.isMDXComponent=!0},4463:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/banner-00cffd639418c48fde1f4c479259e9b6.svg"}}]);