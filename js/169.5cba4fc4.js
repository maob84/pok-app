"use strict";(globalThis["webpackChunkpok"]=globalThis["webpackChunkpok"]||[]).push([[169],{9160:(e,t,s)=>{s.r(t),s.d(t,{default:()=>z});var n=s(1758);const l={key:0};function r(e,t,s,r,a,o){const u=(0,n.g2)("backend-status"),i=(0,n.g2)("instrument-control"),c=(0,n.g2)("q-page");return(0,n.uX)(),(0,n.Wv)(c,null,{default:(0,n.k6)((()=>[r.isBackendAvailable?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("div",l,[(0,n.bF)(u)])),r.isBackendAvailable?((0,n.uX)(),(0,n.Wv)(i,{key:1})):(0,n.Q3)("",!0)])),_:1})}var a=s(8790),o=s(9394),u=s.n(o);const i=e=>((0,n.Qi)("data-v-43bf9b6e"),e=e(),(0,n.jt)(),e),c=i((()=>(0,n.Lk)("img",{class:"icon-img",src:u()},null,-1))),d={class:"col-5"},m={class:"full-width q-mb-md flex flex-center"},g={class:"full-width flex flex-center"},h={class:"full-width q-mt-md q-mb-xl flex flex-center"},p={class:"full-width flex flex-center"},k={class:"col-7"},b=i((()=>(0,n.Lk)("div",{class:"q-mt-lg"}," Instrument ist stummgeschaltet ",-1)));function f(e,t,s,l,r,o){const u=(0,n.g2)("instrument-selector-dialog"),i=(0,n.g2)("tuner-dialog"),f=(0,n.g2)("panorama-dialog"),v=(0,n.g2)("q-btn"),I=(0,n.g2)("q-fab-action"),C=(0,n.g2)("q-fab"),_=(0,n.g2)("q-card-section"),y=(0,n.g2)("q-slider"),Q=(0,n.g2)("q-card");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(u,{ref:"instrumentSelector"},null,512),(0,n.bF)(i,{ref:"tunerDialog"},null,512),(0,n.bF)(f,{ref:"panoramaDialog"},null,512),(0,n.bF)(Q,{flat:""},{default:(0,n.k6)((()=>[(0,n.bF)(_,{class:"q-pb-xl"},{default:(0,n.k6)((()=>[(0,n.bF)(v,{color:"secondary",class:"q-mt-sm","no-caps":"",rounded:"",onClick:o.openInstrumentSelector},{default:(0,n.k6)((()=>[(0,n.eW)((0,a.v_)(l.selectedInstrumentName||"Wähle dein Instrument"),1)])),_:1},8,["onClick"]),l.selectedInstrumentId&&!r.isMuted?((0,n.uX)(),(0,n.Wv)(C,{key:0,class:"float-right",color:"primary",icon:"keyboard_arrow_left",direction:"left"},{default:(0,n.k6)((()=>[(0,n.bF)(I,{color:"secondary",onClick:o.toggleMute,icon:"volume_off"},null,8,["onClick"]),(0,n.bF)(I,{color:"secondary",onClick:o.openPanoramaSelect,icon:"panorama_horizontal"},null,8,["onClick"]),l.selectedInstrumentHasTuner?((0,n.uX)(),(0,n.Wv)(I,{key:0,color:"secondary",onClick:o.openTuner},{default:(0,n.k6)((()=>[c])),_:1},8,["onClick"])):(0,n.Q3)("",!0)])),_:1})):(0,n.Q3)("",!0)])),_:1}),l.selectedInstrumentId&&!r.isMuted?((0,n.uX)(),(0,n.Wv)(_,{key:0,flat:"",class:"full-width q-pa-none row no-wrap items-start q-pa-none"},{default:(0,n.k6)((()=>[(0,n.Lk)("div",d,[(0,n.bF)(Q,{flat:""},{default:(0,n.k6)((()=>[(0,n.bF)(_,{class:"q-mr-sm"},{default:(0,n.k6)((()=>[(0,n.Lk)("div",m,[(0,n.bF)(v,{disable:r.isMuted,round:"",icon:"volume_up",color:"primary",onClick:t[0]||(t[0]=e=>o.changeVolume(1)),size:"lg"},null,8,["disable"])]),(0,n.Lk)("div",g,[(0,n.bF)(y,{disable:r.isMuted,class:"vertical-slider",modelValue:o.intVolume,"onUpdate:modelValue":t[1]||(t[1]=e=>o.intVolume=e),"track-size":"40px","thumb-size":"0px",color:"grey-6",reverse:"",min:0,max:100,vertical:""},null,8,["disable","modelValue"])]),(0,n.Lk)("div",h,[(0,n.bF)(v,{disable:r.isMuted,round:"",icon:"volume_down",color:"primary",onClick:t[2]||(t[2]=e=>o.changeVolume(-1)),size:"lg"},null,8,["disable"])]),(0,n.Lk)("div",p,(0,a.v_)(o.displayVolume),1)])),_:1})])),_:1})]),(0,n.Lk)("div",k,[(0,n.bF)(Q,{flat:""},{default:(0,n.k6)((()=>[(0,n.bF)(_,{class:"q-pl-md q-pr-lg"},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.presets,((e,t)=>((0,n.uX)(),(0,n.Wv)(v,{padding:"",disable:r.isMuted,dense:"","no-wrap":"","no-caps":"",size:"md",class:(0,a.C4)(["full-width q-mb-md q-pa-md",o.getPresetButtonClass(t+1)]),label:r.presets[t],key:t,onClick:e=>o.selectPreset(t+1)},null,8,["disable","class","label","onClick"])))),128))])),_:1})])),_:1})])])),_:1})):(0,n.Q3)("",!0),l.selectedInstrumentId&&r.isMuted?((0,n.uX)(),(0,n.Wv)(_,{key:1,flat:"",class:"column items-center",style:{"margin-top":"120px"}},{default:(0,n.k6)((()=>[(0,n.bF)(v,{round:"",icon:"volume_off",color:"primary",onClick:o.toggleMute,size:"xl"},null,8,["onClick"]),b])),_:1})):(0,n.Q3)("",!0)])),_:1})],64)}var v=s(6394),I=s(6166),C=s(4477),_=s(9627),y=s(2649);const Q={setup(){const e=(0,v.Q)(),t=(0,n.EW)((()=>e.getSelectedInstrumentName)),s=(0,n.EW)((()=>e.getSelectedInstrumentId)),l=(0,n.EW)((()=>e.selectedInstrumentHasTuner));return{selectedInstrumentName:t,selectedInstrumentId:s,selectedInstrumentHasTuner:l}},created(){const e=(0,v.Q)();this.updateInstrumentState(e.getSelectedInstrumentId)},name:"InstrumentControl",data(){return{isLoading:!0,volume:30,isMuted:!1,currentPreset:null,presets:[]}},components:{InstrumentSelectorDialog:C.A,TunerDialog:_.A,PanoramaDialog:y.A},computed:{intVolume:{get(){return this.volume},set(e){let t=parseInt(e,10);this.changeVolume(t-this.volume)}},displayVolume:{get(){return"Lautstärke "+this.volume+" %"}}},mounted(){const e=(0,v.Q)();(0,n.wB)((()=>e.selectedInstrumentId),(e=>{this.updateInstrumentState(e)}))},methods:{getPresetButtonClass(e){return this.currentPreset===e?"bg-primary text-white":"bg-secondary text-white"},getMuteButtonClass(){return{"bg-primary text-white":this.isMuted}},openPanoramaSelect(){this.$refs.panoramaDialog.show(this.selectedInstrumentId)},openInstrumentSelector(){this.$refs.instrumentSelector.show()},openTuner(){this.$refs.tunerDialog.show(this.selectedInstrumentId)},updateInstrumentState(e){e&&((0,I.Qy)(e).then((e=>{this.isMuted=e.data.is_muted,this.volume=e.data.volume,this.currentPreset=e.data.selected_preset.id,this.presets=e.data.presets.slice(0,6).map((e=>e.name))})).catch((e=>{console.error("Error fetching instrument state:",e)})),this.isLoading=!1)},toggleMute(){const e=(0,v.Q)(),t=e.getSelectedInstrumentId;t&&(this.isMuted=!this.isMuted,(0,I.$r)(t).then((e=>{this.isMuted=e.data.is_muted})).catch((e=>{console.error("Error toggling mute:",e)})))},changeVolume(e){const t=(0,v.Q)(),s=t.getSelectedInstrumentId;s&&(this.volume=Math.max(0,Math.min(100,this.volume+e)),(0,I.RV)(s,this.volume).then((e=>{this.volume=e.data.volume})).catch((e=>{console.error("Error setting volume:",e)})))},selectPreset(e){const t=(0,v.Q)(),s=t.getSelectedInstrumentId;s&&(this.currentPreset=e,(0,I.LO)(s,e).then((e=>{this.currentPreset=e.data.selected_preset.id})).catch((e=>{console.error("Error setting preset:",e)})))}}};var F=s(2807),q=s(3316),w=s(4189),x=s(6384),M=s(1878),S=s(284),A=s(1444),P=s(8582),V=s.n(P);const W=(0,F.A)(Q,[["render",f],["__scopeId","data-v-43bf9b6e"]]),L=W;V()(Q,"components",{QCard:q.A,QCardSection:w.A,QBtn:x.A,QFab:M.A,QFabAction:S.A,QSlider:A.A});var E=s(6006);const B={setup(){const e=(0,v.Q)(),t=(0,n.EW)((()=>e.isBackendAvailable));return{isBackendAvailable:t}},components:{InstrumentControl:L,BackendStatus:E.A}};var X=s(7716);const T=(0,F.A)(B,[["render",r]]),z=T;V()(B,"components",{QPage:X.A})}}]);