"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[79622],{49148:function(e,t,n){n(67294);t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAtMTMgNDAgNDAiPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIgcng9IjUiLz48cGF0aCBzdHJva2U9IiMwMEIzOUYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMjggMTRMMTcgMjVMMTIgMjAiLz48L3N2Zz4="},70722:function(e,t,n){var i=n(67294),a=n(71082),r=n(85313).default.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-42m33g-0"})(["\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);t.Z=function(e){var t=e.contents,n=(0,i.useState)(null),o=n[0],l=n[1];return(0,i.useEffect)((function(){var e=window.location.pathname;l(e)}),[]),i.createElement(r,null,i.createElement("div",{className:"intra-page"},i.createElement("ul",null,t.map((function(e){return i.createElement("li",{key:e.id,className:"list"},i.createElement(a.Link,{to:""+o+e.link,key:e.id,activeClassName:"active"},e.text))})))))}},17875:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(67294),a=n(29499),r=n(71082),o=function(e){var t=e.canonical,n=e.description,o=e.image,l=e.schemaMarkup,m=e.title,c=e.children,s=(0,a.useLocation)().pathname,u=(0,r.useStaticQuery)("4047814605").site.siteMetadata,d=u.title,g=u.description,h=u.image,p=u.siteUrl,E=u.twitterUsername,y={title:m||d,description:n||g,image:""+p+(o||h),url:(""+p+(s.replace(".html","")||"")).replace(/\/$/,""),twitterUsername:E};return t||(t=y.url),i.createElement(i.Fragment,null,i.createElement("title",null,y.title),i.createElement("meta",{name:"description",property:"og:description",content:y.description}),i.createElement("meta",{name:"og:description",content:y.description}),i.createElement("meta",{name:"image",property:"og:image",content:y.image}),i.createElement("meta",{name:"og:image",content:y.image}),i.createElement("meta",{name:"og:title",content:y.title}),i.createElement("meta",{name:"og:url",content:y.url}),i.createElement("meta",{name:"url",property:"og:url",content:y.url}),i.createElement("meta",{name:"og:type",content:"website"}),i.createElement("meta",{name:"author",content:"Layer5, Inc."}),i.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.createElement("meta",{name:"twitter:title",content:y.title}),i.createElement("meta",{name:"twitter:url",content:y.url}),i.createElement("meta",{name:"twitter:description",content:y.description}),i.createElement("meta",{name:"twitter:image",content:y.image}),i.createElement("meta",{name:"twitter:creator",content:y.twitterUsername}),i.createElement("meta",{charSet:"utf-8"}),i.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.createElement("link",{rel:"shortcut icon",type:"image/x-icon",href:"data:image/webp;base64,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"}),i.createElement("link",{rel:"canonical",href:t}),l&&i.createElement("script",{type:"application/ld+json"},JSON.stringify(l)),c)};o.defaultProps={title:null,lang:"en",meta:[],description:"",image:null};var l=o},74892:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return h}});var i=n(67294),a=n(17875),r=n(6652),o=n(72606),l=n(90075),m=n(71082),c=n(49148),s=n(31992),u=n(70722),d=[{id:0,link:"#Community Guidelines",text:"Community Guidelines"},{id:1,link:"#Recognitions",text:"Recognition"},{id:2,link:"#Membership",text:"Membership to the github"},{id:3,link:"#Community_member_profile",text:"Community member profile"}],g=function(){return i.createElement(o.U,null,i.createElement("div",{className:"page-header-section"},i.createElement("h1",null,"Community")),i.createElement(l.Z,null),i.createElement("div",{className:"page-section"},i.createElement(r.W2,null,i.createElement("div",{className:"content"}," ",i.createElement("a",{id:"Community Guidelines"},i.createElement("h2",{id:"communityGuidelines"},"Community Guidelines")),i.createElement("p",null,"Welcome to the Layer5 community! We’re happy to have you here and handhold you for your first contribution. Here are some tips to help you get started:"),i.createElement("p",null,i.createElement("img",{className:"logo",src:c.Z,alt:"Point"}),i.createElement("strong",null,"For Easy Identification -")," When setting up your slack workspace, your display name should be the same as your GitHub username for easy identification, engage freely, and in whatever form you will: as a listener, user, contributor, maintainer, ambassador, or bystander. Involvement in any way is warmly received."),i.createElement("p",null,i.createElement("img",{className:"logo",src:c.Z,alt:"Point"}),i.createElement("strong",null,"Familiarize with the community -")," As you get to familiarize yourself with the community, know that there are multiple initiatives for you to explore. Some initiatives have working groups that meet at different times each week, while others use the weekly community meeting as their place of discussion. Details of each can be found on the"," ",i.createElement(m.Link,{to:"/community/calendar"},"community calendar"),". Everyone is welcome to join the calls and engage with other community members over Slack, the mailing list, and so on."),i.createElement("p",null,i.createElement("img",{className:"logo",src:c.Z,alt:"Point"}),i.createElement("strong",null,"Familiarize with the projects -")," The following is a sample of the many active, ongoing community projects. One way of doing so is to review the"," ",i.createElement(m.Link,{to:"/community/handbook/repository-overview"},"Layer5 Repository Overview")," ","section of this handbook to get a better understanding of each project. This document will help you to understand the projects based on their technology domain(s). Be sure to star the community’s ",i.createElement("a",{href:"https://github.com/layer5io"},"repositories")," ","on GitHub!"),i.createElement("p",null,i.createElement("img",{className:"logo",src:c.Z,alt:"Point"}),i.createElement("strong",null,"Be friendly and open-minded -")," We encourage you to be welcoming to new collaborators and those just getting started. Other contributors might not have the same degree of experience or background as you, but that doesn't mean they can't provide useful ideas."),i.createElement("p",null,i.createElement("img",{className:"logo",src:c.Z,alt:"Point"}),i.createElement("strong",null,"Be honest -")," “A half-truth is a whole lie.” Being truthful allows you to reach a better agreement. As a result, be open and honest about who you are, what you do, and how you want to accomplish it."),i.createElement("p",null,i.createElement("img",{className:"logo",src:c.Z,alt:"Point"}),i.createElement("strong",null,"Be respectful and inclusive -")," We are a diverse group of people with diverse backgrounds and opinions. We expect everyone to be civil and professional in their activities. Disrespectful behavior is not tolerated. Do not publish anything that would be considered insulting, abusive, or hate speech by a reasonable person."),i.createElement("p",null,i.createElement("img",{className:"logo",src:c.Z,alt:"Point"}),i.createElement("strong",null,"Collaborate and Contribute -")," Members are expected to attend community and workgroup meetings, find ways to help, check up on our Github page regularly etc. Within the community and outside, we encourage teamwork."),i.createElement("p",null,i.createElement("img",{className:"logo",src:c.Z,alt:"Point"}),i.createElement("strong",null,"Resources -")," Be sure to access the resources in the"," ",i.createElement("a",{href:"https://drive.google.com/drive/u/0/folders/0ABH8aabN4WAKUk9PVA"},"community drive")," ","and sign-up on the"," ",i.createElement("a",{href:"https://layer5.io/subscribe"},"community mailer"),". Ask for a copy of"," ",i.createElement("a",{href:"https://layer5.io/books/the-enterprise-path-to-service-mesh-architectures"},"The Enterprise Path to Service Mesh Architectures"),"."),i.createElement("p",null,"Please refer to the"," ",i.createElement(m.Link,{to:"/community/handbook/code-of-conduct"},"Code of Conduct")," ","for more details.")),i.createElement(s.Z,null)),i.createElement(u.Z,{contents:d})))},h=function(){return i.createElement(i.Fragment,null,i.createElement(g,null))},p=function(){return i.createElement(a.Z,{title:"Community",description:"Community guidelines"})}}}]);