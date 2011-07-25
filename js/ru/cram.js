/* BUILD DATE: Mon, 25 Jul 2011 20:44:01 GMT*/


/* URL: /js/cram/values.src.js */

var rv=this.rv||{};
rv.number_rus=function(n){
if(n%100>4&&n%100<20)return 2;
switch(n%10){
case 1:return 0;
case 2:case 3:case 4:return 1;
};
return 2;
};
rv.number=function(n,a,b,c){
var u;
if(a===u)a=0,b=1,c=2;
if(n%100>4&&n%100<20)return c
switch(n%10){
case 1:return a;
case 2:case 3:case 4:return b;
};
return c;
};
rv.aweek=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
rv.aweek_small=["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
rv.month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
rv.month_of=["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];
rv.month_small=["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"];
rv.clock=["час","часа","часов"];
rv.zones=[
{v:'Pacific/Samoa',text:"(GMT-11:00) о.Мидуэй, Самоа"},
{v:'Pacific/Honolulu',text:"(GMT-10:00) Гавайи, Гонолулу, Таити"},
{v:'America/Anchorage',text:"(GMT-08:00) Аляска"},
{v:'America/Los_Angeles',text:"(GMT-07:00) Лос-Анжелес, Тихуана, Ванкувер, Уайтхорс"},
{v:'US/Pacific',text:"(GMT-07:00) Тихоокеанское время (США и Канада)"},
{v:'America/Denver',text:"(GMT-06:00) Денвер, Чихуахуа, Эдмонтон, Феникс"},
{v:'America/Belize',text:"(GMT-06:00) Белиз, Саскачеван"},
{v:'America/Guatemala',text:"(GMT-06:00) Гватемала"},
{v:'America/Cancun',text:"(GMT-05:00) Канкун, Чикаго, Коста Рико"},
{v:'America/Mexico_City',text:"(GMT-05:00) Гвадалахара, Мехико, Монтеррей (старый)"},
{v:'America/Monterrey',text:"(GMT-05:00) Гвадалахара, Мехико, Монтеррей (новый)"},
{v:'America/Bogota',text:"(GMT-05:00) Богота, Кайман, Гавана, Ямайка"},
{v:'America/Caracas',text:"(GMT-04:30) Каракас"},
{v:'America/Montreal',text:"(GMT-04:00) Монреал, Нассау, Нью Йорк, Панама"},
{v:'America/Anguilla',text:"(GMT-04:00) Ангилья, Антигуа, Аруба"},
{v:'America/Barbados',text:"(GMT-04:00) Барбадос, Доминика, Сантьяго, Гренада, Гваделупа"},
{v:'America/Puerto_Rico',text:"(GMT-04:00) Пуэрто Рико, Рио Бранко, Сан Доминго, Бермуды"},
{v:'America/Halifax',text:"(GMT-03:00) Галифакс, Манаос, Монсерат"},
{v:'Canada/Atlantic',text:"(GMT-03:00) Атлантическое время (Канада)"},
{v:'America/Argentina/Buenos_Aires',text:"(GMT-03:00) Буэнос-Айрес, Катамарка, Кордоба"},
{v:'America/Argentina/Mendoza',text:"(GMT-03:00) Мендоза, Рио Галлегос, Сан Ян"},
{v:'America/Montevideo',text:"(GMT-03:00) Монтевидео"},
{v:'Canada/Newfoundland',text:"(GMT-02:30) Ньюфаундленд"},
{v:'America/Noronha',text:"(GMT-02:00) Фернандо-Де-Норонха, Сан Пауло"},
{v:'Atlantic/Azores',text:"(GMT 00:00) Азорские о-ва"},
{v:'Africa/Abidjan',text:"(GMT 00:00) Абиджан, Аккра, Бамако, Биссау"},
{v:'Africa/Accra',text:"(GMT 00:00) Акра, Бамако, Биссау, Касабланка, Дакар"},
{v:'Atlantic/Reykjavik',text:"(GMT 00:00) Рейкьявик, Дублин, Монровия, Касабланка"},
{v:'Europe/London',text:"(GMT 00:00) Лондон"},
{v:'Africa/Algiers',text:"(GMT+01:00) Алжир, Бангуи, Киншаса, Лагос"},
{v:'Africa/Luanda',text:"(GMT+01:00) Луанда, Малаба, Ниамей, Тунис"},
{v:'Europe/Amsterdam',text:"(GMT+02:00) Амстердам, Андора, Белград, Берлин, Братислава"},
{v:'Europe/Brussels',text:"(GMT+02:00) Брюссель, Будапешт, Копенгаген"},
{v:'Europe/Gibraltar',text:"(GMT+02:00) Гибралтар, Люксембург, Мадрид, Мальта, Монако, Осло"},
{v:'Europe/Paris',text:"(GMT+02:00) Париж, Прага, Рим, Санмарино, Сараево, Стокгольм"},
{v:'Europe/Vatican',text:"(GMT+02:00) Ватикан, Вена, Варшава, Цюрих"},
{v:'Africa/Cairo',text:"(GMT+03:00) Каир, Йоханнесбург, Кугали, Аман"},
{v:'Asia/Beirut',text:"(GMT+03:00) Бейрут, Дамаск, Газа, Стамбул, Иерусалим, Афины"},
{v:'Europe/Bucharest',text:"(GMT+03:00) Бухарест, Хельсинки, Калининград"},
{v:'Europe/Kiev',text:"(GMT+03:00) Киев, Минск, Рига, София"},
{v:'Europe/Tallinn',text:"(GMT+03:00) Таллин, Вильнюс"},
{v:'Africa/Addis_Ababa',text:"(GMT+03:00) Аддис-Абаб, Асмера"},
{v:'Africa/Mogadishu',text:"(GMT+03:00) Могадишо, Найроби, Аден, Багдад, Бахрейн"},
{v:'Asia/Kuwait',text:"(GMT+03:00) Кувейт, Катар"},
{v:'Europe/Moscow',text:"(GMT+04:00) Москва"},
{v:'Asia/Tbilisi',text:"(GMT+04:00) Тбилиси, Ереван, Самара"},
{v:'Asia/Tehran',text:"(GMT+04:30) Тегеран, Баку, Дубаи"},
{v:'Asia/Kabul',text:"(GMT+04:30) Кабул, Ашхабад, Душанбе, Карачи, Орал"},
{v:'Indian/Maldives',text:"(GMT+05:00) Мальдивы, Калькута"},
{v:'Asia/Colombo',text:"(GMT+05:30) Коломбо"},
{v:'Asia/Katmandu',text:"(GMT+05:45) Катманду"},
{v:'Asia/Yekaterinburg',text:"(GMT+06:00) Екатеринбург"},
{v:'Asia/Almaty',text:"(GMT+06:00) Алма-Ата, Бишкек"},
{v:'Asia/Rangoon',text:"(GMT+06:30) Рангун, Кокос"},
{v:'Asia/Novosibirsk',text:"(GMT+07:00) Новосибирск, Омск"},
{v:'Asia/Bangkok',text:"(GMT+07:00) Бангкок, Джакарта"},
{v:'Asia/Krasnoyarsk',text:"(GMT+08:00) Красноярск"},
{v:'Asia/Brunei',text:"(GMT+08:00) Брунеи, Гонконг"},
{v:'Asia/Kuala_Lumpur',text:"(GMT+08:00) Куала-Лумпур, Макао, Манило"},
{v:'Asia/Shanghai',text:"(GMT+08:00) Шанхай, Сингапур, Тайпей"},
{v:'Asia/Ulaanbaatar',text:"(GMT+08:00) Улан-Батор"},
{v:'Asia/Irkutsk',text:"(GMT+09:00) Иркутск"},
{v:'Asia/Seoul',text:"(GMT+09:00) Сеул, Токио"},
{v:'Australia/Adelaide',text:"(GMT+09:30) Аделаида"},
{v:'Asia/Yakutsk',text:"(GMT+10:00) Якутск"},
{v:'Australia/Brisbane',text:"(GMT+10:00) Брисбен, Гуам, Порт-Морсби, Сайпан"},
{v:'Australia/Canberra',text:"(GMT+10:00) Канберра, Хобарт, Мельбурн, Сидней"},
{v:'Asia/Vladivostok',text:"(GMT+11:00) Владивосток"},
{v:'Pacific/Kosrae',text:"(GMT+11:00) Косрае, Понапе"},
{v:'Pacific/Norfolk',text:"(GMT+11:30) Норфолк"},
{v:'Pacific/Funafuti',text:"(GMT+12:00)Фунафути, Науру"},
{v:'Pacific/Auckland',text:"(GMT+12:00) Окленд,Фиджи"},
{v:'Asia/Magadan',text:"(GMT+12:00) Магадан"},
{v:'Asia/Anadyr',text:"(GMT+13:00) Анадырь, Камчатка"}
];
rv['zone: Europe/Moscow']={
w:-180,
s:-240,
d:[]
};


/* URL: /js/mcore/nano.src.js */

var rr=this.rr||{'ver':'minicore 0.2',global:this,document:document};
new function(){
var z=rr,d=document,w=window,nv=navigator,ua=nv.userAgent,v,i,f;
v=(ua.match(/.+(rv|WebKit|era|MSIE|Safari)[\/: ](\d+(\.\d)?)/)||[])[2]-0;
z.Kqn=z.Opera=z.Gecko=z.IE=z.WebKit=z.SWF=z.Chrome=z.Safari=z.Firefox=NaN;
if(w.opera&&opera.buildNumber){
z.Opera=(opera.version&&opera.version()||v)-0;
}
else if(/Konqueror/.test(ua)){
z.Kqn=(+(ua.match(/Konqueror\/(\d+)/)||false)[1])||3;
}
else if(/WebKit/.test(ua)){
z.WebKit=(+(ua.match(/AppleWebKit\/(\d+)/)||false)[1])||533;
if(i=ua.match(/Chrome\/(\d+(\.\d)?)/)){
z.Chrome=+i[1];
}
else if(i=/Apple/.test(nv.vendor)&&ua.match(/Version\/(\d+(\.\d)?)/)){
z.Safari=+i[1];
}}
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
try{
f=!z.Kqn&&(/(\d+(\.\d+)?)/).exec(nv.mimeTypes['application/x-shockwave-flash'].enabledPlugin.description)[1]||false
}catch(e){f=false};
if(!f&&z.IE&&w.ActiveXObject){
try{
f=(/WIN\s+(\d+)/).exec(new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version'))[1]
}catch(e){}};
if(f)z.SWF=+f||NaN;
z.is_mobile=/Mobile/.test(ua);
z.is_j2me=/J2ME[\/]/.test(nv.appVersion);
z.is_OperaMini=/Opera Mini[\/]/.test(nv.appVersion);
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
if(fn==='force'||fn==='fastInit')
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
rr.ex=function(o){
var i=1,l=arguments.length,n,e;
if(!o)o={};
while(i<l){
if(e=arguments[i++]){
for(n in e)if(e.hasOwnProperty(n))o[n]=e[n];
if(rr.IE<9&&e.hasOwnProperty('constructor'))o.constructor=e.constructor;
}};
return o;
};
rr.ex_=function(){
var i=arguments.length-1,o=arguments[i]||{},n,e;
while(i--){
if(e=arguments[i]){
for(n in e)if(e.hasOwnProperty(n))o[n]=e[n];
if(rr.IE<9&&e.hasOwnProperty('constructor'))o.constructor=e.constructor;
}};
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
rr.textSelection_collapse=function(n,f){
this.textSelection_set(n,f?0:n.value.length)};
new function(){
function x(x){
var j=x.length;
return function(v){
v=typeof v=='string'&&v.indexOf(x)>0?+v.slice(0,-j):NaN;
return v===v?v:null;
}};
rr.getPx=x('px');
rr.getEm=x('em');
rr.getEx=x('ex');
rr.getPc=x('%')};
rr.extend(rr,{
$:function(e,d){
return typeof e==='string'?(d||rr.document).getElementById(e):e;
},
trim:''.trim?function(s,t){return typeof s=='string'?s.trim():s+''}:(function(rg){return function(s,t){return typeof s=='string'?s.replace(rg,''):s+''}})(/^[\s|\xA0]+|[\s|\xA0]+$/g),
timeThrow:function(e){
setTimeout(function(){throw e},1)},
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
var l=arguments.length,i,p,s,u;
if(!c)c={};
p=c.parent;
if(p=p?p.prototype:false){
cn.prototype=p;
p=new cn;
if(s=c.prototype){
for(i in s)if(s[i]!==u)p[i]=s[i];
c.prototype=p;
}};
s=c.constructor;
if(!s||s===oc)s=clss(c);
if(p=c.prototype)s.prototype=p;
if(i=c.interface)s.prototype[typeof i==='string'?i:'interface']=c;
s.interface=c;
return s;
}}(),
newPrototype:function(){
var c=function(){},cp=c.prototype;
return function(p){return c.prototype=p||cp,new c}}(),
newTemplate:function(){
var c=function(){},cp=c.prototype,ie=!(function(i){for(i in{constructor:1})return 1})(),s=!{}.__proto__;
return function(p){
c.prototype=p||cp;
var x=new c,l=arguments.length,i=1,n,e;
while(i<l){
if(e=arguments[i++]){
for(n in e)if(e.hasOwnProperty(n))x[n]=e[n];
if(ie&&e.hasOwnProperty(n='constructor'))x[n]=e[n];
}};
return x;
}}(),
type:(function(){
var to=Object.prototype.toString;
var r=typeof/x/!=='function';
return function(v){
var x;
if(v===x)return'undefined';
if(v===null)return'null';
switch(x=typeof v){
case'function':if(r)break;
case'object':
switch(to.call(v)){
case'[object Array]':return'array';
case'[object Date]':return'date';
case'[object RegExp]':return'regexp';
case'[object String]':return'string';
case'[object Number]':return'number';
}};
return x;
}})(),
newHttpRequest:this.XMLHttpRequest?function(){return new XMLHttpRequest()}
:function(){
try{return new ActiveXObject('Microsoft.XMLHTTP')}catch(e){}},
printx:(function(){
var rg=/%%|%(s|\d{1,2})%?/g,arg,u,l,p;
function fn(s,x){
return s==='%%'?'%':x==='s'?arg[++p]:arg[p=++x];
};
return function(v){
if(v&&typeof v=='string'){
p=0;arg=arguments;l=arg.length;
v=v.replace(rg,fn)};
return v
}})(),
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
if(h===false)h=this.breakEvent;
if(o&&e&&h){
var a=e.indexOf(' ')!==-1?e.split(' '):[e],i=0;
if(o.nodeType<0)o=o.node;
while(e=a[i++]){
switch(e){
case'mouseScroll':
e=rr.Gecko?'DOMMouseScroll':'mousewheel';
break;
case'scroll':
if(o.nodeType==9)o=rr.IE||rr.Opera?o.parentWindow:o;
break;
case'resize':
if(o.nodeType==9)o=o.defaultView||o.parentWindow;
break;
};
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
if(o.nodeType<0)o=o.node;
while(e=a[i++]){
switch(e){
case'mouseScroll':
e=rr.Gecko?'DOMMouseScroll':'mousewheel';
break;
case'scroll':
if(o.nodeType==9)o=rr.IE||rr.Opera?o.parentWindow:o;
break;
};
if(w3||typeof o.removeEventListener==='function'){
o.removeEventListener(e,h,!!x)}else o.detachEvent('on'+e,h)}}}}(),
addHandler_:function(o,e,h,x){return this.addHandler(o,e,h,x!==false)},
removeHandler_:function(o,e,h,x){return this.removeHandler(o,e,h,x!==false)},
getClientWH:function(d,sc){
d=d||this.document;
if(rr.qIE&&!d.body)return{x:800,y:600};
var v=rr.qIE?d.body:d.documentElement
,r={
w:v.clientWidth,
h:v.clientHeight
}
,w
;
if(!sc){
r.sw=v.scrollWidth;
r.sh=v.scrollHeight;
if(w=d.defaultView){
r.st=w.pageYOffset;
r.sl=w.pageXOffset;
}
else{
r.st=v.scrollTop;
r.sl=v.scrollLeft;
}};
return r;
},
getScrollTop:function(d){
d=d||this.document;
return rr.IE?(rr.qIE?d.body||false:d.documentElement).scrollTop:d.defaultView.pageYOffset;
},
setScrollTop:function(y,d){
d=d||this.document;
if(y<0)y=0;
if(y>0||y===0){
(rr.WebKit?d.body||false:d.documentElement).scrollTop=y;
}},
scrollTo:typeof window.scrollTo=='function'?function(d,x,y){
(d||document).defaultView.scrollTo(x>0?x:0,y>0?y:0)}:function(d,y,x){
if(!d)d=document;
if(rr.IE&&window.scrollTo){
d.parentWindow.scrollTo(x>0?x:0,y>0?y:0)
return;
};
var n=rr.WebKit?d.body||false:d.documentElement;
if(n){
n.scrollLeft=x>0?x:0;
n.scrollTop=y>0?y:0;
}},
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
urlEscape:function(x){
return window.encodeURIComponent(x).replace(/\%20/g,'+')},
urlDecode:function(x){
return typeof x!=='string'?x+'':decodeURIComponent(x.replace('+','%20'))},
jsEscape:window.JSON&&JSON.__native_!==false&&JSON.stringify('\u0451')=='"\u0451"'?
function(v){return JSON.stringify(v+'').slice(1,-1)}
:new function(){
var rg=new RegExp('\\\\|[\"\'\\n\\r\\b\\t\\f]','g'),c={'\\':'\\\\','"':'\\"','\'':'\\\'','\n':'\\n','\r':'\\r','\b':'\\b','\t':'\\t','\f':'\\f'};
function r(x){return c[x]};
return function(v){
return typeof v=='string'?v.replace(rg,r):v+'';
}},
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
d.getElementsByTagName('head')[0].appendChild(i)};
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
var d=cfg.document||this.document,h=d.getElementsByTagName('head')[0],s=d.createElement('script'),ok;
s.charset=cfg.charset||'utf-8';
s.type='text/javascript';
if(cfg.defer!==false)s.defer='defer';
if(cfg.event){
function q(){
if(!ok){
ok=true;
s.onreadystatechange=s.onload=s.onerror=null;
if(cfg.event)cfg.event(src,true);
if(cfg.rm||cfg.remove)h.removeChild(s)}};
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
if(e.stopPropagation)e.stopPropagation();
e.cancelBubble=true;
}},
breakEvent:function(e){
if(e){
e.returnValue=false;
if(e.preventDefault)e.preventDefault()};
return false;
},
breakDOMEvent:function(e){
if(!e&&this.nodeType>0)e=this.ownerDocument.parentWindow.event;
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
preventDefault:function(e){
if(e)if(e.preventDefault){e.preventDefault()}else e.returnValue=false;
},
styles_list:{
},
styles_groups:{
},
styles_extend:function(g,ns,x){
if(g&&ns){
if(x=this.styles_groups[g]){
this.css_add(ns,x={className:x});
x=x.className
}else x=ns;
this.styles_groups[g]=x;
}},
styles:(function(){
function exend(a,m){
var l=m.length,i=0,x;
for(;i<l;i++)
if(x=m[i]){
switch(typeof x){
case'string':a.push(x);break;
case'object':
if(x&&typeof x.push=='function'){
exend(a,x)};
break;
}}};
return function(ex){
if(!ex&&ex!=null)return;
var x,i,l,j,a=ex,u,fs;
if(!ex||typeof ex!='string'){
ex='~global';
}
else{
i=ex.indexOf(':');
if(i!==-1){
x=i?ex.substring(0,i):'global';
this.styles_extend(x,ex)}};
a=this.styles_list[ex]||(this.styles_list[ex]=[]);
if(!(a instanceof Array)){
return;
};
for(i=1,j=arguments.length;i<j;i++)
if(x=arguments[i])
switch(typeof x){
case'string':a.push(x);break;
case'object':
if(x&&typeof x.push=='function'){
exend(a,x)};
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
if(d=d.getElementsByTagName('head')[0])d.appendChild(s);
return s;
},
styles_include:function(ns,d){
this.styles_stepindex++;
var a=this.styles_assemble(ns),i,x;
if(!d||d.nodeType!==9)d=rr.document;
if(a&&a.length>0){
return this.styles_create(a.join('\n'),d)}},
styles_stepindex:0,
styles_assemble:function(ns,a,r){
if(!ns||typeof ns!='string')return;
if(!a)a=[];
var m=ns.split(' '),l=m.length,j=a.length,i=0,u,s,x;
for(;i<l;i++)if(x=m[i]){
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
cookie_get:function(n){
var c=document.cookie,p=n+'=',e,b;
if(!c)return null;
b=c.indexOf('; '+p);
if(b==-1){
b=c.indexOf(p);
if(b!=0)return null;
}else
b+=2;
e=c.indexOf(';',b);
if(e==-1)e=c.length;
return unescape(c.substring(b+p.length,e))},
cookie_set:function(n,v,e,p,d,s){
if(typeof e=='number'){
e=new Date(new Date().getTime()+e)};
document.cookie=n+'='+escape(v)+
((e)?'; expires='+e.toGMTString():'')+
((p)?'; path='+escape(p):'')+
((d)?'; domain='+d:'')+
((s)?'; secure':'')},
cookie_remove:function(n,p,d){
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
prev:function(s){return new css(rr.css_prev(s,this.node))}}})();
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
var s=(' '+cn).indexOf(' '+cl),e;
if(s!==-1){
e=cn.indexOf(' ',s);
return e!==-1?cn.substring(s,e):cn.substring(s)}},
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
}}},
css_switch:function(c,n,ix){
if(!n||c===null)return;
var css=n.className,ncss=css,nc,x,j,r,i,index_of;
switch(typeof c){
case'string':c=c.split(' ');break;
case'object':break;
default:return
};
if(ix!==ix||typeof ix!=='number'){
ix=c.length<2?0:false;
};
if(!css){
if(x=c[ix||0]){
n.className+=' '+x;
};
return!!x;
};
index_of=!!c.indexOf;
if(css.indexOf(' ')===-1){
j=index_of?c.indexOf(css):this.indexOf(c,css);
if(j===-1){
x=c[ix||0];
if(r=x&&x!=='~'){
n.className+=' '+x;
};
return r;
};
if(ix!==false){
x=c[ix];
if(x==='~')x='';
if(r=x!==css){
n.className=c[ix]||'';
};
return r;
};
ix=j+1<c.length?j+1:0;
if(x=ix!==j){
n.className=c[ix]||'';
};
return x;
};
var acss=css.split(' '),l=acss.length;
var ncss=[],change=false,has_nc;
if(ix!==false){
nc=c[ix];
if(nc==='~')nc='';
for(i=0;i<l;i++)if(x=acss[i]){
if(nc===x){
if(!has_nc)ncss.push(nc);
has_nc=true;
continue;
};
j=index_of?c.indexOf(x):this.indexOf(c,x);
if(j!==-1){
change=true;
continue;
};
ncss.push(x)};
if(!has_nc){
ncss.push(nc);
change=true;
};
if(change){
n.className=ncss.join(' ')};
return change;
};
r=-1;
for(i=0;i<l;i++)if(x=acss[i]){
j=index_of?c.indexOf(x):this.indexOf(c,x);
if(j===-1){
ncss.push(x);
continue;
};
r=j;
};
if(++r>=c.length){
r=0;
};
x=c[r];
if(x&&x!=='~'){
ncss.push(x)};
n.className=ncss.join(' ');
return true;
}});
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
rr.new_groupEvents=function(){
var list=[],connected=true,rr=this;
return function(node,event,handler,dn){
var i,x;
switch(node){
case'start':
if(!connected){
connected=true;
for(i=0;x=list[i];i++){
rr.addHandler(x[0],x[1],x[2],x[3])}};
return;
case'close':
if(connected){
connected=false;
for(i=0;x=list[i];i++){
rr.removeHandler(x[0],x[1],x[2],x[3])}};
return;
};
list.push([node,event,handler,dn]);
if(connected){
rr.addHandler(node,event,handler,dn)};
return handler;
}};


/* URL: /js/mcore/rr_master.src.js */

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
if(q.length===u||!isArray(q)){
p=q;
q=p.add;
if(q===u)a=u;
}}}else a=q===0||q==='';
switch(nn){
case'BODY':case'body':
nn=d.body;
break;
case'DocumentFragment':
nn=d.createDocumentFragment();
p=false;
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
i=nn.indexOf(':');
if(rn=i!==-1){
nn=cr(i?nn.substring(0,i):'default',nn.substring(++i),p||false,d,ns,c_);
if(!nn)return;
break;
};
i=nn.indexOf('#');
if(i>0){
id=nn.substring(i+1);
x=i;
};
i=nn.indexOf('.');
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
case'className':case'css':
if(i&&typeof i==='string')cl=cl?cl+' '+i:i;
break;
case'style':
typeof i==='string'?
rr.Gecko<=2?nn.setAttribute('style',i):nn.style.cssText=i
:i&&rr.setStyle(nn,i);
break;
case'href':
if(rr.IE&&i&&i.indexOf('@')!==-1)i=encodeURIComponent(i);
nn.href=i;
break;
default:
if(rr.IE<9&&tg==='BUTTON')continue;
if(x.indexOf('attr ')===0){
if(x=x.substr(5))nn.setAttribute(x,i);
continue;
};
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
if(isArray(a)){
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
var isArray=Array.isArray||new function(o){
var x=Object.prototype.toString,s=x.call([]);
return function(o){return x.call(o)===s}};
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
var x,a,ip,ib,pn,i;
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
if(isArray(a))append(nn,a,d,s)}}};
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
ui=new c(_cr,pr,s);
_cr.namespace=x;
}
else{
return false;
};
return ui;
}};
function tmpl(nn,pr){
switch(typeof nn){
case'function':
if(!nn.prototype.nodeType)nn.prototype.nodeType=-1;
return new nn(this,pr,false);
case'string':break;
default:return;
};
var x=nn.indexOf(':'),nx=this.namespace,ns=x>0?this.global[nn.substring(0,x)]:nx;
if(x===-1||!ns)return;
nn=ns[x=nn.substring(++x)];
if(typeof nn==='function'){
this.namespace=ns;
if(!nn.prototype.nodeType)nn.prototype.nodeType=-1;
nn=new nn(this,pr,false);
this.namespace=nx;
if(nn)return nn;
}};
function nnFn(){};
var nproto=nnFn.prototype;
function forEach(a,ct){
if(typeof a==='number'&&a===a){
a={length:a}};
if(!a||!a.length){
if(typeof a!=='number'||!(x>0)){
return
};
a={length:a}};
var l=a.length,i=0,iend=l-1,m=[],x=ct.prototype,e={first:true,last:false,list:a},v,u;
if(!x.nodeType)x.nodeType=-1;
nnFn.prototype=x;
for(;i<l;i++){
if(i===iend)e.last=true;
e.index=i;
x=new nnFn();
v=ct.call(x,this,a[i],e);
if(v||v===0||v===''){m.push(v)}else if(v===u)m.push(x);
if(!i)e.first=false;
};
return m;
}})();


/* URL: /js/mcore/rr_element.src.js */

rr.class_baseElement=rr.new_class({
interface:'base_interface',
constructor:function(_,pr,cfg){
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
is_connected:false,
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
if(!ui)return;
var t=this,n=ui.nodeType,x,it;
if(!n)return;
if(box!==false){
if(!box)box=t.box||t.node;
x=n<0?ui.node:ui;
if(x&&box)box.appendChild(x)};
if(n<0&&ui.parent!=this){
ui.parent=this;
if(this.is_connected&&!ui.is_connected){
ui.is_connected=true;
if(typeof ui.on_connect=='function'){
ui.on_connect()}}};
return ui;
},
removeParent:function(){
this.parent=null;
var x;
if(x=(this.node||false).parentNode){
x.removeChild(this.node)};
if(this.is_connected){
this.is_connected=false;
if(typeof this.on_connect=='function'){
this.on_connect()}}},
removeChild:function(ui){
if(!ui)return;
if(ui.nodeType>0){
return nd.parentNode.removeChild(nd)};
if(ui.parent!==this){
return;
};
ui.parent=null;
var x;
if(x=ui.node&&ui.node.parentNode){
x.removeChild(ui.node)};
if(ui.is_connected){
ui.is_connected=false;
if(typeof ui.on_connect=='function'){
ui.on_connect()}};
return ui;
},
ev_connect:function(f,rec){
var ui,i=0,it,n,a;
if(!this.is_connected==!f)return;
this.is_connected=f=!!f;
if(typeof this.on_connect=='function'){
this.on_connect(f)};
if(!this.node||rec===false)return;
a=this.node.getElementsByTagName("*");
while(n=a[i++]){
ui=n.rocketui;
if(ui&&!ui.is_connected===f){
ui.is_connected=f;
it=ui.interface;
if(typeof ui.on_connect=='function'){
ui.on_connect(f)}}}}})
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


/* URL: /js/mcore/rr_drag.src.js */

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


/* URL: /js/mcore/rr_xhrloader2.src.js */

rr.xhr=new function(){
var boundary='';
function getQ(nx,mfd){
var q=[],i,v,x,j,l;
boundary=mfd?'--'+Math.random().toString(34).substr(2,6):false;
mfd=boundary;
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
q.push(i+'"\r\n\r\n'+v);
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
q.push(x=i+'"\r\n\r\n'+x);
while(x.indexOf(mfd)!==-1)mfd+=Math.random().toString(34).substr(2,3);
break
};
q.push(i+'='+encodeURIComponent(x));
break;
}}};
break;
}};
if(!q.length)return'';
if(mfd){
return'--'+mfd+'\r\nContent-Disposition: form-data; name="'
+q.join('\r\n--'+mfd+'\r\nContent-Disposition: form-data; name="')
+'\r\n--'+mfd+'--';
};
return q.join('&')};
function delay(t,x){
if(t.is_delay)clearTimeout(t.is_delay);
if(t.is_sending){
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
text=xhr.responseText;
status=xhr.status;
}catch(e){
status=false;
};
try{xhr.abort()}catch(e){};
try{
if(typeof t.event=='function'){
t.event(status,text,nx)};
if(status&&typeof t['ev_'+status]=='function'){
t['ev_'+status](text,nx)}}
catch(e){
setTimeout(function(){throw e},0)};
t.is_sending=false;
delay(t)};
function send(t,nx,async){
var xhr=t.xhr,url=t.url,m='POST',q,type;
if(t.post){
type=(typeof t.post=='string'&&t.post)||'application/x-www-form-urlencoded';
if(xhr.overrideMimeType)xhr.overrideMimeType(type);
q=getQ(nx,type=='multipart/form-data');
if(type=='multipart/form-data'){
type+='; boundary='+boundary;
}}
else{
m='GET';
url+=(url.indexOf("?")!=-1?(/[\?\&]$/.test(url)?'':'&'):'?')+getQ(nx)};
xhr.open(m,url,true);
if(type){
xhr.setRequestHeader('Content-Type',type);
xhr.setRequestHeader('Content-Length',q.length)};
xhr.onreadystatechange=function(){
if(t.is_delay||xhr.readyState!=4)return;
event(t,nx)};
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
this.xhr=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP');
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
return function(url,post){
if(!url||typeof url!='string')url=null;
var x=new clss();
x.url=url;
x.post=post||false;
return x;
}};
rr.xhr_send=(function(){
var clss=rr.newFunction();
clss.prototype={
xhr:null,
abort:function(){
var xhr=this.xhr;
if(xhr){
this.xhr=null;
try{xhr.abort();xhr.onreadystatechange=null}catch(e){}}}};
return function xhr_send(prm){
if(!prm||!prm.url)return;
var obj=new clss();
var xhr=rr.newHttpRequest();
var cb=typeof prm.event=='function'?prm.event:null;
var i,x;
var async=prm.async!==false;
var url=prm.url;
var p=prm.data,q='';
var json=prm.dataType=='json';
var postType=prm.post&&typeof prm.post=='string'?prm.post:'application/x-www-form-urlencoded';
function end(){
var status=xhr.status;
var text=xhr.responseText;
var data=text;
if(status==200)status=false;
if(json){
try{data=window.JSON&&JSON.__native_!==false?JSON.parse(data):(new Function('return '+data))()}
catch(e){
status='error json';
data=null
}};
json?cb(data,status,text):cb(text,status)};
switch(postType){
case'application/json':
case'multipart/form-data':
break;
case'text/plain':
q=typeof p=='string'?p:null;
break;
case'application/x-www-form-urlencoded':
default:
if(p){
q=[];
for(i in p){
x=p[i];
switch(typeof x){
case'number':if(x!==x)break;
case'string':
q.push(i+'='+encodeURIComponent(x));
break;
}};
q=q.join('&')}};
if(!prm.post&&q){
url+=(url.indexOf("?")!=-1?(/[\?\&]$/.test(url)?'':'&'):'?')+q;
};
if(prm.rndURL){
url+=(url.indexOf("?")!=-1?(/[\?\&]$/.test(url)?'':'&'):'?')
+(typeof prm.rndURL=='string'?prm.rndURL+'=':'rnd=')
+Math.random().toString(32).substr(2,5)};
if(prm.post){
if(xhr.overrideMimeType)xhr.overrideMimeType(postType)};
xhr.open(prm.post?'POST':'GET',url,async);
if(cb&&async){
obj.xhr=xhr;
xhr.onreadystatechange=function(){
if(!obj.xhr||xhr.readyState!=4)return;
obj.xhr=null;
var x=xhr;
xhr={status:x.status,responseText:x.responseText};
setTimeout(end,1);
try{x.abort();x.onreadystatechange=null}catch(e){}}};
if(prm.post){
xhr.setRequestHeader('Content-Type',postType);
if(q)xhr.setRequestHeader('Content-Length',q.length)};
new function(){
xhr.send(prm.post&&q?q:null)};
if(cb&&!async){
end()};
return obj;
}})()


