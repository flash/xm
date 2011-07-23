
/* url: /js/mcore/nano.src.js */

var rr=this.rr||{'ver':'minicore 0.2',global:this,document:document};
new function(){
var z=rr,d=document,w=window,nv=navigator,ua=nv.userAgent,v,i,f;
v=(ua.match(/.+(rv|WebKit|era|MSIE|Safari)[\/: ](\d+(\.\d)?)/)||[])[2]-0;
z.Kqn=z.Opera=z.Gecko=z.IE=z.WebKit=z.SWF=z.Chrome=z.Safari=z.Firefox=NaN;
if(w.opera&&opera.buildNumber){
z.Opera=(opera.version&&opera.version()||v)-0;
}
else if(/Konqueror/.test(ua)){
z.Kqn=3;
}
else if(/WebKit/.test(ua)){
z.WebKit=parseInt(v,10);
if(i=ua.match(/Chrome\/(\d+(\.\d)?)/)){
z.Chrome=+i[1];
}
else if(i=/Safari/.test(ua)&&ua.match(/Version\/(\d+(\.\d)?)/))
z.Safari=+i[1];
}
else if(/Gecko/.test(ua)){
if(i=ua.match(/rv:\d+\.\d+\.(\d)/))if(i=i[1]/100)v+=i;
z.Gecko=(v<1.9&&d.getElementsByClassName?1.9:v)||1.9;
if(i=ua.match(/Firefox\/(\d+(\.\d)?)/))z.Firefox=+i[1];
}
else if(/xplorer/.test(nv.appName)){
z.IE=d.documentMode||v||8;
z.qIE=d.compatMode!='CSS1Compat';
}
else z.Gecko=1.9;
try{f=!z.Kqn&&(/(\d+(\.\d+)?)/).exec(nv.mimeTypes['application/x-shockwave-flash'].enabledPlugin.description)[1]||false
}catch(e){f=false};
if(!f&&z.IE&&w.ActiveXObject){
try{f=(/WIN\s+(\d+)/).exec(new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version'))[1]
}catch(e){}};
if(f)z.SWF=+f||NaN;
z.is_mobile=/Mobile/.test(ua);
z.is_j2me=/J2ME[\/]/.test(nv.appVersion);
z.osWin=/Windows/.test(ua);
z.osMac=/Mac OS/.test(ua);
z.osLnx=/Linux/.test(ua)};
if(rr.IE==6)try{rr.document.execCommand('BackgroundImageCache',false,true)}catch(oh){};
rr.log=function(x){
var c=window.console;
c&&c.log&&c.log(x)};
rr.domReady=rr.addInitDOM=(function(){
var init,add=null;
(function(){
var callback=[],callback_init=[],xLoaded=false,xInit=false,d=document,h,s;
add=function(fn,x){
if(add.stop)return fn;
if(typeof fn=='function'){
if(!xLoaded||(x&&!xInit)){
x=x?callback_init:callback;
x[x.length]=fn;
}else fn()}else
if(fn==='initDOM'){
setTimeout(init,123)}else
if(fn==='fastInit')
init();
return fn;
};
init=function(e){
if(!xLoaded){
xLoaded=add.status=true;
_init(callback);
var i=function(){
xInit=true;
_init(callback_init)};
if(add.setupInit){add.setupInit(i)}else i()}};
function _init(c,em){
var x,i=0;
while(x=c[i++]){
try{x()}catch(e){er(e)}};
c.length=0;
};
function er(e){setTimeout(function(){throw e},1)}})();
new function(){
var d=document,w=window,s,tm,g=init;
if(!/loaded|complete/.test(d.readyState+'')){
if(d.addEventListener){
d.addEventListener('DOMContentLoaded',g,false);
w.addEventListener('load',g,false)}
else if(rr.IE<9){
w.attachEvent('onload',g);
d.write('<script id="__ie_onload" defer="defer" src="//:"></script>');
if(s=d.getElementById('__ie_onload')){
s.id='';
s.onreadystatechange=function(){
if(this.readyState=='complete')setTimeout(function(){g()},22)}};
return;
}
else new function(){
var ol=w.onload;
w.onload=ol?function(){g();ol();w.onload=null}:g;
};
if(rr.WebKit||rr.Opera<9){
tm=setInterval(function(){
if(/loaded|complete/.test(d.readyState)){
clearInterval(tm);
g()}},10)}}else g()};
return add;
})();
new function(d){
d=d||rr.document;
if(typeof d.activeElement!='undefined'||!d.addEventListener||rr.Opera<8)return;
try{d.activeElement=d.body}catch(e){return};
if(d.defaultView.getSelection)d.activeElement=d.defaultView.getSelection().focusNode||d.body;
function setIfr(nd){
nd.__setEvActiveElement=true;
var w=nd.contentWindow;
w.addEventListener('focus',function(e){
d.activeElement=nd;
},true);
w.addEventListener('blur',_blur_=function(e){
d.activeElement=d.body;
},true)};
d.defaultView.addEventListener('focus',function(e){
var t=e.target;
d.activeElement=(t==d||t==d.defaultView)?d.body:t;
},true);
d.defaultView.addEventListener('blur',function(e){
var ar=d.getElementsByTagName('iframe'),l=ar.length,i;
for(i=0;i<l;i++)
if(ar[i].contentWindow&&!ar[i].__setEvActiveElement)setIfr(ar[i]);
ar=l=null;
d.activeElement=d.body;
},true)};
if(rr.IE<10)new function(d){
d=d||rr.document;
new function(){
var pnd;
d.attachEvent('onbeforeeditfocus',function(e){
var nd=e.srcElement;
if(typeof nd.caret_pos=='undefined'){
setup(nd,pnd!=nd)};
pnd==null;
});
d.attachEvent('onmouseup',function(){pnd=null});
d.attachEvent('onmousedown',function(e){
pnd=e.srcElement;
pnd.__selectionEnd__=pnd.__selectionStart__=null;
})};
function setup(nd,fs){
nd.caret_pos=false;
nd.attachEvent('onmousedown',function(){
nd.caret_pos=null;
nd.__selectionEnd__=nd.__selectionStart__=null;
});
nd.attachEvent('onfocus',function(){
if(typeof nd.__selectionStart__=='number'){
var s=nd.__selectionStart__,e=nd.__selectionEnd__;
s=s>0?s:0;
e=e>s?e:s;
if(nd.setSelectionRange){
nd.setSelectionRange(s,e)}
else{
var r=nd.createTextRange()
,v=nd.value
,l=v.length;
if(s>l)s=l;
if(e>l)e=l;
e=e>s?v.substring(s,e).replace(/\r\n/g,'\n').length:0;
s=v.substring(0,s).replace(/\r\n/g,'\n').length;
r.moveStart('character',s);
r.collapse(true);
if(e>0)r.moveEnd('character',e);
r.select()};
nd.__selectionEnd__=nd.__selectionStart__=null;
}
else if(nd.caret_pos){
nd.caret_pos.select()};
nd.caret_pos=null;
});
if(fs)nd.__selectionEnd__=nd.__selectionStart__=0;
nd.attachEvent('onbeforedeactivate',function(){
nd.caret_pos=d.selection.createRange();
nd.scrollTop;
})}};
if(!Date.now){Date.now=function(){return(new Date()).getTime()}};
(function(){
var p=String.prototype;
if(!p.trim){
var rg=/^[\s|\xA0]+|[\s|\xA0]+$/g;
p.trim=function(){
return this.replace(rg,'')}};
p=null;
})();
if(!Function.prototype.bind){
(Function.prototype.bind=function(o,f){
f=this;return function(){return f.apply(o,arguments)}}).bind=Function()()};
rr.extendNS=function(o,n,ext){
var i,v,l,x;
if(!n&&!ext){
n=o;o=i;
};
o=o||this.global||window;
n=n.split('.');
for(i=0,l=n.length;i<l;i++){
if(x=n[i]){
if(v)o=o[v]||(o[v]={});
v=x;
}};
if(!o[v])o[v]=ext||{};
o=o[v];
return o;
};
rr.ns=function(n,o){
o=o||this.global||window;
n=n.split('.');
for(var i=0,l=n.length,v;i<l;i++){
if(v=n[i])o=o[v]||(o[v]={})};
return o;
};
rr.extend=function(o){
if(typeof o=='string')o=this.ns(o);
if(!o)o={};
var i=1,l=arguments.length,n,e;
while(i<l){
if(e=arguments[i++]){
for(n in e)
if(e.hasOwnProperty(n))
o[n]=e[n];
if(rr.IE<9&&e.hasOwnProperty('constructor')){
o.constructor=e.constructor;
}}};
return o;
};
rr.init=function(o){
if(typeof o=='function'){
return this.domReady(o,true)};
if(typeof o=='string')o=this.ns(o);
if(!o)o={};
var i=1,l=arguments.length,n,xr,xi,e;
for(;i<l;i++){
e=arguments[i];
for(n in e){
if(e.hasOwnProperty(n)){
switch(n){
case'$domReady':xr=e[n];break;
case'$init':xi=e[n];break;
};
o[n]=e[n];
}}};
if(typeof xr=='function'){
this.domReady(xr.bind(o))};
if(typeof xi=='function'){
this.domReady(xi.bind(o),true)};
return o;
};
rr.textSelection_get=function(n){
if(typeof n.selectionStart=='number'){
return{start:n.selectionStart||0,end:n.selectionEnd||0}};
if(typeof n.__selectionStart__=='number'){
return{start:n.__selectionStart__||0,end:n.__selectionEnd__||0}};
if(n.caret_pos){
n.caret_pos.select();
n.caret_pos=null;
};
var d=(n.ownerDocument||document),r=n.caret_pos||d.selection.createRange(),s,e;
if(r.parentElement()!=n){
if(!n.offsetParent)return{start:0,end:0};
n.focus();
r=d.selection.createRange()};
if(n.tagName=='TEXTAREA'){
var m=r.getBookmark(),v=n.value;
r=n.createTextRange();
r.moveToBookmark(m);
r.text='';
r.moveEnd('character',e=n.value.length);
e=v.length-e;
r.text='';
s=n.value.length;
e=s+e;
r.expand('textedit');
r.text=v;
if(s==v.length){
r.expand('textedit');
r.collapse()}
else{
r=d.selection.createRange();
r.moveToBookmark(m);
r.select()}}
else{
e=r.text.length;
r.moveStart('character',-n.value.length);
s=r.text.length;
e=s+e;
};
return{start:s,end:e}}
rr.textSelection_set=function(n,s,e){
s=s>0?s:0;
e=e>s?e:s;
if(n.setSelectionRange)return n.setSelectionRange(s,e);
if((n.ownerDocument||document).activeElement!==n){
n.__selectionStart__=s;
n.__selectionEnd__=e;
return;
};
var r=n.createTextRange(),v=n.value,l=v.length;
if(s>l)s=l;
if(e>l)e=l;
e=e>s?v.substring(s,e).replace(/\r\n/g,'\n').length:0;
s=v.substring(0,s).replace(/\r\n/g,'\n').length;
r.moveStart('character',s);
r.collapse(true);
if(e)r.moveEnd('character',e);
r.select()};
rr.textSelection_collapse=function(n,s,e){
this.textSelection_set(n,f?0:n.value.length)};
rr.textSel={set:rr.textSelection_set,get:rr.textSelection_get};
new function(){
function x(r){
return function(v){
return typeof v=='string'&&v.indexOf(r)<0?null:parseInt(v,10)}};
rr.getPx=x('px');
rr.getEm=x('em');
rr.getEx=x('ex');
rr.getPc=x('%')};
rr.extend(rr,{
$:function(e,d){
return typeof e==='string'?(d||rr.document).getElementById(e):e;
},
trim:function(s,t){
return(t=typeof s)=='string'?s.trim():t=='number'?s.toString():'';
},
timeThrow:function(e){
setTimeout(function(){throw e},0)},
nullFunction:function(){},
newFunction:function(){
return function(){}},
new_class:function(){
var oc=Object.prototype.constructor;
function cn(){};
function clss(c){
return function(a1,a2,a3){
var x=c.parent,l,m,u;
if(typeof x==='function'){
x.apply(this,arguments)};
if(c.factory){
switch(l=arguments.length){
case 0:x=c.factory(this);break;
case 1:x=c.factory(this,a1);break;
case 2:x=c.factory(this,a1,a2);break;
case 3:x=c.factory(this,a1,a2,a3);break;
default:
for(m=[this];x=l--;)m[x]=arguments[l];
x=c.factory.apply(c,m)};
if(x!==u)return x;
}}};
return function(c){
if(c){
var p=c.parent,i,s,u;
if(p=p&&p.prototype){
cn.prototype=p;
p=new cn;
if(s=c.prototype){
for(i in s)if(s[i]!==u)p[i]=s[i];
c.prototype=p;
}};
s=c.constructor;
if(!s||s===oc)s=clss(c);
if(p=c.prototype)s.prototype=p;
if(i=c.interface)s.prototype[i===true?'interface':i]=c;
s.interface=c;
return s;
}}}(),
newPrototype:function(){
var c=function(){},cp=c.prototype;
return function(p){return c.prototype=p||cp,new c}}(),
newTemplate:function(){
var c=function(){},cp=c.prototype,ie=!(function(i){for(i in{constructor:1})return 1})(),s=!{}.__proto__;
return function(p){
c.prototype=p||cp;
var x=new c,l=arguments.length,i=1,n,e;
if(!s){x.__proto__=p;c.prototype=x;x=new c};
while(i<l){
if(e=arguments[i++]){
for(n in e)
if(e.hasOwnProperty(n))
x[n]=e[n];
if(ie&&e.hasOwnProperty(n='constructor'))
x[n]=e[n];
}};
return x;
}}(),
newHttpRequest:function(){
var w=this.global||window;
if(w.XMLHttpRequest)return new w.XMLHttpRequest();
try{return new w.ActiveXObject('Microsoft.XMLHTTP')}catch(e){}},
printx:(function(){
var rg=/%%|%(s|\d{1,2})%?/g,arg,u,l,p;
function fn(s,x){
if(s=='%%')return'%';
if(x==='s')x=p++;
if(x!==u&&++x<l){
return arg[x];
}};
return function(v){
if(v&&typeof v=='string'){
p=0;arg=arguments;l=arg.length;
v=v.replace(rg,fn)};
return v
}})(),
prints:(function(){
var rg=/\$(\$|([\w]{0,26})(\$|\|([^\s\$][^\$\n]*)?\$)?)/g,nx,o={},u;
function fn(s,x,a2,a3,a4){
if(s=='$$')return'$';
x=nx[a2];
return x!==u?x:(!a3||a3==='$'?s:a4||'')};
return function(v,ns){
nx=ns||o;
return v.replace(rg,fn)}})(),
ct:function(q){
var a=[],i=1,j=0,l=arguments.length,x;
while(i<l){
x=arguments[i++];
if(x||x===0)a[j++]=x;
};
return!j?'':a.join(q||'')},
each:function(o,cb,pr){
if(!o)return;
var i,l=o.length,u;
if(l!==i){
i=0;
if(o.item){
while(i<l){
if(cb(o.item(i),i++,l,pr)===false)
return
};
return true;
};
while(i<l){
if(cb(o[i],i++,l,pr)===false)
return
}}else for(i in o)if(o.hasOwnProperty(i)){
if(cb(o[i],i,u,pr)===false)return;
};
return true;
},
map:function(a,cb){
if(a&&typeof cb=='function'){
if(typeof a.map==='function')return a.map(cb)
var na=[],l=a.length,i=0;
if(l>0){
na.length=l;
for(;i<l;i++)na.push(cb(a[i],i,a))};
return na;
}},
indexOf:function(a,x,i){
if(a){
if(typeof a.indexOf==='function')
return a.indexOf(x,i);
var l=a.length,u;
i=i>0?i:i<0&&l>-i?l+i:0;
for(;i<l;i++)if(a[i]===x)return i
};
return-1;
},
bind:function(x,fn){
return function(){return fn.apply(x,arguments)}},
addHandler:function(){
var w3=typeof document.addEventListener==='function';
return function(o,e,h,x){
if(o&&e&&h){
var a=e.indexOf(' ')!==-1?e.split(' '):[e],i=0;
while(e=a[i++]){
if(e==='mouseScroll')e=rr.Gecko?'DOMMouseScroll':'mousewheel';
if(w3||typeof o.addEventListener!=='undefined'){
o.addEventListener(e,h,x||false)}else o.attachEvent('on'+e,h)}};
return h
}}(),
removeHandler:function(){
var w3=typeof document.addEventListener==='function';
return function(o,e,h,x){
if(o&&e&&h){
var a=e.indexOf(' ')!==-1?e.split(' '):[e],i=0;
while(e=a[i++]){
if(e==='mouseScroll')e=rr.Gecko?'DOMMouseScroll':'mousewheel';
if(w3||typeof o.removeEventListener==='function'){
o.removeEventListener(e,h,!!x)}else o.detachEvent('on'+e,h)}}}}(),
addHandler_:function(o,e,h,x){return this.addHandler(o,e,h,x!==false)},
removeHandler_:function(o,e,h,x){return this.removeHandler(o,e,h,x!==false)},
getClientWH:function(d,x){
d=d||this.document;
if(rr.IE){
var v=rr.qIE?d.body:d.documentElement;
if(!v)return{x:0,y:0};
return{
w:v.offsetWidth,
h:v.offsetHeight,
st:x||v.scrollTop,
sl:x||v.scrollLeft,
sw:x||v.scrollWidth,
sh:x||v.scrollHeight
}}
else{
var dE=d.documentElement,w=d.defaultView;
return{
w:w.innerWidth,
h:w.innerHeight,
st:x||w.pageYOffset,
sl:x||w.pageXOffset,
sw:x||dE.scrollWidth,
sh:x||dE.scrollHeight
}}},
getAbsolutePos:document.documentElement.getBoundingClientRect?function(n){
if(!n)return;
var d=n.ownerDocument||rr.document,w=d.parentWindow||d.defaultView,v,bx;
if(rr.IE){
v=rr.qIE?d.body:d.documentElement;
if(!v)return{x:0,y:0}};
bx=n.getBoundingClientRect();
return{
y:bx.top+((v?v.scrollTop-v.clientTop:w.pageYOffset)||0),
x:bx.left+((v?v.scrollLeft-v.clientLeft:w.pageXOffset)||0)}}:function(el){
var r={x:el.offsetLeft,y:el.offsetTop},tmp,op=el.offsetParent;
if(op){
tmp=arguments.callee(op);
if(!op.offsetParent)return r;
if(rr.IE&&op.tagName=='HTML')return r;
r.x+=tmp.x-op.scrollLeft;
r.y+=tmp.y-op.scrollTop;
}
return r;
},
getRect:document.documentElement.getBoundingClientRect?function(n){
if(n)return n.getBoundingClientRect()}:function(n){
if(!n)return;
var ps=this.getAbsolutePos(n),d=n.ownerDocument||this.document,cwh=this.getClientWH(d);
return{
left:p.x-cwh.sl,
top:p.y-cwh.st,
right:p.x+n.offsetWidth-cwh.sl,
bottom:p.y+n.offsetHeight-cwh.st
}},
getParentNode:function(t,n,f){
t=(t&&t.toUpperCase())||'TR';
if(!f&&n)n=n.parentNode;
var x;
while(x=n&&n.tagName){
if(x==t)return n;
n=n.parentNode;
}},
getAtt:function(n,nm){
if(n)return n.getAttributeNode?(n.getAttributeNode(nm)||false).value:n.getAttribute(nm,2)},
removeAtt:function(nd,nm,x){
if(nd)
if(!nd.getAttributeNode){
nd.removeAttribute(nm)}else if(nm=nd.getAttributeNode(nm))
nd.removeAttributeNode(nm)},
getCStyle:function(n,dv){
if(typeof n==='string')n=this.$(n);
if(n)return n.currentStyle||(n.ownerDocument||this.document).defaultView.getComputedStyle(n,null)},
style:rr.setStyle=function(n,pr){
if(typeof n=='string')n=this.$(n);
if(!n)return;
var st=n.style,x,a,und;
if(typeof pr=='object'){
x=pr.cssText;
if(x||x===''){
rr.Opera<9?n.setAttribute('style',x):st.cssText=x;
};
if(rr.IE<9){
x=pr.opacity;
if(x||x===0||x===''){
if(a=n.filters['DXImageTransform.Microsoft.alpha']||n.filters.alpha){
if(a.enabled=x!=='')a.opacity=Math.round(x*100)}
else if(x!==''){
st.filter+='alpha(opacity='+Math.round(x*100)+')';
}}};
for(x in pr){
if(x!=='cssText')st[x]=pr[x];
}}else rr.Opera<9?n.setAttribute('style',pr):st.cssText=pr;
},
removeNode:function(n,p){
if(typeof n==='string')n=this.$(n);
if(p=n&&n.parentNode){
p.removeChild(n);
if(rr.IE<7&&n.tagName=='STYLE'){
var s=(n.ownerDocument||this.document).documentElement.style;
p=s.borderColor;
s.borderColor=p=='#FFFFFF'?'#FFE':'#FFF';
s.borderColor=p;
}};
return n;
},
urlEscape:window.encodeURIComponent,
urlDecode:window.decodeURIComponent,
htmlEscape:(function(){
var rg=new RegExp('[&<>"]','g'),cm={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'};
function r(A){return cm[A]};
return function(A){
return(typeof A!=='string'?String(A):A).replace(rg,r)}})(),
createSWF:function(pr,d){
if(!pr||!pr.src)return;
d=(pr.parent&&pr.parent.ownerDocument)||d||pr.document||this.document;
function apIE(n,nm,v){
var x=d.createElement('param');
x.name=nm;
x.value=v;
n.appendChild(x)};
var sd,x,i,tv,n=d.createElement(this.IE<9?'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" name="'+(pr.name||'~z '+d.createElement('span').uniqueID)+'">':'embed');
if(!(this.IE<9))n.type='application/x-shockwave-flash';
if(this.IE&&pr.ieFSCommand){
i=d.createElement('script');i.event='FSCommand(command,args)';i.htmlFor=n.name;i.text='eval(args)';
d.documentElement.firstChild.appendChild(i)};
for(i in pr){
x=pr[i];
switch(i=i.toLocaleLowerCase()){
case'vars':if(pr.flashvars)break;i='flashvars';
case'flashvars':case'menu':case'quality':case'scale':case'wmode':case'bgcolor':case'swliveconnect':case'allowscriptaccess':case'allowfullscreen':case'seamlesstabbing':case'allownetworking':
if((tv=typeof x)=='string'||tv=='number'||tv=='boolean'){
this.IE<9?apIE(n,i,x):n.setAttribute(i,x)};
break;
case'id':case'className':case'width':case'height':if(x||x===0)n[i]=x;break;
case'style':this.setStyle(n,x);break;
}};
if(x=this.Gecko&&pr.parent&&n.style){
sd=x.display;
x.display='none';
};
if(x=pr.src)this.IE<9?apIE(n,'movie',x):n.src=x;
if(x=pr.parent){
x.appendChild(n);
if(x=this.Gecko)n.style.display=sd||'';
if(x||this.Opera)n.offsetParent;
};
return n;
},
appendScript:function(src,cfg){
cfg=cfg?typeof cfg==='function'?{event:cfg}:this.newPrototype(cfg):false;
var d=cfg.document||this.document,h=d.documentElement.firstChild,s=d.createElement('script'),ok;
s.charset=cfg.charset||'utf-8';
s.type='text/javascript';
if(cfg.defer!==false)s.defer='defer';
if(cfg.event){
function q(){
if(!ok){
ok=true;
s.onreadystatechange=s.onload=s.onerror=null;
if(cfg.event)cfg.event(src,true);
if(cfg.rm)h.removeChild(s)}};
if(rr.IE)s.onreadystatechange=function(){
switch(s.readyState){
case'complete':case'loaded':q()}}
else s.onload=q;
s.onerror=function(){
s.onreadystatechange=s.onload=s.onerror=null;ok=true;
if(cfg.event)cfg.event(src,false);
if(cfg.rm||cfg.remove)h.removeChild(s)}};
s.src=src;
s=h.insertBefore(s,h.firstChild)},
stopEvent:function(e){
if(e){
e.returnValue=false
e.cancelBubble=true;
if(e.stopPropagation){
e.stopPropagation();
e.preventDefault()};
return false;
}},
breakEvent_:rr.IE<9?function(e){e.returnValue=false}:function(e){e.preventDefault()},
breakEvent:function(e){
if(e){
e.returnValue=false;
if(e.preventDefault)e.preventDefault()};
return false;
},
stopPropagation:function(e){
if(e){
if(e.stopPropagation)e.stopPropagation();
e.cancelBubble=true;
}},
styles_list:{},
styles_groups:{},
styles_extend:function(g,ns,x){
if(g&&ns){
if(x=this.styles_groups[g]){
this.css_add(ns,x={className:x});
x=x.className
}else x=ns;
this.styles_groups[g]=x;
}},
styles:(function(){
function exend(a,m,l,i){
var j=m.length,x;
if(!i)i=0;
for(;i<j;i++)
if(x=m[i])
switch(typeof x){
case'string':a[l++]=x;break;
case'object':if(x instanceof Array)l=exend(a,x,l);
break;
};
return l;
};
return function(ex){
if(!ex&&ex!=null)return;
var x,i,l,j,a=ex,u,fs;
if(!ex||typeof ex!='string'){
ex='~global';
}
else{
i=ex.indexOf(':');
if(i!==-1)x=i?ex.substring(0,i):'global';
i=ex.indexOf(' ');
if(i!==-1)ex=ex.substring(0,i);
if(!ex)return;
if(x)this.styles_extend(x,ex)};
a=this.styles_list[ex]||(this.styles_list[ex]=[]);
if(!(a instanceof Array)){
return;
};
l=a.length;
for(i=1,j=arguments.length;i<j;i++)
if(x=arguments[i])
switch(typeof x){
case'string':a[l++]=x;break;
case'object':if(x instanceof Array)l=exend(a,x,l);
break;
};
return this;
}})(),
styles_create:function(tx,d,s){
d=d||this.document;
if(d.createStyleSheet){
s=d.createStyleSheet();
try{s.cssText+=tx}catch(e){};
return s.owningElement;
};
(s=d.createElement('style')).type='text/css';
s.appendChild(d.createTextNode(tx));
if(d=d.documentElement.firstChild)d.appendChild(s);
return s;
},
styles_include:function(ns,p){
this.styles_stepindex++;
var d=p&&(p.documentElement&&p.createElement?p:p.document)||rr.document,
a=this.styles_assemble(ns),i=0,x;
if(a&&a.length){
if(p==d)p=false;
for(;x=a[i];i++)
if(x&&x.indexOf('$')!=-1)
a[i]=rr.prints(x,p);
return this.styles_create(a.join('\n'),d)}},
styles_stepindex:0,
styles_assemble:function(ns,a,r){
if(!ns||typeof ns!='string')return;
if(!a)a=[];
var m=ns.split(' '),l=m.length,j=a.length,i=0,u,s,x;
for(;i<l;i++)
if(x=m[i]){
if(s=!r&&this.styles_groups[x]){
a[j++]='\n /* start groups -- '+x+' */';
if(s=this.styles_assemble(s,a,true))j=s.length;
a[j++]='\n\n /* -- end groups */';
};
s=this.styles_list[x];
if(s&&s.stepIndex!==this.styles_stepindex&&s.length){
s.stepIndex=this.styles_stepindex;
a[j++]='\n /* '+x+' */';
a[j++]=s.join('\n'),s;
}};
if(j)return a;
},
styles_clear:function(ns){
if(typeof ns=='string'){
for(var g=this.styles_list,a=ns.split(' '),i=a.length,n;i--;){
n=a[i];
if(n&&g[n])g[n]=null;
}};
return this;
}});
rr.extend('rr.cookie',{
getHash:function(n){
var v=this.get(n),h;
if(v){
rr.each(v.split('&'),function(v){
v=v.split('=');
h=h||{};
h[unescape(v[0])]=unescape(v[1])})};
return h;
},
setHash:function(n,v,e,p,d,s){
var o='';
rr.each(v,function(v,k){
o+=(!o?'':'&')+escape(k)+'='+escape(v)});
this.set(n,o,e,p,d,s)},
get:function(n){
var c=document.cookie,e,p=n+'=',b;
if(!c)
return;
b=c.indexOf('; '+p);
if(b==-1){
b=c.indexOf(p);
if(b!=0)
return null;
}else
b+=2;
e=c.indexOf(';',b);
if(e==-1)
e=c.length;
return unescape(c.substring(b+p.length,e))},
set:function(n,v,e,p,d,s){
if(typeof e=='number'){
e=new Date(new Date().getTime()+e)};
document.cookie=n+'='+escape(v)+
((e)?'; expires='+e.toGMTString():'')+
((p)?'; path='+escape(p):'')+
((d)?'; domain='+d:'')+
((s)?'; secure':'')},
remove:function(n,p,d){
this.set(n,'',-1000,p,d)}});
(function(){
var rr=window.rr;
function css(o,d){if(o)this.node=o};
rr.css=function(o,d){
if(typeof o==='string'){
var i=o.indexOf('#');
o=(d||this.document).getElementById(i!==-1?o.substring(++i):o)};
return new css(o)};
css.prototype={
node:null,
add:function(s){this.rv=rr.css_add(s,this.node);return this},
remove:function(s){this.rv=rr.css_remove(s,this.node);return this},
replace:function(a,b){this.rv=rr.css_replace(a,b,this.node);return this},
flip:function(s){this.rv=rr.css_flip(s,this.node);return this},
is:function(s,cb){var t=this;if(typeof cb=='function'){cb.call(t,rr.css_is(s,t.node),s)}else t=rr.css_is(s,t.node);return t},
get:function(s){return rr.css_get(s,this.node)},
set:function(s,f){f?rr.css_add(s,this.node):rr.css_remove(s,this.node);return this},
parent:function(s,f){var n=this.node,u;return new css(!s&&!arguments.length?n&&n.parentNode:rr.css_parent(s,n,f))},
has:function(s){if(!rr.css_is(s,this.node))this.node=null;return this},
hasNot:function(s){if(rr.css_is(s,this.node))this.node=null;return this},
cb:function(cb){cb.call(this);return this},
near:function(s,cb){
var t=this,n=t.node,x;
if(n&&s&&typeof cb=='function'){
n=rr.css_first(s,n.parentNode);
while(n){
if(n!=t.node&&cb.call(new css(n),t)===false)break;
n=rr.css_next(s,n)}};
return t;
},
childs:function(s,cb){
var t=this,n=t.node;
if(n&&s&&typeof cb=='function'){
n=rr.css_first(s,n);
while(n){
if(cb.call(new css(n),t)===false)break;
n=rr.css_next(s,n)}};
return t;
},
first:function(s){return new css(rr.css_first(s,this.node))},
next:function(s){return new css(rr.css_next(s,this.node))},
past:function(s){return new css(rr.css_prev(s,this.node))}}})();
rr.extend(rr,{
css_is:function(cl,n){
if(typeof n=='string')n=this.$(n);
if(!cl||!n||!(n=n.className))return;
n=' '+n+' ';
if(cl.indexOf(' ')===-1){
return n.indexOf(' '+cl+' ')!==-1
};
cl=cl.split(' ');
var i=cl.length,c;
while(i--){
if((c=cl[i])&&n.indexOf(' '+c+' ')===-1)return false;
};
return true
},
css_add:function(cl,n){
if(typeof n==='string')n=this.$(n);
if(!cl||!n)return;
var cn=n.className,r;
if(r=!cn)return n.className=cl,r;
var xc=' '+cn+' ';
if(cl.indexOf(' ')===-1){
if(r=xc.indexOf((cl=' '+cl)+' ')===-1){
n.className+=cl;
};
return r;
};
cl=cl.split(' ');
var i=cl.length,c;
while(i--){
if((c=cl[i])&&xc.indexOf((c=' '+c)+' ')===-1){
cn+=c;
r=true;
}};
if(r)n.className=cn;
return r;
},
css_remove:function(cl,o,cn){
if(typeof o==='string')o=this.$(o);
if(!cl||!o||!(cn=o.className))return;
var ac=cn.indexOf(' ')!==-1?cn.split(' '):[cn]
,l=ac.length
,i=-1,i2=0,s,flg;
cl=' '+cl+' ';
while(++i<l)if(s=ac[i]){
cl.indexOf(' '+s+' ')!==-1?flg=true:ac[i2++]=s;
};
if(flg){
if(!i2){
o.className='';
if(o.removeAttribute)o.removeAttribute('class')}
else{
ac.length=i2;
o.className=ac.join(' ')}};
return flg;
},
css_remove_:function(cl,o,cn){
if(typeof o==='string')o=this.$(o);
if(!cl||!o||!(cn=o.className))return;
var ac=cn.split(' '),i=0,i2=0,l=ac.length,s,flg;
while(i<l){
if(s=ac[i++]){
!s.indexOf(cl)?flg=true:ac[i2++]=s;
}};
if(flg){
if(!i2){
o.className='';
if(o.removeAttribute)o.removeAttribute('class')}
else{
ac.length=i2;
o.className=ac.join(' ')}};
return flg;
},
css_flip:function(cl,o){
if(typeof o==='string')o=this.$(o);
if(o)return this.css_add(cl,o)||(this.css_remove(cl,o)&&false)},
css_replace:function(cl,cl2,o,x){
if(typeof o==='string')o=this.$(o);
if(x=cl&&cl2&&o&&o.className){
if(this.css_remove(cl,x={className:x})){
o.className=cl2+' '+x.className;
return true;
}}},
css_set:function(cl,o,fl){
return fl?this.css_add(cl,o):this.css_remove(cl,o)},
css_set_:function(cl,o,sx){
var cn,ac;
if(typeof o==='string')o=this.$(o);
if(!cl||!o||!(cn=o.className)&&!sx)return;
sx=sx?cl+sx:false;
if(sx&&!cn){
o.className=sx;
return true;
};
ac=cn.indexOf(' ')!=1;
if(sx)if(ac?(' '+cn+' ').indexOf(' '+sx+' ')!=-1:cn==sx)return;
ac=ac?cn.split(' '):[cn];
var i=0,i2=0,l=ac.length,s,flg,fg2;
while(i<l){
if(s=ac[i++]){
if(s===sx)fg2=true;
s!==sx&&!s.indexOf(cl)?flg=true:ac[i2++]=s;
}};
if(sx&&!fg2){
ac[i2++]=sx;
flg=true;
};
if(flg){
if(!i2){
o.className='';
if(o.removeAttribute)o.removeAttribute('class')}
else{
ac.length=i2;
o.className=ac.join(' ')}};
return flg;
},
css_get:function(cl,o){
if(typeof o=='string')o=this.$(o);
if(!o||!cl||!(o=o.className))return;
o=' '+o+' ';
var u,s,i=0;
if(cl.indexOf(' ')===-1){
return o.indexOf(' '+cl+' ')!==-1?cl:u;
};
cl=cl.split(' ');
while(s=cl[i++],s!==u){
if(s&&o.indexOf(' '+s+' ')!==-1)return s;
}},
css_get_:function(cl,o,cn){
if(typeof o==='string')o=this.$(o);
if(!cl||!o||!(cn=o.className))return;
var a=cl.indexOf(' ')!=-1?cl.split(' '):[cl],i=a.length,l=cn.length+1,x,s,e,nn;
for(cn=' '+cn;i--;)if(x=a[i]){
e=0;
while(e<l&&(s=cn.indexOf(x,e))!=-1){
e=cn.indexOf(' ',s);
if(e===-1)e=l;
if(s=cn.substring(s,e)){
nn=nn?nn+' '+s:s;
}}};
return nn;
},
css_first:function(cl,o){
if(typeof o==='string')o=this.$(o);
if(o){
o=o.firstChild;
while(o){
if(this.css_is(cl,o))return o;
o=o.nextSibling;
}}},
css_next:function(cl,o){
if(typeof o==='string')o=this.$(o);
if(o)while(o=o.nextSibling){
if(this.css_is(cl,o))return o;
}},
css_prev:function(cl,o){
if(o=_g(o))
while(o=o.previousSibling){
if(this.css_is(cl,o))return o;
}},
css_parent:function(cl,o,f){
if(typeof o==='string')o=this.$(o);
if(!o||!cl)return;
var t=this,v;
if(!f)o=o.parentNode;
t.css_return=v;
for(;o;o=o.parentNode){
if(v=t.css_get(cl,o)){
t.css_return=v;
return o;
}}}});
rr.expansion_event={
addEvent:function(p,h,up){
switch(typeof p){
case'string':return this.addEventListener(p,h,up);
case'object':
for(var i in p){
h=p[i];
if(typeof h=='function')
this.addEventListener(i,h,up)};
return this;
}},
addEventListener:function(n,cb,f){
if(n&&cb){
var g=this._events_list||(this._events_list={}),a=g[n];
a?f?a.unshift(cb):a.push(cb):g[n]=[cb];
};
return cb;
},
removeEventListener:function(n,cb){
var g=this._events_list,a,u,i;
if(a=g&&g[n]){
for(i=a.length;i--;)if(a[i]===cb)a.splice(i,1)}},
removeEventAll:function(n){
var g=this._events_list;
if(g&&g[n])delete(g[n])},
initEvent:function(n,e1,e2,e3){
var g=this._events_list,i=0,a,l,fn,c;
if(a=g&&g[n]){
l=a.length;
switch(arguments.length){
case 1:while(i<l)if(fn=a[i++])if(fn.call(this)===false)return false;break;
case 2:while(i<l)if(fn=a[i++])if(fn.call(this,e1)===false)return false;break;
case 3:while(i<l)if(fn=a[i++])if(fn.call(this,e1,e2)===false)return false;break;
case 4:while(i<l)if(fn=a[i++])if(fn.call(this,e2,e3)===false)return false;break;
default:
n=this;c=Function.call;
while(i<l)if(fn=a[i++]){
if(c.apply(fn,arguments)===false)return false;
}}}},
initEvent_:function(n,as){
var t=this,ls=t._events_list,i=0,l,fn;
if(!as||!n||!ls||!(ls=ls[n])||ls.stopEvent)return;
l=ls.length;
while(i<l)if(fn=ls[i++]){
if(fn.apply(t,as)===false)return false
}}};
rr.class_listHandler=function(){};
rr.class_listHandler.prototype={
add:function(o,e,h,key,x){
if(!h||!e||!o)return;
var t=this,en='ev_'+e,ls=ls||(t[en]=[]),i=0;
for(;ls[i];i++);
h=rr.addHandler(o,e,h,x);
ls[i]=e={o:o,h:h,x:x};
if(key)e.k=key;
return h;
},
remove:function(e,h,key){
var en='ev_'+e,ls=this[en],i,und,ev;
if(!ls)return;
i=ls.length;
while(i--){
ev=ls[i];
if(!ev||(key&&ev.k!=key)||(h&&ev.h!=h))continue;
rr.removeHandler(ev.o,e,ev.h,ev.x);
ls[i]=und;
}},
removeAll:function(key){
var t=this,i;
for(i in t)if(!i.indexOf('ev_')){
t.remove(i.substr(3),null,key)}}};
rr.class_objEvent=function(pr,ofn){
function evObj(name,e){
return evObj.initEvent(name,e)};
rr.extend(ofn||evObj,rr.expansion_event).addEvent(pr);;
return evObj;
};


/* url: /js/mcore/rr_master.src.js */

(function(){
rr.new_master=function(d,ns){
d=d&&d.ownerDocument||d||rr.document;
if(!ns)ns={};
function c_(nn,q){
if(nn==='text')return d.createTextNode(q);
if(!nn)return;
var tg,p,a,u,l=arguments.length,i,x,id,cl,rn,pn,sx;
if(q){
a=true;
if(!q.nodeType&&typeof q=='object'){
if(q.length===u||!(q instanceof Array)){
p=q;
q=p.add;
if(q===u)a=u;
}}}else a=q===0||q==='';
switch(nn){
case'BODY':case'body':
nn=d.body;
break;
case'br':case'span':case'a':case'div':case'td':case'BR':case'SPAN':case'A':case'DIV':case'TD':
nn=d.createElement(nn);
break;
default:
if(typeof nn!=='string'){
if(rn=nn.nodeType<0){
if(p&&typeof nn.set=='function'){
ui.set(p)}};
break;
};
i=nn.indexOf(":");
if(rn=i!==-1){
nn=cr(i?nn.substring(0,i):'default',nn.substring(++i),p||false,d,ns,c_);
if(!nn)return;
break;
};
i=nn.indexOf("#");
if(i>0){
id=nn.substring(i+1);
x=i;
};
i=nn.indexOf(".");
if(i>0){
cl=x?nn.substring(i+1,x):nn.substring(i+1);
x=i;
};
if(x)nn=nn.substring(0,x);
switch(nn){
case'BODY':case'body':
nn=d.body;
break;
case'BUTTON':case'button':nn=tg='BUTTON';
case'input':if(!tg)tg='INPUT';
case'INPUT':
if(rr.IE<9&&p){
nn=d.createElement('<'+nn+' '+(p.name?' name="'+p.name+'"':'')+(p.type?' type="'+p.type+'"':'')+' />');
break;
};
default:
nn=d.createElement(nn)}};
if(!rn&&p){
for(x in p){
i=p[x];
if(i===u)continue;
switch(x){
case'text':
if(i||i===''||i===0){
if(tg!=='OPTION'||rr.IE<9){
nn.appendChild(d.createTextNode(i))}else nn.text=i;
};
case'parent':case'add':
case'appendChild':
case'insertAfter':
case'insertBefore':
break;
case'id':if(i)id=i;break;
case'className':case'css':if(i)cl=cl?cl+" "+i:i;break;
case'style':
typeof i==='string'?
rr.Gecko<=2?nn.setAttribute('style',i):nn.style.cssText=i
:i&&rr.setStyle(nn,i);
break;
case'href':
if(rr.IE&&i&&i.indexOf('@')!==-1)i=encodeURIComponent(i);
nn.href=i;
break;
default:if(rr.IE<9&&tg==='BUTTON')continue;
nn[x]=i;
}}};
if(!rn){
if(cl)nn.className=cl;
if(id)nn.id=id;
};
i=a?1:2;
if(i<l){
pn=nn;
if(rn&&!nn.appendChild){
pn=nn.box||nn.node;
if(!pn)l=u;
}else sx=rn;
while(i<l){
if(a=arguments[i++]){
x=a.nodeType;
if(x>0){
pn.appendChild(a);
continue;
};
if(x<0){
if(sx){pn.appendChild(a)}else if(a=a.node)pn.appendChild(a);
continue;
}};
switch(typeof a){
case'number':if(a!==a)break;
case'string':
pn.appendChild(d.createTextNode(a));
break;
case'object':
if(a instanceof Array){
append(pn,a,d,sx)}}}};
return p?p.parent||p.insertBefore||p.insertAfter?insert(nn,p,rn):nn:nn;
};
c_.global=ns;
c_.document=d;
c_.text=text;
c_.html=html;
c_.clone=clone;
c_.tmpl=tmpl;
c_.forEach=forEach;
return c_;
};
function text(x){
return this.document.createTextNode(x||(x===0?0:''))};
var N2A;try{N2A=Array.prototype.slice.call(document.documentElement.childNodes)instanceof Array}catch(e){};
function html(x){
var n=this.nullNode||(this.nullNode=this.document.createElement('div')),a,i;
n.innerHTML=x;
n=n.childNodes;
if(i=n.length){
if(N2A)return Array.prototype.slice.call(n);
for(a=[];i--;)a[i]=n[i];
return a
}};
function insert(nn,p,rn){
var x,a,ip,ib;
if(rn){
if(x=p.parent){
if(i=x.nodeType){
if(i<0&&x.appendChild){
x.appendChild(nn)}
else{
x=i<0?x.box||x.node:x;
pn=nn.nodeType<0?nn.node:nn
if(x&&pn)x.appendChild(pn)}}};
return nn;
};
if(p.insertAfter){
a=p.insertAfter;
ib=a.nextSibling;
if(!ib)ip=a.parentNode;
};
if(a=p.parent||p.appendChild||ip)
return a.appendChild(nn);
if(a=p.insertBefore||ib)
return a.parentNode.insertBefore(nn,a);
return nn;
};
function append(nn,m,d,s){
var i=0,l=m.length,a,x;
while(i<l){
if(a=m[i++]){
x=a.nodeType;
if(x>0){
nn.appendChild(a);
continue;
};
if(x<0){
if(s){nn.appendChild(a)}else if(a=a.node)nn.appendChild(a);
continue;
}};
switch(typeof a){
case'number':if(a!==a)break;
case'string':
nn.appendChild(d.createTextNode(a));
break;
case'object':
if(a instanceof Array)append(nn,a,d,s)}}};
function clone(){
var ns=this.namespace,c;
if(this.clone_namespace===ns)return this;
c=rr.new_master(this.document,this.global);
c.namespace=c.clone_namespace=this.namespace;
return c;
};
function cr(tp,ui,pr,d,gs,_cr){
if(!ui)return;
var ns=tp==='default'?_cr.namespace:gs[tp],x=_cr.namespace,s,c;
if(!ns)return false;
if(c=ns[ui]){
s={name:ui,type:tp,document:d,namespace:ns,interface:c};
if(typeof c==='function'){
_cr.namespace=ns;
if(!c.prototype.nodeType)c.prototype.nodeType=-1;
ui=new c(pr,_cr,s)}else return false;
_cr.namespace=x;
if(ui){
if(pr&&ui.nodeType<0&&typeof ui.set=='function'){
ui.set(pr)};
return ui;
}}};
function tmpl(nn,pr){
switch(typeof nn){
case'function':
if(!nn.prototype.nodeType)nn.prototype.nodeType=-1;
return new nn(pr,this,false);
case'string':break;
default:return;
};
var x=nn.indexOf(":"),nx=this.namespace,ns=x>0?this.global[nn.substring(0,x)]:nx;
if(x===-1||!ns)return;
nn=ns[x=nn.substring(++x)];
if(typeof nn==='function'){
this.namespace=ns;
if(!nn.prototype.nodeType)nn.prototype.nodeType=-1;
nn=new nn(pr,this,false);
this.namespace=nx;
if(nn)return nn;
}};
function nnFn(){};
function forEach(a,ct){
if(!a||!a.length)return
var l=a.length,i=0,iend=l-1,m=[],x=ct.prototype,e={first:true,last:false,list:a},v,u;
if(!x.nodeType)x.nodeType=-1;
nnFn.prototype=x;
for(;i<l;i++){
if(i===iend)e.last=true;
e.index=i;
x=new nnFn();
v=ct.call(x,a[i],this,e);
if(v||v===0||v===''){m.push(v)}else if(v===u)m.push(x);
if(!i)e.first=false;
};
return m;
}})();


/* url: /js/mcore/rr_element.src.js */

rr.class_baseElement=rr.new_class({
interface:'base_interface',
constructor:function(pr,_,cfg){
var x=this,it=this.interface;
if(it&&!it._nodeLink&&it._nodeLink!==false){
it._nodeLink=true;
};
x.ownerDocument=_.document;
x.gEvent=new rr.class_listHandler();
x._changes={};
if(it._param_default||it._param_events){
this.base_interface.set_param(x,pr,_||false,cfg||false)}},
prototype:rr.extend({},rr.expansion_event,{
z_resize:true,
nodeType:-1,
is_connect:false,
set:function(pr,vl,rs){
if(!pr||!this.interface.set)return;
var ui=this,it=this.interface,ch=ui._changes||(ui._changes={}),vs=ui,u,pv,v,i;
switch(typeof pr){
case'string':case'number':
if(vl!==u&&vl!==(pv=vs[pr])){
v=it.set(ui,pr,vl,pv);
if(v!==u&&v!==pv){
vs[pr]=v;
ch[pr]=true;
if(rs!==false){
this._changes={};
if(this.interface.refresh(this,ch)===false)
this._changes=ch;
};
return;
}};
break;
case'object':
for(i in pr){
v=pr[i];
if(v!==u&&v!==(pv=vs[i])){
v=it.set(ui,i,v,pv);
if(v!==u&&v!==pv){
vs[i]=v;
ch[i]=true;
}}};
rs=vl;
break;
default:return;
};
if(rs!==false)for(i in ch){
this._changes={};
if(this.interface.refresh(this,ch)===false)
this._changes=ch;
return;
}},
refresh:function(rz,ch){
ch=this._changes;
this._changes={};
if(this.interface.refresh(this,ch,rz)===false){
this._changes=ch;
}},
appendChild:function(ui,box){
var t=this,n=ui.nodeType,x,it;
if(!n)return;
if(box!==false){
if(!box)box=t.box||t.node;
x=n<0?ui.node:ui;
if(x&&box)box.appendChild(x)};
if(n<0&&ui.parent!=this&&typeof ui.initEvent=='function'){
if(x=ui.parent){
if(x)ui.gEvent.removeAll(x);
it=ui.interface
if(it&&it._onRemoved){
it._onRemoved(ui,x)};
it=x.interface;
if(it._onElementRemoved){
it._onElementRemoved(x,ui)}};
ui.parent=this;
it=ui.interface;
if(it&&it._onInserted){
it._onInserted(ui,this)};
it=t.interface;
if(it._onElementInserted){
it._onElementInserted(this,ui)};
if(this.is_connect&&typeof ui.dom_connect=='function'){
ui.dom_connect(true)};
n=null;
};
return ui;
},
removeChild:function(ui){
if(!ui)return;
if(ui.nodeType>0)return nd.parentNode.removeChild(nd);
var t=this,x;
if(ui.parent&&ui.parent!==this)return;
if(x=ui.node&&ui.node.parentNode)x.removeChild(ui.node);
if(t=ui.parent){
if(ui.gEvent)ui.gEvent.removeAll(t);
if(x=ui.interface)
if(typeof x._onRemoved=='function'){
x._onRemoved(ui,t)};
if(x=t.interface)
if(typeof x._onElementRemoved=='function'){
x._onElementRemoved(t,ui)};
ui.parent=null;
};
if(typeof ui.sd=='function')ui.sd(false);
return ui;
},
dom_connect:function(f,rec){
var ui,i=0,it,n,a;
f=!!f;
if(!this.is_connect===f)return;
this.is_connect=f;
it=this.interface;
if(it&&typeof it.dom_connect=='function'){
it.dom_connect(this)};
if(!this.node||rec===false)return;
a=this.node.getElementsByTagName("*");
while(n=a[i++]){
ui=n.rocketui;
if(ui&&!ui.is_connect===f){
ui.is_connect=f;
it=ui.interface;
if(it&&typeof it.dom_connect=='function'){
it.dom_connect(ui)}}}}})
,set_param:function(x,pr,_,cfg){
var it=cfg.interface,list,i,prm,v,u;
if(prm=it._param_default){
for(i in prm){
if(x[i]!==u)continue;
v=prm[i];
if(typeof v=='function'){
v=(v===Object||v===Array||v===Date)?new v():v.call(x,pr,_,cfg)};
if(v!==u)x[i]=v;
}};
if(prm=it._param_events){
for(i in prm){
if(typeof(v=prm[i])=='function'){
x.addEvent(i,v)}}}}});


/* url: /js/mcore/rr_drag.src.js */

rr.ui_draglayer={
layer:null,
isRectangle:false,
_mouseout:function(n){
var t=this;
n.onmouseout=function(n){
if(t.isRectangle){
n=n||window.event;
t.setPoint(n.clientX,n.clientY)}}},
show:function(cur){
var t=this,n=this.layer,d=rr.document,s;
if(!n){
t.layer=n=d.createElement('div');
n.style.cssText="background-color:transparent;position:fixed;left:0px;top:0px;bottom:0px;right:0px;z-index:9999999999;"
+(rr.IE?"_position:absolute;background-image:url('://');":"");
d.body.appendChild(n);
t._mouseout(n)};
s=n.style;
s.width=s.height='auto';
s.left=s.top='0';
t.isRectangle=false;
if(rr.IE<7){
var dd=(rr.IE<6)?d.body:d.documentElement,
w=dd.scrollWidth,
h=Math.max(dd.clientHeight,dd.scrollHeight);
s.height=h+'px';
s.width=w+'px';
};
s.cursor=(typeof cur=='string')?cur:'default';
s.display="block";
return n;
},
hide:function(){
var nd=this.layer;
if(nd)nd.style.display='none';
this.isRectangle=false;
},
hidden:function(x){
var nd=this.layer;
if(nd)nd.style.display=x?'none':'';
},
setPoint:function(x,y){
var nd=this.layer;
if(!nd)return;
this.isRectangle=true;
nd.style.left=(x-60)+"px";
nd.style.top=(y-60)+"px";
nd.style.width=nd.style.height='120px';
}};
if(rr.IE<7){
window.pageYOffset=0;
window.pageOffsetH=0;
document.documentElement.firstChild.style.setExpression("__","pageYOffset=document."+(rr.qIE?"body":"documentElement")+".scrollTop,null");
rr.addHandler(window,'resize',function(){
window.pageOffsetH=document[(rr.qIE?"body":"documentElement")].offsetHeight
})()
rr.ui_posIEfixed=function(nd){
var y=window.pageYOffset,d=nd._ptop;
if(d!==y){
nd._ptop=y;
if(d||d===0){
if(d=y-d)nd.style.top=((parseInt(nd.currentStyle.top)||0)+d)+'px';
}}}};
rr.listeners_drag={
createDrag:function(as,gEvent){
var od=as[0],d=od.owerDocument||rr.document;
od.document=d;
if(od.clearRange){
rr.IE<9?d.focus():d.defaultView.getSelection().removeAllRanges()};
if(rr.IE){
od._onselectstart=d.onselectstart;
d.onselectstart=rr.breakEvent;
};
if(!gEvent)gEvent=this.gEvent||new rr.class_listHandler();
d=rr.document;
var t=this,
dE=rr.WebKit||rr.qIE?d.body:d.documentElement,
nameEv=od.eventName||'move',
chw=rr.getClientWH(d),
isDrag,d;
if(!od.draglayer)od.draglayer=rr.ui_draglayer;
od.psX=od.stX;
od.psY=od.stY;
od.sT=chw.st;
od.sL=chw.sl;
chw.mh=chw.h-50;
od.clientSize=chw;
if(!od.itime&&od.itime!==null)od.itime=rr.Opera?7:25;
function scroll(e){
var sT=dE.scrollTop,
sL=dE.scrollLeft;
if(sT!=od.sT||sL!=od.sL){
od.sT=sT;
od.sL=sL;
od.psX=od.cX+(od.isPosFixed?0:sL);
od.psY=od.cY+(od.isPosFixed?0:sT);
moveSet()}};
function vset(e){
if(rr.IE&&e)e.returnValue=false;
var cX=e.clientX,cY=e.clientY,st,ds=20;
if(od.autoScroll){
if(chw.mh<cY){
var sT=dE.scrollTop;
st=sT+chw.h+ds;
if(st>chw.sh){
dE.scrollTop=chw.sh-chw.h;
}else dE.scrollTop+=ds;
od.sT=dE.scrollTop;
}else if(od.sT&&cY<30){
dE.scrollTop-=ds;
od.sT=dE.scrollTop;
}};
if(od.isFromPoint&&!(rr.IE||rr.Gecko)){
od.pgX=e.pageX;
od.pgY=e.pageY;
};
od.cX=cX;
od.cY=cY;
od.psX=cX+(od.isPosFixed?0:od.sL);
od.psY=cY+(od.isPosFixed?0:od.sT);
od.ctrlKey=e.ctrlKey;
od.altKey=e.altKey;
od.shiftKey=e.shiftKey;
};
function move(e){
vset(e);
if(od.itime!==null){
if(!od._timerr){
od._timerr=setTimeout(moveSet_tm,od.itime)}}else moveSet();
if(od.isFromPoint){
clearTimeout(od._tm_dfr2);
od._tm_dfr2=setTimeout(move_drag,30);
if(!od._tm_dfr){
od._tm_dfr=setTimeout(move_drag,250)}};
return false;
};
function moveSet_tm(){
if(!od)return;
od._timerr=null;
if(od.isFromPoint&&!rr.IE&&od.draglayer){
od.draglayer.setPoint(od.cX,od.cY)};
t.initEvent_(nameEv,as)};
function moveSet(){
if(od.isFromPoint&&!rr.IE&&od.draglayer){
od.draglayer.setPoint(od.cX,od.cY)};
t.initEvent_(nameEv,as)};
function move_drag(end){
if(!od)return;
clearTimeout(od._tm_dfr2);
clearTimeout(od._tm_dfr);
od._tm_dfr=null;
if(t.initEvent_(nameEv+'_dragbefore',as)===false)return;
if(od.itime!==null&&od._timerr){
clearTimeout(od._timerr);
od._timerr=null;
t.initEvent_(nameEv,as)};
var os=od.object&&od.object.style,
x=rr.IE||rr.Gecko?od.cX:od.pgX,
y=rr.IE||rr.Gecko?od.cY:od.pgY;
if(os)os.display='none';
if(od.draglayer)od.draglayer.hidden(true);
var elm=d.elementFromPoint(x,y);
if(os)os.display='';
if(od.draglayer)od.draglayer.hidden(false);
if(elm){
if(elm.nodeType!==1)elm=elm.parentNode;
od.dragTargetElement=elm;
t.initEvent_(nameEv+'_drag',as)};
od.object.offsetHeight;
};
function end_dragTarget(){
if(t.initEvent_(nameEv+'_dragbefore',as)===false)return;
var os=od.object&&od.object.style,
x=rr.IE||rr.Gecko?od.cX:od.pgX,
y=rr.IE||rr.Gecko?od.cY:od.pgY;
if(os)os.display='none';
var elm=d.elementFromPoint(x,y);
if(os)os.display='';
if(elm){
od.dragTargetElement=elm;
t.initEvent_(nameEv+'_drag',as)}};
function setupStart(){
gEvent.removeAll(od);
isDrag=true;
gEvent.add(d,'mouseup',moveStop,od);
gEvent.add(d,'mousemove',move,od);
gEvent.add(d.parentWindow||d.defaultView,'scroll',scroll,od);
if(od.draglayer)od.draglayer.show(od.cursor);
t.initEvent_(nameEv+'_dragstart',as);
t.initEvent_(nameEv+'_dragstartafter',as)};
function moveStop(e){
rr.breakEvent(e);
gEvent.removeAll(od);
if(od.draglayer)od.draglayer.hide();
if(rr.IE)od.document.onselectstart=od._onselectstart;
if(isDrag){
clearTimeout(od._tm_dfr2);
clearTimeout(od._tm_dfr);
clearTimeout(od._timerr);
clearTimeout(od._tm_draglayer);
vset(e);
if(od.isFromPoint||od._tm_dfr)end_dragTarget();
t.initEvent_(nameEv,as);
t.initEvent_(nameEv+'_dragend',as)};
t.initEvent_(nameEv+'_end',as);
od=t=dE=gEvent=null;
};
gEvent.add(d,'mouseup',moveStop,od);
if(!od.deltaDrag){
setupStart();
od.draglayer.show(od.cursor,true);
return;
};
gEvent.add(d,'mousemove',function(e){
vset(e);
if(od.deltaDrag&&Math.max(Math.abs(od.psX-od.stX),Math.abs(od.psY-od.stY))<od.deltaDrag)return;
setupStart();
moveSet()},od);
if(od.overDrag){
gEvent.add(d,'mouseout',function(e){
vset(e);
setupStart()},od)}},
startDrag:function(a1){
var pr=a1,doc=pr.ownerDocument||pr.document||rr.document,
e=pr.mouseEvent||pr.event,
dB=doc.body,dE=doc.documentElement,
aus=pr.autoScroll,u;
if(!e||(typeof e.which==='number'?e.which!==1:e.button!==1))return;
function isNum(vl){
return typeof vl=='number'?vl:null;
};
var itm=typeof pr.itime!='undefined'?pr.itime:rr.IE?30:null;
var od={
eventName:pr.name||'move',
object:pr.object,
itime:itm,
cursor:pr.cursor||rr.getCStyle(e.target||e.srcElement,null).cursor||"default",
isFromPoint:pr.isFromPoint,
autoScroll:typeof aus=='undefined'?true:!!aus,
clearRange:!!pr.clearRange,
ctrlKey:e.ctrlKey,
altKey:e.altKey,
shiftKey:e.shiftKey,
isPosFixed:!!pr.isPosFixed,
cX:e.clientX,
cY:e.clientY,
stX:pr.startX||(e.clientX+(pr.isPosFixed?0:(dB.scrollLeft||dE.scrollLeft))),
stY:pr.startY||(e.clientY+(pr.isPosFixed?0:(dB.scrollTop||dE.scrollTop))),
multiplierX:isNum(pr.multiplierX),
multiplierY:isNum(pr.multiplierY),
fxCursor:pr.fxCursor||false,
deltaDrag:isNum(pr.deltaDrag)||false,
overDrag:pr.overDrag!==u?!!pr.overDrag:true,
minTop:isNum(pr.minTop),
maxTop:isNum(pr.maxTop),
minLeft:isNum(pr.minLeft),
maxLeft:isNum(pr.maxLeft)};
arguments[0]=od;
this.initEvent('createDrag',arguments,pr.gEvent)},
move_dragstartafter:function(od){
if(!od.object)return;
var os=od.object.style;
od.left=rr.getPx(os.left);
od.right=rr.getPx(os.right);
od.top=rr.getPx(os.top);
od.bottom=rr.getPx(os.bottom);
if(od.left===null)od.left=od.object.offsetLeft;
if(od.top===null)od.top=od.object.offsetTop;
os.left=(od.left||0)+"px";
os.top=(od.top||0)+"px";
},
move:function(od){
if(!od.object)return;
var dX=od.stX-od.psX,
dY=od.stY-od.psY,
oStl=od.object.style,
newPos,nLeft,nTop;
od.deltaX=Math.round(dX*(od.multiplierX||1));
od.deltaY=Math.round(dY*(od.multiplierY||1));
if(!oStl)return;
if(!od.stopHor)
if(od.left!=null){
newPos=od.left-od.deltaX;
if(od.minLeft!=null&&newPos<od.minLeft){
newPos=od.minLeft;
if(od.fxCursor){
od.stX=od.psX;
od.left=newPos;
}}else if(od.maxLeft!=null&&newPos>od.maxLeft){
newPos=od.maxLeft;
if(od.fxCursor){
od.stX=od.psX;
od.left=newPos;
}};
nLeft=newPos+"px";
}else if(od.right!=null){
newPos=od.right+od.deltaX;
oStl.right=newPos+"px";
};
if(!od.stopVert)
if(od.top!=null){
newPos=od.top-od.deltaY;
if(od.minTop!=null&&newPos<od.minTop){
newPos=od.minTop;
if(od.fxCursor){
od.stY=od.psY;
od.top=newPos;
}}else if(od.maxTop!=null&&newPos>od.maxTop){
newPos=od.maxTop;
if(od.fxCursor){
od.stY=od.psY;
od.top=newPos;
}};
nTop=newPos+"px";
}else if(od.bottom!=null){
newPos=od.bottom+od.deltaY;
oStl.bottom=newPos+"px";
};
if(rr.Gecko){
var x=nLeft?(nTop?'left:'+nLeft+';top:'+nTop:'left:'+nLeft):';top:'+nTop
if(x)oStl.cssText+=x;
}
else{
if(nLeft)oStl.left=nLeft;
if(nTop)oStl.top=nTop;
}}};
rr.extendNS(null,'rr.ui.class_drag',function(pr){
var obj=function(name,e){
var t=arguments.callee;
return typeof name=='string'?t.initEvent(name,e):t.initEvent('startMove',name)};
rr.extend(obj,rr.expansion_event).addEvent(rr.listeners_drag);
obj.addEvent(pr);
return obj;
});


/* url: /js/mcore/rr_xhrloader.src.js */

new function(){
rr.extendNS(null,'rr.class_xhrloader',function(prm){
var xhr=new createXHR();
if(!xhr)return false;
rr.extend(this,{
httpRequest:xhr,
_param:{},
_paramConst:{},
_pastParam:{}},oxhr);
if(typeof prm=='object'){
if(prm.setconst){
this.set(prm.setconst,true);
delete(prm.setconst)};
rr.extend(this,prm)}});
function createXHR(){
var hrx=null,ar,i;
if(window.XMLHttpRequest){
hrx=new XMLHttpRequest()}else{
ar=['MSXML2.XmlHttp.4.0','MSXML2.XmlHttp','Microsoft.XmlHttp'];
for(i=0;i<ar.length;++i){
try{
hrx=new ActiveXObject(ar[i]);break;
}catch(ex){hrx=null;}}};
return hrx;
};
function creBoundary(){
return'-------------------'+Math.random().toString(34).substr(2)};
var oxhr={
urlResource:'/',
metodRequest:'POST',
contentType:null,
startTimeout:550,
timeout:300,
_state:false,
_timer:null,
_boundary:null,
set:function(nm,vl,fl){
if(typeof nm=='object'){
for(var i in nm)this._set(i,nm[i],vl)}else this._set(nm,vl,fl)},
_set:function(nm,vl,fl){
this._param[nm]=vl;
if(typeof fl!='undefined')this._paramConst[nm]=!!fl;
},
get:function(fl){
var i,o=fl?this._paramConst:this._param,or={};
for(i in o)or[i]=o[i];
return or;
},
del:function(nm,fl){
var t=this,
p=t._param,
pc=t._paramConst,
o={},oc={},i;
if(nm===true){
if(!fl)for(i in p)if(pc[i]){
o[i]=p[i];
oc[i]=true;
};
t._pastParam=p;
t._param=o;
t._paramConst=oc;
return p;
};
if(typeof p[nm]!='undefined')delete(p[nm]);
if(typeof pc[nm]!='undefined')delete(pc[nm])},
getQuery:function(rf){
var t=this,
mfd=(t.contentType=='multipart/form-data'),
bdr=mfd&&creBoundary(),
q='',p=t._param,pc=t._paramConst,
enc=window.encodeURIComponent||function(v){return v},
i,v,z,ii,l;
if(bdr)t._boundary=bdr;
function add(i,v){
if(mfd){
q+='--'+bdr+'\r\nContent-Disposition: form-data; name="'+i+'"\r\n\r\n'+v+'\r\n';
}else q+='&'+i+'='+enc(v)};
for(i in p)if(p.hasOwnProperty(i)){
v=p[i];
if(v instanceof Array){
for(ii=0,l=v.length;ii<l;ii++)add(i,v[ii])}else add(i,v)};
if(!mfd){q=q.substr(1)}else q+='--'+bdr+"--";
t._pastParam=rf?t.del(true):null;
return q;
},
__change:function(){
var t=this;
return function(){
try{
t._xhrChange()}catch(e){setTimeout(function(){throw e},0)}}},
_send:function(){
if(this._state)return false;
var t=this,xhr=t.httpRequest,
m=t.metodRequest||'POST',
q=t.getQuery(true),
url=t.urlResource,
ctype=t.contentType;
if(ctype=='multipart/form-data'){
ctype+="; boundary="+t._boundary;
}else if(m=='POST'){
ctype='application/x-www-form-urlencoded'
};
if(m!='POST'){
m='GET';
if(q)url+=((url.indexOf("?")==-1)?"?":(url.charAt(url.length-1)!="?")?"&":"")+q;
};
if(ctype&&xhr.overrideMimeType)t.httpRequest.overrideMimeType(ctype);
xhr.open(m,url,true);
if(ctype){
xhr.setRequestHeader('Content-Type',ctype);
xhr.setRequestHeader('Content-Length',q.length)};
xhr.onreadystatechange=t.__change();
t._flStop=false;
t._state=true;
try{
t.httpRequest.send(m=='POST'&&q?q:null)}catch(oh){
try{xhr.onreadystatechange=null}catch(e){};
t._xhrChange('error');
throw oh;
};
t.evLoading(true);
return true;
},
_xhrChange:function(status){
var t=this,nmEv,xhr=t.httpRequest;
if(t._flStop){
t._state=t._flStop=false;
return;
};
var readyState=status?4:xhr.readyState,text;
if(readyState!=4)return;
try{
status=status||xhr.status;
text=xhr.responseText;
try{xhr.onreadystatechange=null}catch(e){};
xhr.abort()}catch(oh){
setTimeout(function(){throw oh},0)};
t._state=false;
t.evLoading(false);
nmEv=t['xhrChange_'+status]?status:(t.xhrChange_other?'other':null);
if(nmEv&&t['xhrChange_'+nmEv])t['xhrChange_'+nmEv](text,status)},
_xhrStop:function(fl){
if(fl&&this._timer){
window.clearInterval(this._timer);
this._timer=false;
};
if(!this._state)return;
this._flStop=true;
this.httpRequest.abort()},
goSend:function(){
return this._send()},
status:function(){
return!this._state&&!this._timer;
},
fastSend:function(newDelay){
var t=this,fn,timeout=t.timeout;
if(!t._state&&!t._timer)if(t.startTimeout){
timeout=t.startTimeout;
}else return t._send();
t._xhrStop(!newDelay);
if(newDelay&&t._timer)return true;
var fn=function(){
t._timer=null;
t._send()};
t._timer=window.setTimeout(fn,timeout);
return true;
},
xhrChange_200:function(text){
},
xhrChange_other:function(text,status){
},
evLoading:function(fl){
}}};


/* url: /js/mcore/rr_fx.src.js */

new function(){
var __anTrs;
function gDate(){
return Date.now&&Date.now()||(new Date()).getTime()};
rr.transitionsFx=$anTransitions=__anTrs=function(prm,duration,fps){
return arguments.callee.create(prm,duration,fps)};
rr.extend(rr.transitionsFx,{
create:createAnimObj,
transitions:{
Linear:function(p){
return p;
},
Pow:function(p,x){
return Math.pow(p,x&&x[0]||6)},
Expo:function(p){
return Math.pow(2,8*(p-1))},
Circ:function(p){
return 1-Math.sin(Math.acos(p))},
Sine:function(p){
return 1-Math.sin((1-p)*Math.PI/2)},
Back:function(p,x){
x=x&&x[0]||1.618;
return Math.pow(p,2)*((x+1)*p-x)},
Bounce:function(p){
var value;
for(var a=0,b=1;1;a+=b,b/=2){
if(p>=(7-4*a)/11){
value=-Math.pow((11-6*a-11*p)/4,2)+b*b;
break;
}};
return value;
},
Elastic:function(p,x){
x=x||[1];
return Math.pow(2,10*--p)*Math.cos(20*p*Math.PI*(x[0]||1)/3)},
Quad:function(p){
return Math.pow(p,2)},
Cubic:function(p){
return Math.pow(p,3)},
Quart:function(p){
return Math.pow(p,4)},
Quint:function(p){
return Math.pow(p,5)}}});
function createAnimObj(prm,duration,fps){
var o=_createObj(),i;
if(!prm)prm={};
o.ev_step=prm.ev_step||null;
o.evFlag=prm.evFlag||false;
o.ev_start=prm.ev_start||null;
o.ev_stop=prm.ev_stop||null;
o.fps=prm.fps||o.fps;
o._dltTm=prm._dltTm||o._dltTm;
if(prm.start)o.start(prm.start,duration,fps);
return o;
};
function _createObj(fn){
return{
startTime:null,
pastTime:null,
fps:25,
_dltTm:5,
step:0,
metod:'Linear',
progres:false,
ev_start:null,
ev_stop:null,
ev_step:null,
param:null,
start:function(param,duration,fps){
fps=!fps?this.fps:fps<0?0:fps;
if(duration<=fps)return this.funcFr(val);
if(typeof param=='number')param={start:0,end:val,metod:this.metod};
this.param=param;
this.startTime=gDate();
this.duration=duration||500;
this.progres=true;
_start(this,fps)},
stop:function(){
if(!this.progres)return;
clearTimeout(this.__timmer);
clearInterval(this.timmer);
this.__timmer=this.timmer=false;
this.progres=false;
_iteration(this);
deleteParam(this)}}};
function _start(t,fps){
t.fps=fps;
t.__timmer=false;
t.progres=true;
t.timmer=setInterval(function(){
if(t.__timmer)return;
t.__timmer=setTimeout(function(){
t.__timmer=false;
},fps);
_iteration(t)},t._dltTm);
_iteration(t);
t._firstStep=true;
};
function _iteration(t){
var i,p,ii,ndt=gDate(),pp,np,v,rv={},endAn=true,pDef=(t.param&&t.param._def)||null,evStep=[],evflag,flEvent;
t.pastTime=ndt;
for(i in t.param){
if(i=='_def'||!t.param[i])continue;
p=t.param[i];
if(p instanceof Array){
for(ii=0;ii<p.length;ii++){
np=p[ii];
if(!np)continue;
if(np.ev_stop||np.ev_step)flEvent=true;
if(np._stAni)continue;
v=fxTransitions(t,i,ndt,np,pDef);
if(!v){
endAn=false;
continue;
};
rv[i]=v[0];
if(np.ev_step)evflag=evStep[(typeof np.ev_step=='string'?np.ev_step:i)]=true;
if(np._stAni){
if(np.ev_stop)evflag=evStep[(typeof np.ev_stop=='string'?np.ev_stop:i)]=true;
}else endAn=false;
};
continue;
};
pp=p.param;
if(pp&&p._def&&pp instanceof Array){
for(ii=0;ii<pp.length;ii++){
np=pp[ii];
if(np.ev_stop||np.ev_step)flEvent=true;
if(np._stAni)continue;
v=fxTransitions(t,i,ndt,np,p._def||null);
if(!v){
endAn=false;
continue;
};
if(np.ev_step)evflag=evStep[(typeof np.ev_step=='string'?np.ev_step:i)]=true;
rv[i]=v[0];
if(np._stAni){
if(np.ev_stop)evflag=evStep[(typeof np.ev_stop=='string'?np.ev_stop:i)]=true;
}else endAn=false;
};
continue;
};
if(p.ev_stop||p.ev_step)flEvent=true;
if(p._stAni)continue;
v=fxTransitions(t,i,ndt,p,pDef);
if(!v){
endAn=false;
continue;
};
if(p.ev_step)evflag=evStep[(typeof p.ev_step=='string'?p.ev_step:i)]=true;
rv[i]=v[0];
if(p._stAni){
if(p.ev_stop)evflag=evStep[(typeof p.ev_stop=='string'?p.ev_stop:i)]=true;
}else endAn=false;
};
if(t.ev_step)
if(flEvent){
if(evflag)t.ev_step(rv,evStep)}else t.ev_step(rv);
if(endAn){
clearTimeout(t.__timmer);
clearInterval(t.timmer);
t.__timmer=t.timmer=false;
t.progres=false;
if(t.ev_stop)t.ev_stop();
deleteParam(t)}};
function deleteParam(t){
if(t.param)while(t.param[0])delete(t.param[0]);
t.param=null;delete(t.param);
if(t.ev_start)delete(t.ev_start);
if(t.ev_step)delete(t.ev_step);
if(t.ev_stop)delete(t.ev_stop)};
function fxTransitions(t,pName,ndt,pr,df,_endAnim){
if(pr._stAni)return;
var rval=null,pTm,dlt;
if(!df)df={};
switch(pName){
case'className':
case'display':
case'position':
case'visibility':
case'overflow':
if(pr.time===true||(pr.time&&pr.time<=(ndt-t.startTime))||(!pr.time&&(ndt-t.startTime)>=(t.maxDuration||t.duration))){
pr._stAni=1;
setElStyle(pName,null,1,pr,df);
return[true,1];
};
return;
}
if(!pr.a)pr.a=(df&&df.a)||0;
if(pr.time&&pr.time<t.duration){
if(!pr.__timeStart){
if(ndt<(t.startTime+pr.time))return null;
pr.__timeStart=t.startTime+pr.time;
pr.duration=pr.duration||df.duration;
if(!pr.duration||pr.duration=='auto'){
pr.duration=t.duration-pr.time;
}else if(pr.duration<0){
pr.duration=(t.duration-pr.time)+pr.duration;
}if((pr.duration+pr.time)>t.duration)
t.maxDuration=pr.duration+pr.time;
};
pTm=(ndt-pr.__timeStart)/pr.duration;
}else{
var prDuration=pr.duration||df.duration||t.duration;
if(prDuration<0){
prDuration=t.duration+prDuration;
}else if(!t._firstStep&&prDuration>t.duration)
t.maxDuration=prDuration;
pTm=(ndt-t.startTime)/prDuration;
};
if(pTm>=1){pr._stAni=pTm=1;};
if(pName!='className'){
dlt=_gTransition(t,pTm,pr,df);
rval=dlt*(pr.b-pr.a)+pr.a;
};
el=pr.elStyle||(df&&df.elStyle);
if(el)setElStyle(pName,rval,pTm,pr,df);
return[rval,pTm];
};
function _gTransition(t,pos,pr,df){
var metod=pr.metod||(df&&df.metod)||t.metod,style=pr.style||(df&&df.style)||t.style,params=pr.params||(df&&df.params);
var trn=(t.transitions&&t.transitions[metod])||__anTrs.transitions[metod];
switch(style){
case 2:
case'easeOut':return 1-trn(1-pos,params);
case 3:
case'easeInOut':return(pos<=0.5)?trn(2*pos,params)/2:(2-trn(2*(1-pos),params))/2;
default:return trn(pos,params)}};
function setOpacity(o,v){
if(o)
if(rr.IE){
o.style.filter=v!==''?'alpha(opacity='+Math.round(v*100)+')':'';
}else o.style.opacity=v!==''?v:'';
};
function setElStyle(name,val,pTm,pr,df){
var i,s,nv,ar,oSt=pr.elStyle||df.elStyle;
if(!oSt)return;
if(oSt instanceof Array){
ar=pr.elStyle;
for(i=0;i<oSt.length;i++){
if(!oSt[i])continue;
pr.elStyle=oSt[i];
setElStyle(name,val,pTm,pr,df)};
pr.elStyle=ar;
return;
};
oSt=pr.elStyle||df.elStyle;
if(!oSt)return;
s=oSt.style||oSt.elStyle;
switch(name){
case'opacity':
nv=null;
if(pTm>=1&&pr.ultimate==='')nv='';
if(rr.IE){
s.filter=nv!=null?nv:'alpha(opacity='+Math.round(val*100)+')';
}else s.opacity=nv!=null?nv:val;
break;
case'className':
nv=pr.add||df.add;
if(nv)rr.css.add(nv,oSt);
nv=pr.remove||df.remove;
if(nv)rr.css.remove(nv,oSt);
break;
case'position':
case'display':
case'visibility':
case'overflow':
nv=pr.value||typeof pr.value=='string'?pr.value:df.value;
if(typeof nv=='string')s[name]=nv||'';
break;
case'scrollLeft':
case'scrollTop':
oSt[name]=val;
break;
default:
if(pTm>=1&&typeof pr.ultimate!='undefined')nv=pr.ultimate;
s[name]=(pTm>=1&&typeof pr.ultimate!='undefined')?pr.ultimate:Math.round(val)+(!pr.unit||typeof pr.unit!='string'?'px':pr.unit)}}};


/* url: /js/mcore/rr_history.js */

rr.class_history=function(sh,p){
p=p||false;
this.document=p.document||document;
if(p.change)this.change=p.change;
if(sh)this.start(sh,d)};
rr.extend(rr.class_history.prototype,{
ieframe:false,
current_hash:'',
change:function(new_hash){},
start:function(sh){
var t=this;
t.start_hash=typeof sh=='string'?rr.trim(sh):'';
if(this.active)return;
rr.domReady(function(){
var sh=t.start_hash
,d=t.document
,hash=t.document.location.hash
,n,v;
t.start_hash=null;
t.active=true;
if(rr.IE<8){
n=t.ieframe=d.createElement('iframe');
n.style.display='none';
d.body.appendChild(n)};
if(!hash||hash=='#'&&sh){
sh=rr.trim(sh);
if(rr.IE<8)hash=sh;
if(rr.IE<7){
var xh=t.document.location.href;
setTimeout(function(){if(t.document.location.href==xh)t.document.location.hash=sh},0)}
else{
t.document.location.replace(
sh.charAt(0)=='#'?sh:'#'+sh
)}};
hash=rr.IE<8?t.reFrame(hash).location.hash:t.document.location.hash;
if(hash=='#')hash='';
t.current_hash=hash;
t.change(hash?hash.substr(1):'');
setInterval(rr.bind(t,t.check),100)})},
reFrame:function(x){
var n=this.ieframe,u;
n=n.contentWindow.document;
n.open();
n.write('<html><head><title>'+rr.htmlEscape(this.document.title)+'</title><body>');
n.close();
if(x!==u)n.location.hash=x;
return n;
},
check:function(){
var t=this
,lhs=t.document.location.hash
,n,ihs,nh,u;
if(lhs=="#")lhs='';
if(rr.IE<8){
ihs=this.ieframe.contentWindow.document.location.hash;
if(ihs=="#")ihs='';
if(ihs!=t.current_hash){
nh=t.document.location.hash=ihs;
}else
if(lhs!=ihs){
t.reFrame(nh=lhs)}}
else if(lhs!=t.current_hash){
nh=lhs;
};
if(nh!==u){
t.current_hash=nh;
t.history_length=history.length;
t.change(nh?nh.substr(1):'')}},
replace:function(x){
if(!this.active)return this.start_hash||'';
if(typeof x!=='string')return false;
x=rr.trim(x);
if(rr.IE<8){
this.document.location.hash=this.ieframe.contentWindow.document.location.hash=x;
}
else{
this.document.location.replace(
x.charAt(0)=='#'?x:'#'+x
)}
x=this.document.location.hash;
this.current_hash=x=='#'?'':x;
},
get:function(){
if(this.active)this.check();
var x=this.active?this.current_hash:this.document.location.hash||t.start_hash||'';
return x?x.substr(1):x;
},
set:function(x){
var t=this,ch=t.current_hash;
if(typeof x==='string'&&ch!=(x?'#'+x:'')){
t.document.location.hash=x;
if(rr.IE<8)t.reFrame(x);
x=t.document.location.hash;
t.current_hash=x!='#'?x:'';
setTimeout(function(){
v=t.document.location.hash;
if(x==v){
t.change(v&&v!='#'?v.substr(1):'')}},10)}}});


/* url: /js/mcore/rr_xhrloader2.src.js */

rr.xhr=new function(){
function getQ(nx,mfd){
var q=[],i,v,x,j,l;
mfd=mfd?'--'+Math.random().toString(34).substr(2,4):false;
for(i in nx){
v=nx[i];
i=mfd?i.substring(1):encodeURIComponent(i.substring(1));
switch(typeof v){
case'boolean':
v=v?'true':'false';
case'number':
if(v!==v)break;
v+='';
case'string':
if(mfd){
while(v.indexOf(mfd)!==-1)mfd+=Math.random().toString(34).substr(2,3);
q.push(i,v);
break
};
q.push(i+'='+encodeURIComponent(v));
break;
case'object':
l=v.length;
if(l>0){
for(j=0;j<l;j++){
x=v[j];
switch(typeof x){
case'boolean':x=x?'true':'false';
case'number':if(x!==x)break;
x+='';
case'string':
if(mfd){
x='\r\nContent-Disposition: form-data; name="'+i+'"\r\n\r\n'+x+'\r\n';
while(x.indexOf(mfd)!==-1)mfd+=Math.random().toString(34).substr(2,3);
q.push(x);
break
};
q.push(i+'='+encodeURIComponent(x));
break;
}}};
break;
}};
return q.length?mfd?'--'+mfd+q.join('--'+mfd):q.join('&'):'';
};
function delay(t,x){
if(t.is_delay)clearTimeout(t.is_delay);
if(t.is_sending){
alert(11)
return;
};
t.is_delay=setTimeout(function(){
t.is_delay=false;
var nx=t.stack.shift();
if(nx)send(t,nx)},x>10?x:10)};
function stop(t,dl){
if(!t.is_sending||t.is_delay)return;
t.is_sending=false;
delay(t,dl);
var xhr=t.xhr;
if(xhr.timmer){
clearInterval(xhr.timmer)
xhr.timmer=false;
};
xhr.abort()};
function event(t,nx){
var xhr=t.xhr,status,text;
try{
status=xhr.status;
text=xhr.responseText;
xhr.abort()}catch(e){
status=false;
};
try{
if(typeof t.event=='function'){
t.event(status,text,nx)};
if(status&&typeof t['ev_'+status]=='function'){
t.event(text,nx)}}
catch(e){
setTimeout(function(){throw e},0)};
t.is_sending=false;
delay(t)};
function send(t,nx){
var xhr=t.xhr,url=t.url,m='POST',q,type;
if(t.post){
type=t.post!='application/x-www-form-urlencoded'?'multipart/form-data':t.post;
if(xhr.overrideMimeType)t.httpRequest.overrideMimeType(type);
q=getQ(nx,type=='multipart/form-data')}
else{
m='GET';
url+=(url.indexOf("?")!=-1?(/[\?\&]$/.test(url)?'':'&'):'?')+getQ(nx)};
xhr.open(m,url,true);
xhr.onreadystatechange=function(){
if(t.is_delay||xhr.readyState!=4)return;
event(t,nx)};
if(type){
xhr.setRequestHeader('Content-Type',type);
xhr.setRequestHeader('Content-Length',q.length)};
t.is_sending=true;
xhr.send(q||null)};
function cprm(){};
cprm.prototype.get=function(n){
return this['~'+n];
};
cprm.prototype.each=function(cb){
var i;
for(i in this)if(this.hasOwnProperty(i))cb(i,this[i])};
function clss(){
this.xhr=typeof XMLHttpRequest==='function'?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP');
this.stack=[];
this.next=new cprm;
};
clss.prototype={
url:null,
post:false,
get:function(n){return xhr.next['~'+n]},
set:function(A,B){
switch(typeof A){
case'string':
this.next['~'+A]=B;
break;
case'object':
for(var i in A)
this.next['~'+i]=A[i];
break;
}},
send:function(){
this.stack.push(this.past=this.next);
this.next=new cprm;
if(!this.is_sending&&!this.is_delay){
send(this,this.stack.shift())}},
fastSend:function(dl){
var nx=this.past=this.next;
this.next=new cprm;
this.stack.length=0;
if(this.delay>10){
if(this.is_sending&&!this.is_delay){
stop(this,this.delay)}
else{
delay(this,this.delay)}
this.stack.push(nx);
return;
};
if(this.is_sending)stop(this);
if(this.is_delay){this.stack.push(nx)}
else send(this,nx)},
stop:function(){
this.stack.length=0;
stop(this)}};
return function(url){
if(!url||typeof url!='string')url=null;
var x=new clss();
x.url=url;
return x;
}};


/* url: /js/m2/css/css_rmail.src.js */

rr.styles('_ramail_inbox',
".b-tbar {display:block;margin:1ex 0;}",
".b-tbar-button {font-size:80%;background-color:#CCCCCC;cursor:pointer;display:inline-block;margin-right:3px;min-width:50px;padding:3px;text-align:center;}",
".b-tbar-ico {background-color:#aaa;display:block;margin:0 auto;height:20px;overflow:hidden;width:20px;}",
".b-tbar-ico {background-image: url('http://i.r0.ru/m/2w/i/chameleon/ramail-icons.png');}",
".b-tbar-ico--remove {background-position:50% -575px;}",
".b-tbar-ico--spam {background-position:50% -605px;}",
""
);
rr.styles('tmpl:s_table_head'
,'.s-table_head-cell {background-color:#BBB;background-position:0 -200px;background-image:url("/i/chameleon/ramail-mask.png");background-repeat:no-repeat;}'
,'.s-table_head-cap {margin:1px 1px 0 0;background-color:#FFFFFF;display:block;height:1.3em;}'
,'.s-table_head-cap--first {margin-left:1px;}'
);
rr.styles('tmpl:ramail_inbox',
".b-icons {background-image: url('http://m1.mail-test.rambler.ru/i/chameleon/ramail-icons.png');}",
".i-icons {background-image: url('/i/chameleon/ramail-icons.png');}",
".b-icons--contact {background-position:50% -335px;}",
".b-icons--contact-unactive {background-position:50% -335px;}",
".b-icons--remove {background-position:50% -665px;}",
".b-icons--remove-unactive {background-position:50% -575px;}",
".b-icons--spam {background-position:50% -635px;}",
".b-icons--spam-unactive {background-position:50% -605px;}",
".b-icons--other {background-position:50% -1595px;}",
".b-icons--other-unactive {background-position:50% -1595px;}",
".b-icons--search {background-position:50% -2665px;}",
".b-icons--search-unactive {background-position:50% -2665px;}",
".b-icons--refresh {background-position:50% -2875px;}",
".b-icons--refresh-unactive {background-position:50% -2875px;}",
".b-icons--reply {background-position:50% -1145px;}",
".b-icons--replyall {background-position:50% -1115px;}",
".b-icons--forward {background-position:50% -965px;}",
".b-icons--flag {background-position:50% -875px;}",
".b-icons--print {background-position:50% -1085px;}",
".b-icons--msg_next {background-position:50% -5px;}",
".b-icons--msg_past {background-position:50% -95px;}",
".b-icons--preview {background-position:50% -1025px;}",
".b-icons--search_mailbox {background-position:50% -2665px;}",
".b-icons--cancel {background-position:50% -665px;}",
".b-icons--send_mail {background-position:50% -1445px;}",
".b-icons--save_draft {background-position:50% -725px;}",
".b-icons--attach_file {background-position:50% -125px;}",
".b-icons--addr {background-position:50% -335px;}",
".b-icons--vkey {background-position:50% -305px;}",
".b-icons--edit {background-position:50% -3055px;}"
);
rr.styles('rm_style:colors',
".b-mtbox-cell, .b-pg_mailbox-tbar2 {border-color:$br_color_1|#C7DFEE$;}"
);


/* url: /js/m2/common.src.js */

rr.domReady.stop=rr.IE<6||rr.is_j2me||rr.Opera<9;
if(!rr.domReady.stop)document.documentElement.id='onscript';
var tmpl={},elems={},tmpl_js,domMaster,masterElement;
domMaster=masterElement=rr.new_master(document,{
tmpl:tmpl_js=rr.newTemplate(tmpl),
ui:rr.newTemplate(elems)});
domMaster.namespace=masterElement.global.tmpl;
if(!this.ramail)this.ramail={};
var rmail=ramail;
rr.init(function(){
var _=masterElement;
switch(ramail.page_name){
case'contacts':
_.master('ui:pg_contacts');
break;
case'messenger_history':_('tmpl:pg_history');break;
case'messenger_history_small':_('tmpl:pg_history');break;
default:
if(ramail.page_name){
_('tmpl:pg_'+ramail.page_name)}}});
rr.extend(ramail,rr.expansion_event,{
url_img_noAvatar:(window._static_host||'')+'/i/no_avatar_small.jpg',
hash_default:'/inbox',
history:new function(){
return new rr.class_history(null,{
document:rr.document,
change:function(x){
if(!x){
ramail.history.replace(x=ramail.hash_default)};
if(ramail.page_open!==x){
ramail.go(x,true)}}})},
go:function(x,h){
if(typeof x!=='string')return;
var e={hash:x,has_history:!!h},r;
this.initEvent('open_page',e);
if(!e.handler){
if(!h){
return
};
if(this.page_open==this.hash_default){
this.history.replace(this.page_open);
return;
};
e={hash:this.hash_default,has_history:true};
this.initEvent('open_page',e);
if(!e.handler)return;
};
switch(typeof e.handler){
case'string':
r=this[e.handler](e);
break;
case'function':
r=e.handler.call(this,e);
break;
case'boolean':
r=e.handler;
break;
default:r=false;
};
if(!h){
if(this.page_open!=e.hash){
if(r!==false){
this.page_open=e.hash;
this.history.set(e.hash)}
else{
e.autoSetHash=true;
}};
return;
};
this.page_open=e.hash;
if(x!=e.hash){
this.history.replace(e.hash)}},
pageStart:function(nm,x){
if(nm&&!this.page_name){
this.page_name=nm;
window._page_timeHead=new Date;
this.initEvent('start: '+nm,x={style:x});
x=x.style;
if(!x)switch(nm){
case'messenger_history':x='rm:contact_view rm:chat_history rm:contact_wrapper';break;
case'contacts':x='tmpl rm:contact_view rm:contact_edit';break;
};
if(x)rr.styles_include(x,{
static_host:''
})}},
init_:function(){
var i;
rr.init(function(x){
if(i)return;
i=true;
if(x=ramail.page_name)ramail.initEvent('init: '+x)});
return function(n,e){
i?e.call(this):this.addEvent('init: '+n,e)}}(),
start_:function(n,e){
this.start_ok?e.call(this):this.addEvent('start: '+n,e)},
addShortcut:function(p1,p2,p3){
if(rr.shortcut)return rr.shortcut.add(p1,p2,p3)},
box_window:null,
new_window:function(s){
var wbox=this.box_windows,w=new elems.window_a(s,domMaster);
if(!wbox){
wbox=(this.box_windows=new elems.box_windows(false,domMaster))};
w.set(s);
if(s.hide!==false){
w.set('hide',false)}
wbox.append(w);
w.is_connect=true;
w.interface.dom_connect(w);
w.show('center');
return w;
},
confirm:function(tx,fn){
setTimeout(function(){
var r=!!window.confirm(tx);
setTimeout(rr.IE?function(){fn(r)}:fn,1,r)},1)},
alert:function(tx,fn){
setTimeout(function(){
alert(tx);
if(typeof fn==='function'){
setTimeout(fn,1)}},1)},
saveSetting:function(){
var xhr=new rr.class_xhrloader({
urlResource:location.pathname.replace(/\/mail\/\w+\.cgi/,"/mail/settings.cgi?mode=json"),
metodRequest:'POST',
startTimeout:70,
timeout:70,
setconst:{
request_key:window._request_key||'no',
result:'comment'
}});
if(!xhr)return;
return function(name,value){
if(!name)return;
xhr.set({set_name:name+"",set_value:value+""});
xhr.fastSend()}},
baner_close:function(e){
e=e||window.event;
var tg=e.target||e.srcElement,
id=tg._valueId,
tm=tg._valueTm,
undf,nd;
tm=typeof tm=='number'?tm*1000:600000;
tm=new Date(new Date().getTime()+tm);
rr.cookie.set(id+'-axed','yep',tm,'/mail/');
nd=rr.$(id);
nd.style.display='none';
setTimeout(function(){
rr.removeNode(nd)},200)}});
window.onbeforeunload=function(){
var e={message:false};
ramail.initEvent('closeWindow',e);
if(e.message)return e.message;
window.onerror=null;
};
rr.addHandler(document.documentElement,'click',function(e){
if(e.returnValue===false)return;
var n=rr.getParentNode('a',e.target||e.srcElement,true),i,x;
var href=n&&n.href||'',lc=location.href;
if(n&&!n.target&&href.indexOf('#')!==-1){
i=lc.indexOf('#');
if(i!=-1)lc=lc.substr(0,i);
x=href.substr(0,i=href.indexOf('#'));
if(!x||x==lc){
rr.breakEvent(e);
if(x=href.substr(i+1))ramail.go(x)}}});
rr.domReady(function(){
var bA=['banner-top','banner-left','banner-right','begun-text','banner-ctx-begun',['features',0],'banner-ie','banner-tz'],
i=0,p,n;
while(p=bA[i++]){
if(typeof p=='string')p=[p];
if(n=rr.$(p[0]+'-x')){
n._valueId=p[0];
n._valueTm=p[1];
n.onclick=ramail.baner_close;
}}});
function check_avatar(obj){
if(!obj)return;
obj.onload=null;
var os=obj.style,sw=os.width,sh=os.height,w,h;
os.width=os.height='auto';
w=obj.clientWidth;
h=obj.clientHeight;
if(w<4&&h<4){
rr.css_add('noavatar',obj.parentNode);
rr.removeNode(obj);
return;
};
if(sw)os.width=sw;
if(sh)os.height=sh;
rr.css_add('loaded',obj)};
rr.ui_setupPopupMenu=function(a,b){
var nd=rr.$(a)
,pnd=rr.$(b)
,pauseHide,timerHide,timerShow,timerStHide,flShow;
if(!nd||!pnd)return;
rr.css_remove('csshover',pnd);
nd.onmouseover=function(){
pauseHide=true;
if(rr.css_is('jshover',pnd))return show();
if(!timerShow)timerShow=window.setTimeout(show,200)};
nd.onmousemove=function(){
pauseHide=true;
if(!timerShow||rr.css_is('jshover',pnd))return;
window.clearInterval(timerShow);
timerShow=window.setTimeout(show,200)};
nd.onmousedown=function(e){
return false;
};
nd.onclick=function(e){
if(rr.css_is('jshover',pnd)){
if(!timerStHide)hide()}else show();
return false;
};
pnd.onmouseover=function(e){
window.clearInterval(timerHide);
timerHide=null;
setLiHover(e,true)};
pnd.onmouseout=function(e){
if(!timerHide)timerHide=window.setTimeout(hide,800);
window.clearInterval(timerShow);
timerShow=null;
setLiHover(e)};
function setLiHover(e,fl){
if(rr.IE<7||true){
e=e||window.event;
var tg=e.target||e.srcElement;
while(tg&&tg.tagName!=='LI'){
if(tg===pnd)return;
tg=tg.parentNode;
};
if(tg&&tg!==pnd)rr.css_set('jshover',tg,fl)}};
function show(){
_clear();
rr.css_add('jshover',pnd);
flShow=true;
if(timerStHide)window.clearInterval(timerStHide);
timerStHide=window.setTimeout(function(){
timerStHide=null;
},pauseHide?400:100);
pauseHide=false;
};
function hide(){
rr.css_remove('jshover',pnd);
_clear()};
function _clear(){
window.clearInterval(timerHide);
window.clearInterval(timerShow);
timerHide=null;
timerShow=null;
flShow=null;
};
rr.addHandler(document,'mousedown',function(e){
if(!flShow)return;
e=e||window.event;
var tg=e.target||e.srcElement,nd;
while(tg&&tg.tagName){
if(tg==pnd)return;
tg=tg.parentNode;
};
hide()})};
rr.domReady(function(){
rr.ui_setupPopupMenu('topline-dropdown','topline-select');
rr.ui_setupPopupMenu('topmenu-dropdown','topmenu-all-folders')});
new function(){
var aw=[600,700,800,900,1000,1200,1400,1900],tm,pw;
rr.addHandler(window,'resize',function(){
if(!(rr.IE<7)&&tm)return;
clearTimeout(tm);
tm=setTimeout(resize,30)});
function resize(){
tm=null;
var d=document,a=aw,i=0,w,x,v,c;
d=d&&d.documentElement;
if(!d)return;
w=rr.IE?d.offsetWidth:window.innerWidth;
while(v=a[i++]){
if(w>v)x=v;else break;
};
w=x||a[0];
if(pw==w)return;
pw=w;
i=0;
c={className:d.className};
while(v=a[i++])rr.css_set('cw-'+v,c,w>=v);
d.className=c.className;
};
rr.domReady(resize);
resize()};
function jsonp_loader(url,cb){
if(!url)return;
if(!jsonp_loader.idx)jsonp_loader.idx=1;
var e='ev'+(jsonp_loader.idx++).toString(32),ok;
jsonp_loader[e]=function(v){
if(e){
delete(jsonp_loader[e]);e=null;
if(cb)cb(v)}}
rr.appendScript(
url+(url.indexOf('?')?"&":"?")+"rnd="+(Math.random().toString(32).substr(2,6))+"&rkey="+window._request_key+"&jsonp=jsonp_loader."+e
,{
charset:"utf-8",
defer:true,
rm:true,
event:function(s,ok){
if(e){
if(!ok)delete(jsonp_loader[e]);e=null;
if(cb)cb()}}})};
rr.init(function(){
if(window._page_timestart)setTimeout(function(){
_page_timeStart=+_page_timestart;
var x=window._page_timeLength=+new Date-_page_timestart;
if(window.console&&console.log)console.log("time page: "+(_page_timeHead-_page_timestart)+"  "+x)},10)});
ramail.getFormParams=function(frm){
if(!frm)return;
var prm={},a=frm.elements,i=0,nm,n,x,v,u;
for(i=0;n=a[i];i++){
x=prm[nm=n.name];
if(!nm||n.tagName=="FIELDSET")continue;
v=n.value+'';
switch(n.type){
case'file':case'submit':
continue;
case'radio':case'checkbox':
if(!n.checked||!v)continue;
break;
};
switch(typeof x){
case'object':x[x.length||0]=v;break;
case'undefined':prm[nm]=v;break;
default:prm[nm]=[x,v];
}};
return prm;
};
rr.init(function(){
return;
var xhr=rr.xhr('http://m2.mail-test.rambler.ru/utf/m2.html'),dt;
window.xxxhhhrr=xhr;
var ix=0;
xhr.event=function(status,text,prm){
rr.$('addressbook-link').innerHTML=ix++;
}
setInterval(function(){
xhr.set('test',55);
xhr.set('time',+new Date());
xhr.fastSend()},50)})
rr.init(function(){
return;
var _=domMaster,ns={},w=ramail.new_window({
width:500,
height:300
});
_(w
,_('div',{style:"position:relative;height:250px;"}
,ns.tar=_('textarea'
,{
style:"position:absolute;width:95%;height:200px;margin:2px;",
value:'1\n\r2\n3\n4\n\r5\n6\n7\n8'
}))
,_('div'
,ns.text=_.text(''))
,_('div'
,ns.go=_('button',{text:"Go"})
,ns.inp=_('input')
,ns.bt=_('button',{text:"Set"})));
function get(n){
return{start:0,end:0};
if(n.selectionStart){
if(rr.IE>8)n.focus();
return{start:n.selectionStart,end:n.selectionEnd}}
else if(document.selection){
var r=n.createTextRange(),m=document.selection.createRange().getBookmark(),v=n.value,s,e;
r.moveToBookmark(m);
r.text='';
r.moveEnd('character',e=n.value.length);
e=v.length-e;
r.text='';
s=n.value.length;
r.expand('textedit');
r.text=v;
r.moveToBookmark(m);
r.select();
return{start:s,end:s+e}}
return{start:0,end:0}}
ns.bt.onclick=function(){
var x=rr.trim(ns.inp.value).split(/\s+/);
setTimeout(function(){
var A=x[0]-0,B=x[1]-0;
if(A===A)rr.textSelection_set(ns.tar,A,B>A?B:A)},10)}
ns.go.onclick=function(){
ns.tar.focus();
setTimeout(function(){
var s=rr.textSelection_get(ns.tar),s2;
if(rr.IE){
s2=get(ns.tar)
ns.text.data=s.start+" : "+s.end+"   -   "+s2.start+" : "+s2.end;
}
else{
ns.text.data=s.start+" : "+s.end;
};
ns.inp.value=s.start+' '+s.end;
},10)}});


/* url: /js/m2/data_user.src.js */

ramail.get_folder=function(nm,um){
if(nm){
nm='~'+(um||this.data_user)+'/'+nm;
var a=this.data_folders||false,i=0;
for(;x=a[i];i++){
if(nm==x.folder)return x;
}}};


/* url: /js/m2/page_open.src.js */

ramail.addEvent('start: ramail',function(e){
e.style='tmpl rm ramail_inbox rm_style';
this.history.start(this.hash_default)});
ramail.addEvent('open_page',function(e){
if(e.returnValue==false)return;
var hs=e.hash,x=(hs.match(/^\/([^\/]+)/)||[])[1],mbox,what,page,filter;
if(x)x=x.toLocaleLowerCase();
switch(x){
case'search':
return;
case'history':
return;
case'contacts':
e.hash='/contacts';
e.handler='open_contacts';
return false;
case'box:unseen':filter='unseen';
case'box:flag':filter=filter||'flag';
case'box':
if(filter)e.filter=filter;
e.mbox=(hs.match(/^\/box(?:\:unseen|flag|)\/([^\/]+)/)||[])[1];
e.what=(hs.match(/^\/box(?:\:unseen|flag|)\/[^\/]+\/([\d\.]+)/)||[])[1];
if(e.mbox)e.mbox=decodeURIComponent(e.mbox);
if(e.what){
e.handler='open_message';
return false;
};
e.page=(hs.match(/^\/box\/[^\/]+\/(?:p|page\/)([\d\.]+)/)||[])[1];
e.handler='open_mailbox';
return false;
case'inbox:unseen':case'sentbox:unseen':case'sent:unseen':case'draftbox:unseen':case'drafts:unseen':case'trash:unseen':filter='unseen';
case'inbox:flag':case'sentbox:flag':case'sent:flag':case'draftbox:flag':case'drafts:flag':case'trash:flag':filter=filter||'unseen';
x=x.split(':')[0];
case'inbox':case'sentbox':case'sent':case'draftbox':case'drafts':case'trash':
switch(x){
case'inbox':e.mbox='INBOX';break;
case'sentbox':case'sent':e.mbox='SentBox';break;
case'draftbox':case'drafts':e.mbox='DraftBox';break;
case'trash':e.mbox='Trash';break;
default:return;
};
if(filter)e.filter=filter;
e.what=(hs.match(/^\/[^\/]+\/([\d\.]+)/)||[])[1];
if(e.what){
e.handler='open_message';
return false;
}
e.page=(hs.match(/^\/[^\/]+\/(?:p\/?|page\/)([\d\.]+)/)||[])[1];
e.handler='open_mailbox';
return false;
default:return
}});


/* url: /js/m2/page_connect.src.js */

ramail.page_connect=function(page,e){
var rmFrame=ramail.mainframe||(ramail.mainframe=masterElement('tmpl:mainframe',false)),sbar,re;
document.title=(page.text_title||"\u041F\u043E\u0447\u0442\u0430")+" \u2014 flash-vkv@rambler.ru";
if(rmFrame.page!=page){
if(rmFrame.page){
rr.removeNode(rmFrame.page.node||rmFrame.page);
if(typeof rmFrame.page.ev_connect=='function'){
rmFrame.page.ev_connect(false)}};
rmFrame.page=page;
if(page.node.parentNode!=rmFrame.box){
rmFrame.box.appendChild(page.node)
if(typeof page.ev_connect=='function'){
page.ev_connect(true)}}};
top:switch(sbar=page.sidebar){
case'default':case'mailbox':
sbar=null;
break;
case'settings':
sbar=this.sidebar_settings||(this.sidebar_settings=masterElement('tmpl:sidebar_settings',false));
break;
default:
if(!sbar||!(sbar.nodeType<0)){
sbar=null;
}};
if(!sbar){
sbar=this.sidebar_mailbox||(this.sidebar_mailbox=masterElement('ui:sidebar_mailbox',false))};
if(rmFrame.sidebar!==sbar){
if(rmFrame.sidebar){
rr.removeNode(rmFrame.sidebar.node||page.sidebar);
if(typeof rmFrame.sidebar.ev_connect=='function'){
rmFrame.sidebar.ev_connect(false)}};
if(rmFrame.sidebar=sbar||null){
rmFrame.sidebar_box.appendChild(sbar.node||sbar);
if(typeof sbar.ev_connect=='function'){
sbar.ev_connect(true)}}};
e=e||false;
if(e.autoSetHash&&e.hash){
if(ramail.page_open!=e.hash){
ramail.page_open=e.hash;
ramail.history.set(e.hash)}};
this.initEvent('page_connect',e)};
ramail.addEvent('page_connect',function(e){
var nx;
if(nx=this.sidebar_mailbox){
if(e.handler=='open_mailbox'||e.handler=='open_message'){
if(typeof nx.set_activeFolder==='function'){
nx.set_activeFolder(e.mbox)};
return false;
};
if(e.handler=='open_contacts'||e.handler=='open_compose'){
nx.set_activeFolder(false)}}});

/* url: /js/m2/tmpl/tmpl_buttons.src.js */

rr.styles('tmpl:nToolbar'
,'.b-ntoolbar {overflow:hidden;}'
,'.b-ntoolbar-left {float:left;}'
,'.b-ntoolbar-right {text-align:right;white-space:nowrap;}'
)
rr.ns('tmpl');
tmpl.rm_nToolbar=function(pr,_){
var ns=this,u;
ns.node=_('div.b-ntoolbar',{className:pr.css}
,ns.box=_('div.b-ntoolbar-left')
,(pr.right||pr.right===0?
_('div.b-ntoolbar-right',pr.right)
:u
))};
tmpl.rm_nButton=function(pr,_){
var ns=this;
ns.node=_('label.button'+(pr.disabled?' disabled':'')+(pr.inner?' inner':'')
,{title:pr.title,className:pr.css}
,ns.button=_('button.submit',{id:pr.id,name:pr.name,type:pr.type,disabled:pr.disabled}
,_('span',{className:pr.icon&&'icon'}
,ns.text=_.text(pr.text))))
ns.set_disabled=function(x){
rr.css_set('disabled',ns.node,x);
ns.button.disabled=!!x;
}};
tmpl.rm_nLinkButton=function(pr,_){
var ns=this;
ns.node=_('label.button'+(pr.disabled?' disabled':'')+(pr.inner?' inner':'')
,{title:pr.title,className:pr.css}
,ns.button=_('a.button',{href:pr.href,id:pr.id,name:pr.name,type:pr.type,disabled:pr.disabled}
,_('span',{className:pr.icon&&'icon'}
,ns.text=_.text(pr.text))))
ns.set_disabled=function(x){
rr.css_set('disabled',ns.node,x);
ns.button.disabled=!!x;
}};


/* url: /js/m2/tmpl/tmpl_ubutton.src.js */

rr.styles('tmpl:uToolbar'
,'.b-utoolbar-left {float:left;}'
,'.b-utoolbar-right {text-align:right;white-space:nowrap;}'
);
rr.styles('tmpl:uButton'
,'.b-ubutton {overflow:visible;margin:0 3px 0 0;vertical-align:middle;white-space:nowrap;border:1px solid #999;background-color:#DCDCDC;cursor:pointer;display:inline-block;text-align:left;'
+(rr.IE||rr.Opera?'padding:2px 5px;':'padding:2px;')
+(rr.Gecko?'-moz-box-shadow:0 1px 1px #FFFFFF inset;-moz-user-select: none;background-image:-moz-linear-gradient(top, rgba(255,255,255,0.6), rgba(255,255,255,0));'
:rr.WebKit?'background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.4)), to(rgba(255,255,255,0)));'
:(rr.Opera||rr.IE)?'background-position:0;background-repeat:repeat-x;background-repeat:repeat-x;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAhCAYAAAARUmHFAAAALElEQVQokWP8////TAY0wMLAwPALm+AfylT+xCb4j162Ey84pG2nW3gOnO0AZeAjgXbrRFMAAAAASUVORK5CYII=);'
:'')
+'box-shadow:0 1px 1px #FFFFFF inset;-khtml-user-select: none;user-select: none;}'
,'.b-ubutton--g_new {margin-left:1ex;}'
,'.b-ubutton--g_left {margin-left:1ex;margin-right:-1px;'
+(rr.Gecko?'-moz-border-radius-topright: 0;-moz-border-radius-bottomright: 0;'
:rr.WebKit?'margin-right:-3px;-webkit-border-top-right-radius: 0;-webkit-border-bottom-right-radius: 0;'
:'')
+'border-top-right-radius: 0;border-bottom-right-radius: 0;}'
,'.b-ubutton--first {margin-left:0;margin-right:0;}'
,'.b-ubutton--firstLeft {margin-left:0;}'
,'.b-ubutton--firstRight {margin-right:0;}'
,'.b-ubutton--g_left {margin-right:-1px;}'
,'.b-ubutton--g_right {'
+(rr.Gecko?'-moz-border-radius-topleft: 0;-moz-border-radius-bottomleft: 0;'
:rr.WebKit?'-webkit-border-top-left-radius: 0;-webkit-border-bottom-left-radius: 0;'
:'')
+'border-top-left-radius: 0;border-bottom-left-radius: 0;}'
,'.b-ubutton--g_center {'
+(rr.Gecko?'-moz-border-radius:0;'
:rr.WebKit?'-webkit-border-radius: 0;'
:'')
+'margin-right:-1px;border-radius: 0;}'
,'.b-ubutton--icon-only {padding:2px;}'
,'.b-ubutton--icon-only .b-ubutton-text {display:none;}'
,'.b-ubutton-icon {display:none;}'
,'.b-ubutton--icon .b-ubutton-icon {overflow:hidden;display:inline-block;height:20px;margin-left:auto;overflow:hidden;vertical-align:middle;width:20px;}'
,'.b-ubutton-text {font-size:82.5%;vertical-align:middle;display:inline-block;line-height:20px;}'
,'.b-ubutton--icon .b-ubutton-text {margin-left:1ex;padding-right:3px;}'
,'.b-ubutton--icon-right .b-ubutton-text {margin-left:0;margin-right:3px;padding-right:0;}'
,'.b-ubutton:hover {border-color:#777;position:relative;}'
,'.b-ubutton:focus {position:relative;}'
,'.b-ubutton--no_disabled:active, .b-ubutton--active {cursor:pointer;outline:0px solid;border-color:#555;'
+(rr.Gecko?'-moz-box-shadow:inset 0 1px 4px #999;background-image:-moz-linear-gradient(top, rgba(0,0,0,0.1), rgba(255,255,255,0));'
:rr.WebKit?'-webkit-box-shadow:inset 0 1px 4px #999;background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.1)), to(rgba(255,255,255,0)));'
:(rr.Opera||rr.IE)?'background-position:0;background-repeat:repeat-x;background-repeat:repeat-x;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAhCAYAAAARUmHFAAAAPElEQVQokWNkYGCQYEADLOzs7P8wBDk4ONDFcAhSqJ2Dg+MPNjOJ106k7RSaSU8nYQYISdFBCycNXAoBAPv/DWfGtM53AAAAAElFTkSuQmCC);'
:'')
+'box-shadow:inset 0 0 4px #999;}'
,(rr.Gecko||rr.WebKit)&&'.b-ubutton--no_disabled:active .b-ubutton-text, .b-ubutton--active .b-ubutton-text {margin-bottom:-1px;margin-top:1px;}'
,(rr.Gecko||rr.WebKit)&&'.b-ubutton--no_disabled:active .b-ubutton-icon, .b-ubutton--active .b-ubutton-icon {margin-bottom:-1px;margin-top:1px;}'
,'.b-ubutton--disabled, .b-ubutton--disabled:hover {color:#777;border-color:#999;cursor:default;}'
,'.b-ubutton--disabled:hover .b-ubutton-text {color:#777;}'
);
rr.styles('tmpl:uInput'
,'.b-uinput {position:relative;width:17em;vertical-align:middle;border:1px solid #999;background-color:#fff;cursor:text;display:inline-block;font-size:80%;margin-right:3px;padding:1px 2px;'
+(rr.Gecko?'background-image:-moz-linear-gradient(top, rgba(255,255,255,0.6), rgba(255,255,255,0));'
:rr.WebKit?'padding:1px 2px;background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.4)), to(rgba(255,255,255,0)));'
:rr.IE<9?'filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#FFFFFFFF, endColorstr=#22FFFFFF);'
:(rr.Opera||rr.IE==9)?'background-position:0;background-repeat:repeat-x;background-repeat:repeat-x;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAhCAYAAAARUmHFAAAALElEQVQokWP8////TAY0wMLAwPALm+AfylT+xCb4j162Ey84pG2nW3gOnO0AZeAjgXbrRFMAAAAASUVORK5CYII=);'
:'')
+'}'
,'.b-uinput--g_left {margin-right:-1px;border-top-right-radius: 0;border-bottom-right-radius: 0;'
+(rr.Gecko?'-moz-border-radius-topright: 0;-moz-border-radius-bottomright: 0;'
:rr.WebKit?'-webkit-border-top-right-radius: 0;-webkit-border-bottom-right-radius: 0;'
:'')
+'}'
,'.b-uinput--g_right {border-top-left-radius: 0;border-bottom-left-radius: 0;'
+(rr.Gecko?'-moz-border-radius-topleft: 0;-moz-border-radius-bottomleft: 0;'
:rr.WebKit?'-webkit-border-top-left-radius: 0;-webkit-border-bottom-left-radius: 0;'
:'')
+'}'
,'.b-uinput--g_center {margin-right:-1px;border-radius: 0;'
+(rr.Gecko?'-moz-border-radius:0;'
:rr.WebKit?'-webkit-border-radius: 0;'
:'')
+'}'
,'.b-uinput-cap {background-color:#FFFFFF;border:1px solid #fff;display:block;overflow:hidden;padding:0 1px 0 0.5ex;}'
,'.b-uinput-inp {width:100%;text-align:left;background-color:#FFFFFF;border:0px solid;min-height:18px;height:1em;_height:16px;padding:1px 1px 1px 0.5ex;margin:0 0 0 -0.5ex;vertical-align:middle;}'
,(rr.Gecko||rr.Safari)&&'.b-uinput-inp {min-height:20px;height:1.5em;}'
,'.b-uinput--search_text {width:34%;}'
,'.b-uinput-help_text {color:#777777;font-family:\'Lucida Grande CY\',Arial,sans-serif;margin:-0.6em 0 0 1.5ex;position:absolute;top:50%;}'
,'.b-uinput-help_text--hide {display:none;}'
,'.b-uinput-clear {display:none;background-color:#FF0000;cursor:pointer;height:20px;margin-top:-10px;position:absolute;right:3px;top:50%;width:20px;}'
,'.b-uinput-clear--active {display:block;}'
);
rr.ns('tmpl');
tmpl.uToolbar=function(pr,_){
var ns=this,u;
ns.node=_('div.b-utoolbar'
,ns.box=_('div.b-utoolbar-left')
,ns.right=(pr.right||pr.right===0?_('div.b-utoolbar-right',pr.right):u))};
tmpl.uButton=function(pr,_){
var ns=this,gn='';
ns.s_active='b-ubutton--active';
ns.s_disabled='b-ubutton--disabled';
ns.s_disabled_no='b-ubutton--no_disabled';
ns.s_disabled_icon='disabled';
switch(pr.group){
case'center':gn=' b-ubutton--g_center';break;
case'left':gn=' b-ubutton--g_left';break;
case'right':gn=' b-ubutton--g_right';break;
case'new':gn=' b-ubutton--g_new';break;
};
ns.icon=_('span.b-ubutton-icon'+(pr.css?' '+pr.css+'-icon':''),{className:pr.css_icon||pr.css_ico});
ns.node=ns.button=_((rr.IE<7?'a':'button'),
{
type:'button',
style:pr.style,
className:'b-ubutton b-ubutton--no_disabled'+gn
+(pr.icon==='right'?' b-ubutton--icon b-ubutton--icon-right'
:pr.icon=='only'?' b-ubutton--icon b-ubutton--icon-only'
:pr.icon?' b-ubutton--icon'
:'')
+(pr.first==='left'?' b-ubutton--firstLeft':pr.first==='right'?' b-ubutton--firstRight':pr.first?' b-ubutton--first':'')
+(pr.css?' '+pr.css:''),
tabIndex:pr.tabIndex||1,
title:pr.title===0?0:pr.title||''
},
pr.icon!='right'&&ns.icon,
_('span.b-ubutton-text',
ns.text=_.text(pr.text)),
pr.icon=='right'&&ns.icon
);
if(rr.Opera){
ns.node.addEventListener('mousedown',rr.breakEvent_,false);
ns.node.addEventListener('dblclick',rr.breakEvent_,false);
ns.node.addEventListener('mouseup',ns.node.focus,false)}};
tmpl.uInput=function(pr,_){
var ns=this,gn='',u;
ns.sg_center='b-uinput--g_center';
ns.sg_left='b-uinput--g_left';
ns.sg_right='b-uinput--g_right';
ns.sg_new='b-uinput--g_new';
switch(pr.group){
case'center':gn=' b-uinput--g_center';break;
case'left':gn=' b-uinput--g_left';break;
case'right':gn=' b-uinput--g_right';break;
case'new':gn=' b-uinput--g_new';break;
};
ns.node=_('label.b-uinput'+gn
,{
className:pr.css
}
,ns.help_text_wr=_('span.b-uinput-help_text b-uinput-help_text--hide'
,ns.help_text=_.text(pr.help||""))
,_('span.b-uinput-cap'
,ns.input=_('input.b-uinput-inp'
,{
tabIndex:pr.tabIndex||1,
type:'text',
value:pr.value||(pr.value!==0?'':0)}))
,_('span.b-uinput-clear'))};
tmpl.uInputSelect=function(pr,_){
var ns=this;
ns.node=_('span.b-tbar-select',
{
className:(pr.group=='center'||pr.group=='left'||pr.group=='right'||pr.group=='new'?'b-uinput--g_'+pr.group:'')
+(pr.ico?' b-uinput--'+pr.ico:'')},
_('label.b-tbar-select-ip',
ns.input=_('input.b-uinput-inp',
{
tabIndex:pr.tabIndex||1,
type:'text',
value:pr.value||(pr.value!==0?'':0)})),
_('span.b-tbar-select-bt',
ns.icon=_('span.b-ubutton-ico'+(pr.ico?' b-ubutton-ico--'+pr.ico:'')),
_('span.b-tbar-select-text',
ns.text=_.text(pr.text))))};


/* url: /js/m2/tmpl/tmpl_pages.src.js */

rr.styles('tmpl:nToolbar'
,'.b-frame_wrapper {overflow:hidden;}'
,'.b-frame_body {margin:10px 0 10px 10px;z-index:1;position:relative;}'
,'.b-frame_box {margin-left:260px;}'
,'.b-frame_pleft {margin-left:0;position:absolute;width:255px;z-index:1;left:0;}'
,'.b-frame_sidebar-box {}'
,'.b-frame_footer {}'
,'.b-page {border-left:1px solid #CCCCCC;}'
,'.b-page-head {font-size:18px;color:#444444;padding:0 15px;margin-bottom:10px;}'
,'.b-page-capion {margin-top:10px;padding:0 15px;min-height:300px;}'
,'.b-page-top {padding:3px 15px 8px;background-image:url("/i/chameleon/ramail-mask.png");background-position:0 100%;border-bottom:1px solid #989898;}'
,'.b-page-body {padding:0 15px;}'
,'.b-page-bottom {padding:8px 15px 0;background-image:url("/i/chameleon/ramail-mask.png");background-position:0 0;border-top:1px solid #989898;}'
);
tmpl.mainframe=function(pr,_){
var ns=this;
_('body'
,_('div.b-frame_wrapper'
,_('tmpl:rm_Topline')
,_('tmpl:rm_Topmenu')
,_('div.b-frame_body'
,rr.IE<7&&_('div',{style:'float:left;height:0;overflow:hidden;font-size:0;'})
,ns.pleft=_('div.b-frame_pleft'
,ns.sidebar_box=_('div.b-frame_sidebar-box'
))
,ns.box=_('div.b-frame_box'))
,_('DIV.b-frame_footer b_footer#footer'
,_('DL'
,_('DT.footer-left'
,_('SPAN'
,_('A',{href:"http://www.rambler.ru/click?from=mail&reqid=429B08F34BE70009&block=footer&link=advert&_URL=http://www.rambler.ru/doc/advert/"}
,"\u0420\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0440\u0435\u043A\u043B\u0430\u043C\u0443"
))
,_('SPAN'
,_('A',{href:"http://www.rambler.ru/click?from=mail&reqid=429B08F34BE70009&block=footer&link=feedback&_URL=http://help.rambler.ru/feedback.html?s=103"}
,"\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C"
)))
,_('DT.footer-right'
,_('SPAN'
,"\xA9 1996\u20132010, \u041E\u041E\u041E \xAB"
,_('A',{href:"http://www.rambler.ru/click?from=mail&reqid=429B08F34BE70009&block=footer&link=about&_URL=http://www.rambler.ru/doc/about.shtml"}
,"\u0420\u0430\u043C\u0431\u043B\u0435\u0440 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0425\u043E\u043B\u0434\u0438\u043D\u0433"
)
,"\xBB"
))))));
ns.def_sidebar=ns.sidebar;
};
tmpl.wrapper_page=function(pr,_){
var ns=this,x;
ns.node=_('div.b-page'+(pr.name?' b-pg_'+pr.name:''),{css:pr.css}
,_('div.b-page-head'
,_('span.b-page-title',pr.title))
,ns.box_top=pr.top?_('div.b-page-top',false,pr.top):false
,ns.box=_('div.b-page-capion',{css:pr.css_capion})
,ns.box_bottom=pr.bottom?_('div.b-page-bottom',false,pr.bottom):false
);
if(x=pr.extend){
x.node=ns.node;
x.box_top=ns.box_top||false;
x.box_bottom=ns.box_bottom||false;
}};
tmpl.pg_default=function(pr,_){
var ns=this;
_('body',
_('tmpl:rm_header'),
_('tmpl:rm_topmenu'),
ns.box=_('div.b-body',{style:'margin-left:240px;'}),
ns.pleft=_('div.b-pleft'))};
tmpl.pg_mailbox=function(pr,_){
var xn=200,list=[],i,x,v,k;
for(i=0;x=rm.mailbox_messages[i];i++){
v=new Date(x.idatetime*1000);
list[i]={
id:x.uid,
mailbox:rm.mailbox_name,
selected:false,
unread:!x.flags_seen,
flag:!!x.flags_flagged,
attach:x.has_files?rr.printx("%s files",x.has_files):null,
from:x.from,
from_email:x.address_from,
subj:x.subject,
date:x.idate_full,
date_compact:v.getUTCDate()+" "+rv.month_small[v.getUTCMonth()]+" "+v.getUTCFullYear(),
q:0
}};
k=i;
for(;x=rm.mailbox_messages[i-k];i++){
v=new Date(x.idatetime*1000);
list[i]={
id:x.uid,
mailbox:rm.mailbox_name,
selected:false,
unread:!x.flags_seen,
flag:!!x.flags_flagged,
attach:x.has_files?rr.printx("%s files",x.has_files):null,
from:x.from,
from_email:x.address_from,
subj:x.subject,
date:x.idate_full,
date_compact:v.getUTCDate()+" "+rv.month_small[v.getUTCMonth()]+" "+v.getUTCFullYear(),
q:0
}};
xn=list.length;
if(xn<7)xn=7;
_('body',
_('tmpl:head'),
_('div.b-body',
pn.body_sidebar=_('div.b-body-left',
_(':rm_folders')),
pn.body_box=_('div.b-body-box',
pn.page=_('tmpl:rm_mailbox',{
list:list,
length:Math.min(xn,rr.IE?32:rr.Gecko?50:100)}))),
_('div.b-footer'));
function addx(x){
if(pn.page.mbox.length<x){
setTimeout(function(){
var l=pn.page.mbox.length;
if(l<x){
l+=48;
if(l>x||(x-l<16))l=x;
pn.page.mbox.set('length',l);
if(l<x)addx(x)}},10)}};
addx(xn)};
tmpl.pg_history=function(pr,_){
var mh=pj.mng_history,ct=mh.contact||false
,box=rr.$('contacts-holder')
,is_history=mh.days_list&&mh.days_list.length;
_(box,
_('tmpl:contact_wrapper',
_('tmpl:contact_view',{
name:ct.fname?(ct.lname?ct.fname+" "+ct.lname:ct.fname):ct.lname||ct.email,
email:ct.email,
avatar_img:"",
nochat:ct.nochat,
avatar_img:ct.avatar,
info:ct.info
})),
is_history&&_('ui:chat_history',{
contact:ct.email,
list:pj.mng_history.days_list
}))};
tmpl.pg_history_compact=function(pr,_){
var ct=pj.mng_history.contact||false;
_('body',
_('ui:chat_history',{
contact:ct.email,
list:pj.mng_history.days_list
}))};


/* url: /js/m2/tmpl/tmpl_topline.src.js */

tmpl.rm_Topline=function(pr,_){
var ns=this;
ns.node=_('DIV.b_header#header'
,_('DIV.r-topline b_topline#topline'
,_('DIV.r-topline_profile_wrapper#topline-useractions-select'
,_('DL.r-topline_profile'
,_('DT.r-topline_profile_list'
,_('ui:rm_menu'
,{
css_open:'r-topline_link--open',
position:'bottom right',
open:'auto',
node:_('A.r-topline_profile_link r-topline_profile_dropdown-link#topline-useractions-dropdown',{href:"https://id.rambler.ru/?back=http://m11.mail-test.rambler.ru/"}
,_('U',_('STRONG',"flash-vkv"))
,_('B',"\u25BC"))}
,_('DIV.r-topline_profile_dropdown_',{style:'white-space:nowrap;background:-moz-linear-gradient(center top , #FFFFFF, #F2F8FC) repeat scroll 0 0 transparent;'}
,_('DIV.r-topline_profile_dropdown_header'
,_('DL.r-topline_profile_dropdown_body'
,_('DT.r-topline_profile_dropdown_list'
,_('A.r-topline_profile_dropdown_link',{href:'https://id.rambler.ru/script/settings.cgi',title:"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438"}
,"\u041C\u043E\u044F \u0443\u0447\u0435\u0442\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C"
))
,_('DT.r-topline_profile_dropdown_list'
,_('A.r-topline_profile_dropdown_link',{href:'http://id-planet.rambler.ru/mail/avatar/',title:"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0430\u0432\u0430\u0442\u0430\u0440\u0430\u043C\u0438"}
,"\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0440\u0442\u0440\u0435\u0442"
))
,_('DT.r-topline_profile_dropdown_list'
,_('A.r-topline_profile_dropdown_link',{href:'https://id.rambler.ru/script/chpass.cgi',title:"\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C"}
,"\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C"
))))
,_('DIV.r-topline_profile_dropdown_footer'
,_('STRONG'
,"\u041C\u043E\u0439 e-mail:"
)
,_('BR')
,_('SPAN'
,"flash-vkv@rambler.ru"
)))))
,_('DT.r-topline_profile_list'
,_('A.r-topline_profile_link r-topline_servicelink',{href:'#/settings'}
,"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
))
,_('DT.r-topline_profile_list'
,_('A.r-topline_profile_link r-topline_servicelink',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline&link=help&_URL=http://help.rambler.ru/project.html?s=103',title:"\u0421\u043F\u0440\u0430\u0432\u043A\u0430 \u043F\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0443 (\u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0432 \u043D\u043E\u0432\u043E\u043C \u043E\u043A\u043D\u0435)"}
,"\u041F\u043E\u043C\u043E\u0449\u044C"
))
,_('DT.r-topline_profile_list'
,_('A.r-topline_profile_link',{href:'http://mail.rambler.ru/mail/mail.cgi?mode=logout;r=d7db;request_key=a673ffb7588e92cbe11b62d9c3496474'}
,"\u0412\u044B\u0439\u0442\u0438"
))))
,_('DIV.r-topline_projects_wrapper#topline-projects-select'
,_('DL.r-topline_projects'
,_('DT.r-topline_project_list'
,_('A.r-topline_project_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline&link=main&_URL=http://rambler.ru/'}
,"\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
))
,_('DT.r-topline_project_list'
,_('A.r-topline_project_link r-topline_project_current',{href:'http://m11.mail-test.rambler.ru/'}
,_('STRONG'
,"\u041F\u043E\u0447\u0442\u0430"
)))
,_('DT.r-topline_project_list'
,_('A.r-topline_project_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline&link=news&_URL=http://news.rambler.ru/'}
,"\u041D\u043E\u0432\u043E\u0441\u0442\u0438"
))
,_('DT.r-topline_project_list'
,_('A.r-topline_project_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline&link=games&_URL=http://games.rambler.ru/'}
,"\u0418\u0433\u0440\u044B"
))
,_('DT.r-topline_project_list'
,_('A.r-topline_project_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline&link=love&_URL=http://love.rambler.ru/'}
,"\u0417\u043D\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u0430"
))
,_('DT.r-topline_project_list'
,_('A.r-topline_project_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline&link=horoscopes&_URL=http://horoscopes.rambler.ru/'}
,"\u0413\u043E\u0440\u043E\u0441\u043A\u043E\u043F"
))
,_('DT.r-topline_project_list'
,_('A.r-topline_project_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline&link=weather&_URL=http://weather.rambler.ru/'}
,"\u041F\u043E\u0433\u043E\u0434\u0430"
))
,_('DT.r-topline_project_list'
,_('ui:rm_menu'
,{
css_open:'r-topline_link--open',
position:'center',
auto:true,
node:_('A.r-topline_project_link r-topline_project_dropdown-link#topline-projects-dropdown',{href:"http://www.rambler.ru/click?from=mail&reqid=429BC8512CCD0000&block=topline&link=all&_URL=http://rambler.ru/all.shtml"}
,_('U',"\u0435\u0449\u0451")
,_('B',"\u25BC"))}
,_('tmpl:rm_Topline_projects')))))))};
tmpl.rm_Topline_projects=function(pr,_){
var ns=this;
ns.node=_('DIV.r-topline_projects_dropdown_',{style:"width:395px;"}
,_('DIV.r-topline_projects_dropdown_header'
,_('DL.r-topline_projects_dropdown_body r-topline_projects_dropdown_left'
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=search&_URL=http://rambler.ru/'}
,"\u041F\u043E\u0438\u0441\u043A"
))
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=top100&_URL=http://top100.rambler.ru'}
,"\u0422\u041E\u041F100"
))
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=price&_URL=http://price.rambler.ru/'}
,"\u0422\u043E\u0432\u0430\u0440\u044B"
))
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=dict&_URL=http://dict.rambler.ru/'}
,"\u0421\u043B\u043E\u0432\u0430\u0440\u0438"
))
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=images&_URL=http://images.rambler.ru/'}
,"\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0438"
))
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=maps&_URL=http://maps.rambler.ru/'}
,"\u041A\u0430\u0440\u0442\u044B"
))
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=vision&_URL=http://vision.rambler.ru/'}
,"\u0412\u0438\u0434\u0435\u043E"
))
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=news&_URL=http://news.rambler.ru'}
,"\u041D\u043E\u0432\u043E\u0441\u0442\u0438"
)
,_('A.r-topline_project_mobile_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=news-mobile&_URL=http://m.rambler.ru/news/',title:"\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430"})))
,_('DL.r-topline_projects_dropdown_body r-topline_projects_dropdown_center'
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=orsn&_URL=http://orsn.rambler.ru/'}
,"\u041D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u044C"
))
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=sport&_URL=http://sport.rambler.ru/'}
,"\u0421\u043F\u043E\u0440\u0442"
))
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=finance&_URL=http://finance.rambler.ru/'}
,"\u0424\u0438\u043D\u0430\u043D\u0441\u044B"
))
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=afisha&_URL=http://afisha.ru/'}
,"\u0410\u0444\u0438\u0448\u0430"
))
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=eda&_URL=http://eda.afisha.ru/'}
,"\u0410\u0444\u0438\u0448\u0430-\u0415\u0434\u0430"
))
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=autorambler&_URL=http://autorambler.ru/'}
,"\u0410\u0432\u0442\u043E\u0440\u0430\u043C\u0431\u043B\u0435\u0440"
)
,_('A.r-topline_project_mobile_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=autorambler-mobile&_URL=http://m.rambler.ru/auto/',title:"\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430"}))
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=ferra&_URL=http://ferra.ru/'}
,"Ferra.ru"
))
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=lenta&_URL=http://lenta.ru/'}
,"Lenta.ru"
)))
,_('DL.r-topline_projects_dropdown_body r-topline_projects_dropdown_right'
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link r-topline_project_current',{href:'http://mail.rambler.ru/'}
,_('STRONG'
,"\u041F\u043E\u0447\u0442\u0430"
))
,_('A.r-topline_project_mobile_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=mail-mobile&_URL=http://mail-pda.rambler.ru/',title:"\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430"}))
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=love&_URL=http://love.rambler.ru/'}
,"\u0417\u043D\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u0430"
)
,_('A.r-topline_project_mobile_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=love-mobile&_URL=http://wap-love.rambler.ru/',title:"\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430"}))
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=games&_URL=http://games.rambler.ru/'}
,"\u0418\u0433\u0440\u044B"
))
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=horoscopes&_URL=http://horoscopes.rambler.ru/'}
,"\u0413\u043E\u0440\u043E\u0441\u043A\u043E\u043F\u044B"
)
,_('A.r-topline_project_mobile_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=horoscopes-mobile&_URL=http://m.rambler.ru/horoscopes/',title:"\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430"}))
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=weather&_URL=http://weather.rambler.ru/'}
,"\u041F\u043E\u0433\u043E\u0434\u0430"
)
,_('A.r-topline_project_mobile_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=weather-mobile&_URL=http://m.rambler.ru/weather/',title:"\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430"}))
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=plus&_URL=http://plus.rambler.ru/'}
,"\u0414\u0435\u043D\u044C\u0433\u0438"
))
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=icq&_URL=http://icq.rambler.ru/'}
,"ICQ"
))
,_('DD.r-topline_projects_dropdown_list'
,_('A.r-topline_project_dropdown_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=virtus&_URL=http://virtus.rambler.ru/'}
,"Virtus"
))))
,_('DIV.r-topline_projects_dropdown_footer'
,_('DIV.r-topline_projects_dropdown_all_projects'
,_('A.r-topline_projects_dropdown_link_all',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=all&_URL=http://rambler.ru/all.shtml'}
,"\u0412\u0441\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044B"
))
,_('A.r-topline_projects_dropdown_m_link',{href:'http://www.rambler.ru/click?from=mail&reqid=DF0D4CA672B82DC2&block=topline-dropdown&link=mobile&_URL=http://m.rambler.ru/'}
,_('STRONG'
,"m.rambler.ru"
))
,"(\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F)"
))}


/* url: /js/m2/tmpl/tmpl_topmenu.src.js */

tmpl.rm_Topmenu=function(pr,_){
var ns=this;
ns.node=_('DIV.topmenu b_topmenu#topmenu'
,_('H1'
,_('A#ramail-logo',{href:"#/startpage",title:"\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443"}
,_('SPAN.ramail-envelope')
,_('SPAN.ramail-title'
,"Rambler-\u043F\u043E\u0447\u0442\u0430"
)))
,_('DIV.b_topmenu-avatar#topmenu-avatar'
,_('SPAN.avatar-bg')
,_('A.c_topmenu-avatar',{href:"http://id-planet.rambler.ru/common/avatars.html",style:"background-image: url(\x22http://avatars.rambler.ru/small/flash-vkv\x22);"}
,_('IMG.is-avatar loaded',{title:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0430\u0432\u0430\u0442\u0430\u0440",src:"http://avatars.rambler.ru/small/flash-vkv",width:50,height:50,style:"height: auto; width: auto;"})
,_('SPAN.dummy',{title:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0430\u0432\u0430\u0442\u0430\u0440"})))
,_('DL.topmenu-container'
,_('DT#topmenu-compose'
,_('SPAN.tab')
,_('A.iii c_topmenu-compose#content',{href:"#/compose",title:"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u0438\u0441\u044C\u043C\u0430"}
,"\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E"
))
,ns.xxx=_('DT.topmenu-all-folders#topmenu-all-folders'
,_('SPAN.tab')
,_('SPAN.unseen-counter inmenu',{style:"display: none;"}
,_('A.c_topmenu-unseen',{href:"#/inbox:unseen",title:"\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043F\u043E\u0447\u0442\u0443 \u0438 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0435\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u0432 \u043F\u0430\u043F\u043A\u0435 \xAB\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435\xBB"}
,_('STRONG#topmenu-counter-inbox'
,"0"
)))
,_('A.iii c_topmenu-checkmail#checkmail-link',{href:"#/inbox",title:"\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043F\u043E\u0447\u0442\u0443 \u0438 \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043F\u0430\u043F\u043A\u0443 \xAB\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435\xBB"}
,"\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043F\u043E\u0447\u0442\u0443"
)
,_('ui:rm_menu'
,{
css:'rm-menu_top',
css_open:'x-topmenu--open',
position:'bottom right',
open:'auto',
node:_('A#topmenu-dropdown',{title:"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u0430\u043F\u043E\u043A"}
,_('IMG',{src:"http://qa.mail-test.rambler.ru/m/2k/i/chameleon/_.png",width:16,height:16}))}
,_('div',{style:'padding:3px;width:15em;'}
,ns.folders=_('tmpl:wg_folders')))
,_('DIV.b_topmenu-popup#topmenu-popup'
,_('DL.yourmail'
,_.forEach(null,function(){
return _('DD'
,_('SPAN.mbx-counter unseen-counter',{style:"display: none;"}
,_('A',{href:"http://qa.mail-test.rambler.ru/mail/mailbox.cgi?mbox=INBOX&d7db;page=1;search=;filter=unseen",title:"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0435\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u0432 \u043F\u0430\u043F\u043A\u0435 \xAB\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435\xBB"}
,_('STRONG'
,"0"
)))
,_('A.mbx-name c_topmenu-folder drop',{href:"http://qa.mail-test.rambler.ru/mail/mailbox.cgi?mbox=INBOX&d7db",title:"\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435: 355 \u043F\u0438\u0441\u0435\u043C"}
,"\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435"
))})
,_('DD.mailboxes-link'
,_('A.mbx-name c_topmenu-all-folders',{href:"http://qa.mail-test.rambler.ru/mail/mailboxes.cgi?r=d7db",title:"\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0441\u043F\u0438\u0441\u043A\u0443 \u043F\u0430\u043F\u043E\u043A"}
,"\u0412\u0441\u0435 \u043F\u0430\u043F\u043A\u0438"
)))))
,_('DT#topmenu-abook'
,_('SPAN.tab')
,_('A.iii c_topmenu-abook#addressbook-link',{href:"#/contacts",title:"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0435 \u0430\u0434\u0440\u0435\u0441\u0430"}
,"\u0410\u0434\u0440\u0435\u0441\u043D\u0430\u044F \u043A\u043D\u0438\u0433\u0430"
))))};


/* url: /js/m2/tmpl/tmpl_folders.src.js */

rr.styles('tmpl:folders'
,'.b-wg_folders {}'
,'.b-wg_folders-item {text-decoration:none;color:#575757;white-space:nowrap;line-height:2em;margin:2px 0;padding:0;display:block;}'
,'.b-wg_folders-item:hover, .b-wg_folders-item:focus {text-decoration:none;cursor:pointer;}'
,'.b-wg_folders-b {padding-left:1ex;display:block;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;}'
,'.b-wg_folders-link {color:#575757;padding:0;}'
,'.b-wg_folders-item:hover .b-wg_folders-link {text-decoration:underline;}'
,'.b-wg_folders-info {float:right;overflow:hidden;padding-left:1ex;}'
,rr.IE<7&&'.b-wg_folders-unseen, .b-wg_folders-all {_display:inline-block;}'
,'.b-wg_folders-unseen {text-decoration:none;font-size:0.8em;line-height:2ex;cursor:pointer;color:#f00;background-color:#FFFFD6;border:1px solid #F8CAA3;vertical-align:middle;padding:0 1ex;margin:0 1px;}'
,'.b-wg_folders-unseen:hover {border-color:#EF9E68;}'
,'.b-wg_folders-unseen--null {display:none;}'
,'.b-wg_folders-all {font-size:0.8em;line-height:2ex;vertical-align:middle;padding:0 0.5ex;margin:0 1px;}'
,'.b-wg_folders-u {margin-top:1em;}'
,'.b-wg_folders-o {margin-top:1ex;}'
,'.b-wg_folders-o a {margin-left:1ex;}'
,'.b-wg_folders-item:hover .b-wg_folders-b {background-color:#C7DFEE;}'
,'.b-wg_folders-item:hover .b-wg_folders-info {background-color:#C7DFEE;}'
,'.b-wg_folders-item--active .b-wg_folders-b {background-color:#C7DFEE;}'
,'.b-wg_folders-item--active .b-wg_folders-info {background-color:#C7DFEE;}'
)
tmpl.wg_folders=function(pr,_){
var ns=this,user=ramail.data_user;
ns.node=_('div.b-wg_folders'
,ns.box_s=_('div.b-wg_folders-s'
,_('tmpl:wg_folders_item',{
href:'#/INBOX',
active:pr.active_folder=='INBOX',
data:ramail.get_folder('INBOX')})
,_('tmpl:wg_folders_item',{
href:'#/SentBox',
active:pr.active_folder=='SentBox',
data:ramail.get_folder('SentBox')})
,_('tmpl:wg_folders_item',{
href:'#/DraftBox',
active:pr.active_folder=='DraftBox',
data:ramail.get_folder('DraftBox')})
,_('tmpl:wg_folders_item',{
href:'#/Trash',
active:pr.active_folder=='Trash',
data:ramail.get_folder('Trash')}))
,ns.box_u=_('div.b-wg_folders-u'
,_.forEach(ramail.data_folders,function(x){
if(/^~[^\/]+\/(INBOX|SentBox|DraftBox|Trash)$/.test(x.folder)){
return false;
};
return _('tmpl:wg_folders_item',{
active:('~'+user+'/'+pr.active_folder)==x.folder,
data:x
})})))};
tmpl.wg_folders_item=function(pr,_){
var ns=this
,data=pr.data
,name=data.folder.match(/^~[^\/]+\/(.*)/)[1]
,text,href,href_unseen,u
;
switch(name){
case'INBOX':
text="\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435";
href='#/inbox';
href_unseen='#/inbox:unseen';
break;
case'SentBox':
text="\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435";
href='#/sent';
href_unseen='#/sent:unseen';
break;
case'DraftBox':
text="\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A\u0438";
href='#/drafts';
href_unseen='#/drafts:unseen';
break;
case'Trash':
text="\u041A\u043E\u0440\u0437\u0438\u043D\u0430";
href='#/trash';
href_unseen='#/trash:unseen';
break;
default:
text=name;
href='#/box/'+encodeURIComponent(name);
href_unseen='#/box:unseen/'+encodeURIComponent(name)};
ns.node=_('a.b-wg_folders-item'+(pr.active?' b-wg_folders-item--active':'')
,{
title:rr.printx(data.messages>0?["%s : %s \u043F\u0438\u0441\u044C\u043C\u043E","%s : %s \u043F\u0438\u0441\u044C\u043C\u0430","%s : %s \u043F\u0438\u0441\u0435\u043C"][rv.number(data.messages)]:"%s : \u043D\u0435\u0442 \u043F\u0438\u0441\u0435\u043C"
,text
,data.messages
),
href:href
},
_('span.b-wg_folders-info',
ns.unseen_link=_('a.b-wg_folders-unseen'+(data.unseen>0?'':' b-wg_folders-unseen--null')
,{
title:rr.printx("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0435\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u0432 \u043F\u0430\u043F\u043A\u0435 \xAB%s\xBB",text),
href:href_unseen
}
,ns.unseen_text=_.text(data.unseen||"0")),
ns.all_link=_('span.b-wg_folders-all',
ns.all_text=_.text(data.messages||"0"))),
_('span.b-wg_folders-b',
ns.link=_('span.b-wg_folders-link',
ns.text=_.text(text||" "))))};


/* url: /js/m2/tmpl/tmpl_compose_editor.src.js */

rr.styles('wysiwyg_frame:rm_tinymce'
,'body {padding:0 0 0 3px;margin:0;background-color:#FFF;}'
,'body, td, pre {font-family:arial,sans-serif !important;font-size:10pt;}'
,'p {margin:0pt;}'
,'blockquote {border-left:1px solid #BBB;margin:1ex;padding-left:1ex}'
,'a {color:#0000EE !important;}'
,'body {margin:4px 0px}'
,'.tr-field {font:normal small arial}'
,'img {-moz-force-broken-image-icon: 1;}'
,'.mceItemTable, .mceItemTable td, .mceItemTable th, .mceItemTable caption, .mceVisualAid {border: 1px dashed #BBB;}'
,'a.mceItemAnchor {width:12px; line-height:6px; overflow:hidden; padding-left:12px;}'
,'img.mceItemAnchor {width:12px; height:12px;}'
,'.fontSize1 {font-size:7pt !important;}'
,'.fontSize2 {font-size:8pt !important;}'
,'.fontSize3 {font-size:10pt !important;}'
,'.fontSize4 {font-size:12pt !important;}'
,'.fontSize5 {font-size:14pt !important;}'
,'.fontSize6 {font-size:18pt !important;}'
,'.fontSize7 {font-size:24pt !important;}'
,'font[size="1"] {font-size:7pt !important;}'
,'font[size="2"] {font-size:8pt !important;}'
,'font[size="3"] {font-size:10pt !important;}'
,'font[size="4"] {font-size:12pt !important;}'
,'font[size="5"] {font-size:14pt !important;}'
,'font[size="6"] {font-size:18pt !important;}'
,'font[size="7"] {font-size:24pt !important;}'
,'blockquote span.quote {color: #f00;}'
,'.mceItemHiddenSpellWord {background:url("+(window._static_host||\'\')+"/i/chameleon/misspell.png) repeat-x bottom left; cursor:default;}'
);
rr.styles('tmpl:tinymce_tmpl.theme_ramail'
,'.b-wsgRamail table, .b-wsgRamail tbody, .b-wsgRamail a, .b-wsgRamail img, .b-wsgRamail tr, .b-wsgRamail td, .b-wsgRamail iframe, .b-wsgRamail span {border:0; margin:0; padding:0; background:transparent; white-space:nowrap; text-decoration:none; font-weight:normal;color:#000}'
,'.b-wsgRamail iframe {display:block; background:#FFF; border-bottom:1px solid #CCC;}'
,'.b-wsgRamail span.mceIcon, .b-wsgRamail img.mceIcon {display:block; width:20px; height:20px}'
,'.b-wsgRamail .mceIcon {background:url($static_host|$/i/chameleon/ramail-icons.png) no-repeat 20px 20px}'
,'.b-wsgRamail .mceButton {display:block; border:1px solid #FFF; background-color:#FFF;width:20px; height:20px;}'
,'.b-wsgRamail a.mceButtonEnabled:hover {border:1px solid;border-color:#9EBDD6 #D2E4F1 #DBECF6;}'
,'.b-wsgRamail a.mceButtonActive {border:1px solid;border-color:#989898 #CBCBCB #CBCBCB;}'
,'.b-wsgRamail .mceButtonDisabled span {opacity:0.3; -ms-filter:\'alpha(opacity=30)\'; filter:alpha(opacity=30)}'
,'.b-wsgRamail .mceSeparator {display:block; border-left:1px solid #E0E0E0; width:2px; height:16px; margin:0 3px 0 1px;}'
,'.b-wsgRamail  .mceListBox, .b-wsgRamail .mceListBox a {display:block}'
,'.b-wsgRamail  .mceListBox .mceText {padding-left:4px; width:70px; text-align:left; border:1px solid #CCC; border-right:0; background:#FFF; font-family:Tahoma,Verdana,Arial,Helvetica; font-size:11px; height:20px; line-height:20px; overflow:hidden}'
,'.b-wsgRamail  .mceListBox .mceOpen {width:10px; height:20px; background:url($static_host|$/i/chameleon/ramail-icons.png) -10px -1594px; margin-right:2px; border:1px solid #CCC;border-left:0 none;}'
,'.b-wsgRamail  table.mceListBoxEnabled:hover .mceText, .b-wsgRamail .mceListBoxHover .mceText, .b-wsgRamail .mceListBoxSelected .mceText {border:1px solid #A2ABC0; border-right:0; background:#FFF}'
,'.b-wsgRamail  table.mceListBoxEnabled:hover .mceOpen, .b-wsgRamail .mceListBoxHover .mceOpen, .b-wsgRamail .mceListBoxSelected .mceOpen {background-color:#FFF; border:1px solid #A2ABC0;border-left:0 none;}'
,'.b-wsgRamail  .mceListBoxDisabled a.mceText {color:gray; background-color:transparent;}'
,'.b-wsgRamail  .mceListBoxMenu {overflow:auto; overflow-x:hidden}'
,'.b-wsgRamail  .mceOldBoxModel .mceListBox .mceText {height:22px}'
,'.b-wsgRamail  .mceOldBoxModel .mceListBox .mceOpen {width:11px; height:22px;}'
,'.b-wsgRamail  select.mceNativeListBox {font-family:\'MS Sans Serif\',sans-serif,Verdana,Arial; font-size:7pt; background:#F0F0EE; border:1px solid gray; margin-right:2px;}'
,''
,'.defaultSkin  .mceMenu {position:absolute; left:0; top:0; z-index:1000; border:1px solid #D4D0C8}'
,'.defaultSkin  .mceNoIcons span.mceIcon {width:0;}'
,'.defaultSkin  .mceNoIcons a .mceText {padding-left:10px}'
,'.defaultSkin  .mceMenu table {background:#FFF}'
,'.defaultSkin  .mceMenu a, .defaultSkin .mceMenu span, .defaultSkin .mceMenu {display:block}'
,'.defaultSkin  .mceMenu td {height:20px}'
,'.defaultSkin  .mceMenu a {position:relative;padding:3px 0 4px 0}'
,'.defaultSkin  .mceMenu .mceText {position:relative; display:block; font-family:Tahoma,Verdana,Arial,Helvetica; color:#000;margin:0; padding:0 25px 0 25px; display:block}'
,'.defaultSkin  .mceMenu span.mceText, .defaultSkin .mceMenu .mcePreview {font-size:11px}'
,'.defaultSkin  .mceMenu pre.mceText {font-family:Monospace}'
,'.defaultSkin  .mceMenu .mceIcon {position:absolute; top:0; left:0; width:22px;}'
,'.defaultSkin  .mceMenu .mceMenuItemEnabled a:hover, .defaultSkin .mceMenu .mceMenuItemActive {background-color:#dbecf3;text-decoration:none;}'
,'.defaultSkin  td.mceMenuItemSeparator {background:#DDD; height:1px}'
,'.defaultSkin  .mceMenuItemTitle a {border:0; background:#EEE; border-bottom:1px solid #DDD}'
,'.defaultSkin  .mceMenuItemTitle span.mceText {color:#000; font-weight:bold; padding-left:4px}'
,'.defaultSkin  .mceMenuItemDisabled .mceText {color:#888}'
,'.defaultSkin  .mceMenuItemSelected .mceIcon {background:url(img/menu_check.gif)}'
,'.defaultSkin  .mceNoIcons .mceMenuItemSelected a {background:url(img/menu_arrow.gif) no-repeat -6px center;background-color:#eee;}'
,'.defaultSkin  .mceMenu span.mceMenuLine {display:none}'
,'.defaultSkin  .mceMenuItemSub a {background:url(img/menu_arrow.gif) no-repeat top right;}'
,'.defaultSkin  .mceListBox, .defaultSkin .mceListBox a {display:block}'
,'.defaultSkin  .mceListBox .mceText {padding-left:4px; width:70px; text-align:left; border:1px solid #CCC; border-right:0; background:#FFF; font-family:Tahoma,Verdana,Arial,Helvetica; font-size:11px; height:20px; line-height:20px; overflow:hidden}'
,'.defaultSkin  .mceListBox .mceOpen {width:9px; height:20px; background:url(../../img/icons.gif) -741px 0; margin-right:2px; border:1px solid #CCC;}'
,'.defaultSkin  table.mceListBoxEnabled:hover .mceText, .defaultSkin .mceListBoxHover .mceText, .defaultSkin .mceListBoxSelected .mceText {border:1px solid #A2ABC0; border-right:0; background:#FFF}'
,'.defaultSkin  table.mceListBoxEnabled:hover .mceOpen, .defaultSkin .mceListBoxHover .mceOpen, .defaultSkin .mceListBoxSelected .mceOpen {background-color:#FFF; border:1px solid #A2ABC0}'
,'.defaultSkin  .mceListBoxDisabled a.mceText {color:gray; background-color:transparent;}'
,'.defaultSkin  .mceListBoxMenu {overflow:auto; overflow-x:hidden}'
,'.defaultSkin  .mceOldBoxModel .mceListBox .mceText {height:22px}'
,'.defaultSkin  .mceOldBoxModel .mceListBox .mceOpen {width:11px; height:22px;}'
,'.defaultSkin  select.mceNativeListBox {font-family:\'MS Sans Serif\',sans-serif,Verdana,Arial; font-size:7pt; background:#F0F0EE; border:1px solid gray; margin-right:2px;}'
,'.b-wsgRamail span.mce_bold {background-position:50% -2005px;}'
,'.b-wsgRamail span.mce_italic {background-position:50% -2035px;}'
,'.b-wsgRamail span.mce_underline {background-position:50% -2065px;}'
,'.b-wsgRamail span.mce_strikethrough {background-position:50% -2095px;}'
,'.b-wsgRamail span.mce_undo {background-position:50% -2124px;}'
,'.b-wsgRamail span.mce_redo {background-position:50% -2155px;}'
,'.b-wsgRamail span.mce_cleanup {background-position:-40px 0}'
,'.b-wsgRamail span.mce_insertunorderedlist {background-position:50% -2455px;}'
,'.b-wsgRamail span.mce_insertorderedlist {background-position:50% -2425px;}'
,'.b-wsgRamail span.mce_outdent {background-position:50% -2365px;}'
,'.b-wsgRamail span.mce_indent {background-position:50% -2395px;}'
,'.b-wsgRamail span.mce_justifyleft {background-position:50% -2245px;}'
,'.b-wsgRamail span.mce_justifycenter {background-position:50% -2275px;}'
,'.b-wsgRamail span.mce_justifyright {background-position:50% -2305px;}'
,'.b-wsgRamail span.mce_justifyfull {background-position:50% -2335px;}'
,'.b-wsgRamail {height:100%;margin:0;padding:0;position:relative;}'
,'.b-wsgRamail-toolbar {background-color: #FFF;border-bottom:1px solid #CBCBCB;left:0;padding:1px;position:absolute;right:0;top:0;overflow:hidden;}'
,'.b-wsgRamail-box {top:26px;left:0;right:1px;bottom:1px;overflow:hidden;position:absolute;background-color: #FFF;}'
,'.b-wsgRamail iframe {width:100% !important; height:100% !important; background-color: #FFF;margin:0;padding:0;border:0 none;}'
,'.b-wsgRamail {}'
,'.b-wsgRamail {}'
);
rr.styles('tmpl:compose_editor'
,'.b-compose_editor {position:relative;}'
,'.b-compose_editor-wrap_textarea {padding:1px;display:block;}'
,'.b-compose_editor-textarea_text {background-color:#FFF;width:100%;border:0px none;padding:0;margin:0;height:300px;}'
,'.b-compose_editor-wysiwyg_box {background-color:#FFF;bottom:0;left:0;position:absolute;right:0;top:0;overflow:hidden;}'
,'.b-compose_editor-wysiwyg_box {}'
,'.b-compose_editor-textarea_html {visibility:hidden;display:none;}'
);
tmpl.compose_editor=function(pr,_){
var ns=this;
ns.node=_('div.b-compose_editor'
,_('label.b-compose_editor-wrap_textarea'
,ns.textarea_text=_('textarea.b-compose_editor-textarea_text',{name:'text'}))
,_('div.b-compose_editor-wysiwyg_box'
,ns.textarea_html=_('textarea.b-compose_editor-textarea_html',{name:'html',value:""})))};
tmpl.tinymce_ramail=function(pr,_){
var ns=this;
ns.node=_('div.b-wsgRamail'
,ns.box_toolbar=_('div.b-wsgRamail-toolbar')
,ns.box=_('div.b-wsgRamail-box'))};


/* url: /js/m2/ui/ui_ubutton.src.js */

elems.uButton=rr.new_class({
interface:false,
constructor:function(pr,_){
tmpl.uButton.call(this,pr,_)},
prototype:{
set_disabled:function(x){
this.button.disabled=!!x;
var cl=this.node.className,xc={className:cl};
rr.css_set(this.s_disabled,xc,x);
rr.css_set(this.s_disabled_no,xc,!x);
if(cl!==xc.className)this.node.className=xc.className;
},
set_active:function(x){
rr.css_set(this.s_active,this.node,x)}}});
elems.uInput=rr.new_class({
interface:false,
constructor:function(pr,_){
tmpl.uInput.call(this,pr,_);
var ns=this;
rr.addHandler(ns.input,'focus',function(){
rr.css_add('b-uinput-help_text--hide',ns.help_text_wr)});
rr.addHandler(ns.input,'blur',function(){
if(!ns.input.value){
rr.css_remove('b-uinput-help_text--hide',ns.help_text_wr)}});
if(!ns.input.value){
rr.css_remove('b-uinput-help_text--hide',ns.help_text_wr)}},
prototype:{
nodeType:-1,
set_help:function(x){
this.help_text.data=x;
}}});


/* url: /js/m2/ui/ui_layerbox.src.js */

rr.styles('tmpl:xx'
,'.b-box_menu {z-index:1110;height:0;left:0;position:absolute;top:0;width:0;}'
,'.b-rm_menu {margin-left:2px;background-color:#FFF;position:absolute;-moz-box-shadow:6px 6px 3px -5px #888;-webkit-box-shadow:5px 5px 5px -4px #888;box-shadow:1px 1px 3px #888;border-color:#777;border-style:solid;border-width:1px;}'
,'.b-rm_menu-box {overflow:hidden;}'
);
tmpl.rm_menu=function(pr,_){
var ns=this;
ns.node=_('div.b-rm_menu',{css:pr.css}
,ns.box=_('div.b-rm_menu-box'))};
elems.box_menu=rr.new_class({
interface:true,
constructor:function(pr,_,cfg){
if(_.document.box_menu){
return _.document.box_menu;
};
var d=_.document,it=this.interface,ui=this,n;
(ui.document=d).box_menu=this;
ui.box=_('div.b-box_menu');
rr.domReady(function(){
d.body.appendChild(ui.node||ui.box)})},
prototype:{
nodeType:-1,
nextIndex:1,
appendChild:function(ui){
if(!ui||!ui.nodeType)return;
var n=ui.node||ui;
n.style.zIndex=this.nextIndex++;
this.box.appendChild(ui.node||ui);
return ui;
}}});
elems.rm_menu=rr.new_class(
rr.extend({
interface:true,
test:true,
gEvents:new rr.class_listHandler,
constructor:function(pr,_,cfg){
var it=this.interface,ui=this,v;
ui.master=_.clone();
ui.document=_.document;
ui.nodes=_('tmpl:rm_menu');
ui.box=ui.nodes.box;
if(v=pr.open)ui.open=v;
if(v=pr.node)ui.node=v.node||v;
if(v=pr.position)ui.position=v;
ui.neabody=pr.neabody||ui.node;
it.init_event(this)},
prototype:{
nodeType:-1,
css_box:null,
neabody:null,
position:null,
ver:0,
hor:0,
is_connect:false,
show:function(elm,pos){
if(elm)this.neabody=elm;
if(pos)this.position=pos;
if(!this.neabody){
return;
};
this.interface.initEvent('show',{menu:this});
this.interface.re_position(this);
if(this.ev_change){
this.ev_change()}},
hide:function(){
this.interface.hide(this);
if(this.ev_change){
this.ev_change()}}},
init_event:function(ui){
var tH,tS,stopHide,x;
function goHide(){stopHide=false};
function show(){
if(!ui.is_connect){
if(tS)clearTimeout(tS),tS=null;
if(tH)clearTimeout(tH),tH=null;
stopHide=true;
setTimeout(goHide,500);
ui.show()}};
function hide(){
if(tH)clearTimeout(tH),tH=null;
stopHide=false;
ui.hide()};
if(ui.node){
rr.addHandler(ui.node,rr.IE<9?'click dblclick':'click',x=function(e){
rr.breakEvent(e);
ui.is_connect?stopHide||hide():ui.show()});
rr.addHandler(ui.node,'mousedown',function(e){
e[rr.IE<9?'returnValue':'rm_menu']=ui;
});
if(ui.open!='click'){
rr.addHandler(ui.node,'mouseover',function(e){
if(!tS&&!ui.is_connect)tS=setTimeout(show,200);
if(tH)clearTimeout(tH),tH=null;
});
rr.addHandler(ui.node,'mouseout',function(e){
if(tS)clearTimeout(tS),tS=null;
})}};
this.addEvent('show',function(e){
if(e.menu!==ui)hide()});
ui.nodes.node.onmouseover=function(e){
if(tH)clearTimeout(tH),tH=null;
};
ui.nodes.node.onmouseout=function(e){
if(!tH)tH=setTimeout(hide,800)};
rr.addHandler(ui.nodes.node,'click',hide);
rr.addHandler(ui.nodes.node,'mousedown',function(e){
e[rr.IE<9?'returnValue':'rm_menu']=ui;
})},
connect:function(ui){
if(!ui.is_connect){
ui.is_connect=true;
this.connect_ievent(ui);
ui.nodes.node.style.visibility='hidden';
ui.master('ui:box_menu'
,ui.nodes.node
)}},
connect_ievent:function(ui){
this.gEvents.add(ui.document,'mousedown',function(e){
if(e[rr.IE<9?'returnValue':'rm_menu']!==ui){
ui.hide();
e.rm_menu=null;
}},ui);
this.gEvents.add(ui.document,'blur',function(e){
ui.hide()},ui)},
hide:function(ui){
if(ui.is_connect){
ui.is_connect=false;
this.gEvents.removeAll(ui);
rr.removeNode(ui.nodes.node)}},
re_position:function(ui){
this.connect(ui);
var n=ui.nodes.node
,cwh=rr.getClientWH(ui.document)
,rc=rr.getRect(ui.neabody)
,x,y,w,h;
w=n.offsetWidth;
h=n.offsetHeight;
switch(ui.position){
case'top':
case'top left':
x=rc.left-w+cwh.sl;
y=(rc.top+h>cwh.h-10?cwh.h-h-10:rc.top)+cwh.st;
if(y<0)y=0;
if(x<0)x=0;
break;
case'top center':
x=Math.floor(rc.left+(cwh.w-rc.right-rc.left)/2-w/2)+cwh.sl;
y=rc.top-h+cwh.st;
if(y<0)y=cwh.h-rc.bottom+cwh.st;
if(x<0)x=0;
break;
case'top right':
x=(rc.right-w<0?rc.left-w:cwh.w-rc.right)+cwh.sl;
y=(rc.top+h>cwh.h-10?cwh.h-h-10:rc.top)+cwh.st;
if(y<0)y=0;
if(x<0)x=0;
break;
case'center left':
x=rc.left-w+cwh.sl;
if(x<0&&(rc.right-w)>=0)x=cwh.w-rc.right+cwh.sl;
y=rc.top-h+cwh.st;
if(y<0)y=cwh.h-rc.bottom+cwh.st;
y=(cwh.h-rc.bottom-rc.top)/2;
if(y+h>cwh.h-10)y=cwh.h-h-10;
y+=cwh.st;
if(y<0)y=0;
break;
case'center right':
x=(rc.right-w<0?rc.left-w:cwh.w-rc.right)+cwh.sl;
if(x<0)x=cwh.w-rc.right+cwh.sl;
y=(cwh.h-rc.bottom-rc.top)/2;
if(y+h>cwh.h-10)y=cwh.h-h-10;
y+=cwh.st;
if(y<0)y=0;
break;
case'left center':
break;
case'right center':
break;
case'center':
case'bottom center':
x=rc.left+(rc.right-rc.left)/2-w/2+cwh.sl;
if(x<0)x=0;
y=rc.bottom;
if(y+h>cwh.h-10)y=rc.top-h;
if(y<0)y=rc.bottom;
y+=cwh.st;
break;
case'right':
case'bottom right':
x=rc.right-w+cwh.sl;
if(x<5)x=5;
y=rc.bottom;
if(y+h>cwh.h-10)y=rc.top-h;
if(y<0)y=rc.bottom;
y+=cwh.st;
break;
case'bottom':case'left':
case'bottom left':
default:
x=(rc.right+w>cwh.w?rc.right-w:rc.left)+cwh.sl;
if(x<0)x=0;
y=rc.bottom;
if(y+h>cwh.h-10)y=rc.top-h;
if(y<0)y=rc.bottom;
y+=cwh.st;
break;
};
x=Math.floor(x)||0;
y=Math.floor(y)||0;
var s=ui.nodes.node.style;
s.left=x+'px';
s.top=y+'px';
s.visibility='';
}},rr.expansion_event));


/* url: /js/m2/ui/ui_box_windows.src.js */

rr.styles('tmpl:box_window'
,'.b-box_windows {z-index:1100;height:0;left:0;position:absolute;top:0;width:0;}'
);
rr.styles('tmpl:windows_ssbar',
".pj-ssbar {position:fixed;bottom:0;left:0;right:0;height:0px;z-index:1109;}",
rr.IE<7&&".vk-ssbar {width:100%;position:absolute;bottom:0;positionFixedTop:expression(style.bottom=null,style.bottom=(pageYOffset+pageOffsetH)%2?'-1px':'0px',undefined);}",
".pj-ssbar-box {margin:0 auto;position:relative;width:400px;}",
".pj-ssbar-shadow {position:absolute;width:100%;bottom:0;margin-left:-1ex;height:1.4em;padding:1ex 1ex 0;overflow:hidden;"
+(rr.Gecko>=1.9||rr.Opera>10||rr.WebKit>399||rr.IE>8?"background-color:rgba(75, 118, 159, 0.3);"
:rr.IE<9?"filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#55628BAF, endColorstr=#55628BAF);"
:"background-color:#628BAF;opacity:0.3;"
)
+"}",
".pj-ssbutton {position:absolute;width:100px;bottom:0;overflow:hidden;}",
".pj-ssbutton .r {background-color:#628BAF;height:1px;margin:0 1px 0 3px;overflow:hidden;}",
".pj-ssbutton .box {cursor:pointer;margin-left:2px;color:#FFF;height:1.4em;padding:0.2em 0 0.2em 1ex;overflow:hidden;font-size:small;font-weight:bold;white-space:nowrap;}",
".pj-ssbutton-t {position:absolute;}",
".pj-ssbutton .x {cursor:pointer;background:url('/vk/i/wicon.gif') no-repeat -23px -64px;height:20px;position:absolute;right:0;top:0.25em;width:16px;z-index:1;}",
".pj-ssbutton .x:hover {background-position:-23px -43px;}",
".pj-ssbutton .box, .pvk-ssbutton .x {background-color:#4B769F;}",
".pj-ssbutton--active .box, .pj-ssbutton--active .x, .pj-ssbutton--active:hover .box, .pj-ssbutton--active:hover .x {background-color:#204D77;}",
""
);
elems.box_windows=rr.new_class({
interface:true,
constructor:function(pr,_,cfg){
if(_.document.box_wins){
return _.document.box_menu;
};
var d=_.document,it=this.interface,ui=this,n;
(ui.document=d).box_wins=this;
ui.box=_('div.b-box_windows');
ui.list=[];
this.cbar=new elems.ssbar(false,domMaster);
d.body.appendChild(ui.node||ui.box);
this.interface.init_events(this)},
init_events:function(ui){
rr.addHandler(ui.box,'mousedown',function(e){
var bx=ui.box,n=e.target||e.srcElement,a=ui.list,i=0,x;
if(n===bx)return;
while(n&&n!==bx){
x=n;
n=n.parentNode;
};
if(x){
while(n=a[i++])if(n.node===x){
ui.up(n);
break
}}});
var d=ui.document,w,py,sbx=ui.box.style;
rr.addHandler(w=d.parentWindow||d.defaultView,'scroll',function(e){
var y=w.pageYOffset;
if(rr.IE&&typeof y!='number')y=(rr.qIE?d.body:d.documentElement).scrollTop;
ui.scrollTop=py=y;
})();
ui.scrollTop=0;
ui.scrollLeft=0;
},
prototype:rr.newTemplate(rr.expansion_event,{
nodeType:-1,
nextIndex:1,
focusElement:null,
is_connect:true,
append:function(elm,modal){
if(!elm||!elm.nodeType||!elm.node)return;
if(modal)this.nextIndex++;
elm.node.style.zIndex=this.nextIndex++;
if(elm.node.parentNode!=this.box){
this.box.appendChild(elm.node)};
if(rr.indexOf(this.list,elm)<0){
this.list.push(elm)};
var pEml=this.focusElement;
this.focusElement=elm;
elm.parent=this;
elm.dom_connect(true);
this.initEvent('append',{element:elm});
this.interface.append(this,elm);
if(pEml){
if(typeof pEml.set_active==='function'){
pEml.set_active(false)}};
if(typeof elm.set_active=='function'){
elm.set_active(true)}},
remove:function(elm){
var ix=rr.indexOf(this.list,elm);
if(ix<0)return;
this.list.splice(ix,1);
this.focusElement=null;
this.box.removeChild(elm.node);
elm.parent=null;
elm.dom_connect(false);
this.initEvent('remove',{element:elm});
this.interface.remove(this,elm);
if(typeof elm.set_active==='function'){
elm.set_active(false)}},
up:function(elm,modal){
if(!elm||elm===this.focusElement||rr.indexOf(this.list,elm)<0){
return
};
if(modal)this.nextIndex++;
elm.node.style.zIndex=this.nextIndex++;
var pEml=this.focusElement;
this.focusElement=elm;
if(pEml){
if(typeof pEml.set_active==='function'){
pEml.set_active(false)}};
if(typeof elm.set_active=='function'){
elm.set_active(true)}}}),
append:function(wbox,ui){
var xb=wbox.cbar.create({
link:ui,
name:ui.name,
hide:ui.hide,
active:ui.active,
ev_click:function(){
var x,u;
if(!ui.fixed&&ui.__scrollTop_!==ui.parent.scrollTop){
ui.show('client');
wbox.up(ui)}
else{
if(x=!ui.active||ui.hide){
ui.show('client');
wbox.up(ui)}
else{
ui.set({active:false,hide:true})}}},
ev_close:function(){
if(x=!ui.active||ui.hide){
ui.show('client');
wbox.up(ui)}
else{
ui.set({active:false,hide:true})}},
ev_hover:function(fg){
fg=fg!==false;
if(!xb._xhover===fg){
rr.css_set('rr-window--xhover',ui.node,fg!==false);
xb._xhover=fg;
}}});
ui.gEvent.add(ui,'change'
,function(ch,rz){
var v,cb={};
if(ch.name){
if(xb.text!==ui.name)cb.text=ui.name;
};
if(ch.active||ch.hide){
v=!!ui.active&&!ui.hide;
if(xb.active!==v)cb.active=v;
};
for(v in cb){
wbox.cbar.button_set(xb,cb);
break;
};
if(ch.top_||ch.left_){
if(ui.parent){
ui.__scrollTop_=ui.parent.scrollTop;
ui.__scrollLeft_=ui.parent.scrollLeft;
}}}
,wbox
);
ui.gEvent.add(ui,'cmd_minimize'
,function(){
ui.set({active:false,hide:true})}
,wbox
);
ui.gEvent.add(ui,'cmd_minimize'
)},
remove:function(wbox,ui){
ui.gEvent.removeAll(wbox);
wbox.cbar.remove(
wbox.cbar.get_button(ui))}});
tmpl.ssbar=function(pr,_,cfg){
var ns=this;
ns.node=_('div.pj-ssbar',{style:'display:none;'},
ns.box=_('div.pj-ssbar-box',
_('div.pj-ssbar-shadow')))};
tmpl.ssbar_button=function(pr,_,cfg){
var ns=this;
ns.sname='pj-ssbutton';
ns.node=_('div.pj-ssbutton',{__cmd_:"click"},
_('div.r bg'),
ns.body=_('div.box bg',{title:pr.text||''},
ns.box=_('span.t',
ns.text=_.text(pr.text||'...'))),
ns.close=_(rr.IE<7?'a.x':'div.x',rr.IE<7&&{href:'js:close'}));
ns.close.__cmd_="close";
if(rr.IE)ns.node.onselectstart=function(){return false}};
elems.ssbar=rr.new_class({
interface:true,
parent:rr.class_baseElement,
constructor:function(pr,_,cfg){
this.interface.parent.call(this,pr,_,cfg);
this.interface.factory(this,pr,_,cfg)},
factory:function(ui,pr,_,cfg){
ui.master=_.clone();
ui.bMinWidth=50;
ui.bMaxWidth=120;
ui.maxWidth=700;
ui.interface=this;
ui.list=[];
ui.boxwindow=pr.boxwindow;
ui.nds=_.tmpl('tmpl:ssbar',pr);
ui.box=ui.nds.box;
this.init_event(ui);
_.document.body.appendChild(
ui.nds.node
)},
prototype:{
create:function(pr){
if(!pr.link)return;
var nx={
link:pr.link,
text:pr.name||"name undefined",
hide:!!pr.hide,
visib:true,
ev_click:pr.ev_click,
ev_close:pr.ev_close,
ev_hover:pr.ev_hover
};
this.list[this.list.length]=nx;
if(!nx.hide)this.refresh();
return nx;
},
remove:function(ix){
var a=this.list,l=a.length,i=0,i2=0;
if(!l||typeof ix!='object')return;
if(ix.button)rr.removeNode(ix.button.node);
for(;x=a[i];i++)if(ix==x)break;
for(;i<l;i++){
if(x=a[i+1])a[i]=x;
};
a.length--;
this.refresh(this)},
get_button:function(link){
var a=this.list,i=0,x;
while(x=a[i++])if(x.link===link)return x;
},
button_set:function(ix,pr){
var it=this.interface,ns=ix.button,u;
if(!ns)return;
if(pr.text!=u){
v=(ix.text=pr.text)||'';
ns.text.data=v;
ns.body.title=v;
};
if(pr.active!=u){
ix.active=pr.active;
rr.css_set(ns.sname+"--active",ns.node,ix.active)}},
active:function(ix){
}},
init_event:function(ui){
var x;
rr.addHandler(ui.box,'click',x=function(e){
var n=e.srcElement||e.target,it=ui.interface;
if(e.returnValue===false)return;
rr.breakEvent(e);
while(n){
switch(n.__cmd_){
case'click':return it.ev_click(e,ui,n);
case'close':return it.ev_close(e,ui,n.parentNode)};
n=n.parentNode;
}});
if(rr.IE)rr.addHandler(ui.box,'dblclick',x);
x=null;
rr.addHandler(ui.box,'mousedown',function(e){
var n=e.srcElement||e.target,it=ui.interface;
if(e.returnValue===false||(rr.IE<9?e.button:e.which)!=1)return;
rr.breakEvent(e);
while(n){
switch(n.__cmd_){
case'click':return it.ev_down(e,ui,n);
case'close':return;
};
n=n.parentNode;
}});
return;
var x,u,tm_hover;
rr.addHandler(ui.box,'mouseover',x=function(e){
if(e.returnValue===false)return;
var n=e.srcElement||e.target,it=ui.interface;
for(;n;n=n.parentNode){
if(n.__cmd_==='click')break;
if(n===ui.box)return;
};
if(!n||!n.__cmd_)return;
var nx=it._get_nx(ui,n);
if(!nx)return;
if(nx.ev_hover){
nx.ev_hover(e.type=='mouseover')}});
rr.addHandler(ui.box,'mouseout',x);
x=u;
},
refresh:function(ui,ch,rz){
var l=ui.list.length,iw,w,rl,i,i2,x,b,u;
rl=Math.floor(ui.maxWidth/ui.bMinWidth);
if(l<rl)rl=l;
for(i=0,i2=0;i<l;i++){
x=ui.list[i];
if(!x)continue;
if(x.hide||i2>=rl){
if(x.button){
ui.box.removeChild(x.button.node);
x.button=u;
}}else i2++;
};
rl=i2;
if(!l||!rl){
ui.nds.node.style.display='none';
ui.show_=null;
return;
};
iw=Math.floor(ui.maxWidth/rl);
if(iw>ui.bMaxWidth)iw=ui.bMaxWidth;
ui.box.style.width=(iw*rl)+"px";
for(i=0,i2=0;i<l&&i2<rl;i++){
x=ui.list[i];
if(!x||x.hide)continue;
b=x.button;
if(!b){
x.button=b=ui.master.tmpl('tmpl:ssbar_button',{text:x.text});
x.index_show=u;
};
if(x.index_show!==i2){
ui.box.appendChild(b.node)};
x.index_show=i2;
b.node.style.width=iw+'px';
b.node.style.left=(iw*i2)+'px';
i2++;
};
if(!ui.show){
ui.nds.node.style.display='';
ui.show_=true;
}},
_get_nx:function(ui,n){
var a=ui.list,i=0,x;
for(;x=a[i++];){
if(x.button&&x.button.node==n)return x;
}},
ev_click:function(e,ui,n){
var nx=this._get_nx(ui,n);
if(nx&&nx.ev_click)nx.ev_click()},
ev_down:function(){
},
ev_close:function(e,ui,n){
rr.breakEvent(e);
var nx=this._get_nx(ui,n);
if(nx&&nx.ev_close)nx.ev_close()}})


/* url: /js/m2/ui/ui_window.src.js */

rr.styles('tmpl:window_a'
,".rr-window {position:absolute;padding-right:2px;"
+(rr.IE<7?"fixedTop:null;":'')
+(rr.Gecko>=2||rr.WebKit>=534||rr.IE>8||rr.Opera>=10.5?'border-radius:3px 3px 0 0;-webkit-box-shadow:0px 2px 9px -2px #000;box-shadow:0px 2px 9px -2px #000;':'')
+"}"
,'.rr-window--hide {visibility:hidden !important;}'
,rr.IE<7||".rr-window--fixed {position:fixed;}"
,rr.IE<7&&".rr-window--fixed {position:absolute;positionFixedTop: expression(rr.ui_posIEfixed&&rr.ui_posIEfixed(this));}"
,".rr-window-title {z-index:1;cursor:default;color:#fff;position:relative;margin-right:-2px;background-color:#4B769F;padding:4px 60px 4px 0.7ex;"
+(rr.IE?"background-image:url('about:blank');background-repeat:no-repeat;":"")
+"}"
,".rr-window-title--xn2 {padding-right:60px;}"
,".rr-window-title--xn3 {padding-right:60px;}"
,".rr-window-title--xn4 {padding-right:60px;}"
,".rr-window-title .name {height:16px;line-height:16px;display:block;overflow:hidden;white-space:nowrap;}"
,rr.IE<7&&".rr-window-title .name {width:100%;position:relative;height:1.3em;}"
,rr.IE<7&&".rr-window-title .text {position:absolute;}"
,".rr-window-box {z-index:1;border:1px solid #4B769F;margin-right:-2px;overflow:hidden;position:relative;background-color:#FFF;}"
,rr.IE<7&&".rr-window-box {width:100%;}"
,".rr-window-br .b {position:absolute;"
+(rr.IE?"background-image:url('about:blank');background-repeat:no-repeat;":'')
+(rr.IE<9?"filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#3C4AA1EF, endColorstr=#3C4AA1EF)"
:rr.Gecko>=2||rr.WebKit>=534||rr.IE>8||rr.Opera>=10.5?''
:"background-color:#C8E4FF;background-color:rgba(74,161,239,0.3);")
+"}"
,".rr-window-br .x {height:auto;width:4px;}"
,".rr-window-br .y {height:4px;width:auto;font-size:0;}"
,".rr-window-br .xy {width:20px;height:20px;}"
,".rr-window-br-n {cursor: n-resize;top:-4px;left:16px;right:16px;}"
,".rr-window-br-e {cursor: e-resize;right:-4px;top:16px;bottom:16px;}"
,".rr-window-br-s {cursor: s-resize;bottom:-4px;left:16px;right:16px;}"
,".rr-window-br-w {cursor: w-resize;left:-4px;top:16px;bottom:16px;}"
,".rr-window-br-ne {cursor: ne-resize;right:-4px;top:-4px;}"
,".rr-window-br-nw {cursor: nw-resize;left:-4px;top:-4px;}"
,".rr-window-br-se {cursor: se-resize;right:-4px;bottom:-4px;}"
,".rr-window-br-sw {cursor: sw-resize;left:-4px;bottom:-4px;}"
,rr.Gecko>=2||rr.WebKit>=534||rr.IE>8||rr.Opera>=10.5?'.rr-window-border-no {display: none;}'
:'.rr-window-border-no .b {cursor:default;}'
,rr.IE<7&&".rr-window-br-e  {right:auto;left:0px;margin-left:100%;}"
,rr.IE<7&&".rr-window-br-ne, .rr-window-br-se {right:auto;left:-16px;margin-left:100%;}"
,rr.IE<7&&".rr-window-br-sw, .rr-window-br-se {bottom:auto;margin-top:-16px;}"
,rr.IE<7&&".rr-window-br-s {bottom:auto;margin-top:0px;}"
,".rr-window-shady {display:block;_display:none;margin:0 -1px 0 1px;height:1px;position:relative;overflow:hidden;background-color:#4B769F;z-index:1;}"
,".rr-window-shady .b {display:none;}"
,rr.IE<7&&".rr-window--p6 {z-index:2;position:absolute;top:0px;margin-left:100%;width:0px;height:0px;}"
,".rr-window-pn {position:absolute;z-index:2;top:4px;right:4px;}"
,".rr-window-pn .b {border:1px inset #476D8F;float:right;cursor:pointer;height:15px;width:15px;overflow:hidden;margin-left:2px; background-repeat:no-repeat; background-attachment:scroll;}"
,".rr-window-title, .rr-window-shady {background-color:#4B769F;}"
,".rr-window-box {border-color:#4B769F;}"
,".rr-window--unactive > .rr-window-title, .rr-window--unactive > .rr-window-shady {background-color:#757575;}"
,".rr-window--unactive > .rr-window-box {border-color:#757575;}"
,!!(rr.Gecko>=2||rr.Opera>=10.6||rr.WebKit>=534)&&[
'.rr-window-title {-webkit-transform: background-color 0.4s ease-in-out; -moz-transition: background-color 0.4s ease-in-out; -o-transition: background-color 0.4s ease-in-out; transition: background-color 0.4s ease-in-out;}'
,'.rr-window-box {-webkit-transition: border-color 0.4s ease-in-out;-moz-transition: border-color 0.4s ease-in-out;-o-transition: border-color 0.4s ease-in-out;transition: border-color 0.4s ease-in-out;}'
]
);
rr.styles('pj_ssbar',
".pj-ssbar {position:fixed;bottom:0;left:0;right:0;height:0px;z-index:1011;}",
rr.IE<7&&".vk-ssbar {width:100%;position:absolute;bottom:0;positionFixedTop:expression(style.bottom=null,style.bottom=(pageYOffset+pageOffsetH)%2?'-1px':'0px',undefined);}",
".pj-ssbar-box {margin:0 auto;position:relative;width:400px;}",
".pj-ssbar-shadow {position:absolute;width:100%;bottom:0;margin-left:-1ex;height:1.4em;padding:1ex 1ex 0;overflow:hidden;"
+(rr.Gecko>=1.9||rr.Opera>10||rr.WebKit>399||rr.IE>8?"background-color:rgba(75, 118, 159, 0.3);"
:rr.IE<9?"filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#55628BAF, endColorstr=#55628BAF);"
:"background-color:#628BAF;opacity:0.3;"
)
+"}",
".pj-ssbutton {position:absolute;width:100px;bottom:0;overflow:hidden;}",
".pj-ssbutton .r {background-color:#628BAF;height:1px;margin:0 1px 0 3px;overflow:hidden;}",
".pj-ssbutton .box {cursor:pointer;margin-left:2px;color:#FFF;height:1.4em;padding:0.2em 0 0.2em 1ex;overflow:hidden;font-size:small;font-weight:bold;white-space:nowrap;}",
".pj-ssbutton-t {position:absolute;}",
".pj-ssbutton .x {cursor:pointer;background:url('/vk/i/wicon.gif') no-repeat -23px -64px;height:20px;position:absolute;right:0;top:0.25em;width:16px;z-index:1;}",
".pj-ssbutton .x:hover {background-position:-23px -43px;}",
".pj-ssbutton .box, .pvk-ssbutton .x {background-color:#4B769F;}",
".pj-ssbutton--active .box, .pj-ssbutton--active .x, .pj-ssbutton--active:hover .box, .pj-ssbutton--active:hover .x {background-color:#204D77;}",
""
);
tmpl.window_a=function(pr,_){
if(!this.nodeType)this.nodeType=-1;
var ns=this,n,lb=ns.borderNodes={},nm,x;
ns.sname=nm="rr-window";
x='b '+nm+'-br-';
ns.border=_((rr.Gecko?'span.':'div.')+nm+'-br',[
lb.s=_('div.'+x+'s s y'),
lb.e=_('div.'+x+'e e x'),
lb.w=_('div.'+x+'w w x'),
lb.se=_('div.'+x+'se se xy'),
lb.sw=_('div.'+x+'sw sw xy'),
lb.n=_('div.'+x+'n n y'),
lb.ne=_('div.'+x+'ne ne xy'),
lb.nw=_('div.'+x+'nw nw xy')
]);
if(rr.IE<7)_('iframe.'+ns.sname+"-ie6",{scrolling:'NO',frameBorder:'NO',parent:ns.shady});
ns.title=_('div.'+ns.sname+'-title',[
_('span.name',[
ns.icon=_('span.icon'),
ns.name=_('span.text',[
ns.nameText=_.text(pr.title||'ss')
])
])
]);
if(rr.IE)ns.title.onselectstart=rr.breakEvent;
ns.bPanel=_('div.'+ns.sname+'-pn',
ns.bclose=_((rr.IE<7?'a':'div')+'.b cmd-close',{_w_cmd:"close",href:"js:close"},
_('span',
rr.IE<8&&_.text('\u00D7'))));
ns.node=ns.window=_('div.'+ns.sname+' rr-window--hide'
,ns.shady=_((rr.Gecko?'span.':'div.')+nm+'-shady')
,!(rr.IE<7)&&ns.border
,rr.IE<7?_('div.'+ns.sname+'-p6',ns.bPanel):ns.bPanel
,ns.title
,ns.caption=_('div.'+ns.sname+'-box')
,!(rr.IE<7)&&ns.border
);
ns.body=ns.window;
};
elems.window_a=rr.new_class({
interface:true,
parent:rr.class_baseElement,
constructor:function(pr,_,cfg){
this.interface.parent.call(this,pr,_,cfg);
this.interface.factory(this,pr,_,cfg)},
factory:function(ui,pr,_){
ui.master=_.clone();
ui.nodes=new tmpl.window_a(pr,_);
ui.nds=ui.nodes;
ui.node=ui.nodes.window;
ui.box=ui.nodes.caption;
ui.xbutton_={};
this.init_event(ui)},
dom_connect:function(ui){
if(ui.display=!!ui.is_connect){
this.refresh(ui,true)}},
prototype:{
ui_name:'window',
xbutton:'minimize',
rtop:true,
width:300,
height:250,
minHeight:50,
left:100,
top:100,
hide:true,
get:function(pr){
var ui=this
,uix=this.interface
,nds=ui.nodes
,x,nd;
if(!ui||!ui.nodes)return;
switch(pr){
case'':
break;
default:
uix=rr.rui_x.window;
if(uix['get_'+pr])return uix['get_'+pr](ui)}},
close:function(){
var e={},s,x;
if(this.initEvent('close',e)===false||e.returnValue===false){
return false;
};
if(!this.parent)return;
if(rr.Opera){
s=this.node.style;
x=s.display;
s.display='none';
this.node.offsetParent;
};
this.parent.remove(this);
if(s)s.display=x;
this.initEvent('_remove')},
show:function(ps,av){
var ui=this,s={hide:false,active:av!==false},cwh,u;
if(!ui.parent)return;
var st,pl,pt;
cwh=ui.parent.cwh||rr.getClientWH(ui.ownerDocument);
switch(ps){
case'center':
if(ui.fixed){
cwh.sl=cwh.st=0;
};
s.left=Math.max(0,cwh.sl+Math.round((cwh.w-ui.node.offsetWidth)/2));
s.top=Math.max(0,cwh.st+Math.round((cwh.h-ui.node.offsetHeight)/2)-ui.nodes.caption.offsetTop);
break;
case'client':
var st=ui.parent.scrollTop
,x=ui.client_top_
,h=ui.node.offsetHeight;
if(x+h>cwh.h-3){
x=cwh.h-3-h;
};
if(x<3)x=3;
if(!ui.fixed)x=x+st;
s.top=x;
x=ui.left;
if(x<-ui.width+5){
x=-ui.width+5;
}else
if(!rr.fixed&&x>cwh.w-5){
x=cwh.w-5;
};
s.left=x;
break;
};
this.visibility=u;
this.set(s);
if(av!==false){
ui.parent.up(ui.node)}},
set_active:function(fg){
var ui=this;
if(fg!==false){
ui.parent.up(ui.node);
if(!ui.active){
ui.interface._onactive(ui)}}
else{
ui.interface._onunactive(ui)}},
setStatus:function(nm,x){
if(!nm||typeof nm!=='string')return;
var n='--'+nm;
rr.css_set(this.nodes.sname+n,this.node,x=!!x)},
isStatus:function(nm){
if(!nm||typeof nm!=='string')return;
return!!rr.css_is('rr-window--'+nm,this.node)}},
set:function(ui,pr,v,pv){
var it=this,
tv=typeof v,
x,und;
switch(pr){
case'xbutton':
if(v&&tv!='string')return;
break;
case'width':
case'height':
case'minWidth':
case'minHeight':
case'maxWidth':
case'maxHeight':
case'top':
case'bottom':
case'left':
case'right':
if(v!==null&&tv!='number'||v<0)return;
if(v!=null)switch(pr){
case'height':
case'minHeight':
if(v<0)v=0;break;
case'width':
case'minWidth':
case'maxWidth':
if(v<70)v=70;break;
case'maxHeight':if(v<2)v=2;break;
case'top':
case'bottom':
case'left':
case'right':
};
break;
case'visibility':
case'active':
case'fixed':
case'hide':
case'hideButton':
case'resize':
case'headline':
if(v!==null)v=!!v;
break;
case'icon':
case'name':
if(v!=null&&tv!='string'&&tv!='number')return;
break;
default:return;
};
return v;
},
refresh:function(ui,ch,rz){
if(!ui.display)return false;
var it=ui.interface,nds=ui.nds,v,i;
if(ui.z_resize)ui.z_resize=!(rz=true);
var chw;
if(ch.headline){
nds.caption.style.display=ui.headline?'none':'';
rr.css_set(nds.sname+'-caption--headline',nds.caption,ui.headline);
rr.css_set(nds.sname+'--headline',ui.node,ui.headline)};
if(ch.fixed){
v=rr.css_is(nds.sname+'--fixed',ui.node);
if(rr.IE<7){
ui.node._ptop=null;
}
else if(!v!=!ui.fixed){
var s=ui.node.style,x=rr.getPx(s.left),y=rr.getPx(s.top);
if(!x&&x!==0)x=ui.node.offsetLeft;
if(!y&&y!==0)x=ui.node.offsetTop;
chw=chw||rr.getClientWH(ui.ownerDocument);
if(v){
x+=chw.sl;
y+=chw.st;
}
else{
x-=chw.sl;
y-=chw.st;
x=x<0?0:x>chw.w-20?chw.w-20:x;
y=y<0?0:y>chw.h-20?chw.h-20:y;
};
ui.left_=x;
ui.top_=y;
ch.left_=true;
ch.top_=true;
}
rr.css_set(nds.sname+'--fixed',ui.node,ui.fixed)};
if(rz||ch.icon){
v=ui.icon;
rr.css_set('rr-window-title--icon',nds.title,!!v);
if(v&&typeof v=='string'&&v.indexOf('url(')!=-1){
nds.icon.style.backgroundImage=v;
}
else{
nds.icon.style.backgroundImage='';
}};
if(rz||ch.name){
var n=nds.nameText;
if(n)n.data=ui.name;
};
if(rz||ch.resize){
rr.css_set(nds.sname+'-border-no',nds.border,ui.resize==false)};
if(ui.hide&&(rz||ch.hide)){
rr.css_add('rr-window--hide',nds.node)};
if(rz||ch.hideButton){
};
if(rz||ch.left){
ch.left_=true;
ui.left_=ui.left;
};
if(rz||ch.left||ch.right){
ch.left_=true;
if(ui.left===null&&typeof ui.right=='number'){
chw=chw||rr.getClientWH(ui.ownerDocument);
ui.left_=(ui.fixed?chw.w:chw.sw)-ui.width-15;
}else ui.left_=ui.left;
};
if(rz||ch.top){
ch.top_=true;
ui.top_=ui.top;
if(rr.IE<7&&ui.fixed){
var d=ui.ownerDocument;
ui.top_+=chw?chw.st:(rr.qIE?d.body:d.documentElement).scrollTop;
};
ch.top_=true;
};
if(ch.left_){
ui.node.style.left=(ui.left_||0)+"px";
};
if(ch.top_){
ui.node.style.top=(ui.top_||0)+"px";
if(ui.fixed&&!(rr.IE<7)){
ui.client_top_=ui.top_
}else
if(ui.parent&&typeof(v=ui.parent.scrollTop)=='number'){
v=ui.top_-v;
ui.client_top_=v>0?v:10;
}};
if(rz||ch.width){
v=Math.max(70,ui.width);
nds.body.style.width=v+'px';
};
if(rz||ch.height){
v=Math.max(0,ui.height);
nds.caption.style.height=v+'px';
};
if(rr.IE<7&&(rz||ch.width||ch.height||ch.headline)){
it.setBorderWidthForIE(ui)};
if(rz||ch.xbutton){
var n,a=ui.xbutton,i=0,l,nx={},np=nds.bclose,p,xl=0;
if(a=a&&a.split(' ')){
p=np&&np.parentNode||nds.bPanel;
for(l=a.length;i<l;i++)if(x=a[i]){
if(np)np=np.nextSibling;
n=nx[x]=ui.xbutton_[x]||this.createButton(ui,x);
xl++;
if(np!=n){
np?p.replaceChild(n,np):p.appendChild(n)}}};
if(n=np&&np.nextSibling)
while(np=n){
n=np.nextSibling;
p.removeChild(np)};
ui.xbutton_=nx;
rr.css_set_(nds.sname+'-title--xn',nds.title,xl);
rr.css_set_(nds.sname+'-bpanel--xn',nds.bPanel,xl)};
if(ch.active){
ui.setStatus('unactive',!ui.active)};
if(!ui.hide&&(rz||ch.hide)){
rr.css_remove('rr-window--hide',nds.node)};
ui.initEvent('change',ch)},
createButton:function(ui,nm){
var _=ui.master;
return _((rr.IE<7?'a':'div')+'.b cmd-'+nm,{_w_cmd:nm,href:"js:"},
_('span.c'))},
_ev_onselectstart:function(){
return false
},
_onactive:function(ui){
ui.active=true;
ui.setStatus('unactive');
ui.initEvent('change',{active:true})},
_onunactive:function(ui){
ui.active=false;
ui.setStatus('unactive',true);
ui.initEvent('change',{active:true})},
setBorderWidthForIE:function(ui,f_res){
var nds=ui.nds;
var cs=rr.css,
nbr=nds.borderNodes,
ow=nds.window,
xw=rr.getPx(nds.body.style.width)||0,
xh=ui.headline?0:rr.getPx(nds.caption.style.height)||0,
dw,dh,nw,nh,s1,s2;
dw=xw-(ow._pastWidth||0);
dh=xh-(ow._pastHeight||0);
if(dw){
ow._pastWidth=xw;
nw=rr.getPx(nbr.n.style.width);
if(nw===null){
nw=rr.getPx(rr.getCStyle(nbr.n).right);
if(nw!==null){
nw=ow.clientWidth-nbr.n.offsetLeft-nw;
}else nw=nbr.ne.offsetLeft-nbr.n.offsetLeft;
if(nw<0||!nw)nw=null;
}else nw+=dw;
s1=nbr.n.style;
s2=nbr.s.style;
if(nw!==null&&nw>0){
s1.width=nw+"px";
s2.width=nw+"px";
s1.display=s2.display='';
}
else s1.display=s2.display='none';
nw=rr.getPx(nds.shady.style.width);
if(!nw||f_res){
nw=ow.offsetWidth||0;
}else nw+=dw;
nds.shady.style.width=nw+"px";
nds.border.className+='';
};
if(dh||(!xh&&!ow._pastHeight)){
ow._pastHeight=xh;
nh=rr.getPx(nbr.w.style.height);
if(ui.headline){};
if(nh===null){
nh=nbr.sw.offsetTop-nbr.w.offsetTop;
if(nh<0||!nh)nw=null;
}else nh+=dh;
s1=nbr.w.style;
s2=nbr.e.style;
if(nh!==null){
if(nh<0)nh=0;
s1.height=nh+"px";
s2.height=nh+"px";
};
s1.display=s2.display=!nh?'none':'';
nh=rr.getPx(nds.shady.style.height);
if(!nh||f_res){
nh=ow.offsetHeight||0;
}else nh+=dh;
nds.shady.style.height=nh+"px";
}},
init_event:function(ui){
var t=this;
ui.gEvent.add(ui.nds.title,'dblclick',function(e){
rr.breakEvent(e);
ui.set('headline',!ui.headline);
return;
if(ui.height){
ui.height_re=ui.height;
ui.set('height',0)}
else if(ui.height_re){
ui.set('height',ui.height_re);
ui.height_re=null;
}});
if(rr.IE<7)ui.addEvent('refresh',function(){
t.setBorderWidthForIE(ui)});
ui.gEvent.add(ui.nds.title,'mousedown',function(e){
t.ev_move_mousedown(e,ui)});
ui.gEvent.add(ui.nds.border,'mousedown',function(e){
t.ev_resize_mousedown(e,ui)});
ui.gEvent.add(ui.nds.bPanel,'mousedown',rr.breakEvent);
ui.gEvent.add(ui.nds.bPanel,'click',function(e){
return t.ev_control_click(e,ui)});
if(false)
ui.addEvent('drag',function(e){
return;
var dt=e.dateTrasfert;
dt.setDate('nodeMove',{
fps:60,
node:this.node,
maxLeft:600,
maxTop:1300,
minTop:0,
minLeft:0
})})},
ev_control_click:function(e,ui){
rr.breakEvent(e);
var n=rr.css_parent('b rui-window-bpanel',e.target||e.srcElement,true),cmd;
if(!n||rr.css_return!='b'||!n._w_cmd)return;
switch(cmd=n._w_cmd){
case'close':ui.close();
break;
default:
ui.initEvent('cmd_'+cmd,{})}},
ev_move_mousedown:function(e,ui){
if(!ui)return;
rr.breakEvent(e);
var tg=e.target||e.srcElement
,cwh=rr.getClientWH(ui.ownerDocument)
,drag=new this.class_drag()
,ow,ps,tm;
drag.addEvent('move_dragstart',function(e,pr){
});
drag.addEvent('move_dragend',function(e,pr){
var ui=pr.ui,v;
clearTimeout(pr._s_timmer);
ui.setStatus('move');
drag.removeEventAll();
drag=null;
ui.left=ui.left_=parseInt(ui.node.style.left)||0;
ui.top=ui.top_=parseInt(ui.node.style.top)||0;
ui.initEvent('moveStop');
if(pr.sL!=ui.left_||pr.sT!=ui.top_){
if(ui.fixed&&!(rr.IE<7)){
ui.client_top_=ui.top_
}else
if(ui.parent&&typeof(v=ui.parent.scrollTop)=='number'){
v=ui.top_-v;
ui.client_top_=v>0?v:10;
};
ui.initEvent('change',{
top:pr.sT!=ui.top,
left:pr.sL!=ui.left
})}});
drag.addEvent('move',function(e,pr){
pr.ui.initEvent('move')});
drag.initEvent('startDrag',
{
object:ui.node,
minTop:0,
minLeft:Math.min(-30,100-ui.node.offsetWidth),
deltaDrag:2,
isPosFixed:ui.fixed&&!(rr.IE<7),
autoScroll:false,
event:e
},
{
ui:ui,
sT:ui.top_,
sL:ui.left_
})},
ev_resize_mousedown:function(e,ui){
rr.breakEvent(e);
var tg=e.target||e.srcElement,
drag,tm,pr;
if(ui&&ui.resize!==false){
drag=new this.class_drag(this.listeners_resize);
drag.initEvent('resizeStart',
{
ui:ui,
autoScroll:false,
minWidth:ui.minWidth,
minHeight:ui.minHeight,
maxWidth:ui.maxWidth,
maxHeight:ui.maxHeight,
cursor:rr.getCStyle(tg).cursor||"default",
itime:rr.Opera?null:20,
isPosFixed:ui.fixed&&!(rr.IE<7),
event:e
},
{
sH:ui.height,
sW:ui.width,
sHL:ui.headline,
sT:ui.top_,
ui:ui
})}},
class_drag:rr.new_class({
prototype:rr.expansion_event,
constructor:function(listeners){
this.addEvent(rr.listeners_drag);
if(listeners)this.addEvent(listeners)}}),
listeners_resize:{
resize_dragstart:function(e,pr){
var ui=e.ui;
pr._timmer_rz=setTimeout(function(){
ui.setStatus('resize',true)},100);
ui.initEvent('resizeStart')},
resize_dragend:function(e,pr){
var ui=pr.ui;
clearTimeout(pr._timmer_rz);
ui.setStatus('resize');
if(pr.sH!=ui.height||pr.sW!=ui.width){
ui.initEvent('change',{
height:pr.sH!=ui.height,
width:pr.sW!=ui.width,
top:pr.sT!=ui.top_
})};
ui.initEvent('resizeStop')},
resizeStart:function(a1){
var pr=a1,e=pr.event,doc=pr.document||rr.document;
if(!e||(rr.IE<9?e.button:e.which)!=1)return;
var tg=e.target||e.srcElement,
ui=pr.ui,
dE=rr.WebKit||(rr.IE<6)?doc.body:doc.documentElement,
obj=pr.object,
os=ui.node.style;
rr.css_parent('n ne e se s sw w nw rui',tg,true);
var vector=rr.css_return;
if(!vector||rr.css_return=='rui')return;
var w=rr.getPx(ui.nds.body.style.width),h=ui.headline?0:rr.getPx(ui.nds.caption.style.height);
if(w===null)w=rr.getPx(rr.getCStyle(ui.nds.body).width);
if(h===null)h=rr.getPx(rr.getCStyle(ui.nds.caption).height);
if(h&&ui.headline)h=0;
function isNum(vl){
return typeof vl=='number'?vl:null;
};
var wmin=Math.max(rr.getPx(rr.getCStyle(ui.nds.body).minWidth)||0,pr.minWidth||0,70),
hmin=Math.max(rr.getPx(rr.getCStyle(ui.nds.caption).minHeight)||0,pr.minHeight||0),
wmax=pr.maxWidth?Math.max(pr.maxWidth,wmin):null,
hmax=pr.maxHeight?Math.max(pr.maxHeight,hmin):null,
od={
eventName:'resize',
itime:pr.itime,
cursor:pr.cursor,
vector:vector,
ui:pr.ui,
stX:e.clientX+(pr.isPosFixed?0:dE.scrollLeft),
stY:e.clientY+(pr.isPosFixed?0:dE.scrollTop),
cX:e.clientX,
cY:e.clientY,
isPosFixed:pr.isPosFixed,
width:w,
height:h,
minWidth:wmin,
minHeight:hmin,
maxWidth:wmax,
maxHeight:hmax,
nds:ui.nds,
left:rr.getPx(os.left),
top:rr.getPx(os.top),
minTop:isNum(pr.minTop),
maxTop:isNum(pr.maxTop),
minLeft:isNum(pr.minLeft),
maxLeft:isNum(pr.maxLeft)};
if(obj&&od.left===null&&od.right===null)od.left=obj.offsetLeft;
if(obj&&od.top===null&&od.bottom===null)od.top=obj.offsetTop;
arguments[0]=od;
this.initEvent('createDrag',arguments)},
resize:function(od,pr){
var ui=od.ui,
nds=ui.nds,
dX=(od.stX-od.psX)||0,
dY=(od.stY-od.psY)||0,
oStl=ui.node.style,
css=rr.css,
minWidth=od.minWidth,
minHeight=od.minHeight,
vec=od.vector,
wbody=nds.body,
wcaption=nds.caption,
wborder=nds.border,
wnode=nds.window,
newPos;
if(!oStl)return;
var deltaX=dX,deltaY=dY;
var newHeight=null,newWidth=null,newLeft=null,newTop=null;
if(vec=='w'||vec=='nw'||vec=='sw'){
newWidth=od.width+dX;
newLeft=od.left-deltaX;
if(newWidth<minWidth){
newWidth=minWidth;
newLeft=od.left-newWidth+od.width;
};
if(od.maxWidth>0&&newWidth>od.maxWidth){
newWidth=od.maxWidth;
newLeft=od.left-newWidth+od.width;
}};
if(vec=='ne'||vec=='n'||vec=='nw'){
newHeight=od.height+deltaY;
if(typeof od.top=='number'){
newTop=od.top-deltaY;
if(od.minHeight>0&&newHeight<od.minHeight){
newHeight=od.minHeight;
newTop=od.top-newHeight+od.height;
};
if(od.maxHeight>0&&newHeight>od.maxHeight){
newHeight=od.maxHeight;
newTop=od.top-newHeight+od.height;
};
if(newHeight<=0){
newHeight=0;
};
if(newTop<0){
newHeight+=newTop;
newTop=0;
}}};
if(vec=='e'||vec=='ne'||vec=='se'){
newWidth=od.width-deltaX;
if(newWidth<minWidth)newWidth=minWidth;
if(od.maxWidth>0&&newWidth>od.maxWidth){
newWidth=od.maxWidth;
}};
if(vec=='sw'||vec=='s'||vec=='se'){
newHeight=od.height-deltaY;
if(od.minHeight>0&&newHeight<od.minHeight){
newHeight=od.minHeight;
};
if(od.maxHeight>0&&newHeight>od.maxHeight){
newHeight=od.maxHeight;
};
if(newHeight<=0)newHeight=0;
};
if(this.pW!=newWidth||this.pH!=newHeight){
pr._change=true;
if(newWidth!==null){
wbody.style.width=newWidth+"px";
ui.width=newWidth;
}else newWidth=od.width;
if(newLeft!=null){
wnode.style.left=newLeft+"px";
ui.left=newLeft;
};
if(newHeight||newHeight==0){
if(!newHeight){
ui.headline=true;
wcaption.style.display='none';
}
else if(ui.headline){
wcaption.style.display='';
ui.headline=false;
};
wcaption.style.height=newHeight+"px";
ui.height=newHeight;
}else newHeight=od.height;
if(newTop!=null){
nds.window.style.top=newTop+"px";
ui.top=ui.top_=newTop;
};
ui.height_rz=null;
ui.initEvent('resize',{
_w:this.pW!=newWidth,
_h:this.pH!=newHeight,
width:newWidth,
height:newHeight
},pr);
this.pW=newWidth;
this.pH=newHeight;
if(rr.IE<7)ui.interface.setBorderWidthForIE(ui)}}}});


/* url: /js/m2/tmpl/tmpl_sidebar_mailbox.src.js */

rr.styles('tmpl:mbox_sidebar'
,'.b-mbox_sidebar-setting {margin-top:1ex;padding-left:1ex;}'
,'.b-mbox_sidebar-setting_link {cursor:pointer;}'
,''
,''
)
tmpl.sidebar_mailbox=function(pr,_){
var ns=this;
ns.tmpl_folders='tmpl:wg_folders';
ns.node=_('div.b-sidebar b-sidebar--mailbox b-mbox_sidebar'
,ns.folders=_('tmpl:wg_folders')
,_('div.b-mbox_sidebar-setting'
,_('a.b-mbox_sidebar-setting_link',{href:'#/settings/folders',title:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C, \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C \u0438\u043B\u0438 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0430\u043F\u043A\u0438"}
,"\u041D\u0430\u0441\u0442\u0440\u043E\u043A\u0430 \u043F\u0430\u043F\u043E\u043A"
)))};


/* url: /js/m2/ui/ui_sidebar_mailbox.src.js */

elems.sidebar_mailbox=rr.new_class({
interface:true,
parent:rr.class_baseElement,
constructor:function(pr,_,cfg){
this.interface.parent.call(this,pr,_,cfg);
this.interface.factory(this,pr,_,cfg)},
factory:function(ui,pr,_){
ui.nodes=_('tmpl:sidebar_mailbox',{
user:ramail.data_user
});
ui.node=ui.nodes.node;
this.init_events(ui)},
prototype:{
connect_off:false,
ev_connect:function(e,off){
},
set_activeFolder:function(F){
var ui=this,np=ui.nodes.folders,nn;
if(ui.activeFolder===F)return;
nn=ui.nodes.folders=masterElement(ui.nodes.tmpl_folders||'tmpl:wg_folders',{
user:ramail.data_user,
active_folder:F
});
if(np.nodeType<0)np=np.node;
if(nn.nodeType<0)nn=nn.node;
np.parentNode.replaceChild(nn,np)}},
init_events:function(ui){
}});


/* url: /js/m2/tmpl/tmpl_page_compose.src.js */

rr.styles('tmpl:page_compose'
,'.b-page_compose-body {margin-top:10px;}'
,'.b-page_compose-wrap_send {border:3px solid #CCCCCC;margin: -3px 3px 0 -3px;display:inline-block;}'
,'.b-page_compose-bt_header {width:90%;}'
,'.b-page_compose-modes_toolbar {margin-top:10px;padding:1px 0;text-align:right;font-size:80%;}'
,'.b-page_compose-modes_pleft {float:left;text-align:left;}'
,'.b-page_compose-vkey {cursor:pointer;}'
,'.b-page_compose-saveToSend {cursor:pointer;display:inline-block;padding:1px 2px;border:1px solid transparent;background-color:#FCBCBC;}'
,'.b-page_compose-saveToSend--checked {background-color: transparent;}'
,'.b-page_compose-saveToSend--checked:hover {background-color:#EEEEEE;border:1px solid #CCCCCC;cursor:pointer;display:inline-block;padding:0px 2px;}'
,'.b-page_compose-saveToSend_inp {margin:0 3px 0 0;vertical-align:middle;}'
,'.b-page_compose-modes {}'
,'.b-page_compose-mode {cursor:pointer;border:1px solid #D8EEF7;color:#0A83BF;padding:0 1ex;}'
,'.b-page_compose-mode_A {margin-right:2px;}'
,'.b-page_compose-mode--s-A .A, .b-page_compose-mode--s-B .B {cursor:default;color:#000000;border-color:#7E7E7E #7E7E7E #8B8B8B;background-color:#B4B4B4;background-image:url("/i/chameleon/ramail-icons.png");background-position:0 -3201px;background-repeat:repeat-x;}'
,'.b-page_compose-mode--s-A .A:hover, .b-page_compose-mode--s-B .B:hover {cursor:default;color:#000000;text-decoration:none;}'
,'.b-page_compose-text_body {margin-top:5px;border:1px solid #CBCBCB;border-color:#989898 #CBCBCB #CBCBCB;}'
,'.b-page_compose-wrap_attachs {margin-top:10px;}'
);
tmpl.page_compose=function(pr,_){
var ns=this;
ns.text_title="\u041D\u043E\u0432\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E";
ns.sidebar='mailbox';
ns.wrapper_page=_('tmpl:wrapper_page'
,{extend:this,css:'b-page_compose',name:'settings_view'
,title:_.text("\u041D\u043E\u0432\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E")
,top:[
_('tmpl:uToolbar'
,{
css:"b-page_compose-toolbar_top",
right:[
ns.button_cancel=_('ui:uButton',{
css_ico:'b-icons b-icons--remove',
icon:true,
text:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
})
]
}
,ns.wrap_sendMail=_('span.b-page_compose-wrap_send'
,ns.button_sendMail_dn=_('ui:uButton',{
first:true,
icon:true,css_icon:'b-icons b-icons--send_mail',
title:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E",
text:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
}))
,ns.button_saveDraft=_('ui:uButton',{
text:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A"
}))
]
,bottom:[
_('tmpl:uToolbar'
,{
css:"b-page_compose-toolbar_bottom",
right:[
ns.button_cancel_dn=_('ui:uButton',{
css_ico:'b-icons b-icons--remove',
icon:true,
text:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
})
]
}
,ns.wrap_sendMail_dn=_('span.b-page_compose-wrap_send'
,ns.button_sendMail_dn=_('ui:uButton',{
first:true,
icon:true,css_icon:'b-icons b-icons--send_mail',
title:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E",
text:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
}))
,ns.button_saveDraft_dn=_('ui:uButton',{
text:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A"
})
,_('label.b-page_compose-saveToSend b-page_compose-saveToSend--checked'
,{
onclick:function(){
var n=ns.input_saveToSend;
rr.css_set('b-page_compose-saveToSend--checked',this,n.checked)}}
,ns.input_saveToSend=_('input.b-page_compose-saveToSend_inp',{type:'checkbox',checked:true})
,_('span.text',"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u043E\u043F\u0438\u044E \u0432 \u043F\u0430\u043F\u043A\u0435 \xAB\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435\xBB")))
]
}
,_('div.b-page_compose-body'
,_('DIV.msg-header b_compose-msg-header#compose-msg-header'
,_('TABLE.inputs compose-header',{cellPadding:"0",cellSpacing:"0",border:"0"}
,_('TBODY'
,_('TR'
,_('TH'
,_('LABEL',"\u041E\u0442 \u043A\u043E\u0433\u043E:"))
,_('TD'
,_('SPAN.show-more#show-more'
,_('A.js-show c_compose-msg-cc#show-cc',{href:"http://mail.rambler.ru/mail/compose.cgi?r=d7db#",title:"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E\u043B\u0435 \xAB\u041A\u043E\u043F\u0438\u044F\xBB",style:"display: none;"}
,"\u043A\u043E\u043F\u0438\u044F"
)
,_('A.js-show c_compose-msg-bcc#show-bcc',{href:"http://mail.rambler.ru/mail/compose.cgi?r=d7db#",title:"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E\u043B\u0435 \xAB\u0421\u043A\u0440\u044B\u0442\u0430\u044F \u043A\u043E\u043F\u0438\u044F\xBB",style:"display: none;"}
,"\u0441\u043A\u0440\u044B\u0442\u0430\u044F \u043A\u043E\u043F\u0438\u044F"
))
,_('SPAN#span-from'
,"\u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D <flash-vkv@rambler.ru>"
)))
,_('TR.space'
,_('TD',{colSpan:2}))
,_('TR'
,_('TH'
,ns.button_toMail=_('ui:uButton'
,{
css:'b-page_compose-bt_header',
icon:true,css_ico:'b-icons b-icons--addr',
text:"\u041A\u043E\u043C\u0443:"
}))
,_('TD.input-wrapper'
,_('INPUT.text full#input-to',{title:"\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u043A\u043B\u0438\u043A \u043F\u043E \u043F\u043E\u043B\u044E \u043E\u0442\u043A\u0440\u043E\u0435\u0442 \u0430\u0434\u0440\u0435\u0441\u043D\u0443\u044E \u043A\u043D\u0438\u0433\u0443",type:"text",name:"to"})))
,_('TR.space'
,_('TD',{colSpan:2}))
,_('TR.js-hide#compose-msg-cc'
,_('TH'
,ns.button_ccMail=_('ui:uButton'
,{
css:'b-page_compose-bt_header',
icon:true,css_ico:'b-icons b-icons--addr',
text:"\u041A\u043E\u043F\u0438\u044F:"
}))
,_('TD.input-wrapper'
,_('INPUT.text full#input-cc',{type:"text",name:"cc"})))
,_('TR.space'
,_('TD',{colSpan:2}))
,_('TR.js-hide#compose-msg-bcc'
,_('TH'
,ns.button_bccMail=_('ui:uButton'
,{
css:'b-page_compose-bt_header',
icon:true,css_ico:'b-icons b-icons--addr',
text:"\u0421. \u043A\u043E\u043F\u0438\u044F:"
}))
,_('TD.input-wrapper'
,_('INPUT.text full#input-bcc',{type:"text",name:"bcc"})))
,_('TR.space'
,_('TD',{colSpan:2}))
,_('TR.msg-header-subject'
,_('TH'
,ns.button_subj=_('ui:uButton'
,{
css:'b-page_compose-bt_header',
icon:true,css_ico:'b-icons b-icons--other',
text:"\u0422\u0435\u043C\u0430:"
}))
,_('TD.input-wrapper'
,_('INPUT.text full#input-subj',{type:"text",name:"subject"}))))))
,_('div.b-page_compose-modes_toolbar'
,_('div.b-page_compose-modes_pleft'
,_('a.b-page_compose-vkey'
,_('span.b-page_compose-vkey_text',"\u0412\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430")))
,_('span.b-page_compose-modes b-page_compose-mode--s-A'
,_('a.b-page_compose-mode b-page_compose-mode_A A',{title:"\u041E\u0431\u044B\u0447\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442"}
,_('span.SA',"\u041F\u0440\u043E\u0441\u0442\u043E \u0442\u0435\u043A\u0441\u0442"))
,_('a.b-page_compose-mode b-page_compose-mode_B B',{title:"\u0422\u0435\u043A\u0441\u0442 \u0441 \u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u043C"}
,_('span.SB',"\u0421 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435\u043C"))))
,_('div.b-page_compose-text_body'
,ns.editor=_('tmpl:compose_editor',{name:'text'}))
,_('div.b-page_compose-wrap_attachs'
,_('div.b-page_compose-attachs_button'
,_('ui:uButton',{
icon:true,
css_ico:'b-icons b-icons--attach_file',
text:"\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0444\u0430\u0439\u043B\u044B..."
}))
,_('h4',"\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u043B\u0451\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B ",_('small',"(\u043E\u0431\u0449\u0438\u043C \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u043C \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 20 \u043C\u0431)")))))};



/* url: /js/m2/ui/ui_compose_editor.src.js */

var tinyMCE_GZ={loaded:true};
var tinyMCEPreInit={
suffix:'_src'
,baseURL:'http://m3.mail-test.rambler.ru/js/tiny_mce'
,query:false
};
tmpl_js.compose_editor=rr.new_class({
src_wysiwyg:'http://m3.mail-test.rambler.ru/js/tiny_mce/tiny_mce_src.js',
interface:true,
constructor:function(pr,_,cfg){
var ui=this,ns=new tmpl.compose_editor(pr,_);
ui.nodes=ns;
ui.node=ns.node;
setTimeout(function(){
ui.set_wysiwyg(true)},1)},
init_events:function(ui){
},
prototype:{
mode_wysiwyg:false,
set_wysiwyg:function(v){
var ui=this;
if(!v){
if(ui.mode_wysiwyg){
ui.mode_wysiwyg=false;
};
return
};
if(ui.mode_wysiwyg)return;
ui.mode_wysiwyg='loading';
ui.interface.load_wysiwyg(ui,function(){
if(ui.mode_wysiwyg=='loading'){
ui.interface.init_wysiwyg(ui);
ui.mode_wysiwyg=true;
}})}},
ready_wysiwyg:false,
load_wysiwyg_cbList:[],
load_wysiwyg:function(ui,cb){
var st=this.ready_wysiwyg,a=this.load_wysiwyg_cbList;
if(window.tinymce&&tinymce.dom){
tinymce.dom.Event.domLoaded=true;
this.ready_wysiwyg=true;
if(typeof cb=='function')cb();
return true;
};
if(st===true){
if(typeof cb=='function')cb();
return true;
};
if(typeof cb=='function')a.push(cb);
if(st)return;
this.ready_wysiwyg='loading';
rr.appendScript(this.src_wysiwyg,{
rm:true,
event:function(src,status){
tinymce.dom.Event.domLoaded=true;
ui.interface.ready_wysiwyg=true;
for(var i=0,x;x=a[i++];)x();
a.length=0;
}})},
__id_textarea_:1,
init_wysiwyg:function(ui){
var id='__init_wysiwyg_mce-'+(this.__id_textarea_++);
ui.nodes.textarea_html.id=id;
tinyMCE.init({mode:"exact"
,forced_root_block:"div"
,elements:id
,content_css:false
,language:false
,plugins:"spellchecker"
,theme:"ramail"
,setup:function(ed){
ed.onPreInit.add(function(){
rr.styles_include('wysiwyg_frame:rm_tinymce',ed.getDoc())})}})}});


/* url: /js/m2/compose.src.js */

ramail.addEvent('open_page',function(e){
if(e.returnValue==false)return;
var hs=e.hash,x=(hs.match(/^\/([^\/]+)/)||[])[1],mbox,what,page,filter;
if(!x||!(x=='compose'||x.toLocaleLowerCase()=='compose'))return;
e.hash='/compose';
e.handler='open_compose';
return false;
});
ramail.open_compose=function(e){
var page=masterElement('tmpl:page_compose');
page.pg_name='compose';
ramail.page_connect(page,e)};


/* url: /js/m2/tmpl/tmpl_page_mailbox.src.js */

rr.styles('tmpl:pg_mailbox'
,'.b-pg_mailbox-tbar2 {border-bottom:1px solid #BBBBBB;display:block;padding:1.5ex 0 1ex;display:none;}'
,'.b-pg_mailbox-input_search {width:20em;}'
,'.b-pg_mailbox-sel_all, .b-pg_mailbox-sel_unread, .b-pg_mailbox-sel_x {color:#000000;padding:0 0.5ex;text-decoration:none;cursor:pointer;}'
,'.b-pg_mailbox-sel_unread, .b-pg_mailbox-sel_x {margin-left:1ex;}'
,'.b-pg_mailbox-sel_all:hover, .b-pg_mailbox-sel_unread:hover {background-color:#C7DFEE;}'
,'.b-pg_mailbox-sel_x {background-color:#FFE3E3;}'
,'.b-pg_mailbox-sel_x .x {color:#FF0000;font-weight:bold;margin-left:1ex;}'
,'.b-pg_mailbox-sel_x:hover {background-color:#C7DFEE;border-color:#ABC1CF;}'
,'.b-pg_mailbox-pager {margin-top:10px;}'
);
tmpl.rm_mailbox=function(pr,_){
var ns=this;
ns.text_title=rr.printx("\u041F\u0430\u043F\u043A\u0430 \xAB%s\xBB",'\u0412\u0445\u043E\u0434\u044F\u0448\u0438\u0435');
ns.use_sidebar="default";
var pg=ns.wrapper_page=_('tmpl:wrapper_page'
,{extend:ns,name:'contacts'
,title:["\u041F\u0430\u043F\u043A\u0430 \xAB",_('span',_.text("flash.vkv@gmail.com")),"\xBB,  \u043F\u0438\u0441\u044C\u043C\u0430 1 \u2013 100 \u0438\u0437 1567"]
,top:[
_('tmpl:uToolbar'
,{
right:[
ns.bt_remoev=_('ui:uButton',{
css_ico:'b-icons b-icons--remove',
icon:true,
group:'left',
title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u043F\u0438\u0441\u044C\u043C\u0430",
text:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
})
,ns.bt_rm_spam=_('ui:uButton',{
css_ico:'b-icons b-icons--spam',
icon:true,
group:'right',
title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u043A\u0430\u043A \u0441\u043F\u0430\u043C",
text:"\u0421\u043F\u0430\u043C!"
})
,_('ui:rm_menu'
,{
css_open:'r-topline_link--open',
position:'bottom left',
open:'click',
node:ns.bt_rm_other=_('ui:uButton',{
css_ico:'b-icons b-icons--other',
icon:'right',
first:true,
text:"\u0414\u0440\u0443\u0433\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
})}
,_('tmpl:rm_mailbox_menu'))
]
}
,_('ui:uInput',{
css:'b-pg_mailbox-input_search',
group:"left",
help:"\u041F\u043E\u0438\u0441\u043A \u0432 \u043F\u0430\u043F\u043A\u0435",
text:""
})
,_('ui:uButton',{
css_ico:'b-icons b-icons--search',
icon:true,
group:"center",
text:"\u041F\u043E\u0438\u0441\u043A"
}))
]
}
,_('span.b-pg_mailbox-tbar2'
,ns.mbox_selectAll=_('a.b-pg_mailbox-sel_all',{href:"#"}
,"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435"
)
,","
,ns.mbox_selectUnread=_('a.b-pg_mailbox-sel_unread',{href:"#"}
,"\u041D\u0435\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0435"
)
,ns.mbox_select_sw=_('span'
,","
,ns.mbox_select_x=_('a.b-pg_mailbox-sel_x',{title:"\u0423\u0431\u0440\u0430\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435",href:"#"}
,ns.mbox_select_text=_.text('#N')
,_('span.x',"\xD7"))))
,ns.mbox=_('ui:rm_mbox'
,rr.extend({list:false,length:pr.length||5}))
,_('ui:mailbox_pager'
,rr.extend({css:'b-pg_mailbox-pager',max:19,num:11}
,pr.prm_pager
)))};
rr.styles('tmpl:mailbox_pager'
,'.b-mbox_pager {font-size:0.95em;height:2.5em;line-height:2.5em;padding:0 15px;text-align:center;position:relative;}'
,'.b-mbox_pager-next, .b-mbox_pager-prev {color:#666666;position:absolute;cursor:default;}'
,'a.b-mbox_pager-next, a.b-mbox_pager-prev {color:#666666;text-decoration:none;cursor:pointer;}'
,'.b-mbox_pager-next {right:15px;}'
,'.b-mbox_pager-prev {left:15px;}'
,'.b-mbox_pager-text {font-weight:bold;}'
,'a .b-mbox_pager-text {color:#466777;text-decoration:underline;}'
,'a:hover .b-mbox_pager-text {color:#2A3D47;}'
,'.b-mbox_pager-key {display:inline;font-size:70%;}'
,'.b-mbox_pager-arr {font-size:150%;}'
,'.b-mbox_pager-box {background-color:#FFFFFF;padding:0.2em 1ex;position:relative;}'
,'.b-mbox_pager-page {background-color:#FFFFFF;border-style:solid;border-width:1px;padding:0.25em 0.6em;margin:0 2px;}'
,'span.b-mbox_pager-page {background-color:#9ECBE2;font-weight:bold;}'
);
tmpl.mailbox_pager=function(pr,_){
var ns=this;
ns.node=_('div.b-mbox_pager',{css:pr.css}
,_((pr.next_page?'a':'span'),{className:'b-mbox_pager-next',title:(pr.next_page?"\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443":'')}
,_('span.b-mbox_pager-text',"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F")
,_('span.b-mbox_pager-key'
,' Ctrl '
,_('span.b-mbox_pager-arr'
,'\u2192'
)))
,_((pr.prev_page?'a':'span'),{className:'b-mbox_pager-prev',title:(pr.prev_page?"\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443":'')}
,_('span.b-mbox_pager-key'
,_('span.b-mbox_pager-arr'
,'\u2190'
)
,' Ctrl '
)
,_('span.b-mbox_pager-text',"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F"))
,_('span.b-mbox_pager-box'
,_.forEach(pr.pages,function(v){
if(v.is_selected){
return _('span.b-mbox_pager-page',{title:"\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",text:v.num})};
return _('a.b-mbox_pager-page'
,{
href:'#'+v.num,
title:rr.printx("\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 %s",v.num),
text:(v.is_skip?'...':v.num)})})))};
rr.styles('tmpl:mailbox_menu'
,'.b-mailbox_menu {padding:0 0 0.5em;}'
,'.b-mailbox_menu-H {color:#000000;font-size:90%;font-weight:bold;margin:1em 1em 0.5em;}'
,'.b-mailbox_menu-DL {font-size:90%;padding:0.5em;}'
,'.b-mailbox_menu-item {cursor:pointer;display:block;line-height:1.75em;white-space:nowrap;}'
,'.b-mailbox_menu-item:hover {background-color:#FDDCAE;}'
,'.b-mailbox_menu-text {color:#999999;display:block;padding:0 0.5em;}'
,'.b-mailbox_menu-TABLE {width:400px;}'
,'.b-mailbox_menu-TD {vertical-align:top;width:200px;}'
,'.b-mailbox_menu-moveto_list {border-right:1px solid #BEBEBE;}'
);
tmpl.rm_mailbox_menu=function(pr,_){
var ns=this,folders=ramail.data_folders;
ns.comand_box=_('div.b-mailbox_menu-cmd'
,_('H6.b-mailbox_menu-H'
,"\u0414\u0440\u0443\u0433\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
)
,_('DL.b-mailbox_menu-DL'
,_('DD.b-mailbox_menu-item',{title:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043C\u0435\u0442\u043A\u0443 \u0432\u0430\u0436\u043D\u043E\u0441\u0442\u0438 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u043C \u043F\u0438\u0441\u044C\u043C\u0430\u043C",__cmd_:'do-flag'}
,_('span.b-mailbox_menu-text'
,"\u041F\u043E\u043C\u0435\u0442\u0438\u0442\u044C \u043A\u0430\u043A \u0432\u0430\u0436\u043D\u043E\u0435"
))
,_('DD.b-mailbox_menu-item',{title:"\u0421\u043D\u044F\u0442\u044C \u043C\u0435\u0442\u043A\u0443 \u0432\u0430\u0436\u043D\u043E\u0441\u0442\u0438 \u0441 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0438\u0441\u0435\u043C",__cmd_:'do-unflag'}
,_('span.b-mailbox_menu-text'
,"\u0421\u043D\u044F\u0442\u044C \u043C\u0435\u0442\u043A\u0443 \u0432\u0430\u0436\u043D\u043E\u0441\u0442\u0438"
))
,_('DD.b-mailbox_menu-item',{title:"\u041F\u043E\u043C\u0435\u0442\u0438\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u043A\u0430\u043A \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0435",__cmd_:'do-read'}
,_('span.b-mailbox_menu-text'
,"\u041F\u043E\u043C\u0435\u0442\u0438\u0442\u044C \u043A\u0430\u043A \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0435"
))
,_('DD.b-mailbox_menu-item',{title:"\u041F\u043E\u043C\u0435\u0442\u0438\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u043A\u0430\u043A \u043D\u0435\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0435",__cmd_:'do-unread'}
,_('span.b-mailbox_menu-text'
,"\u041F\u043E\u043C\u0435\u0442\u0438\u0442\u044C \u043A\u0430\u043A \u043D\u0435\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0435"
))
,_('DD.b-mailbox_menu-item',{title:"\u041F\u0435\u0440\u0435\u0430\u0434\u0440\u0435\u0441\u043E\u0432\u0430\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E",__cmd_:'do-bounce'}
,_('span.b-mailbox_menu-text'
,"\u041F\u0435\u0440\u0435\u0430\u0434\u0440\u0435\u0441\u043E\u0432\u0430\u0442\u044C"
))
,_('DD.b-mailbox_menu-item',{title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u0438\u0437 \u043F\u0430\u043F\u043A\u0438",__cmd_:'do-zapmbox'}
,_('span.b-mailbox_menu-text'
,"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u0430\u043F\u043A\u0443..."
))));
ns.move_box=_('div.b-mailbox_menu-mv'
,_('H6.b-mailbox_menu-H',"\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 \u043F\u0430\u043F\u043A\u0443...")
,_('DL.b-mailbox_menu-DL b-mailbox_menu-moveto_list'
,rr.map(['INBOX','SentBox','DraftBox','Trash'],function(x,i){
var name=["\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435","\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435","\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A\u0438","\u041A\u043E\u0440\u0437\u0438\u043D\u0430"][i];
return _('DD.b-mailbox_menu-item'
,{
title:rr.printx("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u0432 \u043F\u0430\u043F\u043A\u0443 \xAB%s\xBB",name)
,__cmd_:'move',__value_:x
}
,_('span.b-mailbox_menu-text'
,name
))})
,rr.map(folders,function(x){
var name=x['folder.name'];
switch(name){
case'INBOX':case'SentBox':case'DraftBox':case'Trash':
return false
};
return _('DD.b-mailbox_menu-item'
,{
title:rr.printx("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u0432 \u043F\u0430\u043F\u043A\u0443 \xAB%s\xBB",name)
,__cmd_:'move',__value_:name
}
,_('span.b-mailbox_menu-text'
,_.text(name)))})))
ns.node=_('DIV.b-mailbox_menu'
,_('TABLE.b-mailbox_menu-TABLE',{cellPadding:0,cellSpacing:0,border:0}
,_('TBODY'
,_('TR'
,_('TD.b-mailbox_menu-TD'
,ns.move_box
)
,_('TD.b-mailbox_menu-TD collector'
,ns.comand_box
)))))};


/* url: /js/m2/tmpl/tmpl_mbox.src.js */

rr.styles('tmpl:rm_mbox'
,rr.IE&&"head {filter:;}"
,".b-mtbox-wrapper {margin-top:10px;}"
,".b-mtbox-wrapper_box {position:relative;overflow:hidden;}"
,".b-mtbox {table-layout:fixed;width:100%;overflow:hidden;margin:0;padding:0;}"
,".b-mtbox a {color:#575757;text-decoration:none;}"
,".b-mtbox a:hover {color:#353535;text-decoration:underline;}"
,'a.b-mtbox-h_cap {padding:0.4em 0.5em;cursor:pointer;}'
,'span.b-mtbox-h_cap {padding:0.4em 0;text-align:center;}'
,'.b-mtbox-h_cap--attach {margin-left:-1px;}'
,".b-mtbox-cell {-o-text-overflow:ellipsis;text-overflow:ellipsis;min-height:20px;height:"+(rr.IE<7?"20px;":"1.4em;")
+"overflow:hidden;font-size:95%;padding:0.4em .5em;vertical-align:middle;white-space:nowrap;border-bottom:1px solid #bbb;padding-left:.5em;}"
,rr.Opera&&".b-mtbox-row--selected .b-mtbox-cell {border-bottom:1px solid;}"
,".b-mtbox-row--flag {background-color: #FEFEC4;}"
,".b-mtbox-row--selected {background-color: #C7DFEE;}"
,'.b-mtbox-row--selected .b-mtbox-cell {border-color:#FFFFFF;}'
,rr.Opera&&'.b-mtbox-row--selected .b-mtbox-cell {border-left-style:none;}'
,".b-mtbox-row--null td * {visibility:hidden;}"
,".b-mtbox-check, .b-mtbox-h_check {width:33px;text-align:center;text-indent:0;padding-left:0;padding-right:0;}"
,".b-mtbox-status, .b-mtbox-flags, .b-mtbox-attach, .b-mtbox-h_status, .b-mtbox-h_flags, .b-mtbox-h_attach {width:40px;text-align:center;padding-left:0;padding-right:0;}"
,".b-mtbox-from, .b-mtbox-h_from {width:30%;}"
,".b-mtbox-null {width:0px;overflow:visible;text-align:right;line-height:0.6em;}"
,".b-mtbox-subj {width:60%;}"
,".b-mtbox-attach, .b-mtbox-h_attach {width:30px;}"
,".b-mtbox-date {width:9em;text-align:right;cursor:default;}"
,".b-mtbox-h_date {width:9em;}"
,".b-mtbox-size {width:6em;text-align:right;}"
,".b-mtbox-from {padding-left:1ex;}"
,".b-mtbox-subj {padding-left:1ex;}"
,".b-mtbox-edit {width:9.5em;}"
,".b-mtbox-edit {text-align:right;}"
,".b-mtbox-grd {overflow:hidden;display:block;display:-moz-inline-stack;display:inline-block;background-color:transparent;background-position:0 50%;pointer-events:none;}"
,rr.IE<7&&".b-mtbox-subj-link {margin-left:1ex;}"
,rr.IE==7&&".b-mtbox-grd {position:relative;}"
,".b-mtbox-grd {width:40px;margin-left:-40px;height:1.3em;min-height:20px;_display:none;}"
,'.b-mtbox-grd {background-image:url("http://i.r0.ru/m/i/chameleon/branded/beasts/ramail-mask_beasts.png");background-repeat:no-repeat;background-position:0 50%;}'
,'.b-mtbox-row--flag .b-mtbox-grd {background-position: -80px 50%;}'
,'.b-mtbox-row--selected .b-mtbox-grd {background-position: -120px 50%;}'
,".b-mtbox-attach-icon {"+(rr.IE<7?'visibility:hidden;':'display:none;')+"}"
,".b-mtbox-row--unread {font-weight:bold;}"
,".b-mtbox-status-icon, .b-mtbox-flags-icon, .b-mtbox-row--attach .b-mtbox-attach-icon {visibility:visible;height:20px;overflow:hidden;vertical-align:middle;width:18px;display:block;display:-moz-inline-stack;display:inline-block;}"
,".b-mtbox-status-icon, .b-mtbox-flags-icon {cursor:pointer;}"
,'.b-mtbox-icon {background-image:url("http://i.r0.ru/m/i/chameleon/ramail-icons.png");}'
,".b-mtbox-row--unread .b-mtbox-status-icon {background-position:50% -1834px;}"
,".b-mtbox-row--unread .b-mtbox-status-icon:hover {background-position:50% -1444px;}"
,".b-mtbox-status-icon {background-position:50% -1266px;}"
,".b-mtbox-status-icon:hover {background-position:50% -1206px;}"
,".b-mtbox-flags-icon {background-position:50% -1415px;}"
,".b-mtbox-flags-icon:hover {background-position:50% -875px;}"
,".b-mtbox-flags-icon {background-position:50% -1415px;}"
,".b-mtbox-flags-icon:hover {background-position:50% -1355px;}"
,".b-mtbox-row--flag .b-mtbox-flags-icon {background-position:50% -935px;}"
,".b-mtbox-row--flag .b-mtbox-flags-icon:hover {background-position:50% -875px;}"
,".b-mtbox-attach-icon {background-position:50% -125px;}"
,""
,""
);
tmpl.rm_mbox=function(pr,_){
var ns=this;
ns.node=_('div.b-mtbox-wrapper'
,_('table.b-mtbox b-mtbox--head',{cellSpacing:0,cellPadding:0,border:0},
_('colgroup',
_('col.b-mtbox-check'),
_('col.b-mtbox-status'),
_('col.b-mtbox-from'),
_('col.b-mtbox-subj'),
_('col.b-mtbox-attach'),
_('col.b-mtbox-date'),
_('col.b-mtbox-flags')),
_('tbody'
,_('tr.b-mtbox-h_row'
,_('td.b-mtbox-h_cell b-mtbox-h_check s-table_head-cell'
,_('span.b-mtbox-h_cap s-table_head-cap s-table_head-cap--first'
,ns.checkbox_all=_('input.b-mtbox-checkbox',{type:"checkbox",name:"checkbox_all",title:"Auaaeeou ana ienuia ia no?aieoa"})))
,_('td.b-mtbox-h_cell b-mtbox-h_status s-table_head-cell'
,_('span.b-mtbox-h_cap s-table_head-cap'
,ns.status=_('a.b-mtbox-status-icon b-mtbox-icon')))
,_('td.b-mtbox-h_cell b-mtbox-h_from s-table_head-cell'
,ns.from_link=_('a.b-mtbox-h_cap s-table_head-cap',"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C"))
,_('td.b-mtbox-h_cell b-mtbox-h_subj s-table_head-cell',{colSpan:2}
,ns.subj_link=_('a.b-mtbox-h_cap s-table_head-cap b-mtbox-subj-link',"\u0422\u0435\u043C\u0430"))
,_('td.b-mtbox-h_cell b-mtbox-h_date s-table_head-cell'
,ns.date_link=_('a.b-mtbox-h_cap s-table_head-cap',"\u041F\u0440\u0438\u043D\u044F\u0442\u043E"))
,_('td.b-mtbox-h_cell b-mtbox-h_flag s-table_head-cell'
,_('span.b-mtbox-h_cap s-table_head-cap'
,ns.flag=_('a.b-mtbox-flags-icon b-mtbox-icon'))))))
,ns.box=_('div.b-mtbox-wrapper_box'))},
tmpl.rm_mbox_table=function(pr,_){
this.node=_('table.b-mtbox b-mtbox--classic',{cellSpacing:0,cellPadding:1,border:0},
_('colgroup',
_('col.b-mtbox-check'),
_('col.b-mtbox-status'),
_('col.b-mtbox-from'),
!(rr.IE<7)&&_('col.b-mtbox-null'),
_('col.b-mtbox-subj'),
!(rr.IE<7)&&_('col.b-mtbox-null'),
_('col.b-mtbox-attach'),
_('col.b-mtbox-date'),
_('col.b-mtbox-flags')),
this.box=_('tbody'))},
tmpl.rm_mbox_row=function(pr,_){
var ns=this,grd=!(rr.IE<7);
ns.node=_('tr.b-mtbox-row',
_('td.b-mtbox-cell b-mtbox-check',
ns.checkbox=_('input.b-mtbox-checkbox',{type:"checkbox",name:"msgs",title:"\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u044D\u0442\u043E \u043F\u0438\u0441\u044C\u043C\u043E"})),
_('td.b-mtbox-cell b-mtbox-status',
ns.status=_('a.b-mtbox-status-icon b-mtbox-icon')),
_('td.b-mtbox-cell b-mtbox-from',
ns.from_link=_('a.b-mtbox-from-link',
ns.from_text=_.text(" "))),
grd&&_('td.b-mtbox-cell b-mtbox-null',_('span.b-mtbox-grd')),
ns.subj_cell=_('td.b-mtbox-cell b-mtbox-subj',
ns.subj_link=_('a.b-mtbox-subj-link',
ns.subj_text=_.text(" "))),
grd&&_('td.b-mtbox-cell b-mtbox-null',_('span.b-mtbox-grd')),
_('td.b-mtbox-cell b-mtbox-attach',
ns.attach=_('span.b-mtbox-attach-icon b-mtbox-icon')),
ns.date_cell=_('td.b-mtbox-cell b-mtbox-date',
ns.date_text=_.text(" ")),
_('td.b-mtbox-cell b-mtbox-flags',
ns.flag=_('a.b-mtbox-flags-icon b-mtbox-icon')))};
tmpl_js.rm_mbox_table=function(pr,_){
var d=_.document,grd=!(rr.IE<7),p,n;
this.node=p=d.createElement('table');
p.className='b-mtbox';
p.cellSpacing=0;p.cellPadding=1;p.border=0;
n=p.appendChild(d.createElement('colgroup'));
n.appendChild(d.createElement('col')).className="b-mtbox-check";
n.appendChild(d.createElement('col')).className="b-mtbox-status";
n.appendChild(d.createElement('col')).className="b-mtbox-from";
if(grd)n.appendChild(d.createElement('col')).className="b-mtbox-null";
n.appendChild(d.createElement('col')).className="b-mtbox-subj";
if(grd)n.appendChild(d.createElement('col')).className="b-mtbox-null";
n.appendChild(d.createElement('col')).className="b-mtbox-attach";
n.appendChild(d.createElement('col')).className="b-mtbox-date";
n.appendChild(d.createElement('col')).className="b-mtbox-flags";
this.box=p.appendChild(d.createElement('tbody'))};
tmpl_js.rm_mbox_row=(function(){
var nx,d,mx;
function cmx(x){
var i,v;mx={};
for(i in x){
if(v=x[i]&&x[i].className)mx[v]=i;
}};
return function(pr,_){
if(!nx||d!==_.document){
var x=new tmpl.rm_mbox_row(false,_);
if(!mx)cmx(x);
nx=x.node.cloneNode(true);
d=_.document;
return x;
};
this.node=nx.cloneNode(true);
var ns=this,a=ns.node.getElementsByTagName("*"),i=0,n,v;
while(n=a[i++])if(v=n.className)if(v=mx[v])ns[v]=n;
n=ns.from_link;
ns.from_text=n.firstChild||n.appendChild(d.createTextNode(""));
n=ns.subj_link;
ns.subj_text=n.firstChild||n.appendChild(d.createTextNode(""));
n=ns.date_cell;
ns.date_text=n.firstChild||n.appendChild(d.createTextNode(""));
return ns;
}})();


/* url: /js/m2/ui/ui_mbox.src.js */

tmpl_js.rm_mailbox=function(pr,_,cfg){
var ns=tmpl.rm_mailbox,n;
if(!ns.prototype.nodeType)ns.prototype.nodeType=-1;
ns=new ns(pr,_,cfg);
function click(n,ev){
if(rr.IE)n.ondblclick=ev;
n.onclick=ev;
if(rr.Opera){
n.addEventListener('mousedown',rr.breakEvent,false);
n.addEventListener('mousedown',n.focus,false)}}
if(n=ns.mbox_selectAll){
click(n,function(){
ns.mbox.select_all();
return false;
})};
if(n=ns.mbox_selectUnread){
click(n,function(){
ns.mbox.select_unread();
return false;
})};
if(n=ns.mbox_select_x){
click(n,function(){
ns.mbox.select_clear();
return false;
})};
if(n=ns.mbox_select_sw){
n.style.display=ns.mbox.all_selected?'':'none';
ns.mbox.addEvent('change_selected',function(){
var N=this.all_selected;
ns.mbox_select_sw.style.display=N?'':'none';
if(N){
ns.mbox_select_text.data=rr.printx(
rv.number(N,"\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u043E %s \u043F\u0438\u0441\u0435\u043C\u043E","\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u043E %s \u043F\u0438\u0441\u0435\u043C\u0430","\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u043E %s \u043F\u0438\u0441\u0435\u043C"),
this.all_selected||0
)}})};
n=null;
return ns;
};
elems.rm_mbox=rr.new_class({
interface:true,
parent:rr.class_baseElement,
constructor:function(pr,_,cfg){
this.interface.parent.call(this,pr,_,cfg);
this.interface.factory(this,pr,_,cfg)},
factory:function(ui,pr,_){
ui.master=_.clone();
ui.nodes=_('tmpl:rm_mbox'
,ui.tbox=_('tmpl:rm_mbox_table'))
ui.node=ui.nodes.node;
ui.box=ui.nodes.box;
ui.tboxs=[ui.tbox];
ui.rows=[];
ui.list=[];
ui.cashe_tboxs_=[];
ui.cashe_rows_=[];
if(pr)ui.set(pr,false);
ui.refresh(true);
this.init_event(ui)},
prototype:{
length:50,
reset:function(){
},
set_row:function(x,p,v){
},
set_list:function(a){
},
select_all:function(){
this.pastIndexRow=0;
var a=this.list,all=true,N,i,x;
if(a){
i=N=l=a.length;
while(i--)if(x=a[i]){
if(!x.selected)all=false;
x.selected=true;
};
if(all){
N=0;
this.selected=false;
for(i=l;i--;)if(x=a[i]){
x.selected=false;
}};
if(this.all_selected!==N){
this.all_selected=N;
this.initEvent('change_selected')};
this.interface.re_change(this)}},
select_unread:function(){
this.pastIndexRow=0;
var a=this.list,all=true,N=0,fg,i,x;
if(!a)return;
for(i=a.length;x=i--&&a[i];){
if(!x.selected!==!x.unread)all=false;
if(x.selected=!!x.unread){
this.selected=true;
N++;
}};
if(all){
N=0;
this.selected=false;
for(i=a.length;x=i--&&a[i];){
x.selected=false;
}};
if(this.all_selected!==N){
this.all_selected=N;
this.initEvent('change_selected')};
this.interface.re_change(this)},
select_clear:function(){
this.pastIndexRow=0;
var a=this.list,i,x;
if(!a)return;
this.selected=false;
for(i=a.length;x=i--&&a[i];){
x.selected=false;
};
if(this.all_selected!==0){
this.all_selected=0;
this.initEvent('change_selected')};
this.interface.re_change(this)}},
init_event:function(ui){
var fn;
ui.node.__cmd_='node';
function g_ix(n){
while(n){
if(typeof n._ix__=='number')return n._ix__;
n=n.parentNode;
}};
ui.gEvent.add(ui.node,'click',fn=function(e){
if(e.returnValue===false)return;
var cmd,n=e.srcElement||e.target,it=ui.interface,x;
for(;n;n=n.parentNode){
switch(cmd=n._cmd__){
case'node':return;
case'link':return;
case'row':
case'check':
rr.breakEvent(e);
e.shiftKey?it.checkGroup_row(ui,g_ix(n)):it.check_row(ui,g_ix(n));
return;
case'status':
rr.breakEvent(e);
it.check_status(ui,g_ix(n));
return;
case'flag':
rr.breakEvent(e);
it.check_flag(ui,g_ix(n));
return;
default:if(n===ui.node)return;
}}});
if(rr.IE)ui.gEvent.add(ui.node,'dblclick',fn);
ui.gEvent.add(ui.node,'mousedown',function(e){
if(e.returnValue===false||(rr.IE?e.button:e.which)!=(rr.IE>8?0:1)){
return;
};
var cmd,n=e.srcElement||e.target,it=ui.interface,x;
for(;n;n=n.parentNode){
switch(cmd=n._cmd__){
case'row':x=!e.shiftKey;
case'check':
rr.breakEvent(e);
it.selected(ui,e,g_ix(n),x);
return;
case'node':
case'link':
case'status':
case'flag':
return;
default:if(n===ui.node)return;
}}})},
set:function(ui,pr,v,pv){
var it=this,tv=typeof v,x,und;
switch(pr){
case'length':if(tv!=='number'||!v&&v!==0)return;
break;
case'list':if(tv!='object')return;
break;
default:return;
};
return v;
},
refresh:function(ui,ch,rz){
var it=ui.interface,nds=ui.nds,_=ui.master,rw,bx,v,i,l;
if(rz||ch.length){
l=ui.length;
i=ui.rows.length;
rw=_.global.tmpl.rm_mbox_row;
if(!rw.prototype.nodeType)rw.prototype.nodeType=-1;
if(i<l){
bx=ui.tbox;
for(;i<ui.length;i++){
if(i&&i%16===0){
bx=ui.tboxs[ui.tboxs.length]=ui.cashe_tboxs_.pop()||_.tmpl('tmpl:rm_mbox_table')};
v=ui.rows[i]=ui.cashe_rows_.pop()||new rw(false,_);
v.index=v.node._ix__=i;
if(!v.acv_){
v.acv_=true;
v.node._cmd__='row';
v.checkbox._cmd__='check';
v.status._cmd__='status';
v.from_link._cmd__='link';
v.subj_link._cmd__='link';
v.flag._cmd__='flag';
};
this.row_reset(v,ui.list[i]||false);
bx.box.appendChild(v.node);
if(bx!==ui.tbox){
ui.box.appendChild(bx.node);
ui.tbox=bx;
}}}
else if(i>l){
while(i-->l){
ui.cashe_rows_.push(v=ui.rows.pop());
v.node.parentNode.removeChild(v.node)};
l=Math.ceil(ui.length/16)||1;
i=ui.tboxs.length;
while(i-->l){
ui.cashe_tboxs_.push(v=ui.tboxs.pop());
v.node.parentNode.removeChild(v.node)};
ui.tbox=ui.tboxs[i];
}}},
reflow_list:function(ui){
},
row_reset:function(ns,pr){
var fg,vs=ns.values_||(ns.values_={}),u,x,v;
x="b-mtbox-row";
if(!pr){
x+=" b-mtbox-row--null";
if(vs.clss!==x){
ns.node.className=vs.clss=x;
fg=true;
};
return fg;
};
if(v=!!pr.selected)x+=' b-mtbox-row--selected';
if(vs.selected!==v){
ns.checkbox.checked=vs.selected=v;
fg=true;
};
if(v=!!pr.unread)x+=' b-mtbox-row--unread';
if(vs.unread!==v){
ns.status.title=v?"\u041F\u043E\u043C\u0435\u0442\u0438\u0442\u044C \u043A\u0430\u043A \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u043E\u0435":"\u041F\u043E\u043C\u0435\u0442\u0438\u0442\u044C \u043A\u0430\u043A \u043D\u0435\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u043E\u0435";
vs.unread=v;
fg=true;
};
if(v=!!pr.flag)x+=' b-mtbox-row--flag';
if(vs.flag!==v){
ns.flag.title=pr.flag?"\u0421\u043D\u044F\u0442\u044C \u043C\u0435\u0442\u043A\u0443 \u0432\u0430\u0436\u043D\u043E\u0441\u0442\u0438":"\u041F\u043E\u043C\u0435\u0442\u0438\u0442\u044C \u043A\u0430\u043A \u0432\u0430\u0436\u043D\u043E\u0435";
vs.flag=v;
fg=true;
};
if(pr.attach)x+=' b-mtbox-row--attach';
if(vs.attach!==pr.attach){
vs.attach=pr.attach;
if(pr.attach)ns.attach.title=pr.attach||"";
fg=true;
};
if(vs.clss!==x&&(vs.clss!==u||ns.node.className!==x)){
ns.node.className=vs.clss=x;
fg=true;
};
if(vs.from!==pr.from){
fg=true;
vs.from=pr.from;
ns.from_link.title=pr.from;
ns.from_text.data=pr.from?pr.from:"(\u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D)";
};
if(vs.subj!==pr.subj){
fg=true;
vs.subj=pr.subj;
ns.subj_cell.title=v=pr.subj||"(\u0431\u0435\u0437 \u0442\u0435\u043C\u044B)";
ns.subj_text.data=v;
};
if(vs.id!==pr.id||vs.mailbox!==pr.mailbox){
vs.id=pr.id;
vs.mailbox=pr.mailbox;
ns.from_link.href=ns.subj_link.href="message.cgi?mbox="+encodeURIComponent(pr.mailbox)+"&what="+pr.id;
fg=true;
};
if(vs.date!==pr.date){
vs.date=pr.date;
ns.date_cell.title=pr.date;
ns.date_text.data=pr.date_compact;
fg=true;
};
return fg;
},
re_change:function(ui){
if(ui.re_change_timmer){
ui.re_change_ps=0;
return;
};
function change(){
var set=ui.interface.row_reset,
l=ui.length,
ps=ui.re_change_ps||0,
k=rr.IE?(ps<64?32:48):(ps<64?64:144),
x;
if(l<=ps)return;
if(l-ps+k<16)k=-1;
for(;k&&ps<l;ps++){
if(x=ui.rows[ps]){
if(x=set(x,ui.list[ps]))k--;
}};
if(l<=ps){
ui.re_change_timmer=null;
ui.re_change_ps=0;
return;
};
ui.re_change_ps=ps;
ui.re_change_timmer=setTimeout(change,10)};
change()},
check_row:function(ui,ix){
ui.pastIndexRow=ix;
var rn=ui.rows[ix],rv=ui.list[ix]||false;
rv.selected=!rv.selected;
this.test_selected(ui);
this.row_reset(rn,rv);
if(rn.checkbox)setTimeout(function(){
var rn=ui.rows[ix],rv=ui.list[ix];
if(rn&&rv)rn.checkbox.checked=rv.selected;
},10)},
checkGroup_row:function(ui,ix){
var a=ui.list,fg=!ui.list[ix].selected,x1=ix,x2=ui.pastIndexRow||0;
ui.pastIndexRow=ix;
if(x1==x2)return this.check_row(ui,ix);
if(x1>x2)x1=x2,x2=ix;
while(x1<=x2){
v=a[x2--];
v.selected=fg;
};
this.test_selected(ui);
this.re_change(ui);
setTimeout(function(){
var rn=ui.rows[ix],rv=ui.list[ix];
if(rn&&rv)rn.checkbox.checked=rv.selected;
},10)},
check_status:function(ui,ix,s){
var ci=[],ic=0,a=ui.list,rv=ui.list[ix]||false,fg=rv&&!rv.unread,k,i,x;
if(!a)return;
s=!!s;
if(rv.selected!=s)ci[ic++]=ix;
rv.selected=s;
rv.unread=fg;
for(i=a.length;x=i--&&a[i];){
if(i!=ix&&x.selected){
k=true;
if(rv.selected!=s)ci[ic++]=i;
x.selected=s;
x.unread=fg;
}};
this.test_selected(ui);
ui.initEvent('change_status',ui,ci,fg);
k?this.re_change(ui):this.row_reset(ui.rows[ix],rv)},
check_flag:function(ui,ix,s){
var ci=[],ic=0,a=ui.list,rv=ui.list[ix]||false,fg=rv&&!rv.flag,k,i,x;
if(!a)return;
s=!!s;
if(rv.selected!=s)ci[ic++]=ix;
rv.selected=s;
rv.flag=fg;
for(i=a.length;x=i--&&a[i];){
if(i!=ix&&x.selected){
k=true;
if(rv.selected!=s)ci[ic++]=i;
x.selected=s;
x.flag=fg;
}};
this.test_selected(ui);
ui.initEvent('change_flag',ui,ci,fg);
k?this.re_change(ui):this.row_reset(ui.rows[ix],rv)},
selected:function(ui,e,ix,clear){
var x=ui.rows[ix],prm={},sv,a,i,v;
prm.ui=ui;
prm.clear=clear;
prm.ix=ix;
prm.max=ui.rows.length-1;
prm.sv=sv=[];
prm.flag=!(ui.list[ix]||false).selected;
a=ui.list;
for(i=ui.rows.length;i--;){
if(v=a[i])sv[i]=v.selected;
};
this.drag.initEvent('startDrag',{
name:'selected',
clearRange:true,
deltaDrag:5,
autoScroll:true,
mouseEvent:e
},prm)},
drag:rr.extend({},rr.expansion_event).addEvent(rr.listeners_drag)
.addEvent({
selected_dragstart:function(e,prm){
var ui=prm.ui,v=rr.getAbsolutePos(ui.box);
prm.top=v.y;
prm.left=v.x;
prm.h=ui.box.offsetHeight/ui.rows.length;
},
selected_dragend:function(e,prm){
var ix=prm.ix,ui=prm.ui,u;
if(prm.ix2!==u)ui.pastIndexRow=prm.ix2;
if(rr.Opera&&ix==prm.ix2){
setTimeout(function(){
var x=ui.rows[ix],v=ui.list[ix];
if(x)x.checkbox.checked=v&&v.selected;
},20);
e=prm=null;
}},
selected:function(e,prm){
var ui=prm.ui,a=prm.ui.list,i=prm.ui.rows.length,ix2=Math.floor((e.psY-prm.top)/prm.h),N=0,x1,x2,x;
if(!prm.start){
prm.start=prm.ix!=ix2;
if(!prm.start)return;
};
prm.ix2=ix2;
x=e.psX<prm.left-30;
if(x||prm.ix==ix2){
for(;i--;){
if(v=a[i]){
v.selected=!x&&prm.clear?false:prm.sv[i];
if(v.selected)N++;
}};
if(ui.all_selected!==N){
ui.all_selected=N;
ui.initEvent('change_selected')};
prm.ui.interface.re_change(prm.ui);
return;
};
x1=Math.min(prm.ix,ix2);
x2=Math.max(prm.ix,ix2);
for(;i--;){
if(v=a[i]){
v.selected=prm.clear?(i<=x2&&i>=x1?true:false):(i<=x2&&i>=x1?prm.flag:prm.sv[i]);
if(v.selected)N++;
}};
if(ui.all_selected!==N){
ui.all_selected=N;
ui.initEvent('change_selected')};
ui.interface.re_change(prm.ui)}}),
test_selected:function(ui){
var a=ui.list,N=0,i;
if(a)for(i=a.length;i--;)if((a[i]||false).selected)N++;
if(ui.all_selected!==N){
ui.all_selected=N;
ui.initEvent('change_selected')}},
change_selected:function(ui,N){
if(ui.all_selected!==N){
ui.all_selected=N;
ui.initEvent('change_selected')}},
prm_test:{
id:456,
path:"/inbox/456",
selected:false,
unread:false,
flag:false,
attach:"2 files",
from:"notification+yg5ebqqx@facebookmail.com",
from_email:"notification+yg5ebqqx@facebookmail.com",
subj:"\u0415\u0436\u0435\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0447\u0435\u0442 \u043E \u0412\u0430\u0448\u0435\u0439 \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0435 Facebook",
date:"Tue, 06 Apr 2010 04:46:37 +0400",
date_compact:"24 \u0434\u0435\u043A 2009",
size:"6208 \u0431\u0430\u0439\u0442",
size_compact:"6 \u041A\u0431"
}});


/* url: /js/m2/ui/ui_page_mailbox.src.js */

tmpl_js.mailbox_pager=function(pr,_){
var max=pr.max,num=pr.num,pages=[],A=1,B,i;
max=pr.max>1?pr.max:1;
num=num>1?(num>max?max:num):1;
if(num>7){
pages=[{num:1},{num:2},{num:2+((num-5)>>1),is_skip:true}];
A=num-3;
};
if(max-num<=6){
B=max;
A=max-6;
}else B=A+6;
for(i=A;i<=B;i++){
pages.push({num:i,is_selected:i==num})};
if(max-num>6){
pages=pages.concat([{num:1+num+((max-num)>>1),is_skip:true},{num:max-1},{num:max}])};
pr.pages=pages;
pr.next_page=num!==B;
pr.prev_page=num!==1;
pr.num=num;
pr.max=max;
return _.tmpl(tmpl.mailbox_pager,pr)};
elems.mailbox_pager=rr.new_class({
interface:true,
constructor:function(pr,_){
this.master=_.clone();
if(pr.num>0)this.num=pr.num;
if(pr.max>0)this.max=pr.max;
if(pr.css)this.css=pr.css;
if(pr.url_mask)this.url_mask=pr.url_mask;
if(pr.url_first)this.url_first=pr.url_first;
this.interface.res(this)},
prototype:{
max:1,
num:1,
set:function(p,v){
var ch;
if(typeof p==='object'){
if(p.max>0&&p.max!==this.max){
ch=true;
this.max=p.max;
};
if(p.num>0&&p.num!==this.num){
ch=true;
this.num=p.num;
}};
if(ch)this.interface.res(this)}},
res:function(ui){
var pr={},num=ui.num,max,pages=[],A=1,B,i;
max=ui.max>1?ui.max:1;
num=num>1?(num>max?max:num):1;
if(num>7){
pages=[{num:1},{num:2},{num:2+((num-5)>>1),is_skip:true}];
A=num-3;
};
if(max-num<=6){
B=max;
A=max-6;
}else B=A+6;
for(i=A;i<=B;i++){
pages.push({num:i,is_selected:i==num})};
if(max-num>6){
pages=pages.concat([{num:1+num+((max-num)>>1),is_skip:true},{num:max-1},{num:max}])};
var nn=ui.master.tmpl(tmpl.mailbox_pager,{
css:ui.css,
url_mask:ui.url_mask,
pages:pages,
next_page:num!==B,
prev_page:num!==1,
num:num,
max:max
});
if(ui.node)
if(i=ui.node.parentNode){
i.replaceChild(nn.node,ui.node)};
ui.node=nn.node;
ui.nodes=nn;
}})


/* url: /js/m2/mailbox.src.js */

ramail.open_mailbox=function(e){
if(!e)return;
var mbox=e.mbox,nbox=encodeURIComponent(mbox),page=e.page,filter=e.filter;
switch(nbox){
case'INBOX':nbox=filter?'inbox:'+filter:'inbox';break;
case'SentBox':nbox=filter?'sent:'+filter:'sent';break;
case'DraftBox':nbox=filter?'drafts:'+filter:'drafts';break;
case'Trash':nbox=filter?'trash:'+filter:'trash';break;
default:
nbox=filter?'box:'+filter+'/'+nbox:'box/'+nbox;
};
e.hash=page>1?'/'+nbox+'/p'+page:'/'+nbox;
ramail.get_mailbox({
mbox:mbox,
page:page||1,
load:function(){
this.text_title=rr.printx("\u041F\u0430\u043F\u043A\u0430 \xAB%s\xBB",mbox);
ramail.page_connect(this,e)}})};
ramail.open_message=function(e){
return false;
};
ramail.get_mailbox=function(p){
var bp=this.pg_mailbox||(this.pg_mailbox=masterElement('tmpl:rm_mailbox',{length:50}));
var Np=p.page>1?p.page:1;
if(bp.data_mbox!==p.mbox||bp.data_page!==Np){
bp.data_mbox=p.mbox;
bp.data_numb=Np;
bp.mbox.set({
list:[]
})};
if(p.load)p.load.call(bp)
return bp;
};
(function(){
var step=0;
ramail.mailbox_load=function(S,T){
return function(v){
}};
ramail.mailbox_loadData=function(pr,cb){
var du=ramail.get_user_data(pr.email)
,time=pr.time
,pg,diff,S2,x,i;
x=du['box: ~'+pr.email+'/'+pr.mbox];
if(pg=x&&pg[pr.page-1]){
for(i=0;x=pg[i];i++){
if(diff){diff.push[x.id]}else diff=[x.id];
}};
var xd='jsonp=ramail.mailbox_load('+(++step)+','+pr.time+')';
var url='?mbox='+encodeURIComponent('~'+pr.email+'/'+pr.mbox)+'&p='+(pr.page>1?pr.page:1)+'tm='+pr.time;
if(diff)url+='&diff='+diff.join(',');
ramail.load_mailbox=function(){
if(er||!x){
return;
};
if(S1!==S2){
return;
}};
rr.appendScript(url,{remove:true})}})();


/* url: /js/m2/tmpl/tmpl_contact.src.js */

rr.styles('rm:contact_view'
,'.b-contact_view {table-layout:fixed;width:100%;font-size:95%;white-space:nowrap;}'
,'.b-contact_view-cell {text-align:left;overflow:hidden;padding:0.4em 0.5em;vertical-align:middle;}'
,'.b-contact_view-name {cursor:default;width:10em;}'
,'.b-contact_view-value {width:100%;}'
,'.b-contact_view-addons {width:120px;text-align:right;vertical-align:top;}'
,'.b-contact_view-name--phones, .b-contact_view-name--info {vertical-align:top;line-height:1.5em;}'
,'.b-contact_view-username {font-weight:bold;}'
,'.b-contact_view-phone {margin:0.5em 0;}'
,'.b-contact_view-phone_type {color:#666666;margin-left:1ex;}'
,'.b-contact_view-info {border:1px inset #CCCCCC;padding:0.5ex;white-space:pre;min-height:3em;}'
,'.b-contact_view-mailto, .b-contact_view-chat_on, .b-contact_view-chat_history {margin-left:1em;display:inline-block;line-height:20px;}'
,'.b-contact_view-mailto {padding-left:25px;background-position:-4px -3055px;background-image:url("'+(window._static_host||'')+'/i/chameleon/ramail-icons.png");background-repeat:no-repeat;}'
,'.b-contact_view-chat_off {margin-left:1em;color:#666;}'
,'.b-contact_view-tbar {padding:0;text-align:right;}'
);
rr.styles('rm:contact_edit'
,'.b-contact_edit {table-layout:fixed;width:100%;font-size:95%;white-space:nowrap;}'
,'.b-contact_edit-cell {text-align:left;padding:0.4em 0.5em;vertical-align:middle;}'
,'.b-contact_edit-name {cursor:default;width:10em;}'
,'.b-contact_edit-value {width:100%;}'
,'.b-contact_edit-addons {width:120px;text-align:right;vertical-align:top;}'
,'.b-contact_edit-name--phones, .b-contact_edit-name--info {vertical-align:top;line-height:1.5em;}'
,'.b-contact_edit-ilabel {display:inline-block;}'
,'.b-contact_edit-inp, .b-contact_edit-info textarea {width:100%;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;-ms-box-sizing: border-box;box-sizing: border-box;}'
,'.b-contact_edit-username, .b-contact_edit-email, .b-contact_edit-info {width:40em;}'
,'.b-contact_edit-phones_box {}'
,'.b-contact_edit-phone {margin-bottom:0.5ex;}'
,'.b-contact_edit-phone_num {width:18em;}'
,'.b-contact_edit-phone_type {color:#666666;margin-left:1ex;}'
,'.b-contact_edit-phone_remove {margin-left:1ex;}'
,'.b-contact_edit-phone_remove .text {visibility:hidden;}'
,'.b-contact_edit-phone_remove:hover .text {visibility:visible;}'
,'.b-contact_edit-info textarea {width:100%;height:7em;padding:2px;}'
,'.b-contact_edit-info_max {display:none;color:#F05925;font-size:0.85em;font-weight:bold;line-height:1.25em;margin-top:5px;}'
,'.b-contact_edit-info_max--show {display:block;}'
,'.b-contact_edit-phones_footer {margin:0.7ex 0 1em;}'
,'.b-contact_edit-phones_footer--max {visibility:hidden;}'
,'.b-contact_edit-phones_add, .b-contact_edit-phone_remove {cursor:pointer;}'
,'.b-contact_edit-phones_add:hover, .b-contact_edit-phone_remove:hover {text-decoration:underline;}'
,'div .b-contact_edit-save, .b-contact_edit-cancel, div .b-contact_edit-delete {vertical-align:middle;}'
,'.b-contact_edit-cancel {margin-left:1em;cursor:pointer;}'
,'.b-contact_edit-cancel:hover {text-decoration:underline;}'
,'.b-contact_edit-error {display:none;color:#F05925;margin:1em 0 0.5em;}'
,'.b-contact_edit-form--error .b-contact_edit-error {display:block;}'
,'.b-contact_edit-form--sending .b-contact_edit-cancel, .b-contact_edit-form--sending .b-contact_edit-delete {visibility:hidden;}'
);
tmpl.contact_avatar=function(pr,_){
var ns=this,im=new Image,na,u;
ns.node=_('span.b-contact_avatar'+(pr.src?'':' b-contact_avatar--no'),{css:pr.css}
,ns.img=_('IMG.b-contact_avatar avatar'
,{src:pr.src||u,width:"100",height:"100"}));
if(pr.src){
im.onload=function(){
im.onload=null;
if(this.width<4){
rr.css_add('b-contact_avatar--no',ns.node)}};
im.src=pr.src;
}};
tmpl.contact_view=function(pr,_){
var ns=this;
ns.node=_('TABLE.b-contact_view',{cellPadding:0,cellSpacing:0,border:0}
,_('COLGROUP'
,_('COL.b-contact_view-name')
,_('COL.b-contact_view-value')
,_('COL.b-contact_view-addons'))
,_('TBODY'
,_('TR'
,_('TD.b-contact_view-name b-contact_view-cell',
_('SPAN'
,rv.contact_view_LabelName||"\u0418\u043C\u044F, \u0444\u0430\u043C\u0438\u043B\u0438\u044F:"
))
,_('TD.b-contact_view-value b-contact_view-cell'
,_('span.b-contact_view-username'
,_.text(pr.name)))
,_('TD.b-contact_view-addons b-contact_view-cell',{rowSpan:pr.phones?4:3}
,_('span.b-contact_view-avatar'
,_('tmpl:contact_avatar',{src:pr.avatar_img}))))
,_('TR'
,_('TD.b-contact_view-name b-contact_view-cell'
,_('SPAN',rv.contact_view_LabelName||"\u041F\u043E\u0447\u0442\u0430:"))
,_('TD.b-contact_view-value b-contact_view-cell'
,_('SPAN.quiet',{title:"sorin_andrey@rambler.ru"},
_.text(pr.email||""))
,_('A.b-contact_view-mailto b-icons'
,{
href:"/mail/compose.cgi?enc=utf-8&mailto="+pr.email+"&r="+(Math.random().toString(32).substr(2,4)),
title:rv.contact_view_SendEmailTitle
}
,_('SPAN',
rv.contact_view_SendEmail||"\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E"
))
,(!pr.nochat
?_('A.b-contact_view-chat_on'
,{
href:"http://ie.rambler.ru/livestream/l/Lightus.swf?mode=chat&contact="+pr.email+"&r="+(Math.random().toString(32).substr(2,4)),
target:'_blank',
title:rv.contact_view_SendEmailTitle||"\u041D\u0430\u043F\u0438\u0441\u0442\u0430\u0442\u044C \u0432 \u0447\u0430\u0442 \u043F\u043E \u044D\u0442\u043E\u043C\u0443 \u0430\u0434\u0440\u0435\u0441\u0443"
}
,_('SPAN',
rv.contact_view_chat_on
))
:_('SPAN.b-contact_view-chat_off',
rv.contact_view_chat_off
))
,pr.history&&
_('A.b-contact_view-chat_history',
{
href:"/mail/messenger_history.cgi?user="+encodeURIComponent(pr.email)+"&enc=utf-8",
title:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0447\u0430\u0442\u0430"
},
_('SPAN',
rv.contact_view_chat_history||"\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0447\u0430\u0442\u0430"
)))),
pr.phones&&_('TR',
_('TD.b-contact_view-cell b-contact_view-name b-contact_view-name--phones',
_('SPAN',
rv.contact_view_Phones
)),
_('TD.b-contact_view-value b-contact_view-cell',
_.forEach(pr.phones,function(pr,_){
return _('P.b-contact_view-phone',
_('span',{href:"tel:"+pr.phone},
_.text(pr.phone),
_('SMALL.b-contact_view-phone_type',
pr.mobile?rv.contact_view_Mobile:rv.contact_view_Home
)))}))),
_('TR',
_('TD.b-contact_view-cell b-contact_view-name b-contact_view-name--info',
_('SPAN',
rv.contact_view_info
)),
_('TD.b-contact_view-value b-contact_view-cell',
_('div.b-contact_view-info',
_.text(pr.info||""))))),
pr.footer&&_('TFOOT',
_('TR.rgroup',
_('TD.b-contact_view-name b-contact_view-cell'),
_('TD.b-contact_view-value b-contact_view-cell',{colSpan:2}
,_('tmpl:rm_nToolbar'
,{
css:'b-contact_view-controls',
right:[
ns.button_delete=_(':rm_nButton',{
css:'b-contact_view-delete',
title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u043A\u043E\u043D\u0442\u0430\u043A\u0442",
text:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442"
})
]
}
,ns.button_edit=_(':rm_nButton',{
css:'b-contact_view-edit',
title:"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442",
text:"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
}))))))};
tmpl.contact_edit_phone=function(pr,_){
var ns=this;
ns.node=_('div.b-contact_edit-phone'
,_('label.b-contact_edit-ilabel b-contact_edit-phone_num'
,ns.phone=_('input.b-contact_edit-inp ',{name:'contact.phone',value:pr.phone}))
,_('label.b-contact_edit-phone_type'
,ns.type=_('select',{name:'contact.phone_type'}
,_('option',{value:'mobile'},"\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439")
,_('option',{value:'home'},"\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0439")
,_('option',{value:'work'},"\u0420\u0430\u0431\u043E\u0447\u0438\u0439")
,_('option',{value:'other'},"\u0414\u0440\u0443\u0433\u043E\u0439")))
,ns.add=_('a.b-contact_edit-phone_remove'
,_('span.text',"\u0423\u0434\u0430\u043B\u0438\u0442\u044C")));
ns.type.value=pr.phone?pr.type||'other':'mobile';
};
tmpl.contact_edit=function(pr,_){
var ns=this;
ns.lng_text_length=["\u041E\u0441\u0442\u0430\u043B\u0441\u044F %s \u0441\u0438\u043C\u0432\u043E\u043B","\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C %s \u0441\u0438\u043C\u0432\u043E\u043B\u0430","\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C %s \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"];
ns.lng_text_max="\u0412\u0432\u0435\u0434\u0435\u043D\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"
ns.lng_sending="\u0418\u0434\u0435\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0430"
ns.lng_error="\u041F\u0440\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u043E\u0437\u0436\u0435."
ns['lng_error: '+'id not defined']="\u041F\u0440\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430, \u043A\u043E\u043D\u0442\u0430\u043A\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D."
ns['lng_error: '+'duplicate email found']="\u041F\u0440\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430. \u041A\u043E\u043D\u0442\u0430\u043A\u0442 \u0441 \u0442\u0430\u043A\u0438\u043C \u043F\u043E\u0447\u0442\u043E\u0432\u044B\u043C \u0430\u0434\u0440\u0435\u0441\u043E\u043C \u0443\u0436\u0435 \u0435\u0441\u0442\u044C \u0432 \u0430\u0434\u0440\u0435\u0441\u043D\u043E\u0439 \u043A\u043D\u0438\u0433\u0435."
ns['lng_error: '+'email not defined']="\u041F\u0440\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430. \u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D \u043F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441."
ns['lng_error: '+'email not valid']="\u041F\u0440\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430. \u041D\u0435\u0432\u0435\u0440\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u043D \u043F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441."
ns.node=ns.form=_('form.b-contact_edit-form'
,_('input',{type:'hidden',name:'contact.id',value:pr.id})
,_('TABLE.b-contact_edit',{cellPadding:0,cellSpacing:0,border:0}
,_('COLGROUP'
,_('COL.b-contact_edit-name')
,_('COL.b-contact_edit-value')
,_('COL.b-contact_edit-addons'))
,_('TBODY'
,_('TR'
,_('TD.b-contact_edit-cell b-contact_edit-name b-contact_edit-name--username'
,_('SPAN',"\u0418\u043C\u044F, \u0444\u0430\u043C\u0438\u043B\u0438\u044F:"))
,_('TD.b-contact_edit-cell b-contact_edit-value'
,_('label.b-contact_edit-ilabel b-contact_edit-username'
,ns.inp_name=_('input.b-contact_edit-inp b-contact_edit-username_inp',{name:'contact.name',value:pr.name})))
,_('TD.b-contact_edit-cell b-contact_edit-addons',{rowSpan:4}
,_('span.b-contact_edit-avatar'
,_('tmpl:contact_avatar',{src:pr.avatar_img}))))
,_('TR'
,_('TD.b-contact_edit-cell b-contact_edit-name b-contact_edit-name--email'
,_('SPAN',"\u041F\u043E\u0447\u0442\u0430:"))
,_('TD.b-contact_edit-value b-contact_edit-cell'
,_('label.b-contact_edit-ilabel b-contact_edit-email'
,_('input.b-contact_edit-inp b-contact_edit-email_inp',{name:'contact.email',value:pr.email,disabled:false}))))
,_('TR'
,_('TD.b-contact_edit-cell b-contact_edit-name b-contact_edit-name--phones'
,_('SPAN',"\u0422\u0435\u043B\u0435\u0444\u043E\u043D:"))
,ns.phones_wrapper=_('TD.b-contact_edit-value b-contact_edit-cell'
,_('div.b-contact_edit-phones_wrapper'
,ns.phones_box=_('div.b-contact_edit-phones_box'
,_.forEach(pr.phones,function(x){
return _('tmpl:contact_edit_phone',x)})
,_('tmpl:contact_edit_phone'))
,ns.phones_footer=_('div.b-contact_edit-phones_footer'
,ns.phones_add=_('a.b-contact_edit-phones_add',"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043D\u043E\u043C\u0435\u0440")))))
,_('TR'
,_('TD.b-contact_edit-cell b-contact_edit-name b-contact_edit-name--info'
,_('SPAN',"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439:"))
,_('TD.b-contact_edit-value b-contact_edit-cell'
,_('label.b-contact_edit-ilabel b-contact_edit-info'
,ns.textarea=_('textarea.b-contact_edit-info_text',{name:'contact.notes',value:pr.info,rows:4,cols:10}))
,ns.max_wrapper=_('span.b-contact_edit-info_max'
,ns.max_text=_.text('')))))
,_('TFOOT'
,_('TR.rgroup',
_('TD.b-contact_edit-name b-contact_edit-cell'),
_('TD.b-contact_edit-value b-contact_edit-cell',{colSpan:2},
_('tmpl:rm_nToolbar'
,{
css:'b-contact_edit-controls',
right:[
ns.button_delete=_(':rm_nButton',{
css:'b-contact_edit-delete',
title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u043A\u043E\u043D\u0442\u0430\u043A\u0442",
text:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442"
})
]
}
,ns.button_save=_(':rm_nButton',{
css:'b-contact_edit-save',
title:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F",
text:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
})
,ns.button_cancel=_('a.b-contact_edit-cancel'
,"\u041E\u0442\u043C\u0435\u043D\u0430"
))
,_('span.b-contact_edit-error'
,ns.text_error=_.text("\u041F\u0440\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u043E\u0437\u0436\u0435.")))))))};


/* url: /js/m2/tmpl/tmpl_page_contacts.src.js */

rr.styles('tmpl:page_contacts'
,'.b-block_contacts {padding:15px;}'
,'.b-block_contacts-abook {margin-top:10px;}'
,'.b-block_contacts-add {margin-right:1ex;}'
,'.b-block_contacts-selected_x {vertical-align:middle;cursor:pointer;background-color:#FFE3E3;color:#F05925;font-size:0.85em;font-weight:bold;line-height:28px;margin-right:15px;padding:0 1ex;}'
,'.b-block_contacts-selected_x .x {font-weight:bold;margin-left:1ex;}'
,'.b-block_contacts-new_contact {display:none;margin:1em 0;}'
,'.b-block_contacts-new_contact--show {display:block;}'
,'.b-block_contacts-new_contact_head {font-weight:bold;margin:0 0 1ex;}'
,'.b-block_contacts-new_contact_box {border:2px solid #BBBBBB;padding:2px;}'
,''
,''
)
tmpl.pg_contacts=function(pr,_){
var ns=this,pg,n;
ns.text_title="\u0410\u0434\u0440\u0435\u0441\u043D\u0430\u044F \u043A\u043D\u0438\u0433\u0430";
ns.wrapper_page=pg=_('tmpl:wrapper_page'
,{
extend:ns
,name:'contacts'
,title:_.text("\u0410\u0434\u0440\u0435\u0441\u043D\u0430\u044F \u043A\u043D\u0438\u0433\u0430")
,top:[
_('tmpl:rm_nToolbar'
,{
css:'b-block_contacts-controls',
right:[
ns.selected_bt=_('span.b-block_contacts-selected_x',{title:"\u0421\u043D\u044F\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435"}
,ns.selected_x=_.text('#N')
,_('span.x','\u00D7'))
,ns.button_new=_('ui:uButton',{
css:"b-block_contacts-add",
css_ico:'b-icons b-icons--contact',
icon:true,
title:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442",
text:"\u041D\u043E\u0432\u044B\u0439 \u043A\u043E\u043D\u0442\u0430\u043A\u0442"
})
,ns.button_delete=_('ui:uButton',{
css:"b-block_contacts-delete",
css_ico:'b-icons b-icons--remove',
icon:true,
first:true,
title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
text:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435"
})
]
}
,new function(){
var ip=_('ui:uInput',{
css:'b-pg_mailbox-input_search',
group:"left",
text:"\u041F\u043E\u0438\u0441\u043A \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432",
help:"\u041F\u043E\u0438\u0441\u043A \u0432 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430\u0445"
});
ns.inp_filter=ip.input;
return ip;
}
,ns.button_filter=_('ui:uButton',{
css_ico:'b-icons b-icons--search',
icon:true,
group:'right',
title:"\u041F\u043E\u0438\u0441\u043A \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432 \u0432 \u0430\u0434\u0440\u0435\u0441\u043D\u043E\u0439 \u043A\u043D\u0438\u0433\u0435",
text:"\u041F\u043E\u0438\u0441\u043A"
}))
]
}
,ns.new_contact=_('div.b-block_contacts-new_contact'
,_('div.b-block_contacts-new_contact_head'
,"\u041D\u043E\u0432\u044B\u0439 \u043A\u043E\u043D\u0442\u0430\u043A\u0442"
)
,ns.new_contact_box=_('div.b-block_contacts-new_contact_box'
))
,ns.abook=_('ui:abook'
,{
css:'b-block_contacts-abook',
list:ramail.data_address,
length:(ramail.data_address?ramail.data_address.length||32:32)}));
ns.node=pg.node;
if(n=rr.$('contacts-holder')){
n.appendChild(ns.node)}};


/* url: /js/m2/tmpl/tmpl_abook.src.js */

rr.styles('tmpl:abook'
,'.b-abook {font-size:95%;}'
,'.b-abook-box {margin-top:0.5ex;display:block;position:relative;overflow:hidden;}'
,'.b-abook-table {table-layout:fixed;width:100%;overflow:hidden;margin:0;padding:0;}'
,'.b-abook-h_cell {font-size:95%;vertical-align:middle;white-space:nowrap;}'
,'.b-abook-h_title {padding:0.4em .5em;}'
,'.b-abook-cell {-o-text-overflow:ellipsis;text-overflow:ellipsis;min-height:20px;height:'+(rr.IE<7?'20px;':'1.4em;')
+'overflow:hidden;font-size:95%;padding:0.4em .5em;vertical-align:middle;white-space:nowrap;border-bottom:1px solid #bbb;padding-left:.5em;}'
,'.b-abook-check, .b-abook-h_check {width:33px;text-align:center;text-indent:0;padding-left:0;padding-right:0;}'
,'.b-abook-name, .b-abook-h_name {width:70%;}'
,'.b-abook-null {width:0px;overflow:visible;text-align:right;line-height:0.6em;}'
,'.b-abook-controls, .b-abook-h_controls {width:23em;}'
,'.b-abook-email, .b-abook-h_email {width:40%;}'
,'.b-abook-edit, .b-abook-h_edit {width:10em;text-align:right;}'
,'.b-abook-h_name, .b-abook-h_email {cursor:pointer;}'
,'.b-abook-grd {overflow:hidden;display:block;display:-moz-inline-stack;display:inline-block;background-color:transparent;background-position:0 50%;pointer-events:none;'
+'width:40px;margin-left:-40px;height:1.3em;min-height:20px;_display:none;'
+'background-image:url("'+(window._static_host||'')+'/i/chameleon/branded/beasts/ramail-mask_beasts.png");background-repeat:no-repeat;background-position:0 50%;'
+(rr.IE==7?'position:relative;':'')
+"}"
,'.b-abook-name_link {cursor:pointer;}'
,'.b-abook-name_link:hover {text-decoration:underline;}'
,'.b-abook-newmail_link, .b-abook-chat_new, .b-abook-chat_history, .b-abook-chat_not {margin-left: 1em;cursor:pointer;}'
,'.b-abook-newmail_link {margin-left: 0;}'
,'.b-abook-chat_new, .b-abook-chat_history {display:none;}'
,'.b-abook-row--chat_new .b-abook-chat_new, .b-abook-row--chat_history .b-abook-chat_history {display:inline;}'
,'.b-abook-row--chat_new .b-abook-chat_not, .b-abook-row--chat_history .b-abook-chat_not {display:none;}'
,'.b-abook-chat_not {color:#999;cursor:default;}'
,'.b-abook-row--open {}'
,'.b-abook-row--open .b-abook-cell {border-color:transparent;_border-color:#FFF;}'
,'.b-abook-row--open .b-abook-null, .b-abook-row--open .b-abook-controls, .b-abook-row--open .b-abook-email_link, .b-abook-row--open .b-abook-edit {visibility:hidden;}'
,'.b-abook-row--open .b-abook-name, .b-abook-row--open .b-abook-email {background-color:#FFFFFF;}'
,'.b-abook-info_cell {overflow:hidden;}'
,'.b-abook-info_wrapper {position:relative;margin:2px 2px 1em;padding:2px;overflow:hidden;border:2px solid #BBBBBB;}'
,'.b-abook-info_box--hidden {visibility:hidden;}'
,'.b-abook-edit_link {cursor:pointer;}'
,'.b-abook-edit_link:hover {text-decoration:underline;}'
,'.b-abook-row--null td * {visibility:hidden;}'
,'.b-abook-info_row--close {display:none;}'
,'.b-abook-aler {display:none;background-color:#FFFFFF;bottom:3px;left:3px;position:absolute;right:3px;top:3px;}'
,'.b-abook-aler--show {display:block;}'
,'.b-abook-aler_box {background-color:#FFCCCC;padding:1em;}'
,'.b-abook-aler_message {margin:0 0 1em;font-weight:bold;}'
,'.b-abook-aler_cancel {margin-left:1em;}'
,'.b-abook-aler_error {display:none;color:#963816;margin:0.5em 0 0;}'
,'.b-abook-aler--error .b-abook-aler_error {display:block;}'
,'.b-abook-aler_error--show {display:block;}'
);
tmpl.abook=function(pr,_){
var ns=this;
ns.node=_('div.b-abook'
,ns.head=_('table.b-abook-table b-abook-h_table',{cellSpacing:0,cellPadding:0,border:0}
,_('colgroup'
,_('col.b-abook-check')
,_('col.b-abook-name')
,_('col.b-abook-controls')
,_('col.b-abook-email')
,_('col.b-abook-edit'))
,_('tbody'
,_('tr.b-abook-h_row'
,_('td.b-abook-h_cell b-abook-h_check s-table_head-cell'
,_('span.b-abook-h_title s-table_head-cap s-table_head-cap--first'," "))
,_('td.b-abook-h_cell b-abook-h_name s-table_head-cell'
,ns.head_name=_('a.b-abook-h_title s-table_head-cap c_name',"\u0418\u043C\u044F \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0430"))
,_('td.b-abook-h_cell b-abook-h_controls s-table_head-cell'
,_('span.b-abook-h_title s-table_head-cap'," "))
,_('td.b-abook-h_cell b-abook-h_email s-table_head-cell'
,ns.head_email=_('a.b-abook-h_title s-table_head-cap c_email',"E-mail \u0430\u0434\u0440\u0435\u0441"))
,_('td.b-abook-h_cell b-abook-h_edit s-table_head-cell'
,_('span.b-abook-h_title s-table_head-cap'," ")))))
,ns.box=_('div.b-abook-box'))};
tmpl.abook_table=function(pr,_){
pr=pr||false;
var ns=this,grd=pr.grd!==false&&!(rr.IE<7);
ns.node=_('table.b-abook-table',{css:pr.css,cellSpacing:0,cellPadding:1,border:0}
,_('colgroup'
,_('col.b-abook-check')
,_('col.b-abook-name')
,grd&&_('col.b-abook-null')
,_('col.b-abook-controls')
,_('col.b-abook-email')
,grd&&_('col.b-abook-null')
,_('col.b-abook-edit'))
,ns.box=_('tbody'))};
tmpl.abook_row=function(pr,_){
var ns=this,grd=!(rr.IE<7);
ns.node=_('tr.b-abook-row b-abook-row--null'
,_('td.b-abook-cell b-abook-check'
,ns.checkbox=_('input.b-abook-checkbox'
,{
type:"checkbox",
name:"check_abook",
title:"\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u044D\u0442\u043E \u043F\u0438\u0441\u044C\u043C\u043E"
}))
,_('td.b-abook-cell b-abook-name'
,ns.name_link=_('a.b-abook-name_link'
,ns.name_text=_.text(" ")))
,grd&&_('td.b-abook-cell b-abook-null',_('span.b-abook-grd'))
,_('td.b-abook-cell b-abook-controls'
,ns.newmail_link=_('a.b-abook-newmail_link'
,"\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E"
)
,ns.chat_new=_('a.b-abook-chat_new',"\u041D\u0430\u0447\u0430\u0442\u044C \u0447\u0430\u0442")
,_('span.b-abook-chat_not',"\u0427\u0430\u0442 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D")
,ns.chat_history=_('a.b-abook-chat_history',"\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0447\u0430\u0442"))
,_('td.b-abook-cell b-abook-email'
,ns.email_link=_('a.b-abook-email_link'
,ns.email_text=_.text(" ")))
,grd&&_('td.b-abook-cell b-abook-null',_('span.b-abook-grd'))
,_('td.b-abook-cell b-abook-edit'
,ns.edit_link=_('a.b-abook-edit_link'
,_('span',"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"))))};
tmpl.abook_info=function(pr,_){
var ns=this,grd=!(rr.IE<7);
ns.node=_('tr.b-abook-info_row'
,_('td.b-abook-info_cell',{colSpan:grd?7:5}
,_('div.b-abook-info_wrapper'
,ns.alert=_('div.b-abook-aler'
,_('div.b-abook-aler_box'
,_('div.b-abook-aler_message',"\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442 \u0438\u0437 \u0432\u0430\u0448\u0435\u0439 \u0430\u0434\u0440\u0435\u0441\u043D\u043E\u0439 \u043A\u043D\u0438\u0433\u0438?")
,_('div.b-abook-aler_footer'
,ns.button_delete=_(':rm_nButton',{
css:'b-abook-aler_ok',
title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u043A\u043E\u043D\u0442\u0430\u043A\u0442",
text:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442"
})
,ns.button_cancal=_(':rm_nButton',{
css:'b-abook-aler_cancel',
title:"\u041E\u0442\u043C\u0435\u043D\u0430",
text:"\u041E\u0442\u043C\u0435\u043D\u0430"
}))
,ns.error=_('div.b-abook-aler_error'
,"\u041F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u0437\u0436\u0435."
)))
,ns.box=_('div.b-abook-info_box'))))};
tmpl_js.abook_row=(function(){
var nx,d,mx;
function cmx(x){
var i,v;mx={};
for(i in x){
if(v=x[i]&&x[i].className)mx[v]=i;
}};
return function(pr,_){
if(!nx||d!==_.document){
var x=new tmpl.abook_row(false,_);
if(!mx)cmx(x);
nx=x.node.cloneNode(true);
d=_.document;
return x;
};
this.node=nx.cloneNode(true);
var ns=this,a=ns.node.getElementsByTagName("*"),i=0,n,v;
while(n=a[i++])if(v=n.className)if(v=mx[v])ns[v]=n;
n=ns.name_link;
ns.name_text=n.firstChild||n.appendChild(d.createTextNode(""));
n=ns.email_link;
ns.email_text=n.firstChild||n.appendChild(d.createTextNode(""));
return ns;
}})()


/* url: /js/m2/ui/ui_page_contacts.src.js */

elems.pg_contacts=rr.new_class({
interface:true,
constructor:function(pr,_,cfg){
this.nodes=_.tmpl(tmpl.pg_contacts,pr);
this.node=this.nodes.node;
this.abook=this.nodes.abook;
this.text_title=this.nodes.text_title;
this.master=_.clone();
this.interface.init_event(this)},
init_event:function(ui){
var ns=ui.nodes,tmF;
function time_filter(){
ns.abook.set('filter',ns.inp_filter.value)};
ns.inp_filter.onfocus=function(){
tmF=setInterval(time_filter,50)};
ns.inp_filter.onblur=function(){
clearInterval(tmF);
time_filter()};
function flip(){new_contact_flip();return false};
(ns.button_new.node||ns.button_new).onclick=flip;
(ns.button_delete.node||ns.button_delete).onclick=function(){
ui.interface.delete_selected(ui);
return false;
};
function new_contact_flip(){
var x,n;
if(!rr.css_flip('b-block_contacts-new_contact--show',ns.new_contact)){
ns.button_new.set_active();
return false;
};
ns.button_new.set_active(true)
if(x=ns.new_contact_edit)rr.removeNode(x.node);
ui.master(ns.new_contact_box
,x=ns.new_contact_edit=ui.master('tmpl:contact_edit'));
if(n=x.button_delete)rr.removeNode(n.node||n);
if(n=x.button_save)(n.node||n).onclick=save;
if(n=x.button_cancel)(n.node||n).onclick=flip;
x.inp_name.focus();
return true;
};
function save(){
ui.interface.contact_save(ui);
return false;
};
ui.nodes.abook.addEvent('change_selected',function(){
var N=ui.nodes.abook.all_selected||0;
ui.nodes.selected_bt.style.display=N?'':'none';
ui.nodes.button_delete.set_disabled(!N);
ui.nodes.selected_x.data=rr.printx(
(["\u0412\u044B\u0431\u0440\u0430\u043D %s \u043A\u043E\u043D\u0442\u0430\u043A\u0442","\u0412\u044B\u0431\u0440\u0430\u043D\u043E %s \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430","\u0412\u044B\u0431\u0440\u0430\u043D\u043E %s \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432"])[rv.number(this.all_selected)]
,N
)});
ui.nodes.abook.initEvent('change_selected');
ui.nodes.selected_bt.onclick=function(){
ui.nodes.abook.select_clear();
return false;
}},
contact_save:function(ui){
if(!ui.nodes.new_contact_edit)return;
ui.nodes.new_contact_edit.submit({
urlResource:"/mail/jcontacts.cgi?mode=add",
error:function(r){},
complete:function(r){
rr.css_remove('b-block_contacts-new_contact--show',ui.nodes.new_contact);
ui.nodes.abook.add(r.contact)}})},
delete_selected:function(ui){
var a=ui.nodes.abook.list,i=0,m=[],x;
if(!a)return;
for(;x=a[i++];){
if(x&&x.selected&&x.id){
m.push(x.id)}};
if(!m.length)return;
function err(){
ui.xhr_sending=false;
};
var xhr=new rr.class_xhrloader({
urlResource:'/mail/jcontacts.cgi',
metodRequest:'POST',
contentType:'multipart/form-data',
startTimeout:1
,xhrChange_other:err
,xhrChange_200:function(r){
ui.xhr_sending=false;
try{r=r?(window.JSON?JSON.parse(r):eval('('+r+')')):null}catch(e){r=null};
if(!r||r.status!=='ok')return err();
ui.nodes.abook.delete_contacts(m)}});
if(x=window._request_key)xhr.set('request_key',x);
xhr.set('mode','delete');
xhr.set('c',m);
ui.xhr_sending=true;
xhr.goSend()}});


/* url: /js/m2/ui/ui_contact.src.js */

tmpl_js.contact_edit=(function(){
var max=250;
function test_key(ui,e){
var kc=e.keyCode,obj=ui.textarea;
setTimeout(function(){test_textarea(ui)},10);
if(obj.value.length<max||(kc>=33&&kc<=36)||(kc>=37&&kc<=40)||(kc>111&&kc<124)||kc==9||kc==45||kc==46||kc==8||e.ctrlKey)return;
if(obj.selectionStart!=obj.selectionEnd||(rr.IE&&document.selection.createRange().text))return;
return false;
};
function test_textarea(ns){
var obj=ns.textarea,l=obj.value.length,n;
if(l>max){
obj.value=obj.value.substring(0,max)
l=max;
};
n=max-l;
rr.css_set('b-contact_edit-info_max--show',ns.max_wrapper,n<31);
if(n>30)return;
tx=n<1?ns.lng_text_max
:rr.printx(ns.lng_text_length[rv.number(n)]
,n);
ns.max_text.data=tx;
};
function test_phones(ui){
var a=ui.phones_box.childNodes,i=0,x=0,n;
while(n=a[i++]){
if(rr.css_is('b-contact_edit-phone',n))x++;
};
rr.css_set('b-contact_edit-phones_footer--max',ui.phones_footer,x>4)};
function submit(ui,p){
if(ui.xhr_sending)return false;
if(!p)p=false;
var form=ui.form,xhr=new rr.class_xhrloader({
urlResource:p.urlResource||"/mail/jcontacts.cgi",
metodRequest:'POST',
contentType:'multipart/form-data',
startTimeout:1
,xhrChange_other:err
,xhrChange_200:function(r){
ui.xhr_sending=false;
try{r=r?(window.JSON?JSON.parse(r):eval('('+r+')')):null}catch(e){r=null};
if(!r||r.status!=='ok')return err(r);
if(p.complete&&p.complete.call(ui,r)===false)
return err(r);
rr.css_remove('b-contact_edit-form--sending b-contact_edit-form--error'
,form
)}});
function err(r){
ui.xhr_sending=false;
ui.text_error.data=(r&&ui['lng_error: '+r.error])||ui.lng_error;
rr.css_remove('b-contact_edit-form--sending',form);
rr.css_add('b-contact_edit-form--error',form);
if(p.error)p.error.call(ui,r)};
var a=form.elements,prm={},nm,x,i;
for(i=0;x=a[i];i++){
nm=x.name;
if(x.type=='text'||x.type=='hidden'||x.nodeName=="SELECT"||x.nodeName=="TEXTAREA"){
if(prm[nm]){
prm[nm].push(x.value)}else prm[nm]=[x.value];
}};
for(i in prm)xhr.set(i,prm[i]);
if(p)for(i in p){
switch(i){
case'action':if(p[i])xhr.urlResource=p[i];
case'request_key':case'complete':case'error':
continue;
};
xhr.set(i,p[i])};
if(x=window._request_key)xhr.set('request_key',x);
rr.css_remove('b-contact_edit-form--sending',form);
ui.xhr_sending=true;
xhr.goSend()}
return function(pr,_){
var ui=_.tmpl(tmpl.contact_edit,pr),n=ui.textarea,tm,u;
test_textarea(ui)
n.onfocus=function(){
tm=setInterval(function(){
test_textarea(ui)},100)};
n.onblur=function(){
clearInterval(tm)};
n[(rr.IE||rr.WebKit?'onkeydown':'onkeypress')]=function(e){
return test_key(ui,e||window.event)};
if(n.value.length>max){
test_key(ui,{keyCode:0})};
ui.phones_add.onclick=function(e){
rr.breakEvent(e);
_(ui.phones_box
,_('tmpl:contact_edit_phone'));
test_phones(ui)};
ui.phones_box.onclick=function(e){
if(!e&&rr.IE)e=this.ownerDocument.parentWindow.event;
var n=rr.css_parent('b-contact_edit-phone_remove',e.srcElement||e.target,true),box;
if(!n)return;
rr.breakEvent(e);
n=rr.css_parent('b-contact_edit-phone',n);
box=n.parentNode;
box.removeChild(n);
if(!rr.css_first('b-contact_edit-phone',box)){
_(ui.phones_box
,_('tmpl:contact_edit_phone'))};
test_phones(ui)};
if(pr.form_onsubmit===u){
ui.form.onsubmit=function(e){
if(!e&&rr.IE)e=this.ownerDocument.parentWindow.event;
return rr.breakEvent(e)}};
test_phones(ui);
ui.submit=function(p){
return submit(ui,p)};
n=u;
return ui;
}})()

/* url: /js/m2/ui/ui_abook.src.js */

elems.abook=rr.new_class({
interface:true,
parent:rr.class_baseElement,
constructor:function(pr,_,cfg){
this.interface.parent.call(this,pr,_,cfg);
this.interface.factory(this,pr,_,cfg)},
factory:function(ui,pr,_){
ui.master=_.clone();
ui.nodes=_('tmpl:abook'
,ui.tbox=_('tmpl:abook_table'));
ui.node=ui.nodes.node;
ui.box=ui.nodes.box;
ui.nodes.head_name._cmd__='head_name';
ui.nodes.head_email._cmd__='head_email';
ui.tboxs=[ui.tbox];
ui.rows=[];
ui.list=[];
ui.cashe_tboxs_=[];
ui.cashe_rows_=[];
if(pr)ui.set(pr,false);
ui.refresh(true);
this.init_event(ui)},
prototype:{
length:50,
filter:null,
sort:'name',
reset:function(){
},
set_row:function(x,p,v){
},
set_list:function(a){
},
select_all:function(){
this.pastIndexRow=0;
var a=this.list,all=true,N,i,x;
if(a){
i=N=l=a.length;
while(i--)if(x=a[i]){
if(!x.selected)all=false;
x.selected=true;
};
if(all){
N=0;
this.selected=false;
for(i=l;i--;)if(x=a[i]){
x.selected=false;
}};
if(this.all_selected!==N){
this.all_selected=N;
this.initEvent('change_selected')};
this.interface.re_change(this)}},
select_clear:function(){
this.pastIndexRow=0;
var a=this.list,i,x;
if(!a)return;
this.selected=false;
for(i=a.length;x=i--&&a[i];){
x.selected=false;
};
if(this.all_selected!==0){
this.all_selected=0;
this.initEvent('change_selected')};
this.interface.re_change(this)},
add:function(x){
if(x){
if(!this.list)this.list=[];
var xl=this.list.length==this.length;
this.list.push(x);
console.dir(this.list)
this.interface.sort(this,false);
if(xl)this.set('length',this.list.length);
this.interface.re_change(this)}},
delete_contacts:function(m){
if(m)this.interface.delete_contacts(this,m)},
force_length:function(l){
if(l>0){
this.interface.set_length_rows(this,this.length=l)}}},
init_event:function(ui){
var fn;
function g_ix(n){
while(n){
if(typeof n._ix__=='number')return n._ix__;
n=n.parentNode;
}};
ui.gEvent.add(ui.node,'click',fn=function(e){
if(e.returnValue===false)return;
var cmd,n=e.srcElement||e.target,it=ui.interface,x;
for(;n;n=n.parentNode){
switch(cmd=n._cmd__){
case'node':return;
case'link':return;
case'check':
rr.breakEvent(e);
e.shiftKey?it.checkGroup_row(ui,g_ix(n)):it.check_row(ui,g_ix(n));
return;
case'name':
rr.breakEvent(e);
it.click_name(ui,g_ix(n));
return;
case'edit':
case'edit_cancel':
case'view_edit':
rr.breakEvent(e);
it.click_edit(ui,g_ix(n));
return;
case'edit_delete':
case'view_delete':
rr.breakEvent(e);
it.click_delete(ui,g_ix(n));
return;
case'delete_contact':
rr.breakEvent(e);
it.click_delete_send(ui,g_ix(n));
return;
case'cancel':
rr.breakEvent(e);
it.click_cancel(ui,g_ix(n));
return;
case'edit_save':
rr.breakEvent(e);
it.click_save(ui,g_ix(n));
return;
case'head_name':
x=ui.sort=='name'?'name_dn':'name';
case'head_email':
if(!x)x=ui.sort=='email'?'email_dn':'email';
rr.breakEvent(e);
ui.set('sort',x);
return;
default:if(n===ui.node)return;
}}});
if(rr.IE)ui.gEvent.add(ui.node,'dblclick',fn)},
set:function(ui,pr,v,pv){
var it=this,tv=typeof v,x,und;
switch(pr){
case'filter':case'group':
if(v&&typeof tv!=='string')return;
break
case'sort':
if(!v)v='name';
if(v=='name'||v=='name_dn'||v=='email'||v=='email_dn')break;
return;
case'length':
if(v===0||v&&tv=='number')break;
return;
case'list':
if(tv!='object'||!(v instanceof Array))return;
v=[].concat(v);
break;
case'css':
if(tv!=='string'&&v!==null)return;
break;
default:return;
};
return v;
},
refresh:function(ui,ch,rz){
var it=ui.interface,nds=ui.nodes,rw,bx,v,i,l;
if(rz||ch.css){
if(ui.css_past_)rr.css_remove(ui.css_past_,nds.node);
if(ui.css)rr.css_add(ui.css,nds.node)};
if(rz||ch.list||ch.filter||ch.sort){
rr.css_set_('b-abook-h_table--sort-',nds.head,ui.sort);
this.sort(ui,ch)};
if(!ch.length&&ch.list){
ch.length=true;
ui.length=ui.list.length;
};
if(rz||ch.length){
this.re_length(ui)};
if(rz||ch.list||ch.filter||ch.sort){
this.re_change(ui)}},
row_reset:function(ui,ns,pr){
var fg,vs=ns.values_||(ns.values_={}),u,x,v,n,p;
x="b-abook-row";
if(!pr||pr.hidden){
x+=" b-abook-row--null";
if(vs.clss!==x){
ns.node.className=vs.clss=x;
fg=true;
};
if(ns.open_box&&vs.open){
rr.css_add('b-abook-info_row--close',ns.open_box.node)
vs.open=false;
};
return fg;
};
if(v=!!pr.selected)x+=' b-abook-row--selected';
if(vs.selected!==v){
ns.checkbox.checked=vs.selected=v;
fg=true;
};
if(pr.open)x+=' b-abook-row--unread';
if(pr.jabber)x+=' b-abook-row--chat_new';
if(pr.history)x+=' b-abook-row--chat_history';
if(pr.open)x+=' b-abook-row--open';
if(vs.open!=pr.open){
vs.open=pr.open;
if(!pr.open)pr.alert=pr.alert_sending=pr.alert_error=false;
if(pr.open&&pr.open_block){
if(!ns.open_box){
ns.open_box=ui.master('tmpl:abook_info');
ns.open_box.node._ix__=ns.index;
if(v=ns.open_box.button_delete)(v.node||v)._cmd__='delete_contact';
if(v=ns.open_box.button_cancal)(v.node||v)._cmd__='cancel';
n=ns.node;p=n.parentNode;
n.nextSibling?p.insertBefore(ns.open_box.node,n.nextSibling):p.appendChild(ns.open_box.node)};
n=pr.open_block.node||pr.open_block||pr.open_block;
p=ns.open_box.box||ns.open_box.node;
if(n.parentNode!==p){
while(v=p.firstChild)p.removeChild(v);
p.appendChild(n)}};
if(ns.open_box){
rr.css_set('b-abook-info_row--close',ns.open_box.node,!pr.open)}};
if(vs.clss!==x){
ns.node.className=vs.clss=x;
fg=true;
};
if(ns.open_box&&pr.alert){
if(!vs.alert_sending!=!pr.alert_sending)rr.css_set('b-abook-aler--sending',ns.open_box.alert,pr.alert_sending);
if(!vs.alert_error!=!pr.alert_error)rr.css_set('b-abook-aler--error',ns.open_box.alert,pr.alert_error);
vs.alert_error=!!pr.alert_error;
vs.alert_sending=!!pr.alert_sending;
};
if(!vs.alert!==!pr.alert&&ns.open_box){
vs.alert=!!pr.alert;
rr.css_set('b-abook-aler--show',ns.open_box.alert,pr.alert);
rr.css_set('b-abook-info_box--hidden',ns.open_box.box,pr.alert)};
v=pr.name||pr.email;
if(vs.name!==v){
vs.name=v;
fg=true;
ns.name_text.data=v;
};
v=pr.email;
if(vs.email!==v){
vs.email=v;
fg=true;
ns.email_text.data=v;
ns.newmail_link.href="/mail/compose.cgi?mailto="+encodeURIComponent(pr.email)+"&r=d7db;enc=utf-8";
ns.chat_history.href="/mail/messenger_history.cgi?user="+encodeURIComponent(pr.email)+"&r=d7db;enc=utf-8";
};
return fg;
},
re_change:(function(){
var spd=70;
return function(ui){
if(spd>77)spd=77;
if(ui.re_change_timmer){
ui.re_change_ps=0;
return;
};
function change(){
var set=ui.interface.row_reset,
l=ui.rows.length,
ps=ui.re_change_ps||0,
k=rr.IE?(ps<64?32:160):(ps<64?64:160),
x;
if(l<=ps)return;
if(l-ps+k<16)k=-1;
for(;k&&ps<l;ps++){
if(x=ui.rows[ps]){
if(x=set(ui,x,ui.list[ps]))k--;
}};
if(l<=ps){
ui.re_change_timmer=null;
ui.re_change_ps=0;
return;
};
ui.re_change_ps=ps;
ui.re_change_timmer=setTimeout(change,spd);
x=new Date;
setTimeout(function(){spd=(new Date-x)+20},1)};
change()}})(),
re_length:function(ui){
if(ui.re_length_timmer)return;
var tmr=20,tmx;
function tmm(){
tmr=new Date-tmx+32;
if(tmr<20){tmr=20}else if(tmr>300)tmr=300;
};
function change(){
ui.re_length_timmer=null;
var l=ui.length,rl=ui.rows.length
,k=rr.IE?(rl<64?32:64):(rl<64?48:160)
,x,u;
if(l<1)l=1;
if(rl<l){
x=rl+k;
if(x>l)x=l;
}
else if(rl>l){
x=rl-k;
if(x<l)x=l;
}
else{
return;
};
tmx=new Date;
ui.interface.set_length_rows(ui,x);
setTimeout(tmm,1);
if(x!==l){
ui.re_length_timmer=setTimeout(change,tmr)}else tmr=20;
};
change()},
set_length_rows:function(ui,l){
var _=ui.master
,i=ui.rows.length
,bx=ui.tbox
,rw,v;
if(i<l){
rw=tmpl.abook_row;
if(!rw.prototype.nodeType)rw.prototype.nodeType=-1;
for(;i<l;i++){
if(i&&i%16===0){
bx=ui.tboxs[ui.tboxs.length]=ui.cashe_tboxs_.pop()||_.tmpl('tmpl:abook_table')};
v=ui.rows[i]=ui.cashe_rows_.pop()||_.tmpl('tmpl:abook_row');
v.index=v.node._ix__=i;
if(v.open_box)v.open_box.node._ix__=ix;
if(!v.acv_){
v.acv_=true;
v.node._cmd__='row';
v.checkbox._cmd__='check';
v.name_link._cmd__='name';
v.edit_link._cmd__='edit';
};
this.row_reset(ui,v,ui.list[i]||false);
bx.box.appendChild(v.node);
if(v.open_box)bx.box.appendChild(v.open_box.node);
if(bx!==ui.tbox){
ui.box.appendChild(bx.node);
ui.tbox=bx;
}}}
else if(i>l){
while(i-->l){
ui.cashe_rows_.push(v=ui.rows.pop());
v.node.parentNode.removeChild(v.node)};
l=Math.ceil(l/16)||1;
i=ui.tboxs.length;
while(i-->l){
ui.cashe_tboxs_.push(v=ui.tboxs.pop());
if(v.open_box)v.open_box.node.parentNode.removeChild(v.open_box.node);
v.node.parentNode.removeChild(v.node)};
ui.tbox=ui.tboxs[i];
}},
check_row:function(ui,ix){
ui.pastIndexRow=ix;
var rn=ui.rows[ix],rv=ui.list[ix]||false;
rv.selected=!rv.selected;
this.test_selected(ui);
this.row_reset(ui,rn,rv);
if(rn.checkbox)setTimeout(function(){
var rn=ui.rows[ix],rv=ui.list[ix];
if(rn&&rv)rn.checkbox.checked=rv.selected;
},10)},
checkGroup_row:function(ui,ix){
var a=ui.list,fg=!ui.list[ix].selected,x1=ix,x2=ui.pastIndexRow||0;
ui.pastIndexRow=ix;
if(x1==x2)return this.check_row(ui,ix);
if(x1>x2)x1=x2,x2=ix;
while(x1<=x2){
v=a[x2--];
v.selected=fg;
};
this.test_selected(ui);
this.re_change(ui);
setTimeout(function(){
var rn=ui.rows[ix],rv=ui.list[ix];
if(rn&&rv)rn.checkbox.checked=rv.selected;
},10)},
check_status:function(ui,ix,s){
var ci=[],ic=0,a=ui.list,rv=ui.list[ix]||false,fg=rv&&!rv.unread,k,i,x;
if(!a)return;
s=!!s;
if(rv.selected!=s)ci[ic++]=ix;
rv.selected=s;
rv.unread=fg;
for(i=a.length;x=i--&&a[i];){
if(i!=ix&&x.selected){
k=true;
if(rv.selected!=s)ci[ic++]=i;
x.selected=s;
x.unread=fg;
}};
this.test_selected(ui);
ui.initEvent('change_status',ui,ci,fg);
k?this.re_change(ui):this.row_reset(ui,ui.rows[ix],rv)},
check_flag:function(ui,ix,s){
var ci=[],ic=0,a=ui.list,rv=ui.list[ix]||false,fg=rv&&!rv.flag,k,i,x;
if(!a)return;
s=!!s;
if(rv.selected!=s)ci[ic++]=ix;
rv.selected=s;
rv.flag=fg;
for(i=a.length;x=i--&&a[i];){
if(i!=ix&&x.selected){
k=true;
if(rv.selected!=s)ci[ic++]=i;
x.selected=s;
x.flag=fg;
}};
this.test_selected(ui);
ui.initEvent('change_flag',ui,ci,fg);
k?this.re_change(ui):this.row_reset(ui,ui.rows[ix],rv)},
test_selected:function(ui){
var a=ui.list,N=0,i;
if(a)for(i=a.length;i--;)if((a[i]||false).selected)N++;
if(ui.all_selected!==N){
ui.all_selected=N;
ui.initEvent('change_selected')}},
change_selected:function(ui,N){
if(ui.all_selected!==N){
ui.all_selected=N;
ui.initEvent('change_selected')}},
sort:function(ui,ch){
if(!ui.list)return;
var a=ui.list,i=0,x,filter=ui.filter,N=0
,sort=(ui.sort=='email'||ui.sort=='email_dn'?this.sort_email:this.sort_name)
,dn=ui.sort=='name_dn'||ui.sort=='email_dn'
,Ns=0;
if(filter)filter=filter.toLocaleLowerCase();
for(;x=a[i++];){
x.open=false;
if(!x._lower_case){
x._lower_case=true;
x.email=x.email?x.email.toLocaleLowerCase():'';
if(x.name)x.name_=x.name.toLocaleLowerCase()};
x.hidden=!!filter&&!(x.email&&x.email.indexOf(filter)>-1||x.name&&x.name_.indexOf(filter)>-1);
if(!x.hidden)N++;
if(x.selected)Ns++;
};
ui.list.sort(function(a,b){
if(!a.hidden!==!b.hidden){
return a.hidden?1:-1
};
return sort(a,b,dn)});
this.change_selected(ui,Ns)},
sort_email:function(a,b,dn){
if(a.email==b.email)return 0;
return dn?(a.email>b.email?-1:1):(a.email>b.email?1:-1)},
sort_name:function(a,b,dn){
if(a.name){
if(b.name){
a=a.name_;
b=b.name_;
if(a==b)return 0
return dn?(a>b?-1:1):(a>b?1:-1)};
return dn?1:-1;
}
else{
if(b.name)return dn?-1:1;
};
if(a.email==b.email)return 0;
return dn?(a.email>b.email?-1:1):(a.email>b.email?1:-1)},
click_name:function(ui,ix){
var px=ui.list[ix]||false,x,u;
px.open=px.open?false:'info';
if(px.open)
if(px.open_type!==px.open){
px.open_type=px.open;
x=px.open_block=ui.master('tmpl:contact_view'
,{
name:px.name,
email:px.email,
info:px.descr||"",
avatar_img:px.avatar,
history:!!px.history,
nochat:!(px.email&&px.jabber),
footer:true
});
(x.button_edit.node||x.button_edit)._cmd__='view_edit';
(x.button_delete.node||x.button_delete)._cmd__='view_delete';
};
this.row_reset(ui,ui.rows[ix],px)},
click_edit:function(ui,ix){
var px=ui.list[ix]||false,ns,x;
px.open=px.open=='edit'?false:'edit';
if(px.open){
px.open_type=px.open;
x=px.open_block=ui.master('tmpl:contact_edit'
,{
id:px.id,
name:px.name,
email:px.email,
info:px.descr||"",
avatar_img:px.avatar,
nochat:false
});
(x.button_save.node||x.button_save)._cmd__='edit_save';
(x.button_cancel.node||x.button_cancel)._cmd__='cancel';
(x.button_delete.node||x.button_delete)._cmd__='edit_delete';
};
this.row_reset(ui,ui.rows[ix],px);
if(x=px.open&&px.open_block&&px.open_block.inp_name){
setTimeout(function(){
if(x.offsetParent)x.focus()},30)}},
click_save:function(ui,ix){
var px=ui.list[ix]||false,prm={};
if(px.xhr_sending||px.open!=='edit'||!px.open_block)return;
px.xhr_sending=true;
px.open_block.submit({
urlResource:"/mail/jcontacts.cgi?mode=edit",
error:function(r){
px.xhr_sending=false;
},
complete:function(r){
px.xhr_sending=false;
if(!r||!r.contact)return false;
var c=r.contact;
px.name=c.name;
px.email=c.email;
px.descr=c.descr;
px.phones=c.phones;
px.history=c.history;
px.jabber=c.jabber;
px.avatar=c.avatar;
ui.initEvent('change_contact',r.contact);
ui.interface.sort(ui,false);
ui.interface.re_change(ui)}})},
click_delete:function(ui,ix){
var px=ui.list[ix]||false;
if(px&&px.open){
px.alert=true;
this.row_reset(ui,ui.rows[ix],px)}},
click_delete_send:function(ui,ix){
var px=ui.list[ix]||false,prm={};
if(!px||px.xhr_sending||!px.open||!px.open_block)return;
function err(r){
px.xhr_sending=false;
px.alert_sending=false;
px.alert_error=true;
if(ui.list[ix]==px){
ui.interface.row_reset(ui,ui.rows[ix],px)}};
var xhr=new rr.class_xhrloader({
urlResource:'/mail/jcontacts.cgi',
metodRequest:'POST',
contentType:'multipart/form-data',
startTimeout:1
,xhrChange_other:err
,xhrChange_200:function(r){
px.xhr_sending=false;
try{r=r?(window.JSON?JSON.parse(r):eval('('+r+')')):null}catch(e){r=null};
if(!r||r.status!=='ok')return err();
var i=0,j=0,x,l=ui.list.length;
for(;x=ui.list[i];i++){
if(x.id!==px.id){
if(i!==j)ui.list[j]=x;
j++;
}};
ui.list.length=j;
if(l===ui.length)ui.set('length',j);
ui.interface.test_selected(ui);
ui.interface.re_change(ui)}});
if(x=window._request_key)xhr.set('request_key',x);
xhr.set('mode','delete');
xhr.set('c',px.id);
px.alert_sending=true;
this.row_reset(ui,ui.rows[ix],px);
xhr.goSend()},
click_cancel:function(ui,ix){
var px=ui.list[ix]||false;
px.open=false;
this.row_reset(ui,ui.rows[ix],px)},
open_edit:function(ui){
},
delete_contacts:function(ui,m){
if(!m||!ui.list||!ui.list.length)return;
m=m instanceof Array?m:[m];
var i=0,j=0,x,l=ui.list.length,lm=m.length;
function indexOf(v){
var i=lm,x;
while(i--)if(m[i]==v)return i;
return-1;
};
for(;x=ui.list[i];i++){
if((m.indexOf?m.indexOf(x.id):indexOf(x.id))===-1){
if(i!==j)ui.list[j]=x;
j++;
}};
ui.list.length=j;
if(l===ui.length)ui.set('length',j);
ui.interface.test_selected(ui);
ui.interface.re_change(ui)}});


/* url: /js/m2/contacts.src.js */

ramail.open_contacts=function(e){
e.hash='/contacts';
var page=this.pg_contacts||(this.pg_contacts=masterElement('ui:pg_contacts'));
page.pg_name='contacts';
if(ramail.data_address&&ramail.data_address.length){
if(page.abook.length>60){
page.abook.force_length(60)};
ramail.page_connect(page,e);
page.abook.set('length',page.abook.list.length);
return true;
};
var rk=true?'a673ffb7588e92cbe11b62d9c3496474':'b9632657e7f746a457bea49622d3128b'
jsonp_loader('/mail/jcontacts.cgi?mode=list_all&rkey='+rk,function(v){
if(!v){
alert('error loading')
return;
};
ramail.data_address=v;
page.abook.set({
list:[].concat(v),
length:v.length
});
ramail.page_connect(page,e)});
return false;
};
ramail.get_contacts=function(p){
var page=this.pg_contacts||(this.pg_contacts=masterElement('ui:pg_contacts'));
if(p.load)p.load.call(page);
return page;
};


/* url: /js/m2/tmpl/tmpl_chat_history.src.js */

rr.styles('rm:chat_history'
,'.b-chat_history {margin:1ex;}'
,'.b-chat_history-tbar {text-align:right;padding:0.5ex 0 0.5ex 0.3ex;line-height:1.5em;}'
,'.b-chat_history-tb_left {float:left;}'
,'.b-chat_history-am {margin-left:1ex;}'
,'a.b-chat_history-past {text-decoration:none;}'
,'a.b-chat_history-next {text-decoration:none;margin-left:1ex;}'
,'a.b-chat_history-past--no, a.b-chat_history-next--no {color:#CCCCCC;text-decoration:none;}'
,'.b-chat_history-past-v {margin-right:1ex;}'
,'.b-chat_history-next-v {margin-left:1ex;}'
,'.b-chat_history-next-d, .b-chat_history-past-d {background-color:#EEEEEE;display:inline-block;min-width:8em;}'
,'a:hover .b-chat_history-next-d, a:hover .b-chat_history-past-d {text-decoration:underline;}'
,'.b-chat_history-past-d {padding-left:1ex;text-align:left;}'
,'.b-chat_history-next-d {padding-right:1ex;}'
,'.b-chat_history-day {margin:0.5ex 0;}'
,'.b-chat_history-dhead {line-height:1.3em;background-color:#EEEEEE;padding:0.3ex 0.5ex;cursor:pointer;}'
,'.b-chat_history-day--open .b-chat_history-dhead {background-color:#CCFFCC;border-color:#C2EFC2}'
,'.b-chat_history-dbox {display:none;}'
,'.b-chat_history-day--open .b-chat_history-dbox {display:block;}'
,'.b-chat_history-open {vertical-align:middle;line-height:1em;margin-top:0;background-color:#FF0000;display:inline-block;height:16px;overflow:hidden;width:16px;}'
,'.b-chat_history-open  {background-color:transparent;background-image:url("'+(window._static_host||'')+'/i/chameleon/ramail-icons.png");background-position:50% -1657px;}'
,'.b-chat_history-day--open .b-chat_history-open  {background-position:50% -1597px;}'
,'.b-chat_history-day .s--loading .b-chat_history-open {background-image:url("http://i.r0.ru/m/31/i/chameleon/loader-w.gif");background-position:50%;}'
,'.b-chat_history-date {line-height:1em;margin-top:0;margin-left:1ex;vertical-align:middle;}'
,'.b-chat_history-all {line-height:1em;margin-top:0;vertical-align:middle;color:#777777;margin-left:1em;}'
,'.b-chat_history-error {display:none;line-height:1em;margin-top:0;vertical-align:middle;color:#C85A5A;margin-left:1em;}'
,'.b-chat_history-day .s--error .b-chat_history-error {display:inline;}'
,'.b-chat_history-msg {padding:0.7ex;margin:0;border:1px solid #C2EFC2;border-width:0 1px 1px;zoom:1;}'
,'.b-chat_history-who {font-weight:bold;color:#000;}'
,'.b-chat_history-who--inc {color:#8180DD;}'
,'.b-chat_history-msg_time {color:#777777;float:right;font-size:70%;}'
,'.b-chat_history-msg_sec {font-size:70%;margin-left:0.5ex;vertical-align:top;}'
,'.b-chat_history-msg_text {color:#333;display:inline;white-space:pre-wrap;}'
,rr.IE<8&&'.b-chat_history-msg_text {white-space:pre;word-wrap: break-word;}'
,'.b-chat_history-more {display:none;background-color:#EEEEEE;margin:1ex auto 1em;text-align:center;width:30%;}'
,'.b-chat_history-more--show {display:block;}'
);
rr.styles('rm:contact_wrapper'
,'.b-contact_view_wrapper {background-color:#EEE;padding:0;margin:1ex 1ex 1em;zoom:1;}'
,'.b-contact_view_wrapper--open {background-color:#CCFFCC;border:0 none;padding:0px 2px 2px;}'
,'.b-contact_view_wrapper-head {line-height:1.3em;padding:0.3ex 0.5ex;cursor:pointer;}'
,'.b-contact_view_wrapper--open .b-contact_view_wrapper-head {margin-left:-2px;}'
,'.b-contact_view_wrapper-box {display:none;background-color:#FFF;padding:1ex;}'
,'.b-contact_view_wrapper--open .b-contact_view_wrapper-box {display:block;}'
,'.b-contact_view_wrapper-open {line-height:1em;margin-top:0;background-color:#FF0000;display:inline-block;height:16px;overflow:hidden;vertical-align:middle;width:16px;}'
,'.b-contact_view_wrapper-open  {background-color:transparent;background-image:url("'+(window._static_host||'')+'/i/chameleon/ramail-icons.png");background-position:50% -1657px;}'
,'.b-contact_view_wrapper--open .b-contact_view_wrapper-open  {background-position:50% -1597px;}'
,'.b-contact_view_wrapper-head-text {vertical-align:middle;margin-left:1ex;}'
);
tmpl.contact_wrapper=function(pr,_){
var ns=this;
ns.node=_('div.b-contact_view_wrapper',
ns.head_wrapper=_('div.b-contact_view_wrapper-head',
{
onclick:function(){
rr.css_flip('b-contact_view_wrapper--open',ns.node)
return false;
}},
_('span.b-contact_view_wrapper-open'),
_('span.b-contact_view_wrapper-head-text',"\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430")),
ns.box=_('div.b-contact_view_wrapper-box'))};
tmpl.chat_history=function(pr,_){
var ns=this;
ns.node=_('div.b-chat_history',
_('div.b-chat_history-tbar#history_chat',
_('span.b-chat_history-tb_left',
"\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0447\u0430\u0442\u0430:",
_('span.b-chat_history-am',
ns.text_date=_.text(pr.adate||' '))),
ns.g_past=_('a.b-chat_history-past',{href:"#past"},
_('span.b-chat_history-past-v',"\u00AB"),
_('span.b-chat_history-past-d',
ns.text_past=_.text(''))),
ns.g_next=_('a.b-chat_history-next',{href:"#next"},
_('span.b-chat_history-next-d',
ns.text_next=_.text('')),
_('span.b-chat_history-next-v',"\u00BB"))),
ns.box=_('div.b-chat_history-box'))};
tmpl.chat_history_day=function(pr,_){
var ns=this,u;
ns.sname='b-chat_history-day';
ns.sn_open='b-chat_history-day--open';
ns.sn_more_s='b-chat_history-more--show'
ns.node=_('p.b-chat_history-day',
ns.head=_('div.b-chat_history-dhead',
_('span.b-chat_history-open'),
_('span.b-chat_history-date',
ns.date_text=_.text(pr.date||' ')),
" ",
_('span.b-chat_history-all',
ns.all_text=_.text(pr.all||' ')),
_('span.b-chat_history-error',
rv.chat_history_err_loading
)),
ns.box=_('div.b-chat_history-dbox'),
ns.more=_('span.b-chat_history-more',
ns.more_text=_.text('\u0415\u0448\u0451 40')))};
tmpl.chat_history_more=function(pr,_){
var ns=this;
ns.node=_('span.b-chat_history-more',
_('span.b-chat_history-more-text',
ns.text=_.text('\u0415\u0448\u0451 40')))};
tmpl.chat_history_msg=function(pr,_){
var ns=this,u;
ns.node=_('div.b-chat_history-msg',
ns.who_node=_('span.b-chat_history-who'+(pr.incoming?' b-chat_history-who--inc':''),
ns.who_text=_.text(pr.my||!pr.who?"\u042F:":pr.who+":")),
" ",
_('small.b-chat_history-msg_time',
ns.time=_.text(pr.time||' ')),
" ",
ns.box_text=_('span.b-chat_history-msg_text'))};


/* url: /js/m2/ui/ui_chat_history.src.js */

elems.chat_history=rr.new_class({
interface:true,
parent:rr.class_baseElement,
constructor:function(pr,_,cfg){
this.interface.parent.call(this,pr,_,cfg);
this.interface.factory(this,pr,_,cfg)},
prototype:{
z_resize:true
},
factory:function(ui,pr,_){
var ns=ui.nds=_.tmpl('tmpl:chat_history',pr),u;
ui.master=_.clone();
ui.node=ns.node;
ui.box=ns.box;
ui.items=[];
ui.items_cache=[];
ui.list_ns={};
ns.g_past._cmd__='past';
ns.g_next._cmd__='next';
function ev(e){
if(e.returnValue===false)return;
var cmd,n=e.srcElement||e.target,it=ui.interface,x;
for(;n;n=n.parentNode){
switch(cmd=n._cmd__){
case'day_head':n._obj__.check();return rr.breakEvent(e);
case'day_more':n._obj__.more();return rr.breakEvent(e);
case'past':if(ui.ymdPast)ui.set('ymdActive',ui.ymdPast);return rr.breakEvent(e);
case'next':if(ui.ymdNext)ui.set('ymdActive',ui.ymdNext);return rr.breakEvent(e);
default:if(n===ns.node)return;
}}};
ui.gEvent.add(ns.node,'click',ev);
if(rr.IE)ui.gEvent.add(ns.node,'dblclick',ev);
if(!pr)ui.refresh(true)},
set:function(ui,pr,v,pv){
var it=this,tv=typeof v,x,u;
switch(pr){
case'ymdActive':if(v&&tv==='number')break;return;
case'list':if(v)break;return;
case'contact':if(v)break;return;
default:return;
};
return v;
},
refresh:function(ui,ch,rz){
if(!ui.list||!ui.contact)return false;
var it=ui.interface,nds=ui.nds,_=ui.master,p=_.global.p,x,v,i,l;
if(ui.z_resize)ui.z_resize=!(rz=true);
if(rz||ch.contact){
ui.ymdActive=99999999;
};
if(rz||ch.ymdActive||ch.list||ch.contact){
this.set_PANM(ui);
x=ui.ymdActive/100>>0;
ui.nds.text_date.data=rv.month[x%100-1]+" "+(x/100>>0);
if(!ui.ymdPast){
x-=x%100>1?1:89
}else
x=ui.ymdPast/100>>0;
ui.nds.text_past.data=rv.month[x%100-1]+" "+(x/100>>0);
if(!ui.ymdNext){
x=ui.ymdActive/100>>0;
x+=x%100==12?89:1;
}else x=ui.ymdNext/100>>0;
ui.nds.text_next.data=rv.month[x%100-1]+" "+(x/100>>0);
rr.css_set('b-chat_history-past--no',ui.nds.g_past,!ui.ymdPast);
rr.css_set('b-chat_history-next--no',ui.nds.g_next,!ui.ymdNext);
var ym=(ui.ymdActive/100)>>0,ymd,ixd=0,q;
i=ui.ixActive;
while(v=ui.list[i++]){
q=v[0]/100>>0;
if(q!=ym)break;
x=ui.items[ixd]||(ui.items[ixd]=ui.items_cache.pop()||_('ui:chat_history_day'));
ixd++;
x.set({contact:ui.contact,ymd:v[0],all:v[1]});
if(!x.parent){
(ui.box||x.node).appendChild(x.node);
x.parent=ui;
}};
i=ixd;
while(x=ui.items[ixd++]){
x.remove();
ui.items_cache.push(x)};
ui.items.length=i;
}},
set_PANM:function(ui){
var d=ui.ymdActive||0,m=ui.list,l=m.length,sz=l,h,i=0,x,k,u;
d=m[0][0]>d?m[0][0]:m[l-1][0]<d?m[l-1][0]:d;
x=d-d%100;
while(sz>1){
h=sz>>1;k=i+h;
if(x>m[k][0]){i=k;sz-=h}else sz=h;
};
x=m[i][0]/100>>0;
d=d/100>>0;
x=x<d?m[i][0]:u;
i=ui.ixActive=x?i+1:0;
d=m[i]&&m[i][0];
if(!d){
sz=i;i=0;
x=d=x-x%100;
while(sz>1){
h=sz>>1;k=i+h;
if(x>m[k][0]){i=k;sz-=h}else sz=h;
};
x=m[i][0]<d?m[i][0]:u;
ui.ixActive=x?i+1:0;
};
ui.ymdPast=x;
x=d-d%100+100;
sz=l;i=l-1;
while(sz>1){
h=sz>>1;k=i-h;
if(x<m[k][0]){i=k;sz-=h}else sz=h;
};
ui.ymdActive=d;
ui.ymdNext=m[i][0]/100>>0>d/100>>0?m[i][0]:u;
},
gen:function(){
var y,m,d,i=0,ar=[];
for(y=2009;y<2011;y++){
for(m=1;m<13;m++){
ym=(y*100+m)*100;
for(d=Math.ceil(Math.random()*7);d<31;){
ar[i++]=[ym+d,Math.ceil(Math.random()*150)];
d+=Math.ceil(Math.random()*2)||1;
}}};
return ar;
}});
elems.chat_history_day=rr.new_class({
interface:true,
parent:rr.class_baseElement,
constructor:function(pr,_,cfg){
this.interface.parent.call(this,pr,_,cfg);
this.interface.factory(this,pr,_,cfg)},
factory:function(ui,pr,_){
ui.master=_.clone();
var ns=ui.nds=_('tmpl:chat_history_day',pr);
rr.ns('rm.chat_history_vday');
ui.node=ns.node;
ui.box=ns.box;
ns.head._cmd__="day_head";
ns.more._cmd__="day_more";
ns.head._obj__=ns.more._obj__=ui;
},
prototype:{
check:function(){
if(!this.parent)return;
if(this.is_childs){
rr.css_flip(this.nds.sn_open,this.node);
return;
};
if(rm.chat_history_vday[this.idx]){
this.interface.open(this);
return;
};
this.interface.load_js(this)},
more:function(){
this.interface.open(this)},
remove:function(){
var ui=this,x=this.node.parentNode;
if(x)x.removeChild(this.node)
this.parent=this.ymd=this.idx=null;
if(ui.is_open){
ui.is_childs=0;
rr.css_remove(ui.nds.sn_open,ui.node);
rr.css_remove(ui.nds.sn_more_s,ui.nds.more);
ui.box.parentNode.replaceChild(x=ui.box.cloneNode(false),ui.box);
ui.box=x;
}}},
set:function(ui,pr,v,pv){
var it=this,tv=typeof v,x,u;
switch(pr){
case'ymd':
case'all':if(v===0||v&&tv==='number')break;
return;
case'contact':if(v)break;
default:return;
};
return v;
},
refresh:function(ui,ch,rz){
var it=ui.interface,nds=ui.nds,_=ui.master,p=_.global.p,bx,v,i,x;
x=ui.ymd+"_"+ui.contact;
if(rz||x!=ui.idx){
ui.idx=x;
if(ui.is_childs){
ui.is_childs=0;
rr.css_remove(ui.nds.sn_open,ui.node);
rr.css_remove(ui.nds.sn_more_s,ui.nds.more);
x=ui.box;
x.parentNode.replaceChild(ui.box=x.cloneNode(false),x)}};
if(rz||ch.ymd){
x=(ui.ymd/100)>>0;
var y=(x/100)>>0,d=ui.ymd%100,m=x%100-1;
ui.nds.date_text.data=(d<10?"0"+d:d)+" "+rv.month_of[m]+", "+rv.aweek[new Date(y,m,d).getDay()];
};
if(rz||ch.all){
ui.nds.all_text.data=rr.printx(rv.chat_history_msg_all[rv.number(ui.all)],ui.all)}},
open:function(ui){
var dv=rm.chat_history_vday[ui.idx],list,users;
if(dv)list=dv.history,users=dv.users;
if(!dv||!list||!list.length||!users)return;
var i=ui.is_childs||0,l=list.length,item=tmpl.chat_history_msg,ht,mt,elm;
if(!item.prototype.nodeType)item.prototype.nodeType=-1;
if(l-i>120)l=i+70;
for(;i<l;i++){
x=list[i];
if(!x)break;
ht=x[3]/100>>0;
mt=ht%100;
ht=ht/100>>0;
elm=new item(
{
who:x[2]?users[x[2]][0]||users[x[2]][1]:rv.chat_history_my,
who_title:users[x[2]][1],
incoming:!x[1],
time:(ht<10?'0'+ht:ht)+":"+(mt<10?'0'+mt:mt)},
ui.master
);
this.append_msg(ui.ownerDocument,elm.box_text,x[4]);
ui.box.appendChild(elm.node)};
ui.is_childs=i;
x=list.length;
if(i<x){
ui.nds.more_text.data=rr.printx(rv.chat_history_more_msg[rv.number(x-i)],x-i)};
rr.css_set(ui.nds.sn_more_s,ui.nds.more,i<x);
rr.css_add(ui.nds.sn_open,ui.node)},
append_msg:function(d,bx,msg){
var i=0,m,l,v;
if(!msg||typeof msg!=='string')return;
if(rr.IE<8&&msg.indexOf('\n')!==-1){
msg=msg.replace(/\r\n|\n/g,"\r\n")};
this.append_msg_link(d,bx,msg)},
append_msg_link:function(){
var regU=/((mailto\:)?(["\u00AB][^\s\@\,\"\u00AB\u00BB]+([ ]+[^\s\@\,\"\u00AB\u00BB]+)*["\u00BB]|[^\?=()<>\[\]:;\@\s\\/,\.\"\u00AB\u00BB\(]+(\.[^\?=()<>\[\]:;\@\s\\/,\.\"\u00AB\u00BB\(]+)*)\@([A-Za-z0-9-_]+([.][A-Za-z0-9-_]+)*\.(ru|[a-z0-9]{2,7})|([0-9]{1,3}[.]){3}[0-9]{1,3}))|(((http|https|ftp):\/\/|www\.|ftp\.)?([^\W\s\@\.\,\"\(\[\u00AB\u00BB]+(\:[^\W\s\@\.\,\"\(\[\u00AB\u00BB]+)?\@)?([A-Za-z0-9-_]+([.][A-Za-z0-9-_]+)*\.(info|name|aero|coop|jobs|mobi|museum|pro|travel|[a-z0-9]{2,3})|([0-9]{1,3}[.]){3}[0-9]{1,3})([:][0-9]{1,5})?([\/?][A-Za-z0-9-.\\/\\/#?_&=;:@+%~]+(\,[A-Za-z0-9-.\\/#?_&=;:@+%~]+)*)?(?=$|\W))/gi; // "
var rgD=/com|net|org|biz|edu|gov|info|name|int|mil|aero|coop|jobs|mobi|museum|pro|travel|[rs]u|uk|ua|by|de|jp|fr|fi|no|no|ca|it|ro|cn|nl|at|nu|se/;
return function(d,bx,tx){
var lx=tx.length,posStart=0;
tx.replace(regU,testRep);
function testRep(v){
var href,posUr=arguments[arguments.length-2],n;
if(arguments[1]){
href=arguments[2]?v:'mailto:'+v;
if(href.indexOf('\u00AB'))href=href.replace('\u00AB','"');
if(href.indexOf('\u00BB'))href=href.replace('\u00BB','"')}
else if(arguments[10]){
if(!arguments[11]&&!rgD.test(arguments[17]))return v;
href=arguments[12]?v:(arguments[11]=='ftp.'?'ftp://':'http://')+v
}
else return v;
if(posStart<posUr){
bx.appendChild(
d.createTextNode(tx.substring(posStart,posUr)))};
n=d.createElement('A');
n.href=rr.IE&&href.indexOf('@')!==-1?href.replace('@','%40'):href;
n.appendChild(
document.createTextNode(v.length>70?v.substring(0,50)+"....."+v.substring(v.length-10):v));
bx.appendChild(n);
posStart=posUr+v.length;
return v;
};
if(posStart<lx){
bx.appendChild(
d.createTextNode(tx.substring(posStart)))}}}(),
setLoading:function(ui,s){
rr.css_set_('s--',ui.nds.head,s)},
load_xhr:function(ui){
var xhr=rr.newHttpRequest(),dt=60000,flagSend,timmer;
var ymd=ui.ymd,url="/mail/messenger_history.cgi?user="+encodeURI(ui.parent.hUser||'')+"&g=h_day&date="+ymd+"";
if(!xhr){
return;
};
function change(){
var status=xhr.readyState===4?xhr.status:null,text,x;
if(!status)return;
ui.loading=false;
text=xhr.responseText;
try{xhr.onreadystatechange=null;}catch(oh){};
if(status!==200){
ui.interface.err_alert(ui);
return;
};
try{x=eval(text)}catch(oh){
return ui.interface.err_alert(ui)};
if(x){
rm.chat_history_vday[ymd]=x;
if(this.ymd==ymd){
}}};
ui.loading=xhr;
xhr.open("GET",url,true);
xhr.onreadystatechange=change;
xhr.send(null)},
load_js:function(ui){
if(!ui.parent||!ui.parent.contact)return;
var idx=ui.idx,url="/mail/messenger_history.cgi?user="+encodeURI(ui.parent.contact||'')+"&g=h_day&date="+ui.ymd+"";
ui.interface.setLoading(ui,'loading');
jsonp_loader(url,function(v){
if(typeof v!=='object'||!v.history){
ui.interface.setLoading(ui,'error');
return;
};
ui.interface.setLoading(ui,'complite');
rm.chat_history_vday[idx]={
users:v.users,
history:v.history
};
if(ui.idx==idx){
ui.interface.open(ui)}})}});


/* url: /js/m2/tmpl/tmpl_sidebar_settings.src.js */

tmpl.sidebar_settings=function(pr,_){
var ns=this;
ns.node=_('div.b-sidebar b-sidebar--setting'
,_('DL.tab#settings-mode-list'
,_('DT'
,_('A',{href:"#/settings/view",title:"\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u0438\u0441\u0435\u043C, \u0432\u044B\u0431\u043E\u0440 \u043A\u043E\u0434\u0438\u0440\u043E\u0432\u043A\u0438, \u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0442\u043E\u043D\u043A\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"}
,"\u0412\u0438\u0434 \u043F\u043E\u0447\u0442\u044B"
))
,_('DT'
,_('A',{href:"#/settings/scheme",title:"\u0412\u044B\u0431\u043E\u0440 \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E \u0432\u0438\u0434\u0430 \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u043E\u0447\u0442\u043E\u0432\u043E\u0433\u043E \u044F\u0449\u0438\u043A\u0430"}
,"\u0422\u0435\u043C\u044B"
))
,_('DT'
,_('A',{href:"#/settings/enlarge",title:"\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u043C \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E!"}
,"\u0420\u0430\u0437\u043C\u0435\u0440 \u044F\u0449\u0438\u043A\u0430"
))
,_('DT'
,_('A',{href:"#/settings/rules",title:"\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u043E\u0447\u0442\u044B"}
,"\u041F\u0440\u0430\u0432\u0438\u043B\u0430"
))
,_('DT'
,_('A',{href:"#/settings/rpop",title:"\u0421\u0431\u043E\u0440 \u043F\u043E\u0447\u0442\u044B \u0441 \u0434\u0440\u0443\u0433\u0438\u0445 \u043F\u043E\u0447\u0442\u043E\u0432\u044B\u0445 \u044F\u0449\u0438\u043A\u043E\u0432"}
,"\u0421\u0431\u043E\u0440\u0449\u0438\u043A \u043F\u043E\u0447\u0442\u044B"
))
,_('DT'
,_('A',{href:"#/settings/timezone",title:"\u0412\u044B\u0431\u043E\u0440 \u0447\u0430\u0441\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u044F\u0441\u0430"}
,"\u0427\u0430\u0441\u043E\u0432\u043E\u0439 \u043F\u043E\u044F\u0441"
))))};


/* url: /js/m2/tmpl/tmpl_page_settings.src.js */

tmpl.settings_view=function(pr,_){
var ns=this;
ns.sidebar='settings';
ns.text_title="\u0412\u0438\u0434 \u043F\u043E\u0447\u0442\u044B";
ns.wrapper_page=_('tmpl:wrapper_page'
,{extend:this,name:'settings_view',title:_.text("\u0412\u0438\u0434 \u043F\u043E\u0447\u0442\u044B")}
,_('DIV.content-holder main-settings#settings'
,ns.form=_('FORM',{id:'eee',name:"settings",method:"post",action:"/mail/settings.cgi"}
,_('P.hidden'
,_('INPUT',{type:"hidden",name:"mode",value:"settings"})
,_('INPUT',{type:"hidden",name:"request_key",value:"a673ffb7588e92cbe11b62d9c3496474"})
,_('INPUT',{type:"hidden",name:"enc",value:"utf-8"})
,_('INPUT',{type:"hidden",name:"_checkbox-names",value:"show_ext_images,show_inline_rfc822,next_after_delete,no_banners_please,hints_disabled,ramac_disabled,forward_attach,save_sent,autosave_disabled,no_show_disp_interval,enable_chat,news_on_startpage"}))
,_('TABLE.main-settings',{cellPadding:0,cellSpacing:0,border:0}
,_('TBODY'
,_('TR'
,_('TD',{width:"50%"}
,_('FIELDSET#view-settings'
,_('FIELDSET#locale-settings'
,_('H2.title'
,"\u042F\u0437\u044B\u043A \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u043F\u043E\u0447\u0442\u044B"
)
,_('SELECT.language-selector ru#set-localization_lang',{name:"var:locale",value:"ru"}
,_('OPTION.ru',{value:"ru",text:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"})
,_('OPTION.ua',{value:"ua",text:"\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"})
,_('OPTION.by',{value:"by",text:"\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F"})
,_('OPTION.en',{value:"en",text:"English"})
,_('OPTION.kz',{value:"kz",text:"\u049A\u0430\u0437\u0430\u0493\u044B"}))
,_('BR')
,_('BR')
,_('P'
,"\u041D\u0430\u0448\u043B\u0438 \u043E\u0448\u0438\u0431\u043A\u0443 \u0432 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0435? "
,_('A',{href:"http://www.rambler.ru/click?from=mail&reqid=429B819B711E00EC&block=footer&link=feedback&_URL=http://help.rambler.ru/feedback.html?s=103",title:"\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438 (\u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0432 \u043D\u043E\u0432\u043E\u043C \u043E\u043A\u043D\u0435)"}
,"\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C \u043E\u0431 \u044D\u0442\u043E\u043C"
))
,_('BR'))
,_('FIELDSET#startpage'
,_('H2.title'
,"\u0421\u0442\u0430\u0440\u0442\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430"
)
,_('P'
,_('LABEL.for-checkbox'
,_('INPUT.radio#news-on-startpage',{type:"radio",name:"var:news_on_startpage",checked:true})
,_('SPAN'
,"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439"
)))
,_('P'
,_('LABEL.for-checkbox'
,_('INPUT.radio#inbox-on-startpage',{type:"radio",name:"var:news_on_startpage",value:"off"})
,_('SPAN'
,"\u0421\u0440\u0430\u0437\u0443 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442\u044C \u043A \u043F\u0438\u0441\u044C\u043C\u0430\u043C"
))))
,_('FIELDSET#reading'
,_('H2.title'
,"\u0427\u0442\u0435\u043D\u0438\u0435 \u043F\u0438\u0441\u0435\u043C \u0438 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043F\u0430\u043F\u043E\u043A"
)
,_('P'
,_('LABEL.for-checkbox'
,_('SPAN'
,"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C"
))
,_('SELECT#set-msgs_per_page',{name:"var:msgs_per_page",value:"50"}
,_('OPTION',{value:"5"}
,"5"
)
,_('OPTION',{value:"10"}
,"10"
)
,_('OPTION',{value:"20"}
,"20"
)
,_('OPTION',{value:"50"}
,"50"
)
,_('OPTION',{value:"100"}
,"100"
))
,"\u043F\u0438\u0441\u0435\u043C \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435"
)
,_('P'
,_('LABEL.for-checkbox'
,_('SPAN'
,"\u041E\u0431\u043D\u043E\u0432\u043B\u044F\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u0438\u0441\u0435\u043C:"
))
,_('SELECT#set-auto_refresh',{name:"var:auto_refresh",value:"0"}
,_('OPTION',{value:"0"}
,"\u043D\u0438\u043A\u043E\u0433\u0434\u0430"
)
,_('OPTION',{value:"1"}
,"\u043A\u0430\u0436\u0434\u0443\u044E \u043C\u0438\u043D\u0443\u0442\u0443"
)
,_('OPTION',{value:"2"}
,"\u043A\u0430\u0436\u0434\u044B\u0435 3 \u043C\u0438\u043D\u0443\u0442\u044B"
)
,_('OPTION',{value:"3"}
,"\u043A\u0430\u0436\u0434\u044B\u0435 5 \u043C\u0438\u043D\u0443\u0442"
)
,_('OPTION',{value:"4"}
,"\u043A\u0430\u0436\u0434\u044B\u0435 10 \u043C\u0438\u043D\u0443\u0442"
)
,_('OPTION',{value:"5"}
,"\u043A\u0430\u0436\u0434\u044B\u0435 20 \u043C\u0438\u043D\u0443\u0442"
)
,_('OPTION',{value:"6"}
,"\u043A\u0430\u0436\u0434\u044B\u0435 30 \u043C\u0438\u043D\u0443\u0442"
)
,_('OPTION',{value:"7"}
,"\u043A\u0430\u0436\u0434\u044B\u0439 \u0447\u0430\u0441"
)
,_('OPTION',{value:"8"}
,"\u043A\u0430\u0436\u0434\u044B\u0435 2 \u0447\u0430\u0441\u0430"
)))
,_('BR')
,_('P'
,_('LABEL.for-checkbox'
,_('INPUT.checkbox#set-show_ext_images',{type:"checkbox",name:"var:show_ext_images",value:"1"})
,_('SPAN'
,"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0441 \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u0432"
)))
,_('P'
,_('LABEL.for-checkbox'
,_('INPUT.checkbox#set-show_inline_rfc822',{type:"checkbox",name:"var:show_inline_rfc822",value:"1"})
,_('SPAN'
,"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435 \u043F\u0438\u0441\u044C\u043C\u0430"
)))
,_('P'
,_('LABEL.for-checkbox'
,_('INPUT.checkbox#set-next_after_delete',{type:"checkbox",name:"var:next_after_delete",value:"1"})
,_('SPAN'
,"\u041F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442\u044C \u043A \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C\u0443 \u043F\u0438\u0441\u044C\u043C\u0443 \u043F\u043E\u0441\u043B\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F"
)))
,_('P.disable-ads'
,_('LABEL.for-checkbox'
,_('INPUT.checkbox#set-no_banners_please',{type:"checkbox",name:"var:no_banners_please",value:"1"})
,_('SPAN'
,"\u041D\u0435 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0440\u0435\u043A\u043B\u0430\u043C\u0443"
)))
,_('P'
,_('LABEL.for-checkbox'
,_('INPUT.checkbox#set-disp_interval',{type:"checkbox",name:"var:no_show_disp_interval",value:"1"})
,_('SPAN'
,"\u041D\u0435 \u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0434\u0430\u0442\u0430\u043C"
))))
,_('FIELDSET#rambler-id'
,_('H2.title'
,_('A',{href:"https://id.rambler.ru/script/settings.cgi",title:"Rambler ID (\u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0432 \u043D\u043E\u0432\u043E\u043C \u043E\u043A\u043D\u0435)"}
,"Rambler ID"
))
,_('DL'
,_('DT'
,_('A',{href:"https://id.rambler.ru/script/settings.cgi?mode=settings",title:"\u0412\u0430\u0448 \u0434\u043E\u0441\u0442\u0443\u043F \u043A\u043E \u0432\u0441\u0435\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C \u0420\u0430\u043C\u0431\u043B\u0435\u0440\u0430"}
,"\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"
)
,_('A.help',{href:"http://help.rambler.ru/article.html?s=137&id=63",title:"\u0421\u043F\u0440\u0430\u0432\u043A\u0430 (\u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0432 \u043D\u043E\u0432\u043E\u043C \u043E\u043A\u043D\u0435)"}
,_('SPAN.icon')))
,_('DT'
,_('A',{href:"https://id.rambler.ru/script/chpass.cgi",title:"\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u0439\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0432\u0430\u0448\u0435\u0439 \u043F\u043E\u0447\u0442\u0435"}
,"\u0421\u043C\u0435\u043D\u0430 \u043F\u0430\u0440\u043E\u043B\u044F"
)
,_('A.help',{href:"http://help.rambler.ru/article.html?s=25678&id=29696",title:"\u0421\u043F\u0440\u0430\u0432\u043A\u0430 (\u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0432 \u043D\u043E\u0432\u043E\u043C \u043E\u043A\u043D\u0435)"}
,_('SPAN.icon')))
,_('DT'
,_('A',{href:"http://id-planet.rambler.ru/common/avatars.html",title:"\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0441\u0432\u043E\u0439 \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0431\u0440\u0430\u0437"}
,"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0430\u0432\u0430\u0442\u0430\u0440\u0430"
)
,_('A.help',{href:"http://help.rambler.ru/article.html?s=917&id=919",title:"\u0421\u043F\u0440\u0430\u0432\u043A\u0430 (\u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0432 \u043D\u043E\u0432\u043E\u043C \u043E\u043A\u043D\u0435)"}
,_('SPAN.icon')))))))
,_('TD',{width:"50%"}
,_('FIELDSET#write-settings'
,_('FIELDSET'
,_('H2.title'
,"\u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0438\u0441\u0435\u043C"
)
,_('P'
,_('LABEL.label',{title:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u0438\u0437 US-ASCII, \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0439 \u043A\u043E\u0434\u0438\u0440\u043E\u0432\u043A\u0438 \u0438 UTF-8."}
,"\u041A\u043E\u0434\u0438\u0440\u043E\u0432\u043A\u0430 \u0438\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u043F\u0438\u0441\u0435\u043C:"
)
,_('SELECT#set-out_charset',{name:"var:out_charset",value:"windows-1251"}
,_('OPTION',{value:"windows-1251"}
,"Windows-1251"
)
,_('OPTION',{value:"utf-8"}
,"UTF-8"
)
,_('OPTION',{value:"koi8-r"}
,"koi8-r"
)))
,_('BR')
,_('P'
,_('LABEL.label'
,"\u0412\u0430\u0448\u0435 \u0438\u043C\u044F \u0434\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0432 \u0438\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u043F\u0438\u0441\u044C\u043C\u0430\u0445:"
)
,_('INPUT.text full#set-real_name',{type:"text",name:"var:real_name",value:"\u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D"}))
,_('BR')
,_('P'
,_('LABEL.label'
,"\u0410\u0434\u0440\u0435\u0441 \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u043E\u0432 (\u043F\u043E\u043B\u0435 Reply-To):"
)
,_('INPUT.text full#set-reply_to',{type:"text",name:"var:reply_to"}))
,_('P'
,_('LABEL.label'
,"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043E\u0442\u0432\u0435\u0442\u0430 (%F \u2014 \u043A\u043E\u0440\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0442, %D \u2014 \u0434\u0430\u0442\u0430):"
)
,_('TEXTAREA.text full#set-attributions',{name:"var:attribution",value:"* %F [%D]:"}
,"* %F [%D]:"
))
,_('P'
,_('LABEL.label'
,"\u041F\u043E\u0434\u043F\u0438\u0441\u044C (%R \u2014 \u0412\u0430\u0448\u0435 \u0438\u043C\u044F, %E \u2014 \u0412\u0430\u0448 email):"
)
,_('TEXTAREA.text full#set-signature',{name:"var:signature",value:"%R %-) %E"}
,"%R %-) %E"
))
,_('BR')
,_('P'
,_('LABEL.for-checkbox'
,_('INPUT.checkbox#set-ramac_disabled',{type:"checkbox",name:"var:ramac_disabled",value:"1"})
,_('SPAN'
,"\u041D\u0435 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0430\u0434\u0440\u0435\u0441\u0430 \u0438\u0437 \u0430\u0434\u0440\u0435\u0441\u043D\u043E\u0439 \u043A\u043D\u0438\u0433\u0438"
)))
,_('P'
,_('LABEL.for-checkbox'
,_('INPUT.checkbox#set-forward_attach',{type:"checkbox",name:"var:forward_attach",value:"1"})
,_('SPAN.test'
,"\u041F\u0435\u0440\u0435\u0441\u044B\u043B\u043A\u0430 \u0447\u0443\u0436\u0438\u0445 \u043F\u0438\u0441\u0435\u043C \u043A\u0430\u043A \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u0439"
)))
,_('P'
,_('LABEL.for-checkbox'
,_('INPUT.checkbox#set-save_sent',{type:"checkbox",name:"var:save_sent",value:"1"})
,_('SPAN'
,"\u0421\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u0438\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u0432 \u043F\u0430\u043F\u043A\u0435 \xAB\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435\xBB"
)))
,_('P'
,_('LABEL.for-checkbox'
,_('SPAN'
,"\u0426\u0438\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442"
))
,_('SELECT#set-start_reply_at',{name:"var:start_reply_at",value:"after_quote"}
,_('OPTION',{value:"before_quote"}
,"\u0434\u043E \u043E\u0442\u0432\u0435\u0442\u0430"
)
,_('OPTION',{value:"after_quote"}
,"\u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u0432\u0435\u0442\u0430"
)))))
,_('FIELDSET#im-settings'
,_('FIELDSET'
,_('H2.title'
,"\u0427\u0430\u0442"
)
,_('P'
,_('LABEL'
,_('INPUT.checkbox#enable-chat',{type:"checkbox",name:"var:enable_chat",value:"1"})
,"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0447\u0430\u0442"
))))))
,_('TR'
,_('TD',{colSpan:2}
,_('P.button'
,_('ui:uButton',{text:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"}))))))))
,_('FORM#revert-form',{name:"reset_settings",method:"post",action:"/mail/settings.cgi"}
,_('H2.title'
,_('A',{href:"#revert"}
,"\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
))
,_('FIELDSET.for-settings hide#revert'
,_('P'
,"\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u0441\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043A\u043E\u0433\u0434\u0430-\u043B\u0438\u0431\u043E \u0431\u044B\u043B\u0438 \u0432\u043D\u0435\u0441\u0435\u043D\u044B \u0432 \u0432\u0430\u0448\u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0438 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F, \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u044B\u0435 \u0420\u0430\u043C\u0431\u043B\u0435\u0440\u043E\u043C \u0434\u043B\u044F \u043D\u043E\u0432\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439."
)
,_('P'
,_('STRONG'
,"\u0411\u0443\u0434\u044C\u0442\u0435 \u043E\u0441\u0442\u043E\u0440\u043E\u0436\u043D\u044B \u2014 \u043E\u0442\u043C\u0435\u043D\u0430 \u044D\u0442\u043E\u0439 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u0430!"
))
,_('P.button'
,_('INPUT',{type:"hidden",name:"mode",value:"settings"})
,_('INPUT',{type:"hidden",name:"request_key",value:"a673ffb7588e92cbe11b62d9c3496474"})
,_('LABEL.button'
,_('INPUT.submit',{type:"submit",name:"hard_reset",value:"\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E"}))))))};
tmpl.settings_scheme=function(pr,_){
var ns=this;
ns.sidebar='settings';
ns.text_title="\u0422\u0435\u043C\u044B";
ns.scheme_list=[
{id:'cars',text:"\u0410\u0432\u0442\u043E"},
{id:'anonymous',text:"\u0410\u043D\u043E\u043D\u0438\u043C\u0443\u0441"},
{id:'seasons',text:"\u0412\u0440\u0435\u043C\u0435\u043D\u0430 \u0433\u043E\u0434\u0430",css:'seasons_autumn'},
{id:'women',text:"\u0414\u0430\u043C\u0441\u043A\u0438\u0439"},
{id:'business',text:"\u0414\u0435\u043B\u043E\u0432\u043E\u0439"},
{id:'sticky_fingers',text:"\u0414\u0436\u0438\u043D\u0441\u044B"},
{id:'beasts',text:"\u0417\u0432\u0435\u0440\u0438"},
{id:'sweater',text:"\u0417\u0438\u043C\u043D\u0435\u0435 \u0441\u0443\u043C\u0430\u0441\u0448\u0435\u0441\u0442\u0432\u0438\u0435"},
{id:'macos',text:"Mac OS"},
{id:'matrix',text:["\u041C\u0430\u0442\u0440\u0438\u0446\u0430",_('br'),"(\u0441\u0432\u0435\u0442\u043B\u044B\u0439 \u0444\u043E\u043D)"]},
{id:'matrix_black',text:["\u041C\u0430\u0442\u0440\u0438\u0446\u0430",_('br'),"(\u0442\u0435\u043C\u043D\u044B\u0439 \u0444\u043E\u043D)"]},
{id:'flight',text:"\u041F\u043E\u043B\u0435\u0442"},
{id:'rambler',text:"\u0420\u0430\u043C\u0431\u043B\u0435\u0440"},
{id:'freedom',text:"\u0421\u0432\u043E\u0431\u043E\u0434\u0430"},
{id:'moonsun',text:"\u0421\u043E\u043B\u043D\u0446\u0435 \u0438 \u041B\u0443\u043D\u0430"},
{id:'sport',text:"\u0421\u043F\u043E\u0440\u0442"},
{id:'stylish',text:"\u0421\u0442\u0438\u043B\u044F\u0433\u0430"},
{id:'fantasy',text:"\u0424\u0430\u043D\u0442\u0430\u0437\u0438\u044F"},
{id:'football',text:"\u0424\u0443\u0442\u0431\u043E\u043B"}
];
ns.wrapper_page=_('tmpl:wrapper_page'
,{extend:this,name:'settings_view',title:_.text("\u0422\u0435\u043C\u044B")}
,_('DIV.content-holder#settings'
,ns.form=_('FORM',{name:"settings",method:"post",action:"/mail/settings.cgi"}
,_('INPUT',{type:"hidden",name:"mode",value:"scheme"})
,_('INPUT',{type:"hidden",name:"request_key",value:"a673ffb7588e92cbe11b62d9c3496474"})
,_('INPUT',{type:"hidden",name:"enc",value:"utf-8"})
,_('DIV.settings-item styles-list'
,_.forEach(ns.scheme_list,function(v){
if(!v)return false;
return _('FIELDSET.color-scheme#style-'+(v.css||v.id)+'-preview',{__cmd_:'select',__value_:v.id}
,_('LABEL',{title:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u044D\u0442\u0443 \u0442\u0435\u043C\u0443"}
,_('A',{id:v.id},v.text)))})))))};
tmpl.settings_enlarge=function(pr,_){
var ns=this;
ns.text_title="\u0420\u0430\u0437\u043C\u0435\u0440 \u043F\u043E\u0447\u0442\u043E\u0432\u043E\u0433\u043E \u044F\u0449\u0438\u043A\u0430";
ns.sidebar='settings';
ns.wrapper_page=_('tmpl:wrapper_page'
,{title:_.text("\u0420\u0430\u0437\u043C\u0435\u0440 \u043F\u043E\u0447\u0442\u043E\u0432\u043E\u0433\u043E \u044F\u0449\u0438\u043A\u0430"),css:'settings',name:'settings_view',extend:this}
,_('DIV.content-holder#settings'
,(!pr.size_max_reached?
_('FORM',{name:"settings",method:"post",action:"/mail/settings.cgi?mode=enlarge"}
,_('INPUT',{type:"hidden",name:"mode",value:"settings"})
,_('INPUT',{type:"hidden",name:"request_key",value:"b9632657e7f746a457bea49622d3128b"})
,_('INPUT',{type:"hidden",name:"enc",value:"utf-8"})
,_('H2.notice'
,"\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u043F\u043E\u0447\u0442\u043E\u0432\u043E\u0433\u043E \u044F\u0449\u0438\u043A\u0430 \u2014 ",_('STRONG',pr.has_size||0)," \u043C\u0435\u0433\u0430\u0431\u0430\u0439\u0442."
)
,_('DIV.settings-item'
,_('P'
,_.html("\u0420\u0430\u0437\u043C\u0435\u0440 \u044F\u0449\u0438\u043A\u0430 \u043C\u043E\u0436\u043D\u043E \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043E\u0434\u0438\u043D \u0440\u0430\u0437 \u0432 \u0441\u0443\u0442\u043A\u0438 \u043D\u0430 <STRONG>50 \u043C\u0435\u0433\u0430\u0431\u0430\u0439\u0442</STRONG>. \u0418 \u0442\u0430\u043A \u2014 \u0434\u043E <STRONG>1000</STRONG> \u043C\u0435\u0433\u0430\u0431\u0430\u0439\u0442"))
,(pr.can_enlarge?
_('P.button'
,ns.bn_save=_('ui:uButton',{text:rr.printx("\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0434\u043E %s \u043C\u0435\u0433\u0430\u0431\u0430\u0439\u0442",pr.next_size),name:'b:save'}))
:_('P.button notice'
,_.html(
rr.printx("\u0427\u0435\u0440\u0435\u0437 <STRONG>%s</STRONG> %s \u044F\u0449\u0438\u043A \u043C\u043E\u0436\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0434\u043E <STRONG>%s</STRONG> \u043C\u0435\u0433\u0430\u0431\u0430\u0439\u0442."
,pr.remain_hours||0
,["\u0447\u0430\u0441","\u0447\u0430\u0441\u0430","\u0447\u0430\u0441\u043E\u0432"][rv.number(pr.remain_hours)]
,pr.next_size||0
))))))
:_('h2.notice enlarge-notice'
,"\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u0435\u043C, \u0432\u0430\u0448 \u043F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u044F\u0449\u0438\u043A \u2014 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0430, ",_('STRONG',pr.full_size)," \u043C\u0435\u0433\u0430\u0431\u0430\u0439\u0442"
))))};
tmpl.settings_timezone=function(pr,_){
var ns=this;
ns.text_title="\u0427\u0430\u0441\u043E\u0432\u043E\u0439 \u043F\u043E\u044F\u0441";
ns.sidebar='settings';
ns.wrapper_page=_('tmpl:wrapper_page'
,{extend:this,name:'settings_view'
,title:_.text("\u0427\u0430\u0441\u043E\u0432\u043E\u0439 \u043F\u043E\u044F\u0441")}
,_('DIV.content-holder#settings'
,ns.form=_('FORM#timezone-form',{name:"timezone_settings",method:"post",action:"/mail/settings.cgi?mode=timezone"}
,_('DIV.settings-item'
,_('FIELDSET'
,_('INPUT',{type:"hidden",name:"mode",value:"timezone"})
,_('INPUT',{type:"hidden",name:"request_key",value:"a673ffb7588e92cbe11b62d9c3496474"})
,_('SELECT',{name:"var:timezone_offset",value:pr.timezone||''}
,_.forEach(rv.zones,function(x){
return _('OPTION',{value:x.v,text:x.text,selected:pr.timezone==x.v})})))
,_('P.button'
,ns.bn_save=_('ui:uButton',{text:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F",name:'b:save'}))))))};


/* url: /js/m2/settings.src.js */

ramail.addEvent('open_page',function(e){
if(e.returnValue==false)return;
var hs=e.hash,x=(hs.match(/^\/([^\/]+)/)||[])[1],mbox,what,page,filter;
if(!x||!(x=='settings'||x.toLocaleLowerCase()=='settings'))return;
switch((hs.match(/^\/settings\/([\w]+)/)||[])[1]){
case'scheme':
e.hash='/settings/scheme';
e.handler='open_settings_scheme';
break;
case'timezone':
e.hash='/settings/timezone';
e.handler='open_settings_timezone';
break;
case'enlarge':
e.hash='/settings/enlarge';
e.handler='open_settings_enlarge';
break;
case'view':
default:
e.hash='/settings/view';
e.handler='open_settings_view';
};
return false;
});
ramail.open_settings_view=function(e){
var page=masterElement('tmpl:settings_view');
page.pg_name='settings';
ramail.page_connect(page,e)};
ramail.open_settings_scheme=function(e){
var page=masterElement('tmpl:settings_scheme');
page.pg_name='settings';
ramail.page_connect(page,e)};
ramail.open_settings_timezone=function(e){
var page=masterElement('tmpl:settings_timezone',{
timezone:'Europe/Moscow'
});
page.pg_name='settings';
ramail.page_connect(page,e)};
ramail.open_settings_enlarge=function(e){
var sz=50;
var page=masterElement('tmpl:settings_enlarge',{
size_max_reached:false,
has_size:50,
next_size:100,
full_size:1000,
remain_hours:14,
can_enlarge:true
});
page.pg_name='settings';
ramail.page_connect(page,e)};


/* url: /js/m2/tmpl/tmpl_page_feeds.src.js */

rr.styles('tmpl:page_feeds'
,'.b-block_feeds {padding:15px;}'
,'.b-block_feeds-abook {margin-top:10px;}'
,'.b-block_feeds-add {margin-right:1ex;}'
,'.b-block_feeds-selected_x {vertical-align:middle;cursor:pointer;background-color:#FFE3E3;color:#F05925;font-size:0.85em;font-weight:bold;line-height:28px;margin-right:15px;padding:0 1ex;}'
,'.b-block_feeds-selected_x .x {font-weight:bold;margin-left:1ex;}'
,'.b-block_feeds-new_contact {display:none;margin:1em 0;}'
,'.b-block_feeds-new_contact--show {display:block;}'
,'.b-block_feeds-new_contact_head {font-weight:bold;margin:0 0 1ex;}'
,'.b-block_feeds-new_contact_box {border:2px solid #BBBBBB;padding:2px;}'
,''
,''
)
tmpl.pg_feeds=function(pr,_){
var ns=this;
ns.text_title="\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0438";
_('tmpl:wrapper_page'
,{
extend:ns
,css:'b-rm_feeds'
,name:'feeds'
,title:_('span',_.text("\u0412\u0441\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438"))
,top:[
_('tmpl:rm_nToolbar'
,{
css:'b-block_feeds-controls',
right:[
,ns.bt_remove=_('ui:uButton',{
css_ico:'b-icons b-icons--remove',
icon:true,
title:"\u041E\u0442\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u044D\u0442\u043E\u0439 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438",
text:"\u041E\u0442\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"
})
,_('ui:rm_menu'
,{
css_open:'r-topline_link--open',
position:'bottom left',
open:'click',
node:ns.bt_rm_other=_('ui:uButton',{
css_ico:'b-icons b-icons--other',
icon:'right',
first:true,
text:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430"
})}
,_('tmpl:rm_mailbox_menu'))
]
}
,ns.inp_search=_('ui:uInput',{
css:'',
group:"left",
text:"\u041F\u043E\u0438\u0441\u043A \u0432 \u043F\u0430\u043F\u043A\u0435",
help:"\u041F\u043E\u0438\u0441\u043A \u0432 \u043F\u0430\u043F\u043A\u0435"
})
,ns.btn_search=_('ui:uButton',{
css_ico:'b-icons b-icons--search',
icon:true,
group:'right',
title:"\u041F\u043E\u0438\u0441\u043A \u0432 \u043F\u0430\u043F\u043A\u0435",
text:"\u041F\u043E\u0438\u0441\u043A"
}))
]
}
,_('div.b-rm_feeds-list'
,_.forEach((function(a){a=[];a.length=50;return a})(),function(){
return _('tmpl:rm_feeds_item',{
})})))};
rr.styles('tmpl:rm_feeds'
,'.b-rm_feeds-item {border-width:1px;margin:0; padding:0 0 15px 30px; border-style:dashed none none;}'
,'.b-rm_feeds-item_flag {display:inline-block;background-repeat:no-repeat;cursor:pointer;height:18px;width:18px;position:absolute;margin:17px 0 0 -30px;}'
,'.b-rm_feeds-item_flag {background-position:50% -1415px;}'
,'.b-rm_feeds-item_flag:hover {background-position:50% -1355px;}'
,'.b-rm_feeds-item--favorite .b-rm_feeds-item_flag {background-position:50% -935px;}'
,'.b-rm_feeds-item--favorite .b-rm_feeds-item_flag:hover {background-position:50% -875px;}'
,'.b-rm_feeds-item {}'
,''
,''
,''
)
tmpl.rm_feeds_item=function(pr,_){
var ns=this;
ns.text_title_a="\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435";
ns.text_title_b="\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E";
ns.node=_('DIV.b-rm_feeds-item entry-container'
,_('A.b-rm_feeds-item_flag i-icons')
,_('DIV.entry-compact'
,_('SPAN.entry-column entry-timestamp'
,"17:20"
)
,_('SPAN.mtbox-grd')
,_('DIV.entry-compact-row'
,_('A.entry-column entry-compact-source',{href:'http://news.rambler.ru/',title:"\u0420\u0430\u043C\u0431\u043B\u0435\u0440-\u041D\u043E\u0432\u043E\u0441\u0442\u0438: \u0413\u043B\u0430\u0432\u043D\u043E\u0435 (\u0432 \u043D\u043E\u0432\u043E\u043C \u043E\u043A\u043D\u0435)",style:'background-image: url(\"/i/favicons/rambler.ru.png\");'}
,_('SPAN'
,"\u0420\u0430\u043C\u0431\u043B\u0435\u0440-\u041D\u043E\u0432\u043E\u0441\u0442\u0438: \u0413\u043B\u0430\u0432\u043D\u043E\u0435"
))
,_('A.entry-column entry-compact-title',{href:'http://news.rambler.ru/6905500/',title:"\u0420\u0430\u043C\u0431\u043B\u0435\u0440-\u041D\u043E\u0432\u043E\u0441\u0442\u0438: \u0413\u043B\u0430\u0432\u043D\u043E\u0435 (\u0432 \u043D\u043E\u0432\u043E\u043C \u043E\u043A\u043D\u0435)"}
,_('SPAN.title'
,"\u0413\u043B\u0430\u0432\u0430 \u0421\u0440\u0435\u0434\u043D\u0435\u0440\u0443\u0441\u0441\u043A\u043E\u0433\u043E \u0431\u0430\u043D\u043A\u0430 \u0421\u0431\u0435\u0440\u0431\u0430\u043D\u043A\u0430 \u043F\u043E\u0433\u0438\u0431 \u0432 \u0414\u0422\u041F"
)
,_('SPAN.entry-column entry-compact-body'
,"\u041F\u0440\u0435\u0434\u0441\u0435\u0434\u0430\u0442\u0435\u043B\u044C \u0421\u0440\u0435\u0434\u043D\u0435\u0440\u0443\u0441\u0441\u043A\u043E\u0433\u043E \u0431\u0430\u043D\u043A\u0430 \u0421\u0431\u0435\u0440\u0431\u0430\u043D\u043A\u0430 \u0420\u043E\u0441\u0441\u0438\u0438 \u0410\u043D\u0434\u0440\u0435\u0439 \u0423\u0441\u043F\u0435\u043D\u0441\u043A\u0438\u0439 \u043F\u043E\u0433\u0438\u0431 \u0432 \u0414\u0422\u041F. \u042D\u0442\u043E \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u043E \u0432 \u0441\u0440\u0435\u0434\u0443, \u0441\u043E\u043E\u0431\u0449\u0438\u043B \u0420\u0418\u0410 \"\u041D\u043E\u0432\u043E\u0441\u0442\u0438\" \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0432 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0445 \u043A\u0440\u0443\u0433\u0430\u0445. \u0421\u0431\u0435\u0440\u0431\u0430\u043D\u043A \u043E\u0431\u0435\u0449\u0430\u0435\u0442 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u0438\u043D..."
))))
,_('DIV.entry-full'
,_('DIV.entry-header'
,_('H3.entry-title'
,_('SPAN.entry-timestamp'
,"17:20"
)
,_('A.entry-link',{href:'http://news.rambler.ru/6905500/',title:"\u0420\u0430\u043C\u0431\u043B\u0435\u0440-\u041D\u043E\u0432\u043E\u0441\u0442\u0438: \u0413\u043B\u0430\u0432\u043D\u043E\u0435 (\u0432 \u043D\u043E\u0432\u043E\u043C \u043E\u043A\u043D\u0435)",style:'background-image: url(\"/i/favicons/rambler.ru.png\");'}
,_('SPAN'
,"\u0413\u043B\u0430\u0432\u0430 \u0421\u0440\u0435\u0434\u043D\u0435\u0440\u0443\u0441\u0441\u043A\u043E\u0433\u043E \u0431\u0430\u043D\u043A\u0430 \u0421\u0431\u0435\u0440\u0431\u0430\u043D\u043A\u0430 \u043F\u043E\u0433\u0438\u0431 \u0432 \u0414\u0422\u041F"
)))
,_('H4.entry-source'
,"\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A:"
,_('A.feed-link',{href:'http://news.rambler.ru/',title:"\u0420\u0430\u043C\u0431\u043B\u0435\u0440-\u041D\u043E\u0432\u043E\u0441\u0442\u0438: \u0413\u043B\u0430\u0432\u043D\u043E\u0435 (\u0432 \u043D\u043E\u0432\u043E\u043C \u043E\u043A\u043D\u0435)"}
,"\u0420\u0430\u043C\u0431\u043B\u0435\u0440-\u041D\u043E\u0432\u043E\u0441\u0442\u0438: \u0413\u043B\u0430\u0432\u043D\u043E\u0435"
)))
,_('DIV.entry-body'
,_('P'
,"\u041F\u0440\u0435\u0434\u0441\u0435\u0434\u0430\u0442\u0435\u043B\u044C \u0421\u0440\u0435\u0434\u043D\u0435\u0440\u0443\u0441\u0441\u043A\u043E\u0433\u043E \u0431\u0430\u043D\u043A\u0430 \u0421\u0431\u0435\u0440\u0431\u0430\u043D\u043A\u0430 \u0420\u043E\u0441\u0441\u0438\u0438 \u0410\u043D\u0434\u0440\u0435\u0439 \u0423\u0441\u043F\u0435\u043D\u0441\u043A\u0438\u0439 \u043F\u043E\u0433\u0438\u0431 \u0432 \u0414\u0422\u041F. \u042D\u0442\u043E \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u043E \u0432 \u0441\u0440\u0435\u0434\u0443, \u0441\u043E\u043E\u0431\u0449\u0438\u043B \u0420\u0418\u0410 \"\u041D\u043E\u0432\u043E\u0441\u0442\u0438\" \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0432 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0445 \u043A\u0440\u0443\u0433\u0430\u0445. \u0421\u0431\u0435\u0440\u0431\u0430\u043D\u043A \u043E\u0431\u0435\u0449\u0430\u0435\u0442 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0434\u043E \u043A\u043E\u043D\u0446\u0430 \u0434\u043D\u044F."
))
,_('DIV.entry-footer'
,_('DL.entry-tools'
,_('DT.entry-favorite'
,_('A.entry-icon f1',{title:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"}
,_('SPAN'
,"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"
))
,_('A.entry-icon f2',{title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E"}
,_('SPAN'
,"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E"
)))
,_('DT.entry-tools-unseen'
,_('LABEL.entry-mark'
,_('INPUT',{type:'checkbox',value:"on"})
,_('SPAN'
,"\u041F\u043E\u043C\u0435\u0442\u0438\u0442\u044C \u043D\u0435\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u043C"
)))
,_('DT.entry-tools-share'
,_('A.entry-icon entry-share'
,_('SPAN'
,"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u043E \u043F\u043E\u0447\u0442\u0435"
)))
,_('DT.compact-this'
,_('A',{href:'javascript://compact-this'}
,_('SPAN'
,"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"
))))
,_('A',{href:'javascript://compact-this'}))
,_('A',{href:'javascript://compact-this'}))
,_('A',{href:'javascript://compact-this'}))};


/* url: /js/m2/ui/ui_page_feeds.src.js */

elems.pg_feeds=rr.new_class({
interface:true,
constructor:function(pr,_,cfg){
this.nodes=_.tmpl(tmpl.pg_feeds,pr);
this.node=this.nodes.node;
this.text_title=this.nodes.text_title;
this.master=_.clone();
this.interface.init_event(this)},
init_event:function(ui){
},
});


/* url: /js/m2/feeds.src.js */

ramail.addEvent('open_page',function(e){
if(e.returnValue==false)return;
var hs=e.hash,x=(hs.match(/^\/([^\/]+)/)||[])[1],mbox,what,page,filter;
if(!x||!(x=='feeds'||x.toLocaleLowerCase()=='feeds'))return;
e.hash='/feeds';
e.handler='open_feeds';
return false;
});
ramail.open_feeds=function(e){
e.hash='/feeds';
var page=this.pg_feeds||(this.pg_feeds=masterElement('ui:pg_feeds'));
page.pg_name='feeds';
if(false){
};
ramail.page_connect(page,e)};
ramail.get_feeds=function(p){
var page=this.pg_feeds||(this.pg_feeds=masterElement('ui:pg_feeds'));
if(p.load)p.load.call(page);
ramail.page_connect(page,e);
return page;
};


/* url: /js/tiny_mce/tiny_mce_src.js */

(function(win){
var whiteSpaceRe=/^\s*|\s*$/g,
undefined,isRegExpBroken='B'.replace(/A(.)|B/,'$1')==='$1';
var tinymce={
majorVersion:'3',
minorVersion:'3.9.2',
releaseDate:'2010-09-29',
_init:function(){
var t=this,d=document,na=navigator,ua=na.userAgent,i,nl,n,base,p,v;
t.isOpera=win.opera&&opera.buildNumber;
t.isWebKit=/WebKit/.test(ua);
t.isIE=!t.isWebKit&&!t.isOpera&&(/MSIE/gi).test(ua)&&(/Explorer/gi).test(na.appName);
t.isIE6=t.isIE&&/MSIE [56]/.test(ua);
t.isGecko=!t.isWebKit&&/Gecko/.test(ua);
t.isMac=ua.indexOf('Mac')!=-1;
t.isAir=/adobeair/i.test(ua);
t.isIDevice=/(iPad|iPhone)/.test(ua);
if(win.tinyMCEPreInit){
t.suffix=tinyMCEPreInit.suffix;
t.baseURL=tinyMCEPreInit.base;
t.query=tinyMCEPreInit.query;
return;
}
t.suffix='';
nl=d.getElementsByTagName('base');
for(i=0;i<nl.length;i++){
if(v=nl[i].href){
if(/^https?:\/\/[^\/]+$/.test(v))
v+='/';
base=v?v.match(/.*\//)[0]:'';
}}
function getBase(n){
if(n.src&&/tiny_mce(|_gzip|_jquery|_prototype|_full)(_dev|_src)?.js/.test(n.src)){
if(/_(src|dev)\.js/g.test(n.src))
t.suffix='_src';
if((p=n.src.indexOf('?'))!=-1)
t.query=n.src.substring(p+1);
t.baseURL=n.src.substring(0,n.src.lastIndexOf('/'));
if(base&&t.baseURL.indexOf('://')==-1&&t.baseURL.indexOf('/')!==0)
t.baseURL=base+t.baseURL;
return t.baseURL;
}
return null;
};
nl=d.getElementsByTagName('script');
for(i=0;i<nl.length;i++){
if(getBase(nl[i]))
return;
}
n=d.getElementsByTagName('head')[0];
if(n){
nl=n.getElementsByTagName('script');
for(i=0;i<nl.length;i++){
if(getBase(nl[i]))
return;
}}
return;
},
is:function(o,t){
if(!t)
return o!==undefined;
if(t=='array'&&(o.hasOwnProperty&&o instanceof Array))
return true;
return typeof(o)==t;
},
each:function(o,cb,s){
var n,l;
if(!o)
return 0;
s=s||o;
if(o.length!==undefined){
for(n=0,l=o.length;n<l;n++){
if(cb.call(s,o[n],n,o)===false)
return 0;
}}else{
for(n in o){
if(o.hasOwnProperty(n)){
if(cb.call(s,o[n],n,o)===false)
return 0;
}}}
return 1;
},
map:function(a,f){
var o=[];
tinymce.each(a,function(v){
o.push(f(v))});
return o;
},
grep:function(a,f){
var o=[];
tinymce.each(a,function(v){
if(!f||f(v))
o.push(v)});
return o;
},
inArray:function(a,v){
var i,l;
if(a){
for(i=0,l=a.length;i<l;i++){
if(a[i]===v)
return i;
}}
return-1;
},
extend:function(o,e){
var i,l,a=arguments;
for(i=1,l=a.length;i<l;i++){
e=a[i];
tinymce.each(e,function(v,n){
if(v!==undefined)
o[n]=v;
})}
return o;
},
trim:function(s){
return(s?''+s:'').replace(whiteSpaceRe,'')},
create:function(s,p){
var t=this,sp,ns,cn,scn,c,de=0;
s=/^((static) )?([\w.]+)(:([\w.]+))?/.exec(s);
cn=s[3].match(/(^|\.)(\w+)$/i)[2];
ns=t.createNS(s[3].replace(/\.\w+$/,''));
if(ns[cn])
return;
if(s[2]=='static'){
ns[cn]=p;
if(this.onCreate)
this.onCreate(s[2],s[3],ns[cn]);
return;
}
if(!p[cn]){
p[cn]=function(){};
de=1;
}
ns[cn]=p[cn];
t.extend(ns[cn].prototype,p);
if(s[5]){
sp=t.resolve(s[5]).prototype;
scn=s[5].match(/\.(\w+)$/i)[1];
c=ns[cn];
if(de){
ns[cn]=function(){
return sp[scn].apply(this,arguments)}}else{
ns[cn]=function(){
this.parent=sp[scn];
return c.apply(this,arguments)}}
ns[cn].prototype[cn]=ns[cn];
t.each(sp,function(f,n){
ns[cn].prototype[n]=sp[n];
});
t.each(p,function(f,n){
if(sp[n]){
ns[cn].prototype[n]=function(){
this.parent=sp[n];
return f.apply(this,arguments)}}else{
if(n!=cn)
ns[cn].prototype[n]=f;
}})}
t.each(p['static'],function(f,n){
ns[cn][n]=f;
});
if(this.onCreate)
this.onCreate(s[2],s[3],ns[cn].prototype)},
walk:function(o,f,n,s){
s=s||this;
if(o){
if(n)
o=o[n];
tinymce.each(o,function(o,i){
if(f.call(s,o,i,n)===false)
return false;
tinymce.walk(o,f,n,s)})}},
createNS:function(n,o){
var i,v;
o=o||win;
n=n.split('.');
for(i=0;i<n.length;i++){
v=n[i];
if(!o[v])
o[v]={};
o=o[v];
}
return o;
},
resolve:function(n,o){
var i,l;
o=o||win;
n=n.split('.');
for(i=0,l=n.length;i<l;i++){
o=o[n[i]];
if(!o)
break;
}
return o;
},
addUnload:function(f,s){
var t=this;
f={func:f,scope:s||this};
if(!t.unloads){
function unload(){
var li=t.unloads,o,n;
if(li){
for(n in li){
o=li[n];
if(o&&o.func)
o.func.call(o.scope,1)}
if(win.detachEvent){
win.detachEvent('onbeforeunload',fakeUnload);
win.detachEvent('onunload',unload)}else if(win.removeEventListener)
win.removeEventListener('unload',unload,false);
t.unloads=o=li=w=unload=0;
if(win.CollectGarbage)
CollectGarbage()}};
function fakeUnload(){
var d=document;
if(d.readyState=='interactive'){
function stop(){
d.detachEvent('onstop',stop);
if(unload)
unload();
d=0;
};
if(d)
d.attachEvent('onstop',stop);
win.setTimeout(function(){
if(d)
d.detachEvent('onstop',stop)},0)}};
if(win.attachEvent){
win.attachEvent('onunload',unload);
win.attachEvent('onbeforeunload',fakeUnload)}else if(win.addEventListener)
win.addEventListener('unload',unload,false);
t.unloads=[f];
}else
t.unloads.push(f);
return f;
},
removeUnload:function(f){
var u=this.unloads,r=null;
tinymce.each(u,function(o,i){
if(o&&o.func==f){
u.splice(i,1);
r=f;
return false;
}});
return r;
},
explode:function(s,d){
return s?tinymce.map(s.split(d||','),tinymce.trim):s;
},
_addVer:function(u){
var v;
if(!this.query)
return u;
v=(u.indexOf('?')==-1?'?':'&')+this.query;
if(u.indexOf('#')==-1)
return u+v;
return u.replace('#',v+'#')},
_replace:function(find,replace,str){
if(isRegExpBroken){
return str.replace(find,function(){
var val=replace,args=arguments,i;
for(i=0;i<args.length-2;i++){
if(args[i]===undefined){
val=val.replace(new RegExp('\\$'+i,'g'),'')}else{
val=val.replace(new RegExp('\\$'+i,'g'),args[i])}}
return val;
})}
return str.replace(find,replace)}};
tinymce._init();
win.tinymce=win.tinyMCE=tinymce;
})(window);
tinymce.create('tinymce.util.Dispatcher',{
scope:null,
listeners:null,
Dispatcher:function(s){
this.scope=s||this;
this.listeners=[];
},
add:function(cb,s){
this.listeners.push({cb:cb,scope:s||this.scope});
return cb;
},
addToTop:function(cb,s){
this.listeners.unshift({cb:cb,scope:s||this.scope});
return cb;
},
remove:function(cb){
var l=this.listeners,o=null;
tinymce.each(l,function(c,i){
if(cb==c.cb){
o=cb;
l.splice(i,1);
return false;
}});
return o;
},
dispatch:function(){
var s,a=arguments,i,li=this.listeners,c;
for(i=0;i<li.length;i++){
c=li[i];
s=c.cb.apply(c.scope,a);
if(s===false)
break;
}
return s;
}});
(function(){
var each=tinymce.each;
tinymce.create('tinymce.util.URI',{
URI:function(u,s){
var t=this,o,a,b;
u=tinymce.trim(u);
s=t.settings=s||{};
if(/^(mailto|tel|news|javascript|about|data):/i.test(u)||/^\s*#/.test(u)){
t.source=u;
return;
}
if(u.indexOf('/')===0&&u.indexOf('//')!==0)
u=(s.base_uri?s.base_uri.protocol||'http':'http')+'://mce_host'+u;
if(!/^\w*:?\/\//.test(u))
u=(s.base_uri.protocol||'http')+'://mce_host'+t.toAbsPath(s.base_uri.path,u);
u=u.replace(/@@/g,'(mce_at)');
u=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(u);
each(["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],function(v,i){
var s=u[i];
if(s)
s=s.replace(/\(mce_at\)/g,'@@');
t[v]=s;
});
if(b=s.base_uri){
if(!t.protocol)
t.protocol=b.protocol;
if(!t.userInfo)
t.userInfo=b.userInfo;
if(!t.port&&t.host=='mce_host')
t.port=b.port;
if(!t.host||t.host=='mce_host')
t.host=b.host;
t.source='';
}},
setPath:function(p){
var t=this;
p=/^(.*?)\/?(\w+)?$/.exec(p);
t.path=p[0];
t.directory=p[1];
t.file=p[2];
t.source='';
t.getURI()},
toRelative:function(u){
var t=this,o;
if(u==="./")
return u;
u=new tinymce.util.URI(u,{base_uri:t});
if((u.host!='mce_host'&&t.host!=u.host&&u.host)||t.port!=u.port||t.protocol!=u.protocol)
return u.getURI();
o=t.toRelPath(t.path,u.path);
if(u.query)
o+='?'+u.query;
if(u.anchor)
o+='#'+u.anchor;
return o;
},
toAbsolute:function(u,nh){
var u=new tinymce.util.URI(u,{base_uri:this});
return u.getURI(this.host==u.host&&this.protocol==u.protocol?nh:0)},
toRelPath:function(base,path){
var items,bp=0,out='',i,l;
base=base.substring(0,base.lastIndexOf('/'));
base=base.split('/');
items=path.split('/');
if(base.length>=items.length){
for(i=0,l=base.length;i<l;i++){
if(i>=items.length||base[i]!=items[i]){
bp=i+1;
break;
}}}
if(base.length<items.length){
for(i=0,l=items.length;i<l;i++){
if(i>=base.length||base[i]!=items[i]){
bp=i+1;
break;
}}}
if(bp==1)
return path;
for(i=0,l=base.length-(bp-1);i<l;i++)
out+="../";
for(i=bp-1,l=items.length;i<l;i++){
if(i!=bp-1)
out+="/"+items[i];
else
out+=items[i];
}
return out;
},
toAbsPath:function(base,path){
var i,nb=0,o=[],tr,outPath;
tr=/\/$/.test(path)?'/':'';
base=base.split('/');
path=path.split('/');
each(base,function(k){
if(k)
o.push(k)});
base=o;
for(i=path.length-1,o=[];i>=0;i--){
if(path[i].length==0||path[i]==".")
continue;
if(path[i]=='..'){
nb++;
continue;
}
if(nb>0){
nb--;
continue;
}
o.push(path[i])}
i=base.length-nb;
if(i<=0)
outPath=o.reverse().join('/');
else
outPath=base.slice(0,i).join('/')+'/'+o.reverse().join('/');
if(outPath.indexOf('/')!==0)
outPath='/'+outPath;
if(tr&&outPath.lastIndexOf('/')!==outPath.length-1)
outPath+=tr;
return outPath;
},
getURI:function(nh){
var s,t=this;
if(!t.source||nh){
s='';
if(!nh){
if(t.protocol)
s+=t.protocol+'://';
if(t.userInfo)
s+=t.userInfo+'@';
if(t.host)
s+=t.host;
if(t.port)
s+=':'+t.port;
}
if(t.path)
s+=t.path;
if(t.query)
s+='?'+t.query;
if(t.anchor)
s+='#'+t.anchor;
t.source=s;
}
return t.source;
}})})();
(function(){
var each=tinymce.each;
tinymce.create('static tinymce.util.Cookie',{
getHash:function(n){
var v=this.get(n),h;
if(v){
each(v.split('&'),function(v){
v=v.split('=');
h=h||{};
h[unescape(v[0])]=unescape(v[1])})}
return h;
},
setHash:function(n,v,e,p,d,s){
var o='';
each(v,function(v,k){
o+=(!o?'':'&')+escape(k)+'='+escape(v)});
this.set(n,o,e,p,d,s)},
get:function(n){
var c=document.cookie,e,p=n+"=",b;
if(!c)
return;
b=c.indexOf("; "+p);
if(b==-1){
b=c.indexOf(p);
if(b!=0)
return null;
}else
b+=2;
e=c.indexOf(";",b);
if(e==-1)
e=c.length;
return unescape(c.substring(b+p.length,e))},
set:function(n,v,e,p,d,s){
document.cookie=n+"="+escape(v)+
((e)?"; expires="+e.toGMTString():"")+
((p)?"; path="+escape(p):"")+
((d)?"; domain="+d:"")+
((s)?"; secure":"")},
remove:function(n,p){
var d=new Date();
d.setTime(d.getTime()-1000);
this.set(n,'',d,p,d)}})})();
tinymce.create('static tinymce.util.JSON',{
serialize:function(o){
var i,v,s=tinymce.util.JSON.serialize,t;
if(o==null)
return'null';
t=typeof o;
if(t=='string'){
v='\bb\tt\nn\ff\rr\""\'\'\\\\';
return'"'+o.replace(/([\u0080-\uFFFF\x00-\x1f\"])/g,function(a,b){
i=v.indexOf(b);
if(i+1)
return'\\'+v.charAt(i+1);
a=b.charCodeAt().toString(16);
return'\\u'+'0000'.substring(a.length)+a;
})+'"';
}
if(t=='object'){
if(o.hasOwnProperty&&o instanceof Array){
for(i=0,v='[';i<o.length;i++)
v+=(i>0?',':'')+s(o[i]);
return v+']';
}
v='{';
for(i in o)
v+=typeof o[i]!='function'?(v.length>1?',"':'"')+i+'":'+s(o[i]):'';
return v+'}';
}
return''+o;
},
parse:function(s){
try{
return eval('('+s+')')}catch(ex){
}}});
tinymce.create('static tinymce.util.XHR',{
send:function(o){
var x,t,w=window,c=0;
o.scope=o.scope||this;
o.success_scope=o.success_scope||o.scope;
o.error_scope=o.error_scope||o.scope;
o.async=o.async===false?false:true;
o.data=o.data||'';
function get(s){
x=0;
try{
x=new ActiveXObject(s)}catch(ex){
}
return x;
};
x=w.XMLHttpRequest?new XMLHttpRequest():get('Microsoft.XMLHTTP')||get('Msxml2.XMLHTTP');
if(x){
if(x.overrideMimeType)
x.overrideMimeType(o.content_type);
x.open(o.type||(o.data?'POST':'GET'),o.url,o.async);
if(o.content_type)
x.setRequestHeader('Content-Type',o.content_type);
x.setRequestHeader('X-Requested-With','XMLHttpRequest');
x.send(o.data);
function ready(){
if(!o.async||x.readyState==4||c++>10000){
if(o.success&&c<10000&&x.status==200)
o.success.call(o.success_scope,''+x.responseText,x,o);
else if(o.error)
o.error.call(o.error_scope,c>10000?'TIMED_OUT':'GENERAL',x,o);
x=null;
}else
w.setTimeout(ready,10)};
if(!o.async)
return ready();
t=w.setTimeout(ready,10)}}});
(function(){
var extend=tinymce.extend,JSON=tinymce.util.JSON,XHR=tinymce.util.XHR;
tinymce.create('tinymce.util.JSONRequest',{
JSONRequest:function(s){
this.settings=extend({
},s);
this.count=0;
},
send:function(o){
var ecb=o.error,scb=o.success;
o=extend(this.settings,o);
o.success=function(c,x){
c=JSON.parse(c);
if(typeof(c)=='undefined'){
c={
error:'JSON Parse error.'
}}
if(c.error)
ecb.call(o.error_scope||o.scope,c.error,x);
else
scb.call(o.success_scope||o.scope,c.result)};
o.error=function(ty,x){
ecb.call(o.error_scope||o.scope,ty,x)};
o.data=JSON.serialize({
id:o.id||'c'+(this.count++),
method:o.method,
params:o.params
});
o.content_type='application/json';
XHR.send(o)},
'static':{
sendRPC:function(o){
return new tinymce.util.JSONRequest().send(o)}}})}());
(function(tinymce){
var each=tinymce.each,
is=tinymce.is,
isWebKit=tinymce.isWebKit,
isIE=tinymce.isIE,
blockRe=/^(H[1-6R]|P|DIV|ADDRESS|PRE|FORM|T(ABLE|BODY|HEAD|FOOT|H|R|D)|LI|OL|UL|CAPTION|BLOCKQUOTE|CENTER|DL|DT|DD|DIR|FIELDSET|NOSCRIPT|MENU|ISINDEX|SAMP)$/,
boolAttrs=makeMap('checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected'),
mceAttribs=makeMap('src,href,style,coords,shape'),
encodedChars={'&':'&amp;','"':'&quot;','<':'&lt;','>':'&gt;'},
encodeCharsRe=/[<>&\"]/g,
simpleSelectorRe=/^([a-z0-9],?)+$/i,
tagRegExp=/<(\w+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)(\s*\/?)>/g,
attrRegExp=/(\w+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
function makeMap(str){
var map={},i;
str=str.split(',');
for(i=str.length;i>=0;i--)
map[str[i]]=1;
return map;
};
tinymce.create('tinymce.dom.DOMUtils',{
doc:null,
root:null,
files:null,
pixelStyles:/^(top|left|bottom|right|width|height|borderWidth)$/,
props:{
"for":"htmlFor",
"class":"className",
className:"className",
checked:"checked",
disabled:"disabled",
maxlength:"maxLength",
readonly:"readOnly",
selected:"selected",
value:"value",
id:"id",
name:"name",
type:"type"
},
DOMUtils:function(d,s){
var t=this,globalStyle;
t.doc=d;
t.win=window;
t.files={};
t.cssFlicker=false;
t.counter=0;
t.stdMode=d.documentMode>=8;
t.boxModel=!tinymce.isIE||d.compatMode=="CSS1Compat"||t.stdMode;
t.settings=s=tinymce.extend({
keep_values:false,
hex_colors:1,
process_html:1
},s);
if(tinymce.isIE6){
try{
d.execCommand('BackgroundImageCache',false,true)}catch(e){
t.cssFlicker=true;
}}
if(s.valid_styles){
t._styles={};
each(s.valid_styles,function(value,key){
t._styles[key]=tinymce.explode(value)})}
tinymce.addUnload(t.destroy,t)},
getRoot:function(){
var t=this,s=t.settings;
return(s&&t.get(s.root_element))||t.doc.body;
},
getViewPort:function(w){
var d,b;
w=!w?this.win:w;
d=w.document;
b=this.boxModel?d.documentElement:d.body;
return{
x:w.pageXOffset||b.scrollLeft,
y:w.pageYOffset||b.scrollTop,
w:w.innerWidth||b.clientWidth,
h:w.innerHeight||b.clientHeight
}},
getRect:function(e){
var p,t=this,sr;
e=t.get(e);
p=t.getPos(e);
sr=t.getSize(e);
return{
x:p.x,
y:p.y,
w:sr.w,
h:sr.h
}},
getSize:function(e){
var t=this,w,h;
e=t.get(e);
w=t.getStyle(e,'width');
h=t.getStyle(e,'height');
if(w.indexOf('px')===-1)
w=0;
if(h.indexOf('px')===-1)
h=0;
return{
w:parseInt(w)||e.offsetWidth||e.clientWidth,
h:parseInt(h)||e.offsetHeight||e.clientHeight
}},
getParent:function(n,f,r){
return this.getParents(n,f,r,false)},
getParents:function(n,f,r,c){
var t=this,na,se=t.settings,o=[];
n=t.get(n);
c=c===undefined;
if(se.strict_root)
r=r||t.getRoot();
if(is(f,'string')){
na=f;
if(f==='*'){
f=function(n){return n.nodeType==1;}}else{
f=function(n){
return t.is(n,na)}}}
while(n){
if(n==r||!n.nodeType||n.nodeType===9)
break;
if(!f||f(n)){
if(c)
o.push(n);
else
return n;
}
n=n.parentNode;
}
return c?o:null;
},
get:function(e){
var n;
if(e&&this.doc&&typeof(e)=='string'){
n=e;
e=this.doc.getElementById(e);
if(e&&e.id!==n)
return this.doc.getElementsByName(n)[1];
}
return e;
},
getNext:function(node,selector){
return this._findSib(node,selector,'nextSibling')},
getPrev:function(node,selector){
return this._findSib(node,selector,'previousSibling')},
select:function(pa,s){
var t=this;
return tinymce.dom.Sizzle(pa,t.get(s)||t.get(t.settings.root_element)||t.doc,[])},
is:function(n,selector){
var i;
if(n.length===undefined){
if(selector==='*')
return n.nodeType==1;
if(simpleSelectorRe.test(selector)){
selector=selector.toLowerCase().split(/,/);
n=n.nodeName.toLowerCase();
for(i=selector.length-1;i>=0;i--){
if(selector[i]==n)
return true;
}
return false;
}}
return tinymce.dom.Sizzle.matches(selector,n.nodeType?[n]:n).length>0;
},
add:function(p,n,a,h,c){
var t=this;
return this.run(p,function(p){
var e,k;
e=is(n,'string')?t.doc.createElement(n):n;
t.setAttribs(e,a);
if(h){
if(h.nodeType)
e.appendChild(h);
else
t.setHTML(e,h)}
return!c?p.appendChild(e):e;
})},
create:function(n,a,h){
return this.add(this.doc.createElement(n),n,a,h,1)},
createHTML:function(n,a,h){
var o='',t=this,k;
o+='<'+n;
for(k in a){
if(a.hasOwnProperty(k))
o+=' '+k+'="'+t.encode(a[k])+'"';
}
if(typeof(h)!="undefined")
return o+'>'+h+'</'+n+'>';
return o+' />';
},
remove:function(node,keep_children){
return this.run(node,function(node){
var parent,child;
parent=node.parentNode;
if(!parent)
return null;
if(keep_children){
while(child=node.firstChild){
if(!tinymce.isIE||child.nodeType!==3||child.nodeValue)
parent.insertBefore(child,node);
else
node.removeChild(child)}}
return parent.removeChild(node)})},
setStyle:function(n,na,v){
var t=this;
return t.run(n,function(e){
var s,i;
s=e.style;
na=na.replace(/-(\D)/g,function(a,b){
return b.toUpperCase()});
if(t.pixelStyles.test(na)&&(tinymce.is(v,'number')||/^[\-0-9\.]+$/.test(v)))
v+='px';
switch(na){
case'opacity':
if(isIE){
s.filter=v===''?'':"alpha(opacity="+(v*100)+")";
if(!n.currentStyle||!n.currentStyle.hasLayout)
s.display='inline-block';
}
s[na]=s['-moz-opacity']=s['-khtml-opacity']=v||'';
break;
case'float':
isIE?s.styleFloat=v:s.cssFloat=v;
break;
default:
s[na]=v||'';
}
if(t.settings.update_styles)
t.setAttrib(e,'_mce_style')})},
getStyle:function(n,na,c){
n=this.get(n);
if(!n)
return false;
if(this.doc.defaultView&&c){
na=na.replace(/[A-Z]/g,function(a){
return'-'+a;
});
try{
return this.doc.defaultView.getComputedStyle(n,null).getPropertyValue(na)}catch(ex){
return null;
}}
na=na.replace(/-(\D)/g,function(a,b){
return b.toUpperCase()});
if(na=='float')
na=isIE?'styleFloat':'cssFloat';
if(n.currentStyle&&c)
return n.currentStyle[na];
return n.style[na];
},
setStyles:function(e,o){
var t=this,s=t.settings,ol;
ol=s.update_styles;
s.update_styles=0;
each(o,function(v,n){
t.setStyle(e,n,v)});
s.update_styles=ol;
if(s.update_styles)
t.setAttrib(e,s.cssText)},
setAttrib:function(e,n,v){
var t=this;
if(!e||!n)
return;
if(t.settings.strict)
n=n.toLowerCase();
return this.run(e,function(e){
var s=t.settings;
switch(n){
case"style":
if(!is(v,'string')){
each(v,function(v,n){
t.setStyle(e,n,v)});
return;
}
if(s.keep_values){
if(v&&!t._isRes(v))
e.setAttribute('_mce_style',v,2);
else
e.removeAttribute('_mce_style',2)}
e.style.cssText=v;
break;
case"class":
e.className=v||'';
break;
case"src":
case"href":
if(s.keep_values){
if(s.url_converter)
v=s.url_converter.call(s.url_converter_scope||t,v,n,e);
t.setAttrib(e,'_mce_'+n,v,2)}
break;
case"shape":
e.setAttribute('_mce_style',v);
break;
}
if(is(v)&&v!==null&&v.length!==0)
e.setAttribute(n,''+v,2);
else
e.removeAttribute(n,2)})},
setAttribs:function(e,o){
var t=this;
return this.run(e,function(e){
each(o,function(v,n){
t.setAttrib(e,n,v)})})},
getAttrib:function(e,n,dv){
var v,t=this;
e=t.get(e);
if(!e||e.nodeType!==1)
return false;
if(!is(dv))
dv='';
if(/^(src|href|style|coords|shape)$/.test(n)){
v=e.getAttribute("_mce_"+n);
if(v)
return v;
}
if(isIE&&t.props[n]){
v=e[t.props[n]];
v=v&&v.nodeValue?v.nodeValue:v;
}
if(!v)
v=e.getAttribute(n,2);
if(/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noshade|nowrap|readonly|selected)$/.test(n)){
if(e[t.props[n]]===true&&v==='')
return n;
return v?n:'';
}
if(e.nodeName==="FORM"&&e.getAttributeNode(n))
return e.getAttributeNode(n).nodeValue;
if(n==='style'){
v=v||e.style.cssText;
if(v){
v=t.serializeStyle(t.parseStyle(v),e.nodeName);
if(t.settings.keep_values&&!t._isRes(v))
e.setAttribute('_mce_style',v)}}
if(isWebKit&&n==="class"&&v)
v=v.replace(/(apple|webkit)\-[a-z\-]+/gi,'');
if(isIE){
switch(n){
case'rowspan':
case'colspan':
if(v===1)
v='';
break;
case'size':
if(v==='+0'||v===20||v===0)
v='';
break;
case'width':
case'height':
case'vspace':
case'checked':
case'disabled':
case'readonly':
if(v===0)
v='';
break;
case'hspace':
if(v===-1)
v='';
break;
case'maxlength':
case'tabindex':
if(v===32768||v===2147483647||v==='32768')
v='';
break;
case'multiple':
case'compact':
case'noshade':
case'nowrap':
if(v===65535)
return n;
return dv;
case'shape':
v=v.toLowerCase();
break;
default:
if(n.indexOf('on')===0&&v)
v=tinymce._replace(/^function\s+\w+\(\)\s+\{\s+(.*)\s+\}$/,'$1',''+v)}}
return(v!==undefined&&v!==null&&v!=='')?''+v:dv;
},
getPos:function(n,ro){
var t=this,x=0,y=0,e,d=t.doc,r;
n=t.get(n);
ro=ro||d.body;
if(n){
if(isIE&&!t.stdMode){
n=n.getBoundingClientRect();
e=t.boxModel?d.documentElement:d.body;
x=t.getStyle(t.select('html')[0],'borderWidth');
x=(x=='medium'||t.boxModel&&!t.isIE6)&&2||x;
return{x:n.left+e.scrollLeft-x,y:n.top+e.scrollTop-x}}
r=n;
while(r&&r!=ro&&r.nodeType){
x+=r.offsetLeft||0;
y+=r.offsetTop||0;
r=r.offsetParent;
}
r=n.parentNode;
while(r&&r!=ro&&r.nodeType){
x-=r.scrollLeft||0;
y-=r.scrollTop||0;
r=r.parentNode;
}}
return{x:x,y:y}},
parseStyle:function(st){
var t=this,s=t.settings,o={};
if(!st)
return o;
function compress(p,s,ot){
var t,r,b,l;
t=o[p+'-top'+s];
if(!t)
return;
r=o[p+'-right'+s];
if(t!=r)
return;
b=o[p+'-bottom'+s];
if(r!=b)
return;
l=o[p+'-left'+s];
if(b!=l)
return;
o[ot]=l;
delete o[p+'-top'+s];
delete o[p+'-right'+s];
delete o[p+'-bottom'+s];
delete o[p+'-left'+s];
};
function compress2(ta,a,b,c){
var t;
t=o[a];
if(!t)
return;
t=o[b];
if(!t)
return;
t=o[c];
if(!t)
return;
o[ta]=o[a]+' '+o[b]+' '+o[c];
delete o[a];
delete o[b];
delete o[c];
};
st=st.replace(/&(#?[a-z0-9]+);/g,'&$1_MCE_SEMI_');
each(st.split(';'),function(v){
var sv,ur=[];
if(v){
v=v.replace(/_MCE_SEMI_/g,';');
v=v.replace(/url\([^\)]+\)/g,function(v){ur.push(v);return'url('+ur.length+')';});
v=v.split(':');
sv=tinymce.trim(v[1]);
sv=sv.replace(/url\(([^\)]+)\)/g,function(a,b){return ur[parseInt(b)-1];});
sv=sv.replace(/rgb\([^\)]+\)/g,function(v){
return t.toHex(v)});
if(s.url_converter){
sv=sv.replace(/url\([\'\"]?([^\)\'\"]+)[\'\"]?\)/g,function(x,c){
return'url('+s.url_converter.call(s.url_converter_scope||t,t.decode(c),'style',null)+')';
})}
o[tinymce.trim(v[0]).toLowerCase()]=sv;
}});
compress("border","","border");
compress("border","-width","border-width");
compress("border","-color","border-color");
compress("border","-style","border-style");
compress("padding","","padding");
compress("margin","","margin");
compress2('border','border-width','border-style','border-color');
if(isIE){
if(o.border=='medium none')
o.border='';
}
return o;
},
serializeStyle:function(o,name){
var t=this,s='';
function add(v,k){
if(k&&v){
if(k.indexOf('-')===0)
return;
switch(k){
case'font-weight':
if(v==700)
v='bold';
break;
case'color':
case'background-color':
v=v.toLowerCase();
break;
}
s+=(s?' ':'')+k+': '+v+';';
}};
if(name&&t._styles){
each(t._styles['*'],function(name){
add(o[name],name)});
each(t._styles[name.toLowerCase()],function(name){
add(o[name],name)})}else
each(o,add);
return s;
},
loadCSS:function(u){
var t=this,d=t.doc,head;
if(!u)
u='';
head=t.select('head')[0];
each(u.split(','),function(u){
var link;
if(t.files[u])
return;
t.files[u]=true;
link=t.create('link',{rel:'stylesheet',href:tinymce._addVer(u)});
if(isIE&&d.documentMode&&d.recalc){
link.onload=function(){
d.recalc();
link.onload=null;
}}
head.appendChild(link)})},
addClass:function(e,c){
return this.run(e,function(e){
var o;
if(!c)
return 0;
if(this.hasClass(e,c))
return e.className;
o=this.removeClass(e,c);
return e.className=(o!=''?(o+' '):'')+c;
})},
removeClass:function(e,c){
var t=this,re;
return t.run(e,function(e){
var v;
if(t.hasClass(e,c)){
if(!re)
re=new RegExp("(^|\\s+)"+c+"(\\s+|$)","g");
v=e.className.replace(re,' ');
v=tinymce.trim(v!=' '?v:'');
e.className=v;
if(!v){
e.removeAttribute('class');
e.removeAttribute('className')}
return v;
}
return e.className;
})},
hasClass:function(n,c){
n=this.get(n);
if(!n||!c)
return false;
return(' '+n.className+' ').indexOf(' '+c+' ')!==-1;
},
show:function(e){
return this.setStyle(e,'display','block')},
hide:function(e){
return this.setStyle(e,'display','none')},
isHidden:function(e){
e=this.get(e);
return!e||e.style.display=='none'||this.getStyle(e,'display')=='none';
},
uniqueId:function(p){
return(!p?'mce_':p)+(this.counter++)},
setHTML:function(e,h){
var t=this;
return this.run(e,function(e){
var x,i,nl,n,p,x;
h=t.processHTML(h);
if(isIE){
function set(){
while(e.firstChild)
e.firstChild.removeNode();
try{
e.innerHTML='<br />'+h;
e.removeChild(e.firstChild)}catch(ex){
x=t.create('div');
x.innerHTML='<br />'+h;
each(x.childNodes,function(n,i){
if(i)
e.appendChild(n)})}};
if(t.settings.fix_ie_paragraphs)
h=h.replace(/<p><\/p>|<p([^>]+)><\/p>|<p[^\/+]\/>/gi,'<p$1 _mce_keep="true">&nbsp;</p>');
set();
if(t.settings.fix_ie_paragraphs){
nl=e.getElementsByTagName("p");
for(i=nl.length-1,x=0;i>=0;i--){
n=nl[i];
if(!n.hasChildNodes()){
if(!n._mce_keep){
x=1;
break;
}
n.removeAttribute('_mce_keep')}}}
if(x){
h=h.replace(/<p ([^>]+)>|<p>/ig,'<div $1 _mce_tmp="1">');
h=h.replace(/<\/p>/gi,'</div>');
set();
if(t.settings.fix_ie_paragraphs){
nl=e.getElementsByTagName("DIV");
for(i=nl.length-1;i>=0;i--){
n=nl[i];
if(n._mce_tmp){
p=t.doc.createElement('p');
n.cloneNode(false).outerHTML.replace(/([a-z0-9\-_]+)=/gi,function(a,b){
var v;
if(b!=='_mce_tmp'){
v=n.getAttribute(b);
if(!v&&b==='class')
v=n.className;
p.setAttribute(b,v)}});
for(x=0;x<n.childNodes.length;x++)
p.appendChild(n.childNodes[x].cloneNode(true));
n.swapNode(p)}}}}}else
e.innerHTML=h;
return h;
})},
processHTML:function(h){
var t=this,s=t.settings,codeBlocks=[];
if(!s.process_html)
return h;
if(isIE){
h=h.replace(/&apos;/g,'&#39;');
h=h.replace(/\s+(disabled|checked|readonly|selected)\s*=\s*[\"\']?(false|0)[\"\']?/gi,'')}
h=tinymce._replace(/<a( )([^>]+)\/>|<a\/>/gi,'<a$1$2></a>',h);
if(s.keep_values){
if(/<script|noscript|style/i.test(h)){
function trim(s){
s=s.replace(/(<!--\[CDATA\[|\]\]-->)/g,'\n');
s=s.replace(/^[\r\n]*|[\r\n]*$/g,'');
s=s.replace(/^\s*(\/\/\s*<!--|\/\/\s*<!\[CDATA\[|<!--|<!\[CDATA\[)[\r\n]*/g,'');
s=s.replace(/\s*(\/\/\s*\]\]>|\/\/\s*-->|\]\]>|-->|\]\]-->)\s*$/g,'');
return s;
};
h=h.replace(/<script([^>]+|)>([\s\S]*?)<\/script>/gi,function(v,attribs,text){
if(!attribs)
attribs=' type="text/javascript"';
attribs=attribs.replace(/src=\"([^\"]+)\"?/i,function(a,url){
if(s.url_converter)
url=t.encode(s.url_converter.call(s.url_converter_scope||t,t.decode(url),'src','script'));
return'_mce_src="'+url+'"';
});
if(tinymce.trim(text)){
codeBlocks.push(trim(text));
text='<!--\nMCE_SCRIPT:'+(codeBlocks.length-1)+'\n// -->';
}
return'<mce:script'+attribs+'>'+text+'</mce:script>';
});
h=h.replace(/<style([^>]+|)>([\s\S]*?)<\/style>/gi,function(v,attribs,text){
if(text){
codeBlocks.push(trim(text));
text='<!--\nMCE_SCRIPT:'+(codeBlocks.length-1)+'\n-->';
}
return'<mce:style'+attribs+'>'+text+'</mce:style><style '+attribs+' _mce_bogus="1">'+text+'</style>';
});
h=h.replace(/<noscript([^>]+|)>([\s\S]*?)<\/noscript>/g,function(v,attribs,text){
return'<mce:noscript'+attribs+'><!--'+t.encode(text).replace(/--/g,'&#45;&#45;')+'--></mce:noscript>';
})}
h=tinymce._replace(/<!\[CDATA\[([\s\S]+)\]\]>/g,'<!--[CDATA[$1]]-->',h);
function processTags(html){
return html.replace(tagRegExp,function(match,elm_name,attrs,end){
return'<'+elm_name+attrs.replace(attrRegExp,function(match,name,value,val2,val3){
var mceValue;
name=name.toLowerCase();
value=value||val2||val3||"";
if(boolAttrs[name]){
if(value==='false'||value==='0')
return;
return name+'="'+name+'"';
}
if(mceAttribs[name]&&attrs.indexOf('_mce_'+name)==-1){
mceValue=t.decode(value);
if(s.url_converter&&(name=="src"||name=="href"))
mceValue=s.url_converter.call(s.url_converter_scope||t,mceValue,name,elm_name);
if(name=='style')
mceValue=t.serializeStyle(t.parseStyle(mceValue),name);
return name+'="'+value+'"'+' _mce_'+name+'="'+t.encode(mceValue)+'"';
}
return match;
})+end+'>';
})};
h=processTags(h);
h=h.replace(/MCE_SCRIPT:([0-9]+)/g,function(val,idx){
return codeBlocks[idx];
})}
return h;
},
getOuterHTML:function(e){
var d;
e=this.get(e);
if(!e)
return null;
if(e.outerHTML!==undefined)
return e.outerHTML;
d=(e.ownerDocument||this.doc).createElement("body");
d.appendChild(e.cloneNode(true));
return d.innerHTML;
},
setOuterHTML:function(e,h,d){
var t=this;
function setHTML(e,h,d){
var n,tp;
tp=d.createElement("body");
tp.innerHTML=h;
n=tp.lastChild;
while(n){
t.insertAfter(n.cloneNode(true),e);
n=n.previousSibling;
}
t.remove(e)};
return this.run(e,function(e){
e=t.get(e);
if(e.nodeType==1){
d=d||e.ownerDocument||t.doc;
if(isIE){
try{
if(isIE&&e.nodeType==1)
e.outerHTML=h;
else
setHTML(e,h,d)}catch(ex){
setHTML(e,h,d)}}else
setHTML(e,h,d)}})},
decode:function(s){
var e,n,v;
if(/&[\w#]+;/.test(s)){
e=this.doc.createElement("div");
e.innerHTML=s;
n=e.firstChild;
v='';
if(n){
do{
v+=n.nodeValue;
}while(n=n.nextSibling)}
return v||s;
}
return s;
},
encode:function(str){
return(''+str).replace(encodeCharsRe,function(chr){
return encodedChars[chr];
})},
insertAfter:function(node,reference_node){
reference_node=this.get(reference_node);
return this.run(node,function(node){
var parent,nextSibling;
parent=reference_node.parentNode;
nextSibling=reference_node.nextSibling;
if(nextSibling)
parent.insertBefore(node,nextSibling);
else
parent.appendChild(node);
return node;
})},
isBlock:function(n){
if(n.nodeType&&n.nodeType!==1)
return false;
n=n.nodeName||n;
return blockRe.test(n)},
replace:function(n,o,k){
var t=this;
if(is(o,'array'))
n=n.cloneNode(true);
return t.run(o,function(o){
if(k){
each(tinymce.grep(o.childNodes),function(c){
n.appendChild(c)})}
return o.parentNode.replaceChild(n,o)})},
rename:function(elm,name){
var t=this,newElm;
if(elm.nodeName!=name.toUpperCase()){
newElm=t.create(name);
each(t.getAttribs(elm),function(attr_node){
t.setAttrib(newElm,attr_node.nodeName,t.getAttrib(elm,attr_node.nodeName))});
t.replace(newElm,elm,1)}
return newElm||elm;
},
findCommonAncestor:function(a,b){
var ps=a,pe;
while(ps){
pe=b;
while(pe&&ps!=pe)
pe=pe.parentNode;
if(ps==pe)
break;
ps=ps.parentNode;
}
if(!ps&&a.ownerDocument)
return a.ownerDocument.documentElement;
return ps;
},
toHex:function(s){
var c=/^\s*rgb\s*?\(\s*?([0-9]+)\s*?,\s*?([0-9]+)\s*?,\s*?([0-9]+)\s*?\)\s*$/i.exec(s);
function hex(s){
s=parseInt(s).toString(16);
return s.length>1?s:'0'+s;
};
if(c){
s='#'+hex(c[1])+hex(c[2])+hex(c[3]);
return s;
}
return s;
},
getClasses:function(){
var t=this,cl=[],i,lo={},f=t.settings.class_filter,ov;
if(t.classes)
return t.classes;
function addClasses(s){
each(s.imports,function(r){
addClasses(r)});
each(s.cssRules||s.rules,function(r){
switch(r.type||1){
case 1:
if(r.selectorText){
each(r.selectorText.split(','),function(v){
v=v.replace(/^\s*|\s*$|^\s\./g,"");
if(/\.mce/.test(v)||!/\.[\w\-]+$/.test(v))
return;
ov=v;
v=tinymce._replace(/.*\.([a-z0-9_\-]+).*/i,'$1',v);
if(f&&!(v=f(v,ov)))
return;
if(!lo[v]){
cl.push({'class':v});
lo[v]=1;
}})}
break;
case 3:
addClasses(r.styleSheet);
break;
}})};
try{
each(t.doc.styleSheets,addClasses)}catch(ex){
}
if(cl.length>0)
t.classes=cl;
return cl;
},
run:function(e,f,s){
var t=this,o;
if(t.doc&&typeof(e)==='string')
e=t.get(e);
if(!e)
return false;
s=s||this;
if(!e.nodeType&&(e.length||e.length===0)){
o=[];
each(e,function(e,i){
if(e){
if(typeof(e)=='string')
e=t.doc.getElementById(e);
o.push(f.call(s,e,i))}});
return o;
}
return f.call(s,e)},
getAttribs:function(n){
var o;
n=this.get(n);
if(!n)
return[];
if(isIE){
o=[];
if(n.nodeName=='OBJECT')
return n.attributes;
if(n.nodeName==='OPTION'&&this.getAttrib(n,'selected'))
o.push({specified:1,nodeName:'selected'});
n.cloneNode(false).outerHTML.replace(/<\/?[\w:\-]+ ?|=[\"][^\"]+\"|=\'[^\']+\'|=[\w\-]+|>/gi,'').replace(/[\w:\-]+/gi,function(a){
o.push({specified:1,nodeName:a})});
return o;
}
return n.attributes;
},
destroy:function(s){
var t=this;
if(t.events)
t.events.destroy();
t.win=t.doc=t.root=t.events=null;
if(!s)
tinymce.removeUnload(t.destroy)},
createRng:function(){
var d=this.doc;
return d.createRange?d.createRange():new tinymce.dom.Range(this)},
nodeIndex:function(node,normalized){
var idx=0,lastNodeType,lastNode,nodeType;
if(node){
for(lastNodeType=node.nodeType,node=node.previousSibling,lastNode=node;node;node=node.previousSibling){
nodeType=node.nodeType;
if(normalized&&nodeType==3){
if(nodeType==lastNodeType||!node.nodeValue.length)
continue;
}
idx++;
lastNodeType=nodeType;
}}
return idx;
},
split:function(pe,e,re){
var t=this,r=t.createRng(),bef,aft,pa;
function trim(node){
var i,children=node.childNodes;
if(node.nodeType==1&&node.getAttribute('_mce_type')=='bookmark')
return;
for(i=children.length-1;i>=0;i--)
trim(children[i]);
if(node.nodeType!=9){
if(node.nodeType==3&&node.nodeValue.length>0){
if(!t.isBlock(node.parentNode)||tinymce.trim(node.nodeValue).length>0)
return;
}
if(node.nodeType==1){
children=node.childNodes;
if(children.length==1&&children[0]&&children[0].nodeType==1&&children[0].getAttribute('_mce_type')=='bookmark')
node.parentNode.insertBefore(children[0],node);
if(children.length||/^(br|hr|input|img)$/i.test(node.nodeName))
return;
}
t.remove(node)}
return node;
};
if(pe&&e){
r.setStart(pe.parentNode,t.nodeIndex(pe));
r.setEnd(e.parentNode,t.nodeIndex(e));
bef=r.extractContents();
r=t.createRng();
r.setStart(e.parentNode,t.nodeIndex(e)+1);
r.setEnd(pe.parentNode,t.nodeIndex(pe)+1);
aft=r.extractContents();
pa=pe.parentNode;
pa.insertBefore(trim(bef),pe);
if(re)
pa.replaceChild(re,e);
else
pa.insertBefore(e,pe);
pa.insertBefore(trim(aft),pe);
t.remove(pe);
return re||e;
}},
bind:function(target,name,func,scope){
var t=this;
if(!t.events)
t.events=new tinymce.dom.EventUtils();
return t.events.add(target,name,func,scope||this)},
unbind:function(target,name,func){
var t=this;
if(!t.events)
t.events=new tinymce.dom.EventUtils();
return t.events.remove(target,name,func)},
_findSib:function(node,selector,name){
var t=this,f=selector;
if(node){
if(is(f,'string')){
f=function(node){
return t.is(node,selector)}}
for(node=node[name];node;node=node[name]){
if(f(node))
return node;
}}
return null;
},
_isRes:function(c){
return/^(top|left|bottom|right|width|height)/i.test(c)||/;\s*(top|left|bottom|right|width|height)/i.test(c)}});
tinymce.DOM=new tinymce.dom.DOMUtils(document,{process_html:0})})(tinymce);
(function(ns){
function Range(dom){
var t=this,
doc=dom.doc,
EXTRACT=0,
CLONE=1,
DELETE=2,
TRUE=true,
FALSE=false,
START_OFFSET='startOffset',
START_CONTAINER='startContainer',
END_CONTAINER='endContainer',
END_OFFSET='endOffset',
extend=tinymce.extend,
nodeIndex=dom.nodeIndex;
extend(t,{
startContainer:doc,
startOffset:0,
endContainer:doc,
endOffset:0,
collapsed:TRUE,
commonAncestorContainer:doc,
START_TO_START:0,
START_TO_END:1,
END_TO_END:2,
END_TO_START:3,
setStart:setStart,
setEnd:setEnd,
setStartBefore:setStartBefore,
setStartAfter:setStartAfter,
setEndBefore:setEndBefore,
setEndAfter:setEndAfter,
collapse:collapse,
selectNode:selectNode,
selectNodeContents:selectNodeContents,
compareBoundaryPoints:compareBoundaryPoints,
deleteContents:deleteContents,
extractContents:extractContents,
cloneContents:cloneContents,
insertNode:insertNode,
surroundContents:surroundContents,
cloneRange:cloneRange
});
function setStart(n,o){
_setEndPoint(TRUE,n,o)};
function setEnd(n,o){
_setEndPoint(FALSE,n,o)};
function setStartBefore(n){
setStart(n.parentNode,nodeIndex(n))};
function setStartAfter(n){
setStart(n.parentNode,nodeIndex(n)+1)};
function setEndBefore(n){
setEnd(n.parentNode,nodeIndex(n))};
function setEndAfter(n){
setEnd(n.parentNode,nodeIndex(n)+1)};
function collapse(ts){
if(ts){
t[END_CONTAINER]=t[START_CONTAINER];
t[END_OFFSET]=t[START_OFFSET];
}else{
t[START_CONTAINER]=t[END_CONTAINER];
t[START_OFFSET]=t[END_OFFSET];
}
t.collapsed=TRUE;
};
function selectNode(n){
setStartBefore(n);
setEndAfter(n)};
function selectNodeContents(n){
setStart(n,0);
setEnd(n,n.nodeType===1?n.childNodes.length:n.nodeValue.length)};
function compareBoundaryPoints(h,r){
var sc=t[START_CONTAINER],so=t[START_OFFSET],ec=t[END_CONTAINER],eo=t[END_OFFSET];
if(h===0)
return _compareBoundaryPoints(sc,so,sc,so);
if(h===1)
return _compareBoundaryPoints(sc,so,ec,eo);
if(h===2)
return _compareBoundaryPoints(ec,eo,ec,eo);
if(h===3)
return _compareBoundaryPoints(ec,eo,sc,so)};
function deleteContents(){
_traverse(DELETE)};
function extractContents(){
return _traverse(EXTRACT)};
function cloneContents(){
return _traverse(CLONE)};
function insertNode(n){
var startContainer=this[START_CONTAINER],
startOffset=this[START_OFFSET],nn,o;
if((startContainer.nodeType===3||startContainer.nodeType===4)&&startContainer.nodeValue){
if(!startOffset){
startContainer.parentNode.insertBefore(n,startContainer)}else if(startOffset>=startContainer.nodeValue.length){
dom.insertAfter(n,startContainer)}else{
nn=startContainer.splitText(startOffset);
startContainer.parentNode.insertBefore(n,nn)}}else{
if(startContainer.childNodes.length>0)
o=startContainer.childNodes[startOffset];
if(o)
startContainer.insertBefore(n,o);
else
startContainer.appendChild(n)}};
function surroundContents(n){
var f=t.extractContents();
t.insertNode(n);
n.appendChild(f);
t.selectNode(n)};
function cloneRange(){
return extend(new Range(dom),{
startContainer:t[START_CONTAINER],
startOffset:t[START_OFFSET],
endContainer:t[END_CONTAINER],
endOffset:t[END_OFFSET],
collapsed:t.collapsed,
commonAncestorContainer:t.commonAncestorContainer
})};
function _getSelectedNode(container,offset){
var child;
if(container.nodeType==3)
return container;
if(offset<0)
return container;
child=container.firstChild;
while(child&&offset>0){
--offset;
child=child.nextSibling;
}
if(child)
return child;
return container;
};
function _isCollapsed(){
return(t[START_CONTAINER]==t[END_CONTAINER]&&t[START_OFFSET]==t[END_OFFSET])};
function _compareBoundaryPoints(containerA,offsetA,containerB,offsetB){
var c,offsetC,n,cmnRoot,childA,childB;
if(containerA==containerB){
if(offsetA==offsetB)
return 0;
if(offsetA<offsetB)
return-1;
return 1;
}
c=containerB;
while(c&&c.parentNode!=containerA)
c=c.parentNode;
if(c){
offsetC=0;
n=containerA.firstChild;
while(n!=c&&offsetC<offsetA){
offsetC++;
n=n.nextSibling;
}
if(offsetA<=offsetC)
return-1;
return 1;
}
c=containerA;
while(c&&c.parentNode!=containerB){
c=c.parentNode;
}
if(c){
offsetC=0;
n=containerB.firstChild;
while(n!=c&&offsetC<offsetB){
offsetC++;
n=n.nextSibling;
}
if(offsetC<offsetB)
return-1;
return 1;
}
cmnRoot=dom.findCommonAncestor(containerA,containerB);
childA=containerA;
while(childA&&childA.parentNode!=cmnRoot)
childA=childA.parentNode;
if(!childA)
childA=cmnRoot;
childB=containerB;
while(childB&&childB.parentNode!=cmnRoot)
childB=childB.parentNode;
if(!childB)
childB=cmnRoot;
if(childA==childB)
return 0;
n=cmnRoot.firstChild;
while(n){
if(n==childA)
return-1;
if(n==childB)
return 1;
n=n.nextSibling;
}};
function _setEndPoint(st,n,o){
var ec,sc;
if(st){
t[START_CONTAINER]=n;
t[START_OFFSET]=o;
}else{
t[END_CONTAINER]=n;
t[END_OFFSET]=o;
}
ec=t[END_CONTAINER];
while(ec.parentNode)
ec=ec.parentNode;
sc=t[START_CONTAINER];
while(sc.parentNode)
sc=sc.parentNode;
if(sc==ec){
if(_compareBoundaryPoints(t[START_CONTAINER],t[START_OFFSET],t[END_CONTAINER],t[END_OFFSET])>0)
t.collapse(st)}else
t.collapse(st);
t.collapsed=_isCollapsed();
t.commonAncestorContainer=dom.findCommonAncestor(t[START_CONTAINER],t[END_CONTAINER])};
function _traverse(how){
var c,endContainerDepth=0,startContainerDepth=0,p,depthDiff,startNode,endNode,sp,ep;
if(t[START_CONTAINER]==t[END_CONTAINER])
return _traverseSameContainer(how);
for(c=t[END_CONTAINER],p=c.parentNode;p;c=p,p=p.parentNode){
if(p==t[START_CONTAINER])
return _traverseCommonStartContainer(c,how);
++endContainerDepth;
}
for(c=t[START_CONTAINER],p=c.parentNode;p;c=p,p=p.parentNode){
if(p==t[END_CONTAINER])
return _traverseCommonEndContainer(c,how);
++startContainerDepth;
}
depthDiff=startContainerDepth-endContainerDepth;
startNode=t[START_CONTAINER];
while(depthDiff>0){
startNode=startNode.parentNode;
depthDiff--;
}
endNode=t[END_CONTAINER];
while(depthDiff<0){
endNode=endNode.parentNode;
depthDiff++;
}
for(sp=startNode.parentNode,ep=endNode.parentNode;sp!=ep;sp=sp.parentNode,ep=ep.parentNode){
startNode=sp;
endNode=ep;
}
return _traverseCommonAncestors(startNode,endNode,how)};
function _traverseSameContainer(how){
var frag,s,sub,n,cnt,sibling,xferNode;
if(how!=DELETE)
frag=doc.createDocumentFragment();
if(t[START_OFFSET]==t[END_OFFSET])
return frag;
if(t[START_CONTAINER].nodeType==3){
s=t[START_CONTAINER].nodeValue;
sub=s.substring(t[START_OFFSET],t[END_OFFSET]);
if(how!=CLONE){
t[START_CONTAINER].deleteData(t[START_OFFSET],t[END_OFFSET]-t[START_OFFSET]);
t.collapse(TRUE)}
if(how==DELETE)
return;
frag.appendChild(doc.createTextNode(sub));
return frag;
}
n=_getSelectedNode(t[START_CONTAINER],t[START_OFFSET]);
cnt=t[END_OFFSET]-t[START_OFFSET];
while(cnt>0){
sibling=n.nextSibling;
xferNode=_traverseFullySelected(n,how);
if(frag)
frag.appendChild(xferNode);
--cnt;
n=sibling;
}
if(how!=CLONE)
t.collapse(TRUE);
return frag;
};
function _traverseCommonStartContainer(endAncestor,how){
var frag,n,endIdx,cnt,sibling,xferNode;
if(how!=DELETE)
frag=doc.createDocumentFragment();
n=_traverseRightBoundary(endAncestor,how);
if(frag)
frag.appendChild(n);
endIdx=nodeIndex(endAncestor);
cnt=endIdx-t[START_OFFSET];
if(cnt<=0){
if(how!=CLONE){
t.setEndBefore(endAncestor);
t.collapse(FALSE)}
return frag;
}
n=endAncestor.previousSibling;
while(cnt>0){
sibling=n.previousSibling;
xferNode=_traverseFullySelected(n,how);
if(frag)
frag.insertBefore(xferNode,frag.firstChild);
--cnt;
n=sibling;
}
if(how!=CLONE){
t.setEndBefore(endAncestor);
t.collapse(FALSE)}
return frag;
};
function _traverseCommonEndContainer(startAncestor,how){
var frag,startIdx,n,cnt,sibling,xferNode;
if(how!=DELETE)
frag=doc.createDocumentFragment();
n=_traverseLeftBoundary(startAncestor,how);
if(frag)
frag.appendChild(n);
startIdx=nodeIndex(startAncestor);
++startIdx;
cnt=t[END_OFFSET]-startIdx;
n=startAncestor.nextSibling;
while(cnt>0){
sibling=n.nextSibling;
xferNode=_traverseFullySelected(n,how);
if(frag)
frag.appendChild(xferNode);
--cnt;
n=sibling;
}
if(how!=CLONE){
t.setStartAfter(startAncestor);
t.collapse(TRUE)}
return frag;
};
function _traverseCommonAncestors(startAncestor,endAncestor,how){
var n,frag,commonParent,startOffset,endOffset,cnt,sibling,nextSibling;
if(how!=DELETE)
frag=doc.createDocumentFragment();
n=_traverseLeftBoundary(startAncestor,how);
if(frag)
frag.appendChild(n);
commonParent=startAncestor.parentNode;
startOffset=nodeIndex(startAncestor);
endOffset=nodeIndex(endAncestor);
++startOffset;
cnt=endOffset-startOffset;
sibling=startAncestor.nextSibling;
while(cnt>0){
nextSibling=sibling.nextSibling;
n=_traverseFullySelected(sibling,how);
if(frag)
frag.appendChild(n);
sibling=nextSibling;
--cnt;
}
n=_traverseRightBoundary(endAncestor,how);
if(frag)
frag.appendChild(n);
if(how!=CLONE){
t.setStartAfter(startAncestor);
t.collapse(TRUE)}
return frag;
};
function _traverseRightBoundary(root,how){
var next=_getSelectedNode(t[END_CONTAINER],t[END_OFFSET]-1),parent,clonedParent,prevSibling,clonedChild,clonedGrandParent,isFullySelected=next!=t[END_CONTAINER];
if(next==root)
return _traverseNode(next,isFullySelected,FALSE,how);
parent=next.parentNode;
clonedParent=_traverseNode(parent,FALSE,FALSE,how);
while(parent){
while(next){
prevSibling=next.previousSibling;
clonedChild=_traverseNode(next,isFullySelected,FALSE,how);
if(how!=DELETE)
clonedParent.insertBefore(clonedChild,clonedParent.firstChild);
isFullySelected=TRUE;
next=prevSibling;
}
if(parent==root)
return clonedParent;
next=parent.previousSibling;
parent=parent.parentNode;
clonedGrandParent=_traverseNode(parent,FALSE,FALSE,how);
if(how!=DELETE)
clonedGrandParent.appendChild(clonedParent);
clonedParent=clonedGrandParent;
}};
function _traverseLeftBoundary(root,how){
var next=_getSelectedNode(t[START_CONTAINER],t[START_OFFSET]),isFullySelected=next!=t[START_CONTAINER],parent,clonedParent,nextSibling,clonedChild,clonedGrandParent;
if(next==root)
return _traverseNode(next,isFullySelected,TRUE,how);
parent=next.parentNode;
clonedParent=_traverseNode(parent,FALSE,TRUE,how);
while(parent){
while(next){
nextSibling=next.nextSibling;
clonedChild=_traverseNode(next,isFullySelected,TRUE,how);
if(how!=DELETE)
clonedParent.appendChild(clonedChild);
isFullySelected=TRUE;
next=nextSibling;
}
if(parent==root)
return clonedParent;
next=parent.nextSibling;
parent=parent.parentNode;
clonedGrandParent=_traverseNode(parent,FALSE,TRUE,how);
if(how!=DELETE)
clonedGrandParent.appendChild(clonedParent);
clonedParent=clonedGrandParent;
}};
function _traverseNode(n,isFullySelected,isLeft,how){
var txtValue,newNodeValue,oldNodeValue,offset,newNode;
if(isFullySelected)
return _traverseFullySelected(n,how);
if(n.nodeType==3){
txtValue=n.nodeValue;
if(isLeft){
offset=t[START_OFFSET];
newNodeValue=txtValue.substring(offset);
oldNodeValue=txtValue.substring(0,offset)}else{
offset=t[END_OFFSET];
newNodeValue=txtValue.substring(0,offset);
oldNodeValue=txtValue.substring(offset)}
if(how!=CLONE)
n.nodeValue=oldNodeValue;
if(how==DELETE)
return;
newNode=n.cloneNode(FALSE);
newNode.nodeValue=newNodeValue;
return newNode;
}
if(how==DELETE)
return;
return n.cloneNode(FALSE)};
function _traverseFullySelected(n,how){
if(how!=DELETE)
return how==CLONE?n.cloneNode(TRUE):n;
n.parentNode.removeChild(n)}};
ns.Range=Range;
})(tinymce.dom);
(function(){
function Selection(selection){
var t=this,invisibleChar='\uFEFF',range,lastIERng,dom=selection.dom,TRUE=true,FALSE=false;
function getRange(){
var ieRange=selection.getRng(),domRange=dom.createRng(),element,collapsed;
element=ieRange.item?ieRange.item(0):ieRange.parentElement();
if(element.ownerDocument!=dom.doc)
return domRange;
if(ieRange.item||!element.hasChildNodes()){
domRange.setStart(element.parentNode,dom.nodeIndex(element));
domRange.setEnd(domRange.startContainer,domRange.startOffset+1);
return domRange;
}
collapsed=selection.isCollapsed();
function findEndPoint(start){
var marker,container,offset,nodes,startIndex=0,endIndex,index,parent,checkRng,position;
checkRng=ieRange.duplicate();
checkRng.collapse(start);
marker=dom.create('a');
parent=checkRng.parentElement();
if(!parent.hasChildNodes()){
domRange[start?'setStart':'setEnd'](parent,0);
return;
}
parent.appendChild(marker);
checkRng.moveToElementText(marker);
position=ieRange.compareEndPoints(start?'StartToStart':'EndToEnd',checkRng);
if(position>0){
domRange[start?'setStartAfter':'setEndAfter'](parent);
dom.remove(marker);
return;
}
nodes=tinymce.grep(parent.childNodes);
endIndex=nodes.length-1;
while(startIndex<=endIndex){
index=Math.floor((startIndex+endIndex)/2);
parent.insertBefore(marker,nodes[index]);
checkRng.moveToElementText(marker);
position=ieRange.compareEndPoints(start?'StartToStart':'EndToEnd',checkRng);
if(position>0){
startIndex=index+1;
}else if(position<0){
endIndex=index-1;
}else{
found=true;
break;
}}
container=position>0||index==0?marker.nextSibling:marker.previousSibling;
if(container.nodeType==1){
dom.remove(marker);
offset=dom.nodeIndex(container);
container=container.parentNode;
if(!start||index>0)
offset++;
}else{
if(position>0||index==0){
checkRng.setEndPoint(start?'StartToStart':'EndToEnd',ieRange);
offset=checkRng.text.length;
}else{
checkRng.setEndPoint(start?'StartToStart':'EndToEnd',ieRange);
offset=container.nodeValue.length-checkRng.text.length;
}
dom.remove(marker)}
domRange[start?'setStart':'setEnd'](container,offset)};
findEndPoint(true);
if(!collapsed)
findEndPoint();
return domRange;
};
this.addRange=function(rng){
var ieRng,ctrlRng,startContainer,startOffset,endContainer,endOffset,doc=selection.dom.doc,body=doc.body;
function setEndPoint(start){
var container,offset,marker,tmpRng,nodes;
marker=dom.create('a');
container=start?startContainer:endContainer;
offset=start?startOffset:endOffset;
tmpRng=ieRng.duplicate();
if(container==doc){
container=body;
offset=0;
}
if(container.nodeType==3){
container.parentNode.insertBefore(marker,container);
tmpRng.moveToElementText(marker);
tmpRng.moveStart('character',offset);
dom.remove(marker);
ieRng.setEndPoint(start?'StartToStart':'EndToEnd',tmpRng)}else{
nodes=container.childNodes;
if(nodes.length){
if(offset>=nodes.length){
dom.insertAfter(marker,nodes[nodes.length-1])}else{
container.insertBefore(marker,nodes[offset])}
tmpRng.moveToElementText(marker)}else{
marker=doc.createTextNode(invisibleChar);
container.appendChild(marker);
tmpRng.moveToElementText(marker.parentNode);
tmpRng.collapse(TRUE)}
ieRng.setEndPoint(start?'StartToStart':'EndToEnd',tmpRng);
dom.remove(marker)}}
this.destroy();
startContainer=rng.startContainer;
startOffset=rng.startOffset;
endContainer=rng.endContainer;
endOffset=rng.endOffset;
ieRng=body.createTextRange();
if(startContainer==endContainer&&startContainer.nodeType==1&&startOffset==endOffset-1){
if(startOffset==endOffset-1){
try{
ctrlRng=body.createControlRange();
ctrlRng.addElement(startContainer.childNodes[startOffset]);
ctrlRng.select();
ctrlRng.scrollIntoView();
return;
}catch(ex){
}}}
setEndPoint(true);
setEndPoint();
ieRng.select();
ieRng.scrollIntoView()};
this.getRangeAt=function(){
if(!range||!tinymce.dom.RangeUtils.compareRanges(lastIERng,selection.getRng())){
range=getRange();
lastIERng=selection.getRng()}
try{
range.startContainer.nextSibling;
}catch(ex){
range=getRange();
lastIERng=null;
}
return range;
};
this.destroy=function(){
lastIERng=range=null;
}};
tinymce.dom.TridentSelection=Selection;
})();
(function(){
var chunker=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
done=0,
toString=Object.prototype.toString,
hasDuplicate=false,
baseHasDuplicate=true;
[0,0].sort(function(){
baseHasDuplicate=false;
return 0;
});
var Sizzle=function(selector,context,results,seed){
results=results||[];
context=context||document;
var origContext=context;
if(context.nodeType!==1&&context.nodeType!==9){
return[];
}
if(!selector||typeof selector!=="string"){
return results;
}
var parts=[],m,set,checkSet,extra,prune=true,contextXML=Sizzle.isXML(context),
soFar=selector,ret,cur,pop,i;
do{
chunker.exec("");
m=chunker.exec(soFar);
if(m){
soFar=m[3];
parts.push(m[1]);
if(m[2]){
extra=m[3];
break;
}}}while(m);
if(parts.length>1&&origPOS.exec(selector)){
if(parts.length===2&&Expr.relative[parts[0]]){
set=posProcess(parts[0]+parts[1],context)}else{
set=Expr.relative[parts[0]]?
[context]:
Sizzle(parts.shift(),context);
while(parts.length){
selector=parts.shift();
if(Expr.relative[selector]){
selector+=parts.shift()}
set=posProcess(selector,set)}}}else{
if(!seed&&parts.length>1&&context.nodeType===9&&!contextXML&&
Expr.match.ID.test(parts[0])&&!Expr.match.ID.test(parts[parts.length-1])){
ret=Sizzle.find(parts.shift(),context,contextXML);
context=ret.expr?Sizzle.filter(ret.expr,ret.set)[0]:ret.set[0];
}
if(context){
ret=seed?
{expr:parts.pop(),set:makeArray(seed)}:
Sizzle.find(parts.pop(),parts.length===1&&(parts[0]==="~"||parts[0]==="+")&&context.parentNode?context.parentNode:context,contextXML);
set=ret.expr?Sizzle.filter(ret.expr,ret.set):ret.set;
if(parts.length>0){
checkSet=makeArray(set)}else{
prune=false;
}
while(parts.length){
cur=parts.pop();
pop=cur;
if(!Expr.relative[cur]){
cur="";
}else{
pop=parts.pop()}
if(pop==null){
pop=context;
}
Expr.relative[cur](checkSet,pop,contextXML)}}else{
checkSet=parts=[];
}}
if(!checkSet){
checkSet=set;
}
if(!checkSet){
Sizzle.error(cur||selector)}
if(toString.call(checkSet)==="[object Array]"){
if(!prune){
results.push.apply(results,checkSet)}else if(context&&context.nodeType===1){
for(i=0;checkSet[i]!=null;i++){
if(checkSet[i]&&(checkSet[i]===true||checkSet[i].nodeType===1&&Sizzle.contains(context,checkSet[i]))){
results.push(set[i])}}}else{
for(i=0;checkSet[i]!=null;i++){
if(checkSet[i]&&checkSet[i].nodeType===1){
results.push(set[i])}}}}else{
makeArray(checkSet,results)}
if(extra){
Sizzle(extra,origContext,results,seed);
Sizzle.uniqueSort(results)}
return results;
};
Sizzle.uniqueSort=function(results){
if(sortOrder){
hasDuplicate=baseHasDuplicate;
results.sort(sortOrder);
if(hasDuplicate){
for(var i=1;i<results.length;i++){
if(results[i]===results[i-1]){
results.splice(i--,1)}}}}
return results;
};
Sizzle.matches=function(expr,set){
return Sizzle(expr,null,null,set)};
Sizzle.find=function(expr,context,isXML){
var set;
if(!expr){
return[];
}
for(var i=0,l=Expr.order.length;i<l;i++){
var type=Expr.order[i],match;
if((match=Expr.leftMatch[type].exec(expr))){
var left=match[1];
match.splice(1,1);
if(left.substr(left.length-1)!=="\\"){
match[1]=(match[1]||"").replace(/\\/g,"");
set=Expr.find[type](match,context,isXML);
if(set!=null){
expr=expr.replace(Expr.match[type],"");
break;
}}}}
if(!set){
set=context.getElementsByTagName("*")}
return{set:set,expr:expr}};
Sizzle.filter=function(expr,set,inplace,not){
var old=expr,result=[],curLoop=set,match,anyFound,
isXMLFilter=set&&set[0]&&Sizzle.isXML(set[0]);
while(expr&&set.length){
for(var type in Expr.filter){
if((match=Expr.leftMatch[type].exec(expr))!=null&&match[2]){
var filter=Expr.filter[type],found,item,left=match[1];
anyFound=false;
match.splice(1,1);
if(left.substr(left.length-1)==="\\"){
continue;
}
if(curLoop===result){
result=[];
}
if(Expr.preFilter[type]){
match=Expr.preFilter[type](match,curLoop,inplace,result,not,isXMLFilter);
if(!match){
anyFound=found=true;
}else if(match===true){
continue;
}}
if(match){
for(var i=0;(item=curLoop[i])!=null;i++){
if(item){
found=filter(item,match,i,curLoop);
var pass=not^!!found;
if(inplace&&found!=null){
if(pass){
anyFound=true;
}else{
curLoop[i]=false;
}}else if(pass){
result.push(item);
anyFound=true;
}}}}
if(found!==undefined){
if(!inplace){
curLoop=result;
}
expr=expr.replace(Expr.match[type],"");
if(!anyFound){
return[];
}
break;
}}}
if(expr===old){
if(anyFound==null){
Sizzle.error(expr)}else{
break;
}}
old=expr;
}
return curLoop;
};
Sizzle.error=function(msg){
throw"Syntax error, unrecognized expression: "+msg;
};
var Expr=Sizzle.selectors={
order:["ID","NAME","TAG"],
match:{
ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
},
leftMatch:{},
attrMap:{
"class":"className",
"for":"htmlFor"
},
attrHandle:{
href:function(elem){
return elem.getAttribute("href")}},
relative:{
"+":function(checkSet,part){
var isPartStr=typeof part==="string",
isTag=isPartStr&&!/\W/.test(part),
isPartStrNotTag=isPartStr&&!isTag;
if(isTag){
part=part.toLowerCase()}
for(var i=0,l=checkSet.length,elem;i<l;i++){
if((elem=checkSet[i])){
while((elem=elem.previousSibling)&&elem.nodeType!==1){}
checkSet[i]=isPartStrNotTag||elem&&elem.nodeName.toLowerCase()===part?
elem||false:
elem===part;
}}
if(isPartStrNotTag){
Sizzle.filter(part,checkSet,true)}},
">":function(checkSet,part){
var isPartStr=typeof part==="string",
elem,i=0,l=checkSet.length;
if(isPartStr&&!/\W/.test(part)){
part=part.toLowerCase();
for(;i<l;i++){
elem=checkSet[i];
if(elem){
var parent=elem.parentNode;
checkSet[i]=parent.nodeName.toLowerCase()===part?parent:false;
}}}else{
for(;i<l;i++){
elem=checkSet[i];
if(elem){
checkSet[i]=isPartStr?
elem.parentNode:
elem.parentNode===part;
}}
if(isPartStr){
Sizzle.filter(part,checkSet,true)}}},
"":function(checkSet,part,isXML){
var doneName=done++,checkFn=dirCheck,nodeCheck;
if(typeof part==="string"&&!/\W/.test(part)){
part=part.toLowerCase();
nodeCheck=part;
checkFn=dirNodeCheck;
}
checkFn("parentNode",part,doneName,checkSet,nodeCheck,isXML)},
"~":function(checkSet,part,isXML){
var doneName=done++,checkFn=dirCheck,nodeCheck;
if(typeof part==="string"&&!/\W/.test(part)){
part=part.toLowerCase();
nodeCheck=part;
checkFn=dirNodeCheck;
}
checkFn("previousSibling",part,doneName,checkSet,nodeCheck,isXML)}},
find:{
ID:function(match,context,isXML){
if(typeof context.getElementById!=="undefined"&&!isXML){
var m=context.getElementById(match[1]);
return m?[m]:[];
}},
NAME:function(match,context){
if(typeof context.getElementsByName!=="undefined"){
var ret=[],results=context.getElementsByName(match[1]);
for(var i=0,l=results.length;i<l;i++){
if(results[i].getAttribute("name")===match[1]){
ret.push(results[i])}}
return ret.length===0?null:ret;
}},
TAG:function(match,context){
return context.getElementsByTagName(match[1])}},
preFilter:{
CLASS:function(match,curLoop,inplace,result,not,isXML){
match=" "+match[1].replace(/\\/g,"")+" ";
if(isXML){
return match;
}
for(var i=0,elem;(elem=curLoop[i])!=null;i++){
if(elem){
if(not^(elem.className&&(" "+elem.className+" ").replace(/[\t\n]/g," ").indexOf(match)>=0)){
if(!inplace){
result.push(elem)}}else if(inplace){
curLoop[i]=false;
}}}
return false;
},
ID:function(match){
return match[1].replace(/\\/g,"")},
TAG:function(match,curLoop){
return match[1].toLowerCase()},
CHILD:function(match){
if(match[1]==="nth"){
var test=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(
match[2]==="even"&&"2n"||match[2]==="odd"&&"2n+1"||
!/\D/.test(match[2])&&"0n+"+match[2]||match[2]);
match[2]=(test[1]+(test[2]||1))-0;
match[3]=test[3]-0;
}
match[0]=done++;
return match;
},
ATTR:function(match,curLoop,inplace,result,not,isXML){
var name=match[1].replace(/\\/g,"");
if(!isXML&&Expr.attrMap[name]){
match[1]=Expr.attrMap[name];
}
if(match[2]==="~="){
match[4]=" "+match[4]+" ";
}
return match;
},
PSEUDO:function(match,curLoop,inplace,result,not){
if(match[1]==="not"){
if((chunker.exec(match[3])||"").length>1||/^\w/.test(match[3])){
match[3]=Sizzle(match[3],null,null,curLoop)}else{
var ret=Sizzle.filter(match[3],curLoop,inplace,true^not);
if(!inplace){
result.push.apply(result,ret)}
return false;
}}else if(Expr.match.POS.test(match[0])||Expr.match.CHILD.test(match[0])){
return true;
}
return match;
},
POS:function(match){
match.unshift(true);
return match;
}},
filters:{
enabled:function(elem){
return elem.disabled===false&&elem.type!=="hidden";
},
disabled:function(elem){
return elem.disabled===true;
},
checked:function(elem){
return elem.checked===true;
},
selected:function(elem){
elem.parentNode.selectedIndex;
return elem.selected===true;
},
parent:function(elem){
return!!elem.firstChild;
},
empty:function(elem){
return!elem.firstChild;
},
has:function(elem,i,match){
return!!Sizzle(match[3],elem).length;
},
header:function(elem){
return(/h\d/i).test(elem.nodeName)},
text:function(elem){
return"text"===elem.type;
},
radio:function(elem){
return"radio"===elem.type;
},
checkbox:function(elem){
return"checkbox"===elem.type;
},
file:function(elem){
return"file"===elem.type;
},
password:function(elem){
return"password"===elem.type;
},
submit:function(elem){
return"submit"===elem.type;
},
image:function(elem){
return"image"===elem.type;
},
reset:function(elem){
return"reset"===elem.type;
},
button:function(elem){
return"button"===elem.type||elem.nodeName.toLowerCase()==="button";
},
input:function(elem){
return(/input|select|textarea|button/i).test(elem.nodeName)}},
setFilters:{
first:function(elem,i){
return i===0;
},
last:function(elem,i,match,array){
return i===array.length-1;
},
even:function(elem,i){
return i%2===0;
},
odd:function(elem,i){
return i%2===1;
},
lt:function(elem,i,match){
return i<match[3]-0;
},
gt:function(elem,i,match){
return i>match[3]-0;
},
nth:function(elem,i,match){
return match[3]-0===i;
},
eq:function(elem,i,match){
return match[3]-0===i;
}},
filter:{
PSEUDO:function(elem,match,i,array){
var name=match[1],filter=Expr.filters[name];
if(filter){
return filter(elem,i,match,array)}else if(name==="contains"){
return(elem.textContent||elem.innerText||Sizzle.getText([elem])||"").indexOf(match[3])>=0;
}else if(name==="not"){
var not=match[3];
for(var j=0,l=not.length;j<l;j++){
if(not[j]===elem){
return false;
}}
return true;
}else{
Sizzle.error("Syntax error, unrecognized expression: "+name)}},
CHILD:function(elem,match){
var type=match[1],node=elem;
switch(type){
case'only':
case'first':
while((node=node.previousSibling)){
if(node.nodeType===1){
return false;
}}
if(type==="first"){
return true;
}
node=elem;
case'last':
while((node=node.nextSibling)){
if(node.nodeType===1){
return false;
}}
return true;
case'nth':
var first=match[2],last=match[3];
if(first===1&&last===0){
return true;
}
var doneName=match[0],
parent=elem.parentNode;
if(parent&&(parent.sizcache!==doneName||!elem.nodeIndex)){
var count=0;
for(node=parent.firstChild;node;node=node.nextSibling){
if(node.nodeType===1){
node.nodeIndex=++count;
}}
parent.sizcache=doneName;
}
var diff=elem.nodeIndex-last;
if(first===0){
return diff===0;
}else{
return(diff%first===0&&diff/first>=0)}}},
ID:function(elem,match){
return elem.nodeType===1&&elem.getAttribute("id")===match;
},
TAG:function(elem,match){
return(match==="*"&&elem.nodeType===1)||elem.nodeName.toLowerCase()===match;
},
CLASS:function(elem,match){
return(" "+(elem.className||elem.getAttribute("class"))+" ")
.indexOf(match)>-1;
},
ATTR:function(elem,match){
var name=match[1],
result=Expr.attrHandle[name]?
Expr.attrHandle[name](elem):
elem[name]!=null?
elem[name]:
elem.getAttribute(name),
value=result+"",
type=match[2],
check=match[4];
return result==null?
type==="!=":
type==="="?
value===check:
type==="*="?
value.indexOf(check)>=0:
type==="~="?
(" "+value+" ").indexOf(check)>=0:
!check?
value&&result!==false:
type==="!="?
value!==check:
type==="^="?
value.indexOf(check)===0:
type==="$="?
value.substr(value.length-check.length)===check:
type==="|="?
value===check||value.substr(0,check.length+1)===check+"-":
false;
},
POS:function(elem,match,i,array){
var name=match[2],filter=Expr.setFilters[name];
if(filter){
return filter(elem,i,match,array)}}}};
var origPOS=Expr.match.POS,
fescape=function(all,num){
return"\\"+(num-0+1)};
for(var type in Expr.match){
Expr.match[type]=new RegExp(Expr.match[type].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
Expr.leftMatch[type]=new RegExp(/(^(?:.|\r|\n)*?)/.source+Expr.match[type].source.replace(/\\(\d+)/g,fescape))}
var makeArray=function(array,results){
array=Array.prototype.slice.call(array,0);
if(results){
results.push.apply(results,array);
return results;
}
return array;
};
try{
Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;
}catch(e){
makeArray=function(array,results){
var ret=results||[],i=0;
if(toString.call(array)==="[object Array]"){
Array.prototype.push.apply(ret,array)}else{
if(typeof array.length==="number"){
for(var l=array.length;i<l;i++){
ret.push(array[i])}}else{
for(;array[i];i++){
ret.push(array[i])}}}
return ret;
}}
var sortOrder;
if(document.documentElement.compareDocumentPosition){
sortOrder=function(a,b){
if(!a.compareDocumentPosition||!b.compareDocumentPosition){
if(a==b){
hasDuplicate=true;
}
return a.compareDocumentPosition?-1:1;
}
var ret=a.compareDocumentPosition(b)&4?-1:a===b?0:1;
if(ret===0){
hasDuplicate=true;
}
return ret;
}}else if("sourceIndex"in document.documentElement){
sortOrder=function(a,b){
if(!a.sourceIndex||!b.sourceIndex){
if(a==b){
hasDuplicate=true;
}
return a.sourceIndex?-1:1;
}
var ret=a.sourceIndex-b.sourceIndex;
if(ret===0){
hasDuplicate=true;
}
return ret;
}}else if(document.createRange){
sortOrder=function(a,b){
if(!a.ownerDocument||!b.ownerDocument){
if(a==b){
hasDuplicate=true;
}
return a.ownerDocument?-1:1;
}
var aRange=a.ownerDocument.createRange(),bRange=b.ownerDocument.createRange();
aRange.setStart(a,0);
aRange.setEnd(a,0);
bRange.setStart(b,0);
bRange.setEnd(b,0);
var ret=aRange.compareBoundaryPoints(Range.START_TO_END,bRange);
if(ret===0){
hasDuplicate=true;
}
return ret;
}}
Sizzle.getText=function(elems){
var ret="",elem;
for(var i=0;elems[i];i++){
elem=elems[i];
if(elem.nodeType===3||elem.nodeType===4){
ret+=elem.nodeValue;
}else if(elem.nodeType!==8){
ret+=Sizzle.getText(elem.childNodes)}}
return ret;
};
(function(){
var form=document.createElement("div"),
id="script"+(new Date()).getTime();
form.innerHTML="<a name='"+id+"'/>";
var root=document.documentElement;
root.insertBefore(form,root.firstChild);
if(document.getElementById(id)){
Expr.find.ID=function(match,context,isXML){
if(typeof context.getElementById!=="undefined"&&!isXML){
var m=context.getElementById(match[1]);
return m?m.id===match[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===match[1]?[m]:undefined:[];
}};
Expr.filter.ID=function(elem,match){
var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");
return elem.nodeType===1&&node&&node.nodeValue===match;
}}
root.removeChild(form);
root=form=null;
})();
(function(){
var div=document.createElement("div");
div.appendChild(document.createComment(""));
if(div.getElementsByTagName("*").length>0){
Expr.find.TAG=function(match,context){
var results=context.getElementsByTagName(match[1]);
if(match[1]==="*"){
var tmp=[];
for(var i=0;results[i];i++){
if(results[i].nodeType===1){
tmp.push(results[i])}}
results=tmp;
}
return results;
}}
div.innerHTML="<a href='#'></a>";
if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&
div.firstChild.getAttribute("href")!=="#"){
Expr.attrHandle.href=function(elem){
return elem.getAttribute("href",2)}}
div=null;
})();
if(document.querySelectorAll){
(function(){
var oldSizzle=Sizzle,div=document.createElement("div");
div.innerHTML="<p class='TEST'></p>";
if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){
return;
}
Sizzle=function(query,context,extra,seed){
context=context||document;
if(!seed&&context.nodeType===9&&!Sizzle.isXML(context)){
try{
return makeArray(context.querySelectorAll(query),extra)}catch(e){}}
return oldSizzle(query,context,extra,seed)};
for(var prop in oldSizzle){
Sizzle[prop]=oldSizzle[prop];
}
div=null;
})()}
(function(){
var div=document.createElement("div");
div.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!div.getElementsByClassName||div.getElementsByClassName("e").length===0){
return;
}
div.lastChild.className="e";
if(div.getElementsByClassName("e").length===1){
return;
}
Expr.order.splice(1,0,"CLASS");
Expr.find.CLASS=function(match,context,isXML){
if(typeof context.getElementsByClassName!=="undefined"&&!isXML){
return context.getElementsByClassName(match[1])}};
div=null;
})();
function dirNodeCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){
for(var i=0,l=checkSet.length;i<l;i++){
var elem=checkSet[i];
if(elem){
elem=elem[dir];
var match=false;
while(elem){
if(elem.sizcache===doneName){
match=checkSet[elem.sizset];
break;
}
if(elem.nodeType===1&&!isXML){
elem.sizcache=doneName;
elem.sizset=i;
}
if(elem.nodeName.toLowerCase()===cur){
match=elem;
break;
}
elem=elem[dir];
}
checkSet[i]=match;
}}}
function dirCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){
for(var i=0,l=checkSet.length;i<l;i++){
var elem=checkSet[i];
if(elem){
elem=elem[dir];
var match=false;
while(elem){
if(elem.sizcache===doneName){
match=checkSet[elem.sizset];
break;
}
if(elem.nodeType===1){
if(!isXML){
elem.sizcache=doneName;
elem.sizset=i;
}
if(typeof cur!=="string"){
if(elem===cur){
match=true;
break;
}}else if(Sizzle.filter(cur,[elem]).length>0){
match=elem;
break;
}}
elem=elem[dir];
}
checkSet[i]=match;
}}}
Sizzle.contains=document.compareDocumentPosition?function(a,b){
return!!(a.compareDocumentPosition(b)&16)}:function(a,b){
return a!==b&&(a.contains?a.contains(b):true)};
Sizzle.isXML=function(elem){
var documentElement=(elem?elem.ownerDocument||elem:0).documentElement;
return documentElement?documentElement.nodeName!=="HTML":false;
};
var posProcess=function(selector,context){
var tmpSet=[],later="",match,
root=context.nodeType?[context]:context;
while((match=Expr.match.PSEUDO.exec(selector))){
later+=match[0];
selector=selector.replace(Expr.match.PSEUDO,"")}
selector=Expr.relative[selector]?selector+"*":selector;
for(var i=0,l=root.length;i<l;i++){
Sizzle(selector,root[i],tmpSet)}
return Sizzle.filter(later,tmpSet)};
window.tinymce.dom.Sizzle=Sizzle;
})();
(function(tinymce){
var each=tinymce.each,DOM=tinymce.DOM,isIE=tinymce.isIE,isWebKit=tinymce.isWebKit,Event;
tinymce.create('tinymce.dom.EventUtils',{
EventUtils:function(){
this.inits=[];
this.events=[];
},
add:function(o,n,f,s){
var cb,t=this,el=t.events,r;
if(n instanceof Array){
r=[];
each(n,function(n){
r.push(t.add(o,n,f,s))});
return r;
}
if(o&&o.hasOwnProperty&&o instanceof Array){
r=[];
each(o,function(o){
o=DOM.get(o);
r.push(t.add(o,n,f,s))});
return r;
}
o=DOM.get(o);
if(!o)
return;
cb=function(e){
if(t.disabled)
return;
e=e||window.event;
if(e&&isIE){
if(!e.target)
e.target=e.srcElement;
tinymce.extend(e,t._stoppers)}
if(!s)
return f(e);
return f.call(s,e)};
if(n=='unload'){
tinymce.unloads.unshift({func:cb});
return cb;
}
if(n=='init'){
if(t.domLoaded)
cb();
else
t.inits.push(cb);
return cb;
}
el.push({
obj:o,
name:n,
func:f,
cfunc:cb,
scope:s
});
t._add(o,n,cb);
return f;
},
remove:function(o,n,f){
var t=this,a=t.events,s=false,r;
if(o&&o.hasOwnProperty&&o instanceof Array){
r=[];
each(o,function(o){
o=DOM.get(o);
r.push(t.remove(o,n,f))});
return r;
}
o=DOM.get(o);
each(a,function(e,i){
if(e.obj==o&&e.name==n&&(!f||(e.func==f||e.cfunc==f))){
a.splice(i,1);
t._remove(o,n,e.cfunc);
s=true;
return false;
}});
return s;
},
clear:function(o){
var t=this,a=t.events,i,e;
if(o){
o=DOM.get(o);
for(i=a.length-1;i>=0;i--){
e=a[i];
if(e.obj===o){
t._remove(e.obj,e.name,e.cfunc);
e.obj=e.cfunc=null;
a.splice(i,1)}}}},
cancel:function(e){
if(!e)
return false;
this.stop(e);
return this.prevent(e)},
stop:function(e){
if(e.stopPropagation)
e.stopPropagation();
else
e.cancelBubble=true;
return false;
},
prevent:function(e){
if(e.preventDefault)
e.preventDefault();
else
e.returnValue=false;
return false;
},
destroy:function(){
var t=this;
each(t.events,function(e,i){
t._remove(e.obj,e.name,e.cfunc);
e.obj=e.cfunc=null;
});
t.events=[];
t=null;
},
_add:function(o,n,f){
if(o.attachEvent)
o.attachEvent('on'+n,f);
else if(o.addEventListener)
o.addEventListener(n,f,false);
else
o['on'+n]=f;
},
_remove:function(o,n,f){
if(o){
try{
if(o.detachEvent)
o.detachEvent('on'+n,f);
else if(o.removeEventListener)
o.removeEventListener(n,f,false);
else
o['on'+n]=null;
}catch(ex){
}}},
_pageInit:function(win){
var t=this;
if(t.domLoaded)
return;
t.domLoaded=true;
each(t.inits,function(c){
c()});
t.inits=[];
},
_wait:function(win){
var t=this,doc=win.document;
if(win.tinyMCE_GZ&&tinyMCE_GZ.loaded){
t.domLoaded=1;
return;
}
if(doc.attachEvent){
doc.attachEvent("onreadystatechange",function(){
if(doc.readyState==="complete"){
doc.detachEvent("onreadystatechange",arguments.callee);
t._pageInit(win)}});
if(doc.documentElement.doScroll&&win==win.top){
(function(){
if(t.domLoaded)
return;
try{
doc.documentElement.doScroll("left")}catch(ex){
setTimeout(arguments.callee,0);
return;
}
t._pageInit(win)})()}}else if(doc.addEventListener){
t._add(win,'DOMContentLoaded',function(){
t._pageInit(win)})}
t._add(win,'load',function(){
t._pageInit(win)})},
_stoppers:{
preventDefault:function(){
this.returnValue=false;
},
stopPropagation:function(){
this.cancelBubble=true;
}}});
Event=tinymce.dom.Event=new tinymce.dom.EventUtils();
Event._wait(window);
tinymce.addUnload(function(){
Event.destroy()})})(tinymce);
(function(tinymce){
tinymce.dom.Element=function(id,settings){
var t=this,dom,el;
t.settings=settings=settings||{};
t.id=id;
t.dom=dom=settings.dom||tinymce.DOM;
if(!tinymce.isIE)
el=dom.get(t.id);
tinymce.each(
('getPos,getRect,getParent,add,setStyle,getStyle,setStyles,'+
'setAttrib,setAttribs,getAttrib,addClass,removeClass,'+
'hasClass,getOuterHTML,setOuterHTML,remove,show,hide,'+
'isHidden,setHTML,get').split(/,/)
,function(k){
t[k]=function(){
var a=[id],i;
for(i=0;i<arguments.length;i++)
a.push(arguments[i]);
a=dom[k].apply(dom,a);
t.update(k);
return a;
}});
tinymce.extend(t,{
on:function(n,f,s){
return tinymce.dom.Event.add(t.id,n,f,s)},
getXY:function(){
return{
x:parseInt(t.getStyle('left')),
y:parseInt(t.getStyle('top'))}},
getSize:function(){
var n=dom.get(t.id);
return{
w:parseInt(t.getStyle('width')||n.clientWidth),
h:parseInt(t.getStyle('height')||n.clientHeight)}},
moveTo:function(x,y){
t.setStyles({left:x,top:y})},
moveBy:function(x,y){
var p=t.getXY();
t.moveTo(p.x+x,p.y+y)},
resizeTo:function(w,h){
t.setStyles({width:w,height:h})},
resizeBy:function(w,h){
var s=t.getSize();
t.resizeTo(s.w+w,s.h+h)},
update:function(k){
var b;
if(tinymce.isIE6&&settings.blocker){
k=k||'';
if(k.indexOf('get')===0||k.indexOf('has')===0||k.indexOf('is')===0)
return;
if(k=='remove'){
dom.remove(t.blocker);
return;
}
if(!t.blocker){
t.blocker=dom.uniqueId();
b=dom.add(settings.container||dom.getRoot(),'iframe',{id:t.blocker,style:'position:absolute;',frameBorder:0,src:'javascript:""'});
dom.setStyle(b,'opacity',0)}else
b=dom.get(t.blocker);
dom.setStyles(b,{
left:t.getStyle('left',1),
top:t.getStyle('top',1),
width:t.getStyle('width',1),
height:t.getStyle('height',1),
display:t.getStyle('display',1),
zIndex:parseInt(t.getStyle('zIndex',1)||0)-1
})}}})}})(tinymce);
(function(tinymce){
function trimNl(s){
return s.replace(/[\n\r]+/g,'')};
var is=tinymce.is,isIE=tinymce.isIE,each=tinymce.each;
tinymce.create('tinymce.dom.Selection',{
Selection:function(dom,win,serializer){
var t=this;
t.dom=dom;
t.win=win;
t.serializer=serializer;
each([
'onBeforeSetContent',
'onBeforeGetContent',
'onSetContent',
'onGetContent'
],function(e){
t[e]=new tinymce.util.Dispatcher(t)});
if(!t.win.getSelection)
t.tridentSel=new tinymce.dom.TridentSelection(t);
if(tinymce.isIE&&dom.boxModel)
this._fixIESelection();
tinymce.addUnload(t.destroy,t)},
getContent:function(s){
var t=this,r=t.getRng(),e=t.dom.create("body"),se=t.getSel(),wb,wa,n;
s=s||{};
wb=wa='';
s.get=true;
s.format=s.format||'html';
t.onBeforeGetContent.dispatch(t,s);
if(s.format=='text')
return t.isCollapsed()?'':(r.text||(se.toString?se.toString():''));
if(r.cloneContents){
n=r.cloneContents();
if(n)
e.appendChild(n)}else if(is(r.item)||is(r.htmlText))
e.innerHTML=r.item?r.item(0).outerHTML:r.htmlText;
else
e.innerHTML=r.toString();
if(/^\s/.test(e.innerHTML))
wb=' ';
if(/\s+$/.test(e.innerHTML))
wa=' ';
s.getInner=true;
s.content=t.isCollapsed()?'':wb+t.serializer.serialize(e,s)+wa;
t.onGetContent.dispatch(t,s);
return s.content;
},
setContent:function(h,s){
var t=this,r=t.getRng(),c,d=t.win.document;
s=s||{format:'html'};
s.set=true;
h=s.content=t.dom.processHTML(h);
t.onBeforeSetContent.dispatch(t,s);
h=s.content;
if(r.insertNode){
h+='<span id="__caret">_</span>';
if(r.startContainer==d&&r.endContainer==d){
d.body.innerHTML=h;
}else{
r.deleteContents();
if(d.body.childNodes.length==0){
d.body.innerHTML=h;
}else{
if(r.createContextualFragment){
r.insertNode(r.createContextualFragment(h))}else{
var frag=d.createDocumentFragment(),temp=d.createElement('div');
frag.appendChild(temp);
temp.outerHTML=h;
r.insertNode(frag)}}}
c=t.dom.get('__caret');
r=d.createRange();
r.setStartBefore(c);
r.setEndBefore(c);
t.setRng(r);
t.dom.remove('__caret')}else{
if(r.item){
d.execCommand('Delete',false,null);
r=t.getRng()}
r.pasteHTML(h)}
t.onSetContent.dispatch(t,s)},
getStart:function(){
var rng=this.getRng(),startElement,parentElement,checkRng,node;
if(rng.duplicate||rng.item){
if(rng.item)
return rng.item(0);
checkRng=rng.duplicate();
checkRng.collapse(1);
startElement=checkRng.parentElement();
parentElement=node=rng.parentElement();
while(node=node.parentNode){
if(node==startElement){
startElement=parentElement;
break;
}}
if(startElement&&startElement.nodeName=='BODY')
return startElement.firstChild||startElement;
return startElement;
}else{
startElement=rng.startContainer;
if(startElement.nodeType==1&&startElement.hasChildNodes())
startElement=startElement.childNodes[Math.min(startElement.childNodes.length-1,rng.startOffset)];
if(startElement&&startElement.nodeType==3)
return startElement.parentNode;
return startElement;
}},
getEnd:function(){
var t=this,r=t.getRng(),e,eo;
if(r.duplicate||r.item){
if(r.item)
return r.item(0);
r=r.duplicate();
r.collapse(0);
e=r.parentElement();
if(e&&e.nodeName=='BODY')
return e.lastChild||e;
return e;
}else{
e=r.endContainer;
eo=r.endOffset;
if(e.nodeType==1&&e.hasChildNodes())
e=e.childNodes[eo>0?eo-1:eo];
if(e&&e.nodeType==3)
return e.parentNode;
return e;
}},
getBookmark:function(type,normalized){
var t=this,dom=t.dom,rng,rng2,id,collapsed,name,element,index,chr='\uFEFF',styles;
function findIndex(name,element){
var index=0;
each(dom.select(name),function(node,i){
if(node==element)
index=i;
});
return index;
};
if(type==2){
function getLocation(){
var rng=t.getRng(true),root=dom.getRoot(),bookmark={};
function getPoint(rng,start){
var container=rng[start?'startContainer':'endContainer'],
offset=rng[start?'startOffset':'endOffset'],point=[],node,childNodes,after=0;
if(container.nodeType==3){
if(normalized){
for(node=container.previousSibling;node&&node.nodeType==3;node=node.previousSibling)
offset+=node.nodeValue.length;
}
point.push(offset)}else{
childNodes=container.childNodes;
if(offset>=childNodes.length&&childNodes.length){
after=1;
offset=Math.max(0,childNodes.length-1)}
point.push(t.dom.nodeIndex(childNodes[offset],normalized)+after)}
for(;container&&container!=root;container=container.parentNode)
point.push(t.dom.nodeIndex(container,normalized));
return point;
};
bookmark.start=getPoint(rng,true);
if(!t.isCollapsed())
bookmark.end=getPoint(rng);
return bookmark;
};
return getLocation()}
if(type)
return{rng:t.getRng()};
rng=t.getRng();
id=dom.uniqueId();
collapsed=tinyMCE.activeEditor.selection.isCollapsed();
styles='overflow:hidden;line-height:0px';
if(rng.duplicate||rng.item){
if(!rng.item){
rng2=rng.duplicate();
rng.collapse();
rng.pasteHTML('<span _mce_type="bookmark" id="'+id+'_start" style="'+styles+'">'+chr+'</span>');
if(!collapsed){
rng2.collapse(false);
rng2.pasteHTML('<span _mce_type="bookmark" id="'+id+'_end" style="'+styles+'">'+chr+'</span>')}}else{
element=rng.item(0);
name=element.nodeName;
return{name:name,index:findIndex(name,element)}}}else{
element=t.getNode();
name=element.nodeName;
if(name=='IMG')
return{name:name,index:findIndex(name,element)};
rng2=rng.cloneRange();
if(!collapsed){
rng2.collapse(false);
rng2.insertNode(dom.create('span',{_mce_type:"bookmark",id:id+'_end',style:styles},chr))}
rng.collapse(true);
rng.insertNode(dom.create('span',{_mce_type:"bookmark",id:id+'_start',style:styles},chr))}
t.moveToBookmark({id:id,keep:1});
return{id:id}},
moveToBookmark:function(bookmark){
var t=this,dom=t.dom,marker1,marker2,rng,root,startContainer,endContainer,startOffset,endOffset;
if(t.tridentSel)
t.tridentSel.destroy();
if(bookmark){
if(bookmark.start){
rng=dom.createRng();
root=dom.getRoot();
function setEndPoint(start){
var point=bookmark[start?'start':'end'],i,node,offset,children;
if(point){
for(node=root,i=point.length-1;i>=1;i--){
children=node.childNodes;
if(children.length)
node=children[point[i]];
}
if(start)
rng.setStart(node,point[0]);
else
rng.setEnd(node,point[0])}};
setEndPoint(true);
setEndPoint();
t.setRng(rng)}else if(bookmark.id){
function restoreEndPoint(suffix){
var marker=dom.get(bookmark.id+'_'+suffix),node,idx,next,prev,keep=bookmark.keep;
if(marker){
node=marker.parentNode;
if(suffix=='start'){
if(!keep){
idx=dom.nodeIndex(marker)}else{
node=marker.firstChild;
idx=1;
}
startContainer=endContainer=node;
startOffset=endOffset=idx;
}else{
if(!keep){
idx=dom.nodeIndex(marker)}else{
node=marker.firstChild;
idx=1;
}
endContainer=node;
endOffset=idx;
}
if(!keep){
prev=marker.previousSibling;
next=marker.nextSibling;
each(tinymce.grep(marker.childNodes),function(node){
if(node.nodeType==3)
node.nodeValue=node.nodeValue.replace(/\uFEFF/g,'')});
while(marker=dom.get(bookmark.id+'_'+suffix))
dom.remove(marker,1);
if(prev&&next&&prev.nodeType==next.nodeType&&prev.nodeType==3&&!tinymce.isOpera){
idx=prev.nodeValue.length;
prev.appendData(next.nodeValue);
dom.remove(next);
if(suffix=='start'){
startContainer=endContainer=prev;
startOffset=endOffset=idx;
}else{
endContainer=prev;
endOffset=idx;
}}}}};
function addBogus(node){
if(!isIE&&dom.isBlock(node)&&!node.innerHTML)
node.innerHTML='<br _mce_bogus="1" />';
return node;
};
restoreEndPoint('start');
restoreEndPoint('end');
if(startContainer){
rng=dom.createRng();
rng.setStart(addBogus(startContainer),startOffset);
rng.setEnd(addBogus(endContainer),endOffset);
t.setRng(rng)}}else if(bookmark.name){
t.select(dom.select(bookmark.name)[bookmark.index])}else if(bookmark.rng)
t.setRng(bookmark.rng)}},
select:function(node,content){
var t=this,dom=t.dom,rng=dom.createRng(),idx;
idx=dom.nodeIndex(node);
rng.setStart(node.parentNode,idx);
rng.setEnd(node.parentNode,idx+1);
if(content){
function setPoint(node,start){
var walker=new tinymce.dom.TreeWalker(node,node);
do{
if(node.nodeType==3&&tinymce.trim(node.nodeValue).length!=0){
if(start)
rng.setStart(node,0);
else
rng.setEnd(node,node.nodeValue.length);
return;
}
if(node.nodeName=='BR'){
if(start)
rng.setStartBefore(node);
else
rng.setEndBefore(node);
return;
}}while(node=(start?walker.next():walker.prev()))};
setPoint(node,1);
setPoint(node)}
t.setRng(rng);
return node;
},
isCollapsed:function(){
var t=this,r=t.getRng(),s=t.getSel();
if(!r||r.item)
return false;
if(r.compareEndPoints)
return r.compareEndPoints('StartToEnd',r)===0;
return!s||r.collapsed;
},
collapse:function(b){
var t=this,r=t.getRng(),n;
if(r.item){
n=r.item(0);
r=this.win.document.body.createTextRange();
r.moveToElementText(n)}
r.collapse(!!b);
t.setRng(r)},
getSel:function(){
var t=this,w=this.win;
return w.getSelection?w.getSelection():w.document.selection;
},
getRng:function(w3c){
var t=this,s,r,elm,doc=t.win.document;
if(w3c&&t.tridentSel)
return t.tridentSel.getRangeAt(0);
try{
if(s=t.getSel())
r=s.rangeCount>0?s.getRangeAt(0):(s.createRange?s.createRange():doc.createRange())}catch(ex){
}
if(tinymce.isIE&&r.setStart&&doc.selection.createRange().item){
elm=doc.selection.createRange().item(0);
r=doc.createRange();
r.setStartBefore(elm);
r.setEndAfter(elm)}
if(!r)
r=doc.createRange?doc.createRange():doc.body.createTextRange();
if(t.selectedRange&&t.explicitRange){
if(r.compareBoundaryPoints(r.START_TO_START,t.selectedRange)===0&&r.compareBoundaryPoints(r.END_TO_END,t.selectedRange)===0){
r=t.explicitRange;
}else{
t.selectedRange=null;
t.explicitRange=null;
}}
return r;
},
setRng:function(r){
var s,t=this;
if(!t.tridentSel){
s=t.getSel();
if(s){
t.explicitRange=r;
s.removeAllRanges();
s.addRange(r);
t.selectedRange=s.getRangeAt(0)}}else{
if(r.cloneRange){
t.tridentSel.addRange(r);
return;
}
try{
r.select()}catch(ex){
}}},
setNode:function(n){
var t=this;
t.setContent(t.dom.getOuterHTML(n));
return n;
},
getNode:function(){
var t=this,rng=t.getRng(),sel=t.getSel(),elm;
if(rng.setStart){
if(!rng)
return t.dom.getRoot();
elm=rng.commonAncestorContainer;
if(!rng.collapsed){
if(rng.startContainer==rng.endContainer){
if(rng.startOffset-rng.endOffset<2){
if(rng.startContainer.hasChildNodes())
elm=rng.startContainer.childNodes[rng.startOffset];
}}
if(tinymce.isWebKit&&sel.anchorNode&&sel.anchorNode.nodeType==1)
return sel.anchorNode.childNodes[sel.anchorOffset];
}
if(elm&&elm.nodeType==3)
return elm.parentNode;
return elm;
}
return rng.item?rng.item(0):rng.parentElement()},
getSelectedBlocks:function(st,en){
var t=this,dom=t.dom,sb,eb,n,bl=[];
sb=dom.getParent(st||t.getStart(),dom.isBlock);
eb=dom.getParent(en||t.getEnd(),dom.isBlock);
if(sb)
bl.push(sb);
if(sb&&eb&&sb!=eb){
n=sb;
while((n=n.nextSibling)&&n!=eb){
if(dom.isBlock(n))
bl.push(n)}}
if(eb&&sb!=eb)
bl.push(eb);
return bl;
},
destroy:function(s){
var t=this;
t.win=null;
if(t.tridentSel)
t.tridentSel.destroy();
if(!s)
tinymce.removeUnload(t.destroy)},
_fixIESelection:function(){
var dom=this.dom,doc=dom.doc,body=doc.body,started,startRng;
doc.documentElement.unselectable=true;
function rngFromPoint(x,y){
var rng=body.createTextRange();
try{
rng.moveToPoint(x,y)}catch(ex){
rng=null;
}
return rng;
};
function selectionChange(e){
var pointRng;
if(e.button){
pointRng=rngFromPoint(e.x,e.y);
if(pointRng){
if(pointRng.compareEndPoints('StartToStart',startRng)>0)
pointRng.setEndPoint('StartToStart',startRng);
else
pointRng.setEndPoint('EndToEnd',startRng);
pointRng.select()}}else
endSelection()}
function endSelection(){
dom.unbind(doc,'mouseup',endSelection);
dom.unbind(doc,'mousemove',selectionChange);
started=0;
};
dom.bind(doc,'mousedown',function(e){
if(e.target.nodeName==='HTML'){
if(started)
endSelection();
started=1;
startRng=rngFromPoint(e.x,e.y);
if(startRng){
dom.bind(doc,'mouseup',endSelection);
dom.bind(doc,'mousemove',selectionChange);
dom.win.focus();
startRng.select()}}})}})})(tinymce);
(function(tinymce){
tinymce.create('tinymce.dom.XMLWriter',{
node:null,
XMLWriter:function(s){
function getXML(){
var i=document.implementation;
if(!i||!i.createDocument){
try{return new ActiveXObject('MSXML2.DOMDocument');}catch(ex){}
try{return new ActiveXObject('Microsoft.XmlDom');}catch(ex){}}else
return i.createDocument('','',null)};
this.doc=getXML();
this.valid=tinymce.isOpera||tinymce.isWebKit;
this.reset()},
reset:function(){
var t=this,d=t.doc;
if(d.firstChild)
d.removeChild(d.firstChild);
t.node=d.appendChild(d.createElement("html"))},
writeStartElement:function(n){
var t=this;
t.node=t.node.appendChild(t.doc.createElement(n))},
writeAttribute:function(n,v){
if(this.valid)
v=v.replace(/>/g,'%MCGT%');
this.node.setAttribute(n,v)},
writeEndElement:function(){
this.node=this.node.parentNode;
},
writeFullEndElement:function(){
var t=this,n=t.node;
n.appendChild(t.doc.createTextNode(""));
t.node=n.parentNode;
},
writeText:function(v){
if(this.valid)
v=v.replace(/>/g,'%MCGT%');
this.node.appendChild(this.doc.createTextNode(v))},
writeCDATA:function(v){
this.node.appendChild(this.doc.createCDATASection(v))},
writeComment:function(v){
if(tinymce.isIE)
v=v.replace(/^\-|\-$/g,' ');
this.node.appendChild(this.doc.createComment(v.replace(/\-\-/g,' ')))},
getContent:function(){
var h;
h=this.doc.xml||new XMLSerializer().serializeToString(this.doc);
h=h.replace(/<\?[^?]+\?>|<html[^>]*>|<\/html>|<html\/>|<!DOCTYPE[^>]+>/g,'');
h=h.replace(/ ?\/>/g,' />');
if(this.valid)
h=h.replace(/\%MCGT%/g,'&gt;');
return h;
}})})(tinymce);
(function(tinymce){
var attrsCharsRegExp=/[&\"<>]/g,textCharsRegExp=/[<>&]/g,encodedChars={'&':'&amp;','"':'&quot;','<':'&lt;','>':'&gt;'};
tinymce.create('tinymce.dom.StringWriter',{
str:null,
tags:null,
count:0,
settings:null,
indent:null,
StringWriter:function(s){
this.settings=tinymce.extend({
indent_char:' ',
indentation:0
},s);
this.reset()},
reset:function(){
this.indent='';
this.str="";
this.tags=[];
this.count=0;
},
writeStartElement:function(n){
this._writeAttributesEnd();
this.writeRaw('<'+n);
this.tags.push(n);
this.inAttr=true;
this.count++;
this.elementCount=this.count;
this.attrs={}},
writeAttribute:function(n,v){
var t=this;
if(!t.attrs[n]){
t.writeRaw(" "+t.encode(n,true)+'="'+t.encode(v,true)+'"');
t.attrs[n]=v;
}},
writeEndElement:function(){
var n;
if(this.tags.length>0){
n=this.tags.pop();
if(this._writeAttributesEnd(1))
this.writeRaw('</'+n+'>');
if(this.settings.indentation>0)
this.writeRaw('\n')}},
writeFullEndElement:function(){
if(this.tags.length>0){
this._writeAttributesEnd();
this.writeRaw('</'+this.tags.pop()+'>');
if(this.settings.indentation>0)
this.writeRaw('\n')}},
writeText:function(v){
this._writeAttributesEnd();
this.writeRaw(this.encode(v));
this.count++;
},
writeCDATA:function(v){
this._writeAttributesEnd();
this.writeRaw('<![CDATA['+v+']]>');
this.count++;
},
writeComment:function(v){
this._writeAttributesEnd();
this.writeRaw('<!--'+v+'-->');
this.count++;
},
writeRaw:function(v){
this.str+=v;
},
encode:function(s,attr){
return s.replace(attr?attrsCharsRegExp:textCharsRegExp,function(v){
return encodedChars[v];
})},
getContent:function(){
return this.str;
},
_writeAttributesEnd:function(s){
if(!this.inAttr)
return;
this.inAttr=false;
if(s&&this.elementCount==this.count){
this.writeRaw(' />');
return false;
}
this.writeRaw('>');
return true;
}})})(tinymce);
(function(tinymce){
var extend=tinymce.extend,each=tinymce.each,Dispatcher=tinymce.util.Dispatcher,isIE=tinymce.isIE,isGecko=tinymce.isGecko;
function wildcardToRE(s){
return s.replace(/([?+*])/g,'.$1')};
tinymce.create('tinymce.dom.Serializer',{
Serializer:function(s){
var t=this;
t.key=0;
t.onPreProcess=new Dispatcher(t);
t.onPostProcess=new Dispatcher(t);
try{
t.writer=new tinymce.dom.XMLWriter()}catch(ex){
t.writer=new tinymce.dom.StringWriter()}
if(tinymce.isIE&&document.documentMode>8){
t.writer=new tinymce.dom.StringWriter()}
t.settings=s=extend({
dom:tinymce.DOM,
valid_nodes:0,
node_filter:0,
attr_filter:0,
invalid_attrs:/^(_mce_|_moz_|sizset|sizcache)/,
closed:/^(br|hr|input|meta|img|link|param|area)$/,
entity_encoding:'named',
entities:'160,nbsp,161,iexcl,162,cent,163,pound,164,curren,165,yen,166,brvbar,167,sect,168,uml,169,copy,170,ordf,171,laquo,172,not,173,shy,174,reg,175,macr,176,deg,177,plusmn,178,sup2,179,sup3,180,acute,181,micro,182,para,183,middot,184,cedil,185,sup1,186,ordm,187,raquo,188,frac14,189,frac12,190,frac34,191,iquest,192,Agrave,193,Aacute,194,Acirc,195,Atilde,196,Auml,197,Aring,198,AElig,199,Ccedil,200,Egrave,201,Eacute,202,Ecirc,203,Euml,204,Igrave,205,Iacute,206,Icirc,207,Iuml,208,ETH,209,Ntilde,210,Ograve,211,Oacute,212,Ocirc,213,Otilde,214,Ouml,215,times,216,Oslash,217,Ugrave,218,Uacute,219,Ucirc,220,Uuml,221,Yacute,222,THORN,223,szlig,224,agrave,225,aacute,226,acirc,227,atilde,228,auml,229,aring,230,aelig,231,ccedil,232,egrave,233,eacute,234,ecirc,235,euml,236,igrave,237,iacute,238,icirc,239,iuml,240,eth,241,ntilde,242,ograve,243,oacute,244,ocirc,245,otilde,246,ouml,247,divide,248,oslash,249,ugrave,250,uacute,251,ucirc,252,uuml,253,yacute,254,thorn,255,yuml,402,fnof,913,Alpha,914,Beta,915,Gamma,916,Delta,917,Epsilon,918,Zeta,919,Eta,920,Theta,921,Iota,922,Kappa,923,Lambda,924,Mu,925,Nu,926,Xi,927,Omicron,928,Pi,929,Rho,931,Sigma,932,Tau,933,Upsilon,934,Phi,935,Chi,936,Psi,937,Omega,945,alpha,946,beta,947,gamma,948,delta,949,epsilon,950,zeta,951,eta,952,theta,953,iota,954,kappa,955,lambda,956,mu,957,nu,958,xi,959,omicron,960,pi,961,rho,962,sigmaf,963,sigma,964,tau,965,upsilon,966,phi,967,chi,968,psi,969,omega,977,thetasym,978,upsih,982,piv,8226,bull,8230,hellip,8242,prime,8243,Prime,8254,oline,8260,frasl,8472,weierp,8465,image,8476,real,8482,trade,8501,alefsym,8592,larr,8593,uarr,8594,rarr,8595,darr,8596,harr,8629,crarr,8656,lArr,8657,uArr,8658,rArr,8659,dArr,8660,hArr,8704,forall,8706,part,8707,exist,8709,empty,8711,nabla,8712,isin,8713,notin,8715,ni,8719,prod,8721,sum,8722,minus,8727,lowast,8730,radic,8733,prop,8734,infin,8736,ang,8743,and,8744,or,8745,cap,8746,cup,8747,int,8756,there4,8764,sim,8773,cong,8776,asymp,8800,ne,8801,equiv,8804,le,8805,ge,8834,sub,8835,sup,8836,nsub,8838,sube,8839,supe,8853,oplus,8855,otimes,8869,perp,8901,sdot,8968,lceil,8969,rceil,8970,lfloor,8971,rfloor,9001,lang,9002,rang,9674,loz,9824,spades,9827,clubs,9829,hearts,9830,diams,338,OElig,339,oelig,352,Scaron,353,scaron,376,Yuml,710,circ,732,tilde,8194,ensp,8195,emsp,8201,thinsp,8204,zwnj,8205,zwj,8206,lrm,8207,rlm,8211,ndash,8212,mdash,8216,lsquo,8217,rsquo,8218,sbquo,8220,ldquo,8221,rdquo,8222,bdquo,8224,dagger,8225,Dagger,8240,permil,8249,lsaquo,8250,rsaquo,8364,euro',
valid_elements:'*[*]',
extended_valid_elements:0,
invalid_elements:0,
fix_table_elements:1,
fix_list_elements:true,
fix_content_duplication:true,
convert_fonts_to_spans:false,
font_size_classes:0,
apply_source_formatting:0,
indent_mode:'simple',
indent_char:'\t',
indent_levels:1,
remove_linebreaks:1,
remove_redundant_brs:1,
element_format:'xhtml'
},s);
t.dom=s.dom;
t.schema=s.schema;
if(s.entity_encoding=='named'&&!s.entities)
s.entity_encoding='raw';
if(s.remove_redundant_brs){
t.onPostProcess.add(function(se,o){
o.content=o.content.replace(/(<br \/>\s*)+<\/(p|h[1-6]|div|li)>/gi,function(a,b,c){
if(/^<br \/>\s*<\//.test(a))
return'</'+c+'>';
return a;
})})}
if(s.element_format=='html'){
t.onPostProcess.add(function(se,o){
o.content=o.content.replace(/<([^>]+) \/>/g,'<$1>')})}
if(s.fix_list_elements){
t.onPreProcess.add(function(se,o){
var nl,x,a=['ol','ul'],i,n,p,r=/^(OL|UL)$/,np;
function prevNode(e,n){
var a=n.split(','),i;
while((e=e.previousSibling)!=null){
for(i=0;i<a.length;i++){
if(e.nodeName==a[i])
return e;
}}
return null;
};
for(x=0;x<a.length;x++){
nl=t.dom.select(a[x],o.node);
for(i=0;i<nl.length;i++){
n=nl[i];
p=n.parentNode;
if(r.test(p.nodeName)){
np=prevNode(n,'LI');
if(!np){
np=t.dom.create('li');
np.innerHTML='&nbsp;';
np.appendChild(n);
p.insertBefore(np,p.firstChild)}else
np.appendChild(n)}}}})}
if(s.fix_table_elements){
t.onPreProcess.add(function(se,o){
if(!tinymce.isOpera||opera.buildNumber()>=1767){
each(t.dom.select('p table',o.node).reverse(),function(n){
var parent=t.dom.getParent(n.parentNode,'table,p');
if(parent.nodeName!='TABLE'){
try{
t.dom.split(parent,n)}catch(ex){
}}})}})}},
setEntities:function(s){
var t=this,a,i,l={},v;
if(t.entityLookup)
return;
a=s.split(',');
for(i=0;i<a.length;i+=2){
v=a[i];
if(v==34||v==38||v==60||v==62)
continue;
l[String.fromCharCode(a[i])]=a[i+1];
v=parseInt(a[i]).toString(16)}
t.entityLookup=l;
},
setRules:function(s){
var t=this;
t._setup();
t.rules={};
t.wildRules=[];
t.validElements={};
return t.addRules(s)},
addRules:function(s){
var t=this,dr;
if(!s)
return;
t._setup();
each(s.split(','),function(s){
var p=s.split(/\[|\]/),tn=p[0].split('/'),ra,at,wat,va=[];
if(dr)
at=tinymce.extend([],dr.attribs);
if(p.length>1){
each(p[1].split('|'),function(s){
var ar={},i;
at=at||[];
s=s.replace(/::/g,'~');
s=/^([!\-])?([\w*.?~_\-]+|)([=:<])?(.+)?$/.exec(s);
s[2]=s[2].replace(/~/g,':');
if(s[1]=='!'){
ra=ra||[];
ra.push(s[2])}
if(s[1]=='-'){
for(i=0;i<at.length;i++){
if(at[i].name==s[2]){
at.splice(i,1);
return;
}}}
switch(s[3]){
case'=':
ar.defaultVal=s[4]||'';
break;
case':':
ar.forcedVal=s[4];
break;
case'<':
ar.validVals=s[4].split('?');
break;
}
if(/[*.?]/.test(s[2])){
wat=wat||[];
ar.nameRE=new RegExp('^'+wildcardToRE(s[2])+'$');
wat.push(ar)}else{
ar.name=s[2];
at.push(ar)}
va.push(s[2])})}
each(tn,function(s,i){
var pr=s.charAt(0),x=1,ru={};
if(dr){
if(dr.noEmpty)
ru.noEmpty=dr.noEmpty;
if(dr.fullEnd)
ru.fullEnd=dr.fullEnd;
if(dr.padd)
ru.padd=dr.padd;
}
switch(pr){
case'-':
ru.noEmpty=true;
break;
case'+':
ru.fullEnd=true;
break;
case'#':
ru.padd=true;
break;
default:
x=0;
}
tn[i]=s=s.substring(x);
t.validElements[s]=1;
if(/[*.?]/.test(tn[0])){
ru.nameRE=new RegExp('^'+wildcardToRE(tn[0])+'$');
t.wildRules=t.wildRules||{};
t.wildRules.push(ru)}else{
ru.name=tn[0];
if(tn[0]=='@')
dr=ru;
t.rules[s]=ru;
}
ru.attribs=at;
if(ra)
ru.requiredAttribs=ra;
if(wat){
s='';
each(va,function(v){
if(s)
s+='|';
s+='('+wildcardToRE(v)+')';
});
ru.validAttribsRE=new RegExp('^'+s.toLowerCase()+'$');
ru.wildAttribs=wat;
}})});
s='';
each(t.validElements,function(v,k){
if(s)
s+='|';
if(k!='@')
s+=k;
});
t.validElementsRE=new RegExp('^('+wildcardToRE(s.toLowerCase())+')$')},
findRule:function(n){
var t=this,rl=t.rules,i,r;
t._setup();
r=rl[n];
if(r)
return r;
rl=t.wildRules;
for(i=0;i<rl.length;i++){
if(rl[i].nameRE.test(n))
return rl[i];
}
return null;
},
findAttribRule:function(ru,n){
var i,wa=ru.wildAttribs;
for(i=0;i<wa.length;i++){
if(wa[i].nameRE.test(n))
return wa[i];
}
return null;
},
serialize:function(n,o){
var h,t=this,doc,oldDoc,impl,selected;
t._setup();
o=o||{};
o.format=o.format||'html';
t.processObj=o;
if(isIE){
selected=[];
each(n.getElementsByTagName('option'),function(n){
var v=t.dom.getAttrib(n,'selected');
selected.push(v?v:null)})}
n=n.cloneNode(true);
if(isIE){
each(n.getElementsByTagName('option'),function(n,i){
t.dom.setAttrib(n,'selected',selected[i])})}
impl=n.ownerDocument.implementation;
if(impl.createHTMLDocument&&(tinymce.isOpera&&opera.buildNumber()>=1767)){
doc=impl.createHTMLDocument("");
each(n.nodeName=='BODY'?n.childNodes:[n],function(node){
doc.body.appendChild(doc.importNode(node,true))});
if(n.nodeName!='BODY')
n=doc.body.firstChild;
else
n=doc.body;
oldDoc=t.dom.doc;
t.dom.doc=doc;
}
t.key=''+(parseInt(t.key)+1);
if(!o.no_events){
o.node=n;
t.onPreProcess.dispatch(t,o)}
t.writer.reset();
t._info=o;
t._serializeNode(n,o.getInner);
o.content=t.writer.getContent();
if(oldDoc)
t.dom.doc=oldDoc;
if(!o.no_events)
t.onPostProcess.dispatch(t,o);
t._postProcess(o);
o.node=null;
return tinymce.trim(o.content)},
_postProcess:function(o){
var t=this,s=t.settings,h=o.content,sc=[],p;
if(o.format=='html'){
p=t._protect({
content:h,
patterns:[
{pattern:/(<script[^>]*>)(.*?)(<\/script>)/g},
{pattern:/(<noscript[^>]*>)(.*?)(<\/noscript>)/g},
{pattern:/(<style[^>]*>)(.*?)(<\/style>)/g},
{pattern:/(<pre[^>]*>)(.*?)(<\/pre>)/g,encode:1},
{pattern:/(<!--\[CDATA\[)(.*?)(\]\]-->)/g}
]
});
h=p.content;
if(s.entity_encoding!=='raw')
h=t._encode(h);
if(!o.set){
h=tinymce._replace(/<p>\s+<\/p>|<p([^>]+)>\s+<\/p>/g,s.entity_encoding=='numeric'?'<p$1>&#160;</p>':'<p$1>&nbsp;</p>',h);
if(s.remove_linebreaks){
h=h.replace(/\r?\n|\r/g,' ');
h=tinymce._replace(/(<[^>]+>)\s+/g,'$1 ',h);
h=tinymce._replace(/\s+(<\/[^>]+>)/g,' $1',h);
h=tinymce._replace(/<(p|h[1-6]|blockquote|hr|div|table|tbody|tr|td|body|head|html|title|meta|style|pre|script|link|object) ([^>]+)>\s+/g,'<$1 $2>',h);
h=tinymce._replace(/<(p|h[1-6]|blockquote|hr|div|table|tbody|tr|td|body|head|html|title|meta|style|pre|script|link|object)>\s+/g,'<$1>',h);
h=tinymce._replace(/\s+<\/(p|h[1-6]|blockquote|hr|div|table|tbody|tr|td|body|head|html|title|meta|style|pre|script|link|object)>/g,'</$1>',h)}
if(s.apply_source_formatting&&s.indent_mode=='simple'){
h=tinymce._replace(/<(\/?)(ul|hr|table|meta|link|tbody|tr|object|body|head|html|map)(|[^>]+)>\s*/g,'\n<$1$2$3>\n',h);
h=tinymce._replace(/\s*<(p|h[1-6]|blockquote|div|title|style|pre|script|td|li|area)(|[^>]+)>/g,'\n<$1$2>',h);
h=tinymce._replace(/<\/(p|h[1-6]|blockquote|div|title|style|pre|script|td|li)>\s*/g,'</$1>\n',h);
h=h.replace(/\n\n/g,'\n')}}
h=t._unprotect(h,p);
h=tinymce._replace(/<!--\[CDATA\[([\s\S]+)\]\]-->/g,'<![CDATA[$1]]>',h);
if(s.entity_encoding=='raw')
h=tinymce._replace(/<p>&nbsp;<\/p>|<p([^>]+)>&nbsp;<\/p>/g,'<p$1>\u00a0</p>',h);
h=h.replace(/<noscript([^>]+|)>([\s\S]*?)<\/noscript>/g,function(v,attribs,text){
return'<noscript'+attribs+'>'+t.dom.decode(text.replace(/<!--|-->/g,''))+'</noscript>';
})}
o.content=h;
},
_serializeNode:function(n,inner){
var t=this,s=t.settings,w=t.writer,hc,el,cn,i,l,a,at,no,v,nn,ru,ar,iv,closed,keep,type,scopeName;
if(!s.node_filter||s.node_filter(n)){
switch(n.nodeType){
case 1:
if(n.hasAttribute?n.hasAttribute('_mce_bogus'):n.getAttribute('_mce_bogus'))
return;
iv=keep=false;
hc=n.hasChildNodes();
nn=n.getAttribute('_mce_name')||n.nodeName.toLowerCase();
type=n.getAttribute('_mce_type');
if(type){
if(!t._info.cleanup){
iv=true;
return;
}else
keep=1;
}
if(isIE){
scopeName=n.scopeName;
if(scopeName&&scopeName!=='HTML'&&scopeName!=='html')
nn=scopeName+':'+nn;
}
if(nn.indexOf('mce:')===0)
nn=nn.substring(4);
if(!keep){
if(!t.validElementsRE||!t.validElementsRE.test(nn)||(t.invalidElementsRE&&t.invalidElementsRE.test(nn))||inner){
iv=true;
break;
}}
if(isIE){
if(s.fix_content_duplication){
if(n._mce_serialized==t.key)
return;
n._mce_serialized=t.key;
}
if(nn.charAt(0)=='/')
nn=nn.substring(1)}else if(isGecko){
if(n.nodeName==='BR'&&n.getAttribute('type')=='_moz')
return;
}
if(s.validate_children){
if(t.elementName&&!t.schema.isValid(t.elementName,nn)){
iv=true;
break;
}
t.elementName=nn;
}
ru=t.findRule(nn);
if(!ru){
iv=true;
break;
}
nn=ru.name||nn;
closed=s.closed.test(nn);
if((!hc&&ru.noEmpty)||(isIE&&!nn)){
iv=true;
break;
}
if(ru.requiredAttribs){
a=ru.requiredAttribs;
for(i=a.length-1;i>=0;i--){
if(this.dom.getAttrib(n,a[i])!=='')
break;
}
if(i==-1){
iv=true;
break;
}}
w.writeStartElement(nn);
if(ru.attribs){
for(i=0,at=ru.attribs,l=at.length;i<l;i++){
a=at[i];
v=t._getAttrib(n,a);
if(v!==null)
w.writeAttribute(a.name,v)}}
if(ru.validAttribsRE){
at=t.dom.getAttribs(n);
for(i=at.length-1;i>-1;i--){
no=at[i];
if(no.specified){
a=no.nodeName.toLowerCase();
if(s.invalid_attrs.test(a)||!ru.validAttribsRE.test(a))
continue;
ar=t.findAttribRule(ru,a);
v=t._getAttrib(n,ar,a);
if(v!==null)
w.writeAttribute(a,v)}}}
if(type&&keep)
w.writeAttribute('_mce_type',type);
if(nn==='script'&&tinymce.trim(n.innerHTML)){
w.writeText('// ');
w.writeCDATA(n.innerHTML.replace(/<!--|-->|<\[CDATA\[|\]\]>/g,''));
hc=false;
break;
}
if(ru.padd){
if(hc&&(cn=n.firstChild)&&cn.nodeType===1&&n.childNodes.length===1){
if(cn.hasAttribute?cn.hasAttribute('_mce_bogus'):cn.getAttribute('_mce_bogus'))
w.writeText('\u00a0')}else if(!hc)
w.writeText('\u00a0')}
break;
case 3:
if(s.validate_children&&t.elementName&&!t.schema.isValid(t.elementName,'#text'))
return;
return w.writeText(n.nodeValue);
case 4:
return w.writeCDATA(n.nodeValue);
case 8:
return w.writeComment(n.nodeValue)}}else if(n.nodeType==1)
hc=n.hasChildNodes();
if(hc&&!closed){
cn=n.firstChild;
while(cn){
t._serializeNode(cn);
t.elementName=nn;
cn=cn.nextSibling;
}}
if(!iv){
if(!closed)
w.writeFullEndElement();
else
w.writeEndElement()}},
_protect:function(o){
var t=this;
o.items=o.items||[];
function enc(s){
return s.replace(/[\r\n\\]/g,function(c){
if(c==='\n')
return'\\n';
else if(c==='\\')
return'\\\\';
return'\\r';
})};
function dec(s){
return s.replace(/\\[\\rn]/g,function(c){
if(c==='\\n')
return'\n';
else if(c==='\\\\')
return'\\';
return'\r';
})};
each(o.patterns,function(p){
o.content=dec(enc(o.content).replace(p.pattern,function(x,a,b,c){
b=dec(b);
if(p.encode)
b=t._encode(b);
o.items.push(b);
return a+'<!--mce:'+(o.items.length-1)+'-->'+c;
}))});
return o;
},
_unprotect:function(h,o){
h=h.replace(/\<!--mce:([0-9]+)--\>/g,function(a,b){
return o.items[parseInt(b)];
});
o.items=[];
return h;
},
_encode:function(h){
var t=this,s=t.settings,l;
if(s.entity_encoding!=='raw'){
if(s.entity_encoding.indexOf('named')!=-1){
t.setEntities(s.entities);
l=t.entityLookup;
h=h.replace(/[\u007E-\uFFFF]/g,function(a){
var v;
if(v=l[a])
a='&'+v+';';
return a;
})}
if(s.entity_encoding.indexOf('numeric')!=-1){
h=h.replace(/[\u007E-\uFFFF]/g,function(a){
return'&#'+a.charCodeAt(0)+';';
})}}
return h;
},
_setup:function(){
var t=this,s=this.settings;
if(t.done)
return;
t.done=1;
t.setRules(s.valid_elements);
t.addRules(s.extended_valid_elements);
if(s.invalid_elements)
t.invalidElementsRE=new RegExp('^('+wildcardToRE(s.invalid_elements.replace(/,/g,'|').toLowerCase())+')$');
if(s.attrib_value_filter)
t.attribValueFilter=s.attribValueFilter;
},
_getAttrib:function(n,a,na){
var i,v;
na=na||a.name;
if(a.forcedVal&&(v=a.forcedVal)){
if(v==='{$uid}')
return this.dom.uniqueId();
return v;
}
v=this.dom.getAttrib(n,na);
switch(na){
case'rowspan':
case'colspan':
if(v=='1')
v='';
break;
}
if(this.attribValueFilter)
v=this.attribValueFilter(na,v,n);
if(a.validVals){
for(i=a.validVals.length-1;i>=0;i--){
if(v==a.validVals[i])
break;
}
if(i==-1)
return null;
}
if(v===''&&typeof(a.defaultVal)!='undefined'){
v=a.defaultVal;
if(v==='{$uid}')
return this.dom.uniqueId();
return v;
}else{
if(na=='class'&&this.processObj.get)
v=v.replace(/\s?mceItem\w+\s?/g,'')}
if(v==='')
return null;
return v;
}})})(tinymce);
(function(tinymce){
tinymce.dom.ScriptLoader=function(settings){
var QUEUED=0,
LOADING=1,
LOADED=2,
states={},
queue=[],
scriptLoadedCallbacks={},
queueLoadedCallbacks=[],
loading=0,
undefined;
function loadScript(url,callback){
var t=this,dom=tinymce.DOM,elm,uri,loc,id;
function done(){
dom.remove(id);
if(elm)
elm.onreadystatechange=elm.onload=elm=null;
callback()};
id=dom.uniqueId();
if(tinymce.isIE6){
uri=new tinymce.util.URI(url);
loc=location;
if(uri.host==loc.hostname&&uri.port==loc.port&&(uri.protocol+':')==loc.protocol){
tinymce.util.XHR.send({
url:tinymce._addVer(uri.getURI()),
success:function(content){
var script=dom.create('script',{
type:'text/javascript'
});
script.text=content;
document.getElementsByTagName('head')[0].appendChild(script);
dom.remove(script);
done()}});
return;
}}
elm=dom.create('script',{
id:id,
type:'text/javascript',
src:tinymce._addVer(url)});
if(!tinymce.isIE)
elm.onload=done;
elm.onreadystatechange=function(){
var state=elm.readyState;
if(state=='complete'||state=='loaded')
done()};
(document.getElementsByTagName('head')[0]||document.body).appendChild(elm)};
this.isDone=function(url){
return states[url]==LOADED;
};
this.markDone=function(url){
states[url]=LOADED;
};
this.add=this.load=function(url,callback,scope){
var item,state=states[url];
if(state==undefined){
queue.push(url);
states[url]=QUEUED;
}
if(callback){
if(!scriptLoadedCallbacks[url])
scriptLoadedCallbacks[url]=[];
scriptLoadedCallbacks[url].push({
func:callback,
scope:scope||this
})}};
this.loadQueue=function(callback,scope){
this.loadScripts(queue,callback,scope)};
this.loadScripts=function(scripts,callback,scope){
var loadScripts;
function execScriptLoadedCallbacks(url){
tinymce.each(scriptLoadedCallbacks[url],function(callback){
callback.func.call(callback.scope)});
scriptLoadedCallbacks[url]=undefined;
};
queueLoadedCallbacks.push({
func:callback,
scope:scope||this
});
loadScripts=function(){
var loadingScripts=tinymce.grep(scripts);
scripts.length=0;
tinymce.each(loadingScripts,function(url){
if(states[url]==LOADED){
execScriptLoadedCallbacks(url);
return;
}
if(states[url]!=LOADING){
states[url]=LOADING;
loading++;
loadScript(url,function(){
states[url]=LOADED;
loading--;
execScriptLoadedCallbacks(url);
loadScripts()})}});
if(!loading){
tinymce.each(queueLoadedCallbacks,function(callback){
callback.func.call(callback.scope)});
queueLoadedCallbacks.length=0;
}};
loadScripts()}};
tinymce.ScriptLoader=new tinymce.dom.ScriptLoader()})(tinymce);
tinymce.dom.TreeWalker=function(start_node,root_node){
var node=start_node;
function findSibling(node,start_name,sibling_name,shallow){
var sibling,parent;
if(node){
if(!shallow&&node[start_name])
return node[start_name];
if(node!=root_node){
sibling=node[sibling_name];
if(sibling)
return sibling;
for(parent=node.parentNode;parent&&parent!=root_node;parent=parent.parentNode){
sibling=parent[sibling_name];
if(sibling)
return sibling;
}}}};
this.current=function(){
return node;
};
this.next=function(shallow){
return(node=findSibling(node,'firstChild','nextSibling',shallow))};
this.prev=function(shallow){
return(node=findSibling(node,'lastChild','lastSibling',shallow))}};
(function(){
var transitional={};
function unpack(lookup,data){
var key;
function replace(value){
return value.replace(/[A-Z]+/g,function(key){
return replace(lookup[key])})};
for(key in lookup){
if(lookup.hasOwnProperty(key))
lookup[key]=replace(lookup[key])}
replace(data).replace(/#/g,'#text').replace(/(\w+)\[([^\]]+)\]/g,function(str,name,children){
var i,map={};
children=children.split(/\|/);
for(i=children.length-1;i>=0;i--)
map[children[i]]=1;
transitional[name]=map;
})};
unpack({
Z:'#|H|K|N|O|P',
Y:'#|X|form|R|Q',
X:'p|T|div|U|W|isindex|fieldset|table',
W:'pre|hr|blockquote|address|center|noframes',
U:'ul|ol|dl|menu|dir',
ZC:'#|p|Y|div|U|W|table|br|span|bdo|object|applet|img|map|K|N|Q',
T:'h1|h2|h3|h4|h5|h6',
ZB:'#|X|S|Q',
S:'R|P',
ZA:'#|a|G|J|M|O|P',
R:'#|a|H|K|N|O',
Q:'noscript|P',
P:'ins|del|script',
O:'input|select|textarea|label|button',
N:'M|L',
M:'em|strong|dfn|code|q|samp|kbd|var|cite|abbr|acronym',
L:'sub|sup',
K:'J|I',
J:'tt|i|b|u|s|strike',
I:'big|small|font|basefont',
H:'G|F',
G:'br|span|bdo',
F:'object|applet|img|map|iframe'
},'script[]'+
'style[]'+
'object[#|param|X|form|a|H|K|N|O|Q]'+
'param[]'+
'p[S]'+
'a[Z]'+
'br[]'+
'span[S]'+
'bdo[S]'+
'applet[#|param|X|form|a|H|K|N|O|Q]'+
'h1[S]'+
'img[]'+
'map[X|form|Q|area]'+
'h2[S]'+
'iframe[#|X|form|a|H|K|N|O|Q]'+
'h3[S]'+
'tt[S]'+
'i[S]'+
'b[S]'+
'u[S]'+
's[S]'+
'strike[S]'+
'big[S]'+
'small[S]'+
'font[S]'+
'basefont[]'+
'em[S]'+
'strong[S]'+
'dfn[S]'+
'code[S]'+
'q[S]'+
'samp[S]'+
'kbd[S]'+
'var[S]'+
'cite[S]'+
'abbr[S]'+
'acronym[S]'+
'sub[S]'+
'sup[S]'+
'input[]'+
'select[optgroup|option]'+
'optgroup[option]'+
'option[]'+
'textarea[]'+
'label[S]'+
'button[#|p|T|div|U|W|table|G|object|applet|img|map|K|N|Q]'+
'h4[S]'+
'ins[#|X|form|a|H|K|N|O|Q]'+
'h5[S]'+
'del[#|X|form|a|H|K|N|O|Q]'+
'h6[S]'+
'div[#|X|form|a|H|K|N|O|Q]'+
'ul[li]'+
'li[#|X|form|a|H|K|N|O|Q]'+
'ol[li]'+
'dl[dt|dd]'+
'dt[S]'+
'dd[#|X|form|a|H|K|N|O|Q]'+
'menu[li]'+
'dir[li]'+
'pre[ZA]'+
'hr[]'+
'blockquote[#|X|form|a|H|K|N|O|Q]'+
'address[S|p]'+
'center[#|X|form|a|H|K|N|O|Q]'+
'noframes[#|X|form|a|H|K|N|O|Q]'+
'isindex[]'+
'fieldset[#|legend|X|form|a|H|K|N|O|Q]'+
'legend[S]'+
'table[caption|col|colgroup|thead|tfoot|tbody|tr]'+
'caption[S]'+
'col[]'+
'colgroup[col]'+
'thead[tr]'+
'tr[th|td]'+
'th[#|X|form|a|H|K|N|O|Q]'+
'form[#|X|a|H|K|N|O|Q]'+
'noscript[#|X|form|a|H|K|N|O|Q]'+
'td[#|X|form|a|H|K|N|O|Q]'+
'tfoot[tr]'+
'tbody[tr]'+
'area[]'+
'base[]'+
'body[#|X|form|a|H|K|N|O|Q]'
);
tinymce.dom.Schema=function(){
var t=this,elements=transitional;
t.isValid=function(name,child_name){
var element=elements[name];
return!!(element&&(!child_name||element[child_name]))}}})();
(function(tinymce){
tinymce.dom.RangeUtils=function(dom){
var INVISIBLE_CHAR='\uFEFF';
this.walk=function(rng,callback){
var startContainer=rng.startContainer,
startOffset=rng.startOffset,
endContainer=rng.endContainer,
endOffset=rng.endOffset,
ancestor,startPoint,
endPoint,node,parent,siblings,nodes;
nodes=dom.select('td.mceSelected,th.mceSelected');
if(nodes.length>0){
tinymce.each(nodes,function(node){
callback([node])});
return;
}
function collectSiblings(node,name,end_node){
var siblings=[];
for(;node&&node!=end_node;node=node[name])
siblings.push(node);
return siblings;
};
function findEndPoint(node,root){
do{
if(node.parentNode==root)
return node;
node=node.parentNode;
}while(node)};
function walkBoundary(start_node,end_node,next){
var siblingName=next?'nextSibling':'previousSibling';
for(node=start_node,parent=node.parentNode;node&&node!=end_node;node=parent){
parent=node.parentNode;
siblings=collectSiblings(node==start_node?node:node[siblingName],siblingName);
if(siblings.length){
if(!next)
siblings.reverse();
callback(siblings)}}};
if(startContainer.nodeType==1&&startContainer.hasChildNodes())
startContainer=startContainer.childNodes[startOffset];
if(endContainer.nodeType==1&&endContainer.hasChildNodes())
endContainer=endContainer.childNodes[Math.min(startOffset==endOffset?endOffset:endOffset-1,endContainer.childNodes.length-1)];
ancestor=dom.findCommonAncestor(startContainer,endContainer);
if(startContainer==endContainer)
return callback([startContainer]);
for(node=startContainer;node;node=node.parentNode){
if(node==endContainer)
return walkBoundary(startContainer,ancestor,true);
if(node==ancestor)
break;
}
for(node=endContainer;node;node=node.parentNode){
if(node==startContainer)
return walkBoundary(endContainer,ancestor);
if(node==ancestor)
break;
}
startPoint=findEndPoint(startContainer,ancestor)||startContainer;
endPoint=findEndPoint(endContainer,ancestor)||endContainer;
walkBoundary(startContainer,startPoint,true);
siblings=collectSiblings(
startPoint==startContainer?startPoint:startPoint.nextSibling,
'nextSibling',
endPoint==endContainer?endPoint.nextSibling:endPoint
);
if(siblings.length)
callback(siblings);
walkBoundary(endContainer,endPoint)}};
tinymce.dom.RangeUtils.compareRanges=function(rng1,rng2){
if(rng1&&rng2){
if(rng1.item||rng1.duplicate){
if(rng1.item&&rng2.item&&rng1.item(0)===rng2.item(0))
return true;
if(rng1.isEqual&&rng2.isEqual&&rng2.isEqual(rng1))
return true;
}else{
return rng1.startContainer==rng2.startContainer&&rng1.startOffset==rng2.startOffset;
}}
return false;
}})(tinymce);
(function(tinymce){
var DOM=tinymce.DOM,is=tinymce.is;
tinymce.create('tinymce.ui.Control',{
Control:function(id,s){
this.id=id;
this.settings=s=s||{};
this.rendered=false;
this.onRender=new tinymce.util.Dispatcher(this);
this.classPrefix='';
this.scope=s.scope||this;
this.disabled=0;
this.active=0;
},
setDisabled:function(s){
var e;
if(s!=this.disabled){
e=DOM.get(this.id);
if(e&&this.settings.unavailable_prefix){
if(s){
this.prevTitle=e.title;
e.title=this.settings.unavailable_prefix+": "+e.title;
}else
e.title=this.prevTitle;
}
this.setState('Disabled',s);
this.setState('Enabled',!s);
this.disabled=s;
}},
isDisabled:function(){
return this.disabled;
},
setActive:function(s){
if(s!=this.active){
this.setState('Active',s);
this.active=s;
}},
isActive:function(){
return this.active;
},
setState:function(c,s){
var n=DOM.get(this.id);
c=this.classPrefix+c;
if(s)
DOM.addClass(n,c);
else
DOM.removeClass(n,c)},
isRendered:function(){
return this.rendered;
},
renderHTML:function(){
},
renderTo:function(n){
DOM.setHTML(n,this.renderHTML())},
postRender:function(){
var t=this,b;
if(is(t.disabled)){
b=t.disabled;
t.disabled=-1;
t.setDisabled(b)}
if(is(t.active)){
b=t.active;
t.active=-1;
t.setActive(b)}},
remove:function(){
DOM.remove(this.id);
this.destroy()},
destroy:function(){
tinymce.dom.Event.clear(this.id)}})})(tinymce);
tinymce.create('tinymce.ui.Container:tinymce.ui.Control',{
Container:function(id,s){
this.parent(id,s);
this.controls=[];
this.lookup={}},
add:function(c){
this.lookup[c.id]=c;
this.controls.push(c);
return c;
},
get:function(n){
return this.lookup[n];
}});
tinymce.create('tinymce.ui.Separator:tinymce.ui.Control',{
Separator:function(id,s){
this.parent(id,s);
this.classPrefix='mceSeparator';
},
renderHTML:function(){
return tinymce.DOM.createHTML('span',{'class':this.classPrefix})}});
(function(tinymce){
var is=tinymce.is,DOM=tinymce.DOM,each=tinymce.each,walk=tinymce.walk;
tinymce.create('tinymce.ui.MenuItem:tinymce.ui.Control',{
MenuItem:function(id,s){
this.parent(id,s);
this.classPrefix='mceMenuItem';
},
setSelected:function(s){
this.setState('Selected',s);
this.selected=s;
},
isSelected:function(){
return this.selected;
},
postRender:function(){
var t=this;
t.parent();
if(is(t.selected))
t.setSelected(t.selected)}})})(tinymce);
(function(tinymce){
var is=tinymce.is,DOM=tinymce.DOM,each=tinymce.each,walk=tinymce.walk;
tinymce.create('tinymce.ui.Menu:tinymce.ui.MenuItem',{
Menu:function(id,s){
var t=this;
t.parent(id,s);
t.items={};
t.collapsed=false;
t.menuCount=0;
t.onAddItem=new tinymce.util.Dispatcher(this)},
expand:function(d){
var t=this;
if(d){
walk(t,function(o){
if(o.expand)
o.expand()},'items',t)}
t.collapsed=false;
},
collapse:function(d){
var t=this;
if(d){
walk(t,function(o){
if(o.collapse)
o.collapse()},'items',t)}
t.collapsed=true;
},
isCollapsed:function(){
return this.collapsed;
},
add:function(o){
if(!o.settings)
o=new tinymce.ui.MenuItem(o.id||DOM.uniqueId(),o);
this.onAddItem.dispatch(this,o);
return this.items[o.id]=o;
},
addSeparator:function(){
return this.add({separator:true})},
addMenu:function(o){
if(!o.collapse)
o=this.createMenu(o);
this.menuCount++;
return this.add(o)},
hasMenus:function(){
return this.menuCount!==0;
},
remove:function(o){
delete this.items[o.id];
},
removeAll:function(){
var t=this;
walk(t,function(o){
if(o.removeAll)
o.removeAll();
else
o.remove();
o.destroy()},'items',t);
t.items={}},
createMenu:function(o){
var m=new tinymce.ui.Menu(o.id||DOM.uniqueId(),o);
m.onAddItem.add(this.onAddItem.dispatch,this.onAddItem);
return m;
}})})(tinymce);
(function(tinymce){
var is=tinymce.is,DOM=tinymce.DOM,each=tinymce.each,Event=tinymce.dom.Event,Element=tinymce.dom.Element;
tinymce.create('tinymce.ui.DropMenu:tinymce.ui.Menu',{
DropMenu:function(id,s){
s=s||{};
s.container=s.container||DOM.doc.body;
s.offset_x=s.offset_x||0;
s.offset_y=s.offset_y||0;
s.vp_offset_x=s.vp_offset_x||0;
s.vp_offset_y=s.vp_offset_y||0;
if(is(s.icons)&&!s.icons)
s['class']+=' mceNoIcons';
this.parent(id,s);
this.onShowMenu=new tinymce.util.Dispatcher(this);
this.onHideMenu=new tinymce.util.Dispatcher(this);
this.classPrefix='mceMenu';
},
createMenu:function(s){
var t=this,cs=t.settings,m;
s.container=s.container||cs.container;
s.parent=t;
s.constrain=s.constrain||cs.constrain;
s['class']=s['class']||cs['class'];
s.vp_offset_x=s.vp_offset_x||cs.vp_offset_x;
s.vp_offset_y=s.vp_offset_y||cs.vp_offset_y;
m=new tinymce.ui.DropMenu(s.id||DOM.uniqueId(),s);
m.onAddItem.add(t.onAddItem.dispatch,t.onAddItem);
return m;
},
update:function(){
var t=this,s=t.settings,tb=DOM.get('menu_'+t.id+'_tbl'),co=DOM.get('menu_'+t.id+'_co'),tw,th;
tw=s.max_width?Math.min(tb.clientWidth,s.max_width):tb.clientWidth;
th=s.max_height?Math.min(tb.clientHeight,s.max_height):tb.clientHeight;
if(!DOM.boxModel)
t.element.setStyles({width:tw+2,height:th+2});
else
t.element.setStyles({width:tw,height:th});
if(s.max_width)
DOM.setStyle(co,'width',tw);
if(s.max_height){
DOM.setStyle(co,'height',th);
if(tb.clientHeight<s.max_height)
DOM.setStyle(co,'overflow','hidden')}},
showMenu:function(x,y,px){
var t=this,s=t.settings,co,vp=DOM.getViewPort(),w,h,mx,my,ot=2,dm,tb,cp=t.classPrefix;
t.collapse(1);
if(t.isMenuVisible)
return;
if(!t.rendered){
co=DOM.add(t.settings.container,t.renderNode());
each(t.items,function(o){
o.postRender()});
t.element=new Element('menu_'+t.id,{blocker:1,container:s.container})}else
co=DOM.get('menu_'+t.id);
if(!tinymce.isOpera)
DOM.setStyles(co,{left:-0xFFFF,top:-0xFFFF});
DOM.show(co);
t.update();
x+=s.offset_x||0;
y+=s.offset_y||0;
vp.w-=4;
vp.h-=4;
if(s.constrain){
w=co.clientWidth-ot;
h=co.clientHeight-ot;
mx=vp.x+vp.w;
my=vp.y+vp.h;
if((x+s.vp_offset_x+w)>mx)
x=px?px-w:Math.max(0,(mx-s.vp_offset_x)-w);
if((y+s.vp_offset_y+h)>my)
y=Math.max(0,(my-s.vp_offset_y)-h)}
DOM.setStyles(co,{left:x,top:y});
t.element.update();
t.isMenuVisible=1;
t.mouseClickFunc=Event.add(co,'click',function(e){
var m;
e=e.target;
if(e&&(e=DOM.getParent(e,'tr'))&&!DOM.hasClass(e,cp+'ItemSub')){
m=t.items[e.id];
if(m.isDisabled())
return;
dm=t;
while(dm){
if(dm.hideMenu)
dm.hideMenu();
dm=dm.settings.parent;
}
if(m.settings.onclick)
m.settings.onclick(e);
return Event.cancel(e)}});
if(t.hasMenus()){
t.mouseOverFunc=Event.add(co,'mouseover',function(e){
var m,r,mi;
e=e.target;
if(e&&(e=DOM.getParent(e,'tr'))){
m=t.items[e.id];
if(t.lastMenu)
t.lastMenu.collapse(1);
if(m.isDisabled())
return;
if(e&&DOM.hasClass(e,cp+'ItemSub')){
r=DOM.getRect(e);
m.showMenu((r.x+r.w-ot),r.y-ot,r.x);
t.lastMenu=m;
DOM.addClass(DOM.get(m.id).firstChild,cp+'ItemActive')}}})}
t.onShowMenu.dispatch(t);
if(s.keyboard_focus){
Event.add(co,'keydown',t._keyHandler,t);
DOM.select('a','menu_'+t.id)[0].focus();
t._focusIdx=0;
}},
hideMenu:function(c){
var t=this,co=DOM.get('menu_'+t.id),e;
if(!t.isMenuVisible)
return;
Event.remove(co,'mouseover',t.mouseOverFunc);
Event.remove(co,'click',t.mouseClickFunc);
Event.remove(co,'keydown',t._keyHandler);
DOM.hide(co);
t.isMenuVisible=0;
if(!c)
t.collapse(1);
if(t.element)
t.element.hide();
if(e=DOM.get(t.id))
DOM.removeClass(e.firstChild,t.classPrefix+'ItemActive');
t.onHideMenu.dispatch(t)},
add:function(o){
var t=this,co;
o=t.parent(o);
if(t.isRendered&&(co=DOM.get('menu_'+t.id)))
t._add(DOM.select('tbody',co)[0],o);
return o;
},
collapse:function(d){
this.parent(d);
this.hideMenu(1)},
remove:function(o){
DOM.remove(o.id);
this.destroy();
return this.parent(o)},
destroy:function(){
var t=this,co=DOM.get('menu_'+t.id);
Event.remove(co,'mouseover',t.mouseOverFunc);
Event.remove(co,'click',t.mouseClickFunc);
if(t.element)
t.element.remove();
DOM.remove(co)},
renderNode:function(){
var t=this,s=t.settings,n,tb,co,w;
w=DOM.create('div',{id:'menu_'+t.id,'class':s['class'],'style':'position:absolute;left:0;top:0;z-index:200000'});
co=DOM.add(w,'div',{id:'menu_'+t.id+'_co','class':t.classPrefix+(s['class']?' '+s['class']:'')});
t.element=new Element('menu_'+t.id,{blocker:1,container:s.container});
if(s.menu_line)
DOM.add(co,'span',{'class':t.classPrefix+'Line'});
n=DOM.add(co,'table',{id:'menu_'+t.id+'_tbl',border:0,cellPadding:0,cellSpacing:0});
tb=DOM.add(n,'tbody');
each(t.items,function(o){
t._add(tb,o)});
t.rendered=true;
return w;
},
_keyHandler:function(e){
var t=this,kc=e.keyCode;
function focus(d){
var i=t._focusIdx+d,e=DOM.select('a','menu_'+t.id)[i];
if(e){
t._focusIdx=i;
e.focus()}};
switch(kc){
case 38:
focus(-1);
return;
case 40:
focus(1);
return;
case 13:
return;
case 27:
return this.hideMenu()}},
_add:function(tb,o){
var n,s=o.settings,a,ro,it,cp=this.classPrefix,ic;
if(s.separator){
ro=DOM.add(tb,'tr',{id:o.id,'class':cp+'ItemSeparator'});
DOM.add(ro,'td',{'class':cp+'ItemSeparator'});
if(n=ro.previousSibling)
DOM.addClass(n,'mceLast');
return;
}
n=ro=DOM.add(tb,'tr',{id:o.id,'class':cp+'Item '+cp+'ItemEnabled'});
n=it=DOM.add(n,'td');
n=a=DOM.add(n,'a',{href:'javascript:;',onclick:"return false;",onmousedown:'return false;'});
DOM.addClass(it,s['class']);
ic=DOM.add(n,'span',{'class':'mceIcon'+(s.icon?' mce_'+s.icon:'')});
if(s.icon_src)
DOM.add(ic,'img',{src:s.icon_src});
n=DOM.add(n,s.element||'span',{'class':'mceText',title:o.settings.title},o.settings.title);
if(o.settings.style)
DOM.setAttrib(n,'style',o.settings.style);
if(tb.childNodes.length==1)
DOM.addClass(ro,'mceFirst');
if((n=ro.previousSibling)&&DOM.hasClass(n,cp+'ItemSeparator'))
DOM.addClass(ro,'mceFirst');
if(o.collapse)
DOM.addClass(ro,cp+'ItemSub');
if(n=ro.previousSibling)
DOM.removeClass(n,'mceLast');
DOM.addClass(ro,'mceLast')}})})(tinymce);
(function(tinymce){
var DOM=tinymce.DOM;
tinymce.create('tinymce.ui.Button:tinymce.ui.Control',{
Button:function(id,s){
this.parent(id,s);
this.classPrefix='mceButton';
},
renderHTML:function(){
var cp=this.classPrefix,s=this.settings,h,l;
l=DOM.encode(s.label||'');
h='<a id="'+this.id+'" href="javascript:;" class="'+cp+' '+cp+'Enabled '+s['class']+(l?' '+cp+'Labeled':'')+'" onmousedown="return false;" onclick="return false;" title="'+DOM.encode(s.title)+'">';
if(s.image)
h+='<img class="mceIcon" src="'+s.image+'" />'+l+'</a>';
else
h+='<span class="mceIcon '+s['class']+'"></span>'+(l?'<span class="'+cp+'Label">'+l+'</span>':'')+'</a>';
return h;
},
postRender:function(){
var t=this,s=t.settings;
tinymce.dom.Event.add(t.id,'click',function(e){
if(!t.isDisabled())
return s.onclick.call(s.scope,e)})}})})(tinymce);
(function(tinymce){
var DOM=tinymce.DOM,Event=tinymce.dom.Event,each=tinymce.each,Dispatcher=tinymce.util.Dispatcher;
tinymce.create('tinymce.ui.ListBox:tinymce.ui.Control',{
ListBox:function(id,s){
var t=this;
t.parent(id,s);
t.items=[];
t.onChange=new Dispatcher(t);
t.onPostRender=new Dispatcher(t);
t.onAdd=new Dispatcher(t);
t.onRenderMenu=new tinymce.util.Dispatcher(this);
t.classPrefix='mceListBox';
},
select:function(va){
var t=this,fv,f;
if(va==undefined)
return t.selectByIndex(-1);
if(va&&va.call)
f=va;
else{
f=function(v){
return v==va;
}}
if(va!=t.selectedValue){
each(t.items,function(o,i){
if(f(o.value)){
fv=1;
t.selectByIndex(i);
return false;
}});
if(!fv)
t.selectByIndex(-1)}},
selectByIndex:function(idx){
var t=this,e,o;
if(idx!=t.selectedIndex){
e=DOM.get(t.id+'_text');
o=t.items[idx];
if(o){
t.selectedValue=o.value;
t.selectedIndex=idx;
DOM.setHTML(e,DOM.encode(o.title));
DOM.removeClass(e,'mceTitle')}else{
DOM.setHTML(e,DOM.encode(t.settings.title));
DOM.addClass(e,'mceTitle');
t.selectedValue=t.selectedIndex=null;
}
e=0;
}},
add:function(n,v,o){
var t=this;
o=o||{};
o=tinymce.extend(o,{
title:n,
value:v
});
t.items.push(o);
t.onAdd.dispatch(t,o)},
getLength:function(){
return this.items.length;
},
renderHTML:function(){
var h='',t=this,s=t.settings,cp=t.classPrefix;
h='<table id="'+t.id+'" cellpadding="0" cellspacing="0" class="'+cp+' '+cp+'Enabled'+(s['class']?(' '+s['class']):'')+'"><tbody><tr>';
h+='<td>'+DOM.createHTML('a',{id:t.id+'_text',href:'javascript:;','class':'mceText',onclick:"return false;",onmousedown:'return false;'},DOM.encode(t.settings.title))+'</td>';
h+='<td>'+DOM.createHTML('a',{id:t.id+'_open',tabindex:-1,href:'javascript:;','class':'mceOpen',onclick:"return false;",onmousedown:'return false;'},'<span></span>')+'</td>';
h+='</tr></tbody></table>';
return h;
},
showMenu:function(){
var t=this,p1,p2,e=DOM.get(this.id),m;
if(t.isDisabled()||t.items.length==0)
return;
if(t.menu&&t.menu.isMenuVisible)
return t.hideMenu();
if(!t.isMenuRendered){
t.renderMenu();
t.isMenuRendered=true;
}
p1=DOM.getPos(this.settings.menu_container);
p2=DOM.getPos(e);
m=t.menu;
m.settings.offset_x=p2.x;
m.settings.offset_y=p2.y;
m.settings.keyboard_focus=!tinymce.isOpera;
if(t.oldID)
m.items[t.oldID].setSelected(0);
each(t.items,function(o){
if(o.value===t.selectedValue){
m.items[o.id].setSelected(1);
t.oldID=o.id;
}});
m.showMenu(0,e.clientHeight);
Event.add(DOM.doc,'mousedown',t.hideMenu,t);
DOM.addClass(t.id,t.classPrefix+'Selected')},
hideMenu:function(e){
var t=this;
if(t.menu&&t.menu.isMenuVisible){
if(e&&e.type=="mousedown"&&(e.target.id==t.id+'_text'||e.target.id==t.id+'_open'))
return;
if(!e||!DOM.getParent(e.target,'.mceMenu')){
DOM.removeClass(t.id,t.classPrefix+'Selected');
Event.remove(DOM.doc,'mousedown',t.hideMenu,t);
t.menu.hideMenu()}}},
renderMenu:function(){
var t=this,m;
m=t.settings.control_manager.createDropMenu(t.id+'_menu',{
menu_line:1,
'class':t.classPrefix+'Menu mceNoIcons',
max_width:550,
max_height:550
});
m.onHideMenu.add(t.hideMenu,t);
m.add({
title:t.settings.title,
'class':'mceMenuItemTitle',
onclick:function(){
if(t.settings.onselect('')!==false)
t.select('')}});
each(t.items,function(o){
if(o.value===undefined){
m.add({
title:o.title,
'class':'mceMenuItemTitle',
onclick:function(){
if(t.settings.onselect('')!==false)
t.select('')}})}else{
o.id=DOM.uniqueId();
o.onclick=function(){
if(t.settings.onselect(o.value)!==false)
t.select(o.value)};
m.add(o)}});
t.onRenderMenu.dispatch(t,m);
t.menu=m;
},
postRender:function(){
var t=this,cp=t.classPrefix;
Event.add(t.id,'click',t.showMenu,t);
Event.add(t.id+'_text','focus',function(){
if(!t._focused){
t.keyDownHandler=Event.add(t.id+'_text','keydown',function(e){
var idx=-1,v,kc=e.keyCode;
each(t.items,function(v,i){
if(t.selectedValue==v.value)
idx=i;
});
if(kc==38)
v=t.items[idx-1];
else if(kc==40)
v=t.items[idx+1];
else if(kc==13){
v=t.selectedValue;
t.selectedValue=null;
t.settings.onselect(v);
return Event.cancel(e)}
if(v){
t.hideMenu();
t.select(v.value)}})}
t._focused=1;
});
Event.add(t.id+'_text','blur',function(){Event.remove(t.id+'_text','keydown',t.keyDownHandler);t._focused=0;});
if(tinymce.isIE6||!DOM.boxModel){
Event.add(t.id,'mouseover',function(){
if(!DOM.hasClass(t.id,cp+'Disabled'))
DOM.addClass(t.id,cp+'Hover')});
Event.add(t.id,'mouseout',function(){
if(!DOM.hasClass(t.id,cp+'Disabled'))
DOM.removeClass(t.id,cp+'Hover')})}
t.onPostRender.dispatch(t,DOM.get(t.id))},
destroy:function(){
this.parent();
Event.clear(this.id+'_text');
Event.clear(this.id+'_open')}})})(tinymce);
(function(tinymce){
var DOM=tinymce.DOM,Event=tinymce.dom.Event,each=tinymce.each,Dispatcher=tinymce.util.Dispatcher;
tinymce.create('tinymce.ui.NativeListBox:tinymce.ui.ListBox',{
NativeListBox:function(id,s){
this.parent(id,s);
this.classPrefix='mceNativeListBox';
},
setDisabled:function(s){
DOM.get(this.id).disabled=s;
},
isDisabled:function(){
return DOM.get(this.id).disabled;
},
select:function(va){
var t=this,fv,f;
if(va==undefined)
return t.selectByIndex(-1);
if(va&&va.call)
f=va;
else{
f=function(v){
return v==va;
}}
if(va!=t.selectedValue){
each(t.items,function(o,i){
if(f(o.value)){
fv=1;
t.selectByIndex(i);
return false;
}});
if(!fv)
t.selectByIndex(-1)}},
selectByIndex:function(idx){
DOM.get(this.id).selectedIndex=idx+1;
this.selectedValue=this.items[idx]?this.items[idx].value:null;
},
add:function(n,v,a){
var o,t=this;
a=a||{};
a.value=v;
if(t.isRendered())
DOM.add(DOM.get(this.id),'option',a,n);
o={
title:n,
value:v,
attribs:a
};
t.items.push(o);
t.onAdd.dispatch(t,o)},
getLength:function(){
return this.items.length;
},
renderHTML:function(){
var h,t=this;
h=DOM.createHTML('option',{value:''},'-- '+t.settings.title+' --');
each(t.items,function(it){
h+=DOM.createHTML('option',{value:it.value},it.title)});
h=DOM.createHTML('select',{id:t.id,'class':'mceNativeListBox'},h);
return h;
},
postRender:function(){
var t=this,ch;
t.rendered=true;
function onChange(e){
var v=t.items[e.target.selectedIndex-1];
if(v&&(v=v.value)){
t.onChange.dispatch(t,v);
if(t.settings.onselect)
t.settings.onselect(v)}};
Event.add(t.id,'change',onChange);
Event.add(t.id,'keydown',function(e){
var bf;
Event.remove(t.id,'change',ch);
bf=Event.add(t.id,'blur',function(){
Event.add(t.id,'change',onChange);
Event.remove(t.id,'blur',bf)});
if(e.keyCode==13||e.keyCode==32){
onChange(e);
return Event.cancel(e)}});
t.onPostRender.dispatch(t,DOM.get(t.id))}})})(tinymce);
(function(tinymce){
var DOM=tinymce.DOM,Event=tinymce.dom.Event,each=tinymce.each;
tinymce.create('tinymce.ui.MenuButton:tinymce.ui.Button',{
MenuButton:function(id,s){
this.parent(id,s);
this.onRenderMenu=new tinymce.util.Dispatcher(this);
s.menu_container=s.menu_container||DOM.doc.body;
},
showMenu:function(){
var t=this,p1,p2,e=DOM.get(t.id),m;
if(t.isDisabled())
return;
if(!t.isMenuRendered){
t.renderMenu();
t.isMenuRendered=true;
}
if(t.isMenuVisible)
return t.hideMenu();
p1=DOM.getPos(t.settings.menu_container);
p2=DOM.getPos(e);
m=t.menu;
m.settings.offset_x=p2.x;
m.settings.offset_y=p2.y;
m.settings.vp_offset_x=p2.x;
m.settings.vp_offset_y=p2.y;
m.settings.keyboard_focus=t._focused;
m.showMenu(0,e.clientHeight);
Event.add(DOM.doc,'mousedown',t.hideMenu,t);
t.setState('Selected',1);
t.isMenuVisible=1;
},
renderMenu:function(){
var t=this,m;
m=t.settings.control_manager.createDropMenu(t.id+'_menu',{
menu_line:1,
'class':this.classPrefix+'Menu',
icons:t.settings.icons
});
m.onHideMenu.add(t.hideMenu,t);
t.onRenderMenu.dispatch(t,m);
t.menu=m;
},
hideMenu:function(e){
var t=this;
if(e&&e.type=="mousedown"&&DOM.getParent(e.target,function(e){return e.id===t.id||e.id===t.id+'_open';}))
return;
if(!e||!DOM.getParent(e.target,'.mceMenu')){
t.setState('Selected',0);
Event.remove(DOM.doc,'mousedown',t.hideMenu,t);
if(t.menu)
t.menu.hideMenu()}
t.isMenuVisible=0;
},
postRender:function(){
var t=this,s=t.settings;
Event.add(t.id,'click',function(){
if(!t.isDisabled()){
if(s.onclick)
s.onclick(t.value);
t.showMenu()}})}})})(tinymce);
(function(tinymce){
var DOM=tinymce.DOM,Event=tinymce.dom.Event,each=tinymce.each;
tinymce.create('tinymce.ui.SplitButton:tinymce.ui.MenuButton',{
SplitButton:function(id,s){
this.parent(id,s);
this.classPrefix='mceSplitButton';
},
renderHTML:function(){
var h,t=this,s=t.settings,h1;
h='<tbody><tr>';
if(s.image)
h1=DOM.createHTML('img ',{src:s.image,'class':'mceAction '+s['class']});
else
h1=DOM.createHTML('span',{'class':'mceAction '+s['class']},'');
h+='<td>'+DOM.createHTML('a',{id:t.id+'_action',href:'javascript:;','class':'mceAction '+s['class'],onclick:"return false;",onmousedown:'return false;',title:s.title},h1)+'</td>';
h1=DOM.createHTML('span',{'class':'mceOpen '+s['class']});
h+='<td>'+DOM.createHTML('a',{id:t.id+'_open',href:'javascript:;','class':'mceOpen '+s['class'],onclick:"return false;",onmousedown:'return false;',title:s.title},h1)+'</td>';
h+='</tr></tbody>';
return DOM.createHTML('table',{id:t.id,'class':'mceSplitButton mceSplitButtonEnabled '+s['class'],cellpadding:'0',cellspacing:'0',onmousedown:'return false;',title:s.title},h)},
postRender:function(){
var t=this,s=t.settings;
if(s.onclick){
Event.add(t.id+'_action','click',function(){
if(!t.isDisabled())
s.onclick(t.value)})}
Event.add(t.id+'_open','click',t.showMenu,t);
Event.add(t.id+'_open','focus',function(){t._focused=1;});
Event.add(t.id+'_open','blur',function(){t._focused=0;});
if(tinymce.isIE6||!DOM.boxModel){
Event.add(t.id,'mouseover',function(){
if(!DOM.hasClass(t.id,'mceSplitButtonDisabled'))
DOM.addClass(t.id,'mceSplitButtonHover')});
Event.add(t.id,'mouseout',function(){
if(!DOM.hasClass(t.id,'mceSplitButtonDisabled'))
DOM.removeClass(t.id,'mceSplitButtonHover')})}},
destroy:function(){
this.parent();
Event.clear(this.id+'_action');
Event.clear(this.id+'_open')}})})(tinymce);
(function(tinymce){
var DOM=tinymce.DOM,Event=tinymce.dom.Event,is=tinymce.is,each=tinymce.each;
tinymce.create('tinymce.ui.ColorSplitButton:tinymce.ui.SplitButton',{
ColorSplitButton:function(id,s){
var t=this;
t.parent(id,s);
t.settings=s=tinymce.extend({
colors:'000000,993300,333300,003300,003366,000080,333399,333333,800000,FF6600,808000,008000,008080,0000FF,666699,808080,FF0000,FF9900,99CC00,339966,33CCCC,3366FF,800080,999999,FF00FF,FFCC00,FFFF00,00FF00,00FFFF,00CCFF,993366,C0C0C0,FF99CC,FFCC99,FFFF99,CCFFCC,CCFFFF,99CCFF,CC99FF,FFFFFF',
grid_width:8,
default_color:'#888888'
},t.settings);
t.onShowMenu=new tinymce.util.Dispatcher(t);
t.onHideMenu=new tinymce.util.Dispatcher(t);
t.value=s.default_color;
},
showMenu:function(){
var t=this,r,p,e,p2;
if(t.isDisabled())
return;
if(!t.isMenuRendered){
t.renderMenu();
t.isMenuRendered=true;
}
if(t.isMenuVisible)
return t.hideMenu();
e=DOM.get(t.id);
DOM.show(t.id+'_menu');
DOM.addClass(e,'mceSplitButtonSelected');
p2=DOM.getPos(e);
DOM.setStyles(t.id+'_menu',{
left:p2.x,
top:p2.y+e.clientHeight,
zIndex:200000
});
e=0;
Event.add(DOM.doc,'mousedown',t.hideMenu,t);
t.onShowMenu.dispatch(t);
if(t._focused){
t._keyHandler=Event.add(t.id+'_menu','keydown',function(e){
if(e.keyCode==27)
t.hideMenu()});
DOM.select('a',t.id+'_menu')[0].focus()}
t.isMenuVisible=1;
},
hideMenu:function(e){
var t=this;
if(e&&e.type=="mousedown"&&DOM.getParent(e.target,function(e){return e.id===t.id+'_open';}))
return;
if(!e||!DOM.getParent(e.target,'.mceSplitButtonMenu')){
DOM.removeClass(t.id,'mceSplitButtonSelected');
Event.remove(DOM.doc,'mousedown',t.hideMenu,t);
Event.remove(t.id+'_menu','keydown',t._keyHandler);
DOM.hide(t.id+'_menu')}
t.onHideMenu.dispatch(t);
t.isMenuVisible=0;
},
renderMenu:function(){
var t=this,m,i=0,s=t.settings,n,tb,tr,w;
w=DOM.add(s.menu_container,'div',{id:t.id+'_menu','class':s['menu_class']+' '+s['class'],style:'position:absolute;left:0;top:-1000px;'});
m=DOM.add(w,'div',{'class':s['class']+' mceSplitButtonMenu'});
DOM.add(m,'span',{'class':'mceMenuLine'});
n=DOM.add(m,'table',{'class':'mceColorSplitMenu'});
tb=DOM.add(n,'tbody');
i=0;
each(is(s.colors,'array')?s.colors:s.colors.split(','),function(c){
c=c.replace(/^#/,'');
if(!i--){
tr=DOM.add(tb,'tr');
i=s.grid_width-1;
}
n=DOM.add(tr,'td');
n=DOM.add(n,'a',{
href:'javascript:;',
style:{
backgroundColor:'#'+c
},
_mce_color:'#'+c
})});
if(s.more_colors_func){
n=DOM.add(tb,'tr');
n=DOM.add(n,'td',{colspan:s.grid_width,'class':'mceMoreColors'});
n=DOM.add(n,'a',{id:t.id+'_more',href:'javascript:;',onclick:'return false;','class':'mceMoreColors'},s.more_colors_title);
Event.add(n,'click',function(e){
s.more_colors_func.call(s.more_colors_scope||this);
return Event.cancel(e)})}
DOM.addClass(m,'mceColorSplitMenu');
Event.add(t.id+'_menu','click',function(e){
var c;
e=e.target;
if(e.nodeName=='A'&&(c=e.getAttribute('_mce_color')))
t.setColor(c);
return Event.cancel(e)});
return w;
},
setColor:function(c){
var t=this;
DOM.setStyle(t.id+'_preview','backgroundColor',c);
t.value=c;
t.hideMenu();
t.settings.onselect(c)},
postRender:function(){
var t=this,id=t.id;
t.parent();
DOM.add(id+'_action','div',{id:id+'_preview','class':'mceColorPreview'});
DOM.setStyle(t.id+'_preview','backgroundColor',t.value)},
destroy:function(){
this.parent();
Event.clear(this.id+'_menu');
Event.clear(this.id+'_more');
DOM.remove(this.id+'_menu')}})})(tinymce);
tinymce.create('tinymce.ui.Toolbar:tinymce.ui.Container',{
renderHTML:function(){
var t=this,h='',c,co,dom=tinymce.DOM,s=t.settings,i,pr,nx,cl;
cl=t.controls;
for(i=0;i<cl.length;i++){
co=cl[i];
pr=cl[i-1];
nx=cl[i+1];
if(i===0){
c='mceToolbarStart';
if(co.Button)
c+=' mceToolbarStartButton';
else if(co.SplitButton)
c+=' mceToolbarStartSplitButton';
else if(co.ListBox)
c+=' mceToolbarStartListBox';
h+=dom.createHTML('td',{'class':c},dom.createHTML('span',null,'<!-- IE -->'))}
if(pr&&co.ListBox){
if(pr.Button||pr.SplitButton)
h+=dom.createHTML('td',{'class':'mceToolbarEnd'},dom.createHTML('span',null,'<!-- IE -->'))}
if(dom.stdMode)
h+='<td style="position: relative">'+co.renderHTML()+'</td>';
else
h+='<td>'+co.renderHTML()+'</td>';
if(nx&&co.ListBox){
if(nx.Button||nx.SplitButton)
h+=dom.createHTML('td',{'class':'mceToolbarStart'},dom.createHTML('span',null,'<!-- IE -->'))}}
c='mceToolbarEnd';
if(co.Button)
c+=' mceToolbarEndButton';
else if(co.SplitButton)
c+=' mceToolbarEndSplitButton';
else if(co.ListBox)
c+=' mceToolbarEndListBox';
h+=dom.createHTML('td',{'class':c},dom.createHTML('span',null,'<!-- IE -->'));
return dom.createHTML('table',{id:t.id,'class':'mceToolbar'+(s['class']?' '+s['class']:''),cellpadding:'0',cellspacing:'0',align:t.settings.align||''},'<tbody><tr>'+h+'</tr></tbody>')}});
(function(tinymce){
var Dispatcher=tinymce.util.Dispatcher,each=tinymce.each;
tinymce.create('tinymce.AddOnManager',{
AddOnManager:function(){
var self=this;
self.items=[];
self.urls={};
self.lookup={};
self.onAdd=new Dispatcher(self)},
get:function(n){
return this.lookup[n];
},
requireLangPack:function(n){
var s=tinymce.settings;
if(s&&s.language)
tinymce.ScriptLoader.add(this.urls[n]+'/langs/'+s.language+'.js')},
add:function(id,o){
this.items.push(o);
this.lookup[id]=o;
this.onAdd.dispatch(this,id,o);
return o;
},
load:function(n,u,cb,s){
var t=this;
if(t.urls[n])
return;
if(u.indexOf('/')!=0&&u.indexOf('://')==-1)
u=tinymce.baseURL+'/'+u;
t.urls[n]=u.substring(0,u.lastIndexOf('/'));
if(!t.lookup[n])
tinymce.ScriptLoader.add(u,cb,s)}});
tinymce.PluginManager=new tinymce.AddOnManager();
tinymce.ThemeManager=new tinymce.AddOnManager()}(tinymce));
(function(tinymce){
var each=tinymce.each,extend=tinymce.extend,
DOM=tinymce.DOM,Event=tinymce.dom.Event,
ThemeManager=tinymce.ThemeManager,PluginManager=tinymce.PluginManager,
explode=tinymce.explode,
Dispatcher=tinymce.util.Dispatcher,undefined,instanceCounter=0;
tinymce.documentBaseURL=window.location.href.replace(/[\?#].*$/,'').replace(/[\/\\][^\/]+$/,'');
if(!/[\/\\]$/.test(tinymce.documentBaseURL))
tinymce.documentBaseURL+='/';
tinymce.baseURL=new tinymce.util.URI(tinymce.documentBaseURL).toAbsolute(tinymce.baseURL);
tinymce.baseURI=new tinymce.util.URI(tinymce.baseURL);
tinymce.onBeforeUnload=new Dispatcher(tinymce);
Event.add(window,'beforeunload',function(e){
tinymce.onBeforeUnload.dispatch(tinymce,e)});
tinymce.onAddEditor=new Dispatcher(tinymce);
tinymce.onRemoveEditor=new Dispatcher(tinymce);
tinymce.EditorManager=extend(tinymce,{
editors:[],
i18n:{},
activeEditor:null,
init:function(s){
var t=this,pl,sl=tinymce.ScriptLoader,e,el=[],ed;
function execCallback(se,n,s){
var f=se[n];
if(!f)
return;
if(tinymce.is(f,'string')){
s=f.replace(/\.\w+$/,'');
s=s?tinymce.resolve(s):0;
f=tinymce.resolve(f)}
return f.apply(s||this,Array.prototype.slice.call(arguments,2))};
s=extend({
theme:"simple",
language:"en"
},s);
t.settings=s;
Event.add(document,'init',function(){
var l,co;
execCallback(s,'onpageload');
switch(s.mode){
case"exact":
l=s.elements||'';
if(l.length>0){
each(explode(l),function(v){
if(DOM.get(v)){
ed=new tinymce.Editor(v,s);
el.push(ed);
ed.render(1)}else{
each(document.forms,function(f){
each(f.elements,function(e){
if(e.name===v){
v='mce_editor_'+instanceCounter++;
DOM.setAttrib(e,'id',v);
ed=new tinymce.Editor(v,s);
el.push(ed);
ed.render(1)}})})}})}
break;
case"textareas":
case"specific_textareas":
function hasClass(n,c){
return c.constructor===RegExp?c.test(n.className):DOM.hasClass(n,c)};
each(DOM.select('textarea'),function(v){
if(s.editor_deselector&&hasClass(v,s.editor_deselector))
return;
if(!s.editor_selector||hasClass(v,s.editor_selector)){
e=DOM.get(v.name);
if(!v.id&&!e)
v.id=v.name;
if(!v.id||t.get(v.id))
v.id=DOM.uniqueId();
ed=new tinymce.Editor(v.id,s);
el.push(ed);
ed.render(1)}});
break;
}
if(s.oninit){
l=co=0;
each(el,function(ed){
co++;
if(!ed.initialized){
ed.onInit.add(function(){
l++;
if(l==co)
execCallback(s,'oninit')})}else
l++;
if(l==co)
execCallback(s,'oninit')})}})},
get:function(id){
if(id===undefined)
return this.editors;
return this.editors[id];
},
getInstanceById:function(id){
return this.get(id)},
add:function(editor){
var self=this,editors=self.editors;
editors[editor.id]=editor;
editors.push(editor);
self._setActive(editor);
self.onAddEditor.dispatch(self,editor);
return editor;
},
remove:function(editor){
var t=this,i,editors=t.editors;
if(!editors[editor.id])
return null;
delete editors[editor.id];
for(i=0;i<editors.length;i++){
if(editors[i]==editor){
editors.splice(i,1);
break;
}}
if(t.activeEditor==editor)
t._setActive(editors[0]);
editor.destroy();
t.onRemoveEditor.dispatch(t,editor);
return editor;
},
execCommand:function(c,u,v){
var t=this,ed=t.get(v),w;
switch(c){
case"mceFocus":
ed.focus();
return true;
case"mceAddEditor":
case"mceAddControl":
if(!t.get(v))
new tinymce.Editor(v,t.settings).render();
return true;
case"mceAddFrameControl":
w=v.window;
w.tinyMCE=tinyMCE;
w.tinymce=tinymce;
tinymce.DOM.doc=w.document;
tinymce.DOM.win=w;
ed=new tinymce.Editor(v.element_id,v);
ed.render();
if(tinymce.isIE){
function clr(){
ed.destroy();
w.detachEvent('onunload',clr);
w=w.tinyMCE=w.tinymce=null;
};
w.attachEvent('onunload',clr)}
v.page_window=null;
return true;
case"mceRemoveEditor":
case"mceRemoveControl":
if(ed)
ed.remove();
return true;
case'mceToggleEditor':
if(!ed){
t.execCommand('mceAddControl',0,v);
return true;
}
if(ed.isHidden())
ed.show();
else
ed.hide();
return true;
}
if(t.activeEditor)
return t.activeEditor.execCommand(c,u,v);
return false;
},
execInstanceCommand:function(id,c,u,v){
var ed=this.get(id);
if(ed)
return ed.execCommand(c,u,v);
return false;
},
triggerSave:function(){
each(this.editors,function(e){
e.save()})},
addI18n:function(p,o){
var lo,i18n=this.i18n;
if(!tinymce.is(p,'string')){
each(p,function(o,lc){
each(o,function(o,g){
each(o,function(o,k){
if(g==='common')
i18n[lc+'.'+k]=o;
else
i18n[lc+'.'+g+'.'+k]=o;
})})})}else{
each(o,function(o,k){
i18n[p+'.'+k]=o;
})}},
_setActive:function(editor){
this.selectedInstance=this.activeEditor=editor;
}})})(tinymce);
(function(tinymce){
var DOM=tinymce.DOM,Event=tinymce.dom.Event,extend=tinymce.extend,
Dispatcher=tinymce.util.Dispatcher,each=tinymce.each,isGecko=tinymce.isGecko,
isIE=tinymce.isIE,isWebKit=tinymce.isWebKit,is=tinymce.is,
ThemeManager=tinymce.ThemeManager,PluginManager=tinymce.PluginManager,
inArray=tinymce.inArray,grep=tinymce.grep,explode=tinymce.explode;
tinymce.create('tinymce.Editor',{
Editor:function(id,s){
var t=this;
t.id=t.editorId=id;
t.execCommands={};
t.queryStateCommands={};
t.queryValueCommands={};
t.isNotDirty=false;
t.plugins={};
each([
'onPreInit',
'onBeforeRenderUI',
'onPostRender',
'onInit',
'onRemove',
'onActivate',
'onDeactivate',
'onClick',
'onEvent',
'onMouseUp',
'onMouseDown',
'onDblClick',
'onKeyDown',
'onKeyUp',
'onKeyPress',
'onContextMenu',
'onSubmit',
'onReset',
'onPaste',
'onPreProcess',
'onPostProcess',
'onBeforeSetContent',
'onBeforeGetContent',
'onSetContent',
'onGetContent',
'onLoadContent',
'onSaveContent',
'onNodeChange',
'onChange',
'onBeforeExecCommand',
'onExecCommand',
'onUndo',
'onRedo',
'onVisualAid',
'onSetProgressState'
],function(e){
t[e]=new Dispatcher(t)});
t.settings=s=extend({
id:id,
language:'en',
docs_language:'en',
theme:'simple',
skin:'default',
delta_width:0,
delta_height:0,
popup_css:'',
plugins:'',
document_base_url:tinymce.documentBaseURL,
add_form_submit_trigger:1,
submit_patch:1,
add_unload_trigger:1,
convert_urls:1,
relative_urls:1,
remove_script_host:1,
table_inline_editing:0,
object_resizing:1,
cleanup:1,
accessibility_focus:1,
custom_shortcuts:1,
custom_undo_redo_keyboard_shortcuts:1,
custom_undo_redo_restore_selection:1,
custom_undo_redo:1,
doctype:tinymce.isIE6?'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">':'<!DOCTYPE>',
visual_table_class:'mceItemTable',
visual:1,
font_size_style_values:'xx-small,x-small,small,medium,large,x-large,xx-large',
apply_source_formatting:1,
directionality:'ltr',
forced_root_block:'p',
valid_elements:'@[id|class|style|title|dir<ltr?rtl|lang|xml::lang|onclick|ondblclick|onmousedown|onmouseup|onmouseover|onmousemove|onmouseout|onkeypress|onkeydown|onkeyup],a[rel|rev|charset|hreflang|tabindex|accesskey|type|name|href|target|title|class|onfocus|onblur],strong/b,em/i,strike,u,#p,-ol[type|compact],-ul[type|compact],-li,br,img[longdesc|usemap|src|border|alt=|title|hspace|vspace|width|height|align],-sub,-sup,-blockquote[cite],-table[border|cellspacing|cellpadding|width|frame|rules|height|align|summary|bgcolor|background|bordercolor],-tr[rowspan|width|height|align|valign|bgcolor|background|bordercolor],tbody,thead,tfoot,#td[colspan|rowspan|width|height|align|valign|bgcolor|background|bordercolor|scope],#th[colspan|rowspan|width|height|align|valign|scope],caption,-div,-span,-code,-pre,address,-h1,-h2,-h3,-h4,-h5,-h6,hr[size|noshade],-font[face|size|color],dd,dl,dt,cite,abbr,acronym,del[datetime|cite],ins[datetime|cite],object[classid|width|height|codebase|*],param[name|value],embed[type|width|height|src|*],script[src|type],map[name],area[shape|coords|href|alt|target],bdo,button,col[align|char|charoff|span|valign|width],colgroup[align|char|charoff|span|valign|width],dfn,fieldset,form[action|accept|accept-charset|enctype|method],input[accept|alt|checked|disabled|maxlength|name|readonly|size|src|type|value|tabindex|accesskey],kbd,label[for],legend,noscript,optgroup[label|disabled],option[disabled|label|selected|value],q[cite],samp,select[disabled|multiple|name|size],small,textarea[cols|rows|disabled|name|readonly],tt,var,big',
hidden_input:1,
padd_empty_editor:1,
render_ui:1,
init_theme:1,
force_p_newlines:1,
indentation:'30px',
keep_styles:1,
fix_table_elements:1,
inline_styles:1,
convert_fonts_to_spans:true
},s);
t.documentBaseURI=new tinymce.util.URI(s.document_base_url||tinymce.documentBaseURL,{
base_uri:tinyMCE.baseURI
});
t.baseURI=tinymce.baseURI;
t.execCallback('setup',t)},
render:function(nst){
var t=this,s=t.settings,id=t.id,sl=tinymce.ScriptLoader;
if(!Event.domLoaded){
Event.add(document,'init',function(){
t.render()});
return;
}
tinyMCE.settings=s;
if(!t.getElement())
return;
if(tinymce.isIDevice)
return;
if(!/TEXTAREA|INPUT/i.test(t.getElement().nodeName)&&s.hidden_input&&DOM.getParent(id,'form'))
DOM.insertAfter(DOM.create('input',{type:'hidden',name:id}),id);
if(tinymce.WindowManager)
t.windowManager=new tinymce.WindowManager(t);
if(s.encoding=='xml'){
t.onGetContent.add(function(ed,o){
if(o.save)
o.content=DOM.encode(o.content)})}
if(s.add_form_submit_trigger){
t.onSubmit.addToTop(function(){
if(t.initialized){
t.save();
t.isNotDirty=1;
}})}
if(s.add_unload_trigger){
t._beforeUnload=tinyMCE.onBeforeUnload.add(function(){
if(t.initialized&&!t.destroyed&&!t.isHidden())
t.save({format:'raw',no_events:true})})}
tinymce.addUnload(t.destroy,t);
if(s.submit_patch){
t.onBeforeRenderUI.add(function(){
var n=t.getElement().form;
if(!n)
return;
if(n._mceOldSubmit)
return;
if(!n.submit.nodeType&&!n.submit.length){
t.formElement=n;
n._mceOldSubmit=n.submit;
n.submit=function(){
tinymce.triggerSave();
t.isNotDirty=1;
return t.formElement._mceOldSubmit(t.formElement)}}
n=null;
})}
function loadScripts(){
if(s.language)
sl.add(tinymce.baseURL+'/langs/'+s.language+'.js');
if(s.theme&&s.theme.charAt(0)!='-'&&!ThemeManager.urls[s.theme])
ThemeManager.load(s.theme,'themes/'+s.theme+'/editor_template'+tinymce.suffix+'.js');
each(explode(s.plugins),function(p){
if(p&&p.charAt(0)!='-'&&!PluginManager.urls[p]){
if(p=='safari')
return;
PluginManager.load(p,'plugins/'+p+'/editor_plugin'+tinymce.suffix+'.js')}});
sl.loadQueue(function(){
if(!t.removed)
t.init()})};
loadScripts()},
init:function(){
var n,t=this,s=t.settings,w,h,e=t.getElement(),o,ti,u,bi,bc,re;
tinymce.add(t);
if(s.theme){
s.theme=s.theme.replace(/-/,'');
o=ThemeManager.get(s.theme);
t.theme=new o();
if(t.theme.init&&s.init_theme)
t.theme.init(t,ThemeManager.urls[s.theme]||tinymce.documentBaseURL.replace(/\/$/,''))}
each(explode(s.plugins.replace(/\-/g,'')),function(p){
var c=PluginManager.get(p),u=PluginManager.urls[p]||tinymce.documentBaseURL.replace(/\/$/,''),po;
if(c){
po=new c(t,u);
t.plugins[p]=po;
if(po.init)
po.init(t,u)}});
if(s.popup_css!==false){
if(s.popup_css)
s.popup_css=t.documentBaseURI.toAbsolute(s.popup_css);
else
s.popup_css=t.baseURI.toAbsolute("themes/"+s.theme+"/skins/"+s.skin+"/dialog.css")}
if(s.popup_css_add)
s.popup_css+=','+t.documentBaseURI.toAbsolute(s.popup_css_add);
t.controlManager=new tinymce.ControlManager(t);
if(s.custom_undo_redo){
t.onBeforeExecCommand.add(function(ed,cmd,ui,val,a){
if(cmd!='Undo'&&cmd!='Redo'&&cmd!='mceRepaint'&&(!a||!a.skip_undo)){
if(!t.undoManager.hasUndo())
t.undoManager.add()}});
t.onExecCommand.add(function(ed,cmd,ui,val,a){
if(cmd!='Undo'&&cmd!='Redo'&&cmd!='mceRepaint'&&(!a||!a.skip_undo))
t.undoManager.add()})}
t.onExecCommand.add(function(ed,c){
if(!/^(FontName|FontSize)$/.test(c))
t.nodeChanged()});
if(isGecko){
function repaint(a,o){
if(!o||!o.initial)
t.execCommand('mceRepaint')};
t.onUndo.add(repaint);
t.onRedo.add(repaint);
t.onSetContent.add(repaint)}
t.onBeforeRenderUI.dispatch(t,t.controlManager);
if(s.render_ui){
w=s.width||e.style.width||e.offsetWidth;
h=s.height||e.style.height||e.offsetHeight;
t.orgDisplay=e.style.display;
re=/^[0-9\.]+(|px)$/i;
if(re.test(''+w))
w=Math.max(parseInt(w)+(o.deltaWidth||0),100);
if(re.test(''+h))
h=Math.max(parseInt(h)+(o.deltaHeight||0),100);
o=t.theme.renderUI({
targetNode:e,
width:w,
height:h,
deltaWidth:s.delta_width,
deltaHeight:s.delta_height
});
t.editorContainer=o.editorContainer;
}
if(document.domain&&location.hostname!=document.domain)
tinymce.relaxedDomain=document.domain;
DOM.setStyles(o.sizeContainer||o.editorContainer,{
width:w,
height:h
});
h=(o.iframeHeight||h)+(typeof(h)=='number'?(o.deltaHeight||0):'');
if(h<100)
h=100;
t.iframeHTML=s.doctype+'<html><head xmlns="http://www.w3.org/1999/xhtml">';
if(s.document_base_url!=tinymce.documentBaseURL)
t.iframeHTML+='<base href="'+t.documentBaseURI.getURI()+'" />';
t.iframeHTML+='<meta http-equiv="X-UA-Compatible" content="IE=7" /><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
if(tinymce.relaxedDomain)
t.iframeHTML+='<script type="text/javascript">document.domain = "'+tinymce.relaxedDomain+'";</script>';
bi=s.body_id||'tinymce';
if(bi.indexOf('=')!=-1){
bi=t.getParam('body_id','','hash');
bi=bi[t.id]||bi;
}
bc=s.body_class||'';
if(bc.indexOf('=')!=-1){
bc=t.getParam('body_class','','hash');
bc=bc[t.id]||'';
}
t.iframeHTML+='</head><body id="'+bi+'" class="mceContentBody '+bc+'"></body></html>';
if(tinymce.relaxedDomain){
if(isIE||(tinymce.isOpera&&parseFloat(opera.version())>=9.5))
u='javascript:(function(){document.open();document.domain="'+document.domain+'";var ed = window.parent.tinyMCE.get("'+t.id+'");document.write(ed.iframeHTML);document.close();ed.setupIframe();})()';
else if(tinymce.isOpera)
u='javascript:(function(){document.open();document.domain="'+document.domain+'";document.close();ed.setupIframe();})()';
}
n=DOM.add(o.iframeContainer,'iframe',{
id:t.id+"_ifr",
src:u||'javascript:""',
frameBorder:'0',
style:{
width:'100%',
height:h
}});
t.contentAreaContainer=o.iframeContainer;
DOM.get(o.editorContainer).style.display=t.orgDisplay;
DOM.get(t.id).style.display='none';
if(!isIE||!tinymce.relaxedDomain)
t.setupIframe();
e=n=o=null;
},
setupIframe:function(){
var t=this,s=t.settings,e=DOM.get(t.id),d=t.getDoc(),h,b;
if(!isIE||!tinymce.relaxedDomain){
d.open();
d.write(t.iframeHTML);
d.close()}
if(!isIE){
try{
if(!s.readonly)
d.designMode='On';
}catch(ex){
}}
if(isIE){
b=t.getBody();
DOM.hide(b);
if(!s.readonly)
b.contentEditable=true;
DOM.show(b)}
t.dom=new tinymce.dom.DOMUtils(t.getDoc(),{
keep_values:true,
url_converter:t.convertURL,
url_converter_scope:t,
hex_colors:s.force_hex_style_colors,
class_filter:s.class_filter,
update_styles:1,
fix_ie_paragraphs:1,
valid_styles:s.valid_styles
});
t.schema=new tinymce.dom.Schema();
t.serializer=new tinymce.dom.Serializer(extend(s,{
valid_elements:s.verify_html===false?'*[*]':s.valid_elements,
dom:t.dom,
schema:t.schema
}));
t.selection=new tinymce.dom.Selection(t.dom,t.getWin(),t.serializer);
t.formatter=new tinymce.Formatter(this);
t.formatter.register({
alignleft:[
{selector:'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li',styles:{textAlign:'left'}},
{selector:'img,table',styles:{'float':'left'}}
],
aligncenter:[
{selector:'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li',styles:{textAlign:'center'}},
{selector:'img',styles:{display:'block',marginLeft:'auto',marginRight:'auto'}},
{selector:'table',styles:{marginLeft:'auto',marginRight:'auto'}}
],
alignright:[
{selector:'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li',styles:{textAlign:'right'}},
{selector:'img,table',styles:{'float':'right'}}
],
alignfull:[
{selector:'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li',styles:{textAlign:'justify'}}
],
bold:[
{inline:'strong'},
{inline:'span',styles:{fontWeight:'bold'}},
{inline:'b'}
],
italic:[
{inline:'em'},
{inline:'span',styles:{fontStyle:'italic'}},
{inline:'i'}
],
underline:[
{inline:'span',styles:{textDecoration:'underline'},exact:true},
{inline:'u'}
],
strikethrough:[
{inline:'span',styles:{textDecoration:'line-through'},exact:true},
{inline:'u'}
],
forecolor:{inline:'span',styles:{color:'%value'}},
hilitecolor:{inline:'span',styles:{backgroundColor:'%value'}},
fontname:{inline:'span',styles:{fontFamily:'%value'}},
fontsize:{inline:'span',styles:{fontSize:'%value'}},
fontsize_class:{inline:'span',attributes:{'class':'%value'}},
blockquote:{block:'blockquote',wrapper:1,remove:'all'},
removeformat:[
{selector:'b,strong,em,i,font,u,strike',remove:'all',split:true,expand:false,block_expand:true,deep:true},
{selector:'span',attributes:['style','class'],remove:'empty',split:true,expand:false,deep:true},
{selector:'*',attributes:['style','class'],split:false,expand:false,deep:true}
]
});
each('p h1 h2 h3 h4 h5 h6 div address pre div code dt dd samp'.split(/\s/),function(name){
t.formatter.register(name,{block:name,remove:'all'})});
t.formatter.register(t.settings.formats);
t.undoManager=new tinymce.UndoManager(t);
t.undoManager.onAdd.add(function(um,l){
if(!l.initial)
return t.onChange.dispatch(t,l,um)});
t.undoManager.onUndo.add(function(um,l){
return t.onUndo.dispatch(t,l,um)});
t.undoManager.onRedo.add(function(um,l){
return t.onRedo.dispatch(t,l,um)});
t.forceBlocks=new tinymce.ForceBlocks(t,{
forced_root_block:s.forced_root_block
});
t.editorCommands=new tinymce.EditorCommands(t);
t.serializer.onPreProcess.add(function(se,o){
return t.onPreProcess.dispatch(t,o,se)});
t.serializer.onPostProcess.add(function(se,o){
return t.onPostProcess.dispatch(t,o,se)});
t.onPreInit.dispatch(t);
if(!s.gecko_spellcheck)
t.getBody().spellcheck=0;
if(!s.readonly)
t._addEvents();
t.controlManager.onPostRender.dispatch(t,t.controlManager);
t.onPostRender.dispatch(t);
if(s.directionality)
t.getBody().dir=s.directionality;
if(s.nowrap)
t.getBody().style.whiteSpace="nowrap";
if(s.custom_elements){
function handleCustom(ed,o){
each(explode(s.custom_elements),function(v){
var n;
if(v.indexOf('~')===0){
v=v.substring(1);
n='span';
}else
n='div';
o.content=o.content.replace(new RegExp('<('+v+')([^>]*)>','g'),'<'+n+' _mce_name="$1"$2>');
o.content=o.content.replace(new RegExp('</('+v+')>','g'),'</'+n+'>')})};
t.onBeforeSetContent.add(handleCustom);
t.onPostProcess.add(function(ed,o){
if(o.set)
handleCustom(ed,o)})}
if(s.handle_node_change_callback){
t.onNodeChange.add(function(ed,cm,n){
t.execCallback('handle_node_change_callback',t.id,n,-1,-1,true,t.selection.isCollapsed())})}
if(s.save_callback){
t.onSaveContent.add(function(ed,o){
var h=t.execCallback('save_callback',t.id,o.content,t.getBody());
if(h)
o.content=h;
})}
if(s.onchange_callback){
t.onChange.add(function(ed,l){
t.execCallback('onchange_callback',t,l)})}
if(s.convert_newlines_to_brs){
t.onBeforeSetContent.add(function(ed,o){
if(o.initial)
o.content=o.content.replace(/\r?\n/g,'<br />')})}
if(s.fix_nesting&&isIE){
t.onBeforeSetContent.add(function(ed,o){
o.content=t._fixNesting(o.content)})}
if(s.preformatted){
t.onPostProcess.add(function(ed,o){
o.content=o.content.replace(/^\s*<pre.*?>/,'');
o.content=o.content.replace(/<\/pre>\s*$/,'');
if(o.set)
o.content='<pre class="mceItemHidden">'+o.content+'</pre>';
})}
if(s.verify_css_classes){
t.serializer.attribValueFilter=function(n,v){
var s,cl;
if(n=='class'){
if(!t.classesRE){
cl=t.dom.getClasses();
if(cl.length>0){
s='';
each(cl,function(o){
s+=(s?'|':'')+o['class'];
});
t.classesRE=new RegExp('('+s+')','gi')}}
return!t.classesRE||/(\bmceItem\w+\b|\bmceTemp\w+\b)/g.test(v)||t.classesRE.test(v)?v:'';
}
return v;
}}
if(s.cleanup_callback){
t.onBeforeSetContent.add(function(ed,o){
o.content=t.execCallback('cleanup_callback','insert_to_editor',o.content,o)});
t.onPreProcess.add(function(ed,o){
if(o.set)
t.execCallback('cleanup_callback','insert_to_editor_dom',o.node,o);
if(o.get)
t.execCallback('cleanup_callback','get_from_editor_dom',o.node,o)});
t.onPostProcess.add(function(ed,o){
if(o.set)
o.content=t.execCallback('cleanup_callback','insert_to_editor',o.content,o);
if(o.get)
o.content=t.execCallback('cleanup_callback','get_from_editor',o.content,o)})}
if(s.save_callback){
t.onGetContent.add(function(ed,o){
if(o.save)
o.content=t.execCallback('save_callback',t.id,o.content,t.getBody())})}
if(s.handle_event_callback){
t.onEvent.add(function(ed,e,o){
if(t.execCallback('handle_event_callback',e,ed,o)===false)
Event.cancel(e)})}
t.onSetContent.add(function(){
t.addVisual(t.getBody())});
if(s.padd_empty_editor){
t.onPostProcess.add(function(ed,o){
o.content=o.content.replace(/^(<p[^>]*>(&nbsp;|&#160;|\s|\u00a0|)<\/p>[\r\n]*|<br \/>[\r\n]*)$/,'')})}
if(isGecko){
function fixLinks(ed,o){
each(ed.dom.select('a'),function(n){
var pn=n.parentNode;
if(ed.dom.isBlock(pn)&&pn.lastChild===n)
ed.dom.add(pn,'br',{'_mce_bogus':1})})};
t.onExecCommand.add(function(ed,cmd){
if(cmd==='CreateLink')
fixLinks(ed)});
t.onSetContent.add(t.selection.onSetContent.add(fixLinks));
if(!s.readonly){
try{
d.designMode='Off';
d.designMode='On';
}catch(ex){
}}}
setTimeout(function(){
if(t.removed)
return;
t.load({initial:true,format:(s.cleanup_on_startup?'html':'raw')});
t.startContent=t.getContent({format:'raw'});
t.initialized=true;
t.onInit.dispatch(t);
t.execCallback('setupcontent_callback',t.id,t.getBody(),t.getDoc());
t.execCallback('init_instance_callback',t);
t.focus(true);
t.nodeChanged({initial:1});
if(s.content_css){
tinymce.each(explode(s.content_css),function(u){
t.dom.loadCSS(t.documentBaseURI.toAbsolute(u))})}
if(s.auto_focus){
setTimeout(function(){
var ed=tinymce.get(s.auto_focus);
ed.selection.select(ed.getBody(),1);
ed.selection.collapse(1);
ed.getWin().focus()},100)}},1);
e=null;
},
focus:function(sf){
var oed,t=this,ce=t.settings.content_editable,ieRng,controlElm,doc=t.getDoc();
if(!sf){
ieRng=t.selection.getRng();
if(ieRng.item){
controlElm=ieRng.item(0)}
if(!ce)
t.getWin().focus();
if(controlElm&&controlElm.ownerDocument==doc){
ieRng=doc.body.createControlRange();
ieRng.addElement(controlElm);
ieRng.select()}}
if(tinymce.activeEditor!=t){
if((oed=tinymce.activeEditor)!=null)
oed.onDeactivate.dispatch(oed,t);
t.onActivate.dispatch(t,oed)}
tinymce._setActive(t)},
execCallback:function(n){
var t=this,f=t.settings[n],s;
if(!f)
return;
if(t.callbackLookup&&(s=t.callbackLookup[n])){
f=s.func;
s=s.scope;
}
if(is(f,'string')){
s=f.replace(/\.\w+$/,'');
s=s?tinymce.resolve(s):0;
f=tinymce.resolve(f);
t.callbackLookup=t.callbackLookup||{};
t.callbackLookup[n]={func:f,scope:s}}
return f.apply(s||t,Array.prototype.slice.call(arguments,1))},
translate:function(s){
var c=this.settings.language||'en',i18n=tinymce.i18n;
if(!s)
return'';
return i18n[c+'.'+s]||s.replace(/{\#([^}]+)\}/g,function(a,b){
return i18n[c+'.'+b]||'{#'+b+'}';
})},
getLang:function(n,dv){
return tinymce.i18n[(this.settings.language||'en')+'.'+n]||(is(dv)?dv:'{#'+n+'}')},
getParam:function(n,dv,ty){
var tr=tinymce.trim,v=is(this.settings[n])?this.settings[n]:dv,o;
if(ty==='hash'){
o={};
if(is(v,'string')){
each(v.indexOf('=')>0?v.split(/[;,](?![^=;,]*(?:[;,]|$))/):v.split(','),function(v){
v=v.split('=');
if(v.length>1)
o[tr(v[0])]=tr(v[1]);
else
o[tr(v[0])]=tr(v)})}else
o=v;
return o;
}
return v;
},
nodeChanged:function(o){
var t=this,s=t.selection,n=(isIE?s.getNode():s.getStart())||t.getBody();
if(t.initialized){
o=o||{};
n=isIE&&n.ownerDocument!=t.getDoc()?t.getBody():n;
o.parents=[];
t.dom.getParent(n,function(node){
if(node.nodeName=='BODY')
return true;
o.parents.push(node)});
t.onNodeChange.dispatch(
t,
o?o.controlManager||t.controlManager:t.controlManager,
n,
s.isCollapsed(),
o
)}},
addButton:function(n,s){
var t=this;
t.buttons=t.buttons||{};
t.buttons[n]=s;
},
addCommand:function(n,f,s){
this.execCommands[n]={func:f,scope:s||this}},
addQueryStateHandler:function(n,f,s){
this.queryStateCommands[n]={func:f,scope:s||this}},
addQueryValueHandler:function(n,f,s){
this.queryValueCommands[n]={func:f,scope:s||this}},
addShortcut:function(pa,desc,cmd_func,sc){
var t=this,c;
if(!t.settings.custom_shortcuts)
return false;
t.shortcuts=t.shortcuts||{};
if(is(cmd_func,'string')){
c=cmd_func;
cmd_func=function(){
t.execCommand(c,false,null)}}
if(is(cmd_func,'object')){
c=cmd_func;
cmd_func=function(){
t.execCommand(c[0],c[1],c[2])}}
each(explode(pa),function(pa){
var o={
func:cmd_func,
scope:sc||this,
desc:desc,
alt:false,
ctrl:false,
shift:false
};
each(explode(pa,'+'),function(v){
switch(v){
case'alt':
case'ctrl':
case'shift':
o[v]=true;
break;
default:
o.charCode=v.charCodeAt(0);
o.keyCode=v.toUpperCase().charCodeAt(0)}});
t.shortcuts[(o.ctrl?'ctrl':'')+','+(o.alt?'alt':'')+','+(o.shift?'shift':'')+','+o.keyCode]=o;
});
return true;
},
execCommand:function(cmd,ui,val,a){
var t=this,s=0,o,st;
if(!/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint|SelectAll)$/.test(cmd)&&(!a||!a.skip_focus))
t.focus();
o={};
t.onBeforeExecCommand.dispatch(t,cmd,ui,val,o);
if(o.terminate)
return false;
if(t.execCallback('execcommand_callback',t.id,t.selection.getNode(),cmd,ui,val)){
t.onExecCommand.dispatch(t,cmd,ui,val,a);
return true;
}
if(o=t.execCommands[cmd]){
st=o.func.call(o.scope,ui,val);
if(st!==true){
t.onExecCommand.dispatch(t,cmd,ui,val,a);
return st;
}}
each(t.plugins,function(p){
if(p.execCommand&&p.execCommand(cmd,ui,val)){
t.onExecCommand.dispatch(t,cmd,ui,val,a);
s=1;
return false;
}});
if(s)
return true;
if(t.theme&&t.theme.execCommand&&t.theme.execCommand(cmd,ui,val)){
t.onExecCommand.dispatch(t,cmd,ui,val,a);
return true;
}
if(tinymce.GlobalCommands.execCommand(t,cmd,ui,val)){
t.onExecCommand.dispatch(t,cmd,ui,val,a);
return true;
}
if(t.editorCommands.execCommand(cmd,ui,val)){
t.onExecCommand.dispatch(t,cmd,ui,val,a);
return true;
}
t.getDoc().execCommand(cmd,ui,val);
t.onExecCommand.dispatch(t,cmd,ui,val,a)},
queryCommandState:function(cmd){
var t=this,o,s;
if(t._isHidden())
return;
if(o=t.queryStateCommands[cmd]){
s=o.func.call(o.scope);
if(s!==true)
return s;
}
o=t.editorCommands.queryCommandState(cmd);
if(o!==-1)
return o;
try{
return this.getDoc().queryCommandState(cmd)}catch(ex){
}},
queryCommandValue:function(c){
var t=this,o,s;
if(t._isHidden())
return;
if(o=t.queryValueCommands[c]){
s=o.func.call(o.scope);
if(s!==true)
return s;
}
o=t.editorCommands.queryCommandValue(c);
if(is(o))
return o;
try{
return this.getDoc().queryCommandValue(c)}catch(ex){
}},
show:function(){
var t=this;
DOM.show(t.getContainer());
DOM.hide(t.id);
t.load()},
hide:function(){
var t=this,d=t.getDoc();
if(isIE&&d)
d.execCommand('SelectAll');
t.save();
DOM.hide(t.getContainer());
DOM.setStyle(t.id,'display',t.orgDisplay)},
isHidden:function(){
return!DOM.isHidden(this.id)},
setProgressState:function(b,ti,o){
this.onSetProgressState.dispatch(this,b,ti,o);
return b;
},
load:function(o){
var t=this,e=t.getElement(),h;
if(e){
o=o||{};
o.load=true;
h=t.setContent(is(e.value)?e.value:e.innerHTML,o);
o.element=e;
if(!o.no_events)
t.onLoadContent.dispatch(t,o);
o.element=e=null;
return h;
}},
save:function(o){
var t=this,e=t.getElement(),h,f;
if(!e||!t.initialized)
return;
o=o||{};
o.save=true;
if(!o.no_events){
t.undoManager.typing=0;
t.undoManager.add()}
o.element=e;
h=o.content=t.getContent(o);
if(!o.no_events)
t.onSaveContent.dispatch(t,o);
h=o.content;
if(!/TEXTAREA|INPUT/i.test(e.nodeName)){
e.innerHTML=h;
if(f=DOM.getParent(t.id,'form')){
each(f.elements,function(e){
if(e.name==t.id){
e.value=h;
return false;
}})}}else
e.value=h;
o.element=e=null;
return h;
},
setContent:function(h,o){
var t=this;
o=o||{};
o.format=o.format||'html';
o.set=true;
o.content=h;
if(!o.no_events)
t.onBeforeSetContent.dispatch(t,o);
if(!tinymce.isIE&&(h.length===0||/^\s+$/.test(h))){
o.content=t.dom.setHTML(t.getBody(),'<br _mce_bogus="1" />');
o.format='raw';
}
o.content=t.dom.setHTML(t.getBody(),tinymce.trim(o.content));
if(o.format!='raw'&&t.settings.cleanup){
o.getInner=true;
o.content=t.dom.setHTML(t.getBody(),t.serializer.serialize(t.getBody(),o))}
if(!o.no_events)
t.onSetContent.dispatch(t,o);
return o.content;
},
getContent:function(o){
var t=this,h;
o=o||{};
o.format=o.format||'html';
o.get=true;
if(!o.no_events)
t.onBeforeGetContent.dispatch(t,o);
if(o.format!='raw'&&t.settings.cleanup){
o.getInner=true;
h=t.serializer.serialize(t.getBody(),o)}else
h=t.getBody().innerHTML;
h=h.replace(/^\s*|\s*$/g,'');
o.content=h;
if(!o.no_events)
t.onGetContent.dispatch(t,o);
return o.content;
},
isDirty:function(){
var t=this;
return tinymce.trim(t.startContent)!=tinymce.trim(t.getContent({format:'raw',no_events:1}))&&!t.isNotDirty;
},
getContainer:function(){
var t=this;
if(!t.container)
t.container=DOM.get(t.editorContainer||t.id+'_parent');
return t.container;
},
getContentAreaContainer:function(){
return this.contentAreaContainer;
},
getElement:function(){
return DOM.get(this.settings.content_element||this.id)},
getWin:function(){
var t=this,e;
if(!t.contentWindow){
e=DOM.get(t.id+"_ifr");
if(e)
t.contentWindow=e.contentWindow;
}
return t.contentWindow;
},
getDoc:function(){
var t=this,w;
if(!t.contentDocument){
w=t.getWin();
if(w)
t.contentDocument=w.document;
}
return t.contentDocument;
},
getBody:function(){
return this.bodyElement||this.getDoc().body;
},
convertURL:function(u,n,e){
var t=this,s=t.settings;
if(s.urlconverter_callback)
return t.execCallback('urlconverter_callback',u,e,true,n);
if(!s.convert_urls||(e&&e.nodeName=='LINK')||u.indexOf('file:')===0)
return u;
if(s.relative_urls)
return t.documentBaseURI.toRelative(u);
u=t.documentBaseURI.toAbsolute(u,s.remove_script_host);
return u;
},
addVisual:function(e){
var t=this,s=t.settings;
e=e||t.getBody();
if(!is(t.hasVisual))
t.hasVisual=s.visual;
each(t.dom.select('table,a',e),function(e){
var v;
switch(e.nodeName){
case'TABLE':
v=t.dom.getAttrib(e,'border');
if(!v||v=='0'){
if(t.hasVisual)
t.dom.addClass(e,s.visual_table_class);
else
t.dom.removeClass(e,s.visual_table_class)}
return;
case'A':
v=t.dom.getAttrib(e,'name');
if(v){
if(t.hasVisual)
t.dom.addClass(e,'mceItemAnchor');
else
t.dom.removeClass(e,'mceItemAnchor')}
return;
}});
t.onVisualAid.dispatch(t,e,t.hasVisual)},
remove:function(){
var t=this,e=t.getContainer();
t.removed=1;
t.hide();
t.execCallback('remove_instance_callback',t);
t.onRemove.dispatch(t);
t.onExecCommand.listeners=[];
tinymce.remove(t);
DOM.remove(e)},
destroy:function(s){
var t=this;
if(t.destroyed)
return;
if(!s){
tinymce.removeUnload(t.destroy);
tinyMCE.onBeforeUnload.remove(t._beforeUnload);
if(t.theme&&t.theme.destroy)
t.theme.destroy();
t.controlManager.destroy();
t.selection.destroy();
t.dom.destroy();
if(!t.settings.content_editable){
Event.clear(t.getWin());
Event.clear(t.getDoc())}
Event.clear(t.getBody());
Event.clear(t.formElement)}
if(t.formElement){
t.formElement.submit=t.formElement._mceOldSubmit;
t.formElement._mceOldSubmit=null;
}
t.contentAreaContainer=t.formElement=t.container=t.settings.content_element=t.bodyElement=t.contentDocument=t.contentWindow=null;
if(t.selection)
t.selection=t.selection.win=t.selection.dom=t.selection.dom.doc=null;
t.destroyed=1;
},
_addEvents:function(){
var t=this,i,s=t.settings,dom=t.dom,lo={
mouseup:'onMouseUp',
mousedown:'onMouseDown',
click:'onClick',
keyup:'onKeyUp',
keydown:'onKeyDown',
keypress:'onKeyPress',
submit:'onSubmit',
reset:'onReset',
contextmenu:'onContextMenu',
dblclick:'onDblClick',
paste:'onPaste'
};
function eventHandler(e,o){
var ty=e.type;
if(t.removed)
return;
if(t.onEvent.dispatch(t,e,o)!==false){
t[lo[e.fakeType||e.type]].dispatch(t,e,o)}};
each(lo,function(v,k){
switch(k){
case'contextmenu':
if(tinymce.isOpera){
dom.bind(t.getBody(),'mousedown',function(e){
if(e.ctrlKey){
e.fakeType='contextmenu';
eventHandler(e)}})}else
dom.bind(t.getBody(),k,eventHandler);
break;
case'paste':
dom.bind(t.getBody(),k,function(e){
eventHandler(e)});
break;
case'submit':
case'reset':
dom.bind(t.getElement().form||DOM.getParent(t.id,'form'),k,eventHandler);
break;
default:
dom.bind(s.content_editable?t.getBody():t.getDoc(),k,eventHandler)}});
dom.bind(s.content_editable?t.getBody():(isGecko?t.getDoc():t.getWin()),'focus',function(e){
t.focus(true)});
if(tinymce.isGecko){
dom.bind(t.getDoc(),'DOMNodeInserted',function(e){
var v;
e=e.target;
if(e.nodeType===1&&e.nodeName==='IMG'&&(v=e.getAttribute('_mce_src')))
e.src=t.documentBaseURI.toAbsolute(v)})}
if(isGecko){
function setOpts(){
var t=this,d=t.getDoc(),s=t.settings;
if(isGecko&&!s.readonly){
if(t._isHidden()){
try{
if(!s.content_editable)
d.designMode='On';
}catch(ex){
}}
try{
d.execCommand("styleWithCSS",0,false)}catch(ex){
if(!t._isHidden())
try{d.execCommand("useCSS",0,true);}catch(ex){}}
if(!s.table_inline_editing)
try{d.execCommand('enableInlineTableEditing',false,false);}catch(ex){}
if(!s.object_resizing)
try{d.execCommand('enableObjectResizing',false,false);}catch(ex){}}};
t.onBeforeExecCommand.add(setOpts);
t.onMouseDown.add(setOpts)}
if(tinymce.isWebKit){
t.onClick.add(function(ed,e){
e=e.target;
if(e.nodeName=='IMG'||(e.nodeName=='A'&&dom.hasClass(e,'mceItemAnchor'))){
t.selection.getSel().setBaseAndExtent(e,0,e,1);
t.nodeChanged()}})}
t.onMouseUp.add(t.nodeChanged);
t.onKeyUp.add(function(ed,e){
var c=e.keyCode;
if((c>=33&&c<=36)||(c>=37&&c<=40)||c==13||c==45||c==46||c==8||(tinymce.isMac&&(c==91||c==93))||e.ctrlKey)
t.nodeChanged()});
t.onReset.add(function(){
t.setContent(t.startContent,{format:'raw'})});
if(s.custom_shortcuts){
if(s.custom_undo_redo_keyboard_shortcuts){
t.addShortcut('ctrl+z',t.getLang('undo_desc'),'Undo');
t.addShortcut('ctrl+y',t.getLang('redo_desc'),'Redo')}
t.addShortcut('ctrl+b',t.getLang('bold_desc'),'Bold');
t.addShortcut('ctrl+i',t.getLang('italic_desc'),'Italic');
t.addShortcut('ctrl+u',t.getLang('underline_desc'),'Underline');
for(i=1;i<=6;i++)
t.addShortcut('ctrl+'+i,'',['FormatBlock',false,'h'+i]);
t.addShortcut('ctrl+7','',['FormatBlock',false,'<p>']);
t.addShortcut('ctrl+8','',['FormatBlock',false,'<div>']);
t.addShortcut('ctrl+9','',['FormatBlock',false,'<address>']);
function find(e){
var v=null;
if(!e.altKey&&!e.ctrlKey&&!e.metaKey)
return v;
each(t.shortcuts,function(o){
if(tinymce.isMac&&o.ctrl!=e.metaKey)
return;
else if(!tinymce.isMac&&o.ctrl!=e.ctrlKey)
return;
if(o.alt!=e.altKey)
return;
if(o.shift!=e.shiftKey)
return;
if(e.keyCode==o.keyCode||(e.charCode&&e.charCode==o.charCode)){
v=o;
return false;
}});
return v;
};
t.onKeyUp.add(function(ed,e){
var o=find(e);
if(o)
return Event.cancel(e)});
t.onKeyPress.add(function(ed,e){
var o=find(e);
if(o)
return Event.cancel(e)});
t.onKeyDown.add(function(ed,e){
var o=find(e);
if(o){
o.func.call(o.scope);
return Event.cancel(e)}})}
if(tinymce.isIE){
dom.bind(t.getDoc(),'controlselect',function(e){
var re=t.resizeInfo,cb;
e=e.target;
if(e.nodeName!=='IMG')
return;
if(re)
dom.unbind(re.node,re.ev,re.cb);
if(!dom.hasClass(e,'mceItemNoResize')){
ev='resizeend';
cb=dom.bind(e,ev,function(e){
var v;
e=e.target;
if(v=dom.getStyle(e,'width')){
dom.setAttrib(e,'width',v.replace(/[^0-9%]+/g,''));
dom.setStyle(e,'width','')}
if(v=dom.getStyle(e,'height')){
dom.setAttrib(e,'height',v.replace(/[^0-9%]+/g,''));
dom.setStyle(e,'height','')}})}else{
ev='resizestart';
cb=dom.bind(e,'resizestart',Event.cancel,Event)}
re=t.resizeInfo={
node:e,
ev:ev,
cb:cb
}});
t.onKeyDown.add(function(ed,e){
switch(e.keyCode){
case 8:
if(t.selection.getRng().item){
ed.dom.remove(t.selection.getRng().item(0));
return Event.cancel(e)}}})}
if(tinymce.isOpera){
t.onClick.add(function(ed,e){
Event.prevent(e)})}
if(s.custom_undo_redo){
function addUndo(){
t.undoManager.typing=0;
t.undoManager.add()};
dom.bind(t.getDoc(),'focusout',function(e){
if(!t.removed&&t.undoManager.typing)
addUndo()});
t.onKeyUp.add(function(ed,e){
if((e.keyCode>=33&&e.keyCode<=36)||(e.keyCode>=37&&e.keyCode<=40)||e.keyCode==13||e.keyCode==45||e.ctrlKey)
addUndo()});
t.onKeyDown.add(function(ed,e){
var rng,parent,bookmark;
if(isIE&&e.keyCode==46){
rng=t.selection.getRng();
if(rng.parentElement){
parent=rng.parentElement();
if(e.ctrlKey){
rng.moveEnd('word',1);
rng.select()}
t.selection.getSel().clear();
if(rng.parentElement()==parent){
bookmark=t.selection.getBookmark();
try{
parent.innerHTML=parent.innerHTML;
}catch(ex){
}
t.selection.moveToBookmark(bookmark)}
e.preventDefault();
return;
}}
if((e.keyCode>=33&&e.keyCode<=36)||(e.keyCode>=37&&e.keyCode<=40)||e.keyCode==13||e.keyCode==45){
if(t.undoManager.typing)
addUndo();
return;
}
if(!t.undoManager.typing){
t.undoManager.add();
t.undoManager.typing=1;
}});
t.onMouseDown.add(function(){
if(t.undoManager.typing)
addUndo()})}},
_isHidden:function(){
var s;
if(!isGecko)
return 0;
s=this.selection.getSel();
return(!s||!s.rangeCount||s.rangeCount==0)},
_fixNesting:function(s){
var d=[],i;
s=s.replace(/<(\/)?([^\s>]+)[^>]*?>/g,function(a,b,c){
var e;
if(b==='/'){
if(!d.length)
return'';
if(c!==d[d.length-1].tag){
for(i=d.length-1;i>=0;i--){
if(d[i].tag===c){
d[i].close=1;
break;
}}
return'';
}else{
d.pop();
if(d.length&&d[d.length-1].close){
a=a+'</'+d[d.length-1].tag+'>';
d.pop()}}}else{
if(/^(br|hr|input|meta|img|link|param)$/i.test(c))
return a;
if(/\/>$/.test(a))
return a;
d.push({tag:c})}
return a;
});
for(i=d.length-1;i>=0;i--)
s+='</'+d[i].tag+'>';
return s;
}})})(tinymce);
(function(tinymce){
var each=tinymce.each,undefined,TRUE=true,FALSE=false;
tinymce.EditorCommands=function(editor){
var dom=editor.dom,
selection=editor.selection,
commands={state:{},exec:{},value:{}},
settings=editor.settings,
bookmark;
function execCommand(command,ui,value){
var func;
command=command.toLowerCase();
if(func=commands.exec[command]){
func(command,ui,value);
return TRUE;
}
return FALSE;
};
function queryCommandState(command){
var func;
command=command.toLowerCase();
if(func=commands.state[command])
return func(command);
return-1;
};
function queryCommandValue(command){
var func;
command=command.toLowerCase();
if(func=commands.value[command])
return func(command);
return FALSE;
};
function addCommands(command_list,type){
type=type||'exec';
each(command_list,function(callback,command){
each(command.toLowerCase().split(','),function(command){
commands[type][command]=callback;
})})};
tinymce.extend(this,{
execCommand:execCommand,
queryCommandState:queryCommandState,
queryCommandValue:queryCommandValue,
addCommands:addCommands
});
function execNativeCommand(command,ui,value){
if(ui===undefined)
ui=FALSE;
if(value===undefined)
value=null;
return editor.getDoc().execCommand(command,ui,value)};
function isFormatMatch(name){
return editor.formatter.match(name)};
function toggleFormat(name,value){
editor.formatter.toggle(name,value?{value:value}:undefined)};
function storeSelection(type){
bookmark=selection.getBookmark(type)};
function restoreSelection(){
selection.moveToBookmark(bookmark)};
addCommands({
'mceResetDesignMode,mceBeginUndoLevel':function(){},
'mceEndUndoLevel,mceAddUndoLevel':function(){
editor.undoManager.add()},
'Cut,Copy,Paste':function(command){
var doc=editor.getDoc(),failed;
try{
execNativeCommand(command)}catch(ex){
failed=TRUE;
}
if(failed||!doc.queryCommandSupported(command)){
if(tinymce.isGecko){
editor.windowManager.confirm(editor.getLang('clipboard_msg'),function(state){
if(state)
open('http://www.mozilla.org/editor/midasdemo/securityprefs.html','_blank')})}else
editor.windowManager.alert(editor.getLang('clipboard_no_support'))}},
unlink:function(command){
if(selection.isCollapsed())
selection.select(selection.getNode());
execNativeCommand(command);
selection.collapse(FALSE)},
'JustifyLeft,JustifyCenter,JustifyRight,JustifyFull':function(command){
var align=command.substring(7);
each('left,center,right,full'.split(','),function(name){
if(align!=name)
editor.formatter.remove('align'+name)});
toggleFormat('align'+align)},
'InsertUnorderedList,InsertOrderedList':function(command){
var listElm,listParent;
execNativeCommand(command);
listElm=dom.getParent(selection.getNode(),'ol,ul');
if(listElm){
listParent=listElm.parentNode;
if(/^(H[1-6]|P|ADDRESS|PRE)$/.test(listParent.nodeName)){
storeSelection();
dom.split(listParent,listElm);
restoreSelection()}}},
'Bold,Italic,Underline,Strikethrough':function(command){
toggleFormat(command)},
'ForeColor,HiliteColor,FontName':function(command,ui,value){
toggleFormat(command,value)},
FontSize:function(command,ui,value){
var fontClasses,fontSizes;
if(value>=1&&value<=7){
fontSizes=tinymce.explode(settings.font_size_style_values);
fontClasses=tinymce.explode(settings.font_size_classes);
if(fontClasses)
value=fontClasses[value-1]||value;
else
value=fontSizes[value-1]||value;
}
toggleFormat(command,value)},
RemoveFormat:function(command){
editor.formatter.remove(command)},
mceBlockQuote:function(command){
toggleFormat('blockquote')},
FormatBlock:function(command,ui,value){
return toggleFormat(value||'p')},
mceCleanup:function(){
var bookmark=selection.getBookmark();
editor.setContent(editor.getContent({cleanup:TRUE}),{cleanup:TRUE});
selection.moveToBookmark(bookmark)},
mceRemoveNode:function(command,ui,value){
var node=value||selection.getNode();
if(node!=editor.getBody()){
storeSelection();
editor.dom.remove(node,TRUE);
restoreSelection()}},
mceSelectNodeDepth:function(command,ui,value){
var counter=0;
dom.getParent(selection.getNode(),function(node){
if(node.nodeType==1&&counter++==value){
selection.select(node);
return FALSE;
}},editor.getBody())},
mceSelectNode:function(command,ui,value){
selection.select(value)},
mceInsertContent:function(command,ui,value){
selection.setContent(value)},
mceInsertRawHTML:function(command,ui,value){
selection.setContent('tiny_mce_marker');
editor.setContent(editor.getContent().replace(/tiny_mce_marker/g,function(){return value}))},
mceSetContent:function(command,ui,value){
editor.setContent(value)},
'Indent,Outdent':function(command){
var intentValue,indentUnit,value;
intentValue=settings.indentation;
indentUnit=/[a-z%]+$/i.exec(intentValue);
intentValue=parseInt(intentValue);
if(!queryCommandState('InsertUnorderedList')&&!queryCommandState('InsertOrderedList')){
each(selection.getSelectedBlocks(),function(element){
if(command=='outdent'){
value=Math.max(0,parseInt(element.style.paddingLeft||0)-intentValue);
dom.setStyle(element,'paddingLeft',value?value+indentUnit:'')}else
dom.setStyle(element,'paddingLeft',(parseInt(element.style.paddingLeft||0)+intentValue)+indentUnit)})}else
execNativeCommand(command)},
mceRepaint:function(){
var bookmark;
if(tinymce.isGecko){
try{
storeSelection(TRUE);
if(selection.getSel())
selection.getSel().selectAllChildren(editor.getBody());
selection.collapse(TRUE);
restoreSelection()}catch(ex){
}}},
mceToggleFormat:function(command,ui,value){
editor.formatter.toggle(value)},
InsertHorizontalRule:function(){
selection.setContent('<hr />')},
mceToggleVisualAid:function(){
editor.hasVisual=!editor.hasVisual;
editor.addVisual()},
mceReplaceContent:function(command,ui,value){
selection.setContent(value.replace(/\{\$selection\}/g,selection.getContent({format:'text'})))},
mceInsertLink:function(command,ui,value){
var link=dom.getParent(selection.getNode(),'a');
if(tinymce.is(value,'string'))
value={href:value};
if(!link){
execNativeCommand('CreateLink',FALSE,'javascript:mctmp(0);');
each(dom.select('a[href=javascript:mctmp(0);]'),function(link){
dom.setAttribs(link,value)})}else{
if(value.href)
dom.setAttribs(link,value);
else
editor.dom.remove(link,TRUE)}},
selectAll:function(){
var root=dom.getRoot(),rng=dom.createRng();
rng.setStart(root,0);
rng.setEnd(root,root.childNodes.length);
editor.selection.setRng(rng)}});
addCommands({
'JustifyLeft,JustifyCenter,JustifyRight,JustifyFull':function(command){
return isFormatMatch('align'+command.substring(7))},
'Bold,Italic,Underline,Strikethrough':function(command){
return isFormatMatch(command)},
mceBlockQuote:function(){
return isFormatMatch('blockquote')},
Outdent:function(){
var node;
if(settings.inline_styles){
if((node=dom.getParent(selection.getStart(),dom.isBlock))&&parseInt(node.style.paddingLeft)>0)
return TRUE;
if((node=dom.getParent(selection.getEnd(),dom.isBlock))&&parseInt(node.style.paddingLeft)>0)
return TRUE;
}
return queryCommandState('InsertUnorderedList')||queryCommandState('InsertOrderedList')||(!settings.inline_styles&&!!dom.getParent(selection.getNode(),'BLOCKQUOTE'))},
'InsertUnorderedList,InsertOrderedList':function(command){
return dom.getParent(selection.getNode(),command=='insertunorderedlist'?'UL':'OL')}},'state');
addCommands({
'FontSize,FontName':function(command){
var value=0,parent;
if(parent=dom.getParent(selection.getNode(),'span')){
if(command=='fontsize')
value=parent.style.fontSize;
else
value=parent.style.fontFamily.replace(/, /g,',').replace(/[\'\"]/g,'').toLowerCase()}
return value;
}},'value');
if(settings.custom_undo_redo){
addCommands({
Undo:function(){
editor.undoManager.undo()},
Redo:function(){
editor.undoManager.redo()}})}}})(tinymce);
(function(tinymce){
var Dispatcher=tinymce.util.Dispatcher;
tinymce.UndoManager=function(editor){
var self,index=0,data=[];
function getContent(){
return tinymce.trim(editor.getContent({format:'raw',no_events:1}))};
return self={
typing:0,
onAdd:new Dispatcher(self),
onUndo:new Dispatcher(self),
onRedo:new Dispatcher(self),
add:function(level){
var i,settings=editor.settings,lastLevel;
level=level||{};
level.content=getContent();
lastLevel=data[index];
if(lastLevel&&lastLevel.content==level.content){
if(index>0||data.length==1)
return null;
}
if(settings.custom_undo_redo_levels){
if(data.length>settings.custom_undo_redo_levels){
for(i=0;i<data.length-1;i++)
data[i]=data[i+1];
data.length--;
index=data.length;
}}
level.bookmark=editor.selection.getBookmark(2,true);
if(index<data.length-1){
if(index==0)
data=[];
else
data.length=index+1;
}
data.push(level);
index=data.length-1;
self.onAdd.dispatch(self,level);
editor.isNotDirty=0;
return level;
},
undo:function(){
var level,i;
if(self.typing){
self.add();
self.typing=0;
}
if(index>0){
level=data[--index];
editor.setContent(level.content,{format:'raw'});
editor.selection.moveToBookmark(level.bookmark);
self.onUndo.dispatch(self,level)}
return level;
},
redo:function(){
var level;
if(index<data.length-1){
level=data[++index];
editor.setContent(level.content,{format:'raw'});
editor.selection.moveToBookmark(level.bookmark);
self.onRedo.dispatch(self,level)}
return level;
},
clear:function(){
data=[];
index=self.typing=0;
},
hasUndo:function(){
return index>0||self.typing;
},
hasRedo:function(){
return index<data.length-1;
}}}})(tinymce);
(function(tinymce){
var Event=tinymce.dom.Event,
isIE=tinymce.isIE,
isGecko=tinymce.isGecko,
isOpera=tinymce.isOpera,
each=tinymce.each,
extend=tinymce.extend,
TRUE=true,
FALSE=false;
function cloneFormats(node){
var clone,temp,inner;
do{
if(/^(SPAN|STRONG|B|EM|I|FONT|STRIKE|U)$/.test(node.nodeName)){
if(clone){
temp=node.cloneNode(false);
temp.appendChild(clone);
clone=temp;
}else{
clone=inner=node.cloneNode(false)}
clone.removeAttribute('id')}}while(node=node.parentNode);
if(clone)
return{wrapper:clone,inner:inner}};
function isAtEnd(rng,par){
var rng2=par.ownerDocument.createRange();
rng2.setStart(rng.endContainer,rng.endOffset);
rng2.setEndAfter(par);
return rng2.cloneContents().textContent.length==0;
};
function isEmpty(n){
n=n.innerHTML;
n=n.replace(/<(img|hr|table|input|select|textarea)[ \>]/gi,'-');
n=n.replace(/<[^>]+>/g,'');
return n.replace(/[ \u00a0\t\r\n]+/g,'')=='';
};
function splitList(selection,dom,li){
var listBlock,block;
if(isEmpty(li)){
listBlock=dom.getParent(li,'ul,ol');
if(!dom.getParent(listBlock.parentNode,'ul,ol')){
dom.split(listBlock,li);
block=dom.create('p',0,'<br _mce_bogus="1" />');
dom.replace(block,li);
selection.select(block,1)}
return FALSE;
}
return TRUE;
};
tinymce.create('tinymce.ForceBlocks',{
ForceBlocks:function(ed){
var t=this,s=ed.settings,elm;
t.editor=ed;
t.dom=ed.dom;
elm=(s.forced_root_block||'p').toLowerCase();
s.element=elm.toUpperCase();
ed.onPreInit.add(t.setup,t);
t.reOpera=new RegExp('(\\u00a0|&#160;|&nbsp;)<\/'+elm+'>','gi');
t.rePadd=new RegExp('<p( )([^>]+)><\\\/p>|<p( )([^>]+)\\\/>|<p( )([^>]+)>\\s+<\\\/p>|<p><\\\/p>|<p\\\/>|<p>\\s+<\\\/p>'.replace(/p/g,elm),'gi');
t.reNbsp2BR1=new RegExp('<p( )([^>]+)>[\\s\\u00a0]+<\\\/p>|<p>[\\s\\u00a0]+<\\\/p>'.replace(/p/g,elm),'gi');
t.reNbsp2BR2=new RegExp('<%p()([^>]+)>(&nbsp;|&#160;)<\\\/%p>|<%p>(&nbsp;|&#160;)<\\\/%p>'.replace(/%p/g,elm),'gi');
t.reBR2Nbsp=new RegExp('<p( )([^>]+)>\\s*<br \\\/>\\s*<\\\/p>|<p>\\s*<br \\\/>\\s*<\\\/p>'.replace(/p/g,elm),'gi');
function padd(ed,o){
if(isOpera)
o.content=o.content.replace(t.reOpera,'</'+elm+'>');
o.content=tinymce._replace(t.rePadd,'<'+elm+'$1$2$3$4$5$6>\u00a0</'+elm+'>',o.content);
if(!isIE&&!isOpera&&o.set){
o.content=o.content.replace(t.reNbsp2BR1,'<'+elm+'$1$2><br /></'+elm+'>');
o.content=o.content.replace(t.reNbsp2BR2,'<'+elm+'$1$2><br /></'+elm+'>')}else
o.content=tinymce._replace(t.reBR2Nbsp,'<'+elm+'$1$2>\u00a0</'+elm+'>',o.content)};
ed.onBeforeSetContent.add(padd);
ed.onPostProcess.add(padd);
if(s.forced_root_block){
ed.onInit.add(t.forceRoots,t);
ed.onSetContent.add(t.forceRoots,t);
ed.onBeforeGetContent.add(t.forceRoots,t)}},
setup:function(){
var t=this,ed=t.editor,s=ed.settings,dom=ed.dom,selection=ed.selection;
if(s.forced_root_block){
ed.onBeforeExecCommand.add(t.forceRoots,t);
ed.onKeyUp.add(t.forceRoots,t);
ed.onPreProcess.add(t.forceRoots,t)}
if(s.force_br_newlines){
if(isIE){
ed.onKeyPress.add(function(ed,e){
var n;
if(e.keyCode==13&&selection.getNode().nodeName!='LI'){
selection.setContent('<br id="__" /> ',{format:'raw'});
n=dom.get('__');
n.removeAttribute('id');
selection.select(n);
selection.collapse();
return Event.cancel(e)}})}}
if(s.force_p_newlines){
if(!isIE){
ed.onKeyPress.add(function(ed,e){
if(e.keyCode==13&&!e.shiftKey&&!t.insertPara(e))
Event.cancel(e)})}else{
tinymce.addUnload(function(){
t._previousFormats=0;
});
ed.onKeyPress.add(function(ed,e){
t._previousFormats=0;
if(e.keyCode==13&&!e.shiftKey&&ed.selection.isCollapsed()&&s.keep_styles)
t._previousFormats=cloneFormats(ed.selection.getStart())});
ed.onKeyUp.add(function(ed,e){
if(e.keyCode==13&&!e.shiftKey){
var parent=ed.selection.getStart(),fmt=t._previousFormats;
if(!parent.hasChildNodes()&&fmt){
parent=dom.getParent(parent,dom.isBlock);
if(parent&&parent.nodeName!='LI'){
parent.innerHTML='';
if(t._previousFormats){
parent.appendChild(fmt.wrapper);
fmt.inner.innerHTML='\uFEFF';
}else
parent.innerHTML='\uFEFF';
selection.select(parent,1);
ed.getDoc().execCommand('Delete',false,null);
t._previousFormats=0;
}}}})}
if(isGecko){
ed.onKeyDown.add(function(ed,e){
if((e.keyCode==8||e.keyCode==46)&&!e.shiftKey)
t.backspaceDelete(e,e.keyCode==8)})}}
if(tinymce.isWebKit){
function insertBr(ed){
var rng=selection.getRng(),br,div=dom.create('div',null,' '),divYPos,vpHeight=dom.getViewPort(ed.getWin()).h;
rng.insertNode(br=dom.create('br'));
rng.setStartAfter(br);
rng.setEndAfter(br);
selection.setRng(rng);
if(selection.getSel().focusNode==br.previousSibling){
selection.select(dom.insertAfter(dom.doc.createTextNode('\u00a0'),br));
selection.collapse(TRUE)}
dom.insertAfter(div,br);
divYPos=dom.getPos(div).y;
dom.remove(div);
if(divYPos>vpHeight)
ed.getWin().scrollTo(0,divYPos)};
ed.onKeyPress.add(function(ed,e){
if(e.keyCode==13&&(e.shiftKey||(s.force_br_newlines&&!dom.getParent(selection.getNode(),'h1,h2,h3,h4,h5,h6,ol,ul')))){
insertBr(ed);
Event.cancel(e)}})}
ed.onPreProcess.add(function(ed,o){
each(dom.select('p,h1,h2,h3,h4,h5,h6,div',o.node),function(p){
if(isEmpty(p)){
each(dom.select('span,em,strong,b,i',o.node),function(n){
if(!n.hasChildNodes()){
n.appendChild(ed.getDoc().createTextNode('\u00a0'));
return FALSE;
}})}})});
if(isIE){
if(s.element!='P'){
ed.onKeyPress.add(function(ed,e){
t.lastElm=selection.getNode().nodeName;
});
ed.onKeyUp.add(function(ed,e){
var bl,n=selection.getNode(),b=ed.getBody();
if(b.childNodes.length===1&&n.nodeName=='P'){
n=dom.rename(n,s.element);
selection.select(n);
selection.collapse();
ed.nodeChanged()}else if(e.keyCode==13&&!e.shiftKey&&t.lastElm!='P'){
bl=dom.getParent(n,'p');
if(bl){
dom.rename(bl,s.element);
ed.nodeChanged()}}})}}},
find:function(n,t,s){
var ed=this.editor,w=ed.getDoc().createTreeWalker(n,4,null,FALSE),c=-1;
while(n=w.nextNode()){
c++;
if(t==0&&n==s)
return c;
if(t==1&&c==s)
return n;
}
return-1;
},
forceRoots:function(ed,e){
var t=this,ed=t.editor,b=ed.getBody(),d=ed.getDoc(),se=ed.selection,s=se.getSel(),r=se.getRng(),si=-2,ei,so,eo,tr,c=-0xFFFFFF;
var nx,bl,bp,sp,le,nl=b.childNodes,i,n,eid;
for(i=nl.length-1;i>=0;i--){
nx=nl[i];
if(nx.nodeType===1&&nx.getAttribute('_mce_type')){
bl=null;
continue;
}
if(nx.nodeType===3||(!t.dom.isBlock(nx)&&nx.nodeType!==8&&!/^(script|mce:script|style|mce:style)$/i.test(nx.nodeName))){
if(!bl){
if(nx.nodeType!=3||/[^\s]/g.test(nx.nodeValue)){
if(si==-2&&r){
if(!isIE||r.setStart){
if(r.startContainer.nodeType==1&&(n=r.startContainer.childNodes[r.startOffset])&&n.nodeType==1){
eid=n.getAttribute("id");
n.setAttribute("id","__mce")}else{
if(ed.dom.getParent(r.startContainer,function(e){return e===b;})){
so=r.startOffset;
eo=r.endOffset;
si=t.find(b,0,r.startContainer);
ei=t.find(b,0,r.endContainer)}}}else{
if(r.item){
tr=d.body.createTextRange();
tr.moveToElementText(r.item(0));
r=tr;
}
tr=d.body.createTextRange();
tr.moveToElementText(b);
tr.collapse(1);
bp=tr.move('character',c)*-1;
tr=r.duplicate();
tr.collapse(1);
sp=tr.move('character',c)*-1;
tr=r.duplicate();
tr.collapse(0);
le=(tr.move('character',c)*-1)-sp;
si=sp-bp;
ei=le;
}}
bl=ed.dom.create(ed.settings.forced_root_block);
nx.parentNode.replaceChild(bl,nx);
bl.appendChild(nx)}}else{
if(bl.hasChildNodes())
bl.insertBefore(nx,bl.firstChild);
else
bl.appendChild(nx)}}else
bl=null;
}
if(si!=-2){
if(!isIE||r.setStart){
bl=b.getElementsByTagName(ed.settings.element)[0];
r=d.createRange();
if(si!=-1)
r.setStart(t.find(b,1,si),so);
else
r.setStart(bl,0);
if(ei!=-1)
r.setEnd(t.find(b,1,ei),eo);
else
r.setEnd(bl,0);
if(s){
s.removeAllRanges();
s.addRange(r)}}else{
try{
r=s.createRange();
r.moveToElementText(b);
r.collapse(1);
r.moveStart('character',si);
r.moveEnd('character',ei);
r.select()}catch(ex){
}}}else if((!isIE||r.setStart)&&(n=ed.dom.get('__mce'))){
if(eid)
n.setAttribute('id',eid);
else
n.removeAttribute('id');
r=d.createRange();
r.setStartBefore(n);
r.setEndBefore(n);
se.setRng(r)}},
getParentBlock:function(n){
var d=this.dom;
return d.getParent(n,d.isBlock)},
insertPara:function(e){
var t=this,ed=t.editor,dom=ed.dom,d=ed.getDoc(),se=ed.settings,s=ed.selection.getSel(),r=s.getRangeAt(0),b=d.body;
var rb,ra,dir,sn,so,en,eo,sb,eb,bn,bef,aft,sc,ec,n,vp=dom.getViewPort(ed.getWin()),y,ch,car;
rb=d.createRange();
rb.setStart(s.anchorNode,s.anchorOffset);
rb.collapse(TRUE);
ra=d.createRange();
ra.setStart(s.focusNode,s.focusOffset);
ra.collapse(TRUE);
dir=rb.compareBoundaryPoints(rb.START_TO_END,ra)<0;
sn=dir?s.anchorNode:s.focusNode;
so=dir?s.anchorOffset:s.focusOffset;
en=dir?s.focusNode:s.anchorNode;
eo=dir?s.focusOffset:s.anchorOffset;
if(sn===en&&/^(TD|TH)$/.test(sn.nodeName)){
if(sn.firstChild.nodeName=='BR')
dom.remove(sn.firstChild);
if(sn.childNodes.length==0){
ed.dom.add(sn,se.element,null,'<br />');
aft=ed.dom.add(sn,se.element,null,'<br />')}else{
n=sn.innerHTML;
sn.innerHTML='';
ed.dom.add(sn,se.element,null,n);
aft=ed.dom.add(sn,se.element,null,'<br />')}
r=d.createRange();
r.selectNodeContents(aft);
r.collapse(1);
ed.selection.setRng(r);
return FALSE;
}
if(sn==b&&en==b&&b.firstChild&&ed.dom.isBlock(b.firstChild)){
sn=en=sn.firstChild;
so=eo=0;
rb=d.createRange();
rb.setStart(sn,0);
ra=d.createRange();
ra.setStart(en,0)}
sn=sn.nodeName=="HTML"?d.body:sn;
sn=sn.nodeName=="BODY"?sn.firstChild:sn;
en=en.nodeName=="HTML"?d.body:en;
en=en.nodeName=="BODY"?en.firstChild:en;
sb=t.getParentBlock(sn);
eb=t.getParentBlock(en);
bn=sb?sb.nodeName:se.element;
if(n=t.dom.getParent(sb,'li,pre')){
if(n.nodeName=='LI')
return splitList(ed.selection,t.dom,n);
return TRUE;
}
if(sb&&(sb.nodeName=='CAPTION'||/absolute|relative|fixed/gi.test(dom.getStyle(sb,'position',1)))){
bn=se.element;
sb=null;
}
if(eb&&(eb.nodeName=='CAPTION'||/absolute|relative|fixed/gi.test(dom.getStyle(sb,'position',1)))){
bn=se.element;
eb=null;
}
if(/(TD|TABLE|TH|CAPTION)/.test(bn)||(sb&&bn=="DIV"&&/left|right/gi.test(dom.getStyle(sb,'float',1)))){
bn=se.element;
sb=eb=null;
}
bef=(sb&&sb.nodeName==bn)?sb.cloneNode(0):ed.dom.create(bn);
aft=(eb&&eb.nodeName==bn)?eb.cloneNode(0):ed.dom.create(bn);
aft.removeAttribute('id');
if(/^(H[1-6])$/.test(bn)&&isAtEnd(r,sb))
aft=ed.dom.create(se.element);
n=sc=sn;
do{
if(n==b||n.nodeType==9||t.dom.isBlock(n)||/(TD|TABLE|TH|CAPTION)/.test(n.nodeName))
break;
sc=n;
}while((n=n.previousSibling?n.previousSibling:n.parentNode));
n=ec=en;
do{
if(n==b||n.nodeType==9||t.dom.isBlock(n)||/(TD|TABLE|TH|CAPTION)/.test(n.nodeName))
break;
ec=n;
}while((n=n.nextSibling?n.nextSibling:n.parentNode));
if(sc.nodeName==bn)
rb.setStart(sc,0);
else
rb.setStartBefore(sc);
rb.setEnd(sn,so);
bef.appendChild(rb.cloneContents()||d.createTextNode(''));
try{
ra.setEndAfter(ec)}catch(ex){
}
ra.setStart(en,eo);
aft.appendChild(ra.cloneContents()||d.createTextNode(''));
r=d.createRange();
if(!sc.previousSibling&&sc.parentNode.nodeName==bn){
r.setStartBefore(sc.parentNode)}else{
if(rb.startContainer.nodeName==bn&&rb.startOffset==0)
r.setStartBefore(rb.startContainer);
else
r.setStart(rb.startContainer,rb.startOffset)}
if(!ec.nextSibling&&ec.parentNode.nodeName==bn)
r.setEndAfter(ec.parentNode);
else
r.setEnd(ra.endContainer,ra.endOffset);
r.deleteContents();
if(isOpera)
ed.getWin().scrollTo(0,vp.y);
if(bef.firstChild&&bef.firstChild.nodeName==bn)
bef.innerHTML=bef.firstChild.innerHTML;
if(aft.firstChild&&aft.firstChild.nodeName==bn)
aft.innerHTML=aft.firstChild.innerHTML;
if(isEmpty(bef))
bef.innerHTML='<br />';
function appendStyles(e,en){
var nl=[],nn,n,i;
e.innerHTML='';
if(se.keep_styles){
n=en;
do{
if(/^(SPAN|STRONG|B|EM|I|FONT|STRIKE|U)$/.test(n.nodeName)){
nn=n.cloneNode(FALSE);
dom.setAttrib(nn,'id','');
nl.push(nn)}}while(n=n.parentNode)}
if(nl.length>0){
for(i=nl.length-1,nn=e;i>=0;i--)
nn=nn.appendChild(nl[i]);
nl[0].innerHTML=isOpera?'&nbsp;':'<br />';
return nl[0];
}else
e.innerHTML=isOpera?'&nbsp;':'<br />';
};
if(isEmpty(aft))
car=appendStyles(aft,en);
if(isOpera&&parseFloat(opera.version())<9.5){
r.insertNode(bef);
r.insertNode(aft)}else{
r.insertNode(aft);
r.insertNode(bef)}
aft.normalize();
bef.normalize();
function first(n){
return d.createTreeWalker(n,NodeFilter.SHOW_TEXT,null,FALSE).nextNode()||n;
};
r=d.createRange();
r.selectNodeContents(isGecko?first(car||aft):car||aft);
r.collapse(1);
s.removeAllRanges();
s.addRange(r);
y=ed.dom.getPos(aft).y;
ch=aft.clientHeight;
if(y<vp.y||y+ch>vp.y+vp.h){
ed.getWin().scrollTo(0,y<vp.y?y:y-vp.h+25)}
return FALSE;
},
backspaceDelete:function(e,bs){
var t=this,ed=t.editor,b=ed.getBody(),dom=ed.dom,n,se=ed.selection,r=se.getRng(),sc=r.startContainer,n,w,tn,walker;
if(!bs&&r.collapsed&&sc.nodeType==1&&r.startOffset==sc.childNodes.length){
walker=new tinymce.dom.TreeWalker(sc.lastChild,sc);
for(n=sc.lastChild;n;n=walker.prev()){
if(n.nodeType==3){
r.setStart(n,n.nodeValue.length);
r.collapse(true);
se.setRng(r);
return;
}}}
if(sc&&ed.dom.isBlock(sc)&&!/^(TD|TH)$/.test(sc.nodeName)&&bs){
if(sc.childNodes.length==0||(sc.childNodes.length==1&&sc.firstChild.nodeName=='BR')){
n=sc;
while((n=n.previousSibling)&&!ed.dom.isBlock(n));
if(n){
if(sc!=b.firstChild){
w=ed.dom.doc.createTreeWalker(n,NodeFilter.SHOW_TEXT,null,FALSE);
while(tn=w.nextNode())
n=tn;
r=ed.getDoc().createRange();
r.setStart(n,n.nodeValue?n.nodeValue.length:0);
r.setEnd(n,n.nodeValue?n.nodeValue.length:0);
se.setRng(r);
ed.dom.remove(sc)}
return Event.cancel(e)}}}}})})(tinymce);
(function(tinymce){
var DOM=tinymce.DOM,Event=tinymce.dom.Event,each=tinymce.each,extend=tinymce.extend;
tinymce.create('tinymce.ControlManager',{
ControlManager:function(ed,s){
var t=this,i;
s=s||{};
t.editor=ed;
t.controls={};
t.onAdd=new tinymce.util.Dispatcher(t);
t.onPostRender=new tinymce.util.Dispatcher(t);
t.prefix=s.prefix||ed.id+'_';
t._cls={};
t.onPostRender.add(function(){
each(t.controls,function(c){
c.postRender()})})},
get:function(id){
return this.controls[this.prefix+id]||this.controls[id];
},
setActive:function(id,s){
var c=null;
if(c=this.get(id))
c.setActive(s);
return c;
},
setDisabled:function(id,s){
var c=null;
if(c=this.get(id))
c.setDisabled(s);
return c;
},
add:function(c){
var t=this;
if(c){
t.controls[c.id]=c;
t.onAdd.dispatch(c,t)}
return c;
},
createControl:function(n){
var c,t=this,ed=t.editor;
each(ed.plugins,function(p){
if(p.createControl){
c=p.createControl(n,t);
if(c)
return false;
}});
switch(n){
case"|":
case"separator":
return t.createSeparator()}
if(!c&&ed.buttons&&(c=ed.buttons[n]))
return t.createButton(n,c);
return t.add(c)},
createDropMenu:function(id,s,cc){
var t=this,ed=t.editor,c,bm,v,cls;
s=extend({
'class':'mceDropDown',
constrain:ed.settings.constrain_menus
},s);
s['class']=s['class']+' '+ed.getParam('skin')+'Skin';
if(v=ed.getParam('skin_variant'))
s['class']+=' '+ed.getParam('skin')+'Skin'+v.substring(0,1).toUpperCase()+v.substring(1);
id=t.prefix+id;
cls=cc||t._cls.dropmenu||tinymce.ui.DropMenu;
c=t.controls[id]=new cls(id,s);
c.onAddItem.add(function(c,o){
var s=o.settings;
s.title=ed.getLang(s.title,s.title);
if(!s.onclick){
s.onclick=function(v){
if(s.cmd)
ed.execCommand(s.cmd,s.ui||false,s.value)}}});
ed.onRemove.add(function(){
c.destroy()});
if(tinymce.isIE){
c.onShowMenu.add(function(){
ed.focus();
bm=ed.selection.getBookmark(1)});
c.onHideMenu.add(function(){
if(bm){
ed.selection.moveToBookmark(bm);
bm=0;
}})}
return t.add(c)},
createListBox:function(id,s,cc){
var t=this,ed=t.editor,cmd,c,cls;
if(t.get(id))
return null;
s.title=ed.translate(s.title);
s.scope=s.scope||ed;
if(!s.onselect){
s.onselect=function(v){
ed.execCommand(s.cmd,s.ui||false,v||s.value)}}
s=extend({
title:s.title,
'class':'mce_'+id,
scope:s.scope,
control_manager:t
},s);
id=t.prefix+id;
if(ed.settings.use_native_selects)
c=new tinymce.ui.NativeListBox(id,s);
else{
cls=cc||t._cls.listbox||tinymce.ui.ListBox;
c=new cls(id,s)}
t.controls[id]=c;
if(tinymce.isWebKit){
c.onPostRender.add(function(c,n){
Event.add(n,'mousedown',function(){
ed.bookmark=ed.selection.getBookmark(1)});
Event.add(n,'focus',function(){
ed.selection.moveToBookmark(ed.bookmark);
ed.bookmark=null;
})})}
if(c.hideMenu)
ed.onMouseDown.add(c.hideMenu,c);
return t.add(c)},
createButton:function(id,s,cc){
var t=this,ed=t.editor,o,c,cls;
if(t.get(id))
return null;
s.title=ed.translate(s.title);
s.label=ed.translate(s.label);
s.scope=s.scope||ed;
if(!s.onclick&&!s.menu_button){
s.onclick=function(){
ed.execCommand(s.cmd,s.ui||false,s.value)}}
s=extend({
title:s.title,
'class':'mce_'+id,
unavailable_prefix:ed.getLang('unavailable',''),
scope:s.scope,
control_manager:t
},s);
id=t.prefix+id;
if(s.menu_button){
cls=cc||t._cls.menubutton||tinymce.ui.MenuButton;
c=new cls(id,s);
ed.onMouseDown.add(c.hideMenu,c)}else{
cls=t._cls.button||tinymce.ui.Button;
c=new cls(id,s)}
return t.add(c)},
createMenuButton:function(id,s,cc){
s=s||{};
s.menu_button=1;
return this.createButton(id,s,cc)},
createSplitButton:function(id,s,cc){
var t=this,ed=t.editor,cmd,c,cls;
if(t.get(id))
return null;
s.title=ed.translate(s.title);
s.scope=s.scope||ed;
if(!s.onclick){
s.onclick=function(v){
ed.execCommand(s.cmd,s.ui||false,v||s.value)}}
if(!s.onselect){
s.onselect=function(v){
ed.execCommand(s.cmd,s.ui||false,v||s.value)}}
s=extend({
title:s.title,
'class':'mce_'+id,
scope:s.scope,
control_manager:t
},s);
id=t.prefix+id;
cls=cc||t._cls.splitbutton||tinymce.ui.SplitButton;
c=t.add(new cls(id,s));
ed.onMouseDown.add(c.hideMenu,c);
return c;
},
createColorSplitButton:function(id,s,cc){
var t=this,ed=t.editor,cmd,c,cls,bm;
if(t.get(id))
return null;
s.title=ed.translate(s.title);
s.scope=s.scope||ed;
if(!s.onclick){
s.onclick=function(v){
if(tinymce.isIE)
bm=ed.selection.getBookmark(1);
ed.execCommand(s.cmd,s.ui||false,v||s.value)}}
if(!s.onselect){
s.onselect=function(v){
ed.execCommand(s.cmd,s.ui||false,v||s.value)}}
s=extend({
title:s.title,
'class':'mce_'+id,
'menu_class':ed.getParam('skin')+'Skin',
scope:s.scope,
more_colors_title:ed.getLang('more_colors')},s);
id=t.prefix+id;
cls=cc||t._cls.colorsplitbutton||tinymce.ui.ColorSplitButton;
c=new cls(id,s);
ed.onMouseDown.add(c.hideMenu,c);
ed.onRemove.add(function(){
c.destroy()});
if(tinymce.isIE){
c.onShowMenu.add(function(){
ed.focus();
bm=ed.selection.getBookmark(1)});
c.onHideMenu.add(function(){
if(bm){
ed.selection.moveToBookmark(bm);
bm=0;
}})}
return t.add(c)},
createToolbar:function(id,s,cc){
var c,t=this,cls;
id=t.prefix+id;
cls=cc||t._cls.toolbar||tinymce.ui.Toolbar;
c=new cls(id,s);
if(t.get(id))
return null;
return t.add(c)},
createSeparator:function(cc){
var cls=cc||this._cls.separator||tinymce.ui.Separator;
return new cls()},
setControlType:function(n,c){
return this._cls[n.toLowerCase()]=c;
},
destroy:function(){
each(this.controls,function(c){
c.destroy()});
this.controls=null;
}})})(tinymce);
(function(tinymce){
var Dispatcher=tinymce.util.Dispatcher,each=tinymce.each,isIE=tinymce.isIE,isOpera=tinymce.isOpera;
tinymce.create('tinymce.WindowManager',{
WindowManager:function(ed){
var t=this;
t.editor=ed;
t.onOpen=new Dispatcher(t);
t.onClose=new Dispatcher(t);
t.params={};
t.features={}},
open:function(s,p){
var t=this,f='',x,y,mo=t.editor.settings.dialog_type=='modal',w,sw,sh,vp=tinymce.DOM.getViewPort(),u;
s=s||{};
p=p||{};
sw=isOpera?vp.w:screen.width;
sh=isOpera?vp.h:screen.height;
s.name=s.name||'mc_'+new Date().getTime();
s.width=parseInt(s.width||320);
s.height=parseInt(s.height||240);
s.resizable=true;
s.left=s.left||parseInt(sw/2.0)-(s.width/2.0);
s.top=s.top||parseInt(sh/2.0)-(s.height/2.0);
p.inline=false;
p.mce_width=s.width;
p.mce_height=s.height;
p.mce_auto_focus=s.auto_focus;
if(mo){
if(isIE){
s.center=true;
s.help=false;
s.dialogWidth=s.width+'px';
s.dialogHeight=s.height+'px';
s.scroll=s.scrollbars||false;
}}
each(s,function(v,k){
if(tinymce.is(v,'boolean'))
v=v?'yes':'no';
if(!/^(name|url)$/.test(k)){
if(isIE&&mo)
f+=(f?';':'')+k+':'+v;
else
f+=(f?',':'')+k+'='+v;
}});
t.features=s;
t.params=p;
t.onOpen.dispatch(t,s,p);
u=s.url||s.file;
u=tinymce._addVer(u);
try{
if(isIE&&mo){
w=1;
window.showModalDialog(u,window,f)}else
w=window.open(u,s.name,f)}catch(ex){
}
if(!w)
alert(t.editor.getLang('popup_blocked'))},
close:function(w){
w.close();
this.onClose.dispatch(this)},
createInstance:function(cl,a,b,c,d,e){
var f=tinymce.resolve(cl);
return new f(a,b,c,d,e)},
confirm:function(t,cb,s,w){
w=w||window;
cb.call(s||this,w.confirm(this._decode(this.editor.getLang(t,t))))},
alert:function(tx,cb,s,w){
var t=this;
w=w||window;
w.alert(t._decode(t.editor.getLang(tx,tx)));
if(cb)
cb.call(s||t)},
resizeBy:function(dw,dh,win){
win.resizeBy(dw,dh)},
_decode:function(s){
return tinymce.DOM.decode(s).replace(/\\n/g,'\n')}})}(tinymce));
(function(tinymce){
function CommandManager(){
var execCommands={},queryStateCommands={},queryValueCommands={};
function add(collection,cmd,func,scope){
if(typeof(cmd)=='string')
cmd=[cmd];
tinymce.each(cmd,function(cmd){
collection[cmd.toLowerCase()]={func:func,scope:scope}})};
tinymce.extend(this,{
add:function(cmd,func,scope){
add(execCommands,cmd,func,scope)},
addQueryStateHandler:function(cmd,func,scope){
add(queryStateCommands,cmd,func,scope)},
addQueryValueHandler:function(cmd,func,scope){
add(queryValueCommands,cmd,func,scope)},
execCommand:function(scope,cmd,ui,value,args){
if(cmd=execCommands[cmd.toLowerCase()]){
if(cmd.func.call(scope||cmd.scope,ui,value,args)!==false)
return true;
}},
queryCommandValue:function(){
if(cmd=queryValueCommands[cmd.toLowerCase()])
return cmd.func.call(scope||cmd.scope,ui,value,args)},
queryCommandState:function(){
if(cmd=queryStateCommands[cmd.toLowerCase()])
return cmd.func.call(scope||cmd.scope,ui,value,args)}})};
tinymce.GlobalCommands=new CommandManager()})(tinymce);
(function(tinymce){
tinymce.Formatter=function(ed){
var formats={},
each=tinymce.each,
dom=ed.dom,
selection=ed.selection,
TreeWalker=tinymce.dom.TreeWalker,
rangeUtils=new tinymce.dom.RangeUtils(dom),
isValid=ed.schema.isValid,
isBlock=dom.isBlock,
forcedRootBlock=ed.settings.forced_root_block,
nodeIndex=dom.nodeIndex,
INVISIBLE_CHAR='\uFEFF',
MCE_ATTR_RE=/^(src|href|style)$/,
FALSE=false,
TRUE=true,
undefined,
pendingFormats={apply:[],remove:[]};
function isArray(obj){
return obj instanceof Array;
};
function getParents(node,selector){
return dom.getParents(node,selector,dom.getRoot())};
function isCaretNode(node){
return node.nodeType===1&&(node.face==='mceinline'||node.style.fontFamily==='mceinline')};
function get(name){
return name?formats[name]:formats;
};
function register(name,format){
if(name){
if(typeof(name)!=='string'){
each(name,function(format,name){
register(name,format)})}else{
format=format.length?format:[format];
each(format,function(format){
if(format.deep===undefined)
format.deep=!format.selector;
if(format.split===undefined)
format.split=!format.selector||format.inline;
if(format.remove===undefined&&format.selector&&!format.inline)
format.remove='none';
if(format.selector&&format.inline){
format.mixed=true;
format.block_expand=true;
}
if(typeof(format.classes)==='string')
format.classes=format.classes.split(/\s+/)});
formats[name]=format;
}}};
function apply(name,vars,node){
var formatList=get(name),format=formatList[0],bookmark,rng,i;
function moveStart(rng){
var container=rng.startContainer,
offset=rng.startOffset,
walker,node;
if(container.nodeType==1||container.nodeValue===""){
container=container.nodeType==1?container.childNodes[offset]:container;
if(container){
walker=new TreeWalker(container,container.parentNode);
for(node=walker.current();node;node=walker.next()){
if(node.nodeType==3&&!isWhiteSpaceNode(node)){
rng.setStart(node,0);
break;
}}}}
return rng;
};
function setElementFormat(elm,fmt){
fmt=fmt||format;
if(elm){
each(fmt.styles,function(value,name){
dom.setStyle(elm,name,replaceVars(value,vars))});
each(fmt.attributes,function(value,name){
dom.setAttrib(elm,name,replaceVars(value,vars))});
each(fmt.classes,function(value){
value=replaceVars(value,vars);
if(!dom.hasClass(elm,value))
dom.addClass(elm,value)})}};
function applyRngStyle(rng){
var newWrappers=[],wrapName,wrapElm;
wrapName=format.inline||format.block;
wrapElm=dom.create(wrapName);
setElementFormat(wrapElm);
rangeUtils.walk(rng,function(nodes){
var currentWrapElm;
function process(node){
var nodeName=node.nodeName.toLowerCase(),parentName=node.parentNode.nodeName.toLowerCase(),found;
if(isEq(nodeName,'br')){
currentWrapElm=0;
if(format.block)
dom.remove(node);
return;
}
if(format.wrapper&&matchNode(node,name,vars)){
currentWrapElm=0;
return;
}
if(format.block&&!format.wrapper&&isTextBlock(nodeName)){
node=dom.rename(node,wrapName);
setElementFormat(node);
newWrappers.push(node);
currentWrapElm=0;
return;
}
if(format.selector){
each(formatList,function(format){
if(dom.is(node,format.selector)&&!isCaretNode(node)){
setElementFormat(node,format);
found=true;
}});
if(!format.inline||found){
currentWrapElm=0;
return;
}}
if(isValid(wrapName,nodeName)&&isValid(parentName,wrapName)){
if(!currentWrapElm){
currentWrapElm=wrapElm.cloneNode(FALSE);
node.parentNode.insertBefore(currentWrapElm,node);
newWrappers.push(currentWrapElm)}
currentWrapElm.appendChild(node)}else{
currentWrapElm=0;
each(tinymce.grep(node.childNodes),process);
currentWrapElm=0;
}};
each(nodes,process)});
each(newWrappers,function(node){
var childCount;
function getChildCount(node){
var count=0;
each(node.childNodes,function(node){
if(!isWhiteSpaceNode(node)&&!isBookmarkNode(node))
count++;
});
return count;
};
function mergeStyles(node){
var child,clone;
each(node.childNodes,function(node){
if(node.nodeType==1&&!isBookmarkNode(node)&&!isCaretNode(node)){
child=node;
return FALSE;
}});
if(child&&matchName(child,format)){
clone=child.cloneNode(FALSE);
setElementFormat(clone);
dom.replace(clone,node,TRUE);
dom.remove(child,1)}
return clone||node;
};
childCount=getChildCount(node);
if(childCount===0){
dom.remove(node,1);
return;
}
if(format.inline||format.wrapper){
if(!format.exact&&childCount===1)
node=mergeStyles(node);
each(formatList,function(format){
each(dom.select(format.inline,node),function(child){
removeFormat(format,vars,child,format.exact?child:null)})});
if(matchNode(node.parentNode,name,vars)){
dom.remove(node,1);
node=0;
return TRUE;
}
if(format.merge_with_parents){
dom.getParent(node.parentNode,function(parent){
if(matchNode(parent,name,vars)){
dom.remove(node,1);
node=0;
return TRUE;
}})}
if(node){
node=mergeSiblings(getNonWhiteSpaceSibling(node),node);
node=mergeSiblings(node,getNonWhiteSpaceSibling(node,TRUE))}}})};
if(format){
if(node){
rng=dom.createRng();
rng.setStartBefore(node);
rng.setEndAfter(node);
applyRngStyle(expandRng(rng,formatList))}else{
if(!selection.isCollapsed()||!format.inline){
bookmark=selection.getBookmark();
applyRngStyle(expandRng(selection.getRng(TRUE),formatList));
selection.moveToBookmark(bookmark);
selection.setRng(moveStart(selection.getRng(TRUE)));
ed.nodeChanged()}else
performCaretAction('apply',name,vars)}}};
function remove(name,vars,node){
var formatList=get(name),format=formatList[0],bookmark,i,rng;
function moveStart(rng){
var container=rng.startContainer,
offset=rng.startOffset,
walker,node,nodes,tmpNode;
if(container.nodeType==3&&offset>=container.nodeValue.length-1){
container=container.parentNode;
offset=nodeIndex(container)+1;
}
if(container.nodeType==1){
nodes=container.childNodes;
container=nodes[Math.min(offset,nodes.length-1)];
walker=new TreeWalker(container);
if(offset>nodes.length-1)
walker.next();
for(node=walker.current();node;node=walker.next()){
if(node.nodeType==3&&!isWhiteSpaceNode(node)){
tmpNode=dom.create('a',null,INVISIBLE_CHAR);
node.parentNode.insertBefore(tmpNode,node);
rng.setStart(node,0);
selection.setRng(rng);
dom.remove(tmpNode);
return;
}}}};
function process(node){
var children,i,l;
children=tinymce.grep(node.childNodes);
for(i=0,l=formatList.length;i<l;i++){
if(removeFormat(formatList[i],vars,node,node))
break;
}
if(format.deep){
for(i=0,l=children.length;i<l;i++)
process(children[i])}};
function findFormatRoot(container){
var formatRoot;
each(getParents(container.parentNode).reverse(),function(parent){
var format;
if(!formatRoot&&parent.id!='_start'&&parent.id!='_end'){
format=matchNode(parent,name,vars);
if(format&&format.split!==false)
formatRoot=parent;
}});
return formatRoot;
};
function wrapAndSplit(format_root,container,target,split){
var parent,clone,lastClone,firstClone,i,formatRootParent;
if(format_root){
formatRootParent=format_root.parentNode;
for(parent=container.parentNode;parent&&parent!=formatRootParent;parent=parent.parentNode){
clone=parent.cloneNode(FALSE);
for(i=0;i<formatList.length;i++){
if(removeFormat(formatList[i],vars,clone,clone)){
clone=0;
break;
}}
if(clone){
if(lastClone)
clone.appendChild(lastClone);
if(!firstClone)
firstClone=clone;
lastClone=clone;
}}
if(split&&(!format.mixed||!isBlock(format_root)))
container=dom.split(format_root,container);
if(lastClone){
target.parentNode.insertBefore(lastClone,target);
firstClone.appendChild(target)}}
return container;
};
function splitToFormatRoot(container){
return wrapAndSplit(findFormatRoot(container),container,container,true)};
function unwrap(start){
var node=dom.get(start?'_start':'_end'),
out=node[start?'firstChild':'lastChild'];
if(isBookmarkNode(out))
out=out[start?'firstChild':'lastChild'];
dom.remove(node,true);
return out;
};
function removeRngStyle(rng){
var startContainer,endContainer;
rng=expandRng(rng,formatList,TRUE);
if(format.split){
startContainer=getContainer(rng,TRUE);
endContainer=getContainer(rng);
if(startContainer!=endContainer){
startContainer=wrap(startContainer,'span',{id:'_start',_mce_type:'bookmark'});
endContainer=wrap(endContainer,'span',{id:'_end',_mce_type:'bookmark'});
splitToFormatRoot(startContainer);
splitToFormatRoot(endContainer);
startContainer=unwrap(TRUE);
endContainer=unwrap()}else
startContainer=endContainer=splitToFormatRoot(startContainer);
rng.startContainer=startContainer.parentNode;
rng.startOffset=nodeIndex(startContainer);
rng.endContainer=endContainer.parentNode;
rng.endOffset=nodeIndex(endContainer)+1;
}
rangeUtils.walk(rng,function(nodes){
each(nodes,function(node){
process(node)})})};
if(node){
rng=dom.createRng();
rng.setStartBefore(node);
rng.setEndAfter(node);
removeRngStyle(rng);
return;
}
if(!selection.isCollapsed()||!format.inline){
bookmark=selection.getBookmark();
removeRngStyle(selection.getRng(TRUE));
selection.moveToBookmark(bookmark);
if(match(name,vars,selection.getStart())){
moveStart(selection.getRng(true))}
ed.nodeChanged()}else
performCaretAction('remove',name,vars)};
function toggle(name,vars,node){
if(match(name,vars,node))
remove(name,vars,node);
else
apply(name,vars,node)};
function matchNode(node,name,vars,similar){
var formatList=get(name),format,i,classes;
function matchItems(node,format,item_name){
var key,value,items=format[item_name],i;
if(items){
if(items.length===undefined){
for(key in items){
if(items.hasOwnProperty(key)){
if(item_name==='attributes')
value=dom.getAttrib(node,key);
else
value=getStyle(node,key);
if(similar&&!value&&!format.exact)
return;
if((!similar||format.exact)&&!isEq(value,replaceVars(items[key],vars)))
return;
}}}else{
for(i=0;i<items.length;i++){
if(item_name==='attributes'?dom.getAttrib(node,items[i]):getStyle(node,items[i]))
return format;
}}}
return format;
};
if(formatList&&node){
for(i=0;i<formatList.length;i++){
format=formatList[i];
if(matchName(node,format)&&matchItems(node,format,'attributes')&&matchItems(node,format,'styles')){
if(classes=format.classes){
for(i=0;i<classes.length;i++){
if(!dom.hasClass(node,classes[i]))
return;
}}
return format;
}}}};
function match(name,vars,node){
var startNode,i;
function matchParents(node){
node=dom.getParent(node,function(node){
return!!matchNode(node,name,vars,true)});
return matchNode(node,name,vars)};
if(node)
return matchParents(node);
if(selection.isCollapsed()){
for(i=pendingFormats.apply.length-1;i>=0;i--){
if(pendingFormats.apply[i].name==name)
return true;
}
for(i=pendingFormats.remove.length-1;i>=0;i--){
if(pendingFormats.remove[i].name==name)
return false;
}
return matchParents(selection.getNode())}
node=selection.getNode();
if(matchParents(node))
return TRUE;
startNode=selection.getStart();
if(startNode!=node){
if(matchParents(startNode))
return TRUE;
}
return FALSE;
};
function matchAll(names,vars){
var startElement,matchedFormatNames=[],checkedMap={},i,ni,name;
if(selection.isCollapsed()){
for(ni=0;ni<names.length;ni++){
for(i=pendingFormats.remove.length-1;i>=0;i--){
name=names[ni];
if(pendingFormats.remove[i].name==name){
checkedMap[name]=true;
break;
}}}
for(i=pendingFormats.apply.length-1;i>=0;i--){
for(ni=0;ni<names.length;ni++){
name=names[ni];
if(!checkedMap[name]&&pendingFormats.apply[i].name==name){
checkedMap[name]=true;
matchedFormatNames.push(name)}}}}
startElement=selection.getStart();
dom.getParent(startElement,function(node){
var i,name;
for(i=0;i<names.length;i++){
name=names[i];
if(!checkedMap[name]&&matchNode(node,name,vars)){
checkedMap[name]=true;
matchedFormatNames.push(name)}}});
return matchedFormatNames;
};
function canApply(name){
var formatList=get(name),startNode,parents,i,x,selector;
if(formatList){
startNode=selection.getStart();
parents=getParents(startNode);
for(x=formatList.length-1;x>=0;x--){
selector=formatList[x].selector;
if(!selector)
return TRUE;
for(i=parents.length-1;i>=0;i--){
if(dom.is(parents[i],selector))
return TRUE;
}}}
return FALSE;
};
tinymce.extend(this,{
get:get,
register:register,
apply:apply,
remove:remove,
toggle:toggle,
match:match,
matchAll:matchAll,
matchNode:matchNode,
canApply:canApply
});
function matchName(node,format){
if(isEq(node,format.inline))
return TRUE;
if(isEq(node,format.block))
return TRUE;
if(format.selector)
return dom.is(node,format.selector)};
function isEq(str1,str2){
str1=str1||'';
str2=str2||'';
str1=''+(str1.nodeName||str1);
str2=''+(str2.nodeName||str2);
return str1.toLowerCase()==str2.toLowerCase()};
function getStyle(node,name){
var styleVal=dom.getStyle(node,name);
if(name=='color'||name=='backgroundColor')
styleVal=dom.toHex(styleVal);
if(name=='fontWeight'&&styleVal==700)
styleVal='bold';
return''+styleVal;
};
function replaceVars(value,vars){
if(typeof(value)!="string")
value=value(vars);
else if(vars){
value=value.replace(/%(\w+)/g,function(str,name){
return vars[name]||str;
})}
return value;
};
function isWhiteSpaceNode(node){
return node&&node.nodeType===3&&/^([\s\r\n]+|)$/.test(node.nodeValue)};
function wrap(node,name,attrs){
var wrapper=dom.create(name,attrs);
node.parentNode.insertBefore(wrapper,node);
wrapper.appendChild(node);
return wrapper;
};
function expandRng(rng,format,remove){
var startContainer=rng.startContainer,
startOffset=rng.startOffset,
endContainer=rng.endContainer,
endOffset=rng.endOffset,sibling,lastIdx;
function findParentContainer(container,child_name,sibling_name,root){
var parent,child;
root=root||dom.getRoot();
for(;;){
parent=container.parentNode;
if(parent==root||(!format[0].block_expand&&isBlock(parent)))
return container;
for(sibling=parent[child_name];sibling&&sibling!=container;sibling=sibling[sibling_name]){
if(sibling.nodeType==1&&!isBookmarkNode(sibling))
return container;
if(sibling.nodeType==3&&!isWhiteSpaceNode(sibling))
return container;
}
container=container.parentNode;
}
return container;
};
if(startContainer.nodeType==1&&startContainer.hasChildNodes()){
lastIdx=startContainer.childNodes.length-1;
startContainer=startContainer.childNodes[startOffset>lastIdx?lastIdx:startOffset];
if(startContainer.nodeType==3)
startOffset=0;
}
if(endContainer.nodeType==1&&endContainer.hasChildNodes()){
lastIdx=endContainer.childNodes.length-1;
endContainer=endContainer.childNodes[endOffset>lastIdx?lastIdx:endOffset-1];
if(endContainer.nodeType==3)
endOffset=endContainer.nodeValue.length;
}
if(isBookmarkNode(startContainer.parentNode))
startContainer=startContainer.parentNode;
if(isBookmarkNode(startContainer))
startContainer=startContainer.nextSibling||startContainer;
if(isBookmarkNode(endContainer.parentNode))
endContainer=endContainer.parentNode;
if(isBookmarkNode(endContainer))
endContainer=endContainer.previousSibling||endContainer;
if(format[0].inline||format[0].block_expand){
startContainer=findParentContainer(startContainer,'firstChild','nextSibling');
endContainer=findParentContainer(endContainer,'lastChild','previousSibling')}
if(format[0].selector&&format[0].expand!==FALSE&&!format[0].inline){
function findSelectorEndPoint(container,sibling_name){
var parents,i,y;
if(container.nodeType==3&&container.nodeValue.length==0&&container[sibling_name])
container=container[sibling_name];
parents=getParents(container);
for(i=0;i<parents.length;i++){
for(y=0;y<format.length;y++){
if(dom.is(parents[i],format[y].selector))
return parents[i];
}}
return container;
};
startContainer=findSelectorEndPoint(startContainer,'previousSibling');
endContainer=findSelectorEndPoint(endContainer,'nextSibling')}
if(format[0].block||format[0].selector){
function findBlockEndPoint(container,sibling_name,sibling_name2){
var node;
if(!format[0].wrapper)
node=dom.getParent(container,format[0].block);
if(!node)
node=dom.getParent(container.nodeType==3?container.parentNode:container,isBlock);
if(node&&format[0].wrapper)
node=getParents(node,'ul,ol').reverse()[0]||node;
if(!node){
node=container;
while(node[sibling_name]&&!isBlock(node[sibling_name])){
node=node[sibling_name];
if(isEq(node,'br'))
break;
}}
return node||container;
};
startContainer=findBlockEndPoint(startContainer,'previousSibling');
endContainer=findBlockEndPoint(endContainer,'nextSibling');
if(format[0].block){
if(!isBlock(startContainer))
startContainer=findParentContainer(startContainer,'firstChild','nextSibling');
if(!isBlock(endContainer))
endContainer=findParentContainer(endContainer,'lastChild','previousSibling')}}
if(startContainer.nodeType==1){
startOffset=nodeIndex(startContainer);
startContainer=startContainer.parentNode;
}
if(endContainer.nodeType==1){
endOffset=nodeIndex(endContainer)+1;
endContainer=endContainer.parentNode;
}
return{
startContainer:startContainer,
startOffset:startOffset,
endContainer:endContainer,
endOffset:endOffset
}}
function removeFormat(format,vars,node,compare_node){
var i,attrs,stylesModified;
if(!matchName(node,format))
return FALSE;
if(format.remove!='all'){
each(format.styles,function(value,name){
value=replaceVars(value,vars);
if(typeof(name)==='number'){
name=value;
compare_node=0;
}
if(!compare_node||isEq(getStyle(compare_node,name),value))
dom.setStyle(node,name,'');
stylesModified=1;
});
if(stylesModified&&dom.getAttrib(node,'style')==''){
node.removeAttribute('style');
node.removeAttribute('_mce_style')}
each(format.attributes,function(value,name){
var valueOut;
value=replaceVars(value,vars);
if(typeof(name)==='number'){
name=value;
compare_node=0;
}
if(!compare_node||isEq(dom.getAttrib(compare_node,name),value)){
if(name=='class'){
value=dom.getAttrib(node,name);
if(value){
valueOut='';
each(value.split(/\s+/),function(cls){
if(/mce\w+/.test(cls))
valueOut+=(valueOut?' ':'')+cls;
});
if(valueOut){
dom.setAttrib(node,name,valueOut);
return;
}}}
if(name=="class")
node.removeAttribute('className');
if(MCE_ATTR_RE.test(name))
node.removeAttribute('_mce_'+name);
node.removeAttribute(name)}});
each(format.classes,function(value){
value=replaceVars(value,vars);
if(!compare_node||dom.hasClass(compare_node,value))
dom.removeClass(node,value)});
attrs=dom.getAttribs(node);
for(i=0;i<attrs.length;i++){
if(attrs[i].nodeName.indexOf('_')!==0)
return FALSE;
}}
if(format.remove!='none'){
removeNode(node,format);
return TRUE;
}};
function removeNode(node,format){
var parentNode=node.parentNode,rootBlockElm;
if(format.block){
if(!forcedRootBlock){
function find(node,next,inc){
node=getNonWhiteSpaceSibling(node,next,inc);
return!node||(node.nodeName=='BR'||isBlock(node))};
if(isBlock(node)&&!isBlock(parentNode)){
if(!find(node,FALSE)&&!find(node.firstChild,TRUE,1))
node.insertBefore(dom.create('br'),node.firstChild);
if(!find(node,TRUE)&&!find(node.lastChild,FALSE,1))
node.appendChild(dom.create('br'))}}else{
if(parentNode==dom.getRoot()){
if(!format.list_block||!isEq(node,format.list_block)){
each(tinymce.grep(node.childNodes),function(node){
if(isValid(forcedRootBlock,node.nodeName.toLowerCase())){
if(!rootBlockElm)
rootBlockElm=wrap(node,forcedRootBlock);
else
rootBlockElm.appendChild(node)}else
rootBlockElm=0;
})}}}}
if(format.selector&&format.inline&&!isEq(format.inline,node))
return;
dom.remove(node,1)};
function getNonWhiteSpaceSibling(node,next,inc){
if(node){
next=next?'nextSibling':'previousSibling';
for(node=inc?node:node[next];node;node=node[next]){
if(node.nodeType==1||!isWhiteSpaceNode(node))
return node;
}}};
function isBookmarkNode(node){
return node&&node.nodeType==1&&node.getAttribute('_mce_type')=='bookmark';
};
function mergeSiblings(prev,next){
var marker,sibling,tmpSibling;
function compareElements(node1,node2){
if(node1.nodeName!=node2.nodeName)
return FALSE;
function getAttribs(node){
var attribs={};
each(dom.getAttribs(node),function(attr){
var name=attr.nodeName.toLowerCase();
if(name.indexOf('_')!==0&&name!=='style')
attribs[name]=dom.getAttrib(node,name)});
return attribs;
};
function compareObjects(obj1,obj2){
var value,name;
for(name in obj1){
if(obj1.hasOwnProperty(name)){
value=obj2[name];
if(value===undefined)
return FALSE;
if(obj1[name]!=value)
return FALSE;
delete obj2[name];
}}
for(name in obj2){
if(obj2.hasOwnProperty(name))
return FALSE;
}
return TRUE;
};
if(!compareObjects(getAttribs(node1),getAttribs(node2)))
return FALSE;
if(!compareObjects(dom.parseStyle(dom.getAttrib(node1,'style')),dom.parseStyle(dom.getAttrib(node2,'style'))))
return FALSE;
return TRUE;
};
if(prev&&next){
function findElementSibling(node,sibling_name){
for(sibling=node;sibling;sibling=sibling[sibling_name]){
if(sibling.nodeType==3&&!isWhiteSpaceNode(sibling))
return node;
if(sibling.nodeType==1&&!isBookmarkNode(sibling))
return sibling;
}
return node;
};
prev=findElementSibling(prev,'previousSibling');
next=findElementSibling(next,'nextSibling');
if(compareElements(prev,next)){
for(sibling=prev.nextSibling;sibling&&sibling!=next;){
tmpSibling=sibling;
sibling=sibling.nextSibling;
prev.appendChild(tmpSibling)}
dom.remove(next);
each(tinymce.grep(next.childNodes),function(node){
prev.appendChild(node)});
return prev;
}}
return next;
};
function isTextBlock(name){
return/^(h[1-6]|p|div|pre|address|dl|dt|dd)$/.test(name)};
function getContainer(rng,start){
var container,offset,lastIdx;
container=rng[start?'startContainer':'endContainer'];
offset=rng[start?'startOffset':'endOffset'];
if(container.nodeType==1){
lastIdx=container.childNodes.length-1;
if(!start&&offset)
offset--;
container=container.childNodes[offset>lastIdx?lastIdx:offset];
}
return container;
};
function performCaretAction(type,name,vars){
var i,currentPendingFormats=pendingFormats[type],
otherPendingFormats=pendingFormats[type=='apply'?'remove':'apply'];
function hasPending(){
return pendingFormats.apply.length||pendingFormats.remove.length;
};
function resetPending(){
pendingFormats.apply=[];
pendingFormats.remove=[];
};
function perform(caret_node){
each(pendingFormats.apply.reverse(),function(item){
apply(item.name,item.vars,caret_node)});
each(pendingFormats.remove.reverse(),function(item){
remove(item.name,item.vars,caret_node)});
dom.remove(caret_node,1);
resetPending()};
for(i=currentPendingFormats.length-1;i>=0;i--){
if(currentPendingFormats[i].name==name)
return;
}
currentPendingFormats.push({name:name,vars:vars});
for(i=otherPendingFormats.length-1;i>=0;i--){
if(otherPendingFormats[i].name==name)
otherPendingFormats.splice(i,1)}
if(hasPending()){
ed.getDoc().execCommand('FontName',false,'mceinline');
pendingFormats.lastRng=selection.getRng();
each(dom.select('font,span'),function(node){
var bookmark;
if(isCaretNode(node)){
bookmark=selection.getBookmark();
perform(node);
selection.moveToBookmark(bookmark);
ed.nodeChanged()}});
if(!pendingFormats.isListening&&hasPending()){
pendingFormats.isListening=true;
each('onKeyDown,onKeyUp,onKeyPress,onMouseUp'.split(','),function(event){
ed[event].addToTop(function(ed,e){
if(hasPending()&&!tinymce.dom.RangeUtils.compareRanges(pendingFormats.lastRng,selection.getRng())){
each(dom.select('font,span'),function(node){
var textNode,rng;
if(isCaretNode(node)){
textNode=node.firstChild;
if(textNode){
perform(node);
rng=dom.createRng();
rng.setStart(textNode,textNode.nodeValue.length);
rng.setEnd(textNode,textNode.nodeValue.length);
selection.setRng(rng);
ed.nodeChanged()}else
dom.remove(node)}});
if(e.type=='keyup'||e.type=='mouseup')
resetPending()}})})}}}}})(tinymce);
tinymce.onAddEditor.add(function(tinymce,ed){
var filters,fontSizes,dom,settings=ed.settings;
if(settings.inline_styles){
fontSizes=tinymce.explode(settings.font_size_style_values);
function replaceWithSpan(node,styles){
tinymce.each(styles,function(value,name){
if(value)
dom.setStyle(node,name,value)});
dom.rename(node,'span')};
filters={
font:function(dom,node){
replaceWithSpan(node,{
backgroundColor:node.style.backgroundColor,
color:node.color,
fontFamily:node.face,
fontSize:fontSizes[parseInt(node.size)-1]
})},
u:function(dom,node){
replaceWithSpan(node,{
textDecoration:'underline'
})},
strike:function(dom,node){
replaceWithSpan(node,{
textDecoration:'line-through'
})}};
function convert(editor,params){
dom=editor.dom;
if(settings.convert_fonts_to_spans){
tinymce.each(dom.select('font,u,strike',params.node),function(node){
filters[node.nodeName.toLowerCase()](ed.dom,node)})}};
ed.onPreProcess.add(convert);
ed.onInit.add(function(){
ed.selection.onSetContent.add(convert)})}});


/* url: /js/m2/wysiwyg_template_src.js */

(function(){
var DOM=tinymce.DOM,_=masterElement;
tinymce.ThemeManager.requireLangPack('ramail');
tinymce.create('tinymce.themes.ramail',{
init:function(ed,url){
var t=this,s=ed.settings;
t.editor=ed;
ed.onInit.add(function(){
ed.getDoc().body.innerHTML="<div/>"
ed.onNodeChange.add(t.nodeChange)})},
renderUI:function(o){
var t=this,ed=t.editor,cf=ed.controlManager,c,n;
tb=t.toolbar=cf.createToolbar("tools1");
tb.add(t.cr_fontselect(ed));
tb.add(t.cr_fontsize(ed));
tb.add(cf.createButton('bold',{title:'simple.bold_desc',cmd:'Bold'}));
tb.add(cf.createButton('italic',{title:'simple.italic_desc',cmd:'Italic'}));
tb.add(cf.createButton('underline',{title:'simple.underline_desc',cmd:'Underline'}));
tb.add(cf.createButton('strikethrough',{title:'simple.striketrough_desc',cmd:'Strikethrough'}));
tb.add(cf.createSeparator());
tb.add(cf.createButton('undo',{title:'simple.undo_desc',cmd:'Undo'}));
tb.add(cf.createButton('redo',{title:'simple.redo_desc',cmd:'Redo'}));
tb.add(cf.createSeparator());
tb.add(cf.createButton('justifyleft',{title:'simple.italic_desc',cmd:'JustifyLeft'}));
tb.add(cf.createButton('justifycenter',{title:'simple.italic_desc',cmd:'JustifyCenter'}));
tb.add(cf.createButton('justifyright',{title:'simple.italic_desc',cmd:'JustifyRight'}));
tb.add(cf.createButton('justifyfull',{title:'simple.italic_desc',cmd:'JustifyFull'}));
tb.add(cf.createSeparator());
tb.add(cf.createButton('outdent',{title:'simple.numlist_desc',cmd:'Outdent'}));
tb.add(cf.createButton('indent',{title:'simple.numlist_desc',cmd:'Indent'}));
tb.add(cf.createButton('insertunorderedlist',{title:'simple.bullist_desc',cmd:'InsertUnorderedList'}));
tb.add(cf.createButton('insertorderedlist',{title:'simple.numlist_desc',cmd:'InsertOrderedList'}));
var ns=_('tmpl:tinymce_ramail',{id:ed.id});
tb.renderTo(ns.box_toolbar);
DOM.insertAfter(ns.node,o.targetNode);
return{
iframeContainer:ns.box,
editorContainer:ns.node,
sizeContainer:_.document.createElement('span'),
deltaHeight:-20
}},
cr_fontsize:function(ed){
var c=ed.controlManager.createListBox('fontsizeselect',{
title:"\u0420\u0430\u0437\u043C\u0435\u0440",
onselect:function(v){
ed.execCommand('FontSize',false,v);
c.select(function(sv){return v==sv});
return false;
}});
rr.each(["\u041C\u0435\u043B\u043A\u0438\u0439","\u041E\u0431\u044B\u0447\u043D\u044B\u0439","\u041A\u0440\u0443\u043F\u043D\u044B\u0439","\u041E\u0433\u0440\u043E\u043C\u043D\u044B\u0439"],function(v,i){
var sz=[1,3,5,7][i];
c.add(v,sz,{'class':"test",style:'white-space:nowrap;font-size:'+([7,10,14,24][i])+'pt;'})});
return c;
},
cr_fontselect:function(ed){
var c=ed.controlManager.createListBox('fontselect',{
title:"\u0428\u0440\u0438\u0444\u0442",
onselect:function(v,e){
var cur=c.items[c.selectedIndex];
if(!v&&cur){
ed.execCommand('FontName',false,cur.value);
return;
}
ed.execCommand('FontName',false,v);
c.select(function(sv){return sv==v});
return false;
}});
var fonts='Arial=arial,helvetica,sans-serif;Courier New=courier new,courier,monospace;Comic Sans MS=comic sans ms,sans-serif;Georgia=georgia,times new roman,times,serif;Tahoma=tahoma,arial,helvetica,sans-serif;Times New Roman=times new roman,times,serif;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,arial,helvetica,sans-serif';
rr.each(fonts.split(';'),function(v){
v=v.split('=');
c.add(v[0],v[1],{style:v[1].indexOf('dings')==-1?'white-space:nowrap;font-family:'+v[1]:'white-space:nowrap;'})});
return c;
},
nodeChange:function(ed,cm,n,co,ob){
tinymce.each(['Bold','Italic','Underline','Strikethrough','InsertUnorderedList','InsertOrderedList'],function(c){
cm.get(c.toLowerCase()).setActive(ed.queryCommandState(c))});
cm.setDisabled('undo',!ed.undoManager.hasUndo()&&!ed.typing);
cm.setDisabled('redo',!ed.undoManager.hasRedo());
var c,fn,fz,cl;
nodeChange_getParent(ob,function(n){
if(n.nodeName==='SPAN'){
if(!cl&&n.className)
cl=n.className;
if(!fz&&n.style.fontSize)
fz=n.style.fontSize;
if(!fn&&n.style.fontFamily)
fn=n.style.fontFamily.replace(/[\"\']+/g,'').replace(/^([^,]+).*/,'$1').toLowerCase()}
return false;
});
if(c=cm.get('fontselect')){
c.select(function(v){
return v.replace(/^([^,]+).*/,'$1').toLowerCase()==fn;
})};
if(c=cm.get('fontsizeselect')){
switch(fz){
case'xx-small':fz=1;break;
case'x-small':fz=2;break;
case'small':fz=3;break;
case'medium':fz=4;break;
case'large':fz=5;break;
case'x-large':fz=6;break;
case'xx-large':fz=7;break;
default:
if(typeof fz=='string'){
if(fz.indexOf('px')>0){
fz=parseInt(fz,10);
fz=fz<32?fz<24?fz<18?fz<16?fz<13?fz<10?1:2:3:4:5:6:7;
}
else if(fz.indexOf('pt')>0){
fz=parseInt(fz,10);
fz=fz<24?fz<18?fz<14?fz<12?fz<10?fz<8?1:2:3:4:5:6:7;
}}};
c.select(function(v){
return v==(fz?fz==6?7:fz==4?5:fz==2?3:fz:3)})}},
getInfo:function(){
return{longname:'ramail theme',author:'rambler mail',authorurl:'mail.rambler.ru',version:'2'}}});
tinymce.ThemeManager.add('ramail',tinymce.themes.ramail);
function nodeChange_getParent(ob,name){
var i,parents=ob.parents,func=name;
if(typeof(name)=='string'){
func=function(node){
return node.nodeName==name;
}}
for(i=0;i<parents.length;i++){
if(func(parents[i]))
return parents[i];
}}})();


/* url: /js/tiny_mce/plugins/spellchecker/editor_plugin_src.js */

(function(){
var JSONRequest=tinymce.util.JSONRequest,each=tinymce.each,DOM=tinymce.DOM;
tinymce.create('tinymce.plugins.SpellcheckerPlugin',{
getInfo:function(){
return{
longname:'Spellchecker',
author:'Moxiecode Systems AB',
authorurl:'http://tinymce.moxiecode.com',
infourl:'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/spellchecker',
version:tinymce.majorVersion+"."+tinymce.minorVersion
}},
init:function(ed,url){
var t=this,cm;
t.url=url;
t.editor=ed;
t.rpcUrl=ed.getParam("spellchecker_rpc_url","{backend}");
if(t.rpcUrl=='{backend}'){
if(tinymce.isIE)
return;
t.hasSupport=true;
ed.onContextMenu.addToTop(function(ed,e){
if(t.active)
return false;
})}
ed.addCommand('mceSpellCheck',function(){
if(t.rpcUrl=='{backend}'){
t.editor.getBody().spellcheck=t.active=!t.active;
return;
}
if(!t.active){
ed.setProgressState(1);
t._sendRPC('checkWords',[t.selectedLang,t._getWords()],function(r){
if(r.length>0){
t.active=1;
t._markWords(r);
ed.setProgressState(0);
ed.nodeChanged()}else{
ed.setProgressState(0);
if(ed.getParam('spellchecker_report_no_misspellings',true))
ed.windowManager.alert('spellchecker.no_mpell')}})}else
t._done()});
ed.onInit.add(function(){
if(ed.settings.content_css!==false)
ed.dom.loadCSS(url+'/css/content.css')});
ed.onClick.add(t._showMenu,t);
ed.onContextMenu.add(t._showMenu,t);
ed.onBeforeGetContent.add(function(){
if(t.active)
t._removeWords()});
ed.onNodeChange.add(function(ed,cm){
cm.setActive('spellchecker',t.active)});
ed.onSetContent.add(function(){
t._done()});
ed.onBeforeGetContent.add(function(){
t._done()});
ed.onBeforeExecCommand.add(function(ed,cmd){
if(cmd=='mceFullScreen')
t._done()});
t.languages={};
each(ed.getParam('spellchecker_languages','+English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr,German=de,Italian=it,Polish=pl,Portuguese=pt,Spanish=es,Swedish=sv','hash'),function(v,k){
if(k.indexOf('+')===0){
k=k.substring(1);
t.selectedLang=v;
}
t.languages[k]=v;
})},
createControl:function(n,cm){
var t=this,c,ed=t.editor;
if(n=='spellchecker'){
if(t.rpcUrl=='{backend}'){
if(t.hasSupport)
c=cm.createButton(n,{title:'spellchecker.desc',cmd:'mceSpellCheck',scope:t});
return c;
}
c=cm.createSplitButton(n,{title:'spellchecker.desc',cmd:'mceSpellCheck',scope:t});
c.onRenderMenu.add(function(c,m){
m.add({title:'spellchecker.langs','class':'mceMenuItemTitle'}).setDisabled(1);
each(t.languages,function(v,k){
var o={icon:1},mi;
o.onclick=function(){
mi.setSelected(1);
t.selectedItem.setSelected(0);
t.selectedItem=mi;
t.selectedLang=v;
};
o.title=k;
mi=m.add(o);
mi.setSelected(v==t.selectedLang);
if(v==t.selectedLang)
t.selectedItem=mi;
})});
return c;
}},
_walk:function(n,f){
var d=this.editor.getDoc(),w;
if(d.createTreeWalker){
w=d.createTreeWalker(n,NodeFilter.SHOW_TEXT,null,false);
while((n=w.nextNode())!=null)
f.call(this,n)}else
tinymce.walk(n,f,'childNodes')},
_getSeparators:function(){
var re='',i,str=this.editor.getParam('spellchecker_word_separator_chars','\\s!"#$%&()*+,-./:;<=>?@[\]^_{|}\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u201d\u201c');
for(i=0;i<str.length;i++)
re+='\\'+str.charAt(i);
return re;
},
_getWords:function(){
var ed=this.editor,wl=[],tx='',lo={},rawWords=[];
this._walk(ed.getBody(),function(n){
if(n.nodeType==3)
tx+=n.nodeValue+' ';
});
if(ed.getParam('spellchecker_word_pattern')){
rawWords=tx.match('('+ed.getParam('spellchecker_word_pattern')+')','gi')}else{
tx=tx.replace(new RegExp('([0-9]|['+this._getSeparators()+'])','g'),' ');
tx=tinymce.trim(tx.replace(/(\s+)/g,' '));
rawWords=tx.split(' ')}
each(rawWords,function(v){
if(!lo[v]){
wl.push(v);
lo[v]=1;
}});
return wl;
},
_removeWords:function(w){
var ed=this.editor,dom=ed.dom,se=ed.selection,b=se.getBookmark();
each(dom.select('span').reverse(),function(n){
if(n&&(dom.hasClass(n,'mceItemHiddenSpellWord')||dom.hasClass(n,'mceItemHidden'))){
if(!w||dom.decode(n.innerHTML)==w)
dom.remove(n,1)}});
se.moveToBookmark(b)},
_markWords:function(wl){
var r1,r2,r3,r4,r5,w='',ed=this.editor,re=this._getSeparators(),dom=ed.dom,nl=[];
var se=ed.selection,b=se.getBookmark();
each(wl,function(v){
w+=(w?'|':'')+v;
});
r1=new RegExp('(['+re+'])('+w+')(['+re+'])','g');
r2=new RegExp('^('+w+')','g');
r3=new RegExp('('+w+')(['+re+']?)$','g');
r4=new RegExp('^('+w+')(['+re+']?)$','g');
r5=new RegExp('('+w+')(['+re+'])','g');
this._walk(this.editor.getBody(),function(n){
if(n.nodeType==3){
nl.push(n)}});
each(nl,function(n){
var v;
if(n.nodeType==3){
v=n.nodeValue;
if(r1.test(v)||r2.test(v)||r3.test(v)||r4.test(v)){
v=dom.encode(v);
v=v.replace(r5,'<span class="mceItemHiddenSpellWord">$1</span>$2');
v=v.replace(r3,'<span class="mceItemHiddenSpellWord">$1</span>$2');
dom.replace(dom.create('span',{'class':'mceItemHidden'},v),n)}}});
se.moveToBookmark(b)},
_showMenu:function(ed,e){
var t=this,ed=t.editor,m=t._menu,p1,dom=ed.dom,vp=dom.getViewPort(ed.getWin()),wordSpan=e.target;
e=0;
if(!m){
p1=DOM.getPos(ed.getContentAreaContainer());
m=ed.controlManager.createDropMenu('spellcheckermenu',{
offset_x:p1.x,
offset_y:p1.y,
'class':'mceNoIcons'
});
t._menu=m;
}
if(dom.hasClass(wordSpan,'mceItemHiddenSpellWord')){
m.removeAll();
m.add({title:'spellchecker.wait','class':'mceMenuItemTitle'}).setDisabled(1);
t._sendRPC('getSuggestions',[t.selectedLang,dom.decode(wordSpan.innerHTML)],function(r){
var ignoreRpc;
m.removeAll();
if(r.length>0){
m.add({title:'spellchecker.sug','class':'mceMenuItemTitle'}).setDisabled(1);
each(r,function(v){
m.add({title:v,onclick:function(){
dom.replace(ed.getDoc().createTextNode(v),wordSpan);
t._checkDone()}})});
m.addSeparator()}else
m.add({title:'spellchecker.no_sug','class':'mceMenuItemTitle'}).setDisabled(1);
ignoreRpc=t.editor.getParam("spellchecker_enable_ignore_rpc",'');
m.add({
title:'spellchecker.ignore_word',
onclick:function(){
var word=wordSpan.innerHTML;
dom.remove(wordSpan,1);
t._checkDone();
if(ignoreRpc){
ed.setProgressState(1);
t._sendRPC('ignoreWord',[t.selectedLang,word],function(r){
ed.setProgressState(0)})}}});
m.add({
title:'spellchecker.ignore_words',
onclick:function(){
var word=wordSpan.innerHTML;
t._removeWords(dom.decode(word));
t._checkDone();
if(ignoreRpc){
ed.setProgressState(1);
t._sendRPC('ignoreWords',[t.selectedLang,word],function(r){
ed.setProgressState(0)})}}});
if(t.editor.getParam("spellchecker_enable_learn_rpc")){
m.add({
title:'spellchecker.learn_word',
onclick:function(){
var word=wordSpan.innerHTML;
dom.remove(wordSpan,1);
t._checkDone();
ed.setProgressState(1);
t._sendRPC('learnWord',[t.selectedLang,word],function(r){
ed.setProgressState(0)})}})}
m.update()});
ed.selection.select(wordSpan);
p1=dom.getPos(wordSpan);
m.showMenu(p1.x,p1.y+wordSpan.offsetHeight-vp.y);
return tinymce.dom.Event.cancel(e)}else
m.hideMenu()},
_checkDone:function(){
var t=this,ed=t.editor,dom=ed.dom,o;
each(dom.select('span'),function(n){
if(n&&dom.hasClass(n,'mceItemHiddenSpellWord')){
o=true;
return false;
}});
if(!o)
t._done()},
_done:function(){
var t=this,la=t.active;
if(t.active){
t.active=0;
t._removeWords();
if(t._menu)
t._menu.hideMenu();
if(la)
t.editor.nodeChanged()}},
_sendRPC:function(m,p,cb){
var t=this;
JSONRequest.sendRPC({
url:t.rpcUrl,
method:m,
params:p,
success:cb,
error:function(e,x){
t.editor.setProgressState(0);
t.editor.windowManager.alert(e.errstr||('Error response: '+x.responseText))}})}});
tinymce.PluginManager.add('spellchecker',tinymce.plugins.SpellcheckerPlugin)})();
