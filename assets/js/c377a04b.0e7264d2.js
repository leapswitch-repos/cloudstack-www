"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6971],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1269:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={title:"Website Dev Guide"},i=void 0,s={unversionedId:"index",id:"index",title:"Website Dev Guide",description:"This is a website and blog guide which can be used as a reference which is",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/website-guide/",draft:!1,editUrl:"https://github.com/apache/cloudstack-www/tree/main/docs/index.md",tags:[],version:"current",frontMatter:{title:"Website Dev Guide"},sidebar:"defaultSidebar"},l={},c=[{value:"Working with the Website, Pages and Blogs",id:"working-with-the-website-pages-and-blogs",level:2},{value:"Website",id:"website",level:3},{value:"Pages",id:"pages",level:3},{value:"Blog",id:"blog",level:3},{value:"Contributing Changes using Github",id:"contributing-changes-using-github",level:2},{value:"ToC on blog and website page",id:"toc-on-blog-and-website-page",level:2},{value:"Images",id:"images",level:2},{value:"Buttons",id:"buttons",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Using Admonitions",id:"using-admonitions",level:2},{value:"Other Examples",id:"other-examples",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is a website and blog guide which can be used as a reference which is\nwritten in markdown. Markdown allows to fix html, the above is an example of how\nto add an image which may exist within the blog folder directory."),(0,o.kt)("p",null,"Please co-relate with the source of this page at:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/cloudstack-www/blob/main/src/pages/website-guide.md"},"https://github.com/apache/cloudstack-www/blob/main/src/pages/website-guide.md")),(0,o.kt)("p",null,"For basic Markdown syntax reference, please refer:\n",(0,o.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/"},"https://www.markdownguide.org/basic-syntax/")),(0,o.kt)("p",null,"Refer to the following for Docusauras supported markdown features:\n",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/2.3.1/markdown-features"},"https://docusaurus.io/docs/2.3.1/markdown-features")),(0,o.kt)("h2",{id:"working-with-the-website-pages-and-blogs"},"Working with the Website, Pages and Blogs"),(0,o.kt)("h3",{id:"website"},"Website"),(0,o.kt)("p",null,"Most of the website configuration such as theme, name, logos, menubar, footer\netc are configurable using the ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," that you can edit here:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/cloudstack-www/blob/main/docusaurus.config.js"},"https://github.com/apache/cloudstack-www/blob/main/docusaurus.config.js")),(0,o.kt)("h3",{id:"pages"},"Pages"),(0,o.kt)("p",null,"The various standalone pages are in this directory:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/cloudstack-www/tree/main/src/pages"},"https://github.com/apache/cloudstack-www/tree/main/src/pages")),(0,o.kt)("p",null,"Here you can use them as examples, on how to create MD or MDX file that build\nas webpages. You can look at 'learn-more.md' as a reusable page that can be\nincluded in other pages such as the homepage index.tsx, cloud-builders.mdx etc."),(0,o.kt)("h3",{id:"blog"},"Blog"),(0,o.kt)("p",null,"To create a new blog, create a directory with naming convention\n",(0,o.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD-slug-url"),". In this directory you can put in an ",(0,o.kt)("inlineCode",{parentName:"p"},"index.md")," and other\nassets such as images, pdfs etc. The .blog-template boilerplate can be used from\nhere:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/cloudstack-www/tree/main/blog/.blog-template"},"https://github.com/apache/cloudstack-www/tree/main/blog/.blog-template")),(0,o.kt)("p",null,"Use the provided index.md to specify attribute of your blog such as title, tags\n(categories), authors and the slug (the permalink)."),(0,o.kt)("p",null,"Having all your blog content and assets in a blog directory makes it easier to\nwork with Github's editor and allows you to visually contribute changes."),(0,o.kt)("p",null,"You may further read ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"https://docusaurus.io/docs/blog")," for advance changes and\nrefer to the misc section on this page for various components that you case use."),(0,o.kt)("p",null,"A common use-case is to have a header file and a way to limit how much of the\npost shows up on the blog roll. For this, to add read-more we can add a ",(0,o.kt)("inlineCode",{parentName:"p"},"\x3c!--\ntruncate --\x3e")," in your blog post (the index.md file):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"...blog content...\n\x3c!-- truncate --\x3e\n...blog content...\n")),(0,o.kt)("h2",{id:"contributing-changes-using-github"},"Contributing Changes using Github"),(0,o.kt)("p",null,"Once you've the boilerplate changes done, the steps are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If you're a committer, you can edit directly the ",(0,o.kt)("inlineCode",{parentName:"li"},"main")," branch or create a\nGithub branch (optionally in your personally fork) by heading to the\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/cloudstack-www/branches"},"branches")," page:")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8922).Z,width:"2680",height:"608"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You may edit any existing page in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages")," directory or an existing\nblog in the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog")," directory, or add new content. If you do this in\napache/cloudstack-www repository's ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch then creating a pull request\nisn't required.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To add a new page or create a new blog you can also upload files, for example to\nadd a blog we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},".blog-template"),", edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.md")," and add any\nassets (such as images and pdfs) in a new directory on our computer (say\n",(0,o.kt)("inlineCode",{parentName:"p"},"2023-05-10-test-blog"),"):"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8915).Z,width:"2202",height:"1096"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Next, you can drag/drop or select this entire folder in the ",(0,o.kt)("inlineCode",{parentName:"li"},"blog")," directory\nof your newly created Github branch\n(",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/cloudstack-www/tree/new-blog-post/blog"},"https://github.com/apache/cloudstack-www/tree/new-blog-post/blog"),"):")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(9676).Z,width:"2792",height:"986"})),(0,o.kt)("p",null,"And, click the commit button to upload the blog post:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(7584).Z,width:"2610",height:"1580"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Next, open a pull request to get your PR merged (this isn't required if\nyou directly make changes in the ",(0,o.kt)("inlineCode",{parentName:"li"},"main"),' branch). To do this, you go to the\nbranches list and click on the "New pull request" button that\'s in front of your\nbranch:')),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4012).Z,width:"2656",height:"698"})),(0,o.kt)("p",null,"Next, create the pull request:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8222).Z,width:"1962",height:"1346"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"If you've opened a PR, a Github bot will notify you once it has built the\nstaging website for you to review your changes:")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5778).Z,width:"1900",height:"370"})),(0,o.kt)("p",null,"Your changes will be made live on the project website once a committer (or\nyourself, if you're one) will merge the pull request: (pro-tip - try to always\ndelete your branch after merging)"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5521).Z,width:"1962",height:"1412"})),(0,o.kt)("p",null,"If you're making changes directly on the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch your changes will be made\nlive in a few minutes, for you to verify:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1563).Z,width:"2220",height:"1536"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"That's it!")),(0,o.kt)("h2",{id:"toc-on-blog-and-website-page"},"ToC on blog and website page"),(0,o.kt)("p",null,"If you don't want table of contents show up on right-side of a page/blog, then\ndon't use the markdown syntax for h2 (##), h3 (###) etc. instead use the html\n",(0,o.kt)("inlineCode",{parentName:"p"},"<h2>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<h3>")," etc. which will not show the ToC on a page/blog."),(0,o.kt)("p",null,"Further reference: ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/2.3.1/markdown-features/toc"},"https://docusaurus.io/docs/2.3.1/markdown-features/toc")),(0,o.kt)("h2",{id:"images"},"Images"),(0,o.kt)("p",null,"We can specify the path related to the ",(0,o.kt)("inlineCode",{parentName:"p"},"static/")," directory paths, all files\nin static folder are available from the root of the website such as:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(7328).Z,title:"Example image title",width:"498",height:"284"})),(0,o.kt)("p",null,"Further reference: ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/2.3.1/markdown-features/assets"},"https://docusaurus.io/docs/2.3.1/markdown-features/assets")),(0,o.kt)("h2",{id:"buttons"},"Buttons"),(0,o.kt)("p",null,"Here are some example for buttons, shapes and sizes which depends on the class\nwe use in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<a>")," tags. Note: for files within the website/blog source\nfolders, always use a target ",(0,o.kt)("inlineCode",{parentName:"p"},"_blank"),"."),(0,o.kt)("p",null,"For examples:"),(0,o.kt)("a",{class:"button button--primary button--sm",href:"https://cloudstack.apache.org/",target:"_blank"},"BUTTON"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("a",{class:"button button--primary",href:"https://cloudstack.apache.org/",target:"_blank"},"BUTTON"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("a",{class:"button button--primary button--lg",href:"https://cloudstack.apache.org/",target:"_blank"},"BUTTON"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Buttons can also have colours depending on the class used, such as:"),(0,o.kt)("a",{class:"button button--secondary",href:"https://cloudstack.apache.org/",target:"_blank"},"BUTTON"),(0,o.kt)("br",null),(0,o.kt)("a",{class:"button button--info",href:"https://cloudstack.apache.org/",target:"_blank"},"BUTTON"),(0,o.kt)("br",null),(0,o.kt)("a",{class:"button button--success",href:"https://cloudstack.apache.org/",target:"_blank"},"BUTTON"),(0,o.kt)("br",null),(0,o.kt)("a",{class:"button button--warning",href:"https://cloudstack.apache.org/",target:"_blank"},"BUTTON"),(0,o.kt)("br",null),(0,o.kt)("a",{class:"button button--danger",href:"https://cloudstack.apache.org/",target:"_blank"},"BUTTON"),(0,o.kt)("h2",{id:"code-blocks"},"Code Blocks"),(0,o.kt)("p",null,"Example of code block:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# dnf install cloudstack-management\n")),(0,o.kt)("h2",{id:"using-admonitions"},"Using Admonitions"),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/2.3.1/markdown-features/admonitions"},"https://docusaurus.io/docs/2.3.1/markdown-features/admonitions")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"link")),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"link")),".")),(0,o.kt)("h2",{id:"other-examples"},"Other Examples"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is a quote"),(0,o.kt)("p",{parentName:"blockquote"},"-By somebody")),(0,o.kt)("p",null,"In this sentence, here is how you ",(0,o.kt)("strong",{parentName:"p"},"bold"),", ",(0,o.kt)("em",{parentName:"p"},"italics")," or  ",(0,o.kt)("del",{parentName:"p"},"strike"),"."),(0,o.kt)("p",null,"Here is a horizontal line:"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Here is a list of things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Item1"),(0,o.kt)("li",{parentName:"ul"},"Item2",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Item3"))),(0,o.kt)("li",{parentName:"ul"},"Item4",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Item 5"),(0,o.kt)("li",{parentName:"ul"},"Item 5",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Item 5")))))))}d.isMDXComponent=!0},9676:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blog-dir-07b05d35e987c1addceef9daf0cdff87.png"},5778:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/github-bot-70bbbe23d3dd7b7be4143dc83f6480b4.png"},7584:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/github-commit-blog-292f690f3c783397e139f02a3f4722c0.png"},7328:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nandcmk-f007279711e238d8bc7b37f4dc7c20d1.gif"},8915:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-blog-dir-0136df1cdeb03852891cc5f35620c609.png"},8922:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-branch-4e1e3a81d54280eb7e1ce819bee34a2c.png"},4012:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-pr-0e05bf1ab5cb4662c071f9c6942cf205.png"},8222:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/open-pr-4c802efd02639b43f91532ccd9e28137.png"},5521:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pr-merged-2603034b3df56e86c2f28f45ae6bc4b6.png"},1563:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/test-blog-69f4111bf8aeea567afbd91aeb36c50e.png"}}]);