/*t.js-0.9;(c)2017 Mntn(r) <https://mn.tn/> c/o Benjamin Lips <g--AT--mn.tn>;MIT Licensed <https://mit-license.org/>;For documentation see https://mntn-dev.github.io/t.js*/


;(function($){

$.fn.t=function($c,$o){

return this.each(function(){

 var _o=$o,_c=$c,c=$(this),o,oo,P='pause',tt=!1,bb=-1,z='\u200b',q='12qwertyuiop[]\asdfghjkl;zxcvbnm,./~!@#$%^&*()_+:1234567890-=op'.split([]),
 q2='12qwertzuiop\u00fc+asdfghjkl\u00f6\u00e4#<yxcvbnm,.-!"§$%&/(()=?1234567890\u00df*p+',t=function(_1,_2){
 return $.type(_1)[0]==(_2||'n');},f=function(){g=$.grep(d,function(f){return(f[0]=='&'||!f[1]);}).length-1;return(g>-1)?g:0;},
 b=function(_){if(bb==_)return;if(!_o.blink)return;if(_o.blink_perm)return;$$$.parent().data('blinking',bb=((!_)?0:1));};

 _c===''&&(_c='<del>*</del>');
 if(c.data().is_typing){if(_c==P){c.data(P,((t(_o,'b'))?oo_=_o:((c.data(P))?(oo_=!1):(oo_=!!1))));c.data('blinking',(oo_)?1:0);}
 return(this);}else{if(_c==P)return(this);c.data('is_typing',1);}
 
 t(_c,'o')&&(_o=_c);
 
 if(/t\-/.test(c.attr('class')))return(this);
 
 if(_c=='add'&&c.data().t){

  var a=_o,_o=$.extend(c.data()),$$$=c=$(':first',c),T=t(_o.typing,'f');
  a='<'+_o.tag+' class="typing-add">'+a+'</'+_o.tag+'>';
  

 }else{

  if(_c=='add'){_c=_o;_o={};}


  var _o=$.extend({t:!!1,delay:!1,speed:75,speed_vary:!1,caret:'\u258e',tag:'span',blink:!1,blink_perm:!1,repeat:-3,pause_on_click:!1,
  wrap:!1,mistype:!1,locale:'en',init:!1,typing:!1,fin:!1},((_o)?_o:c.data())),
  oo=!1,a=!1,k,d,dl,$$,$$$,T;

  if(!c.data().t){
   c.wrapInner($('<'+_o.tag+'/>',{'class':'t-container','style':'top:auto;bottom:auto;'}));
   /^[ar]/.test(c.css('position'))||c.css({position:'relative'});
   c.css({overflow:'hidden'});
  }

  if(_o.wrap&&!c.parent().data().t_wrap){
   c.wrap($('<div/>',(/[.#]/.test(_o.wrap[0]))?((_o.wrap[0]=='#')?{'id':_o.wrap.substr(1)}:{'class':_o.wrap.substr(1)}):{style:_o.wrap}));
   c.parent().data('t_wrap',1);
  }

 
  if(t(_o.caret,'s')&&!$('.t-caret',c)[0]){
   (_o.blink===!!1)&&(_o.blink=2e2);(t(_o.blink))&&(_o.blink<50)&&(_o.blink=50);(!t(_o.blink))&&(_o.blink=!1);
   
   oo=$('<'+_o.tag+'/>',{'class':'t-caret',html:_o.caret}).appendTo(c);
   _o.blink&&c.append(z)&&(c.data('bi',setInterval(function(){if(($$$.parent().data().blinking|(v=(oo.css('visibility')[0]=='h')))||_o.blink_perm)oo.css({visibility:(v)?'visible':'hidden'});},(t(_o.blink))?_o.blink:_o.speed*((_o.speed_vary)?4:5))));
  }

  _o.blink||(c.data().bi&&clearInterval(c.data().bi)&&c.removeData('bi'));
  (!t(_o.blink_perm,'b'))&&(_o.blink_perm=!!1);
  _o.speed=(!t(_o.speed)||_o.speed<1e1)?~~1e1:_o.speed;
  _o.speed_vary&&(_o.speed/=2.5);
  _o.mistype>1||(_o.mistype=!1);
  c.data(_o);

  $('.typing-0',c).replaceWith(function(){return this.childNodes;});
  $('.typing-add',c).remove();

  $$$=c=$(':first',c);
  d=(t(_c,'s'))?_c:c.html();d==''&&(d=z);c.empty();$$$.parent().show().css({visibility:'visible'});
  t(_o.delay)&&_o.delay>0&&(k=~~((_o.delay*1e3)/_o.speed))&&_o.blink_perm||(c.parent().data('blinking',1));

  T=t(_o.typing,'f');
  (_o.pause_on_click===!!1)&&(c.parent().off('click').click(function(_){if($(_.target).data().click!='1')$(this).t('pause');}));
  

 }


 /<kbd.*?>/i.test(d=String((a||d)))&&(c.parent().data('kbd',j_=1))&&(c.parent().data('mistype',((!c.parent().data('mistype')?
 _j=10:_j=c.parent().data().mistype))))&&(_o.mistype=_j)&&(_o.kbd=j_?j_:!1);
 d=d.replace(/(.*?)[\u200b]+$/,'$1'). replace(/<\!\-\-([\s\S]+?)\-\->/g,'$1').replace(/<ins>([^0-9])<\/ins>/g,'$1').
 replace(/<(embed|command|col|wbr|img|br|input|hr)(.*?)[\/]?>/g,'<#$1$2/>').replace(/<ins>\s*(\d*[.]?\d*)\s*(<\/ins>)/g,'<ins data-ins="$1"></ins>').
 replace(/<ins(.*?)>([\s\S]*?)(<\/ins>)/g,function(a,b,c){return('<#ins'+b+'>'+c.replace(/<(?!#)/g,'<#')+'<#/ins>'+(!c?'</ins>':''));}).
 replace(/<(del.*?data-del=")(.*?)(".*?)><\/(del>)/g,'<#$1$2$3><#/$4$2</$4').
 replace(/<del(.*?)>([\s\S]*?)<\/del>/g,function(a,b,c,d){s=c.match(/<s>\s*(.*?)\s*<\/s>/i);s=(s&&s[0])?(' data-s=\"'+(s[1]||'1')+'"'):'';i=(c.match(/data-ins=\"(.*?)\"/));i=(i&&i[1])?i[1]:((s=='')?.25:.75);
 c=c.replace(/(<s>.*?<\/s>|<[\/]?.*?>)/g,'');return('<del'+b+s+' data-del="'+c.replace(/\n/,'\\n')+'" data-ins="'+i+'">'+((c!='*')?c:'')+'</del>');}).
 replace(/<(\w+)(.*?)>/g,'<$1$2><#/$1>').replace(/<\/(\w+)>/g,'</> ($1)').replace(/<[#]+/g,'<').replace(/(\/del>)\*</g,'$1<').
 match(/<ins.*?>[\s\S]*?<\/ins>|<[^<]+\/>|<\/> \(\w+\)|<[\s\S]+?><\/\w+>|&[#x]?[a-z0-9]+;|\r|\n|\t|\S|\s/ig);
 !t(k)&&(k=d.shift());d.push(z);_o.locale=='de'&&(q=q2);dl=f()+1;!a&&t(_o.init,'f')&&_o.init($$$.parent());



 $$=setInterval(function(){

  if($$$.parent().data(P))return;if(tt)return;tt=!tt;

  if(t(k)){if(--k>0){tt=!tt;b((c.data().ins<=.25)?0:1);return;}k=(c.data().ins)?'</>':d.shift();}   
  else if(_o.speed_vary&&~~(Math.random()*4)){tt=!tt;return;}b(0);

  if(c.data().del){if(c.data().s&&!k[0])c.text('');
  o=String(c.data().del);!t(k,'a')&&k[1]=='/'&&(k=o.replace(/\\n/g,'\n').split([]));
  if(t(k,'a')){if(!(p=k.pop())){if(o=='*'){$$$.wrapInner($('<'+_o.tag+'/>',{'class':'typing-0','style':'display:none;'}));c=c.parent();
  if(a){d=$.merge(['<'+_o.tag+' class="typing-add"></'+_o.tag+'>'],d,['</'+_o.tag+'>']);c=c.parent();}}c=c.parent();
  o==z&&(c.find(':last').remove());k='';}else{if(c.data().s){c.html(k.join([])+'<mark '+(((_=String(c.data().s))[0]=='.')?
  'class="'+_.substr(1)+'"':('style="background:'+((_=='1')?'yellow':_.split(',')[0])+(((_=_.split(',')[1]))?';color:'+_:''))+';"')+'>'+
  c.data().del.substr(k.length)+'</mark>');}else{c.text(k.join([]));}tt=!tt;return;}}}

  while(k[1]=='/'){c=c.parent();k=d.shift()||'';}
  while(1){c.append(k);T&&_o.typing($$$.parent(),k,f(),dl);!/<ins.*?>[\s\S]+</.test(k)&&/></.test(k)&&(c=c.find(':last'));
  if(d[0]&&/<\w+/.test(d[0]))k=d.shift();else break;}
  
  if(!(k=d.shift())){clearInterval($$);$$$.parent().removeData(['is_typing',P]);
  t(_o.repeat)&&(--_o.repeat);if(_o.repeat>-1){_o.init=!1;$$$.parent().t(t(_c,'o')?_o:_c,_o);return;}
  else{b(1);t(_o.fin,'f')&&_o.fin($$$.parent());}return;}

  if(((_o.mistype&&!_o.kbd)||(_o.kbd&&/kbd/i.test(c.prop('tagName'))))&&k&&!k[1]&&c.data().del!=z&&k!='\x20'&&!~~(Math.random()*_o.mistype)&&(__=$.inArray(k.toLowerCase(),q,2))>-1)
  {__+=(~~(Math.random()*2))+1;~~(Math.random()*2)&&(__-=3);d=$.merge([((k.charCodeAt(0)<0x5a)?q[__].toUpperCase():q[__]),'</del>',k],d);
  k='<del data-ins=".25" data-del="'+z+'"></del>';}if(k&&k[1]=='/'&&c.data().ins)k=~~((Number(c.data().ins)*1e3)/_o.speed);tt=!tt;

 },_o.speed);


});}})(jQuery);
