"use strict";(self.webpackChunkarchive_view=self.webpackChunkarchive_view||[]).push([[8668],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,d=p["".concat(s,".").concat(m)]||p[m]||v[m]||i;return t?n.createElement(d,a(a({ref:r},c),{},{components:t})):n.createElement(d,a({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u[p]="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88827:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>v,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const i={},a="1.2.1 Hardware Requirements for Archive Viewer Conversion Server",u={unversionedId:"Installation Manual/Introduction_OAV/1.2Requirements_AVC_Server/1.2.1Requirements _AVC_Server/1.2.1Requirements _AVC_Server",id:"Installation Manual/Introduction_OAV/1.2Requirements_AVC_Server/1.2.1Requirements _AVC_Server/1.2.1Requirements _AVC_Server",title:"1.2.1 Hardware Requirements for Archive Viewer Conversion Server",description:"If you deploy the Archive Viewer Conversion Server on the",source:"@site/docs/Installation Manual/1.Introduction_OAV/1.2Requirements_AVC_Server/1.2.1Requirements _AVC_Server/1.2.1Requirements _AVC_Server.md",sourceDirName:"Installation Manual/1.Introduction_OAV/1.2Requirements_AVC_Server/1.2.1Requirements _AVC_Server",slug:"/Installation Manual/Introduction_OAV/1.2Requirements_AVC_Server/1.2.1Requirements _AVC_Server/",permalink:"/estuate2/daa/archive-viewer/docs/next/Installation Manual/Introduction_OAV/1.2Requirements_AVC_Server/1.2.1Requirements _AVC_Server/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"1.2 Hardware and Software Requirements for Archive Viewer Conversion Server",permalink:"/estuate2/daa/archive-viewer/docs/next/Installation Manual/Introduction_OAV/1.2Requirements_AVC_Server/"},next:{title:"1.2.2 Software Requirements for Archive Viewer Conversion Server",permalink:"/estuate2/daa/archive-viewer/docs/next/Installation Manual/Introduction_OAV/1.2Requirements_AVC_Server/1.2.2Requirements _AVC_Server/"}},s={},l=[],c={toc:l},p="wrapper";function v(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"121-hardware-requirements-for-archive-viewer-conversion-server"},"1.2.1 Hardware Requirements for Archive Viewer Conversion Server"),(0,o.kt)("p",null,"If you deploy the Archive Viewer Conversion Server on the\nWindows system, you must deploy both Query and Reporting servers\nin Linux. You should store the Apache Parquet file in the shared\ndrive."),(0,o.kt)("p",null,"You should mount a drive from Windows to Linux where the query\nserver is installed and all the Parquet files are located."),(0,o.kt)("p",null,"Hardware requirements is listed below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"16 GB")," RAM or more")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"4-8 disks")," per node, configured without RAID")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Four")," or more cores per machine"))))}v.isMDXComponent=!0}}]);