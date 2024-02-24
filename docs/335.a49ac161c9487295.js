"use strict";(self.webpackChunkproject_x=self.webpackChunkproject_x||[]).push([[335],{6275:(p,u,i)=>{i.r(u),i.d(u,{InfluencersListComponent:()=>J});var o=i(7554),l=i(6790),e=i(388),c=i(6748),t=i(8249),v=i(6664),m=i(8328),x=i(3032);function Z(n,f){1&n&&(e.TgZ(0,"div",2),e._UZ(1,"div",3),e.qZA())}let y=(()=>{class n{constructor(){this.refresh=new e.vpe,this._isLoading=!1,this.startY=0,this.threshold=150,this.distance=0}set isLoading(a){this._isLoading=a,a||(this.distance=0)}onTouchStart(a){this.startY=a.touches[0].clientY}onTouchMove(a){this.distance=a.touches[0].clientY-this.startY,this.distance>this.threshold&&this.refresh.emit()}static#e=this.\u0275fac=function(s){return new(s||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["pull-to-refresh"]],hostBindings:function(s,r){1&s&&e.NdJ("touchstart",function(h){return r.onTouchStart(h)},!1,e.pYS)("touchmove",function(h){return r.onTouchMove(h)},!1,e.pYS)},inputs:{isLoading:"isLoading"},outputs:{refresh:"refresh"},standalone:!0,features:[e.jDz],decls:2,vars:5,consts:[[1,"max-h-20"],["class","loading-indicator mx-auto",4,"ngIf"],[1,"loading-indicator","mx-auto"],[1,"spinner"]],template:function(s,r){1&s&&(e.TgZ(0,"div",0),e.YNc(1,Z,2,0,"div",1),e.qZA()),2&s&&(e.Udp("height",r.distance,"px"),e.ekj("panel",!r.distance),e.xp6(),e.Q6J("ngIf",r.distance>30))},dependencies:[l.O5],styles:["[_nghost-%COMP%]{display:block}.panel[_ngcontent-%COMP%]{height:0;overflow-y:hidden;transition:height .3s ease-out}.loading-indicator[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;overflow:hidden;height:60px;max-height:60px}.spinner[_ngcontent-%COMP%]{border:.25rem solid transparent;border-radius:50%;box-shadow:0 1px 3px 0 var(--text-color),0 1px 2px -1px var(--text-color);width:24px;height:24px;animation:_ngcontent-%COMP%_spin 1s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"],changeDetection:0})}return n})();var T=i(2638),L=i(5567),A=i(4192),C=i(563),g=i(9713);function b(n,f){if(1&n&&(e.TgZ(0,"li")(1,"card",5)(2,"div",6),e._UZ(3,"img",7),e.qZA(),e.TgZ(4,"div",8)(5,"div",9)(6,"span",10),e._uU(7),e.qZA(),e.TgZ(8,"div",11),e._UZ(9,"i",12),e.TgZ(10,"span"),e._uU(11),e.qZA()(),e.TgZ(12,"div",13)(13,"i"),e.ALo(14,"categoryToIcon"),e.qZA(),e.TgZ(15,"span",14),e._uU(16),e.ALo(17,"categoryToLabel"),e.qZA()()(),e.TgZ(18,"div",15)(19,"div",16),e._UZ(20,"nz-rate",17),e.qZA(),e.TgZ(21,"div",18)(22,"span",19),e._uU(23,"\u062c\u0632\u0626\u06cc\u0627\u062a \u0628\u06cc\u0634\u062a\u0631"),e.qZA(),e._UZ(24,"i",20),e.qZA()()()()()),2&n){const a=f.$implicit;e.xp6(3),e.Q6J("ngSrc",a.profilePhotoSrc),e.xp6(4),e.Oqu(a.nickname),e.xp6(4),e.hij("@",a.instagramId,""),e.xp6(2),e.Tol(e.xi3(14,8,a.category,"fa-xs")),e.xp6(3),e.Oqu(e.lcZ(17,11,a.category)),e.xp6(4),e.Q6J("ngModel",a.rate),e.xp6(),e.Q6J("routerLink",a.id)}}function F(n,f){if(1&n&&(e.TgZ(0,"ul",3),e.YNc(1,b,25,13,"li",4),e.ALo(2,"async"),e.qZA()),2&n){const a=e.oxw();e.xp6(),e.Q6J("ngForOf",e.lcZ(2,1,a.influencerSummaryList$))}}function O(n,f){1&n&&(e.TgZ(0,"li",22)(1,"div",6),e._UZ(2,"skeleton",23),e.qZA(),e.TgZ(3,"div",8)(4,"div",9),e._UZ(5,"skeleton",24),e.TgZ(6,"div",11),e._UZ(7,"skeleton",25)(8,"skeleton",26),e.qZA(),e.TgZ(9,"div",13),e._UZ(10,"skeleton",25)(11,"skeleton",26),e.qZA()(),e.TgZ(12,"div",15)(13,"div",16),e._UZ(14,"skeleton",27),e.qZA(),e.TgZ(15,"div",28),e._UZ(16,"skeleton",26),e.qZA()()()())}const S=()=>[];function w(n,f){1&n&&(e.TgZ(0,"ul",3),e.YNc(1,O,17,0,"li",21),e.qZA()),2&n&&(e.xp6(),e.Q6J("ngForOf",e.DdM(1,S).constructor(3)))}let J=(()=>{class n{constructor(){this.influencerService=(0,e.f3M)(v.N),this.influencerSummaryList$=this.influencerService.influencerSummaryList$,this.influencerSummaryListLoading$=this.influencerService.influencerSummaryListLoading$}ngOnInit(){this.influencerService.getInfluencerSummaryList(!0)}fetchData(){this.influencerService.getInfluencerSummaryList(!1)}static#e=this.\u0275fac=function(s){return new(s||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-influencers-list"]],standalone:!0,features:[e.jDz],decls:7,vars:8,consts:[[3,"isLoading","refresh"],["class","flex flex-col gap-4 mt-4",4,"ngIf","ngIfElse"],["loadingTemplate",""],[1,"flex","flex-col","gap-4","mt-4"],[4,"ngFor","ngForOf"],["dir","ltr",1,"flex","gap-4","p-4"],[1,"rounded-full","flex","w-16","h-16","overflow-clip"],["width","70","height","70","alt","profile photo",1,"object-cover","aspect-square",3,"ngSrc"],[1,"flex","flex-col","grow","gap-4"],[1,"flex","flex-col"],[1,"font-bold","text-left"],[1,"flex","gap-1","items-center"],[1,"fa","fa-brands","fa-instagram"],[1,"flex","gap-1","items-baseline"],[1,"rounded-md","text-left","w-fit","mt-1","text-xs"],[1,"flex","justify-between","w-full"],[1,"flex","float-left"],["nzDisabled","","nzAllowHalf","",3,"ngModel"],[1,"flex","items-center","gap-2","float-right",3,"routerLink"],[1,"text-xs","text-gray-700"],[1,"fa-solid","fa-chevron-right","fa-xs","text-gray-700"],["dir","ltr","class","rounded-md bg-gray-200 flex gap-4 p-4 shadow",4,"ngFor","ngForOf"],["dir","ltr",1,"rounded-md","bg-gray-200","flex","gap-4","p-4","shadow"],["shape","circle","width","70","height","70"],["height","14","width","100",1,"me-auto"],["shape","circle","width","12","height","12"],["height","12"],["height","14","width","120"],[1,"flex","items-center","gap-2","float-right"]],template:function(s,r){if(1&s&&(e.TgZ(0,"pull-to-refresh",0),e.NdJ("refresh",function(){return r.fetchData()}),e.ALo(1,"async"),e.qZA(),e.TgZ(2,"div"),e.YNc(3,F,3,3,"ul",1),e.ALo(4,"async"),e.YNc(5,w,2,2,"ng-template",null,2,e.W1O),e.qZA()),2&s){const d=e.MAs(6);e.Q6J("isLoading",!!e.lcZ(1,4,r.influencerSummaryListLoading$)),e.xp6(2),e.Q6J("@listAnimation",void 0),e.xp6(),e.Q6J("ngIf",!1===e.lcZ(4,6,r.influencerSummaryListLoading$))("ngIfElse",d)}},dependencies:[l.sg,l.Zd,g.Ju,g.sn,c.u5,c.JJ,c.On,C.PV,o.vT,o.Lv,A.v,L.X,l.Ov,t.rH,y,l.O5,T._,x.A],styles:["[_nghost-%COMP%]{display:block;padding:2rem}"],data:{animation:[m.nW]},changeDetection:0})}return n})()},6997:(p,u,i)=>{i.d(u,{EO:()=>o,Wd:()=>e,lC:()=>c,sW:()=>l});var o=function(t){return t.CafeAndRestaurant="Restaurant & Cafe",t.Beauty="Beauty",t.Fashion="Fashion",t.Fitness="Fitness",t.Retail="Retail",t.Bookstore="Bookstore",t.Grocery="Grocery",t.Cinema="Cinema",t.Jewelry="Jewelry",t.Pharmacy="Pharmacy",t.Flower="Flower",t.Other="Other",t}(o||{}),l=function(t){return t.Food="Food",t.Beauty="Beauty",t.Fashion="Fashion",t.Society="Society",t.Art="Art",t.Musician="Musician",t.Fitness="Fitness",t.Medical="Medical",t.Reporter="Reporter",t.Actor="Actor",t.Book="Book",t.Jewelry="Jewelry",t.Other="Other",t}(l||{});const e=[{value:o.CafeAndRestaurant,label:"\u06a9\u0627\u0641\u0647 \u0648 \u0631\u0633\u062a\u0648\u0631\u0627\u0646"},{value:o.Beauty,label:"\u0622\u0631\u0627\u06cc\u0634 \u0648 \u0632\u06cc\u0628\u0627\u06cc\u06cc"},{value:o.Fashion,label:"\u0644\u0628\u0627\u0633 \u0648 \u0645\u062f"},{value:o.Fitness,label:"\u0648\u0631\u0632\u0634\u06cc"},{value:o.Retail,label:"\u062e\u0631\u062f\u0647 \u0641\u0631\u0648\u0634\u06cc"},{value:o.Bookstore,label:"\u06a9\u062a\u0627\u0628 \u0641\u0631\u0648\u0634\u06cc"},{value:o.Grocery,label:"\u0645\u0648\u0627\u062f \u063a\u0630\u0627\u06cc\u06cc"},{value:o.Cinema,label:"\u0633\u06cc\u0646\u0645\u0627 \u062a\u0626\u0627\u062a\u0631"},{value:o.Jewelry,label:"\u0637\u0644\u0627 \u0648 \u062c\u0648\u0627\u0647\u0631"},{value:o.Pharmacy,label:"\u062f\u0627\u0631\u0648\u0633\u0627\u0632\u06cc"},{value:o.Flower,label:"\u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u06af\u0644"},{value:o.Other,label:"\u062f\u06cc\u06af\u0631"}],c=[{value:l.Food,label:"\u063a\u0630\u0627"},{value:l.Beauty,label:" \u0622\u0631\u0627\u06cc\u0634 \u0648 \u0632\u06cc\u0628\u0627\u06cc\u06cc"},{value:l.Fashion,label:"\u0644\u0628\u0627\u0633 \u0648 \u0645\u062f"},{value:l.Society,label:"\u0627\u062c\u062a\u0645\u0627\u0639\u06cc"},{value:l.Art,label:"\u0647\u0646\u0631\u06cc"},{value:l.Musician,label:"\u0645\u0648\u0633\u06cc\u0642\u06cc"},{value:l.Fitness,label:"\u0648\u0631\u0632\u0634\u06cc"},{value:l.Medical,label:"\u067e\u0632\u0634\u06a9\u06cc \u0648 \u062f\u0627\u0631\u0648\u06cc\u06cc"},{value:l.Reporter,label:"\u062e\u0628\u0631\u06cc"},{value:l.Actor,label:"\u0633\u06cc\u0646\u0645\u0627 \u0648 \u0628\u0627\u0632\u06cc\u06af\u0631\u06cc"},{value:l.Book,label:"\u06a9\u062a\u0627\u0628"},{value:l.Jewelry,label:"\u0637\u0644\u0627 \u0648 \u062c\u0648\u0627\u0647\u0631"},{value:l.Other,label:"\u062f\u06cc\u06af\u0631"}]}}]);