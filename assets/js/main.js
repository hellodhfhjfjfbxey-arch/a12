(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var lo=$('lf-o');if(lo){var L=[['Full-grain',[10,6,10,6,8],'The strongest, with a rich patina over time.'],['Top-grain',[8,7,6,7,8],'Smooth and even, resists stains.'],['Pebbled',[8,9,7,7,5],'Soft and forgiving, hides scuffs.'],['Saffiano',[9,4,3,9,10],'Scratch-resistant and wipe-clean.'],['Nubuck',[6,9,6,3,5],'Velvety but sturdier than suede.'],['Suede',[4,10,5,2,3],'The softest; marks and soaks easily.'],['Patent',[6,4,2,10,9],'High gloss, repels water, can crack.']],bs=[].slice.call(document.querySelectorAll('#lf-p button'));
 function lf(){var on=bs.map(function(b){return b.classList.contains('on');});if(on.indexOf(true)<0)on=[true,true,true,true,true];var n=on.filter(Boolean).length;var r=L.map(function(l){var s=0;l[1].forEach(function(v,i){if(on[i])s+=v;});return [l[0],s/n,l[2]];}).sort(function(a,b){return b[1]-a[1];});
  lo.innerHTML=r.map(function(x,i){return '<li style="animation-delay:'+(i*70)+'ms"><b>'+x[0]+'<small>'+x[1].toFixed(1)+' / 10</small></b><i style="--v:'+(x[1]*10)+'%"></i><em>'+x[2]+'</em></li>';}).join('');}
 bs.forEach(function(b){b.addEventListener('click',function(){var o=!b.classList.contains('on');b.classList.toggle('on',o);b.setAttribute('aria-pressed',o);lf();});});lf();}
var st=$('sz-t');if(st){var cb=[].slice.call(document.querySelectorAll('.vl-its input')),SH={clutch:['The clutch','Phone, cards and keys, held in the hand or tucked under the arm.','About 25 &times; 14 cm','M70 110h160v80H70z','M70 110l80 46 80-46','M150 96','150','160'],
 cross:['The crossbody','The everyday essentials, hands free and close to the body.','About 24 &times; 18 cm','M80 100h140v110H80z','M80 100l70 50 70-50','M90 100C90 30 210 30 210 100','150','150'],
 top:['The top-handle','A structured day bag with room for a pouch, a bottle and a book.','About 30 &times; 22 cm','M60 110h180l-12 110H72z','M60 110h180v40H60z','M110 110c0-50 80-50 80 0','150','140'],
 tote:['The tote','Open and roomy: an A4 folder or a laptop with space to spare.','About 40 &times; 32 cm','M40 90h220l-20 140H60z','M40 90h220v6H40z','M95 90c0-70 110-70 110 0','150','120'],
 week:['The weekender','A change of clothes and everything else, for a night or two away.','About 50 &times; 28 cm','M30 120q0-30 30-30h180q30 0 30 30v90H30z','M30 140h240','M100 90c0-50 100-50 100 0','150','116']};
 function sz(){var t=0,f=0;cb.forEach(function(c){if(c.checked){t+=+c.value;f=Math.max(f,+c.getAttribute('data-f'));}});var k=f===2?'week':f===1?'tote':t<=4?'clutch':t<=8?'cross':t<=14?'top':'tote',s=SH[k];
  $('sz-b').setAttribute('d',s[3]);$('sz-f').setAttribute('d',s[4]);$('sz-h').setAttribute('d',s[5]);var c=$('sz-c');c.setAttribute('cx',s[6]);c.setAttribute('cy',s[7]);st.innerHTML='<h3>'+s[0]+'</h3><p>'+s[1]+'</p><b>'+s[2]+'</b>';}
 cb.forEach(function(c){c.addEventListener('change',sz);});sz();}
var ac=[].slice.call(document.querySelectorAll('.vl-acc figure'));ac.forEach(function(f){function on(){ac.forEach(function(x){x.classList.toggle('on',x===f);});}f.addEventListener('mouseenter',on);f.addEventListener('focus',on);f.addEventListener('click',on);});
})();
