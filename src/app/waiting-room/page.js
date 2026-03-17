"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const CW = 520, CH = 380;

/* =========================================================
   FLAPPY PIERS
   ========================================================= */
const FBX = 70, FBR = 13, FGR = 0.42, FJP = -7.5;
const FPW = 32, FPG = 80, FPS = 2.4, FPI = 120;

function FlappyGame() {
  const ref = useRef(null);
  const g = useRef({ phase:"idle", bird:{y:CH/2,vy:0}, pipes:[], score:0, frame:0, raf:null });

  const act = useCallback(() => {
    const s = g.current;
    if (s.phase !== "playing") {
      Object.assign(s, { phase:"playing", bird:{y:CH/2,vy:0}, pipes:[], score:0, frame:0 });
    }
    s.bird.vy = FJP;
  }, []);

  useEffect(() => {
    const canvas = ref.current, ctx = canvas.getContext("2d");
    const s = g.current;

    function draw() {
      ctx.fillStyle = "#091422"; ctx.fillRect(0,0,CW,CH);
      ctx.fillStyle = "#1e3a28"; ctx.fillRect(0,CH-24,CW,24);
      ctx.fillStyle = "#2a5038"; ctx.fillRect(0,CH-24,CW,3);

      if (s.phase === "idle") {
        ctx.textAlign = "center";
        ctx.fillStyle = "rgba(245,240,232,0.9)"; ctx.font = "bold 22px system-ui";
        ctx.fillText("Flappy Piers 🐦", CW/2, CH/2-16);
        ctx.fillStyle = "rgba(245,240,232,0.5)"; ctx.font = "14px system-ui";
        ctx.fillText("tap or click to fly!", CW/2, CH/2+10);
        return;
      }

      s.pipes.forEach(p => {
        ctx.fillStyle = "#3d7a58"; ctx.fillRect(p.x, 0, FPW, p.top-10);
        ctx.fillStyle = "#6BAE8A"; ctx.fillRect(p.x-4, p.top-10, FPW+8, 10);
        ctx.fillStyle = "#3d7a58"; ctx.fillRect(p.x, p.top+FPG+10, FPW, CH-p.top-FPG-24-10);
        ctx.fillStyle = "#6BAE8A"; ctx.fillRect(p.x-4, p.top+FPG, FPW+8, 10);
      });

      ctx.save(); ctx.translate(FBX, s.bird.y);
      ctx.rotate(Math.max(-0.45, Math.min(0.55, s.bird.vy*0.065)));
      ctx.fillStyle = "#f5f0e8"; ctx.beginPath(); ctx.ellipse(0,0,FBR,FBR*0.82,0,0,Math.PI*2); ctx.fill();
      ctx.fillStyle = "#d4c9b8"; ctx.beginPath(); ctx.ellipse(-2,2,7,4,-0.3,0,Math.PI*2); ctx.fill();
      ctx.fillStyle = "#0C1B2E"; ctx.beginPath(); ctx.arc(5,-3,3,0,Math.PI*2); ctx.fill();
      ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(6,-3.8,1.3,0,Math.PI*2); ctx.fill();
      ctx.fillStyle = "#e89030"; ctx.beginPath(); ctx.moveTo(FBR-1,-1); ctx.lineTo(FBR+7,-2); ctx.lineTo(FBR+7,3); ctx.closePath(); ctx.fill();
      ctx.restore();

      ctx.fillStyle = "rgba(255,255,255,0.9)"; ctx.font = "bold 26px system-ui"; ctx.textAlign = "center";
      ctx.fillText(s.score, CW/2, 36);

      if (s.phase === "dead") {
        ctx.fillStyle = "rgba(9,20,34,0.75)"; ctx.fillRect(0,0,CW,CH);
        ctx.fillStyle = "#f5f0e8"; ctx.font = "bold 24px system-ui"; ctx.textAlign = "center";
        ctx.fillText("Game Over!", CW/2, CH/2-22);
        ctx.fillStyle = "#6BAE8A"; ctx.font = "bold 17px system-ui";
        ctx.fillText(`Score: ${s.score}`, CW/2, CH/2+4);
        ctx.fillStyle = "rgba(245,240,232,0.5)"; ctx.font = "14px system-ui";
        ctx.fillText("tap to play again", CW/2, CH/2+30);
      }
    }

    function tick() {
      if (s.phase === "playing") {
        s.frame++; s.bird.vy += FGR; s.bird.y += s.bird.vy;
        if (s.frame % FPI === 0) {
          const lo=30, hi=CH-FPG-30-24;
          s.pipes.push({ x:CW+10, top:lo+Math.random()*(hi-lo), scored:false });
        }
        s.pipes = s.pipes.filter(p => p.x+FPW+4>0);
        s.pipes.forEach(p => {
          p.x -= FPS;
          if (!p.scored && p.x+FPW < FBX-FBR) { p.scored=true; s.score++; }
        });
        if (s.bird.y+FBR>CH-24 || s.bird.y-FBR<0) s.phase="dead";
        for (const p of s.pipes) {
          if (FBX+FBR>p.x-4 && FBX-FBR<p.x+FPW+4 && (s.bird.y-FBR<p.top || s.bird.y+FBR>p.top+FPG)) s.phase="dead";
        }
      }
      draw();
      s.raf = requestAnimationFrame(tick);
    }
    s.raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(s.raf);
  }, []);

  return (
    <div className="game-canvas-wrap">
      <canvas ref={ref} width={CW} height={CH}
        onClick={act} onTouchStart={e=>{e.preventDefault();act();}}
        className="game-canvas" style={{touchAction:"none",cursor:"pointer"}}
      />
      <p className="game-hint">Click or tap anywhere to flap</p>
    </div>
  );
}

