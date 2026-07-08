import { motion } from 'framer-motion';
import { Clock, BookOpen, GitMerge, Rocket, CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader';

const phases = [
  {
    icon: Clock,
    color: 'blue',
    colorHex: '#3b82f6',
    title: '第一阶段：通读',
    period: '7月上旬 – 7月中旬',
    days: '约20天',
    tasks: [
      '吴永强方向（审美现代性+书法+张大千）5天',
      '霍巍方向（三星堆+昆仑+吐蕃）7天',
      '陈默方向（抗战+舆论+军政协作）5天',
      '影视/文化方向 8篇 4天',
      '课程讲义 5套 7天',
    ],
  },
  {
    icon: BookOpen,
    color: 'teal',
    colorHex: '#14b8a6',
    title: '第二阶段：精读',
    period: '7月下旬',
    days: '约10天',
    tasks: [
      'Tier 1 六篇文献精读 5天',
      'Tier 2 八篇文献精读 5天',
      '做笔记 + 思维导图 + 关键词整理',
    ],
  },
  {
    icon: GitMerge,
    color: 'purple',
    colorHex: '#8b5cf6',
    title: '第三阶段：整合',
    period: '8月上旬',
    days: '约12天',
    tasks: [
      '横向串联（跨导师跨学科）7天',
      '模拟答题 + 查缺补漏 5天',
      '形成个人见解，串联多篇论文',
    ],
  },
  {
    icon: Rocket,
    color: 'cyan',
    colorHex: '#22d3ee',
    title: '第四阶段：冲刺',
    period: '8月下旬',
    days: '约7天',
    tasks: [
      '导师最新论文追踪 4天',
      '考前模拟面试准备 3天',
      '回顾三大核心考点（吴/霍/陈）',
    ],
  },
];

const colorMap = {
  blue:    { border: 'border-accent-blue/20', bg: 'bg-accent-blue/[0.04]', text: 'text-accent-blue', badge: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20', line: 'bg-accent-blue/40', dot: 'bg-accent-blue' },
  teal:    { border: 'border-accent-teal/20', bg: 'bg-accent-teal/[0.04]', text: 'text-accent-teal', badge: 'bg-accent-teal/10 text-accent-teal border-accent-teal/20', line: 'bg-accent-teal/40', dot: 'bg-accent-teal' },
  purple:  { border: 'border-accent-purple/20', bg: 'bg-accent-purple/[0.04]', text: 'text-accent-purple', badge: 'bg-accent-purple/10 text-accent-purple border-accent-purple/20', line: 'bg-accent-purple/40', dot: 'bg-accent-purple' },
  cyan:    { border: 'border-accent-cyan/20', bg: 'bg-accent-cyan/[0.04]', text: 'text-accent-cyan', badge: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20', line: 'bg-accent-cyan/40', dot: 'bg-accent-cyan' },
};

export default function StudyRoadmap() {
  return (
    <section id="roadmap" className="relative py-24 px-6">
      <div className="max-w-[1700px] mx-auto">
        <SectionHeader
          tag="Study Roadmap"
          title="三个月考研论文突击计划"
          subtitle="通读 → 精读 → 整合 → 冲刺，四阶段递进式学习，8月下旬全力备考"
          accentClass="text-accent-blue"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/5 via-accent-blue/20 to-accent-cyan/5" />

          <div className="space-y-6">
            {phases.map((p, i) => {
              const c = colorMap[p.color];
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Center dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white/[0.1] bg-deep-950 items-center justify-center z-10">
                    <div className={`w-2 h-2 rounded-full ${c.dot}`} />
                  </div>

                  {/* Content card */}
                  <div className={`w-full lg:w-[calc(50%-28px)] ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className={`p-6 rounded-2xl border ${c.border} ${c.bg} backdrop-blur-sm hover:border-white/[0.15] transition-all duration-500`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center`}>
                            <p.icon size={18} className={c.text} />
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-text-primary">{p.title}</h3>
                            <p className="text-xs text-text-muted">{p.period}</p>
                          </div>
                        </div>
                        <span className={`text-[11px] px-2.5 py-1 rounded-full border ${c.badge} font-medium`}>
                          {p.days}
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        {p.tasks.map((t, j) => (
                          <div key={j} className="flex items-start gap-2.5">
                            <CheckCircle2 size={13} className={`${c.text} mt-[3px] shrink-0 opacity-60`} />
                            <span className="text-xs text-text-secondary leading-relaxed">{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden lg:block w-[calc(50%-28px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Core strategy tip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 p-5 rounded-2xl border border-accent-cyan/20 bg-accent-cyan/[0.02] text-center max-w-[900px] mx-auto"
        >
          <p className="text-sm text-text-secondary">
            💡 <span className="font-semibold text-accent-cyan">核心策略：</span>
            以讲义打基础 → 以论文提深度 →{' '}
            <span className="text-accent-cyan font-medium">三大最高频考点</span>
            （审美现代性 / 三星堆 / 军政协作）重点突破
          </p>
        </motion.div>
      </div>
    </section>
  );
}
