import { motion } from 'framer-motion';
import {
  Target, Award, BookOpen, Clock, Star, Lightbulb, CheckCircle2, ArrowRight,
  GraduationCap, Sparkles, Zap, ExternalLink, Calendar, FileText, Quote,
  TrendingUp, Compass, Shield,
} from 'lucide-react';
import SectionHeader from './SectionHeader';

const papersPath = (filename) => `papers/${encodeURIComponent(filename)}`;

// Recommended major
const majorRecommendation = {
  primary: {
    title: '艺术学理论（美术史论与艺术批评）',
    school: '四川大学艺术学院',
    mentor: '吴永强 教授',
    tag: '首选推荐',
    color: 'cyan',
  },
  reasons: [
    {
      icon: GraduationCap,
      title: '导师资源得天独厚',
      desc: '吴永强教授研究体系完整（7篇论文），从审美现代性理论到西南油画史再到书法美学，构建了理论→历史→个案的全链条学术路径。',
    },
    {
      icon: Sparkles,
      title: '学术概念有原创性',
      desc: '吴老师独创"悬置的表现主义"概念——表现主义处于形式主义与功能主义的边缘地带——是面试中展示学术深度的决定性差异化武器。',
    },
    {
      icon: BookOpen,
      title: '学科基础最扎实',
      desc: '5套课程讲义（艺术概论+中西美学/美术史）共128页，完全覆盖艺术学理论考研核心范围，与"三维一体"学习法高度契合。',
    },
    {
      icon: FileText,
      title: '论文数据支撑充分',
      desc: '手上掌握吴老师全部7篇论文的全文PDF，比其他任何导师方向都多，复试中可展示对导师体系的全面理解。',
    },
    {
      icon: Compass,
      title: '西南地域特色鲜明',
      desc: '四川大学"西南学派"（西南油画谱系+三星堆研究）在全国有独特标识，是复试中强烈的差异化信号。',
    },
  ],
  backup: {
    title: '考古学与中华文明（三星堆/古蜀文明）',
    school: '四川大学历史文化学院',
    mentor: '霍巍 教授（长江学者）',
    note: '全国考古学权威，三星堆研究是近年学术热点，论文产出质量极高。跨考需补充考古学基础知识。',
  },
};

