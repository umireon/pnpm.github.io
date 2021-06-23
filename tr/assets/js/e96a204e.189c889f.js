(self.webpackChunk=self.webpackChunk||[]).push([[4021],{9848:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>s,kt:()=>d});var n=t(7689);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7500:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>o,metadata:()=>p,toc:()=>c,default:()=>u});var n=t(1424),a=t(2489),l=(t(7689),t(9848)),i=["components"],o={id:"exec",title:"pnpm exec"},p={unversionedId:"cli/exec",id:"version-6.x/cli/exec",isDocsHomePage:!1,title:"pnpm exec",description:"Execute a shell command in scope of a project.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/tr/cli/exec",editUrl:"https://crowdin.com/project/pnpm/tr",version:"6.x",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"version-6.x/docs",previous:{title:"pnpm run",permalink:"/tr/cli/run"},next:{title:"pnpm test",permalink:"/tr/cli/test"}},c=[{value:"Examples",id:"examples",children:[]},{value:"Parametreler",id:"parametreler",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--parallel",id:"--parallel",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],s={toc:c};function u(e){var r=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Execute a shell command in scope of a project."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," is added to the ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),", so ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm exec")," allows executing commands of dependencies."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"If you have Jest as a dependency of your project, there is no need to install Jest globally, just run it with ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm exec"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"exec")," part is actually optional when the command is not in conflict with a builtin pnpm command, so you may also just run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,l.kt)("h2",{id:"parametreler"},"Parametreler"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"S\xfcr\xfcm 2.9.0 ve sonras\u0131nda ge\xe7erli"),(0,l.kt)("p",null,"Execute the shell command in every project of the workspace."),(0,l.kt)("p",null,"The name of the current package is available through the environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0 onwards)."),(0,l.kt)("p",null,"\u015eu \u015fekilde:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# prune node_modules installations for all packages\npnpm -r exec -- rm -rf node_modules\n# view package information for all packages\npnpm -r exec -- pnpm view $PNPM_PACKAGE_NAME\n")),(0,l.kt)("h3",{id:"--parallel"},"--parallel"),(0,l.kt)("p",null,"S\xfcr\xfcm 5.1.0 ve sonras\u0131nda ge\xe7erli"),(0,l.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/tr/filtering"},"Buradan daha fazla bilgiye ula\u015fabilirsin.")))}u.isMDXComponent=!0}}]);