(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{318:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,b=s["".concat(a,".").concat(m)]||s[m]||d[m]||i;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),i=(n(0),n(318)),a={id:"git",title:"Working with Git"},c={unversionedId:"git",id:"version-5.x/git",isDocsHomePage:!1,title:"Working with Git",description:"\u0424\u0430\u0439\u043b\u044b \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-5.x/git.md",slug:"/git",permalink:"/ru/5.x/git",editUrl:"https://crowdin.com/project/pnpm/ru",version:"5.x",sidebar:"version-5.x/docs",previous:{title:"Only allow pnpm",permalink:"/ru/5.x/only-allow-pnpm"},next:{title:"Logos",permalink:"/ru/5.x/logos"}},l=[{value:"\u0424\u0430\u0439\u043b\u044b \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438",id:"\u0444\u0430\u0439\u043b\u044b-\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438",children:[{value:"\u041a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u044b \u0441\u043b\u0438\u044f\u043d\u0438\u044f",id:"\u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u044b-\u0441\u043b\u0438\u044f\u043d\u0438\u044f",children:[]}]}],u={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u0444\u0430\u0439\u043b\u044b-\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438"},"\u0424\u0430\u0439\u043b\u044b \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438"),Object(i.b)("p",null,"You should always commit the lockfile (",Object(i.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),"). This is for a multitude of reasons, the primary of which being:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"it enables faster installation for CI and production environments, due to being able to skip package resolution"),Object(i.b)("li",{parentName:"ul"},"it enforces consistent installations and resolution between development, testing, and production environments, meaning the packages used in testing and production will be exactly the same as when you developed your project")),Object(i.b)("h3",{id:"\u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u044b-\u0441\u043b\u0438\u044f\u043d\u0438\u044f"},"\u041a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u044b \u0441\u043b\u0438\u044f\u043d\u0438\u044f"),Object(i.b)("p",null,"pnpm can automatically resolve merge conflicts in ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),". If you have conflicts, just run ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm install")," and commit the changes."),Object(i.b)("p",null,"Be warned, however. It is advised that you review the changes prior to staging a commit, because we cannot guarantee that pnpm will choose the correct head - it instead builds with the most updated of lockfiles, which is ideal in most cases."))}p.isMDXComponent=!0}}]);