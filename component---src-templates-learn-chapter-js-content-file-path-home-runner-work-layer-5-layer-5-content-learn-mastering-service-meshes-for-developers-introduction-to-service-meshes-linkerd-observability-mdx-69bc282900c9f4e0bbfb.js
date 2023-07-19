"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[49671],{42599:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return h}});var a=n(39626),r=n(67294),l=n.p+"static/emojivoto-tracing-729df381dac9379b0bcb3ea199eb935e.webp",o=n.p+"static/linkerd-jaeger-ui-9b6e7eeed00a7865da63f7ac695d1ac8.webp";function c(e){var t=Object.assign({p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,a.ah)(),e.components),n=t.ChapterStyle;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ChapterStyle",!0),r.createElement(n,null,r.createElement("h2",{className:"chapter-sub-heading"},"Linkerd Telemetry and Distributed Tracing"),r.createElement("br"),r.createElement("h3",{className:"chapter-sub-heading"},"Linkerd Telemetry"),r.createElement(t.p,null,"Linkerd's telemetry and monitoring features function automatically, without requiring any work on the part of the developer."),r.createElement(t.p,null,"We have already looked at Linkerd Telemetry, not by name but by concept. Using stat, top and tap is one of the major and characteristic feature which Linkerd offers out of the box. All of this metrics are also accessible through Grafana Dashboard which Linkerd provides."),r.createElement(t.p,null,"Expose Grafana dashboard:"),r.createElement(t.pre,null,r.createElement(t.code,{className:"language-sh"},"linkerd dashboard &\n")),r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Start ",r.createElement(t.code,null,"linkerd dashboard")," & navigate over the service you would want to see Grafana Dashboard for."),"\n",r.createElement(t.li,null,"In the last column, click of the ",r.createElement(t.code,null,"Grafana Icon")," to access the metrics dashboard for the following deployment."),"\n"),r.createElement("h3",{className:"chapter-sub-heading"},"Distributed tracing with Linkerd"),r.createElement(t.p,null,"Linkerd added support for Distributed Tracing, which means that if your application has enabled tracing based on B3 Propagation, Linkerd proxies would automatically recognize that (as the trace-id is propagated through http headers) and send their spans, provided that the proxies are configured regarding the meshed trace collector endpoint."),r.createElement(t.p,null,"To enable tracing onto your cluster :"),r.createElement(t.pre,null,r.createElement(t.code,{className:"language-sh"},"cat >> config.yaml << EOF\ntracing:\n  enabled: true\nEOF\n")),r.createElement(t.p,null,"This configuration file can also be used to apply Add-On configuration (not just specific to tracing Add-On)."),r.createElement(t.p,null,"Let us apply that configuration to the linkerd upgrade command using the --addon-config flag and pipe that output to kubectl apply."),r.createElement(t.pre,null,r.createElement(t.code,{className:"language-sh"},"linkerd upgrade --addon-config config.yaml | kubectl apply -f -\n")),r.createElement(t.p,null,"Before moving onto the next step, make sure everything is up and running with kubectl:"),r.createElement(t.pre,null,r.createElement(t.code,{className:"language-sh"},"kubectl -n linkerd rollout status deploy/linkerd-collector\nkubectl -n linkerd rollout status deploy/linkerd-jaeger\n")),r.createElement("h4",{className:"chapter-sub-heading"},"Configure your sample application"),r.createElement(t.p,null,"Apply the tracing configuration to the ",r.createElement(t.code,null,"emojivoto application"),":"),r.createElement(t.pre,null,r.createElement(t.code,{className:"language-sh"},"kubectl -n emojivoto patch -f https://run.linkerd.io/emojivoto.yml -p '\nspec:\n  template:\n    metadata:\n      annotations:\n        config.linkerd.io/trace-collector: linkerd-collector.linkerd:55678\n        config.alpha.linkerd.io/trace-collector-service-account: linkerd-collector\n'\n")),r.createElement(t.p,null,"Before moving onto the next step, make sure everything is up and running with kubectl:"),r.createElement(t.pre,null,r.createElement(t.code,{className:"language-sh"},"kubectl -n emojivoto rollout status deploy/web\n")),r.createElement(t.p,null,"The above command enables tracing in the linkerd proxies but the application containers still don’t have it enabled. Tracing can be enabled in the sample application can be enabled by"),r.createElement(t.p,null,"To enable tracing in emojivoto, run:"),r.createElement(t.pre,null,r.createElement(t.code,{className:"language-sh"}," kubectl -n emojivoto set env --all deploy OC_AGENT_HOST=linkerd-collector.linkerd:55678\n")),r.createElement("h3",{className:"chapter-sub-heading"},"Explore Jaeger"),r.createElement(t.p,null,"Now, you can port-forward the ",r.createElement(t.code,null,"linkerd-jaeger")," service to checkout the traces."),r.createElement(t.pre,null,r.createElement(t.code,{className:"language-sh"},"kubectl -n linkerd port-forward svc/linkerd-jaeger 16686:16686\n")),r.createElement(t.p,null,"Now let's explore traces of the ",r.createElement(t.code,null,"vote-bot")," endpoint:"),r.createElement("a",{href:l},r.createElement("img",{src:l,width:"100%",align:"center"})),r.createElement(t.p,null,"So, As you can see there are spans of the linkerd-proxy. For each request between two meshed components, you can see there are four linkerd-proxy spans."),r.createElement(t.p,null,"The first two spans would be the spans sent from the proxy of the client component and will be marked as outbound. Again, in these two spans, the first one is the span of the application -> proxy, and the second one is the proxy->otherside. They are differentiated by the server and client tags respectively."),r.createElement("br"),r.createElement("h3",{className:"chapter-sub-heading"}," Jaeger and Linkerd"),r.createElement("br"),r.createElement(t.p,null,"In Linkerd, as told above Grafana Integration is present in the ",r.createElement(t.code,null,"linkerd-web")," ui\nthrough which which you can directly jump onto the dashboards of any workload\nlike deployment, pod, etc."),r.createElement(t.p,null,"Linkerd has done similar thing with Jaeger, if you have ",r.createElement(t.code,null,"tracing")," enabled, if you navigate the Linkerd Dashboard, you should see a Jaeger icon on the right."),r.createElement("a",{href:o},r.createElement("img",{src:o,width:"100%",align:"center"})),r.createElement("h3",{className:"chapter-sub-heading"},"Cleanup the tracing components"),r.createElement(t.pre,null,r.createElement(t.code,{className:"language-sh"},"kubectl delete ns tracing emojivoto\n")))}var i=function(e){void 0===e&&(e={});var t=Object.assign({},(0,a.ah)(),e.components).wrapper;return t?r.createElement(t,e,r.createElement(c,e)):c(e)};var s=n(17875),d=n(5802),u=function(e){var t=e.data,n=e.location,a=t.TOC.nodes.sort((function(e,t){var n,a;return(null!==(n=e.frontmatter)&&void 0!==n&&n.order?e.frontmatter.order:100)-(null!==(a=t.frontmatter)&&void 0!==a&&a.order?t.frontmatter.order:100)}));return r.createElement(r.Fragment,null,r.createElement(d.Z,{chapterData:t.chapter,TOCData:a,courseData:t.course.nodes[0],location:n,serviceMeshesList:t.serviceMeshesList.nodes}))};function h(e){return r.createElement(u,e,r.createElement(i,e))}var p=function(e){var t=e.data;return r.createElement(s.Z,{title:t.chapter.frontmatter.chapterTitle,canonical:"https://layer5.io/learn/learning-paths"})}}}]);