/* =========================================================
   SPACE INVADERS
   ========================================================= */
const SI_ROWS=3, SI_COLS=8;
const AW=36, AH=26, ASX=57, ASY=44;
const ALIEN_X0 = Math.round((CW - (SI_COLS*ASX - (ASX-AW)))/2);
const ALIEN_Y0 = 28;
const PW=38, PH=26, PLAYER_SPD=4;
const PLAYER_Y = CH - PH - 14;
const BUP=9, BDN=4;
const ACOLS = ["#e87070","#e8a060","#6BAE8A"];
const APTS  = [30, 20, 10];

function initSI() {
  const aliens = [];
  for (let r=0;r<SI_ROWS;r++) for (let c=0;c<SI_COLS;c++) aliens.push({r,c,alive:true,type:r});
  return { phase:"idle", px:CW/2, pb:null, aliens, gx:0, gy:0, gdx:1, ab:[], score:0, lives:3, frame:0, atick:0 };
}

function drawAlien(ctx, x, y, type, tick) {
  ctx.fillStyle = ACOLS[type];
  const cx=x+AW/2, cy=y+AH/2, leg=tick%2===0;
  if (type===0) {
    ctx.beginPath(); ctx.ellipse(cx,cy-2,AW/2-2,7,0,0,Math.PI*2); ctx.fill();
    ctx.fillRect(x+4,cy+2,AW-8,10);
    [x+2, x+AW/2-3, x+AW-8].forEach(lx=>ctx.fillRect(lx,cy+(leg?9:7),6,5));
  } else if (type===1) {
    ctx.fillRect(x+4,y+4,AW-8,AH-8);
    ctx.fillRect(x+6,y,6,6); ctx.fillRect(x+AW-12,y,6,6);
    ctx.fillRect(x,cy+(leg?0:2),6,6); ctx.fillRect(x+AW-6,cy+(leg?0:2),6,6);
    ctx.fillRect(x+4,y+AH-6,6,8); ctx.fillRect(x+AW-10,y+AH-6,6,8);
  } else {
    ctx.fillRect(x+2,y+6,AW-4,AH-10);
    ctx.fillRect(x+10,y+2,AW-20,6);
    ctx.fillRect(x,y+(leg?10:12),8,6); ctx.fillRect(x+AW-8,y+(leg?10:12),8,6);
    ctx.fillRect(x+2,y+AH-8,6,10); ctx.fillRect(x+AW-8,y+AH-8,6,10);
  }
  ctx.fillStyle="#fff";
  ctx.beginPath(); ctx.arc(cx-5,cy-2,2,0,Math.PI*2); ctx.arc(cx+5,cy-2,2,0,Math.PI*2); ctx.fill();
}

