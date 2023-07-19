"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[42940],{9025:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m},default:function(){return u}});var a=n(39626),l=n(67294);function r(e){var t=Object.assign({p:"p",ol:"ol",li:"li",code:"code",pre:"pre"},(0,a.ah)(),e.components),n=t.ChapterStyle;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ChapterStyle",!0),l.createElement(n,null,l.createElement(t.p,null,"In this chapter we will learn how to test the resiliency of an application by injecting systematic faults.\nBefore we start, we will need to reset the virtual services."),l.createElement(t.p,null,"Using Meshery, navigate to the Istio management page:"),l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Enter ",l.createElement(t.code,null,"default")," in the ",l.createElement(t.code,null,"Namespace")," field."),"\n",l.createElement(t.li,null,"Click the (+) icon on the ",l.createElement(t.code,null,"Apply Custom Configuration")," card and paste the configuration below."),"\n"),l.createElement(t.p,null,"Config:"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-yaml"},"apiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: reviews\nspec:\n  hosts:\n    - reviews\n  http:\n    - route:\n        - destination:\n            host: reviews\n            subset: v2\n")),l.createElement("h2",{className:"chapter-sub-heading"},l.createElement(t.p,null,"Inject a route rule to create a fault using HTTP delay")),l.createElement(t.p,null,"To start, we will inject a 7s delay for accessing the ratings service for a user ",l.createElement(t.code,null,"jason"),". reviews v2 service has a 10s hard-coded connection timeout for its calls to the ratings service configured globally."),l.createElement(t.p,null,"Using Meshery, navigate to the Istio management page:"),l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Enter ",l.createElement(t.code,null,"default")," in the ",l.createElement(t.code,null,"Namespace")," field."),"\n",l.createElement(t.li,null,"Click the (+) icon on the ",l.createElement(t.code,null,"Apply Custom Configuration")," card and paste the configuration below."),"\n"),l.createElement(t.p,null,"This will update the existing virtual service definition for ratings to inject a delay for user ",l.createElement(t.code,null,"jason")," to access the ratings V1."),l.createElement(t.p,null,"In a few, we should be able to verify the virtual service by using the command below:"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"kubectl get virtualservice ratings -o yaml\n")),l.createElement(t.p,null,"Config:"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-yaml"},"apiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: ratings\nspec:\n  hosts:\n    - ratings\n  http:\n    - fault:\n        delay:\n          fixedDelay: 7s\n          percentage:\n            value: 100\n      match:\n        - headers:\n            end-user:\n              exact: jason\n      route:\n        - destination:\n            host: ratings\n            subset: v1\n    - route:\n        - destination:\n            host: ratings\n            subset: v1\n")),l.createElement(t.p,null,"Now we login to ",l.createElement(t.code,null,"/productpage")," as user ",l.createElement(t.code,null,"jason")," and observe that the page loads but because of the induced delay between services the reviews section will show :"),l.createElement(t.p,null,l.createElement("b",null,"Error fetching product reviews!"),"\nSorry, product reviews are currently unavailable for this book."),l.createElement(t.p,null,"If you logout or login as a different user, the page should load normally without any errors."),l.createElement("h2",{className:"chapter-sub-heading"},l.createElement(t.p,null,"Inject a route rule to create a fault using HTTP abort")),l.createElement(t.p,null,"In this section, , we will introduce an HTTP abort to the ratings microservices for user ",l.createElement(t.code,null,"jason"),"."),l.createElement(t.p,null,"Using Meshery, navigate to the Istio management page:"),l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Enter ",l.createElement(t.code,null,"default")," in the ",l.createElement(t.code,null,"Namespace")," field."),"\n",l.createElement(t.li,null,"Click the (+) icon on the ",l.createElement(t.code,null,"Apply Custom Configuration")," card and paste the configuration below."),"\n"),l.createElement(t.p,null,"This will update the existing virtual service definition for ratings to inject a HTTP abort for user ",l.createElement(t.code,null,"jason")," to access the ratings V1."),l.createElement(t.p,null,"In a few, we should be able to verify the virtual service by using the command below:"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"kubectl get virtualservice ratings -o yaml\n")),l.createElement(t.p,null,"Config:"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-yaml"},"apiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: ratings\nspec:\n  hosts:\n    - ratings\n  http:\n    - fault:\n        abort:\n          httpStatus: 500\n          percentage:\n            value: 100\n      match:\n        - headers:\n            end-user:\n              exact: jason\n      route:\n        - destination:\n            host: ratings\n            subset: v1\n    - route:\n        - destination:\n            host: ratings\n            subset: v1\n")),l.createElement(t.p,null,"Now we login to ",l.createElement(t.code,null,"/productpage")," as user ",l.createElement(t.code,null,"jason")," and observe that the page loads without any new delays but because of the induced fault between services the reviews section will show:"),l.createElement(t.p,null,l.createElement(t.code,null,"Ratings service is currently unavailable"),"."),l.createElement("h3",{className:"chapter-sub-heading"}," Verify fault injection"),l.createElement(t.p,null,"Verify the fault injection by logging out (or logging in as a different user), the page should load normally without any errors."),l.createElement("br"),l.createElement(t.p,null,l.createElement("h3",null,"Alternative: Manual installation"),"\nFollow these steps if the above steps did not work"),l.createElement("br"),l.createElement("br"),l.createElement("h4",{className:"chapter-alt-heading"},l.createElement(t.p,null,"Route all traffic to version V1 of all services")),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"kubectl apply -f samples/bookinfo/networking/virtual-service-all-v1.yaml\n")),l.createElement("h4",{className:"chapter-alt-heading"},l.createElement(t.p,null,"Route all traffic to version V2 of reviews for user Jason")),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"kubectl apply -f samples/bookinfo/networking/virtual-service-reviews-test-v2.yaml\n")),l.createElement("h4",{className:"chapter-alt-heading"}," Inject 7s delay for ratings service"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"kubectl apply -f samples/bookinfo/networking/virtual-service-ratings-test-delay.yaml\n")),l.createElement("h4",{className:"chapter-alt-heading"}," Inject HTTP abort for ratings service"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"kubectl apply -f samples/bookinfo/networking/virtual-service-ratings-test-abort.yaml\n")))}var o=function(e){void 0===e&&(e={});var t=Object.assign({},(0,a.ah)(),e.components).wrapper;return t?l.createElement(t,e,l.createElement(r,e)):r(e)};var s=n(17875),c=n(5802),i=function(e){var t=e.data,n=e.location,a=t.TOC.nodes.sort((function(e,t){var n,a;return(null!==(n=e.frontmatter)&&void 0!==n&&n.order?e.frontmatter.order:100)-(null!==(a=t.frontmatter)&&void 0!==a&&a.order?t.frontmatter.order:100)}));return l.createElement(l.Fragment,null,l.createElement(c.Z,{chapterData:t.chapter,TOCData:a,courseData:t.course.nodes[0],location:n,serviceMeshesList:t.serviceMeshesList.nodes}))};function u(e){return l.createElement(i,e,l.createElement(o,e))}var m=function(e){var t=e.data;return l.createElement(s.Z,{title:t.chapter.frontmatter.chapterTitle,canonical:"https://layer5.io/learn/learning-paths"})}}}]);