// Study phases
const phases = [
  {
    title: '第一阶段：通读建立全局',
    period: '7月8日—7月28日 · 约20天',
    color: 'blue',
    tasks: [
      { days: 'Day 1-5', content: '吴永强方向：审美现代性 + 书法美学 + 张大千', papers: ['对审美现代性的知识论考察_吴永强.pdf', '论书法艺术表现力的内涵_吴永强.pdf', '转益多师臻化境__借古开今知大千——林木谈张大千的艺术观与中国绘画传统_吴永强.pdf'] },
      { days: 'Day 6-8', content: '吴永强方向：西南油画谱系 + 艺术批评史方法论', papers: ['西南油画与当代油画的源流与现状_吴永强.pdf', '作为艺术社会史镜像的20世纪中国艺术批评史——论陈旭光艺术批评史写作的整体观_吴永强.pdf'] },
      { days: 'Day 9-15', content: '霍巍方向：三星堆 + 西亚比较 + 昆仑文化 + 吐蕃金银器', papers: ['三星堆考古与中国古史传承体系_霍巍.pdf', '广汉三星堆青铜文化与古代西亚文明_霍巍.pdf', '殷墟传统之外：三星堆早期发掘与早期中国考古学_霍巍.pdf'] },
      { days: 'Day 16-18', content: '陈默方向：战时军政协作 + 国民党军队述评 + 舆论史', papers: ['新中国成立以来中国大陆学界关于全面抗战时期国民党军队研究述评_陈默.pdf', '观棋有语_1941年国统区舆论界对苏德战争的研判和评说_陈默.pdf'] },
      { days: 'Day 19-20', content: '影视文化方向：类型电影 + 空间理论 + "他者"理论', papers: ['西藏题材电影类型的不同表达——以《阿拉姜色》《冈仁波齐》为例.pdf', '《唐山大地震》的反灾难类型片书写.pdf'] },
    ],
  },
  {
    title: '第二阶段：精读深度理解',
    period: '7月29日—8月7日 · 约10天',
    color: 'teal',
    tasks: [
      { days: '前5天', content: 'Tier 1 六篇核心文献精读 + 做笔记 + 思维导图', papers: [] },
      { days: '后5天', content: 'Tier 2 八篇重要补充 + 五套课程讲义交叉阅读', papers: [] },
    ],
  },
  {
    title: '第三阶段：横向整合',
    period: '8月8日—8月19日 · 约12天',
    color: 'purple',
    tasks: [
      { days: 'Day 1-3', content: '跨导师方法论串联：对比吴永强"知识论考察"、霍巍"二重证据法"、陈默"史料批判分析"的异同', papers: [] },
      { days: 'Day 4-5', content: '三大核心考点深度打磨：每个考点写3000字论述文，引用2篇以上导师论文', papers: [] },
      { days: 'Day 6-7', content: '跨学科案例准备：准备3-5个串联多导师观点的综合论述题', papers: [] },
      { days: 'Day 8-12', content: '模拟答题 + 查缺补漏：每日2道论述题，闭卷限时训练', papers: [] },
    ],
  },
  {
    title: '第四阶段：冲刺',
    period: '8月20日—8月26日 · 约7天',
    color: 'cyan',
    tasks: [
      { days: 'Day 1-2', content: '三大核心考点全量回顾 + 5套讲义重点回顾', papers: [] },
      { days: 'Day 3-4', content: '全真模拟面试：自我介绍 → 研究方向陈述 → 导师论文简述 → 即兴问答', papers: [] },
      { days: 'Day 5-6', content: '导师最新论文追踪 + 考前心态调整', papers: [] },
      { days: 'Day 7', content: '轻量复习 + 保证充足睡眠', papers: [] },
    ],
  },
];

// Key concept cards
const keyConcepts = [
  {
    mentor: '吴永强',
    title: '审美现代性',
    color: 'cyan',
    items: [
      '波德莱尔："过渡、短暂、偶然"',
      '五副面孔（卡林内斯库）：现代主义/先锋派/颓废/媚俗艺术/后现代主义',
      '三重悖论：对立于传统 / 对立于资产阶级现代性 / 对立于自身',
      '两条路线：形式主义（塞尚→极简） vs 功能主义（高更→观念艺术）',
      '独创："悬置的表现主义"——形式与功能边缘地带的危险平衡',
    ],
    papers: ['对审美现代性的知识论考察_吴永强.pdf'],
  },
  {
    mentor: '霍巍',
    title: '三星堆考古',
    color: 'teal',
    items: [
      '关键年代：1927燕道诚→1934葛维汉→1986两坑→2020六坑',
      '核心器物：大立人/神树/金杖/金面罩/纵目面具/顶尊跪坐人像',
      '古蜀世系：蚕丛→柏灌→鱼凫→杜宇→开明',
      '方法论：二重证据法（地下实物↔纸上文献）',
      '"史实素地"：徐旭生——传说中蕴含的历史内核',
      '学术贡献：突破"殷墟范式"，建立"西南样本"',
    ],
    papers: ['三星堆考古与中国古史传承体系_霍巍.pdf'],
  },
  {
    mentor: '陈默',
    title: '战时军政协作 ⭐',
    color: 'blue',
    items: [
      '核心问题：军队"派系化"→"军人治政"失效→军、政严重对立',
      '案例一·鄂东（人事权）：桂系干预县长任免 vs 陈诚省府 → 桂系获胜',
      '案例二·鄂北（军粮）：第五战区超额摊派 vs 陈诚抗辩至蒋介石处',
      '理论贡献：派系因素是战时地方治理困境的根本原因',
      '关键人物：李宗仁、陈诚、程汝怀、李品仙',
    ],
    papers: [],
  },
];

