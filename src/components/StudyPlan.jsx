import { motion } from 'framer-motion';
import {
  Target, Award, BookOpen, Clock, Star, Lightbulb, CheckCircle2, ArrowRight,
  GraduationCap, Sparkles, Zap, ExternalLink, Calendar, FileText, Quote,
  TrendingUp, Compass, Shield, Globe, PenTool,
} from 'lucide-react';
import SectionHeader from './SectionHeader';

const papersPath = (filename) => `papers/${encodeURIComponent(filename)}`;

// Recommended major (保持不变)
const majorRecommendation = {
  primary: {
    title: '艺术学理论（美术史论与艺术批评）',
    school: '四川大学艺术学院',
    mentor: '吴永强 教授',
    tag: '首选推荐',
    color: 'cyan',
  },
  reasons: [
    { icon: GraduationCap, title: '导师资源得天独厚', desc: '吴永强教授研究体系完整（7篇论文），从审美现代性理论到西南油画史再到书法美学，构建了理论→历史→个案的全链条学术路径。' },
    { icon: Sparkles, title: '学术概念有原创性', desc: '吴老师独创"悬置的表现主义"概念——表现主义处于形式主义与功能主义的边缘地带——是面试中展示学术深度的决定性差异化武器。' },
    { icon: BookOpen, title: '学科基础最扎实', desc: '5套课程讲义（艺术概论+中西美学/美术史）共128页，完全覆盖艺术学理论考研核心范围，与"三维一体"学习法高度契合。' },
    { icon: FileText, title: '论文数据支撑充分', desc: '手上掌握吴老师全部7篇论文的全文PDF，比其他任何导师方向都多，复试中可展示对导师体系的全面理解。' },
    { icon: Compass, title: '西南地域特色鲜明', desc: '四川大学"西南学派"（西南油画谱系+三星堆研究）在全国有独特标识，是复试中强烈的差异化信号。' },
  ],
  backup: {
    title: '考古学与中华文明（三星堆/古蜀文明）',
    school: '四川大学历史文化学院',
    mentor: '霍巍 教授（长江学者）',
    note: '全国考古学权威，三星堆研究是近年学术热点，论文产出质量极高。跨考需补充考古学基础知识。',
  },
};

