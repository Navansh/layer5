(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[11959],{78705:function(e,t,n){var r=n(15301).w_;e.exports.O=function(e){return r({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm43.4 289.1c7.5 7.5 7.5 19.8 0 27.3-3.8 3.8-8.7 5.6-13.6 5.6s-9.9-1.9-13.7-5.7l-94-94.3c-6.9-7.6-6.7-19.3.6-26.6l95.4-95.7c7.5-7.5 19.7-7.6 27.3 0 7.5 7.5 7.6 19.7 0 27.3l-81.9 81 79.9 81.1z"}}]})(e)}},64705:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return g},default:function(){return f}});var r=n(39626),i=n(67294),a=n.p+"static/figure4-b49df4bd1d699885fe7f7f073699b675.webp",s=n.p+"static/figure3-c4cfa5061ca99e65b266a86cf034df08.webp",o=n.p+"static/figure2-ed0f303d08e482684a1c2a1a1f42b762.webp",l=n.p+"static/figure1-7719b25adc9e4247e1d7b19dd03fd9f4.webp";function c(e){var t=Object.assign({p:"p"},(0,r.ah)(),e.components),n=t.ResourcesWrapper,c=t.Link;return c||m("Link",!0),n||m("ResourcesWrapper",!0),i.createElement(n,null,i.createElement("div",{className:"intro"},i.createElement("p",null,"Learn more about service mesh fundamentals in ",i.createElement(c,{className:"blog",to:"/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition"},"The Enterprise Path to Service Mesh Archictures (2nd Edition)")," -  free book and excellent resource which addresses how to evaluate your organization’s readiness, provides factors to consider when building new applications and converting existing applications to best take advantage of a service mesh, and offers insight on deployment architectures used to get you there.")),i.createElement("p",null,i.createElement(t.p,null,"Service meshes provide visibility, resiliency, traffic, and security control of distributed application services.")),i.createElement("h3",null,"Observability"),i.createElement("p",null,i.createElement(t.p,null,"Many organisations are attracted to the uniform observability that service meshes provide. There is no such thing as a fully healthy complex system. Service-level  t elemetry sheds light on difficult-to-answer questions like why your requests are slow to respond. It's quite simple to figure out when a service is down, but figuring out where it's slow and why is a different story.")),i.createElement("p",null,i.createElement(t.p,null,"Service meshes allow both black-box (observing a system from the outside) and white-box (monitoring a system from the inside) monitoring of service-to-service communication. To provide white-box monitoring, some service meshes combine with a distributed tracing library. In contrast, other service meshes use protocol-specific filters as a capability of their proxies to provide a deeper level of visibility. The components of the data plane are well-positioned (transparently, in-band) to create metrics, logs, and traces, ensuring uniform and thorough observability across the mesh.")),i.createElement("div",{className:"center"},i.createElement("img",{src:l,align:"right",alt:"Istio Mixer"}),i.createElement("p",null,"Figure 1: Istio’s Mixer is capable of collecting multiple telemetric signals and sending those signals to backend monitoring, authentication, and quota systems via adapters")),i.createElement("p",null,"Service meshes centralize and assist in solving these observability challenges by providing the following:"),i.createElement("div",{className:"right"},i.createElement("img",{src:o,align:"right",alt:"Request Metrics"}),i.createElement("p",null,"Figure 2: Request metrics generated by Istio and visible in Meshery")),i.createElement("ul",null,i.createElement("li",null,i.createElement("strong",null,"Logging"),i.createElement("p",null,i.createElement(t.p,null,"Logs are used to baseline visibility for access requests to your entire fleet of services. Figure 1 illustrates how telemetry transmitted through service mesh logs include source and destination, request protocol, endpoint (URL), response time, size, and associated response code."))),i.createElement("li",null,i.createElement("strong",null,"Metrics"),i.createElement("p",null,i.createElement(t.p,null,"Metrics are used to eliminate the need for the development process to instrument code in order to emit metrics. When metrics are ubiquitous across your cluster, additional insights become available. Consistent metrics allow for things like autoscaling to be automated. Telemetry emitted by service mesh metrics include global request volume, global success rate, individual service responses by version, source and time."))),i.createElement("li",null,i.createElement("strong",null,"Tracing"),i.createElement("p",null,i.createElement(t.p,null,"Slow services (as opposed to services that simply fail) are the most difficult to debug without tracing. Imagine manually enumerating and tracking all of your service dependencies in a spreadsheet. Dependencies, request volumes, and failure rates are visualised using traces. Service meshes enable incorporating tracing functionality extremely simple with the help of automatically generated span identifiers. The mesh's individual services still must forward context headers.  Many application performance management (APM) solutions, on the other hand, need manual instrumentation to extract traces from your services.")))),i.createElement("h3",null,"Traffic control"),i.createElement("p",null,i.createElement(t.p,null,"Service meshes provide for granular, declarative control over network traffic, such as determining where a request should be routed to perform canary release. Circuit breaking, latency-aware load balancing, eventually consistent service discovery, timeouts, deadlines, and retries are all common resiliency features.")),i.createElement("p",null,i.createElement(t.p,null,"When a request does not return to the client within a certain amount of predefined time, a  ",i.createElement("strong",null,"timeout")," is used to terminate it. They provide a time restriction on how much time can be spent on an individual request and are enforced at a point after which a response is considered invalid. ",i.createElement("strong",null,"Deadlines")," are an advanced service mesh feature that helps minimise retry storms by facilitating feature-level timeouts rather than independent service timeouts. As a request travels through the mesh, deadlines deduct time remaining to handle it at each stage, propagating elapsed time with each downstream service call. \nTimeouts and deadlines might be considered enforcers of your Service-Level Objectives (SLOs).")),i.createElement("p",null,i.createElement(t.p,null,"You can choose to retry a request if a service times out or is unsuccessfully returned. Retrying the same call to a service that is already under water (retry three times = 300 percent additional service load) can make things worse. Retry budgets (aka maximum retries) offer the benefit of multiple tries but come with a limit to avoid overloading an already a load-challenged service. Some service meshes go even further to reduce client contention by using jitter and an exponential back-off algorithm to calculate the timing of the next retry attempt.")),i.createElement("div",{className:"left"},i.createElement("img",{src:s,align:"right",alt:"Deadlines"}),i.createElement("p",null,"Figure 3:Deadlines, not ubiquitously supported by different service meshes, set feature-level timeouts")),i.createElement("p",null,i.createElement(t.p,null,"You can choose to fail fast and disconnect the service, prohibiting calls to it, rather than retrying and putting more load to the service. ",i.createElement("strong",null,"Circuit breaking")," allows users to set configurable timeouts (or failure thresholds) to assure safe maximums and graceful failure, which is common for slow-responding services. When applications (services) are oversubscribed, using a service mesh as a distinct layer to implement circuit breaking minimises undue overhead.")),i.createElement("p",null,i.createElement(t.p,null,i.createElement("strong",null,"Rate limiting"),"(throttling) is implemented to ensure service stability. When requests by one client surge, the service continues to function smoothly for others. The rate limits are calculated over a period of time. You can also utilise various algorithms, such as a fixed or sliding window, a sliding log, etc. The purpose of rate limits is to ensure that your services are not oversubscribed.")),i.createElement("p",null,"When a limit is reached, well-implemented services commonly adhere to IETF RFC 6585, sending 429 Too Many Requests as the response code, including headers, such as the following, describing the request limit, number of requests remaining, and amount of time remaining until the request counter is reset:"),i.createElement("div",{className:"fact-left"},i.createElement("p",null,"X-RateLimit-Limit: 60"),i.createElement("p",null,"X-RateLimit-Remaining: 0"),i.createElement("p",null,"X-RateLimit-Reset: 1372016266")),i.createElement("p",null,i.createElement("strong",null,"Quota management")," (or conditional rate-limiting) accounts for requests based on business requirements instead of limiting rates based on operational concerns. It can be difficult to tell the difference between rate limiting and quota management because both features are handled by the same service mesh capability but are exposed to users in different ways."),i.createElement("p",null,i.createElement(t.p,null,"Configuring a policy setting a threshold for the number of client requests allowed to a service over time is the canonical example of quota management. User Lee, for example, is on the Free service plan and is allowed upto 10 requests per day. Quota policy imposes consumption limitations on services by keeping track of incoming requests in a distributed counter,often using an in-memory datastore like Redis  Conditional rate limits are a powerful service mesh capability when applied based on a user-defined set of arbitrary attributes.")),i.createElement("h3",null,"Security"),i.createElement("div",{className:"right"},i.createElement("img",{src:a,align:"right",alt:"Communication Paths"}),i.createElement("p",null,"Figure 4: An example of service mesh architecture. Secure communication paths in Istio")),i.createElement("p",null,i.createElement(t.p,null,"For securing service-to-service communication, most service meshes include a certificate authority that manages keys and certificates. Certificates are generated for each service and serve as the service's unique identifier. When sidecar proxies are employed, they assume the identity of the service and perform lifecycle management of certificates (creation, distribution, refresh, and revocation) on its behalf.   Local TCP connections are often established between the service and the sidecar proxy, whereas mutual Transport Layer Security (mTLS) connections are typically established between proxies in sidecar proxy deployments.")),i.createElement("p",null,i.createElement(t.p,null,"Internal traffic within your application should be encrypted as a matter of security. The service calls in your application are no longer contained within a single monolith via localhost; they are now exposed over the network. Allowing service calls without TLS on the transport is a recipe for disaster in terms of security. When two mesh-enabled services communicate, they have strong cryptographic proof of their peers.   After identities have been established, they are used to create access control policies that determine whether or not a request should be serviced. Policy controls configuration of the key management system (e.g., certificate refresh interval) and operational access control are used to determine whether a request is accepted, based on service mesh employed. Approved and unapproved connection requests, as well as more granular access control parameters like time of day, are identified using white and blacklists.")),i.createElement("h3",null,"Delay and fault injection"),i.createElement("p",null,i.createElement(t.p,null,"It's important to accept that your networks and/or systems will fail. Why not introduce failure and verify behaviour ahead of time? As proxies sit in line to service traffic, they frequently support protocol-specific fault injection, which allows you to configure the percentage of requests that should be subjected to faults or network delays. For example, generating HTTP 500 errors might be used to test the robustness of your distributed application's response behaviour.")),i.createElement("p",null,i.createElement(t.p,null,"Injecting latency into requests without a service mesh is a time-consuming procedure, but it is probably a more prevalent problem encountered during  operation of an application. Users are far more irritated by slow replies that result in an HTTP 503 after a minute of waiting than by a 503 after a few seconds. The finest element of these resilience testing capabilities is that no application code needs to be changed to make these tests possible. The results of the tests, on the other hand, may prompt you to make changes to the application code.")),i.createElement("p",null,i.createElement(t.p,null,"Using a service mesh, developers spend far less time creating code to cope with infrastructure issues—code that could be commoditized by service meshes in the future. The separation of service and session-layer concerns from application code is manifested as a phenomenon I refer to as decoupling at Layer 5.")),i.createElement("p",null,i.createElement(t.p,null,"A service mesh can be regarded of as surfacing the OSI model's session layer as a separately addressable, first-class citizen in your modern architecture. They are a secret weapon of cloud native systems, waiting to be exploited as a highly configurable work horse.")))}var u=function(e){void 0===e&&(e={});var t=Object.assign({},(0,r.ah)(),e.components).wrapper;return t?i.createElement(t,e,i.createElement(c,e)):c(e)};function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var d=n(17875),h=n(72417),p=function(e){var t=e.data,n=e.children;return i.createElement(i.Fragment,null,i.createElement(h.Z,{data:t},n))};function f(e){return i.createElement(p,e,i.createElement(u,e))}var g=function(e){var t=e.data;return i.createElement(d.Z,{title:t.mdx.frontmatter.title,image:t.mdx.frontmatter.thumbnail.publicURL})}},72417:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(67294),i=n(71082),a=n(40156),s=n(6652),o=n(33754),l=n(85313).default.div.withConfig({displayName:"resourceSinglestyle__ResourcePageWrapper",componentId:"sc-gfz8rr-0"})(["\n    color: ",";\n    .single-resource-wrapper{\n        margin-bottom: 4rem;\n\n        h3 {\n            text-align: center;\n        }\n    }\n\n    .resource-info-block{\n        margin-top: 3rem;\n        border-bottom: 1px solid ",";\n        padding-bottom: 2rem;\n    }\n    p {\n        color: ",";\n    }\n    li {\n        color: ",";\n    }\n    .backBtn {\n        margin: 3rem auto;\n        font-weight: 600;\n        z-index: 2;\n\n        @media screen and (max-width: 62rem) {\n            display: none;\n        }\n        a{\n            display: flex;\n            color: ",";\n            &:hover{\n                color: ",";\n            }\n\n            h4 {\n                line-height: 1.75rem;\n                margin-left: 0.5rem;\n            }\n            svg {\n                font-size: 1.75rem;\n            }\n        }\n    }\n\n    .tags{\n        display: flex;\n        span{\n            font-size: 1.2rem;\n            align-self: center;\n        }\n        a{\n            color: ",";\n            margin: 0.2rem;\n            display: inline-block;\n            padding: 0.3rem 0.8rem;\n            border-radius: 0.2rem;\n            background: #F0F0F0;\n            transition: all 0.3s linear;\n            &:hover{\n                background: ",";\n                color: ",";\n            }\n        }\n        div{\n            display: inline-flex;\n            flex-wrap: wrap;\n        }\n    }\n    @media screen and (max-width: 360px){\n        .tags{\n            span{\n                position: relative;\n                top: 0.5rem;\n                align-self: flex-start;\n            }\n        }\n    }\n"],(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.linkColor}),(function(e){return e.theme.black}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.white})),c=n(75472),u=n.n(c),m=n(64721),d=n.n(m);function h(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=function(){function e(e,t){this.resources=e.filter((function(e){return e.fields.slug!==t})),this.currentResourceSlug=t,this.maxResources=6,this.category=null,this.tags=[]}var t=e.prototype;return t.setMaxResources=function(e){return this.maxResources=e,this},t.setCategory=function(e){return this.category=e,this},t.setTags=function(e){return this.tags=e,this},t.getResources=function(){var e=this.category,t=this.tags,n=this.resources,r=this.maxResources,i={};if(!1==!!t||0===t.length)return console.error("RelatedResourcesFactory: Tags not provided, use setTags()."),[];if(!1==!!e)return console.error("RelatedResourcesFactory: Category not provided, use setCategory()."),[];for(var a,s=function(e){return e.fields.slug},o=function(e){var t=s(e);Object.prototype.hasOwnProperty.call(i,t)||(i[t]={resource:e,points:0})},l=function(e,t){var n=s(e);e.frontmatter.category===t&&(i[n].points+=2)},c=function(e,t){var n=s(e);e.frontmatter.tags.forEach((function(e){d()(t,e)&&(i[n].points+=1)}))},m=h(n);!(a=m()).done;){var p=a.value;o(p),l(p,e),c(p,t)}var f=Object.keys(i).map((function(e){return i[e]}));return u()(f,["points"],["desc"]).splice(0,r)},e}(),g=n(78705),v=(0,a.ZP)((function(){return n.e(35575).then(n.bind(n,59434))})),y=(0,a.ZP)((function(){return Promise.all([n.e(40532),n.e(67326),n.e(18514)]).then(n.bind(n,24210))})),b=function(e){var t=e.data,n=e.children,a=t.mdx,c=a.frontmatter,u=a.fields,m=(0,i.useStaticQuery)("2848499768").allMdx.nodes,d=new f(m,u.slug).setMaxResources(6).setCategory(c.category).setTags(c.tags).getResources();return r.createElement(l,null,r.createElement(o.Z,{title:c.title,subtitle:c.subtitle,thumbnail:c.thumbnail}),r.createElement("div",{className:"single-resource-wrapper"},r.createElement(s.W2,null,n,r.createElement(v,{category:"MeshMap"}),r.createElement("div",{className:"backBtn"},r.createElement(i.Link,{to:"/resources"},r.createElement(g.O,null),r.createElement("h4",null,"All Resources"))),r.createElement(y,{resourceType:"resources",relatedResources:d,mainHead:"Related Resources",lastCardHead:"All Resources",linkToAllItems:"/resources"}))))}}}]);