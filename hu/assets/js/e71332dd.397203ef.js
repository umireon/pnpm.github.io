(self.webpackChunk=self.webpackChunk||[]).push([[1066],{9848:(I,i,e)=>{"use strict";e.d(i,{Zo:()=>d,kt:()=>p});var t=e(7689);function a(I,i,e){return i in I?Object.defineProperty(I,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):I[i]=e,I}function l(I,i){var e=Object.keys(I);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(I);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(I,i).enumerable}))),e.push.apply(e,t)}return e}function n(I){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?l(Object(e),!0).forEach((function(i){a(I,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(i){Object.defineProperty(I,i,Object.getOwnPropertyDescriptor(e,i))}))}return I}function g(I,i){if(null==I)return{};var e,t,a=function(I,i){if(null==I)return{};var e,t,a={},l=Object.keys(I);for(t=0;t<l.length;t++)e=l[t],i.indexOf(e)>=0||(a[e]=I[e]);return a}(I,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(I);for(t=0;t<l.length;t++)e=l[t],i.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(I,e)&&(a[e]=I[e])}return a}var r=t.createContext({}),m=function(I){var i=t.useContext(r),e=i;return I&&(e="function"==typeof I?I(i):n(n({},i),I)),e},d=function(I){var i=m(I.components);return t.createElement(r.Provider,{value:i},I.children)},j={inlineCode:"code",wrapper:function(I){var i=I.children;return t.createElement(t.Fragment,{},i)}},N=t.forwardRef((function(I,i){var e=I.components,a=I.mdxType,l=I.originalType,r=I.parentName,d=g(I,["components","mdxType","originalType","parentName"]),N=m(e),p=a,k=N["".concat(r,".").concat(p)]||N[p]||j[p]||l;return e?t.createElement(k,n(n({ref:i},d),{},{components:e})):t.createElement(k,n({ref:i},d))}));function p(I,i){var e=arguments,a=i&&i.mdxType;if("string"==typeof I||a){var l=e.length,n=new Array(l);n[0]=N;var g={};for(var r in i)hasOwnProperty.call(i,r)&&(g[r]=i[r]);g.originalType=I,g.mdxType="string"==typeof I?I:a,n[1]=g;for(var m=2;m<l;m++)n[m]=e[m];return t.createElement.apply(null,n)}return t.createElement.apply(null,e)}N.displayName="MDXCreateElement"},3721:(I,i,e)=>{"use strict";e.r(i),e.d(i,{frontMatter:()=>g,contentTitle:()=>r,metadata:()=>m,toc:()=>d,default:()=>N});var t=e(2791),a=e(9698),l=(e(7689),e(9848)),n=["components"],g={},r="Benchmarks of JavaScript Package Managers",m={type:"mdx",permalink:"/hu/benchmarks",source:"@site/src/pages/benchmarks.md"},d=[{value:"Lots of Files",id:"lots-of-files",children:[]}],j={toc:d};function N(I){var i=I.components,g=(0,a.Z)(I,n);return(0,l.kt)("wrapper",(0,t.Z)({},j,g,{components:i,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"benchmarks-of-javascript-package-managers"},"Benchmarks of JavaScript Package Managers"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Last benchmarked at"),": ",(0,l.kt)("em",{parentName:"p"},"Jul 16, 2021, 2:46 AM")," (",(0,l.kt)("em",{parentName:"p"},"daily")," updated)."),(0,l.kt)("p",null,"This benchmark compares the performance of npm, pnpm, and Yarn (both regular and PnP variant)."),(0,l.kt)("p",null,"Here's a quick explanation of how these tests could apply to the real world:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clean install"),": How long it takes to run a totally fresh install: no lockfile present, no packages in the cache, no ",(0,l.kt)("inlineCode",{parentName:"li"},"node_modules")," folder."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"with cache"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"with lockfile"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"with node_modules"),": After the first install is done, the install command is run again."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"with cache"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"with lockfile"),": When a repo is fetched by a developer and installation is first run."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"with cache"),": Same as the one above, but the package manager doesn't have a lockfile to work from."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"with lockfile"),": When an installation runs on a CI server."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"with cache"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"with node_modules"),": The lockfile is deleted and the install command is run again."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"with node_modules"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"with lockfile"),": The package cache is deleted and the install command is run again."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"with node_modules"),": The package cache and the lockfile is deleted and the install command is run again."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"update"),": Updating your dependencies by changing the version in the ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," and running the install command again.")),(0,l.kt)("h2",{id:"lots-of-files"},"Lots of Files"),(0,l.kt)("p",null,"The app's ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm.github.io/blob/main/benchmarks/fixtures/alotta-files/package.json"},"here")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"action"),(0,l.kt)("th",{parentName:"tr",align:null},"cache"),(0,l.kt)("th",{parentName:"tr",align:null},"lockfile"),(0,l.kt)("th",{parentName:"tr",align:null},"node_modules"),(0,l.kt)("th",{parentName:"tr",align:null},"npm"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm"),(0,l.kt)("th",{parentName:"tr",align:null},"Yarn"),(0,l.kt)("th",{parentName:"tr",align:null},"Yarn PnP"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"install"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"38.5s"),(0,l.kt)("td",{parentName:"tr",align:null},"13.1s"),(0,l.kt)("td",{parentName:"tr",align:null},"1m 1.4s"),(0,l.kt)("td",{parentName:"tr",align:null},"49.1s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"install"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"1.5s"),(0,l.kt)("td",{parentName:"tr",align:null},"1.1s"),(0,l.kt)("td",{parentName:"tr",align:null},"2.6s"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"install"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"9.1s"),(0,l.kt)("td",{parentName:"tr",align:null},"3.5s"),(0,l.kt)("td",{parentName:"tr",align:null},"15s"),(0,l.kt)("td",{parentName:"tr",align:null},"2.1s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"install"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"13.3s"),(0,l.kt)("td",{parentName:"tr",align:null},"5.8s"),(0,l.kt)("td",{parentName:"tr",align:null},"22.3s"),(0,l.kt)("td",{parentName:"tr",align:null},"8.1s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"install"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"23.6s"),(0,l.kt)("td",{parentName:"tr",align:null},"10.9s"),(0,l.kt)("td",{parentName:"tr",align:null},"53.7s"),(0,l.kt)("td",{parentName:"tr",align:null},"40.4s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"install"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"19.7s"),(0,l.kt)("td",{parentName:"tr",align:null},"1.6s"),(0,l.kt)("td",{parentName:"tr",align:null},"8.8s"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"install"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"1.4s"),(0,l.kt)("td",{parentName:"tr",align:null},"1.1s"),(0,l.kt)("td",{parentName:"tr",align:null},"41.1s"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"install"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"19.2s"),(0,l.kt)("td",{parentName:"tr",align:null},"4.9s"),(0,l.kt)("td",{parentName:"tr",align:null},"46.8s"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Graph of the alotta-files results",src:e(6752).Z})))}N.isMDXComponent=!0},6752:(I,i,e)=>{"use strict";e.d(i,{Z:()=>t});const t="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMwMCAyODkiPgogIDxzdHlsZT4KICAgIC5mb250IHsgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IH0KICAgIC5zMyB7IGZvbnQtc2l6ZTogM3B4OyB9CiAgICAuczQgeyBmb250LXNpemU6IDRweDsgfQogICAgLnM1IHsgZm9udC1zaXplOiA1cHg7IH0KICAgIC5saW5lIHsgc3Ryb2tlOiAjY2FjYWNhOyB9CiAgICAud2lkdGggeyBzdHJva2Utd2lkdGg6IDAuNTsgfQogICAgLnRleHQgeyBmaWxsOiAjODg4OyB9CiAgPC9zdHlsZT4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI4OSIgZmlsbD0iI2ZmZiI+PC9yZWN0PgogIDxjaXJjbGUgY3g9IjQ0IiBjeT0iNiIgcj0iNCIgZmlsbD0iI2NkMzczMSI+PC9jaXJjbGU+CiAgPHRleHQgeD0iNDQiIHk9IjE0IiBjbGFzcz0iZm9udCBzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bnBtPC90ZXh0PgogIDx0ZXh0IHg9IjQ0IiB5PSIxOCIgY2xhc3M9ImZvbnQgczMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnY3LjIwLjA8L3RleHQ+CiAgPGNpcmNsZSBjeD0iNjAiIGN5PSI2IiByPSI0IiBmaWxsPSIjZmJhZTAwIj48L2NpcmNsZT4KICA8dGV4dCB4PSI2MCIgeT0iMTQiIGNsYXNzPSJmb250IHM0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5wbnBtPC90ZXh0PgogIDx0ZXh0IHg9IjYwIiB5PSIxOCIgY2xhc3M9ImZvbnQgczMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnY2LjEwLjI8L3RleHQ+CiAgPGNpcmNsZSBjeD0iNzYiIGN5PSI2IiByPSI0IiBmaWxsPSIjMjQ4ZWJkIj48L2NpcmNsZT4KICA8dGV4dCB4PSI3NiIgeT0iMTQiIGNsYXNzPSJmb250IHM0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5ZYXJuPC90ZXh0PgogIDx0ZXh0IHg9Ijc2IiB5PSIxOCIgY2xhc3M9ImZvbnQgczMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnYyLjQuMjwvdGV4dD4KICA8Y2lyY2xlIGN4PSI5MiIgY3k9IjYiIHI9IjQiIGZpbGw9IiMyNDhlYmQiPjwvY2lyY2xlPgogIDx0ZXh0IHg9IjkyIiB5PSIxNCIgY2xhc3M9ImZvbnQgczQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPllhcm4gUG5QPC90ZXh0PgogIDx0ZXh0IHg9IjkyIiB5PSIxOCIgY2xhc3M9ImZvbnQgczMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnYyLjQuMjwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iMjgiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+CiAgPHRleHQgeD0iNDAiIHk9IjI4MCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD4KICA8bGluZSB4MT0iOTAiIHkxPSIzMSIgeDI9IjkwIiB5Mj0iMjc1IiBjbGFzcz0ibGluZSB3aWR0aCI+PC9saW5lPgogIDx0ZXh0IHg9IjkwIiB5PSIyOCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTM8L3RleHQ+CiAgPHRleHQgeD0iOTAiIHk9IjI4MCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTM8L3RleHQ+CiAgPGxpbmUgeDE9IjE0MCIgeTE9IjMxIiB4Mj0iMTQwIiB5Mj0iMjc1IiBjbGFzcz0ibGluZSB3aWR0aCI+PC9saW5lPgogIDx0ZXh0IHg9IjE0MCIgeT0iMjgiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjI2PC90ZXh0PgogIDx0ZXh0IHg9IjE0MCIgeT0iMjgwIiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yNjwvdGV4dD4KICA8bGluZSB4MT0iMTkwIiB5MT0iMzEiIHgyPSIxOTAiIHkyPSIyNzUiIGNsYXNzPSJsaW5lIHdpZHRoIj48L2xpbmU+CiAgPHRleHQgeD0iMTkwIiB5PSIyOCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Mzk8L3RleHQ+CiAgPHRleHQgeD0iMTkwIiB5PSIyODAiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjM5PC90ZXh0PgogIDxsaW5lIHgxPSIyNDAiIHkxPSIzMSIgeDI9IjI0MCIgeTI9IjI3NSIgY2xhc3M9ImxpbmUgd2lkdGgiPjwvbGluZT4KICA8dGV4dCB4PSIyNDAiIHk9IjI4IiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj41MjwvdGV4dD4KICA8dGV4dCB4PSIyNDAiIHk9IjI4MCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NTI8L3RleHQ+CiAgPGxpbmUgeDE9IjI5MCIgeTE9IjMxIiB4Mj0iMjkwIiB5Mj0iMjc1IiBjbGFzcz0ibGluZSB3aWR0aCI+PC9saW5lPgogIDx0ZXh0IHg9IjI5MCIgeT0iMjgiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjY1PC90ZXh0PgogIDx0ZXh0IHg9IjI5MCIgeT0iMjgwIiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj42NTwvdGV4dD4KICA8dGV4dCB4PSIyOTAiIHk9IjIwIiBjbGFzcz0iZm9udCBzNCB0ZXh0IiBmb250LXN0eWxlPSJpdGFsaWMiIHRleHQtYW5jaG9yPSJlbmQiPkluc3RhbGxhdGlvbiB0aW1lIGluIHNlY29uZHMgKGxvd2VyIGlzIGJldHRlcik8L3RleHQ+CiAgPHJlY3QgeD0iNDAiIHk9IjM1IiB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI0MS41IiB3aWR0aD0iNTAiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjQ4IiB3aWR0aD0iMjM2IiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI1NC41IiB3aWR0aD0iMTg5IiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI2NSIgd2lkdGg9IjYiIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjcxLjUiIHdpZHRoPSI0IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI3OCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI4NC41IiB3aWR0aD0iMCIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iOTUiIHdpZHRoPSIzNSIgaGVpZ2h0PSI2IiBmaWxsPSIjY2QzNzMxIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTAxLjUiIHdpZHRoPSIxMyIgaGVpZ2h0PSI2IiBmaWxsPSIjZmJhZTAwIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTA4IiB3aWR0aD0iNTgiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjExNC41IiB3aWR0aD0iOCIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTI1IiB3aWR0aD0iNTEiIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjEzMS41IiB3aWR0aD0iMjIiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjEzOCIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxNDQuNSIgd2lkdGg9IjMxIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxNTUiIHdpZHRoPSI5MSIgaGVpZ2h0PSI2IiBmaWxsPSIjY2QzNzMxIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTYxLjUiIHdpZHRoPSI0MiIgaGVpZ2h0PSI2IiBmaWxsPSIjZmJhZTAwIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTY4IiB3aWR0aD0iMjA3IiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxNzQuNSIgd2lkdGg9IjE1NSIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTg1IiB3aWR0aD0iNzYiIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjE5MS41IiB3aWR0aD0iNiIgaGVpZ2h0PSI2IiBmaWxsPSIjZmJhZTAwIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTk4IiB3aWR0aD0iMzQiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjIwNC41IiB3aWR0aD0iMCIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjE1IiB3aWR0aD0iNSIgaGVpZ2h0PSI2IiBmaWxsPSIjY2QzNzMxIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjIxLjUiIHdpZHRoPSI0IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyMjgiIHdpZHRoPSIxNTgiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjIzNC41IiB3aWR0aD0iMCIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjQ1IiB3aWR0aD0iNzQiIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjI1MS41IiB3aWR0aD0iMTkiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjI1OCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjY0LjUiIHdpZHRoPSIwIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxsaW5lIHgxPSI0MCIgeTE9IjMxIiB4Mj0iNDAiIHkyPSIyNzUiIGNsYXNzPSJsaW5lIj48L2xpbmU+CiAgPHRleHQgeD0iMzgiIHk9IjQ0LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj5jbGVhbiBpbnN0YWxsPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSI3MC41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBjYWNoZTwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iNzQuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbG9ja2ZpbGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9Ijc4LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIG5vZGVfbW9kdWxlczwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMTAyLjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIGNhY2hlPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIxMDYuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbG9ja2ZpbGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjEzNC41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBjYWNoZTwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMTY0LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIGxvY2tmaWxlPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIxOTIuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggY2FjaGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjE5Ni41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBub2RlX21vZHVsZXM8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjIyMi41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBub2RlX21vZHVsZXM8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjIyNi41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBsb2NrZmlsZTwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMjU0LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIG5vZGVfbW9kdWxlczwvdGV4dD4KICA8dGV4dCB4PSIyOTAiIHk9IjI4NyIgY2xhc3M9ImZvbnQgczQgdGV4dCIgdGV4dC1hbmNob3I9ImVuZCI+VGVzdHMgd2VyZSBydW4gdXNpbmcgTm9kZS5qcyB2MTYuNS4wIGF0OiBKdWwgMTYsIDIwMjEsIDI6NDYgQU08L3RleHQ+Cjwvc3ZnPgo="}}]);