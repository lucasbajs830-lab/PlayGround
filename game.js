import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

(() => {
  const $ = id => document.getElementById(id);
  const canvas = $('game');
  const renderer = new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.7));
  renderer.setSize(innerWidth,innerHeight);
  renderer.shadowMap.enabled=true;
  renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.18;

  const scene=new THREE.Scene();
  scene.background=new THREE.Color('#91c9ef');
  scene.fog=new THREE.Fog('#b9d8f3',48,120);
  const camera=new THREE.PerspectiveCamera(76,innerWidth/innerHeight,.08,180);
  camera.rotation.order='YXZ';
  const hemi=new THREE.HemisphereLight(0xc9e6ff,0x4f6481,2.15);scene.add(hemi);
  const sun=new THREE.DirectionalLight(0xffdfad,3.25);sun.position.set(-18,30,-12);sun.castShadow=true;sun.shadow.mapSize.set(1536,1536);sun.shadow.camera.left=-32;sun.shadow.camera.right=32;sun.shadow.camera.top=32;sun.shadow.camera.bottom=-32;scene.add(sun);
  const fill=new THREE.DirectionalLight(0x9acfff,1.1);fill.position.set(20,12,16);scene.add(fill);
  const sphereGeo=new THREE.SphereGeometry(1,18,14),boxGeo=new THREE.BoxGeometry(1,1,1),crystalGeo=new THREE.OctahedronGeometry(1,0);
  function mat(color,roughness=.72,metalness=.02,emissive='#000000',emissiveIntensity=0){return new THREE.MeshStandardMaterial({color,roughness,metalness,emissive,emissiveIntensity});}
  function mesh(geo,material,x=0,y=0,z=0,sx=1,sy=1,sz=1,parent=scene){const o=new THREE.Mesh(geo,material);o.position.set(x,y,z);o.scale.set(sx,sy,sz);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
  const v=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z);
  const world={clock:new THREE.Clock(),time:0,aimYaw:0,aimPitch:0,started:false,running:false,paused:false,ended:false,sound:true,audio:null,enemies:[],shots:[],particles:[],pickups:[],clouds:[],solids:[],kills:0,total:6,toastTimer:0,hitTimer:0};
  const player={pos:v(0,0,12),vel:v(),health:100,mana:100,grounded:true,jumps:0,step:0,bob:0,boltCd:0,burstCd:0,dashCd:0,shieldCd:0,shield:0,dashing:0,invuln:0};

  function addSolid(x,z,w,d,height,color,opts={}){
    const base=opts.base??0,top=base+height;
    mesh(boxGeo,mat(color,.82),x,base+height/2,z,w,height,d);
    world.solids.push({x,z,w,d,bottom:base,top});
    return top;
  }
  function buildArena(){
    // Floating stone island, bordered with warm gold and luminous runes.
    mesh(new THREE.CylinderGeometry(21.3,22.4,1.5,12),mat('#6a6f91',.9),0,-1.05,0,1,1,1);
    mesh(new THREE.CylinderGeometry(20.8,20.8,.34,12),mat('#f2c77f',.48,.2),0,-.17,0,1,1,1);
    mesh(new THREE.CylinderGeometry(20.35,20.35,.1,12),mat('#d7e2db',.9),0,-.05,0,1,1,1);
    const floor=mesh(new THREE.CircleGeometry(20.25,12),mat('#b9d6c9',.93),0,.003,0);floor.rotation.x=-Math.PI/2;floor.receiveShadow=true;
    const inner=mesh(new THREE.CircleGeometry(15.7,12),mat('#c9dfd0',.95),0,.009,0);inner.rotation.x=-Math.PI/2;
    // Concentric inlaid arena markings.
    for(const radius of [5.1,10.4,15.2,19.5]){const ring=mesh(new THREE.TorusGeometry(radius,.045,5,96),mat('#f1d49a',.6,.1),0,.025,0);ring.rotation.x=Math.PI/2;}
    for(let i=0;i<12;i++){const a=i*Math.PI/6;const p=mesh(crystalGeo,mat(i%2?'#8fcef2':'#ffdf9c',.4,.08,i%2?'#55b6e8':'#e9b766',.22),Math.cos(a)*18.7,.58,Math.sin(a)*18.7,.27,.54,.27);p.rotation.z=.18;}
    // Central wind altar and four small raised combat platforms.
    addSolid(0,0,3.2,3.2,.52,'#8298a7');
    mesh(new THREE.CylinderGeometry(1.7,2,.19,8),mat('#e3c28c',.5,.1),0,.62,0);
    const altar=mesh(crystalGeo,mat('#b5e8ff',.28,.08,'#67d8ff',1.2),0,1.42,0,.67,.95,.67);altar.rotation.y=Math.PI/4;
    [[-9,-8],[9,-8],[-9,8],[9,8]].forEach(([x,z],i)=>{addSolid(x,z,3.4,3.4,.48,i%2?'#8c91b4':'#7f9eaa');const rune=mesh(new THREE.TorusGeometry(.8,.055,6,24),mat(i%2?'#d8a4ff':'#8deaff',.3,.05,i%2?'#bd75ff':'#36caff',.6),x,.74,z);rune.rotation.x=Math.PI/2;});
    // Small perimeter pillars, banners and floating cloud wisps.
    for(let i=0;i<8;i++){const a=(i/8)*Math.PI*2,x=Math.cos(a)*17.2,z=Math.sin(a)*17.2;mesh(new THREE.CylinderGeometry(.22,.32,1.55,7),mat('#75879a'),x,1.02,z);mesh(crystalGeo,mat('#ffdf9c',.3,0,'#ffc86a',.9),x,1.95,z,.25,.36,.25);}
    const cloudMat=mat('#f2fbff',1,0,'#ffffff',.08);
    for(let i=0;i<13;i++){const x=(Math.random()-.5)*95,z=(Math.random()-.5)*95,y=4+Math.random()*17,g=new THREE.Group();g.position.set(x,y,z);scene.add(g);for(let j=0;j<4;j++)mesh(sphereGeo,cloudMat,(j-1.5)*1.3,Math.sin(j)*.25,Math.cos(j*2)*.5,1.5,.55,1,g);world.clouds.push({group:g,x,z,phase:Math.random()*6,drift:.45+Math.random()*.8});}
    // Raised cover blocks around the ring; reachable from jumps and useful for cover.
    [[-12,0,2.6,2.6,.72,'#879b9b'],[12,0,2.6,2.6,.72,'#879b9b'],[0,-12,2.6,2.6,.72,'#8e91ae'],[0,12,2.6,2.6,.72,'#8e91ae']].forEach(a=>addSolid(...a));
  }
  buildArena();

  const colors={runner:'#ff7e91',mage:'#a987ff',heavy:'#ffbd67'};
  function makeBot(kind,x,z,index){
    const group=new THREE.Group();group.position.set(x,0,z);scene.add(group);
    const bodyMat=mat(colors[kind],.48,.06,'#ffffff',.08), dark=mat('#30395d'), glow=mat(kind==='mage'?'#d7adff':kind==='heavy'?'#ffe19a':'#9df4ff',.25,.1,kind==='mage'?'#bd75ff':kind==='heavy'?'#ffb84c':'#65eaff',1.25);
    const torso=mesh(sphereGeo,bodyMat,0,1.08,0,.49,.59,.34,group);
    const head=mesh(sphereGeo,bodyMat,0,1.9,0,.43,.42,.4,group);
    const hood=mesh(sphereGeo,dark,0,2.1,-.05,.46,.31,.43,group);
    const face=mesh(boxGeo,dark,0,1.88,.345,.48,.16,.08,group);
    for(const eyeX of [-.14,.14])mesh(sphereGeo,glow,eyeX,1.9,.4,.075,.075,.055,group);
    const belt=mesh(boxGeo,mat('#f4d18c'),0,.92,0,.72,.13,.43,group);
    const arms=[],legs=[];
    for(const side of [-1,1]){
      const arm=mesh(sphereGeo,bodyMat,side*.56,1.12,0,.18,.46,.2,group);arm.rotation.z=side*-.22;arms.push(arm);
      const hand=mesh(sphereGeo,dark,side*.62,.78,.04,.2,.17,.2,group);
      const leg=mesh(sphereGeo,dark,side*.23,.43,0,.2,.48,.23,group);legs.push(leg);
      mesh(sphereGeo,bodyMat,side*.23,.17,.08,.28,.16,.39,group);
    }
    let weapon=null;
    if(kind==='mage'){weapon=mesh(crystalGeo,glow,.72,1.13,.14,.18,.55,.18,group);weapon.rotation.z=.2;}
    if(kind==='heavy'){mesh(sphereGeo,dark,0,1.15,-.27,.44,.49,.17,group);mesh(crystalGeo,glow,0,1.3,-.47,.2,.34,.18,group);}
    const hp=kind==='heavy'?150:kind==='mage'?76:82;
    const enemy={kind,group,hp,maxHp:hp,speed:kind==='runner'?3.45:kind==='mage'?2.15:1.55,damage:kind==='heavy'?12:kind==='runner'?7:6,attackCd:1.35+Math.random()*.8,shootCd:2.4+Math.random()*1.8,stun:0,dead:false,phase:Math.random()*7,arms,legs,bodyMat,glow,hit:0,index};
    world.enemies.push(enemy);return enemy;
  }
  function spawnEnemies(){
    world.enemies.forEach(e=>scene.remove(e.group));world.enemies=[];world.kills=0;
    const spots=[[-14,-12,'runner'],[14,-12,'mage'],[-14,12,'heavy'],[14,12,'runner'],[0,-16,'mage'],[0,16,'heavy']];
    spots.forEach(([x,z,k],i)=>makeBot(k,x,z,i));
  }
  function sound(freq=440,duration=.08,type='sine',volume=.035,slide=0){
    if(!world.sound)return;try{const AC=window.AudioContext||window.webkitAudioContext;if(!world.audio)world.audio=new AC();if(world.audio.state==='suspended')world.audio.resume();const o=world.audio.createOscillator(),g=world.audio.createGain(),t=world.audio.currentTime;o.type=type;o.frequency.setValueAtTime(freq,t);if(slide)o.frequency.exponentialRampToValueAtTime(Math.max(30,freq+slide),t+duration);g.gain.setValueAtTime(volume,t);g.gain.exponentialRampToValueAtTime(.001,t+duration);o.connect(g);g.connect(world.audio.destination);o.start(t);o.stop(t+duration);}catch(_){}
  }
  function effect(pos,color='#84eaff',count=10,power=3){
    const material=mat(color,.3,0,color,1.5);
    for(let i=0;i<count;i++){
      if(world.particles.length>220)break;
      const p=mesh(sphereGeo,material,pos.x,pos.y,pos.z,.07,.07,.07);p.castShadow=false;
      const dir=v(Math.random()*2-1,Math.random()*1.6-.25,Math.random()*2-1).normalize();
      world.particles.push({mesh:p,vel:dir.multiplyScalar(power*(.35+Math.random()*.65)),life:.38+Math.random()*.45,max:.8});
    }
  }
  function showToast(text){const t=$('toast');t.textContent=text;t.classList.add('show');world.toastTimer=1.45;}
  function aimDirection(){return v(-Math.sin(world.aimYaw)*Math.cos(world.aimPitch),Math.sin(world.aimPitch),-Math.cos(world.aimYaw)*Math.cos(world.aimPitch)).normalize();}
  function fireBolt(){
    if(!world.running||player.boltCd>0)return;
    if(player.mana<12){showToast('MANA INSUFICIENTE');sound(140,.12,'triangle',.025,-50);return;}
    player.mana-=12;player.boltCd=.28;sound(530,.12,'triangle',.045,460);
    const dir=aimDirection(),origin=camera.position.clone().addScaledVector(dir,.72);origin.y-=.03;
    const material=mat('#7eeaff',.24,.05,'#36caff',2.2),orb=mesh(sphereGeo,material,origin.x,origin.y,origin.z,.19,.19,.19);orb.castShadow=false;
    const halo=mesh(sphereGeo,mat('#d7fbff',.2,0,'#83ecff',1.5),0,0,0,.085,.085,.085,orb);halo.castShadow=false;
    world.shots.push({mesh:orb,vel:dir.multiplyScalar(31),life:1.35,owner:'player',damage:28,color:'#71e5ff'});
    effect(origin,'#8deaff',4,1.6);updateUI();
  }
  function areaBurst(){
    if(!world.running||player.burstCd>0)return;
    if(player.mana<30){showToast('MANA INSUFICIENTE');sound(140,.12,'triangle',.025,-50);return;}
    player.mana-=30;player.burstCd=5.8;sound(170,.35,'sawtooth',.045,640);
    const center=player.pos.clone().add(aimDirection().multiplyScalar(3.2));center.y=Math.max(.15,center.y);
    const ring=mesh(new THREE.TorusGeometry(1,.08,8,36),mat('#ffad6e',.25,.05,'#ff6e54',1.5),center.x,.12,center.z,1,1,1);ring.rotation.x=Math.PI/2;
    world.particles.push({mesh:ring,vel:v(0,0,0),life:.58,max:.58,expand:true});
    effect(center,'#ff9569',24,5);
    for(const e of world.enemies){if(e.dead)continue;const d=e.group.position.distanceTo(center);if(d<5.2){damageEnemy(e,44*(1-d/12));e.stun=.38;}}
    updateUI();
  }
  function dash(){
    if(!world.running||player.dashCd>0)return;
    let d=moveWish();if(d.lengthSq()<.01)d=aimDirection().setY(0).normalize();
    player.vel.x=d.x*17;player.vel.z=d.z*17;player.dashing=.2;player.dashCd=2.7;player.invuln=.32;
    sound(250,.2,'sawtooth',.035,700);effect(player.pos.clone().add(v(0,.6,0)),'#bd8bff',15,4);updateUI();
  }
  function shield(){
    if(!world.running||player.shieldCd>0)return;
    if(player.mana<25){showToast('MANA INSUFICIENTE');return;}
    player.mana-=25;player.shield=3.5;player.shieldCd=10;sound(420,.3,'sine',.04,420);effect(player.pos.clone().add(v(0,1,0)),'#ffe095',18,2);showToast('VÉU ASTRAL ATIVO');updateUI();
  }
  function damageEnemy(e,amount){
    if(e.dead)return;e.hp-=amount;e.hit=.16;player.mana=Math.min(100,player.mana+2);sound(250,.07,'triangle',.024,-90);
    const p=e.group.position.clone().add(v(0,1.2,0));effect(p,e.kind==='mage'?'#d4a0ff':e.kind==='heavy'?'#ffd27d':'#ff9aaa',5,1.6);
    if(e.hp<=0){e.dead=true;world.kills++;sound(170,.28,'sine',.035,-130);effect(e.group.position.clone().add(v(0,1,0)),'#ffe49e',24,4);scene.remove(e.group);const gem=mesh(crystalGeo,mat('#8deaff',.25,.1,'#44d5ff',1.6),e.group.position.x,.65,e.group.position.z,.28,.4,.28);world.pickups.push({mesh:gem,life:14});showToast('GUARDIÃO DISSIPADO');if(world.kills>=world.total)finish(true);}
    updateUI();
  }
  function damagePlayer(amount,source){
    if(player.invuln>0||!world.running)return;const real=player.shield>0?amount*.35:amount;player.health=Math.max(0,player.health-real);player.invuln=.72;world.hitTimer=.24;
    $('hitFlash').style.opacity='.72';$('damageDirection').style.opacity='.9';window.setTimeout(()=>{$('hitFlash').style.opacity='0';$('damageDirection').style.opacity='0';},180);
    sound(120,.18,'sawtooth',.035,-60);if(source){const a=Math.atan2(source.x-player.pos.x,source.z-player.pos.z);$('damageDirection').style.transform=`translate(-50%,-50%) rotate(${a-world.aimYaw}rad)`;}
    effect(player.pos.clone().add(v(0,1,0)),'#ff7189',7,2);updateUI();if(player.health<=0)finish(false);
  }
  function finish(win){world.running=false;world.ended=true;document.exitPointerLock?.();$('endScreen').classList.remove('hidden');$('endEyebrow').textContent=win?'A ARENA ESTÁ EM SILÊNCIO':'OS VENTOS SE CALARAM';$('endTitle').textContent=win?'VITÓRIA!':'DERROTA';$('endTitle').style.color=win?'#ffe09b':'#ff92a4';$('endCopy').textContent=win?'Os ventos agora cantam seu nome.':'Reúna sua magia e tente novamente.';$('statusText').textContent=win?'CAMPEÃO DA ARENA':'NINJA DERROTADO';sound(win?660:180,.7,'sine',.05,win?340:-100);}
  function moveWish(){const f=(keys.has('KeyW')||keys.has('ArrowUp')?1:0)-(keys.has('KeyS')||keys.has('ArrowDown')?1:0);const r=(keys.has('KeyD')||keys.has('ArrowRight')?1:0)-(keys.has('KeyA')||keys.has('ArrowLeft')?1:0);const d=v(0,0,0);if(f||r){const yaw=world.aimYaw;d.set(-Math.sin(yaw)*f+Math.cos(yaw)*r,0,-Math.cos(yaw)*f-Math.sin(yaw)*r).normalize();}return d;}
  function overlapsSolid(x,z,r,solid){return x+r>solid.x-solid.w/2&&x-r<solid.x+solid.w/2&&z+r>solid.z-solid.d/2&&z-r<solid.z+solid.d/2;}
  function collisionMove(x,z,feet,r=.38){
    let nx=x,nz=z;
    for(const s of world.solids){if(feet>=s.top-.02||feet+1.7<=s.bottom)continue;if(!overlapsSolid(nx,nz,r,s))continue;
      const dx=nx-s.x,dz=nz-s.z,px=s.w/2+r-Math.abs(dx),pz=s.d/2+r-Math.abs(dz);
      if(px<pz)nx=s.x+Math.sign(dx||1)*(s.w/2+r+.015);else nz=s.z+Math.sign(dz||1)*(s.d/2+r+.015);
    }
    return [THREE.MathUtils.clamp(nx,-19.05,19.05),THREE.MathUtils.clamp(nz,-19.05,19.05)];
  }
  function floorHeight(x,z,oldFeet,vy){
    let h=0;
    for(const s of world.solids){if(Math.abs(x-s.x)<=s.w/2+.24&&Math.abs(z-s.z)<=s.d/2+.24){const top=s.top;if(oldFeet>=top-.09&&vy<=0&&oldFeet>=s.bottom-.08)h=Math.max(h,top);}}
    return h;
  }
  const keys=new Set();let pointer=false,mouseDown=false,joystick=null,touchAim=null;
  function updateUI(){
    $('healthFill').style.width=`${player.health}%`;$('healthText').textContent=Math.ceil(player.health);
    $('manaFill').style.width=`${player.mana}%`;$('manaText').textContent=Math.floor(player.mana);
    $('kills').innerHTML=`${world.kills} <i>/ ${world.total}</i>`;$('enemyCount').textContent=`${Math.max(0,world.total-world.kills)} inimigos restantes`;
    $('boltCooldown').style.transform=`translateY(${player.boltCd>0?'0':'100%'})`;$('burstCooldown').style.transform=`translateY(${player.burstCd>0?'0':'100%'})`;$('dashCooldown').style.transform=`translateY(${player.dashCd>0?'0':'100%'})`;$('shieldCooldown').style.transform=`translateY(${player.shieldCd>0?'0':'100%'})`;
  }
  function resetGame(){
    world.enemies.forEach(e=>scene.remove(e.group));world.shots.forEach(s=>scene.remove(s.mesh));world.particles.forEach(p=>scene.remove(p.mesh));world.pickups.forEach(p=>scene.remove(p.mesh));world.shots=[];world.particles=[];world.pickups=[];
    player.pos.set(0,0,12);player.vel.set(0,0,0);player.grounded=true;player.jumps=0;player.health=100;player.mana=100;player.shield=0;player.shieldCd=0;player.boltCd=0;player.burstCd=0;player.dashCd=0;player.dashing=0;player.invuln=0;world.aimYaw=0;world.aimPitch=0;world.ended=false;world.paused=false;world.started=true;world.running=true;
    camera.rotation.set(0,0,0);camera.position.set(0,1.62,12);spawnEnemies();$('intro').classList.add('hidden');$('endScreen').classList.add('hidden');$('pauseScreen').classList.remove('open');$('statusText').textContent='COMBATE EM ANDAMENTO';$('objective').textContent='Derrote os guardiões';updateUI();
  }
  function startGame(){resetGame();canvas.requestPointerLock?.().catch?.(()=>{});}
  function togglePause(force){if(!world.started||world.ended)return;world.paused=force??!world.paused;world.running=!world.paused;$('pauseScreen').classList.toggle('open',world.paused);if(world.paused){document.exitPointerLock?.();$('statusText').textContent='PAUSA'}else{$('statusText').textContent='COMBATE EM ANDAMENTO';canvas.requestPointerLock?.().catch?.(()=>{});}}
  $('startButton').addEventListener('click',startGame);$('restartButton').addEventListener('click',resetGame);$('resumeButton').addEventListener('click',()=>togglePause(false));$('pauseButton').addEventListener('click',()=>togglePause());$('menuButton').addEventListener('click',()=>{world.running=false;world.started=false;world.ended=false;$('endScreen').classList.add('hidden');$('intro').classList.remove('hidden');$('statusText').textContent='PRONTO PARA O COMBATE';document.exitPointerLock?.();});
  $('soundButton').addEventListener('click',()=>{world.sound=!world.sound;$('soundButton').innerHTML=world.sound?'♫ <span>SOM ON</span>':'♫ <span>SOM OFF</span>';if(world.sound)sound(460,.08);});
  $('abilityBar').addEventListener('click',e=>{const b=e.target.closest('.ability');if(!b)return;({bolt:fireBolt,burst:areaBurst,dash,shield})[b.dataset.ability]?.();});
  document.addEventListener('keydown',e=>{keys.add(e.code);if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code))e.preventDefault();if(e.repeat)return;
    if(e.code==='Escape'){if(world.started&&!world.ended)togglePause();return;}if(e.code==='Digit1')fireBolt();if(e.code==='Digit2'||e.code==='KeyE')areaBurst();if(e.code==='Digit3'||e.code==='KeyQ')dash();if(e.code==='KeyF')shield();
    if(e.code==='Space'&&world.running){if(player.grounded||player.jumps<2){player.vel.y=player.jumps===0?8.2:7.3;player.grounded=false;player.jumps++;sound(330,.12,'sine',.03,260);effect(player.pos.clone().add(v(0,.08,0)),'#a9eeff',8,1.8);}}
  });document.addEventListener('keyup',e=>keys.delete(e.code));
  document.addEventListener('mousemove',e=>{if(document.pointerLockElement===canvas&&world.running){world.aimYaw-=e.movementX*.00235;world.aimPitch-=e.movementY*.0021;world.aimPitch=THREE.MathUtils.clamp(world.aimPitch,-1.18,1.18);}});
  canvas.style.touchAction='none';canvas.addEventListener('pointerdown',e=>{if(e.pointerType==='touch'&&world.running){touchAim={x:e.clientX,y:e.clientY};try{canvas.setPointerCapture(e.pointerId);}catch(_){}}});
  canvas.addEventListener('pointermove',e=>{if(e.pointerType==='touch'&&touchAim&&world.running){world.aimYaw-=(e.clientX-touchAim.x)*.004;world.aimPitch=THREE.MathUtils.clamp(world.aimPitch-(e.clientY-touchAim.y)*.003,-1.18,1.18);touchAim={x:e.clientX,y:e.clientY};}});
  canvas.addEventListener('pointerup',e=>{if(e.pointerType==='touch')touchAim=null;});canvas.addEventListener('pointercancel',()=>{touchAim=null;});
  canvas.addEventListener('click',()=>{if(world.running&&!document.pointerLockElement&&matchMedia('(pointer:fine)').matches)canvas.requestPointerLock?.().catch?.(()=>{});if(world.running)fireBolt();});
  document.addEventListener('pointerlockchange',()=>{pointer=document.pointerLockElement===canvas;});
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&world.running)togglePause(true);});
  $('mobileControls').addEventListener('pointerdown',e=>{const action=e.target.closest('[data-mobile]');if(!action)return;e.preventDefault();const a=action.dataset.mobile;if(a==='bolt')fireBolt();if(a==='dash')dash();if(a==='jump'&&world.running){player.vel.y=8;player.grounded=false;player.jumps=Math.min(2,player.jumps+1);}});
  const joy=$('joystick');joy.addEventListener('pointerdown',e=>{joystick={id:e.pointerId,x:e.clientX,y:e.clientY};try{joy.setPointerCapture(e.pointerId);}catch(_){}});joy.addEventListener('pointermove',e=>{if(!joystick||joystick.id!==e.pointerId)return;const dx=THREE.MathUtils.clamp((e.clientX-joystick.x)/34,-1,1),dy=THREE.MathUtils.clamp((e.clientY-joystick.y)/34,-1,1);keys.delete('KeyW');keys.delete('KeyS');keys.delete('KeyA');keys.delete('KeyD');if(dy<-.2)keys.add('KeyW');if(dy>.2)keys.add('KeyS');if(dx<-.2)keys.add('KeyA');if(dx>.2)keys.add('KeyD');});joy.addEventListener('pointerup',()=>{joystick=null;['KeyW','KeyS','KeyA','KeyD'].forEach(k=>keys.delete(k));});
  window.addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.7));});
  function enemyShoot(e){const origin=e.group.position.clone().add(v(0,1.35,0));const target=player.pos.clone().add(v(0,1.1,0));const dir=target.sub(origin).normalize();const color=e.kind==='mage'?'#d7a3ff':'#ffb977';const m=mesh(sphereGeo,mat(color,.24,0,color,1.5),origin.x,origin.y,origin.z,.16,.16,.16);m.castShadow=false;world.shots.push({mesh:m,vel:dir.multiplyScalar(e.kind==='mage'?9:7),life:3,owner:'enemy',damage:e.damage,color});sound(e.kind==='mage'?320:210,.08,'triangle',.018,100);}
  function updateEnemies(dt){
    for(const e of world.enemies){if(e.dead)continue;e.phase+=dt*6;if(e.stun>0)e.stun-=dt;if(e.attackCd>0)e.attackCd-=dt;if(e.shootCd>0)e.shootCd-=dt;
      const p=e.group.position,to=player.pos.clone().sub(p);to.y=0;const dist=to.length();if(dist>.01)to.normalize();
      let move=v(0,0,0);
      if(e.stun<=0){if(e.kind==='mage'){if(dist>9)move.copy(to);else if(dist<5)move.copy(to).negate();else move.set(-to.z,0,to.x).multiplyScalar(Math.sin(e.phase*.22)*.28);if(e.shootCd<=0&&dist<17){enemyShoot(e);e.shootCd=3.25+Math.random()*.75;}}
        else if(dist>1.8)move.copy(to);else if(e.attackCd<=0){damagePlayer(e.damage,p);e.attackCd=e.kind==='heavy'?1.75:1.15;}}
      if(move.lengthSq()>.01){const speed=e.speed*(e.stun>0?.15:1)*(e.kind==='runner'&&Math.sin(e.phase*.5)>0.7?1.35:1);const [nx,nz]=collisionMove(p.x+move.x*speed*dt,p.z+move.z*speed*dt,0,.42);p.x=nx;p.z=nz;}
      e.group.rotation.y=Math.atan2(player.pos.x-p.x,player.pos.z-p.z);const bounce=Math.abs(Math.sin(e.phase))*.07;e.group.position.y=bounce;
      e.legs.forEach((leg,i)=>{leg.position.z=Math.sin(e.phase+(i*Math.PI))*.11;leg.rotation.x=Math.sin(e.phase+i*Math.PI)*.34;});e.arms.forEach((arm,i)=>{arm.rotation.x=Math.sin(e.phase+i*Math.PI+Math.PI)*.18;});
      if(e.hit>0){e.hit-=dt;e.bodyMat.emissive.set('#ffffff');e.bodyMat.emissiveIntensity=.9;}else{e.bodyMat.emissiveIntensity=.08;}
    }
  }
  function updateShots(dt){
    for(let i=world.shots.length-1;i>=0;i--){const s=world.shots[i];s.life-=dt;s.mesh.position.addScaledVector(s.vel,dt);let hit=false;
      if(s.owner==='player'){
        for(const e of world.enemies){if(e.dead)continue;const center=e.group.position.clone().add(v(0,1.15,0));if(s.mesh.position.distanceTo(center)<.75){damageEnemy(e,s.damage);effect(s.mesh.position,s.color,12,2.7);hit=true;break;}}
      }else if(s.mesh.position.distanceTo(player.pos.clone().add(v(0,1,0)))<.7){damagePlayer(s.damage,s.mesh.position);effect(s.mesh.position,s.color,8,2);hit=true;}
      if(Math.abs(s.mesh.position.x)>22||Math.abs(s.mesh.position.z)>22||s.mesh.position.y<-.5||s.life<=0)hit=true;
      if(hit){scene.remove(s.mesh);world.shots.splice(i,1);}
    }
  }
  function updatePlayer(dt){
    player.boltCd=Math.max(0,player.boltCd-dt);player.burstCd=Math.max(0,player.burstCd-dt);player.dashCd=Math.max(0,player.dashCd-dt);player.shieldCd=Math.max(0,player.shieldCd-dt);player.shield=Math.max(0,player.shield-dt);player.invuln=Math.max(0,player.invuln-dt);player.dashing=Math.max(0,player.dashing-dt);player.mana=Math.min(100,player.mana+4.4*dt);
    const wish=moveWish(),running=keys.has('ShiftLeft')||keys.has('ShiftRight');const max=running?10.2:7.1,acc=player.grounded?34:14;
    if(player.dashing<=0){const targetX=wish.x*max,targetZ=wish.z*max;player.vel.x+=THREE.MathUtils.clamp(targetX-player.vel.x,-acc*dt,acc*dt);player.vel.z+=THREE.MathUtils.clamp(targetZ-player.vel.z,-acc*dt,acc*dt);if(wish.lengthSq()<.01){player.vel.x*=Math.pow(.001,dt);player.vel.z*=Math.pow(.001,dt);}}
    player.vel.y-=21*dt;const oldFeet=player.pos.y;let [nx,nz]=collisionMove(player.pos.x+player.vel.x*dt,player.pos.z+player.vel.z*dt,oldFeet,.35);player.pos.x=nx;player.pos.z=nz;
    let newY=oldFeet+player.vel.y*dt;const ground=floorHeight(nx,nz,oldFeet,player.vel.y);if(newY<=ground){if(!player.grounded&&player.vel.y<-4){sound(105,.1,'sine',.025,80);effect(v(nx,.06,nz),'#b2f6d2',6,1.3);}newY=ground;player.vel.y=0;player.grounded=true;player.jumps=0;}else player.grounded=false;player.pos.y=newY;
    // Island bounds are a soft wall; no falling through gaps or slipping off the arena.
    player.pos.x=THREE.MathUtils.clamp(player.pos.x,-18.95,18.95);player.pos.z=THREE.MathUtils.clamp(player.pos.z,-18.95,18.95);
    const speed=Math.hypot(player.vel.x,player.vel.z);player.step+=dt*speed;const bob=player.grounded?Math.sin(player.step*1.35)*Math.min(.045,speed*.004):0;player.bob+=(bob-player.bob)*Math.min(1,dt*9);
    camera.position.set(player.pos.x,player.pos.y+1.62+player.bob,player.pos.z);camera.rotation.set(world.aimPitch,world.aimYaw,0,'YXZ');
    $('speedChip').innerHTML=`${Math.round(speed*3.6)} <small>KM/H</small>`;
    if(speed>4.5&&player.grounded&&Math.floor(player.step*1.1)!==Math.floor((player.step-speed*dt*1.1)*1.1)){if(Math.random()<.5)sound(85,.025,'sine',.009);}
  }
  function updatePickups(dt){for(let i=world.pickups.length-1;i>=0;i--){const p=world.pickups[i];p.life-=dt;p.mesh.rotation.y+=dt*1.8;p.mesh.position.y=.65+Math.sin(world.time*3+i)*.14;if(p.mesh.position.distanceTo(player.pos.clone().add(v(0,.65,0)))<1.2){player.mana=Math.min(100,player.mana+24);player.health=Math.min(100,player.health+8);sound(640,.16,'sine',.035,280);effect(p.mesh.position,'#92f3ff',14,2);scene.remove(p.mesh);world.pickups.splice(i,1);showToast('NÚCLEO ASTRAL + MANA');}else if(p.life<=0){scene.remove(p.mesh);world.pickups.splice(i,1);}}}
  function updateParticles(dt){for(let i=world.particles.length-1;i>=0;i--){const p=world.particles[i];p.life-=dt;if(p.expand){const k=1+(1-p.life/p.max)*4;p.mesh.scale.set(k,.07,k);}else{p.vel.y-=4*dt;p.mesh.position.addScaledVector(p.vel,dt);const scale=Math.max(.01,p.life/p.max);p.mesh.scale.setScalar(.07*scale);}if(p.life<=0){scene.remove(p.mesh);world.particles.splice(i,1);}}}
  function tick(){requestAnimationFrame(tick);const dt=Math.min(world.clock.getDelta(),.035);world.time+=dt;
    for(const c of world.clouds){c.group.position.x=c.x+Math.sin(world.time*.12+c.phase)*c.drift*3;c.group.position.z=c.z+Math.cos(world.time*.1+c.phase)*c.drift*2;}
    if(world.toastTimer>0){world.toastTimer-=dt;if(world.toastTimer<=0)$('toast').classList.remove('show');}
    if(world.running){updatePlayer(dt);updateEnemies(dt);updateShots(dt);updatePickups(dt);player.mana=Math.min(100,player.mana+0);updateUI();}
    updateParticles(dt);renderer.render(scene,camera);
  }
  updateUI();tick();
})();