/* URL: /js/mcore/rr_history.js */

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
setInterval(v=rr.bind(t,t.check),50)})},
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
)};
x=this.document.location.hash;
this.current_hash=x=='#'?'':x;
return this.current_hash;
},
get:function(){
if(this.active)this.check();
var x=this.active?this.current_hash:this.document.location.hash||'';
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
var v=t.document.location.hash;
if(x==v){
t.change(v&&v!='#'?v.substr(1):'')}},10)}}});


/* URL: /js/mcore/json2.js */

if(!this.JSON){
this.JSON={__native_:false}}
(function(){
"use strict";
function f(n){
return n<10?'0'+n:n;
}
if(typeof Date.prototype.toJSON!=='function'){
Date.prototype.toJSON=function(key){
return isFinite(this.valueOf())?
this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;
};
String.prototype.toJSON=
Number.prototype.toJSON=
Boolean.prototype.toJSON=function(key){
return this.valueOf()}}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
gap,
indent,
meta={
'\b':'\\b',
'\t':'\\t',
'\n':'\\n',
'\f':'\\f',
'\r':'\\r',
'"':'\\"',
'\\':'\\\\'
},
rep;
function quote(string){
escapable.lastIndex=0;
return escapable.test(string)?
'"'+string.replace(escapable,function(a){
var c=meta[a];
return typeof c==='string'?c:
'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})+'"':
'"'+string+'"';
}
function str(key,holder){
var i,
k,
v,
length,
mind=gap,
partial,
value=holder[key];
if(value&&typeof value==='object'&&
typeof value.toJSON==='function'){
value=value.toJSON(key)}
if(typeof rep==='function'){
value=rep.call(holder,key,value)}
switch(typeof value){
case'string':
return quote(value);
case'number':
return isFinite(value)?String(value):'null';
case'boolean':
case'null':
return String(value);
case'object':
if(!value){
return'null';
}
gap+=indent;
partial=[];
if(Object.prototype.toString.apply(value)==='[object Array]'){
length=value.length;
for(i=0;i<length;i+=1){
partial[i]=str(i,value)||'null';
}
v=partial.length===0?'[]':
gap?'[\n'+gap+
partial.join(',\n'+gap)+'\n'+
mind+']':
'['+partial.join(',')+']';
gap=mind;
return v;
}
if(rep&&typeof rep==='object'){
length=rep.length;
for(i=0;i<length;i+=1){
k=rep[i];
if(typeof k==='string'){
v=str(k,value);
if(v){
partial.push(quote(k)+(gap?': ':':')+v)}}}}else{
for(k in value){
if(Object.hasOwnProperty.call(value,k)){
v=str(k,value);
if(v){
partial.push(quote(k)+(gap?': ':':')+v)}}}}
v=partial.length===0?'{}':
gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+
mind+'}':'{'+partial.join(',')+'}';
gap=mind;
return v;
}}
if(typeof JSON.stringify!=='function'){
JSON.stringify=function(value,replacer,space){
var i;
gap='';
indent='';
if(typeof space==='number'){
for(i=0;i<space;i+=1){
indent+=' ';
}}else if(typeof space==='string'){
indent=space;
}
rep=replacer;
if(replacer&&typeof replacer!=='function'&&
(typeof replacer!=='object'||
typeof replacer.length!=='number')){
throw new Error('JSON.stringify')}
return str('',{'':value})}}
if(typeof JSON.parse!=='function'){
JSON.parse=function(text,reviver){
var j;
function walk(holder,key){
var k,v,value=holder[key];
if(value&&typeof value==='object'){
for(k in value){
if(Object.hasOwnProperty.call(value,k)){
v=walk(value,k);
if(v!==undefined){
value[k]=v;
}else{
delete value[k];
}}}}
return reviver.call(holder,key,value)}
text=String(text);
cx.lastIndex=0;
if(cx.test(text)){
text=text.replace(cx,function(a){
return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4)})}
if(/^[\],:{}\s]*$/
.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@')
.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']')
.replace(/(?:^|:|,)(?:\s*\[)+/g,''))){
j=eval('('+text+')');
return typeof reviver==='function'?
walk({'':j},''):j;
}
throw new SyntaxError('JSON.parse')}}}());


/* URL: /js/cram/common.src.js */

