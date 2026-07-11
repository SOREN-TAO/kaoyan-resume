import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Menu, X, Send } from 'lucide-react';

const links = [
  { href: '#intro', label: '关于我' },
  { href: '#projects', label: '研究方向' },
  { href: '#strengths', label: '个人优势' },
  { href: '#plan', label: '考研计划' },
  { href: '#mentors', label: '导师详情' },
  { href: '#roadmap', label: '学习路线' },
  { href: '#literature', label: '必读文献' },
  { href: '#methods', label: '方法论' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-deep-950/85 backdrop-blur-xl border-b border-white/[0.05]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1700px] mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent-cyan/20 transition-shadow duration-300">
            <GraduationCap size={16} className="text-white" />
          </div>
          <span className="text-sm font-semibold tracking-wide text-text-primary group-hover:text-accent-cyan transition-colors duration-300 hidden sm:block">
            陶帅的不行
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-xs font-medium text-text-secondary hover:text-accent-cyan rounded-lg hover:bg-white/[0.04] transition-all duration-300 tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop contact button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent-cyan/10 border border-accent-cyan/25 text-xs font-semibold text-accent-cyan hover:bg-accent-cyan/20 hover:border-accent-cyan/40 transition-all duration-300"
          >
            <Send size={12} />
            联系我
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-deep-950/95 backdrop-blur-xl border-b border-white/[0.05] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 text-sm text-text-secondary hover:text-accent-cyan hover:bg-white/[0.04] rounded-lg transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 mt-1 text-sm text-accent-cyan bg-accent-cyan/[0.06] rounded-lg hover:bg-accent-cyan/[0.12] transition-colors"
              >
                <Send size={13} />
                联系我
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
