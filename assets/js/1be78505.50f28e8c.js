"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9514,2006],{453:function(e,t,n){n.r(t),n.d(t,{default:function(){return Te}});var a=n(2784),r=n(6277),l=n(2293),i=n(4925),c=n(328),o=n(211),s=n(5663),d=n(4228),u=n(6301),m=n(1077),b=n(4126),p=n(2105);var v="backToTopButton_z1FD",f="backToTopButtonShow_w1wE";function h(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),r=n[0],l=n[1],i=(0,a.useRef)(!1),c=(0,b.Ct)(),o=c.startScroll,s=c.cancelScroll;return(0,b.RF)((function(e,n){var a=e.scrollY,r=null==n?void 0:n.scrollY;r&&(i.current?i.current=!1:a>=r?(s(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((function(e){e.location.hash&&(i.current=!0,l(!1))})),{shown:r,scrollToTop:function(){return o(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",o.k.common.backToTopButton,v,t&&f),type:"button",onClick:n})}var E=n(3181),g=n(7963),_=n(7683),k=n(1881),C=n(7896);function I(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var Z="collapseSidebarButton_Ftvb",N="collapseSidebarButtonIcon_c4WT";function S(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",Z),onClick:t},a.createElement(I,{className:N}))}var x=n(3717),T=n(1461),y=n(3364),w=Symbol("EmptyContext"),L=a.createContext(w);function A(e){var t=e.children,n=(0,a.useState)(null),r=n[0],l=n[1],i=(0,a.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return a.createElement(L.Provider,{value:i},t)}var F=n(7661),M=n(8698),P=n(9817),B=n(9741),H=["item","onItemClick","activePath","level","index"];function R(e){var t=e.categoryLabel,n=e.onClick;return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function W(e){var t=e.item,n=e.onItemClick,i=e.activePath,c=e.level,s=e.index,d=(0,T.Z)(e,H),u=t.items,m=t.label,b=t.collapsible,p=t.className,v=t.href,f=(0,_.L)().docs.sidebar.autoCollapseCategories,h=function(e){var t=(0,B.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,l.Wl)(e):void 0}),[e,t])}(t),E=(0,l._F)(t,i),g=(0,F.Mg)(v,i),k=(0,M.u)({initialState:function(){return!!b&&(!E&&t.collapsed)}}),I=k.collapsed,Z=k.setCollapsed,N=function(){var e=(0,a.useContext)(L);if(e===w)throw new y.i6("DocSidebarItemsExpandedStateProvider");return e}(),S=N.expandedItem,x=N.setExpandedItem,A=function(e){void 0===e&&(e=!I),x(e?null:s),Z(e)};return function(e){var t=e.isActive,n=e.collapsed,r=e.updateCollapsed,l=(0,y.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:E,collapsed:I,updateCollapsed:A}),(0,a.useEffect)((function(){b&&S&&S!==s&&f&&Z(!0)}),[b,S,s,Z,f]),a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":I},p)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(P.Z,(0,C.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!v&&b,"menu__link--active":E}),onClick:b?function(e){null==n||n(t),v?A(!1):(e.preventDefault(),A())}:function(){null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!I:void 0,href:b?null!=h?h:"#":h},d),m),v&&b&&a.createElement(R,{categoryLabel:m,onClick:function(e){e.preventDefault(),A()}})),a.createElement(M.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:I},a.createElement(J,{items:u,tabIndex:I?-1:0,onItemClick:n,activePath:i,level:c+1})))}var D=n(1344),q=n(2273),z="menuExternalLink_xK2O",O=["item","onItemClick","activePath","level","index"];function j(e){var t=e.item,n=e.onItemClick,i=e.activePath,c=e.level,s=(e.index,(0,T.Z)(e,O)),d=t.href,u=t.label,m=t.className,b=(0,l._F)(t,i),p=(0,D.Z)(d);return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",m),key:u},a.createElement(P.Z,(0,C.Z)({className:(0,r.Z)("menu__link",!p&&z,{"menu__link--active":b}),"aria-current":b?"page":void 0,to:d},p&&{onClick:n?function(){return n(t)}:void 0},s),u,!p&&a.createElement(q.Z,null)))}var U="menuHtmlItem_anEq";function V(e){var t=e.item,n=e.level,l=e.index,i=t.value,c=t.defaultStyle,s=t.className;return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),c&&[U,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:i}})}var K=["item"];function Y(e){var t=e.item,n=(0,T.Z)(e,K);switch(t.type){case"category":return a.createElement(W,(0,C.Z)({item:t},n));case"html":return a.createElement(V,(0,C.Z)({item:t},n));default:return a.createElement(j,(0,C.Z)({item:t},n))}}var Q=["items"];function G(e){var t=e.items,n=(0,T.Z)(e,Q);return a.createElement(A,null,t.map((function(e,t){return a.createElement(Y,(0,C.Z)({key:t,item:e,index:t},n))})))}var J=(0,a.memo)(G),X="menu_qiME",$="menuWithAnnouncementBar_hRfJ";function ee(e){var t=e.path,n=e.sidebar,l=e.className,i=function(){var e=(0,x.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,b.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}();return a.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",X,i&&$,l)},a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(J,{items:n,activePath:t,level:1})))}var te="sidebar_mhZE",ne="sidebarWithHideableNavbar__6UL",ae="sidebarHidden__LRd",re="sidebarLogo_F_0z",le=n(6591);function ie(e){var t=e.path,n=e.sidebar,l=e.onCollapse,i=e.isHidden,c=(0,_.L)(),o=c.navbar.hideOnScroll,s=c.docs.sidebar.hideable;return a.createElement("div",{className:(0,r.Z)(te,o&&ne,i&&ae)},o&&a.createElement(k.Z,{tabIndex:-1,className:re}),a.createElement(ee,{path:t,sidebar:n}),a.createElement(le.Z,null),s&&a.createElement(S,{onClick:l}))}var ce=a.memo(ie),oe=n(7136),se=n(7548),de=function(e){var t=e.sidebar,n=e.path,l=(0,oe.e)();return a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(J,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function ue(e){return a.createElement(se.Zo,{component:de,props:e})}var me=a.memo(ue);function be(e){var t=(0,g.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(ce,e),r&&a.createElement(me,e))}var pe="expandButton_qIqc",ve="expandButtonIcon_aOpf";function fe(e){var t=e.toggleSidebar;return a.createElement("div",{className:pe,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(I,{className:ve}))}var he="docSidebarContainer_aIKW",Ee="docSidebarContainerHidden_UIq3";function ge(e){var t,n=e.children,r=(0,d.V)();return a.createElement(a.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},n)}function _e(e){var t=e.sidebar,n=e.hiddenSidebarContainer,l=e.setHiddenSidebarContainer,i=(0,E.TH)().pathname,c=(0,a.useState)(!1),s=c[0],d=c[1],u=(0,a.useCallback)((function(){s&&d(!1),l((function(e){return!e}))}),[l,s]);return a.createElement("aside",{className:(0,r.Z)(o.k.docs.docSidebarContainer,he,n&&Ee),onTransitionEnd:function(e){e.currentTarget.classList.contains(he)&&n&&d(!0)}},a.createElement(ge,null,a.createElement(be,{sidebar:t,path:i,onCollapse:u,isHidden:s})),s&&a.createElement(fe,{toggleSidebar:u}))}var ke={docMainContainer:"docMainContainer_fv3b",docMainContainerEnhanced:"docMainContainerEnhanced_wOQt",docItemWrapperEnhanced:"docItemWrapperEnhanced_DUiu"};function Ce(e){var t=e.hiddenSidebarContainer,n=e.children,l=(0,d.V)();return a.createElement("main",{className:(0,r.Z)(ke.docMainContainer,(t||!l)&&ke.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",ke.docItemWrapper,t&&ke.docItemWrapperEnhanced)},n))}var Ie="docPage_pOTq",Ze="docsWrapper_BqXd";function Ne(e){var t=e.children,n=(0,d.V)(),r=(0,a.useState)(!1),l=r[0],i=r[1];return a.createElement(u.Z,{wrapperClassName:Ze},a.createElement(h,null),a.createElement("div",{className:Ie},n&&a.createElement(_e,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:i}),a.createElement(Ce,{hiddenSidebarContainer:l},t)))}var Se=n(2006),xe=n(4390);function Te(e){var t=e.versionMetadata,n=(0,l.hI)(e);if(!n)return a.createElement(Se.default,null);var u=n.docElement,m=n.sidebarName,b=n.sidebarItems;return a.createElement(a.Fragment,null,a.createElement(xe.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(c.FG,{className:(0,r.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:b},a.createElement(Ne,null,u)))))}},2006:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=n(2784),r=n(1077),l=n(328),i=n(6301);function c(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(i.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},5663:function(e,t,n){n.d(t,{E:function(){return c},q:function(){return i}});var a=n(2784),r=n(3364),l=a.createContext(null);function i(e){var t=e.children,n=e.version;return a.createElement(l.Provider,{value:n},t)}function c(){var e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}},6591:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(2784);function r(){var e=(0,a.useRef)(!1),t=(0,a.useRef)();return(0,a.useEffect)((function(){if(null!=t.current&&!1===e.current){var n=document.createElement("script");n.type="text/javascript",n.src="//cdn.carbonads.com/carbon.js?serve=CEAIC2QL&placement=react-leafletjsorg",n.id="_carbonads_js",t.current.appendChild(n),e.current=!0}}),[t.current]),a.createElement("span",{ref:t})}}}]);