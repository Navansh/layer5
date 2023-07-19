"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[32601],{1177:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m},default:function(){return u}});var a=n(39626),l=n(67294);function s(e){var t=Object.assign({p:"p",code:"code",pre:"pre",a:"a"},(0,a.ah)(),e.components),n=t.ChapterStyle;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ChapterStyle",!0),l.createElement(n,null,l.createElement(t.p,null,"The components deployed on the service mesh by default are not exposed outside the cluster. An Ingress Gateway is deployed as a Kubernetes service of type LoadBalancer (or NodePort). To make Bookinfo accessible external to the cluster, you have to create an ",l.createElement(t.code,null,"Istio Gateway")," for the Bookinfo application and also define an ",l.createElement(t.code,null,"Istio VirtualService")," with the routes we need."),l.createElement("br"),l.createElement("br"),l.createElement("h2",{className:"chapter-sub-heading"}," Inspecting the Istio Ingress Gateway"),l.createElement("br"),l.createElement(t.p,null,"The ingress gateway gets exposed as a normal Kubernetes service of type LoadBalancer\n(or NodePort):"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"kubectl get svc istio-ingressgateway -n istio-system -o yaml\n")),l.createElement(t.p,null,"Because the Istio Ingress Gateway is an Envoy Proxy you can inspect it using the admin routes. First find the name of the istio-ingressgateway:"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"kubectl get pods -n istio-system\n")),l.createElement(t.p,null,"Copy and paste your ingress gateway's pod name. Execute:"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"kubectl -n istio-system exec -it <istio-ingressgateway-...> bash\n")),l.createElement(t.p,null,"You can view the statistics, listeners, routes, clusters and server info for the Envoy proxy by forwarding the local port:"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"curl localhost:15000/help\ncurl localhost:15000/stats\ncurl localhost:15000/listeners\ncurl localhost:15000/clusters\ncurl localhost:15000/server_info\n")),l.createElement(t.p,null,"See the ",l.createElement(t.a,{href:"https://www.envoyproxy.io/docs/envoy/latest/operations/admin"},"admin docs")," for more details."),l.createElement(t.p,null,"Also it can be helpful to look at the log files of the Istio ingress controller to see what request is being routed."),l.createElement(t.p,null,"Before we check the logs, let us get out of the container back on the host:"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"exit\n")),l.createElement(t.p,null,"Now let us find the ingress pod and output the log:"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"kubectl logs istio-ingressgateway-... -n istio-system\n")),l.createElement("h2",{className:"chapter-sub-heading"},"View Istio Ingress Gateway for Bookinfo"),l.createElement("br"),l.createElement("h3",{className:"chapter-sub-heading"}," View the Gateway and VirtualServices"),l.createElement(t.p,null,"Check the created ",l.createElement(t.code,null,"Istio Gateway")," and ",l.createElement(t.code,null,"Istio VirtualService")," to see the changes deployed:"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"kubectl get gateway\nkubectl get gateway -o yaml\n\nkubectl get virtualservices\nkubectl get virtualservices -o yaml\n")),l.createElement("h3",{className:"chapter-sub-heading"},l.createElement(t.p,null,"Find the external port of the Istio Ingress Gateway by running:")),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"kubectl get service istio-ingressgateway -n istio-system -o wide\n")),l.createElement(t.p,null,"To just get the first port of istio-ingressgateway service, we can run this:"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"kubectl get service istio-ingressgateway -n istio-system --template='{{(index .spec.ports 1).nodePort}}'\n")),l.createElement("h3",{className:"chapter-sub-heading"}," Create a DNS entry:"),l.createElement(t.p,null,"Modify your local ",l.createElement(t.code,null,"/etc/hosts")," file to add an entry for your sample application."),l.createElement(t.p,null,l.createElement(t.code,null,"127.0.0.1. bookinfo.meshery.io")),l.createElement(t.p,null,"The HTTP port is usually 31380."),l.createElement(t.p,null,"Or run these commands to retrieve the full URL:"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},'echo "http://$(kubectl get nodes --selector=kubernetes.io/role!=master -o jsonpath={.items[0].status.addresses[?\\(@.type==\\"InternalIP\\"\\)].address}):$(kubectl get svc istio-ingressgateway -n istio-system -o jsonpath=\'{.spec.ports[1].nodePort}\')/productpage"\n')),l.createElement(t.p,null,"Docker Desktop users please use ",l.createElement(t.code,null,"http://localhost/productpage")," to access product page in your browser."),l.createElement("h2",{className:"chapter-sub-heading"}," Apply default destination rules"),l.createElement(t.p,null,"Before we start playing with Istio's traffic management capabilities we need to define the available versions of the deployed services. They are called subsets, in destination rules."),l.createElement(t.p,null,"Using Meshery, navigate to the Custom yaml page, and apply the below to create the subsets for BookInfo:"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"apiVersion: networking.istio.io/v1alpha3\nkind: DestinationRule\nmetadata:\n  name: productpage\nspec:\n  host: productpage\n  subsets:\n    - name: v1\n      labels:\n        version: v1\n---\napiVersion: networking.istio.io/v1alpha3\nkind: DestinationRule\nmetadata:\n  name: reviews\nspec:\n  host: reviews\n  subsets:\n    - name: v1\n      labels:\n        version: v1\n    - name: v2\n      labels:\n        version: v2\n    - name: v3\n      labels:\n        version: v3\n---\napiVersion: networking.istio.io/v1alpha3\nkind: DestinationRule\nmetadata:\n  name: ratings\nspec:\n  host: ratings\n  subsets:\n    - name: v1\n      labels:\n        version: v1\n    - name: v2\n      labels:\n        version: v2\n    - name: v2-mysql\n      labels:\n        version: v2-mysql\n    - name: v2-mysql-vm\n      labels:\n        version: v2-mysql-vm\n---\napiVersion: networking.istio.io/v1alpha3\nkind: DestinationRule\nmetadata:\n  name: details\nspec:\n  host: details\n  subsets:\n    - name: v1\n      labels:\n        version: v1\n    - name: v2\n      labels:\n        version: v2\n")),l.createElement(t.p,null,"This creates destination rules for each of the BookInfo services and defines version subsets"),l.createElement(t.p,null,"In a few seconds we should be able to verify the destination rules created by using the command below:"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"kubectl get destinationrules\n\n\nkubectl get destinationrules -o yaml\n")),l.createElement("h2",{className:"chapter-sub-heading"}," Browse to BookInfo"),l.createElement(t.p,null,"Browse to the website of the Bookinfo. To view the product page, you will have to append\n",l.createElement(t.code,null,"/productpage")," to the url."),l.createElement("h3",{className:"chapter-sub-heading"}," Reload Page"),l.createElement(t.p,null,"Now, reload the page multiple times and notice how it round robins between v1, v2 and v3 of the reviews service."),l.createElement("h2",{className:"chapter-sub-heading"},l.createElement(t.p,null,"Inspect the Istio proxy of the productpage pod")),l.createElement(t.p,null,"To better understand the istio proxy, let's inspect the details. Let us ",l.createElement(t.code,null,"exec")," into the productpage pod to find the proxy details. To do so we need to first find the full pod name and then ",l.createElement(t.code,null,"exec")," into the istio-proxy container:"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"kubectl get pods\nkubectl exec -it productpage-v1-... -c istio-proxy  sh\n")),l.createElement(t.p,null,"Once in the container look at some of the envoy proxy details by inspecting it's config file:"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"ps aux\nls -l /etc/istio/proxy\ncat /etc/istio/proxy/envoy-rev0.json\n")),l.createElement(t.p,null,"For more details on envoy proxy please check out their ",l.createElement(t.a,{href:"https://www.envoyproxy.io/docs/envoy/v1.5.0/operations/admin"},"admin docs"),"."),l.createElement(t.p,null,"As a last step, lets exit the container:"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"exit\n")),l.createElement("br"),l.createElement(t.p,null,l.createElement("h3",null,"Alternative: Manual installation"),"\nFollow this if the above steps did not work for you"),l.createElement("br"),l.createElement("br"),l.createElement("h4",{className:"chapter-alt-heading"}," Default destination rules"),l.createElement(t.p,null,"Run the following command to create default destination rules for the Bookinfo services:"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"kubectl apply -f samples/bookinfo/networking/destination-rule-all-mtls.yaml\n")),l.createElement("h4",{className:"chapter-alt-heading"},l.createElement(t.p,null,"Configure the Bookinfo route with the Istio Ingress gateway")),l.createElement(t.p,null,"We can create a virtualservice & gateway for bookinfo app in the ingress gateway by running the following:"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"kubectl apply -f samples/bookinfo/networking/bookinfo-gateway.yaml\n")))}var o=function(e){void 0===e&&(e={});var t=Object.assign({},(0,a.ah)(),e.components).wrapper;return t?l.createElement(t,e,l.createElement(s,e)):s(e)};var r=n(17875),c=n(5802),i=function(e){var t=e.data,n=e.location,a=t.TOC.nodes.sort((function(e,t){var n,a;return(null!==(n=e.frontmatter)&&void 0!==n&&n.order?e.frontmatter.order:100)-(null!==(a=t.frontmatter)&&void 0!==a&&a.order?t.frontmatter.order:100)}));return l.createElement(l.Fragment,null,l.createElement(c.Z,{chapterData:t.chapter,TOCData:a,courseData:t.course.nodes[0],location:n,serviceMeshesList:t.serviceMeshesList.nodes}))};function u(e){return l.createElement(i,e,l.createElement(o,e))}var m=function(e){var t=e.data;return l.createElement(r.Z,{title:t.chapter.frontmatter.chapterTitle,canonical:"https://layer5.io/learn/learning-paths"})}}}]);