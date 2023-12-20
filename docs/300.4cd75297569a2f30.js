"use strict";(self.webpackChunkproject_x=self.webpackChunkproject_x||[]).push([[300],{4300:(S,I,c)=>{c.d(I,{qV:()=>q,rt:()=>ue,tE:()=>ae});var m=c(6814),o=c(5879),h=c(2831),O=c(5619),p=c(8645),l=c(2096),f=c(6028),u=c(8180),_=c(836),b=c(3997),T=c(9773),y=c(2495),x=c(7131),B=c(719);let j=(()=>{class i{constructor(e){this._platform=e}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return function W(i){return!!(i.offsetWidth||i.offsetHeight||"function"==typeof i.getClientRects&&i.getClientRects().length)}(e)&&"visible"===getComputedStyle(e).visibility}isTabbable(e){if(!this._platform.isBrowser)return!1;const s=function U(i){try{return i.frameElement}catch{return null}}(function Q(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}(e));if(s&&(-1===L(s)||!this.isVisible(s)))return!1;let n=e.nodeName.toLowerCase(),r=L(e);return e.hasAttribute("contenteditable")?-1!==r:!("iframe"===n||"object"===n||this._platform.WEBKIT&&this._platform.IOS&&!function z(i){let t=i.nodeName.toLowerCase(),e="input"===t&&i.type;return"text"===e||"password"===e||"select"===t||"textarea"===t}(e))&&("audio"===n?!!e.hasAttribute("controls")&&-1!==r:"video"===n?-1!==r&&(null!==r||this._platform.FIREFOX||e.hasAttribute("controls")):e.tabIndex>=0)}isFocusable(e,s){return function X(i){return!function H(i){return function V(i){return"input"==i.nodeName.toLowerCase()}(i)&&"hidden"==i.type}(i)&&(function G(i){let t=i.nodeName.toLowerCase();return"input"===t||"select"===t||"button"===t||"textarea"===t}(i)||function Y(i){return function $(i){return"a"==i.nodeName.toLowerCase()}(i)&&i.hasAttribute("href")}(i)||i.hasAttribute("contenteditable")||D(i))}(e)&&!this.isDisabled(e)&&(s?.ignoreVisibility||this.isVisible(e))}static#e=this.\u0275fac=function(s){return new(s||i)(o.LFG(h.t4))};static#t=this.\u0275prov=o.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function D(i){if(!i.hasAttribute("tabindex")||void 0===i.tabIndex)return!1;let t=i.getAttribute("tabindex");return!(!t||isNaN(parseInt(t,10)))}function L(i){if(!D(i))return null;const t=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(t)?-1:t}class J{get enabled(){return this._enabled}set enabled(t){this._enabled=t,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(t,this._startAnchor),this._toggleAnchorTabIndex(t,this._endAnchor))}constructor(t,e,s,n,r=!1){this._element=t,this._checker=e,this._ngZone=s,this._document=n,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,r||this.attachAnchors()}destroy(){const t=this._startAnchor,e=this._endAnchor;t&&(t.removeEventListener("focus",this.startAnchorListener),t.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return!!this._hasAttached||(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(t){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(t)))})}focusFirstTabbableElementWhenReady(t){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(t)))})}focusLastTabbableElementWhenReady(t){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(t)))})}_getRegionBoundary(t){const e=this._element.querySelectorAll(`[cdk-focus-region-${t}], [cdkFocusRegion${t}], [cdk-focus-${t}]`);return"start"==t?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(t){const e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){const s=this._getFirstTabbableElement(e);return s?.focus(t),!!s}return e.focus(t),!0}return this.focusFirstTabbableElement(t)}focusFirstTabbableElement(t){const e=this._getRegionBoundary("start");return e&&e.focus(t),!!e}focusLastTabbableElement(t){const e=this._getRegionBoundary("end");return e&&e.focus(t),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(t){if(this._checker.isFocusable(t)&&this._checker.isTabbable(t))return t;const e=t.children;for(let s=0;s<e.length;s++){const n=e[s].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[s]):null;if(n)return n}return null}_getLastTabbableElement(t){if(this._checker.isFocusable(t)&&this._checker.isTabbable(t))return t;const e=t.children;for(let s=e.length-1;s>=0;s--){const n=e[s].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[s]):null;if(n)return n}return null}_createAnchor(){const t=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,t),t.classList.add("cdk-visually-hidden"),t.classList.add("cdk-focus-trap-anchor"),t.setAttribute("aria-hidden","true"),t}_toggleAnchorTabIndex(t,e){t?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(t){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(t,this._startAnchor),this._toggleAnchorTabIndex(t,this._endAnchor))}_executeOnStable(t){this._ngZone.isStable?t():this._ngZone.onStable.pipe((0,u.q)(1)).subscribe(t)}}let q=(()=>{class i{constructor(e,s,n){this._checker=e,this._ngZone=s,this._document=n}create(e,s=!1){return new J(e,this._checker,this._ngZone,this._document,s)}static#e=this.\u0275fac=function(s){return new(s||i)(o.LFG(j),o.LFG(o.R0b),o.LFG(m.K0))};static#t=this.\u0275prov=o.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();const se=new o.OlP("cdk-input-modality-detector-options"),ie={ignoreKeys:[f.zL,f.jx,f.b2,f.MW,f.JU]},g=(0,h.i$)({passive:!0,capture:!0});let ne=(()=>{class i{get mostRecentModality(){return this._modality.value}constructor(e,s,n,r){this._platform=e,this._mostRecentTarget=null,this._modality=new O.X(null),this._lastTouchMs=0,this._onKeydown=a=>{this._options?.ignoreKeys?.some(d=>d===a.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=(0,h.sA)(a))},this._onMousedown=a=>{Date.now()-this._lastTouchMs<650||(this._modality.next(function ee(i){return 0===i.buttons||0===i.offsetX&&0===i.offsetY}(a)?"keyboard":"mouse"),this._mostRecentTarget=(0,h.sA)(a))},this._onTouchstart=a=>{!function te(i){const t=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!(!t||-1!==t.identifier||null!=t.radiusX&&1!==t.radiusX||null!=t.radiusY&&1!==t.radiusY)}(a)?(this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=(0,h.sA)(a)):this._modality.next("keyboard")},this._options={...ie,...r},this.modalityDetected=this._modality.pipe((0,_.T)(1)),this.modalityChanged=this.modalityDetected.pipe((0,b.x)()),e.isBrowser&&s.runOutsideAngular(()=>{n.addEventListener("keydown",this._onKeydown,g),n.addEventListener("mousedown",this._onMousedown,g),n.addEventListener("touchstart",this._onTouchstart,g)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,g),document.removeEventListener("mousedown",this._onMousedown,g),document.removeEventListener("touchstart",this._onTouchstart,g))}static#e=this.\u0275fac=function(s){return new(s||i)(o.LFG(h.t4),o.LFG(o.R0b),o.LFG(m.K0),o.LFG(se,8))};static#t=this.\u0275prov=o.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();const oe=new o.OlP("cdk-focus-monitor-default-options"),E=(0,h.i$)({passive:!0,capture:!0});let ae=(()=>{class i{constructor(e,s,n,r,a){this._ngZone=e,this._platform=s,this._inputModalityDetector=n,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new p.x,this._rootNodeFocusAndBlurListener=d=>{for(let v=(0,h.sA)(d);v;v=v.parentElement)"focus"===d.type?this._onFocus(d,v):this._onBlur(d,v)},this._document=r,this._detectionMode=a?.detectionMode||0}monitor(e,s=!1){const n=(0,y.fI)(e);if(!this._platform.isBrowser||1!==n.nodeType)return(0,l.of)();const r=(0,h.kV)(n)||this._getDocument(),a=this._elementInfo.get(n);if(a)return s&&(a.checkChildren=!0),a.subject;const d={checkChildren:s,subject:new p.x,rootNode:r};return this._elementInfo.set(n,d),this._registerGlobalListeners(d),d.subject}stopMonitoring(e){const s=(0,y.fI)(e),n=this._elementInfo.get(s);n&&(n.subject.complete(),this._setClasses(s),this._elementInfo.delete(s),this._removeGlobalListeners(n))}focusVia(e,s,n){const r=(0,y.fI)(e);r===this._getDocument().activeElement?this._getClosestElementsInfo(r).forEach(([d,M])=>this._originChanged(d,s,M)):(this._setOrigin(s),"function"==typeof r.focus&&r.focus(n))}ngOnDestroy(){this._elementInfo.forEach((e,s)=>this.stopMonitoring(s))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return 1===this._detectionMode||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,s){e.classList.toggle("cdk-focused",!!s),e.classList.toggle("cdk-touch-focused","touch"===s),e.classList.toggle("cdk-keyboard-focused","keyboard"===s),e.classList.toggle("cdk-mouse-focused","mouse"===s),e.classList.toggle("cdk-program-focused","program"===s)}_setOrigin(e,s=!1){this._ngZone.runOutsideAngular(()=>{this._origin=e,this._originFromTouchInteraction="touch"===e&&s,0===this._detectionMode&&(clearTimeout(this._originTimeoutId),this._originTimeoutId=setTimeout(()=>this._origin=null,this._originFromTouchInteraction?650:1))})}_onFocus(e,s){const n=this._elementInfo.get(s),r=(0,h.sA)(e);!n||!n.checkChildren&&s!==r||this._originChanged(s,this._getFocusOrigin(r),n)}_onBlur(e,s){const n=this._elementInfo.get(s);!n||n.checkChildren&&e.relatedTarget instanceof Node&&s.contains(e.relatedTarget)||(this._setClasses(s),this._emitOrigin(n,null))}_emitOrigin(e,s){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(s))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;const s=e.rootNode,n=this._rootNodeFocusListenerCount.get(s)||0;n||this._ngZone.runOutsideAngular(()=>{s.addEventListener("focus",this._rootNodeFocusAndBlurListener,E),s.addEventListener("blur",this._rootNodeFocusAndBlurListener,E)}),this._rootNodeFocusListenerCount.set(s,n+1),1==++this._monitoredElementCount&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe((0,T.R)(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){const s=e.rootNode;if(this._rootNodeFocusListenerCount.has(s)){const n=this._rootNodeFocusListenerCount.get(s);n>1?this._rootNodeFocusListenerCount.set(s,n-1):(s.removeEventListener("focus",this._rootNodeFocusAndBlurListener,E),s.removeEventListener("blur",this._rootNodeFocusAndBlurListener,E),this._rootNodeFocusListenerCount.delete(s))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,s,n){this._setClasses(e,s),this._emitOrigin(n,s),this._lastFocusOrigin=s}_getClosestElementsInfo(e){const s=[];return this._elementInfo.forEach((n,r)=>{(r===e||n.checkChildren&&r.contains(e))&&s.push([r,n])}),s}_isLastInteractionFromInputLabel(e){const{_mostRecentTarget:s,mostRecentModality:n}=this._inputModalityDetector;if("mouse"!==n||!s||s===e||"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName||e.disabled)return!1;const r=e.labels;if(r)for(let a=0;a<r.length;a++)if(r[a].contains(s))return!0;return!1}static#e=this.\u0275fac=function(s){return new(s||i)(o.LFG(o.R0b),o.LFG(h.t4),o.LFG(ne),o.LFG(m.K0,8),o.LFG(oe,8))};static#t=this.\u0275prov=o.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();const R="cdk-high-contrast-black-on-white",N="cdk-high-contrast-white-on-black",C="cdk-high-contrast-active";let ce=(()=>{class i{constructor(e,s){this._platform=e,this._document=s,this._breakpointSubscription=(0,o.f3M)(B.Yg).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);const s=this._document.defaultView||window,n=s&&s.getComputedStyle?s.getComputedStyle(e):null,r=(n&&n.backgroundColor||"").replace(/ /g,"");switch(e.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return 2;case"rgb(255,255,255)":case"rgb(255,250,239)":return 1}return 0}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const e=this._document.body.classList;e.remove(C,R,N),this._hasCheckedHighContrastMode=!0;const s=this.getHighContrastMode();1===s?e.add(C,R):2===s&&e.add(C,N)}}static#e=this.\u0275fac=function(s){return new(s||i)(o.LFG(h.t4),o.LFG(m.K0))};static#t=this.\u0275prov=o.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ue=(()=>{class i{constructor(e){e._applyBodyHighContrastModeCssClasses()}static#e=this.\u0275fac=function(s){return new(s||i)(o.LFG(ce))};static#t=this.\u0275mod=o.oAB({type:i});static#s=this.\u0275inj=o.cJS({imports:[x.Q8]})}return i})()},7131:(S,I,c)=>{c.d(I,{Q8:()=>p});var m=c(5879);let o=(()=>{class l{create(u){return typeof MutationObserver>"u"?null:new MutationObserver(u)}static#e=this.\u0275fac=function(_){return new(_||l)};static#t=this.\u0275prov=m.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})(),p=(()=>{class l{static#e=this.\u0275fac=function(_){return new(_||l)};static#t=this.\u0275mod=m.oAB({type:l});static#s=this.\u0275inj=m.cJS({providers:[o]})}return l})()}}]);