/* Interaktivne animacije za kurs "Fizika bez straha" */
(function(){
const TAU=Math.PI*2;
const RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
const T=s=>window.TR?window.TR(s):s;
const SIMS=window.SIMS={};
function n(v,d){ if(d===undefined){d=Math.abs(v)>=100?0:Math.abs(v)>=10?1:2} let s=(+v).toFixed(d); if(s.indexOf('.')>=0){s=s.replace(/0+$/,'').replace(/\.$/,'')} return s.replace('.',','); }
function cols(){const s=getComputedStyle(document.documentElement),g=k=>s.getPropertyValue(k).trim();
 return{bg:g('--sim-bg'),ink:g('--ink'),mut:g('--muted'),grid:g('--grid'),line:g('--line'),blue:g('--c-blue'),red:g('--c-red'),green:g('--c-green'),orange:g('--c-orange'),violet:g('--c-violet'),mark:g('--marker'),paper:g('--paper')}}
function txt(c,s,x,y,color,align,size,weight){c.font=(weight||700)+' '+(size||13)+'px Nunito, system-ui, sans-serif';c.fillStyle=color;c.textAlign=align||'left';c.textBaseline='middle';c.fillText(s,x,y)}
function arrow(c,x1,y1,x2,y2,color,w,label){const dx=x2-x1,dy=y2-y1,L=Math.hypot(dx,dy);if(L<3)return;const a=Math.atan2(dy,dx),hs=Math.min(12,L*.6);
 c.strokeStyle=color;c.fillStyle=color;c.lineWidth=w||3;c.lineCap='round';c.beginPath();c.moveTo(x1,y1);c.lineTo(x2-Math.cos(a)*hs*.8,y2-Math.sin(a)*hs*.8);c.stroke();
 c.beginPath();c.moveTo(x2,y2);c.lineTo(x2-hs*Math.cos(a-.42),y2-hs*Math.sin(a-.42));c.lineTo(x2-hs*Math.cos(a+.42),y2-hs*Math.sin(a+.42));c.closePath();c.fill();
 if(label)txt(c,label,x2+Math.cos(a)*14,y2+Math.sin(a)*14,color,'center',13,800)}
function line(c,pts,color,w,dash){c.strokeStyle=color;c.lineWidth=w||2;c.setLineDash(dash||[]);c.beginPath();pts.forEach((p,i)=>i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1]));c.stroke();c.setLineDash([])}
function circ(c,x,y,r,fill,stroke,w){c.beginPath();c.arc(x,y,r,0,TAU);if(fill){c.fillStyle=fill;c.fill()}if(stroke){c.strokeStyle=stroke;c.lineWidth=w||2;c.stroke()}}
function rrect(c,x,y,w,h,r,fill,stroke){c.beginPath();c.roundRect?c.roundRect(x,y,w,h,r):c.rect(x,y,w,h);if(fill){c.fillStyle=fill;c.fill()}if(stroke){c.strokeStyle=stroke;c.lineWidth=2;c.stroke()}}
function alpha(col,a){ if(col.startsWith('#')){let h=col.slice(1);if(h.length===3)h=h.split('').map(x=>x+x).join('');const v=parseInt(h,16);return`rgba(${v>>16&255},${v>>8&255},${v&255},${a})`} return col}
/* grafik */
function plot(c,C,x,y,w,h,o){ // o:{xmax,ymin,ymax,xl,yl,series:[{pts,color}]}
 const ymin=o.ymin||0,X=v=>x+v/o.xmax*w,Y=v=>y+h-(v-ymin)/(o.ymax-ymin)*h;
 c.strokeStyle=C.grid;c.lineWidth=1;
 for(let i=0;i<=4;i++){const yy=y+h*i/4;c.beginPath();c.moveTo(x,yy);c.lineTo(x+w,yy);c.stroke()}
 for(let i=0;i<=4;i++){const xx=x+w*i/4;c.beginPath();c.moveTo(xx,y);c.lineTo(xx,y+h);c.stroke()}
 line(c,[[x,y],[x,y+h],[x+w,y+h]],C.mut,1.5);
 if(ymin<0&&o.ymax>0)line(c,[[x,Y(0)],[x+w,Y(0)]],C.mut,1);
 txt(c,o.yl,x+4,y-10,C.mut,'left',12);txt(c,o.xl,x+w,y+h+14,C.mut,'right',12);
 txt(c,n(o.ymax,0),x-4,y,C.mut,'right',11,600);txt(c,n(ymin,0),x-4,y+h,C.mut,'right',11,600);txt(c,n(o.xmax,0),x+w,y+h+28>c.canvas.height?y+h-8:y+h+14,C.mut,'center',11,600);
 c.save();c.beginPath();c.rect(x,y-2,w+2,h+4);c.clip();
 o.series.forEach(s=>{if(s.pts.length>1)line(c,s.pts.map(p=>[X(p[0]),Y(p[1])]),s.color,2.5);const l=s.pts[s.pts.length-1];if(l)circ(c,X(l[0]),Y(l[1]),4,s.color)});
 c.restore();
}

function makeSim(host,def){
 host.innerHTML='';
 const wrap=document.createElement('div');wrap.className='sim';
 const cv=document.createElement('canvas');cv.style.touchAction=def.pointer?'none':'pan-y';cv.setAttribute('role','img');cv.setAttribute('aria-label',T(def.alt||'Animacija'));
 const out=document.createElement('div');out.className='sim-readout';
 const ctr=document.createElement('div');ctr.className='sim-ctrl';
 wrap.append(cv,out,ctr);host.appendChild(wrap);
 const p={},S={t:0};
 let running=!RM;
 (def.toggles||[]).forEach(o=>{p[o.k]=o.v||0;const g=document.createElement('div');g.className='seg';g.setAttribute('role','group');
  o.opts.forEach((lab,i)=>{const b=document.createElement('button');b.type='button';b.textContent=T(lab);b.setAttribute('aria-pressed',i===p[o.k]);
   b.onclick=()=>{p[o.k]=i;g.querySelectorAll('button').forEach((x,j)=>x.setAttribute('aria-pressed',j===i));def.onChange&&def.onChange(p,S,o.k);running=true;upd()};g.appendChild(b)});ctr.appendChild(g)});
 (def.controls||[]).forEach(o=>{p[o.k]=o.v;const id='s_'+def.name+'_'+o.k;const row=document.createElement('label');row.className='ctl';row.htmlFor=id;
  row.innerHTML=`<span>${T(o.l)}</span><output></output><input type="range" id="${id}" min="${o.min}" max="${o.max}" step="${o.st}" value="${o.v}">`;
  const inp=row.querySelector('input'),ou=row.querySelector('output');const show=()=>{ou.textContent=(o.fmt?o.fmt(p[o.k]):n(p[o.k]))+(o.u?' '+o.u:'')};show();
  inp.addEventListener('input',()=>{p[o.k]=+inp.value;show();def.onChange&&def.onChange(p,S,o.k)});ctr.appendChild(row)});
 (def.buttons||[]).forEach(o=>{const b=document.createElement('button');b.type='button';b.className='btn-sim';b.textContent=T(o.l);b.onclick=()=>{o.fn(p,S);running=true;upd()};ctr.appendChild(b)});
 const pb=document.createElement('button');pb.type='button';pb.className='btn-sim ghost';ctr.appendChild(pb);
 const upd=()=>{pb.textContent=T(running?'Pauza':'Pokreni')};pb.onclick=()=>{running=!running;upd()};upd();
 const ctx=cv.getContext('2d');let W=0,H=0,dpr=1;
 function size(){W=Math.max(260,wrap.clientWidth);H=Math.round(Math.max(def.minH||250,Math.min(W*(def.ratio||.55),def.maxH||440)));dpr=window.devicePixelRatio||1;cv.width=W*dpr;cv.height=H*dpr;cv.style.height=H+'px';S.W=W;S.H=H;def.resize&&def.resize(W,H,p,S)}
 const ro=new ResizeObserver(()=>{if(Math.abs(wrap.clientWidth-W)>2)size()});ro.observe(wrap);
 size();def.init&&def.init(p,S);
 if(def.pointer){const pos=e=>{const r=cv.getBoundingClientRect();return[e.clientX-r.left,e.clientY-r.top]};
  cv.addEventListener('pointerdown',e=>{cv.setPointerCapture(e.pointerId);def.pointer('down',pos(e),p,S)});
  cv.addEventListener('pointermove',e=>def.pointer('move',pos(e),p,S));
  cv.addEventListener('pointerup',e=>def.pointer('up',pos(e),p,S));cv.addEventListener('pointerleave',e=>def.pointer('leave',pos(e),p,S))}
 let last=performance.now(),raf,alive=true,C=cols(),fc=0,lastRead='';
 function frame(now){if(!alive)return;const dt=Math.max(0,Math.min(.05,(now-last)/1000));last=now;
  if(running){S.t+=dt;def.step&&def.step(dt,p,S)}
  if(fc++%30===0)C=cols();
  ctx.setTransform(dpr,0,0,dpr,0,0);ctx.fillStyle=C.bg;ctx.fillRect(0,0,W,H);def.draw(ctx,W,H,p,S,C);
  if(def.read){const r=def.read(p,S).map(a=>`<div><span>${T(a[0])}</span><b class="f">${a[1]}</b></div>`).join('');if(r!==lastRead){out.innerHTML=r;lastRead=r}}
  raf=requestAnimationFrame(frame)}
 raf=requestAnimationFrame(frame);
 return()=>{alive=false;cancelAnimationFrame(raf);ro.disconnect()}
}
const reg=(name,def)=>{def.name=name;SIMS[name]=host=>makeSim(host,def)};

/* 1. Od atoma do Zemlje */
const SC=[[-10,'Atom','0,1 nm (nanometar)'],[-9,'Molekul','1 nm'],[-7,'Virus','100 nm'],[-5,'Ćelija','10 µm (mikrometar)'],[-4,'Debljina vlasi','0,1 mm'],[-3,'Zrno peska','1 mm (milimetar)'],[-2,'Mrav','1 cm (centimetar)'],[0,'Čovek','oko 1,7 m (metar)'],[2,'Fudbalski teren','100 m'],[3,'Šetnja od 1 km','1 km (kilometar)'],[4,'Mont Everest','8,8 km'],[5,'Dužina Srbije','oko 500 km'],[7,'Prečnik Zemlje','12 742 km']];
reg('units',{alt:'Skala veličina od atoma do Zemlje',ratio:.5,controls:[{k:'i',l:'Pomeri se kroz svet veličina',min:0,max:SC.length-1,st:1,v:7,fmt:v=>T(SC[v][1])}],
 init(p,S){S.z=p.i},step(dt,p,S){S.z+=(p.i-S.z)*Math.min(1,dt*5)},
 draw(c,W,H,p,S,C){const x0=40,x1=W-40,y=H-50,X=e=>x0+(e+10)/17*(x1-x0);
  line(c,[[x0,y],[x1,y]],C.ink,2);
  for(let e=-10;e<=7;e++){const x=X(e);line(c,[[x,y-6],[x,y+6]],C.mut,1.5);if(W>520||e%2===0)txt(c,'10',x-3,y+20,C.mut,'center',11,700),txt(c,String(e),x+6,y+14,C.mut,'left',9,700)}
  txt(c,T('metara'),x1,y+36,C.mut,'right',11,600);
  const it=SC[p.i],xm=X(it[0]+(S.z-p.i)*0);
  const zx=X(SC[Math.round(S.z)][0]);
  arrow(c,zx,y-70,zx,y-10,C.red,3);
  const r=18+S.z/(SC.length-1)*Math.min(70,H*.22);
  const cx=W/2,cy=(y-80)/2+12;
  circ(c,cx,cy,r,alpha(C.blue,.18),C.blue,2.5);
  for(let k=0;k<6;k++){const a=S.t*.6+k*TAU/6;circ(c,cx+Math.cos(a)*r*.55,cy+Math.sin(a)*r*.55,2.5,C.blue)}
  txt(c,T(it[1]),cx,cy+r+20,C.ink,'center',18,800);
  txt(c,T(it[2]),cx,cy+r+40,C.red,'center',14,800);
 },
 read(p){const e=SC[p.i][0],sup=String(e).split('').map(ch=>'⁻⁰¹²³⁴⁵⁶⁷⁸⁹'['-0123456789'.indexOf(ch)]).join('');return[['Veličina u metrima (red veličine)',e===0?'1 m':'10'+sup+' m']]}});

/* 2. Ravnomerno kretanje: dva auta */
function car(c,x,y,col,C,s){s=s||1;rrect(c,x-24*s,y-16*s,48*s,14*s,4,col);rrect(c,x-12*s,y-26*s,26*s,11*s,4,col);circ(c,x-13*s,y-1,6*s,C.ink);circ(c,x+13*s,y-1,6*s,C.ink)}
reg('uniform',{alt:'Dva automobila se kreću stalnom brzinom',ratio:.62,maxH:470,
 controls:[{k:'v1',l:'Brzina plavog auta',min:1,max:15,st:1,v:5,u:'m/s'},{k:'v2',l:'Brzina crvenog auta',min:1,max:15,st:1,v:9,u:'m/s'}],
 buttons:[{l:'Kreni ispočetka',fn:(p,S)=>{S.t=0;S.x1=S.x2=0;S.h=[]}}],
 init(p,S){S.x1=S.x2=0;S.h=[];S.acc=0},onChange(p,S){S.t=0;S.x1=S.x2=0;S.h=[]},
 step(dt,p,S){S.x1=Math.min(100,S.x1+p.v1*dt);S.x2=Math.min(100,S.x2+p.v2*dt);S.acc+=dt;if(S.acc>.1){S.acc=0;S.h.push([S.t,S.x1,S.x2])}
  if(S.t>20||(S.x1>=100&&S.x2>=100&&S.t>1)){S.t=0;S.x1=S.x2=0;S.h=[]}},
 draw(c,W,H,p,S,C){const x0=40,x1=W-30,X=m=>x0+m/100*(x1-x0),ry=H*.3;
  rrect(c,x0-10,ry-48,x1-x0+20,92,10,alpha(C.mut,.08));
  for(let m=0;m<=100;m+=10){line(c,[[X(m),ry+8],[X(m),ry+16]],C.mut,1.5);txt(c,m+' m',X(m),ry+28,C.mut,'center',10,700)}
  line(c,[[x0,ry+4],[x1,ry+4]],C.mut,2);line(c,[[x0,ry-26],[x1,ry-26]],C.mut,1,[8,8]);
  car(c,X(S.x1),ry-30,C.blue,C,.8);car(c,X(S.x2),ry,C.red,C,.8);
  const gy=ry+52,gh=H-gy-30;
  plot(c,C,x0,gy,x1-x0,gh,{xmax:20,ymax:100,xl:'t (s)',yl:T('s (m) — pređeni put'),series:[{pts:S.h.map(a=>[a[0],a[1]]),color:C.blue},{pts:S.h.map(a=>[a[0],a[2]]),color:C.red}]});
 },
 read(p,S){return[['Vreme',n(S.t,1)+' s'],['Plavi: put',n(S.x1,1)+' m'],['Crveni: put',n(S.x2,1)+' m'],['Plavi u km/h',n(p.v1*3.6,1)+' km/h'],['Crveni u km/h',n(p.v2*3.6,1)+' km/h']]}});

