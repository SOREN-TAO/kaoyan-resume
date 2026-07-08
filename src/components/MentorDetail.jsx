import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Lightbulb, Star, ChevronDown, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';

const papersPath = (filename) => `/papers/${encodeURIComponent(filename)}`;

const mentors = [
  {
    id: 'wu',
    name: '吴永强',
    color: 'cyan',
    colorHex: '#22d3ee',
    title: '美术史论与艺术批评',
    school: '四川大学艺术学院教授',
    keywords: ['审美现代性', '艺术批评史', '中国画传统', '西南油画', "'85美术思潮"],
    papers: 7,
    papersList: [
      { title: '对审美现代性的知识论考察', file: '对审美现代性的知识论考察_吴永强.pdf' },
      { title: '作为艺术社会史镜像的20世纪中国艺术批评史——论陈旭光艺术批评史写作的整体观', file: '作为艺术社会史镜像的20世纪中国艺术批评史——论陈旭光艺术批评史写作的整体观_吴永强.caj' },
      { title: '西南油画与当代油画的源流与现状', file: '西南油画与当代油画的源流与现状_吴永强.caj' },
      { title: '论书法艺术表现力的内涵', file: '论书法艺术表现力的内涵_吴永强.pdf' },
      { title: '转益多师臻化境——林木谈张大千的艺术观与中国绘画传统', file: '转益多师臻化境__借古开今知大千——林木谈张大千的艺术观与中国绘画传统_吴永强.pdf' },
      { title: '传媒中的文本与文本中的思潮——《美术》杂志与\'85美术思潮', file: '传媒中的文本与文本中的思潮——《美术》杂志与\'85美术思潮.pdf' },
      { title: '审美现代性：当代艺术与现代传媒互动关系的表达', file: '审美现代性：当代艺术与现代传媒互动关系的表达_吴永强.caj' },
      { title: '用情笔墨中，放怀笔墨外', file: '用情笔墨中,放怀笔墨外_吴永强.caj' },
    ],
    coreConcept: {
      title: '审美现代性（最核心理论关键词）',
      items: [
        '波德莱尔原初定义："现代性就是过渡、短暂、偶然"',
        '卡林内斯库"五副面孔"：现代主义、先锋派、颓废、媚俗艺术、后现代主义',
        '三重辩证对立：对立于传统 / 对立于资产阶级现代性 / 对立于自身',
        '独创"悬置的表现主义"：表现主义处于形式主义与功能主义的边缘地带',
      ],
    },
    framework: ['理论基石：审美现代性研究 + 艺术批评方法论', '历史梳理：西南油画发展谱系 + 20世纪艺术批评史', '个案研究：书法艺术本体论 + 张大千与中国画传统'],
    mustRead: [
      { title: '陈旭光《中西诗学的汇通》', file: null },
      { title: '福柯《词与物》', file: null },
      { title: '乔纳森·克拉里《知觉的悬置》', file: null },
    ],
    examTopics: ['论述审美现代性的内涵、悖论及当代表现', '西南油画从"伤痕美术"到当代的演进逻辑', '如何理解艺术批评史写作中的"整体观"'],
  },
  {
    id: 'huo',
    name: '霍巍',
    color: 'teal',
    colorHex: '#14b8a6',
    title: '考古学与中华文明',
    school: '四川大学历史文化学院教授（长江学者）',
    keywords: ['三星堆', '古蜀文明', '二重证据法', '吐蕃金银器', '昆仑文化'],
    papers: 5,
    papersList: [
      { title: '三星堆考古与中国古史传承体系', file: '三星堆考古与中国古史传承体系_霍巍.pdf' },
      { title: '殷墟传统之外：三星堆早期发掘与早期中国考古学', file: '殷墟传统之外：三星堆早期发掘与早期中国考古学_霍巍.pdf' },
      { title: '广汉三星堆青铜文化与古代西亚文明', file: '广汉三星堆青铜文化与古代西亚文明_霍巍.pdf' },
      { title: '昆仑文化与中华文明', file: '昆仑文化与中华文明_霍巍.pdf' },
      { title: '吐蕃系统金银器研究', file: '吐蕃系统金银器研究_霍巍.pdf' },
    ],
    coreConcept: {
      title: '三星堆（第一研究方向）',
      items: [
        '关键年代：1927燕道诚发现→1934葛维汉发掘→1986两祭祀坑→2020新六坑',
        '核心器物：青铜大立人、神树、金杖、金面罩、纵目面具、顶尊跪坐人像',
        '古蜀世系：蚕丛→柏灌→鱼凫→杜宇→开明，与黄帝-昌意-颛顼"嫁接"',
        '学术贡献：突破"殷墟范式"，建立中国考古学多元样本观——"西南样本"',
      ],
    },
    framework: ['三星堆与古蜀文明：二重证据法 + 西亚文明比较', '青藏高原考古：吐蕃金银器系统研究', '昆仑与丝路：昆仑文化概念演变 + 丝路文化背景'],
    mustRead: [
      { title: '霍巍《战国秦汉时期中国西南的对外文化交流》', file: null },
      { title: '徐坚《暗流——安阳之外的中国考古学传统》', file: null },
      { title: '齐东方《唐代金银器研究》', file: null },
    ],
    examTopics: ['三星堆考古如何改写中国上古史研究格局？', '二重证据法在三星堆研究中的运用与局限', '科技手段对当代考古学的机遇和挑战'],
  },
  {
    id: 'chen',
    name: '陈默',
    color: 'blue',
    colorHex: '#3b82f6',
    title: '中国近现代史',
    school: '四川大学历史文化学院副教授',
    keywords: ['抗日战争', '国民党军队', '正面战场', '舆论传媒', '派系政治'],
    papers: 3,
    papersList: [
      { title: '新中国成立以来中国大陆学界关于全面抗战时期国民党军队研究述评', file: '新中国成立以来中国大陆学界关于全面抗战时期国民党军队研究述评_陈默.pdf' },
      { title: '观棋有语——1941年国统区舆论界对苏德战争的研判和评说', file: '观棋有语_1941年国统区舆论界对苏德战争的研判和评说_陈默.pdf' },
      { title: '抗日战争研究的新史料与新视角（笔谈）', file: '抗日战争研究的新史料与新视角（笔谈）_瞿骏.pdf' },
    ],
    coreConcept: {
      title: '⭐ 战时军政协作（新论文重点）',
      items: [
        '案例一·鄂东(人事权)：第五战区(桂系) vs 湖北省府(陈诚)，程汝怀去留之争',
        '案例二·鄂北(军粮)：第五战区自设征粮机构、超额摊派，陈诚抗辩至蒋介石处',
        '核心发现：军队"派系化"+"军人治政"→军、政严重对立',
        '理论贡献：派系因素是战时地方治理困境的根本原因',
      ],
    },
    framework: ['抗战军事史：组织架构/指挥/编制/装备/后勤/兵役/军政关系', '舆论与传媒史：原创概念"第三种权力"', '学术史三阶段：政治批判期→学术化→深化拓展期'],
    mustRead: [
      { title: '陈默《战时地方的军、政对立》(《抗日战争研究》2016)', file: null },
      { title: '国民党军队研究述评论文', file: null },
      { title: '抗战研究新史料与新视角笔谈', file: '抗日战争研究的新史料与新视角（笔谈）_瞿骏.pdf' },
    ],
    examTopics: ['评述抗战正面战场研究的成就与不足', '苏德战争对中国舆论界的影响', '战时地方军、政对立的表现、成因及启示'],
  },
  {
    id: 'li',
    name: '李艳 等',
    color: 'purple',
    colorHex: '#8b5cf6',
    title: '影视与文化综合研究',
    school: '四川大学艺术学院教授 / 博士',
    keywords: ['影视批评', '西藏电影', '灾难类型片', '道教舞蹈', '明清文化史'],
    papers: 7,
    papersList: [
      { title: '西藏题材电影类型的不同表达——以《阿拉姜色》《冈仁波齐》为例', file: '西藏题材电影类型的不同表达——以《阿拉姜色》《冈仁波齐》为例.pdf' },
      { title: '《唐山大地震》的反灾难类型片书写', file: '《唐山大地震》的反灾难类型片书写.pdf' },
      { title: '产业化语境下文旅演艺剧演艺空间的变革与反思', file: '产业化语境下文旅演艺剧演艺空间的变革与反思.pdf' },
      { title: '中华传统文化的雅俗融通——以道教舞蹈为例', file: '中华传统文化的雅俗融通——以道教舞蹈为例.pdf' },
      { title: '明清女教类善书传播与戏曲中女性形象研究', file: '明清女教类善书传播与戏曲中女性形象研究.pdf' },
      { title: '明清绘画的商业化倾向研究', file: '明清绘画的商业化倾向研究_冯明君.pdf' },
      { title: '"80后"艺术家与中国当代艺术', file: '"80后"艺术家与中国当代艺术.pdf' },
    ],
    coreConcept: {
      title: '跨学科文化研究方法',
      items: [
        '类型电影分析：类型范式→反类型策略→文化语境改写',
        '空间三元理论（列斐伏尔）：空间实践/空间表象/表征性空间',
        '"他者"理论：后殖民批评视角下的汉/藏导演影像比较',
        '大传统/小传统（雷德菲尔德）：精英文化与民间文化互动',
      ],
    },
    framework: ['影视批评：西藏题材电影 + 灾难类型片的本土化改写', '戏剧戏曲：文旅演艺空间变革 + 明清女教与戏曲', '文化研究：道教舞蹈雅俗融通 + 80后艺术家代际分析'],
    mustRead: [
      { title: '列斐伏尔《空间的生产》', file: null },
      { title: '萨义德《东方主义》', file: null },
      { title: '雷德菲尔德"大传统与小传统"理论', file: null },
    ],
    examTopics: ['西藏形象的影像建构：从"他者"到"自我"', '灾难电影的"反类型"策略与中国伦理片传统', '明清商品经济发展对艺术创作的影响'],
  },
];

