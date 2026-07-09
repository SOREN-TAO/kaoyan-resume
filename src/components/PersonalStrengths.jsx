import { motion } from 'framer-motion';
import {
  Brain, Layers, Lightbulb, GitBranch, Zap, Target, TrendingUp, Compass,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import MagicBento from './MagicBento';

const strengths = [
  {
    icon: Brain,
    color: 'cyan',
    title: '三维一体学习法',
    subtitle: '独创方法论',
    description: '讲义筑基 → 论文提深 → 跨学科横向串联。将分散的研究成果整合为具备内在逻辑的应试知识体系，实现从"点状记忆"到"网状理解"的质变。',
    tags: ['系统化', '结构化', '可复用'],
  },
  {
    icon: Layers,
    color: 'teal',
    title: '多导师交叉视野',
    subtitle: '5位导师 · 6大学科',
    description: '跨越美术史论、考古学、近现代史、影视文化四大领域，整合不同导师的研究方法与学术观点，形成多视角、多层次的综合分析能力。',
    tags: ['跨学科', '多视角', '整合力'],
  },
  {
    icon: GitBranch,
    color: 'blue',
    title: '学术脉络溯源',
    subtitle: '方法论意识',
    description: '深入理解每位导师的学术师承、理论来源与研究方法论（二重证据法、知识考古学、类型分析等），不仅知道"是什么"，更理解"为什么这样研究"。',
    tags: ['方法论', '学理深度', '批判思维'],
  },
  {
    icon: Zap,
    color: 'purple',
    title: '高频考点精准打击',
    subtitle: '三大核心考点',
    description: '审美现代性（吴永强）、三星堆考古（霍巍）、战时军政协作（陈默）——三大最高频考点深度掌握，具备多论文串联与个人见解输出能力。',
    tags: ['应试导向', '押题精准', '高效应试'],
  },
  {
    icon: Compass,
    color: 'indigo',
    title: '文献分级管理',
    subtitle: 'Tier 1-3 分级体系',
    description: '将35份文献按Tier 1（必读核心6篇）→ Tier 2（重要补充8篇）→ Tier 3（拓展阅读14篇）+ 5套讲义进行科学分级，优先级明确，时间分配最优化。',
    tags: ['优先级', '效率', '分级管理'],
  },
  {
    icon: TrendingUp,
    color: 'orange',
    title: '四阶段递进规划',
    subtitle: '通读→精读→整合→冲刺',
    description: '约49天系统备考计划：20天通读建立全局 → 10天精读Tier 1+2 → 12天横向整合 → 7天模拟冲刺，科学节奏确保最佳备考状态。',
    tags: ['时间管理', '阶段性', '可执行'],
  },
];

const colorClasses = {
  cyan:    { border: 'border-accent-cyan/20 hover:border-accent-cyan/40', bg: 'bg-accent-cyan/[0.03]', text: 'text-accent-cyan', badge: 'bg-accent-cyan/10 text-accent-cyan/80 border-accent-cyan/20', iconBg: 'bg-accent-cyan/10' },
  teal:    { border: 'border-accent-teal/20 hover:border-accent-teal/40', bg: 'bg-accent-teal/[0.03]', text: 'text-accent-teal', badge: 'bg-accent-teal/10 text-accent-teal/80 border-accent-teal/20', iconBg: 'bg-accent-teal/10' },
  blue:    { border: 'border-accent-blue/20 hover:border-accent-blue/40', bg: 'bg-accent-blue/[0.03]', text: 'text-accent-blue', badge: 'bg-accent-blue/10 text-accent-blue/80 border-accent-blue/20', iconBg: 'bg-accent-blue/10' },
  purple:  { border: 'border-accent-purple/20 hover:border-accent-purple/40', bg: 'bg-accent-purple/[0.03]', text: 'text-accent-purple', badge: 'bg-accent-purple/10 text-accent-purple/80 border-accent-purple/20', iconBg: 'bg-accent-purple/10' },
  indigo:  { border: 'border-accent-indigo/20 hover:border-accent-indigo/40', bg: 'bg-accent-indigo/[0.03]', text: 'text-accent-indigo', badge: 'bg-accent-indigo/10 text-accent-indigo/80 border-accent-indigo/20', iconBg: 'bg-accent-indigo/10' },
  orange:  { border: 'border-accent-orange/20 hover:border-accent-orange/40', bg: 'bg-accent-orange/[0.03]', text: 'text-accent-orange', badge: 'bg-accent-orange/10 text-accent-orange/80 border-accent-orange/20', iconBg: 'bg-accent-orange/10' },
};

export default function PersonalStrengths() {
  return (
    <section id="strengths" className="relative py-24 px-6">
      <div className="max-w-[1700px] mx-auto">
        <SectionHeader
          tag="个人研究优势"
          title="个人研究优势"
          subtitle="系统化的学习方法论 × 多维度的学术整合能力 × 精准的应试导向"
          accentClass="text-accent-teal"
        />

        <MagicBento glowColor="99, 102, 241" clickEffect={true}>
          {strengths.map((s, i) => {
            const c = colorClasses[s.color];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex flex-col h-full"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl ${c.iconBg} border ${c.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                  <s.icon size={22} className={c.text} />
                </div>

                {/* Title + subtitle */}
                <div className="mb-3">
                  <h3 className="text-base font-bold text-text-primary mb-1">{s.title}</h3>
                  <p className={`text-xs font-medium ${c.text}`}>{s.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-xs text-text-secondary leading-relaxed mb-5 flex-1">
                  {s.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map(t => (
                    <span key={t} className={`text-[10px] px-2.5 py-1 rounded-full border ${c.badge} font-medium`}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </MagicBento>

        {/* Summary stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 p-5 rounded-2xl border border-accent-cyan/15 bg-accent-cyan/[0.02] backdrop-blur-sm"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2">
              <Target size={14} className="text-accent-cyan" />
              <span className="text-xs text-text-secondary">核心优势：<span className="text-accent-cyan font-semibold">方法论驱动 × 应试导向 × 跨学科整合</span></span>
            </div>
            <div className="flex items-center gap-2">
              <Lightbulb size={14} className="text-accent-teal" />
              <span className="text-xs text-text-secondary">差异化：<span className="text-accent-teal font-semibold">不只记忆知识点，更要理解学术生产逻辑</span></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