/* 3. Ubrzanje */
reg('accel',{alt:'Auto koji ubrzava i grafik brzine',ratio:.62,maxH:470,
 controls:[{k:'v0',l:'Početna brzina v₀',min:0,max:20,st:1,v:0,u:'m/s'},{k:'a',l:'Ubrzanje a',min:-4,max:4,st:.5,v:2,u:'m/s²'}],
 buttons:[{l:'Kreni ispočetka',fn:(p,S)=>{S.t=0;S.x=0;S.v=p.v0;S.h=[]}}],
 init(p,S){S.x=0;S.v=p.v0;S.h=[];S.acc=0},onChange(p,S){S.t=0;S.x=0;S.v=p.v0;S.h=[]},
 step(dt,p,S){S.v=Math.max(0,S.v+p.a*dt);S.x+=S.v*dt;S.acc+=dt;if(S.acc>.1){S.acc=0;S.h.push([S.t,S.v])}if(S.t>12||S.x>300){S.t=0;S.x=0;S.v=p.v0;S.h=[]}},
 draw(c,W,H,p,S,C){const ry=H*.24;
  const off=(S.x*12)%60;for(let k=-1;k<W/60+1;k++){line(c,[[k*60-off,ry+10],[k*60-off+30,ry+10]],C.mut,3)}
  line(c,[[0,ry+2],[W,ry+2]],C.mut,2);car(c,W*.3,ry-4,C.blue,C,1);
  if(p.a!==0&&!(p.a<0&&S.v<=0))arrow(c,W*.3,ry-48,W*.3+p.a*18,ry-48,p.a>0?C.green:C.red,4,'a');
  if(S.v>0)arrow(c,W*.3,ry-62,W*.3+Math.min(160,S.v*4),ry-62,C.blue,3,'v');
  const gx=W*.62,gy=ry-30,gr=Math.min(52,H*.14);
  c.beginPath();c.arc(gx+gr,gy+gr*0.4,gr,Math.PI,0);c.strokeStyle=C.mut;c.lineWidth=6;c.stroke();
  const ang=Math.PI+Math.min(1,S.v*3.6/250)*Math.PI;arrow(c,gx+gr,gy+gr*.4,gx+gr+Math.cos(ang)*gr*.85,gy+gr*.4+Math.sin(ang)*gr*.85,C.red,3);
  txt(c,n(S.v*3.6,0)+' km/h',gx+gr,gy+gr*.4+16,C.ink,'center',14,800);
  const gy2=ry+40;plot(c,C,40,gy2,W-70,H-gy2-30,{xmax:12,ymax:70,xl:'t (s)',yl:T('v (m/s) — brzina'),series:[{pts:S.h,color:C.blue}]});
 },
 read(p,S){return[['Vreme',n(S.t,1)+' s'],['Brzina',n(S.v,1)+' m/s'],['Pređeni put',n(S.x,0)+' m']]}});

/* 4. Hitac */
const PL=[['Zemlja',9.81],['Mesec',1.62],['Mars',3.71]];
reg('projectile',{alt:'Kosi hitac lopte',ratio:.58,
 toggles:[{k:'pl',opts:['Zemlja','Mesec','Mars'],v:0}],
 controls:[{k:'v0',l:'Početna brzina',min:5,max:30,st:1,v:18,u:'m/s'},{k:'ang',l:'Ugao bacanja',min:5,max:85,st:5,v:45,u:'°'}],
 buttons:[{l:'Baci loptu',fn:(p,S)=>launch(p,S)}],
 init(p,S){S.old=[];launch(p,S)},onChange(p,S){launch(p,S)},
 step(dt,p,S){if(S.fl){S.tt+=dt*S.sp;if(S.tt>=S.T){S.tt=S.T;S.fl=false;S.wait=0}}else{S.wait+=dt;if(S.wait>1.5)launch(p,S,true)}},
 draw(c,W,H,p,S,C){const g=PL[p.pl][1],a=p.ang*Math.PI/180,vx=p.v0*Math.cos(a),vy=p.v0*Math.sin(a);
  const gx=40,gy=H-36,sc=S.sc;
  line(c,[[0,gy],[W,gy]],C.mut,2);
  for(let m=0;m*sc<W-60;m+=S.tick)txt(c,n(m,0),gx+m*sc,gy+14,C.mut,'center',10,700);
  S.old.forEach(o=>line(c,o,alpha(C.mut,.5),1.5,[4,5]));
  const pts=[];for(let i=0;i<=60;i++){const t=S.tt*i/60;pts.push([gx+vx*t*sc,gy-(vy*t-g*t*t/2)*sc])}line(c,pts,C.blue,2.5);
  const t=S.tt,x=gx+vx*t*sc,y=gy-(vy*t-g*t*t/2)*sc,vyn=vy-g*t;
  arrow(c,x,y,x+vx*3,y,C.green,2.5,'vx');arrow(c,x,y,x,y-vyn*3,C.red,2.5,'vy');
  circ(c,x,y,8,C.orange,C.ink,1.5);
  txt(c,T(PL[p.pl][0])+'  g = '+n(g)+' m/s²',W-14,18,C.mut,'right',13,800);
 },
 read(p,S){const g=PL[p.pl][1],a=p.ang*Math.PI/180;return[['Domet',n(p.v0*p.v0*Math.sin(2*a)/g,1)+' m'],['Najveća visina',n(Math.pow(p.v0*Math.sin(a),2)/(2*g),1)+' m'],['Vreme leta',n(2*p.v0*Math.sin(a)/g,1)+' s']]}});
function launch(p,S,keep){const g=PL[p.pl][1],a=Math.max(.001,p.ang*Math.PI/180);if(S.pts&&!keep){}S.T=Math.max(.3,2*p.v0*Math.sin(a)/g);const R=Math.max(1,p.v0*p.v0*Math.sin(2*a)/g),Hm=Math.max(1,Math.pow(p.v0*Math.sin(a),2)/(2*g));
 const W=S.W,H=S.H;S.sc=Math.min((W-80)/(R*1.05),(H-80)/(Hm*1.1),40);S.tick=[1,2,5,10,20,50,100,200].find(t=>t*S.sc>48)||500;S.tt=0;S.fl=true;S.sp=S.T/3.2;S.wait=0}

/* 5. Kružno kretanje */
reg('circle',{alt:'Telo na kružnoj putanji sa vektorima brzine i ubrzanja',ratio:.6,
 controls:[{k:'r',l:'Poluprečnik kruga r',min:1,max:5,st:.5,v:3,u:'m'},{k:'T',l:'Vreme jednog kruga (period) T',min:1,max:8,st:.5,v:4,u:'s'}],
 buttons:[{l:'Preseci konac!',fn:(p,S)=>{if(!S.cut){S.cut=true;S.cx=S.px;S.cy=S.py;S.cvx=S.vx;S.cvy=S.vy}}}],
 init(p,S){S.ph=0},step(dt,p,S){S.ph+=TAU*dt/p.T;if(S.cut){S.cx+=S.cvx*dt;S.cy+=S.cvy*dt;if(Math.abs(S.cx)>S.W||Math.abs(S.cy)>S.H)S.cut=false}},
 draw(c,W,H,p,S,C){const cx=W/2,cy=H/2,sc=(Math.min(W,H)/2-34)/5,R=p.r*sc,v=TAU*p.r/p.T;
  circ(c,cx,cy,R,null,C.mut,1.5);c.setLineDash([]);circ(c,cx,cy,4,C.ink);
  const x=cx+Math.cos(S.ph)*R,y=cy+Math.sin(S.ph)*R;S.px=x-cx;S.py=y-cy;S.vx=-Math.sin(S.ph)*v*sc;S.vy=Math.cos(S.ph)*v*sc;
  if(!S.cut){line(c,[[cx,cy],[x,y]],C.mut,1.5,[5,4]);
   const vl=Math.min(120,v*8),al=Math.min(110,v*v/p.r*6);
   arrow(c,x,y,x-Math.sin(S.ph)*vl,y+Math.cos(S.ph)*vl,C.blue,3,'v');arrow(c,x,y,x-Math.cos(S.ph)*al,y-Math.sin(S.ph)*al,C.red,3,'a');
   circ(c,x,y,10,C.orange,C.ink,1.5)}
  else{circ(c,cx+S.cx,cy+S.cy,10,C.orange,C.ink,1.5);txt(c,T('Bez konca telo ide PRAVO, u pravcu brzine!'),W/2,22,C.red,'center',14,800)}
 },
 read(p){const v=TAU*p.r/p.T;return[['Brzina v',n(v,2)+' m/s'],['Centripetalno ubrzanje a',n(v*v/p.r,2)+' m/s²'],['Frekvencija f',n(1/p.T,2)+' Hz']]}});

/* 6. Drugi Njutnov zakon */
const MU=[['Led',0.02],['Drvo',0.3],['Guma na asfaltu',0.7]];
reg('newton',{alt:'Kutija koju gura sila po podlozi sa trenjem',ratio:.48,minH:240,
 toggles:[{k:'mu',opts:['Led','Drvo','Guma na asfaltu'],v:1}],
 controls:[{k:'F',l:'Sila kojom guraš F',min:0,max:100,st:5,v:40,u:'N'},{k:'m',l:'Masa kutije m',min:1,max:20,st:1,v:5,u:'kg'}],
 buttons:[{l:'Zaustavi kutiju',fn:(p,S)=>{S.v=0}}],
 init(p,S){S.v=0;S.x=0},
 step(dt,p,S){const mu=MU[p.mu][1],fr=mu*p.m*9.81;let a;
  if(S.v<=1e-6){S.v=0;a=p.F>fr?(p.F-fr)/p.m:0}else{a=(p.F-fr)/p.m}
  S.v=Math.min(40,Math.max(0,S.v+a*dt));S.x+=S.v*dt;S.a=S.v<=0&&p.F<=fr?0:a},
 draw(c,W,H,p,S,C){const fy=H*.66,bx=W*.38,bs=26+p.m*2.2;
  line(c,[[0,fy],[W,fy]],C.ink,2);const off=(S.x*30)%40;
  for(let k=-1;k<W/40+1;k++)line(c,[[k*40-off,fy+2],[k*40-off-12,fy+14]],C.mut,1.5);
  rrect(c,bx-bs/2,fy-bs,bs,bs,4,alpha(C.orange,.85),C.ink);txt(c,p.m+' kg',bx,fy-bs/2,C.ink,'center',12,800);
  const fr=MU[p.mu][1]*p.m*9.81,ftr=S.v>0?fr:Math.min(p.F,fr),k=Math.min(1.4,150/Math.max(100,p.m*9.81));
  arrow(c,bx-bs/2-p.F*k-6,fy-bs/2,bx-bs/2-6,fy-bs/2,C.blue,4,'');txt(c,'F',bx-bs/2-p.F*k-16,fy-bs/2,C.blue,'center',14,800);
  arrow(c,bx,fy-3,bx-ftr*k,fy-3,C.red,4,'');if(ftr>1)txt(c,T('trenje'),bx-ftr*k-8,fy+22,C.red,'center',12,800);
  arrow(c,bx,fy-bs/2,bx,fy-bs/2+Math.min(80,p.m*4),alpha(C.mut,.9),2.5,'');
  if(S.v>=40)txt(c,T('Previše brzo! Klikni „Zaustavi kutiju“.'),W/2,24,C.red,'center',14,800);
  else if(S.v===0&&p.F>0&&p.F<=fr)txt(c,T('Sila je manja od trenja: kutija stoji.'),W/2,24,C.red,'center',14,800);
 },
 read(p,S){const fr=MU[p.mu][1]*p.m*9.81;return[['Trenje',n(fr,1)+' N'],['Rezultujuća sila',n(Math.max(0,S.v>0?p.F-fr:Math.max(0,p.F-fr)),1)+' N'],['Ubrzanje a',n(S.a||0,2)+' m/s²'],['Brzina',n(S.v,1)+' m/s']]}});

/* 7. Opruga (Hukov zakon) */
function spring(c,x,y1,y2,col,coils,w){const pts=[[x,y1]];const L=y2-y1;coils=coils||12;w=w||14;pts.push([x,y1+8]);for(let i=0;i<coils;i++){pts.push([x+(i%2?-w:w),y1+8+(L-16)*(i+.5)/coils])}pts.push([x,y2-8],[x,y2]);line(c,pts,col,2.5)}
reg('spring',{alt:'Teg na opruzi i sile koje deluju na njega',ratio:.62,maxH:460,
 controls:[{k:'m',l:'Masa tega m',min:.2,max:5,st:.2,v:1,u:'kg'},{k:'k',l:'Krutost opruge k',min:50,max:500,st:10,v:100,u:'N/m'}],
 init(p,S){S.y=0;S.vy=0},step(dt,p,S){for(let i=0;i<4;i++){const h=dt/4,a=9.81-p.k/p.m*S.y-3*S.vy;S.vy+=a*h;S.y+=S.vy*h}},
 draw(c,W,H,p,S,C){const x=W*.4,top=20,L0=70,sc=(H-top-L0-80)/1.0,yb=top+L0+S.y*sc,bs=22+p.m*5;
  rrect(c,x-60,top-10,120,10,2,C.mut);spring(c,x,top,yb,C.ink,14);
  rrect(c,x-bs/2,yb,bs,bs,4,alpha(C.blue,.85),C.ink);txt(c,n(p.m)+' kg',x,yb+bs/2,C.card||'#fff','center',11,800);
  const rx=x+90;line(c,[[rx,top+L0],[rx,top+L0+sc]],C.mut,1.5);
  for(let cm=0;cm<=100;cm+=10){const yy=top+L0+cm/100*sc;line(c,[[rx,yy],[rx+(cm%50?6:12),yy]],C.mut,1.5);if(cm%20===0)txt(c,cm+' cm',rx+16,yy,C.mut,'left',10,700)}
  line(c,[[x-70,top+L0],[rx,top+L0]],C.green,1.5,[4,4]);txt(c,T('bez tega'),x-74,top+L0,C.green,'right',11,700);
  const fs=Math.min(1.2,90/(p.m*9.81));const cy=yb+bs/2;
  arrow(c,x+bs/2+14,cy,x+bs/2+14,cy+p.m*9.81*fs*2,C.red,3,'');txt(c,T('težina'),x+bs/2+22,cy+p.m*9.81*fs*2,C.red,'left',12,800);
  const fe=p.k*S.y;arrow(c,x-bs/2-14,cy,x-bs/2-14,cy-fe*fs*2,C.green,3,'');txt(c,T('sila opruge'),x-bs/2-20,cy-fe*fs*2,C.green,'right',12,800);
 },
 read(p,S){const x=p.m*9.81/p.k;return[['Težina Q = mg',n(p.m*9.81,1)+' N'],['Istezanje x',n(x*100,1)+' cm'],['Sila opruge k·x',n(p.k*S.y,1)+' N']]}});

/* 8. Njutnov top */
reg('orbit',{alt:'Njutnov top: ispaljivanje tela oko Zemlje',ratio:.66,maxH:520,
 controls:[{k:'v',l:'Brzina ispaljivanja',min:3,max:11.5,st:.1,v:7.6,u:'km/s'}],
 buttons:[{l:'Ispali',fn:(p,S)=>fire(p,S)}],
 init(p,S){S.tr=[];fire(p,S)},onChange(){},
 step(dt,p,S){const sh=S.cur;if(!sh||sh.done)return;const GM=398600;for(let i=0;i<40;i++){const h=dt*900/40;const r=Math.hypot(sh.x,sh.y);if(r<6371){sh.done=true;sh.res='Pada na Zemlju';break}if(r>60000){sh.done=true;sh.res='Odlazi u svemir';break}const a=-GM/(r*r*r);sh.vx+=a*sh.x*h;sh.vy+=a*sh.y*h;sh.x+=sh.vx*h;sh.y+=sh.vy*h;sh.ang+=0}
  if(S.acc++%2===0)sh.pts.push([sh.x,sh.y]);if(sh.pts.length>1400){sh.pts.shift()}
  const dang=Math.atan2(sh.y,sh.x);if(sh.prev!==undefined&&sh.prev<-Math.PI/2&&dang>=-Math.PI/2&&sh.pts.length>50)sh.res='Kruži oko Zemlje (orbita)';sh.prev=dang},
 draw(c,W,H,p,S,C){const cx=W/2,cy=H/2+10,sc=Math.min(W,H)/2/(6371*2.1);
  S.tr.forEach((sh,i)=>{const col=i===S.tr.length-1?C.red:alpha(C.mut,.5);line(c,sh.pts.map(q=>[cx+q[0]*sc,cy+q[1]*sc]),col,2)});
  circ(c,cx,cy,6371*sc,alpha(C.blue,.35),C.blue,2);circ(c,cx-6371*sc*.3,cy-6371*sc*.2,6371*sc*.25,alpha(C.green,.4));
  c.fillStyle=C.mut;c.beginPath();c.moveTo(cx-18,cy-6371*sc+2);c.lineTo(cx,cy-(6371+700)*sc);c.lineTo(cx+18,cy-6371*sc+2);c.fill();
  const sh=S.cur;if(sh)circ(c,cx+sh.x*sc,cy+sh.y*sc,5,C.orange,C.ink,1.5);
  txt(c,T('Planina je ogromna, samo da se bolje vidi'),12,H-14,C.mut,'left',11,600);
 },
 read(p,S){return[['Brzina',n(p.v,1)+' km/s'],['Ishod',T((S.cur&&S.cur.res)||'Leti...')],['Prva kosmička brzina',' ≈ 7,9 km/s']]}});
