"use strict";(self.webpackChunkarchive_view=self.webpackChunkarchive_view||[]).push([[1476],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},A=Object.keys(e);for(a=0;a<A.length;a++)n=A[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(a=0;a<A.length;a++)n=A[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,A=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||A;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var A=n.length,o=new Array(A);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<A;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>A,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const A={},o="3.2 Authenticating Users",i={unversionedId:"Installation Manual/Onboarding_Process/3.2_Authenticating_Users/3.2_Authenticating_Users",id:"Installation Manual/Onboarding_Process/3.2_Authenticating_Users/3.2_Authenticating_Users",title:"3.2 Authenticating Users",description:"Basic authentication",source:"@site/docs/Installation Manual/3.Onboarding_Process/3.2_Authenticating_Users/3.2_Authenticating_Users.md",sourceDirName:"Installation Manual/3.Onboarding_Process/3.2_Authenticating_Users",slug:"/Installation Manual/Onboarding_Process/3.2_Authenticating_Users/",permalink:"/estuate2/daa/archive-viewer/docs/next/Installation Manual/Onboarding_Process/3.2_Authenticating_Users/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3.1 Configuring Metadata Connection",permalink:"/estuate2/daa/archive-viewer/docs/next/Installation Manual/Onboarding_Process/3.1Configuring_Metadata_Connection/"},next:{title:"3.3 Configuring Conversion Server",permalink:"/estuate2/daa/archive-viewer/docs/next/Installation Manual/Onboarding_Process/3.3Configuring_Conversion_Server/"}},p={},l=[{value:"Basic authentication",id:"basic-authentication",level:3},{value:"LDAP authentication",id:"ldap-authentication",level:3}],s={toc:l},c="wrapper";function u(e){let{components:t,...A}=e;return(0,r.kt)(c,(0,a.Z)({},s,A,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"32-authenticating-users"},"3.2 Authenticating Users"),(0,r.kt)("h3",{id:"basic-authentication"},"Basic authentication"),(0,r.kt)("p",null,"You can create a super user with basic credentials."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Authentication user-1",src:n(19144).Z,width:"1366",height:"1014"})),(0,r.kt)("p",null,"Do the following to create a super user with basic credentials."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type the name of a basic user in the ",(0,r.kt)("strong",{parentName:"p"},"Name")," field.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type the username and password of the database in the\n",(0,r.kt)("strong",{parentName:"p"},"Username")," and ",(0,r.kt)("strong",{parentName:"p"},"Password")," fields respectively."))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The password should satisfy below conditions:"),(0,r.kt)("p",{parentName:"admonition"},"\u2212 ",(0,r.kt)("strong",{parentName:"p"},"8-20")," characters"),(0,r.kt)("p",{parentName:"admonition"},"\u2212 At least one ",(0,r.kt)("strong",{parentName:"p"},"UPPERCASE")," character"),(0,r.kt)("p",{parentName:"admonition"},"\u2212 At least one ",(0,r.kt)("strong",{parentName:"p"},"lowercase")," character"),(0,r.kt)("p",{parentName:"admonition"},"\u2212 At least one ",(0,r.kt)("strong",{parentName:"p"},"Number")),(0,r.kt)("p",{parentName:"admonition"},"\u2212 ",(0,r.kt)("strong",{parentName:"p"},"No")," spaces"),(0,r.kt)("p",{parentName:"admonition"},"\u2212 At least one Special Character from the following:"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"!~@#$%^&","*",".-"))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type the same password in the ",(0,r.kt)("strong",{parentName:"p"},"Confirm password")," field.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type the email address.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next")," after you specify all the above details to navigate to\nthe ",(0,r.kt)("strong",{parentName:"p"},"Convert server")," tab."))),(0,r.kt)("h3",{id:"ldap-authentication"},"LDAP authentication"),(0,r.kt)("p",null,"You can create a super user with LDAP credentials."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"LDAP authentication",src:n(42441).Z,width:"1366",height:"1200"})),(0,r.kt)("p",null,"Do the following to create a super user with LDAP credentials."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type the hostname or the IP address of the server in the ",(0,r.kt)("strong",{parentName:"p"},"Server IP/DNS")," field.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type the port number in the ",(0,r.kt)("strong",{parentName:"p"},"Port")," field.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type the username in the ",(0,r.kt)("strong",{parentName:"p"},"Privileged user DN")," field.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type the password of the user in the ",(0,r.kt)("strong",{parentName:"p"},"Password")," field.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"Use TLS")," checkbox to connect via LDAPs, otherwise,\nleave it unselected.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type the DN username in the ",(0,r.kt)("strong",{parentName:"p"},"Base DN")," field from where the\napplication should search for the user.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type the attribute value in the ",(0,r.kt)("strong",{parentName:"p"},"Search by username attribute"),"\nfield based on which the username will be validated.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Test")," to authenticate users.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Done")," when the connection is successful or ",(0,r.kt)("strong",{parentName:"p"},"Cancel")," to\ndiscard the changes."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"connection success-2",src:n(12227).Z,width:"490",height:"191"})),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Next")," after you specify all the above details to navigate to\nthe ",(0,r.kt)("strong",{parentName:"li"},"Convert server")," tab.")))}u.isMDXComponent=!0},19144:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3.2Authenticationuser-1-63031bc82b62a60f4278d22ab88778d2.png"},42441:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3.2LDAPauthentication-1-9db972ec76e98d8432f9b992ed0bf085.png"},12227:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeoAAAC/CAYAAAAxWZ/KAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAABVDSURBVHhe7d0PbJz1fcfxb7ZJVlcko6W6jNK5jIqYSb7REmchiUOFEgXFBiRsbQumTI0xLWYxOFSDGFYw0bCFptYuDnFbHKcSjZ12OnclcaKmZgxiIrI4LeQiQRw1aVICuxOpYinbYrXVs9/veX7P+bm/vvOdyc/O+1U9+Hl+z+957vf8zrnP/Z4/7qLOzk5HAACAlf7I/AQAABYiqAEAsNgiRzHzAADAMoyoAQCwGEENAIDFCGoAACxGUAMAYDGCGgAAixHUAABYjKAGAMBiBDUAABYjqAEAsBhBDQCAxQhqAAAsRlADAGAxghoAAIsR1AAAWIygBgDAYgQ1AAAWI6gBALAYQQ0AgMUIagAACvDoo4/Knj17zFI6ve6xxx4zS8UrQVBHpb+hQRr86ftRUw4AwMKzatUqN4gzhbUf0itXrjQlxSsyqONyoL1D5JmIRCLe1KH+R1iXVnz/U+pLUL/6SgQAuNI2btwo3/nOd9LC2g9pvU7XKZVFjmLmZ0EHdY/Ilk7ZEDJFATpgXr2+U5pv8Zaj32+QIysiZllv2yL9E+4q1wYV+H5dvW3LzpPewp0dEvla2Jt/t18ath3w5mWDdESaxVuTvL/KB/uks1Y3Krlcf5lIpV+rR9bIjTv7xd2zfr0VRxKvM70vTZ9B6PDqKf7+ktq7tFn6ujaI++pZyiV+QJ5q6RezJvuxu4LHmWOfAIBPTDCYtbkIaZcO6qK887JTX1/vTd87bgo9sZF25+V3zIJy/Hv1iWU93z4S8xZcx52X69ud/bpI73Prfsdfm6gb2++0B8qTlvU2idePOfu3vqz2qKSUJ7fQo9tZX2/qu+0IHIt+jcQ6vV/TRpdaduf1Nn4db3/ecWYrV2tGshxHYJvgdom+SjoeJXUZAPCJGRoackKhkDvp+blQ/DXqW5qTT3s3NEj/u2ZdVnH54EylrKkOjgPD0hzxRubx86elcs2yxCgx/LWIN6L96LycnOiXFv96uB6RTpyXmK503fVS+TP/9UOyocuMQFPK/VFpqsoH7zHrwrLiTjWGXWFqhj4nN3pzSkzOT5yU/hb/mnyLnP9Ily+R65cekA5d9v2ohGr9swjZytWrXH8++Ti8YnXwH8hpM5uJ7hsxx+NOetR/5gPVowCABckEdukERnjBEaQ2PaIOjJ4zSB9te9yR74yjRzMiDoxkPV55pq2TRqxKcOTvbWf2lTS6zkxvq88uBI9bSy5PGZmnninQfegeg5kynV0AAFxR/mha/wzOl1pxI2p9nVWN6oIj6OiRA1L5uSVmSeTAEf8WKD2KNrPuqPWkHBoPjgP1teSn5IAqCq/YICcPHUuMEvU12af2xyVUvUaNjo9M31SlX7/9gFfv3X63jt53c6RPmpeelg/0Ykq5WzZboWWyRo2QjySOV7XZ3V9U+k079Oi/78FKOX1eL2Ur1yNz9cOnzxSYWXebPddLX0TVN2cqIoFr0Kl9416z5+Y9APhEpd44lu0Gs1Io8mYyLfnmqqQbv3SQJW7kqpTKpSflxo1zczNZPB6X2L+3SMfPvDX+DWCp5dlvJmtL3DCWfNObPr4jsiJxM1fy8br7U68R/+hVafHb5d/gla1czweP485maT7TL4fW6DarLzcp/eLK5wY1AMCcy3V391zc+V2CoEYppX5p8CV/eQAAXCn6D57oZ6mzBbEO68OHD8uLL75oSopDUNsm5bGthKQzFQCAqwVBDQCAxfhb3wAAWIygBgDAYgQ1AAAWI6gBALAYQQ0AgMUIagAALEZQAwBgMYIaAACLEdQAAFiMoAYAwGIE9SfilAzUhyVcP6DmrpxTP2iQcLhBBt43BZhT5w52yP23LZElS9T07XFTWohx6Zn1tgAWipIGdfytAWl/qE6W6w8XNYW/3CBNTw7IWOL/PBm4SkyNye5v9Mnyl2ISi6np8WqzAgAKU6KgnpLxb9dJ+BtjUvHVXTKmP5jUNP7DLbL8t33SsLZB+t6ZMnUXMm8E1HPMLCbcJE3DUYkON6m5K+emr0YkGo1I082mAHPnQlxO8QUVQAmUJKgnD3bIpheule6hAWlZHZIyU172FzXS8nJEusNjMjB0SCZNOQAAyE8Jgjoqgy8MiDzWIg1/aYqSVEhD34QcfWGdlJuSBeu3MTlrZgEAKIXig/pMVEZPiNxVHU6MpFOVladH9OT7I9LT5l3P9q5ph6XmgXYZeCv9fGH8J01qfZMMnzolw9vul5qwqf9wj4z+xlTyHetxr4/3HJmU8Ze2SJ25mWd5Y7sMvpM+pg+2I1cbtMn3h6UjcA1+eW2TOUtgbvr5qyYZVEtdtd766ZuA4jL8kFp+aFjNJSvk9QvqhwwS239oClyqn/rb5f4vh702L1kudW09MvL+zOc/pk4F267vSbhf2vvHJP57U0Fz34/U19Sy3ygVf6tPttTXSNjvk/ot0petT/Ko69478YBfJ/vx5XU8M/aXea+/1CIjaintd2EW/QHgKucU6fJ/PuuEQiGne9wU5OHyeLdTW1XvdI7GnMt62St2LkYjztYNVU7j4IQp8cSGN6nXWOvUf3O3c/yCqX35rLPvibVOqOpZ59Alr8il9q3bU9u8w/n5OVP3dxedo9sbVXmjt2yktkO7GN3tPFxV5dRvP54o084OP+xUVTU63WN+3ctObExt3xOodz7ibMrYFzEn0hxyQs0RNTct8+tP90FR/ZCBt/0mJ3LeFKhXPfotte2GTufnfsMux5xDPY1O1YZu52iu/bnHWuU8/MqEc9EU+W1v+/FZU6K470fwNX1HnW7VV6FvHTXLmm5PrWrPVicSNXtV793x4a1OrX6tnyYa6dbLp677vq1oc3b7ddS2sdFOVafaaRsJvBt5HU8B/ZXtd6Gg/shUBuBqU3RQex/+BQT15UNOZ1XI2TQc+JAMiu5w1qpA3X3aLCuJgDlnCnzmw3D6A1wxQd35tllOUB966nUTTDvaRvyP5WkXR9rUPgJtuPhzZ2uWuoeCh1FIUOfqB9MHRfVDBulB7QXBpmCw+n5nfmbh7atT7SFF6naFBNN7O1WArnV2RM1ywmXn+M/2ORN+95t6+dRtzFjHcY5v119uOp1D5vtOfsdTQH8R1ABKpKSPZ+Vj6u1R6YnXyV3VIVOSomq53CWjMnAwagoC/tj89H22Qv5a/Rg7E/OWAz71J2YmoUIqbtMnJj1+O9Z8Mf20fPkX10idasOhqFd76p0xGdB1w+l1a7Icxkxy9oPpg1L0Q24hCa0VOfreRPqNfmn9l6w8dJPa+oQcT30wfIbtcjk3PiLjslaWV5mChDIJr6+Tm0z3+/Xyqat7Mb2OSPi2u9Qvw6CMv+ct53c8s+8vAJitooO67NNLzFx+Jn97zptJDZsU0dik5PtAV/wPhT/65bVjRFq+ZK4hBidzfXHqD27VvNtcCDv6oUIanuuWdfvvl6W31cmWbX3SN6RC8NTM16fLVj8ifY9flu4a77p610sDMvxaVOJFPIUXj4+p/37KW8hhut7MdUW6pC71/dVTbZdap76Imfc4v+OZfX8BwGwVHdTlajQXVj8vXiriE/qKqZO+X5o/SJFhGrh3lsPleaTspkbpfvucTLzynDRUq2HoqX3SVr9UwpuHxXyVyKJcap6MSPT0iPQ9vFYqy2JydGeThCvqpOeYTb8L7TKS4b31p7ZlplqexzP7/gKA2Sn+1HdVjTRUiUSOZThFa0z95lziztnyP6vwZsxIJpvwkvKsd5GXgteOSbmcR6bk2+ZC2NIPnjIpv6laamobpeWZPhkb7pKl/9YiA2/k0TmfVl/UVq+T+mY1Ch0ck93N49L1QmRWoRUK1aj//p+3kMN0vZnrqq+Qeb3HCXkdTxH9BQAFKsE16rA0bK6T+K6dMpzxEaFzMrJtuYT/YdD9sCu7bZ20hUZk33jmx23kxFHZJ+ukab0ep88drx1jMrA/wxeMM4Oy5ZnRxIdz2RdrpClLmzM98pWPnP1g+uCT6IfJd6LpoRqqkKXqx9TUZW85k/85JeOnUoOpTJZUqPZemJy+hltWpn5DRuR4Wt30mK2orpNqeU3GMozI468NyIj5/fLr5VN3nfRJ5LX092jqjS5p6Y9OX1bI83hm3V++AvoDALSS3EwWurdDdt9zTlq+3i7DJ6avqU59OC4DbQ3S8naNtH+jQdwxZFmNPP6Ddok90yJdr8Xdun79yRPD0v7EDlnS0yGNGf94SgmZdpRt2yrtP4nKpBnxu234xy0yce21krj6Xr5OWrbVy9FntkjPW16bdasnTwzK7v84lWh/QTL0gxbsg7nuh6kTA/LIA+ukoW1Axj80Lfj9pIz/cJcMhJpkrT61m9GkjG5rlLr6RunafyrRd1NnRmTwx1Gp/rsa93KIq6pBtvxtSPpe+LaM+t9JpuIy+tIO0Veak9x8vzz3ZJl0fbPD/T1y/X5Kzr3WJZsau9WXGhORpl4+dbu+Wy+jTz6S9L7F3+qRps2DIov9sxX5Hc/s+yugkP7QrVv4V18AzMTc/V0Cl52zozudrc21TrV+pERNVbfXO23P7U5+hMm4+N4+p/sxr65Xv8pZ/ZWtzs6x9MrpjxX5Mjy+Yh7PyvaIVOreg+1w23Bvm7Nj9Kw6mnQX34s4zwaOr3rDpsQzt56Ys+/x1U6VWT/96FXm56i1tNfP0gdaQf2QQcbtY4ecnU9scmpXeG0OVa12Gp/YmfE9S3bRmRjpdtrunT7e6g1tTvfI9HPICZcmnMhzjc7qKnOMX+92Dp3L3ubY2I7Afr33RO8303uST93YmPq9/Ipfp9qpbX7W2f3L1FbmeTz59lfWR/WUAvrj7E/bzO9GpvcdwNVgkf6PyWwAAGCZkpz6BgAAc4OgBgDAYgQ1AAAWI6gBALAYQQ0AgMUIagAALEZQAwBgMYIaAACLEdQAAFiMoAYAwGIENQAAFiOoAQCwGEENAIDFCGoAACxGUAMAYDGCGgAAixHUAABYjKAGAMBiBDUAABYjqAEAsBhBDQCAxQhqAAAsRlADAGAxghoAAIsR1AAAWIygBgDAYgQ1AAAWI6gBALAYQQ0AgMUIagAALEZQAwBgMYIaAACLEdQAAFiMoAYAwGIENQAAFiOoAQCwGEENAIDFCGoAACxGUAMAYDGCGgAAixHUAABYjKAGAMBiBDUAABYjqAEAsBhBDQCAxQhqAAAsRlADAGAxghoAAIsR1AAAWIygBgDAYgQ1AAAWI6gBALAYQQ0AgMUIagAALEZQAwBgMYIaAACLEdQAAFiMoAYAwGIENQAAFiOoAQCwGEENAIDFCGoAACxGUAMAYDGCGgAAixHUAABYjKAGAMBiBDUAABYjqAEAsBhBDQCAxQhqAAAstmjlypWOmQcwzw0NDckt2yrMEoCFgBE1AAAWI6gBALAYQQ0AgMUIagAALEZQAwBgMYIaAACLEdQAAFiMoAYAwGIENQAAFiOoAQCwGEENAIDFCGoAACxGUAMAYDGCGgAAixHUAABYjKAGAMBiBDUAABYjqAEAsFiJgvo+6T14WA4f9qeD0rvRrLri2mXQqvYA9uv9l0VycWfKpMoAfPJKENQ6CFulcqJXVq1a5U0jH8uyRwlHYD6bfN+Rax+cnt4sF8Ias3L64FJ3wuwUHdT3bb9Dbrh0THZtHjIlyvON0jtyUuQL95kCAPPdPa0iJ68TeXW9KQBy8MOZgC5e0UF9w+Jr5NLEYQnEtGvo+VZpfd6UPj0YOC1+WAaf9opdap27/mCv9A5N1zm4PSXkN/bKwcA+ktfrUX2ObQGUgCP/9ZHILbeYRW1T8unxpBDX63pVWeA0+tl/MusSFsmRwPbp6zHfEM6lV2RQ3yefXSzy8UepMR2gA7ZOZK9/WvzFY/KZugynxa9ZJotPTNeRWzcF6qggfrRSTr5o1q/qlZNLW03g65C+W2Qk0zoAc0YHcY3IK4nT4yJL/j4lrP9Ulf3KrP+RWr45uF6HtPox5m/vyLsVqmyTtxbzCwE9d0p0M1kOe1pl/apG6TKLsuewnLx0jSz+gln2XTome58386l1ng7LDWdfl9Y9ZlmN31vXr5K9v1IjZ3fdXmn0t9Xr3vi13PDlXvU1AsBc6VX/PvV17FazrEfcr7wvcvvtgevY/6uCfJeZP6iCWC0vud4sq0CuVCP0Ff565Z5fqLJbF8lmswy7+eGcLaBvXD9h5lCMIoN6SD68IPKZ63JHYnvglPbhw62y7BqzIk/3XfcZM5dsaM+Qt+7zdwf2r6a6G0wNAHPl8+Ui//2xWZiFzfqf9XWSOO3tTmqEDvvNNHrWAU1Il07RI+pfX7gk1yxOD8b7tvdKu555elDuXnxMev1T36t65dglt0rehj7K/mngrlMjam/fgWl9a9p1cwDFWCR/o4L13Xe9pbOTIn+e+Tt0Xrbrf9ZqRO2f9k5MrY5s96rAMjONngnouVF0UA9tfl1+rUa0STdwqXBuvXWZ3JHppq6Nq6SywBG1PB91X2P6urP33Lb7mu66O5KueesRPDeUAaX1aq93qvqeg95y669Eym9eJKrYWCQP3Czy5puOWZ7BrvS7yPXz29xQZhc/nGcK6HwE93WlpvmoBNeou6Rx1V75+NbWwKln7+ax9fqRrecbZe+FZdLqr2sSef0Xl+SGukFvxJ0X9RruTWhmH+a5bXf/7uu/Losf9dcdlrtlr+wa87ZUY365cOkanusGCqRDOHha+nY1gr72nwMhvEuNftW/swcSdURiP3ISQT4zR1aYG9D813hAlf6rGbHjypop2Obr6Hk+hvWilStX5vn1F4DthoaG5JZtFWYJKNxM4TwbtoXjfPuCQVADCwhBjdmYKUjn48g5VfAY59vxzP3jWQAAK+nwmmkEvRBCer4jqAHgKpMroP1wJqDtQVADwFUin4CGfQhqAFjA/HAmoOcvghoAFqiZwpmAnh8IagAALEZQA8AClW3EPNPpcNiFoAaABWym09wEtv0IagC4ShDY8xNBDQBXmXwCm9C2B0ENAFepXIGtEdh24G99AwsIf+sbxcoVzLlCPRfbwn62x3GlMKIGACTkGmX7I+xCgte2kJ6PCGoAQJpcga0VGti2mG+jaY1T38ACwqlvzKVcwZxrFO6bjyFpA0bUAIC85Bpl+yPs+TjKth1BDQAoSK7A1gjs0iKoAQCz4gd2rlE2ikdQAwCKNtMoG7NHUAMASobALj2CGgBQcn5gE9rFI6gBAHOKwC4OQQ0AgMUIagAALEZQAwBgMYIaAACLEdQAAFiMoAYAwGIENQAAFiOoAQCwlsj/A9tCgGDazIdjAAAAAElFTkSuQmCC"}}]);