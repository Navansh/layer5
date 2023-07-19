(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[13754,51913],{78705:function(e,t,n){var r=n(15301).w_;e.exports.O=function(e){return r({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm43.4 289.1c7.5 7.5 7.5 19.8 0 27.3-3.8 3.8-8.7 5.6-13.6 5.6s-9.9-1.9-13.7-5.7l-94-94.3c-6.9-7.6-6.7-19.3.6-26.6l95.4-95.7c7.5-7.5 19.7-7.6 27.3 0 7.5 7.5 7.6 19.7 0 27.3l-81.9 81 79.9 81.1z"}}]})(e)}},93218:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return h},default:function(){return d}});var r=n(39626),l=n(67294),a=n(51913);function o(e){var t=Object.assign({p:"p",a:"a",ul:"ul",li:"li"},(0,r.ah)(),e.components),n=t.ResourcesWrapper,o=t.Link;return o||s("Link",!0),n||s("ResourcesWrapper",!0),l.createElement(n,null,l.createElement("p",null,l.createElement(t.p,null,"Docker Swarm is a"," ","\n",l.createElement(o,{to:"../../articles/kubernetes/management-of-kubernetes"},"container orchestration")," ","\ntool that makes it easy to manage and scale your existing Docker\ninfrastructure. It consists of a pool of Docker hosts that run in Swarm\nmode with some nodes acting as managers, workers, or both. Using Docker\nSwarm mode to manage your Docker containers brings the following\nbenefits:")),l.createElement("ul",null,l.createElement("li",null,"It allows you to incrementally apply updates with zero downtime."),l.createElement("li",null,l.createElement(t.p,null,"It increases application resilience to outages by reconciling any\ndifferences between the actual state and your expressed desired state.")),l.createElement("li",null,l.createElement(t.p,null,"It eases the process of scaling your applications since you only need to\ndefine the desired number of replicas in the cluster.")),l.createElement("li",null,l.createElement(t.p,null,"It is built into the ",l.createElement("code",null,"docker")," CLI, so you don't need\nadditional software to get up and running.")),l.createElement("li",null,l.createElement(t.p,null,"It enables multi-host networking such that containers deployed on\ndifferent nodes can communicate with each other easily."))),l.createElement("p",null,l.createElement(t.p,null,"In this tutorial, you will learn key concepts in Docker Swarm and set up a\nhighly available Swarm cluster that is resilient to failures. You will\nalso learn some best practices and recommendations to ensure that your\nSwarm setup is fault tolerant.")),l.createElement("h2",{id:"prerequisites"},"Prerequisites"),l.createElement("p",null,l.createElement(t.p,null,"Before proceeding with this tutorial, ensure that you have access to five\nUbuntu 22.04 servers. This is necessary to demonstrate a highly available\nset up, although it is also possible to run Docker Swarm on a single\nmachine. You also need to configure each server with a user that has\nadministrative privileges.")),l.createElement("p",null,l.createElement(t.p,null,"The following ports must also be available on each server for communication\npurposes between the nodes. On Ubuntu 22.04, they are open by default:")),l.createElement("ul",null,l.createElement("li",null,"TCP port 2377 for cluster management communications,"),l.createElement("li",null,"TCP and UDP port 7946 for communication among nodes,"),l.createElement("li",null,"TCP and UDP port 4789 for overlay network traffic.")),l.createElement("h2",{id:"explaining-docker-swarm-terminology"},"Explaining Docker Swarm terminology"),l.createElement("p",null,l.createElement(t.p,null,"Before proceeding with this tutorial, let's examine some terms and\ndefinitions in Docker Swarm so that you have enough understanding of what\neach one means when they are used in this article and in other Docker Swarm\nresources.")),l.createElement("div",null,l.createElement("ul",null,l.createElement("li",null,l.createElement(t.p,null,l.createElement("strong",null,"Node"),": refers to an instance of the Docker engine in the Swarm cluster.")),l.createElement("li",null,l.createElement(t.p,null,l.createElement("strong",null,"Manager nodes"),": they are tasked with handling orchestration and cluster management functions, and dispatching incoming tasks to worker nodes. They can also act as worker nodes unless placed in Drain mode (recommended).")),l.createElement("li",null,l.createElement(t.p,null,l.createElement("strong",null,"Leader"),": this is a specific manager node that is elected to perform orchestration tasks and management/maintenance operations by all the manager nodes in the cluster using the ",l.createElement("a",{rel:"noreferrer",target:"_blank",className:"whitespace-nowrap",href:"https://raft.github.io/"},"Raft Consensus Algorithm"),".")),l.createElement("li",null,l.createElement(t.p,null,l.createElement("strong",null,"Worker nodes"),": are Docker instances whose sole purpose is to receive and execute Swarm tasks from manager nodes.")),l.createElement("li",null,l.createElement(t.p,null,l.createElement("strong",null,"Swarm task"),": refers to a Docker container and the commands that run inside the container. Once a task is assigned to a node, it can run or fail but it cannot be transferred to a different node.")),l.createElement("li",null,l.createElement(t.p,null,l.createElement("strong",null,"Swarm service"),": this is the mechanism for defining tasks that should be executed on a node. It involves specifying the container image and commands that should run inside the container.")),l.createElement("li",null,l.createElement(t.p,null,l.createElement("strong",null,"Drain"),": means that new tasks are no longer assigned to a node, and existing tasks are reassigned to other available nodes."))),l.createElement("h2",{id:"docker-swarm-requirements-for-high-availability"},"Docker Swarm requirements for high availability"),l.createElement("p",null,"A highly available Docker Swarm setup ensures that if a node fails, services on the failed node are re-provisioned and assigned to other available nodes in the cluster. A Docker Swarm setup that consists of one or two manager nodes is not considered highly available because any incident will cause operations on the cluster to be interrupted. Therefore the minimum number of manager nodes in a highly available Swarm cluster should be three."),l.createElement("p",null,"The table below shows the number of failures a Swarm cluster can tolerate depending on the number of manager nodes in the cluster:"),l.createElement("div",null,l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Manager Nodes"),l.createElement("th",null,"Failures tolerated"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"1"),l.createElement("td",null,"0")),l.createElement("tr",null,l.createElement("td",null,"2"),l.createElement("td",null,"0")),l.createElement("tr",null,l.createElement("td",null,"3"),l.createElement("td",null,"1")),l.createElement("tr",null,l.createElement("td",null,"4"),l.createElement("td",null,"1")),l.createElement("tr",null,l.createElement("td",null,"5"),l.createElement("td",null,"2")),l.createElement("tr",null,l.createElement("td",null,"6"),l.createElement("td",null,"2")),l.createElement("tr",null,l.createElement("td",null,"7"),l.createElement("td",null,"3"))))),l.createElement("p",null,"As you can see, having an even number of manager nodes does not help with failure tolerance, so you should always maintain an odd number of manager nodes. Fault tolerance improves as you add more manager nodes, but Docker recommends no more than seven managers so that performance is not negatively impacted since each node must acknowledge proposals to update the state of the cluster."),l.createElement("p",null,"You should also distribute your manager nodes in separate locations so they are not affected by the same outage. If they run on the same server, a hardware problem could cause them all to go down. The high availability Swarm cluster that you will be set up in this tutorial will therefore exhibit the following characteristics:"),l.createElement("ul",null,l.createElement("li",null,"5 total nodes (2 workers and 3 managers) with each one running on a separate server."),l.createElement("li",null,"2 worker nodes (",l.createElement("code",null,"worker-1")," and ",l.createElement("code",null,"worker-2"),")."),l.createElement("li",null,"3 manager nodes (",l.createElement("code",null,"manager-1"),", ",l.createElement("code",null,"manager-2"),", and ",l.createElement("code",null,"manager-3"),").")),l.createElement(a.default),l.createElement("h2",{id:"step-1-installing-docker"},"Step 1 — Installing Docker"),l.createElement("p",null,"In this step, you will install Docker on all five Ubuntu servers. Therefore, execute all the commands below (and in step 2) on all five servers. If your host offers a snapshot feature, you may be able to run the commands on a single server and use that server as a base for the other four instances."),l.createElement("p",null,"Let's start by installing the latest version of the Docker Engine (20.10.18 at the time of writing). Go ahead and update the package information list from all configured sources on your system:"),l.createElement("pre",null,l.createElement("code",null,l.createElement(t.p,null,"sudo apt update"))),l.createElement("p",null,"Afterward, install the following packages to allow ",l.createElement("code",null,"apt")," to use packages over HTTPS:"),l.createElement("pre",null,l.createElement("code",null,l.createElement(t.p,null,"sudo apt install apt-transport-https ca-certificates curl software-properties-common"))),l.createElement("p",null,"Next, add the GPG key for the official Docker repository to the server:"),l.createElement("pre",null,l.createElement("code",null,l.createElement(t.p,null,"curl -fsSL ",l.createElement(t.a,{href:"https://download.docker.com/linux/ubuntu/gpg"},"https://download.docker.com/linux/ubuntu/gpg")," | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg"))),l.createElement("p",null,"Once the GPG key is added, include the official Docker repository in the server's apt sources list:"),l.createElement("pre",null,l.createElement("code",null,l.createElement(t.p,null,'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] ',l.createElement(t.a,{href:"https://download.docker.com/linux/ubuntu"},"https://download.docker.com/linux/ubuntu"),' $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null'))),l.createElement("p",null,"Finally, update apt once again and install the Docker Engine:"),l.createElement("pre",null,l.createElement("code",null,l.createElement(t.p,null,"sudo apt update"))),l.createElement("pre",null,l.createElement("code",null,l.createElement(t.p,null,"sudo apt install docker-ce"))),l.createElement("p",null,"Once the relevant packages are installed, you can check the status of the ",l.createElement("code",null,"docker")," service using the command below:"),l.createElement("pre",null,l.createElement("code",null,l.createElement(t.p,null,"sudo systemctl status docker"))),l.createElement("p",null,"If everything goes well, you should observe that the container engine is active and running on your server."),l.createElement("h2",{id:"step-2-executing-the-docker-command-without-sudo"},"Step 2 — Executing the Docker command without sudo"),l.createElement("p",null,"By default, the ",l.createElement("code",null,"docker")," command can only be executed by the root user or any user in the ",l.createElement("code",null,"docker")," group (auto created on installation). If you execute a ",l.createElement("code",null,"docker")," command without prefixing it with ",l.createElement("code",null,"sudo")," or running it through a user that belongs to the ",l.createElement("code",null,"docker")," group, you will get a permission error that looks like this:"),l.createElement("pre",null,l.createElement("code",null,l.createElement(t.p,null,'Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http://%2Fvar%2Frun%2Fdocker.sock/v1.24/containers/json": dial unix /var/run/docker.sock: connect: permission denied'))),l.createElement("p",null,"As mentioned earlier, using ",l.createElement("code",null,"sudo")," with ",l.createElement("code",null,"docker")," is a security risk, so the solution to the above error is to add the relevant user to the ",l.createElement("code",null,"docker")," group. This can be achieved through the command below:"),l.createElement("pre",null,l.createElement("code",null,l.createElement(t.p,null,"sudo usermod -aG docker $USER"))),l.createElement("p",null,"Next, run the following command and enter the user's password when prompted for the changes to take effect:"),l.createElement("pre",null,l.createElement("code",null,l.createElement(t.p,null,"su - $USER"))),l.createElement("p",null,"You should now be able to run ",l.createElement("code",null,"docker")," commands without prefixing them with ",l.createElement("code",null,"sudo"),". For example, when you run the command ",l.createElement("code",null,"docker ps"),", you should observe the output."),l.createElement("p",null,"Before proceeding to the next step, ensure that all the commands in step 1 and step 2 have been executed on all five servers."),l.createElement("h2",null,"Step 3 — Initializing the Swarm Cluster"),l.createElement("p",null,"At this point, each of your five Docker instances are acting as separate hosts and not as part of a Swarm cluster. Therefore, in this step, we will initialize the Swarm cluster on the ",l.createElement("code",null,"manager-1")," server and add the hosts to the cluster accordingly."),l.createElement("p",null,"Start by logging into one of the Ubuntu servers (",l.createElement("code",null,"manager-1"),") and retrieve the private IP address of the machine using the following command:"),l.createElement("pre",null,l.createElement("code",null,"hostname -I | awk '{print $1}'")),l.createElement("p",null,"Copy the IP address to your clipboard and replace the ",l.createElement("code",null,"<manager_1_server_ip>")," placeholder in the command below to initialize Swarm mode:"),l.createElement("pre",null,l.createElement("code",null,l.createElement(t.p,null,"docker swarm init --advertise-addr <manager_1_server_ip>"))),l.createElement("p",null,"If the command is successful, you will see output indicating that the Swarm has been initialized and that the current node is now a manager. It will also provide a command to join worker nodes to the cluster. Copy the command for later use."),l.createElement("p",null,"Next, SSH into each of the other four Ubuntu servers (manager-2, manager-3, worker-1, and worker-2) and run the command you copied earlier to join them to the Swarm cluster. The command should look like this:"),l.createElement("pre",null,l.createElement("code",null,l.createElement(t.p,null,"docker swarm join --token <token> <manager_1_server_ip>:<port>"))),l.createElement("p",null,"After running the command on each server, you should see output indicating that the node has joined the Swarm as either a manager or a worker. To verify the status of the Swarm cluster, you can run the command ",l.createElement("code",null,"docker node ls")," on the manager node:"),l.createElement("pre",null,l.createElement("code",null,l.createElement(t.p,null,"docker node ls"))),l.createElement("p",null,"You should see a list of all the nodes in the Swarm cluster, including their IDs, hostname, status, availability, and whether they are a manager or a worker."),l.createElement("h2",null,"Step 4 — Deploying the Application Stack"),l.createElement("p",null,"Now that you have a functioning Docker Swarm cluster, you can deploy your application stack. In this tutorial, we will use a simple example of a web application stack consisting of a front-end service and a back-end service."),l.createElement("p",null,"Start by creating a new directory for your application stack on the manager node:"),l.createElement("pre",null,l.createElement("code",null,l.createElement(t.p,null,"mkdir app-stack\ncd app-stack"))),l.createElement("p",null,"Next, create a file called ",l.createElement("code",null,"docker-compose.yml")," in the ",l.createElement("code",null,"app-stack")," directory and open it in a text editor:"),l.createElement("pre",null,l.createElement("code",null,l.createElement(t.p,null,"nano docker-compose.yml"))),l.createElement("p",null,"Copy and paste the following YAML code into the ",l.createElement("code",null,"docker-compose.yml")," file:"),l.createElement("pre",null,l.createElement("code",null,l.createElement(t.p,null,"version: '3.8'"),l.createElement(t.p,null,"services:\nfrontend:\nimage: nginx:latest\nports:"),l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"80:80\ndeploy:\nreplicas: 2\nrestart_policy:\ncondition: on-failure"),"\n"),l.createElement(t.p,null,"backend:\nimage: httpd:latest\nports:"),l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"8080:80\ndeploy:\nreplicas: 2\nrestart_policy:\ncondition: on-failure"),"\n"))),l.createElement("p",null,"This Docker Compose file defines two services: ",l.createElement("code",null,"frontend")," and ",l.createElement("code",null,"backend"),". The ",l.createElement("code",null,"frontend")," service uses the ",l.createElement("code",null,"nginx:latest")," image and maps port 80 of the host to port 80 of the container. It is configured to have 2 replicas and to restart on failure. The ",l.createElement("code",null,"backend")," service uses the ",l.createElement("code",null,"httpd:latest")," image and maps port 8080 of the host to port 80 of the container. It is also configured to have 2 replicas and to restart on failure."),l.createElement("p",null,"Save and close the ",l.createElement("code",null,"docker-compose.yml")," file."),l.createElement("p",null,"To deploy the application stack, run the following command:"),l.createElement("pre",null,l.createElement("code",null,l.createElement(t.p,null,"docker stack deploy -c docker-compose.yml app-stack"))),l.createElement("p",null,"If the command is successful, you should see output indicating that the services are being deployed. You can check the status of the services by running the command ",l.createElement("code",null,"docker service ls"),":"),l.createElement("pre",null,l.createElement("code",null,l.createElement(t.p,null,"docker service ls"))),l.createElement("p",null,"You should see a list of the services in the stack, including their names, mode, replicas, and ports."),l.createElement("h2",null,"Conclusion"),l.createElement("p",null,"In this tutorial, you learned how to set up a highly available Docker Swarm cluster and deploy a simple application stack. This setup provides fault tolerance and load balancing for your applications, allowing you to scale them easily as your needs grow."),l.createElement("p",null,"Next steps:"),l.createElement("ul",null,l.createElement("li",null,"Explore more Docker Swarm features, such as service updates and rolling updates."),l.createElement("li",null,"Deploy your own application stack using Docker Compose."),l.createElement("li",null,"Learn about Docker networking and how to create overlay networks."))))}var c=function(e){void 0===e&&(e={});var t=Object.assign({},(0,r.ah)(),e.components).wrapper;return t?l.createElement(t,e,l.createElement(o,e)):o(e)};function s(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var i=n(17875),u=n(72417),m=function(e){var t=e.data,n=e.children;return l.createElement(l.Fragment,null,l.createElement(u.Z,{data:t},n))};function d(e){return l.createElement(m,e,l.createElement(c,e))}var h=function(e){var t=e.data;return l.createElement(i.Z,{title:t.mdx.frontmatter.title,image:t.mdx.frontmatter.thumbnail.publicURL})}},51913:function(e,t,n){"use strict";n.r(t);var r=n(67294),l=n(85313),a=n(63689),o=n(6652),c=n(84089),s=l.default.div.withConfig({displayName:"docker-extension-CTA__DockerExtensionCTAWrapper",componentId:"sc-1ahss27-0"})(["\np {\n  color: ",";   \n}\n.card-right{\n  padding-top: 3rem;\n  padding-left: 1rem;\n}\n\n.docker-callout {\n    background: linear-gradient(90deg, hsla(186, 33%, 94%, 0.01) 35%, hsla(173, 54%, 61%, 1) 100%);\n    border-radius: 4rem;\n    display: flex;\n    padding: 2rem;\n    text-align: center;\n    margin: auto;\n    margin-top: 6rem;\n    margin-bottom: 4rem;\n\n    .text-gray {\n      margin-top: 4rem;\n    }\n    img {\n      height: 18rem;\n      margin-right: 2rem;\n      padding-left: 1rem;\n    }\n    h2{\n      color: ",";\n      padding: 0;\n    }\n    Button {\n      margin: 1rem 0;\n    }\n    @media screen and (max-width:1000px) {\n      .card-right{\n        padding-top: 1rem;\n        padding-left: 0;\n      }\n      display: block;\n      img {\n        margin: 0 auto 0.25rem;\n        height: 10rem;\n      }\n      .text-gray {\n        margin-top: 2rem;\n      }\n      \n    }\n  }\n"],(function(e){return e.theme.whiteToBlack}),(function(e){return e.theme.whiteToBlack}));t.default=function(){return r.createElement(s,null,r.createElement(o.W2,null,r.createElement("div",{className:"docker-callout"},r.createElement("img",{src:c.Z,alt:"Docker and Meshery",loading:"lazy"}),r.createElement("div",{className:"card-right"},r.createElement("div",null,r.createElement("h2",null,"Docker Extension for Meshery",r.createElement("br",null)," is now available!")),r.createElement("p",null,"Managing cloud native infrastructure has never been easier."),r.createElement(a.default,{primary:!0,url:"/docker-extension-meshery",external:!1},"Use the Meshery Docker Extension")))))}},72417:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(67294),l=n(71082),a=n(40156),o=n(6652),c=n(33754),s=n(85313).default.div.withConfig({displayName:"resourceSinglestyle__ResourcePageWrapper",componentId:"sc-gfz8rr-0"})(["\n    color: ",";\n    .single-resource-wrapper{\n        margin-bottom: 4rem;\n\n        h3 {\n            text-align: center;\n        }\n    }\n\n    .resource-info-block{\n        margin-top: 3rem;\n        border-bottom: 1px solid ",";\n        padding-bottom: 2rem;\n    }\n    p {\n        color: ",";\n    }\n    li {\n        color: ",";\n    }\n    .backBtn {\n        margin: 3rem auto;\n        font-weight: 600;\n        z-index: 2;\n\n        @media screen and (max-width: 62rem) {\n            display: none;\n        }\n        a{\n            display: flex;\n            color: ",";\n            &:hover{\n                color: ",";\n            }\n\n            h4 {\n                line-height: 1.75rem;\n                margin-left: 0.5rem;\n            }\n            svg {\n                font-size: 1.75rem;\n            }\n        }\n    }\n\n    .tags{\n        display: flex;\n        span{\n            font-size: 1.2rem;\n            align-self: center;\n        }\n        a{\n            color: ",";\n            margin: 0.2rem;\n            display: inline-block;\n            padding: 0.3rem 0.8rem;\n            border-radius: 0.2rem;\n            background: #F0F0F0;\n            transition: all 0.3s linear;\n            &:hover{\n                background: ",";\n                color: ",";\n            }\n        }\n        div{\n            display: inline-flex;\n            flex-wrap: wrap;\n        }\n    }\n    @media screen and (max-width: 360px){\n        .tags{\n            span{\n                position: relative;\n                top: 0.5rem;\n                align-self: flex-start;\n            }\n        }\n    }\n"],(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.linkColor}),(function(e){return e.theme.black}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.white})),i=n(75472),u=n.n(i),m=n(64721),d=n.n(m);function h(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g=function(){function e(e,t){this.resources=e.filter((function(e){return e.fields.slug!==t})),this.currentResourceSlug=t,this.maxResources=6,this.category=null,this.tags=[]}var t=e.prototype;return t.setMaxResources=function(e){return this.maxResources=e,this},t.setCategory=function(e){return this.category=e,this},t.setTags=function(e){return this.tags=e,this},t.getResources=function(){var e=this.category,t=this.tags,n=this.resources,r=this.maxResources,l={};if(!1==!!t||0===t.length)return console.error("RelatedResourcesFactory: Tags not provided, use setTags()."),[];if(!1==!!e)return console.error("RelatedResourcesFactory: Category not provided, use setCategory()."),[];for(var a,o=function(e){return e.fields.slug},c=function(e){var t=o(e);Object.prototype.hasOwnProperty.call(l,t)||(l[t]={resource:e,points:0})},s=function(e,t){var n=o(e);e.frontmatter.category===t&&(l[n].points+=2)},i=function(e,t){var n=o(e);e.frontmatter.tags.forEach((function(e){d()(t,e)&&(l[n].points+=1)}))},m=h(n);!(a=m()).done;){var p=a.value;c(p),s(p,e),i(p,t)}var g=Object.keys(l).map((function(e){return l[e]}));return u()(g,["points"],["desc"]).splice(0,r)},e}(),E=n(78705),f=(0,a.ZP)((function(){return n.e(35575).then(n.bind(n,59434))})),y=(0,a.ZP)((function(){return Promise.all([n.e(40532),n.e(67326),n.e(18514)]).then(n.bind(n,24210))})),k=function(e){var t=e.data,n=e.children,a=t.mdx,i=a.frontmatter,u=a.fields,m=(0,l.useStaticQuery)("2848499768").allMdx.nodes,d=new g(m,u.slug).setMaxResources(6).setCategory(i.category).setTags(i.tags).getResources();return r.createElement(s,null,r.createElement(c.Z,{title:i.title,subtitle:i.subtitle,thumbnail:i.thumbnail}),r.createElement("div",{className:"single-resource-wrapper"},r.createElement(o.W2,null,n,r.createElement(f,{category:"MeshMap"}),r.createElement("div",{className:"backBtn"},r.createElement(l.Link,{to:"/resources"},r.createElement(E.O,null),r.createElement("h4",null,"All Resources"))),r.createElement(y,{resourceType:"resources",relatedResources:d,mainHead:"Related Resources",lastCardHead:"All Resources",linkToAllItems:"/resources"}))))}}}]);