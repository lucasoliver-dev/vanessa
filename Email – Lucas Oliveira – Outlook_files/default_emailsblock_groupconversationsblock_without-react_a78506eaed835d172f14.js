(window.webpackJsonpLpc=window.webpackJsonpLpc||[]).push([[12],{1486:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c}));var n=a(14),r=a(3),i=Object(n.db)({list:{display:"block",margin:0,padding:0,listStyleType:"none"},listItem:{display:"block"},listItemHorizontal:{display:"inline-block"},verticalDivider:{padding:"0px 4px",flex:"none",flexGrow:0,minWidth:"0px !important",marginTop:"8px",marginBottom:"8px"},listItemHorizontalEnd:{display:"inline-block",flexGrow:1,justifyContent:"flex-end"}}),o="verticalDivider",c=function(e){var t=e.items,a=e.listClassName,n=e.listItemClassName,c=e.itemDisplay,l=e.ariaLabel,s=e.showLastItemOnRight,m=t&&t.filter(Boolean);if(!m||0===m.length)return r.createElement("div",{className:"".concat(i.list," ").concat(a||""),role:"list"});var u=m.map((function(e,t){var a,u;return u="Horizontal"===c?t+1===m.length&&s?i.listItemHorizontalEnd:(null===(a=e.props)||void 0===a?void 0:a.className)===o?i.verticalDivider:i.listItemHorizontal:i.listItem,r.createElement("div",{key:e.key||t,"aria-label":l(t+1,m.length),className:"".concat(u," ").concat(n||"")},e)}));return r.createElement("div",{className:"".concat(i.list," ").concat(a||"")},u)}},1846:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(2),r=a(323),i=a(3),o=a(1486),c=n.declareStringWithPlaceholders("accessibility-utils-ui.utilityStrings.accessibilityListItem"),l=function(){return(l=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function s(e){var t=function(){var e=Object(r.b)().lookupString;if(Object(n.isDev)())return function(e,t){return c({p0:e.toString(),p1:t.toString()})};var t=e(c.key);return function(e,a){return t({p0:e.toString(),p1:a.toString()})}}();return i.createElement(o.a,l({},e,{ariaLabel:t}))}},1896:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(90),r=a(14),i=a(3),o=a(752),c=a(1319),l=a(758),s=Object(n.makeGetStyles)((function(e){return{ghostedContainer:[Object(c.a)().fadeIn,l.a,{padding:"8px 24px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",position:"relative",display:"block",boxSizing:"border-box",width:"100%"}],subjectAndIndicators:{display:"flex",flexWrap:"nowrap",justifyContent:"space-between"},subject:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:e.palette.neutralPrimary},summary:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"block",color:e.palette.neutralSecondary}}}));function m(){var e=s(Object(n.useLPCTheme)());return i.createElement("div",{className:e.ghostedContainer},i.createElement("div",{className:e.subjectAndIndicators},i.createElement(o.a,{fadeInOutAnimation:!1,className:"".concat(e.subject," ").concat(r.j.medium)})),i.createElement(o.a,{fadeInOutAnimation:!1,className:"".concat(e.summary," ").concat(r.d.neutralPrimary," ").concat(r.j.small)}))}},2546:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(768),r=a(3),i=a(458),o=a(14),c=Object(i.a)((function(e){return{noContentStyle:[o.j.small,{padding:"4px 24px",color:e.palette.neutralSecondary,paddingTop:0,paddingBottom:0}]}}));function l(e){var t=e.message,a=c(Object(n.a)()).noContentStyle;return r.createElement("div",{className:a},t)}},2851:function(e,t,a){"use strict";a.d(t,"a",(function(){return q}));var n=a(716),r=a(3),i=a(106),o=a(1846),c=a(32),l=a(1896),s=a(2546),m=a(768),u=a(119),d=a(14),p=a(145),b=a(1404);function f(e,t){return Object(c.b)(i.t,{p0:e,p1:t})}var v=a(7),y=a(327);function j(e){return e.email.isAtMentioned?r.createElement(y.a,{iconName:v.b.Accounts}):null}function h(e){return e.entity.hasAttachments?r.createElement(y.a,{iconName:v.b.Attach}):null}var g=a(494),E=a(458),w=a(324),O=function(){return(O=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},N={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},k=O(O({},N),{padding:"".concat(g.k,"px ").concat(g.v,"px"),cursor:"pointer",position:"relative",display:"block",paddingTop:"".concat(g.o,"px"),paddingBottom:"".concat(g.o,"px"),backgroundColor:"transparent",boxSizing:"border-box",width:"100%"}),x=O(O(O({},k),{animationName:"fade-in",animationDuration:"0.267s",animationTimingFunction:"ease-out",animationFillMode:"both"}),{animationDelay:"0.267s"}),C={marginLeft:"10px",fontSize:"".concat(g.s,"px")},L={display:"flex",flexWrap:"nowrap",justifyContent:"space-between"},S=Object(E.a)((function(e){var t,a;return{container:Object(d.eb)(k,{selectors:(t={},t["&:hover, .".concat(w.a," &:focus")]={background:e.palette.neutralHover},t)}),ghostedContainer:Object(d.eb)(x,{selectors:(a={},a["&:hover, .".concat(w.a," &:focus")]={background:e.palette.neutralHover},a)}),summary:Object(d.eb)(N,{display:"block",color:e.palette.neutralSecondary}),summaryEmpty:Object(d.eb)(N,{display:"block",color:e.palette.neutralTertiary}),unreadIndicator:{position:"absolute !important",left:"0",width:"3px",height:"100%",marginLeft:"1px",marginTop:"-7px",backgroundColor:e.palette.themeSecondary,selectors:{"@media screen and (-ms-high-contrast: active)":{backgroundColor:"white",MsHighContrastAdjust:"none"},"@media screen and (-ms-high-contrast: black-on-white)":{backgroundColor:"black",MsHighContrastAdjust:"none"}}},subjectAndIndicators:{display:"flex",flexWrap:"nowrap",justifyContent:"space-between"},subject:Object(d.eb)(N,{color:e.palette.neutralPrimary}),subjectUnread:Object(d.eb)(N,{color:e.palette.themePrimary}),subjectEmpty:Object(d.eb)(N,{color:e.palette.neutralTertiary}),indicators:Object(d.eb)(C,{color:e.palette.neutralTertiary}),indicatorsUnread:Object(d.eb)(C,{color:e.palette.themePrimary}),red:{color:e.palette.red},senderAndTime:L,senderAndTimeUnread:L,sender:Object(d.eb)(N,{color:e.palette.neutralDark,flexShrink:"1"}),time:Object(d.eb)(N,{flexShrink:"0",marginLeft:"5px",color:e.palette.neutralSecondary,selectors:{"$senderAndTimeUnread &":{color:e.palette.themePrimary}}})}}));function A(e){var t=e.email,a=e.style;return"flagged"===t.flagStatus?r.createElement("span",{className:a},r.createElement(y.a,{iconName:v.b.Flag})):null}function T(e){var t=e.email,a=e.style;return"high"===t.importance?r.createElement("span",{className:a},r.createElement(y.a,{iconName:v.b.Important})):"low"===t.importance?r.createElement(y.a,{iconName:v.b.Down}):null}function I(e){var t=e.email,a=e.style;return t.isRead?null:r.createElement("span",{className:a})}function P(e){var t=e.email,a=e.isEmailOutbound,n=e.onEmailClick,o=S(Object(m.a)()),c=Object(p.d)(t.subject),l=t.isRead?o.subject:o.subjectUnread,s=t.subject?t.subject:"",u=t.fromName?t.fromName:"",v=t.received?t.received:"",y=Object(i.w)({subject:s,sender:u,time:v}),g=function(e,t){var a=[];e.isRead||a.push(t.unread),e.hasAttachments&&a.push(t.hasAttachments),a.push(t.senderLabelFormat),a.push(t.subjectLabelFormat),a.push(t.sentLabelFormat);var n="";return a.forEach((function(e){n=f(n,e)})),n}(t,y);return r.createElement(b.a,{className:o.container,"aria-label":g,onClick:function(){return n(t)},role:"listitem"},r.createElement(I,{email:t,style:o.unreadIndicator}),r.createElement("span",{className:o.subjectAndIndicators},r.createElement("span",{className:"".concat(l," ").concat(d.j.mediumPlus),title:t.subject||y.noSubjectLabel},c?y.noSubjectLabel:t.subject),r.createElement("span",{className:"".concat(t.isRead?o.indicators:o.indicatorsUnread)},r.createElement(A,{email:t,style:o.red}),r.createElement(h,{entity:t}),r.createElement(j,{email:t}),r.createElement(T,{email:t,style:o.red}))),r.createElement("span",{className:"".concat(t.isRead?o.senderAndTime:o.senderAndTimeUnread)},r.createElement("span",{className:"".concat(o.sender," ").concat(d.j.small)},a?t.fromName:y.youSenderLabel),r.createElement("span",{className:"".concat(o.time," ").concat(d.d.neutralSecondary," ").concat(d.j.small)},t.received||"")),r.createElement("span",{className:"".concat(o.summary," ").concat(d.j.small),title:t.preview||""},Object(p.d)(t.preview)?y.noBodyLabel:t.preview))}function D(e){var t="";if(e.uniqueSenders&&e.uniqueSenders[0]){t=e.uniqueSenders[0];for(var a=1;a<e.uniqueSenders.length;a++)t="".concat(t,", ").concat(e.uniqueSenders[a])}return t}function F(e){var t=e.groupConversation,a=e.onGroupConversationClick,n=S(Object(m.a)()),o=Object(p.d)(t.topic),c=o?n.subjectEmpty:n.subject,l=t.topic?t.topic:"",s=D(t),u=t.lastDeliveredDateTime?t.lastDeliveredDateTime:"",v=t.preview?t.preview:"",y=Object(i.y)({subject:l,sender:s,time:u,summary:v}),j=function(e,t){var a=[];e.hasAttachments&&a.push(t.hasAttachments),a.push(t.senderLabelFormat),a.push(t.subjectLabelFormat),a.push(t.sentLabelFormat),a.push(t.previewLabelFormat);var n="";return a.forEach((function(e){n=f(n,e)})),n}(t,y);return r.createElement(b.a,{className:n.container,ariaLabel:j,onClick:function(){return a(t)},ariaRole:"listitem"},r.createElement("span",{className:n.subjectAndIndicators},r.createElement("span",{className:"".concat(c," ").concat(d.j.mediumPlus)},o?y.noTopicLabel:t.topic),r.createElement("span",{className:n.indicatorsUnread},r.createElement(h,{entity:t}))),r.createElement("span",{className:n.senderAndTime},r.createElement("span",{className:"".concat(n.sender," ").concat(d.j.small)},D(t)),r.createElement("span",{className:"".concat(n.time," ").concat(d.d.neutralSecondary," ").concat(d.j.small)},t.lastDeliveredDateTime?t.lastDeliveredDateTime:"")),r.createElement("span",{className:"".concat(Object(p.d)(t.preview)?n.summaryEmpty:n.summary," ").concat(d.j.small)},Object(p.d)(t.preview)?y.noPreviewLabel:t.preview))}var M={listStyle:"none",margin:"0",padding:"0"},H=Object(E.a)((function(e){return{resetList:M,emailsList:M,noEmailsContainer:{padding:"".concat(g.k,"px ").concat(g.v,"px"),color:e.palette.neutralSecondary,paddingTop:"0",paddingBottom:"0"}}}));function R(e){var t,a=e.persona,n=e.messageEntities,r=e.isLoading,o=e.isMePersona,l=e.onMessageEntityClick,s=H(Object(m.a)()),u=Object(c.a)(i.g),d=Object(c.b)(i.h,{p0:"".concat(null!==(t=a.displayName)&&void 0!==t?t:"")}),p=Object(c.a)(i.i);return r?z(s.emailsList):U(n)?B(o,u,d,p):G(o,n,a,s.emailsList,l)}var z=Object(u.c)((function(e){for(var t=[],a=0;a<3;a++)t.push(r.createElement(l.a,{key:a}));return r.createElement(o.a,{listClassName:e,items:t,itemDisplay:"Vertical"})})),U=Object(u.c)((function(e){return!e||0===e.length})),B=Object(u.c)((function(e,t,a,n){var i="";return i=void 0!==e?e?t:a:n,r.createElement(s.a,{message:i})})),G=Object(u.c)((function(e,t,a,n,i){var c=t.slice(0,3).map((function(t,n){if(function(e){return"Email"===e.kind}(t)){var o=t,c=!e&&function(e){var t=e.email,a=e.currentPersona,n=e.loggedInPersona,r=e.isMePersona;if(!a)return!1;var i=(t.emailFrom||"").toLowerCase(),o=(function(e){return e.email&&e.email.Address||void 0}(a)||"").toLowerCase(),c=a&&a.extraEmails&&a.extraEmails.map((function(e){return e.Address.toLowerCase()}))||[],l=!!a&&(i===o||-1!==c.indexOf(i));if(!l&&n&&n.displayName&&a.displayName&&a.displayName.toLowerCase()!==n.displayName.toLowerCase()||!l&&r){var s=(t.fromName||"").toLowerCase();l=!!a&&void 0!==a.displayName&&s===a.displayName.toLowerCase()}return l}({email:o,currentPersona:a});return r.createElement(P,{key:n,email:o,isEmailOutbound:c,onEmailClick:function(){return i(o,n)}})}var l=t;return r.createElement(F,{key:n,groupConversation:l,onGroupConversationClick:function(){return i(l)}})}));return r.createElement(o.a,{listClassName:"".concat(n," ").concat(d.j.small),items:c,itemDisplay:"Vertical"})}));function q(e){var t=e.persona,a=e.messageEntities,o=e.isLoading,c=e.isMePersona,l=e.showError,s=e.onTitleClick,m=e.onFooterClick,u=e.onRetryClick,d=e.onMessageEntityClick,p=Object(i.x)();return t?r.createElement(n.a,{logName:"EmailBlock",title:p.title,footerText:W(a,p),altText:p.title,showLoading:o,accessibilityLabel:p.ariaLabel,showError:l,onHeaderSelected:s,onFooterSelected:m,onRetrySelected:u,hideFooter:a.length<=3},r.createElement(R,{persona:t,messageEntities:a,isLoading:o,isMePersona:c,onMessageEntityClick:d})):null}function W(e,t){var a;return"Email"===(null===(a=e[0])||void 0===a?void 0:a.kind)?t.footerEmail:t.footerGroupConversation}}}]);