"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[654],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7523:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:8},l="toncli",i={unversionedId:"usage/toncli",id:"usage/toncli",title:"toncli",description:"toncli uses deploy wallet with the following params:",source:"@site/docs/usage/toncli.md",sourceDirName:"usage",slug:"/usage/toncli",permalink:"/tons-doc-test/usage/toncli",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Development",permalink:"/tons-doc-test/usage/development"}},c={},p=[],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"toncli"},"toncli"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/disintar/toncli"},"toncli")," uses deploy wallet with the following params:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"version v3r2"),(0,o.kt)("li",{parentName:"ul"},"subwallet-id 0"),(0,o.kt)("li",{parentName:"ul"},"workchain 0")),(0,o.kt)("p",null,"First a developer should create a tons wallet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ tons wallet create toncli-deployer -v v3r2 -w 0 -id 0 --save-to-whitelist toncli-deployer\n")),(0,o.kt)("p",null,"Then get the path of toncli deploy wallet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ python\n>>> from appdirs import user_config_dir\n>>> import os\n>>> user_config_dir("toncli")  # output may be different\n/Users/username/Library/Application Support/toncli\n>>> os.path.join(user_config_dir("toncli"), "wallet", "build")  # output may be different\n/Users/username/Library/Application Support/toncli/wallet/build\n')),(0,o.kt)("p",null,"Finally, replace toncli default wallet with the tons one"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ tons wallet to-addr-pk toncli-deployer '/Users/username/Library/Application Support/toncli/wallet/build'\n$ cd '/Users/username/Library/Application Support/toncli/wallet/build'\n$ mv contract.pk backup_old.pk && mv contract.addr backup_old.addr\n$ mv toncli-deployer.pk contract.pk && mv toncli-deployer.addr contract.addr\n")))}d.isMDXComponent=!0}}]);