function SpaceInvadersGame() {
  const ref = useRef(null);
  const s = useRef(initSI());
  const keys = useRef({left:false,right:false});
  const pfire = useRef(false);

  const act = useCallback(()=>{
    const g = s.current;
    if (g.phase!=="playing") { Object.assign(s.current, initSI()); s.current.phase="playing"; }
  },[]);

  useEffect(()=>{
    const onKey=e=>{
      const dn=e.type==="keydown";
      if(e.key==="ArrowLeft"){keys.current.left=dn;e.preventDefault();}
      if(e.key==="ArrowRight"){keys.current.right=dn;e.preventDefault();}
      if(e.key===" "&&dn){pfire.current=true;e.preventDefault();}
    };
    window.addEventListener("keydown",onKey); window.addEventListener("keyup",onKey);
    return ()=>{ window.removeEventListener("keydown",onKey); window.removeEventListener("keyup",onKey); };
  },[]);

  useEffect(()=>{
    const canvas=ref.current, ctx=canvas.getContext("2d");
    let raf;

    function draw() {
      const g=s.current;
      ctx.fillStyle="#090e1a"; ctx.fillRect(0,0,CW,CH);
      if(g.phase==="idle"){
        ctx.textAlign="center";
        ctx.fillStyle="#f5f0e8"; ctx.font="bold 22px system-ui"; ctx.fillText("Space Invaders 👾",CW/2,CH/2-20);
        ctx.fillStyle="rgba(245,240,232,0.5)"; ctx.font="13px system-ui";
        ctx.fillText("Arrow keys · Space to shoot",CW/2,CH/2+8);
        ctx.fillText("Click / tap to start",CW/2,CH/2+30); return;
      }
      ctx.fillStyle="rgba(107,174,138,0.3)"; ctx.fillRect(0,PLAYER_Y+PH+6,CW,2);
      g.aliens.filter(a=>a.alive).forEach(a=>{
        drawAlien(ctx, g.gx+ALIEN_X0+a.c*ASX, g.gy+ALIEN_Y0+a.r*ASY, a.type, g.atick);
      });
      // Player
      ctx.fillStyle="#f5f0e8"; ctx.beginPath();
      ctx.moveTo(g.px,PLAYER_Y); ctx.lineTo(g.px-PW/2,PLAYER_Y+PH); ctx.lineTo(g.px+PW/2,PLAYER_Y+PH);
      ctx.closePath(); ctx.fill();
      ctx.fillStyle="#6BAE8A"; ctx.fillRect(g.px-4,PLAYER_Y+PH-4,8,5);
      if(g.pb){ ctx.fillStyle="#ffe080"; ctx.fillRect(g.pb.x-2,g.pb.y-10,4,12); }
      g.ab.forEach(b=>{ ctx.fillStyle="#e87070"; ctx.fillRect(b.x-2,b.y,4,12); });
      // HUD
      ctx.fillStyle="rgba(245,240,232,0.8)"; ctx.font="bold 13px system-ui";
      ctx.textAlign="left"; ctx.fillText(`Score: ${g.score}`,14,20);
      ctx.textAlign="right"; ctx.fillText(`♥ ${g.lives}`,CW-14,20);
      if(g.phase==="dead"||g.phase==="won"){
        ctx.fillStyle="rgba(9,14,26,0.78)"; ctx.fillRect(0,0,CW,CH);
        ctx.fillStyle=g.phase==="won"?"#6BAE8A":"#f5f0e8"; ctx.font="bold 24px system-ui"; ctx.textAlign="center";
        ctx.fillText(g.phase==="won"?"You Won! 🎉":"Game Over!",CW/2,CH/2-22);
        ctx.fillStyle="rgba(245,240,232,0.85)"; ctx.font="bold 16px system-ui";
        ctx.fillText(`Score: ${g.score}`,CW/2,CH/2+4);
        ctx.fillStyle="rgba(245,240,232,0.5)"; ctx.font="13px system-ui";
        ctx.fillText("click / tap to play again",CW/2,CH/2+28);
      }
    }

    function tick() {
      const g=s.current;
      if(g.phase==="playing"){
        g.frame++;
        if(keys.current.left)  g.px=Math.max(PW/2+4,g.px-PLAYER_SPD);
        if(keys.current.right) g.px=Math.min(CW-PW/2-4,g.px+PLAYER_SPD);
        if(pfire.current&&!g.pb){ g.pb={x:g.px,y:PLAYER_Y}; }
        pfire.current=false;
        if(g.pb){ g.pb.y-=BUP; if(g.pb.y<-10) g.pb=null; }
        g.ab=g.ab.filter(b=>b.y<CH+10);
        g.ab.forEach(b=>{b.y+=BDN;});

        const live=g.aliens.filter(a=>a.alive);
        if(live.length===0){g.phase="won";}
        else {
          const mi=Math.max(4,Math.floor(40*live.length/(SI_ROWS*SI_COLS)));
          if(g.frame%mi===0){
            g.gx+=g.gdx*7; g.atick++;
            const xs=live.map(a=>g.gx+ALIEN_X0+a.c*ASX);
            const mn=Math.min(...xs), mx=Math.max(...xs)+AW;
            if((g.gdx>0&&mx>=CW-8)||(g.gdx<0&&mn<=8)){ g.gdx*=-1; g.gy+=22; }
          }
          if(g.frame%110===0&&g.ab.length<2){
            const sh=live[Math.floor(Math.random()*live.length)];
            g.ab.push({x:g.gx+ALIEN_X0+sh.c*ASX+AW/2, y:g.gy+ALIEN_Y0+sh.r*ASY+AH});
          }
        }
        if(g.pb){
          for(const a of g.aliens){
            if(!a.alive) continue;
            const ax=g.gx+ALIEN_X0+a.c*ASX, ay=g.gy+ALIEN_Y0+a.r*ASY;
            if(g.pb.x>=ax-2&&g.pb.x<=ax+AW+2&&g.pb.y<=ay+AH&&g.pb.y>=ay-4){
              a.alive=false; g.score+=APTS[a.type]; g.pb=null; break;
            }
          }
        }
        g.ab=g.ab.filter(b=>{
          const hit=b.x>=g.px-PW/2&&b.x<=g.px+PW/2&&b.y>=PLAYER_Y&&b.y<=PLAYER_Y+PH;
          if(hit){g.lives--;if(g.lives<=0)g.phase="dead";}
          return !hit;
        });
        const liveNow=g.aliens.filter(a=>a.alive);
        if(liveNow.length>0){
          const bot=Math.max(...liveNow.map(a=>g.gy+ALIEN_Y0+a.r*ASY+AH));
          if(bot>=PLAYER_Y-10)g.phase="dead";
        }
      }
      draw(); raf=requestAnimationFrame(tick);
    }
    raf=requestAnimationFrame(tick);
    return ()=>cancelAnimationFrame(raf);
  },[]);

  const btnStyle = {
    padding:"0.7rem 1rem", background:"rgba(107,174,138,0.15)",
    border:"1.5px solid rgba(107,174,138,0.35)", borderRadius:"8px",
    color:"#f5f0e8", fontSize:"1.1rem", cursor:"pointer", userSelect:"none", touchAction:"none",
  };

  return (
    <div className="game-canvas-wrap">
      <canvas ref={ref} width={CW} height={CH}
        onClick={act} onTouchStart={e=>{e.preventDefault();act();}}
        className="game-canvas" style={{touchAction:"none",cursor:"pointer"}}
      />
      <div style={{display:"flex",gap:"0.5rem",justifyContent:"center",marginTop:"0.5rem"}}>
        <button style={btnStyle}
          onPointerDown={()=>{keys.current.left=true;}} onPointerUp={()=>{keys.current.left=false;}}
          onPointerLeave={()=>{keys.current.left=false;}}>◀</button>
        <button style={{...btnStyle, background:"rgba(232,112,112,0.2)", borderColor:"rgba(232,112,112,0.4)"}}
          onPointerDown={()=>{pfire.current=true;}}>🔫 Fire</button>
        <button style={btnStyle}
          onPointerDown={()=>{keys.current.right=true;}} onPointerUp={()=>{keys.current.right=false;}}
          onPointerLeave={()=>{keys.current.right=false;}}>▶</button>
      </div>
      <p className="game-hint">Arrow keys + Space · or use buttons above</p>
    </div>
  );
}