if(rr.domReady.stop){
location.href='/nojs';
};
(function(){
var sw=window.opera?Math.max(screen.width,screen.height):screen.width;
document.documentElement.id='js';
document.documentElement.className+=" rnd-"+Math.floor(Math.random()*3)
+' sw-'+(sw<=980?980:sw<=1024?1024:sw<=1200?1200:sw<=1400?1400:2000)
+' skin-'+((window._settings||false)['skin']||'default')})();
rr.styles('tmpl:common',rr.IE&&'head {filter:;}');
var tmpl={},elems={},tmpl_js,domMaster,masterElement;
domMaster=masterElement=rr.new_master(document,{
tmpl:tmpl_js=rr.newTemplate(tmpl),
ui:rr.newTemplate(elems)});
domMaster.namespace=masterElement.global.tmpl;
if(!this.cram)this.cram={};
var rmail=cram;
rr.domReady(function(){
var _=masterElement;
switch(cram.page_name){
case'contacts':
_.master('ui:pg_contacts');
break;
case'messenger_history':_('tmpl:pg_history');break;
case'messenger_history_small':_('tmpl:pg_history');break;
default:
if(cram.page_name){
_('tmpl:pg_'+cram.page_name)}}});
rr.extend(cram,rr.expansion_event,{
hash_current:null,
hash_default:'/mailbox/inbox',
hash_404:'/404',
NUMBER_PAGE:0,
_events_start:[],
_events_init:[],
start:function(nm){
if(this.page_name)return;
window._page_timeHead=new Date;
this.history.start(this.hash_default);
this.page_name=nm||'all';
cram.initEvent('pre_start',false);
rr.styles_include('reset tmpl');
var i=0,a=cram._events_start,x;
for(;x=a[i++];){
if(x[0]=='all'||x[0]==nm){
x[1].call(cram)}};
if(!this.NUMBER_PAGE){
this.go(this.history.get(),true)}},
start_:function(n,cb){
if(typeof cb=='function'){
this.start_ok?cb.call(this):this._events_start.push([n||'all',cb])}},
init_:function(){
var I;
rr.domReady(function(){
if(I)return;
I=true;
if(!this.page_name){
cram.start()};
cram.initEvent('pre_init');
var i=0,a=cram._events_init,nm=this.page_name,x;
for(;x=a[i++];){
if(x[0]=='all'||x[0]==nm){
x[1].call(cram)}}});
return function(n,fn){
I?fn.call(cram):this._events_init.push([n||'all',fn])}}(),
history:new function(){
return new rr.class_history(null,{
document:rr.document,
change:function(x){
if(!x){
cram.history.replace(x=cram.hash_default)};
if(cram.hash_current!==x){
cram.moveScroll(0);
cram.go(x,true)}}})},
history_set:function(x){
this.history.set(
this.hash_current=x
)},
go:function(x,has_history){
if(typeof x!=='string')return;
var NP=this.NUMBER_PAGE+1;
var e={hash:x,has_history:!!has_history,first:!this.hash_current,NUMBER_PAGE:NP,add_break:this.goBreak_add},r;
this.initEvent('open_page',e);
if(!e.handler){
if(!has_history){
return
};
if(this.hash_current==this.hash_default){
this.history.replace(this.hash_current);
return;
};
e={hash:this.hash_default,has_history:true,first:!this.hash_current,NUMBER_PAGE:NP,add_break:this.goBreak_add};
this.initEvent('open_page',e);
if(!e.handler){
return;
}};
this.NUMBER_PAGE=e.NUMBER_PAGE;
this.goBreak_init();
switch(typeof e.handler){
case'function':
r=e.handler.call(this,e);
break;
case'string':
r=this[e.handler](e);
break;
case'boolean':
r=e.handler;
break;
default:
r=false;
};
if(!has_history){
if(this.hash_current!=e.hash){
if(r!==false){
this.hash_current=e.hash;
this.history.set(e.hash)}
else{
e.autoSetHash=true;
}};
return;
};
this.hash_current=e.hash;
if(x!=e.hash){
this.history.replace(e.hash)}},
goBreak_list:[],
goBreak_init:function(){
var a=this.goBreak_list,i=0,x;
for(;x=a[i];i++)try{x()}catch(e){rr.timeThrow(e)};
a.length=0;
},
goBreak_add:function(fn){
if(typeof fn=='function'){
cram.goBreak_list.push(fn)}},
moveScroll:window.scrollTo?function(y){scrollTo(0,y>0?y:0)}
:new function(n){
return function(y){
if(!n)n=rr.WebKit?document.body||false:document.documentElement;
n.scrollTop=y>0?y:0;
n.scrollLeft=0;
}},
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
setTimeout(function(){fn(r)},1)},this.__onbeforeunload_?500:50)},
alert:function(tx,fn){
setTimeout(
function(){
alert(tx);
if(typeof fn==='function'){
setTimeout(fn,1)}}
,this.__onbeforeunload_?600:50
)},
saveSetting:(function(){
var xhr=new rr.xhr('/cram/json/settings',true);
return function(name,v){
if(!name||!xhr)return;
xhr.set('request_key',window._request_key||'no');
xhr.set('set_name',name);
xhr.set('set_value',v||v===0?v:'');
xhr.send()}})(),
loading_keys:[],
loading_node:masterElement('div.b-rm_loading b-rm_loading--hide'),
loading_start:function(key){
this.loading_keys.push(key||null);
rr.css_switch(['b-rm_loading--hide','b-rm_loading--show'],this.loading_node,1)},
loading_stop:function(key,all){
var a=this.loading_keys,i;
key=key||null;
if(!all){
i=a.lastIndexOf?a.lastIndexOf(key):rr.indexOf(a,key);
if(i!==-1){
a.splice(i,1)};
rr.css_switch(['b-rm_loading--hide','b-rm_loading--show']
,this.loading_node
,a.length>0?1:0
)
return
};
var m=[];
for(i=a.length;i--;){
if(a[i]!==key)m.push(a[i])};
this.loading_keys=m;
rr.css_switch(['b-rm_loading--hide','b-rm_loading--show']
,this.loading_node
,m.length>0?1:0
)}});
window.onbeforeunload=function(){
var e={message:false};
cram.initEvent('closeWindow',e);
cram.__onbeforeunload_=true;
setTimeout(function(){cram.__onbeforeunload_=false},100);
if(e.message)return e.message;
window.onerror=null;
};
rr.domReady(function(){
masterElement('tmpl:rm_loading',{node:cram.loading_node});
function stop(e){rr.breakEvent(e);cram.moveScroll(0)};
rr.addHandler(document,'scroll',stop);
setTimeout(function(){
rr.removeHandler(document,'scroll',stop);
cram.moveScroll(0)},500);
cram.moveScroll(0)});
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
if(x=href.substr(i+1)){
if(x=='top'){
rr.WebKit?document.body.scrollTop=0:document.documentElement.scrollTop=0;
return;
}
cram.go(x)}}}});
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
rr.domReady(function(){
return;
if(window._page_timestart)setTimeout(function(){
_page_timeStart=+_page_timestart;
var x=window._page_timeLength=+new Date-_page_timestart;
if(window.console&&console.log){
console.log("time page: "+(_page_timeHead-_page_timestart)+"  "+x)}},10)});
cram.getFormParams=function(frm){
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
cram.addEvent('page_connect',function(e){
var ns=this.mainframe.nodes.topmenu,pid=(e.page||false).pid;
rr.css_set('b-topmenu-item--active',ns.item_compose.node,pid=='compose');
rr.css_set('b-topmenu-item--active',ns.item_mailbox.node,pid=='mailbox');
rr.css_set('b-topmenu-item--active',ns.item_calendar.node,pid=='calendar')});


/* URL: /js/cram/page_connect.src.js */

cram.get_mainframe=function(){
if(!this.mainframe){
this.mainframe=masterElement('ui:mainframe',false);
var pageName;
this.addEvent('page_connectBefore',function(e){
var x=(e.page||false).NAME,menu=this.mainframe.nodes.topmenu;
if(x!==pageName){
pageName=x;
rr.css_set('b-topmenu-item--active',menu.item_contacts.node,x=='contacts');
rr.css_set('b-topmenu-item--active',menu.item_reader.node,x=='reader')}})};
return this.mainframe;
};
new function(){
var __page_connect_;
cram.page_connect_=function(e,page){
return cram.page_connect(page,e)};
cram.page_connect=function(page,e){
if(!page)return;
if(!rr.domReady.status){
var x=!!__page_connect_;
__page_connect_={page:page,e:e};
if(!x){
rr.domReady(function(x){
if(x=__page_connect_){
cram.page_connect(x.page,x.e)}})};
return;
};
__page_connect_=null;
e=e||false;
var d=document,mainframe=this.get_mainframe(),sbar,re,x;
var connect_page=false,connect_sidebar=false;
this.initEvent('page_connectBefore',{
page:page,
event:e
});
d.title=(page.title||e.title||"Почта")+" \u2014 "+(window._user||false).email;
if(typeof page.on_connect_before=='function'){
page.on_connect_before()};
if(mainframe.page!==page){
if(x=mainframe.page){
rr.removeNode(x.node||x);
x.is_connected=false;
if(typeof x.on_connect=='function'){
x.on_connect(false)}};
mainframe.page=this.activePage=page;
if(page.node.parentNode!=mainframe.box){
mainframe.box.appendChild(page.node);
connect_page=true;
}};
sbar=page.sidebar;
if(!sbar||!(sbar.nodeType<0)){
sbar=null;
};
if(mainframe.sidebar!==sbar){
if(x=mainframe.sidebar){
rr.removeNode(x.node||x);
x.is_connected=false;
if(typeof x.on_connect=='function'){
x.on_connect()}};
if(mainframe.sidebar=sbar||null){
mainframe.sidebar_box.appendChild(sbar.node||sbar);
connect_sidebar=true;
}};
if(!mainframe.is_connected&&typeof mainframe.connected=='function'){
mainframe.connected()};
if(connect_page){
page.is_connected=true;
if(typeof page.on_connect=='function'){
page.on_connect(true)}};
if(connect_sidebar){
sbar.is_connected=true;
if(typeof sbar.on_connect=='function'){
sbar.on_connect(true)}};
if(e.scroll!==false){
cram.moveScroll(0)};
if(e.autoSetHash&&e.hash){
if(cram.hash_current!=e.hash){
cram.hash_current=e.hash;
cram.history.set(e.hash)}};
this.initEvent('page_connect',{
page:page,
event:e
})}};


/* URL: /js/cram/tmpl/tmpl_ubutton.src.js */

rr.styles('tmpl:uToolbar'
,'.b-utoolbar {text-align:right;white-space:nowrap;position: relative;line-height: 24px;}'
,'.b-utoolbar-left {float:left;text-align:left;}'
,'.b-utoolbar-right {display: inline-block;}'
,'.b-utoolbar-clear {clear: left;display: block;height: 0;overflow: hidden;width: 0;}'
,'.b-utoolbar .b-ubutton, .b-utoolbar .b-uinput{vertical-align: top;}'
);
rr.styles('tmpl:uButton'
,'.b-ubutton {line-height:20px !important;overflow:visible;margin:0 3px 0 0;vertical-align:middle;white-space:nowrap;border:1px solid;border-color: #999999 #999999 #888888;background-color:#DCDCDC;cursor:pointer;display:inline-block;text-align:left;'
+'-moz-border-radius:2px;;border-radius:2px;'
+'background-position:0;background-repeat:repeat-x;background-repeat:repeat-x;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAhCAYAAAARUmHFAAAALElEQVQokWP8////TAY0wMLAwPALm+AfylT+xCb4j162Ey84pG2nW3gOnO0AZeAjgXbrRFMAAAAASUVORK5CYII=);'
+'background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.6)), to(rgba(200,200,200,0.1)));'
+'background-image:-moz-linear-gradient(top, rgba(255,255,255,0.6), rgba(200,200,200,0));'
+'-moz-box-shadow:0 1px 2px -1px #FFFFFF inset; -webkit-box-shadow:0 1px 1px #FFFFFF inset; box-shadow:0 1px 1px #FFFFFF inset; -khtml-user-select:none; -moz-user-select:none; user-select: none;'
+(rr.Gecko?'padding:1px;':'padding:1px 3px;')
+'}'
,'.b-ubutton--g_new {margin-left:3px;}'
,'.b-ubutton--g_left {margin-right:-1px;'
+(rr.Gecko?'-moz-border-radius-topright: 0;-moz-border-radius-bottomright: 0;'
:rr.WebKit?'margin-right:-3px;-webkit-border-top-right-radius: 0;-webkit-border-bottom-right-radius: 0;'
:'')
+'border-top-right-radius: 0;border-bottom-right-radius: 0;}'
,'.b-ubutton--indentLeft {margin-left:3px;}'
,'.b-ubutton--indentRight {margin-right:6px;}'
,'.b-ubutton--first {margin-left:0;margin-right:0;}'
,'.b-ubutton--firstLeft {margin-left:0;}'
,'.b-ubutton--firstRight {margin-right:0;}'
,'.b-ubutton--g_left {margin-right:-1px;}'
,'.b-ubutton--g_right {'
+(rr.Gecko?'-moz-border-radius-topleft: 0;-moz-border-radius-bottomleft: 0;'
:rr.WebKit?'-webkit-border-top-left-radius: 0;-webkit-border-bottom-left-radius: 0;'
:'')
+'border-top-left-radius: 0;border-bottom-left-radius: 0;}'
,'.b-ubutton--g_center {margin-right:-1px;-moz-border-radius:0;-webkit-border-radius: 0;border-radius: 0;}'
,'.b-ubutton-wrap {position: relative;top:0;display:block; pointer-events:none;height:20px;background-position:0 50%;}'
,rr.Gecko&&'.b-ubutton-wrap {margin-top:-1px;margin-bottom:-1px;}'
,'.b-ubutton-text {display:block;font-size:11px;line-height:20px;overflow: hidden;margin-left: 3px;margin-right:3px;'
+(rr.Gecko?'margin-left: 2px;margin-right:2px;':'')
+(rr.Gecko>=2?'line-height:21px;':'')
+'}'
,'.b-ubutton--icon-left .b-ubutton-wrap {margin-left: -2px;}'
,'.b-ubutton--icon-right .b-ubutton-wrap {margin-right: -2px;background-position:100% 50%;}'
,'.b-ubutton--icon-only .b-ubutton-wrap {width:20px;background-position: 50% 50%;}'
,'.b-ubutton--icon-none .b-ubutton-wrap {background-image:none !important;}'
,'.b-ubutton--icon-left .b-ubutton-text {margin-left: 21px;}'
,'.b-ubutton--icon-right .b-ubutton-text {margin-right:21px;}'
,'.b-ubutton--icon-only .b-ubutton-text {display:none;}'
,'.b-ubutton:hover {border-color:#777;position:relative;box-shadow:0 1px 2px -1px #FFFFFF inset, 0 0 0 2px rgba(70, 169, 232, 0.3)}'
,'.b-ubutton:focus {position:relative;}'
,'.b-ubutton--no_disabled:active, .b-ubutton--active {cursor:pointer;outline:0px solid;border-color:#555;'
+(rr.Gecko?'-moz-box-shadow:0 1px 3px -1px #000 inset;background-image:-moz-linear-gradient(top, rgba(0,0,0,0.1), rgba(255,255,255,0));'
:rr.WebKit?'-webkit-box-shadow:inset 0 1px 4px #999;background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.1)), to(rgba(255,255,255,0)));'
:(rr.Opera||rr.IE)?'background-position:0;background-repeat:repeat-x;background-repeat:repeat-x;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAhCAYAAAARUmHFAAAAPElEQVQokWNkYGCQYEADLOzs7P8wBDk4ONDFcAhSqJ2Dg+MPNjOJ106k7RSaSU8nYQYISdFBCycNXAoBAPv/DWfGtM53AAAAAElFTkSuQmCC);'
:'')
+'box-shadow:inset 0 0 4px #999;}'
,(rr.Gecko||rr.WebKit||rr.IE>=9)&&'.b-ubutton--no_disabled:active .b-ubutton-wrap, .b-ubutton--active .b-ubutton-wrap {top:1px;}'
,'.b-ubutton--disabled, .b-ubutton--disabled:hover {color:#777;border-color:#999;cursor:default;}'
,'.b-ubutton--disabled:hover .b-ubutton-text {color:#777;}'
);
rr.styles('tmpl:uInput'
,'.b-uinput {font-size:13px;line-height:18px;text-align: left;overflow: hidden;position:relative;width:17em;vertical-align:middle;border:1px solid #999;background-color:#fff;cursor:text;display:inline-block;margin-right:3px;padding:0;'
+(rr.Gecko?'background-image:-moz-linear-gradient(top, rgba(255,255,255,0.6), rgba(255,255,255,0));'
:rr.WebKit?'background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.4)), to(rgba(255,255,255,0)));'
:(rr.Opera||(rr.IE>=8))?'background-position:0;background-repeat:repeat-x;background-repeat:repeat-x;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAhCAYAAAARUmHFAAAALElEQVQokWP8////TAY0wMLAwPALm+AfylT+xCb4j162Ey84pG2nW3gOnO0AZeAjgXbrRFMAAAAASUVORK5CYII=);'
:'')
+'}'
,'.b-uinput:hover {position:relative; z-index:1;box-shadow:0 1px 2px -1px #FFFFFF inset, 0 0 0 2px rgba(70, 169, 232, 0.3)}'
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
,'.b-uinput--indentLeft {margin-left:3px;}'
,'.b-uinput--indentRight {margin-right:6px;}'
,'.b-uinput--first {margin-left:0;margin-right:0;}'
,'.b-uinput--firstLeft {margin-left:0;}'
,'.b-uinput--firstRight {margin-right:0;}'
,rr.WebKit&&'.b-uinput--focus {-webkit-box-shadow:inset 0 0 4px #e49b0f;}'
,'.b-uinput-cap {display:block;padding:1px 2px;line-height:1px;'
+(rr.Opera||rr.IE?'padding:1px 3px;':'')
+'}'
,'.b-uinput-h {display: inline-block;height: 20px;vertical-align: middle;width:0;}'
,'.b-uinput-inp {font-size:13px;font-family:\'Lucida Grande CY\',Arial,sans-serif;line-height:1 !important;height:18px;width:100%;text-align:left;background-color:#FFFFFF;'
+'border:0px solid;padding:0;margin:0;vertical-align:middle;-webkit-appearance: none;'
+'-webkit-border-radius: 0;-moz-border-radius: 0;border-radius: 0;background-image:none;'
+(rr.IE?'margin-top: 1px;':'')
+'}'
,rr.WebKit&&'.b-uinput-inp {outline: none;}'
,rr.IE&&'.b-uinput-inp {line-height:1.3 !important;}'
,'.b-uinput--search_text {width:34%;}'
,'.b-uinput-help_text {pointer-events:none;font-family:\'Lucida Grande CY\',Arial,sans-serif;color:#777777;line-height: 1px;margin-left:3px;position:absolute;top:50%;'
+(rr.Opera||rr.WebKit?'margin-top:-1px;':'')
+'}'
,'.b-uinput-help_text--hide {display:none;}'
,'.b-uinput-clear {display:none;background-color:#FF0000;cursor:pointer;height:20px;margin-top:-10px;position:absolute;right:3px;top:50%;width:20px;}'
,'.b-uinput-clear--active {display:block;}'
);
tmpl.uToolbar=function(_,pr){
var ns=this,u;
ns.node=_('div.b-utoolbar',{className:pr.css}
,ns.box=_('div.b-utoolbar-left')
,ns.right=(pr.right||pr.right===0?_('div.b-utoolbar-right',false,pr.right):u)
,_('span.b-utoolbar-clear'))};
tmpl.uButton=function(_,pr){
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
ns.node=ns.button=_('button'
,{
type:'button',
style:pr.style,
className:'b-ubutton b-ubutton--no_disabled'+gn
+(pr.icon==='right'?' b-ubutton--icon-right'
:pr.icon=='only'?' b-ubutton--icon-only'
:pr.icon?' b-ubutton--icon-left'
:' b-ubutton--icon-none'
)
+(pr.active?' b-ubutton--active':'')
+(!pr.indent?'':pr.indent==='right'?' b-ubutton--indentRight':' b-ubutton--indentLeft')
+(pr.first==='left'?' b-ubutton--firstLeft':pr.first==='right'?' b-ubutton--firstRight':pr.first?' b-ubutton--first':'')
+(pr.css?' '+pr.css:''),
tabIndex:pr.tabIndex||1,
title:pr.title===0?0:pr.title||''
}
,ns.wrap=_('span.b-ubutton-wrap',{css:pr.css_icon}
,_('span.b-ubutton-text'
,ns.text=_.text(pr.text))));
if(rr.Opera){
ns.node.addEventListener('mousedown',rr.breakEvent,false);
ns.node.addEventListener('dblclick',rr.breakEvent,false);
ns.node.addEventListener('mouseup',ns.node.focus,false)}};
tmpl.uInput=function(_,pr){
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
if(pr.first){
gn+=pr.first==='left'?' b-uinput--firstLeft':pr.first==='right'?' b-uinput--firstRight':pr.first?' b-uinput--first':'';
};
if(pr.indent){
gn+=pr.indent==='right'?' b-ubutton--indentRight':' b-ubutton--indentLeft';
};
ns.node=_('label.b-uinput'+gn
,{
className:pr.css,
title:pr.title||''
}
,ns.help_text_wr=_('span.b-uinput-help_text b-uinput-help_text--hide'
,ns.help_text=_.text(pr.help||""))
,_('span.b-uinput-cap'
,_('span.b-uinput-h')
,ns.input=_('input.b-uinput-inp'
,{
tabIndex:pr.tabIndex||1,
type:'text',
value:pr.value||(pr.value!==0?'':0)}))
,_('span.b-uinput-clear'))};
tmpl.uInputSelect=function(_,pr){
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


/* URL: /js/cram/ui/ui_ubutton.src.js */

elems.uButton=rr.new_class({
interface:false,
constructor:function(_,pr){
var ui=this,v;
v=typeof pr.text;
ui.texts=v==='string'?[pr.text]:v==='object'&&v?pr.text:[];
v=typeof pr.title;
ui.titles=v==='string'?[pr.title]:v==='object'&&v?pr.title:[];
v=typeof pr.css_icon;
ui.icons=v==='string'?[pr.css_icon]:v==='object'&&v?pr.css_icon:[];
if(pr.index_icon>0)ui.index_icon=pr.index_icon;
if(pr.index_text>0)ui.index_text=pr.index_text;
if(pr.index_title>0)ui.index_title=pr.index_title;
if(pr.active)ui.active=true;
var xprm=rr.newPrototype(pr);
xprm.text=ui.texts[ui.index_text];
xprm.title=ui.titles[ui.index_title];
xprm.css_icon=ui.icons[ui.index_icon];
ui.nodes=new tmpl.uButton(_,xprm);
ui.node=ui.button=ui.nodes.node;
ui.text=ui.nodes.text;
rr.addHandler(ui.node,'click',function(e){
if(typeof ui.onclick=='function'){
if(ui.onclick(e)===false){
rr.breakEvent(e)}}})},
prototype:{
index_icon:0,
index_text:0,
index_title:0,
active:false,
set_disabled:function(x){
this.button.disabled=!!x;
var cl=this.node.className,xc={className:cl};
rr.css_set(this.nodes.s_disabled,xc,x);
rr.css_set(this.nodes.s_disabled_no,xc,!x);
if(cl!==xc.className)this.node.className=xc.className;
},
set_active:function(x){
this.active=!!x;
rr.css_set(this.nodes.s_active,this.node,x)},
set_icon:function(x){
var v=this.icon,n;
v=!v?'none':v=='only'||v=='right'?v:'left';
x=!x?'none':x=='only'||x=='right'?x:'left';
if(x!=v){
this.icon=x;
rr.css_set_('b-ubutton--icon-',this.node,x)}},
set_cssIcon:function(x,i){
if(typeof x=='string'){
i=rr.indexOf(this.icons,x);
x=i<0?this.icons.push(x)-1:i;
};
this.set_indexIcon(x)},
set_indexIcon:function(x){
var i;
if(x<0){
i=this.index_icon||0;
if(i>=0)rr.css_remove(this.icons[i],this.nodes.wrap);
this.index_icon=-1;
return
};
i=this.index_icon||0;
if(x>=0&&i!==x){
this.index_icon=x;
if(i=this.icons[i])rr.css_remove(i,this.nodes.wrap);
if(x=this.icons[x])rr.css_add(x,this.nodes.wrap)}},
set_indexText:function(x,xt){
if(this.index_text!=x&&x>=0){
this.nodes.text.data=this.texts[x];
this.index_text=x;
};
if(xt>0||xt===0){
this.set_indexTitle(xt)}},
set_indexTitle:function(x){
if(this.index_title!=x&&x>=0){
this.node.title=this.titles[x];
this.index_title=x;
}}}});
elems.uInput=rr.new_class({
interface:false,
constructor:function(_,pr){
var ns=new tmpl.uInput(_,pr),ui=this;
this.nodes=ns;
this.node=ns.node;
this.input=ns.input;
this.help=pr.help;
rr.addHandler(ns.input,'focus',function(e){
rr.css_add('b-uinput-help_text--hide',ns.help_text_wr);
rr.css_add('b-uinput--focus',ns.node);
if(typeof ui.onfocus=='function'){
if(ui.onfocus(e)===false){
rr.breakEvent(e)}}});
rr.addHandler(ns.input,'blur',function(e){
if(!ns.input.value&&ui.help){
rr.css_remove('b-uinput-help_text--hide',ns.help_text_wr)};
rr.css_remove('b-uinput--focus',ns.node);
if(typeof ui.onblur=='function'){
if(ui.onblur(e)===false){
rr.breakEvent(e)}}});
rr.addHandler(ns.input,'change',function(e){
if(ns.input.value){
rr.css_add('b-uinput-help_text--hide',ns.help_text_wr)};
if(typeof ui.onchange=='function'){
ui.onchange(e)}});
if(!ns.input.value&&ui.help){
rr.css_remove('b-uinput-help_text--hide',ns.help_text_wr)}},
prototype:{
nodeType:-1,
set_help:function(x){
this.help=x;
if(!x){
rr.css_add('b-uinput-help_text--hide',this.nodes.help_text_wr)}
else{
this.nodes.help_text.data=x;
}},
set_value:function(v){
this.input.value=v;
rr.css_set('b-uinput-help_text--hide',this.nodes.help_text_wr
,!!this.input.value
);
if(typeof this.onchange=='function'){
this.onchange()}},
get_value:function(){
return this.input.value;
},
focus:function(){
if(this.node.offsetParent){
this.input.focus();
return true;
}},
setSelection:function(a,b){
rr.textSelection_set(this.input,a,b)}}});


/* URL: /js/cram/tmpl/tmpl_umenu.src.js */

rr.styles('tmpl:rm_menu'
,'.b-box_menu {z-index:1110;height:0;left:0;position:absolute;top:0;width:0;}'
,'.b-rm_menu {background-color:#FFF;position:absolute;-moz-box-shadow:6px 6px 3px -5px rgba(0, 0, 0, 0.25);-webkit-box-shadow:5px 5px 5px -4px rgba(0, 0, 0, 0.25);box-shadow:1px 1px 3px rgba(0, 0, 0, 0.25);border:1px solid; border-color:#D0E2EC #A6A6A6 #A6A6A6 #D0E2EC;}'
,'.b-rm_menu-box {overflow:hidden;}'
);
tmpl.uMenu=function(_,pr){
var ns=this;
ns.node=_('div.b-rm_menu',{css:pr.css}
,ns.box=_('div.b-rm_menu-box'))};
rr.styles('tmpl:umenu'
,'.b-umenu_item {font-size:13px;line-height: 20px;color:#575757 !important;cursor:pointer; white-space:nowrap; overflow:hidden; margin:1px 0; padding:2px; display:block;}'
,'.b-umenu_item-right {display:block;float:right;margin-left: 4px;}'
,'.b-umenu_item-left {display:block;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;}'
,'.b-umenu_item-icon {margin-right: -1px;display: inline-block;width:20px; height:20px;overflow: hidden;vertical-align: top;}'
,'.b-umenu_item-text {display: inline;margin-left:3px;padding:0;vertical-align: top;}'
,'.b-umenu_item-infor {color:#999999;font-size:11px;cursor:pointer;padding:0 3px;margin:0 1px;vertical-align:top;}'
,'.b-umenu_item-infor--hide {display:none;}'
,'.b-umenu_item-infor--mode-error {background-color: #FFF;border-color: #D00000;color: #D00000;}'
,'.b-umenu_item-infor--mode-attention {color:#f00;background-color:#FFFFD6;border:1px solid #F8CAA3;}'
,'.b-umenu_item--active {background-color:#DDD;}'
,'.b-umenu_item--active .b-umenu_item-text {color:#222 !important;}'
,'.b-umenu_item:hover .b-umenu_item-text {color:#222 !important;}'
,'.b-umenu_item-icon--hide {display:none;}'
);
tmpl.uMenuItem=function(_,p){
var ns=this,u;
ns.node=_('a.b-umenu_item no_underline s-menu_bg'+(p.active?' b-umenu_item--active s-menu_bg--active':'')
,{
css:p.css,
tabIndex:p.tabIndex>1?p.tabIndex:1,
title:p.title,
href:p.href
}
,ns.box=_('span.b-umenu_item-right'
)
,_('span.b-umenu_item-left'
,ns.icon=p.icon!==false&&_('span.b-umenu_item-icon'+(p.icon?'':' b-umenu_item-icon--hide')
,{
css:p.icon,
tabIndex:p.tabIndex>0?p.tabIndex:u
})
,_('span.b-umenu_item-text underline text'
,ns.text=_.text(p.text||p.text===0?p.text:' '))))};
tmpl.uMenuInfor=function(_,p){
return _((p.href?'a.b-umenu_item-infor':'span.b-umenu_item-infor')
+(p.hide?' b-umenu_item-infor--hide':'')
+(p.mode?' b-umenu_item-infor--mode-'+p.mode:'')
,{
text:p.text,
css:p.css,
title:p.title
,href:p.href
,onclick:p.onclick
})};


/* URL: /js/cram/ui/ui_umenu.src.js */

elems.box_menu=rr.new_class({
interface:true,
constructor:function(_,pr,cfg){
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
elems.uMenu=rr.new_class({
__ic_:false,
interface:true,
gEvents:new rr.class_listHandler,
test:true,
constructor:function(_,pr,cfg){
var it=this.interface,ui=this,v;
if(!it.__ic_){
rr.extend(it,rr.expansion_event);
it.__ic_=true;
};
ui.master=_.clone();
ui.document=_.document;
ui.nodes=_.tmpl('tmpl:uMenu',{
css:pr.css
});
ui.box=ui.nodes.box;
if(v=pr.open)ui.open=v;
if(v=pr.node)ui.node=v.node||v;
if(v=pr.position)ui.position=v;
if(v=!!pr.debug)ui.debug=v;
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
onchange:null,
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
if(!tH&&!ui.debug)tH=setTimeout(hide,800)};
if(!ui.debug)rr.addHandler(ui.nodes.node,'click',hide);
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
if(e[rr.IE<9?'returnValue':'rm_menu']!==ui&&!ui.debug){
ui.hide();
e.rm_menu=null;
}},ui);
this.gEvents.add(ui.document,'blur',function(e){
if(!ui.debug)ui.hide()},ui)},
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
if(n.getBoundingClientRect){
w=n.getBoundingClientRect();
h=w.bottom-w.top;
w=w.right-w.left;
}
else{
w=n.offsetWidth;
h=n.offsetHeight;
}
switch(ui.position){
case'center-left':
x=rc.left-w;
if(x<0)x=rc.right;
x+=cwh.sl;
y=rc.top+(rc.bottom-rc.top)/2-h/2;
if(y<2)y=2;
y+=cwh.st;
if(y+h>cwh.sh){
y=Math.max(cwh.sh-h,2)};
break;
case'top':case'left-top':
x=rc.left+cwh.sl;
if(x<0)x=0;
y=rc.top+cwh.st;
if(y<0)y=0;
break;
case'center-top':
x=Math.floor(rc.left+(cwh.w-rc.right-rc.left)/2-w/2)+cwh.sl;
y=rc.top-h+cwh.st;
if(y<0)y=cwh.h-rc.bottom+cwh.st;
if(x<0)x=0;
break;
case'right-top':
x=rc.right-w+cwh.sl;
if(x<0)x=0;
y=rc.top+cwh.st;
if(y<0)y=0;
break;
case'center-right':
x=rc.right;
if(x>0&&(x+w)>cwh.w)x=rc.left-w;
x+=cwh.sl;
y=rc.top+(rc.bottom-rc.top)/2-h/2;
if(y<2)y=2;
y+=cwh.st;
if(y+h>cwh.sh){
y=Math.max(cwh.sh-h,2)};
break;
case'right':case'right-bottom':
x=rc.right-w+cwh.sl;
if(x<3)x=3;
y=rc.bottom;
if(y+h>cwh.h-10)y=rc.top-h;
if(y<0)y=rc.bottom;
y+=cwh.st;
break;
case'right/left':case'right-bottom/left':
x=w>rc.right-rc.left?rc.left:Math.ceil(rc.right-w);
if(x+w+3>cwh.w)x=Math.max(cwh.w-3-w,rc.right-w);
x=x+cwh.sl;
if(x<3)x=3;
y=rc.bottom;
if(y+h>cwh.h-10)y=rc.top-h;
if(y<0)y=rc.bottom;
y+=cwh.st;
break;
case'center':case'center-bottom':
x=rc.left+(rc.right-rc.left)/2-w/2+cwh.sl;
if(x<0)x=0;
y=rc.bottom;
if(y+h>cwh.h-10)y=rc.top-h;
if(y<0)y=rc.bottom;
y+=cwh.st;
break;
case'bottom':case'left':case'left-bottom':
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
}});


/* URL: /js/cram/tmpl/tmpl_upager.src.js */

rr.styles('tmpl:uPager'
,'.b-mbox_pager {font-size:0.95em;height:2.5em;line-height:2.5em;padding:0 15px;text-align:center;position:relative;}'
,'.b-mbox_pager:hover {text-decoration:none;}'
,'.b-mbox_pager-next, .b-mbox_pager-prev {color:#666666;position:absolute;cursor:default;}'
,'a.b-mbox_pager-next, a.b-mbox_pager-prev {color:#666666;text-decoration:none;cursor:pointer;}'
,'.b-mbox_pager-next {right:15px;}'
,'.b-mbox_pager-prev {left:15px;}'
,'.b-mbox_pager-text {font-weight:bold;}'
,'.b-mbox_pager-key {display:inline;font-size:70%;}'
,'.b-mbox_pager-arr {font-size:150%;}'
,'.b-mbox_pager-box {background-color:#FFFFFF;padding:0.2em 1ex;position:relative;}'
,'.b-mbox_pager-page {border:1px solid #9ECBE2;text-decoration:none;background-color:#FFFFFF;color:#000;padding:0.25em 0.6em;margin:0 2px;}'
,'a.b-mbox_pager-page {color:#466777;}'
,'span.b-mbox_pager-page {background-color:#9ECBE2;font-weight:bold;cursor:default;}'
,'a.b-mbox_pager-page:hover {background-color:#C1DDEC;color:#2A3D47;}'
);
tmpl.uPager=function(_,pr){
var ns=this;
ns.node=_('div.b-mbox_pager',{css:pr.css}
,_((pr.next_page?'a':'span')
,{
css:'b-mbox_pager-next no_underline',
title:(pr.next_page?"Перейти на следующую страницу":''),
href:(pr.url_mask?rr.printx(pr.url_mask,pr.num+1):'#/p'+(pr.num+1))}
,_('span.b-mbox_pager-text underline',"Следующая")
,_('span.b-mbox_pager-key'
,' Ctrl '
,_('span.b-mbox_pager-arr'
,'\u2192'
)))
,_((pr.prev_page?'a':'span')
,{
css:'b-mbox_pager-prev no_underline',
title:(pr.prev_page?"Перейти на предыдущую страницу":''),
href:(pr.url_mask?rr.printx(pr.url_mask,pr.num-1):'#/p'+(pr.num-1))}
,_('span.b-mbox_pager-key'
,_('span.b-mbox_pager-arr'
,'\u2190'
)
,' Ctrl '
)
,_('span.b-mbox_pager-text underline'
,"Следующая"
))
,_('span.b-mbox_pager-box'
,rr.map(pr.pages,function(v){
if(v.is_selected){
return _('span.b-mbox_pager-page b-mbox_pager-page--selected',{title:"Текущая страница",text:v.num})};
return _('a.b-mbox_pager-page no_underline'
,{
href:pr.url_mask?rr.printx(pr.url_mask,v.num):'#/p'+v.num,
title:rr.printx("Перейти на страницу %s",v.num),
text:(v.is_skip?'...':v.num)})})))};


/* URL: /js/cram/ui/ui_upager.src.js */

elems.uPager=rr.new_class({
interface:true,
constructor:function(_,pr){
this.master=_.clone();
if(pr.num>0)this.num=pr.num;
if(pr.max>0)this.max=pr.max;
if(pr.css)this.css=pr.css;
if(pr.url_mask)this.url_mask=pr.url_mask;
if(pr.url_first)this.url_first=pr.url_first;
this.interface.res(this)},
prototype:{
nodeType:-1,
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
var nn=ui.master.tmpl(tmpl.uPager,{
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
},
create:function(_,pr){
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
return _.tmpl(tmpl.uPager,pr)}});


/* URL: /js/cram/tmpl/tmpl_pages.src.js */

rr.styles('tmpl:page'
,'.b-topline {background-color: #333333;height: 26px;left: 0;position: absolute;right: 0;top: 0;z-index: 2;line-height: 26px;font-size: 12px;padding: 0 15px}'
,'.b-topline-box {max-width: 1050px;margin: 0 auto;text-align: right;}'
,'.b-topline-left {text-align: left;float:left;margin-left: 10px;}'
,'.b-topline-right {margin-right: 10px;}'
,'.b-topline-link, a.b-topline-link {color: #fff !important;}'
,'.b-frame_goScrollTop {position:'+(rr.Opera?'absolute':'fixed')+' ;top:0;display:none;width: 210px;height: 0;-moz-user-select: none;user-select: none;}'
,'.b-frame_goScrollTop--show {display:block;}'
,'.b-frame_goScrollTop-text {position: '+(rr.Opera?'fixed':'absolute')+';top:110px;background-color:#E6E6E6;color:#333; padding:4px 10px 4px 30px;z-index: 1200;cursor: pointer;}'
,'.b-frame_goScrollTop-text:hover {background-color:#D5D5D5;}'
,'.b-frame_wrapper {margin: 0 auto;}'
,'.b-frame_body {padding: 10px 0;z-index:1;position:relative;top:0;left:0;background-color: #fff;}'
,'.b-frame_box {margin-left:210px;border-left:1px solid #CCCCCC;}'
,'.b-frame_pleft {position:absolute;width:200px;z-index:1;left:5px;}'
,'.b-page {}'
,'.b-page-head {background-color: #F3F3F3;color:#000;font-size:18px;line-height:24px;padding:4px 10px;margin-top:7px;margin-bottom:10px;white-space: nowrap;border-bottom: 1px solid #DDDDDD;border-top: 1px solid #DDDDDD;}'
,'.b-page-head--none {height:0px;}'
,'.b-page-head_left {overflow: hidden;}'
,'.b-page-head_right {float:right;font-size: 13px;padding-left: 1em;line-height: 22px;}'
,'.b-page-top {padding:3px 10px;}'
,'.b-page-capion {margin:10px 0;padding:0 10px 10px;min-height:300px;}'
,'.b-page-bottom {padding:8px 15px 0;border-top:1px solid #989898;}'
,'.b-page-top--hide, .b-page-bottom--hide {display:none;}'
,'.b-page-box_dialogs {display:none;overflow: hidden;margin: 10px 0;}'
,'.b-page-box_dialogs--show {display:block;}'
,'.b-page-dialog {display:none;overflow: hidden;position: relative;background-color: #8CAED3;border: 3px solid #C5DAF1;margin: 0 12px;padding: 1px;}'
,'.b-page-dialog--show {display:block;}'
,'.b-page-dialog_head {background-color:#E9E9E9;border-bottom: 1px solid #FFFFFF;padding: 4px 15px;}'
,'.b-page-dialog_title {}'
,'.b-page-dialog_box {padding: 10px 15px;background-color: #F3F3F3;}'
,'.b-page-dialog--type-informer {margin: 10px 15px;border: 1px solid #93CB7B;}'
,'.b-page-dialog--type-informer .b-page-dialog_box {background-color: #BFDD9C;padding: 7px 10px;}'
,'.b-rm_loading {font-size:14px;display:none;z-index: 999;cursor: default;position:fixed;top:0;left:50%;width:20em;margin-left:-10em;height:0;text-align:center;}'
,'.b-rm_loading--show {display:block;}'
,'.b-rm_loading-text {padding: 3px 1ex;text-align:left;background-color: #EEE;color:#555;}'
,'.b-frame_footer {background-color: #FFFFFF;font-size:80%;overflow:hidden;clear:both;padding:10px 10px;border-top:1px solid #333;}'
,'.b-frame_footer-left {width:30%;float:left;}'
,'.b-frame_footer-right {float:left;width:70%;_width:69.9%;text-align:right;}'
);
rr.styles('tmpl:page'
);
tmpl.rm_loading=function(_,prm){
_('body'
,_(prm.node
,_('span.b-rm_loading-text',"Загрузка")))};
tmpl.mainframe=function(_,pr){
var ns=this;
ns.node=_('DocumentFragment'
,_('div.b-topline'
,_('div.b-topline-box'
,_('span.b-topline-left'
,_('a.b-topline-link',{href:'/'}
,"Главная"
))
,_('span.b-topline-right'
,_('a.b-topline-link no_underline',{href:'/'}
,_('span.b-topline-link_text underline'
,"Константин"
)))))
,ns.node_frame=_('div.b-frame_wrapper#wrapper'
,ns.goScrollTop=_('div.b-frame_goScrollTop'
,ns.goScrollTop_click=_('div.b-frame_goScrollTop-text s-menu_bg',{tabIndex:1}
,"Вверх"
))
,ns.topmenu=_('tmpl:topmenu'
,{
uniq:pr.uniq
})
,_('div.b-frame_body#content'
,ns.pleft=_('div.b-frame_pleft'
,ns.sidebar_box=_('div.b-frame_sidebar-box'
))
,ns.box=_('div.b-frame_box'
))
,ns.footer=_('DIV.b-frame_footer b_footer#footer'
,_('DL'
,_('DT.b-frame_footer-left'
,_('A',{href:"/"}
,"Разместить рекламу"
)
,' | '
,_('A',{href:"/"}
,"Обратная связь"
))
,_('DT.b-frame_footer-right'
,"© 0001–2011, ООО «"
,_('A',{href:"/"}
,"Вася Интернет Холдинг"
)
,"»"
)))))};
tmpl.page=function(_,pr){
var ns=this,head_node,head,x;
switch(pr.head){
case'top':case'bottom':case'none':
head=pr.head;
break;
default:
head='top';
};
if(head!=='none'){
head_node=_('div.b-page-head'+(head=='none'?'':head=='top'?' b-page-head--top':' b-page-head--bottom')
,ns.box_headRight=_('div.b-page-head_right'
,pr.head_right
)
,ns.box_headLeft=_('div.b-page-head_left'
,pr.head_name||pr.name
))}else{
head_node=_('div.b-page-head b-page-head--none')};
ns.node=_('div.b-page'+(head=='none'?'':head=='top'?' b-page--head_top':' b-page--head_bottom')
,{
css:pr.css
}
,ns.box_top=_('div.b-page-top b-page-top--hide ')
,head_node
,ns.box_dialogs=_('div.b-page-box_dialogs')
,ns.box=_('div.b-page-capion'+(head=='none'?'':head=='top'?' b-page-capion--head_top':' b-page-capion--head_bottom')
,{
css:pr.css_capion
})
,ns.box_down=_('div.b-page-bottom b-page-bottom--hide i-grd i-grd--top'))};
tmpl.page_dialog_=function(_,prm){
var ns=this;
ns.node=_('div.b-page-dialog'
,{css:prm.css})};
tmpl.page_dialog=function(_,prm){
var ns=prm.extend||this;
if(prm.title){
ns.head=_('div.b-page-dialog_head'
,_('span.b-page-dialog_text'
,prm.title
))};
ns.node=_('div.b-page-dialog b-page-dialog--type-'+(prm.type?prm.type:'default')
,{
css:prm.css
}
,ns.head
,ns.box=_('div.b-page-dialog_box'))};
tmpl.img=function(_,pr){
var I=_('IMG',{src:pr.src,css:pr.css,width:pr.width,height:pr.height});
var im=new Image;
var ev=pr.onload;
function load(e){
if(im.onload){
im.onload=null;
im.onerror=null;
};
if(typeof ev=='function'){
setTimeout(function(){ev.call(I,e||false)},30)}};
if(pr.src||load()){
im.onload=function(){load({width:im.width,height:im.height})};
im.onerror=function(){load()};
im.src=pr.src;
};
return I;
};


/* URL: /js/cram/ui/ui_mainframe.src.js */

elems.mainframe=rr.new_class({
interface:true,
constructor:function(_,prm,cfg){
this.master=_.clone();
this.document=_.document;
this.nodes=new tmpl.mainframe(_
,{
uniq:window._uniq
}
,cfg
);
this.box=this.nodes.box;
this.pleft=this.nodes.pleft;
this.sidebar_box=this.nodes.sidebar_box;
this.interface.init_event(this)},
prototype:rr.extend({},rr.expansion_event,{
nodeType:-1,
is_connected:false,
connected:function(){
if(this.is_connected)return;
this.is_connected=true;
this.document.body.appendChild(
this.nodes.node
);
if(this.is_connected){
this.__resize_();
this.__scroll_()}}}),
init_event:function(ui){
if(ui.__event_init_)return;
ui.__event_init_=true;
var ns=ui.nodes;
rr.addHandler(ui.nodes.goScrollTop_click,'click',function(){
try{ui.nodes.goScrollTop_click.blur()}catch(e){};
rr.css_remove('b-frame_goScrollTop--show',ui.nodes.goScrollTop);
rr.scrollTo(ui.document,0,0)});
var pc_pleft;
var cssWidth,cWidth,pH='',sH=ns.box.style;
rr.addHandler(ui.document,'resize',ui.__resize_=function(){
if(!ui.is_connected)return;
var d=ui.document,n=ui.nodes.node_frame;
ui.window_height=rr.IE?(rr.qIE?d.body||false:d.documentElement).offsetHeight:d.defaultView.innerHeight;
var cw=n.clientWidth
,pc=pc_pleft||rr.getRect(ns.pleft)
,h=Math.max(pc.bottom-pc.top,ui.window_height-(rr.getRect(ns.box).top+rr.getScrollTop(ns.pleft.ownerDocument))-50)
,clss=''
,x,i;
if(cWidth!==cw){
cWidth=cw;
for(x=800;x<1700;x<1050?x+=10:x+=50){
if(cw>=x)clss+=' width--gte-'+x;
if(cw<=x)clss+=' width--lte-'+x;
};
if(cssWidth!==clss){
cssWidth=clss;
clss=n.className.replace(/(\s+|$)width--(gte|lte|size)-\d+/g,'')+clss+' width--size-'+cw;
n.className=clss;
}};
h=h>10?h+'px':'';
if(pH!==h){
sH.minHeight=pH=h;
}});
var noFix;
rr.addHandler(document,'scroll',ui.__scroll_=function(){
if(!ui.is_connected)return;
var pc=pc_pleft||rr.getRect(ns.pleft),x;
rr.css_set('b-frame_goScrollTop--show'
,ns.goScrollTop
,pc.bottom<20
);
if(noFix!==false&&pc.bottom<-200){
if(noFix=noFix||rr.getRect(ns.goScrollTop).bottom<0){
ns.goScrollTop.style.marginTop=rr.getScrollTop(ui.document)+'px';
}}});
function timmer(){
if(!ui.is_connected)return;
pc_pleft=rr.getRect(ns.pleft)
ui.__resize_();
ui.__scroll_();
pc_pleft=false;
setTimeout(timmer,200)};
timmer()}});


/* URL: /js/cram/ui/ui_page.src.js */

elems.page=rr.new_class({
interface:true,
constructor:function(_,prm,cfg){
this.nodes=new tmpl.page(_,{
css:prm.css,
head:prm.head,
head_name:prm.head_name||prm.name,
head_right:prm.head_right
});
this.node=this.nodes.node;
this.box=this.nodes.box;
this.box_top=this.nodes.box_top;
this.box_down=this.nodes.box_down;
this.box_dialogs=this.nodes.box_dialogs;
if(typeof prm.extend=='object'){
prm.extend.node=this.node;
};
if(prm.pid)this.pid=prm.pid;
this.dialogs=[];
},
prototype:{
nodeType:-1,
dialogs:false,
dialog_open:false,
appendChild:function(n){
if(!n)return;
var type=n.nodeType,ui=this;
if(type>0){
ui.box.appendChild(n)}
else if(type<0){
switch(n.elementType){
case'page_dialog':
this.nodes.box_dialogs.appendChild(n.node);
if(rr.indexOf(this.dialogs,n)<0){
this.dialogs.push(n)};
if(n.debug){
this.dialog_show(n)};
break;
case'page_head':
this.nodes.box_top.appendChild(n.node);
rr.css_remove('b-page-top--hide',ui.box_top);
break;
case'page_footer':
this.nodes.box_down.appendChild(n.node);
rr.css_remove('b-page-bottom--hide',ui.nodes.box_down);
break;
default:
if(n=n.node){
ui.box.appendChild(n)}}};
return n;
},
dialog_show:function(x){
var a=this.dialogs,i,n,v;
if(typeof x==='string'){
for(i=0;n=a[i++];){
if(n.name===x)break;
};
x=n;
}
else{
if(rr.indexOf(a,x)<0)x=n;
};
if(this.dialog_open==x)return;
if(n=this.dialog_open){
rr.css_remove('b-page-dialog--show',n.node)};
if(this.dialog_open=(x||false).elementType==='page_dialog'&&x){
rr.css_add('b-page-dialog--show',x.node)};
rr.css_set('b-page-box_dialogs--show'
,this.nodes.box_dialogs
,this.dialog_open
);
if(typeof this.onchange=='function'){
this.onchange({dialog:true})}},
dialog_hide:function(x){
if(!x||x==this.dialog_open){
this.dialog_show(false);
return true;
}}}});
elems.page_head=rr.new_class({
constructor:function(_,prm,cfg){
this.node=_.document.createDocumentFragment()},
prototype:{
nodeType:-1,
elementType:'page_head'
}});
elems.page_footer=rr.new_class({
constructor:function(_,prm,cfg){
this.node=_.document.createDocumentFragment()},
prototype:{
nodeType:-1,
elementType:'page_footer'
}});
elems.page_dialog=rr.new_class({
interface:true,
constructor:function(_,prm,cfg){
this.nodes=new tmpl.page_dialog(_,{
css:prm.css,
type:prm.type,
title:prm.title
});
this.node=this.nodes.node;
this.box=this.nodes.box||this.node;
var v;
if(v=prm.name)this.name=v;
if(prm.debug)this.debug=true;
},
prototype:{
nodeType:-1,
elementType:'page_dialog',
parent:false,
show:function(flag,p){
if(p=this.parent){
p.dialog_show(flag!==false&&this)}}}});


/* URL: /js/cram/tmpl/tmpl_topmenu.src.js */

rr.styles('tmpl:topmenu'
,'.rm-menu_top {margin-top:1px;}'
,'.rm-menu_top-wrap {padding:0 2px;width:15em;}'
,'.b-topmenu {padding-bottom: 53px;position: relative;font-size: 13px;}'
,'.b-topmenu-grd_line {position: absolute;bottom:0;left:0;right:0;height:3px;overflow: hidden;z-index: 1;pointer-events: none;}'
,'.b-topmenu-grd_line {'
+(rr.IE<9?'-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#00000000,endColorstr=#20323232)";'
:'background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAYAAABbNsX4AAAAGUlEQVQImWNgwAIYubi4+NAFWbi4uITQBQEK7QBizQOlrAAAAABJRU5ErkJggg==) repeat-x;'
)
+'}'
,'.b-topmenu-logo_link {position: absolute;left:0;bottom: 0;height:30px;width: 100px;text-decoration: none;font-size: 18px;line-height: 26px;}'
,'.b-topmenu-logo_link:hover {color:#333 !important;}'
,'.b-topmenu-logo_envelope {position: absolute;height: 100%px;width: 100%;top:0;left:0;}'
,'.b-topmenu-logo_title {position: absolute;left:1em;}'
,'.b-topmenu-avatar_bx {}'
,'.b-topmenu-avatar_link {position: absolute;bottom:11px;right:15px;padding: 2px;width: 50px;height:50px;text-align: center;background-color:rgba(255,255,255, 0.25);}'
,'.b-topmenu-avatar_img {position: relative;}'
,'.b-topmenu-avatar_bg {position: absolute;top:0;bottom:0;right:0;left:0;-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#32FFFFFF,endColorstr=#32FFFFFF)";}'
,'.b-topmenu-box {position: absolute;min-width:300px;line-height: 2.2em;bottom: 0;left: 100px;right: 220px;white-space: nowrap;padding: 3px 3px 0 1px;}'
,'.b-topmenu-box .item {}'
,'.b-topmenu-box--x3 .item {width: 33%;}'
,'.b-topmenu-box--x4 .item {width: 25%;}'
,'.b-topmenu-box--x5 .item {width: 20%;}'
,'.b-topmenu-item_num {text-decoration: none;font-size: 85%;cursor: pointer;margin-left: 2px;color: #FF0000;border: 1px solid #F8CAA3;background-color: #FFFFD6;padding: 0 0.6ex;display: inline-block;line-height:2.5ex;vertical-align: middle;}'
,'.b-topmenu-item_num--hide {display:none;}'
,'.b-topmenu-other {background-position:50%;margin-right: 5px;cursor: pointer;text-align: center;margin-left: 2px;display: inline-block;width:20px;height: 20px;line-height: 20px;vertical-align: middle;}'
,'.b-topmenu-other--active {}'
,'.b-topmenu-item {line-height: 30px;z-index: 0;max-width: 130px;display: block;float:left;clear: right;position: relative;padding-bottom: 0px;}'
,'.b-topmenu-item_bg {position:absolute;left:2px;right:0;top:0;bottom:0;z-index:-1;'
+(rr.IE<9?'-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#99FFFFFF,endColorstr=#99FFFFFF)";'
:'background-color: #F3F3F3;background-color: rgba(255, 255, 255, 0.7);'
)
+'}'
,'.b-topmenu-item--active {z-index: 2;}'
,'.b-topmenu-item--active .bg {background-color: #FFF;margin-bottom: -2px;}'
,'.b-topmenu-item_link {text-indent: 8px;display: block;margin-left:2px;text-decoration: none;}'
,'.b-topmenu-item_text {display: block;overflow: hidden;}'
,'.b-topmenu-item_right {line-height: 28px;display:none;padding:0 1px;float: right;}'
,'.b-topmenu-item_right--show {display:block;}'
,'.b-topmenu-user_link {max-width: 150px;position: absolute;bottom: 5px;right: 16px;white-space: nowrap;}'
,'.b-topmenu-other_wrap {float:left;height:30px;width:0;position: relative;}'
,'.b-topmenu-other {left:4px;opacity: 0.7;bottom: 3px;line-height: 24px; height:24px; background-position: 50%;background-repeat:no-repeat; cursor: pointer; width:26px;  background-color: rgba(255, 255, 255, 0.15);position: absolute; white-space: nowrap;}'
,'.b-topmenu-other:hover {opacity: 1;background-color: rgba(255, 255, 255, 0.8);  }'
);
tmpl.topmenu=function(_,prm){
var ns=this;
ns.node=_('div.b-topmenu#header'
,_('div.b-topmenu-grd_line')
,_('div.b-topmenu-box b-topmenu-box--x4'
,ns.item_compose=_('tmpl:topmenu_item'
,{
text:"Написать письмо",
title:"Создание нового письма",
href:'#/compose'
})
,ns.item_mailbox=_('tmpl:topmenu_item'
,{
text:"Входящие",
title:"Проверить почту и перейти в папку «Входящие»",
href:'#/mailbox/inbox'
})
,ns.item_contacts=_('tmpl:topmenu_item'
,{
text:"Контакты",
title:"Сохраненные адреса",
href:'#/contacts'
})
,ns.item_calendar=_('tmpl:topmenu_item'
,{
rbox_show:true,
text:"Календарь",
title:"Календарь события",
href:'#/calendar'
})
,_('div.b-topmenu-other_wrap'
,ns.item_settings=_('a.b-topmenu-other no_underline i-img--arrow_down'
,{
tabIndex:1,
title:"Настройки",
href:'#/settings'
}))))};
tmpl.topmenu_item=function(_,prm){
var ns=this;
ns.node=_('div.b-topmenu-item item'+(prm.active?' b-topmenu-item--active':'')
,_('span.b-topmenu-item_bg bg')
,ns.box=_('span.b-topmenu-item_right'+(prm.rbox_show?' b-topmenu-item_right--show':''))
,_('a.b-topmenu-item_link',{tabIndex:1,title:prm.title,href:prm.href}
,_('span.b-topmenu-item_text'
,ns.text=_.text(prm.text||""))))};


/* URL: /js/mail_box/tmpl/tmpl_sidebar_folders.src.js */

tmpl.sidebar_folders=function(_,p){
var ns=this
,user=cram.user||false
;
ns.node=_('div.b-sidebar_folders'
,_('div.b-sidebar_folders-folders'
,_('div.b-sidebar_folders-folders_sys'
,rr.map(['INBOX','SentBox','DraftBox','Trash'],function(v){
return _('tmpl:folder_mail',{
folder:p.folder,
data:p.data_folders['data '+v]||false
})}))
,_('div.b-sidebar_folders-folders_user'+(p.data_folders.user_folders.length>0?'':' b-sidebar_folders-folders_user--null')
,_.forEach(p.data_folders.user_folders,function(_,x){
return _('tmpl:folder_mail',{
folder:p.folder,
data:x
})}))))};
tmpl.folder_mail=function(_,p){
var ns=this
,data=p.data||false
,name=data.folder.match(/^~[^\/]+\/(.*)/)[1]
,active=p.folder=='/mailbox/'+name
,text
,href
,href_unseen
,u
;
switch(name){
case'INBOX':
text="Входящие";
break;
case'SentBox':
text="Отправленные";
break;
case'DraftBox':
text="Черновики";
break;
case'Trash':
text="Корзина";
break;
default:
text=name;
};
href='#/mailbox/'+name;
href_unseen='#/mailbox:unseen/'+rr.urlEscape(name);
return _('tmpl:uMenuItem'
,{
text:text,
href:href,
css:''
}
,data.unseen>0&&_('tmpl:uMenuInfor'
,{
mode:'attention',
text:data.unseen,
title:""
})
,_('tmpl:uMenuInfor'
,{
mode:'text',
text:data.messages>0?data.messages:"0",
title:""
}))};


/* URL: /js/mail_box/ui/ui_sidebar_folders.src.js */

elems.sidebar_folders=rr.new_class({
interface:true,
constructor:function(_,p){
this.master=_.clone();
this.nodes=_.tmpl('tmpl:sidebar_folders',{
data_folders:this.interface.param_folders(p.data_folders)});
this.node=this.nodes.node;
},
prototype:{
nodeType:-1,
on_connect_before:function(){
this.refresh()},
refresh:function(date){
}},
param_folders:function(sdate,active_folder){
var um=[],rh={user_folders:um};
rr.each(sdate,function(v){
var nm=v.folder||'';
var x={
active:active_folder==nm,
messages:+v.messages||0,
oldest:+v.oldest||0,
folder:v.folder,
folder_name:nm.substr(nm.indexOf('/')+1),
folder_utf7:v['folder.utf7'],
uidvalidity:v.uidvalidity,
uidnext:v.uidnext,
recent:+v.recent||0,
unseen:+v.unseen||0
};
switch(x.folder_name){
case'INBOX':case'SentBox':case'DraftBox':case'Trash':
rh['data '+x.folder_name]=x;
break;
default:
um.push(x)}});
return rh;
}});
elems.folder_mail=function(_,pr){
};


/* URL: /js/mail_box/mailbox.src.js */

cram.addEvent('open_page',function(e){
if(e.returnValue==false)return;
var hash=e.hash,hs=hash.toLocaleLowerCase(),a,x,v,i;
if(!hs||!(hs=='/mailbox'||!hs.indexOf('/mailbox/')))return;
e.handler=cram.open_mailbox;
var q=hash.match(/^\/mailbox\/([^\/\?]+)(\/(d(\w{1,10})|n(\w+)))?/)||false;
e.hash='/mailbox/inbox'+(q[4]||q[5]?'/'+q[3]:'');
e.query_param={
folder:'/mailbox/'+rr.urlDecode(q[1]),
folder_name:rr.urlDecode(q[1]),
filter_date:q[4]||null,
filter_next:q[5]||null
};
return e.returnValue=false;
});
cram.open_mailbox=function(e){
var _=domMaster,ns={};
var page=domMaster('ui:mailbox_page');
cram.page_connect_(e,page)};


/* URL: /js/mail_box/tmpl/tmpl_mailbox_page.src.js */

rr.styles('tmpl:maibox'
,'.b-page_mailbox-pager {margin-top:20px;}'
,'.b-mbox_table {padding-top: 1px;overflow: hidden;z-index:0;}'
,'.b-page_mailbox-bounce_row {height: 28px;line-height: 26px;position: relative;}'
,'.b-page_mailbox-bounce_title {color: #666666;left: 0;position: absolute;}'
,'.b-page_mailbox-bounce_book {background-color: #E2E2E2;vertical-align: top;width: 80px;}'
,'.b-page_mailbox-bounce_box {margin-left: 85px;}'
,'.b-page_mailbox-bounce_input {-moz-box-sizing: border-box;box-sizing: border-box; height: 24px;line-height: 1.2 !important;vertical-align: top;width: 100%;}'
,'.b-page_mailbox-bounce_tools {margin-top: 17px;padding-left: 85px;}'
,'.b-page_mailbox-bounce_cansel {margin-left: 1em;vertical-align: middle;}'
,'.b-page_mailbox-clear_folder_wrap {line-height: 24px;}'
,'.b-page_mailbox-clear_folder_go {margin-left: 1em;}'
,'.b-page_mailbox-clear_folder_cansel {margin-left: 1em;}'
,'.b-page_mailbox-button_filter {color: #333 !important;padding: 2px 33px 2px 5px;cursor: pointer;background-position: 100% 50%;border-radius: 2px 2px 2px 2px;}'
,'.b-page_mailbox-button_filter:hover {background-color: #DDDDDD;}'
,'.b-page_mailbox-more {margin: 15px 0;}'
,'.b-page_mailbox-more_link {cursor: pointer;background-color: #FFF;border: 1px solid #DDD;color: #000000 !important;display: block;line-height: 30px;margin: 0 auto;text-align: center;width: 300px;}'
,'.b-page_mailbox-more_link:hover {background-color: #EEE;border-color: #DDD;}'
,'.b-page_mailbox-more_text {}'
);
tmpl.mailbox_sidebar=function(_,pr){
var ns=this;
ns.node=_('div'
,"eeee"
)};
tmpl.mailbox_page=function(_,pr){
var ns=this;
ns.page=_('ui:page'
,{
extend:ns
,title:"Календарь"
,css:'b-page_mailbox'
,css_capion:'b-page_mailbox-capion'
,head:'bottom'
,head_name:"Папка «Входящие»"
,head_right:[
,_('ui:uMenu'
,{
css:'b-page_mailbox-menu_action',
position:'right',
open:'click',
node:_('a.b-page_mailbox-button_filter no_underline i-img--arrow_down'
,_('span'
,"Сегодня 25 июля"
))}
,_('div'
,{
style:'width:250px;height:300px;'
}))
]
}
,_('ui:page_head'
,_('tmpl:uToolbar'
,{
css:'b-page_mailbox-top_tools',
right:[
,_('ui:uInput',{
group:'left'
})
,_('ui:uButton',{
css:'',
css_icon:'i-img--search',
first:'right',
group:'right',
title:"Найти",
text:"Найти"
})
]
}
,_('ui:uButton',{
css:'',
css_icon:'i-img--checkbox-inactive',
first:'left',
icon:'only',
title:"Выделить все письма",
text:"Выделить"
})
,_('ui:uMenu'
,{
css:'b-page_mailbox-menu_action',
position:'left',
open:'click',
node:_('ui:uButton',{
css:'',
css_icon:'i-img--arrow_down',
icon:'right',
title:"Другие действия",
text:"Действия"
})}
,_('div'
,{
style:'width:150px;height:200px;'
}))
,_('ui:uButton',{
css:'',
css_icon:'i-img--spam',
indent:'left',
title:"Удалить в спам выделенные письма",
text:"Это спам"
})
,_('ui:uButton',{
css:'',
css_icon:'i-img--remove',
title:"Удалить выделенные письма",
text:"Удалить"
})))
,ns.dialog_bounce=_('ui:page_dialog',{css:'b-page_mailbox-dialog_bounce',title:"Переадресация",debug:false}
,_('div.b-page_mailbox-bounce_row'
,_('span.b-page_mailbox-bounce_title'
,ns.button_bounce_contacts=_('ui:uButton'
,{
css:'b-page_mailbox-bounce_book',
icon:true,
css_icon:'i-img--contact',
text:"Кому:"
}))
,_('div.b-page_mailbox-bounce_box'
,_('INPUT.b-page_mailbox-bounce_input',{title:"Двойной клик по полю откроет адресную книгу",type:"text",name:"to"})))
,_('div.b-page_mailbox-bounce_tools'
,ns.button_bounce_contacts=_('ui:uButton'
,{
text:"Переадресовать"
})
,ns.button_bounce_cansel=_('a.b-page_mailbox-bounce_cansel',{tabIndex:1,href:'js:cansel'}
,"Отмена"
)))
,ns.dialog_clear_folder=_('ui:page_dialog',{css:'b-page_mailbox-dialog_clear_folder',debug:false}
,_('div.b-page_mailbox-clear_folder_wrap'
,"Вы уверены, что хотите удалить все письма из папки?"
,ns.clear_folder_go=_('ui:uButton'
,{
css:'b-page_mailbox-clear_folder_go',
text:"Да"
})
,ns.clear_folder_cansel=_('a.b-page_mailbox-clear_folder_cansel',{tabIndex:1,href:'js:cansel'}
,"Отмена"
)))
,_('div'
,_('tmpl:mailbox_list')
,_('div.b-page_mailbox-more'
,_('a.b-page_mailbox-more_link no_underline'
,_('span.b-page_mailbox-more_text'
,"Ещё"
)))))};
tmpl.mailbox_list=function(_,pr){
var px=[
{
id:713,
from:"SourceForge Resource New.",
subj:"Ответ на ваш комментарий к хабратопику \"Хакеры украли письма с Hotmail благодаря ошибке...",
text:" - Пользователь skaut8 ответил на ваш комментарий к …",
date:"28 июл 2008"
}
,{
id:714,
from:"INTUIT.RU",
subj:"INTUIT.ru: ИНТУИТ получил новую бессрочную лицензию",
text:" - INTUIT.ru: ИНТУИТ получил новую бессрочную лицензию …",
date:"1 июл 2008"
}
,{
id:715,
from:"МойСклад",
subj:"Посетите наш стенд на ECOM Expo и другие новости",
text:" - Здравствуйте, уважаемые пользователи сервиса …",
date:"20 июл 2008"
}
,{
id:716,
from:"internet_payment",
subj:"Информация о платеже",
text:" - Номер платежа: 925876 Название магазина: Аэрофлот …",
date:"9 июл 2008"
}
,{
id:717,
from:"McAfee",
subj:"Скидка 50% при обновлении защиты компьютера Sony",
text:" - McAfee | VAIO рекомендует McAfee и Sony. Идеальный дуэт. Система …",
date:"10 июл 2008"
}
];
var ns=this,unread=true;
ns.node=_('div.b-mbox_table'
,_.forEach(50,function(){
var x=Math.floor(Math.random()*(px.length-0.1))
x=px[x];
x.unread=unread?x.unread=unread=Math.random()>0.2:false
x.icon_domain=([,'/xm/i/12bezotveta@odnoklassniki.ru.png','/xm/i/facebook.com.png','/xm/i/vkontakte.ru.png','/xm/i/bugzilla.mozilla.org.png'])[Math.round(Math.random()*10)];
return _('tmpl:mailbox_listRow',x)}))};
rr.styles('tmpl:maibox_row'
,'.b-mbox_row {position:relative;margin:-1px 0 0;padding: 0px 120px 0px 60px; white-space: nowrap;line-height:30px; height:30px; border-top:1px solid #ddd;border-bottom:1px solid #ddd;}'
,'.b-mbox_row-ap {position: absolute;overflow: hidden;}'
,'.b-mbox_row-check {cursor: pointer;left:3px; top:5px; width:20px;height:20px;background-position: 50% 50%;background-repeat: no-repeat;}'
,'.b-mbox_row-read {cursor: pointer;left:30px; top:5px; width:16px;height:20px;background-position: 50% 50%;background-repeat: no-repeat;}'
,'.b-mbox_row-attach {cursor: default;visibility: hidden;right:120px; top:5px; width:20px;height:20px;background-position: 50% 50%;background-repeat: no-repeat;}'
,'.b-mbox_row-date {cursor: pointer;text-align: right;right: 30px; top:4px; width: 82px; height:22px;line-height:22px;padding-right:3px;color:#000 !important;}'
,'.b-mbox_row-favorite {cursor: pointer;right:3px; top:5px; width:16px;height:20px;background-position: 50% 50%;background-repeat: no-repeat;}'
,'.b-mbox_row-date:hover {background-color:#E4E4E4;border-radius: 2px;}'
,'.b-mbox_row--selected .b-mbox_row-date:hover {background-color:#B6cccc;}'
,'.b-mbox_row-link {display: inline-block;line-height: 18px;margin-top: 6px;color:#575757;overflow: hidden;max-width:100%;-o-text-overflow: ellipsis; text-overflow: ellipsis;}'
,'.b-mbox_row-from {color: #888;font-size: 12px;}'
,'.b-mbox_row-subj {margin-left: 10px;color:#000; font-size: 13px;}'
,'.b-mbox_row-subj_firstline {color: #575757;font-size: 12px;}'
,'.b-mbox_row--unread .b-mbox_row-subj {font-weight: bold;}'
,'.b-mbox_row--unread .b-mbox_row-from  {color: #575757;}'
,'.b-mbox_row--favorite {background-color:#FDFFE6;border-color: #D9E188;z-index:1;}'
,'.b-mbox_row--selected {background-color:#B6E1F3;border-color:#9EA4B3; z-index: 2;}'
,'.b-mbox_row--selected + .b-mbox_row--selected {border-top-color:#FFF;}'
,'.b-mbox_row--has_attach {padding-right:160px;}'
,'.b-mbox_row--has_attach .b-mbox_row-attach {visibility: visible;}'
,'.b-mbox_row-check.i-img--checkbox-inactive {opacity:0.7;}'
,'.b-mbox_row-favorite.i-img--mail_marked-not {opacity:0.7;}'
,'.b-mbox_row-link--icon_domain {background-position: 0 50%;background-repeat: no-repeat;}'
,'.b-mbox_row-from--icon_domain {margin-left:20px;}'
);
tmpl.mailbox_listRow=function(_,p){
var ns=this,u;
p.attach=Math.random()>0.85;
p.favorite=Math.random()>0.95;
ns.node=_('div.b-mbox_row'+(p.unread?' b-mbox_row--unread':'')+(p.favorite?' b-mbox_row--favorite':'')
,{
css:p.attach?'b-mbox_row--has_attach':''
}
,ns.checkbox=_('a.b-mbox_row-check b-mbox_row-ap i-img--checkbox-inactive i-img_hover--checkbox-hover'
,{
onclick:function(){
rr.css_switch(['i-img--checkbox-inactive','i-img--checkbox-active'],ns.checkbox);
rr.css_switch(['i-img_hover--checkbox-hover','i-img_hover--checkbox-active'],ns.checkbox);
rr.css_switch(['b-mbox_row--selected',null],ns.node)}})
,ns.favorite_link=_('a.b-mbox_row-favorite b-mbox_row-ap'
,{
css:p.favorite?'i-img--mail_marked':'i-img--mail_marked-not'
,onclick:function(){
var x=rr.css_flip('b-mbox_row--favorite',ns.node);
rr.css_switch(['i-img--mail_marked','i-img--mail_marked-not'],ns.favorite_link,x?0:1)}})
,ns.read_link=_('a.b-mbox_row-read b-mbox_row-ap'
,{
css:p.unread?'i-img--mail_unread':'i-img--mail_read',
onclick:function(){
rr.css_switch(['i-img--mail_unread','i-img--mail_read'],ns.read_link);
rr.css_switch(['b-mbox_row--unread','b-mbox_row--read'],ns.node)}})
,_('a.b-mbox_row-link no_underline'+(p.icon_domain?' b-mbox_row-link--icon_domain':'')
,{
style:p.icon_domain?{backgroundImage:'url('+p.icon_domain+')'}:u,
onclick:function(){},
href:'#'
}
,_('span.b-mbox_row-from hover_underline'+(p.icon_domain?' b-mbox_row-from--icon_domain':'')
,_.text(p.from||''))
,_('span.b-mbox_row-subj hover_underline'
,_.text(p.subj||'')
,_('span.b-mbox_row-subj_firstline'
,_.text(p.text||''))))
,!p.attach?false:_('span.b-mbox_row-attach i-img--attach_file b-mbox_row-ap'
,{
title:"Прикрепленные файлы"
})
,_('a.b-mbox_row-date b-mbox_row-ap no_underline'
,{
title:'Фильтр от этого письма',
href:'#/mailbox/inbox/n'+p.id
}
,_.text(p.date)))};


/* URL: /js/mail_box/ui/ui_mailbox_page.src.js */

elems.mailbox_page=rr.new_class({
parent:rr.class_baseElement,
interface:true,
constructor:function(_,pr,cfg){
this.interface.parent.call(this,_,pr,cfg);
this.interface.factory(this,_,pr);
if(this.node)this.node.rocketui=this;
},
factory:function(ui,_,pr){
ui.master=_.clone();
ui.nodes=_.tmpl('tmpl:mailbox_page',{
});
ui.sidebar=_.tmpl('ui:sidebar_folders',{
data_folders:window._data_folders
});
ui.node=ui.nodes.node;
ui.box=ui.nodes.box;
ui.title=ui.nodes.title;
ui.pid='mailbox';
this.init_event(ui)},
prototype:{
on_connect:function(){
var ui=this;
if(ui.display=ui.is_connected){
}}},
init_event:function(ui){
}});


/* URL: /js/mail_new/tmpl/tmpl_page_compose.src.js */

rr.styles('tmpl:page_compose'
,'.b-page_compose-wrap_send {border:3px solid transparent;display:inline-block;margin:-3px 5px -3px 0;position: relative;left:-3px;vertical-align: top;}'
,'.b-page_compose-modes_toolbar {margin-top:10px;padding:1px 0;text-align:right;font-size:80%;}'
,'.b-page_compose-modes_pleft {float:left;text-align:left;}'
,'.b-page_compose-vkey {cursor:pointer;}'
,'.b-page_compose-saveToSend {line-height: 22px;vertical-align: top;cursor:pointer;display:inline-block;padding:0 2px;border:1px solid transparent;background-color:#FCBCBC;}'
,'.b-page_compose-saveToSend--checked {background-color: transparent;}'
,'.b-page_compose-saveToSend--checked:hover {background-color:#EEEEEE;border:1px solid #CCCCCC;cursor:pointer;display:inline-block;padding:0px 2px;}'
,'.b-page_compose-saveToSend_inp {margin:0 3px 0 0;vertical-align:middle;}'
,'.b-page_compose-modes {}'
,'.b-page_compose-mode {cursor:pointer;border:1px solid #D8EEF7;color:#0A83BF;padding:0 1ex;}'
,'.b-page_compose-mode_A {margin-right:2px;}'
,'.b-page_compose-mode--s-A .A, .b-page_compose-mode--s-B .B {cursor:default;color:#000000;border-color:#7E7E7E #7E7E7E #8B8B8B;background-color:#B4B4B4;background-image:url("/i/chameleon/ramail-icons.png");background-position:0 -3201px;background-repeat:repeat-x;}'
,'.b-page_compose-mode--s-A .A:hover, .b-page_compose-mode--s-B .B:hover {cursor:default;color:#000000;text-decoration:none;}'
,'.b-page_compose-text_body {margin-top:15px;border:1px solid #CBCBCB;border-color:#989898 #CBCBCB #CBCBCB;}'
,'.b-page_compose-wrap_attachs {margin-top:10px;}'
,'.b-page_compose-button_attachs {background-color: #e2e2e2;}'
);
tmpl.compose_page=function(_,pr){
var ns=this;
ns.text_title="Новое письмо";
ns.sidebar='mailbox';
ns.page=_('ui:page'
,{
extend:ns
,title:"Новое письмо"
,css:'b-page_compose'
,css_capion:'b-page_compose-capion'
,head:'none'
,head_name:"Новое письмо"
}
,_('ui:page_head'
,_('tmpl:uToolbar'
,{
css:"b-page_compose-toolbar_top",
right:[
ns.button_cancel=_('ui:uButton',{
first:'right',
text:"Отменить"
})
]
}
,ns.wrap_sendMail=_('span.b-page_compose-wrap_send'
,ns.button_sendMail_dn=_('ui:uButton',{
first:true,
icon:true,css_icon:'i-img--send_mail',
title:"Отправить письмо",
text:"Отправить"
}))
,ns.button_saveDraft=_('ui:uButton',{
text:"Сохранить в черновик"
})))
,_('ui:page_footer'
,_('div',{style:'height:26px;'}))
,_('div.b-page_compose-body'
,_('tmpl:compose_headlines',{extend:ns})
,_('div.b-page_compose-text_body'
,ns.editor=_('ui:compose_editor',{name:'text'}))
,_('div.b-page_compose-wrap_attachs'
,_('div.b-page_compose-attachs'
,_('ui:uButton',{
css:'b-page_compose-button_attachs',
css_icon:'i-img--attach_file',
icon:true,
text:"Прикрепить файлы..."
})))))};
rr.styles('tmpl:compose_headlines'
,'.b-compose_headlines-row {line-height: 26px;height:28px;position: relative;}'
,'.b-compose_headlines-title {position: absolute;left:0;color: #666666;}'
,'.b-compose_headlines-box {margin-left: 85px;}'
,'.b-compose_headlines-button {width:80px;vertical-align: top;}'
,'.b-compose_headlines-input {vertical-align: top;height: 24px;width:100%;-moz-box-sizing: border-box;box-sizing: border-box;line-height:1.2 !important;}'
,'.b-compose_headlines-row--other {display:none;}'
,'.b-compose_headlines-button {background-color:#e2e2e2;}'
)
tmpl.compose_headlines=function(_,p){
var ns=p.extend;
return _('DIV.b-compose_headlines'
,_('div.b-compose_headlines-row'
,_('span.b-compose_headlines-title',"От кого:")
,_('div.b-compose_headlines-box'
,_('span'
,"eee <vasya@puper.eee>"
)))
,_('div.b-compose_headlines-row'
,_('span.b-compose_headlines-title'
,ns.button_toMail=_('ui:uButton'
,{
css:'b-compose_headlines-button',
icon:true,
css_icon:'i-img--contact',
text:"Кому:"
}))
,_('div.b-compose_headlines-box'
,_('INPUT.b-compose_headlines-input',{title:"Двойной клик по полю откроет адресную книгу",type:"text",name:"to"})))
,_('div.b-compose_headlines-row b-compose_headlines-row--other'
,_('span.b-compose_headlines-title'
,ns.button_ccMail=_('ui:uButton'
,{
css:'b-compose_headlines-button',
icon:true,css_ico:'b-icons b-icons--addr',
text:"Копия:"
}))
,_('div.b-compose_headlines-box'
,_('INPUT.b-compose_headlines-input',{title:"Двойной клик по полю откроет адресную книгу",type:"text",name:"to"})))
,_('div.b-compose_headlines-row b-compose_headlines-row--other'
,_('span.b-compose_headlines-title'
,ns.button_bccMail=_('ui:uButton'
,{
css:'b-compose_headlines-button',
icon:true,css_ico:'b-icons b-icons--addr',
text:"С. копия:"
}))
,_('div.b-compose_headlines-box'
,_('INPUT.b-compose_headlines-input',{title:"Двойной клик по полю откроет адресную книгу",type:"text",name:"to"})))
,_('div.b-compose_headlines-row'
,_('span.b-compose_headlines-title b-compose_headlines-title--subj'
,"Тема:"
)
,_('div.b-compose_headlines-box'
,_('INPUT.b-compose_headlines-input',{title:"Двойной клик по полю откроет адресную книгу",type:"text",name:"to"}))))};

/* URL: /js/mail_new/ui/ui_page_compose.src.js */

elems.compose_page=rr.new_class({
parent:rr.class_baseElement,
interface:true,
constructor:function(_,pr,cfg){
this.interface.parent.call(this,_,pr,cfg);
this.interface.factory(this,_,pr);
if(this.node)this.node.rocketui=this;
},
factory:function(ui,_,pr){
ui.master=_.clone();
ui.nodes=_.tmpl('tmpl:compose_page',{
});
ui.node=ui.nodes.node;
ui.box=ui.nodes.box;
ui.title=ui.nodes.title;
ui.pid='compose';
this.init_event(ui)},
prototype:{
on_connect:function(){
var ui=this;
if(ui.display=ui.is_connected){
ui.nodes.editor.is_connected=true;
ui.nodes.editor.on_connect()}}},
init_event:function(ui){
}});


/* URL: /js/mail_new/tmpl/tmpl_compose_editor.src.js */

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
,'.mceItemHiddenSpellWord {background:url("/i/chameleon/misspell.png") repeat-x bottom left; cursor:default;}'
);
rr.styles('tmpl:tinymce_tmpl.theme_ramail'
,'.b-wsgRamail table, .b-wsgRamail tbody, .b-wsgRamail a, .b-wsgRamail img, .b-wsgRamail tr, .b-wsgRamail td, .b-wsgRamail iframe, .b-wsgRamail span {border:0; margin:0; padding:0; background:transparent; white-space:nowrap; text-decoration:none; font-weight:normal;color:#000}'
,'.b-wsgRamail iframe {display:block; background:#FFF; border-bottom:1px solid #CCC;}'
,'.b-wsgRamail span.mceIcon, .b-wsgRamail img.mceIcon {display:block; width:20px; height:20px}'
,'.b-wsgRamail .mceIcon {background:url(http://i.rambler.ru/m/83/i/chameleon/ramail-icons.png) no-repeat 20px 20px}'
,'.b-wsgRamail .mceButton {display:block; border:1px solid #FFF; background-color:#FFF;width:20px; height:20px;}'
,'.b-wsgRamail a.mceButtonEnabled:hover {border:1px solid;border-color:#9EBDD6 #D2E4F1 #DBECF6;}'
,'.b-wsgRamail a.mceButtonActive {border:1px solid;border-color:#989898 #CBCBCB #CBCBCB;}'
,'.b-wsgRamail .mceButtonDisabled span {opacity:0.3; -ms-filter:\'alpha(opacity=30)\'; filter:alpha(opacity=30)}'
,'.b-wsgRamail .mceSeparator {display:block; border-left:1px solid #E0E0E0; width:2px; height:16px; margin:0 3px 0 1px;}'
,'.b-wsgRamail  .mceListBox, .b-wsgRamail .mceListBox a {display:block}'
,'.b-wsgRamail  .mceListBox .mceText {padding-left:4px; width:70px; text-align:left; border:1px solid #CCC; border-right:0; background:#FFF; font-family:Tahoma,Verdana,Arial,Helvetica; font-size:11px; height:20px; line-height:20px; overflow:hidden}'
,'.b-wsgRamail  .mceListBox .mceOpen {width:10px; height:20px; background:url(http://i.rambler.ru/m/83/i/chameleon/ramail-icons.png) -10px -1594px; margin-right:2px; border:1px solid #CCC;border-left:0 none;}'
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
tmpl.compose_editor=function(_,pr){
var ns=this;
ns.node=_('div.b-compose_editor'
,_('label.b-compose_editor-wrap_textarea'
,ns.textarea_text=_('textarea.b-compose_editor-textarea_text',{name:'text'}))
,_('div.b-compose_editor-wysiwyg_box'
,ns.textarea_html=_('textarea.b-compose_editor-textarea_html',{name:'html',value:""})))};
tmpl.tinymce_ramail=function(_,pr){
var ns=this;
ns.node=_('div.b-wsgRamail'
,ns.box_toolbar=_('div.b-wsgRamail-toolbar')
,ns.box=_('div.b-wsgRamail-box'))};


/* URL: /js/mail_new/ui/ui_compose_editor.src.js */

var tinyMCE_GZ={loaded:true};
var tinyMCEPreInit={
suffix:'_src'
,baseURL:'http://m3.mail-test.rambler.ru/js/tiny_mce'
,query:false
};
elems.compose_editor=rr.new_class({
src_wysiwyg:'http://m3.mail-test.rambler.ru/js/tiny_mce/tiny_mce_src.js',
interface:true,
constructor:function(_,pr){
var ui=this,ns=new tmpl.compose_editor(_,pr);
ui.nodes=ns;
ui.node=ns.node;
},
init_events:function(ui){
},
prototype:{
mode_wysiwyg:false,
on_connect:function(){
var ui=this;
if(this.is_connected){
setTimeout(function(){
ui.set_wysiwyg(true)},50)}},
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
,theme:"ramail"
,setup:function(ed){
ed.onPreInit.add(function(){
rr.styles_include('wysiwyg_frame:rm_tinymce',ed.getDoc())})}})}});


/* URL: /js/mail_new/compose.src.js */

cram.addEvent('open_page',function(e){
if(e.returnValue==false)return;
var hs=e.hash;
if(!hs||!(hs=='/compose'||hs.toLocaleLowerCase()=='/compose'))return;
e.hash='/compose';
e.handler=function(){
return cram.open_compose()};
return false;
});
cram.open_compose=function(e){
var page=domMaster.tmpl('ui:compose_page',false);
page.pg_name='compose';
cram.page_connect(page,e)};


/* URL: /js/calendar/rc_common.src.js */

var rcalendar=this.rcalendar||{};
cram.addEvent('open_page',function(e){
if(e.returnValue==false)return;
var hash=e.hash,hs=hash.toLocaleLowerCase(),x,v;
if(!hs||!(hs=='/calendar'||!hs.indexOf('/calendar/')))return;
e.handler=function(e){
return rcalendar.page_open(e)};
e.hash='/calendar';
e.query_param={
};
return e.returnValue=false;
});
rcalendar.page_open=function(e){
var page=rcalendar.page,tm;
if(!page){
tm=new Date();
tm.setHours(0,0,0,0);
tm=Math.floor(tm.getTime()/60000);
page=domMaster('ui:rc_page',{
calendarSource:dataSource(),
timeStart:tm
})};
cram.page_connect_(e,page)};
function dataSource(){
var list=new rcalendar.calendarSource_();
var tm=new Date(),h=3600000,id=10,clist=[{color:1},{color:2}];
tm.setHours(0,0,0,0);
list.calendars=clist;
tm=Math.round(tm.getTime()/60000)-1*1440;
function add(a,l,tx){
list.set({
id:''+(id++),
calendar:clist[1],
start:tm+a*60,
end:tm+a*60+l*60,
utc_start:0,
utc_end:0,
text:tx||'task bla bla'
})};
var i=0,n=950,pl=8;
for(;i<n;i++){
add(Math.round(Math.random()*744*(n/(5*pl)))-744*(n/(10*pl)),Math.round(Math.random()*(Math.random()>0.95?70:Math.random()>0.9?24:12)),'еше работа которую нужно сделать')}
return list;
}


/* URL: /js/calendar/source.src.js */

rr.extend('rcalendar.xclass');
rr.extend('rcalendar.ui');
rcalendar.calendarSource_=rr.new_class({
constructor:function(tz,ts){
var t=this,u;
t.list=[];
t.list.is_sort=false;
t.list_change=[];
t.list_ns={};
t.__newId_=10;
t.iStart=u;
t.iEnd=u;
t.calendar_color={
my:1,
test:2,
work:3,
xc_2343453563:5
};
t.ev_change_=function(){
t.ev_change()}},
prototype:rr.extend({},rr.expansion_event,{
newId:function(){
return'nid:'+(this.__newId_++)},
add:function(p){
this.set(p)},
get_item:function(id){
var x=id&&this.list_ns[id];
if(typeof x=='object')return x;
},
add:function(p){
},
set:function(p,ch){
if(!p||!p.id||typeof p!='object')return false;
var t=this,a=t.list,ns=t.list_ns,n=ns[p.id],x,u,pv,ch_prm,
ps=typeof p.start=='number',
pe=typeof p.end=='number';
if(!n){
if(!ps||!pe||!p.calendar)return false;
ns[p.id]=a[a.length]=n={id:p.id,start:p.start,end:p.end,calendar:p.calendar};
ch=true;
a.is_sort=false;
}
else{
ch=ch||n===p;
if(ps||pe){
ch=true;
if(ps)n.start=p.start;
if(pe)n.end=p.end;
a.is_sort=false;
}};
if(n.start>n.end){
x=n.start;
n.start=n.end;
n.end=x;
a.is_sort=false;
};
n.duration=n.end-n.start;
for(x in p){
switch(x){
case'start':
case'end':
case'pv':
case'_c__':
continue;
};
n[x]=p[x];
ch_prm=true;
};
if(!ch&&!ch_prm)return;
var a=t.list_change;
if(ch){
a.full_change=true;
};
if(!n._c__){
n._c__=true;
a[a.length]=n;
if(!t._tm_change)t._tm_change=setTimeout(t.ev_change_,20)}},
ev_change:function(px){
var t=this,list=t.list_change,i=0,x,u;
if(x=t._tm_change)clearTimeout(x);
t._tm_change=false;
if(!list||!list.length)return;
var e={list:list};
if(px)rr.extend(e,px);
t.initEvent('change',x);
for(;x=list[i++];)x._c__=false;
list.length=0;
},
resort:function(fs){
var a=this.list;
if(fs||!a.is_sort){
a.is_sort=true;
a.sort(this._item_sort)}},
_item_sort:function(a,b){
return(a.start-b.start)||(b.end-a.end)},
get_range:function(a,b,cfg){
var t=this,ls=t.list,
nls,ni,p,i;
if(!ls.is_sort){
ls.is_sort=true;
ls.sort(t._item_sort)};
i=ni=0;
while(p=ls[i++]){
if(p.start>=b)break;
if(p.end<=a)continue;
if(cfg){
if(cfg.day&&p.duration>=1440)continue;
};
if(!nls)nls=[];
nls[ni++]={item:p}};
return nls;
},
get:function(a,b,cfg){
var t=this,ls=t.list,
nls,ni,p,i;
if(!ls.is_sort){
ls.is_sort=true;
ls.sort(t._item_sort)};
i=ni=0;
while(p=ls[i++]){
if(p.start>=b)break;
if(p.end<=a)continue;
if(!nls)nls=[];
nls[ni++]={item:p}};
return nls;
},
set_calendar:function(){
}})});
rcalendar.date_tm=(function(){
var dt=new Date();
function date_tm(tm,tz,Y,M,D,h,m,s){
if(!tm&&tm!==0)return;
var u,fg=arguments.length<3,v={};
if(tz)tm-=tz;
dt.setTime(tm*60000);
if(fg||Y)v.year=dt.getUTCFullYear();
if(fg||M)v.month=dt.getUTCMonth();
if(fg||D){
v.date=dt.getUTCDate();
v.day=dt.getUTCDay()};
if(fg||h)v.h=dt.getUTCHours();
if(fg||m)v.m=dt.getUTCMinutes();
if(fg||s)v.s=0;
return v;
};
return date_tm;
})();
rcalendar.getMaxDate=function(y,m){
return m===1?(y%4||y%400&&!(y%100)?28:29):m===3||m===5||m===8||m===10?30:31;
};
rcalendar.xdate=rr.new_class({
constructor:function(z,sp,tm){
var t=this,u,v,dt=new Date();
t.time_offset=z||0;
t._time_offset=t.time_offset*60000;
t.time_step=typeof sp=='number'?sp:60000;
t._xdate=dt;
t._stack=[];
t._change=true;
if(typeof tm!='number'){
dt.setUTCMilliseconds(0)}else t.setTime(tm)},
prototype:{
time_step:60000,
time_offset:0,
save:function(){
this._stack.push(this._xdate.getTime());
return this;
},
re:function(){
var s=this._stack;
if(s.length)this._xdate.setTime(s.pop());
return this;
},
clear:function(){
this._stack.length=0;
return this;
},
setTime:function(x,i){
var t=this,dt=t._xdate,v;
if(v=t.time_step)x=x*v;
if(v=t._time_offset)x-=v;
dt.setTime(x);
dt.setUTCMilliseconds(0);
t._change=true;
return t;
},
getTime:function(){
var t=this,dt=this._xdate,tm,x;
if(t._change){
tm=dt.getTime();
if(x=t._time_offset)tm+=x;
if(x=t.time_step)tm=Math.floor(tm/x);
t._time=tm;
};
return t._time;
},
getYear:function(){
return this._xdate.getUTCFullYear()},
getMonth:function(){
return this._xdate.getUTCMonth()},
getDate:function(){
return this._xdate.getUTCDate()},
getDay:function(){
return this._xdate.getUTCDay()},
getHours:function(){
return this._xdate.getUTCHours()},
getMinutes:function(){
return this._xdate.getUTCMinutes()},
getSeconds:function(){
return this._xdate.getUTCSeconds()},
getMaxDate:function(m){
var dt=this._xdate,y;
m=dt.getUTCMonth();
if(m==1){
y=dt.getUTCFullYear();
return y%4||(!(y%100)&&y%400)?28:29;
};
return(m==3||m==5||m==8||m==10)?30:31;
},
set:function(Y,M,D,h,m,s,ms){
var t=this,dt=t._xdate,x;
if(typeof Y=='number')dt.setUTCFullYear(Y);
if(x=typeof M=='number'){
if(D)dt.setUTCDate(1);
dt.setUTCMonth(M)};
if(D=='end'){
dt.setUTCDate(this.getMaxDate(M))}else
if(typeof D=='number'){
dt.setUTCDate(D)};
if(typeof h=='number')dt.setUTCHours(h);
if(typeof m=='number')dt.setUTCMinutes(m);
if(typeof s=='number')dt.setUTCSeconds(s);
t._change=true;
return t;
},
next:function(Y,M,D,h,m,s){
var t=this,dt=t._xdate,x;
if(Y)dt.setUTCFullYear(Y+dt.getUTCFullYear());
if(M)dt.setUTCMonth(M+dt.getUTCMonth());
if(D)dt.setUTCDate(D+dt.getUTCDate());
if(h)dt.setUTCHours(h+dt.getUTCHours());
if(m)dt.setUTCMinutes(m+dt.getUTCMinutes());
if(s)dt.setUTCSeconds(s+dt.getUTCSeconds());
if(Y||M||D||h||m||s){
t._change=true;
};
return t;
},
get:function(Y,M,D,h,m,s){
var dt=this._xdate,fg=!arguments.length,v={time:this.time};
if(fg||Y)v.year=dt.getUTCFullYear();
if(fg||M)v.month=dt.getUTCMonth();
if(fg||D){
v.date=dt.getUTCDate();
v.day=dt.getUTCDay()};
if(fg||h)v.h=dt.getUTCHours();
if(fg||m)v.m=dt.getUTCMinutes();
if(fg||s)v.s=dt.getUTCSeconds();
return v;
},
sDay:function(x){
var t=this,dt=t._xdate;
if(typeof x!='number')return t;
if(x=x-dt.getUTCDay()){
dt.setUTCDate(dt.getUTCDate()+x);
t._change=true;
};
return t;
},
s00:function(){
var t=this,dt=t._xdate,x;
dt.setUTCHours(0);
dt.setUTCMinutes(0);
dt.setUTCSeconds(0)
dt.setUTCMilliseconds(0);
t._change=true;
return t;
},
g00:function(){
var t=this,dt=t._xdate,sv=dt.getTime(),n,x;
dt.setUTCHours(0);
dt.setUTCMinutes(0);
dt.setUTCSeconds(0)
dt.setUTCMilliseconds(0);
n=dt.getTime();
if(x=t._time_offset)n+=x;
if(x=t.time_step)n=Math.floor(n/x);
dt.setTime(sv);
return n;
},
gDay:function(x){
if(typeof x!='number')return;
var t=this,dt=t._xdate,n=t.time,sv;
if(x=x-dt.getUTCDay()){
sv=dt.getTime();
dt.setUTCDate(dt.getUTCDate()+x)
n=dt.getTime();
if(x=t._time_offset)n+=x;
if(x=t.time_step)n=Math.floor(n/x);
dt.setTime(sv)};
return n;
}}});


/* URL: /js/calendar/rr_date.src.js */

rr.Date=function(x){
x=x?new Date(x):new Date();
x=rr.extend(x,rr.Date._extend);
x._=x.constructor.prototype;
return x;
};
rr.Date._extend={
getTime:function(){
var t=this,pt=t.constructor.prototype;
alert(t._deltaTimezoneOffset)
return pt.getTime.call(t)-(t._deltaTimezoneOffset||0)*60000;
},
setTime:function(v){
if(!v||typeof v!='number')return;
var t=this,pt=t.constructor.prototype;
v+=t._deltaTimezoneOffset||0;
pr.setTime.call(t,v)},
getTimezoneOffset:function(){
var t=this,pt=t.constructor.prototype,x=t._timezoneOffset;
return typeof x=='number'?x:Date.getTimezoneOffset.call(t)},
setTimezoneOffset:function(v,z){
if(typeof v!='number')return;
var t=this,pt=t.constructor.prototype;
t._timezoneOffset=v;
t._deltaTimezoneOffset=v-pt.getTimezoneOffset.call(t)},
clone:function(){
var x=new Date(this._.getTime.call(t));
x=rr.extend(x,this);
x._=x.constructor.prototype;
}}


/* URL: /js/calendar/tmpl_page.src.js */

tmpl.rc_sidebar=function(_,pr){
var ns=this;
ns.node=_('div'
,_('ui:scal_one'))};
tmpl.rc_page=function(_,pr){
var ns=this;
ns.page=_('ui:page'
,{
extend:ns
,pid:'rcalendar'
,document_title:"Календарь"
,css:'b-rcalendar'
,css_capion:'b-rcalendar-capion'
,head:'none'
}
,_('ui:page_head'
,_('tmpl:uToolbar'
,{
css:'b-block_feeds-controls',
right:[
,_('ui:uButton',{
css:'',
css_icon:'i-img--arrow_left',
group:'left',
title:"День",
text:"День"
})
,_('ui:uButton',{
css:'',
css_icon:'i-img--arrow_right',
active:true,
group:'center',
title:"Неделя",
text:"Неделя"
})
,_('ui:uButton',{
css:'',
css_icon:'i-img--',
group:'right',
title:"Месяц",
text:"Месяц"
})
,_('ui:uButton',{
css:'',
icon:'only',
css_icon:'i-img--refresh',
indent:'left',
first:'right',
title:"Обновить данные",
text:"Обновить"
})
]
}
,_('ui:uButton',{
css:'',
css_icon:'i-img--refresh',
first:'left',
title:"Сегодня",
text:"Сегодня"
})
,_('ui:uButton',{
css:'',
css_icon:'i-img--arrow_left',
indent:'left',
icon:'only',
title:"Назад",
text:">"
})
,_('ui:uButton',{
css:'',
css_icon:'i-img--arrow_right',
first:'right',
icon:'only',
title:"Вперед",
text:">"
})))
,ns.calendar=_('ui:rc_calendar'
,{
calendarSource:pr.calendarSource,
timeStart:pr.timeStart,
timeEnd:null
}))};
tmpl.rc_calendar=function(_,pr){
var ns=this;
ns.node=_('div.rc-page',
ns.toolbar=_('div.rc-page-toolbar'+(pr.mode!='month'?' rc-page-toolbar--pleft':'')
,{
style:'display:none;'
}
,_('div.panel',
ns.b_past=_('button.gopast',"<"),
ns.b_next=_('button.gonext',">"),
ns.b_today=_('button.gotoday',"Сегодня"),
ns.b_date=_('a.date',{href:'javascript://'},
ns.tx_date=_.text('date')))),
ns.p_month=_('ui:rc_areamonth',{
calendarSource:pr.calendarSource,
panelLeft:true,
panelTop:false,
timeStart:pr.timeStart,
rows:1,
height:150,
columns:7
}),
ns.resizer=_('div.rc-calendar-resizer'),
ns.p_days=_('ui:rc_areaday',{
calendarSource:pr.calendarSource,
panelLeft:true,
timeStart:pr.timeStart,
dtime:8,
columns:7
}))};
tmpl.rc_toolbar=function(_,pr){
var ns=this;
ns.snm='rc-toolbar';
ns.node=_('div.rc-toolbar',
ns.tb_top=_('div.rc-toolbar-top',
_('::toolbar_botton',{
name:'day',
active:false,
text:"День"
}),
_('::toolbar_botton',{
name:'day4',
active:false,
text:"5 Дней"
}),
_('::toolbar_botton',{
name:'week',
active:true,
text:"Неделя"
}),
_('::toolbar_botton',{
name:'month',
active:false,
text:"Месяц"
}),
_('::toolbar_botton',{
name:'list',
active:false,
text:"Список"
}),
_('::toolbar_botton',{
name:'edit',
active:false,
text:"Ред. событие"
})),
_('div.rc-toolbar-end'))};
tmpl.rc_toolbar_botton=function(_,pr){
var n=rr.IE<7?_('a',{href:"js:"+(pr.name||'control')}):_('a');
n.className=rr.ct(' ','rc-toolbar-b',pr.active&&'rc-toolbar-b--active');
if(pr.name)n.cm_name=pr.name;
if(pr.title)n.title=pr.title;
n.onclick=rr.nullFunction;
_(n,
_('span.i'),
_('span',pr.text||""));
return n;
};
tmpl.rc_calendar_wrap=function(_,pr){
var ns=this;
ns.node=_('div.rc-calendar'
,ns.toolbar=_('ui:rc_toolbar'))};
tmpl.rc_page_edit=function(_,p){
var ns=this;
function gr_(nm,x,a1,a2,a3,a4){
var u;
return _('tr',{css:nm}
,_('td.lb'
,!x.label?" ":_('label',{htmlFor:x.name||''}
,_('span'
,_.text(x.label))))
,_('td.cp'
,_('div.c'
,a1
,a2
,a3
,a4
)))};
ns.page=_('ui:page'
,{
extend:ns
,pid:'rcalendar'
,document_title:"Календарь"
,css:'b-rc_page_edit'
,css_capion:'b-rc_page_edit-capion'
,head:'none'
}
,_('ui:page_head'
,_('tmpl:uToolbar'
,{
css:'',
right:[
]
}
,_('ui:uButton',{
css:'',
first:true,
title:"Сохранить",
text:"Сохранить"
})
,_('ui:uButton',{
css:'',
title:"Вернуться в календарь",
text:"Отмена"
})))
,_('div.b-rc_dialog_new-body'
,_('table.b-rc_dialog_new-table',{cellSpacing:0,cellPadding:0,border:0}
,_('tbody'
,gr_('b-rc_dialog_new-what',{name:"rc:textWhat",label:"What text"}
,_('input',{name:'rc:textWhat',value:''}))
,gr_('b-rc_dialog_new-pcalendar',{name:"rc:pcalendar",label:"Calendar"}
,_('select',{name:'rc:pcalendar',value:''}
,_('option',{value:'c-xxx-xxx-xxx-xx1'},_.text('My calendar-1'))
,_('option',{value:'c-xxx-xxx-xxx-xx2'},_.text('My calendar-2'))))
,gr_('b-rc_dialog_new-allday',false
,_('label'
,_('input',{name:'rc:allday',type:'checkbox'})
,_('span.lb',"All day")))
,gr_('b-rc_dialog_new-dtStart',{name:"rc:startDate",label:"Start"}
,_('input.d',{name:'rc:startDate',value:'00'})
,_('input.t',{name:'rc:startTime',value:'00'}))
,gr_('b-rc_dialog_new-dtEnd',{name:"rc:endDate",label:"End"}
,_('input.d',{name:'rc:endDate',value:rr.trim('00')})
,_('input.t',{name:'rc:endTime',value:rr.trim('00')}))))
,_('div.b-rc_dialog_new-cmn'
,_('input.save',{type:'button',value:"Save",name:"rc:save"})
,_('input.cancel',{type:'button',value:"Cancel",name:"rc:cancel"}))))};


/* URL: /js/calendar/ui_page.src.js */

elems.rc_page=rr.new_class({
parent:rr.class_baseElement,
interface:true,
constructor:function(_,pr,cfg){
this.interface.parent.call(this,_,pr,cfg);
this.interface.factory(this,_,pr);
if(this.node)this.node.rocketui=this;
},
factory:function(ui,_,pr){
ui.master=_.clone();
ui.nodes=_.tmpl('tmpl:rc_page',{
calendarSource:pr.calendarSource,
timeStart:pr.timeStart
});
ui.sidebar=_.tmpl('tmpl:rc_sidebar',{
calendarSource:pr.calendarSource,
timeStart:pr.timeStart
})
ui.node=ui.nodes.node;
ui.box=ui.nodes.box;
ui.pid='calendar';
this.init_event(ui)},
prototype:{
on_connect:function(){
var ui=this;
if(ui.display=ui.is_connected&&!ui.hide){
};
ui.nodes.calendar.ev_connect(ui.display,false)}},
init_event:function(ui){
}});
elems.rc_calendar=rr.new_class({
parent:rr.class_baseElement,
interface:true,
constructor:function(_,pr,cfg){
this.interface.parent.call(this,_,pr,cfg);
this.interface.factory(this,_,pr);
if(this.node)this.node.rocketui=this;
this.set(pr)},
factory:function(ui,_,pr){
ui.master=_.clone();
ui.nodes=_.tmpl('tmpl:rc_calendar',{
calendarSource:pr.calendarSource,
timeStart:pr.timeStart
});
ui.node=ui.nodes.node;
ui._xdate=new rcalendar.xdate(0,60000,pr.timeStart||0);
this.init_event(ui)},
prototype:{
on_connect:function(){
var ui=this,ch=ui._changes||false;
if(ui.display=ui.is_connected&&!ui.hide){
ui.refresh(true)};
ui.nodes.p_month.ev_connect(ui.display,false);
ui.nodes.p_days.ev_connect(ui.display,false)},
mode:'week',
mode_month:{panelTop:false,panelLeft:true,rows:1,columns:7,height:150,hide:false},
mode_day:{panelTop:false,panelLeft:true,height:'auto',columns:7,hide:false},
goNext:function(){
},
goPast:function(){
}},
set:function(ui,pr,v,pv){
var it=this,tv=typeof v,x,u;
switch(pr){
case'mode':
switch(v){
case'day':
case'day4':
case'week':
case'month':
case'list':
break;
default:return;
};
switch(ui.mode){
case'day':
case'day4':
case'week':
ui.mode_month.height=ui.nodes.p_month.height;
break;
};
break;
case'timeActive':
case'timeStart':
case'timeEnd':
if(tv!='number')return;
break
case'calendarSource':
if(v===pv||(v?tv!=='object':v!=null))return;
if(pv)ui.gEvent.removeAll(pv);
if(v)it.init_events_data(ui,v);
break;
};
return v;
},
refresh:function(ui,ch,rz){
if(!ui.display)return false;
if(ui.z_resize)ui.z_resize=!(rz=true);
var it=this,nodes=ui.nodes,v,i,x,u;
var xM={},xD={},dx=ui._xdate;
v=ui.timeActive;
if(!v&&v!==0)ui.timeActive=v=ui.timeStart;
if(!v&&v!==0)return false;
if(rz||ch.timeActive){
dx.setTime(v)}
else if((ch.timeStart||ch.timeStart)&&(ui.timeStart>v||ui.timeEnd<v)){
dx.setTime(ui.timeActive=ui.timeStart)};
if(rz||ch.calendarSource){
xD.calendarSource=xM.calendarSource=ui.calendarSource;
};
if(rz||ch.mode){
var mode=v=ui.mode||'week';
rr.extend(xM,ui.mode_month);
rr.extend(xD,ui.mode_day);
switch(v){
case'day':
xM.columns=1;
xD.columns=1;
break;
case'day4':
xM.columns=5;
xD.columns=5;
break;
case'week':
break;
case'month':
var cw=rr.getClientWH(this.ownerDocument,true);
xM.height=cw.h>800?cw.h-rr.getAbsolutePos(nodes.p_month.node).y-10:700;
if(xM.height>1500)xM.height=1500;
if(!xM.height)xM.height=700;
xM.panelTop=true;
xM.panelLeft=false;
xM.rows=6;
xD.hide=true;
xD.panelLeft=false;
break;
case'list':
xM.panelLeft=false;
xM.height='auto';
xM.columns=1;
xM.rows=10;
xD.hide=true;
break;
default:return;
};
ui.columns=xM.columns;
ui.mode=mode;
rr.css_set('rc-page-toolbar--pleft',nodes.toolbar,xM.panelLeft);
rr.css_set_('rc-page--mode-',ui.node,mode);
xM.selectionStart=xM.selectionEnd=xD.selectionStart=xD.selectionEnd=null;
};
if(rz||ch.timeActive||ch.mode){
var tx,xSt,xEn;
switch(ui.mode){
case'day':
x=dx.save().s00().getTime();
v=dx.get();
tx=v.date+" "+rv.month_of[v.month]+" "+v.year;
dx.re();
break;
case'day4':
x=dx.save().s00().getTime();
xSt=dx.get();
xEn=dx.next(0,0,(typeof xM.colums=='number'?xM.colums:nodes.p_month.columns||1)-1).get();
tx=(xSt.date+"/"+xSt.month+"/"+xSt.year)+" - "+(xEn.date+"/"+xEn.month+"/"+xEn.year);
dx.re();
break;
case'week':
x=dx.save().sDay(1).s00().getTime();
var am=rv.month_of,A=dx.get(1,1,1),B,v;
v=(typeof xM.colums=='number'?xM.colums:nodes.p_month.columns||1)*(typeof xM.rows=='number'?xM.rows:nodes.p_month.rows||1);
B=dx.next(0,0,v-1).get(1,1,1);
dx.re();
tx=rr.ct(' ',
A.date,
A.month!=B.month&&am[A.month],
A.year!=B.year&&A.year,
"\u2014 "+B.date+" "+am[B.month]+" "+B.year
);
break;
case'month':
v=dx.save().getDay();
dx.save().set(null,null,1);
xM.rows=Math.ceil((dx.getDay()-1+dx.getMaxDate())/7);
x=dx.sDay(1).s00().getTime();
dx.re();
v=dx.get();
tx=rv.month[v.month]+" "+v.year;
break;
default:x=ui.timeStart;
};
xM.timeStart=xD.timeStart=ui.timeStart=x;
if(tx)nodes.tx_date.data=tx;
};
ui.timeEnd=ui.timeStart+1440*(ui.columns||1)*(xM.rows||nodes.p_month.rows||1);
for(i in xM){
if(!rr.Opera)nodes.p_month.set(xM);
nodes.p_days.set(xD);
if(rr.Opera)nodes.p_month.set(xM);
if(ui.parent){
ui.parent.timeSync({
timeStart:ui.timeStart,
timeEnd:ui.timeEnd
})};
break;
}},
init_event:function(ui){
var x,c,u;
ui.gEvent.add(ui.nodes.p_days,'user_create_item',x=function(e){
if(ui.parent)ui.parent.edit_item_popup(e)});
ui.gEvent.add(ui.nodes.p_month,'user_create_item',x);
ui.gEvent.add(ui.nodes.p_days,'item_click',x);
ui.gEvent.add(ui.nodes.p_month,'item_click',x);
var stop_sync;
ui.gEvent.add(ui.nodes.p_days,'change',x=function(ch){
if(stop_sync)return;
var t=this,x,v;
if(ch.activeItem){
v=t.activeItem;
stop_sync=true;
x=ui.nodes.p_days;
if(x!=t)x.set('activeItem',v);
x=ui.nodes.p_month;
if(x!=t)x.set('activeItem',v);
stop_sync=false;
}});
ui.gEvent.add(ui.nodes.p_month,'change',x);
if(x=ui.nodes.p_month){
ui.appendChild(x,false);
ui.gEvent.add(x.node,'mousedown',function(e){
var x=ui.nodes.p_days;
if(x&&x.selectionStart!==null)x.set('selectionStart',null)},x)};
if(x=ui.nodes.p_days){
ui.appendChild(x,false);
ui.gEvent.add(x.node,'mousedown',function(e){
var x=ui.nodes.p_month;
if(x&&x.selectionStart!==null)x.set('selectionStart',null)},x)};
x=null;
ui.gEvent.add(ui.nodes.resizer,'mousedown',function(e){
rr.breakEvent(e);
var uim=ui.nodes.p_month,sh=uim.height;
var drag=new rr.ui.class_drag({
move_dragstart:function(){
},
move_dragend:function(){
},
move:function(od){
var dX=od.stX-od.psX,
dY=od.stY-od.psY,
h=sh-dY;
if(h<10)h=10;
uim.set('height',h)}});
drag.initEvent('startDrag',{
event:e,
autoScroll:false
})});
ui.gEvent.add(ui.nodes.b_past,'click',x=function(e){
ui.interface.ev_goPast(ui)});
if(rr.IE)ui.gEvent.add(ui.nodes.b_past,'dblclick',x);
ui.gEvent.add(ui.nodes.b_next,'click',x=function(e){
ui.interface.ev_goNext(ui)});
if(rr.IE)ui.gEvent.add(ui.nodes.b_next,'dblclick',x);
ui.gEvent.add(ui.nodes.b_today,'click',function(e){
ui.interface.ev_today(ui)});
ui.gEvent.add(ui.nodes.b_date,'click',function(e){
rr.breakEvent(e);
ui.interface.ev_bDate(ui)});
x=u;
},
init_events_data:function(ui,v){
},
ev_goNext:function(ui){
var dx=ui._xdate,ns=ui.nodes,x=1;
switch(ui.mode){
case'week':x=7
case'day':
dx.next(0,0,x);
break;
case'month':
var D=dx.getDate();
dx.set(null,null,1).next(0,1).set(null,null,'end');
if(dx.getDate()>D)dx.set(null,null,D);
break;
default:
dx.next(0,0,Math.floor((ns.p_month.rows||1)*(ns.p_month.columns||1)))};
ui.set('timeActive',dx.getTime())},
ev_goPast:function(ui){
var dx=ui._xdate,ns=ui.nodes,x;
switch(ui.mode){
case'week':
dx.next(0,0,-7);
break;
case'month':
var D=dx.getDate();
dx.set(null,null,0);
if(dx.getDate()>D)dx.set(null,null,D);
break;
default:
dx.next(0,0,-Math.floor((ns.p_month.rows||1)*(ns.p_month.columns||1)))};
ui.set('timeActive',dx.getTime())},
ev_today:function(ui){
var dx=ui._xdate,x;
x=(new Date()).getTime()/dx.time_step;
dx.setTime(Math.floor((new Date()).getTime()/dx.time_step)).s00();
ui.set('timeActive',dx.getTime())},
ev_bDate:function(ui){
var x,ow,xc,md,u;
if(ow=ui._wlayout_date){
ow.close();
ow.gEvent.removeAll();
ui._wlayout_date=null;
return;
};
x=ui._xdate.get(1,1,1);
ow=_('ui:wlayout',
{
visibility:false,
left:0,
top:0,
width:350,
height:null
},
xc=_('rc:mcal_one',{
startDay:1,
todayDate:{y:2010,m:2,d:26},
activeDate:{y:x.year,m:x.month,d:x.date}}));
ow.gEvent.add(xc,'uselect',function(d,m){
ui._wlayout_date=null;
ow.close();
ui.set('timeActive',ui._xdate.set(d.y,d.m,d.d).getTime())});
x=rr.getAbsolutePos(ui.nodes.b_date);
ow.set({
visibility:true,
top:x.y+ui.nodes.b_date.offsetHeight+3,
left:Math.floor(x.x+ui.nodes.b_date.offsetWidth/2-ow.width/2)});
ow.gEvent.add(ow.node,'mousedown',x=function(){md=true});
ow.gEvent.add(ui.nodes.b_date,'mousedown',x);
x=u;
ow.gEvent.add(ui.ownerDocument,'mousedown',function(){
if(!md){
ui._wlayout_date=null;
ow.close();
ow.gEvent.removeAll()};
md=false;
});
ui._wlayout_date=ow;
}});
elems.rc_calendar_wrap=rr.new_class({
parent:rr.class_baseElement,
interface:true,
constructor:function(_,pr,cfg){
this.interface.parent.call(this,_,pr,cfg);
this.interface.factory(this,_,pr,cfg);
if(this.node)this.node.rocketui=this;
this.set(pr)},
factory:function(ui,_,pr,cfg){
ui.master=_.clone();
ui.nodes=new tmpl.rc_calendar(_,false);
ui.node=ui.nodes.node;
ui.box=ui.nodes.box;
ui.pagesList={};
ui.toolbar=ui.nodes.toolbar;
ui.nodes.toolbar=null;
ui.pagesList['main']=_('ui:rc_page_main');
ui.pagesList.main.pageName='main';
ui.set(pr,false);
if(!ui.pageActive){
ui.pageActive=ui.pagesList.main;
ui.pageName=ui.pageActive.pageName='main';
};
if(!ui.timeStart&&ui.timeStart!==0){
ui.timeStart=new rcalendar.xdate().s00().getTime();
ui.timeEnd=null;
};
if(ui.timeEnd<ui.timeStart)ui.timeEnd=null;
ui.toolbar.addEvent('swith mode',function(mode){
if(!mode)return;
switch(mode){
case'day':
case'day4':
case'week':
case'month':
case'list':
if(ui.pageName!=='main')ui.set('pageActive','main');
if(ui.page.mode!=mode)ui.page.set('mode',mode);
break;
default:ui.set('pageActive',mode)}});
ui.popup_itemEdit=_('ui:rc_user_new_item',{
calendarSource:ui.calendarSource
})},
prototype:{
on_connect:function(){
var ui=this;
if(ui.display=ui.is_connected&&!ui.hide&&!ui._hide){
ui.refresh(true)}},
set_datePoint:function(y,m,d){
},
edit_item_popup:function(e){
var ui=this,pp=ui.popup_itemEdit,pr=e.item;
pp.show({
complit:e.complit,
calendarSource:ui.calendarSource,
item:{
id:pr.id,
text:pr.text,
calendar:pr.calendar,
start:pr.start,
end:pr.end
}})},
edit_item_page:function(){
},
clearSelection:function(){
},
timeSync:function(p){
if(!p)return;
var ch={},u;
if(p.timeStart!==u){
this.timeStart=p.timeStart;
ch.timeStart=true;
};
if(p.timeEnd!==u){
this.timeEnd=p.timeEnd;
ch.timeEnd=true;
};
this.initEvent('change',ch)}},
set:function(ui,pr,v,pv){
var it=this,tv=typeof v,x,u;
switch(pr){
case'mode':
break;
case'pageActive':
if(tv==='string'){
if(ui.pageName==v||ui.pageActive&&ui.pageActive.pageName==v)return;
if(x=ui.pagesList[v]){
return x;
}
switch(v){
case'main':
if(x=ui.master('ui:rc_page_main')){
x.pageName=v
};
return x||u;
break;
};
return x||u;
};
if(tv==='object'&&v!==ui.page&&v.nodeType)break;
return;
case'timeStart':
case'timeEnd':
case'timeActive':
if(v?tv!='number':v!=0)return;
break;
case'calendarSource':
if(tv!='object')return;
break;
};
return v;
},
refresh:function(ui,ch,rz){
if(!ui.display)return false;
var it=this,ns=ui.nodes,v,i,x,u,xp={};
if(rz||ch[v='calendarSource']){
x=xp[v]=ui.calendarSource;
if(ui.popup_itemEdit){
ui.popup_itemEdit[v]=x;
}};
if(rz||ch.timeStart)xp.timeStart=ui.timeStart;
if(rz||ch.timeEnd)xp.timeEnd=ui.timeEnd;
if(rz||ch.pageActive){
v=ui.pageActive;
if(ui.page&&ui.page.ev_close){
ui.page.ev_close()};
if(v.nodeType<0&&typeof v.set=='function'){
v.set({
calendarSource:ui.calendarSource,
timeStart:ui.timeStart
},false)};
if(ui.page)ui.removeChild(ui.page);
ui.pageName=(ui.page=v).pageName;
ui.appendChild(v)};
for(i in xp){
x=ui.page;
if(x&&typeof x.set=='function')x.set(xp);
break;
};
ui.initEvent('change',ch,rz)}});
elems.rc_toolbar=rr.new_class({
parent:rr.class_baseElement,
interface:true,
constructor:function(_,pr,cfg){
this.interface.parent.call(this,_,pr,cfg);
this.interface.factory(this,_,pr);
if(this.node)this.node.rocketui=this;
this.set(pr)},
factory:function(ui,_,pr){
ui.nodes=new tmpl.rc_toolbar(_,pr);
ui.node=ui.nodes.node;
this.init_event(ui)},
init_event:function(ui){
ui.gEvent.add(ui.nodes.tb_top,'click',function(e){
return rr.breakEvent(e)});
ui.gEvent.add(ui.nodes.tb_top,'mousedown',function(e){
var n=rr.css_parent('rc-toolbar-b',e.target||e.srcElement,true);
if(n&&n.cm_name){
ui.initEvent('swith mode',n.cm_name);
var s=ui.nodes.snm+"-b--active";
rr.css(n).add(s);
rr.css(n).near(s,function(x){
this.remove(s)}).add(s)}})
ui.gEvent.add(ui.nodes.tb_top,'click',function(e){
rr.breakEvent(e)})}});


/* URL: /js/calendar/tmpl_areaday.src.js */

tmpl.rc_areaday=function(_,pr){
var ns=this,nc,l,i;
ns.sname="rc-areaday";
ns.area=_('div.rc-areaday',
_('div.box'
,ns.rows=_('div.rows')
,_('div.rc-areaday-strut')
,ns.timeResizer=_('div.rc-areaday-resizer')
,_('div.clbox',
_('table.columns',{
cellSpacing:0,
cellPadding:0,
border:0,
add:[
_('tbody',
ns.cbox=_('tr',[
_('th')
]))
]
}))));
ns.timeText=[];
for(i=0;i<24;i++){
if(rr.Opera)_('div.r--end',{parent:ns.rows});
_(ns.rows,_('div.rh'+(!i?' rh--fr':''),
_('span',
ns.timeText[ns.timeText.length]=
_.text(i+":00"))));
_(ns.rows,_('div',{
className:'r'+(!i?' r--fr':i==23?' r--ls':'')}))};
if(rr.Opera||rr.IE<7)_('div.r--end',{parent:ns.rows});
ns.cbox._r_element='rc_day_box';
};
tmpl.rc_areaday_column=function(_,pr){
var ns=this;
ns.node=_('td.c',
ns.box=_('div.cbox cbox--dn',rr.IE<7&&' '),
ns.boxUp=_('div.cbox cbox--up',rr.IE<7&&' '))};
tmpl.rc_areaday_item=function(_,pr){
var ns=this;
ns.sname='rc-day-item';
ns.node=_('div.rc-day-item',{
style:"width:100%;display:none;",
add:[
ns.resizeA=_('div.rzA'),
_('div.u xc'),
ns.caption=_('div.c xc',
_('div.b bx',
ns.box=_('span',
ns.box_text=_.text("")))),
_('div.d xc'),
ns.resizeB=_('div.rzB')
]
})};
tmpl.rc_range_c=function(_,pr){
var ns=this;
this.sname='rc-range-'+(pr.type_week?'wk':'c');
ns.box=_('div.bx',
_('span.add',
ns.button=_('a',{
href:'js://new',
title:"Создать новое событие",
text:"Создать"
})),
_('span.info',
ns.text=_.text('')));
ns.node=_('div.'+this.sname,
rr.IE<7?_('div.ie',ns.box):ns.box
)};
tmpl.rc_range=function(_,pr){
var ns=this;
ns.sname="rc-range";
ns.node=_('div.rc-range',
ns.box=_('div.rc-range-box'))};


/* URL: /js/calendar/ui_areaday.src.js */

elems.rc_areaday=rr.new_class({
_name:'areaday',
parent:rr.class_baseElement,
interface:true,
constructor:function(_,pr,cfg){
if(!this.interface.__init_){
rr.extend(this.interface,rr.expansion_event).__init_=true;
};
this.interface.parent.call(this,_,pr,cfg);
this.interface.factory(this,_,pr,cfg);
if(this.node)this.node.rocketui=this;
this.set(pr)},
factory:function(ui,_,pr){
this.addEvent(rr.listeners_drag);
this.addEvent(this.listeners_events);
var t=this;
ui.master=_.clone();
ui.cbox=[];
ui.nodes=new tmpl.rc_areaday(_,{ui:ui});
ui.node=ui.nodes.area;
if(rr.IE)ui.node.onselectstart=rr.breakEvent;
ui.range_c=new tmpl.rc_range_c(_,false);
t.init_events(ui)},
prototype:{
z_resize:true,
height:'auto',
columns:1,
panelLeft:true,
timeStart:0,
dtime:5,
boxHeight:600,
on_connect:function(){
var ui=this;
if(ui.display=ui.is_connected&&!ui.hide&&!ui._hide){
ui.refresh(true)}}},
init:function(ui){
ui.gEvent.add(ui.box,'mousedown',function(e){
})},
init_events:function(ui){
ui.gEvent.add(ui.nodes.timeResizer,'mousedown',function(e){
var bxh=ui.boxHeight,sdt=ui.dtime;
rr.css_add('rc-areaday-resizerAB--darg',ui.nodes.timeResizerA);
rr.css_add('rc-areaday-resizerAB--darg',ui.nodes.timeResizerB);
rr.css_add('rc-areaday-resizer--darg',ui.nodes.timeResizer);
var drag=new rr.ui.class_drag({
move_dragstart:function(){
},
move_dragend:function(){
rr.css_remove('rc-areaday-resizerAB--darg',ui.nodes.timeResizerA);
rr.css_remove('rc-areaday-resizerAB--darg',ui.nodes.timeResizerB);
rr.css_remove('rc-areaday-resizer--darg',ui.nodes.timeResizer)},
move:function(od){
var dX=od.stX-od.psX,
dY=od.stY-od.psY,
x=sdt+Math.round(dY/bxh*24);
if(x>11){
x=11;
}else if(x<0)x=0;
ui.set('dtime',x)}});
if(typeof bxh=='number')
drag.initEvent('startDrag',{
autoScroll:false,
event:e
});
return rr.breakEvent(e)});
ui.gEvent.add(ui.node,'dblclick',function(e){
var n=e.srcElement||e.target,it=ui.interface,sHide;
while(n){
switch(n._r_element){
case'rc_day_item':return it.ev_dblclick_item(e,ui,n.rocketui)};
n=n.parentNode;
}});
ui.gEvent.add(ui.node,'mousedown',function(e){
var n=e.srcElement||e.target,it=ui.interface,sHide,x,xe;
if(e.returnValue===false||(rr.IE?e.button:e.which)!=(rr.IE>8?0:1))return;
while(n){
switch(n._r_element){
case'rc_day_box':return it.ev_start_range(e,ui);
case'rc_day_item':return it.ev_mousedown_item(e,ui,n.rocketui);
case'rc_day_item_rzA':xe='ev_mousedown_item_rzA';
case'rc_day_item_rzB':xe=xe||'ev_mousedown_item_rzB';
while(n=n.parentNode)
if(n._r_element=='rc_day_item')
return it[xe](e,ui,n.rocketui);
return;
};
n=n.parentNode;
}});
ui.gEvent.add(ui.range_c.button,'mousedown',rr.breakEvent);
ui.gEvent.add(ui.range_c.button,'blur',function(e){
if(ui.selection_mode=='add'){
ui.interface.ev_selection_blur(ui);
ui.initEvent('selection_blur')}});
ui.gEvent.add(ui.range_c.button,'click',function(e){
rr.breakEvent(e);
var A=ui.selectionStart,B=ui.selectionEnd;
ui.set({
selectionStart:null,
selectionEnd:null,
selection_mode:'text'
});
ui.initEvent('user_create_item',{
item:{
start:A,
end:B
}})})},
init_events_data:function(ui,v){
var t=this;
ui.gEvent.add(v,'change',function(e){
t.ev_data_change(ui,e)},v);
ui.gEvent.add(v,'userCreateItem',function(e){
t.ev_data_userCreateItem(ui,e)},v);
v=null;
},
set:function(ui,pr,v,pv){
var it=this,
tv=typeof v,
x,und;
switch(pr){
case'dtime':
if(typeof v!='number'||v>11||v<0)return;
break;
case'timeStart':if(typeof v!=='number')return;
break;
case'hide':v=!!v;
if(pv===v)return;
ui.node.style.display=v?'none':'';
ui.display=ui._display&&!v;
break;
case'calendarSource':
if(v===pv||v&&tv!='object')return;
if(pv)ui.gEvent.removeAll(ui.calendarSource);
if(v)it.init_events_data(ui,v);
break;
case'panelLeft':v=!!v;
if(pv===v)return
break;
case'selectionStart':case'selectionEnd':
if(tv!='number'&&v!==null)return;
break;
case'activeItem':if(!v)v=null;
break;
case'selection_dn':
case'selection_stop':v=!!v;
break;
case'selection_mode':
if(!v){v=null}
else switch(v){
case'add':case'text':break;
default:return;
};
break;
case'columns':
if(typeof it[x='s_'+pr]!='function')return;
v=it[x](ui,v,pv);
break;
default:return;
};
return v;
},
s_columns:function(ui,v,pv){
if(typeof v!='number'||v>7||v<1||ui.cbox.length==v)return;
var t=this,vs=ui;
ui.columns=v;
if(v>ui.cbox.length){
while(ui.cbox.length<v){
t.nodes_add_column(ui)};
ui._changes.calendarSource=true;
}else{
while(ui.cbox.length>v){
t.nodes_remove_column(ui)}};
if(rr.IE===8){
var w=(100/ui.cbox.length)+"%",i=0,x;
while(x=ui.cbox[i++]){
x.node.style.width=w;
}};
return v;
},
nodes_add_column:function(ui){
var _=ui.master,n;
n=_('tmpl:rc_areaday_column',{
parent:ui.nodes.cbox
});
n.items=[];
ui.cbox[ui.cbox.length]=n;
},
nodes_remove_column:function(ui){
var n=ui.cbox.pop();
if(!n)return;
rr.removeNode(n.node);
rr.each(n.items,function(x){
x.setfree()})},
refresh:function(ui,ch,rz){
if(!ui.display)return false;
var it=ui.interface,nodes=ui.nodes,v,i;
if(ui.z_resize)ui.z_resize=!(rz=true);
if(rz||ch.panelLeft){
rr.css_set('rc-areaday--numbpanel',ui.node,ui.panelLeft)};
if(rz){
ui.boxHeight=nodes.rows.scrollHeight;
};
if(rz||ch.dtime){
v=ui.dtime||0;
nodes.timeResizer.style.top=Math.round((12-v)*(ui.boxHeight/24))+"px";
rr.each(ui.nodes.timeText,function(n,i){
var x=i+v;
if(x>23)x-=24;
n.data=x+":00";
})};
if(v=rz||ch.calendarSource||ch.dtime||ch.timeStart){
i=ui.cbox.length;
while(i--){
it.recolumn(ui,i)}}
else{
if(ch.activeItem){
var i=ui.cbox.length,i2,x;
while(i--)if(v=ui.cbox[i]){
v=v.items;
for(i2=v.length;i2--;){
if(x=v[i2]){
x.set('active',ui.activeItem==x.item.id)}}}};
v=null;
};
if(v||ch.selectionStart||ch.selectionEnd||ch.selection_dn){
it.re_selection(ui)};
if(ch[v='selection_mode']){
var x=ui.range_c;
rr.css_set_(x.sname+'--m-',x.node);
if(!ui[v]){
if(x.parent)rr.removeNode(x.node);
x.parent=null;
}
else rr.css_add(x.sname+'--m-'+ui[v],x.node)};
ui.initEvent_('change',[ch])},
re_selection:function(ui){
if(!ui.cbox)return;
var A=ui.selectionStart,B=ui.selectionEnd,i=ui.cbox.length,co,x;
if(!ui.selection_mode||!A||!B){
if(x=ui.range_c){
if(x.parent){
rr.removeNode(x.node);
if(rr.Gecko)x.parent.offsetParent;
};
x.parent=null;
}};
if(!A||!B){
while(i--){
co=ui.cbox[i];
if(x=co.eSelect){
if(x.display){
x.set('hide',true)}}};
return;
};
var _=ui.master
,h=ui.boxHeight
,st=ui.timeStart
,_t,_h,prm
,xa,j,n,sA,sB,ts,te;
if(typeof ui.dtime=='number'){
st+=60*ui.dtime;
};
while(i--){
co=ui.cbox[i];
ts=st+i*1440;
te=ts+1440;
if(B<=ts||A>=te){
if(co.eSelect){
co.eSelect.set('hide',true)};
continue;
};
x=co.eSelect;
sA=A<ts?ts:A
sB=B>te?te:B;
_t=(sA-ts)*h/1440;
_h=(sB-sA)*h/1440;
prm={
hide:false,
height:_h,
top:_t,
flagA:A<ts,
flagB:B>te,
width:100
};
if(!x){
co.eSelect=x=_.tmpl('ui:rc_range',prm);
ui.appendChild(co.eSelect,co.boxUp)}
else{
x.set(prm)};
if(!xa)xa=x;
};
if(x&&ui.selection_mode){
if(ui.selection_dn)x=xa;
xa=ui.range_c;
rr.css_set(xa.sname+'--dn',xa.node,ui.selection_dn);
A=rcalendar.date_tm(A,0,0,0,0,1,1);
B=rcalendar.date_tm(B,0,0,0,0,1,1);
A.m_=A.m<10?'0'+A.m:A.m;
B.m_=B.m<10?'0'+B.m:B.m;
var ntext=(A.h+":"+A.m_)+" - "+(B.h+":"+B.m_);
if(xa._ptext!=ntext){
xa.text.data=xa._ptext=ntext;
};
if(xa.parent!==x.node){
x.node.appendChild(xa.node);
xa.parent=x.node;
}}},
ev_data_change:function(ui,e){
var it=ui.interface;
ui._changes.calendarSource=true;
ui.refresh()},
ev_data_userCreateItem:function(ui,e){
ui.set({
activeItem:e.id,
selectionStart:null,
selectionEnd:null
})},
recolumn:function(ui,n){
n=parseInt(n);
var t=this,
h=ui.boxHeight,
i=0,ix,cr,
oc,st,a,p,n,x;
oc=ui.cbox[n];
st=ui.timeStart;
if(typeof ui.dtime=='number'){
st+=60*ui.dtime;
};
if(n)st+=n*1440;
a=ui.calendarSource&&ui.calendarSource.get_range(st,st+1439,{day:true});
if(!a||!a[0]){
i=0;
n=oc.items;
while(x=n[i++]){
x.setfree()};
n.length=0;
oc=null;
return;
};
t.d_regroup(a);
var ns={};
while(p=a[i++]){
ns['x-'+p.item.id]=p;
};
n=oc.items;
i=0;ix=0;
while(x=n[i]){
if(p=ns['x-'+x.item.id]){
p.active=true;
if(i!==ix)n[ix]=x;
ix++;
x.set(
t.reset_item(ui,p,st))}
else{
x.setfree()};
i++;
};
oc.items.length=ix;
i=0;
var _=ui.master;
while(p=a[i++]){
if(!p.active){
x=_.tmpl('ui:rc_areaday_item',false);
oc.items.push(x);
x.item=p.item;
if(!p.item.id)alert(p.item.id)
x.set(
t.reset_item(ui,p,st));
ui.appendChild(x,oc.box)}};
oc=ns=null;
},
reset_item:function(ui,p,ts){
var day=1440,
h=ui.boxHeight,
item=p.item,
te=ts+day,
t2h=(h||960)/day,
i,l,x,y,w,h;
y=item.start-ts;
if(y<0)y=0;
h=(item.end>te?te:item.end)-(y?item.start:ts);
h=Math.round(t2h*h);
y=Math.round(t2h*y);
l=p.gmax||1;
if(p.glast&&p.gmax>1&&p.gw>1){
x=p.gpos?Math.floor(p.gpos*(100/l)+(10/l)):0;
}else{
x=p.gpos?Math.floor(p.gpos*(100/l)-(20/l)):0;
};
w=p.glast?100-x:Math.floor(p.gw*(100/l)+(50/l));
return{
top:y,
flagA:item.start<ts,
flagB:item.end>te,
active:item.id==ui.activeItem,
text:item.text||item.text===0?item.text:'undefined',
left:x,
width:w,
height:h,
zIndex:p.index
}},
d_regroup:function(a,filter){
var t=this,
ig=0,
ir=0,
cg=1,
rg=[],
max=1,
p,p2,i,i2,i3,l,l2,freeRow,x;
for(i=0,ig=0;p=a[i];i++){
i2=freeRow=rg.length;
p.index=i;
while(i2--){
if(p2=rg[i2]){
if(p2.item.end<=p.item.start){
rg[i2]=null;
freeRow=i2;
}}else freeRow=i2;
};
if(freeRow<1&&i>0){
l2=rg.length;
while(l2&&!rg[--l2]);
if(!l2){
rg.length=0;
t.d_break_group(a,ig,i,max);
max=1;
ig=i;
}};
p.gpos=freeRow;
if(max<=freeRow){
max=freeRow+1;
};
rg[freeRow]=p;
};
t.d_break_group(a,ig,i,max)},
d_break_group:function(a,istart,iend,max){
var i=istart+0,i2,
mp=max-1,
p,p2;
max-=0;
do{
p=a[i];
p.gmax=max;
p.glast=true;
if(p.gpos<mp){
i2=istart;
p.gw=max;
do{
p2=a[i2];
if(p2&&p2!=p&&p2.item.end>=p.item.start&&p2.item.start<p.item.end){
if(p2.gpos>p.gpos){
p.gw=Math.min(p.gw,p2.gpos-p.gpos)||1;
p.glast=false;
}}}while(++i2<iend)}else{
p.gw=max-p.gpos;
}}while(++i<iend)},
hideAllItemId:function(p,ui,fg){
var id=ui.item.id,
a=p.cbox,a2,
i=a.length,i2,x;
fg=!!fg;
for(;i--;)if(a2=a[i]){
if(a2=a2.items)
for(i2=a2.length;i2--;)if(x=a2[i2]){
if(x.item.id==ui.item.id){
x.set('hide',fg)}}}},
listeners_events:{
item_move_dragstart:function(e,prm){
prm.column_start=Math.floor((e.stX-prm.box_left)/prm.column_width);
var p=prm.ui.parent;
this.hideAllItemId(p,prm.ui,true);
p.set({
selectionStart:prm.A,
selectionEnd:prm.B
})},
item_move_dragend:function(e,prm){
var ui=prm.ui,p=ui.parent,x=ui.item;
if(!p.selectionStart||!p.selectionEnd){
return;
};
x.start=p.selectionStart;
x.end=p.selectionEnd;
p.set({
selection_mode:false,
selectionStart:null,
selectionEnd:null
});
p.calendarSource.set(x,true);
p.calendarSource.ev_change();
this.hideAllItemId(p,ui,false)},
item_move:function(e,prm){
var ui=prm.ui,
dX=e.stX-e.psX,
dY=e.stY-e.psY,
p=ui.parent,
xc=e.psX-prm.box_left,
dS=e.ctrlKey?10:30,
dl,A,B,x;
A=prm.A;
B=prm.B;
xc=xc<0&&xc>-30?0:xc/prm.column_width;
if(xc>prm.columns-1)xc=prm.columns-1;
if(xc>=0){
dl=1440*(dY/ui.parent.boxHeight-Math.floor(xc-prm.column_start));
dl=Math.round(dl/dS)*dS;
A-=dl;
B-=dl;
};
p.set({
selectionStart:A,
selectionEnd:B
});
if(false)
if(p.selectionStart!==A||p.selectionEnd!==B){
p.selectionStart=A;
p.selectionEnd=B;
this.re_selection(p);
p.initEvent('range_change',{
start:A,
end:B
})}},
item_resize_dragstart:function(e,prm){
prm.column_start=Math.floor((e.stX-prm.box_left)/prm.column_width);
var p=prm.ui.parent,A=prm.A,B=prm.B;
if(A>B){
A=B;
B=prm.A;
};
this.hideAllItemId(prm.ui.parent,prm.ui,true);
prm.ui.parent.set({
selectionStart:A,
selectionEnd:B
})},
item_resize_dragend:function(e,prm){
var ui=prm.ui,p=ui.parent,x=ui.item;
this.hideAllItemId(p,ui,false);
if(!p||!p.selectionStart||!p.selectionEnd)return;
x.start=p.selectionStart;
x.end=p.selectionEnd;
p.calendarSource.set(x,true);
ui._changes.calendarSource=true;
ui.parent.set({
selectionStart:null,
selectionEnd:null
});
p.calendarSource.ev_change()},
item_resize:function(e,prm){
var ui=prm.ui,
dX=e.stX-e.psX,
dY=e.stY-e.psY,
xc=(e.psX-prm.box_left)/prm.column_width,
p=ui.parent,
dS=e.ctrlKey?10:30,
A,B,dl;
A=prm.A;
B=prm.B;
if(xc>=0){
dl=1440*(dY/ui.parent.boxHeight-Math.floor(xc-prm.column_start));
B-=dl;
B=Math.round(B/dS)*dS;
p.selection_dn=A<B;
if(A>B){
if((A-B)<dS){
B=A-dS;
}
else{
B=Math.max(B,(p.timeStart+p.dtime*60)+1440*Math.floor(xc))};
A=B;
B=prm.A;
}
else{
if((B-A)<dS){
B=A+dS;
}
else{
B=Math.min(B,(p.timeStart+p.dtime*60)+1440*Math.floor(xc)+1440)}}}else{
if(A>B){
A=B;
B=prm.A;
}};
if(p.selectionStart!==A||p.selectionEnd!==B){
p.selectionStart=A;
p.selectionEnd=B;
this.re_selection(p)}},
range_new:function(e,prm){
prm.select_ok=true;
var it=this,
ui=prm.target,
dX=e.stX-e.psX,
dY=e.stY-e.psY,
xc=(e.psX-prm.box_left)/prm.column_width,
dS=prm.dS||e.ctrlKey?10:30,
A,B,dl;
if(xc<0)xc=0;
dl=1440*(dY/ui.boxHeight-Math.floor(xc-prm.column_start));
ui.selection_dn=dl<0;
if(dl<0){
A=Math.floor(prm.S/dS)*dS;
B=Math.round((prm.S-dl)/dS)*dS;
B=Math.min(B,(ui.timeStart+ui.dtime*60)+1440*Math.floor(xc)+1440);
if(A==B)B+=dS;
}
else{
A=Math.round((prm.S-dl)/dS)*dS;
B=Math.ceil(prm.S/dS)*dS;
A=Math.max(A,(ui.timeStart+ui.dtime*60)+1440*Math.floor(xc));
if(A==B)A-=dS;
};
ui.set({
selectionStart:A,
selectionEnd:B
})},
range_new_dragstart:function(e,prm){
if(prm.timmerNew)clearTimeout(prm.timmerNew);
prm.timmerNew=false;
},
range_new_dragend:function(e,prm){
},
range_new_end:function(e,prm){
if(prm.timmerNew)clearTimeout(prm.timmerNew);
if(!prm.select_ok)return;
if(prm.timmerNew)prm._set_def();
var ui=prm.target,a=ui.cbox,i=a.length,x;
if(x=ui.range_c.button){
ui.set('selection_mode','add');
setTimeout(function(){
if(x.offsetParent)x.focus()},30)}}},
ev_start_range:function(e,ui){
rr.breakEvent(e);
ui.set('activeItem',null);
if(!ui.columns||!ui.cbox[0])return;
var tg=e.srcElement||e.target,
dx=ui.cbox[0].node.offsetLeft,
prm,x,i=ui.cbox.length;
x=rr.css_parent('c columns',e.srcElement||e.target,true);
if(!x||rr.css_return=="columns")return;
for(i=ui.cbox.length;i--&&ui.cbox[i].node!=x;);
if(i<0)return;
if(x=ui.node.ownerDocument.activeElement){
if(!rr.IE||x.nodeName!="BODY")x.blur()};
var sHide=rr.css_parent('rc-range',e.srcElement||e.target,true),
dS=30,S;
S=(e.clientY-rr.getRect(ui.cbox[0].box).top)/ui.boxHeight*1440;
var A=Math.floor(Math.floor(S)/dS)*30,B;
if(A<0){A=0}else if(A>1380)A=1380;
A=ui.timeStart+ui.dtime*60+i*1440+A;
B=A+60;
prm={
target:ui,
select_ok:!sHide,
S:ui.timeStart+ui.dtime*60+i*1440+S,
box_width:ui.nodes.rows.parentNode.clientWidth-dx,
box_left:rr.getAbsolutePos(ui.nodes.cbox).x+dx,
column_start:i,
columns:ui.columns
};
ui.set({
selectionStart:null,
selectionEnd:null,
selection_dn:false,
selection_mode:'text'
});
prm._set_def=function(){
prm.select_ok=true;
ui.set({
selectionStart:A,
selectionEnd:B
})};
if(!sHide){
prm.timmerNew=setTimeout(prm._set_def,120)};
prm.column_width=prm.box_width/prm.columns;
ui.interface.initEvent('startDrag',{
name:'range_new',
cursor:'ns-resize',
deltaDrag:sHide?5:2,
overDrag:false,
clearRange:true,
autoScroll:false,
mouseEvent:e
},prm)},
ev_dblclick_item:function(e,ui,x){
ui.initEvent('item_click',{
item:x.item
})},
ev_mousedown_item:function(e,ui,x){
rr.breakEvent(e);
var it=ui.interface,
prm={
A:x.item.start,
B:x.item.end,
ui:x
},
dx=ui.cbox[0].node.offsetLeft;
prm.box_width=ui.nodes.rows.parentNode.clientWidth-dx;
prm.box_left=rr.getAbsolutePos(ui.nodes.cbox,true).x+dx;
prm.columns=ui.columns;
prm.column_width=prm.box_width/prm.columns;
ui.set({
activeItem:x.item.id,
selection_mode:'text',
selection_dn:false,
selectionStart:null,
selectionEnd:null
});
it.initEvent('startDrag',{
name:'item_move',
cursor:'move',
clearRange:true,
deltaDrag:5,
autoScroll:false,
mouseEvent:e
},prm)},
ev_mousedown_item_rzA:function(e,ui,x){
this.ev_mousedown_item_rzX({
top:true,
mouseEvent:e,
item:x.item,
itemUI:x
},ui)},
ev_mousedown_item_rzB:function(e,ui,x){
this.ev_mousedown_item_rzX({
top:false,
mouseEvent:e,
item:x.item,
itemUI:x
},ui)},
ev_mousedown_item_rzX:function(e,ui){
rr.breakEvent(e.mouseEvent);
var it=ui.interface,prm={
A:!e.top?e.item.start:e.item.end,
B:e.top?e.item.start:e.item.end,
ui:e.itemUI
},
dx=ui.cbox[0].node.offsetLeft;
prm.box_width=ui.nodes.rows.parentNode.clientWidth-dx;
prm.box_left=rr.getAbsolutePos(ui.nodes.cbox,true).x+dx;
prm.columns=ui.columns;
prm.column_width=prm.box_width/prm.columns;
ui.set({
activeItem:e.item.id,
selection_mode:'text',
selection_dn:!e.top
});
it.initEvent('startDrag',{
name:'item_resize',
cursor:'ns-resize',
clearRange:true,
autoScroll:false,
mouseEvent:e.mouseEvent
},prm)},
ev_selection_blur:function(ui){
var a='selectionStart',b='selectionEnd',u;
if(ui[a]||ui[b]){
ui[a]=ui[b]=u;
setTimeout(function(){
if(!ui[a]&&!ui[b]){
var x={};
x[a]=x[b]=null;
ui.set(x)}},50)}}});
elems.rc_areaday_item=rr.new_class({
_name:'rc_day_item',
parent:rr.class_baseElement,
interface:true,
constructor:function(_,pr,cfg){
this.interface.parent.call(this,_,pr,cfg);
this.interface.factory(this,_,pr,cfg);
if(this.node)this.node.rocketui=this;
if(pr)this.set(pr)},
factory:function(ui,_,pr){
ui.nodes=new tmpl.rc_areaday_item(_,false);
ui.node=ui.nodes.node;
ui.box=ui.nodes.box;
ui.nodes.node._r_element='rc_day_item';
ui.nodes.resizeA._r_element='rc_day_item_rzA';
ui.nodes.resizeB._r_element='rc_day_item_rzB';
},
prototype:{
nodeType:-1,
setfree:function(){
this.parent.removeChild(this);
this.node.style.display='none';
return this;
}},
set:function(ui,pr,v,pv){
var it=this,
tv=typeof v,
x,und;
switch(pr){
case'hide':
if(pv===(v=!!v))return;
if(v)ui.node.style.display='none';
ui.display=ui.is_connected&&!v;
break;
case'color':if(tv!='number'||v<0||v>15)return;
break
case'height':
case'top':
case'left':
case'zIndex':
case'width':
if(v===''){v=null}else if(tv!='number')return
break;
case'text':
if(tv!='string'&&tv!='number')return;
break;
case'flagA':
case'flagB':
case'active':
if(pv===(v=!!v))return;
break;
default:return;
};
return v;
},
refresh:function(ui,ch,rz){
var it=ui.interface,nodes=ui.nodes,v,i,s_node;
if(ui.z_resize)ui.z_resize=!(rz=true);
if(rz||ch.flagA||ch.flagB||ch.color||ch.active){
i={className:ui.node.className};
i.i=i.className;
if(rz||ch.flagA||ch.flagB){
rr.css_set(nodes.sname+'--AB',i,ui.flagA&&ui.flagB);
rr.css_set(nodes.sname+"--A",i,ui.flagA&&!ui.flagB);
rr.css_set(nodes.sname+"--B",i,ui.flagB&&!ui.flagA)};
if(rz||ch.color)rr.css_set_("rc-x--color-",i,ui.color||'0');
if(rz||ch.active)rr.css_set(nodes.sname+'--active',i,ui.active);
if(i.className!=i.i){
ui.node.className=i.className;
}};
if(rz||ch.active){
rr.css_set('c--active',nodes.caption,ui.active)};
s_node=ui.node.style;
if(rz||ch.height){
v=Math.max(0,ui.height-10);
nodes.caption.style.height=v+"px";
};
if(rz||ch.top){
v=ui.top;
s_node.top=v?v+"px":'';
};
if(rz||ch.left){
v=ui.left;
s_node.left=v?v+"%":'';
};
if(rz||ch.width){
v=ui.width;
s_node.width=(v<0||v===null||v>=100)?'':v+"%";
};
if(rz||ch.zIndex){
v=ui.zIndex;
s_node.zIndex=v?v:'';
};
if(rz||ch.text){
nodes.box_text.data=ui.text;
};
if(rz||ch.hide){
s_node.display=ui.hide?'none':'';
}}});
elems.rc_range=rr.new_class({
_name:'rc_range',
parent:rr.class_baseElement,
interface:true,
constructor:function(_,pr,cfg){
this.interface.parent.call(this,_,pr,cfg);
this.interface.factory(this,_,pr,cfg);
if(this.node)this.node.rocketui=this;
this.set(pr)},
factory:function(ui,_,pr){
var t=this;
ui._changes={};
ui.nodes=new tmpl.rc_range(_,{ui:ui});
ui.node=ui.nodes.node;
ui.box=ui.nodes.box;
},
prototype:{
hide:true,
on_connect:function(){
var ui=this;
if(ui.display=ui.is_connected){
ui.refresh(true)}},
show:function(){
this.set('hide',false)},
focus:function(){
}},
set:function(ui,pr,v,pv){
var it=this,tv=typeof v,x,und;
switch(pr){
case'hide':
if(pv===(v=!!v))return;
if(v)ui.node.style.display='none';
break;
case'height':
if(typeof v!='number')return;
break;
case'top':
if(typeof v!='number')return;
break;
case'flagA':
case'flagB':
if(pv===(v=!!v))return;
break;
default:return;
};
return v;
},
refresh:function(ui,ch,rz){
if(ui.hide)return false;
var it=ui.interface,nodes=ui.nodes,v,i;
if(ui.z_resize)ui.z_resize=!(rz=true);
if(rz||ch.height){
v=ui.height-3;
if(v<1)v=1;
ui.box.style.height=v+"px";
};
if(rz||ch.flagA||ch.flagB){
v=ui.flagA&&ui.flagB?'AB':ui.flagA?'A':ui.flagB?'B':false;
rr.css_set_(nodes.sname+'-box--x-',ui.box,v);
rr.css_set_(nodes.sname+'--x-',ui.node,v)};
if(rz||ch.top){
v=ui.top;
ui.node.style.top=v&&v+"px";
};
if(rz||ch.hide){
if(!ui.hide)ui.node.style.display='';
}}});


/* URL: /js/calendar/tmpl_areaweek.src.js */

tmpl.rc_areaweek=function(_,pr){
var ns=this;
ns.sname='rc-areaweek';
ns.node=_('div.rc-areaweek rc-areaweek--h-auto',
_('div.bt',
ns._tbl=
_('table',{
cellSpacing:0,
cellPadding:0,
border:0,
add:_('tbody',
ns.head=_('tr'))})),
!(rr.IE<7)&&_('div.gr'),
ns.box=_('div.rc-areaweek-c',
ns.boxtop=_('div.rc-areaweek-ct')),
ns.rh=_('div.r rh'),
ns.range_node=_('div.'+ns.sname+'-range',{style:'display:none;'},
_('div.'+ns.sname+'-range-bx')));
ns.node._r_element='week';
ns.range_node._r_element='range';
};
tmpl.rc_areaweek_cell=function(_,pr){
var ns=this,nh;
ns.node=_('td',{
add:nh=_('div.h',[
_('span.n',ns.date=_.text("##")),
_('span.d',ns.day=_.text("%%"))
])});
ns.node.onclick=rr.nullFunction;
nh._r_element='weekDay_head';
};
tmpl.rc_areaweek_more=function(_,pr){
var ns=this;
ns.node=_('div.rc-areaweek-inf',
_('span.t',
_('span.n',ns.text=_.text(""))))};
tmpl.rc_areaweek_item=function(_,pr){
var ns=this;
ns.sname='rc-areaweek-item';
ns.node=_('div.'+ns.sname,[
ns.caption=_('div.c xc',
_('span.bx',
ns.text=_.text(""))),
_('div.clr xc'),
]);
ns.node._r_element='item';
ns.node.onclick=rr.nullFunction;
};


/* URL: /js/calendar/ui_areaweek.src.js */

elems.rc_areaweek=rr.new_class({
_name:'areaweek',
parent:rr.class_baseElement,
interface:true,
constructor:function(_,pr,cfg){
this.interface.parent.call(this,_,pr,cfg);
this.interface.factory(this,_,pr,cfg);
if(this.node)this.node.rocketui=this;
this.set(pr)},
factory:function(ui,_,pr){
ui.master=_.clone();
ui.items=[];
ui.rows=[];
ui._columns=[];
ui.nodes=_('tmpl:rc_areaweek');
ui.sname=ui.nodes.sname;
ui.node=ui.nodes.node;
ui.box=ui.nodes.box;
ui.set('columns'
,pr.columns||1
,false
)},
prototype:{
columns:0,
height:'auto',
on_connect:function(){
var ui=this;
if(ui.display=ui.is_connected&&!ui._hide){
ui.refresh(true)}}},
init_events_data:function(ui,v){
var t=this;
ui.gEvent.add(v,'change',function(e){
t.ev_data_change(ui,e)},v);
v=null;
},
set:function(ui,pr,v,pv){
var it=this,
tv=typeof v,
x,i,und;
switch(pr){
case'height':
x=tv=='number'
if(!x&&v!='auto')return;
ui.node.style.height=x?v+"px":'auto';
if(rr.Opera){
var s=ui.nodes._tbl.style;
s.bottom=!s.bottom?'0.001':''
}else
if(rr.IE<7){
ui.nodes._tbl.style.height=x?v+"px":'30em';
};
if(typeof pv!==tv){
rr.css_set(ui.sname+'--h-px',ui.node,x)};
if(x)it.re_maxRows(ui);
break;
case'timeStart':
if(!v||tv!=='number')return;
ui.timeStart=v;
break;
case'calendarSource':
if(v===pv||v&&tv!=='object')return;
if(pv)ui.gEvent.removeAll(ui.calendarSource);
if(v)it.init_events_data(ui,v);
break;
case'columns':
if(v<1||tv!=='number')return;
var l=ui._columns.length,i;
if(v>l){
while(v>l++)it.add_day(ui)}else
if(v<l){
while(v<l--){
x=ui._columns.pop();
ui.nodes.head.removeChild(x.cell);
if(x.inf_nd)x.inf_nd.parentNode.removeChild(x.inf_nd)}};
i=0;
l=ui._columns.length||1;
var w=100/l,s;
for(;x=ui._columns[i];i++){
if(x.inf_nd){
s=x.inf_nd.style;
s.width=w+"%";
if(i)s.left=(w*i)+"%";
};
if(rr.IE==8)x.cell.style.width=w+"%";
};
break;
case'selectionStart':
case'selectionEnd':
if(v!==null&&tv!='number')return;
break;
case'activeItem':
if(!v){
if(!pv)return;
v=null;
};
break;
default:x='s_'+pr;
if(typeof it[x]!='function')return;
v=it[x](ui,v,pv)};
return v;
},
add_day:function(ui){
var _=ui.master,a=ui._columns,l=a.length,ns;
a[l]=ns=_('tmpl:rc_areaweek_cell');
ui.nodes.head.appendChild(ns.cell=ns.node);
ns.pos=l;
},
create_inf:function(ui,ns,i){
var _=ui.master,n,w,l;
n=_('tmpl:rc_areaweek_more');
ui.nodes.node.appendChild(n.node);
ns.inf_tx=n.text;
ns.inf_nd=n=n.node;
w=100/(ui.columns||1);
n.style.display="none";
if(w)n.style.width=w+"%";
if(ns.pos)n.style.left=(ns.pos*w)+"%";
},
changeTimeStart:function(ui){
var da=rv.aweek_small,
a=ui._columns,
tm=ui.timeStart,
i=0,tm,x,ns;
while(ns=a[i++]){
x=rcalendar.date_tm(tm,0,0,0,1);
tm+=1440;
ns.date.data=x.date;
ns.day.data=da[x.day];
}},
re_maxRows:function(ui){
if(typeof ui.height=='number'){
var h=ui.height-ui._dheight,x=h/(ui._rheight||10),n;
ui.maxrow2=Math.max(0,Math.floor(x-0.7));
ui.maxrow=ui.maxrow2?Math.max(0,Math.floor(x)):0;
while(ui.rows.length>ui.maxrow){
rr.removeNode(ui.rows.pop());
n=true;
}}else ui.maxrow=0;
},
refresh:function(ui,ch,rz){
if(!ui.display||ui.pause)return false;
var it=this,nodes=ui.nodes,v,i;
if(ui.z_resize)ui.z_resize=!(rz=true);
if(typeof ui.timeStart!='number'){
ui.timeStart=0;
};
if(ui.calendarSource&&(rz||!ui._rheight)){
v=nodes.rh.offsetHeight;
if(ui._rheight!==v){
if(ui._rheight=v){
ui._dheight=nodes.boxtop.offsetTop;
}}};
if(v=rz||ch.timeStart||ch.columns){
ui.timeEnd=ui.timeStart+ui.columns*1440;
it.changeTimeStart(ui)};
if(rz||ui.items&&ui.items.length||ui.calendarSource)
if(rz||ch.height||ch.calendarSource||v||ch.activeItem){
if(rr.IE<8&&typeof ui.height=='number'&&(!ui.items||!ui.items.length)){
if(!ui._tm_refresh)
ui._tm_refresh=setTimeout(function(){
ui._tm_refresh=false;
it.re_maxRows(ui);
it._refresh(ui)},0);
return;
}else{
clearTimeout(ui._tm_refresh);
ui._tm_refresh=null;
};
it.re_maxRows(ui);
it._refresh(ui)};
if(rz||v||ch.selectionStart||ch.selectionEnd||ch.columns){
it.re_selection(ui)}},
re_selection:function(ui){
var A=ui.selectionStart,B=ui.selectionEnd,ts=ui.timeStart
,s=ui.nodes.range_node.style
,te;
if(!A||!B||ts>=B||(te=ts+1440*ui.columns)<=A){
if(ui.selection_show)s.display='none';
ui.selection_show=false;
return;
};
if(A<ts)A=ts;
if(B>te)B=te;
var xS=Math.floor((A-ts)/1440),xE=Math.floor((B-ts-1)/1440),x;
if(rr.IE<7){
s.width=Math.min(100,(xE-xS+1)*100/ui.columns)+"%";
}else{
xE=(xE+1)*100/ui.columns;
s.right=(xE>100?0:100-xE)+"%";
};
xS=xS*100/ui.columns;
s.left=xS+"%";
if(!ui.selection_show){
ui.selection_show=true;
s.display='';
}},
ev_data_change:function(ui,e){
var it=ui.interface,ts=ui.timeStart,te,x;
if(!ts||!ui.columns)return;
te=ts+ui.columns*1440;
it._refresh(ui)},
_refresh:function(ui){
var t=this,
st=ui.timeStart,
_=ui.master,
a,i=0,i2,ix,cr,n,n2,x,p;
a=t.getlocal(ui);
if(!a||!a[0]){
n=ui.items;
while(p=n[i++]){
t.setfree(ui,p)};
n.length=0;
a=ui.rows;
while(a.length){
if(p=a.pop())rr.removeNode(p)};
a=ui._columns;
for(i=0;p=a[i];i++){
if(p.inf_nd)p.inf_nd.style.display='none';
p.morerows=0;
};
return;
};
var ns={},cItems=[];
while(p=a[i++]){
ns[p.item.id]=p;
i2=p.left;
while(i2<p.right){
cItems[i2]=(cItems[i2]||0)+1;
i2++;
}};
n=ui.items;
i=0;ix=0;
for(;x=n[i];i++){
p=ns[x.item.id];
if(p){
r=this.get_row(ui,p.gpos);
if(!r){
t.setfree(ui,x);
continue;
};
if(i!==ix)n[ix]=x;
ix++;
p.active=true;
r=this.get_row(ui,p.gpos);
if(r&&r!=x.node.parentNode){
r.appendChild(x.node)};
x.set(t.reset_item(ui,p))}
else{
t.setfree(ui,x)}};
n.length=ix;
i=0;
var r,right,mp=0,mxr=typeof ui.height=='number'?[]:null,mxr2=typeof ui.height=='number'?[]:null,cl;
while(p=a[i++]){
if(mp<p.gpos)mp=p.gpos;
if(mxr){
if(!ui.maxrow||p.gpos>(ui.maxrow-1)){
i2=p.left;
while(p.right>i2){
mxr[i2]=(mxr[i2]||0)+1;
i2++;
}};
if(ui.maxrow&&p.gpos>(ui.maxrow2-1)){
i2=p.left;
while(p.right>i2){
mxr2[i2]=(mxr2[i2]||0)+1;
i2++;
}}};
if(!p.active){
r=this.get_row(ui,p.gpos);
if(!r)continue;
x=ui.parent
x=x&&x.cahe_item;
if(x=x&&x.pop()){
x.set(t.reset_item(ui,p))}
else{
x=_('ui:rc_areaweek_item'
,t.reset_item(ui,p))}
r.appendChild(x.node);
x.parent=ui;
x.item=p.item;
ui.items[ui.items.length]=x;
}};
a=ui.rows;
if(!mp||mp<1)mp=0;
while(mp<a.length-1){
if(p=a.pop())rr.removeNode(p)};
a=ui._columns;
i=0;
while(p=a[i]){
n=mxr&&mxr[i]?(ui.maxrow?mxr2[i]:mxr[i])||0:0;
if(n!=p.morerows){
if(n){
if(!p.inf_nd){
t.create_inf(ui,p)};
if(!p.morerows){
p.inf_nd.style.display='';
};
p.inf_tx.data=n;
}else if(p.inf_nd){
p.inf_nd.style.display='none';
};
p.morerows=n;
};
i++;
};
ns=null;
},
setfree:function(ui,x){
x.setfree();
if(!ui.parent)return
var a=ui.parent.cahe_item,l;
if(a){
l=a.length;
if(l<100)a[l]=x;
}},
reset_item:function(ui,p){
var ts=ui.timeStart,
te=ui.timeEnd,
item=p.item,
tx,prm;
if(!p.dayType){
tx=rcalendar.date_tm(item.start,0,0,0,0,1,1);
tx=(tx.h<10?'0':'')+tx.h+':'+(tx.m<10?'0':'')+tx.m+'  '+item.text;
}else tx=item.text;
return{
hide:false,
left:(100*(p.left))/ui.columns,
right:rr.IE<7?null:(1-p.right/ui.columns)*100,
width:rr.IE<7?(p.width/ui.columns)*100:null,
active:item.id==ui.activeItem,
flagA:item.start<ts,
flagB:item.end>te,
flagDay:p.dayType,
flagD_longs:p.d_longs,
color:0,
text:tx
}},
reset_const:function(){
var t=this;
if(t.display=(t._display&&!t._hide)){
t.refresh(true)}},
get_row:function(ui,n){
var a=ui.rows,r,cr;
if(typeof ui.height=='number'&&n>(ui.maxrow-1))return;
while(!(r=a[n])){
a[a.length]=ui.master('div.r',{parent:ui.box})};
return r;
},
getlocal:function(ui){
if(!ui.calendarSource)return;
var a=ui.calendarSource.get(ui.timeStart,ui.timeStart-0.1+ui.columns*1440),i=0,p;
if(!a||!a[0])return;
var maxRight=ui.columns-1;
while(p=a[i++]){
p.left=Math.floor((p.item.start-ui.timeStart)/1440);
p.right=Math.floor((p.item.end-ui.timeStart-1)/1440);
p.dayType=(p.item.end-p.item.start)>=1440;
p.d_longs=!p.dayType&&p.left!=p.right;
if(p.left<0)p.left=0;
if(p.right<p.left)p.right=p.left;
if(p.right>maxRight)p.right=maxRight;
p.right++;
p.width=p.right-p.left;
};
a.sort(this.listsort);
this.regroup(a);
return a;
},
listsort:function(a,b,x,y){
if(a.dayType!=b.dayType)return a.dayType?-1:1;
x=a.item;
y=b.item;
a=x.start;
b=y.start;
if(a===b){
a=y.end;
b=x.end;
if(a===b){
a=x.id;
b=y.id;
}};
return a<b?-1:a>b?1:0;
},
regroup:function(a,filter){
var t=this,
r,i,i2,p,p2,free;
i=0;
while(p=a[i]){
free=i2=0;
while(i2<i){
p2=a[i2++];
if(p2.gpos!=free||p2.left>=p.right||p2.right<=p.left){
continue;
};
free++;
i2=0;
}
p.gpos=free;
i++;
}},
item_reset:function(ui,x,p,st,h){
}});
elems.rc_areaweek_item=rr.new_class({
_name:'item',
parent:rr.class_baseElement,
interface:true,
constructor:function(_,pr,cfg){
this.interface.parent.call(this,_,pr,cfg);
this.interface.factory(this,_,pr);
if(this.node)this.node.rocketui=this;
this.set(pr)},
factory:function(ui,_,pr){
var t=this
,ns=new tmpl.rc_areaweek_item(_,pr);
;
ui.interface=t;
ui.nodes=ns;
ui.node=ns.node;
ui.box=ns.box;
},
prototype:{
setfree:function(){
this.parent=null;
var pn=this.node.parentNode;
if(pn)pn.removeChild(this.node);
this.node.style.display='none';
this.display=false;
this.hide=true;
}},
set:function(ui,pr,v,pv){
var it=this,
tv=typeof v,
x,und;
switch(pr){
case'hide':
if(pv===(v=!!v))return;
if(v)ui.node.style.display='none';
ui.display=ui._display&&!v;
break;
case'left':
case'right':
case'width':
case'zIndex':
if(tv!=='number'){
if(v)return;
v=null;
};
break;
case'color':if(tv!='number'||v<0||v>15)return;
break
case'text':
if(tv!='string'&&tv!='number')return;
break;
case'flagA':
case'flagB':
case'flagMove':
case'flagDay':
case'flagD_longs':
case'active':
if(pv===(v=!!v))return;
break;
default:return;
};
return v;
},
refresh:function(ui,ch,rz){
var it=this,nodes=ui.nodes,v,i;
if(ui.z_resize)ui.z_resize=!(rz=true);
if(rz||ch.flagA||ch.flagB||ch.color||ch.flagDay||ch.flagD_longs){
i={className:ui.node.className};
i.i=i.className;
if(rz||ch.flagA||ch.flagB){
rr.css_set(nodes.sname+'--AB',i,ui.flagA&&ui.flagB);
rr.css_set(nodes.sname+"--A",i,ui.flagA&&!ui.flagB);
rr.css_set(nodes.sname+"--B",i,ui.flagB&&!ui.flagA)};
if(rz||ch.flagDay)rr.css_set(nodes.sname+'--f-day',i,!ui.flagDay);
if(rz||ch.flagD_longs)rr.css_set(nodes.sname+'--d1',i,!ui.flagD_longs);
if(rz||ch.color)rr.css_set_("rc-x--color-",i,ui.color||'0');
if(i.className!=i.i)ui.node.className=i.className;
};
if(rz||ch.active){
rr.css_set('c--active',nodes.caption,ui.active)};
i=ui.node.style;
if(rz||ch.width){
v=ui.width;
i.width=v!==null?v+"%":'';
};
if(rz||ch.left){
v=ui.left;
i.left=v!==null?v+"%":'';
};
if(rz||ch.right){
v=ui.right;
i.right=v!==null?v+"%":'';
};
if(rz||ch.text){
ui.nodes.text.data=String(ui.text)};
if(rz||ch.hide){
i.display=ui.hide?'none':'';
}}});


/* URL: /js/calendar/tmpl_areamonth.src.js */

rr.extend('rcalendar.ui._values_',{
aweek:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],
aweek_small:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
month:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
month_of:["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"],
month_small:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],
selection_add_b:"Создать",
selection_add_bt:"Создать новое событие",
selection_time:"%1:%2 - %3:%4",
sc_today:"Сегодня %s %s %s\u00A0года",
sc_date:"%s %s\u00A0г.",
today:"Сегодня"
});
tmpl.rc_areamonth=function(_,pr){
var ns=this;
ns.node=_('div.rc-areamonth',[
ns.hbox=_('table.rc-areamonth-head rc-areamonth-head--hide',{
cellSpacing:0,
cellPadding:0,
border:0,
add:_('thead',
ns.head=_('tr'))}),
ns.box=_('div.rc-areamonth-c')
])};
tmpl.rc_areamonth_head_cell=function(_,pr){
var ns=this;
ns.node=_('td',
_('span',
ns.text=_.text('xxx')))};


