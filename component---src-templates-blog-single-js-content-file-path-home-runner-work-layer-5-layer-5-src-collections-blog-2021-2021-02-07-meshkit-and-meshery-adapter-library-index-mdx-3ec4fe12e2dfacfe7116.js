"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[23216],{3918:function(e,t,n){n.r(t),n.d(t,{Head:function(){return u},default:function(){return h}});var r=n(39626),a=n(67294),i=n(85313).default.div.withConfig({displayName:"MeshkitMesheryAdapterLibstyle__MeshkitMesheryAdapterLib",componentId:"sc-dozruy-0"})(["\n    \n\n    div.fact {\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        color: ",";\n        font-style: italic;\n        font-size: 1.3rem;\n        font-weight: 600;\n        text-align: right;\n        border-right: 4px solid ",";        \n        padding-left: 2rem;\n        padding-right: 2rem;\n        padding-top: 1rem;\n        padding-bottom: 1rem;\n    }\n    \n    div.note {\n        margin: 1rem;\n        padding: 2rem;\n        display: flex;\n        border: 1px solid ",";\n        img {\n            margin-right: 3rem;\n        }\n    }\n    .centered-text {\n        padding-top: 2rem;\n        padding-bottom: 2rem;\n        font-size: 1.2rem;\n        font-weight: 600;\n    }\n"],(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.primaryLightColor})),o=n.p+"static/meshery-adapter-library.a77bdfbd.svg";n.p;function s(e){var t=Object.assign({p:"p",h2:"h2",code:"code",pre:"pre",ul:"ul",li:"li",h3:"h3"},(0,r.ah)(),e.components),n=t.BlogWrapper,s=t.Link;return n||c("BlogWrapper",!0),s||c("Link",!0),a.createElement(n,null,a.createElement(i,null,a.createElement("div",{className:"intro"},a.createElement("p",null,a.createElement(t.p,null,"The Meshery v0.5.0 release includes two new libraries: ",a.createElement("span",null,"MeshKit")," and ",a.createElement("span",null,"Meshery Adapter Library"),"."),a.createElement(t.p,null,"These two libraries improve contributor experience and development speed by reducing the burden of sustaining the plethora of Meshery adapters, allowing contributors to focus on exposing a service mesh's differentiated value,\ninstead of having to redundantly implement plumbing for managing service meshes."))),a.createElement(t.h2,null,"MeshKit"),a.createElement(t.p,null,"MeshKit was formerly named ",a.createElement(t.code,null,"gokit")," and was renamed recently to align with the other Meshery components' names (and avoid confusion with the ",a.createElement(t.code,null,"go-kit")," project). MeshKit can be considered a derivative of ",a.createElement(t.code,null,"go-kit")," with specific focus on service mesh management."),a.createElement(t.p,null,"In the Meshery v0.5.0 release, MeshKit has been enhanced and expanded substantially. Considering that the MeshKit library provides broadly useful functionality, it is used in a growing number of Meshery components. It is intended to be one of the top level libraries in the Meshery ecosystem. ",a.createElement("div",{className:"fact"},"Meshkit provides functionality useful across all Meshery components.")),a.createElement(t.p,null,"MeshKit is a toolkit for Layer5’s microservices, and is positioned to become Layer5’s middleware component for Layer5’s microservices, leveraging other libraries like ",a.createElement(t.code,null,"go-kit/kit"),". In complement to functionality provided by a service mesh, its purpose is to provide implementations for common cross-cutting concerns like error handling, logging, and tracing. Uniform error handling and logging across all Meshery components helps to implement efficient tooling for observability, monitoring and troubleshooting. The library provides some common data models for Meshery, notably for ",a.createElement(s,{to:"/smi"},"Service Mesh Interface conformance testing"),", and Kubernetes' ",a.createElement(t.code,null,"kubeconfig"),"."),a.createElement(t.p,null,"Another central component in Meshkit is the ",a.createElement(t.code,null,"utils")," package."),a.createElement(t.p,null,"This package provides a Kubernetes and a Helm client that implements functionality based on the Go libraries of these tools. The API exposed by these libraries is quite low-level, and the higher-level functions of the ",a.createElement(t.code,null,"utils")," package simplifies usage of Kubernetes and Helm clients significantly.\nAnother advantage MeshKit that it is not necessary to use the command line versions of these tools, providing a more tailored experience for developers,\nand better logging and error handling integration."),a.createElement(t.p,null,a.createElement(s,{to:"https://github.com/layer5io/meshkit"},"MeshKit")," is simple and straight\nforward to use, as the following code example illustrates."," "),a.createElement(t.pre,null,a.createElement(t.code,{className:"language-go"},'package main\n\nimport (\n\t"os"\n\n\tmeshkitlogger "github.com/layer5io/meshkit/logger"\n\tmeshkitkubernetes "github.com/layer5io/meshkit/utils/kubernetes"\n\t"k8s.io/client-go/kubernetes"\n)\n\nfunc main() {\n\t// nginx contains the deployment manifest for nginx.\n\tnginx := `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  replicas: 2 # tells deployment to run 2 pods matching the template\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n`\n\n\t// Create an instance of the meshkit logger handler.\n\tlog, err := meshkitlogger.New("ExampleApp",\n\t\tmeshkitlogger.Options{Format: meshkitlogger.JsonLogFormat, DebugLevel: false})\n\tif err != nil {\n\t\tos.Exit(1)\n\t}\n\tlog.Info("successfully instantiated meshkit logger")\n\n\t// Detect kubeconfig on the local system.\n\tconfig, err := meshkitkubernetes.DetectKubeConfig()\n\tif err != nil {\n\t\tlog.Error(err)\n\t\tos.Exit(1)\n\t}\n\tlog.Info(config.Host)\n\n\t// Create Kubernetes client set for the detected kubeconfig using the Kubernetes Go client library.\n\tclientset, err := kubernetes.NewForConfig(config)\n\tif err != nil {\n\t\tlog.Error(err)\n\t\tos.Exit(1)\n\t}\n\n\t// Create an instance of the meshkit Kubernetes client ...\n\tclient, err := meshkitkubernetes.New(clientset, *config)\n\tif err != nil {\n\t\tlog.Error(err)\n\t\tos.Exit(1)\n\t}\n\n\t// ... and use it to deploy nginx to the cluster.\n\terr2 := client.ApplyManifest([]byte(nginx), meshkitkubernetes.ApplyOptions{\n\t\tNamespace: "default",\n\t\tUpdate:    true,\n\t\tDelete:    false,\n\t})\n\tif err2 != nil {\n\t\tlog.Error(err2)\n\t\tos.Exit(1)\n\t}\n\tlog.Info("successfully applied the manifest")\n}\n')),a.createElement(t.h2,null,"Meshery Adapters"),a.createElement(t.p,null,"Meshery adapters are management plane components and manage the lifecycle of service meshes. This includes installation and deletion, configuration, and verification that an installation follows recommended practices. In addition, Meshery adapters can assess to what extent a service mesh complies to the ",a.createElement(s,{to:"/blog/announcements/a-standard-interface-for-service-meshes"},"Service Mesh Interface standard"),". Meshery adapters support management of multiple versions of their respective service mesh and also come bundled with sample applications that can be deployed for easy and quick exploration of service mesh capabilities. ",a.createElement("div",{className:"fact"},"Meshery adapters manage the lifecycle of service meshes.")),a.createElement(t.p,null,"A Meshery adapter is a gRPC server that exposes the ",a.createElement(t.code,null,"MeshServiceServer")," interface:"),a.createElement(t.pre,null,a.createElement(t.code,{className:"language-go"},"// MeshServiceServer is the server API for MeshService service.\ntype MeshServiceServer interface {\n\tCreateMeshInstance(context.Context, *CreateMeshInstanceRequest) (*CreateMeshInstanceResponse, error)\n\tMeshName(context.Context, *MeshNameRequest) (*MeshNameResponse, error)\n\tApplyOperation(context.Context, *ApplyRuleRequest) (*ApplyRuleResponse, error)\n\tSupportedOperations(context.Context, *SupportedOperationsRequest) (*SupportedOperationsResponse, error)\n\tStreamEvents(*EventsRequest, MeshService_StreamEventsServer) error\n}\n")),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.code,null,"CreateMeshInstance")," sets up the Kubernetes client. It does not, as the name might imply, create an instance of a service mesh."),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"MeshName")," returns the name of the mesh, configured in the adapter."),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"SupportedOperations")," returns all supported operations, configured in the adapter. An operation is e.g. the installation of a service mesh."),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"ApplyOperation")," executes the operation specified in the request. It is one of the supported operations."),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"StreamEvents")," allows sending events from the server to the client."),"\n"),a.createElement(t.p,null,"This API is one of the extension points of Meshery, making it easy to add support for new service meshes to Meshery. Meshery adapters abstract away differences in installation and configuration of the various service meshes.",a.createElement("div",{className:"fact"},"Adapters allow Meshery to interface with the different service meshes, exposing their differentiated value to users.")),a.createElement(t.p,null,"In general, the various service mesh implementations are installed and configured in their own way. For instance, some service meshes have their own installer, like ",a.createElement(t.code,null,"istioctl")," for Istio, while others use Helm charts, like Consul. One of the purposes of Meshery adapters is to abstract these differences away."),a.createElement(t.h2,null,"Meshery Adapter Library"),a.createElement(t.p,null,"As can be expected, adapters for the various meshes have a lot of code in common. Initially, this common code was copied from one adapter implementation to the next. The question arose whether common code should be factored out to one or several libraries. After some discussion, the community decided to move some of the more general code to Meshkit, and adapter specific code to a new library."),a.createElement(t.p,null,"Thus, the Meshery Adapter Library was born."),a.createElement(t.p,null,"It reduces the amount of boilerplate code in the adapters substantially, making adapter code easier to follow. This is especially valuable in an open source community where typically many developers contribute, for varying amounts of time. For the same reasons, it is important such libraries are easily understandable."),a.createElement(t.p,null,"Also, it means new adapters can be implemented quickly, as only configuration and operations that differ between services meshes need to be implemented."),a.createElement("div",{className:"fact"},a.createElement(t.p,null,"The Meshery Adapter Library provides a common and consistent set of\nfunctionality that Meshery adapters use for managing the lifecycle of\nservice meshes and their workloads.")),a.createElement(t.p,null,"The initial commit was submitted on October 6th, 2020 based on a refactoring effort in the adapter for the Kuma service mesh. Within a few months, several adapters have been refactored or implemented from scratch based on the Meshery Adapter Library."),a.createElement(t.p,null,"The main purpose of the Meshery Adapter Library is to:"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"provide a set of interfaces, some with default implementations, to be used and extended by adapters."),"\n",a.createElement(t.li,null,"implement cross-cutting concerns like logging, error handling, and tracing."),"\n",a.createElement(t.li,null,"provide a mini framework implementing the gRPC server that allows plugging in the mesh specific configuration and operations implemented in the adapters."),"\n"),a.createElement(t.p,null,"The core interface in the library is the adapter ",a.createElement(t.code,null,"Handler")," interface:"),a.createElement(t.pre,null,a.createElement(t.code,{className:"language-go"},"// Interface Handler is extended by adapters, and used in package api/grpc that implements the MeshServiceServer.\ntype Handler interface {\n\t// GetName returns the name of the adapter.\n\tGetName() string\n\t// CreateInstance instantiates clients used in deploying and managing mesh instances, e.g. Kubernetes clients.\n\tCreateInstance([]byte, string, *chan interface{}) error\n\t// ApplyOperation applies an adapter operation. This is adapter specific and needs to be implemented by each adapter.\n\tApplyOperation(context.Context, OperationRequest) error\n\t// ListOperations list all operations an adapter supports.\n\tListOperations() (Operations, error)\n\n\t// Need not implement this method and can be reused\n\tStreamErr(*Event, error) // Streams an error event, e.g. to a channel\n\tStreamInfo(*Event)       // Streams an informational event, e.g. to a channel\n}\n")),a.createElement(t.p,null,"It corresponds closely to the gRPC API discussed above, and indeed these methods are called in the implementation of the ",a.createElement(t.code,null,"MeshServiceServer")," interface. This implementation is also part of the Meshery Adapter Library."),a.createElement(t.p,null,"Using ",a.createElement(t.code,null,"struct")," embedding, an adapter extends the default implementation ",a.createElement(t.code,null,"Adapter")," of the interface ",a.createElement(t.code,null,"Handler")," from the library.\nUsually, it is sufficient that this adapter handler overrides only the ",a.createElement(t.code,null,"ApplyOperation")," function from the default implementation.\n(There, it is a no-op implementation.)"),a.createElement(t.p,null,"The figure below illustrates this and the usage of the library in an adapter."),a.createElement("img",{src:o,className:"image-center",alt:"meshery adapter library"}),a.createElement(t.p,null,"In the ",a.createElement(t.code,null,"main")," package of the adapter, the default configuration provider ",a.createElement(t.code,null,"Viper")," from the library is instantiated, and reads the adapter specific configuration. This includes a specification of all available operations. As configuration providers are implementations of an interface, you can choose any of the providers from the library, or implement your own."),a.createElement(t.p,null,"Next, an instance of the adapter handler is created. Other components, for instance a logger, may be created depending on needs and requirements, which is symbolize by the three dots in the figure."),a.createElement(t.p,null,"The ",a.createElement(t.code,null,"service")," is a struct that holds all the parameters that specify an adapter service, like the port the gRPC server is running on, and the instance of the adapter handler created in a previous step. This struct is passed to the ",a.createElement(t.code,null,"Start")," function from the library. This ",a.createElement(t.code,null,"Start")," function wraps the gRPC server, wiring up all necessary components, and starts the service. The developer does not need to touch any gRPC code."),a.createElement(t.h3,null,"Conclusion"),a.createElement(t.p,null,"Extracting common code from adapters to the two new libraries has proven to be a worthwhile investment. It led to cleaner code as well as cleaner application architecture, shortened implementation time for new adapters considerably, and upleveled the quality of Meshery's adapters through consistency of implementation."),a.createElement("div",{className:"intro"},a.createElement("p",null,'P.S. If these topics excite you and you want to explore the beautiful realm of service meshes, come and say "Hi" on the community ',a.createElement(s,{to:"http://slack.layer5.io"},"Slack")," and you are sure to be warmly welcomed. ",a.createElement("span",null,"😀")))))}var l=function(e){void 0===e&&(e={});var t=Object.assign({},(0,r.ah)(),e.components).wrapper;return t?a.createElement(t,e,a.createElement(s,e)):s(e)};function c(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var m=n(17875),d=n(85235),p=function(e){var t=e.data,n=e.children;return a.createElement(a.Fragment,null,a.createElement(d.Z,{data:t},n))};function h(e){return a.createElement(p,e,a.createElement(l,e))}var u=function(e){var t=e.data;return a.createElement(m.Z,{title:t.mdx.frontmatter.title,image:t.mdx.frontmatter.thumbnail.publicURL})}}}]);