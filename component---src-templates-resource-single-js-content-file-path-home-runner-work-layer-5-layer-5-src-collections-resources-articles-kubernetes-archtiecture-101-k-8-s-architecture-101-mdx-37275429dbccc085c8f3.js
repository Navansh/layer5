(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[80121],{78705:function(e,t,n){var r=n(15301).w_;e.exports.O=function(e){return r({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm43.4 289.1c7.5 7.5 7.5 19.8 0 27.3-3.8 3.8-8.7 5.6-13.6 5.6s-9.9-1.9-13.7-5.7l-94-94.3c-6.9-7.6-6.7-19.3.6-26.6l95.4-95.7c7.5-7.5 19.7-7.6 27.3 0 7.5 7.5 7.6 19.7 0 27.3l-81.9 81 79.9 81.1z"}}]})(e)}},23859:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return h},default:function(){return d}});var r=n(39626),a=n(67294),o=n.p+"static/kubernetes-highlevel-architecture-e67b1567993f4dff8ff0987ac89ac90d.webp";function s(e){var t=Object.assign({p:"p",h1:"h1",h2:"h2",h3:"h3",h4:"h4",pre:"pre",code:"code"},(0,r.ah)(),e.components),n=t.ResourcesWrapper;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ResourcesWrapper",!0),a.createElement(n,null,a.createElement(t.p,null,"The way Kubernetes is architected is what makes it powerful. Kubernetes has a basic client and server architecture, but it goes way beyond that. Kubernetes has the ability to do rolling updates, it also adapts to additional workloads by auto scaling nodes if it needs to and it can also self-heal in the case of a pod meltdown. These innate abilities provide developers and operations teams with a huge advantage in that your applications will have little to no down time. In this section we provide a brief overview of the master and its worker nodes with a high level overview of how Kubernetes manages workloads."),a.createElement("div",{className:"right"},a.createElement("img",{src:o,alt:"Simple Kubernetes Architecture Diagram"}),a.createElement("i",null,"Simple Kubernetes Architecture Diagram")),a.createElement(t.h1,null,"Kubernetes Components"),a.createElement(t.p,null,"Let's dive into each of the Kubernetes components, starting with the Master node."),a.createElement(t.h2,null,"Kubernetes Master"),a.createElement(t.p,null,"The Kubernetes master is the primary control unit for the cluster. The master is responsible for managing and scheduling the workloads in addition to the networking and communications across the entire cluster. The master node is responsible for the management of Kubernetes cluster. This is the entry point of all administrative tasks. The master node is the one taking care of orchestrating the worker nodes, where the actual services are running."),a.createElement(t.p,null,"These are the components that run on the master:"),a.createElement(t.h3,null,"Etcd Storage"),a.createElement(t.p,null,"Etcd is an open-source key-value data store that can be accessed by all nodes in the cluster. It stores configuration data of the cluster’s state. etcd is a simple, distributed, consistent key-value store. It’s mainly used for shared configuration and service discovery."),a.createElement(t.p,null,"It provides a REST API for CRUD operations as well as an interface to register watchers on specific nodes, which enables a reliable way to notify the rest of the cluster about configuration changes."),a.createElement(t.p,null,"An example of data stored by Kubernetes in etcd is jobs being scheduled, created and deployed, pod/service details and state, namespaces and replication information, etc."),a.createElement(t.h3,null,"Kube-API-Server"),a.createElement(t.p,null,"Kube-API-Server manages requests from the worker nodes, and it receives REST requests for modifications, and serves as a front-end to control cluster. The API server is the entry points for all the REST commands used to control the cluster. It processes the REST requests, validates them, and executes the bound business logic. The result state has to be persisted somewhere, and that brings us to the next component of the master node."),a.createElement(t.h3,null,"Kube-scheduler"),a.createElement(t.p,null,"Kube-scheduler schedules the pods on nodes based on resource utilization and also decides where services are deployed. The deployment of configured pods and services onto the nodes happens thanks to the scheduler component. The scheduler has the information regarding resources available on the members of the cluster, as well as the ones required for the configured service to run and hence is able to decide where to deploy a specific service."),a.createElement(t.h3,null,"Kube-controller-manager"),a.createElement(t.p,null,"Kube-controller-manager runs a number of distinct controller processes in the background to regulate the shared state of the cluster and perform routine tasks. When there is a change to a service, the controller recognizes the change and initiates an update to bring the cluster up to the desired state. Optionally you can run different kinds of controllers inside the master node. controller-manager is a daemon embedding those."),a.createElement(t.p,null,"A controller uses apiserver to watch the shared state of the cluster and makes corrective changes to the current state to change it to the desired one.\nAn example of such a controller is the Replication controller, which takes care of the number of pods in the system. The replication factor is configured by the user, and it's the controller’s responsibility to recreate a failed pod or remove an extra-scheduled one. Other examples of controllers are endpoints controller, namespace controller, and serviceaccounts controller, but we will not dive into details here."),a.createElement(t.h2,null,"Worker Nodes"),a.createElement(t.p,null,"These nodes run the workloads according the schedule provided by the master. The interaction between the master and worker nodes are what’s known as the control plane. The pods are run here, so the worker node contains all the necessary services to manage the networking between the containers, communicate with the master node, and assign resources to the containers scheduled."),a.createElement(t.h3,null,"Kubelet"),a.createElement(t.p,null,"Kubelet ensures that all containers in the node are running and are in a healthy state.  If a node fails, a replication controller observes this change and launches pods on another healthy pod. Integrated into the kubelet binary is ‘cAdvisor` that auto-discovers all containers and collects CPU, memory, file system, and network usage statistics and also provides machine usage stats by analyzing the ‘root’ container."),a.createElement(t.p,null,"Kubelet gets the configuration of a pod from the apiserver and ensures that the described containers are up and running. This is the worker service that’s responsible for communicating with the master node. It also communicates with etcd, to get information about services and write the details about newly created ones."),a.createElement(t.h3,null,"Kube Proxy"),a.createElement(t.p,null,"Kube Proxy acts as a network proxy and a load balancer for a service on a single worker node. . It takes care of the network routing for TCP and UDP packets. It forwards the request to the correct pods across isolated networks in a cluster."),a.createElement(t.h3,null,"Pods"),a.createElement(t.p,null,"A pod is the basic building block on Kubernetes. It represents the workloads that get deployed. Pods are generally collections of related containers, but a pod may also only have one container. A pod shares network/storage and also a specification for how to run the containers."),a.createElement(t.h3,null,"Containers"),a.createElement(t.p,null,"Containers are the lowest level of microservice. These are placed inside of the pods and need external IP addresses to view any outside processes. Docker is not the only supported container runtime, but is by far, the most popular. Docker runs on each of the worker nodes, and runs the configured pods. It takes care of downloading the images and starting the containers."),a.createElement(t.h3,null,"kubectl"),a.createElement(t.p,null,"Kubectl is a command line tool to communicate with the API service and send commands to the master node. kubectl must be configured to communicate with your cluster. If you have multiple clusters, you might try using kubectx, which makes switching between contexts easy."),a.createElement(t.h4,null,"Managing objects with kubectl"),a.createElement(t.p,null,"You can divide a Kubernetes cluster into multiple environments by using namespaces (e.g., Dev1, Dev2, QA1, QA2, etc.), and each environment can be managed by a different user. One of the inconveniences of writing kubectl commands is that every time you write a command, you need the --namespace option at the end. People often forget this and end up creating objects (pods, services, deployments) in the wrong namespace."),a.createElement(t.p,null,"With this trick, you can set the namespace preference before running kubectl commands. Run the following command before executing the kubectl commands, and it will save the namespace for all subsequent kubectl commands for your current context:"),a.createElement(t.pre,null,a.createElement(t.code,null,"kubectl config set-context $(kubectl config current-context) --namespace=mynamespace\n")))}var i=function(e){void 0===e&&(e={});var t=Object.assign({},(0,r.ah)(),e.components).wrapper;return t?a.createElement(t,e,a.createElement(s,e)):s(e)};var l=n(17875),c=n(72417),u=function(e){var t=e.data,n=e.children;return a.createElement(a.Fragment,null,a.createElement(c.Z,{data:t},n))};function d(e){return a.createElement(u,e,a.createElement(i,e))}var h=function(e){var t=e.data;return a.createElement(l.Z,{title:t.mdx.frontmatter.title,image:t.mdx.frontmatter.thumbnail.publicURL})}},72417:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(67294),a=n(71082),o=n(40156),s=n(6652),i=n(33754),l=n(85313).default.div.withConfig({displayName:"resourceSinglestyle__ResourcePageWrapper",componentId:"sc-gfz8rr-0"})(["\n    color: ",";\n    .single-resource-wrapper{\n        margin-bottom: 4rem;\n\n        h3 {\n            text-align: center;\n        }\n    }\n\n    .resource-info-block{\n        margin-top: 3rem;\n        border-bottom: 1px solid ",";\n        padding-bottom: 2rem;\n    }\n    p {\n        color: ",";\n    }\n    li {\n        color: ",";\n    }\n    .backBtn {\n        margin: 3rem auto;\n        font-weight: 600;\n        z-index: 2;\n\n        @media screen and (max-width: 62rem) {\n            display: none;\n        }\n        a{\n            display: flex;\n            color: ",";\n            &:hover{\n                color: ",";\n            }\n\n            h4 {\n                line-height: 1.75rem;\n                margin-left: 0.5rem;\n            }\n            svg {\n                font-size: 1.75rem;\n            }\n        }\n    }\n\n    .tags{\n        display: flex;\n        span{\n            font-size: 1.2rem;\n            align-self: center;\n        }\n        a{\n            color: ",";\n            margin: 0.2rem;\n            display: inline-block;\n            padding: 0.3rem 0.8rem;\n            border-radius: 0.2rem;\n            background: #F0F0F0;\n            transition: all 0.3s linear;\n            &:hover{\n                background: ",";\n                color: ",";\n            }\n        }\n        div{\n            display: inline-flex;\n            flex-wrap: wrap;\n        }\n    }\n    @media screen and (max-width: 360px){\n        .tags{\n            span{\n                position: relative;\n                top: 0.5rem;\n                align-self: flex-start;\n            }\n        }\n    }\n"],(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.linkColor}),(function(e){return e.theme.black}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.white})),c=n(75472),u=n.n(c),d=n(64721),h=n.n(d);function m(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=function(){function e(e,t){this.resources=e.filter((function(e){return e.fields.slug!==t})),this.currentResourceSlug=t,this.maxResources=6,this.category=null,this.tags=[]}var t=e.prototype;return t.setMaxResources=function(e){return this.maxResources=e,this},t.setCategory=function(e){return this.category=e,this},t.setTags=function(e){return this.tags=e,this},t.getResources=function(){var e=this.category,t=this.tags,n=this.resources,r=this.maxResources,a={};if(!1==!!t||0===t.length)return console.error("RelatedResourcesFactory: Tags not provided, use setTags()."),[];if(!1==!!e)return console.error("RelatedResourcesFactory: Category not provided, use setCategory()."),[];for(var o,s=function(e){return e.fields.slug},i=function(e){var t=s(e);Object.prototype.hasOwnProperty.call(a,t)||(a[t]={resource:e,points:0})},l=function(e,t){var n=s(e);e.frontmatter.category===t&&(a[n].points+=2)},c=function(e,t){var n=s(e);e.frontmatter.tags.forEach((function(e){h()(t,e)&&(a[n].points+=1)}))},d=m(n);!(o=d()).done;){var p=o.value;i(p),l(p,e),c(p,t)}var f=Object.keys(a).map((function(e){return a[e]}));return u()(f,["points"],["desc"]).splice(0,r)},e}(),g=n(78705),b=(0,o.ZP)((function(){return n.e(35575).then(n.bind(n,59434))})),v=(0,o.ZP)((function(){return Promise.all([n.e(40532),n.e(67326),n.e(18514)]).then(n.bind(n,24210))})),y=function(e){var t=e.data,n=e.children,o=t.mdx,c=o.frontmatter,u=o.fields,d=(0,a.useStaticQuery)("2848499768").allMdx.nodes,h=new f(d,u.slug).setMaxResources(6).setCategory(c.category).setTags(c.tags).getResources();return r.createElement(l,null,r.createElement(i.Z,{title:c.title,subtitle:c.subtitle,thumbnail:c.thumbnail}),r.createElement("div",{className:"single-resource-wrapper"},r.createElement(s.W2,null,n,r.createElement(b,{category:"MeshMap"}),r.createElement("div",{className:"backBtn"},r.createElement(a.Link,{to:"/resources"},r.createElement(g.O,null),r.createElement("h4",null,"All Resources"))),r.createElement(v,{resourceType:"resources",relatedResources:h,mainHead:"Related Resources",lastCardHead:"All Resources",linkToAllItems:"/resources"}))))}}}]);