// 四阶段全程备考计划 (7月-12月)
const phases = [
  {
    title: '第一阶段：基础夯实',
    period: '7月中旬 — 8月底 · 约7周',
    color: 'blue',
    goal: '公共课过完一轮基础 + 专业课完成全部论文通读 + 讲义系统学习',
    tasks: [
      {
        tag: '公共课',
        days: '英语',
        content: '每天100个考研核心词汇（推荐红宝书App）+ 每天1篇阅读理解精读（考研真题2000-2010年）',
        sub: '7月底完成第一轮词汇；8月底结束早年真题阅读',
      },
      {
        tag: '公共课',
        days: '政治',
        content: '7月中旬-8月中旬：徐涛强化班视频课，配《核心考案》做笔记',
        sub: '8月下旬：肖秀荣1000题第一轮，每天30-50题',
      },
      {
        tag: '专业课',
        days: '吴永强方向 · 2周',
        content: '审美现代性理论体系 + 书法美学 + 张大千 + 西南油画谱系 + 艺术批评史',
        papers: ['对审美现代性的知识论考察_吴永强.pdf', '论书法艺术表现力的内涵_吴永强.pdf', '转益多师臻化境__借古开今知大千——林木谈张大千的艺术观与中国绘画传统_吴永强.pdf', '西南油画与当代油画的源流与现状_吴永强.pdf', '作为艺术社会史镜像的20世纪中国艺术批评史——论陈旭光艺术批评史写作的整体观_吴永强.pdf'],
      },
      {
        tag: '专业课',
        days: '霍巍 + 陈默方向 · 2周',
        content: '三星堆核心论文 + 战时军政协作 + 昆仑文化 + 吐蕃金银器 + 考古学方法论',
        papers: ['三星堆考古与中国古史传承体系_霍巍.pdf', '殷墟传统之外：三星堆早期发掘与早期中国考古学_霍巍.pdf', '广汉三星堆青铜文化与古代西亚文明_霍巍.pdf', '新中国成立以来中国大陆学界关于全面抗战时期国民党军队研究述评_陈默.pdf'],
      },
      {
        tag: '专业课',
        days: '影视文化 + 讲义 · 2周',
        content: '5套课程讲义系统学习（艺术概论/中西美学/中西美术） + 影视文化方向8篇论文通读',
        papers: ['2023-2024艺术概论.pdf', '2023-2024西方美学史.pdf', '2023-2024中国美学史.pdf', '西藏题材电影类型的不同表达——以《阿拉姜色》《冈仁波齐》为例.pdf'],
      },
    ],
  },
  {
    title: '第二阶段：强化提升',
    period: '9月初 — 10月中旬 · 约6周',
    color: 'teal',
    goal: '公共课进入真题阶段 + 专业课Tier 1-2精读 + 开始做笔记框架',
    tasks: [
      {
        tag: '公共课',
        days: '英语',
        content: '考研真题2011-2020年阅读理解逐篇精翻 + 完形填空/新题型/翻译专项突破',
        sub: '10月中旬开始准备作文模板，每周写1篇大作文+1篇小作文',
      },
      {
        tag: '公共课',
        days: '政治',
        content: '腿姐技巧班 + 肖秀荣1000题第二轮（重点刷错题）+ 开始背诵核心知识点',
        sub: '关注时政热点，整理马原/毛中特/史纲/思修知识框架',
      },
      {
        tag: '专业课',
        days: '论文精读 · 3周',
        content: 'Tier 1 六篇核心文献逐段精读，做思维导图 + Tier 2 八篇重要补充精读 + 每篇论文写300字核心观点总结',
        papers: ['对审美现代性的知识论考察_吴永强.pdf', '三星堆考古与中国古史传承体系_霍巍.pdf', '作为艺术社会史镜像的20世纪中国艺术批评史——论陈旭光艺术批评史写作的整体观_吴永强.pdf'],
      },
      {
        tag: '专业课',
        days: '讲义深化 · 2周',
        content: '5套讲义第二轮深化学习：用思维导图整理知识点框架 + 重点概念背诵（42个美学命题+34个美术史概念+15个艺术概论必背）',
        papers: ['2023-2024艺术概论.pdf', '2023-2024中国美术史.pdf'],
      },
      {
        tag: '专业课',
        days: '方法论整合 · 1周',
        content: '横向对比导师研究方法：二重证据法/知识论考察/史料批判/类型分析/空间三元理论，梳理异同及适用场景',
      },
    ],
  },
  {
    title: '第三阶段：真题实战',
    period: '10月下旬 — 11月底 · 约6周',
    color: 'purple',
    goal: '公共课全真模拟 + 专业课论述题训练 + 跨学科知识串联',
    tasks: [
      {
        tag: '公共课',
        days: '英语',
        content: '2021-2026年真题全真模拟（每周1套，限时3小时）+ 作文模板最终定稿并背诵',
        sub: '重点突破近5年真题中的高频词汇和长难句',
      },
      {
        tag: '公共课',
        days: '政治',
        content: '肖八11月上市后立即开始，选择题限时训练 + 分析题开始背诵框架',
        sub: '搭配腿姐冲刺背诵手册，每日晨读30分钟',
      },
      {
        tag: '专业课',
        days: '论述题训练 · 3周',
        content: '围绕三大核心考点（审美现代性/三星堆/军政协作），每个考点写3篇3000字论述文 + 每日2道押题方向论述题限时训练',
      },
      {
        tag: '专业课',
        days: '跨学科串联 · 2周',
        content: '准备5个能串联多导师观点的综合论述（如：三星堆的艺术价值+考古意义+文化认同 / 审美现代性与当代艺术实践 / 战时文化生产的制度约束）',
      },
      {
        tag: '专业课',
        days: '查缺补漏 · 1周',
        content: '全面回顾Tier 3拓展论文 + 薄弱环节针对性强化 + 历年真题考点统计分析',
      },
    ],
  },
  {
    title: '第四阶段：全力冲刺',
    period: '12月初 — 考前（12月26-27日）· 约4周',
    color: 'cyan',
    goal: '公共课全力背诵 + 专业课全真模拟复试 + 考前心态调整',
    tasks: [
      {
        tag: '公共课',
        days: '英语',
        content: '保持每天1篇阅读手感 + 作文模板反复默写 + 2024-2026年真题二刷',
        sub: '考前一周不再做新题，回顾错题集',
      },
      {
        tag: '公共课',
        days: '政治',
        content: '肖四到手立即开始背诵分析题！！！每天背诵4小时+，直到进考场前最后一刻',
        sub: '肖四选择题三刷 + 时政热点最后梳理',
      },
      {
        tag: '专业课',
        days: '全真模拟 · 2周',
        content: '全真模拟面试：自我介绍 → 研究方向陈述 → 导师论文简述 → 即兴问答，至少模拟5轮',
      },
      {
        tag: '专业课',
        days: '考前冲刺 · 2周',
        content: '三大考点速记卡每日过一遍 + 5套讲义重点最后回顾 + 面试"杀手锏"研究方向陈述反复打磨',
      },
      {
        tag: '全科',
        days: '考前调整',
        content: '12月24-25日：轻量复习 + 熟悉考场 + 调整作息 + 保证充足睡眠',
      },
    ],
  },
];