function fire(p,S){const sh={x:0,y:-(6371+700),vx:p.v,vy:0,pts:[],done:false,res:''};S.cur=sh;S.acc=0;S.tr.push(sh);if(S.tr.length>3)S.tr.shift()}

/* 9. Sudar kolica */
reg('collision',{alt:'Sudar dvoja kolica i impuls',ratio:.5,minH:250,
 toggles:[{k:'el',opts:['Odbiju se (elastičan sudar)','Slepe se (neelastičan)'],v:0}],
 controls:[{k:'m1',l:'Masa plavih kolica',min:1,max:5,st:.5,v:2,u:'kg'},{k:'m2',l:'Masa crvenih kolica',min:1,max:5,st:.5,v:2,u:'kg'},{k:'v1',l:'Brzina plavih kolica',min:1,max:5,st:.5,v:3,u:'m/s'}],
 buttons:[{l:'Ponovi sudar',fn:(p,S)=>rs(p,S)}],
 init(p,S){rs(p,S)},onChange(p,S){rs(p,S)},
 step(dt,p,S){S.x1+=S.u1*dt;S.x2+=S.u2*dt;
  if(!S.hit&&S.x1+.5>=S.x2-.5){S.hit=true;if(p.el===0){const a=((p.m1-p.m2)*S.u1+2*p.m2*S.u2)/(p.m1+p.m2),b=((p.m2-p.m1)*S.u2+2*p.m1*S.u1)/(p.m1+p.m2);S.u1=a;S.u2=b}else{const v=(p.m1*S.u1+p.m2*S.u2)/(p.m1+p.m2);S.u1=S.u2=v}}
  if(S.x2>12.5||S.x1<-1.5||S.t>7)rs(p,S)},
 draw(c,W,H,p,S,C){const X=m=>30+m/12*(W-60),ty=H*.42;
  line(c,[[20,ty+16],[W-20,ty+16]],C.mut,2);
  [[S.x1,p.m1,C.blue,S.u1],[S.x2,p.m2,C.red,S.u2]].forEach(o=>{const w=30+o[1]*8,x=X(o[0]);rrect(c,x-w/2,ty-26,w,34,5,alpha(o[2],.85),C.ink);circ(c,x-w/3,ty+10,6,C.ink);circ(c,x+w/3,ty+10,6,C.ink);txt(c,n(o[1])+' kg',x,ty-9,'#fff','center',11,800);if(Math.abs(o[3])>.05)arrow(c,x,ty-40,x+o[3]*18,ty-40,o[2],3,'')});
  const by=H*.62,bh=H-by-24,mx=Math.max(1,p.m1*p.v1)*1.2,bw=Math.min(40,W/12);
  const pre=[p.m1*p.v1,0],post=[p.m1*S.u1,p.m2*S.u2];const showPost=S.hit;
  const grp=(gx,vals,lab)=>{txt(c,T(lab),gx+bw*1.5,by-8,C.mut,'center',12,800);vals.forEach((v,i)=>{const h=v/mx*bh;rrect(c,gx+i*bw*1.1,by+bh-Math.max(0,h),bw,Math.abs(h),3,[C.blue,C.red,C.violet][i])});line(c,[[gx-4,by+bh],[gx+bw*3.4,by+bh]],C.mut,1.5)};
  grp(W*.15,[pre[0],pre[1],pre[0]+pre[1]],'Impuls PRE sudara');
  if(showPost)grp(W*.6,[Math.max(0,post[0]),Math.max(0,post[1]),post[0]+post[1]],'Impuls POSLE sudara');
  txt(c,T('plavo · crveno · ukupno'),W/2,H-10,C.mut,'center',11,700);
 },
 read(p,S){return[['Ukupan impuls pre',n(p.m1*p.v1,1)+' kg·m/s'],['Ukupan impuls posle',S.hit?n(p.m1*S.u1+p.m2*S.u2,1)+' kg·m/s':'—']]}});
function rs(p,S){S.x1=1;S.x2=6;S.u1=p.v1;S.u2=0;S.hit=false;S.t=0}

/* 10. Energija na rampi */
reg('energy',{alt:'Skejter na rampi i stubići energije',ratio:.58,
 toggles:[{k:'fr',opts:['Bez trenja','Sa trenjem'],v:0}],
 controls:[{k:'h',l:'Početna visina h',min:1,max:10,st:.5,v:6,u:'m'},{k:'m',l:'Masa skejtera m',min:20,max:80,st:5,v:50,u:'kg'}],
 buttons:[{l:'Kreni ponovo',fn:(p,S)=>{S.x=-Math.sqrt(p.h/.1);S.vx=0}}],
 init(p,S){S.x=-Math.sqrt(p.h/.1);S.vx=0},onChange(p,S,k){if(k!=='m'){S.x=-Math.sqrt(p.h/.1);S.vx=0}},
 step(dt,p,S){const a=.1,g=9.81;for(let i=0;i<8;i++){const h=dt/8,x=S.x;const acc=(-4*a*a*x*S.vx*S.vx-2*a*g*x)/(1+4*a*a*x*x)-(p.fr?0.25*S.vx:0);S.vx+=acc*h;S.x+=S.vx*h}},
 draw(c,W,H,p,S,C){const a=.1,rw=W*.62,sx=rw/22,sy=(H-60)/11,ox=rw/2+10,oy=H-30;
  const pts=[];for(let x=-11;x<=11;x+=.25)pts.push([ox+x*sx,oy-a*x*x*sy]);line(c,pts,C.ink,3);
  line(c,[[ox-12*sx,oy-p.h*sy],[ox+12*sx,oy-p.h*sy]],C.mut,1,[5,5]);txt(c,'h = '+n(p.h)+' m',ox-11*sx,oy-p.h*sy-10,C.mut,'left',11,700);
  const x=S.x,y=a*x*x;circ(c,ox+x*sx,oy-y*sy-9,9,C.orange,C.ink,1.5);
  const m=p.m,g=9.81,E0=m*g*p.h,Ep=m*g*y,v2=S.vx*S.vx*(1+4*a*a*x*x),Ek=m*v2/2,Q=Math.max(0,E0-Ep-Ek);
  const bx=rw+30,bw=Math.min(40,(W-bx-10)/4.6),bh=H-70,by=40;
  [[Ep,C.blue,'Ep'],[Ek,C.red,'Ek'],[Q,C.orange,'Q'],[E0,C.violet,'E']].forEach((o,i)=>{const hh=o[0]/E0*bh,xx=bx+i*bw*1.15;rrect(c,xx,by+bh-hh,bw,hh,3,o[1]);txt(c,o[2],xx+bw/2,by+bh+14,C.ink,'center',W<500?9:11,800)});
  txt(c,T('Energija (J)'),bx,by-16,C.mut,'left',12,800);
  S.E=[Ep,Ek,Q,E0];
 },
 read(p,S){const e=S.E||[0,0,0,0];return[['Potencijalna Ep',n(e[0],0)+' J'],['Kinetička Ek',n(e[1],0)+' J'],['Prešlo u toplotu',n(e[2],0)+' J'],['Zbir',n(e[0]+e[1]+e[2],0)+' J']]}});

/* 11. Potisak */
const LIQ=[['Ulje',920],['Voda',1000],['Morska voda',1030],['Živa',13600]];
const MAT=[[50,'stiropor'],[500,'borovo drvo'],[917,'led'],[1000,'voda'],[1200,'plastika'],[1900,'cigla'],[2700,'aluminijum'],[7800,'gvožđe'],[11300,'olovo']];
reg('buoyancy',{alt:'Telo u tečnosti: pluta ili tone',ratio:.58,
 toggles:[{k:'lq',opts:LIQ.map(l=>l[0]),v:1}],
 controls:[{k:'rho',l:'Gustina tela ρ',min:50,max:11300,st:50,v:500,u:'kg/m³'}],
 init(p,S){S.d=0;S.vd=0},
 step(dt,p,S){const rl=LIQ[p.lq][1],f=p.rho/rl;const tgt=f<1?f:1.9;S.vd+=((tgt-S.d)*30-S.vd*5)*dt;S.d+=S.vd*dt;if(S.d>1.9){S.d=1.9;S.vd=0}},
 draw(c,W,H,p,S,C){const tx=W*.2,tw=W*.5,ty=40,th=H-60,ly=ty+th*.35,bs=Math.min(80,th*.3),rl=LIQ[p.lq][1];
  rrect(c,tx,ly,tw,ty+th-ly,0,alpha(p.lq===3?C.mut:C.blue,.25));line(c,[[tx,ty],[tx,ty+th],[tx+tw,ty+th],[tx+tw,ty]],C.ink,3);
  const sub=Math.min(1,S.d);let by=ly-bs+S.d*bs;if(by+bs>ty+th)by=ty+th-bs;const bx=tx+tw/2-bs/2;
  rrect(c,bx,by,bs,bs,4,alpha(p.rho<700?C.orange:p.rho<2000?C.green:C.mut,.9),C.ink);
  const sb=Math.max(0,Math.min(1,(by+bs-ly)/bs)),Fg=p.rho,Fb=rl*sb,k=70/Math.max(p.rho,rl);
  arrow(c,bx+bs*.3,by+bs/2,bx+bs*.3,by+bs/2+Fg*k*1.2+8,C.red,3,'');txt(c,T('težina'),bx-6,by+bs/2+Fg*k*1.2+8,C.red,'right',12,800);
  if(Fb>0){arrow(c,bx+bs*.7,by+bs/2,bx+bs*.7,by+bs/2-Fb*k*1.2-8,C.green,3,'');txt(c,T('potisak'),bx+bs+6,by+bs/2-Fb*k*1.2-8,C.green,'left',12,800)}
  const mat=MAT.reduce((a,b)=>Math.abs(b[0]-p.rho)<Math.abs(a[0]-p.rho)?b:a);
  txt(c,T('Liči na: ')+T(mat[1]),tx+tw+16,ty+10,C.ink,'left',14,800);
  txt(c,T(LIQ[p.lq][0])+': '+rl+' kg/m³',tx+tw+16,ty+32,C.blue,'left',13,800);
 },
 read(p){const rl=LIQ[p.lq][1],f=p.rho/rl;return[['Ishod',T(f<1?'Pluta':f===1?'Lebdi':'Tone')],['Deo tela ispod površine',f<1?n(f*100,0)+' %':'100 %']]}});

/* 12. Molekuli i temperatura */
function parts(S,N,w,h){S.ps=[];for(let i=0;i<N;i++){const a=Math.random()*TAU,s=.5+Math.random();S.ps.push({x:Math.random()*w,y:Math.random()*h,vx:Math.cos(a)*s,vy:Math.sin(a)*s})}}
function speedCol(C,s){return s<.7?C.blue:s<1.3?C.violet:C.red}
reg('particles',{alt:'Molekuli koji se kreću brže kad je toplije',ratio:.55,
 toggles:[{k:'tr',opts:['Prikaži put velike čestice','Sakrij put'],v:0}],
 controls:[{k:'T',l:'Temperatura T',min:50,max:1000,st:10,v:300,u:'K'}],
 init(p,S){parts(S,70,S.W,S.H);S.big={x:S.W/2,y:S.H/2,vx:0,vy:0,r:18,tr:[]}},
 step(dt,p,S){const W=S.W,H=S.H,f=Math.sqrt(p.T/300)*140,b=S.big;
  S.ps.forEach(q=>{q.x+=q.vx*f*dt;q.y+=q.vy*f*dt;if(q.x<3){q.x=3;q.vx=Math.abs(q.vx)}if(q.x>W-3){q.x=W-3;q.vx=-Math.abs(q.vx)}if(q.y<3){q.y=3;q.vy=Math.abs(q.vy)}if(q.y>H-3){q.y=H-3;q.vy=-Math.abs(q.vy)}
   const dx=q.x-b.x,dy=q.y-b.y,d=Math.hypot(dx,dy);if(d<b.r+3){const nx=dx/d,ny=dy/d,dot=q.vx*nx+q.vy*ny;if(dot<0){q.vx-=2*dot*nx;q.vy-=2*dot*ny;b.vx+=dot*nx*f*.05;b.vy+=dot*ny*f*.05}}});
  b.x+=b.vx*dt;b.y+=b.vy*dt;b.vx*=.985;b.vy*=.985;if(b.x<b.r||b.x>W-b.r)b.vx*=-1;if(b.y<b.r||b.y>H-b.r)b.vy*=-1;b.x=Math.max(b.r,Math.min(W-b.r,b.x));b.y=Math.max(b.r,Math.min(H-b.r,b.y));
  if((S.k=(S.k||0)+1)%4===0){b.tr.push([b.x,b.y]);if(b.tr.length>300)b.tr.shift()}},
 draw(c,W,H,p,S,C){S.ps.forEach(q=>circ(c,q.x,q.y,3.5,speedCol(C,Math.hypot(q.vx,q.vy)*Math.sqrt(p.T/300))));
  if(p.tr===0)line(c,S.big.tr,alpha(C.orange,.8),1.5);circ(c,S.big.x,S.big.y,S.big.r,alpha(C.green,.85),C.ink,1.5);txt(c,T('polen'),S.big.x,S.big.y,'#fff','center',10,800)},
 read(p){return[['Temperatura',p.T+' K = '+n(p.T-273,0)+' °C'],['Prosečna brzina molekula vazduha',n(Math.sqrt(3*8.314*p.T/.029),0)+' m/s']]}});

/* 13. Gas u cilindru */
reg('gas',{alt:'Gas u cilindru sa klipom: pritisak, zapremina, temperatura',ratio:.52,
 controls:[{k:'V',l:'Zapremina V',min:1,max:3,st:.1,v:2.5,u:'L'},{k:'T',l:'Temperatura T',min:100,max:600,st:10,v:300,u:'K'}],
 init(p,S){parts(S,50,S.W*.6,S.H-40);S.hits=0;S.hp=0},
 step(dt,p,S){const w=(S.W*.75-30)*p.V/3,h=S.H-40,f=Math.sqrt(p.T/300)*120;S.flash=Math.max(0,(S.flash||0)-dt*3);
  S.ps.forEach(q=>{q.x+=q.vx*f*dt;q.y+=q.vy*f*dt;if(q.x<3){q.x=3;q.vx=Math.abs(q.vx)}if(q.x>w-3){q.x=w-3;q.vx=-Math.abs(q.vx);S.flash=1}if(q.y<3){q.y=3;q.vy=Math.abs(q.vy)}if(q.y>h-3){q.y=h-3;q.vy=-Math.abs(q.vy)}})},
 draw(c,W,H,p,S,C){const ox=20,oy=20,w=(W*.75-30)*p.V/3,h=H-40,fullw=W*.75-30;
  line(c,[[ox+fullw+14,oy],[ox,oy],[ox,oy+h],[ox+fullw+14,oy+h]],C.ink,3);
  rrect(c,ox+w,oy+2,12,h-4,2,alpha(C.mut,.6+S.flash*.4),C.ink);rrect(c,ox+w+12,oy+h/2-5,fullw-w+20,10,2,C.mut);
  c.save();c.translate(ox,oy);S.ps.forEach(q=>circ(c,q.x,q.y,3.5,speedCol(C,Math.hypot(q.vx,q.vy)*Math.sqrt(p.T/300))));c.restore();
  const pr=0.1*8.314*p.T/(p.V/1000)/1000,gx=W*.88,gy=H/2,gr=Math.min(44,W*.07);
  circ(c,gx,gy,gr,C.paper,C.ink,2);const ang=Math.PI*.75+Math.min(1,pr/500)*Math.PI*1.5;arrow(c,gx,gy,gx+Math.cos(ang)*gr*.8,gy+Math.sin(ang)*gr*.8,C.red,2.5);
  txt(c,T('pritisak'),gx,gy+gr+14,C.mut,'center',11,800);txt(c,n(pr,0)+' kPa',gx,gy+gr+30,C.ink,'center',13,800);
 },
 read(p){const pr=0.1*8.314*p.T/(p.V/1000)/1000;return[['Pritisak p',n(pr,0)+' kPa'],['p·V/T (uvek isto!)',n(pr*p.V/p.T,3)]]}});

