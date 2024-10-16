"use strict";(self.webpackChunktooling=self.webpackChunktooling||[]).push([[356],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(r),f=i,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={},s="Tips and Tricks",a={unversionedId:"git/basics/git-07-tipsandtricks",id:"git/basics/git-07-tipsandtricks",title:"Tips and Tricks",description:"Renaming files and folders",source:"@site/docs/git/basics/git-07-tipsandtricks.md",sourceDirName:"git/basics",slug:"/git/basics/git-07-tipsandtricks",permalink:"/workflows/git/basics/git-07-tipsandtricks",draft:!1,editUrl:"https://github.com/devinekask/workflows/blob/main/docs/git/basics/git-07-tipsandtricks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Branching",permalink:"/workflows/git/basics/git-06-branches"},next:{title:"Collaboration",permalink:"/workflows/category/collaboration"}},l={},c=[{value:"Renaming files and folders",id:"renaming-files-and-folders",level:2},{value:"Don&#39;t create repositories inside iCloud/OneDrive or other cloud-synced folders",id:"dont-create-repositories-inside-icloudonedrive-or-other-cloud-synced-folders",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tips-and-tricks"},"Tips and Tricks"),(0,i.kt)("h2",{id:"renaming-files-and-folders"},"Renaming files and folders"),(0,i.kt)("p",null,"Git's behavior regarding file and folder names is influenced by the case sensitivity of the underlying file system. Some file systems, like macOS by default, are case-insensitive, while others like those in most Linux distributions are case-sensitive. To be sure git picks up filename changes, --especially when you are only changing the casing of a filename-- one should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"git mv")," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git mv MyFileName myfilename\n")),(0,i.kt)("h2",{id:"dont-create-repositories-inside-icloudonedrive-or-other-cloud-synced-folders"},"Don't create repositories inside iCloud/OneDrive or other cloud-synced folders"),(0,i.kt)("p",null,"Since the .git directory contains a lot of files and folders, syncing takes forever and can cause issues. It's best to create repositories in a local folder."))}u.isMDXComponent=!0}}]);