/* URL: /js/calendar/ui_areamonth.src.js */

elems.rc_areamonth=rr.new_class({
_name:'areaweek',
_init:false,
parent:rr.class_baseElement,
interface:true,
constructor:function(_,pr,cfg){
var it=this.interface;
if(!it._init){
rr.extend(it,rr.expansion_event)._init=true;
it.addEvent(rr.listeners_drag);
it.addEvent(it.listeners_events)};
this.interface.parent.call(this,_,pr,cfg);
this.interface.factory(this,_,pr,cfg);
if(this.node)this.node.rocketui=this;
this.set(pr)},
factory:function(ui,_,pr){
ui.master=_.clone();
ui.cahe_item=[];
ui.cahe_week=[];
ui.head_cells=[];
ui.items=[];
ui.nodes=new tmpl.rc_areamonth(_,ui);
ui.node=ui.nodes.node;
ui.box=ui.nodes.box;
ui.range_c=_('tmpl:rc_range_c',{type_week:true});
this.init_events(ui)},
prototype:{
height:'auto',
row:1,
columns:7,
panelTop:false,
panelLeft:false,
calendarSource:null,
timeStart:0,
on_connect:function(){
var ui=this;
if(ui.display=ui.is_connected&&!ui._hide){
ui.refresh(true)}}},
init_events:function(ui){
ui.gEvent.add(ui.box,'mousedown',function(e){
var n=e.srcElement||e.target,it=ui.interface,sHide;
if(e.returnValue===false||(rr.IE?e.button:e.which)!=(rr.IE>8?0:1)){
return;
};
while(n){
switch(n._r_element){
case'item':return it.ev_mousedown_item(e,ui,n.rocketui);
case'week':return it.ev_mousedown_week(e,ui,n.rocketui,sHide);
case'range':sHide=true;break;
};
n=n.parentNode;
}});
ui.gEvent.add(ui.node,'dblclick',function(e){
var n=e.srcElement||e.target,it=ui.interface,sHide;
while(n){
switch(n._r_element){
case'item':return it.ev_dblclick_item(e,ui,n.rocketui)};
n=n.parentNode;
}});
ui.gEvent.add(ui.range_c.button,'mousedown',rr.breakEvent);
ui.gEvent.add(ui.range_c.button,'blur',function(e){
if(ui.selection_mode=='add')ui.set({
selectionStart:null,
selectionEnd:null,
selection_mode:null
})});
ui.gEvent.add(ui.range_c.button,'click',function(e){
rr.breakEvent(e);
ui.set('selection_mode','text');
var x;
ui.initEvent('user_create_item',x={
item:{
full_day:true,
start:ui.selectionStart,
end:ui.selectionEnd
}});
if(x.returnValue===false){
ui.set('selectionStart',null)}})},
init_events_data:function(ui,v){
var t=this;
ui.gEvent.add(v,'userCreateItem',function(e){
t.ev_data_userCreateItem(ui,e)},v);
v=null;
},
set:function(ui,pr,v,pv){
var it=this,
tv=typeof v,
x,und;
switch(pr){
case'rows':
if(tv!='number')return;
if(v<1){v=1}else if(v>12)v=12;
break;
case'columns':
if(v<1||v>20||tv!='number')return;
break;
case'month':
if(typeof v!='number')return;
break;
case'localization':
if(tv!='object')return;
break;
case'timeStart':if(v?tv!=='number':v!==0)return;
break;
case'calendarSource':
if(v===pv||(v?tv!=='object':v!=null))return;
if(pv)ui.gEvent.removeAll(pv);
if(v)it.init_events_data(ui,v);
break;
case'activeItem':
if(!v){
if(!pv)return;
v=null;
};
break;
case'height':
if(tv!='number'&&v!='auto')return;
if(!ui.autoHeight&&tv=='number'){
ui.node.style.height=v+"px";
}else if(v=='auto'){
ui.node.style.height='';
};
break;
case'rowscell':
return;
case'panelLeft':
v=!!v;
if(pv===v)return;
rr.css_set('rc-areamonth--pleft',ui.node,v);
break;
case'panelTop':
v=!!v;
if(pv===v)return;
rr.css_set('rc-areamonth--ptop',ui.node,v);
rr.css_set('rc-areamonth-head--hide',ui.nodes.hbox,!v);
break;
case'selectionStart':
case'selectionEnd':
if(v!==null&&tv!='number')return;
break;
case'selection_dn':
case'selection_stop':v=!!v;
break;
case'selection_mode':
if(!v){v=null}else switch(v){
case'add':case'text':break;
default:return;
};
break;
case'selection_ps':
if(!v){v=null}else switch(v){
case'center':case'right':break;
default:return;
};
break;
case'selection_text':
if(tv!='string'&&tv!='number')return;
break;
};
return v;
},
setItemTimeStart:function(ui){
return;
var a=ui.items,
st=ui.timeStart,
i=0,l,n,sp=ui.columns*1440;
if(!a||!st)return;
while(n=a[i]){
if(i++)st+=sp;
n.set('timeStart',st)}},
refresh:function(ui,ch,rz){
if(!ui.display)return false;
if(ui.z_resize)ui.z_resize=!(rz=true);
var it=this,nodes=ui.nodes,v,i,x,und;
if(rz||ch.columns){
v=ui.columns;
x=ui.nodes.head.cells.length;
if(v>x){
while(x++<v){
i=ui.master('tmpl:rc_areamonth_head_cell');
ui.nodes.head.appendChild(i.node);
ui.head_cells.push(i)}}else
if(v<x){
x=ui.nodes.head;
while((i=x.cells.length)>v){
i=x.cells[i-1];
rr.removeNode(i)};
ui.head_cells.length=v;
}};
if(rz||ch.columns||ch.timeStart)ui.z_panelTop_change=true;
if(ui.panelTop&&ui.z_panelTop_change){
ui.z_panelTop_change=false;
v=rcalendar.date_tm(ui.timeStart,0,0,0,1).day;
var lc=rv.aweek;
for(i=0;x=ui.head_cells[i++];){
if(x._text!=lc[v]){
x.text.data=x._text=lc[v];
};
if(++v>6)v=0;
}};
if(rz||ch.panelTop){
ui._boxOffsetTop=ui.box.offsetTop;
};
var h,hx;
if(rz||ch.height||ch.rows){
v=ui.height;
i=0;
if(typeof v=='number'){
v-=ui._boxOffsetTop||0;
if(!v||v<30)v=30;
i=ui.rows;
x=v%i;
v=(v-x)/i;
hx=x;
};
h=v;
};
if(rz||ch.rows){
i=ui.items.length;
v=ui.rows;
if(v>i){
while(v>ui.items.length){
ui.items.push(
ui.master('ui:rc_areaweek',{
colums:ui.columns,
parent:ui
}))}}else
if(v<i){
while(v<i--){
x=ui.items.pop();
rr.removeNode(x.node)}}};
var prm={
calendarSource:ui.calendarSource,
columns:ui.columns,
selectionStart:ui.selectionStart,
selectionEnd:ui.selectionEnd,
activeItem:ui.activeItem
};
if(rz||ch.activeItem||ch.rows){
prm.activeItem=ui.activeItem;
};
if(ui.autoHeight&&typeof h=='number'){
ui.height=ui.node.offsetHeight;
};
var xr=ui.range_c,sA,sB;
v=ui.columns;
for(i=0;x=ui.items[i];i++){
prm.height=h;
if(hx&&hx--)prm.height++;
prm.timeStart=ui.timeStart+i*1440*v;
x.set(prm);
if(x.selection_show){
if(!sA)sA=x;
sB=x;
}};
if(ch.selection_text){
};
v='selection_ps';
if(ch[v]){
rr.css_set_(xr.sname+'--ps-',xr.node);
if(ui[v])rr.css_add(xr.sname+'--ps-'+ui[v],xr.node)};
v='selection_mode';
if(ch[v]){
rr.css_set_(xr.sname+'--m-',xr.node);
if(!ui[v]){
if(xr._parent)rr.removeNode(xr.node);
xr._parent=null;
}
else rr.css_add(xr.sname+'--m-'+ui[v],xr.node)};
if(ui.selection_mode&&sA){
x=ui.selection_ps?sB:sA;
x=x.nodes.range_node;
if(x&&xr._parent!==x){
x.appendChild(xr.node);
xr._parent=x;
}};
v='selection_mode';
if(ch[v]&&ui[v]=='add'){
xr.button.focus()};
if(ch.selectionStart||ch.selectionEnd){
ui.initEvent('range_change',{
start:ui.selectionStart,
end:ui.selectionEnd
})};
ui.initEvent_('change',[ch])},
ev_data_userCreateItem:function(ui,e){
ui.set({
activeItem:e.id,
selectionStart:null,
selectionEnd:null
})},
ev_mousedown_item:function(e,ui,xd,xw){
if(!e||!xd||!(xw=xd.parent))return;
rr.breakEvent(e);
ui.set('activeItem',xd.item.id);
var ps=rr.getAbsolutePos(ui.box,true),oL=xw.box.offsetLeft,oT=ui.box.offsetTop,prm;
prm={
ui:ui,
sA:xd.item.start,
sB:xd.item.end,
moveItem:xd.item,
rows:ui.rows,
cols:ui.columns,
_twc:1440*ui.columns,
xBox:ps.x,
yBox:ps.y,
wBox:xw.node.clientWidth,
wyList:[]
};
prm.px2cn=ui.columns/prm.wBox;
for(var i=0,x;x=ui.items[i];i++){
prm.wyList.push(x.node.offsetTop-oT);
if(x==xw)prm.dyStart=i;
};
prm.ui.set({
selection_mode:null,
selectionStart:null,
selectionEnd:null
});
this.initEvent('startDrag',{
name:'item_move',
cursor:'move',
clearRange:true,
deltaDrag:5,
autoScroll:false,
mouseEvent:e
},prm)},
ev_dblclick_item:function(e,ui,x){
ui.initEvent('item_click',{
item:x.item
})},
ev_mousedown_week:function(e,ui,xw,sHide){
ui.set('activeItem',null);
if(!e||!xw)return;
rr.breakEvent(e);
var ps=rr.getAbsolutePos(ui.box,true),
oL=xw.box.offsetLeft,
oT=ui.box.offsetTop,
cwh=rr.getClientWH(ui.ownerDocument),
prm;
prm={
ui:ui,
select_ok:!sHide,
rows:ui.rows,
cols:ui.columns,
_twc:1440*ui.columns,
xBox:ps.x,
yBox:ps.y,
wBox:xw.node.clientWidth,
wyList:[]
};
prm.px2cn=ui.columns/prm.wBox;
var x=Math.floor((e.clientX+cwh.sl-prm.xBox)*prm.px2cn);
prm.dxStart=x<0?0:x>=prm.cols?prm.cols-1:x;
prm.sA=xw.timeStart+prm.dxStart*1440;
prm.sB=prm.sA+1440;
for(var i=0,x;x=ui.items[i];i++){
prm.wyList.push(x.node.offsetTop-oT);
if(x==xw)prm.dyStart=i;
};
prm.ui.set({
selection_mode:null,
selection_ps:'center',
selectionStart:sHide?null:prm.sA,
selectionEnd:sHide?null:prm.sB
});
this.initEvent('startDrag',{
name:'s_new',
cursor:'default',
clearRange:true,
deltaDrag:sHide?5:3,
overDrag:!sHide,
autoScroll:false,
mouseEvent:e
},prm)},
listeners_events:{
item_move_dragstart:function(e,prm){
if(typeof prm.dxStart!='number'){
var x=Math.floor((e.stX-prm.xBox)*prm.px2cn);
prm.dxStart=x<0?0:x>=prm.cols?prm.cols-1:x;
}},
item_move:function(e,prm){
var x=Math.floor((e.psX-prm.xBox)*prm.px2cn),bk=x<0,dl=0;
prm.dxEnd=x<0?0:x>=prm.cols?prm.cols-1:x;
x=e.psY-prm.yBox;
prm.dyEnd=prm.dyStart;
if(x>=0)
for(var i=0,l=prm.wyList.length;i<l;i++){
if(x<prm.wyList[i])break;
prm.dyEnd=i;
};
if(prm.posNew=x>=0&&!bk){
dl=prm.dxEnd-prm.dxStart;
dl+=(prm.dyEnd-prm.dyStart)*prm.cols;
};
prm.nA=prm.sA+dl*1440;
prm.nB=prm.sB+dl*1440;
prm.ui.set({
selection_mode:null,
selectionStart:prm.nA,
selectionEnd:prm.nB
})},
item_move_dragend:function(e,prm){
prm.ui.set({
selectionStart:null,
selectionEnd:null
});
if(prm.posNew){
prm.ui.calendarSource.set({
id:prm.moveItem.id,
start:prm.nA,
end:prm.nB
})}},
s_new:function(e,prm){
prm.select_ok=true;
var x=Math.floor((e.psX-prm.xBox)*prm.px2cn),bk=x<0,dl=0;
prm.dxEnd=x<0?0:x>=prm.cols?prm.cols-1:x;
x=e.psY-prm.yBox;
prm.dyEnd=0;
if(x>=0)
for(var i=0,l=prm.wyList.length;i<l;i++){
if(x<prm.wyList[i])break;
prm.dyEnd=i;
};
dl+=prm.dxEnd-prm.dxStart;
dl+=(prm.dyEnd-prm.dyStart)*prm.cols;
prm.nA=dl<0?prm.sA+dl*1440:prm.sA;
prm.nB=dl>0?prm.sB+dl*1440:prm.sB;
prm.ui.set({
selection_ps:!dl?'center':dl>0?'right':null,
selection_mode:null,
selectionStart:prm.nA,
selectionEnd:prm.nB
})},
s_new_dragend:function(e,prm){
return;
prm.ui.set({
selection_mode:'add'
})},
s_new_end:function(e,prm){
if(!prm.select_ok)return;
prm.ui.set({
selection_mode:'add'
})}}});


