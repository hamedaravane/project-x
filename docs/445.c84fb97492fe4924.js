"use strict";(self.webpackChunkproject_x=self.webpackChunkproject_x||[]).push([[445],{3760:(S,b,s)=>{s.r(b),s.d(b,{MainComponent:()=>ae});var f=s(6814),e=s(5879),E=s(1993),d=s(95),c=s(3599),y=s(9388),p=s(8324),z=s(1752),m=s(2595),r=s(7582),a=s(8645),g=s(9773),N=s(4194),_=s(874),l=s(7754);const v=["itemLabels"],C=function(){return{"ant-segmented-thumb":!0,"ant-segmented-thumb-motion":!0}};function x(n,h){if(1&n){const t=e.EpF();e.TgZ(0,"div",3),e.NdJ("@thumbMotion.done",function(o){e.CHM(t);const u=e.oxw();return e.KtG(u.handleThumbAnimationDone(o))}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("ngClass",e.DdM(2,C))("@thumbMotion",t.animationState)}}function w(n,h){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const t=e.oxw(2).$implicit;e.xp6(1),e.hij(" ",t.label," ")}}const Z=function(n,h){return{$implicit:n,index:h}};function O(n,h){if(1&n&&(e.ynx(0),e.TgZ(1,"span",9),e._UZ(2,"span",10),e.qZA(),e.TgZ(3,"span"),e.YNc(4,w,2,1,"ng-container",11),e.qZA(),e.BQk()),2&n){const t=e.oxw(),i=t.$implicit,o=t.index,u=e.oxw();e.xp6(2),e.Q6J("nzType",i.icon),e.xp6(2),e.Q6J("nzStringTemplateOutlet",i.useTemplate&&u.nzLabelTemplate)("nzStringTemplateOutletContext",e.WLB(3,Z,i,o))}}function A(n,h){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const t=e.oxw(2).$implicit;e.xp6(1),e.hij(" ",t.label," ")}}function D(n,h){if(1&n&&e.YNc(0,A,2,1,"ng-container",11),2&n){const t=e.oxw(),i=t.$implicit,o=t.index,u=e.oxw();e.Q6J("nzStringTemplateOutlet",i.useTemplate&&u.nzLabelTemplate)("nzStringTemplateOutletContext",e.WLB(2,Z,i,o))}}const P=function(n,h){return{"ant-segmented-item":!0,"ant-segmented-item-selected":n,"ant-segmented-item-disabled":h}};function B(n,h){if(1&n){const t=e.EpF();e.TgZ(0,"label",3,4),e._UZ(2,"input",5),e.TgZ(3,"div",6),e.NdJ("click",function(){const o=e.CHM(t),u=o.$implicit,M=o.index,k=e.oxw();return e.KtG(!u.disabled&&k.handleOptionClick(M))}),e.YNc(4,O,5,6,"ng-container",7),e.YNc(5,D,1,5,"ng-template",null,8,e.W1O),e.qZA()()}if(2&n){const t=h.$implicit,i=h.index,o=e.MAs(6),u=e.oxw();e.Q6J("ngClass",e.WLB(4,P,i===u.selectedIndex,!!u.nzDisabled||t.disabled)),e.xp6(2),e.Q6J("checked",i===u.selectedIndex),e.xp6(2),e.Q6J("ngIf",t.icon)("ngIfElse",o)}}let Q=(()=>{class n{constructor(t,i,o){this.nzConfigService=t,this.cdr=i,this.directionality=o,this._nzModuleName="segmented",this.nzBlock=!1,this.nzDisabled=!1,this.nzOptions=[],this.nzSize="default",this.nzLabelTemplate=null,this.nzValueChange=new e.vpe,this.dir="ltr",this.selectedIndex=0,this.transitionedToIndex=-1,this.animationState=null,this.normalizedOptions=[],this.destroy$=new a.x,this.onChange=()=>{},this.onTouched=()=>{},this.directionality.change?.pipe((0,g.R)(this.destroy$)).subscribe(u=>{this.dir=u,this.cdr.detectChanges()})}ngOnChanges(t){const{nzOptions:i}=t;i&&(this.normalizedOptions=function V(n){return n.map(h=>"string"==typeof h||"number"==typeof h?{label:`${h}`,value:h}:h)}(i.currentValue))}handleOptionClick(t){this.nzDisabled||(this.changeSelectedIndex(t),this.onChange(t),this.nzValueChange.emit(t))}handleThumbAnimationDone(t){"from"===t.fromState&&(this.selectedIndex=this.transitionedToIndex,this.transitionedToIndex=-1,this.animationState=null,this.cdr.detectChanges())}writeValue(t){"number"==typeof t&&t>-1&&(this.changeSelectedIndex(t),this.cdr.markForCheck())}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}changeSelectedIndex(t){!this.listOfOptions||-1===this.selectedIndex||this.selectedIndex===t||(this.animationState={value:"from",params:F(this.listOfOptions.get(this.selectedIndex).nativeElement)},this.selectedIndex=-1,this.cdr.detectChanges(),this.animationState={value:"to",params:F(this.listOfOptions.get(t).nativeElement)},this.transitionedToIndex=t,this.cdr.detectChanges())}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(_.jY),e.Y36(e.sBO),e.Y36(y.Is,8))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["nz-segmented"]],viewQuery:function(i,o){if(1&i&&e.Gf(v,5,e.SBq),2&i){let u;e.iGM(u=e.CRH())&&(o.listOfOptions=u)}},hostAttrs:[1,"ant-segmented"],hostVars:10,hostBindings:function(i,o){2&i&&e.ekj("ant-segmented-disabled",!!o.nzDisabled)("ant-segmented-rtl","rtl"===o.dir)("ant-segmented-lg","large"===o.nzSize)("ant-segmented-sm","small"===o.nzSize)("ant-segmented-block",!!o.nzBlock)},inputs:{nzBlock:"nzBlock",nzDisabled:"nzDisabled",nzOptions:"nzOptions",nzSize:"nzSize",nzLabelTemplate:"nzLabelTemplate"},outputs:{nzValueChange:"nzValueChange"},exportAs:["nzSegmented"],features:[e._Bn([{provide:d.JU,useExisting:(0,e.Gpc)(()=>n),multi:!0}]),e.TTD],decls:3,vars:2,consts:[[1,"ant-segmented-group"],[3,"ngClass",4,"ngIf"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],["itemLabels",""],["type","radio",1,"ant-segmented-item-input",3,"checked"],[1,"ant-segmented-item-label",3,"click"],[4,"ngIf","ngIfElse"],["else_template",""],[1,"ant-segmented-item-icon"],["nz-icon","",3,"nzType"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0),e.YNc(1,x,1,3,"div",1),e.YNc(2,B,7,7,"label",2),e.qZA()),2&i&&(e.xp6(1),e.Q6J("ngIf",o.animationState),e.xp6(1),e.Q6J("ngForOf",o.normalizedOptions))},dependencies:[f.mk,f.sg,f.O5,m.Ls,p.f],encapsulation:2,data:{animation:[N.Tw]},changeDetection:0})}return(0,r.gn)([(0,l.yF)()],n.prototype,"nzBlock",void 0),(0,r.gn)([(0,l.yF)()],n.prototype,"nzDisabled",void 0),(0,r.gn)([(0,_.oS)()],n.prototype,"nzSize",void 0),n})();function F(n){return{transform:n.offsetLeft,width:n.clientWidth}}let Y=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[y.vT,f.ez,d.u5,z.YI,m.PV,p.T]})}return n})();var I=s(8070),T=s(6028),L=s(2438),J=s(4300),U=s(1958);const G=["switchElement"];function $(n,h){1&n&&e._UZ(0,"span",8)}function j(n,h){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const t=e.oxw(2);e.xp6(1),e.Oqu(t.nzCheckedChildren)}}function K(n,h){if(1&n&&(e.ynx(0),e.YNc(1,j,2,1,"ng-container",9),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",t.nzCheckedChildren)}}function H(n,h){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const t=e.oxw(2);e.xp6(1),e.Oqu(t.nzUnCheckedChildren)}}function X(n,h){if(1&n&&e.YNc(0,H,2,1,"ng-container",9),2&n){const t=e.oxw();e.Q6J("nzStringTemplateOutlet",t.nzUnCheckedChildren)}}let ee=(()=>{class n{updateValue(t){this.isChecked!==t&&(this.isChecked=t,this.onChange(this.isChecked))}focus(){this.focusMonitor.focusVia(this.switchElement.nativeElement,"keyboard")}blur(){this.switchElement.nativeElement.blur()}constructor(t,i,o,u,M,k){this.nzConfigService=t,this.host=i,this.ngZone=o,this.cdr=u,this.focusMonitor=M,this.directionality=k,this._nzModuleName="switch",this.isChecked=!1,this.onChange=()=>{},this.onTouched=()=>{},this.nzLoading=!1,this.nzDisabled=!1,this.nzControl=!1,this.nzCheckedChildren=null,this.nzUnCheckedChildren=null,this.nzSize="default",this.nzId=null,this.dir="ltr",this.destroy$=new a.x,this.isNzDisableFirstChange=!0}ngOnInit(){this.directionality.change.pipe((0,g.R)(this.destroy$)).subscribe(t=>{this.dir=t,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{(0,L.R)(this.host.nativeElement,"click").pipe((0,g.R)(this.destroy$)).subscribe(t=>{t.preventDefault(),!(this.nzControl||this.nzDisabled||this.nzLoading)&&this.ngZone.run(()=>{this.updateValue(!this.isChecked),this.cdr.markForCheck()})}),(0,L.R)(this.switchElement.nativeElement,"keydown").pipe((0,g.R)(this.destroy$)).subscribe(t=>{if(this.nzControl||this.nzDisabled||this.nzLoading)return;const{keyCode:i}=t;i!==T.oh&&i!==T.SV&&i!==T.L_&&i!==T.K5||(t.preventDefault(),this.ngZone.run(()=>{i===T.oh?this.updateValue(!1):i===T.SV?this.updateValue(!0):(i===T.L_||i===T.K5)&&this.updateValue(!this.isChecked),this.cdr.markForCheck()}))})})}ngAfterViewInit(){this.focusMonitor.monitor(this.switchElement.nativeElement,!0).pipe((0,g.R)(this.destroy$)).subscribe(t=>{t||Promise.resolve().then(()=>this.onTouched())})}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.switchElement.nativeElement),this.destroy$.next(),this.destroy$.complete()}writeValue(t){this.isChecked=t,this.cdr.markForCheck()}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||t,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(_.jY),e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(J.tE),e.Y36(y.Is,8))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["nz-switch"]],viewQuery:function(i,o){if(1&i&&e.Gf(G,7),2&i){let u;e.iGM(u=e.CRH())&&(o.switchElement=u.first)}},inputs:{nzLoading:"nzLoading",nzDisabled:"nzDisabled",nzControl:"nzControl",nzCheckedChildren:"nzCheckedChildren",nzUnCheckedChildren:"nzUnCheckedChildren",nzSize:"nzSize",nzId:"nzId"},exportAs:["nzSwitch"],features:[e._Bn([{provide:d.JU,useExisting:(0,e.Gpc)(()=>n),multi:!0}])],decls:9,vars:16,consts:[["nz-wave","","type","button",1,"ant-switch",3,"disabled","nzWaveExtraNode"],["switchElement",""],[1,"ant-switch-handle"],["nz-icon","","nzType","loading","class","ant-switch-loading-icon",4,"ngIf"],[1,"ant-switch-inner"],[4,"ngIf","ngIfElse"],["uncheckTemplate",""],[1,"ant-click-animating-node"],["nz-icon","","nzType","loading",1,"ant-switch-loading-icon"],[4,"nzStringTemplateOutlet"]],template:function(i,o){if(1&i&&(e.TgZ(0,"button",0,1)(2,"span",2),e.YNc(3,$,1,0,"span",3),e.qZA(),e.TgZ(4,"span",4),e.YNc(5,K,2,1,"ng-container",5),e.YNc(6,X,1,1,"ng-template",null,6,e.W1O),e.qZA(),e._UZ(8,"div",7),e.qZA()),2&i){const u=e.MAs(7);e.ekj("ant-switch-checked",o.isChecked)("ant-switch-loading",o.nzLoading)("ant-switch-disabled",o.nzDisabled)("ant-switch-small","small"===o.nzSize)("ant-switch-rtl","rtl"===o.dir),e.Q6J("disabled",o.nzDisabled)("nzWaveExtraNode",!0),e.uIk("id",o.nzId),e.xp6(3),e.Q6J("ngIf",o.nzLoading),e.xp6(2),e.Q6J("ngIf",o.isChecked)("ngIfElse",u)}},dependencies:[f.O5,U.dQ,m.Ls,p.f],encapsulation:2,changeDetection:0})}return(0,r.gn)([(0,l.yF)()],n.prototype,"nzLoading",void 0),(0,r.gn)([(0,l.yF)()],n.prototype,"nzDisabled",void 0),(0,r.gn)([(0,l.yF)()],n.prototype,"nzControl",void 0),(0,r.gn)([(0,_.oS)()],n.prototype,"nzSize",void 0),n})(),te=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[y.vT,f.ez,U.vG,m.PV,p.T]})}return n})();const ne=[{key:"Farsi",label:"\u0641\u0627\u0631\u0633\u06cc"},{key:"English",label:"\u0627\u0646\u06af\u0644\u06cc\u0633\u06cc"},{key:"Spanish",label:"\u0627\u0633\u067e\u0627\u0646\u06cc\u0627\u06cc\u06cc"},{key:"Arabic",label:"\u0639\u0631\u0628\u06cc"},{key:"Russian",label:"\u0631\u0648\u0633\u06cc"},{key:"German",label:"\u0622\u0644\u0645\u0627\u0646\u06cc"},{key:"French",label:"\u0641\u0631\u0627\u0646\u0633\u0648\u06cc"},{key:"Portuguese",label:"\u067e\u0631\u062a\u063a\u0627\u0644\u06cc"}];var ie=s(8781),se=s(3237),R=s(2920);function oe(n,h){if(1&n&&e._UZ(0,"nz-option",26),2&n){const t=h.$implicit;e.Q6J("nzValue",t.key)("nzLabel",t.label)}}let ae=(()=>{class n{constructor(){this.themeService=(0,e.f3M)(se.f),this.destroyRef=(0,e.f3M)(e.ktI),this.languages=ne,this.themes=[{value:"dark",label:"\u062a\u06cc\u0631\u0647"},{value:"light",label:"\u0631\u0648\u0634\u0646"}],this.settingsForm=new d.cw({theme:new d.NI(0,d.kI.required),lang:new d.NI("Farsi",d.kI.required),emailNotification:new d.NI(!1,d.kI.required),inAppNotification:new d.NI(!1,d.kI.required),smsNotification:new d.NI(!1,d.kI.required)}),this.themeControl=this.settingsForm.get("theme"),this.langControl=this.settingsForm.get("lang"),this.emailNotificationControl=this.settingsForm.get("emailNotification"),this.inAppNotificationControl=this.settingsForm.get("inAppNotification"),this.smsNotificationControl=this.settingsForm.get("smsNotification")}ngOnInit(){const t=["dark","light"];this.themeControl.valueChanges.pipe((0,E.sL)(this.destroyRef)).subscribe(i=>{this.themeService.setTheme(t[i])})}ngAfterViewInit(){this.themeControl.setValue(this.themeService.currentTheme===ie.Q.DARK?0:1)}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["settings-main"]],standalone:!0,features:[e.jDz],decls:47,vars:3,consts:[["nz-form","",3,"formGroup"],[1,"flex","gap-2","items-baseline","mb-4"],[1,"fa-solid","fa-paint-roller"],[1,"h-px","w-full","border-b","border-solid","border-b-gray-200"],["nz-col","","nzFlex","4",1,"flex","gap-2","items-baseline"],[1,"fa-solid","fa-droplet"],["for","theme"],["nzFlex","2","dir","ltr"],["id","theme","formControlName","theme",3,"nzOptions"],["nz-col","","nzFlex","6",1,"flex","gap-2","items-baseline"],[1,"fa-solid","fa-language"],["for","lang"],["nzFlex","4"],["id","lang","formControlName","lang"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[1,"fa-solid","fa-bell"],[1,"fa-solid","fa-envelope"],["for","email-notification"],["dir","ltr","nzFlex","2"],["id","email-notification","formControlName","emailNotification"],[1,"fa-solid","fa-mobile-screen-button"],["for","in-app-notification"],["id","in-app-notification","formControlName","inAppNotification"],[1,"fa-solid","fa-message-sms"],["for","sms-notification"],["id","sms-notification","formControlName","smsNotification"],[3,"nzValue","nzLabel"]],template:function(i,o){1&i&&(e.TgZ(0,"form",0)(1,"div",1),e._UZ(2,"i",2),e.TgZ(3,"h5"),e._uU(4,"\u0638\u0627\u0647\u0631"),e.qZA(),e._UZ(5,"span",3),e.qZA(),e.TgZ(6,"nz-form-item")(7,"div",4),e._UZ(8,"i",5),e.TgZ(9,"label",6),e._uU(10,"\u062a\u0645 \u0631\u0646\u06af\u06cc"),e.qZA()(),e.TgZ(11,"nz-form-control",7),e._UZ(12,"nz-segmented",8),e.qZA()(),e.TgZ(13,"nz-form-item")(14,"div",9),e._UZ(15,"i",10),e.TgZ(16,"label",11),e._uU(17,"\u0632\u0628\u0627\u0646"),e.qZA()(),e.TgZ(18,"nz-form-control",12)(19,"nz-select",13),e.YNc(20,oe,1,2,"nz-option",14),e.qZA()()(),e.TgZ(21,"div",1),e._UZ(22,"i",15),e.TgZ(23,"h5"),e._uU(24,"\u0627\u0639\u0644\u0627\u0646\u0627\u062a"),e.qZA(),e._UZ(25,"span",3),e.qZA(),e.TgZ(26,"nz-form-item")(27,"div",4),e._UZ(28,"i",16),e.TgZ(29,"label",17),e._uU(30,"\u0627\u0639\u0644\u0627\u0646\u0627\u062a \u0627\u06cc\u0645\u06cc\u0644"),e.qZA()(),e.TgZ(31,"nz-form-control",18),e._UZ(32,"nz-switch",19),e.qZA()(),e.TgZ(33,"nz-form-item")(34,"div",4),e._UZ(35,"i",20),e.TgZ(36,"label",21),e._uU(37,"\u0627\u0639\u0644\u0627\u0646\u0627\u062a \u062f\u0627\u062e\u0644 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646"),e.qZA()(),e.TgZ(38,"nz-form-control",18),e._UZ(39,"nz-switch",22),e.qZA()(),e.TgZ(40,"nz-form-item")(41,"div",4),e._UZ(42,"i",23),e.TgZ(43,"label",24),e._uU(44,"\u0627\u0639\u0644\u0627\u0646\u0627\u062a \u067e\u06cc\u0627\u0645\u06a9\u06cc"),e.qZA()(),e.TgZ(45,"nz-form-control",18),e._UZ(46,"nz-switch",25),e.qZA()()()),2&i&&(e.Q6J("formGroup",o.settingsForm),e.xp6(12),e.Q6J("nzOptions",o.themes),e.xp6(8),e.Q6J("ngForOf",o.languages))},dependencies:[c.U5,R.t3,R.SK,c.Lr,c.Nx,c.Fd,te,ee,I.LV,I.Ip,I.Vq,f.sg,Y,Q,d.UX,d._Y,d.JJ,d.JL,d.sg,d.u],styles:["[_nghost-%COMP%]{display:block;padding:2rem}"]})}return n})()},2438:(S,b,s)=>{s.d(b,{R:()=>r});var f=s(4829),e=s(5592),E=s(1631),d=s(4266),c=s(4674),y=s(7400);const p=["addListener","removeListener"],z=["addEventListener","removeEventListener"],m=["on","off"];function r(l,v,C,x){if((0,c.m)(C)&&(x=C,C=void 0),x)return r(l,v,C).pipe((0,y.Z)(x));const[w,Z]=function _(l){return(0,c.m)(l.addEventListener)&&(0,c.m)(l.removeEventListener)}(l)?z.map(O=>A=>l[O](v,A,C)):function g(l){return(0,c.m)(l.addListener)&&(0,c.m)(l.removeListener)}(l)?p.map(a(l,v)):function N(l){return(0,c.m)(l.on)&&(0,c.m)(l.off)}(l)?m.map(a(l,v)):[];if(!w&&(0,d.z)(l))return(0,E.z)(O=>r(O,v,C))((0,f.Xf)(l));if(!w)throw new TypeError("Invalid event target");return new e.y(O=>{const A=(...D)=>O.next(1<D.length?D:D[0]);return w(A),()=>Z(A)})}function a(l,v){return C=>x=>l[C](v,x)}},855:(S,b,s)=>{s.d(b,{a:()=>d,w:()=>E});var f=s(2831),e=s(5879);let E=(()=>{class c{setHiddenAttribute(){this.hidden?this.renderer.setAttribute(this.elementRef.nativeElement,"hidden","string"==typeof this.hidden?this.hidden:""):this.renderer.removeAttribute(this.elementRef.nativeElement,"hidden")}constructor(p,z){this.elementRef=p,this.renderer=z,this.hidden=null,this.renderer.setAttribute(this.elementRef.nativeElement,"hidden","")}ngOnChanges(){this.setHiddenAttribute()}ngAfterViewInit(){this.setHiddenAttribute()}static#e=this.\u0275fac=function(z){return new(z||c)(e.Y36(e.SBq),e.Y36(e.Qsj))};static#t=this.\u0275dir=e.lG2({type:c,selectors:[["","nz-button",""],["nz-button-group"],["","nz-icon",""],["","nz-menu-item",""],["","nz-submenu",""],["nz-select-top-control"],["nz-select-placeholder"],["nz-input-group"]],inputs:{hidden:"hidden"},features:[e.TTD]})}return c})(),d=(()=>{class c{static#e=this.\u0275fac=function(z){return new(z||c)};static#t=this.\u0275mod=e.oAB({type:c});static#n=this.\u0275inj=e.cJS({imports:[f.ud]})}return c})()},1958:(S,b,s)=>{s.d(b,{dQ:()=>p,vG:()=>z});var f=s(2831),e=s(5879);class E{get waveAttributeName(){return this.insertExtraNode?"ant-click-animating":"ant-click-animating-without-extra-node"}constructor(r,a,g,N,_){this.triggerElement=r,this.ngZone=a,this.insertExtraNode=g,this.platformId=N,this.cspNonce=_,this.waveTransitionDuration=400,this.styleForPseudo=null,this.extraNode=null,this.lastTime=0,this.onClick=l=>{!this.triggerElement||!this.triggerElement.getAttribute||this.triggerElement.getAttribute("disabled")||"INPUT"===l.target.tagName||this.triggerElement.className.indexOf("disabled")>=0||this.fadeOutWave()},this.platform=new f.t4(this.platformId),this.clickHandler=this.onClick.bind(this),this.bindTriggerEvent()}bindTriggerEvent(){this.platform.isBrowser&&this.ngZone.runOutsideAngular(()=>{this.removeTriggerEvent(),this.triggerElement&&this.triggerElement.addEventListener("click",this.clickHandler,!0)})}removeTriggerEvent(){this.triggerElement&&this.triggerElement.removeEventListener("click",this.clickHandler,!0)}removeStyleAndExtraNode(){this.styleForPseudo&&document.body.contains(this.styleForPseudo)&&(document.body.removeChild(this.styleForPseudo),this.styleForPseudo=null),this.insertExtraNode&&this.triggerElement.contains(this.extraNode)&&this.triggerElement.removeChild(this.extraNode)}destroy(){this.removeTriggerEvent(),this.removeStyleAndExtraNode()}fadeOutWave(){const r=this.triggerElement,a=this.getWaveColor(r);r.setAttribute(this.waveAttributeName,"true"),!(Date.now()<this.lastTime+this.waveTransitionDuration)&&(this.isValidColor(a)&&(this.styleForPseudo||(this.styleForPseudo=document.createElement("style"),this.cspNonce&&(this.styleForPseudo.nonce=this.cspNonce)),this.styleForPseudo.innerHTML=`\n      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {\n        --antd-wave-shadow-color: ${a};\n      }`,document.body.appendChild(this.styleForPseudo)),this.insertExtraNode&&(this.extraNode||(this.extraNode=document.createElement("div")),this.extraNode.className="ant-click-animating-node",r.appendChild(this.extraNode)),this.lastTime=Date.now(),this.runTimeoutOutsideZone(()=>{r.removeAttribute(this.waveAttributeName),this.removeStyleAndExtraNode()},this.waveTransitionDuration))}isValidColor(r){return!!r&&"#ffffff"!==r&&"rgb(255, 255, 255)"!==r&&this.isNotGrey(r)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(r)&&"transparent"!==r}isNotGrey(r){const a=r.match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return!(a&&a[1]&&a[2]&&a[3]&&a[1]===a[2]&&a[2]===a[3])}getWaveColor(r){const a=getComputedStyle(r);return a.getPropertyValue("border-top-color")||a.getPropertyValue("border-color")||a.getPropertyValue("background-color")}runTimeoutOutsideZone(r,a){this.ngZone.runOutsideAngular(()=>setTimeout(r,a))}}const d={disabled:!1},c=new e.OlP("nz-wave-global-options");function y(m){return(0,e.MR2)([{provide:c,useValue:m}])}let p=(()=>{class m{get disabled(){return this.waveDisabled}get rendererRef(){return this.waveRenderer}constructor(a,g,N,_,l,v){this.ngZone=a,this.elementRef=g,this.config=N,this.animationType=_,this.platformId=l,this.cspNonce=v,this.nzWaveExtraNode=!1,this.waveDisabled=!1,this.waveDisabled=this.isConfigDisabled()}isConfigDisabled(){let a=!1;return this.config&&"boolean"==typeof this.config.disabled&&(a=this.config.disabled),"NoopAnimations"===this.animationType&&(a=!0),a}ngOnDestroy(){this.waveRenderer&&this.waveRenderer.destroy()}ngOnInit(){this.renderWaveIfEnabled()}renderWaveIfEnabled(){!this.waveDisabled&&this.elementRef.nativeElement&&(this.waveRenderer=new E(this.elementRef.nativeElement,this.ngZone,this.nzWaveExtraNode,this.platformId,this.cspNonce))}disable(){this.waveDisabled=!0,this.waveRenderer&&(this.waveRenderer.removeTriggerEvent(),this.waveRenderer.removeStyleAndExtraNode())}enable(){this.waveDisabled=this.isConfigDisabled()||!1,this.waveRenderer&&this.waveRenderer.bindTriggerEvent()}static#e=this.\u0275fac=function(g){return new(g||m)(e.Y36(e.R0b),e.Y36(e.SBq),e.Y36(c,8),e.Y36(e.QbO,8),e.Y36(e.Lbi),e.Y36(e.Ojb,8))};static#t=this.\u0275dir=e.lG2({type:m,selectors:[["","nz-wave",""],["button","nz-button","",3,"nzType","link",3,"nzType","text"]],inputs:{nzWaveExtraNode:"nzWaveExtraNode"},exportAs:["nzWave"]})}return m})(),z=(()=>{class m{static#e=this.\u0275fac=function(g){return new(g||m)};static#t=this.\u0275mod=e.oAB({type:m});static#n=this.\u0275inj=e.cJS({providers:[y(d)],imports:[f.ud]})}return m})()}}]);