(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[8113],{96371:function(e,n,a){"use strict";var t=a(19756),r=a(67294),l=(a(25444),a(62347));n.Z=function(e){var n=e.childImageSharp,a=e.extension,m=e.publicURL,i=e.alt,c=(0,t.Z)(e,["childImageSharp","extension","publicURL","alt"]);return n||"svg"!==a?r.createElement(l.G,Object.assign({image:n.gatsbyImageData},c,{alt:i})):r.createElement("div",{className:"old-gatsby-image-wrapper"},r.createElement("img",{src:m,alt:i}))}},90966:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return v}});var t=a(67294),r=a(70456),l=a(20092),m=a(36179),i=a(97264),c=r.ZP.div.withConfig({displayName:"learnlayer5style__LearnLayer5GridWrapper",componentId:"sc-1qfc530-0"})(["\n    .page-header-section {\n        height: 15rem;\n        text-align: center;\n        background: rgb(71,126,150);\n        background: linear-gradient(250deg, rgba(71,126,150,1) 0%, rgba(0,179,159,1) 35%, rgba(60,73,79,1) 100%);\n        h1 {\n            line-height: 15rem;\n            color: white;\n        }\n    }\n"]),s=r.ZP.div.withConfig({displayName:"learnlayer5style__CardComponentWrapper",componentId:"sc-1qfc530-1"})(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 8rem 4rem;\n    .learning-paths{\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        padding: 2rem;\n        margin: 2rem;\n    }\n    .card-parent{\n        border-radius: 2rem;\n    }\n    .link-a{\n        color: black;\n    }\n\n    .card-head{\n        display: flex;\n        padding: 1rem;\n        span{\n            background-color: white;\n            border-radius : 1rem;\n            padding: 0 0.6rem;\n            font-size:0.8rem;\n        }\n\n    }\n\n    .card-head-desc{\n        padding: 0 1rem;\n        p{\n            font-size: 1rem;\n        }\n    \n    }\n    .card-image{\n        text-align: center;\n        \n        img{\n            min-height: 150px;\n            max-width: 150px;\n            padding: 1rem;\n        }\n    }\n    @media(max-width:1300px){\n        .learning-paths{\n            \n            padding: 2rem 1rem;\n            margin: 2rem 1rem;\n        }\n    }\n    @media(max-width:1100px){\n        .learning-paths{\n            grid-template-columns: 1fr 1fr;\n            padding: 2rem 0rem;\n            margin: 2rem 0rem;\n        }\n    }\n    @media(max-width:760px){\n        padding: 8rem 1rem;\n        .learning-paths{\n            grid-template-columns: 1fr;\n            padding: 2rem 0rem;\n            margin: 2rem 0rem;\n        }\n     \n    }\n\n"]),d=a(25444),o=r.ZP.div.withConfig({displayName:"learn-cardstyle__CardWrapper",componentId:"ka8159-0"})(["\n    max-width:350px;\n    margin: 0 1rem;\n    border-radius: 1rem;\n    @media(max-width: 1300px){\n        margin: 1rem;\n    }\n    @media(max-width: 760px){\n        margin: 1rem 0;\n    }\n"]),p=a(96371),g=function(e){var n=e.tutorial;return t.createElement(o,null,t.createElement(d.Link,{to:n.fields.learnpath,className:"link-a"},t.createElement("div",{style:{backgroundColor:n.frontmatter.themeColor},className:"card-parent"},t.createElement("div",null,t.createElement("div",{className:"card-head"},t.createElement("h3",null,n.frontmatter.title),n.frontmatter.status?t.createElement("p",null,t.createElement("span",null,"New")):null),t.createElement("div",{className:"card-head-desc"},t.createElement("p",null,n.frontmatter.description),t.createElement("p",null,n.frontmatter.learningPaths," learning paths"))),t.createElement("div",{className:"card-image"},t.createElement(p.Z,Object.assign({},n.frontmatter.cardImage,{alt:n.frontmatter.title}))))))},h=r.ZP.div.withConfig({displayName:"learninfostyle__InfoWrapper",componentId:"bniu9s-0"})(["\n\n  margin: 0 auto;\n  padding-bottom: 3.5rem;\n\n  .info-row {\n    margin: auto;\n    .col {\n      p {\n        color: rgba(0, 0, 0, 0.7);\n        margin: 1rem auto;\n      }\n\n      @media screen and (max-width: 992px) {\n        margin: 1rem auto;\n      }\n      @media screen and (max-width: 992px) {\n        text-align: center;\n      }\n    }\n  }\n"]),u=a(57067),E=function(){return t.createElement(h,null,t.createElement(u.X2,{className:"info-row"},t.createElement(u.JX,{xs:12,sm:6,lg:4},t.createElement("h2",null,"4 courses"),t.createElement("p",null,"Learning the service mesh the right way. From the best learing paths by the experts at Layer5 and learn how to mesh.")),t.createElement(u.JX,{xs:12,sm:6,lg:4},t.createElement("h2",null,"24 chapters"),t.createElement("p",null,"Learning the service mesh the right way. From the best learing paths by the experts at Layer5 and learn how to mesh.")),t.createElement(u.JX,{xs:12,sm:6,lg:4},t.createElement("h2",null,"12 service meshes available."),t.createElement("p",null,"Istio, Kuma, NSM, Linkerd, Consul"))))},f=function(){var e=(0,d.useStaticQuery)("582959393");return t.createElement(c,null,t.createElement(s,null,t.createElement("div",null,t.createElement("h1",null,"Learning Paths"),t.createElement("div",{className:""},t.createElement("p",null,"Learn how to service mesh.Learn how to run"),t.createElement("p",null,"Meshery, install Istio and deploy a sample app"))),t.createElement("div",{className:"learning-paths"},e.allMdx.nodes.map((function(e,n){return t.createElement(g,{tutorial:e,key:n})})))),t.createElement(E,null))},x=a(68812),y=a(97956),b=a(38155),v=function(){return t.createElement(r.f6,{theme:b.Z},t.createElement(l.Z,null,t.createElement(y.Z,null),t.createElement(m.Z,{title:"Learn to Service Mesh",description:"Learn Service Meshes: Istio, Linkerd, Envoy, Consul, Maesh, Kuma, App Mesh, Citrix, Tanzu Service Mesh",image:"/images/workshops.png"}),t.createElement(i.Z,null),t.createElement(f,null),t.createElement(x.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-learn-ng-js-a8e2f9464f044fc0ab46.js.map