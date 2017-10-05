(function(){function y(){if(!F&&(F=!0,G)){for(var H=0;H<G.length;H++)G[H].call(window,[]);G=[]}}function z(H){var I=window.onload;window.onload="function"==typeof window.onload?function(){I&&I(),H()}:H}function A(){if(!E){if(E=!0,document.addEventListener&&!D.opera&&document.addEventListener("DOMContentLoaded",y,!1),D.msie&&window==top&&function(){if(!F){try{document.documentElement.doScroll("left")}catch(I){return void setTimeout(arguments.callee,0)}y()}}(),D.opera&&document.addEventListener("DOMContentLoaded",function(){if(!F){for(var I=0;I<document.styleSheets.length;I++)if(document.styleSheets[I].disabled)return void setTimeout(arguments.callee,0);y()}},!1),D.safari){var H;(function(){if(!F){if("loaded"!=document.readyState&&"complete"!=document.readyState)return void setTimeout(arguments.callee,0);if(void 0==H){for(var I=document.getElementsByTagName("link"),J=0;J<I.length;J++)"stylesheet"==I[J].getAttribute("rel")&&H++;var K=document.getElementsByTagName("style");H+=K.length}return document.styleSheets.length==H?void y():void setTimeout(arguments.callee,0)}})()}z(y)}}var B=window.DomReady={},C=navigator.userAgent.toLowerCase(),D={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)},E=!1,F=!1,G=[];B.ready=function(H){A(),F?H.call(window,[]):G.push(function(){return H.call(window,[])})},A()})(),window.FontAwesomeCdnConfig={autoA11y:{enabled:!1},asyncLoading:{enabled:!1},reporting:{enabled:!1},useUrl:"use.fontawesome.com",faCdnUrl:"https://cdn.fontawesome.com:443",code:"8198756c2c"},!function(){function y(Q){var R,S=[],T=document,U=T.documentElement.doScroll,V="DOMContentLoaded",W=(U?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState);W||T.addEventListener(V,R=function(){for(T.removeEventListener(V,R),W=1;R=S.shift();)R()}),W?setTimeout(Q,0):S.push(Q)}function z(Q,R){var S=!1;return Q.split(",").forEach(function(T){var U=new RegExp(T.trim().replace(".","\\.").replace("*","(.*)"));R.match(U)&&(S=!0)}),S}function A(Q){"undefined"!=typeof MutationObserver&&new MutationObserver(Q).observe(document,{childList:!0,subtree:!0})}function B(Q){var R,S,T,U;Q=Q||"fa",R=document.querySelectorAll("."+Q),Array.prototype.forEach.call(R,function(V){S=V.getAttribute("title"),V.setAttribute("aria-hidden","true"),T=!V.nextElementSibling||!V.nextElementSibling.classList.contains("sr-only"),S&&T&&(U=document.createElement("span"),U.innerHTML=S,U.classList.add("sr-only"),V.parentNode.insertBefore(U,V.nextSibling))})}!function(){"use strict";function Q(ca){aa.push(ca),1==aa.length&&_()}function R(){for(;aa.length;)aa[0](),aa.shift()}function S(ca){this.a=ba,this.b=void 0,this.f=[];var da=this;try{ca(function(ea){V(da,ea)},function(ea){W(da,ea)})}catch(ea){W(da,ea)}}function U(ca){return new S(function(da){da(ca)})}function V(ca,da){if(ca.a==ba){if(da==ca)throw new TypeError;var ea=!1;try{var fa=da&&da.then;if(null!=da&&"object"==typeof da&&"function"==typeof fa)return void fa.call(da,function(ga){ea||V(ca,ga),ea=!0},function(ga){ea||W(ca,ga),ea=!0})}catch(ga){return void(ea||W(ca,ga))}ca.a=0,ca.b=da,X(ca)}}function W(ca,da){if(ca.a==ba){if(da==ca)throw new TypeError;ca.a=1,ca.b=da,X(ca)}}function X(ca){Q(function(){if(ca.a!=ba)for(;ca.f.length;){var da=ca.f.shift(),ea=da[0],fa=da[1],ga=da[2],da=da[3];try{0==ca.a?ga("function"==typeof ea?ea.call(void 0,ca.b):ca.b):1==ca.a&&("function"==typeof fa?ga(fa.call(void 0,ca.b)):da(ca.b))}catch(ha){da(ha)}}})}var _,aa=[];_=function(){setTimeout(R)};var ba=2;S.prototype.g=function(ca){return this.c(void 0,ca)},S.prototype.c=function(ca,da){var ea=this;return new S(function(fa,ga){ea.f.push([ca,da,fa,ga]),X(ea)})},window.Promise||(window.Promise=S,window.Promise.resolve=U,window.Promise.reject=function(ca){return new S(function(da,ea){ea(ca)})},window.Promise.race=function(ca){return new S(function(da,ea){for(var fa=0;fa<ca.length;fa+=1)U(ca[fa]).c(da,ea)})},window.Promise.all=function(ca){return new S(function(da,ea){function fa(ja){return function(ka){ha[ja]=ka,ga+=1,ga==ca.length&&da(ha)}}var ga=0,ha=[];0==ca.length&&da(ha);for(var ia=0;ia<ca.length;ia+=1)U(ca[ia]).c(fa(ia),ea)})},window.Promise.prototype.then=S.prototype.c,window.Promise.prototype["catch"]=S.prototype.g)}(),function(){function Q(W){this.el=W;for(var X=W.className.replace(/^\s+|\s+$/g,"").split(/\s+/),Y=0;Y<X.length;Y++)T.call(this,X[Y])}function R(W,X,Y){Object.defineProperty?Object.defineProperty(W,X,{get:Y}):W.__defineGetter__(X,Y)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var S=Array.prototype,T=S.push,U=S.splice,V=S.join;Q.prototype={add:function(W){this.contains(W)||(T.call(this,W),this.el.className=this.toString())},contains:function(W){return-1!=this.el.className.indexOf(W)},item:function(W){return this[W]||null},remove:function(W){if(this.contains(W)){for(var X=0;X<this.length&&this[X]!=W;X++);U.call(this,X,1),this.el.className=this.toString()}},toString:function(){return V.call(this," ")},toggle:function(W){return this.contains(W)?this.remove(W):this.add(W),this.contains(W)}},window.DOMTokenList=Q,R(Element.prototype,"classList",function(){return new Q(this)})}}();var C=function(Q,R,S){function T(aa){return W.body?aa():void setTimeout(function(){T(aa)})}function U(){X.addEventListener&&X.removeEventListener("load",U),X.media=S||"all"}var V,W=window.document,X=W.createElement("link");if(R)V=R;else{var Y=(W.body||W.getElementsByTagName("head")[0]).childNodes;V=Y[Y.length-1]}var Z=W.styleSheets;X.rel="stylesheet",X.href=Q,X.media="only x",T(function(){V.parentNode.insertBefore(X,R?V:V.nextSibling)});var _=function(aa){for(var ba=X.href,ca=Z.length;ca--;)if(Z[ca].href===ba)return aa();setTimeout(function(){_(aa)})};return X.addEventListener&&X.addEventListener("load",U),X.onloadcssdefined=_,_(U),X},D=null;!function(){function Q(ba,ca){document.addEventListener?ba.addEventListener("scroll",ca,!1):ba.attachEvent("scroll",ca)}function R(ba){document.body?ba():document.addEventListener?document.addEventListener("DOMContentLoaded",function ca(){document.removeEventListener("DOMContentLoaded",ca),ba()}):document.attachEvent("onreadystatechange",function ca(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",ca),ba())})}function S(ba){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(ba)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function T(ba,ca){ba.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+ca+";"}function U(ba){var ca=ba.a.offsetWidth,da=ca+100;return ba.f.style.width=da+"px",ba.c.scrollLeft=da,ba.b.scrollLeft=ba.b.scrollWidth+100,ba.g!==ca&&(ba.g=ca,!0)}function V(ba,ca){function da(){var fa=ba;U(fa)&&fa.a.parentNode&&ca(fa.g)}Q(ba.b,da),Q(ba.c,da),U(ba)}function W(ba,ca){var da=ca||{};this.family=ba,this.style=da.style||"normal",this.weight=da.weight||"normal",this.stretch=da.stretch||"normal"}function X(){if(null===_){var ba=document.createElement("div");try{ba.style.font="condensed 100px sans-serif"}catch(ca){}_=""!==ba.style.font}return _}function Y(ba,ca){return[ba.style,ba.weight,X()?ba.stretch:"","100px",ca].join(" ")}var Z=null,_=null,aa=null;W.prototype.load=function(ba,ca){var da=this,ea=ba||"BESbswy",fa=ca||3e3,ga=new Date().getTime();return new Promise(function(ha,ia){if(null==aa&&(aa=!!window.FontFace),aa){var ja=new Promise(function(la,ma){function na(){new Date().getTime()-ga>=fa?ma():document.fonts.load(Y(da,da.family),ea).then(function(oa){1<=oa.length?la():setTimeout(na,25)},function(){ma()})}na()}),ka=new Promise(function(la,ma){setTimeout(ma,fa)});Promise.race([ka,ja]).then(function(){ha(da)},function(){ia(da)})}else R(function(){function la(){var ya;(ya=-1!=qa&&-1!=ra||-1!=qa&&-1!=sa||-1!=ra&&-1!=sa)&&((ya=qa!=ra&&qa!=sa&&ra!=sa)||(null===Z&&(ya=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),Z=!!ya&&(536>parseInt(ya[1],10)||536===parseInt(ya[1],10)&&11>=parseInt(ya[2],10))),ya=Z&&(qa==ta&&ra==ta&&sa==ta||qa==ua&&ra==ua&&sa==ua||qa==va&&ra==va&&sa==va)),ya=!ya),ya&&(wa.parentNode&&wa.parentNode.removeChild(wa),clearTimeout(xa),ha(da))}function ma(){if(new Date().getTime()-ga>=fa)wa.parentNode&&wa.parentNode.removeChild(wa),ia(da);else{var ya=document.hidden;!0!==ya&&void 0!==ya||(qa=na.a.offsetWidth,ra=oa.a.offsetWidth,sa=pa.a.offsetWidth,la()),xa=setTimeout(ma,50)}}var na=new S(ea),oa=new S(ea),pa=new S(ea),qa=-1,ra=-1,sa=-1,ta=-1,ua=-1,va=-1,wa=document.createElement("div"),xa=0;wa.dir="ltr",T(na,Y(da,"sans-serif")),T(oa,Y(da,"serif")),T(pa,Y(da,"monospace")),wa.appendChild(na.a),wa.appendChild(oa.a),wa.appendChild(pa.a),document.body.appendChild(wa),ta=na.a.offsetWidth,ua=oa.a.offsetWidth,va=pa.a.offsetWidth,ma(),V(na,function(ya){qa=ya,la()}),T(na,Y(da,"\""+da.family+"\",sans-serif")),V(oa,function(ya){ra=ya,la()}),T(oa,Y(da,"\""+da.family+"\",serif")),V(pa,function(ya){sa=ya,la()}),T(pa,Y(da,"\""+da.family+"\",monospace"))})})},D=W}();var E={observe:function(Q,R){for(var S=R.prefix,T=function(V){var W=V.weight?"-"+V.weight:"",X=V.style?"-"+V.style:"",Y=V.className?"-"+V.className:"",Z=V.className?"-"+V.className+W+X:"",_=document.getElementsByTagName("html")[0].classList,aa=function(ca){_.add(S+Y+"-"+ca),_.add(S+Z+"-"+ca)},ba=function(ca){_.remove(S+Y+"-"+ca),_.remove(S+Z+"-"+ca)};aa("loading"),new D(V.familyName).load(V.testString).then(function(){aa("ready"),ba("loading")},function(){aa("failed"),ba("loading")})},U=0;U<Q.length;U++)T(Q[U])}},F={load:function(Q){var R=document.createElement("link");R.href=Q,R.media="all",R.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(R)},loadAsync:function(Q){C(Q)}},G={load:function(Q){var R=document.createElement("script"),S=document.scripts[0];R.src=Q,S.parentNode.appendChild(R)}};try{if(window.FontAwesomeCdnConfig){var H=window.FontAwesomeCdnConfig,I=H.useUrl,J=H.faCdnUrl,K=H.code,L="FontAwesome",N="\xEF\u2030\u20AC",O=B.bind(B,"fa"),P=function(){};H.autoA11y.enabled&&(y(O),A(O)),H.reporting.enabled&&z(H.reporting.domains,location.host)&&G.load(J+"/js/stats.js"),cssUrl="https://"+I+"/"+K+".css",new D(L).load(N).then(function(){var Q=(window.FontAwesomeHooks||{}).loaded||P;Q()},P),H.asyncLoading.enabled?F.loadAsync(cssUrl):F.load(cssUrl),E.observe([{familyName:L,testString:N}],{prefix:"fa"+"-events-icons"})}}catch(Q){}}(),window.$=document.querySelectorAll.bind(document),Node.prototype.on=window.on=function(y,z){this.addEventListener(y,z)},NodeList.prototype.__proto__=Array.prototype,NodeList.prototype.on=NodeList.prototype.addEventListener=function(y,z){this.forEach(function(A){A.on(y,z)})};var getClosest=function(y,z){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(A){for(var B=(this.document||this.ownerDocument).querySelectorAll(A),C=B.length;0<=--C&&B.item(C)!==this;);return-1<C});y&&y!==document;y=y.parentNode)if(y.matches(z))return y;return null};!function(y,z){"use strict";"function"==typeof define&&define.amd?define("ajax",z):"object"==typeof exports?exports=module.exports=z():y.ajax=z()}(this,function(){"use strict";function z(K){return K||null}function A(K,L,M,N){var P=["then","catch","always"].reduce(function(S,T){return S[T]=function(U){return S[T]=U,S},S},{}),Q=new XMLHttpRequest,R=B(L,M,K);return Q.open(K,R,!0),Q.withCredentials=N.hasOwnProperty("withCredentials"),C(Q,N.headers),Q.addEventListener("readystatechange",E(P,Q),!1),Q.send(G(M)),P.abort=function(){return Q.abort()},P}function B(K,L,M){if("get"!==M.toLowerCase()||!L)return K;var N=G(L),O=-1<K.indexOf("?")?"&":"?";return K+O+N}function C(K,L){L=L||{},D(L)||(L["Content-Type"]="application/x-www-form-urlencoded"),Object.keys(L).forEach(function(M){L[M]&&K.setRequestHeader(M,L[M])})}function D(K){return Object.keys(K).some(function(L){return"content-type"===L.toLowerCase()})}function E(K,L){return function M(){L.readyState===L.DONE&&(L.removeEventListener("readystatechange",M,!1),K.always.apply(K,F(L)),200<=L.status&&300>L.status?K.then.apply(K,F(L)):K["catch"].apply(K,F(L)))}}function F(K){var L;try{L=JSON.parse(K.responseText)}catch(M){L=K.responseText}return[L,K]}function G(K){return H(K)?I(K):K}function H(K){return"[object Object]"===Object.prototype.toString.call(K)}function I(K){return Object.keys(K).reduce(function(L,M){var N=L?L+"&":"";return N+J(M)+"="+J(K[M])},"")}function J(K){return encodeURIComponent(K)}return function(K){return K=K||{},K.baseUrl=K.baseUrl||"",K.method&&K.url?A(K.method,K.baseUrl+K.url,z(K.data),K):["get","post","put","delete"].reduce(function(M,N){return M[N]=function(O,P){return A(N,K.baseUrl+O,z(P),K)},M},{})}});var style=document.createElement("style");style.type="text/css",style.innerHTML=`
.wr-remarkCreate {
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #F44336;
  -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
  bottom: 50px;
  right: 50px;
  z-index: 2000;
}
.wr-remark-circle {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #F44336;
  border: 1px solid #222222;
  -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
}
.wr-commentContainer {
  position: absolute;
  width: 300px;
  height: 175px;
  padding: 10px;
  background-color: #fefefe;
  box-shadow: 0 0 0 1px rgba(50,65,95, .12), 0 0 8px rgba(51,60,78, .07);
  z-index: 3000;
  font-size: 16px !important;
  transition: all 300ms ease;
}
.wr-commentContainer:before {
  content: '';
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #fefefe;
  position: absolute;
  left: 0px;
  top: -10px;
  display: none;
}
.wr-commentContainer.inactive textarea, .wr-commentContainer.inactive div, .wr-commentContainer.inactive:before {
  display: none;
}
.wr-commentContainer.inactive {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  padding: 0;
  transition: all 300ms ease;
}
.wr-commentContainer.inactive:hover {
  cursor: pointer;
}
.wr-remark-input {
  height: 75%;
  width: 100%;
  border: 1px solid #e8eaf0;
  color: #44495a;
  padding: 11px 12px;
  resize: none;
  font-weight: 400;
}
.wr-remark-input:focus {
  border-color: #b7bcca;
  outline-width: 0px;
}
.wr-display-text {
  display: none;
  height: 75%;
  width: 100%;
}
.wr-commentContainer.wr-show .wr-display-text {
  display: block;
}
.wr-commentContainer.wr-show .wr-remark-input {
  display: none;
}
.wr-commentContainer.wr-edit {

}
.wr-button-row {
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.wr-save-button {
  width: 40%;
  text-align: center;
  background-color: #F44336;
  color: #FFF;
  border-radius: 50px;
  float: right;
  line-height: 35px;
  font-size: 14px;
  font-weight: 400;
  height: 90%;
}

.fa-pencil {
  font-size: 20px;
  line-height: 50px;
  color: #FFF;
  text-align: center;
  width: inherit
}

.wr-commentContainer .fa-commenting-o {
  display: none;
}

.wr-commentContainer.inactive .fa-commenting-o {
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: -2px;
}

.remark-hover {
  background-color: rgba(0, 0, 0, 0.2);
}`;var remarkCreate=document.createElement("div");remarkCreate.classList.add("wr-remarkCreate"),remarkCreate.innerHTML="<i class=\"wr-icon fa fa-pencil\" aria-hidden=\"true\"></i>";var commentContainer=document.createElement("div");commentContainer.classList.add("wr-commentContainer"),commentContainer.innerHTML="<textarea class=\"wr-remark-input\" placeholder=\"Type a Comment\"></textarea><div class=\"wr-display-text\">Example Comment</div><div class=\"wr-button-row\"><div class=\"wr-save-button\">Save Remark</div></div>";var xhr=new XMLHttpRequest;function queryCheck(){return window.location.href.includes("webRemarks=true")}function removeHighlights(){var y=document.querySelectorAll(".remark-hover");console.log(y),y[0].classList.remove("remark-hover")}function createComment(y){commentTarget={clientX:y.clientX,clientY:y.clientY,pageX:y.pageX,pageY:y.pageY},console.log(commentTarget),y.srcElement.appendChild(commentContainer)}function saveComment(y){console.log(y);var z=y.path[2],A=z.firstChild.value;console.log(commentTarget);var B={url:window.location.href,text:A,app_id:2,authenticity_token:window._token,target:commentTarget};xhr.open("POST","/apps/2/remarks"),xhr.setRequestHeader("Content-Type","application/json"),xhr.onload=function(){200!==xhr.status&&console.log(xhr.status)},xhr.send(JSON.stringify(B));var C=getClosest(y.srcElement,".wr-commentContainer");C.classList.add("inactive"),$(".wr-commentContainer.inactive").on("click",function(){this.classList.remove("inactive"),this.classList.add("wr-show")}),commentMode=!1,removeHighlights(),document.body.style="cursor: normal"}var getURL="/apps/1/remarks";function getComments(){ajax().get("/apps/2/remarks",{url:window.location.href}).then(function(z){console.log(z),setComments(z)})}function setComments(y){y.remarks.forEach(function(z){var A=document.elementFromPoint(z.target.clientX,z.target.clientY);console.log(A);var B=document.createElement("div");B.classList.add("wr-commentContainer","inactive"),B.innerHTML=`<span class="fa fa-commenting-o"></span><textarea class="wr-remark-input" placeholder="Type a Comment">${z.text}</textarea><div class="wr-display-text">Example Comment</div><div class="wr-button-row"><div class="wr-save-button">Save Changes</div></div>`,A.append(B)}),$(".wr-commentContainer.inactive").on("click",function(){$(".wr-commentContainer").forEach(function(A){A.classList.add("inactive")}),this.classList.remove("inactive")})}var commentMode=!1,commentTarget="";function checkCommentMode(){return commentMode}DomReady.ready(function(){if(queryCheck()){getComments(),document.body.appendChild(style),document.body.appendChild(remarkCreate);var y=document.querySelector(".wr-remarkCreate");y.addEventListener("click",function(){document.body.style="cursor: context-menu",commentMode=!0,$("*").on("mouseover",function(A){checkCommentMode()&&(A.stopPropagation(),this.classList.add("remark-hover"))}),$("*").on("mouseout",function(A){checkCommentMode()&&(A.stopPropagation(),this.classList.remove("remark-hover"))})}),document.body.addEventListener("click",function(z){commentMode&&(z.target.className.includes("wr-")?z.target.className.includes("wr-save-button")&&saveComment(z):createComment(z))})}});