// 每周时间分配表
const weeklySchedule = [
  { day: '周一', slots: [{ time: '上午 8:00-11:30', task: '专业课：论文精读 + 笔记整理', color: 'cyan' }, { time: '下午 14:00-17:00', task: '英语：词汇 + 阅读理解精读', color: 'blue' }, { time: '晚上 19:00-21:00', task: '政治：视频课 + 题目练习', color: 'orange' }] },
  { day: '周二', slots: [{ time: '上午 8:00-11:30', task: '专业课：讲义系统学习 + 思维导图', color: 'cyan' }, { time: '下午 14:00-17:00', task: '英语：长难句翻译 + 完形专项', color: 'blue' }, { time: '晚上 19:00-21:00', task: '政治：1000题 + 错题整理', color: 'orange' }] },
  { day: '周三', slots: [{ time: '上午 8:00-11:30', task: '专业课：导师论文方法论串联', color: 'cyan' }, { time: '下午 14:00-17:00', task: '英语：真题精读 + 词汇复习', color: 'blue' }, { time: '晚上 19:00-21:00', task: '政治：框架背诵', color: 'orange' }] },
  { day: '周四', slots: [{ time: '上午 8:00-11:30', task: '专业课：跨学科论述题训练', color: 'cyan' }, { time: '下午 14:00-17:00', task: '英语：新题型 + 翻译专项', color: 'blue' }, { time: '晚上 19:00-21:00', task: '政治：选择题限时训练', color: 'orange' }] },
  { day: '周五', slots: [{ time: '上午 8:00-11:30', task: '专业课：核心考点深度打磨', color: 'cyan' }, { time: '下午 14:00-17:00', task: '英语：作文练习 + 模板打磨', color: 'blue' }, { time: '晚上 19:00-21:00', task: '政治：时政热点整理', color: 'orange' }] },
  { day: '周六', slots: [{ time: '上午 8:00-11:30', task: '英语：全真模拟（限时3小时）', color: 'blue' }, { time: '下午 14:00-17:00', task: '专业课：一周内容回顾 + 思维导图更新', color: 'cyan' }, { time: '晚上 19:00-22:00', task: '自由复习：薄弱环节补强', color: 'slate' }] },
  { day: '周日', slots: [{ time: '上午 9:00-12:00', task: '政治：一周错题回顾 + 框架默写', color: 'orange' }, { time: '下午 灵活安排', task: '休息 / 运动 / 轻量阅读Tier 3拓展论文', color: 'slate' }] },
];

// 考试科目与分值
const examInfo = [
  { subject: '政治', code: '101', score: '100分', time: '12月26日 上午 8:30-11:30', color: 'orange' },
  { subject: '英语（一）', code: '201', score: '100分', time: '12月26日 下午 14:00-17:00', color: 'blue' },
  { subject: '专业课一', code: '644', score: '150分', time: '12月27日 上午 8:30-11:30', color: 'cyan' },
  { subject: '专业课二', code: '925', score: '150分', time: '12月27日 下午 14:00-17:00', color: 'teal' },
];