/* 14. Mešanje vode */
function thermoCol(C,t){return t<30?C.blue:t<60?C.violet:C.red}
reg('mix',{alt:'Mešanje hladne i tople vode',ratio:.55,
 controls:[{k:'m1',l:'Masa hladne vode',min:.1,max:2,st:.1,v:1,u:'kg'},{k:'t1',l:'Temperatura hladne vode',min:0,max:50,st:1,v:20,u:'°C'},{k:'m2',l:'Masa tople vode',min:.1,max:2,st:.1,v:1,u:'kg'},{k:'t2',l:'Temperatura tople vode',min:50,max:100,st:1,v:80,u:'°C'}],
 buttons:[{l:'Pomešaj',fn:(p,S)=>{S.pr=0;S.go=true}}],
 init(p,S){S.pr=0;S.go=false},onChange(p,S){S.pr=0;S.go=false},step(dt,p,S){if(S.go)S.pr=Math.min(1,S.pr+dt/3)},
 draw(c,W,H,p,S,C){const tf=(p.m1*p.t1+p.m2*p.t2)/(p.m1+p.m2),k=S.pr;
  const bk=(x,y,w,h,fill,t,lab)=>{line(c,[[x,y],[x,y+h],[x+w,y+h],[x+w,y]],C.ink,2.5);const fh=h*fill;rrect(c,x+2,y+h-fh,w-4,fh,0,alpha(thermoCol(C,t),.45));txt(c,n(t,1)+' °C',x+w/2,y+h+16,thermoCol(C,t),'center',14,800);txt(c,T(lab),x+w/2,y-12,C.mut,'center',12,800)};
  const bw=Math.min(110,W*.2),bh=H*.42,y=H*.18;
  bk(W*.05,y,bw,bh,(1-k)*p.m1/2,p.t1,'Hladna');bk(W*.95-bw,y,bw,bh,(1-k)*p.m2/2,p.t2,'Topla');
  const tm=k>0?p.t1+(tf-p.t1)*k:0;bk(W/2-bw*.65,y+bh*.35,bw*1.3,bh,k*(p.m1+p.m2)/4,k>0?(p.m1*p.t1*k+p.m2*p.t2*k)/(k*(p.m1+p.m2)):tf,'Smeša');
  if(S.go&&k<1){for(let i=0;i<6;i++){const s=(S.t*2+i/6)%1;circ(c,W*.05+bw+s*(W/2-bw*.65-W*.05-bw),y+s*s*bh*.5,3,C.blue);circ(c,W*.95-bw-s*(W*.95-bw-W/2-bw*.65),y+s*s*bh*.5,3,C.red)}}
  if(!S.go)txt(c,T('Klikni „Pomešaj“'),W/2,H-14,C.mut,'center',13,800);
 },
 read(p){const tf=(p.m1*p.t1+p.m2*p.t2)/(p.m1+p.m2);return[['Konačna temperatura',n(tf,1)+' °C'],['Hladna je primila',n(p.m1*4186*(tf-p.t1)/1000,1)+' kJ'],['Topla je predala',n(p.m2*4186*(p.t2-tf)/1000,1)+' kJ']]}});

/* 15. Toplotna mašina */
reg('engine',{alt:'Toplotna mašina između toplog i hladnog rezervoara',ratio:.62,maxH:460,
 controls:[{k:'T1',l:'Temperatura grejača T₁',min:400,max:1500,st:50,v:800,u:'K'},{k:'T2',l:'Temperatura hladnjaka T₂',min:250,max:400,st:10,v:300,u:'K'}],
 draw(c,W,H,p,S,C){const eta=1-p.T2/p.T1,Q1=1000,Wk=Q1*eta,Q2=Q1-Wk,cx=W*.4;
  rrect(c,cx-90,12,180,40,10,alpha(C.red,.85));txt(c,T('Grejač')+'  T₁ = '+p.T1+' K',cx,32,'#fff','center',13,800);
  rrect(c,cx-90,H-52,180,40,10,alpha(C.blue,.85));txt(c,T('Hladnjak')+'  T₂ = '+p.T2+' K',cx,H-32,'#fff','center',13,800);
  const ey=H/2;circ(c,cx,ey,34,C.paper,C.ink,2.5);const a=S.t*4;line(c,[[cx,ey],[cx+Math.cos(a)*26,ey+Math.sin(a)*26]],C.ink,3);circ(c,cx,ey,5,C.ink);txt(c,T('mašina'),cx,ey+48,C.mut,'center',11,800);
  const flow=(pts,w,col)=>{line(c,pts,alpha(col,.35),w);const L=pts.length-1;for(let i=0;i<5;i++){const s=((S.t*.7+i/5)%1)*L,j=Math.floor(s),f=s-j,pa=pts[j],pb=pts[Math.min(L,j+1)];circ(c,pa[0]+(pb[0]-pa[0])*f,pa[1]+(pb[1]-pa[1])*f,Math.max(2,w/3),col)}};
  flow([[cx,54],[cx,ey-36]],4+Q1/40,C.red);flow([[cx,ey+36],[cx,H-54]],4+Q2/40,C.blue);flow([[cx+36,ey],[W-30,ey]],Math.max(2,4+Wk/40),C.green);
  arrow(c,W-60,ey,W-24,ey,C.green,3);
  txt(c,'Q₁ = 1000 J',cx+14+Q1/80,ey/2+16,C.red,'left',13,800);txt(c,'Q₂ = '+n(Q2,0)+' J',cx+14+Q2/80,(ey+H)/2,C.blue,'left',13,800);txt(c,T('Rad')+' A = '+n(Wk,0)+' J',W-30,ey-24,C.green,'right',13,800);
 },
 read(p){const e=1-p.T2/p.T1;return[['Najveći mogući koeficijent korisnog dejstva',n(e*100,0)+' %'],['U toplotu bačeno',n(100-e*100,0)+' %']]}});

/* 16. Kriva zagrevanja */
const cI=2100,cW=4186,cP=2010,Lf=334000,Lv=2260000;
const E1=cI*20,E2=E1+Lf,E3=E2+cW*100,E4=E3+Lv,E5=E4+cP*20;
function tempOf(E){if(E<E1)return -20+E/cI;if(E<E2)return 0;if(E<E3)return (E-E2)/cW;if(E<E4)return 100;return 100+Math.min(E5-E4,E-E4)/cP}
function phaseOf(E){return E<E1?'Led se zagreva':E<E2?'Led se topi: temperatura STOJI na 0 °C':E<E3?'Voda se zagreva':E<E4?'Voda ključa: temperatura STOJI na 100 °C':'Para se zagreva'}
reg('phase',{alt:'Kriva zagrevanja leda do pare',ratio:.6,maxH:460,
 controls:[{k:'P',l:'Snaga grejača P',min:500,max:3000,st:100,v:1500,u:'W'}],
 buttons:[{l:'Kreni ispočetka',fn:(p,S)=>{S.E=0;S.h=[]}}],
 init(p,S){S.E=0;S.h=[];parts(S,24,60,60)},onChange(p,S){S.E=0;S.h=[]},
 step(dt,p,S){if(S.E<E5){S.E=Math.min(E5,S.E+p.P*dt*150);S.h.push([S.E/p.P,tempOf(S.E)])}else{S.hold=(S.hold||0)+dt;if(S.hold>3){S.hold=0;S.E=0;S.h=[]}}},
 draw(c,W,H,p,S,C){const gw=W*.62;plot(c,C,46,30,gw-60,H-66,{xmax:Math.ceil(E5/p.P/100)*100,ymin:-20,ymax:120,xl:'t (s)',yl:'T (°C)',series:[{pts:S.h,color:C.red}]});
  const bx=gw+10,bw=W-bx-16,by=40,bh=H-90,E=S.E,st=E<E2?0:E<E4?1:2;
  line(c,[[bx,by],[bx,by+bh],[bx+bw,by+bh],[bx+bw,by]],C.ink,2.5);
  const jig=(1+st*2)*(S.W?1:1);
  for(let i=0;i<24;i++){let x,y;const g=S.ps[i];
   if(st===0){x=bx+bw*.2+(i%6)*bw*.12+Math.sin(S.t*20+i)*1.5;y=by+bh-14-Math.floor(i/6)*14+Math.cos(S.t*17+i)*1.5}
   else if(st===1){x=bx+8+((g.x+S.t*g.vx*20)%60+60)%60/60*(bw-16);y=by+bh-10-((g.y+S.t*g.vy*10)%40+40)%40/40*Math.min(70,bh*.4)}
   else{x=bx+6+((g.x+S.t*g.vx*90)%60+60)%60/60*(bw-12);y=by+6+((g.y+S.t*g.vy*90)%60+60)%60/60*(bh-12)}
   circ(c,x,y,4,st===0?C.blue:st===1?C.violet:C.red)}
  rrect(c,bx+bw*.15,by+bh+8,bw*.7,10,3,alpha(C.orange,.4+.6*Math.abs(Math.sin(S.t*6))));
  txt(c,T(phaseOf(E)),46,14,E<E1||(E>=E2&&E<E3)||E>=E4?C.ink:C.red,'left',13,800);
 },
 read(p,S){return[['Temperatura',n(tempOf(S.E),1)+' °C'],['Dovedena toplota',n(S.E/1000,0)+' kJ']]}});

/* 17. Kulonov zakon */
reg('coulomb',{alt:'Dva naelektrisanja koja se privlače ili odbijaju',ratio:.45,minH:230,
 controls:[{k:'q1',l:'Naelektrisanje q₁',min:-5,max:5,st:1,v:3,u:'µC'},{k:'q2',l:'Naelektrisanje q₂',min:-5,max:5,st:1,v:-2,u:'µC'},{k:'r',l:'Rastojanje r',min:.1,max:1,st:.05,v:.4,u:'m'}],
 draw(c,W,H,p,S,C){const F=9e9*p.q1*p.q2*1e-12/(p.r*p.r),cy=H*.5,half=(W-120)/2*p.r,x1=W/2-half,x2=W/2+half,L=Math.min(130,30*Math.sqrt(Math.abs(F)));
  line(c,[[x1,cy+40],[x2,cy+40]],C.mut,1.5);txt(c,'r = '+n(p.r)+' m',W/2,cy+54,C.mut,'center',12,800);
  [[x1,p.q1,-1],[x2,p.q2,1]].forEach(o=>{const col=o[1]>0?C.red:o[1]<0?C.blue:C.mut,rad=14+Math.abs(o[1])*2.5,j=Math.sin(S.t*8)*Math.min(2,Math.abs(F)/10);circ(c,o[0]+j*o[2],cy,rad,alpha(col,.85),C.ink,1.5);txt(c,o[1]>0?'+':o[1]<0?'−':'0',o[0]+j*o[2],cy,'#fff','center',20,800)
   if(F!==0){const dir=F>0?o[2]:-o[2];arrow(c,o[0]+dir*(rad+4),cy,o[0]+dir*(rad+4+L),cy,C.green,4,'F')}});
  txt(c,T(F>0?'Isto naelektrisanje: ODBIJAJU se':F<0?'Suprotno naelektrisanje: PRIVLAČE se':'Nema sile: jedno telo je neutralno'),W/2,22,C.ink,'center',14,800)},
 read(p){const F=9e9*p.q1*p.q2*1e-12/(p.r*p.r);return[['Jačina sile F',n(Math.abs(F),3)+' N']]}});

/* 18. Linije polja */
const CF=[[[0,0,1]],[[0,0,-1]],[[-1,0,1],[1,0,-1]],[[-1,0,1],[1,0,1]]];
reg('field',{alt:'Linije električnog polja oko naelektrisanja',ratio:.6,
 toggles:[{k:'cf',opts:['Jedno +','Jedno −','+ i −','+ i +'],v:2}],
 init(p,S){S.lines=null},onChange(p,S){S.lines=null},resize(W,H,p,S){S.lines=null},
 pointer(e,pt,p,S){S.mp=e==='leave'?null:pt},
 draw(c,W,H,p,S,C){const sp=Math.min(W,H)*.22,qs=CF[p.cf].map(q=>[W/2+q[0]*sp,H/2+q[1]*sp,q[2]]);
  const E=(x,y)=>{let ex=0,ey=0;qs.forEach(q=>{const dx=x-q[0],dy=y-q[1],r2=dx*dx+dy*dy+1,r=Math.sqrt(r2);ex+=q[2]*dx/(r2*r);ey+=q[2]*dy/(r2*r)});return[ex,ey]};
  if(!S.lines){S.lines=[];const pos=qs.filter(q=>q[2]>0),src=pos.length?pos:qs,sg=pos.length?1:-1;
   src.forEach(q=>{for(let k=0;k<16;k++){const a=k/16*TAU+.1;let x=q[0]+Math.cos(a)*14,y=q[1]+Math.sin(a)*14;const pts=[[x,y]];
    for(let i=0;i<700;i++){const e=E(x,y),m=Math.hypot(e[0],e[1]);if(!m)break;x+=sg*e[0]/m*3;y+=sg*e[1]/m*3;pts.push([x,y]);if(x<-20||x>W+20||y<-20||y>H+20)break;if(qs.some(o=>o!==q&&Math.hypot(x-o[0],y-o[1])<12))break}
    S.lines.push(sg>0?pts:pts.reverse())}})}
  S.lines.forEach(l=>{line(c,l,alpha(C.mut,.55),1.5);for(let s=((S.t*40)%40);s<l.length*3;s+=40){const i=Math.floor(s/3);if(l[i]&&l[i+1]){const a=l[i],b=l[i+1],ang=Math.atan2(b[1]-a[1],b[0]-a[0]);c.save();c.translate(a[0],a[1]);c.rotate(ang);c.fillStyle=C.orange;c.beginPath();c.moveTo(5,0);c.lineTo(-4,-4);c.lineTo(-4,4);c.fill();c.restore()}}});
  qs.forEach(q=>{circ(c,q[0],q[1],13,q[2]>0?C.red:C.blue,C.ink,1.5);txt(c,q[2]>0?'+':'−',q[0],q[1],'#fff','center',18,800)});
  if(S.mp){const e=E(S.mp[0],S.mp[1]),m=Math.hypot(e[0],e[1]);if(m){const L=Math.min(60,Math.max(14,Math.sqrt(m)*900));arrow(c,S.mp[0],S.mp[1],S.mp[0]+e[0]/m*L,S.mp[1]+e[1]/m*L,C.green,3,'E');circ(c,S.mp[0],S.mp[1],5,C.green)}}
  txt(c,T('Pređi mišem ili prstom preko slike: zelena strelica pokazuje polje u toj tački'),10,H-12,C.mut,'left',W<500?10:12,700)}});

/* 19. Kondenzator */
reg('capacitor',{alt:'Pločasti kondenzator',ratio:.55,
 controls:[{k:'U',l:'Napon baterije U',min:1,max:12,st:1,v:6,u:'V'},{k:'d',l:'Razmak ploča d',min:1,max:10,st:.5,v:4,u:'mm'},{k:'A',l:'Površina ploča S',min:1,max:10,st:1,v:5,u:'dm²'}],
 draw(c,W,H,p,S,C){const Cc=8.85e-12*(p.A*.01)/(p.d/1000),Q=Cc*p.U,qmax=8.85e-12*.1/.001*12;const cx=W*.42,gap=20+p.d*14,ph=40+p.A*(H-110)/10,top=H/2-ph/2;
  rrect(c,cx-gap/2-10,top,10,ph,2,C.red);rrect(c,cx+gap/2,top,10,ph,2,C.blue);
  const ns=Math.max(1,Math.round(Q/qmax*18));for(let i=0;i<ns;i++){const yy=top+ph*(i+.5)/ns;txt(c,'+',cx-gap/2-18,yy,C.red,'center',13,800);txt(c,'−',cx+gap/2+18,yy,C.blue,'center',13,800)}
  const Ef=p.U/(p.d/1000),nl=Math.max(3,Math.round(ph/22));for(let i=0;i<nl;i++){const yy=top+ph*(i+.5)/nl;arrow(c,cx-gap/2+2,yy,cx+gap/2-2,yy,alpha(C.orange,.35+.65*Math.min(1,Ef/12000)),1.8,'')}
  const bx=W*.82;line(c,[[cx-gap/2-5,top],[cx-gap/2-5,20],[bx,20],[bx,H/2-14]],C.ink,2);line(c,[[cx+gap/2+5,top+ph],[cx+gap/2+5,H-16],[bx,H-16],[bx,H/2+14]],C.ink,2);
  line(c,[[bx-18,H/2-10],[bx+18,H/2-10]],C.ink,3);line(c,[[bx-9,H/2+10],[bx+9,H/2+10]],C.ink,5);txt(c,p.U+' V',bx+24,H/2,C.ink,'left',13,800);
  txt(c,'d',cx,top+ph+14,C.mut,'center',12,800)},
 read(p){const Cc=8.85e-12*(p.A*.01)/(p.d/1000);return[['Kapacitivnost C',n(Cc*1e12,0)+' pF'],['Naelektrisanje Q',n(Cc*p.U*1e9,2)+' nC'],['Polje između ploča E',n(p.U/(p.d/1000),0)+' V/m']]}});

