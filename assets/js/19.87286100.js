(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{202:function(e,t,a){e.exports=a.p+"assets/img/topology-v8.3e6120f9.png"},203:function(e,t,a){e.exports=a.p+"assets/img/endpoint-dependency-v8.1d737ddc.png"},326:function(e,t,a){"use strict";a.r(t);var i=[function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"designing-for-scale"}},[t("strong",[this._v("Designing for scale")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"pull-vs-push"}},[t("strong",[this._v("Pull vs. push")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"metrics-analysis-isn-t-just-mathematical-calculation"}},[t("strong",[this._v("Metrics analysis isn't just mathematical calculation")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:a(202),alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:a(203),alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"pre-calculation-vs-query-stage-calculation"}},[t("strong",[this._v("Pre-calculation vs. query stage calculation?")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"cases-today"}},[t("strong",[this._v("Cases today")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("p",[e._v("Lagou.com, an online job recruitment platform")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("SkyWalking is observing >100 services, 500+ JVM instances")])]),e._v(" "),a("li",[a("p",[e._v("SkyWalking collects and analyzes 4+ billion traces per day to analyze performance data, including metrics of 300k+ endpoints and dependencies")])]),e._v(" "),a("li",[a("p",[e._v("Monitoring >50k traffic per second in the whole cluster")])])])]),e._v(" "),a("li",[a("p",[e._v("Yonghui SuperMarket, online service")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("SkyWalking analyzes at least 10+ billion (3B) traces with metrics per day")])]),e._v(" "),a("li",[a("p",[e._v("SkyWalking's second, smaller deployment, analyzes 200+ million traces per day")])])])]),e._v(" "),a("li",[a("p",[e._v("Baidu, internet and AI company, Kubernetes deployment")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("SkyWalking collects 1T+ traces a day from 1,400+ pods of 120+ services")])]),e._v(" "),a("li",[a("p",[e._v("Continues to scale out as more services are added")])])])]),e._v(" "),a("li",[a("p",[e._v("Beike Zhaofang(ke.com), a Chinese online property brokerage backed by Tencent Holdings and SoftBank Group")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Has used SkyWalking from its very beginning, and has two members in the PMC team.")])]),e._v(" "),a("li",[a("p",[e._v("Deployments collect 16+ billion traces per day")])])])]),e._v(" "),a("li",[a("p",[e._v("Ali Yunxiao, DevOps service on the Alibaba Cloud,")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("SkyWalking collects and analyzes billions of spans per day")])]),e._v(" "),a("li",[a("p",[e._v("SkyWalking keeps AliCloud's 45 services and ~300 instances stable")])])])]),e._v(" "),a("li",[a("p",[e._v("A department of Alibaba TMall, one of the largest business-to-consumer online retailers, spun off from Taobao")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("A customized version of SkyWalking monitors billions of traces per day")])]),e._v(" "),a("li",[a("p",[e._v("At the same time, they are building a load testing platform based on SkyWalking's agent tech stack, leveraging its tracing and context propagation cabilities")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"conclusion"}},[t("strong",[this._v("Conclusion")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[t("p",[this._v("Understand the logic model: don't treat observability as a mathematical tool.")])]),this._v(" "),t("li",[t("p",[this._v("Identify dependencies first, then their metrics.")])]),this._v(" "),t("li",[t("p",[this._v("Scaling should be accomplished easily and natively.")])]),this._v(" "),t("li",[t("p",[this._v("Maintain consistency across different architectures, and in the performance of APM itself.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"resources"}},[t("strong",[this._v("Resources")])])}],s=a(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"observability-at-scale-skywalking-it-is"}},[e._v("Observability at Scale: SkyWalking it is")]),e._v(" "),a("ul",[a("li",[e._v("Author: Sheng Wu")]),e._v(" "),a("li",[e._v("Original link, "),a("a",{attrs:{href:"https://www.tetrate.io/blog/observability-at-scale-skywalking-it-is/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tetrate.io blog"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("SkyWalking, a top-level Apache project, is the open source APM and observability analysis platform that is solving the problems of 21st-century systems that are increasingly large, distributed, and heterogenous. It's built for the struggles system admins face today: To identify and locate needles in a haystack of interdependent services, to get apples-to-apples metrics across polyglot apps, and to get a complete and meaningful view of performance.")]),e._v(" "),a("p",[e._v("SkyWalking is a holistic platform that can observe microservices on or off a mesh, and can provide consistent monitoring with a lightweight payload.")]),e._v(" "),a("p",[e._v("Let's take a look at how SkyWalking evolved to address the problem of observability at scale, and grew from a pure tracing system to a feature-rich observability platform that is now used to analyze deployments that collect tens of billions of traces per day.")]),e._v(" "),e._m(0),e._v(" "),a("p",[e._v("When SkyWalking was first initialized back in 2015, its primary use case was monitoring the first-generation distributed core system of China Top Telecom companies, China Unicom and China Mobile. In 2013-2014, the telecom companies planned to replace their old traditional monolithic applications with a distributed system. Supporting a super-large distributed system and scaleablity were the high-priority design goals from Day one. So, what matters at scale?")]),e._v(" "),e._m(1),e._v(" "),a("p",[e._v('Pull and push modes relate to the direction of data flow. If the agent collects data and pushes them to the backend for further analysis, we call it "push" mode. Debate over pull vs. push has gone on for a long time. The key for an observability system is to minimize the cost of the agent, and to be generally suitable for different kinds of observability data.')]),e._v(" "),a("p",[e._v("The agent would send the data out a short period after it is collected. Then, we would have less concern about overloading the local cache. One typical case would be endpoint (URI of HTTP, service of gRPC) metrics. Any service could easily have hundreds, even thousands of endpoints. An APM system must have these metrics analysis capabilities.")]),e._v(" "),a("p",[e._v("Furthermore, metrics aren't the only thing in the observability landscape; traces and logs are important too. SkyWalking is designed to provide a 100% sampling rate tracing capability in the production environment. Clearly, push mode is the only solution.")]),e._v(" "),a("p",[e._v("At the same time, using push mode natively doesn't mean SkyWalking can't do data pulling. In recent 8.x releases, SkyWalking supports fetching data from Prometheus-instrumented services for reducing the Non-Recurring Engineering of the end users. Also, pull mode is popular in the MQ based transport, typically as a Kafka consumer. The SkyWalking agent side uses the push mode, and the OAP server uses the pull mode.")]),e._v(" "),a("p",[e._v("The conclusion: push mode is the native way, but pull mode works in some special cases too.")]),e._v(" "),e._m(2),e._v(" "),a("p",[e._v("Metrics rely on mathematical theories and calculations. Percentile is a good measure for identifying the long tail issue, and reasonable average response time and successful rate are good SLO(s). But those are not all. Distributed tracing provides not just traces with detailed information, but high values metrics that can be analyzed.")]),e._v(" "),a("p",[e._v("The service topology map is required from Ops and SRE teams for the NOC dashboard and confirmation of system data flow. SkyWalking uses the "),a("a",{attrs:{href:"https://wu-sheng.github.io/STAM/",target:"_blank",rel:"noopener noreferrer"}},[e._v("STAM (Streaming Topology Analysis Method)"),a("OutboundLink")],1),e._v(" to analyze topology from the traces, or based on ALS (Envoy Access Log Service) in the service mesh environment. This topology and metrics of nodes (services) and lines (service relationships) can't be pulled from simple metrics SDKs.")]),e._v(" "),e._m(3),e._v(" "),a("p",[e._v("As with fixing the limitation of endpoint metrics collection, SkyWalking needs to do endpoint dependency analysis from trace data too. Endpoint dependency analysis provides more important and specific information, including upstream and downstream. Those dependency relationships and metrics help the developer team to locate the boundaries of a performance issue, to specific code blocks.")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),a("p",[e._v("Query stage calculation provides flexibility. Pre-calculation, in the analysis stage, provides better and much more stable performance. Recall our design principle: SkyWalking targets a large-scale distributed system. Query stage calculation was very limited in scope, and most metrics calculations need to be pre-defined and pre-calculated. The key of supporting large datasets is reducing the size of datasets in the design level. Pre-calculation allows the original data to be merged into aggregated results downstream, to be used in a query or even for an alert check.")]),e._v(" "),a("p",[e._v("TTL of metrics is another important business enabler. With the near linear performance offered by queries because of pre-calculation, with a similar query infrastructure, organizations can offer higher TTL, thereby providing extended visibility of performance.")]),e._v(" "),a("p",[e._v("Speaking of alerts, query-stage calculation also means the alerting query is required to be based on the query engine. But in this case, when the dataset increasing, the query performance could be inconsistent. The same thing happens in a different metrics query.")]),e._v(" "),e._m(6),e._v(" "),a("p",[e._v("Today, SkyWalking is monitoring super large-scale distributed systems in many large enterprises, including Alibaba, Huawei, Tencent, Baidu, China Telecom, and various banks and insurance companies. The online service companies have more traffic than the traditional companies, like banks and telecom suppliers.")]),e._v(" "),a("p",[e._v("SkyWalking is the observability platform used for a variety of use cases for distributed systems that are super-large by many measures:")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),a("p",[e._v("SkyWalking's approach to observability follows these principles:")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),a("ul",[a("li",[a("p",[e._v("Read about the "),a("a",{attrs:{href:"https://github.com/apache/skywalking/blob/master/CHANGES.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("SkyWalking 8.1 release highlights"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Get more SkyWalking updates on "),a("a",{attrs:{href:"https://twitter.com/asfskywalking?lang=en",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Sign up to hear more about SkyWalking and observability from "),a("a",{attrs:{href:"https://www.tetrate.io/contact-us/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tetrate"),a("OutboundLink")],1),e._v(".")])])])])},i,!1,null,null,null);t.default=n.exports}}]);