/* =========================================================
   SNAKE
   ========================================================= */
const SC=20, SCOLS=26, SROWS=19;
// canvas: SCOLS*SC=520, SROWS*SC=380

function randFood(snake){
  let f;
  do { f={c:Math.floor(Math.random()*SCOLS),r:Math.floor(Math.random()*SROWS)}; }
  while(snake.some(s=>s.c===f.c&&s.r===f.r));
  return f;
}
function initSnake(){
  const snake=[{c:13,r:9},{c:12,r:9},{c:11,r:9}];
  return { phase:"idle", snake, dir:{dc:1,dr:0}, nd:{dc:1,dr:0}, food:randFood(snake), score:0, last:0 };
}
function snakeInterval(len){ return Math.max(90,195-len*3); }

function SnakeGame() {
  const ref = useRef(null);
  const g = useRef(initSnake());

  const changeDir = useCallback((dc,dr)=>{
    const s=g.current;
    if(s.phase!=="playing"){ s.phase="playing"; s.nd={dc,dr}; return; }
    if(dc!==(-s.dir.dc)||dr!==(-s.dir.dr)) s.nd={dc,dr};
  },[]);

  useEffect(()=>{
    const onKey=e=>{
      const map={ArrowUp:{dc:0,dr:-1},ArrowDown:{dc:0,dr:1},ArrowLeft:{dc:-1,dr:0},ArrowRight:{dc:1,dr:0}};
      if(map[e.key]){e.preventDefault();const d=map[e.key];changeDir(d.dc,d.dr);}
      if(e.key===" "||e.key==="Enter"){
        const s=g.current;
        if(s.phase!=="playing"){Object.assign(g.current,initSnake());g.current.phase="playing";}
      }
    };
    window.addEventListener("keydown",onKey);
    return ()=>window.removeEventListener("keydown",onKey);
  },[changeDir]);

  // Touch swipe
  const touchStart = useRef(null);
  const onTouchStart = useCallback(e=>{
    const t=e.touches[0];
    touchStart.current={x:t.clientX,y:t.clientY};
  },[]);
  const onTouchEnd = useCallback(e=>{
    if(!touchStart.current) return;
    const t=e.changedTouches[0];
    const dx=t.clientX-touchStart.current.x, dy=t.clientY-touchStart.current.y;
    if(Math.abs(dx)<10&&Math.abs(dy)<10){
      const s=g.current;
      if(s.phase!=="playing"){Object.assign(g.current,initSnake());g.current.phase="playing";}
      return;
    }
    if(Math.abs(dx)>Math.abs(dy)){changeDir(dx>0?1:-1,0);}
    else{changeDir(0,dy>0?1:-1);}
    touchStart.current=null;
  },[changeDir]);

  useEffect(()=>{
    const canvas=ref.current, ctx=canvas.getContext("2d");
    let raf;

    function draw(now) {
      const s=g.current;
      if(s.phase==="playing"&&now-s.last>snakeInterval(s.snake.length)){
        s.last=now;
        s.dir={...s.nd};
        const head=s.snake[0];
        const nh={c:head.c+s.dir.dc,r:head.r+s.dir.dr};
        if(nh.c<0||nh.c>=SCOLS||nh.r<0||nh.r>=SROWS||s.snake.some(seg=>seg.c===nh.c&&seg.r===nh.r)){
          s.phase="dead";
        } else {
          const ate=nh.c===s.food.c&&nh.r===s.food.r;
          s.snake=[nh,...s.snake];
          if(!ate) s.snake.pop();
          else { s.score++; s.food=randFood(s.snake); }
        }
      }

      // Background
      ctx.fillStyle="#0a1222"; ctx.fillRect(0,0,CW,CH);
      // Subtle grid
      ctx.strokeStyle="rgba(255,255,255,0.025)"; ctx.lineWidth=0.5;
      for(let c=0;c<=SCOLS;c++){ctx.beginPath();ctx.moveTo(c*SC,0);ctx.lineTo(c*SC,CH);ctx.stroke();}
      for(let r=0;r<=SROWS;r++){ctx.beginPath();ctx.moveTo(0,r*SC);ctx.lineTo(CW,r*SC);ctx.stroke();}

      if(s.phase==="idle"){
        ctx.textAlign="center";
        ctx.fillStyle="rgba(245,240,232,0.9)"; ctx.font="bold 22px system-ui";
        ctx.fillText("Snake 🐍",CW/2,CH/2-16);
        ctx.fillStyle="rgba(245,240,232,0.5)"; ctx.font="14px system-ui";
        ctx.fillText("Arrow keys or swipe to start",CW/2,CH/2+10);
        return;
      }

      // Food glow
      const fx=s.food.c*SC+SC/2, fy=s.food.r*SC+SC/2;
      const grd=ctx.createRadialGradient(fx,fy,1,fx,fy,SC/2);
      grd.addColorStop(0,"rgba(232,112,112,0.5)"); grd.addColorStop(1,"rgba(232,112,112,0)");
      ctx.fillStyle=grd; ctx.beginPath(); ctx.arc(fx,fy,SC/2,0,Math.PI*2); ctx.fill();
      ctx.fillStyle="#e87070"; ctx.beginPath(); ctx.arc(fx,fy,SC/2-3,0,Math.PI*2); ctx.fill();

      // Snake
      s.snake.forEach((seg,i)=>{
        const t=i/s.snake.length;
        const r=Math.floor(107-t*50), gv=Math.floor(174-t*80), bv=Math.floor(138-t*60);
        ctx.fillStyle=`rgb(${r},${gv},${bv})`;
        ctx.fillRect(seg.c*SC+1,seg.r*SC+1,SC-2,SC-2);
        if(i===0){ctx.fillStyle="rgba(255,255,255,0.2)";ctx.fillRect(seg.c*SC+2,seg.r*SC+2,SC-4,SC-4);}
      });

      // Score
      ctx.fillStyle="rgba(255,255,255,0.88)"; ctx.font="bold 14px system-ui"; ctx.textAlign="left";
      ctx.fillText(`Score: ${s.score}`,12,22);

      if(s.phase==="dead"){
        ctx.fillStyle="rgba(10,18,34,0.78)"; ctx.fillRect(0,0,CW,CH);
        ctx.fillStyle="#f5f0e8"; ctx.font="bold 24px system-ui"; ctx.textAlign="center";
        ctx.fillText("Game Over!",CW/2,CH/2-22);
        ctx.fillStyle="#6BAE8A"; ctx.font="bold 17px system-ui";
        ctx.fillText(`Score: ${s.score}`,CW/2,CH/2+4);
        ctx.fillStyle="rgba(245,240,232,0.5)"; ctx.font="14px system-ui";
        ctx.fillText("tap or press Space to play again",CW/2,CH/2+30);
      }

      raf=requestAnimationFrame(draw);
    }
    raf=requestAnimationFrame(draw);
    return ()=>cancelAnimationFrame(raf);
  },[]);

  const dpadBtn = (label,dc,dr) => (
    <button
      style={{width:46,height:46,background:"rgba(107,174,138,0.15)",border:"1.5px solid rgba(107,174,138,0.35)",
        borderRadius:8,color:"#f5f0e8",fontSize:"1.1rem",cursor:"pointer",touchAction:"none",userSelect:"none"}}
      onPointerDown={()=>changeDir(dc,dr)}
    >{label}</button>
  );

  return (
    <div className="game-canvas-wrap">
      <canvas ref={ref} width={CW} height={CH}
        className="game-canvas" style={{touchAction:"none"}}
        onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
      />
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4,marginTop:8}}>
        <div>{dpadBtn("▲",0,-1)}</div>
        <div style={{display:"flex",gap:4}}>
          {dpadBtn("◀",-1,0)}
          <div style={{width:46,height:46}}/>
          {dpadBtn("▶",1,0)}
        </div>
        <div>{dpadBtn("▼",0,1)}</div>
      </div>
      <p className="game-hint">Arrow keys · or use the D-pad · swipe on mobile</p>
    </div>
  );
}

