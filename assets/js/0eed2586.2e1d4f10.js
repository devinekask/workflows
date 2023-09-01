"use strict";(self.webpackChunktooling=self.webpackChunktooling||[]).push([[126],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7217:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={},i="Packages",s={unversionedId:"modules/packages-01-modules",id:"modules/packages-01-modules",title:"Packages",description:"When writing code it is beneficial to split things up by functionality. It makes our code more structured and therefore clearer.",source:"@site/docs/modules/packages-01-modules.md",sourceDirName:"modules",slug:"/modules/packages-01-modules",permalink:"/workflows/modules/packages-01-modules",draft:!1,editUrl:"https://github.com/devinekask/workflows/blob/main/docs/modules/packages-01-modules.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/workflows/category/modules"},next:{title:"NPM",permalink:"/workflows/modules/packages-02-npm"}},l={},c=[{value:"Modules",id:"modules",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"packages"},"Packages"),(0,n.kt)("p",null,"When writing code it is beneficial to split things up by functionality. It makes our code more structured and therefore clearer."),(0,n.kt)("p",null,"When we take this one step further, it becomes easier to re-use the same code somewhere else."),(0,n.kt)("p",null,"If we go even further then, it becomes possible to share our code with others. And, off course, make use of others their code in our project."),(0,n.kt)("h2",{id:"modules"},"Modules"),(0,n.kt)("p",null,"Originally, JavaScript didn't have any mechanism to split and combine pieces of code. NodeJS came with support for this with require(), later, things like RequireJS, Webpack and Babel made this possible for JavaScript on the browser.\nIt was waiting until ES6 for a native module syntax in the browser. Luckily for us, the same syntax is available now in Nodejs."),(0,n.kt)("p",null,"For the rest of this chapter, we refer to ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"},"this article on MDN")," Be sure to pay close attention to the examples provided."))}d.isMDXComponent=!0}}]);