// Key concept cards (不变)
const keyConcepts = [
  {
    mentor: '吴永强', title: '审美现代性', color: 'cyan',
    items: ['波德莱尔："过渡、短暂、偶然"', '五副面孔（卡林内斯库）：现代主义/先锋派/颓废/媚俗艺术/后现代主义', '三重悖论：对立于传统/资产阶级现代性/自身', '两条路线：形式主义（塞尚→极简）vs 功能主义（高更→观念艺术）', '独创："悬置的表现主义"——形式与功能边缘地带的危险平衡'],
    papers: ['对审美现代性的知识论考察_吴永强.pdf'],
  },
  {
    mentor: '霍巍', title: '三星堆考古', color: 'teal',
    items: ['关键年代：1927燕道诚→1934葛维汉→1986两坑→2020六坑', '核心器物：大立人/神树/金杖/金面罩/纵目面具/顶尊跪坐人像', '古蜀世系：蚕丛→柏灌→鱼凫→杜宇→开明', '方法论：二重证据法（地下实物↔纸上文献）', '"史实素地"：徐旭生——传说中蕴含的历史内核', '学术贡献：突破"殷墟范式"，建立"西南样本"'],
    papers: ['三星堆考古与中国古史传承体系_霍巍.pdf'],
  },
  {
    mentor: '陈默', title: '战时军政协作 ⭐', color: 'blue',
    items: ['核心问题：军队"派系化"→"军人治政"失效→军、政严重对立', '案例一·鄂东（人事权）：桂系 vs 陈诚省府，桂系获胜', '案例二·鄂北（军粮）：第五战区超额摊派，陈诚抗辩至蒋介石', '理论贡献：派系因素是战时地方治理困境的根本原因', '关键人物：李宗仁、陈诚、程汝怀、李品仙'],
    papers: [],
  },
];

const interviewTips = [
  '面试自我介绍时，自然嵌入对吴永强老师"悬置的表现主义"概念的引用，展示你的学术敏感度',
  '回答专业问题时，遵守"导师观点 + 两篇以上论文串联 + 个人见解"的黄金公式',
  '展示跨学科视野：用霍巍的二重证据法解释艺术史研究的互证逻辑',
  '准备一个2分钟的研究方向陈述：为什么选这个方向 + 读过哪些论文 + 未来想研究什么',
  '对"你读过哪些专业书籍"的问题，不要只列书名，要说出每本书给你的核心启发',
];

