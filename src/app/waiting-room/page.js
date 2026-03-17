"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

// ── Canvas dimensions ────────────────────────────────────────────────
// 780 × 520 chosen so Snake tiles evenly: SC=26, SCOLS=30, SROWS=20
const CW = 780, CH = 520;

/* =========================================================
   FLAPPY PIERS
   ========================================================= */
const FBX = 105, FBR = 19, FGR = 0.5, FJP = -9;
const FPW = 48, FPG = 115, FPS = 3.2, FPI = 150;

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
      ctx.fillStyle = "#1e3a28"; ctx.fillRect(0,CH-30,CW,30);
      ctx.fillStyle = "#2a5038"; ctx.fillRect(0,CH-30,CW,4);

      if (s.phase === "idle") {
        ctx.textAlign = "center";
        ctx.fillStyle = "rgba(245,240,232,0.9)"; ctx.font = "bold 28px system-ui";
        ctx.fillText("Flappy Piers 🐦", CW/2, CH/2-20);
        ctx.fillStyle = "rgba(245,240,232,0.5)"; ctx.font = "16px system-ui";
        ctx.fillText("tap or click to fly!", CW/2, CH/2+12);
        return;
      }

      s.pipes.forEach(p => {
        // Pipe shadows
        ctx.fillStyle = "#2a5c3a"; ctx.fillRect(p.x+4, 0, FPW, p.top-12);
        ctx.fillRect(p.x+4, p.top+FPG+14, FPW, CH-p.top-FPG-34);
        // Main pipes
        ctx.fillStyle = "#3d7a58"; ctx.fillRect(p.x, 0, FPW, p.top-12);
        ctx.fillRect(p.x, p.top+FPG+14, FPW, CH-p.top-FPG-34);
        // Caps
        ctx.fillStyle = "#6BAE8A"; ctx.fillRect(p.x-6, p.top-12, FPW+12, 12);
        ctx.fillStyle = "#6BAE8A"; ctx.fillRect(p.x-6, p.top+FPG+2, FPW+12, 12);
        // Cap highlights
        ctx.fillStyle = "rgba(255,255,255,0.15)"; ctx.fillRect(p.x-4, p.top-12, 6, 12);
        ctx.fillRect(p.x-4, p.top+FPG+2, 6, 12);
      });

      // Bird glow
      ctx.save();
      const grad = ctx.createRadialGradient(FBX, s.bird.y, 0, FBX, s.bird.y, FBR*2.5);
      grad.addColorStop(0,"rgba(245,240,232,0.18)"); grad.addColorStop(1,"transparent");
      ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(FBX, s.bird.y, FBR*2.5, 0, Math.PI*2); ctx.fill();

      ctx.translate(FBX, s.bird.y);
      ctx.rotate(Math.max(-0.45, Math.min(0.55, s.bird.vy*0.065)));
      // Body
      ctx.fillStyle = "#f5f0e8"; ctx.beginPath(); ctx.ellipse(0,0,FBR,FBR*0.82,0,0,Math.PI*2); ctx.fill();
      // Wing
      ctx.fillStyle = "#d4c9b8"; ctx.beginPath(); ctx.ellipse(-3,3,9,5,-0.3,0,Math.PI*2); ctx.fill();
      // Eye
      ctx.fillStyle = "#0C1B2E"; ctx.beginPath(); ctx.arc(6,-4,4,0,Math.PI*2); ctx.fill();
      ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(7,-5,1.8,0,Math.PI*2); ctx.fill();
      // Beak
      ctx.fillStyle = "#e89030"; ctx.beginPath(); ctx.moveTo(FBR-1,-1); ctx.lineTo(FBR+9,-2); ctx.lineTo(FBR+9,4); ctx.closePath(); ctx.fill();
      ctx.restore();

      ctx.fillStyle = "rgba(255,255,255,0.92)"; ctx.font = "bold 32px system-ui"; ctx.textAlign = "center";
      ctx.fillText(s.score, CW/2, 44);

      if (s.phase === "dead") {
        ctx.fillStyle = "rgba(9,20,34,0.78)"; ctx.fillRect(0,0,CW,CH);
        ctx.fillStyle = "#f5f0e8"; ctx.font = "bold 30px system-ui"; ctx.textAlign = "center";
        ctx.fillText("Game Over!", CW/2, CH/2-28);
        ctx.fillStyle = "#6BAE8A"; ctx.font = "bold 20px system-ui";
        ctx.fillText(`Score: ${s.score}`, CW/2, CH/2+6);
        ctx.fillStyle = "rgba(245,240,232,0.5)"; ctx.font = "16px system-ui";
        ctx.fillText("tap to play again", CW/2, CH/2+36);
      }
    }

    function tick() {
      if (s.phase === "playing") {
        s.frame++; s.bird.vy += FGR; s.bird.y += s.bird.vy;
        if (s.frame % FPI === 0) {
          const lo=40, hi=CH-FPG-40-30;
          s.pipes.push({ x:CW+12, top:lo+Math.random()*(hi-lo), scored:false });
        }
        s.pipes = s.pipes.filter(p => p.x+FPW+6>0);
        s.pipes.forEach(p => {
          p.x -= FPS;
          if (!p.scored && p.x+FPW < FBX-FBR) { p.scored=true; s.score++; }
        });
        if (s.bird.y+FBR>CH-30 || s.bird.y-FBR<0) s.phase="dead";
        for (const p of s.pipes) {
          if (FBX+FBR>p.x-6 && FBX-FBR<p.x+FPW+6 && (s.bird.y-FBR<p.top || s.bird.y+FBR>p.top+FPG)) s.phase="dead";
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
const AW=54, AH=39, ASX=82, ASY=62;
const ALIEN_X0 = Math.round((CW - (SI_COLS*ASX - (ASX-AW)))/2);
const ALIEN_Y0 = 42;
const PW=57, PH=39, PLAYER_SPD=6;
const PLAYER_Y = CH - PH - 20;
const BUP=13, BDN=6;
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
  const S = AW/36; // scale factor relative to original 36-wide alien
  if (type===0) {
    ctx.beginPath(); ctx.ellipse(cx, cy-S*2, AW/2-S*2, S*7, 0, 0, Math.PI*2); ctx.fill();
    ctx.fillRect(x+S*4, cy+S*2, AW-S*8, S*10);
    [x+S*2, x+AW/2-S*3, x+AW-S*8].forEach(lx=>ctx.fillRect(lx, cy+(leg?S*9:S*7), S*6, S*5));
  } else if (type===1) {
    ctx.fillRect(x+S*4, y+S*4, AW-S*8, AH-S*8);
    ctx.fillRect(x+S*6, y, S*6, S*6); ctx.fillRect(x+AW-S*12, y, S*6, S*6);
    ctx.fillRect(x, cy+(leg?0:S*2), S*6, S*6); ctx.fillRect(x+AW-S*6, cy+(leg?0:S*2), S*6, S*6);
    ctx.fillRect(x+S*4, y+AH-S*6, S*6, S*8); ctx.fillRect(x+AW-S*10, y+AH-S*6, S*6, S*8);
  } else {
    ctx.fillRect(x+S*2, y+S*6, AW-S*4, AH-S*10);
    ctx.fillRect(x+S*10, y+S*2, AW-S*20, S*6);
    ctx.fillRect(x, y+(leg?S*10:S*12), S*8, S*6); ctx.fillRect(x+AW-S*8, y+(leg?S*10:S*12), S*8, S*6);
    ctx.fillRect(x+S*2, y+AH-S*8, S*6, S*10); ctx.fillRect(x+AW-S*8, y+AH-S*8, S*6, S*10);
  }
  ctx.fillStyle="#fff";
  ctx.beginPath(); ctx.arc(cx-S*5, cy-S*2, S*2.2, 0, Math.PI*2); ctx.arc(cx+S*5, cy-S*2, S*2.2, 0, Math.PI*2); ctx.fill();
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

      // Stars
      if (g.phase!=="idle") {
        ctx.fillStyle="rgba(255,255,255,0.4)";
        for(let i=0;i<40;i++){const sx=((i*137+g.frame)%CW), sy=((i*71)%CH); ctx.fillRect(sx,sy,1,1);}
      }

      if(g.phase==="idle"){
        ctx.textAlign="center";
        ctx.fillStyle="#f5f0e8"; ctx.font="bold 28px system-ui"; ctx.fillText("Space Invaders 👾",CW/2,CH/2-24);
        ctx.fillStyle="rgba(245,240,232,0.5)"; ctx.font="15px system-ui";
        ctx.fillText("Arrow keys · Space to shoot",CW/2,CH/2+10);
        ctx.fillText("Click / tap to start",CW/2,CH/2+36); return;
      }

      ctx.fillStyle="rgba(107,174,138,0.25)"; ctx.fillRect(0,PLAYER_Y+PH+8,CW,2);

      g.aliens.filter(a=>a.alive).forEach(a=>{
        drawAlien(ctx, g.gx+ALIEN_X0+a.c*ASX, g.gy+ALIEN_Y0+a.r*ASY, a.type, g.atick);
      });

      // Player body
      ctx.fillStyle="#f5f0e8"; ctx.beginPath();
      ctx.moveTo(g.px,PLAYER_Y); ctx.lineTo(g.px-PW/2,PLAYER_Y+PH); ctx.lineTo(g.px+PW/2,PLAYER_Y+PH);
      ctx.closePath(); ctx.fill();
      // Player highlight
      ctx.fillStyle="rgba(255,255,255,0.15)"; ctx.beginPath();
      ctx.moveTo(g.px,PLAYER_Y+4); ctx.lineTo(g.px-PW/4,PLAYER_Y+PH*0.7); ctx.lineTo(g.px+PW/4,PLAYER_Y+PH*0.7);
      ctx.closePath(); ctx.fill();
      // Cannon
      ctx.fillStyle="#6BAE8A"; ctx.fillRect(g.px-5,PLAYER_Y+PH-6,10,8);

      if(g.pb){
        const by=ctx.createLinearGradient(g.pb.x,g.pb.y-14,g.pb.x,g.pb.y);
        by.addColorStop(0,"#ffe080"); by.addColorStop(1,"rgba(255,224,128,0)");
        ctx.fillStyle=by; ctx.fillRect(g.pb.x-3,g.pb.y-14,6,14);
      }
      g.ab.forEach(b=>{
        const bg=ctx.createLinearGradient(b.x,b.y,b.x,b.y+14);
        bg.addColorStop(0,"rgba(232,112,112,0)"); bg.addColorStop(1,"#e87070");
        ctx.fillStyle=bg; ctx.fillRect(b.x-3,b.y,6,14);
      });

      // HUD
      ctx.fillStyle="rgba(245,240,232,0.85)"; ctx.font="bold 15px system-ui";
      ctx.textAlign="left"; ctx.fillText(`Score: ${g.score}`,16,24);
      ctx.textAlign="right"; ctx.fillText(`♥ ${g.lives}`,CW-16,24);

      if(g.phase==="dead"||g.phase==="won"){
        ctx.fillStyle="rgba(9,14,26,0.82)"; ctx.fillRect(0,0,CW,CH);
        ctx.fillStyle=g.phase==="won"?"#6BAE8A":"#f5f0e8"; ctx.font="bold 30px system-ui"; ctx.textAlign="center";
        ctx.fillText(g.phase==="won"?"You Won! 🎉":"Game Over!",CW/2,CH/2-28);
        ctx.fillStyle="rgba(245,240,232,0.9)"; ctx.font="bold 18px system-ui";
        ctx.fillText(`Score: ${g.score}`,CW/2,CH/2+6);
        ctx.fillStyle="rgba(245,240,232,0.5)"; ctx.font="15px system-ui";
        ctx.fillText("click / tap to play again",CW/2,CH/2+34);
      }
    }

    function tick() {
      const g=s.current;
      if(g.phase==="playing"){
        g.frame++;
        if(keys.current.left)  g.px=Math.max(PW/2+6,g.px-PLAYER_SPD);
        if(keys.current.right) g.px=Math.min(CW-PW/2-6,g.px+PLAYER_SPD);
        if(pfire.current&&!g.pb){ g.pb={x:g.px,y:PLAYER_Y}; }
        pfire.current=false;
        if(g.pb){ g.pb.y-=BUP; if(g.pb.y<-14) g.pb=null; }
        g.ab=g.ab.filter(b=>b.y<CH+14);
        g.ab.forEach(b=>{b.y+=BDN;});

        const live=g.aliens.filter(a=>a.alive);
        if(live.length===0){g.phase="won";}
        else {
          const mi=Math.max(4,Math.floor(40*live.length/(SI_ROWS*SI_COLS)));
          if(g.frame%mi===0){
            g.gx+=g.gdx*7; g.atick++;
            const xs=live.map(a=>g.gx+ALIEN_X0+a.c*ASX);
            const mn=Math.min(...xs), mx=Math.max(...xs)+AW;
            if((g.gdx>0&&mx>=CW-10)||(g.gdx<0&&mn<=10)){ g.gdx*=-1; g.gy+=24; }
          }
          if(g.frame%100===0&&g.ab.length<3){
            const sh=live[Math.floor(Math.random()*live.length)];
            g.ab.push({x:g.gx+ALIEN_X0+sh.c*ASX+AW/2, y:g.gy+ALIEN_Y0+sh.r*ASY+AH});
          }
        }
        if(g.pb){
          for(const a of g.aliens){
            if(!a.alive) continue;
            const ax=g.gx+ALIEN_X0+a.c*ASX, ay=g.gy+ALIEN_Y0+a.r*ASY;
            if(g.pb.x>=ax-3&&g.pb.x<=ax+AW+3&&g.pb.y<=ay+AH&&g.pb.y>=ay-6){
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
          if(bot>=PLAYER_Y-12)g.phase="dead";
        }
      }
      draw(); raf=requestAnimationFrame(tick);
    }
    raf=requestAnimationFrame(tick);
    return ()=>cancelAnimationFrame(raf);
  },[]);

  const btnStyle = {
    padding:"0.8rem 1.25rem", background:"rgba(107,174,138,0.15)",
    border:"1.5px solid rgba(107,174,138,0.35)", borderRadius:"10px",
    color:"#f5f0e8", fontSize:"1.2rem", cursor:"pointer", userSelect:"none", touchAction:"none",
  };

  return (
    <div className="game-canvas-wrap">
      <canvas ref={ref} width={CW} height={CH}
        onClick={act} onTouchStart={e=>{e.preventDefault();act();}}
        className="game-canvas" style={{touchAction:"none",cursor:"pointer"}}
      />
      <div style={{display:"flex",gap:"0.6rem",justifyContent:"center",marginTop:"0.75rem"}}>
        <button style={btnStyle}
          onPointerDown={()=>{keys.current.left=true;}} onPointerUp={()=>{keys.current.left=false;}}
          onPointerLeave={()=>{keys.current.left=false;}}>◀</button>
        <button style={{...btnStyle, background:"rgba(232,112,112,0.2)", borderColor:"rgba(232,112,112,0.4)"}}
          onPointerDown={()=>{pfire.current=true;}}>🔫 Fire</button>
        <button style={btnStyle}
          onPointerDown={()=>{keys.current.right=true;}} onPointerUp={()=>{keys.current.right=false;}}
          onPointerLeave={()=>{keys.current.right=false;}}>▶</button>
      </div>
      <p className="game-hint">Arrow keys + Space to shoot · or use buttons above</p>
    </div>
  );
}

/* =========================================================
   SNAKE
   ========================================================= */
// 30 cols × 26px = 780  |  20 rows × 26px = 520
const SC=26, SCOLS=30, SROWS=20;

function randFood(snake){
  let f;
  do { f={c:Math.floor(Math.random()*SCOLS),r:Math.floor(Math.random()*SROWS)}; }
  while(snake.some(s=>s.c===f.c&&s.r===f.r));
  return f;
}
function initSnake(){
  const snake=[{c:15,r:10},{c:14,r:10},{c:13,r:10}];
  return { phase:"idle", snake, dir:{dc:1,dr:0}, nd:{dc:1,dr:0}, food:randFood(snake), score:0, last:0 };
}
function snakeInterval(len){ return Math.max(80,185-len*3); }

function SnakeGame() {
  const ref = useRef(null);
  const g = useRef(initSnake());

  const changeDir = useCallback((dc,dr)=>{
    const s=g.current;
    if(s.phase!=="playing"){ Object.assign(g.current,initSnake()); g.current.phase="playing"; g.current.nd={dc,dr}; return; }
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

  const touchStart = useRef(null);
  const onTouchStart = useCallback(e=>{
    const t=e.touches[0]; touchStart.current={x:t.clientX,y:t.clientY};
  },[]);
  const onTouchEnd = useCallback(e=>{
    if(!touchStart.current) return;
    const t=e.changedTouches[0];
    const dx=t.clientX-touchStart.current.x, dy=t.clientY-touchStart.current.y;
    if(Math.abs(dx)<12&&Math.abs(dy)<12){
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

      ctx.fillStyle="#0a1222"; ctx.fillRect(0,0,CW,CH);
      // Grid
      ctx.strokeStyle="rgba(255,255,255,0.022)"; ctx.lineWidth=0.5;
      for(let c=0;c<=SCOLS;c++){ctx.beginPath();ctx.moveTo(c*SC,0);ctx.lineTo(c*SC,CH);ctx.stroke();}
      for(let r=0;r<=SROWS;r++){ctx.beginPath();ctx.moveTo(0,r*SC);ctx.lineTo(CW,r*SC);ctx.stroke();}

      if(s.phase==="idle"){
        ctx.textAlign="center";
        ctx.fillStyle="rgba(245,240,232,0.9)"; ctx.font="bold 28px system-ui";
        ctx.fillText("Snake 🐍",CW/2,CH/2-20);
        ctx.fillStyle="rgba(245,240,232,0.5)"; ctx.font="16px system-ui";
        ctx.fillText("Arrow keys or swipe to start",CW/2,CH/2+12);
        return;
      }

      // Food glow
      const fx=s.food.c*SC+SC/2, fy=s.food.r*SC+SC/2;
      const grd=ctx.createRadialGradient(fx,fy,1,fx,fy,SC*0.85);
      grd.addColorStop(0,"rgba(232,112,112,0.55)"); grd.addColorStop(1,"rgba(232,112,112,0)");
      ctx.fillStyle=grd; ctx.beginPath(); ctx.arc(fx,fy,SC*0.85,0,Math.PI*2); ctx.fill();
      // Food
      ctx.fillStyle="#e87070";
      ctx.beginPath(); ctx.roundRect(s.food.c*SC+3, s.food.r*SC+3, SC-6, SC-6, 5); ctx.fill();
      ctx.fillStyle="rgba(255,255,255,0.3)"; ctx.beginPath(); ctx.arc(fx-3,fy-3,3,0,Math.PI*2); ctx.fill();

      // Snake
      s.snake.forEach((seg,i)=>{
        const t=i/s.snake.length;
        const rv=Math.floor(107-t*55), gv=Math.floor(174-t*85), bv=Math.floor(138-t*65);
        ctx.fillStyle=`rgb(${rv},${gv},${bv})`;
        ctx.beginPath();
        ctx.roundRect(seg.c*SC+2, seg.r*SC+2, SC-4, SC-4, i===0?6:4);
        ctx.fill();
        if(i===0){
          ctx.fillStyle="rgba(255,255,255,0.22)";
          ctx.beginPath(); ctx.roundRect(seg.c*SC+3, seg.r*SC+3, SC-6, SC-6, 5); ctx.fill();
        }
      });

      ctx.fillStyle="rgba(255,255,255,0.88)"; ctx.font="bold 16px system-ui"; ctx.textAlign="left";
      ctx.fillText(`Score: ${s.score}`,14,26);

      if(s.phase==="dead"){
        ctx.fillStyle="rgba(10,18,34,0.82)"; ctx.fillRect(0,0,CW,CH);
        ctx.fillStyle="#f5f0e8"; ctx.font="bold 30px system-ui"; ctx.textAlign="center";
        ctx.fillText("Game Over!",CW/2,CH/2-28);
        ctx.fillStyle="#6BAE8A"; ctx.font="bold 20px system-ui";
        ctx.fillText(`Score: ${s.score}`,CW/2,CH/2+6);
        ctx.fillStyle="rgba(245,240,232,0.5)"; ctx.font="16px system-ui";
        ctx.fillText("tap or press Space to play again",CW/2,CH/2+38);
      }

      raf=requestAnimationFrame(draw);
    }
    raf=requestAnimationFrame(draw);
    return ()=>cancelAnimationFrame(raf);
  },[]);

  const dpadBtn = (label,dc,dr) => (
    <button
      style={{width:54,height:54,background:"rgba(107,174,138,0.15)",border:"1.5px solid rgba(107,174,138,0.35)",
        borderRadius:10,color:"#f5f0e8",fontSize:"1.2rem",cursor:"pointer",touchAction:"none",userSelect:"none"}}
      onPointerDown={()=>changeDir(dc,dr)}
    >{label}</button>
  );

  return (
    <div className="game-canvas-wrap">
      <canvas ref={ref} width={CW} height={CH}
        className="game-canvas" style={{touchAction:"none"}}
        onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
      />
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:5,marginTop:10}}>
        <div>{dpadBtn("▲",0,-1)}</div>
        <div style={{display:"flex",gap:5}}>
          {dpadBtn("◀",-1,0)}
          <div style={{width:54,height:54}}/>
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
  { id:"flappy",    title:"Flappy Piers",  desc:"Navigate Piers through the pipes without crashing!", emoji:"🐦", color:"#6BAE8A" },
  { id:"invaders",  title:"Space Invaders", desc:"Defend Earth from the relentless alien invasion!",   emoji:"👾", color:"#e87070" },
  { id:"snake",     title:"Snake",          desc:"Eat the food, grow longer, don't hit the walls!",    emoji:"🐍", color:"#e8a030" },
  { id:"solitaire", title:"Solitaire",      desc:"Classic patience — sort the cards before time runs out.", emoji:"🃏", color:"#a08ce8", soon:true },
  { id:"drive",     title:"Pixel Racer",    desc:"Top-down driving — dodge traffic and survive!",         emoji:"🏎️", color:"#f0c040", soon:true },
  { id:"memory",    title:"Memory Match",   desc:"Flip pairs of cards and train your focus.",              emoji:"🧠", color:"#60aadd", soon:true },
];

export default function GamesRoom() {
  const [active, setActive] = useState(null);
  const game = GAMES.find(g=>g.id===active);

  return (
    <main className="wr-main">
      <div className="wr-hero">
        <div className="wr-hero-inner">
          <span className="wr-badge">🎮 Games Room</span>
          <h1 className="wr-title">Play while you wait</h1>
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
              <button
                key={g.id}
                className={`wr-card${g.soon ? " wr-card--soon" : ""}`}
                onClick={()=>!g.soon && setActive(g.id)}
                style={{"--accent":g.color}}
                disabled={g.soon}
              >
                {g.soon && <span className="wr-soon-badge">Coming Soon</span>}
                <span className="wr-card-emoji">{g.emoji}</span>
                <h3 className="wr-card-title">{g.title}</h3>
                <p className="wr-card-desc">{g.desc}</p>
                {!g.soon && <span className="wr-card-play">Play now →</span>}
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
        .wr-hero {
          background: linear-gradient(135deg,#091422 0%,#0C1B2E 55%,#0f2038 100%);
          border-bottom: 1px solid rgba(107,174,138,0.15);
          padding: 4.5rem 1.5rem 3.5rem; text-align: center;
        }
        .wr-hero-inner { max-width: 680px; margin: 0 auto; }
        .wr-badge {
          display: inline-block;
          background: rgba(107,174,138,0.15); border: 1px solid rgba(107,174,138,0.3);
          border-radius: 50px; padding: 0.35rem 1.1rem;
          font-size: 0.78rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; color: #6BAE8A; margin-bottom: 1.25rem;
        }
        .wr-title {
          font-size: clamp(2.2rem,6vw,3.5rem); font-weight: 800; margin: 0 0 0.75rem;
          letter-spacing: -0.025em; color: #f5f0e8;
        }
        .wr-sub { font-size: 1.05rem; color: rgba(245,240,232,0.6); line-height: 1.65; margin: 0 0 1.75rem; }
        .wr-hero-links { display: flex; gap: 1.25rem; justify-content: center; flex-wrap: wrap; }
        .wr-resource-link { color: #6BAE8A; text-decoration: none; font-size: 0.875rem; font-weight: 600; }
        .wr-resource-link:hover { text-decoration: underline; }

        /* Lobby */
        .wr-lobby { max-width: 1100px; margin: 0 auto; padding: 4rem 2rem; }
        .wr-cards {
          display: grid; grid-template-columns: repeat(3,1fr);
          gap: 1.5rem;
        }
        .wr-card {
          position: relative; overflow: hidden;
          background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.08);
          border-radius: 20px; padding: 2.25rem 1.75rem;
          text-align: left; cursor: pointer;
          transition: border-color 0.22s, background 0.22s, transform 0.22s, box-shadow 0.22s;
          display: flex; flex-direction: column; gap: 0.6rem;
        }
        .wr-card::before {
          content: "";
          position: absolute; inset: 0;
          background: radial-gradient(circle at 30% 30%, var(--accent), transparent 60%);
          opacity: 0; transition: opacity 0.3s;
        }
        .wr-card:hover:not(.wr-card--soon)::before { opacity: 0.06; }
        .wr-card:hover:not(.wr-card--soon) {
          border-color: var(--accent);
          background: rgba(255,255,255,0.07);
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.35);
        }
        .wr-card--soon {
          opacity: 0.55; cursor: default;
          border-style: dashed;
        }
        .wr-soon-badge {
          position: absolute; top: 1rem; right: 1rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 50px; padding: 0.2rem 0.65rem;
          font-size: 0.65rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.08em; color: rgba(245,240,232,0.45);
        }
        .wr-card-emoji { font-size: 3rem; line-height: 1; }
        .wr-card-title { font-size: 1.25rem; font-weight: 700; color: #f5f0e8; margin: 0.25rem 0 0; }
        .wr-card-desc  { font-size: 0.875rem; color: rgba(245,240,232,0.5); line-height: 1.6; margin: 0; flex: 1; }
        .wr-card-play  { font-size: 0.85rem; font-weight: 700; color: var(--accent); margin-top: 0.5rem; }

        /* Game section */
        .wr-game-section { max-width: 860px; margin: 0 auto; padding: 2.5rem 1.5rem 4rem; }
        .wr-game-header {
          display: flex; align-items: center; gap: 1.75rem; margin-bottom: 1.75rem; flex-wrap: wrap;
        }
        .wr-back {
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px; color: rgba(245,240,232,0.65); font-size: 0.875rem;
          cursor: pointer; padding: 0.4rem 0.9rem; font-weight: 600;
          transition: background 0.16s, color 0.16s;
        }
        .wr-back:hover { background: rgba(255,255,255,0.1); color: #f5f0e8; }
        .wr-game-title { font-size: 1.5rem; font-weight: 700; margin: 0; color: #f5f0e8; }
        :global(.game-canvas-wrap) { display: flex; flex-direction: column; align-items: center; }
        :global(.game-canvas) {
          display: block; max-width: 100%; border-radius: 14px;
          box-shadow: 0 12px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06);
        }
        :global(.game-hint) {
          font-size: 0.8rem; color: rgba(245,240,232,0.28); margin-top: 0.85rem;
          text-align: center; font-style: italic;
        }

        @media(max-width:900px){
          .wr-cards { grid-template-columns: repeat(2,1fr); }
          .wr-lobby { padding: 3rem 1.5rem; }
        }
        @media(max-width:580px){
          .wr-cards { grid-template-columns: 1fr; }
          .wr-game-section { padding: 1.75rem 1rem 3rem; }
        }
      `}</style>
    </main>
  );
}
