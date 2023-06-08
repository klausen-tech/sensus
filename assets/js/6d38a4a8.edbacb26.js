"use strict";(self.webpackChunksensus_site=self.webpackChunksensus_site||[]).push([[159],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(4137));const o={title:"Troubleshooting \ud83d\udd27",sidebar_position:50},s="Troubleshooting \ud83d\udd27",i={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting \ud83d\udd27",description:"Sensus started to appear as unavailable in Homeassistant",source:"@site/docs/99_troubleshooting.mdx",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",draft:!1,editUrl:"https://github.com/klausen-tech/sensus-site/tree/source/docs/99_troubleshooting.mdx",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Troubleshooting \ud83d\udd27",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Firmware Update \ud83e\uddf0",permalink:"/docs/firmware-update"}},l={},u=[{value:"Sensus started to appear as unavailable in Homeassistant",id:"sensus-started-to-appear-as-unavailable-in-homeassistant",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"troubleshooting-"},"Troubleshooting \ud83d\udd27"),(0,a.kt)("h2",{id:"sensus-started-to-appear-as-unavailable-in-homeassistant"},"Sensus started to appear as unavailable in Homeassistant"),(0,a.kt)("p",null,"For Sensuses shipped before 24 May 2023, there is a firmware and hardware bug where a failing temperature sensor\non the soil probe will cause the whole device to lock up. A software workaround has been implemented starting with\nfirmware version ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.0.2"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Unfortunately, due to a hardware bug in the Soil Probe, the steps below cannot fix the probe completely. That means, you will\nget the most important information, ",(0,a.kt)("strong",{parentName:"p"},"soil moisture"),", but soil temperature will no longer show up. A placeholder value of -100\xb0C (-148\xb0F)\nwill appear instead.")),(0,a.kt)("p",null,"To update Sensus to the latest version, follow these steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Ardelean-Calin/sensus-cli/releases/latest"},"latest sensus-cli release")),(0,a.kt)("li",{parentName:"ul"},"Disconnect the probe"),(0,a.kt)("li",{parentName:"ul"},"Connect Sensus via USB-C to your PC (make sure your cable supports data, as well as power) and press the reset button",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Note:")," With the probe disconnected, you should see the LED on Sensus execute a startup sequence"))),(0,a.kt)("li",{parentName:"ul"},"Update Sensus to the latest firmware by opening a Terminal / Command Prompt where sensus-cli is located and running:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sensus-cli update --port <YOUR_COM_PORT>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Important")," wait until the CLI says that it successfully updated to the latest version. ",(0,a.kt)("strong",{parentName:"li"},"Do not disconnect Sensus mid update!"))),(0,a.kt)("p",null,"Now you can connect the Probe again. If everything worked correctly, Sensus should now appear in Homeassistant."))}m.isMDXComponent=!0}}]);