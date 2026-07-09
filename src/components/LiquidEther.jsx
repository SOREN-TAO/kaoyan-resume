import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './LiquidEther.css';

export default function LiquidEther({
  mouseForce = 15,
  cursorSize = 80,
  isViscous = false,
  viscous = 20,
  iterationsViscous = 32,
  iterationsPoisson = 32,
  dt = 0.014,
  BFECC = true,
  resolution = 0.45,
  isBounce = false,
  colors = ['#5227FF', '#3b82f6', '#22d3ee'],
  style = {},
  className = '',
  autoDemo = true,
  autoSpeed = 0.3,
  autoIntensity = 1.5,
  takeoverDuration = 0.25,
  autoResumeDelay = 2000,
  autoRampDuration = 0.6,
}) {
  const mountRef = useRef(null);
  const engineRef = useRef(null);
  const ioRef = useRef(null);
  const roRef = useRef(null);
  const rafRef = useRef(null);
  const resizeRafRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    container.style.position = container.style.position || 'relative';
    container.style.overflow = container.style.overflow || 'hidden';

    // Palette texture
    function makePaletteTexture(stops) {
      const arr = (Array.isArray(stops) && stops.length > 0) ? (stops.length === 1 ? [stops[0], stops[0]] : stops) : ['#fff', '#fff'];
      const w = arr.length;
      const data = new Uint8Array(w * 4);
      for (let i = 0; i < w; i++) {
        const c = new THREE.Color(arr[i]);
        data[i * 4] = Math.round(c.r * 255); data[i * 4 + 1] = Math.round(c.g * 255);
        data[i * 4 + 2] = Math.round(c.b * 255); data[i * 4 + 3] = 255;
      }
      const tex = new THREE.DataTexture(data, w, 1, THREE.RGBAFormat);
      tex.magFilter = tex.minFilter = THREE.LinearFilter;
      tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.generateMipmaps = false; tex.needsUpdate = true;
      return tex;
    }
    const paletteTex = makePaletteTexture(colors);

    // Shaders (condensed)
    const faceVert = `attribute vec3 position;uniform vec2 boundarySpace;varying vec2 uv;void main(){vec2 s=1.0-boundarySpace*2.0;uv=vec2(0.5)+position.xy*s*0.5;gl_Position=vec4(position.xy*s,1.0);}`;
    const mouseVert = `attribute vec3 position;attribute vec2 uv;uniform vec2 center,scale,px;varying vec2 vUv;void main(){gl_Position=vec4(position.xy*scale*2.0*px+center,0.0,1.0);vUv=uv;}`;
    const advFrag = `precision highp float;uniform sampler2D velocity;uniform float dt;uniform bool BFECC;uniform vec2 fboSize,px;varying vec2 uv;void main(){vec2 r=max(fboSize.x,fboSize.y)/fboSize;if(!BFECC){vec2 v=texture2D(velocity,uv).xy;gl_FragColor=vec4(texture2D(velocity,uv-v*dt*r).xy,0.0,0.0);}else{vec2 sn=uv,vo=texture2D(velocity,uv).xy,so=sn-vo*dt*r,vn1=texture2D(velocity,so).xy,sn2=so+vn1*dt*r,e=sn2-sn,sn3=sn-e/2.0,v2=texture2D(velocity,sn3).xy,so2=sn3-v2*dt*r;gl_FragColor=vec4(texture2D(velocity,so2).xy,0.0,0.0);}}`;
    const colorFrag = `precision highp float;uniform sampler2D velocity,palette;uniform vec4 bgColor;varying vec2 uv;void main(){vec2 v=texture2D(velocity,uv).xy;float l=clamp(length(v),0.0,1.0);vec3 c=texture2D(palette,vec2(l,0.5)).rgb;gl_FragColor=vec4(mix(bgColor.rgb,c,l),mix(bgColor.a,1.0,l));}`;
    const divFrag = `precision highp float;uniform sampler2D velocity;uniform float dt;uniform vec2 px;varying vec2 uv;void main(){float d=(texture2D(velocity,uv+vec2(px.x,0.0)).x-texture2D(velocity,uv-vec2(px.x,0.0)).x+texture2D(velocity,uv+vec2(0.0,px.y)).y-texture2D(velocity,uv-vec2(0.0,px.y)).y)/2.0;gl_FragColor=vec4(d/dt);}`;
    const extFrag = `precision highp float;uniform vec2 force,center,scale,px;varying vec2 vUv;void main(){vec2 c=(vUv-0.5)*2.0;float d=1.0-min(length(c),1.0);d*=d;gl_FragColor=vec4(force*d,0.0,1.0);}`;
    const poisFrag = `precision highp float;uniform sampler2D pressure,divergence;uniform vec2 px;varying vec2 uv;void main(){float p0=texture2D(pressure,uv+vec2(px.x*2.0,0.0)).r;float p1=texture2D(pressure,uv-vec2(px.x*2.0,0.0)).r;float p2=texture2D(pressure,uv+vec2(0.0,px.y*2.0)).r;float p3=texture2D(pressure,uv-vec2(0.0,px.y*2.0)).r;float d=texture2D(divergence,uv).r;gl_FragColor=vec4((p0+p1+p2+p3)/4.0-d);}`;
    const presFrag = `precision highp float;uniform sampler2D pressure,velocity;uniform vec2 px;uniform float dt;varying vec2 uv;void main(){float s=1.0;float p0=texture2D(pressure,uv+vec2(px.x*s,0.0)).r;float p1=texture2D(pressure,uv-vec2(px.x*s,0.0)).r;float p2=texture2D(pressure,uv+vec2(0.0,px.y*s)).r;float p3=texture2D(pressure,uv-vec2(0.0,px.y*s)).r;vec2 v=texture2D(velocity,uv).xy;v-=vec2(p0-p1,p2-p3)*0.5*dt;gl_FragColor=vec4(v,0.0,1.0);}`;
    const visFrag = `precision highp float;uniform sampler2D velocity,velocity_new;uniform float v,dt;uniform vec2 px;varying vec2 uv;void main(){vec2 o=texture2D(velocity,uv).xy;vec2 n0=texture2D(velocity_new,uv+vec2(px.x*2.0,0.0)).xy;vec2 n1=texture2D(velocity_new,uv-vec2(px.x*2.0,0.0)).xy;vec2 n2=texture2D(velocity_new,uv+vec2(0.0,px.y*2.0)).xy;vec2 n3=texture2D(velocity_new,uv-vec2(0.0,px.y*2.0)).xy;gl_FragColor=vec4((4.0*o+v*dt*(n0+n1+n2+n3))/(4.0*(1.0+v*dt)),0.0,0.0);}`;

    // Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.autoClear = false; renderer.setClearColor(new THREE.Color(0), 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    const floatType = /(iPhone|iPad|iPod)/i.test(navigator.userAgent) ? THREE.HalfFloatType : THREE.FloatType;

    function resizer() {
      const r = container.getBoundingClientRect();
      renderer.setSize(Math.max(1, Math.floor(r.width)), Math.max(1, Math.floor(r.height)), false);
    }
    resizer();
    container.prepend(renderer.domElement);

    // State
    const mouse = new THREE.Vector2(), mouseOld = new THREE.Vector2(), mouseDiff = new THREE.Vector2();
    const autoTarget = new THREE.Vector2(), autoCurrent = new THREE.Vector2();
    let mouseInside = false, autoActive = false, lastInteract = performance.now();
    let fboW, fboH;
    const cellScale = new THREE.Vector2();

    function calcFBO() {
      const r = container.getBoundingClientRect();
      fboW = Math.max(1, Math.round(resolution * r.width));
      fboH = Math.max(1, Math.round(resolution * r.height));
      cellScale.set(1 / fboW, 1 / fboH);
    }
    calcFBO();

    const fboOpts = { type: floatType, depthBuffer: false, stencilBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping };
    const v0 = new THREE.WebGLRenderTarget(fboW, fboH, fboOpts), v1 = new THREE.WebGLRenderTarget(fboW, fboH, fboOpts);
    const vv0 = new THREE.WebGLRenderTarget(fboW, fboH, fboOpts), vv1 = new THREE.WebGLRenderTarget(fboW, fboH, fboOpts);
    const div = new THREE.WebGLRenderTarget(fboW, fboH, fboOpts);
    const p0 = new THREE.WebGLRenderTarget(fboW, fboH, fboOpts), p1 = new THREE.WebGLRenderTarget(fboW, fboH, fboOpts);

    function runPass(uni, frag, out) {
      const s = new THREE.Scene(), c = new THREE.Camera();
      const m = new THREE.RawShaderMaterial({ vertexShader: faceVert, fragmentShader: frag, uniforms: { boundarySpace: { value: new THREE.Vector2() }, ...uni } });
      s.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), m));
      renderer.setRenderTarget(out); renderer.render(s, c); renderer.setRenderTarget(null);
    }

    // Output material (persistent)
    const outMat = new THREE.RawShaderMaterial({
      vertexShader: faceVert, fragmentShader: colorFrag, transparent: true, depthWrite: false,
      uniforms: { velocity: { value: v0.texture }, boundarySpace: { value: new THREE.Vector2() }, palette: { value: paletteTex }, bgColor: { value: new THREE.Vector4(0, 0, 0, 0) } }
    });
    const outScene = new THREE.Scene(); outScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), outMat));
    const outCam = new THREE.Camera();

    // Ext force material
    const extMat = new THREE.RawShaderMaterial({
      vertexShader: mouseVert, fragmentShader: extFrag, blending: THREE.AdditiveBlending, depthWrite: false,
      uniforms: { px: { value: cellScale }, force: { value: new THREE.Vector2() }, center: { value: new THREE.Vector2() }, scale: { value: new THREE.Vector2(cursorSize, cursorSize) } }
    });
    const extScene = new THREE.Scene(); extScene.add(new THREE.Mesh(new THREE.PlaneGeometry(1, 1), extMat));
    const extCam = new THREE.Camera();

    let tickId;
    function tick(ts) {
      const dtSec = Math.min(0.05, ts ? (ts - (tick._prev || ts)) / 1000 : 0.016);
      tick._prev = ts;

      // Auto
      const idle = ts - lastInteract;
      if (autoDemo && idle > autoResumeDelay && !mouseInside) {
        autoActive = true;
        const dir = autoTarget.clone().sub(autoCurrent);
        if (dir.length() < 0.02) { autoTarget.set((Math.random() * 2 - 1) * 0.75, (Math.random() * 2 - 1) * 0.75); }
        else { autoCurrent.addScaledVector(dir.normalize(), autoSpeed * dtSec); }
        mouse.copy(autoCurrent);
        mouseDiff.set(autoCurrent.x * autoIntensity * 0.1, autoCurrent.y * autoIntensity * 0.1);
      } else {
        mouseDiff.subVectors(mouse, mouseOld); mouseOld.copy(mouse);
        if (mouseDiff.length() < 0.0001) mouseDiff.set(0, 0);
      }

      calcFBO(); outMat.uniforms.boundarySpace.value.set(isBounce ? 0 : cellScale.x, isBounce ? 0 : cellScale.y);

      // Advection
      runPass({ velocity: { value: v0.texture }, dt: { value: dt }, BFECC: { value: BFECC }, fboSize: { value: new THREE.Vector2(fboW, fboH) }, px: { value: cellScale } }, advFrag, v1);

      // External force
      const fx = (mouseDiff.x / 2) * mouseForce, fy = (mouseDiff.y / 2) * mouseForce;
      const csx = cursorSize * cellScale.x, csy = cursorSize * cellScale.y;
      extMat.uniforms.force.value.set(fx, fy);
      extMat.uniforms.center.value.set(Math.min(Math.max(mouse.x, -1 + csx + cellScale.x * 2), 1 - csx - cellScale.x * 2), Math.min(Math.max(mouse.y, -1 + csy + cellScale.y * 2), 1 - csy - cellScale.y * 2));
      extMat.uniforms.scale.value.set(cursorSize, cursorSize);
      extMat.uniforms.px.value.copy(cellScale);
      renderer.setRenderTarget(v1); renderer.render(extScene, extCam); renderer.setRenderTarget(null);

      // Viscous
      let cv = v1;
      if (isViscous) { for (let i = 0; i < iterationsViscous; i++) { const vi = (i % 2 === 0) ? { s: v1, d: vv1 } : { s: vv1, d: v1 }; runPass({ velocity: { value: vi.s.texture }, velocity_new: { value: (i === 0 ? v1 : vi.s).texture }, v: { value: viscous }, dt: { value: dt }, px: { value: cellScale } }, visFrag, vi.d); cv = vi.d; } }

      // Divergence
      runPass({ velocity: { value: cv.texture }, dt: { value: dt }, px: { value: cellScale } }, divFrag, div);

      // Poisson
      let pp = p0; for (let i = 0; i < iterationsPoisson; i++) { const pd = (i % 2 === 0) ? p1 : p0; runPass({ pressure: { value: pp.texture }, divergence: { value: div.texture }, px: { value: cellScale } }, poisFrag, pd); pp = pd; }

      // Pressure
      runPass({ pressure: { value: pp.texture }, velocity: { value: cv.texture }, dt: { value: dt }, px: { value: cellScale } }, presFrag, v0);

      // Output
      outMat.uniforms.velocity.value = v0.texture;
      renderer.setRenderTarget(null); renderer.render(outScene, outCam);

      tickId = requestAnimationFrame(tick);
    }
    tick._prev = performance.now();
    tickId = requestAnimationFrame(tick);

    // Events
    function onMouse(e) { const r = container.getBoundingClientRect(); if (r.width === 0) return; mouseInside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom; if (!mouseInside) return; lastInteract = performance.now(); autoActive = false; mouse.set(((e.clientX - r.left) / r.width) * 2 - 1, -(((e.clientY - r.top) / r.height) * 2 - 1)); }
    function onLeave() { mouseInside = false; }
    window.addEventListener('mousemove', onMouse); document.addEventListener('mouseleave', onLeave);

    const io = new IntersectionObserver(([e]) => { if (e && !e.isIntersecting && tickId) { cancelAnimationFrame(tickId); tickId = null; } else if (e && e.isIntersecting && !tickId) { tickId = requestAnimationFrame(tick); } }, { threshold: [0, 0.1] });
    io.observe(container); ioRef.current = io;

    const ro = new ResizeObserver(() => { if (resizeRafRef.current) cancelAnimationFrame(resizeRafRef.current); resizeRafRef.current = requestAnimationFrame(() => { resizer(); calcFBO(); }); });
    ro.observe(container); roRef.current = ro;

    engineRef.current = { renderer, tickId };

    return () => {
      if (tickId) cancelAnimationFrame(tickId);
      window.removeEventListener('mousemove', onMouse); document.removeEventListener('mouseleave', onLeave);
      io.disconnect(); ro.disconnect();
      if (resizeRafRef.current) cancelAnimationFrame(resizeRafRef.current);
      renderer.dispose(); renderer.forceContextLoss();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className={`liquid-ether-container ${className || ''}`} style={style} />;
}