const colorClasses = {
  cyan:    { border: 'border-accent-cyan/30', bg: 'bg-accent-cyan/[0.03]', text: 'text-accent-cyan', badge: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20', line: 'bg-accent-cyan/30' },
  teal:    { border: 'border-accent-teal/30', bg: 'bg-accent-teal/[0.03]', text: 'text-accent-teal', badge: 'bg-accent-teal/10 text-accent-teal border-accent-teal/20', line: 'bg-accent-teal/30' },
  blue:    { border: 'border-accent-blue/30', bg: 'bg-accent-blue/[0.03]', text: 'text-accent-blue', badge: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20', line: 'bg-accent-blue/30' },
  purple:  { border: 'border-accent-purple/30', bg: 'bg-accent-purple/[0.03]', text: 'text-accent-purple', badge: 'bg-accent-purple/10 text-accent-purple border-accent-purple/20', line: 'bg-accent-purple/30' },
};

function PaperLink({ file, title }) {
  if (!file) {
    return (
      <span className="flex items-center gap-2 text-xs text-text-muted py-1 px-2 opacity-50">
        <span className="text-[10px] text-text-muted shrink-0">--</span>
        <span className="flex-1 leading-relaxed">{title}</span>
        <span className="text-[9px] text-text-muted shrink-0">待添加</span>
      </span>
    );
  }
  return (
    <a
      href={papersPath(file)}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-xs text-text-secondary hover:text-accent-cyan py-1 px-2 rounded-lg hover:bg-white/[0.04] transition-all duration-200 group/paper"
      title={`打开: ${title}`}
    >
      <span className="text-[10px] text-text-muted opacity-50 shrink-0">PDF</span>
      <span className="flex-1 leading-relaxed group-hover/paper:text-text-primary transition-colors">{title}</span>
      <ExternalLink size={10} className="shrink-0 opacity-0 group-hover/paper:opacity-60 text-accent-cyan transition-all duration-200" />
    </a>
  );
}

export default function MentorDetail() {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded(expanded === id ? null : id);

  return (
    <section id="mentors" className="relative py-24 px-6">
      <div className="max-w-[1700px] mx-auto">
        <SectionHeader
          tag="Mentor Deep Dive"
          title="五位导师研究方向深度拆解"
          subtitle="点选展开查看各导师学术框架、核心概念、论文清单及押题方向"
          accentClass="text-accent-teal"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {mentors.map((m, i) => {
            const c = colorClasses[m.color];
            const isOpen = expanded === m.id;

            return (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`rounded-2xl border ${c.border} ${c.bg} backdrop-blur-sm overflow-hidden transition-all duration-500 ${isOpen ? 'shadow-lg' : ''}`}
              >
                {/* Header - clickable */}
                <button
                  onClick={() => toggle(m.id)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 group"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-lg font-black text-text-primary`}>{m.name}</span>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${c.badge}`}>
                        {m.title}
                      </span>
                    </div>
                    <p className="text-xs text-text-muted mb-2">{m.school}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {m.keywords.map((k) => (
                        <span key={k} className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.03] text-text-muted border border-white/[0.06]">
                          {k}
                        </span>
                      ))}
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.02] text-text-muted">
                        📄 {m.papers}篇
                      </span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2"
                  >
                    <ChevronDown size={18} className="text-text-muted group-hover:text-text-secondary transition-colors" />
                  </motion.div>
                </button>

                {/* Expandable content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-5">
                        {/* Core Concept */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Lightbulb size={14} className={c.text} />
                            <span className={`text-xs font-bold ${c.text} uppercase tracking-wider`}>{m.coreConcept.title}</span>
                          </div>
                          <div className="space-y-2">
                            {m.coreConcept.items.map((item, j) => (
                              <div key={j} className="flex items-start gap-2.5">
                                <span className={`w-1 h-1 rounded-full mt-[7px] shrink-0 ${c.line}`} />
                                <span className="text-xs text-text-secondary leading-relaxed">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Papers list */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <BookOpen size={14} className={c.text} />
                            <span className={`text-xs font-bold ${c.text} uppercase tracking-wider`}>论文清单（点击打开PDF）</span>
                          </div>
                          <div className="space-y-0.5">
                            {m.papersList.map((p, j) => (
                              <PaperLink key={j} file={p.file} title={p.title} />
                            ))}
                          </div>
                        </div>

                        {/* Framework */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <BookOpen size={14} className={c.text} />
                            <span className={`text-xs font-bold ${c.text} uppercase tracking-wider`}>学术框架</span>
                          </div>
                          <div className="space-y-1.5">
                            {m.framework.map((f, j) => (
                              <div key={j} className="text-xs text-text-secondary pl-4 border-l-2 border-white/[0.06] py-0.5">
                                {f}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Must-read + Exam topics */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Must read */}
                          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                            <div className="flex items-center gap-2 mb-2.5">
                              <Star size={13} className="text-accent-orange" />
                              <span className="text-[11px] font-bold text-accent-orange uppercase tracking-wider">推荐必读</span>
                            </div>
                            {m.mustRead.map((r, j) => (
                              <div key={j}>
                                {r.file ? (
                                  <a
                                    href={papersPath(r.file)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-[11px] text-text-secondary leading-relaxed mb-1 hover:text-accent-cyan transition-colors duration-200 group/mr px-1 py-0.5 rounded hover:bg-white/[0.03]"
                                  >
                                    <ExternalLink size={10} className="text-text-muted shrink-0 group-hover/mr:text-accent-cyan transition-colors" />
                                    <span>{r.title}</span>
                                  </a>
                                ) : (
                                  <span className="flex items-center gap-1.5 text-[11px] text-text-muted leading-relaxed mb-1 px-1 py-0.5 opacity-50">
                                    <ExternalLink size={10} className="shrink-0" />
                                    <span>{r.title}</span>
                                    <span className="text-[9px]">待添加</span>
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>

                          {/* Exam topics */}
                          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                            <div className="flex items-center gap-2 mb-2.5">
                              <Lightbulb size={13} className={c.text} />
                              <span className={`text-[11px] font-bold ${c.text} uppercase tracking-wider`}>押题方向</span>
                            </div>
                            {m.examTopics.map((e, j) => (
                              <div key={j} className="text-[11px] text-text-secondary leading-relaxed mb-1">
                                {j + 1}. {e}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
