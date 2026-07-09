import { motion } from 'framer-motion';
import {
  Palette, Landmark, ScrollText, Film, Library, ArrowUpRight, Star, ExternalLink,
} from 'lucide-react';
import SectionHeader from './SectionHeader';

const projects = [
  {
    icon: Palette,
    color: 'cyan',
    mentor: '吴永强 导师',
    school: '四川大学艺术学院',
    title: '美术史论与艺术批评',
    tags: ['审美现代性', '书法美学', '西南油画', '艺术批评史', '张大千'],
    count: '7 篇论文',
    detail: '独创"悬置的表现主义"概念，以知识论考察与代际分析方法构建审美现代性理论体系与艺术批评方法论纲领。',
    highlights: ['审美现代性三重悖论', '"悬置的表现主义"原创概念', '西南区域美术史完整谱系'],
  },
  {
    icon: Landmark,
    color: 'teal',
    mentor: '霍巍 导师 + 吕红亮',
    school: '四川大学历史文化学院（长江学者）',
    title: '考古学与中华文明',
    tags: ['三星堆', '古蜀文明', '西亚比较', '昆仑文化', '吐蕃金银器'],
    count: '6 篇论文',
    detail: '以二重证据法揭示中华文明多元一体格局的形成机制，突破"殷墟范式"建立"西南样本"。',
    highlights: ['三星堆与中国古史传承体系', '"西南样本"范式创新', '跨文明比较方法论'],
  },
  {
    icon: ScrollText,
    color: 'blue',
    mentor: '陈默 导师 + 瞿骏',
    school: '四川大学历史文化学院',
    title: '中国近现代史',
    tags: ['抗日战争', '派系政治', '舆论传媒', '战时军政协作', '新史料'],
    count: '4 篇论文',
    detail: '从"想不想打"到"能不能打"，深入揭示战时军队派系化与军政对立的根本成因。',
    highlights: ['战时军政协作深度案例', '第三种权力舆论分析', '国民党军队研究学术史全景'],
  },
  {
    icon: Film,
    color: 'purple',
    mentor: '李艳 等导师',
    school: '四川大学艺术学院',
    title: '影视与文化综合研究',
    tags: ['西藏电影', '灾难类型片', '文旅演艺', '道教舞蹈', '明清戏曲'],
    count: '8 篇论文',
    detail: '跨学科视野下，从"他者"理论到空间三元论的多元文化批评实践。',
    highlights: ['类型电影本土化改写', '"他者"理论影像分析', '空间三元理论应用'],
  },
  {
    icon: Library,
    color: 'indigo',
    mentor: '2023-2024 系列',
    school: '课程讲义 · 应试基础',
    title: '五大课程讲义',
    tags: ['艺术概论', '西方美术史', '中国美学史', '中国美术史', '西方美学史'],
    count: '5 套讲义',
    detail: '48+20+17+13+30页系统课程资料，覆盖艺术学考研全部核心基础知识点。',
    highlights: ['艺术概论全覆盖', '中西美学/美术史对照', '考试必背基础'],
  },
];

const colorMap = {
  cyan:    { border: 'border-accent-cyan/20 hover:border-accent-cyan/40', bg: 'bg-accent-cyan/[0.03]', text: 'text-accent-cyan', badge: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20', glow: 'hover:shadow-accent-cyan/[0.08]', dot: 'bg-accent-cyan' },
  teal:    { border: 'border-accent-teal/20 hover:border-accent-teal/40', bg: 'bg-accent-teal/[0.03]', text: 'text-accent-teal', badge: 'bg-accent-teal/10 text-accent-teal border-accent-teal/20', glow: 'hover:shadow-accent-teal/[0.08]', dot: 'bg-accent-teal' },
  blue:    { border: 'border-accent-blue/20 hover:border-accent-blue/40', bg: 'bg-accent-blue/[0.03]', text: 'text-accent-blue', badge: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20', glow: 'hover:shadow-accent-blue/[0.08]', dot: 'bg-accent-blue' },
  purple:  { border: 'border-accent-purple/20 hover:border-accent-purple/40', bg: 'bg-accent-purple/[0.03]', text: 'text-accent-purple', badge: 'bg-accent-purple/10 text-accent-purple border-accent-purple/20', glow: 'hover:shadow-accent-purple/[0.08]', dot: 'bg-accent-purple' },
  indigo:  { border: 'border-accent-indigo/20 hover:border-accent-indigo/40', bg: 'bg-accent-indigo/[0.03]', text: 'text-accent-indigo', badge: 'bg-accent-indigo/10 text-accent-indigo border-accent-indigo/20', glow: 'hover:shadow-accent-indigo/[0.08]', dot: 'bg-accent-indigo' },
};

export default function SelectedProjects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-[1700px] mx-auto">
        <SectionHeader
          tag="研究方向精选"
          title="精选研究方向"
          subtitle="五大核心方向 · 35份文献 · 约120万字 · 构建完整学术知识图谱"
          accentClass="text-accent-cyan"
        />

        <div className="space-y-4">
          {projects.map((p, i) => {
            const c = colorMap[p.color];
            const isLarge = i === 0 || i === 2; // Alternate large cards

            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative rounded-3xl border ${c.border} ${c.bg} backdrop-blur-sm transition-all duration-500 ${c.glow} hover:-translate-y-1 overflow-hidden`}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 p-6 md:p-8">
                  <div className={`flex flex-col ${isLarge ? 'lg:flex-row lg:items-center lg:gap-10' : 'lg:flex-row lg:items-center lg:gap-10'}`}>
                    {/* Left: Icon + basic info */}
                    <div className={`flex items-start gap-5 ${isLarge ? 'lg:w-[420px] shrink-0' : 'lg:w-[380px] shrink-0'}`}>
                      <div className={`w-14 h-14 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                        <p.icon size={24} className={c.text} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-base font-black text-text-primary">{p.title}</span>
                          <ArrowUpRight size={14} className={`${c.text} opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300`} />
                        </div>
                        <p className={`text-xs font-semibold ${c.text} mb-0.5`}>{p.mentor}</p>
                        <p className="text-[11px] text-text-muted mb-2">{p.school}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {p.tags.map(t => (
                            <span key={t} className={`text-[10px] px-2 py-0.5 rounded-full border ${c.badge}`}>
                              {t}
                            </span>
                          ))}
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${c.badge}`}>
                            {p.count}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Detail + highlights */}
                    <div className="mt-5 lg:mt-0 flex-1 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
                      <p className="text-sm text-text-secondary leading-relaxed lg:flex-1 lg:max-w-[420px]">
                        {p.detail}
                      </p>
                      <div className="flex flex-wrap gap-2 lg:gap-3">
                        {p.highlights.map((h, j) => (
                          <div
                            key={j}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] text-text-secondary hover:border-white/[0.15] hover:text-text-primary transition-all duration-300"
                          >
                            <Star size={10} className={c.text} fill="currentColor" />
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>
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
