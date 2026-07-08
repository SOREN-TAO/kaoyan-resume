import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowDown, Sparkles, Send, FileText, GraduationCap, BookOpen, Users,
} from 'lucide-react';
import GridScan from './GridScan';

const stats = [
  { icon: FileText, value: '35', unit: '份', label: '文献总量' },
  { icon: Users, value: '5', unit: '位', label: '核心导师' },
  { icon: BookOpen, value: '120', unit: '万字', label: '阅读总量' },
  { icon: GraduationCap, value: '2026', unit: '', label: '考研备战' },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.92]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* GridScan 3D background */}
      <div className="absolute inset-0 z-0">
        <GridScan
          linesColor="#1e293b"
          scanColor="#22d3ee"
          scanOpacity={0.3}
          gridScale={0.1}
          lineThickness={1.2}
          lineJitter={0.06}
          scanGlow={0.5}
          scanSoftness={2.5}
          scanDuration={2.8}
          scanDelay={2.8}
          bloomIntensity={0.12}
          bloomThreshold={0.25}
          bloomSmoothing={0.35}
          chromaticAberration={0.001}
          noiseIntensity={0.006}
          scanOnClick={true}
          snapBackDelay={350}
        />
      </div>

      {/* Dark gradient overlay (Gaussian blur equivalent via layered gradients) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-deep-950/70 via-deep-950/40 to-deep-950/90 pointer-events-none" />
      <div className="absolute inset-0 z-[1] backdrop-blur-[2px] pointer-events-none" style={{ WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 30%, black 100%)' }} />

      {/* Top vignette */}
      <div className="absolute top-0 left-0 right-0 h-64 z-[1] bg-gradient-to-b from-deep-950/90 to-transparent pointer-events-none" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-accent-cyan/[0.04] blur-[150px] pointer-events-none z-[1]" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-purple/[0.03] blur-[120px] pointer-events-none z-[1]" />
      <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] rounded-full bg-accent-blue/[0.03] blur-[100px] pointer-events-none z-[1]" />

      {/* Content */}
      <motion.div style={{ y, opacity, scale }} className="relative z-10 text-center px-6 max-w-[1000px] mx-auto w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-cyan/20 bg-accent-cyan/[0.05] mb-8 backdrop-blur-sm"
        >
          <Sparkles size={14} className="text-accent-cyan" />
          <span className="text-xs font-medium text-accent-cyan tracking-widest uppercase">
            2026 考研学习全景研究框架
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.08] mb-6"
        >
          <span className="text-text-primary">大学老师论文</span>
          <br />
          <span className="bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple bg-clip-text text-transparent">
            全景研究框架
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-text-secondary max-w-[650px] mx-auto mb-3 leading-relaxed"
        >
          考研复习与学术方向指南
        </motion.p>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="text-sm text-text-muted mb-10 tracking-wide"
        >
          陶帅的不行 · 备战2026 · 美术史论 × 考古学 × 近现代史 × 影视文化
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-14"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
            >
              <div className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center">
                <s.icon size={16} className="text-accent-cyan/70" />
              </div>
              <div className="text-left">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-xl font-bold text-text-primary">{s.value}</span>
                  {s.unit && <span className="text-xs text-text-muted">{s.unit}</span>}
                </div>
                <div className="text-[11px] text-text-muted tracking-wide">{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#intro"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-sm font-medium text-accent-cyan hover:bg-accent-cyan/20 hover:border-accent-cyan/50 transition-all duration-300 group shadow-lg shadow-accent-cyan/5"
          >
            了解我
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-sm font-medium text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 hover:bg-accent-cyan/[0.04] transition-all duration-300 group"
          >
            <Send size={14} />
            联系我
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-deep-950 via-deep-950/80 to-transparent pointer-events-none z-[1]" />
    </section>
  );
}