/* URL: /js/calendar/tmpl_scal.src.js */

rr.styles('tmpl:scal'
,'.rc-scal {font-size: 12px;cursor:default;-moz-user-select: none;-khtml-user-select: none;user-select: none;}'
,'.rc-scal-body {overflow:hidden;position:relative;height:182px;}'
,'.rc-scal-body table {margin:0 auto;width:100%;border-collapse:collapse;border-spacing:0;}'
,'.rc-scal-body td {text-align:center;}'
,'.rc-scal-body .c {cursor:pointer;color:#777777;background-color:#F9F9F9;border:1px solid #FFFFFF;display:block;height:25px;line-height:27px;}'
,'.rc-scal-body .cm .c {background-color:#EBF0F2;color:#000;}'
,'.rc-scal-body .cd .c {border:1px dotted #8294A0;}'
,'.rc-scal-body .sr .c {background-color:#D6E6EF;}'
,'.rc-scal-body thead {cursor:default;}'
,'.rc-scal-head {text-align:center;padding:0 0 1ex;}'
,'.rc-scal-date {text-align:center;cursor:pointer;}'
,'.rc-scal-next {background-position: 50% 50%;width:23px;cursor:pointer;float:right;text-align:right;overflow:hidden;}'
,'.rc-scal-past {background-position: 50% 50%;width:23px;cursor:pointer;float:left;text-align:left;overflow:hidden;}'
,'.rc-scal-next:hover, .rc-scal-past:hover {background-color:#eee;}'
,'.rc-scal-past_text, .rc-scal-next_text {visibility:hidden;}'
,'.rc-scal--compact .rc-scal-next, .rc-scal--compact .rc-scal-past {min-width:0;margin-right:0;margin-left:0;overflow:hidden;width:20px;background-color:#eee;color:transparent;}'
,'.rc-scal--compact .rc-scal-next span, .rc-scal--compact .rc-scal-past span  {visibility:hidden;}'
,'.rc-scal-today {cursor:pointer;}'
,'.rc-scal-footer {text-align:center;margin-top: 1px;}'
,'.rc-scal table.ym {margin-bottom:2px;}'
,'.rc-scal-mcell {cursor:pointer;display:block;height:58px;line-height:58px;background-color:#E0EBEF;border:1px solid #FFFFFF;}'
);
tmpl.scal_ym=function(_,pr){
var ns=this,lm=rv.month_small;
ns.node=_('table.ym',{cellSpacing:0,cellPadding:0,border:0},
_('tbody',
_('tr',
_('td',{_cmd_:'gm',_date_:0},_('span.rc-scal-mcell',lm[0])),
_('td',{_cmd_:'gm',_date_:1},_('span.rc-scal-mcell',lm[1])),
_('td',{_cmd_:'gm',_date_:2},_('span.rc-scal-mcell',lm[2])),
_('td',{_cmd_:'gm',_date_:3},_('span.rc-scal-mcell',lm[3]))),
_('tr',
_('td',{_cmd_:'gm',_date_:4},_('span.rc-scal-mcell',lm[4])),
_('td',{_cmd_:'gm',_date_:5},_('span.rc-scal-mcell',lm[5])),
_('td',{_cmd_:'gm',_date_:6},_('span.rc-scal-mcell',lm[6])),
_('td',{_cmd_:'gm',_date_:7},_('span.rc-scal-mcell',lm[7]))),
_('tr',
_('td',{_cmd_:'gm',_date_:8},_('span.rc-scal-mcell',lm[8])),
_('td',{_cmd_:'gm',_date_:9},_('span.rc-scal-mcell',lm[9])),
_('td',{_cmd_:'gm',_date_:10},_('span.rc-scal-mcell',lm[10])),
_('td',{_cmd_:'gm',_date_:11},_('span.rc-scal-mcell',lm[11])))))};
tmpl.scal_m=function(_,pr){
var ns=this,i,u,x,dt,nb,nr,
d=_.document,
startD=(pr.startDay||0),
tdD=pr.dateToday,
shD=(pr.dateShow||tdD),
acD=(pr.dateActive||tdD),
sA=pr.dateA,
sB=pr.dateB,
Y=shD.y,
M=shD.m,
mD=rcalendar.getMaxDate(Y,M),
Mp=(M?M-1:11),
Yp=(M?Y:Y-1),
mDp=rcalendar.getMaxDate(Yp,Mp),
n;
ns.node=i=d.createElement('table');
i.className='m';
i.cellSpacing=0;
i.cellPadding=0;
i.border=0;
if(true){
ns.node.appendChild(nb=d.createElement('thead')).appendChild(nr=d.createElement('tr'));
for(x=0;x<7;x++){
i=startD+x;
nr.appendChild(
_('td',
rv.aweek_small[i>6?i-7:i]
))}};
ns.node.appendChild(nb=d.createElement('tbody')).appendChild(nr=d.createElement('tr'));
if(startD>6)startD=startD%6;
i=-(new Date(Y,M,1).getDay()-startD);
if(i>0)i-=7;
for(x=1;x<43;x++){
i++;
dt={
d:i<=mD?(i<1?mDp+i:i):i-mD,
m:i<=mD?(i<1?Mp:M):(M==11?0:M+1),
y:i<=mD?(i<1?Yp:Y):(M==11?Y+1:Y)};
n=nr.appendChild(d.createElement('td'));
n._cmd_='day';
n._date_=dt;
n.className=(i<=mD?(i<1?'pm':'cm'):'nm')
+' d'+(x%7||7)
+(pr.classDate?pr.classDate(dt):'')
+(acD.y==dt.y&&acD.m==dt.m&&acD.d==dt.d?' cd':'')
+(sA&&sB
&&(sA.y<dt.y||(sA.y==dt.y&&(sA.m<dt.m||sA.m==dt.m&&sA.d<=dt.d)))
&&(sB.y>dt.y||(sB.y==dt.y&&(sB.m>dt.m||sB.m==dt.m&&sB.d>=dt.d)))
?' sr':'')
+(tdD&&tdD.y==dt.y&&tdD.m==dt.m&&tdD.d==dt.d?' today':'');
n=n.appendChild(d.createElement('div'));
n.className="c";
n.appendChild(d.createElement('span'))
.appendChild(
d.createTextNode(dt.d));
if(acD.y==dt.y&&acD.m==dt.m&&acD.d==dt.d){
nr.className="cw";
};
if(x<42)x%7||nb.appendChild(nr=d.createElement('tr'))}};
tmpl.scal_one=function(_,pr){
var ns=this,u;
ns.sname='rc-scal';
ns.vs_today="Сегодня %s %s %s\u00A0года";
ns.vs_date="%s %s\u00A0года";
ns.node=_('div.rc-scal',
_('div.rc-scal-head',
ns.c_next=_('a.rc-scal-next no_underline s-menu_bg i-img--arrow_right',{title:""},
_('span.rc-scal-next_text',
ns.c_next_text=_.text(""))),
ns.c_past=_('a.rc-scal-past no_underline s-menu_bg i-img--arrow_left',{title:""},
_('span.rc-scal-past_text',
ns.c_past_text=_.text(""))),
ns.c_date=_('a.rc-scal-date',
ns.c_date_text=_.text(""))),
ns.box=_('div.rc-scal-body'),
_('div.rc-scal-footer',
ns.c_today=_('a.rc-scal-today',{title:"",href:(rr.IE<7?'js:// today':u)},
ns.c_today_text=_.text(""))))};


