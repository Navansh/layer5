"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[16259],{41014:function(e,t,n){n.r(t),n.d(t,{Head:function(){return h},default:function(){return m}});var a=n(39626),r=n(67294),l=n.p+"static/meshery_initial_load_test-c6073960354f300204944cda56099c66.webp",c=n.p+"static/meshery_cb_load_test-543e3861787517cc87ab1ddb026ee07f.webp";function o(e){var t=Object.assign({p:"p",code:"code",strong:"strong",a:"a",ol:"ol",li:"li",pre:"pre"},(0,a.ah)(),e.components),n=t.ChapterStyle;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ChapterStyle",!0),r.createElement(n,null,r.createElement(t.p,null,"In this chapter we will configure circuit breaking using Istio. Circuit breaking allows developers to write applications that limit the impact of failures, latency spikes, and other undesirable effects of network peculiarities. This task will show how to configure circuit breaking for connections, requests, and outlier detection."),r.createElement("h2",{className:"chapter-sub-heading"},"Preparing for circuit breaking"),r.createElement("br"),r.createElement(t.p,null,"Before we can configure circuit breaking, please try to access the ",r.createElement(t.code,null,"product page")," app from within ",r.createElement(t.code,null,"Meshery")," to ensure all the calls are making it through ",r.createElement(t.strong,null,"without")," errors as we did in ",r.createElement(t.a,{href:"observability"},"Observability chapter")," (",r.createElement("a",{href:l},"see screenshot"),")."),r.createElement("h2",{className:"chapter-sub-heading"}," Configure circuit breaking"),r.createElement("br"),r.createElement(t.p,null,"Now that we have the needed services in place, it is time to configure circuit breaking\nusing a destination rule."),r.createElement(t.p,null,"Using Meshery, navigate to the Istio management page:"),r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"Enter ",r.createElement(t.code,null,"default")," in the ",r.createElement(t.code,null,"Namespace")," field."),"\n",r.createElement(t.li,null,"Click the (+) icon on the ",r.createElement(t.code,null,"Apply Custom Configuration")," card and paste the configuration below."),"\n"),r.createElement("p",null,r.createElement(t.p,null,"Manual step for can be found ",r.createElement("a",{href:"#appendix"},"here"))),r.createElement(t.p,null,"This will update the existing destination rule definition for product page service to break the circuit if there are more than one connection and more than one pending request."),r.createElement(t.p,null,"In a few, we should be able to verify the destination rule by using the command below:"),r.createElement(t.pre,null,r.createElement(t.code,{className:"language-sh"},"kubectl get destinationrule productpage -o yaml\n")),r.createElement(t.p,null,"Config:"),r.createElement(t.pre,null,r.createElement(t.code,{className:"language-yaml"},"apiVersion: networking.istio.io/v1alpha3\nkind: DestinationRule\nmetadata:\n  name: productpage\nspec:\n  host: productpage\n  subsets:\n    - /obserlabels:\n        version: v1\n      name: v1\n  trafficPolicy:\n    connectionPool:\n      http:\n        http1MaxPendingRequests: 1\n        maxRequestsPerConnection: 1\n      tcp:\n        maxConnections: 1\n    outlierDetection:\n      baseEjectionTime: 3m\n      consecutiveErrors: 1\n      interval: 1s\n      maxEjectionPercent: 100\n    tls:\n      mode: ISTIO_MUTUAL\n")),r.createElement("h2",{className:"chapter-sub-heading"}," Time to trip the circuit"),r.createElement("br"),r.createElement(t.p,null,"In the circuit-breaker settings, we specified maxRequestsPerConnection: 1 and http1MaxPendingRequests:"),r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"This should mean that if we exceed more than one request per connection and more\nthan one pending request, we should see the istio-proxy sidecar open the circuit\nfor further requests/connections."),"\n"),r.createElement(t.p,null,"Let us now use Meshery to make several calls to ",r.createElement(t.code,null,"product page")," app by changing the number of concurrent connections to 5 from within Meshery's Performance page."),r.createElement(t.p,null,"Once you have updated the fields, you now click on ",r.createElement(t.code,null,"Run Test"),"."),r.createElement(t.p,null,"This will run the load test and show the results in a chart. (",r.createElement("a",{href:c}," see screenshot "),")."),r.createElement(t.p,null,"You should only see a percentage of the requests succeed and the rest trapped by the configured circuit breaker."),r.createElement("br"),r.createElement("h2",null," ",r.createElement(t.p,null,r.createElement("a",{name:"appendix"})," Manual Steps")),r.createElement("h3",{className:"chapter-alt-heading"}," Configure circuit breaking"),r.createElement(t.pre,null,r.createElement(t.code,{className:"language-sh"},"kubectl apply -f - <<EOF\napiVersion: networking.istio.io/v1alpha3\nkind: DestinationRule\nmetadata:\n  name: productpage\nspec:\n  host: productpage\n  subsets:\n  - labels:\n      version: v1\n    name: v1\n  trafficPolicy:\n    tls:\n      mode: ISTIO_MUTUAL\n    connectionPool:\n      tcp:\n        maxConnections: 1\n      http:\n        http1MaxPendingRequests: 1\n        maxRequestsPerConnection: 1\n    outlierDetection:\n      consecutiveErrors: 1\n      interval: 1s\n      baseEjectionTime: 3m\n      maxEjectionPercent: 100\nEOF\n")))}var i=function(e){void 0===e&&(e={});var t=Object.assign({},(0,a.ah)(),e.components).wrapper;return t?r.createElement(t,e,r.createElement(o,e)):o(e)};var s=n(17875),u=n(5802),p=function(e){var t=e.data,n=e.location,a=t.TOC.nodes.sort((function(e,t){var n,a;return(null!==(n=e.frontmatter)&&void 0!==n&&n.order?e.frontmatter.order:100)-(null!==(a=t.frontmatter)&&void 0!==a&&a.order?t.frontmatter.order:100)}));return r.createElement(r.Fragment,null,r.createElement(u.Z,{chapterData:t.chapter,TOCData:a,courseData:t.course.nodes[0],location:n,serviceMeshesList:t.serviceMeshesList.nodes}))};function m(e){return r.createElement(p,e,r.createElement(i,e))}var h=function(e){var t=e.data;return r.createElement(s.Z,{title:t.chapter.frontmatter.chapterTitle,canonical:"https://layer5.io/learn/learning-paths"})}}}]);