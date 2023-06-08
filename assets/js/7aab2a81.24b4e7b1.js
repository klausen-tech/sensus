"use strict";(self.webpackChunksensus_site=self.webpackChunksensus_site||[]).push([[962],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,d=p["".concat(l,".").concat(g)]||p[g]||m[g]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(4137));const i={sidebar_position:20},o="Configuring Sensus",s={unversionedId:"basic-usage/configuring-sensus",id:"basic-usage/configuring-sensus",title:"Configuring Sensus",description:"Using the CLI, you can alter some of Sensus's default behavior. There is a demo configuration.toml file found on the official Github Repository.",source:"@site/docs/20_basic-usage/20_configuring-sensus.md",sourceDirName:"20_basic-usage",slug:"/basic-usage/configuring-sensus",permalink:"/docs/basic-usage/configuring-sensus",draft:!1,editUrl:"https://github.com/klausen-tech/sensus-site/tree/source/docs/20_basic-usage/20_configuring-sensus.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Installing sensus-cli",permalink:"/docs/basic-usage/installing-cli"},next:{title:"Advanced Usage",permalink:"/docs/category/advanced-usage"}},l={},u=[{value:"Read and write the configuration to Sensus",id:"read-and-write-the-configuration-to-sensus",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-sensus"},"Configuring Sensus"),(0,a.kt)("p",null,"Using the CLI, you can alter some of Sensus's default behavior. There is a demo configuration.toml file found on the official Github Repository."),(0,a.kt)("p",null,"The demo configuration should be self-explanatory, however here's a table describing each configurable parameter:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Changing this name will change the BLE Advertisment Local Name. Useful if you have multiple Sensuses and want to identify each in Homeassistant."),(0,a.kt)("td",{parentName:"tr",align:null},"Any ASCII string up to 29 characters long.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Onboard Sample Time"),(0,a.kt)("td",{parentName:"tr",align:null},"By default, Sensus samples the onboard sensors every 30 seconds if on battery or every 10 seconds if plugged in. ",(0,a.kt)("br",null)," ",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Raising or lowering this value affects battery life.")),(0,a.kt)("td",{parentName:"tr",align:null},"Any time string: ",(0,a.kt)("inlineCode",{parentName:"td"},"10s, 1m10s, 1h, 2h30m"),", etc.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Minimum sample time is 1s",(0,a.kt)("br",null),"Maximum sample time is 4294967s (~7 weeks)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Probe Sample Time"),(0,a.kt)("td",{parentName:"tr",align:null},"By default, Sensus samples the soil probe (if present) every 30 seconds if on battery or every 10 seconds if plugged in. ",(0,a.kt)("br",null)," ",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Raising or lowering this value affects battery life.")),(0,a.kt)("td",{parentName:"tr",align:null},"Any time string: ",(0,a.kt)("inlineCode",{parentName:"td"},"10s, 1m10s, 1h, 2h30m"),", etc.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Minimum sample time is 1s",(0,a.kt)("br",null),"Maximum sample time is 4294967s (~7 weeks)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Probe Calibration"),(0,a.kt)("td",{parentName:"tr",align:null},"10-point look-up table that can be used to calibrate probe measurements"),(0,a.kt)("td",{parentName:"tr",align:null},"Each point is a key, value pair of: ",(0,a.kt)("br",null),"- Frequency: Percentage",(0,a.kt)("br",null),(0,a.kt)("br",null),"Frequency is a value from 0 to 1800000 Hz while percentage a value from 0 to 100%")))),(0,a.kt)("h2",{id:"read-and-write-the-configuration-to-sensus"},"Read and write the configuration to Sensus"),(0,a.kt)("p",null,"After you adapted the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Ardelean-Calin/sensus-cli/blob/main/default_config.toml"},"default_config.toml")," file to suit your desired application, you can program Sensus with the given configuration by connecting it via USB and running:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sensus config-set --port <your_port> --config <your_config.toml>")),(0,a.kt)("p",null,"A similar command can be used to read the current configuration:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sensus config-get --port <your_port> > output.toml")),(0,a.kt)("p",null,"For more information, see ",(0,a.kt)("inlineCode",{parentName:"p"},"sensus config-set --help")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"sensus config-get --help"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sample config flow",src:n(4329).Z,width:"716",height:"380"})))}m.isMDXComponent=!0},4329:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/configuring-3ca4aa7ad969804e94548f2b90a3904d.gif"}}]);