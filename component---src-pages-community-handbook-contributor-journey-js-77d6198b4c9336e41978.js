"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[13254],{76713:function(e,t,n){n(67294);t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iQ2FwYV8xIiB3aWR0aD0iNDkzLjM1NiIgaGVpZ2h0PSI0OTMuMzU2IiB4PSIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTMuMzU2IDQ5My4zNTYiIHk9IjAiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ5My4zNTYgNDkzLjM1NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZmlsbD0iIzAwZDNhOSIgZD0iTTQ5MC40OTgsMjM5LjI3OGwtMTA5LjYzMi05OS45MjljLTMuMDQ2LTIuNDc0LTYuMzc2LTIuOTUtOS45OTMtMS40MjdjLTMuNjEzLDEuNTI1LTUuNDI3LDQuMjgzLTUuNDI3LDguMjgydjYzLjk1NEg5LjEzNiBjLTIuNjY2LDAtNC44NTYsMC44NTUtNi41NjcsMi41NjhDMC44NTksMjE0LjQzOCwwLDIxNi42MjgsMCwyMTkuMjkydjU0LjgxNmMwLDIuNjYzLDAuODU1LDQuODUzLDIuNTY4LDYuNTYzIGMxLjcxNSwxLjcxMiwzLjkwNSwyLjU2Nyw2LjU2NywyLjU2N2gzNTYuMzEzdjYzLjk1M2MwLDMuODEyLDEuODE3LDYuNTcsNS40MjgsOC4yNzhjMy42MiwxLjUyOSw2Ljk1LDAuOTUxLDkuOTk2LTEuNzA4IGwxMDkuNjMyLTEwMS4wNzdjMS45MDMtMS45MDIsMi44NTItNC4xODIsMi44NTItNi44NDlDNDkzLjM1NiwyNDMuMzY3LDQ5Mi40MDEsMjQxLjE4MSw0OTAuNDk4LDIzOS4yNzh6Ii8+PC9nPjwvc3ZnPg=="},70722:function(e,t,n){var a=n(67294),r=n(71082),i=n(85313).default.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-42m33g-0"})(["\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);t.Z=function(e){var t=e.contents,n=(0,a.useState)(null),l=n[0],o=n[1];return(0,a.useEffect)((function(){var e=window.location.pathname;o(e)}),[]),a.createElement(i,null,a.createElement("div",{className:"intra-page"},a.createElement("ul",null,t.map((function(e){return a.createElement("li",{key:e.id,className:"list"},a.createElement(r.Link,{to:""+l+e.link,key:e.id,activeClassName:"active"},e.text))})))))}},17875:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(29499),i=n(71082),l=function(e){var t=e.canonical,n=e.description,l=e.image,o=e.schemaMarkup,c=e.title,s=e.children,m=(0,r.useLocation)().pathname,u=(0,i.useStaticQuery)("4047814605").site.siteMetadata,E=u.title,d=u.description,h=u.image,p=u.siteUrl,g=u.twitterUsername,y={title:c||E,description:n||d,image:""+p+(l||h),url:(""+p+(m.replace(".html","")||"")).replace(/\/$/,""),twitterUsername:g};return t||(t=y.url),a.createElement(a.Fragment,null,a.createElement("title",null,y.title),a.createElement("meta",{name:"description",property:"og:description",content:y.description}),a.createElement("meta",{name:"og:description",content:y.description}),a.createElement("meta",{name:"image",property:"og:image",content:y.image}),a.createElement("meta",{name:"og:image",content:y.image}),a.createElement("meta",{name:"og:title",content:y.title}),a.createElement("meta",{name:"og:url",content:y.url}),a.createElement("meta",{name:"url",property:"og:url",content:y.url}),a.createElement("meta",{name:"og:type",content:"website"}),a.createElement("meta",{name:"author",content:"Layer5, Inc."}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:y.title}),a.createElement("meta",{name:"twitter:url",content:y.url}),a.createElement("meta",{name:"twitter:description",content:y.description}),a.createElement("meta",{name:"twitter:image",content:y.image}),a.createElement("meta",{name:"twitter:creator",content:y.twitterUsername}),a.createElement("meta",{charSet:"utf-8"}),a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.createElement("link",{rel:"shortcut icon",type:"image/x-icon",href:"data:image/webp;base64,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"}),a.createElement("link",{rel:"canonical",href:t}),o&&a.createElement("script",{type:"application/ld+json"},JSON.stringify(o)),s)};l.defaultProps={title:null,lang:"en",meta:[],description:"",image:null};var o=l},69325:function(e,t,n){n.r(t),n.d(t,{Head:function(){return g},default:function(){return p}});var a=n(67294),r=n(17875),i=n(6652),l=n(72606),o=n(71082),c=n(46117),s=n(90075),m=n(70722),u=n(76713),E=n(31992),d=[{id:0,link:"#About Layer5",text:"About Layer5"},{id:1,link:"#Goals",text:"Goals"},{id:2,link:"#Newcomer’s Path",text:"Newcomer’s Path"},{id:3,link:"#Working on your issue",text:"Working on your issue"},{id:4,link:"#While your issue is under review",text:"While your issue is under review"}],h=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return a.createElement(l.U,null,a.createElement("div",{className:"page-header-section"},a.createElement("h1",null,"About")),a.createElement(s.Z,null),a.createElement("div",{className:"page-section"},a.createElement(i.W2,null,a.createElement("div",{className:"content"},a.createElement("a",{id:"About Layer5"},a.createElement("h2",null,"About Layer5")),a.createElement("p",null,"Layer5 is an open source-first company and community of cloud native engineers. We are the creator and maintainer of",a.createElement(o.Link,{to:"/blog/announcements/a-standard-interface-for-service-meshes"}," ","service mesh standards"," "),"and also the maker of ",a.createElement(o.Link,{to:"/meshery"},"Meshery "),", the",a.createElement(o.Link,{to:"/cloud-native-management/meshery"}," ","Cloud Native Management Plane"," "),".",a.createElement("br",null),"Layer5 is not just a company, we are also:"),a.createElement("h4",null,"Community First"),a.createElement("p",null,"The Layer5 community builds projects to provide learning environments, deployment, and operational best practices, performance benchmarks, create documentation, share networking opportunities, and more. Our shared commitment to the open-source spirit pushes Layer5 projects forward. New members are always welcome."),a.createElement("h4",null,"Open Source First"),a.createElement("p",null,"All Layer5 projects are open-source. Anyone can download, use, work on, and share it with others. It's built on principles like collaboration, globalism, and innovation. Layer5 projects are distributed under the terms of"," ",a.createElement("a",{href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache v2"),"."),a.createElement("a",{id:"Goals"}," ",a.createElement("h2",null,"Goals")," "),a.createElement("ul",null,a.createElement("li",null,a.createElement("span",null,"To build a large collection of service meshes.")),a.createElement("li",null,a.createElement("span",null,"To build products that are accessible and easy to use.")),a.createElement("li",null,a.createElement("span",null,"To build a welcoming community for open-source contributions."))),a.createElement("a",{id:"Newcomer’s Path"}," ",a.createElement("h2",null,"Newcomer’s Path")," "),a.createElement("p",null,"Thank you for your interest in contributing to Layer5 open source initiatives!"),a.createElement(i.X2,{className:"newcomers-journey"},a.createElement(i.JX,{className:"heading",sm:12,lg:6,onMouseOver:function(){return n(!0)},onMouseOut:function(){return n(!1)}},a.createElement("h2",null,"Contributor's Journey"),a.createElement("div",{className:"heading-start"},a.createElement("h5",null,"Start Here"),a.createElement("img",{className:"heading-start__arrow",src:u.Z,alt:"longArrow"}))),a.createElement(i.JX,{sm:12,lg:6},a.createElement(c.Z,{handleMouseHover:t}))),a.createElement("p",null,"In combination with the Layer5 Community Guide and Contributing Guide, the following set of instructions are to encourage and support first-time (or near first-time) open-source contributors."),a.createElement("a",{id:"How to contribute?"}," ",a.createElement("h3",null,"How to contribute?")," "),a.createElement("p",null,"The following steps outline the process by which you can openly engage, learn, and participate in the broad set of open source projects at Layer5."),a.createElement("ol",null,a.createElement("li",null,a.createElement("span",null,"Browse the list of"," ",a.createElement("a",{href:"https://github.com/layer5io"},"Layer5")," org issues bearing the"," ",a.createElement("a",{href:"https://github.com/search?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22good+first+issue%22+no%3Aassignee"},"“good first issue”"),","," ",a.createElement("a",{href:"https://github.com/search?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22first+timers+only%22+no%3Aassignee"},"“first-timers-only”")," ","or the"," ",a.createElement("a",{href:"https://github.com/search?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22help+wanted%22+no%3A%22assignee%22"},"“help wanted”")," ","label.")),a.createElement("li",null,a.createElement("span",null,"Alternatively, find an area of interest by checking out the Layer5 Repository Overview section of this handbook.")),a.createElement("li",null,a.createElement("span",null,"After identifying the issue you wish to work on, check if it has been assigned by taking a look at the assignee section on the issue, otherwise signal your interest by commenting on the issue so that it can be assigned to you."))),a.createElement("a",{id:"Working on your issue"}," ",a.createElement("h3",null,"Working on your issue")," "),a.createElement("p",null,"Once an issue has been assigned to you, it’s time to get started!"),a.createElement("ol",null,a.createElement("li",null,a.createElement("span",null,"Be sure to"," ",a.createElement("a",{href:"https://github.com/layer5io/meshery/blob/master/CONTRIBUTING.md#signing-off-on-commits-developer-certificate-of-origin"},"sign off on your commits"))),a.createElement("li",null,a.createElement("span",null,"Contributions of all sizes are welcome.")),a.createElement("li",null,a.createElement("span",null,"If you need some additional help, please join the Layer5 Slack workspace and find your way to the #newcomers channel. Feel free to ask questions."))),a.createElement("a",{id:"While your issue is under review"}," ",a.createElement("h3",null,"While your issue is under review")," "),a.createElement("ol",null,a.createElement("li",null,a.createElement("span",null,"Please double-check that you have signed off on all of your git commits.")),a.createElement("li",null,a.createElement("span",null,"Be patient. There are a large number of contributors and only a small number of maintainers/reviewers. All contributors are equally important to us, and we'll be sure to get to you as soon as possible. In the meanwhile, you are welcome to join our Slack workspace and take a look at all our projects."," ")))),a.createElement(E.Z,null)),a.createElement(m.Z,{contents:d})))},p=function(){return a.createElement(a.Fragment,null,a.createElement(h,null))},g=function(){return a.createElement(r.Z,{title:"Community Handbook",description:"Instructions to encourage and support first-time open-source contributors."})}}}]);