"use strict";(globalThis["webpackChunkpok"]=globalThis["webpackChunkpok"]||[]).push([[17],{5017:(e,a,l)=>{l.r(a),l.d(a,{default:()=>V});var t=l(1758),o=l(8734),n=l(6394);let u=null;async function r(){try{"wakeLock"in navigator&&(u=await navigator.wakeLock.request("screen"),console.log("Wake lock is active"))}catch(e){console.error(`${e.name}, ${e.message}`)}}function b(){null!==u&&u.release().then((()=>{u=null,console.log("Wake lock released")}))}var i=l(455);const c=e=>((0,t.Qi)("data-v-37628202"),e=e(),(0,t.jt)(),e),k={class:"row no-wrap"},d=c((()=>(0,t.Lk)("span",{class:"text-h6"},"PoK",-1))),s=c((()=>(0,t.Lk)("img",{src:"icons/icon-128x128.png",alt:"Proben ohne Krach"},null,-1))),f=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(e){(0,t.sV)((()=>{r()})),(0,t.xo)((()=>{b()}));const a=(0,o.KR)(!1),l=(0,i.rd)();(0,n.Q)();function u(){a.value=!a.value}function c(){l.go(-1)}function f(){window.open("http://www.proben-ohne-krach.de/","_blank")}function _(){window.open("http://www.proben-ohne-krach.de/kontakt","_blank")}function m(){window.open("https://www.proben-ohne-krach.de/live-session-take-a-seat-/","_blank")}return(e,l)=>{const o=(0,t.g2)("q-btn"),n=(0,t.g2)("q-toolbar"),r=(0,t.g2)("q-space"),b=(0,t.g2)("q-toolbar-title"),i=(0,t.g2)("q-avatar"),F=(0,t.g2)("q-header"),g=(0,t.g2)("q-route-tab"),v=(0,t.g2)("q-tabs"),h=(0,t.g2)("q-footer"),p=(0,t.g2)("q-icon"),w=(0,t.g2)("q-item-section"),A=(0,t.g2)("q-item-label"),Q=(0,t.g2)("q-item"),W=(0,t.g2)("q-separator"),q=(0,t.g2)("q-list"),L=(0,t.g2)("q-drawer"),X=(0,t.g2)("router-view"),y=(0,t.g2)("q-page-container"),C=(0,t.g2)("q-layout"),I=(0,t.gN)("ripple");return(0,t.uX)(),(0,t.Wv)(C,{view:"hhh Lpr lFf"},{default:(0,t.k6)((()=>[(0,t.bF)(F,{class:"bg-dark"},{default:(0,t.k6)((()=>[(0,t.Lk)("div",k,[e.$route.meta.showBackArrow?((0,t.uX)(),(0,t.Wv)(n,{key:0},{default:(0,t.k6)((()=>[(0,t.bF)(o,{flat:"",round:"",dense:"",icon:"arrow_back",onClick:c})])),_:1})):(0,t.Q3)("",!0),e.$route.meta.showHeader?((0,t.uX)(),(0,t.Wv)(n,{key:1},{default:(0,t.k6)((()=>[(0,t.bF)(o,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:u}),(0,t.bF)(r),(0,t.bF)(b,null,{default:(0,t.k6)((()=>[d])),_:1}),(0,t.bF)(r),(0,t.bF)(i,{class:"float-right"},{default:(0,t.k6)((()=>[s])),_:1})])),_:1})):(0,t.Q3)("",!0)])])),_:1}),e.$route.meta.hideFooter?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.Wv)(h,{key:0,class:"bg-dark q-pb-md"},{default:(0,t.k6)((()=>[(0,t.bF)(v,{"narrow-indicator":"","active-class":"highlighted-tab"},{default:(0,t.k6)((()=>[(0,t.bF)(g,{"no-caps":"",icon:"home",label:"Start",to:"/",exact:""}),(0,t.bF)(g,{"no-caps":"",icon:"meeting_room",label:"Raum",to:"/room",exact:""}),(0,t.bF)(g,{"no-caps":"",icon:"fa-solid fa-sliders",label:"Instrument",to:"/instrument",exact:""})])),_:1})])),_:1})),(0,t.bF)(L,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),"show-if-above":"",width:270,mini:"",bordered:""},{default:(0,t.k6)((()=>[(0,t.bF)(q,null,{default:(0,t.k6)((()=>[(0,t.bo)(((0,t.uX)(),(0,t.Wv)(Q,{clickable:"",exact:"",to:"/"},{default:(0,t.k6)((()=>[(0,t.bF)(w,{avatar:""},{default:(0,t.k6)((()=>[(0,t.bF)(p,{name:"home"})])),_:1}),(0,t.bF)(w,null,{default:(0,t.k6)((()=>[(0,t.bF)(A,null,{default:(0,t.k6)((()=>[(0,t.eW)("Start")])),_:1})])),_:1})])),_:1})),[[I]]),(0,t.bo)(((0,t.uX)(),(0,t.Wv)(Q,{clickable:"",to:"/room"},{default:(0,t.k6)((()=>[(0,t.bF)(w,{avatar:""},{default:(0,t.k6)((()=>[(0,t.bF)(p,{name:"meeting_room"})])),_:1}),(0,t.bF)(w,null,{default:(0,t.k6)((()=>[(0,t.bF)(A,null,{default:(0,t.k6)((()=>[(0,t.eW)("Raumsteuerung")])),_:1})])),_:1})])),_:1})),[[I]]),(0,t.bo)(((0,t.uX)(),(0,t.Wv)(Q,{clickable:"",to:"/instrument"},{default:(0,t.k6)((()=>[(0,t.bF)(w,{avatar:""},{default:(0,t.k6)((()=>[(0,t.bF)(p,{name:"fa-solid fa-sliders"})])),_:1}),(0,t.bF)(w,null,{default:(0,t.k6)((()=>[(0,t.bF)(A,null,{default:(0,t.k6)((()=>[(0,t.eW)("Instrumentensteuerung")])),_:1})])),_:1})])),_:1})),[[I]]),(0,t.bF)(W),(0,t.bo)(((0,t.uX)(),(0,t.Wv)(Q,{clickable:"",onClick:f},{default:(0,t.k6)((()=>[(0,t.bF)(w,{avatar:""},{default:(0,t.k6)((()=>[(0,t.bF)(p,{name:"web"})])),_:1}),(0,t.bF)(w,null,{default:(0,t.k6)((()=>[(0,t.bF)(A,null,{default:(0,t.k6)((()=>[(0,t.eW)("Homepage")])),_:1})])),_:1})])),_:1})),[[I]]),(0,t.bo)(((0,t.uX)(),(0,t.Wv)(Q,{clickable:"",onClick:_},{default:(0,t.k6)((()=>[(0,t.bF)(w,{avatar:""},{default:(0,t.k6)((()=>[(0,t.bF)(p,{name:"calendar_month"})])),_:1}),(0,t.bF)(w,null,{default:(0,t.k6)((()=>[(0,t.bF)(A,null,{default:(0,t.k6)((()=>[(0,t.eW)("Proberaum buchen")])),_:1})])),_:1})])),_:1})),[[I]]),(0,t.bo)(((0,t.uX)(),(0,t.Wv)(Q,{clickable:"",onClick:m},{default:(0,t.k6)((()=>[(0,t.bF)(w,{avatar:""},{default:(0,t.k6)((()=>[(0,t.bF)(p,{name:"highlight"})])),_:1}),(0,t.bF)(w,null,{default:(0,t.k6)((()=>[(0,t.bF)(A,null,{default:(0,t.k6)((()=>[(0,t.eW)("Live Sesssion - Take a seat")])),_:1})])),_:1})])),_:1})),[[I]]),(0,t.bF)(W),(0,t.bo)(((0,t.uX)(),(0,t.Wv)(Q,{disable:"",clickable:"",to:"/admin"},{default:(0,t.k6)((()=>[(0,t.bF)(w,{avatar:""},{default:(0,t.k6)((()=>[(0,t.bF)(p,{name:"settings"})])),_:1}),(0,t.bF)(w,null,{default:(0,t.k6)((()=>[(0,t.bF)(A,null,{default:(0,t.k6)((()=>[(0,t.eW)("Adminbereich")])),_:1})])),_:1})])),_:1})),[[I]]),(0,t.bo)(((0,t.uX)(),(0,t.Wv)(Q,{clickable:"",to:"/impressum"},{default:(0,t.k6)((()=>[(0,t.bF)(w,{avatar:""},{default:(0,t.k6)((()=>[(0,t.bF)(p,{name:"policy"})])),_:1}),(0,t.bF)(w,null,{default:(0,t.k6)((()=>[(0,t.bF)(A,null,{default:(0,t.k6)((()=>[(0,t.eW)("Impressum")])),_:1})])),_:1})])),_:1})),[[I]])])),_:1})])),_:1},8,["modelValue"]),(0,t.bF)(y,null,{default:(0,t.k6)((()=>[(0,t.bF)(X)])),_:1})])),_:1})}}});var _=l(2807),m=l(2008),F=l(8416),g=l(6914),v=l(6384),h=l(3676),p=l(9150),w=l(3952),A=l(7092),Q=l(6406),W=l(878),q=l(6056),L=l(3999),X=l(124),y=l(5173),C=l(492),I=l(3796),T=l(386),x=l(5205),S=l(9626),R=l(8582),$=l.n(R);const P=(0,_.A)(f,[["__scopeId","data-v-37628202"]]),V=P;$()(f,"components",{QLayout:m.A,QHeader:F.A,QToolbar:g.A,QBtn:v.A,QSpace:h.A,QToolbarTitle:p.A,QAvatar:w.A,QFooter:A.A,QTabs:Q.A,QRouteTab:W.A,QDrawer:q.A,QList:L.A,QItem:X.A,QItemSection:y.A,QIcon:C.A,QItemLabel:I.A,QSeparator:T.A,QPageContainer:x.A}),$()(f,"directives",{Ripple:S.A})}}]);