/* URL: /js/calendar/ui_scal.src.js */

var trace=true;
elems.scal_one=rr.new_class({
_name:'scal',
parent:rr.class_baseElement,
interface:true,
constructor:function(_,pr,cfg){
this.interface.parent.call(this,_,pr,cfg);
this.interface.factory(this,_,pr,cfg)},
factory:function(ui,_,pr){
ui.master=_.clone();
ui.nodes=new tmpl.scal_one(_,false);
ui.node=ui.nodes.node;
ui.node._cmd_='root';
ui.nodes.c_today._cmd_='today';
ui.nodes.c_next._cmd_='next';
ui.nodes.c_past._cmd_='past';
ui.nodes.c_date._cmd_='mode';
this.init_events(ui);
ui.set(pr,false);
var dt;
if(!ui.dateToday){
dt=new rcalendar.xdate().get(1,1,1);
ui.dateToday={y:dt.year,m:dt.month,d:dt.date}};
if(!ui.dateActive){
dt=ui.dateToday;
ui.dateActive={y:dt.y,m:dt.m,d:dt.d}};
if(!ui.dateShow){
dt=ui.dateActive;
ui.dateShow={y:dt.y,m:dt.m}};
ui.refresh()},
prototype:{
next:function(){
var ui=this,dt=ui.dateShow,x;
if(ui.mode!=='month'){
if(dt.m==11)dt.y++;
dt.m=dt.m<11?dt.m+1:0;
}else dt.y++;
if(ui.autoActive!==false){
ui.dateActive.y=dt.y;
ui.dateActive.m=dt.m;
x=rcalendar.getMaxDate(dt.y,dt.m);
if(ui.dateActive.d>x)ui.dateActive.d=x;
};
ui.interface.re(ui)},
past:function(){
var ui=this,dt=ui.dateShow,x;
if(ui.mode!=='month'){
if(dt.m===0)dt.y--;
dt.m=dt.m>0?dt.m-1:11;
}else dt.y--;
if(ui.autoActive!==false){
ui.dateActive.y=dt.y;
ui.dateActive.m=dt.m;
x=rcalendar.getMaxDate(dt.y,dt.m);
if(ui.dateActive.d>x)ui.dateActive.d=x;
};
ui.interface.re(ui)},
today:function(){
var ui=this,dt=ui.dateToday;
if(ui.autoActive!==false){
ui.dateActive.y=dt.y;
ui.dateActive.m=dt.m;
ui.dateActive.d=dt.d;
};
ui.dateShow.y=dt.y;
ui.dateShow.m=dt.m;
ui.mode=null;
ui.interface.re_dates(ui)}},
init_events:function(ui){
ui.gEvent.add(ui.node,'click',rr.breakEvent);
ui.gEvent.add(ui.node,'mousedown',function(e){
if(e.returnValue===false)return;
var n=e.srcElement||e.target,it=ui.interface,x;
while(n){
switch(n._cmd_){
case'root':return;
case'next':ui.next();break;
case'past':ui.past();break;
case'today':ui.today();
x=ui.dateActive;
ui.initEvent('uselect',{y:x.y,m:x.m,d:x.d},'today');
break;
case'mode':it.swMode(ui);break;
case'day':
if(x=n._date_){
ui.dateActive={y:x.y,m:x.m,d:x.d};
ui.interface.re_dates(ui);
ui.initEvent('uselect',{y:x.y,m:x.m,d:x.d},'day')};
break;
case'gm':x=n._date_;
if(x||x===0){
ui.dateShow.m=x;
if(ui.autoActive!==false){
ui.dateActive.y=ui.dateShow.y;
ui.dateActive.m=ui.dateShow.m;
x=rcalendar.getMaxDate(ui.dateActive.y,x);
if(ui.dateActive.d>x)ui.dateActive.d=x;
};
ui.interface.re_dates(ui)};
break;
};
n=n.parentNode;
};
if(n)rr.breakEvent(e)});
if(rr.IE)ui.node.onselectstart=rr.breakEvent;
if(rr.Opera)ui.gEvent.add(ui.node,'mousedown',function(e){
e.target.ownerDocument.defaultView.getSelection().removeAllRanges();
e.preventDefault()})},
set:function(ui,pr,v,pv){
var it=this,tv=typeof v,x,und;
switch(pr){
case'mode':
if(v!='date'&&v!='month')return;
break;
case'compact':
case'autoActive':
v=!!v;
break;
case'dateToday':
case'dateActive':
case'dateA':
case'dateB':
if(tv!=='object'||(pv&&pv.d==v.d&&pv.d==v.d&&pv.d==v.d)||typeof v.y!=='number'||typeof v.m!=='number'||typeof v.d!=='number')return;
if(v.m<0||v.m>11||v.d<1||v.d>31)return;
break;
case'dateShow':
if(tv!=='object'||(pv&&pv.d==v.d&&pv.d==v.d)||v.m<0||v.m>11||typeof v.y!=='number'||typeof v.m!=='number')return;
break;
default:return;
};
return v;
},
refresh:function(ui,ch,rz){
var it=ui.interface,nodes=ui.nodes,v,i;
if(rz||ch.mode){
ui.mode=='month'?it.re_months(ui):it.re_dates(ui)};
if(rz||ch.dateToday){
v=ui.dateToday;
nodes.c_today_text.data=rr.printx(nodes.vs_today
,v.d
,rv.month_of[v.m]
,v.y
)};
if(rz||ch.compact){
rr.css_set(nodes.sname+'--compact',ui.node,ui.compact)};
ui.mode=='month'?this.re_months(ui):this.re_dates(ui)},
set_date:function(ui,pr){
},
set_value:function(ui){
},
swMode:function(ui){
ui.mode!=='month'?this.re_months(ui):this.re_dates(ui)},
re:function(ui){
ui.mode=='month'?this.re_months(ui):this.re_dates(ui)},
re_months:function(ui){
ui.mode='month';
var ds=ui.dateShow,ns=ui.nodes,x;
ns.c_date_text.data=rr.printx(ns.vs_date,rv.month[ds.m],ds.y);
ns.c_next_text.data=ds.y+1;
ns.c_past_text.data=ds.y-1;
if(ns.c_table)ns.box.removeChild(ns.c_table);
x=new tmpl.scal_ym(ui.master,false)
ns.box.appendChild(ns.c_table=x.node)},
re_dates:function(ui){
ui.mode=null;
var ds=ui.dateShow,ns=ui.nodes,x;
ns.c_date_text.data=rr.printx(ns.vs_date,rv.month[ds.m],ds.y);
ns.c_next_text.data=rv.month[ds.m<11?ds.m+1:0];
ns.c_past_text.data=rv.month[ds.m?ds.m-1:11];
x=ui.dateToday;
ns.c_today_text.data=rr.printx(ns.vs_today,x.d,rv.month_of[x.m],x.y);
if(ns.c_table)ns.box.removeChild(ns.c_table);
x=new tmpl.scal_m(ui.master,{
startDay:1,
dateA:ui.dateA,
dateB:ui.dateA&&ui.dateB,
dateToday:ui.dateToday,
dateActive:ui.dateActive,
dateShow:ui.dateShow
});
ns.box.appendChild(
ns.c_table=x.node
)}});


