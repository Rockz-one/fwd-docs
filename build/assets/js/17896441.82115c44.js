"use strict";(self.webpackChunkdocs_fwd=self.webpackChunkdocs_fwd||[]).push([[401],{2273:(e,t,a)=>{a.r(t),a.d(t,{default:()=>z});var n=a(6540),l=a(53),s=a(9312),i=a(5489),o=a(1312);const r=function(e){const{metadata:t}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(i.A,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(i.A,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var c=a(4586),d=a(4098),m=a(5594);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function v(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(o.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.A,{to:a,onClick:l},n.createElement(o.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){let{versionMetadata:t}=e;const{siteConfig:{title:a}}=(0,c.A)(),{pluginId:s}=(0,d.vT)({failfast:!0}),{savePreferredVersionName:i}=(0,m.g1)(s),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,d.HW)(s),u=o??(g=r).docs.find((e=>e.id===g.mainDocId));var g;return n.createElement("div",{className:(0,l.A)(m.GN.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(p,{siteTitle:a,versionMetadata:t})),n.createElement("div",{className:"margin-top--md"},n.createElement(v,{versionLabel:r.label,to:u.path,onClick:()=>i(r.name)})))}const h=function(e){let{versionMetadata:t}=e;return t.banner?n.createElement(g,{versionMetadata:t}):n.createElement(n.Fragment,null)};var b=a(8139);function E(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(o.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function N(e){let{lastUpdatedBy:t}=e;return n.createElement(o.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function f(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:m.GN.common.lastUpdated},n.createElement(o.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(N,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var A=a(8168);const _="iconEdit_mS5F",C=e=>{let{className:t,...a}=e;return n.createElement("svg",(0,A.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.A)(_,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function L(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.GN.common.editThisPage},n.createElement(C,null),n.createElement(o.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const k="tag_WK-t",T="tagRegular_LXbV",U="tagWithCount_S5Zl";const y=function(e){const{permalink:t,name:a,count:s}=e;return n.createElement(i.A,{href:t,className:(0,l.A)(k,{[T]:!s,[U]:s})},a,s&&n.createElement("span",null,s))},w={tags:"tags_NBRY",tag:"tag_F03v"};function x(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(o.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.A)(w.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:w.tag},n.createElement(y,{name:t,permalink:a}))}))))}const H={lastUpdated:"lastUpdated_mt2f"};function M(e){return n.createElement("div",{className:(0,l.A)(m.GN.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(x,e)))}function B(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:i}=e;return n.createElement("div",{className:(0,l.A)(m.GN.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(L,{editUrl:t})),n.createElement("div",{className:(0,l.A)("col",H.lastUpdated)},(a||s)&&n.createElement(f,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:s})))}function S(e){const{content:t}=e,{metadata:a}=t,{editUrl:s,lastUpdatedAt:i,formattedLastUpdatedAt:o,lastUpdatedBy:r,tags:c}=a,d=c.length>0,u=!!(s||i||r);return d||u?n.createElement("footer",{className:(0,l.A)(m.GN.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(M,{tags:c}),u&&n.createElement(B,{editUrl:s,lastUpdatedAt:i,lastUpdatedBy:r,formattedLastUpdatedAt:o})):n.createElement(n.Fragment,null)}function F(e){let{toc:t,className:a,linkClassName:l,isChild:s}=e;return t.length?n.createElement("ul",{className:s?void 0:a},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(F,{isChild:!0,toc:e.children,className:a,linkClassName:l}))))):null}function V(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:o,...r}=e;const c=(0,m.pN)(),d=i??c.tableOfContents.minHeadingLevel,u=o??c.tableOfContents.maxHeadingLevel,p=(0,m.WQ)({toc:t,minHeadingLevel:d,maxHeadingLevel:u}),v=(0,n.useMemo)((()=>{if(l&&s)return{linkClassName:l,linkActiveClassName:s,minHeadingLevel:d,maxHeadingLevel:u}}),[l,s,d,u]);return(0,m.i3)(v),n.createElement(F,(0,A.A)({toc:p,className:a,linkClassName:l},r))}const I="tableOfContents_vrFS";const G=function(e){let{className:t,...a}=e;return n.createElement("div",{className:(0,l.A)(I,"thin-scrollbar",t)},n.createElement(V,(0,A.A)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))},D={tocCollapsible:"tocCollapsible_aw-L",tocCollapsibleButton:"tocCollapsibleButton_zr6a",tocCollapsibleContent:"tocCollapsibleContent_0dom",tocCollapsibleExpanded:"tocCollapsibleExpanded_FSiv"};function O(e){let{toc:t,className:a,minHeadingLevel:s,maxHeadingLevel:i}=e;const{collapsed:r,toggleCollapsed:c}=(0,m.uW)({initialState:!0});return n.createElement("div",{className:(0,l.A)(D.tocCollapsible,{[D.tocCollapsibleExpanded]:!r},a)},n.createElement("button",{type:"button",className:(0,l.A)("clean-btn",D.tocCollapsibleButton),onClick:c},n.createElement(o.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.Nt,{lazy:!0,className:D.tocCollapsibleContent,collapsed:r},n.createElement(V,{toc:t,minHeadingLevel:s,maxHeadingLevel:i})))}var W=a(39);const R={docItemContainer:"docItemContainer_oiyr",docItemCol:"docItemCol_zHA2",tocMobile:"tocMobile_Tx6Y"};function z(e){const{content:t,versionMetadata:a}=e,{metadata:i,frontMatter:o}=t,{image:c,keywords:d,hide_title:u,hide_table_of_contents:p,toc_min_heading_level:v,toc_max_heading_level:g}=o,{description:E,title:N}=i,f=!u&&void 0===t.contentTitle,A=(0,s.A)(),_=!p&&t.toc&&t.toc.length>0,C=_&&("desktop"===A||"ssr"===A);return n.createElement(n.Fragment,null,n.createElement(b.A,{title:N,description:E,keywords:d,image:c}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.A)("col",{[R.docItemCol]:!p})},n.createElement(h,{versionMetadata:a}),n.createElement("div",{className:R.docItemContainer},n.createElement("article",null,a.badge&&n.createElement("span",{className:(0,l.A)(m.GN.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label),_&&n.createElement(O,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:g,className:(0,l.A)(m.GN.docs.docTocMobile,R.tocMobile)}),n.createElement("div",{className:(0,l.A)(m.GN.docs.docMarkdown,"markdown")},f&&n.createElement(W.e,null,N),n.createElement(t,null)),n.createElement(S,e)),n.createElement(r,{metadata:i}))),C&&n.createElement("div",{className:"col col--3"},n.createElement(G,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:g,className:m.GN.docs.docTocDesktop}))))}},39:(e,t,a)=>{a.d(t,{e:()=>d,A:()=>m});var n=a(8168),l=a(6540),s=a(53),i=a(1312),o=a(5594);const r="anchorWithStickyNavbar_y2LR",c="anchorWithHideOnScrollNavbar_3ly5",d=function(e){let{...t}=e;return l.createElement("header",null,l.createElement("h1",(0,n.A)({},t,{id:void 0}),t.children))},m=e=>{return"h1"===e?d:(t=e,function(e){let{id:a,...d}=e;const{navbar:{hideOnScroll:m}}=(0,o.pN)();return a?l.createElement(t,(0,n.A)({},d,{className:(0,s.A)("anchor",{[c]:m,[r]:!m}),id:a}),d.children,l.createElement("a",{"aria-hidden":"true",className:"hash-link",href:`#${a}`,title:(0,i.T)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,d)});var t}}}]);