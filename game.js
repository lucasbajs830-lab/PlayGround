(() => {
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');
  const $ = (id) => document.getElementById(id);
  const ui = {score:$('score'),combo:$('combo'),comboCaption:$('comboCaption'),scoreCaption:$('scoreCaption'),speed:$('speed'),speedFill:$('speedFill'),status:$('statusText'),intro:$('intro'),pause:$('pauseScreen'),callout:$('trickCallout'),toast:$('toast'),comboBlock:$('comboBlock')};
  const keys = new Set();
  let W=0,H=0,DPR=1,scale=18,last=0,now=0,started=false,paused=false,soundOn=true,audio=null,best=Number(localStorage.getItem('yard-best')||0),toastTimer=0,callTimer=0;
  const rider={x:0,z:0,y:0,vx:0,vz:0,vy:0,angle:0,air:0,ollie:0,grinding:false,grindTime:0,grindRail:null,boardSpin:0,pose:0};
  const session={score:0,combo:0,mult:1,tricks:[],airTricks:0,airScore:0,cleanLandings:0,bails:0,grindScore:0};
  const camera={x:0,z:0};
  const obstacles=[
    {type:'ledge',x:-8,z:-5,w:6,d:1.15,h:.78,color:'#d7d0bc',top:'#e8e0cb',label:'ledge'},
    {type:'rail',x:3,z:-8,len:7,axis:'x',h:1.1,color:'#f07848'},
    {type:'rail',x:-12,z:3,len:7,axis:'z',h:1.05,color:'#c7d574'},
    {type:'ramp',x:8,z:-3,w:5,d:4,h:2.1,axis:'z',color:'#dc8d5c'},
    {type:'ramp',x:-2,z:9,w:5,d:4,h:1.8,axis:'x',color:'#d3ba83'},
    {type:'manual',x:12,z:8,w:4,d:2,h:.72,color:'#aeb5a2'},
    {type:'rail',x:4,z:11,len:6,axis:'x',h:.9,color:'#d1d6c3'},
    {type:'ledge',x:-13,z:-9,w:4,d:1.3,h:.75,color:'#b7bcaa',top:'#d8d6c1'},
    {type:'bench',x:14,z:-8,w:4,d:1.3,h:.85,color:'#bf845c'},
    {type:'planter',x:-15,z:12,w:4,d:3,h:.72,color:'#818b70'}
  ];
  const rails=obstacles.filter(o=>o.type==='rail');
  const trees=[[-20,-16],[-20,17],[20,-17],[20,15],[-16,18],[17,18]];
  function resize(){DPR=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;canvas.width=Math.round(W*DPR);canvas.height=Math.round(H*DPR);canvas.style.width=W+'px';canvas.style.height=H+'px';ctx.setTransform(DPR,0,0,DPR,0,0);scale=Math.max(9,Math.min(W/57,H/31));}
  addEventListener('resize',resize);resize();
  function project(x,z,y=0){return {x:W*.5+(x-camera.x-z+camera.z)*scale*.83,y:H*.56+((x-camera.x+z-camera.z)*.34-y)*scale};}
  function polygon(points,fill,stroke=null,line=1){ctx.beginPath();points.forEach((p,i)=>{const q=project(p[0],p[1],p[2]||0);i?ctx.lineTo(q.x,q.y):ctx.moveTo(q.x,q.y)});ctx.closePath();if(fill){ctx.fillStyle=fill;ctx.fill()}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=line;ctx.stroke()}}
  function line(a,b,color,width=1){const p=project(a[0],a[1],a[2]||0),q=project(b[0],b[1],b[2]||0);ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=color;ctx.lineWidth=width;ctx.lineCap='round';ctx.stroke()}
  function ellipse(x,z,rx,rz,color,alpha=1){const p=project(x,z,.015);ctx.save();ctx.globalAlpha=alpha;ctx.fillStyle=color;ctx.beginPath();ctx.ellipse(p.x,p.y,Math.max(1,rx*scale*.83),Math.max(1,rz*scale*.34),-.52,0,Math.PI*2);ctx.fill();ctx.restore()}
  function drawBackdrop(){
    const sky=ctx.createLinearGradient(0,0,0,H);sky.addColorStop(0,'#a9bda9');sky.addColorStop(.52,'#d0cdb0');sky.addColorStop(1,'#e1c59a');ctx.fillStyle=sky;ctx.fillRect(0,0,W,H);
    const sun=ctx.createRadialGradient(W*.74,H*.22,4,W*.74,H*.22,Math.min(W,H)*.34);sun.addColorStop(0,'rgba(250,237,196,.35)');sun.addColorStop(1,'rgba(250,237,196,0)');ctx.fillStyle=sun;ctx.fillRect(0,0,W,H);
    // Soft, hazy skyline silhouettes
    ctx.fillStyle='rgba(55,78,66,.19)';let bx=-15;while(bx<W+40){const bw=38+(Math.sin(bx*1.27)+1)*19,bh=45+(Math.sin(bx*.14+3)+1)*27;ctx.fillRect(bx,H*.36-bh,bw,bh);for(let wx=bx+8;wx<bx+bw-4;wx+=13){ctx.fillStyle='rgba(233,220,180,.18)';ctx.fillRect(wx,H*.36-bh+13,4,7);ctx.fillStyle='rgba(55,78,66,.19)'}bx+=bw-3;}
    // Distant hedge and city-court pavement underlay
    ctx.fillStyle='#84947b';ctx.fillRect(0,H*.36,W,H*.08);
    polygon([[-35,-35],[35,-35],[35,35],[-35,35]],'#738472');
    polygon([[-29,-29],[29,-29],[29,29],[-29,29]],'#b4ad91');
    polygon([[-25,-25],[25,-25],[25,25],[-25,25]],'#c6c2a8');
    polygon([[-22,-22],[22,-22],[22,22],[-22,22]],'#c8c3ad');
    // Court sections and faded paint
    polygon([[-20,-18],[20,-18],[20,18],[-20,18]],'#c8c7b1');
    polygon([[-18,-16],[18,-16],[18,16],[-18,16]],'#c7c6b0');
    const courtStroke='rgba(242,235,209,.43)';
    line([-18,-15],[18,-15],courtStroke,1.3);line([-18,15],[18,15],courtStroke,1.3);line([-17,-15],[-17,15],courtStroke,1.1);line([17,-15],[17,15],courtStroke,1.1);
    line([0,-15],[0,15],'rgba(240,232,207,.25)',1);ellipse(0,0,3.8,3.8,'rgba(0,0,0,0)',0);const center=project(0,0);ctx.beginPath();ctx.ellipse(center.x,center.y,3.8*scale*.83,3.8*scale*.34,-.52,0,Math.PI*2);ctx.strokeStyle='rgba(240,232,207,.28)';ctx.lineWidth=1;ctx.stroke();
    // Ball-court corner paint blocks
    polygon([[-17,-15],[-8,-15],[-8,-12],[-17,-12]],'rgba(240,120,72,.19)');polygon([[8,12],[17,12],[17,15],[8,15]],'rgba(214,221,167,.31)');
    // Curbs, long shadows, and fence posts
    line([-22,-21],[22,-21],'#777f6f',4);line([-22,21],[22,21],'#777f6f',4);line([-21,-21],[-21,21],'#777f6f',4);line([21,-21],[21,21],'#777f6f',4);
    for(let i=-20;i<=20;i+=2){line([i,-21],[i,-20.3],'rgba(67,82,70,.6)',1);line([i,21],[i,20.3],'rgba(67,82,70,.6)',1)}
  }
  function drawTree(x,z){
    ellipse(x+.42,z+.38,.8,.55,'rgba(45,53,39,.2)',.8);
    const p=project(x,z);ctx.save();ctx.translate(p.x,p.y);
    ctx.fillStyle='#76664b';ctx.fillRect(-scale*.11,-scale*.3,scale*.22,scale*.57);
    const r=scale*.62;[[0,-.8,.72,'#61775a'],[-.38,-.54,.48,'#718765'],[.38,-.55,.47,'#758967'],[.02,-1.13,.42,'#80916c']].forEach(([dx,dy,m,c])=>{ctx.beginPath();ctx.fillStyle=c;ctx.arc(dx*scale,dy*scale,r*m,0,Math.PI*2);ctx.fill()});ctx.restore();
  }
  function drawBench(o){
    const {x,z,w,d,h}=o;const x0=x-w/2,x1=x+w/2,z0=z-d/2,z1=z+d/2;
    polygon([[x0,z0,0],[x1,z0,0],[x1,z1,0],[x0,z1,0]],'rgba(37,44,37,.16)');
    polygon([[x0,z0,h*.72],[x1,z0,h*.72],[x1,z1,h*.72],[x0,z1,h*.72]],'#bd8457');
    line([x0,z0,h*.72],[x1,z0,h*.72],'#e1aa76',3);line([x0,z1,h*.72],[x1,z1,h*.72],'#d6a06a',3);
    for(const xx of [x0+.35,x1-.35]){line([xx,z0+.1,.05],[xx,z0+.1,h*.7],'#4b5044',2);line([xx,z1-.1,.05],[xx,z1-.1,h*.7],'#4b5044',2)}
  }
  function drawObstacle(o){
    if(o.type==='rail'){
      const a=o.axis==='x'?[o.x-o.len/2,o.z,o.h]:[o.x,o.z-o.len/2,o.h];
      const b=o.axis==='x'?[o.x+o.len/2,o.z,o.h]:[o.x,o.z+o.len/2,o.h];
      const n=Math.floor(o.len/1.35);for(let i=0;i<=n;i++){const t=i/n,px=a[0]+(b[0]-a[0])*t,pz=a[1]+(b[1]-a[1])*t;line([px,pz,.04],[px,pz,o.h-.05],'#656b5d',1.8)}
      line([a[0],a[1],o.h],[b[0],b[1],o.h],'rgba(38,45,38,.22)',7);line(a,b,o.color,4);line([a[0],a[1],o.h+.09],[b[0],b[1],o.h+.09],'rgba(255,244,218,.7)',1);
      return;
    }
    if(o.type==='bench'){drawBench(o);return}
    const {x,z,w,d,h}=o,x0=x-w/2,x1=x+w/2,z0=z-d/2,z1=z+d/2;
    polygon([[x0,z0,0],[x1,z0,0],[x1,z1,0],[x0,z1,0]],'rgba(34,39,32,.16)');
    if(o.type==='ramp'){
      // A low polygonal bank with a sunlit deck and painted side panels.
      if(o.axis==='z'){
        polygon([[x0,z0,0],[x1,z0,0],[x1,z1,h],[x0,z1,h]],'#b77956');
        polygon([[x0,z0,.06],[x1,z0,.06],[x1,z1,h],[x0,z1,h]],o.color);
        line([x0,z1,h],[x1,z1,h],'#f0d7aa',3);line([x0,z0,.06],[x1,z0,.06],'#915d48',2);
        const p=project(x,z,.1);ctx.fillStyle='rgba(248,225,182,.34)';ctx.font=`700 ${Math.max(9,scale*.55)}px monospace`;ctx.fillText('YARD',p.x-scale*.9,p.y);
      }else{
        polygon([[x0,z0,0],[x0,z1,0],[x1,z1,h],[x1,z0,h]],'#b77956');
        polygon([[x0,z0,.06],[x0,z1,.06],[x1,z1,h],[x1,z0,h]],o.color);
        line([x1,z0,h],[x1,z1,h],'#f0d7aa',3);line([x0,z0,.06],[x0,z1,.06],'#915d48',2);
      }
      return;
    }
    polygon([[x0,z0,h],[x1,z0,h],[x1,z1,h],[x0,z1,h]],o.type==='ledge'?(o.top||'#ddd8c6'):o.color);
    polygon([[x0,z0,0],[x1,z0,0],[x1,z0,h],[x0,z0,h]],o.type==='ledge'?'#9ca18f':'#89927e');
    polygon([[x1,z0,0],[x1,z1,0],[x1,z1,h],[x1,z0,h]],o.type==='ledge'?'#858d7b':'#737f70');
    line([x0,z0,h],[x1,z0,h],o.type==='ledge'?'#f0ead4':'rgba(255,255,255,.55)',2);
    if(o.type==='planter'){
      const q=project(x,z,h+.2);ctx.fillStyle='#536b4b';ctx.beginPath();ctx.ellipse(q.x,q.y,w*scale*.28,d*scale*.14,-.5,0,Math.PI*2);ctx.fill();
      for(let i=0;i<9;i++){const a=i*2.4,r=scale*(.2+(i%3)*.07);ctx.fillStyle=['#7b986a','#607b59','#9b9c68'][i%3];ctx.beginPath();ctx.arc(q.x+Math.cos(a)*r,q.y+Math.sin(a)*r*.45,r*.55,0,Math.PI*2);ctx.fill()}
    }
  }
  function drawWorld(){
    drawBackdrop();
    // Park edge details and trees are depth sorted with the skate obstacles.
    const things=[...trees.map(([x,z])=>({type:'tree',x,z})),...obstacles.map(o=>({type:'obstacle',x:o.x,z:o.z,o}))];
    things.sort((a,b)=>(a.x+a.z)-(b.x+b.z));
    for(const item of things){if(item.type==='tree')drawTree(item.x,item.z);else drawObstacle(item.o)}
    // A few tiny painted stars and scattered leaves make the yard feel lived in.
    for(let i=0;i<22;i++){
      const x=Math.sin(i*31.7)*19,z=Math.cos(i*17.3)*18;
      if(Math.hypot(x,z)<5)continue;
      const p=project(x,z,.025);ctx.save();ctx.translate(p.x,p.y);ctx.rotate(i*1.7);ctx.fillStyle=i%3?'rgba(75,86,67,.18)':'rgba(240,120,72,.25)';ctx.fillRect(-2,-.7,4,1.4);ctx.restore();
    }
  }
  function drawRider(){
    const p=project(rider.x,rider.z,rider.y),ground=project(rider.x,rider.z,0),speed=Math.hypot(rider.vx,rider.vz);
    const facing=Math.atan2(rider.vx*.34-rider.vz*.34,rider.vx*.83+rider.vz*.83||1);
    const lift=Math.min(1,rider.y/2.5),boardAngle=facing+(rider.grinding?0:Math.sin(rider.boardSpin)*.16);
    ctx.save();ctx.translate(ground.x,ground.y+3);ctx.globalAlpha=Math.max(.2,1-rider.y*.13);ctx.fillStyle='rgba(33,38,31,.28)';ctx.beginPath();ctx.ellipse(0,0,scale*.54+lift*scale*.18,scale*.18,-.45,0,Math.PI*2);ctx.fill();ctx.restore();
    ctx.save();ctx.translate(p.x,p.y);ctx.rotate(boardAngle);ctx.translate(0,-lift*scale*.08);
    // Deck, trucks, wheels
    ctx.fillStyle='#222b27';ctx.beginPath();ctx.roundRect(-scale*.59,-scale*.1,scale*1.18,scale*.2,scale*.09);ctx.fill();
    ctx.fillStyle='#e8754c';ctx.beginPath();ctx.roundRect(-scale*.46,-scale*.065,scale*.92,scale*.11,scale*.055);ctx.fill();
    ctx.fillStyle='#eddfbd';ctx.font=`900 ${Math.max(5,scale*.2)}px sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('CD',0,0);
    for(const x of [-.38,.38]){ctx.fillStyle='#d8d0b9';ctx.beginPath();ctx.arc(x*scale,scale*.1,scale*.075,0,Math.PI*2);ctx.fill();ctx.fillStyle='#576057';ctx.beginPath();ctx.arc(x*scale,scale*.1,scale*.035,0,Math.PI*2);ctx.fill()}
    ctx.restore();
    // Compact stylized skater, with articulated arms and bent knees.
    ctx.save();ctx.translate(p.x,p.y);ctx.rotate(facing*.35);const bob=Math.sin(now*12)*Math.min(.035,speed*.002)*scale;
    ctx.lineCap='round';ctx.lineJoin='round';ctx.strokeStyle='#282f2a';ctx.lineWidth=scale*.12;
    ctx.beginPath();ctx.moveTo(-scale*.08,-scale*.03);ctx.lineTo(-scale*.18,scale*.27);ctx.lineTo(-scale*.3,scale*.39);ctx.moveTo(scale*.05,-scale*.02);ctx.lineTo(scale*.19,scale*.24);ctx.lineTo(scale*.31,scale*.38);ctx.stroke();
    ctx.strokeStyle='#e5c7a2';ctx.lineWidth=scale*.075;ctx.beginPath();ctx.moveTo(-scale*.13,-scale*.58+bob);ctx.lineTo(-scale*.34,-scale*.35);ctx.lineTo(-scale*.43,-scale*.18);ctx.moveTo(scale*.13,-scale*.57+bob);ctx.lineTo(scale*.34,-scale*.36);ctx.lineTo(scale*.42,-scale*.54);ctx.stroke();
    ctx.fillStyle='#e8754c';ctx.beginPath();ctx.moveTo(-scale*.18,-scale*.65+bob);ctx.quadraticCurveTo(0,-scale*.76+bob,scale*.18,-scale*.64+bob);ctx.lineTo(scale*.14,-scale*.27);ctx.quadraticCurveTo(0,-scale*.2,-scale*.15,-scale*.28);ctx.closePath();ctx.fill();
    ctx.fillStyle='#d5a77f';ctx.beginPath();ctx.arc(0,-scale*.81+bob,scale*.145,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#28302a';ctx.beginPath();ctx.ellipse(0,-scale*.88+bob,scale*.18,scale*.075,-.05,Math.PI,Math.PI*2);ctx.fill();ctx.fillRect(-scale*.19,-scale*.88+bob,scale*.38,scale*.05);
    // Jacket patch and shoes
    ctx.fillStyle='#e3d8b8';ctx.fillRect(-scale*.025,-scale*.57+bob,scale*.05,scale*.14);
    ctx.fillStyle='#f0e2c7';ctx.fillRect(-scale*.39,scale*.34,scale*.2,scale*.07);ctx.fillRect(scale*.22,scale*.34,scale*.2,scale*.07);
    ctx.restore();
    if(rider.grinding){ctx.fillStyle='#f6e8bc';ctx.font=`700 ${Math.max(10,scale*.45)}px monospace`;ctx.textAlign='center';ctx.fillText('✦',p.x,p.y-scale*1.25)}
  }
  const trickNames={z:['KICKFLIP','HEELFLIP','VARIAL FLIP','LASER FLIP'],x:['SHUVIT','360 SHUVIT','BIGSPIN','360 FLIP'],c:['POP SHUVIT','IMPOSSIBLE','HARD FLIP','TRE FLIP']};
  function beep(freq=280,duration=.08,type='sine',volume=.035){
    if(!soundOn)return;try{audio ||= new (window.AudioContext||window.webkitAudioContext)();if(audio.state==='suspended')audio.resume();const osc=audio.createOscillator(),gain=audio.createGain();osc.type=type;osc.frequency.value=freq;gain.gain.setValueAtTime(volume,audio.currentTime);gain.gain.exponentialRampToValueAtTime(.001,audio.currentTime+duration);osc.connect(gain);gain.connect(audio.destination);osc.start();osc.stop(audio.currentTime+duration)}catch{}
  }
  function toast(text){ui.toast.textContent=text;ui.toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>ui.toast.classList.remove('show'),1350)}
  function callout(text){ui.callout.innerHTML=text;ui.callout.classList.remove('show');void ui.callout.offsetWidth;ui.callout.classList.add('show');clearTimeout(callTimer);callTimer=setTimeout(()=>ui.callout.classList.remove('show'),1000)}
  function addTrick(name,points){
    if(!rider.air&&!rider.grinding)return;
    if(!session.tricks.includes(name))session.tricks.push(name);
    session.airTricks++;session.airScore+=Math.round(points*session.mult);session.mult=Math.min(8,session.mult+.5);
    ui.combo.textContent=name;ui.comboCaption.textContent=`${session.mult.toFixed(1)}× MULTIPLIER`;
    callout(name);beep(470+session.airTricks*85,.075,'triangle');
  }
  function updateHud(){
    ui.score.textContent=String(session.score).padStart(6,'0').slice(-6);
    const speed=Math.hypot(rider.vx,rider.vz);ui.speed.textContent=String(Math.round(speed*7)).padStart(2,'0');ui.speedFill.style.width=Math.min(100,speed/9*100)+'%';
    if(rider.grinding)ui.status.textContent='GRINDING · LET IT RIDE';
    else if(rider.y>.2)ui.status.textContent='AIRBORNE · FLIP TO STACK POINTS';
    else if(speed>.8)ui.status.textContent='CARVE · FIND A FEATURE';
    else ui.status.textContent='PUSH TO GET MOVING';
    if(best>0)ui.scoreCaption.textContent=`PERSONAL BEST ${String(best).padStart(6,'0')}`;
  }
  function pop(){
    if(!started||paused||rider.y>.08||rider.grinding)return;
    const speed=Math.hypot(rider.vx,rider.vz);
    rider.vy=5.1+Math.min(1.7,speed*.12);rider.air=0;rider.ollie=.36;rider.grinding=false;
    session.airTricks=0;session.airScore=0;session.tricks=[];session.mult=Math.max(1,session.mult);
    ui.combo.textContent='OLLIE';ui.comboCaption.textContent='GET CREATIVE';beep(190,.08,'sine',.04);
  }
  function trick(key){
    if(!started||paused)return;
    if(rider.y>.15||rider.grinding){const list=trickNames[key],index=(session.airTricks+Math.floor(Math.random()*2))%list.length;addTrick(list[index],key==='x'?480:360);rider.boardSpin+=key==='x'?Math.PI*2:Math.PI*1.6;rider.pose=.18;}
    else if(key==='c'&&Math.hypot(rider.vx,rider.vz)>1.2){rider.vx*=.64;rider.vz*=.64;session.score+=50;toast('MANUAL TAP +50');}
  }
  function supportHeight(x,z){
    let h=0;
    for(const o of obstacles){
      if(o.type==='ledge'||o.type==='manual'||o.type==='planter'){
        if(Math.abs(x-o.x)<o.w/2-.05&&Math.abs(z-o.z)<o.d/2-.05)h=Math.max(h,o.h);
      }else if(o.type==='ramp'){
        const inside=Math.abs(x-o.x)<o.w/2&&Math.abs(z-o.z)<o.d/2;
        if(inside){const t=o.axis==='z'?(z-(o.z-o.d/2))/o.d:(x-(o.x-o.w/2))/o.w;h=Math.max(h,.05+Math.max(0,Math.min(1,t))*o.h)}
      }
    }
    return h;
  }
  function closestRail(){
    for(const rail of rails){
      const along=rail.axis==='x'?rider.x-rail.x:rider.z-rail.z;
      const cross=rail.axis==='x'?rider.z-rail.z:rider.x-rail.x;
      if(Math.abs(along)<rail.len/2+.24&&Math.abs(cross)<.42&&rider.y<rail.h+1&&rider.y>rail.h-.85&&Math.hypot(rider.vx,rider.vz)>1.4)return rail;
    }
    return null;
  }
  function bail(){
    session.bails++;session.combo=0;session.mult=1;session.tricks=[];session.airScore=0;session.airTricks=0;
    rider.y=0;rider.vy=0;rider.grinding=false;rider.vx*=.24;rider.vz*=.24;rider.grindRail=null;
    ui.combo.textContent='—';ui.comboCaption.textContent='SHAKE IT OFF';toast('BAIL! LINE LOST');beep(90,.22,'sawtooth',.045);
    setTimeout(()=>{if(!paused)ui.comboCaption.textContent='BUILD YOUR COMBO'},1100);
  }
  function land(){
    rider.y=0;rider.vy=0;rider.air=0;rider.grinding=false;rider.grindRail=null;
    if(session.airTricks||session.airScore){
      const points=Math.round(session.airScore+session.grindScore);
      session.score+=points;session.combo=points;session.cleanLandings++;
      ui.combo.textContent=`+${points}`;ui.comboCaption.textContent=`${session.tricks.join(' · ')||'CLEAN LANDING'}`;
      callout(`<span style="color:#d8e985">${points}</span><br><span style="font-size:.28em;letter-spacing:2px">CLEAN LANDING</span>`);
      toast(`${session.tricks.length?session.tricks.join(' + ')+' · ':''}${points} POINTS`);beep(590,.12,'triangle',.05);
      if(session.score>best){best=session.score;localStorage.setItem('yard-best',String(best))}
    }else if(session.grindScore){session.score+=session.grindScore;session.combo=session.grindScore;ui.combo.textContent=`+${session.grindScore}`;ui.comboCaption.textContent='GRIND BANKED';toast(`GRIND · ${session.grindScore} POINTS`)}
    session.airScore=0;session.airTricks=0;session.grindScore=0;session.tricks=[];session.mult=1;
  }
  function update(dt){
    if(!started||paused)return;
    const forward=(keys.has('w')?1:0)-(keys.has('s')?1:0),side=(keys.has('d')?1:0)-(keys.has('a')?1:0);
    let ax=side*17,az=-forward*17;
    if(keys.has('shift')){rider.vx*=Math.pow(.08,dt);rider.vz*=Math.pow(.08,dt)}
    rider.vx+=ax*dt;rider.vz+=az*dt;
    const drag=(forward||side)?Math.pow(.985,dt*60):Math.pow(.91,dt*60);
    rider.vx*=drag;rider.vz*=drag;
    let speed=Math.hypot(rider.vx,rider.vz);if(speed>10){rider.vx*=10/speed;rider.vz*=10/speed;speed=10}
    if(speed>.22)rider.angle=Math.atan2(rider.vx,rider.vz);
    const oldY=rider.y,base=supportHeight(rider.x,rider.z);
    rider.x+=rider.vx*dt;rider.z+=rider.vz*dt;
    if(Math.abs(rider.x)>20.4){rider.x=Math.sign(rider.x)*20.4;rider.vx*=-.22}
    if(Math.abs(rider.z)>20.4){rider.z=Math.sign(rider.z)*20.4;rider.vz*=-.22}
    const ground=supportHeight(rider.x,rider.z);
    const near=closestRail();
    if(near&&!rider.grinding){rider.grinding=true;rider.grindRail=near;rider.y=near.h+.08;rider.vy=0;rider.grindTime=0;session.grindScore=0;ui.combo.textContent='50-50 GRIND';callout('50-50 GRIND');beep(360,.07,'square',.025)}
    if(rider.grinding&&rider.grindRail){
      const rail=rider.grindRail;rider.grindTime+=dt;rider.y=rail.h+.08;rider.vy=0;
      const a=rail.axis==='x'?rider.x-rail.x:rider.z-rail.z;
      const parallel=rail.axis==='x'?rider.vx:rider.vz;
      session.grindScore+=Math.max(1,Math.round(Math.abs(parallel)*5*dt));
      if(Math.abs(a)>rail.len/2||rider.grindTime>2.8||Math.hypot(rider.vx,rider.vz)<.5){rider.grinding=false;rider.grindRail=null;rider.vy=1.6;}
    }else{
      rider.vy-=13.8*dt;rider.y+=rider.vy*dt;
      if(rider.y<=ground){if(rider.vy<-8.8&&rider.air>.55){bail()}else if(rider.vy<0)land();else rider.y=ground}
      if(rider.y>0)rider.air+=dt;
      if(rider.y<0){rider.y=0;rider.vy=0}
      if(rider.air>3.1)bail();
    }
    // Contacting a solid feature from the side slows the skater rather than trapping the line.
    for(const o of obstacles){
      if(o.type==='rail'||o.type==='ramp')continue;
      if(Math.abs(rider.x-o.x)<o.w/2+.12&&Math.abs(rider.z-o.z)<o.d/2+.12&&rider.y<o.h-.04){
        if(rider.y<.2){const dx=rider.x-o.x,dz=rider.z-o.z;if(Math.abs(dx/o.w)>Math.abs(dz/o.d))rider.x=o.x+Math.sign(dx||1)*(o.w/2+.13);else rider.z=o.z+Math.sign(dz||1)*(o.d/2+.13);rider.vx*=.45;rider.vz*=.45}
      }
    }
    rider.boardSpin*=Math.pow(.14,dt);rider.pose=Math.max(0,rider.pose-dt);
    camera.x+=(rider.x-camera.x)*Math.min(1,dt*3.1);camera.z+=(rider.z-camera.z)*Math.min(1,dt*3.1);
    updateHud();
  }
  function draw(){
    drawWorld();drawRider();
    if(started&&!paused){const p=project(rider.x,rider.z,0);ctx.fillStyle='rgba(25,33,27,.56)';ctx.font=`9px ${'DM Mono, monospace'}`;ctx.textAlign='center';ctx.fillText('N',p.x+8,p.y+27);}
  }
  function frame(t){const dt=Math.min(.034,(t-last)/1000||.016);last=t;now=t/1000;update(dt);draw();requestAnimationFrame(frame)}
  requestAnimationFrame(frame);
  function start(){started=true;paused=false;ui.intro.classList.add('hidden');ui.pause.classList.remove('open');toast('SESSION ON · GO FIND A LINE');beep(330,.12,'triangle');}
  function togglePause(){if(!started)return;paused=!paused;ui.pause.classList.toggle('open',paused);keys.clear();}
  function reset(){
    rider.x=0;rider.z=0;rider.vx=0;rider.vz=0;rider.y=0;rider.vy=0;rider.air=0;rider.grinding=false;rider.grindRail=null;
    session.score=0;session.combo=0;session.mult=1;session.tricks=[];session.airTricks=0;session.airScore=0;session.grindScore=0;camera.x=0;camera.z=0;ui.combo.textContent='—';ui.comboCaption.textContent='BUILD YOUR COMBO';ui.scoreCaption.textContent=best?`PERSONAL BEST ${String(best).padStart(6,'0')}`:'LAND TRICKS TO BANK POINTS';updateHud();toast('FRESH CONCRETE · SESSION RESET');
  }
  $('startButton').addEventListener('click',start);$('resumeButton').addEventListener('click',togglePause);$('resetButton').addEventListener('click',reset);
  $('soundButton').addEventListener('click',()=>{soundOn=!soundOn;$('soundButton').innerHTML=`♫ <span>SOUND ${soundOn?'ON':'OFF'}</span>`;if(soundOn)beep(430,.08)});
  addEventListener('keydown',e=>{
    const key=e.key.toLowerCase();if([' ','arrowup','arrowdown','arrowleft','arrowright'].includes(key))e.preventDefault();
    if(key==='escape'){togglePause();return}
    if(key==='r'){reset();return}
    if(['w','a','s','d','shift',' '].includes(key))keys.add(key===' '?'space':key);
    if(key===' '&&!e.repeat)pop();
    if(key==='z'||key==='x'||key==='c')trick(key);
  });
  addEventListener('keyup',e=>keys.delete(e.key.toLowerCase()===' '?'space':e.key.toLowerCase()));
  document.querySelectorAll('[data-key]').forEach(button=>{
    const key=button.dataset.key;const down=e=>{e.preventDefault();button.setPointerCapture?.(e.pointerId);if(key==='space')pop();else if(['z','x','c'].includes(key))trick(key);else keys.add(key)};
    const up=e=>{e.preventDefault();keys.delete(key)};button.addEventListener('pointerdown',down);button.addEventListener('pointerup',up);button.addEventListener('pointercancel',up);button.addEventListener('lostpointercapture',up);
  });
  updateHud();
})();
