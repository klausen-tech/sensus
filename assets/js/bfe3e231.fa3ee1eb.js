"use strict";(self.webpackChunksensus_site=self.webpackChunksensus_site||[]).push([[531],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(4137));const o={sidebar_position:0,description:"Log raw data to a CSV file. Raw data includes more information than found in the BLE advertisment."},i="Data Logging",l={unversionedId:"advanced-usage/data-logging",id:"advanced-usage/data-logging",title:"Data Logging",description:"Log raw data to a CSV file. Raw data includes more information than found in the BLE advertisment.",source:"@site/docs/30_advanced-usage/00_data-logging.md",sourceDirName:"30_advanced-usage",slug:"/advanced-usage/data-logging",permalink:"/docs/advanced-usage/data-logging",draft:!1,editUrl:"https://github.com/klausen-tech/sensus-site/tree/source/docs/30_advanced-usage/00_data-logging.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,description:"Log raw data to a CSV file. Raw data includes more information than found in the BLE advertisment."},sidebar:"tutorialSidebar",previous:{title:"Advanced Usage",permalink:"/docs/category/advanced-usage"},next:{title:"Probe Calibration",permalink:"/docs/advanced-usage/probe-calibration"}},s={},d=[],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-logging"},"Data Logging"),(0,r.kt)("p",null,"The logging functionality can be used if one wants to gather sensor data without having a Homeassistant install. Currently logging is done via ",(0,r.kt)("strong",{parentName:"p"},"USB-C"),", but BLE is in the works."),(0,r.kt)("p",null,"Logging is also used to ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced-usage/probe-calibration"},(0,r.kt)("strong",{parentName:"a"},"calibrate the soil probe")),", as it is the only way to receive RAW probe measurement values."),(0,r.kt)("p",null,"To start a logging session, simply connect Sensus via USB-C and run:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sensus log --port /dev/ttyUSB0 --every 1s --output-file out.csv")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--port ",(0,r.kt)("inlineCode",{parentName:"td"},"port")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"The port where Sensus is connected"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"COM3"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"/dev/ttyACM0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--every ",(0,r.kt)("inlineCode",{parentName:"td"},"timestring")),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"How often to retrieve data from Sensus. Not specifying means data is retrieved only once"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10s"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1m30s"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"30m"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1h"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--output-file ",(0,r.kt)("inlineCode",{parentName:"td"},"file")),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"CSV file where to store the measurements. Optionally, one can use STDOUT redirection instead of this option ( > outfile.csv )"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data.csv"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For more information")," you can consult the help page of the logging functionality:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sensus log --help")))}c.isMDXComponent=!0}}]);