/* 20. Omov zakon */
function pathPts(pts,s){let L=0;const seg=[];for(let i=0;i<pts.length-1;i++){const l=Math.hypot(pts[i+1][0]-pts[i][0],pts[i+1][1]-pts[i][1]);seg.push(l);L+=l}s=((s%L)+L)%L;for(let i=0;i<seg.length;i++){if(s<=seg[i]){const f=s/seg[i];return[pts[i][0]+(pts[i+1][0]-pts[i][0])*f,pts[i][1]+(pts[i+1][1]-pts[i][1])*f]}s-=seg[i]}return pts[0]}
function pathLen(pts){let L=0;for(let i=0;i<pts.length-1;i++)L+=Math.hypot(pts[i+1][0]-pts[i][0],pts[i+1][1]-pts[i][1]);return L}
function bulb(c,x,y,b,C,broken){circ(c,x,y,24+b*14,alpha(C.mark,.5*b));circ(c,x,y,14,b>0?alpha(C.mark,.4+.6*b):C.paper,C.ink,2);if(broken){line(c,[[x-7,y-7],[x+7,y+7]],C.red,3);line(c,[[x+7,y-7],[x-7,y+7]],C.red,3)}else line(c,[[x-6,y+4],[x-3,y-4],[x,y+4],[x+3,y-4],[x+6,y+4]],C.ink,1.5)}
function battery(c,x,y,C,U){c.fillStyle=C.bg;c.fillRect(x-14,y-22,28,44);line(c,[[x-16,y-6],[x+16,y-6]],C.ink,3);line(c,[[x-8,y+6],[x+8,y+6]],C.ink,6);txt(c,'+',x+22,y-10,C.red,'center',14,800);txt(c,U+' V',x-24,y,C.ink,'right',13,800)}
reg('ohm',{alt:'Strujno kolo sa baterijom i sijalicom',ratio:.55,
 controls:[{k:'U',l:'Napon baterije U',min:0,max:12,st:.5,v:6,u:'V'},{k:'R',l:'Otpor R',min:1,max:20,st:1,v:6,u:'Ω'}],
 init(p,S){S.s=0},step(dt,p,S){S.s+=dt*(p.U/p.R)*40},
 draw(c,W,H,p,S,C){const I=p.U/p.R,x0=50,x1=W*.55,y0=36,y1=H-36,pts=[[x0,y1],[x0,y0],[x1,y0],[x1,y1],[x0,y1]];
  line(c,pts,C.ink,2.5);const L=pathLen(pts);for(let i=0;i<16;i++){const q=pathPts(pts,-S.s+i*L/16);circ(c,q[0],q[1],4,C.blue)}
  battery(c,x0,(y0+y1)/2,C,p.U);bulb(c,x1,(y0+y1)/2,Math.min(1,p.U*I/30),C);
  rrect(c,(x0+x1)/2-30,y0-14,60,28,8,C.paper,C.ink);txt(c,n(I,2)+' A',(x0+x1)/2,y0,C.ink,'center',13,800);txt(c,T('ampermetar'),(x0+x1)/2,y0+24,C.mut,'center',10,700);
  txt(c,T('Plave tačke = elektroni (idu od − ka +)'),x0,y1+20,C.mut,'left',11,700);
  const gx=W*.66,gw=W-gx-20,gy=40,gh=H-90;plot(c,C,gx,gy,gw,gh,{xmax:12,ymax:12,xl:'U (V)',yl:'I (A)',series:[{pts:[[0,0],[12,12/p.R]],color:alpha(C.blue,.6)},{pts:[[p.U,I]],color:C.red}]})},
 read(p){const I=p.U/p.R;return[['Jačina struje I = U/R',n(I,2)+' A'],['Snaga sijalice P = U·I',n(p.U*I,1)+' W']]}});

/* 21. Redna i paralelna veza */
reg('circuits',{alt:'Dve sijalice vezane redno ili paralelno',ratio:.55,
 toggles:[{k:'par',opts:['Redna veza','Paralelna veza'],v:0}],
 controls:[{k:'U',l:'Napon U',min:1,max:12,st:1,v:12,u:'V'}],
 buttons:[{l:'Pregori / popravi sijalicu 1',fn:(p,S)=>{S.br=!S.br}}],
 init(p,S){S.s1=0;S.s2=0;S.br=false},
 step(dt,p,S){const r=cur(p,S);S.s1+=dt*r.I1*60;S.s2+=dt*r.I2*60},
 draw(c,W,H,p,S,C){const r=cur(p,S),x0=50,x1=W-50,y0=36,y1=H-30,xm=(x0+x1)/2+30;
  let pA,pB;if(!p.par){pA=[[x0,y1],[x0,y0],[x1,y0],[x1,y1],[x0,y1]];line(c,pA,C.ink,2.5);dots(c,pA,S.s1,C,r.I1);battery(c,x0,(y0+y1)/2,C,p.U);bulb(c,(x0+x1)/2,y0,Math.min(1,r.P1/12),C,S.br);bulb(c,x1,(y0+y1)/2,Math.min(1,r.P2/12),C)}
  else{pA=[[x0,y1],[x0,y0],[x1,y0],[x1,y1],[x0,y1]];pB=[[x0,y1],[x0,y0],[xm,y0],[xm,y1],[x0,y1]];line(c,pA,C.ink,2.5);line(c,[[xm,y0],[xm,y1]],C.ink,2.5);dots(c,pA,S.s1,C,r.I1);dots(c,pB,S.s2,C,r.I2);battery(c,x0,(y0+y1)/2,C,p.U);bulb(c,x1,(y0+y1)/2,Math.min(1,r.P1/12),C,S.br);bulb(c,xm,(y0+y1)/2,Math.min(1,r.P2/12),C)}
  txt(c,T('sijalica 1'),p.par?x1-22:(x0+x1)/2,p.par?(y0+y1)/2-32:y0+30,C.mut,p.par?'right':'center',11,800);txt(c,T('sijalica 2'),p.par?xm-22:x1-22,(y0+y1)/2-32,C.mut,'right',11,800)},
 read(p,S){const r=cur(p,S);return[['Struja kroz sijalicu 1',n(r.I1,2)+' A'],['Struja kroz sijalicu 2',n(r.I2,2)+' A'],['Struja iz baterije',n(p.par?r.I1+r.I2:r.I1,2)+' A']]}});
function cur(p,S){const R=6;if(!p.par){const I=S.br?0:p.U/(2*R);return{I1:I,I2:I,P1:I*I*R,P2:I*I*R}}const I1=S.br?0:p.U/R,I2=p.U/R;return{I1,I2,P1:I1*I1*R,P2:I2*I2*R}}
function dots(c,pts,s,C,I){if(I<=0)return;const L=pathLen(pts);for(let i=0;i<14;i++){const q=pathPts(pts,-s+i*L/14);circ(c,q[0],q[1],3.5,C.blue)}}

/* 22. Magnetno polje */
reg('magnet',{alt:'Magnetne igle oko provodnika sa strujom ili magneta',ratio:.6,
 toggles:[{k:'md',opts:['Provodnik sa strujom','Šipkasti magnet'],v:0}],
 controls:[{k:'I',l:'Struja kroz provodnik I (i smer)',min:-10,max:10,st:1,v:6,u:'A'}],
 init(p,S){S.ang={}},
 draw(c,W,H,p,S,C){const cx=W/2,cy=H/2,sp=42;
  const B=(x,y)=>{let bx=0,by=-0.012;if(p.md===0){const dx=x-cx,dy=y-cy,r2=dx*dx+dy*dy+100;bx+=dy*p.I/r2*.3;by+=-dx*p.I/r2*.3}else{const hl=60;[[cx+hl,1],[cx-hl,-1]].forEach(o=>{const dx=x-o[0],dy=y-cy,r=Math.hypot(dx,dy)+8;bx+=o[1]*dx/(r*r*r)*800;by+=o[1]*dy/(r*r*r)*800})}return[bx,by]};
  if(p.md===0){for(let r=40;r<Math.max(W,H);r+=50)circ(c,cx,cy,r,null,alpha(C.mut,.25),1);circ(c,cx,cy,16,C.paper,C.ink,2.5);
   if(p.I>0)circ(c,cx,cy,4,C.ink);else if(p.I<0){line(c,[[cx-7,cy-7],[cx+7,cy+7]],C.ink,2.5);line(c,[[cx+7,cy-7],[cx-7,cy+7]],C.ink,2.5)}}
  else{rrect(c,cx-80,cy-16,80,32,3,C.blue);rrect(c,cx,cy-16,80,32,3,C.red);txt(c,'S',cx-60,cy,'#fff','center',16,800);txt(c,'N',cx+60,cy,'#fff','center',16,800)}
  for(let x=sp/2;x<W;x+=sp)for(let y=sp/2;y<H;y+=sp){if(p.md===0&&Math.hypot(x-cx,y-cy)<26)continue;if(p.md===1&&Math.abs(y-cy)<26&&Math.abs(x-cx)<92)continue;
   const b=B(x,y),tgt=Math.atan2(b[1],b[0]),key=x+','+y;let a=S.ang[key];if(a===undefined)a=-Math.PI/2;let d=tgt-a;while(d>Math.PI)d-=TAU;while(d<-Math.PI)d+=TAU;a+=d*.12;S.ang[key]=a;
   const L=13,ex=Math.cos(a)*L,ey=Math.sin(a)*L;c.lineWidth=4;c.lineCap='round';c.strokeStyle=C.red;c.beginPath();c.moveTo(x,y);c.lineTo(x+ex,y+ey);c.stroke();c.strokeStyle=C.mut;c.beginPath();c.moveTo(x,y);c.lineTo(x-ex,y-ey);c.stroke();circ(c,x,y,2,C.ink)}
  txt(c,p.md===0?T(p.I>0?'Struja izlazi iz ekrana (•)':p.I<0?'Struja ulazi u ekran (×)':'Nema struje: igle pokazuju sever'):T('Crveni vrh igle = severni pol igle'),10,H-12,C.ink,'left',12,800)},
 read(p){return p.md===0?[['Struja',Math.abs(p.I)+' A'],['Smer',T(p.I>0?'iz ekrana':p.I<0?'u ekran':'—')]]:[['Polje','izlazi iz N, ulazi u S']]}});

/* 23. Lorencova sila */
reg('lorentz',{alt:'Naelektrisana čestica kruži u magnetnom polju',ratio:.6,
 toggles:[{k:'q',opts:['Proton (+)','Elektron (−)'],v:0}],
 controls:[{k:'B',l:'Jačina magnetnog polja B',min:.2,max:1,st:.1,v:.5,u:'T'},{k:'v',l:'Brzina čestice v',min:1,max:5,st:.5,v:3,u:'×10⁶ m/s'}],
 init(p,S){lr(p,S)},onChange(p,S){lr(p,S)},
 step(dt,p,S){const sg=p.q===0?-1:1;S.a+=sg*p.B*1.5*dt;S.x+=Math.cos(S.a)*p.v*45*dt;S.y+=Math.sin(S.a)*p.v*45*dt;if((S.k=(S.k||0)+1)%2===0){S.tr.push([S.x,S.y]);if(S.tr.length>400)S.tr.shift()}if(S.x<-20||S.x>S.W+20||S.y<-20||S.y>S.H+20||S.t>14)lr(p,S)},
 draw(c,W,H,p,S,C){for(let x=20;x<W;x+=34)for(let y=20;y<H;y+=34){c.strokeStyle=alpha(C.mut,.25+p.B*.4);c.lineWidth=1.5;c.beginPath();c.moveTo(x-4,y-4);c.lineTo(x+4,y+4);c.moveTo(x+4,y-4);c.lineTo(x-4,y+4);c.stroke()}
  line(c,S.tr,p.q===0?C.red:C.blue,2);const col=p.q===0?C.red:C.blue;
  const fa=S.a+(p.q===0?-1:1)*Math.PI/2;arrow(c,S.x,S.y,S.x+Math.cos(S.a)*40,S.y+Math.sin(S.a)*40,C.ink,2.5,'v');arrow(c,S.x,S.y,S.x+Math.cos(fa)*36,S.y+Math.sin(fa)*36,C.green,3,'F');
  circ(c,S.x,S.y,9,col,C.ink,1.5);txt(c,p.q===0?'+':'−',S.x,S.y,'#fff','center',13,800);
  txt(c,T('× polje ulazi u ekran'),10,H-12,C.mut,'left',12,800)},
 read(p){const m=p.q===0?1.67e-27:9.11e-31,r=m*p.v*1e6/(1.6e-19*p.B);return[['Poluprečnik kruga',p.q===0?n(r*100,1)+' cm':n(r*1e6,1)+' µm'],['Sila F = qvB',n(1.6e-19*p.v*1e6*p.B*1e13,2)+' ×10⁻¹³ N']]}});
function lr(p,S){S.x=30;S.y=S.H*.5;S.a=0;S.tr=[];S.t=0}

/* 24. Elektromagnetna indukcija */
reg('induction',{alt:'Magnet koji se kreće kroz kalem i galvanometar',ratio:.55,
 toggles:[{k:'fl',opts:['N pol napred','S pol napred'],v:0}],
 controls:[{k:'w',l:'Brzina pomeranja magneta',min:0,max:3,st:.25,v:1,u:''},{k:'N',l:'Broj navojaka kalema',min:50,max:500,st:50,v:200,u:''}],
 init(p,S){S.x=-1;S.ph=0;S.prev=null;S.emf=0;S.h=[]},
 pointer(e,pt,p,S){if(e==='down'){S.drag=true}if(e==='up'||e==='leave'){S.drag=false}if(S.drag&&e!=='up'){S.x=Math.max(-1.3,Math.min(1.3,(pt[0]-S.W*.5)/(S.W*.3)))}},
 step(dt,p,S){if(!S.drag){S.ph+=dt*p.w*1.6;S.x=Math.sin(S.ph)*1.2}const fx=x=>1/Math.pow(1+Math.pow((x-.35)/.35,2),1.5);const phi=fx(S.x)*(p.fl?-1:1);
  if(S.prev!==null)S.emf=S.emf*.6+.4*(-(phi-S.prev)/Math.max(dt,1e-3)*p.N/200);S.prev=phi;if((S.k=(S.k||0)+1)%2===0){S.h.push(S.emf);if(S.h.length>140)S.h.shift()}},
 draw(c,W,H,p,S,C){const cy=H*.4,coilX=W*.5+.35*W*.3,cw=W*.16,mx=W*.5+S.x*W*.3,ml=W*.18;
  const loops=Math.round(3+p.N/80);for(let i=0;i<loops;i++){const x=coilX-cw/2+cw*i/(loops-1);c.strokeStyle=C.orange;c.lineWidth=3;c.beginPath();c.ellipse(x,cy,6,30,0,0,TAU);c.stroke()}
  line(c,[[coilX-cw/2,cy+30],[coilX-cw/2,H-40],[W*.86,H-40]],C.ink,2);line(c,[[coilX+cw/2,cy+30],[coilX+cw/2,H-60],[W*.86,H-60]],C.ink,2);
  const gx=W*.88,gy=H-50;circ(c,gx,gy,28,C.paper,C.ink,2);const ang=-Math.PI/2+Math.max(-1.2,Math.min(1.2,S.emf*.25));arrow(c,gx,gy+14,gx+Math.cos(ang)*26,gy+14+Math.sin(ang)*26,C.red,2.5);txt(c,'G',gx,gy+20,C.mut,'center',10,800);
  const n1=p.fl?'S':'N',n2=p.fl?'N':'S';rrect(c,mx-ml,cy-14,ml/2,28,3,p.fl?C.red:C.blue);rrect(c,mx-ml/2,cy-14,ml/2,28,3,p.fl?C.blue:C.red);txt(c,n2,mx-ml*.75,cy,'#fff','center',14,800);txt(c,n1,mx-ml*.25,cy,'#fff','center',14,800);
  const gw=W*.5,gh=50,gx0=14,gy0=H-gh-14;line(c,[[gx0,gy0+gh/2],[gx0+gw,gy0+gh/2]],C.mut,1);line(c,S.h.map((v,i)=>[gx0+i/140*gw,gy0+gh/2-Math.max(-1,Math.min(1,v/5))*gh/2]),C.red,2);txt(c,T('indukovani napon'),gx0,gy0-6,C.mut,'left',11,800);
  txt(c,T('Možeš i sama da vučeš magnet mišem/prstom'),14,16,C.mut,'left',12,700)},
 read(p,S){return[['Indukovani napon (relativno)',n(S.emf,1)],['Stanje',T(Math.abs(S.emf)<.05?'Nema promene polja = nema struje':'Polje se menja = teče struja')]]}});

