import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Mail, Send, GraduationCap, Heart, MapPin, ExternalLink, Sparkles,
  ArrowUp, Phone, BookOpen, Coffee,
} from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: '电子邮箱',
    value: 'siyuan16@gmail.com',
    href: 'mailto:siyuan16@gmail.com',
    color: 'cyan',
  },
  {
    icon: Phone,
    label: '联系电话',
    value: '18215544060',
    href: 'tel:18215544060',
    color: 'teal',
  },
  {
    icon: MapPin,
    label: '所在城市',
    value: '成都 · 四川大学',
    href: null,
    color: 'purple',
  },
  {
    icon: BookOpen,
    label: '研究方向',
    value: '美术史论 / 考古学 / 近现代史',
    href: null,
    color: 'blue',
  },
];

const quickLinks = [
  { label: '研究方向', href: '#projects' },
  { label: '导师详情', href: '#mentors' },
  { label: '学习路线', href: '#roadmap' },
  { label: '必读文献', href: '#literature' },
  { label: '方法论', href: '#methods' },
];

const colorMap = {
  cyan:    { border: 'border-accent-cyan/20 hover:border-accent-cyan/40', text: 'text-accent-cyan', bg: 'bg-accent-cyan/10', glow: 'hover:shadow-accent-cyan/10' },
  teal:    { border: 'border-accent-teal/20 hover:border-accent-teal/40', text: 'text-accent-teal', bg: 'bg-accent-teal/10', glow: 'hover:shadow-accent-teal/10' },
  purple:  { border: 'border-accent-purple/20 hover:border-accent-purple/40', text: 'text-accent-purple', bg: 'bg-accent-purple/10', glow: 'hover:shadow-accent-purple/10' },
  blue:    { border: 'border-accent-blue/20 hover:border-accent-blue/40', text: 'text-accent-blue', bg: 'bg-accent-blue/10', glow: 'hover:shadow-accent-blue/10' },
};

export default function FullScreenContact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-accent-cyan/[0.025] blur-[180px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-purple/[0.02] blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-accent-blue/[0.015] blur-[200px]" />
      </div>

      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-deep-950 to-transparent pointer-events-none z-10" />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-[900px] mx-auto w-full py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-cyan/20 bg-accent-cyan/[0.05] mb-8 backdrop-blur-sm"
        >
          <Sparkles size={14} className="text-accent-cyan" />
          <span className="text-xs font-medium text-accent-cyan tracking-widest uppercase">与我联系</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4"
        >
          <span className="text-text-primary">一起探索</span>
          <br />
          <span className="bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple bg-clip-text text-transparent">
            学术的星辰大海
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-base text-text-secondary max-w-[500px] mx-auto mb-12 leading-relaxed"
        >
          如果你也在备战考研，或对美术史论 / 考古学 / 近现代史感兴趣，欢迎交流学习心得与研究方法。
        </motion.p>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12"
        >
          {contactMethods.map((m, i) => {
            const c = colorMap[m.color];
            const CardContent = (
              <div className={`group relative p-5 rounded-2xl border ${c.border} bg-white/[0.02] backdrop-blur-sm transition-all duration-500 ${c.glow} hover:-translate-y-1 hover:bg-white/[0.05]`}>
                <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500`}>
                  <m.icon size={18} className={c.text} />
                </div>
                <p className="text-[11px] text-text-muted mb-1 tracking-wide uppercase">{m.label}</p>
                <p className="text-sm font-semibold text-text-primary group-hover:text-white transition-colors">
                  {m.value}
                </p>
              </div>
            );

            if (m.href) {
              return (
                <a key={i} href={m.href} target={m.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer">
                  {CardContent}
                </a>
              );
            }
            return <div key={i}>{CardContent}</div>;
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-14"
        >
          <a
            href="mailto:siyuan16@gmail.com"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent-cyan/20 to-accent-blue/20 border border-accent-cyan/30 text-sm font-bold text-accent-cyan hover:from-accent-cyan/30 hover:to-accent-blue/30 hover:border-accent-cyan/50 transition-all duration-500 shadow-lg shadow-accent-cyan/5 group"
          >
            <Send size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
            发送邮件联系我
          </a>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {quickLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/25 hover:bg-accent-cyan/[0.04] transition-all duration-300"
            >
              {l.label}
            </a>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="pt-8 border-t border-white/[0.04]"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <GraduationCap size={16} className="text-accent-cyan/60" />
            <span className="text-sm font-semibold text-text-primary">陶帅的不行</span>
            <span className="text-xs text-text-muted">· 2026 考研备战</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-text-muted">
            <span>用心打造</span>
            <Heart size={10} className="text-accent-rose" fill="currentColor" />
            <span>追求学术卓越</span>
            <span className="mx-1">·</span>
            <Coffee size={10} className="text-accent-orange/60" />
            <span>基于 React + Three.js + Tailwind 构建</span>
          </div>

          {/* Back to top */}
          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 mt-8 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] text-text-muted hover:text-accent-cyan hover:border-accent-cyan/20 transition-all duration-300"
          >
            <ArrowUp size={12} />
            回到顶部
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
