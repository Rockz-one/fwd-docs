"use strict";(self.webpackChunkdocs_fwd=self.webpackChunkdocs_fwd||[]).push([[634],{2468:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(6540),s=n(53),r=n(6112),l=n(5489),c=n(4586),o=n(6025);const u={heroBanner:"heroBanner_4JBe",buttons:"buttons_TK4-",features:"features_ENLn",featureImage:"featureImage_fOUF",status:"status_usa+","up-status":"up-status_Tp5p","down-status":"down-status_Ujww"},m="rockz.one";function i(e){let{port:t}=e;return a.createElement("pre",{className:"terminal"},a.createElement("div",{className:"terminalHeader"},"terminal"),a.createElement("div",{className:"terminalBody"},a.createElement("code",null,a.createElement("p",null,"$ ",a.createElement("span",{className:"textSelect command"},"ssh -R 443:localhost:",t," rockz.one")),a.createElement("br",null),a.createElement("p",null,"Your service is avalable at https://randomstring.",m))))}function p(){const[e,t]=(0,a.useState)(null);return(0,a.useEffect)((()=>{fetch("https://fwd.rockz.one/").then((e=>e.json())).then((e=>{t(!0)})).catch((e=>t(!1)))}),[]),a.createElement("div",{className:u.status},a.createElement("span",null,"fwd is ",e?"up":"down"," "),a.createElement("span",{className:`${e?u["up-status"]:u["down-status"]}`}," "))}const d=function(){const e=(0,c.A)(),{siteConfig:t={}}=e,[n,m]=(0,a.useState)(8e3);return a.createElement(r.A,{title:`${t.title}`,description:"Connect web applications running on your computer to the internet instantly"},a.createElement("header",{className:(0,s.A)("hero hero--primary",u.heroBanner)},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},t.title," ",a.createElement("span",{class:"rainbowtext"},"BETA")),a.createElement("p",{className:"hero__subtitle"},t.tagline),a.createElement("p",null,"forward your web app running on port ",a.createElement("input",{style:{width:"5em"},type:"number",id:"port",name:"port",min:"1",max:"65535",value:n,onChange:e=>m(e.target.value)})," now with"),a.createElement(i,{port:n}),a.createElement(p,null),a.createElement("div",{className:u.buttons},a.createElement(l.A,{className:(0,s.A)("button button--outline button--secondary button--lg",u.getStarted),to:(0,o.A)("docs/")},"Get Started")))),a.createElement("main",null))}}}]);