/* URL: /js/calendar/rc_style.src.js */

rr.styles('tmpl:rc_calendar',
".rc-toolbar {padding-bottom:0.3em;overflow:hidden;}",
".rc-toolbar-end {clear:both;}",
".rc-toolbar-top {}",
".rc-toolbar-b {cursor:pointer;text-decoration:none;color:#333;background-color:#fff;border:1px solid #fff;float:left;margin:0 0.5ex;padding:0.2em 1ex 0.2ex;}",
rr.IE<7&&".rc-tbar-b {width:1em;}",
".rc-toolbar-b:hover {border-color:#AEDCF5;}",
".rc-toolbar-b--active, .rc-toolbar-b--active:hover {background-color:#EFF9FF;border-color:#AEDCF5;color:#000;}",
".rc-toolbar-b span {white-space:nowrap;}",
".rc-toolbar-b .i {display:none;background-color:#777;height:24px;margin:0 auto;width:24px;}",
".rc-page-toolbar button {padding:0 1ex;}",
".rc-calendar-resizer {background-color:#F5F5F5;height:5px;cursor:s-resize;position:relative;font-size:0;}",
".rc-page--mode-month .rc-calendar-resizer {display:none;}",
".rc-page-toolbar {padding:3px 1ex;margin-bottom:1em;background-color:#EFF9FF;border-top:1px solid #AEDCF5;}",
".rc-page-toolbar-clear {clear:right;}",
".rc-page-toolbar .gotoday {margin-left:0.3em;}",
".rc-page-toolbar .date {margin-left:1em;text-decoration:none;color:#000;}",
".rc-page-toolbar .date:hover {border-bottom:1px dashed;}",
""
);
rr.styles('tmpl:rc_calendar',
".rc-areaday {height:100%;position:relative;border-top:1px solid #ddd;border-bottom:1px solid #ddd;}",
".rc-areaday .box {overflow:hidden;position:relative;background-color:#FFF;}",
".rc-areaday .box {width:100%;}",
".rc-areaday .rows {overflow:hidden;margin-top:3px;font-size: 12px;}",
".rc-areaday .r {border-bottom:1px dashed #AEDCF5; border-top:1px solid #AEDCF5;overflow:hidden;}",
".rc-areaday-strut {border-top:1px solid #AEDCF5;overflow:hidden;height:2px;}",
".rc-areaday .r {margin-bottom:23px;height:23px;}",
".rc-areaday .r--end {height:0;overflow:hidden;}",
".rc-areaday .rh {display:none;}",
".rc-areaday--numbpanel .rh {display:block;border-top:1px solid #ccc;height:19px;left:1px;margin-left:5px;overflow:hidden;position:absolute;width:40px;z-index:1;}",
".rc-areaday .clbox {left:0;right:0;position:absolute;top:0;bottom:0;}",
".rc-areaday table.columns {width:100%;height:100%;}",
rr.IE<8&&".rc-areaday table.columns {height:100em;}",
".rc-areaday table.columns {table-layout:fixed;border-collapse:collapse;}",
".rc-areaday table.columns td {padding:0;margin:0;vertical-align:top;}",
".rc-areaday table.columns td {border:0 solid #AEDCF5;border-width:0 0 0 1px;}",
".rc-areaday table.columns th {padding:0;width:0;}",
".rc-areaday--numbpanel table.columns th {padding:0;width:45px;background-color:#EFEFEF;}",
".rc-areaday table.columns td.d4 {border-color:#999;border-width:0 2px;}",
".rc-areaday .cbox {height:0;position:relative;z-index:1;}",
".rc-areaday .cbox--dn {margin:3px 9px 0 2px;}",
".rc-areaday .cbox--up {margin: 0 2px;}",
".rc-areaday .task {left:0;position:absolute;width:100%;top:0px;}",
".rc-areaday .task div {margin-right:1px;height:90px;border:1px solid}",
".rc-day-item {position:absolute;top:0;left:0;width:100%;}",
".rc-day-item--active  {z-index:29999 !important;}",
".rc-day-item .c, .rc-day-item .u, .rc-day-item .d {border-color:#9B9CCF;border-style:solid;border-width:0;}",
".rc-day-item .c {cursor:default;font-size:12px;position:relative;padding:1px 1px 6px;border-width:0 1px;background-color:#CCCCFF;overflow:hidden;}",
rr.Gecko&&".rc-day-item .c {background-image:-moz-linear-gradient(top, rgba(255,255,255,0), rgba(255,255,255,0.6));}",
rr.WebKit&&".rc-day-item .c {background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0)), to(rgba(255,255,255,0.4)));}",
rr.IE&&".rc-day-item .c {filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF, endColorstr=#77FFFFFF);}",
".rc-x--color-0 .xc {background-color: #b7cfed; border-color: #92a5bc;}",
".rc-x--color-1 .xc {background-color: #e2d2c3; border-color: #b1a79c;}",
".rc-x--color-2 .xc {background-color: #b3e5e1; border-color: #8fb2b2;}",
".rc-x--color-3 .xc {background-color: #efb4cf; border-color: #bb8ea4;}",
".rc-x--color-4 .xc {background-color: #c9c9f7; border-color: #a09fb6;}",
".rc-x--color-5 .xc {background-color: #fcb895; border-color: #c49176;}",
".rc-x--color-6 .xc {background-color: #f7e5c1; border-color: #c0b49a;}",
".rc-x--color-7 .xc {background-color: #ade0b9; border-color: #89ad92;}",
".rc-x--color-8 .xc {background-color: #d4eafc; border-color: #a7b8c5;}",
".rc-x--color-9 .xc {background-color: #d5befc; border-color: #a396b0;}",
".rc-x--color-10 .xc {background-color: #fcd192; border-color: #c3a475;}",
".rc-x--color-11 .xc {background-color: #ffeea6; border-color: #c6bb85;}",
".rc-x--color-12 .xc {background-color: #abcecd; border-color: #87a4a5;}",
".rc-x--color-13 .xc {background-color: #abe6ed; border-color: #8ab1b9;}",
".rc-x--color-14 .xc {background-color: #dae1e5; border-color: #acb2b7;}",
".rc-x--color-15 .xc {background-color: #f0f4f5; border-color: #adb2b7;}",
".rc-day-item--A .u, .rc-day-item--B .d, .rc-day-item--AB .u, .rc-day-item--AB .d {display:none;}",
".rc-day-item--A {margin-top:-3px;}",
".rc-day-item--A .c {padding-bottom:11px;padding-top:0;}",
".rc-day-item--B .c {padding-bottom:11px;}",
".rc-day-item--AB {margin-top:-3px;}",
".rc-day-item--AB .c {padding-bottom:13px;padding-top:0;}",
".rc-day-item .c--active {border-width:1px 2px;padding:0 0 5px;}",
".rc-day-item--A .c--active {border-top-width:0;padding-bottom:10px;}",
".rc-day-item--B .c--active {border-bottom-width:0;padding-bottom:11px;}",
".rc-day-item--AB .c--active {border-width:0 2px;padding-bottom:13px;}",
".rc-day-item .h {font-size:x-small;height:1.3em;padding:1px 1ex 2px;white-space:nowrap;}",
".rc-day-item .b {padding:0 0.5ex;color:#40404F;}",
".rc-day-item .u, .rc-day-item .d {margin:0 1px;overflow:hidden;height:0;}",
".rc-day-item .u {border-top-width:1px;}",
".rc-day-item .d {border-bottom-width:1px;}",
".rc-day-item .rzA, .rc-day-item .rzB {z-index:1;position:absolute;left:0px;right:0px;height:4px; cursor:s-resize;overflow:hidden;"+(rr.IE?"background:transparent url('about:blank');":"background-color:transparent;")+"}",
".rc-day-item .rzA {top:0px;}",
".rc-day-item .rzB {margin-top:-3px;}",
".rc-day-item--A .rzA, .rc-day-item--B .rzB, .rc-day-item--AB .rzA, .rc-day-item--AB .rzB {display:none;}",
rr.IE<7&&".rc-day-item .rzA, .rc-day-item .rzB {width:100%;font-size:0px;background:transparent url('about:blank');}",
rr.IE<7&&".rc-day-item .bx {position:absolute;}",
".rc-areaday-resizer {background-color:#ccc;cursor:n-resize;height:5px;margin-top:1px;overflow-x:hidden;overflow-y:hidden;position:absolute;width:2em;z-index:1;}",
".rc-areaday-resizerAB {display:none;background-color:#f33;height:5px;margin-top:-3px;overflow-x:hidden;overflow-y:hidden;position:absolute;width:2em;z-index:1;}",
".rc-areaday-resizerAB--darg {display:block;}",
".rc-areaday-resizer--darg {background-color:#000;}",
".rc-range {position:absolute;top:0;left:0;width:100%;z-index:999;}",
".rc-range-box {padding-bottom:0;border:1px dashed #1A5F25;opacity:0.35;margin:0 -1px;cursor:default;font-size:12px;position:relative;background-color:#ADEAB6;overflow:hidden;}",
rr.IE<9&&".rc-range-box {border-color:#6CB577;background-color:transparent; filter:progid:DXImageTransform.Microsoft.gradient (startColorstr=#77ADEAB6, endColorstr=#77ADEAB6);}",
".rc-range--x-A {margin-top:-3px;}",
".rc-range-box--x-A {border-top-width:0px;padding-bottom:4px;}",
".rc-range-box--x-B {border-bottom-width:0px;padding-bottom:5px;}",
".rc-range--x-AB {margin-top:-3px;}",
".rc-range-box--x-AB {border-width:0 1px;padding-bottom:9px;}",
".rc-range-c {position:absolute;overflow:hidden;width:100%;top:1px;}",
".rc-range-c .bx {padding:2px 0.5ex;overflow:hidden;font-size:small;text-align:center;}",
rr.IE<7?".rc-range-c--dn {position:relative;overflow:visible;top:auto;}"
:".rc-range-c--dn {top:auto;bottom:1px;}",
rr.IE<7&&".rc-range-c--dn .ie {position:absolute;width:100%;bottom:1px;overflow:hidden;}",
".rc-range-c .add, .rc-range-c .info {display:none;}",
".rc-range-c--m-add .add {display:"+(rr.IE<7?'inline-block;':'inline')+";font-size:medium;margin:0;background-color:#A7DFAF;border:1px solid #9BCFA2;}",
".rc-range-c--m-add a {text-decoration:none;color:#13740F;padding:0 0.3em;}",
".rc-range-c--m-text .info {display:"+(rr.IE<7?'inline-block;':'inline')+";color:#333;padding:0 0.3ex;white-space:nowrap;}",
".rc-range-wk {position:absolute;overflow:hidden;top:1px;left:1px;}",
".rc-range-wk .bx {padding:2px 0.5ex;overflow:hidden;font-size:small;text-align:center;}",
".rc-range-wk--ps-right {right: 1px;left:auto;}",
".rc-range-wk--ps-center {width:100%;}",
".rc-range-wk .add, .rc-range-wk .info {display:none;}",
".rc-range-wk--m-add .add {display:"+(rr.IE<7?'inline-block':'inline')+";font-size:medium;margin:0;background-color:#A7DFAF;border:1px solid #9BCFA2;}",
".rc-range-wk--m-add a {text-decoration:none;color:#13740F;padding:0 0.3em;}",
"",
"",
"",
""
);
rr.styles('tmpl:rc_calendar',
".rc-areamonth {position:relative;}",
".rc-page--mode-month .rc-areamonth-c {border-bottom:1px solid;border-right:1px solid;border-color:#AEDCF5;}",
".rc-areamonth--pleft {padding-left:45px;}",
".rc-areamonth-head--hide {display:none;}",
".rc-areamonth-head td {text-align:center;}",
".rc-areamonth table {width:100%;table-layout:fixed;}",
".rc-areamonth thead tr {height: 1.3em;}",
".rc-areamonth thead td {overflow:hidden;}",
".rc-areamonth-resizer {background-color:transparent;bottom:0;cursor:s-resize;height:5px;left:0;right:0;overflow:hidden;position:absolute;z-index:1;}",
rr.IE<7&&".rc-areamonth-resizer {width:100%}",
".rc-areaweek {height:auto;position:relative;overflow:hidden;background-color:#FFFFFF;}",
rr.IE<7&&".rc-areaweek {width:100%}",
".rc-areaweek .bt {position:absolute;left:0;right:0;top:0;bottom:0;overflow:hidden;}",
rr.IE<8&&".rc-areaweek .bt {height:100%}",
!(rr.IE<7)&&".rc-areaweek .gr {position:absolute;left:0;right:0;bottom:0;height:20px;overflow:hidden;background-image:url(http://i.r0.ru/m/i/chameleon/ramail-mask.png);background-position:0 100%;}",
".rc-areaweek .gr {display:none;}",
".rc-areaweek table {height:100%;border-spacing:0px;border-collapse:collapse;}",
rr.IE<7&&".rc-areaweek table {height:15em}",
".rc-areaweek td {height:100%;padding:0;vertical-align:top;border-color:#AEDCF5;border-style:solid;border-width:1px 0 0 1px;}",
".rc-areaweek .h {overflow:hidden;background-color:#EFF9FF;white-space:nowrap;padding:0 1ex;text-align:left;font-size:small;_height:20px}",
".rc-areaweek .d {margin-left:1ex;}",
".rc-areamonth--ptop .d {display:none;}",
rr.Gecko&&".rc-areaweek .h {background-image:-moz-linear-gradient(top, rgba(255,255,255,0), rgba(255,255,255,0.8));}",
rr.WebKit&&".rc-areaweek .h {background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0)), to(rgba(255,255,255,0.8)));}",
rr.IE&&".rc-areaweek .h {margin-right:0px; filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF, endColorstr=#DDFFFFFF);}",
".rc-areaweek-c {margin-top:3px;padding-top:1.3em;padding-bottom:1.5em;font-size:small;}",
".rc-areaweek-ct {width:0;height:0;overflow:hidden;visibility:hidden;}",
".rc-areaweek {font-size:medium;}",
".rc-areaweek .r, .rc-areaweek .rh {font-size:small;height:1.3em;}",
".rc-areaweek .r {position:relative;padding-bottom:5px;}",
".rc-areaweek .rh {display:none;overflow:hidden;position:absolute;width:0;}",
".rc-areaweek--h-px .rh {display:block;}",
".rc-areaweek-inf {font-size:x-small;bottom:2px;left:0;position:absolute;white-space:nowrap;text-align:center;}",
".rc-areaweek-inf .t {cursor:pointer;margin:0 10px;padding:0 15px;display:block;background-color:#EFF9FF;border:1px solid #AEDCF5;}",
".rc-areaweek-inf .n {}",
".rc-areaweek-item  {left:0;position:absolute;cursor:default;}",
".rc-areaweek-item .c  {display:block;overflow:hidden;height:1.3em;white-space:nowrap;margin:"+(rr.WebKit?'0 3px 0 3px':rr.Opera>9.5?'0 3px 0 3px':'0 2px 0 3px')+";}",
".rc-areaweek-item .c  {border-width:1px;border-style:solid;padding:1px;}",
".rc-areaweek-item .c--active  {border-width:2px;padding:0;}",
".rc-areaweek-item--A .c  {margin-left:1px;padding-left:4px;border-left-width:0;}",
".rc-areaweek-item--B .c  {margin-right:0;border-right-width:0;}",
".rc-areaweek-item--AB .c  {margin-left:1px;margin-right:0;padding-left:4px;border-left-width:0;border-right-width:0;}",
rr.IE<7&&".rc-areaweek-item .c {position:relative;}",
".rc-areaweek-item .bx {line-height:1.3em;margin-left:0.5ex;"+(rr.IE<7?'position:absolute;':'')+"}",
".rc-areaweek-item .u, .rc-areaweek-item .d  {display:none;border-top:1px solid #aa5;overflow:hidden;height:0px;float:none;margin:0 4px;}",
".rc-areaweek-item--f-day .c  {background-color:#FFF;color:#444;}",
".rc-areaweek-item .clr {display:none;height:1.3em;left:5px;overflow:hidden;position:absolute;top:2px;width:10px;}",
".rc-areaweek-item--f-day .clr {display:block;}",
".rc-areaweek-item--f-day .clr {left:6px;background-position:0 50%;background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAyCAYAAABlG0p9AAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9kDEAkOMS7Q3DMAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAYklEQVRIx+2UsQ3AMAgEH0+Ad/E4HsHZv7wUdqQ0UbCULlz5OvGIAgNQgKIgKab4H/GQVG0hqa5swqQ9TQIagIDxVgsMAR4QXd8TrS6SemBe3zrPxbivAfjKALD8ZimmuCWeBGBWnbBJLZUAAAAASUVORK5CYII=)}",
".rc-areaweek-item--f-day .bx {padding-left:10px;}",
"",
"",
".rc-areaweek-range  {bottom:0;top:0;position:absolute;z-index:1;left:0;"
+(rr.IE<7?'height:100%;':'')
+(rr.IE<9?"background-image:url('about:blank');filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#77ADEAB6, endColorstr=#77ADEAB6);":'')
+(rr.IE>8||rr.Gecko>=1.9||rr.Opera>10||rr.WebKit?"background-color:rgba(173,234,182,0.35);":'')
+"}",
".rc-areaweek-range-bx  {"
+(rr.IE>8||rr.Gecko>=1.9||rr.Opera>10||rr.WebKit?"display:none;":
(rr.IE<9?'':"height:100%;margin:0;opacity:0.35;background-color:#ADEAB6;"))
+"}",
".x-footer {border:1px solid #CCCCCC;clear:both;height:5em;margin-top:1em;}",
""
);


/* URL: /js/tiny_mce/tiny_mce_src.js */

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


/* URL: /js/mail_new/wysiwyg_template_src.js */

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
var tb=t.toolbar=cf.createToolbar("tools1");
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
title:"Размер",
onselect:function(v){
ed.execCommand('FontSize',false,v);
c.select(function(sv){return v==sv});
return false;
}});
rr.each(["Мелкий","Обычный","Крупный","Огромный"],function(v,i){
var sz=[1,3,5,7][i];
c.add(v,sz,{'class':"test",style:'white-space:nowrap;font-size:'+([7,10,14,24][i])+'pt;'})});
return c;
},
cr_fontselect:function(ed){
var c=ed.controlManager.createListBox('fontselect',{
title:"Шрифт",
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