/* =========================================================
   PAGE
   ========================================================= */
const GAMES = [
  { id:"flappy",   title:"Flappy Piers",   desc:"Navigate Piers through the pipes without crashing!", emoji:"🐦", color:"#6BAE8A" },
  { id:"invaders", title:"Space Invaders",  desc:"Defend Earth from the relentless alien invasion!",   emoji:"👾", color:"#e87070" },
  { id:"snake",    title:"Snake",           desc:"Eat the food, grow longer, don't hit the walls!",    emoji:"🐍", color:"#e8a030" },
];

export default function WaitingRoom() {
  const [active, setActive] = useState(null);
  const game = GAMES.find(g=>g.id===active);

  return (
    <main className="wr-main">
      <div className="wr-hero">
        <div className="wr-hero-inner">
          <span className="wr-badge">🎮 The Waiting Room</span>
          <h1 className="wr-title">Games while you wait</h1>
          <p className="wr-sub">
            Your session with Piers is coming up. In the meantime, enjoy one of these games.
          </p>
          <div className="wr-hero-links">
            <Link href="/blog" className="wr-resource-link">Browse videos &amp; resources →</Link>
            <Link href="/contact" className="wr-resource-link">Back to booking →</Link>
          </div>
        </div>
      </div>

      {!active ? (
        <div className="wr-lobby">
          <div className="wr-cards">
            {GAMES.map(g => (
              <button key={g.id} className="wr-card" onClick={()=>setActive(g.id)} style={{"--accent":g.color}}>
                <span className="wr-card-emoji">{g.emoji}</span>
                <h3 className="wr-card-title">{g.title}</h3>
                <p className="wr-card-desc">{g.desc}</p>
                <span className="wr-card-play">Play now →</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="wr-game-section">
          <div className="wr-game-header">
            <button className="wr-back" onClick={()=>setActive(null)}>← Back to games</button>
            <h2 className="wr-game-title">{game?.emoji} {game?.title}</h2>
          </div>
          <div className="wr-game-area">
            {active==="flappy"   && <FlappyGame />}
            {active==="invaders" && <SpaceInvadersGame />}
            {active==="snake"    && <SnakeGame />}
          </div>
        </div>
      )}

      <style jsx>{`
        :global(*){box-sizing:border-box;}
        .wr-main { min-height:100vh; background:#0C1B2E; color:#f5f0e8; font-family:var(--font-body,system-ui); }

        /* Hero */
        .wr-hero { background:linear-gradient(135deg,#091422 0%,#0C1B2E 60%,#0f2038 100%);
          border-bottom:1px solid rgba(107,174,138,0.15); padding:4rem 1.5rem 3rem; text-align:center; }
        .wr-hero-inner { max-width:640px; margin:0 auto; }
        .wr-badge { display:inline-block; background:rgba(107,174,138,0.15);
          border:1px solid rgba(107,174,138,0.3); border-radius:50px;
          padding:0.3rem 1rem; font-size:0.78rem; font-weight:700;
          text-transform:uppercase; letter-spacing:0.1em; color:#6BAE8A; margin-bottom:1.25rem; }
        .wr-title { font-size:clamp(2rem,6vw,3.25rem); font-weight:800; margin:0 0 0.75rem;
          letter-spacing:-0.02em; color:#f5f0e8; }
        .wr-sub { font-size:1.05rem; color:rgba(245,240,232,0.6); line-height:1.65; margin:0 0 1.5rem; }
        .wr-hero-links { display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; }
        .wr-resource-link { color:#6BAE8A; text-decoration:none; font-size:0.875rem; font-weight:600; }
        .wr-resource-link:hover { text-decoration:underline; }

        /* Lobby */
        .wr-lobby { max-width:900px; margin:0 auto; padding:3.5rem 1.5rem; }
        .wr-cards { display:grid; grid-template-columns:repeat(3,1fr); gap:1.25rem; }
        .wr-card { background:rgba(255,255,255,0.04); border:1.5px solid rgba(255,255,255,0.08);
          border-radius:16px; padding:2rem 1.5rem; text-align:left; cursor:pointer;
          transition:border-color 0.2s, background 0.2s, transform 0.2s;
          display:flex; flex-direction:column; gap:0.5rem; }
        .wr-card:hover { border-color:var(--accent); background:rgba(255,255,255,0.07); transform:translateY(-3px); }
        .wr-card-emoji { font-size:2.5rem; line-height:1; }
        .wr-card-title { font-size:1.2rem; font-weight:700; color:#f5f0e8; margin:0.25rem 0 0; }
        .wr-card-desc { font-size:0.875rem; color:rgba(245,240,232,0.55); line-height:1.55; margin:0; flex:1; }
        .wr-card-play { font-size:0.825rem; font-weight:700; color:var(--accent); margin-top:0.5rem; }

        /* Game section */
        .wr-game-section { max-width:620px; margin:0 auto; padding:2rem 1.5rem 3rem; }
        .wr-game-header { display:flex; align-items:center; gap:1.5rem; margin-bottom:1.5rem; flex-wrap:wrap; }
        .wr-back { background:none; border:none; color:rgba(245,240,232,0.55); font-size:0.9rem;
          cursor:pointer; padding:0; font-weight:600; transition:color 0.16s; }
        .wr-back:hover { color:#f5f0e8; }
        .wr-game-title { font-size:1.35rem; font-weight:700; margin:0; color:#f5f0e8; }
        :global(.game-canvas-wrap) { display:flex; flex-direction:column; align-items:center; }
        :global(.game-canvas) { display:block; max-width:100%; border-radius:12px;
          box-shadow:0 8px 40px rgba(0,0,0,0.5); }
        :global(.game-hint) { font-size:0.78rem; color:rgba(245,240,232,0.3); margin-top:0.75rem;
          text-align:center; font-style:italic; }

        @media(max-width:640px){
          .wr-cards { grid-template-columns:1fr; }
          .wr-game-section { padding:1.5rem 1rem 3rem; }
        }
      `}</style>
    </main>
  );
}
