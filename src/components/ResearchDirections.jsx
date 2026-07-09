import { motion } from 'framer-motion';
import {
  Palette, Landmark, ScrollText, Film, Library, ArrowUpRight,
} from 'lucide-react';
import SectionHeader from './SectionHeader';

const directions = [
  {
    icon: Palette,
    color: 'cyan',
    mentor: '吴永强 导师',
    school: '四川大学艺术学院',
    title: '美术史论与艺术批评',
    tags: ['审美现代性', '书法美学', '西南油画', '艺术批评史', '张大千'],
    count: '7篇论文',
    detail: '独创"悬置的表现主义"概念，构建审美现代性理论体系与艺术批评方法论纲领。',
  },
  {
    icon: Landmark,
    color: 'teal',
    mentor: '霍巍 导师 + 吕红亮',
    school: '四川大学历史文化学院',
    title: '考古学与中华文明',
    tags: ['三星堆', '古蜀文明', '西亚比较', '昆仑文化', '吐蕃金银器'],
    count: '6篇论文',
    detail: '长江学者领衔，以二重证据法揭示中华文明多元一体格局的形成机制。',
  },
  {
    icon: ScrollText,
    color: 'blue',
    mentor: '陈默 导师 + 瞿骏',
    school: '四川大学历史文化学院',
    title: '中国近现代史',
    tags: ['抗日战争', '派系政治', '舆论传媒', '战时军政协作', '新史料'],
    count: '4篇论文',
    detail: '从"想不想打"到"能不能打"，深入揭示战时军队派系化与军政对立的根本成因。',
  },
  {
    icon: Film,
    color: 'purple',
    mentor: '李艳 等导师',
    school: '四川大学艺术学院',
    title: '影视与文化综合研究',
    tags: ['西藏电影', '灾难类型片', '文旅演艺', '道教舞蹈', '明清戏曲'],
    count: '8篇论文',
    detail: '跨学科视野下，从"他者"理论到空间三元论的多元文化批评实践。',
  },
  {
    icon: Library,
    color: 'indigo',
    mentor: '2023-2024系列',
    school: '课程讲义 · 应试基础',
    title: '五大课程讲义',
    tags: ['艺术概论', '西方美术史', '中国美学史', '中国美术史', '西方美学史'],
    count: '5套讲义',
    detail: '48+20+17+13+30页系统课程资料，覆盖艺术学考研全部核心基础知识点。',
  },
];

const colorMap = {
  cyan:    { border: 'border-accent-cyan/20 hover:border-accent-cyan/40', glow: 'hover:shadow-accent-cyan/8', bg: 'bg-accent-cyan/[0.03]', text: 'text-accent-cyan', badge: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20' },
  teal:    { border: 'border-accent-teal/20 hover:border-accent-teal/40', glow: 'hover:shadow-accent-teal/8', bg: 'bg-accent-teal/[0.03]', text: 'text-accent-teal', badge: 'bg-accent-teal/10 text-accent-teal border-accent-teal/20' },
  blue:    { border: 'border-accent-blue/20 hover:border-accent-blue/40', glow: 'hover:shadow-accent-blue/8', bg: 'bg-accent-blue/[0.03]', text: 'text-accent-blue', badge: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20' },
  purple:  { border: 'border-accent-purple/20 hover:border-accent-purple/40', glow: 'hover:shadow-accent-purple/8', bg: 'bg-accent-purple/[0.03]', text: 'text-accent-purple', badge: 'bg-accent-purple/10 text-accent-purple border-accent-purple/20' },
  indigo:  { border: 'border-accent-indigo/20 hover:border-accent-indigo/40', glow: 'hover:shadow-accent-indigo/8', bg: 'bg-accent-indigo/[0.03]', text: 'text-accent-indigo', badge: 'bg-accent-indigo/10 text-accent-indigo border-accent-indigo/20' },
};

export default function ResearchDirections() {
  return (
    <section id="directions" className="relative py-24 px-6">
      <div className="max-w-[1700px] mx-auto">
        <SectionHeader
          tag="研究方向总览"
          title="五大研究方向"
          subtitle="35份文献 · 5位核心导师 · 约120万字 · 覆盖6大学科门类"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {directions.map((d, i) => {
            const c = colorMap[d.color];
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative flex flex-col p-6 rounded-2xl border ${c.border} ${c.bg} backdrop-blur-sm transition-all duration-500 ${c.glow} hover:-translate-y-1 hover:bg-white/[0.05] cursor-default`}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center mb-4`}>
                    <d.icon size={18} className={c.text} />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-text-primary mb-1.5 leading-tight">{d.title}</h3>

                  {/* Mentor */}
                  <p className={`text-xs font-medium ${c.text} mb-1`}>{d.mentor}</p>
                  <p className="text-[11px] text-text-muted mb-4">{d.school}</p>

                  {/* Detail */}
                  <p className="text-xs text-text-secondary leading-relaxed mb-4 flex-1">{d.detail}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {d.tags.slice(0, 3).map((t) => (
                      <span key={t} className={`text-[10px] px-2 py-0.5 rounded-full border ${c.badge}`}>
                        {t}
                      </span>
                    ))}
                    {d.tags.length > 3 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] text-text-muted border border-white/[0.06]">
                        +{d.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Count */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.05]">
                    <span className="text-[11px] text-text-muted font-medium">{d.count}</span>
                    <ArrowUpRight size={12} className={`${c.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
