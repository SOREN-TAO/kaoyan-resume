import { motion } from 'framer-motion';
import { Clock, BookOpen, GitMerge, Rocket, CheckCircle2 } from 'lucide-react';
import Stepper, { Step } from './Stepper';
import SectionHeader from './SectionHeader';

const phases = [
  {
    icon: Clock,
    color: 'blue',
    title: '第一阶段：通读',
    period: '7月上旬 – 7月中旬 · 约20天',
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
    title: '第二阶段：精读',
    period: '7月下旬 · 约10天',
    tasks: [
      'Tier 1 六篇文献精读 5天',
      'Tier 2 八篇文献精读 5天',
      '做笔记 + 思维导图 + 关键词整理',
    ],
  },
  {
    icon: GitMerge,
    color: 'purple',
    title: '第三阶段：整合',
    period: '8月上旬 · 约12天',
    tasks: [
      '横向串联（跨导师跨学科）7天',
      '模拟答题 + 查缺补漏 5天',
      '形成个人见解，串联多篇论文',
    ],
  },
  {
    icon: Rocket,
    color: 'cyan',
    title: '第四阶段：冲刺',
    period: '8月下旬 · 约7天',
    tasks: [
      '导师最新论文追踪 4天',
      '考前模拟面试准备 3天',
      '回顾三大核心考点（吴/霍/陈）',
    ],
  },
];

const colorMap = {
  blue:    { text: 'text-accent-blue', bg: 'bg-accent-blue/10', border: 'border-accent-blue/20', dot: 'bg-accent-blue' },
  teal:    { text: 'text-accent-teal', bg: 'bg-accent-teal/10', border: 'border-accent-teal/20', dot: 'bg-accent-teal' },
  purple:  { text: 'text-accent-purple', bg: 'bg-accent-purple/10', border: 'border-accent-purple/20', dot: 'bg-accent-purple' },
  cyan:    { text: 'text-accent-cyan', bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/20', dot: 'bg-accent-cyan' },
};

export default function StudyRoadmapStepper() {
  return (
    <section id="roadmap" className="relative py-24 px-6">
      <div className="max-w-[900px] mx-auto">
        <SectionHeader
          tag="学习路线图"
          title="三个月考研论文突击计划"
          subtitle="通读 → 精读 → 整合 → 冲刺，四阶段递进式学习，8月下旬全力备考"
          accentClass="text-accent-blue"
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <Stepper>
            {phases.map((p, i) => {
              const c = colorMap[p.color];
              return (
                <Step key={i}>
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center shrink-0`}>
                      <p.icon size={22} className={c.text} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-primary mb-1">{p.title}</h3>
                      <p className="text-xs text-text-muted">{p.period}</p>
                    </div>
                  </div>

                  <div className="space-y-3 ml-16">
                    {p.tasks.map((t, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-full ${c.bg} border ${c.border} flex items-center justify-center shrink-0 mt-0.5`}>
                          <CheckCircle2 size={12} className={c.text} />
                        </div>
                        <span className="text-sm text-text-secondary leading-relaxed pt-0.5">{t}</span>
                      </div>
                    ))}
                  </div>
                </Step>
              );
            })}
          </Stepper>
        </motion.div>

        {/* Core strategy tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 p-5 rounded-2xl border border-accent-cyan/20 bg-accent-cyan/[0.02] text-center"
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
