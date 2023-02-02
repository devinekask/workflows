"use strict";(self.webpackChunktooling=self.webpackChunktooling||[]).push([[421],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},734:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const i={},r="Packages in practice",s={unversionedId:"modules/packages-03-practice",id:"modules/packages-03-practice",title:"Packages in practice",description:"Let us create a project where we make use of npm.",source:"@site/docs/modules/packages-03-practice.md",sourceDirName:"modules",slug:"/modules/packages-03-practice",permalink:"/workflows/modules/packages-03-practice",draft:!1,editUrl:"https://github.com/devinekask/workflows/blob/main/docs/modules/packages-03-practice.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NPM",permalink:"/workflows/modules/packages-02-npm"},next:{title:"Advantages of npm",permalink:"/workflows/modules/packages-04-advantages"}},l={},p=[{value:"init",id:"init",level:2},{value:"package.json",id:"packagejson",level:2},{value:"main",id:"main",level:3},{value:"scripts",id:"scripts",level:3},{value:"npm install",id:"npm-install",level:2}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"packages-in-practice"},"Packages in practice"),(0,o.kt)("p",null,"Let us create a project where we make use of npm."),(0,o.kt)("p",null,"Create an empty directory en open it in VS Code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir hellonpm\ncode hellonpm\n")),(0,o.kt)("h2",{id:"init"},"init"),(0,o.kt)("p",null,"To get started, we have to initialize our project. Make sure you run the following command in the hellonpm directory. The following command starts a wizard to set up some fields. When there is something written between (brackets), that means that this is the default/suggested value. You can simply press enter if you are satisfied with that value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ npm init\nThis utility will walk you through creating a package.json file.\nIt only covers the most common items, and tries to guess sensible defaults.\n\nSee `npm help init` for definitive documentation on these fields\nand exactly what they do.\n\nUse `npm install <pkg>` afterwards to install a package and\nsave it as a dependency in the package.json file.\n\nPress ^C at any time to quit.\npackage name: (hellonpm)\nversion: (1.0.0)\ndescription: getting to know eachother\nentry point: (index.js)\ntest command:\ngit repository:\nkeywords:\nauthor:\nlicense: (ISC)\nAbout to write to /Users/demouser/Documents/hellonpm/package.json:\n\n{\n  "name": "hellonpm",\n  "version": "1.0.0",\n  "description": "getting to know eachother",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "author": "",\n  "license": "ISC"\n}\n\n\nIs this OK? (yes)\n')),(0,o.kt)("p",null,"If you don't like these types of interrogation (and you find yourself pressing enter most of the time), you can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"-y")," flag after the init command. This is agreeing with all the defaults ;-)"),(0,o.kt)("h2",{id:"packagejson"},"package.json"),(0,o.kt)("p",null,"After you ran the previous command, a ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),' file was created. Although we have no intention of publishing this project as a new package, this project is simply considered as a "package" for npm. This file keeps track of all the packages we will use, scripts we would like to run, version, name, etc. You can ',(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/configuring-npm/package-json"},"take a look at the docs")," if you want to look up a specific property."),(0,o.kt)("h3",{id:"main"},"main"),(0,o.kt)("p",null,'When we would be creating a package, the file mentioned in the "main" property, would be the place npm expects the exports to be. It is generally considered as the "start" of your script.'),(0,o.kt)("p",null,"Let us create the index.js file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"touch index.js\n")),(0,o.kt)("p",null,"Now we are going to log something in there. Remember we are running Node.js script here, so things like ",(0,o.kt)("inlineCode",{parentName:"p"},"document.createElement()")," aren't an option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'console.log("Hello Node.js");\n')),(0,o.kt)("p",null,"You can run this Node.js script with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ node index.js\nHello Node.js\n")),(0,o.kt)("p",null,'Nothing special here, we can run pyhton and php similarly. We just say something like "Hey Node.js, execute the content of the file index.js"'),(0,o.kt)("p",null,'Since the index.js file is referenced as our "main" script in the package.json, we can run the following:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ node .\nHello Node.js\n")),(0,o.kt)("h3",{id:"scripts"},"scripts"),(0,o.kt)("p",null,"Notice the ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," property, we can create shortcuts here to run terminal commands. There is one by default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," script. This is quite readable, the output should be something like ",(0,o.kt)("inlineCode",{parentName:"p"},"Error: no test specified"),", right? Let us give it a try. We can run a ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," script with the command ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run [name of script you would like to run]")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ npm run test\n\n> hellonpm@1.0.0 test\n> echo "Error: no test specified" && exit 1\n\nError: no test specified\n')),(0,o.kt)("p",null,'Back to our index.js file. Add a script named "start" with the value of "node index.js" (or: "node .") to the list of scripts. Don\'t forget the trailing comma at the end of the test script line. This file is a JSON file after all.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'  "scripts": {\n-   "test": "echo \\"Error: no test specified\\" && exit 1"\n+   "test": "echo \\"Error: no test specified\\" && exit 1",\n+   "start": "node index.js"\n  },\n')),(0,o.kt)("p",null,"Now run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run start\n\n> hellonpm@1.0.0 start\n> node index.js\n\nHello Node.js\n")),(0,o.kt)("p",null,"Ok, I admit, the difference is not overwhelming. But in a while, we will need different settings for our projects to run local or in production and then these will be a huge time saver. Same thing for testing: we can write code that tests our code. With a test script we can set up a temporary database that gets filled with test data and erased afterwards. This would be annoying if this would happen on our local development database every time."),(0,o.kt)("p",null,"There is one little advantage tough, we didn't choose 'start' arbitrary as the name of our script. Since it is so common to run a 'start' script. One can just write..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n\n> hellonpm@1.0.0 start\n> node index.js\n\nHello Node.js\n")),(0,o.kt)("h2",{id:"npm-install"},"npm install"),(0,o.kt)("p",null,"Finally, let us install a package! We will use ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/nanoid"},"nanoid"),' mentioned in the previous chapter. At the top of the right column, you can see the "install" command. ',(0,o.kt)("inlineCode",{parentName:"p"},"npm i nanoid"),", this is the short notation for ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install nanoid"),", let's do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install nanoid\n\nadded 1 package, and audited 2 packages in 879ms\n\nfound 0 vulnerabilities\n")),(0,o.kt)("p",null,"A couple of things happened:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"nanoid is added as a dependency in the ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),", notice the version number"),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"package-lock.json")," file is generated"),(0,o.kt)("li",{parentName:"ul"},"a node_modules directory is generated, containing the nanoid code.")),(0,o.kt)("p",null,"We will discuss them all later on, but first let us use this package. Edit the index.js file like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { nanoid } from "nanoid";\nconst id = nanoid();\nconsole.log("Hello Node.js", "The id is:", id);\n')),(0,o.kt)("p",null,"If you run this, you get something like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ npm start\n\n> hellonpm@1.0.0 start\n> node .\n\n(node:25177) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.\n(Use `node --trace-warnings ...` to show where the warning was created)\n/Users/demouser/Documents/hellonpm/index.js:1\nimport { nanoid } from "nanoid";\n^^^^^^\n\nSyntaxError: Cannot use import statement outside a module\n    at Object.compileFunction (node:vm:360:18)\n    at wrapSafe (node:internal/modules/cjs/loader:1048:15)\n    at Module._compile (node:internal/modules/cjs/loader:1083:27)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1173:10)\n    at Module.load (node:internal/modules/cjs/loader:997:32)\n    at Module._load (node:internal/modules/cjs/loader:838:12)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)\n    at node:internal/main/run_main_module:18:47\n\nNode.js v18.8.0\n')),(0,o.kt)("p",null,"Yeah, we forgot about that one. We have to make clear that we would like to make use of this type of modules. Like they say in the Warning, add a ",(0,o.kt)("inlineCode",{parentName:"p"},'"type": "module",')," to the package.json and try again."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n\n> hellonpm@1.0.0 start\n> node .\n\nHello Node.js The id is: 7paYoH6CZva14wUhX9mgf\n")),(0,o.kt)("p",null,"And there you have it: we've installed and used a npm package. The first of many to come :-)"),(0,o.kt)("p",null,"If it is not entirely clear why we occupy us with all this stuff, see the next chapter where we take a look at some advantages."))}d.isMDXComponent=!0}}]);