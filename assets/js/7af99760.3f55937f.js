"use strict";(self.webpackChunkarchive_view=self.webpackChunkarchive_view||[]).push([[1440],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,y=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return t?n.createElement(y,s(s({ref:r},c),{},{components:t})):n.createElement(y,s({ref:r},c))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92057:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const o={},s="1.3.1 Hardware Requirements for Archive Viewer Query Server",i={unversionedId:"Installation Manual/Introduction_OAV/1.3Requirements_AV_Query_Server/1.3.1Hardware_Requirements_AV_Query_Server/1.3.1Hardware_Requirements_AV_Query_Server",id:"version-11.7.0.1/Installation Manual/Introduction_OAV/1.3Requirements_AV_Query_Server/1.3.1Hardware_Requirements_AV_Query_Server/1.3.1Hardware_Requirements_AV_Query_Server",title:"1.3.1 Hardware Requirements for Archive Viewer Query Server",description:"Storage Systems",source:"@site/versioned_docs/version-11.7.0.1/Installation Manual/1.Introduction_OAV/1.3Requirements_AV_Query_Server/1.3.1Hardware_Requirements_AV_Query_Server/1.3.1Hardware_Requirements_AV_Query_Server.md",sourceDirName:"Installation Manual/1.Introduction_OAV/1.3Requirements_AV_Query_Server/1.3.1Hardware_Requirements_AV_Query_Server",slug:"/Installation Manual/Introduction_OAV/1.3Requirements_AV_Query_Server/1.3.1Hardware_Requirements_AV_Query_Server/",permalink:"/estuate2/daa/archive-viewer/docs/11.7.0.1/Installation Manual/Introduction_OAV/1.3Requirements_AV_Query_Server/1.3.1Hardware_Requirements_AV_Query_Server/",draft:!1,tags:[],version:"11.7.0.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"1.3 Hardware and Software Requirements for Archive Viewer Query Server",permalink:"/estuate2/daa/archive-viewer/docs/11.7.0.1/Installation Manual/Introduction_OAV/1.3Requirements_AV_Query_Server/"},next:{title:"1.3.2 Software Requirements for Archive Viewer Query Server",permalink:"/estuate2/daa/archive-viewer/docs/11.7.0.1/Installation Manual/Introduction_OAV/1.3Requirements_AV_Query_Server/1.3.2Software_Requirements_AV_Query_Server/"}},l={},u=[{value:"Storage Systems",id:"storage-systems",level:3},{value:"Local Disks",id:"local-disks",level:3},{value:"Memory",id:"memory",level:2}],c={toc:u},m="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"131-hardware-requirements-for-archive-viewer-query-server"},"1.3.1 Hardware Requirements for Archive Viewer Query Server"),(0,a.kt)("h3",{id:"storage-systems"},"Storage Systems"),(0,a.kt)("p",null,"It is important to place the Query Server as close as possible to the\nexternal storage systems because most of the query jobs should read\ninput data from an external storage system."),(0,a.kt)("p",null,"It is recommended that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the Query Server can be placed as close as possible, run the\nquery server installer on the same nodes as HDFS. It is easier to\nset up a Query Server standalone mode cluster on the same nodes,\nconfigure it and use Hadoop\u2019s memory and CPU to avoid\ninterference.\nFor more details on standalone mode cluster, see the below site:"),(0,a.kt)("p",{parentName:"li"},"\ud83d\udc49 ",(0,a.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/spark-standalone.html"},"https://spark.apache.org/docs/latest/spark-standalone.html"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If not, run the query server installer on different nodes in the local\narea network."))),(0,a.kt)("h3",{id:"local-disks"},"Local Disks"),(0,a.kt)("p",null,"While the Query Server uses its memory to perform most of the\ncomputation, it also uses local disks to store data that is not\nacceptable in RAM and to preserve intermediate output between\nstages."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It is recommended to have 4-8 disks per node, configured without\nRAID (as separate mount points)."),(0,a.kt)("li",{parentName:"ul"},"In Linux, you should mount the disks with the ",(0,a.kt)("strong",{parentName:"li"},"noatime")," option to\nreduce unnecessary writes.")),(0,a.kt)("p",null,"For more details on configuration, see the below site:"),(0,a.kt)("p",null,"\ud83d\udc49 ",(0,a.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/configuration.html"},"https://spark.apache.org/docs/latest/configuration.html")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"local.dir")," variable lists the local disks separated by a comma."),(0,a.kt)("h2",{id:"memory"},"Memory"),(0,a.kt)("p",null,"In general, the Query Server runs effectively if the memory per\nmachine is 8 GB through hundreds of GBs.\nIn all cases, it is recommended to allocate 75% of the memory for the\nQuery Server and leave the rest for the operating system and buffer\ncache.\nThe amount of memory required is dependent on your application.\nYou can determine the memory size by loading part of the dataset in\na Query Server RDD & clicking the ",(0,a.kt)("strong",{parentName:"p"},"Storage")," tab of the Query\nServer\u2019s monitoring UI ",(0,a.kt)("inlineCode",{parentName:"p"},"(http://<driver-node>:4040)"),".\nThe storage level and serialization format affect the\nmemory usage. For more details on tuning, see the below site:"),(0,a.kt)("p",null,"\ud83d\udc49 ",(0,a.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/tuning.html"},"https://spark.apache.org/docs/latest/tuning.html")))}p.isMDXComponent=!0}}]);