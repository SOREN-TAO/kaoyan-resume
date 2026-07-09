import { motion } from 'framer-motion';
import { GraduationCap, Heart, ExternalLink } from 'lucide-react';

const highlights = [
  { label: '文献总量', value: '35 份' },
  { label: '核心导师', value: '5 位' },
  { label: '研究论文', value: '30 篇' },
  { label: '课程讲义', value: '5 套' },
  { label: '涵盖学科', value: '6 门' },
];

const tips = [
  '4篇CAJ文件需安装知网CAJViewer阅读',
  '建议优先看Tier 1的六篇文献建立基本框架',
  '审美现代性 / 三星堆 / 军政协作 是三大最高频考点',
  '五套课程讲义是应试基础，与论文交叉阅读效果最佳',
];

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-white/[0.04]">
      <div className="max-w-[1700px] mx-auto">
        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-12"
        >
          {highlights.map((h, i) => (
            <div key={h.label} className="text-center px-4">
              <span className="block text-2xl font-black text-text-primary mb-1">{h.value}</span>
              <span className="text-[11px] text-text-muted tracking-wide uppercase">{h.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-[700px] mx-auto mb-10"
        >
          <div className="p-5 rounded-2xl border border-accent-cyan/[0.08] bg-white/[0.01]">
            <h4 className="text-xs font-bold text-text-primary mb-3 flex items-center gap-2">
              <ExternalLink size={12} className="text-accent-cyan" />
              使用提醒
            </h4>
            <div className="space-y-1.5">
              {tips.map((t, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[10px] text-accent-cyan mt-[3px]">0{i + 1}</span>
                  <span className="text-[11px] text-text-secondary leading-relaxed">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <GraduationCap size={16} className="text-accent-cyan/60" />
            <span className="text-sm font-semibold text-text-primary">陶帅的不行</span>
            <span className="text-xs text-text-muted">· 2026 考研备战</span>
          </div>
          <p className="text-[11px] text-text-muted flex items-center justify-center gap-1">
            用心打造 <Heart size={10} className="text-accent-rose" fill="currentColor" /> 追求学术卓越
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