/* 25. Naizmenična struja i transformator */
reg('ac',{alt:'Generator naizmenične struje i transformator',ratio:.55,
 toggles:[{k:'md',opts:['Generator','Transformator'],v:0}],
 controls:[{k:'f',l:'Brzina okretanja (generator)',min:.2,max:2,st:.1,v:.5,u:'obrt/s'},{k:'N1',l:'Primarni navoji N₁ (transformator)',min:100,max:1000,st:50,v:500,u:''},{k:'N2',l:'Sekundarni navoji N₂ (transformator)',min:50,max:2000,st:50,v:100,u:''}],
 init(p,S){S.th=0;S.h=[]},step(dt,p,S){S.th+=TAU*p.f*dt;S.h.push(Math.sin(S.th));if(S.h.length>200)S.h.shift()},
 draw(c,W,H,p,S,C){if(p.md===0){const cx=W*.25,cy=H/2,R=Math.min(70,H*.3);
   rrect(c,cx-R-50,cy-40,30,80,4,C.red);rrect(c,cx+R+20,cy-40,30,80,4,C.blue);txt(c,'N',cx-R-35,cy,'#fff','center',15,800);txt(c,'S',cx+R+35,cy,'#fff','center',15,800);
   const w=Math.cos(S.th)*R;c.strokeStyle=C.orange;c.lineWidth=4;c.strokeRect(cx-Math.abs(w),cy-R*.8,Math.abs(w)*2||1,R*1.6);
   const gx=W*.48,gw=W*.48,gh=H*.6,gy=H*.2;line(c,[[gx,gy+gh/2],[gx+gw,gy+gh/2]],C.mut,1);line(c,S.h.map((v,i)=>[gx+i/200*gw,gy+gh/2-v*gh/2*.9]),C.red,2.5);
   txt(c,T('napon menja smer: + pa −'),gx,gy-8,C.mut,'left',12,800);txt(c,'+',gx-10,gy+8,C.red,'center',14,800);txt(c,'−',gx-10,gy+gh-8,C.blue,'center',14,800)}
  else{const cx=W*.45,cy=H/2,cw=Math.min(240,W*.5),ch=H*.6;rrect(c,cx-cw/2,cy-ch/2,cw,ch,6,alpha(C.mut,.35));rrect(c,cx-cw/2+28,cy-ch/2+28,cw-56,ch-56,4,C.bg);
   const coil=(x,nn,col)=>{const k=Math.max(2,Math.round(nn/100));for(let i=0;i<k;i++){const y=cy-ch/2+12+(ch-24)*i/(k-1||1);c.strokeStyle=col;c.lineWidth=3;c.beginPath();c.ellipse(x,y,22,5,0,0,TAU);c.stroke()}};
   coil(cx-cw/2+14,p.N1,C.orange);coil(cx+cw/2-14,p.N2,C.green);
   const ph=S.t*3;for(let i=0;i<8;i++){const s=(i/8+ph*.05)%1;let x,y;const L=2*(cw-28)+2*(ch-28),d=s*L,iw=cw-28,ih=ch-28,x0=cx-iw/2,y0=cy-ih/2;if(d<iw){x=x0+d;y=y0}else if(d<iw+ih){x=x0+iw;y=y0+d-iw}else if(d<2*iw+ih){x=x0+iw-(d-iw-ih);y=y0+ih}else{x=x0;y=y0+ih-(d-2*iw-ih)}circ(c,x,y,3,alpha(C.violet,.6+.4*Math.sin(ph*4)))}
   const U2=230*p.N2/p.N1;txt(c,'U₁ = 230 V',cx-cw/2-10,cy-ch/2-12,C.orange,'left',13,800);txt(c,'U₂ = '+n(U2,1)+' V',cx+cw/2+10,cy-ch/2-12,C.green,'right',13,800);
   txt(c,'N₁ = '+p.N1,cx-cw/2,cy+ch/2+16,C.mut,'left',12,800);txt(c,'N₂ = '+p.N2,cx+cw/2,cy+ch/2+16,C.mut,'right',12,800)}},
 read(p){const U2=230*p.N2/p.N1;return p.md===0?[['Frekvencija u zidnoj utičnici','50 Hz'],['Napon u utičnici','230 V']]:[['Izlazni napon U₂',n(U2,1)+' V'],['Transformator',T(U2>230?'povećava napon':U2<230?'smanjuje napon':'ne menja napon')]]}});

/* 26. Oscilacije */
reg('osc',{alt:'Teg na opruzi i klatno sa grafikom oscilovanja',ratio:.58,
 toggles:[{k:'md',opts:['Opruga','Klatno'],v:0}],
 controls:[{k:'m',l:'Masa tega m (opruga)',min:.1,max:2,st:.1,v:.5,u:'kg'},{k:'k',l:'Krutost opruge k',min:10,max:200,st:10,v:50,u:'N/m'},{k:'L',l:'Dužina klatna l',min:.2,max:2,st:.1,v:1,u:'m'}],
 init(p,S){S.h=[];S.ph=0},onChange(p,S){S.h=[]},
 step(dt,p,S){const Tp=p.md===0?TAU*Math.sqrt(p.m/p.k):TAU*Math.sqrt(p.L/9.81);S.ph+=TAU*dt/Tp;S.h.push(Math.cos(S.ph));if(S.h.length>260)S.h.shift();S.Tp=Tp},
 draw(c,W,H,p,S,C){const x=Math.cos(S.ph),aw=W*.42;
  if(p.md===0){const fy=H*.55,wx=30,eq=aw*.6,bx=eq+x*aw*.25,bs=24+p.m*12;rrect(c,wx-10,fy-60,10,70,2,C.mut);line(c,[[wx,fy+10],[aw+40,fy+10]],C.ink,2);
   const pts=[[wx,fy-14]];const nn=14;for(let i=1;i<nn;i++)pts.push([wx+(bx-bs/2-wx)*i/nn,fy-14+(i%2?-10:10)]);pts.push([bx-bs/2,fy-14]);line(c,pts,C.ink,2);
   rrect(c,bx-bs/2,fy-14-bs/2,bs,bs,4,C.blue,C.ink);line(c,[[eq,fy+16],[eq,fy+26]],C.green,2);txt(c,T('ravnoteža'),eq,fy+38,C.green,'center',11,800)}
  else{const px=aw*.55,py=24,Lp=Math.min(H-70,40+p.L*(H-110)/2),th=x*.45,bx=px+Math.sin(th)*Lp,by=py+Math.cos(th)*Lp;rrect(c,px-40,py-8,80,8,2,C.mut);line(c,[[px,py],[px,py+Lp]],C.green,1,[4,4]);line(c,[[px,py],[bx,by]],C.ink,2);circ(c,bx,by,14,C.blue,C.ink,1.5)}
  const gx=aw+60,gw=W-gx-20,gh=H*.6,gy=H*.2;line(c,[[gx,gy+gh/2],[gx+gw,gy+gh/2]],C.mut,1);line(c,[[gx,gy],[gx,gy+gh]],C.mut,1);
  line(c,S.h.map((v,i)=>[gx+gw-(S.h.length-1-i)/260*gw,gy+gh/2-v*gh/2*.9]),C.red,2.5);txt(c,T('položaj tokom vremena'),gx,gy-10,C.mut,'left',12,800)},
 read(p,S){const Tp=S.Tp||1;return[['Period T',n(Tp,2)+' s'],['Frekvencija f = 1/T',n(1/Tp,2)+' Hz']]}});

/* 27. Talasi */
reg('wave',{alt:'Transverzalni i longitudinalni talas',ratio:.45,minH:240,
 toggles:[{k:'md',opts:['Transverzalni (kao konopac)','Longitudinalni (kao zvuk)'],v:0}],
 controls:[{k:'f',l:'Frekvencija f',min:.3,max:2,st:.1,v:.8,u:'Hz'},{k:'A',l:'Amplituda A',min:5,max:40,st:1,v:24,u:'cm'}],
 draw(c,W,H,p,S,C){const v=120,lam=v/p.f,N=Math.floor((W-40)/14),cy=H*.5,kk=TAU/lam,w=TAU*p.f;
  for(let i=0;i<N;i++){const x0=20+i*14,ph=w*S.t-kk*(x0-20);let x=x0,y=cy;if(p.md===0)y=cy-p.A*Math.sin(ph)*Math.min(1,(H*.35)/40);else x=x0+p.A*.4*Math.sin(ph);
   const red=i===8;if(p.md===1)line(c,[[x,cy-30],[x,cy+30]],red?C.red:alpha(C.blue,.7),red?3:2);else circ(c,x,y,red?7:5,red?C.red:C.blue)}
  const lx=20+(((w*S.t)/kk)%lam);line(c,[[lx,H-26],[lx+lam,H-26]],C.green,2);line(c,[[lx,H-32],[lx,H-20]],C.green,2);line(c,[[lx+lam,H-32],[lx+lam,H-20]],C.green,2);txt(c,'λ',lx+lam/2,H-38,C.green,'center',15,800);
  txt(c,T('Crvena čestica samo osciluje u mestu. Talas putuje, materija ostaje!'),12,16,C.ink,'left',W<500?11:13,800)},
 read(p){const v=1.2;return[['Brzina talasa v','1,2 m/s'],['Talasna dužina λ = v/f',n(v/p.f*100,0)+' cm'],['Period T = 1/f',n(1/p.f,2)+' s']]}});

/* 28. Dopler */
reg('doppler',{alt:'Izvor zvuka u pokretu i Doplerov efekat',ratio:.58,
 controls:[{k:'s',l:'Brzina izvora (u odnosu na brzinu zvuka)',min:0,max:1.4,st:.05,v:.5,u:'× v_zvuka'}],
 init(p,S){S.w=[];S.x=0;S.e=0},onChange(p,S){S.w=[];S.x=S.W*.1},
 step(dt,p,S){const c=90;S.x+=p.s*c*dt;if(S.x>S.W*.92||S.x<0){S.x=S.W*.08;S.w=[]}S.e+=dt;if(S.e>.3){S.e=0;S.w.push({x:S.x,t:S.t})}S.w=S.w.filter(o=>(S.t-o.t)*c<S.W*1.2)},
 draw(c,W,H,p,S,C){const cy=H/2;S.w.forEach(o=>circ(c,o.x,cy,(S.t-o.t)*90,null,alpha(C.blue,.6),1.5));
  rrect(c,S.x-18,cy-10,36,20,6,C.red);circ(c,S.x,cy-14,5,C.mark);
  const ear=(x,lab)=>{circ(c,x,cy,10,C.paper,C.ink,2);txt(c,T(lab),x,cy+26,C.ink,'center',12,800)};ear(W-24,'ispred');ear(24,'iza');
  if(p.s>=1)txt(c,T('Brže od zvuka: talasi se gomilaju u udarni talas (prasak)!'),W/2,20,C.red,'center',14,800)},
 read(p){const f=440;return p.s<1?[['Ton izvora','440 Hz'],['Čuje onaj ispred',n(f/(1-p.s),0)+' Hz (viši)'],['Čuje onaj iza',n(f/(1+p.s),0)+' Hz (niži)']]:[['Stanje','nadzvučna brzina']]}});

/* 29. Elektromagnetni spektar */
const BANDS=[[-99,-11,'Gama zraci','nuklearne reakcije, lečenje raka; vrlo opasni'],[-11,-8,'Rendgenski (X) zraci','snimanje kostiju kod lekara'],[-8,-6.42,'Ultraljubičasto (UV)','sunce, preplanulost; štiti se kremom'],[-6.42,-6.12,'Vidljiva svetlost','jedino što vide naše oči'],[-6.12,-3,'Infracrveno (IR)','toplota tela, daljinski upravljač'],[-3,-1,'Mikrotalasi','mikrotalasna rerna, Wi-Fi, mobilni'],[-1,99,'Radio-talasi','radio, televizija']];
function wl2rgb(nm){let r=0,g=0,b=0;if(nm<440){r=-(nm-440)/60;b=1}else if(nm<490){g=(nm-440)/50;b=1}else if(nm<510){g=1;b=-(nm-510)/20}else if(nm<580){r=(nm-510)/70;g=1}else if(nm<645){r=1;g=-(nm-645)/65}else r=1;return`rgb(${Math.round(r*255)},${Math.round(g*255)},${Math.round(b*255)})`}
reg('spectrum',{alt:'Elektromagnetni spektar od gama zraka do radio-talasa',ratio:.55,
 controls:[{k:'e',l:'Talasna dužina (pomeri)',min:-12,max:2,st:.02,v:-6.27,u:'',fmt:v=>{const m=Math.pow(10,v);return m>=1?n(m,1)+' m':m>=1e-3?n(m*1000,1)+' mm':m>=1e-6?n(m*1e6,1)+' µm':m>=1e-9?n(m*1e9,0)+' nm':n(m*1e12,2)+' pm'}}],
 draw(c,W,H,p,S,C){const b=BANDS.find(o=>p.e>=o[0]&&p.e<o[1]),vis=p.e>=-6.42&&p.e<-6.12,nm=Math.pow(10,p.e)*1e9,col=vis?wl2rgb(nm):C.ink;
  const lampx=(p.e+12)/14,lam=8+lampx*Math.max(0,W-60);const cy=H*.33,A=H*.13,pts=[];for(let x=0;x<=W;x+=2)pts.push([x,cy-A*Math.sin(TAU*(x-S.t*60)/lam)]);line(c,pts,col,3);
  const by=H*.62,bh=26,X=e=>20+(e+12)/14*(W-40);
  BANDS.forEach((o,i)=>{const x1=X(Math.max(-12,o[0])),x2=X(Math.min(2,o[1]));if(i===3){const g=c.createLinearGradient(x1,0,x2,0);[380,450,500,560,600,700].forEach((w,j)=>g.addColorStop(j/5,wl2rgb(w)));c.fillStyle=g;c.fillRect(x1,by,x2-x1,bh)}else{rrect(c,x1,by,x2-x1,bh,0,alpha([C.violet,C.blue,C.violet,C.mark,C.red,C.orange,C.green][i],.35))}});
  const mx=X(p.e);arrow(c,mx,by-22,mx,by-2,C.red,3);
  txt(c,T('kratki talasi, velika energija'),20,by+bh+16,C.mut,'left',11,700);txt(c,T('dugi talasi, mala energija'),W-20,by+bh+16,C.mut,'right',11,700);
  txt(c,T(b[2]),20,H-36,vis?col:C.ink,'left',17,800);txt(c,T(b[3]),20,H-14,C.mut,'left',13,700)},
 read(p){const l=Math.pow(10,p.e),f=3e8/l;const ex=f.toExponential(1).split('e'),sp=String(+ex[1]).split('').map(ch=>'⁻⁰¹²³⁴⁵⁶⁷⁸⁹'['-0123456789'.indexOf(ch)]).join('');return[['Frekvencija f = c/λ',ex[0].replace('.',',')+' × 10'+sp+' Hz']]}});

