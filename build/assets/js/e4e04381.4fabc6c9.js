"use strict";(self.webpackChunkdocs_fwd=self.webpackChunkdocs_fwd||[]).push([[909],{3410:(s,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>n,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var r=a(8168),o=(a(6540),a(5680));const t={id:"many-forwards",title:"Many Forwards",sidebar_label:"Many Forwards",slug:"/many-forwards"},n=void 0,d={unversionedId:"many-forwards",id:"many-forwards",isDocsHomePage:!1,title:"Many Forwards",description:"Here's a cool way to port forward multiple services at the same time",source:"@site/docs/4.md",sourceDirName:".",slug:"/many-forwards",permalink:"/fwd-docs/docs/many-forwards",editUrl:"https://github.com/Rockz-one/fwd-docs/edit/main/docs/4.md",tags:[],version:"current",frontMatter:{id:"many-forwards",title:"Many Forwards",sidebar_label:"Many Forwards",slug:"/many-forwards"},sidebar:"docs",previous:{title:"Forward tcp",permalink:"/fwd-docs/docs/forward-tcp"},next:{title:"Questions",permalink:"/fwd-docs/docs/questions"}},l=[{value:"Bash",id:"bash",children:[],level:4}],c={toc:l},i="wrapper";function p(s){let{components:e,...a}=s;return(0,o.yg)(i,(0,r.A)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Here's a cool way to port forward multiple services at the same time"),(0,o.yg)("h4",{id:"bash"},"Bash"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"nohup ssh -R 443:localhost:8000 tls@rockz.run &  # website\nnohup ssh -R 3000:localhost:1883 tls@rockz.run & # mqtt\nnohup ssh -R 3001:localhost:22 rockz.run &       # ssh\n")),(0,o.yg)("p",null,"To find the sessions later..."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"ps -ef | grep -i ssh\n")))}p.isMDXComponent=!0}}]);