const tagColors = {
  '公共课': 'bg-accent-orange/10 text-accent-orange border-accent-orange/20',
  '专业课': 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20',
  '全科': 'bg-accent-green/10 text-accent-green border-accent-green/20',
};
const colorClass = {
  blue: { text: 'text-accent-blue', bg: 'bg-accent-blue/10', border: 'border-accent-blue/20', badge: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20', bar: 'bg-accent-blue' },
  teal: { text: 'text-accent-teal', bg: 'bg-accent-teal/10', border: 'border-accent-teal/20', badge: 'bg-accent-teal/10 text-accent-teal border-accent-teal/20', bar: 'bg-accent-teal' },
  purple: { text: 'text-accent-purple', bg: 'bg-accent-purple/10', border: 'border-accent-purple/20', badge: 'bg-accent-purple/10 text-accent-purple border-accent-purple/20', bar: 'bg-accent-purple' },
  cyan: { text: 'text-accent-cyan', bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/20', badge: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20', bar: 'bg-accent-cyan' },
  orange: { text: 'text-accent-orange', bg: 'bg-accent-orange/10', border: 'border-accent-orange/20', badge: 'bg-accent-orange/10 text-accent-orange border-accent-orange/20', bar: 'bg-accent-orange' },
  slate: { text: 'text-text-muted', bg: 'bg-white/[0.03]', border: 'border-white/[0.08]', badge: 'bg-white/[0.04] text-text-muted border-white/[0.08]', bar: 'bg-text-muted' },
};

export default function StudyPlan() {
  return (
    <section id="plan" className="relative py-24 px-6">
      <div className="max-w-[1700px] mx-auto">
        <SectionHeader tag="考研全程规划" title="2026 考研全程备考计划" subtitle="7月中旬 — 12月下旬 · 约24周 · 公共课+专业课双线推进" accentClass="text-accent-cyan" />

        {/* ===== 考试倒计时概览 ===== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-20"
        >
          {examInfo.map((e, i) => (
            <div key={i} className={`p-4 rounded-2xl border ${colorClass[e.color].border} ${colorClass[e.color].bg} backdrop-blur-sm text-center`}>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${colorClass[e.color].badge} mb-2 inline-block`}>{e.code}</span>
              <h4 className="text-sm font-bold text-text-primary mb-1">{e.subject}</h4>
              <p className={`text-lg font-black ${colorClass[e.color].text}`}>{e.score}</p>
              <p className="text-[10px] text-text-muted mt-1 leading-tight">{e.time}</p>
            </div>
          ))}
        </motion.div>

        {/* ===== 推荐方向 ===== */}
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="mb-20">
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
              <h3 className="text-2xl md:text-3xl font-black text-text-primary mb-2 tracking-tight">{majorRecommendation.primary.title}</h3>
              <p className="text-sm text-accent-cyan font-semibold mb-5">核心导师：{majorRecommendation.primary.mentor}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mb-6">
                {majorRecommendation.reasons.map((r, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-20px' }} transition={{ duration: 0.3, delay: i * 0.06 }} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-accent-cyan/20 hover:bg-white/[0.05] transition-all duration-300">
                    <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center mb-2.5"><r.icon size={15} className="text-accent-cyan" /></div>
                    <h4 className="text-xs font-bold text-text-primary mb-1.5">{r.title}</h4>
                    <p className="text-[11px] text-text-secondary leading-relaxed">{r.desc}</p>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-accent-cyan/[0.04] border border-accent-cyan/15">
                <FileText size={14} className="text-accent-cyan shrink-0" />
                <span className="text-xs text-text-secondary">面试推荐展示论文：</span>
                {['对审美现代性的知识论考察_吴永强.pdf', '作为艺术社会史镜像的20世纪中国艺术批评史——论陈旭光艺术批评史写作的整体观_吴永强.pdf', '西南油画与当代油画的源流与现状_吴永强.pdf'].map((f, i) => (
                  <a key={i} href={papersPath(f)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-cyan/8 border border-accent-cyan/20 text-[11px] text-accent-cyan hover:bg-accent-cyan/15 transition-all duration-200">
                    <span className="text-text-secondary">0{i + 1}</span>
                    <span className="truncate max-w-[140px]">{f.replace(/_.*\.pdf$/, '').replace(/——.*$/, '').slice(0, 14)}…</span>
                    <ExternalLink size={9} className="opacity-50" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="p-5 rounded-2xl border border-white/[0.08] bg-white/[0.015] backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2"><Shield size={14} className="text-accent-purple" /><span className="text-xs font-bold text-accent-purple uppercase tracking-wider">备选方向</span></div>
            <h4 className="text-base font-bold text-text-primary mb-1">{majorRecommendation.backup.title}</h4>
            <p className="text-xs text-text-secondary">{majorRecommendation.backup.school} · {majorRecommendation.backup.mentor} · {majorRecommendation.backup.note}</p>
          </div>
        </motion.div>

        {/* ===== 四阶段计划 ===== */}
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center"><Calendar size={18} className="text-accent-blue" /></div>
            <div>
              <h3 className="text-xl font-black text-text-primary">四阶段全程备考计划（7月 → 12月）</h3>
              <p className="text-xs text-text-muted">公共课（英语+政治）+ 专业课（论文+讲义）双线并进，共约24周</p>
            </div>
          </div>

          {/* 四阶段卡片概览 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {[
              { icon: BookOpen, title: '基础夯实', period: '7月中-8月底', weeks: '7周', color: 'blue', desc: '公共课一轮 + 论文通读' },
              { icon: Globe, title: '强化提升', period: '9月-10月中', weeks: '6周', color: 'teal', desc: '真题阶段 + Tier 1-2精读' },
              { icon: PenTool, title: '真题实战', period: '10月下-11月底', weeks: '6周', color: 'purple', desc: '全真模拟 + 论述题训练' },
              { icon: Zap, title: '全力冲刺', period: '12月-考前', weeks: '4周', color: 'orange', desc: '肖四背诵 + 模拟面试' },
            ].map((p, i) => (
              <div key={i} className={`p-5 rounded-2xl border ${colorClass[p.color].border} ${colorClass[p.color].bg} backdrop-blur-sm text-center`}>
                <div className={`w-10 h-10 rounded-xl ${colorClass[p.color].bg} border ${colorClass[p.color].border} flex items-center justify-center mx-auto mb-3`}>
                  <p.icon size={18} className={colorClass[p.color].text} />
                </div>
                <h4 className="text-sm font-bold text-text-primary mb-1">{p.title}</h4>
                <p className={`text-[11px] ${colorClass[p.color].text} font-semibold mb-1`}>{p.period}</p>
                <p className="text-[10px] text-text-muted">{p.desc}</p>
                <div className={`mt-3 mx-auto w-12 h-1 rounded-full ${colorClass[p.color].bar}`} />
              </div>
            ))}
          </div>

          {/* 详细阶段展开 */}
          <div className="space-y-4">
            {phases.map((p, i) => {
              const c = colorClass[p.color];
              return (
                <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`rounded-2xl border ${c.border} ${c.bg} backdrop-blur-sm overflow-hidden`}>
                  <div className="px-6 py-4 flex items-center gap-3 border-b border-white/[0.04]">
                    <span className={`text-2xl font-black ${c.text}`}>0{i + 1}</span>
                    <div>
                      <h4 className="text-sm font-bold text-text-primary">{p.title}</h4>
                      <p className="text-[11px] text-text-muted">{p.period}</p>
                    </div>
                    <div className="ml-auto text-right">
                      <span className={`text-[10px] px-2 py-1 rounded-full border ${c.badge} font-medium`}>{p.tasks.length} 个任务</span>
                    </div>
                  </div>
                  {/* Goal bar */}
                  <div className="px-6 py-2.5 border-b border-white/[0.03] bg-white/[0.01]">
                    <div className="flex items-center gap-2">
                      <Target size={11} className={c.text} />
                      <span className="text-[11px] text-text-secondary">🎯 <span className="font-semibold text-text-primary">阶段目标：</span>{p.goal}</span>
                    </div>
                  </div>
                  {/* Tasks */}
                  <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {p.tasks.map((t, j) => (
                      <div key={j} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-colors duration-200">
                        <div className={`w-6 h-6 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center shrink-0 mt-0.5`}><CheckCircle2 size={12} className={c.text} /></div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${tagColors[t.tag] || tagColors['专业课']}`}>{t.tag}</span>
                            <span className={`text-[10px] font-bold ${c.text}`}>{t.days}</span>
                          </div>
                          <p className="text-xs text-text-secondary leading-relaxed">{t.content}</p>
                          {t.sub && <p className="text-[10px] text-text-muted mt-1 leading-relaxed italic">{t.sub}</p>}
                          {t.papers && t.papers.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1.5">
                              {t.papers.slice(0, 3).map((pf, k) => (
                                <a key={k} href={papersPath(pf)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] text-accent-cyan/70 hover:text-accent-cyan px-1.5 py-0.5 rounded-md bg-accent-cyan/[0.04] border border-accent-cyan/10 hover:border-accent-cyan/20 transition-all">
                                  <FileText size={9} />
                                  <span className="truncate max-w-[100px]">{pf.replace(/_.*\.pdf$/, '').slice(0, 10)}…</span>
                                  <ExternalLink size={8} />
                                </a>
                              ))}
                              {t.papers.length > 3 && <span className="text-[10px] text-text-muted self-center">+{t.papers.length - 3}篇</span>}
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

        {/* ===== 每日作息 ===== */}
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent-green/10 border border-accent-green/20 flex items-center justify-center"><Clock size={18} className="text-accent-green" /></div>
            <div>
              <h3 className="text-xl font-black text-text-primary">每日作息参考</h3>
              <p className="text-xs text-text-muted">高效备考节奏 · 全天候脱产学习版</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {weeklySchedule.map((d, i) => (
              <div key={i} className="flex-1 min-w-[170px] p-4 rounded-2xl border border-white/[0.06] bg-white/[0.015] backdrop-blur-sm">
                <h4 className="text-xs font-bold text-text-primary mb-3 pb-2 border-b border-white/[0.05]">{d.day}</h4>
                <div className="space-y-2.5">
                  {d.slots.map((s, j) => (
                    <div key={j} className="text-left">
                      <p className={`text-[9px] font-semibold mb-0.5 ${colorClass[s.color].text}`}>{s.time}</p>
                      <p className="text-[10px] text-text-secondary leading-relaxed">{s.task}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ===== 三大考点速记 ===== */}
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent-rose/10 border border-accent-rose/20 flex items-center justify-center"><Zap size={18} className="text-accent-rose" /></div>
            <div><h3 className="text-xl font-black text-text-primary">三大核心考点速记卡</h3><p className="text-xs text-text-muted">面试及论述题必备知识模块</p></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {keyConcepts.map((k, i) => {
              const c = colorClass[k.color];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.4, delay: i * 0.1 }} className={`rounded-2xl border ${c.border} ${c.bg} backdrop-blur-sm p-6 flex flex-col`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${c.badge}`}>{k.mentor}</span>
                    {k.title.includes('⭐') && <span className="text-[10px] text-accent-orange">⭐新</span>}
                  </div>
                  <h4 className="text-lg font-black text-text-primary mb-4">{k.title}</h4>
                  <div className="space-y-2.5 flex-1">
                    {k.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2"><span className={`w-1 h-1 rounded-full mt-[6px] shrink-0 ${c.text}`} /><span className="text-xs text-text-secondary leading-relaxed">{item}</span></div>
                    ))}
                  </div>
                  {k.papers.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-white/[0.05]">
                      {k.papers.map((pf, j) => (
                        <a key={j} href={papersPath(pf)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[11px] text-accent-cyan hover:text-accent-cyan/80 transition-colors"><FileText size={10} /><span>{pf.replace(/_.*\.pdf$/, '')}</span><ExternalLink size={9} className="opacity-50" /></a>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ===== 面试策略 ===== */}
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center"><Quote size={18} className="text-accent-purple" /></div>
            <div><h3 className="text-xl font-black text-text-primary">面试策略与答题黄金公式</h3><p className="text-xs text-text-muted">差异化竞争策略 · 助你脱颖而出</p></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-accent-purple/15 bg-accent-purple/[0.02] backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4"><Lightbulb size={15} className="text-accent-purple" /><span className="text-sm font-bold text-text-primary">5 条决胜面试策略</span></div>
              <div className="space-y-3">
                {interviewTips.map((t, i) => (
                  <div key={i} className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center shrink-0 mt-0.5"><span className="text-[11px] font-bold text-accent-purple">{i + 1}</span></div><p className="text-xs text-text-secondary leading-relaxed pt-0.5">{t}</p></div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-accent-cyan/15 bg-accent-cyan/[0.02] backdrop-blur-sm flex flex-col">
              <div className="flex items-center gap-2 mb-4"><Star size={15} className="text-accent-cyan" /><span className="text-sm font-bold text-text-primary">答题黄金公式</span></div>
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
                <div className="flex items-center gap-3 flex-wrap justify-center">
                  {[
                    { label: '导师观点', color: 'bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan' },
                    { label: '两篇以上论文串联', color: 'bg-accent-blue/10 border-accent-blue/20 text-accent-blue' },
                    { label: '形成个人见解', color: 'bg-accent-purple/10 border-accent-purple/20 text-accent-purple' },
                  ].map((g, i, arr) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`px-4 py-2.5 rounded-xl border ${g.color} text-xs font-bold`}>{g.label}</div>
                      {i < arr.length - 1 && <span className="text-text-muted text-lg font-bold">+</span>}
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-xl bg-deep-850/50 border border-white/[0.06] w-full text-left">
                  <p className="text-[11px] text-text-muted leading-relaxed font-mono">
                    【示例】"霍巍教授在《三星堆考古与中国古史传承体系》中运用二重证据法，揭示三星堆遗存与古蜀帝系谱系的对应关系；同时，在《殷墟传统之外》一文中，他进一步论证了'西南样本'的学术史意义。综合来看，三星堆的意义在于______"<br /><br />
                    <span className="text-accent-cyan">→ 导师观点 + 两篇论文串联 + 形成个人见解</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== 底部总结 ===== */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5 }} className="p-6 rounded-2xl border border-accent-cyan/20 bg-gradient-to-r from-accent-cyan/[0.04] via-accent-blue/[0.03] to-accent-purple/[0.02] backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center"><TrendingUp size={18} className="text-accent-cyan" /></div>
              <div>
                <h4 className="text-sm font-bold text-text-primary">执行要点</h4>
                <p className="text-xs text-text-muted">每日8:00-21:00高效学习 · 每周日休息半天 · 每篇论文300字总结 · 黄金公式贯穿始终 · 肖四到手即全力背诵</p>
              </div>
            </div>
            <a href="https://soren-tao.github.io/kaoyan-resume/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-cyan/10 border border-accent-cyan/25 text-xs font-bold text-accent-cyan hover:bg-accent-cyan/20 transition-all duration-300"><ExternalLink size={13} />打开完整论文库</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