/* 30. Prelamanje svetlosti */
const MED=[['Vazduh',1],['Voda',1.33],['Staklo',1.5],['Dijamant',2.42]];
reg('refraction',{alt:'Prelamanje i odbijanje zraka svetlosti',ratio:.62,maxH:470,
 toggles:[{k:'m1',opts:['Gore: vazduh','Gore: voda','Gore: staklo'],v:0},{k:'m2',opts:['Dole: vazduh','Dole: voda','Dole: staklo','Dole: dijamant'],v:2}],
 controls:[{k:'a',l:'Upadni ugao α',min:0,max:89,st:1,v:40,u:'°'}],
 draw(c,W,H,p,S,C){const n1=MED[p.m1][1],n2=MED[p.m2][1],cx=W/2,cy=H/2,R=Math.min(W,H)*.45,a=p.a*Math.PI/180,sb=n1*Math.sin(a)/n2,tir=sb>1;
  rrect(c,0,cy,W,H-cy,0,alpha(C.blue,.06+n2*.06));rrect(c,0,0,W,cy,0,alpha(C.blue,(n1-1)*.15));line(c,[[0,cy],[W,cy]],C.mut,2);line(c,[[cx,cy-R],[cx,cy+R]],C.mut,1,[6,5]);
  txt(c,T(MED[p.m1][0])+'  n = '+n(n1),12,18,C.mut,'left',13,800);txt(c,T(MED[p.m2][0])+'  n = '+n(n2),12,H-16,C.mut,'left',13,800);
  const ix=cx-Math.sin(a)*R,iy=cy-Math.cos(a)*R,rx=cx+Math.sin(a)*R,ry=iy;
  const beam=(x1,y1,x2,y2,col,w)=>{line(c,[[x1,y1],[x2,y2]],col,w);for(let k=0;k<4;k++){const s=((S.t*.5+k/4)%1);circ(c,x1+(x2-x1)*s,y1+(y2-y1)*s,w*.9,col)}};
  beam(ix,iy,cx,cy,C.orange,4);beam(cx,cy,rx,ry,alpha(C.orange,tir?1:.35),tir?4:2);
  if(!tir){const b=Math.asin(sb);beam(cx,cy,cx+Math.sin(b)*R,cy+Math.cos(b)*R,C.orange,4);txt(c,'β = '+n(b*180/Math.PI,1)+'°',cx+12,cy+40,C.red,'left',14,800)}
  else txt(c,T('TOTALNA REFLEKSIJA: svetlost ne izlazi!'),W/2,cy+40,C.red,'center',15,800);
  txt(c,'α = '+p.a+'°',cx-12,cy-40,C.ink,'right',14,800)},
 read(p){const n1=MED[p.m1][1],n2=MED[p.m2][1],sb=n1*Math.sin(p.a*Math.PI/180)/n2;return[['Prelomni ugao β',sb>1?T('nema (totalna refleksija)'):n(Math.asin(sb)*180/Math.PI,1)+'°'],['Granični ugao',n1>n2?n(Math.asin(n2/n1)*180/Math.PI,1)+'°':'—']]}});

/* 31. Sočiva */
reg('lens',{alt:'Lik predmeta kroz sočivo',ratio:.55,
 toggles:[{k:'dv',opts:['Sabirno sočivo','Rasipno sočivo'],v:0}],
 controls:[{k:'f',l:'Žižna daljina f',min:5,max:20,st:1,v:10,u:'cm'},{k:'p',l:'Udaljenost predmeta p',min:2,max:45,st:1,v:25,u:'cm'}],
 draw(c,W,H,p,S,C){const f=p.dv?-p.f:p.f,sc=(W-40)/100,cx=W/2,cy=H*.55,X=d=>cx+d*sc,ho=Math.min(H*.3,60);
  line(c,[[0,cy],[W,cy]],C.mut,1.5);c.strokeStyle=C.blue;c.lineWidth=3;c.beginPath();c.ellipse(cx,cy,p.dv?4:10,H*.42,0,0,TAU);c.stroke();
  if(p.dv){txt(c,')(',cx,cy-H*.42-8,C.blue,'center',14,800)}
  [[-Math.abs(f),'F'],[Math.abs(f),'F']].forEach(o=>{circ(c,X(o[0]),cy,4,C.ink);txt(c,o[1],X(o[0]),cy+16,C.ink,'center',12,800)});
  const ox=X(-p.p);arrow(c,ox,cy,ox,cy-ho,C.green,4);
  const den=p.p-f,l=Math.abs(den)<.01?Infinity:p.p*f/den,M=-l/p.p,ix=X(l),ih=-M*ho*-1;
  const top=[ox,cy-ho];
  // zrak 1: paralelan -> kroz žižu
  line(c,[top,[cx,cy-ho]],C.orange,2);
  const s1=(f>0)?[(cy-ho)-cy, f]:null;const dirY=ho/f; // nagib posle sočiva
  const after=x=>cy-ho+dirY*(x-cx)/sc;line(c,[[cx,cy-ho],[W,after(W)]],C.orange,2);
  if(l<0||f<0)line(c,[[cx,cy-ho],[0,after(0)]],alpha(C.orange,.6),1.5,[5,5]);
  // zrak 2: kroz centar
  const k2=(cy-(cy-ho))/(cx-ox);line(c,[top,[W,cy-ho+k2*(W-ox)]],C.violet,2);if(l<0)line(c,[[ox,cy-ho],[0,cy-ho-k2*ox]],alpha(C.violet,.6),1.5,[5,5]);
  if(isFinite(l)){const iyTop=cy-M*ho;if(Math.abs(M)<8){if(l>0)arrow(c,ix,cy,ix,iyTop,C.red,4);else{line(c,[[ix,cy],[ix,iyTop]],C.red,3,[6,4]);arrow(c,ix,iyTop+(iyTop<cy?6:-6),ix,iyTop,C.red,3)}}}
  txt(c,T('predmet'),ox,cy+18,C.green,'center',12,800);
  txt(c,T(!isFinite(l)?'Predmet je u žiži: lik se ne stvara':l>0?'Lik je STVARAN i obrnut (može na zid/ekran)':'Lik je IMAGINARAN i uspravan (kao kroz lupu)'),12,18,C.red,'left',13,800)},
 read(p){const f=p.dv?-p.f:p.f,den=p.p-f;if(Math.abs(den)<.01)return[['Lik','u beskonačnosti']];const l=p.p*f/den,M=-l/p.p;return[['Udaljenost lika l',n(l,1)+' cm'],['Uvećanje',n(Math.abs(M),2)+' ×'],['Lik je',T((Math.abs(M)>1?'uvećan':'umanjen'))]]}});

/* ===== 4. razred ===== */
function wlA(nm,a){return wl2rgb(nm).replace('rgb(','rgba(').replace(')',','+a+')')}
function tri(u){u=((u%1)+1)%1;return u<.5?u*2:2-u*2}

/* 32. Interferencija */
reg('slits',{alt:'Interferencija svetlosti na dva proreza',ratio:.58,
 toggles:[{k:'md',opts:['Dva proreza','Jedan prorez'],v:0}],
 controls:[{k:'lam',l:'Talasna dužina (boja) λ',min:400,max:700,st:10,v:600,u:'nm'},{k:'d',l:'Razmak proreza d (ili širina jednog)',min:1,max:5,st:.5,v:2,u:'× 0,1 mm'}],
 draw(c,W,H,p,S,C){const bx=W*.25,sx=W*.72,cy=H/2,lp=p.lam/40,dp=p.d*12,L=sx-bx;
  for(let x=(S.t*50)%lp;x<bx;x+=lp)line(c,[[x,cy-H*.38],[x,cy+H*.38]],wlA(p.lam,.6),2);
  const sl=p.md===0?[cy-dp/2,cy+dp/2]:[cy],sw=p.md===0?4:dp;
  c.fillStyle=C.ink;let y0=0;sl.forEach(s=>{c.fillRect(bx-3,y0,6,s-sw/2-y0);y0=s+sw/2});c.fillRect(bx-3,y0,6,H-y0);
  c.save();c.beginPath();c.rect(bx,0,sx-bx,H);c.clip();
  sl.forEach(s=>{for(let r=(S.t*50)%lp;r<L*1.25;r+=lp){c.beginPath();c.arc(bx,s,r,-Math.PI/2,Math.PI/2);c.strokeStyle=wlA(p.lam,Math.max(0,.45*(1-r/(L*1.3))));c.lineWidth=1.5;c.stroke()}});c.restore();
  const pts=[];for(let y=0;y<H;y+=2){const s=Math.sin(Math.atan((y-cy)/L));let I;
   if(p.md===0){const b=Math.PI*dp*s/lp,a=Math.PI*4*s/lp;I=Math.cos(b)**2*(a?(Math.sin(a)/a)**2:1)}else{const a=Math.PI*dp*s/lp;I=a?(Math.sin(a)/a)**2:1}
   c.fillStyle=wlA(p.lam,Math.min(1,I*1.2));c.fillRect(sx,y,16,2);pts.push([sx+24+I*(W-sx-34),y])}
  line(c,pts,C.ink,1.5);line(c,[[sx,0],[sx,H]],C.mut,1);
  txt(c,T('prorezi'),bx,14,C.mut,'center',11,800);txt(c,T('zaklon'),sx+8,14,C.mut,'center',11,800);txt(c,T('jačina'),W-10,14,C.mut,'right',11,800)},
 read(p){const dy=p.lam*1e-2/p.d;return p.md===0?[['Razmak svetlih pruga (L = 1 m)',n(dy,2)+' mm']]:[['Širina centralne pruge (L = 1 m)',n(2*dy,2)+' mm']]}});

/* 33. Relativnost */
reg('relativity',{alt:'Svetlosni sat u mirovanju i u svemirskom brodu',ratio:.62,maxH:460,
 controls:[{k:'v',l:'Brzina broda v',min:0,max:.99,st:.01,v:.8,u:'× c'}],
 init(p,S){S.tr=[];S.lx=0},onChange(p,S){S.t=0;S.tr=[]},
 step(dt,p,S){const g=1/Math.sqrt(1-p.v*p.v),span=S.W*.55,xs=S.W*.38+(S.t*p.v*S.W*.22)%span;if(xs<S.lx)S.tr=[];S.lx=xs;const top=S.H*.2,ch=S.H*.5;S.tr.push([xs,top+ch-tri(S.t/(1.2*g))*ch]);if(S.tr.length>600)S.tr.shift()},
 draw(c,W,H,p,S,C){const g=1/Math.sqrt(1-p.v*p.v),P=1.2,top=H*.2,ch=H*.5,x1=W*.16;
  const clock=(x,u,w,col)=>{rrect(c,x-w/2,top-6,w,6,2,C.ink);rrect(c,x-w/2,top+ch,w,6,2,C.ink);circ(c,x,top+ch-tri(u)*ch,6,col)};
  clock(x1,S.t/P,50,C.orange);txt(c,T('Sat na Zemlji'),x1,top-22,C.ink,'center',13,800);txt(c,T('otkucaja: ')+Math.floor(S.t/P),x1,top+ch+24,C.ink,'center',13,800);
  line(c,[[W*.32,10],[W*.32,H-10]],C.line,1,[4,6]);
  line(c,S.tr,alpha(C.orange,.7),1.5);const xs=S.lx||W*.38;
  rrect(c,xs-45/g,top-14,90/g,ch+28,10,null,alpha(C.blue,.8));clock(xs,S.t/(P*g),50/g,C.orange);
  txt(c,T('Sat u brodu (kako ga MI vidimo)'),W*.66,top-28,C.ink,'center',13,800);txt(c,T('otkucaja: ')+Math.floor(S.t/(P*g)),W*.66,top+ch+24,C.ink,'center',13,800);
  arrow(c,xs+50/g,H*.12,xs+50/g+30+p.v*40,H*.12,C.blue,3,'v')},
 read(p){const g=1/Math.sqrt(1-p.v*p.v);return[['Faktor γ',n(g,2)],['1 s u brodu traje za nas',n(g,2)+' s'],['Brod od 100 m vidimo kao',n(100/g,1)+' m']]}});

/* 34. Fotoefekat */
const MET=[['Cezijum',2.1],['Natrijum',2.3],['Cink',4.3]];
reg('photo',{alt:'Fotoelektrični efekat: svetlost izbija elektrone iz metala',ratio:.58,
 toggles:[{k:'mt',opts:MET.map(m=>m[0]+' ('+String(m[1]).replace('.',',')+' eV)'),v:1}],
 controls:[{k:'lam',l:'Talasna dužina svetlosti λ',min:150,max:700,st:10,v:450,u:'nm'},{k:'I',l:'Jačina svetlosti (broj fotona)',min:1,max:10,st:1,v:4}],
 init(p,S){S.ph=[];S.el=[];S.acc=0},
 step(dt,p,S){const py=S.H*.72;S.acc+=dt*p.I*4;while(S.acc>1){S.acc--;const sx=S.W*.1+Math.random()*24,sy=S.H*.14,tx=S.W*.35+Math.random()*S.W*.4;S.ph.push({x:sx,y:sy,vx:(tx-sx)/1.1,vy:(py-sy)/1.1})}
  S.ph.forEach(q=>{q.x+=q.vx*dt;q.y+=q.vy*dt});const E=1240/p.lam,Wf=MET[p.mt][1];
  S.ph=S.ph.filter(q=>{if(q.y>=py){if(E>Wf){const sp=40+Math.sqrt(E-Wf)*110,a=-Math.PI/2+(Math.random()-.5)*1.3;S.el.push({x:q.x,y:py-4,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp})}return false}return true});
  S.el.forEach(e=>{e.x+=e.vx*dt;e.y+=e.vy*dt});S.el=S.el.filter(e=>e.y>-10&&e.x>-10&&e.x<S.W+10)},
 draw(c,W,H,p,S,C){const py=H*.72,E=1240/p.lam,Wf=MET[p.mt][1],col=p.lam<380?C.violet:wl2rgb(p.lam);
  circ(c,W*.1+12,H*.1,18,col,C.ink,2);txt(c,p.lam<380?'UV':'',W*.1+12,H*.1,'#fff','center',11,800);
  S.ph.forEach(q=>{const a=Math.atan2(q.vy,q.vx),pts=[];for(let k=0;k<8;k++){const s=k*2.2;pts.push([q.x-Math.cos(a)*s-Math.sin(a)*Math.sin(k*1.4)*3,q.y-Math.sin(a)*s+Math.cos(a)*Math.sin(k*1.4)*3])}line(c,pts,col,2)});
  rrect(c,W*.3,py,W*.5,16,3,C.mut);txt(c,T(MET[p.mt][0]),W*.55,py+30,C.mut,'center',12,800);
  S.el.forEach(e=>{circ(c,e.x,e.y,5,C.blue);txt(c,'−',e.x,e.y,'#fff','center',10,800)});
  if(E<=Wf)txt(c,T('Nema elektrona: foton ima premalo energije, ma koliko svetlost bila jaka!'),W/2,H-16,C.red,'center',W<520?11:13,800)},
 read(p){const E=1240/p.lam,Wf=MET[p.mt][1];return[['Energija jednog fotona',n(E,2)+' eV'],['Izlazni rad metala',n(Wf,1)+' eV'],['Najveća Ek elektrona',E>Wf?n(E-Wf,2)+' eV':T('0, nema efekta')]]}});

/* 35. Dualnost */
function dI(md,u){const e=Math.exp(-u*u*3);if(md===0)return Math.cos(9*u)**2*e;const q=v=>v*v;if(md===1)return Math.exp(-q((u+.12)*3));return Math.exp(-q((u+.12)*4))+Math.exp(-q((u-.12)*4))}
reg('dual',{alt:'Elektroni jedan po jedan kroz dva proreza',ratio:.58,
 toggles:[{k:'md',opts:['Dva proreza','Jedan prorez','Merimo kroz koji prolazi'],v:0}],
 controls:[{k:'r',l:'Elektrona u sekundi',min:5,max:200,st:5,v:60}],
 buttons:[{l:'Obriši ekran',fn:(p,S)=>{S.hits=[];S.hist=new Array(60).fill(0)}}],
 init(p,S){S.hits=[];S.hist=new Array(60).fill(0);S.acc=0;S.fly=[]},onChange(p,S){S.hits=[];S.hist=new Array(60).fill(0);S.fly=[]},
 step(dt,p,S){S.acc+=dt*p.r;while(S.acc>1){S.acc--;let u;do{u=Math.random()*2-1}while(Math.random()>dI(p.md,u));S.fly.push({u,k:0,j:Math.random()})}
  S.fly.forEach(f=>f.k+=dt*2.5);S.fly.filter(f=>f.k>=1).forEach(f=>{if(S.hits.length<5000)S.hits.push([f.u,f.j]);S.hist[Math.min(59,Math.floor((f.u+1)*30))]++});S.fly=S.fly.filter(f=>f.k<1);if(S.fly.length>80)S.fly.splice(0,S.fly.length-80)},
 draw(c,W,H,p,S,C){const cy=H/2,gx=W*.06,bx=W*.32,sx=W*.66,sw=W*.12,Y=u=>cy+u*H*.44;
  rrect(c,gx-14,cy-12,28,24,5,C.mut);
  const sl=p.md===1?[cy-12]:[cy-12,cy+12];c.fillStyle=C.ink;let y0=0;sl.forEach(s=>{c.fillRect(bx-3,y0,6,s-4-y0);y0=s+4});c.fillRect(bx-3,y0,6,H-y0);
  if(p.md===2){circ(c,bx+18,cy-26,8,C.paper,C.orange,2);circ(c,bx+18,cy-26,3,C.orange);txt(c,T('detektor'),bx+30,cy-26,C.orange,'left',11,800)}
  S.fly.forEach(f=>{let x,y;if(f.k<.5){const k=f.k*2;x=gx+(bx-gx)*k;y=cy+(sl[Math.floor(f.j*sl.length)]-cy)*k}else{const k=(f.k-.5)*2,ys=sl[Math.floor(f.j*sl.length)];x=bx+(sx-bx)*k;y=ys+(Y(f.u)-ys)*k}circ(c,x,y,3,C.blue)});
  rrect(c,sx,4,sw,H-8,4,alpha(C.mut,.12));S.hits.forEach(h=>{c.fillStyle=C.green;c.fillRect(sx+2+h[1]*(sw-4),Y(h[0]),2,2)});
  const mx=Math.max(1,...S.hist),hx=sx+sw+8,hw=W-hx-8;S.hist.forEach((v,i)=>{c.fillStyle=alpha(C.red,.8);c.fillRect(hx,Y(i/30-1),v/mx*hw,H*.44/30-1)});
  txt(c,T('zaklon'),sx+sw/2,H-10,C.mut,'center',11,800)},
 read(p,S){return[['Pogođeno elektrona',String(S.hits.length)],['Slika',T(p.md===0?'pruge (interferencija): elektron se ponaša kao talas':p.md===1?'jedna mrlja':'dve mrlje: merenje je uništilo pruge')]]}});