// Interview strategy
const interviewTips = [
  '面试自我介绍时，自然嵌入对吴永强老师"悬置的表现主义"概念的引用，展示你的学术敏感度',
  '回答专业问题时，遵守"导师观点 + 两篇以上论文串联 + 个人见解"的黄金公式',
  '展示跨学科视野：用霍巍的二重证据法解释艺术史研究的互证逻辑',
  '准备一个2分钟的研究方向陈述：为什么选这个方向 + 读过哪些论文 + 未来想研究什么',
  '对"你读过哪些专业书籍"的问题，不要只列书名，要说出每本书给你的核心启发',
];

const colorClass = {
  blue: { text: 'text-accent-blue', bg: 'bg-accent-blue/10', border: 'border-accent-blue/20', badge: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20' },
  teal: { text: 'text-accent-teal', bg: 'bg-accent-teal/10', border: 'border-accent-teal/20', badge: 'bg-accent-teal/10 text-accent-teal border-accent-teal/20' },
  purple: { text: 'text-accent-purple', bg: 'bg-accent-purple/10', border: 'border-accent-purple/20', badge: 'bg-accent-purple/10 text-accent-purple border-accent-purple/20' },
  cyan: { text: 'text-accent-cyan', bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/20', badge: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20' },
};

export default function StudyPlan() {
  return (
    <section id="plan" className="relative py-24 px-6">
      <div className="max-w-[1700px] mx-auto">
        <SectionHeader
          tag="考研方向与学习计划"
          title="2026 考研专业方向 & 49天系统学习计划"
          subtitle="基于35份文献全景分析的科学备考策略 · 首选艺术学理论"
          accentClass="text-accent-cyan"
        />

        {/* ===== SECTION 1: Recommended Major ===== */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          {/* Primary recommendation */}
          <div className="relative p-8 rounded-3xl border border-accent-cyan/30 bg-gradient-to-br from-accent-cyan/[0.06] to-accent-blue/[0.03] backdrop-blur-sm overflow-hidden mb-6">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent-cyan/[0.04] blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/25">
                  <Award size={14} className="text-accent-cyan" />
                  <span className="text-xs font-bold text-accent-cyan">{majorRecommendation.primary.tag}</span>
                </div>
                <span className="text-xs text-text-muted">{majorRecommendation.primary.school}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-text-primary mb-2 tracking-tight">
                {majorRecommendation.primary.title}
              </h3>
              <p className="text-sm text-accent-cyan font-semibold mb-5">核心导师：{majorRecommendation.primary.mentor}</p>

              {/* 5 reasons */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mb-6">
                {majorRecommendation.reasons.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-accent-cyan/20 hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center mb-2.5">
                      <r.icon size={15} className="text-accent-cyan" />
                    </div>
                    <h4 className="text-xs font-bold text-text-primary mb-1.5">{r.title}</h4>
                    <p className="text-[11px] text-text-secondary leading-relaxed">{r.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Recommended papers */}
              <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-accent-cyan/[0.04] border border-accent-cyan/15">
                <FileText size={14} className="text-accent-cyan shrink-0" />
                <span className="text-xs text-text-secondary">面试推荐展示论文：</span>
                {['对审美现代性的知识论考察_吴永强.pdf', '作为艺术社会史镜像的20世纪中国艺术批评史——论陈旭光艺术批评史写作的整体观_吴永强.pdf', '西南油画与当代油画的源流与现状_吴永强.pdf'].map((f, i) => (
                  <a
                    key={i}
                    href={papersPath(f)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-cyan/8 border border-accent-cyan/20 text-[11px] text-accent-cyan hover:bg-accent-cyan/15 transition-all duration-200"
                  >
                    <span className="text-text-secondary">0{i + 1}</span>
                    <span>{f.replace(/_吴永强\.pdf|_吴永强\.pdf|.pdf/g, '').replace('——论陈旭光艺术批评史写作的整体观', '').replace('作为艺术社会史镜像的20世纪中国艺术批评史', '艺术批评史').slice(0, 20)}…</span>
                    <ExternalLink size={9} className="opacity-50" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Backup recommendation */}
          <div className="p-5 rounded-2xl border border-white/[0.08] bg-white/[0.015] backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <Shield size={14} className="text-accent-purple" />
              <span className="text-xs font-bold text-accent-purple uppercase tracking-wider">备选方向</span>
            </div>
            <h4 className="text-base font-bold text-text-primary mb-1">{majorRecommendation.backup.title}</h4>
            <p className="text-xs text-text-secondary">
              {majorRecommendation.backup.school} · {majorRecommendation.backup.mentor} · {majorRecommendation.backup.note}
            </p>
          </div>
        </motion.div>

        {/* ===== SECTION 2: 49-Day Plan ===== */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
              <Calendar size={18} className="text-accent-blue" />
            </div>
            <div>
              <h3 className="text-xl font-black text-text-primary">49 天系统学习计划</h3>
              <p className="text-xs text-text-muted">讲义筑基 → 论文提深 → 横向串联 → 全真模拟</p>
            </div>
          </div>

          {/* Strategy summary bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-8 p-4 rounded-2xl border border-white/[0.06] bg-white/[0.015]">
            {[
              { icon: BookOpen, text: '讲义筑基', color: 'text-accent-green' },
              { icon: FileText, text: '论文提深', color: 'text-accent-cyan' },
              { icon: GitBranch, text: '横向串联', color: 'text-accent-purple' },
              { icon: Zap, text: '全真模拟', color: 'text-accent-orange' },
            ].map((s, i, arr) => (
              <div key={i} className="flex items-center gap-2">
                <s.icon size={14} className={s.color} />
                <span className="text-xs font-semibold text-text-secondary">{s.text}</span>
                {i < arr.length - 1 && <ArrowRight size={12} className="text-text-muted hidden md:block" />}
              </div>
            ))}
          </div>

          <div className="space-y-5">
            {phases.map((p, i) => {
              const c = colorClass[p.color];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-2xl border ${c.border} ${c.bg} backdrop-blur-sm overflow-hidden`}
                >
                  <div className="px-6 py-4 flex items-center gap-3 border-b border-white/[0.04]">
                    <span className={`text-2xl font-black ${c.text}`}>0{i + 1}</span>
                    <div>
                      <h4 className="text-sm font-bold text-text-primary">{p.title}</h4>
                      <p className="text-[11px] text-text-muted">{p.period}</p>
                    </div>
                    <div className="ml-auto">
                      <span className={`text-[10px] px-2 py-1 rounded-full border ${c.badge} font-medium`}>
                        {p.tasks.length} 个任务
                      </span>
                    </div>
                  </div>
                  <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {p.tasks.map((t, j) => (
                      <div key={j} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-colors duration-200">
                        <div className={`w-6 h-6 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center shrink-0 mt-0.5`}>
                          <CheckCircle2 size={12} className={c.text} />
                        </div>
                        <div className="min-w-0">
                          <span className={`text-[10px] font-bold ${c.text} block mb-0.5`}>{t.days}</span>
                          <p className="text-xs text-text-secondary leading-relaxed">{t.content}</p>
                          {t.papers.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1.5">
                              {t.papers.map((pf, k) => (
                                <a key={k} href={papersPath(pf)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] text-accent-cyan/70 hover:text-accent-cyan px-1.5 py-0.5 rounded-md bg-accent-cyan/[0.04] border border-accent-cyan/10 hover:border-accent-cyan/20 transition-all">
                                  <FileText size={9} />
                                  <span className="truncate max-w-[120px]">{pf.replace(/_.*\.pdf$/, '').slice(0, 12)}…</span>
                                  <ExternalLink size={8} />
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ===== SECTION 3: Key Concepts ===== */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-accent-rose/10 border border-accent-rose/20 flex items-center justify-center">
              <Zap size={18} className="text-accent-rose" />
            </div>
            <div>
              <h3 className="text-xl font-black text-text-primary">三大核心考点速记卡</h3>
              <p className="text-xs text-text-muted">面试前必须烂熟于心的知识模块</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {keyConcepts.map((k, i) => {
              const c = colorClass[k.color];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`rounded-2xl border ${c.border} ${c.bg} backdrop-blur-sm p-6 flex flex-col`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${c.badge}`}>{k.mentor}</span>
                    {k.title.includes('⭐') && <span className="text-[10px] text-accent-orange">⭐新</span>}
                  </div>
                  <h4 className="text-lg font-black text-text-primary mb-4">{k.title}</h4>
                  <div className="space-y-2.5 flex-1">
                    {k.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <span className={`w-1 h-1 rounded-full mt-[6px] shrink-0 ${c.badge.split(' ')[1]}`} style={{ backgroundColor: 'currentColor' }} />
                        <span className="text-xs text-text-secondary leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                  {k.papers.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-white/[0.05]">
                      {k.papers.map((pf, j) => (
                        <a key={j} href={papersPath(pf)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[11px] text-accent-cyan hover:text-accent-cyan/80 transition-colors">
                          <FileText size={10} />
                          <span>{pf.replace(/_.*\.pdf$/, '')}</span>
                          <ExternalLink size={9} className="opacity-50" />
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ===== SECTION 4: Interview Strategy ===== */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center">
              <Quote size={18} className="text-accent-purple" />
            </div>
            <div>
              <h3 className="text-xl font-black text-text-primary">面试策略与答题黄金公式</h3>
              <p className="text-xs text-text-muted">差异化竞争策略 · 助你脱颖而出</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Interview tips */}
            <div className="p-6 rounded-2xl border border-accent-purple/15 bg-accent-purple/[0.02] backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb size={15} className="text-accent-purple" />
                <span className="text-sm font-bold text-text-primary">5 条决胜面试策略</span>
              </div>
              <div className="space-y-3">
                {interviewTips.map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[11px] font-bold text-accent-purple">{i + 1}</span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed pt-0.5">{t}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Golden formula */}
            <div className="p-6 rounded-2xl border border-accent-cyan/15 bg-accent-cyan/[0.02] backdrop-blur-sm flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Star size={15} className="text-accent-cyan" />
                <span className="text-sm font-bold text-text-primary">答题黄金公式</span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
                <div className="flex items-center gap-3 flex-wrap justify-center">
                  {[
                    { label: '导师观点', color: 'bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan' },
                    { label: '两篇以上论文串联', color: 'bg-accent-blue/10 border-accent-blue/20 text-accent-blue' },
                    { label: '形成个人见解', color: 'bg-accent-purple/10 border-accent-purple/20 text-accent-purple' },
                  ].map((g, i, arr) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`px-4 py-2.5 rounded-xl border ${g.color} text-xs font-bold`}>
                        {g.label}
                      </div>
                      {i < arr.length - 1 && (
                        <span className="text-text-muted text-lg font-bold">+</span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-xl bg-deep-850/50 border border-white/[0.06] w-full text-left">
                  <p className="text-[11px] text-text-muted leading-relaxed font-mono">
                    【示例】"霍巍教授在《三星堆考古与中国古史传承体系》中运用二重证据法，揭示三星堆遗存与古蜀帝系谱系的对应关系；<br />
                    同时，在《殷墟传统之外》一文中，他进一步论证了'西南样本'的学术史意义。<br />
                    综合来看，三星堆的意义在于______"<br /><br />
                    <span className="text-accent-cyan">→ 导师观点 + 两篇论文串联 + 形成个人见解</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== SECTION 5: Summary ===== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-2xl border border-accent-cyan/20 bg-gradient-to-r from-accent-cyan/[0.04] via-accent-blue/[0.03] to-accent-purple/[0.02] backdrop-blur-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center">
                <TrendingUp size={18} className="text-accent-cyan" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-text-primary">执行要点</h4>
                <p className="text-xs text-text-muted">每日固定3-4小时深度学习 · 每篇论文300字总结 · 每周跨论文串联 · 黄金公式贯穿始终</p>
              </div>
            </div>
            <a
              href="https://soren-tao.github.io/kaoyan-resume/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-cyan/10 border border-accent-cyan/25 text-xs font-bold text-accent-cyan hover:bg-accent-cyan/20 transition-all duration-300"
            >
              <ExternalLink size={13} />
              打开完整论文库
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
