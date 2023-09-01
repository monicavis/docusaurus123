"use strict";(self.webpackChunkarchive_view=self.webpackChunkarchive_view||[]).push([[1700],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),v=a,h=p["".concat(s,".").concat(v)]||p[v]||d[v]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},6583:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={},o="1.1 Components of the Archive Viewer",l={unversionedId:"Installation Manual/Introduction_OAV/1.1Components_AV/1.1Components_AV",id:"Installation Manual/Introduction_OAV/1.1Components_AV/1.1Components_AV",title:"1.1 Components of the Archive Viewer",description:"The Archive Viewer application is used to access data from Optim",source:"@site/docs/Installation Manual/1.Introduction_OAV/1.1Components_AV/1.1Components_AV.md",sourceDirName:"Installation Manual/1.Introduction_OAV/1.1Components_AV",slug:"/Installation Manual/Introduction_OAV/1.1Components_AV/",permalink:"/estuate2/daa/archive-viewer/docs/next/Installation Manual/Introduction_OAV/1.1Components_AV/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"1. Introduction to the Optim Archive Viewer",permalink:"/estuate2/daa/archive-viewer/docs/next/Installation Manual/Introduction_OAV/"},next:{title:"1.1.1 Architecture of the Archive Viewer",permalink:"/estuate2/daa/archive-viewer/docs/next/Installation Manual/Introduction_OAV/1.1Components_AV/1.1.1Architecture_AV/"}},s={},u=[{value:"Archive Viewer metadata database",id:"archive-viewer-metadata-database",level:3},{value:"Archive Viewer Conversion Server",id:"archive-viewer-conversion-server",level:3},{value:"Archive Viewer Query Server (optional)",id:"archive-viewer-query-server-optional",level:3},{value:"Archive Viewer Reporting Server (optional)",id:"archive-viewer-reporting-server-optional",level:3},{value:"Minimum Configuration",id:"minimum-configuration",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"11-components-of-the-archive-viewer"},"1.1 Components of the Archive Viewer"),(0,a.kt)("p",null,"The Archive Viewer application is used to access data from Optim\nArchive Files via open (JDBC/ODBC) technologies."),(0,a.kt)("p",null,"The various components required for the Archive Viewer to function\nare listed below:"),(0,a.kt)("h3",{id:"archive-viewer-metadata-database"},"Archive Viewer metadata database"),(0,a.kt)("p",null,"This database is a set of tables in which the Archive Viewer stores the data that are needed for processing and tracking the status of the processes. These\ntables are created when the user completes the first step of the\nOnboarding process. So, before you use Archive Viewer, you\nmust follow the Onboarding process to create or configure the\nArchive Viewer metadata database tables that are needed to\naccess the Archive Viewer metadata database. For more details, see\n",(0,a.kt)("a",{parentName:"p",href:"/estuate2/daa/archive-viewer/docs/next/Installation%20Manual/Onboarding_Process/"},"Section 3. Onboarding")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Supported Databases are:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Oracle, SQL Server, DB2\xae ,PostgreSQL , MySQL and SQLite for Linux\xae and Windows"))))),(0,a.kt)("h3",{id:"archive-viewer-conversion-server"},"Archive Viewer Conversion Server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This server unloads the data from the proprietary Archive File format to highly compressed open data files.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can install the Archive Viewer Conversion Server where\nthe Optim server is located or on a separate virtual machine\n(VM) where new Optim Server can be installed with Archive\nViewer.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can use an existing Optim directory or create a new\nOptim directory to store the table maps and convert requests\nthat will be created by the Archive Viewer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can deploy the Archive Viewer Conversion Server in\nboth Windows and Linux platforms.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you deploy the Archive Viewer Conversion Server on\nWindows, you should add a shared network drive consisting\nof Parquet files between Archive Viewer Conversion Server\nand Archive Viewer Query Server deployed on Linux."))),(0,a.kt)("h3",{id:"archive-viewer-query-server-optional"},"Archive Viewer Query Server (optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This server leverages Apache Spark, which is an open-source unified analytics engine for large scale data processing. It provides high performance access with\nno performance tuning necessary as in the standard industry\ncolumnar relational databases.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You must deploy the Archive Viewer Query Server in the\nLinux platform."))),(0,a.kt)("h3",{id:"archive-viewer-reporting-server-optional"},"Archive Viewer Reporting Server (optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This server leverages Apache Superset, which is a modern data exploration\nand visualization platform.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You must deploy the Archive Viewer Reporting Server in a\nLinux platform.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"All the above components can be installed on a single Linux\nplatform."))),(0,a.kt)("h2",{id:"minimum-configuration"},"Minimum Configuration"),(0,a.kt)("table",{class:"tableAlign"},(0,a.kt)("tbody",null,(0,a.kt)("tr",{style:{backgroundColor:"#22d3ee"}},(0,a.kt)("th",null,"Server"),(0,a.kt)("th",null,"Configuration Details")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Query Server")),(0,a.kt)("td",null,(0,a.kt)("tr",null,"Windows/Linux"),(0,a.kt)("tr",null,"4 core CPU"),(0,a.kt)("tr",null,"8 GB RAM"),(0,a.kt)("tr",null,"200 GB HDD"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Query Server")),(0,a.kt)("td",null,(0,a.kt)("tr",null,"Linux"),(0,a.kt)("tr",null,"4 core CPU"),(0,a.kt)("tr",null,"8GB RAM"),(0,a.kt)("tr",null,"4-8 disks per node"),(0,a.kt)("tr",null,"Configured without RAID (just as separate mount points)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Reporting Server (optional)")),(0,a.kt)("td",null,(0,a.kt)("tr",null,"Linux"),(0,a.kt)("tr",null,"2 core CPU"),(0,a.kt)("tr",null,"8 GB RAM"),(0,a.kt)("tr",null,"40 GB HDD"))))),(0,a.kt)("p",null,"The minimum configuration and/or consolidated VM details for\nConversion Server, Query Server and Reporting Server are listed in\nthe above table"))}d.isMDXComponent=!0}}]);