/* 36. Borov atom */
function emitB(S,ni,nf){const k=1/(nf*nf)-1/(ni*ni),lam=1/(1.097e7*k)*1e9,E=13.6*k;S.last={ni,nf,lam,E};S.ph.push({r:0,a:Math.random()*TAU,lam});if(lam>=380&&lam<=750&&!S.lines.some(l=>Math.abs(l-lam)<1))S.lines.push(lam)}
reg('bohr',{alt:'Borov model atoma vodonika i nastanak spektralnih linija',ratio:.62,maxH:470,
 buttons:[{l:'Pobudi atom',fn:(p,S)=>{S.n=3+Math.floor(Math.random()*4);S.timer=0;S.exc=1}}],
 init(p,S){S.n=1;S.timer=0;S.ph=[];S.lines=[];S.last=null;S.exc=0},
 step(dt,p,S){S.timer+=dt;S.exc=Math.max(0,S.exc-dt);S.ph.forEach(q=>q.r+=dt*150);S.ph=S.ph.filter(q=>q.r<S.W);
  if(S.n===1){if(S.timer>1.8){S.n=3+Math.floor(Math.random()*4);S.timer=0;S.exc=1}}else if(S.timer>1){const nf=1+Math.floor(Math.random()*(S.n-1));emitB(S,S.n,nf);S.n=nf;S.timer=0}},
 draw(c,W,H,p,S,C){const cx=W*.3,cy=H*.44,R=Math.min(W*.27,H*.4),rn=k=>12+(k-1)*(R-12)/5;
  for(let k=1;k<=6;k++){c.setLineDash([3,4]);circ(c,cx,cy,rn(k),null,alpha(C.mut,.6),1);c.setLineDash([])}
  circ(c,cx,cy,6,C.red);const a=S.t*3/S.n;circ(c,cx+Math.cos(a)*rn(S.n),cy+Math.sin(a)*rn(S.n),6,C.blue,C.ink,1);
  S.ph.forEach(q=>{const col=q.lam>=380&&q.lam<=750?wl2rgb(q.lam):C.mut,x=cx+Math.cos(q.a)*(rn(6)+q.r),y=cy+Math.sin(q.a)*(rn(6)+q.r);circ(c,x,y,5,col);txt(c,q.lam<380?'UV':q.lam>750?'IC':'',x+8,y,C.mut,'left',10,800)});
  if(S.exc>0)txt(c,T('Atom je primio energiju!'),cx,16,C.orange,'center',13,800);
  const lx=W*.66,lw=W-lx-14,ly=20,lh=H*.62,Ey=E=>ly+(-E/13.6)*lh;
  txt(c,T('Energetski nivoi'),lx,ly-8,C.mut,'left',11,800);
  for(let k=1;k<=6;k++){const y=Ey(-13.6/(k*k));line(c,[[lx,y],[lx+lw,y]],k===S.n?C.blue:C.mut,k===S.n?3:1.5);if(k<=3||W>600)txt(c,'n='+k,lx+lw,y-7,C.mut,'right',10,800)}
  if(S.last){const l=S.last;arrow(c,lx+lw*.4,Ey(-13.6/(l.ni*l.ni)),lx+lw*.4,Ey(-13.6/(l.nf*l.nf)),l.lam>=380&&l.lam<=750?wl2rgb(l.lam):C.mut,3)}
  const sy=H-34,sx0=20,sw=W-40;const g=c.createLinearGradient(sx0,0,sx0+sw,0);[380,450,500,560,620,750].forEach((w,j)=>g.addColorStop(j/5,wlA(w,.18)));c.fillStyle=g;c.fillRect(sx0,sy,sw,22);
  S.lines.forEach(l=>{const x=sx0+(l-380)/370*sw;c.fillStyle=wl2rgb(l);c.fillRect(x-2,sy,4,22)});txt(c,T('Spektar vodonika (vidljivi deo)'),sx0,sy-9,C.mut,'left',11,800)},
 read(p,S){const l=S.last;return l?[['Poslednji skok','n = '+l.ni+' → n = '+l.nf],['Energija fotona',n(l.E,2)+' eV'],['Talasna dužina',n(l.lam,0)+' nm '+T(l.lam<380?'(UV)':l.lam>750?'(infracrveno)':'(vidljiva)')]]:[['Stanje',T('elektron je na najnižem nivou')]]}});

/* 37. Jezgro */
const EL=[['Vodonik','H',[0,1]],['Helijum','He',[1,2]],['Litijum','Li',[3,4]],['Berilijum','Be',[5]],['Bor','B',[5,6]],['Ugljenik','C',[6,7]],['Azot','N',[7,8]],['Kiseonik','O',[8,9,10]],['Fluor','F',[10]],['Neon','Ne',[10,11,12]],['Natrijum','Na',[12]],['Magnezijum','Mg',[12,13,14]],['Aluminijum','Al',[14]],['Silicijum','Si',[14,15,16]],['Fosfor','P',[16]],['Sumpor','S',[16,17,18,20]],['Hlor','Cl',[18,20]],['Argon','Ar',[18,20,22]],['Kalijum','K',[20,22]],['Kalcijum','Ca',[20,22,23,24,26]]];
function nucStat(Z,N){const st=EL[Z-1][2];return st.includes(N)?0:N>Math.max(...st)?1:-1}
reg('nucleus',{alt:'Sastav atomskog jezgra od protona i neutrona',ratio:.55,
 controls:[{k:'Z',l:'Broj protona Z',min:1,max:20,st:1,v:6},{k:'N',l:'Broj neutrona N',min:0,max:28,st:1,v:6}],
 draw(c,W,H,p,S,C){const A=p.Z+p.N,cx=W*.3,cy=H*.5,st=nucStat(p.Z,p.N);
  for(let i=0;i<A;i++){const r=Math.sqrt(i+.3)*10,a=i*2.39996,isP=Math.floor((i+1)*p.Z/A)>Math.floor(i*p.Z/A),j=st?Math.sin(S.t*30+i)*1.5:Math.sin(S.t*6+i)*.6;
   const x=cx+Math.cos(a)*r+j,y=cy+Math.sin(a)*r+j;circ(c,x,y,9,isP?C.red:C.mut,C.ink,1);if(isP)txt(c,'+',x,y,'#fff','center',11,800)}
  const e=EL[p.Z-1],tx=W*.62;txt(c,String(A),tx,H*.3,C.ink,'right',16,800);txt(c,String(p.Z),tx,H*.5,C.ink,'right',16,800);txt(c,e[1],tx+4,H*.4,C.ink,'left',48,800);
  txt(c,T(e[0])+'-'+A,tx-20,H*.66,C.ink,'left',17,800);
  txt(c,T(st===0?'Stabilno jezgro':st>0?'Previše neutrona: nestabilno (radioaktivno)':'Premalo neutrona: nestabilno (radioaktivno)'),tx-20,H*.78,st===0?C.green:C.red,'left',W<520?11:13,800);
  txt(c,T('crveno = proton, sivo = neutron'),12,H-12,C.mut,'left',11,700)},
 read(p){const e=EL[p.Z-1];return[['Element',T(e[0])+' ('+e[1]+')'],['Maseni broj A = Z + N',String(p.Z+p.N)],['Elektrona u neutralnom atomu',String(p.Z)],['Stabilni izotopi',e[2].map(x=>e[1]+'-'+(p.Z+x)).join(', ')]]}});

/* 38. Raspad */
function dReset(S){S.a=new Array(400).fill(1);S.f=new Array(400).fill(-9);S.t=0;S.h=[[0,400]];S.acc=0}
reg('decay',{alt:'Radioaktivni raspad 400 jezgara i period poluraspada',ratio:.55,
 controls:[{k:'T',l:'Period poluraspada T½',min:1,max:10,st:.5,v:3,u:'s'}],
 buttons:[{l:'Ispočetka',fn:(p,S)=>dReset(S)}],
 init(p,S){dReset(S)},onChange(p,S){dReset(S)},
 step(dt,p,S){const pr=1-Math.pow(.5,dt/p.T);for(let i=0;i<400;i++)if(S.a[i]&&Math.random()<pr){S.a[i]=0;S.f[i]=S.t}S.acc+=dt;if(S.acc>.1){S.acc=0;S.h.push([S.t,S.a.reduce((x,y)=>x+y,0)])}if(S.t>6*p.T+1.5)dReset(S)},
 draw(c,W,H,p,S,C){const g=Math.min(H-24,W*.42),cs=g/20,ox=12,oy=12;
  for(let i=0;i<400;i++){const x=ox+(i%20)*cs+cs/2,y=oy+Math.floor(i/20)*cs+cs/2;circ(c,x,y,cs*.38,S.a[i]?C.green:(S.t-S.f[i]<.3?C.orange:alpha(C.mut,.3)))}
  const th=[];for(let k=0;k<=60;k++){const t=6*p.T*k/60;th.push([t,400*Math.pow(.5,t/p.T)])}
  const gx=ox+g+50;plot(c,C,gx,24,W-gx-16,H-60,{xmax:6*p.T,ymax:400,xl:'t (s)',yl:T('neraspadnutih N'),series:[{pts:th,color:alpha(C.mut,.6)},{pts:S.h,color:C.red}]});
  for(let k=1;k<=3;k++){const x=gx+(k/6)*(W-gx-16);line(c,[[x,24],[x,H-36]],alpha(C.violet,.5),1,[4,4]);txt(c,k+'T½',x,H-24>0?40:40,C.violet,'center',10,800)}},
 read(p,S){const N=S.a.reduce((x,y)=>x+y,0);return[['Neraspadnutih jezgara',N+' / 400'],['Proteklo vreme',n(S.t,1)+' s = '+n(S.t/p.T,1)+' T½'],['Teorijski bi ostalo',n(400*Math.pow(.5,S.t/p.T),0)]]}});

/* 39. Fisija */
function fReset(S){S.u=[];for(let i=0;i<70;i++)S.u.push({x:S.W*(.12+Math.random()*.84),y:20+Math.random()*(S.H-40),on:1});S.nt=[{x:6,y:S.H/2,vx:170,vy:0}];S.fr=[];S.fis=0}
reg('fission',{alt:'Lančana reakcija fisije uranijuma i kontrolne šipke',ratio:.6,
 controls:[{k:'rod',l:'Broj kontrolnih šipki (upijaju neutrone)',min:0,max:4,st:1,v:0,fmt:v=>v+' / 4'}],
 buttons:[{l:'Ispali neutron',fn:(p,S)=>S.nt.push({x:6,y:S.H/2,vx:170,vy:0})},{l:'Novo gorivo',fn:(p,S)=>fReset(S)}],
 init(p,S){fReset(S)},
 step(dt,p,S){const rods=[];for(let j=0;j<p.rod;j++)rods.push(S.W*(.25+.2*j));
  S.nt.forEach(q=>{q.x+=q.vx*dt;q.y+=q.vy*dt;if(rods.some(r=>Math.abs(q.x-r)<6))q.dead=1;
   if(!q.dead)for(const u of S.u){if(u.on&&Math.hypot(q.x-u.x,q.y-u.y)<10){u.on=0;q.dead=1;S.fis++;const a=Math.random()*TAU;S.fr.push({x:u.x,y:u.y,vx:Math.cos(a)*40,vy:Math.sin(a)*40,l:1},{x:u.x,y:u.y,vx:-Math.cos(a)*40,vy:-Math.sin(a)*40,l:1});const k=2+(Math.random()<.5?1:0);for(let m=0;m<k;m++){const b=Math.random()*TAU;S.nt.push({x:u.x,y:u.y,vx:Math.cos(b)*160,vy:Math.sin(b)*160})}break}}});
  S.nt=S.nt.filter(q=>!q.dead&&q.x>-5&&q.x<S.W+5&&q.y>-5&&q.y<S.H+5).slice(0,300);
  S.fr.forEach(f=>{f.x+=f.vx*dt;f.y+=f.vy*dt;f.l-=dt*.7});S.fr=S.fr.filter(f=>f.l>0)},
 draw(c,W,H,p,S,C){for(let j=0;j<p.rod;j++){const x=W*(.25+.2*j);rrect(c,x-5,0,10,H,2,alpha(C.ink,.75))}
  S.u.forEach(u=>{if(u.on){circ(c,u.x,u.y,9,C.green,C.ink,1);txt(c,'U',u.x,u.y,'#fff','center',9,800)}});
  S.fr.forEach(f=>{circ(c,f.x,f.y,6,alpha(C.orange,f.l));if(f.l>.85)circ(c,f.x,f.y,22*(1-f.l)*6,alpha(C.mark,.5))});
  S.nt.forEach(q=>circ(c,q.x,q.y,3.5,C.blue));
  if(!S.nt.length&&S.fis)txt(c,T('Lančana reakcija se ugasila'),W/2,18,C.red,'center',14,800)},
 read(p,S){return[['Broj fisija',String(S.fis)],['Oslobođena energija',S.fis*200+' MeV'],['Slobodnih neutrona',String(S.nt.length)]]}});

/* 40. Svemir */
reg('universe',{alt:'Širenje svemira: galaksije se udaljavaju jedna od druge',ratio:.58,
 toggles:[{k:'ref',opts:['Gledamo iz naše galaksije','Gledamo iz druge galaksije'],v:0}],
 controls:[{k:'H',l:'Brzina širenja',min:.05,max:.4,st:.05,v:.15}],
 init(p,S){S.g=[[0,0],[.45,.3]];for(let i=0;i<46;i++)S.g.push([Math.random()*2-1,Math.random()*2-1]);S.a=1},
 step(dt,p,S){S.a*=1+p.H*dt;if(S.a>2.6)S.a=1},
 draw(c,W,H,p,S,C){const cx=W/2,cy=H/2,sc=Math.min(W,H)*.3,r=S.g[p.ref];
  S.g.forEach((g,i)=>{const dx=(g[0]-r[0])*S.a,dy=(g[1]-r[1])*S.a,x=cx+dx*sc,y=cy+dy*sc;if(x<-20||x>W+20||y<-20||y>H+20)return;
   const me=i===p.ref;if(!me)arrow(c,x,y,x+dx*p.H*sc*1.2,y+dy*p.H*sc*1.2,alpha(C.red,.7),2);
   c.save();c.translate(x,y);c.rotate(i);c.beginPath();c.ellipse(0,0,me?11:7,me?5:3,0,0,TAU);c.fillStyle=me?C.orange:C.violet;c.fill();c.restore();
   if(me)txt(c,T(p.ref===0?'mi':'druga galaksija'),x+14,y-10,C.orange,'left',12,800)});
  txt(c,T('Dalje galaksije beže brže (duže strelice)'),12,H-12,C.mut,'left',12,800)},
 read(p,S){return[['Razmera svemira',n(S.a,2)+' ×'],['Hablov zakon','v = H₀ · d']]}});
})();
