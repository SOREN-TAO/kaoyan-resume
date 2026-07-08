import { motion } from 'framer-motion';
import { Star, Bookmark, FileText, Award, ExternalLink, FileDown } from 'lucide-react';
import SectionHeader from './SectionHeader';

const papersPath = (filename) => `/papers/${encodeURIComponent(filename)}`;

const tiers = [
  {
    level: 'Tier 1',
    label: '必读核心',
    subtitle: '6 篇 · 需全文精读',
    icon: Award,
    color: 'rose',
    gradient: 'from-accent-rose/20 to-accent-orange/5',
    border: 'border-accent-rose/30',
    items: [
      { title: '对审美现代性的知识论考察', author: '吴永强', note: '理论基石，独创"悬置的表现主义"', file: '对审美现代性的知识论考察_吴永强.pdf' },
      { title: '三星堆考古与中国古史传承体系', author: '霍巍', note: '学术权威代表作，二重证据法典范', file: '三星堆考古与中国古史传承体系_霍巍.pdf' },
      { title: '作为艺术社会史镜像的20世纪中国艺术批评史', author: '吴永强', note: '方法论纲领——"整体论"批评史观', file: '作为艺术社会史镜像的20世纪中国艺术批评史——论陈旭光艺术批评史写作的整体观_吴永强.caj' },
      { title: '殷墟传统之外：三星堆早期发掘与早期中国考古学', author: '霍巍', note: '范式创新，"西南样本"的学术史重构', file: '殷墟传统之外：三星堆早期发掘与早期中国考古学_霍巍.pdf' },
      { title: '战时地方的军、政对立——以第五战区与湖北省府为例 ⭐新', author: '陈默', note: '战时军政协作研究典范，派系分析深刻', file: null },
      { title: '艺术概论（2023-2024课程讲义）⭐新', author: '讲义', note: '艺术学基础理论全覆盖，考试必背', file: '2023-2024艺术概论.pdf' },
    ],
  },
  {
    level: 'Tier 2',
    label: '重要补充',
    subtitle: '8 篇 · 建立学科框架',
    icon: Bookmark,
    color: 'orange',
    gradient: 'from-accent-orange/15 to-accent-orange/3',
    border: 'border-accent-orange/25',
    items: [
      { title: '西南油画与当代油画的源流与现状', author: '吴永强', note: '区域美术史完整谱系', file: '西南油画与当代油画的源流与现状_吴永强.caj' },
      { title: '广汉三星堆青铜文化与古代西亚文明', author: '霍巍', note: '中外文明比较方法论', file: '广汉三星堆青铜文化与古代西亚文明_霍巍.pdf' },
      { title: '新中国成立以来学界关于国民党军队研究述评', author: '陈默', note: '学术史全景+研究空白地图', file: '新中国成立以来中国大陆学界关于全面抗战时期国民党军队研究述评_陈默.pdf' },
      { title: '昆仑文化与中华文明', author: '霍巍', note: '文明符号的多民族建构过程', file: '昆仑文化与中华文明_霍巍.pdf' },
      { title: '考古学的第三次科学革命', author: '吕红亮', note: '考古学方法论前沿+理论反思', file: '考古学的第三次科学革命__吕红亮.pdf' },
      { title: '观棋有语——国统区舆论界对苏德战争的研判', author: '陈默', note: '舆论史/全球史视角', file: '观棋有语_1941年国统区舆论界对苏德战争的研判和评说_陈默.pdf' },
      { title: '论书法艺术表现力的内涵', author: '吴永强', note: '传统美学的理论化转型', file: '论书法艺术表现力的内涵_吴永强.pdf' },
      { title: '抗日战争研究的新史料与新视角（笔谈）', author: '瞿骏', note: '抗战史研究前沿方法论', file: '抗日战争研究的新史料与新视角（笔谈）_瞿骏.pdf' },
    ],
  },
  {
    level: 'Tier 3',
    label: '拓展阅读',
    subtitle: '12 篇 · 丰富学科视野',
    icon: FileText,
    color: 'slate',
    gradient: 'from-white/5 to-transparent',
    border: 'border-white/[0.12]',
    items: [
      { title: '转益多师臻化境——林木谈张大千', author: '吴永强', note: '中国画传统的现代转化', file: '转益多师臻化境__借古开今知大千——林木谈张大千的艺术观与中国绘画传统_吴永强.pdf' },
      { title: '吐蕃系统金银器研究', author: '霍巍', note: '44页专题考古深度研究', file: '吐蕃系统金银器研究_霍巍.pdf' },
      { title: '西藏题材电影类型的不同表达', author: '李艳', note: '"他者"理论+影像研究', file: '西藏题材电影类型的不同表达——以《阿拉姜色》《冈仁波齐》为例.pdf' },
      { title: '《唐山大地震》的反灾难类型片书写', author: '李艳', note: '类型电影本土化改写', file: '《唐山大地震》的反灾难类型片书写.pdf' },
      { title: '明清绘画的商业化倾向研究', author: '冯明君', note: '艺术与经济互动', file: '明清绘画的商业化倾向研究_冯明君.pdf' },
      { title: '文旅演艺中的空间变革与文化表达', author: '李艳', note: '空间三元理论的演艺应用', file: '产业化语境下文旅演艺剧演艺空间的变革与反思.pdf' },
      { title: '道教舞蹈的雅俗融通', author: '李艳', note: '大传统小传统理论实证', file: '中华传统文化的雅俗融通——以道教舞蹈为例.pdf' },
      { title: '明清女教与戏曲演剧', author: '李艳', note: '跨学科文化史研究', file: '明清女教类善书传播与戏曲中女性形象研究.pdf' },
      { title: '"85美术思潮"与当代艺术转向', author: '吴永强', note: '视觉文化代际分析', file: '传媒中的文本与文本中的思潮——《美术》杂志与\'85美术思潮.pdf' },
      { title: '审美现代性：当代艺术与现代传媒互动关系的表达', author: '吴永强', note: '审美现代性理论延伸', file: '审美现代性：当代艺术与现代传媒互动关系的表达_吴永强.caj' },
      { title: '用情笔墨中，放怀笔墨外', author: '吴永强', note: '书法与绘画本体论研究', file: '用情笔墨中,放怀笔墨外_吴永强.caj' },
      { title: '"80后"艺术家与中国当代艺术', author: '李艳', note: '代际分析方法实证', file: '"80后"艺术家与中国当代艺术.pdf' },
    ],
  },
];

// 课程讲义单独展示
const coursebooks = [
  { title: '艺术概论', file: '2023-2024艺术概论.pdf', pages: '48页' },
  { title: '西方美学史', file: '2023-2024西方美学史.pdf', pages: '30页' },
  { title: '中国美学史', file: '2023-2024中国美学史.pdf', pages: '17页' },
  { title: '中国美术史', file: '2023-2024中国美术史.pdf', pages: '13页' },
  { title: '西方美术史', file: '2023-2024西方美术史.pdf', pages: '20页' },
];

const badgeStyles = {
  rose: 'bg-accent-rose/10 text-accent-rose border-accent-rose/20',
  orange: 'bg-accent-orange/10 text-accent-orange border-accent-orange/20',
  slate: 'bg-white/[0.04] text-text-muted border-white/[0.1]',
};

const accentText = {
  rose: 'text-accent-rose',
  orange: 'text-accent-orange',
  slate: 'text-text-muted',
};

export default function LiteratureTier() {
  return (
    <section id="literature" className="relative py-24 px-6">
      <div className="max-w-[1700px] mx-auto">
        <SectionHeader
          tag="Must-Read Literature"
          title="必读文献分级清单"
          subtitle="Tier 1（必读核心 6篇）→ Tier 2（重要补充 8篇）→ Tier 3（拓展阅读 12篇）+ 5套课程讲义"
          accentClass="text-accent-orange"
        />

        {/* Course books row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="p-5 rounded-2xl border border-accent-green/20 bg-accent-green/[0.02] backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <FileDown size={14} className="text-accent-green" />
              <span className="text-xs font-bold text-accent-green uppercase tracking-wider">五大课程讲义 · 应试基础</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {coursebooks.map((b, i) => (
                <a
                  key={i}
                  href={papersPath(b.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-green/5 border border-accent-green/15 text-xs font-medium text-text-primary hover:bg-accent-green/10 hover:border-accent-green/30 transition-all duration-300 group/cb"
                >
                  <span>{b.title}</span>
                  <span className="text-[10px] text-text-muted">({b.pages})</span>
                  <ExternalLink size={10} className="text-accent-green/50 opacity-0 group-hover/cb:opacity-100 transition-all duration-200" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          {tiers.map((tier, ti) => (
            <motion.div
              key={tier.level}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: ti * 0.15 }}
              className={`rounded-2xl border ${tier.border} bg-gradient-to-br ${tier.gradient} backdrop-blur-sm overflow-hidden`}
            >
              {/* Tier header */}
              <div className="px-6 py-4 flex items-center gap-3 border-b border-white/[0.04]">
                <div className={`w-9 h-9 rounded-xl ${badgeStyles[tier.color].split(' ')[0]} flex items-center justify-center`}>
                  <tier.icon size={16} className={accentText[tier.color]} />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-sm font-black ${accentText[tier.color]}`}>{tier.level}</span>
                    <span className="text-sm font-bold text-text-primary">{tier.label}</span>
                  </div>
                  <p className="text-[11px] text-text-muted">{tier.subtitle}</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {Array.from({ length: ti === 0 ? 3 : ti === 1 ? 2 : 1 }).map((_, n) => (
                    <Star key={n} size={10} className={accentText[tier.color]} fill="currentColor" />
                  ))}
                </div>
              </div>

              {/* Items */}
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {tier.items.map((item, ii) => {
                  const hasFile = !!item.file;
                  const linkProps = hasFile
                    ? { href: papersPath(item.file), title: `打开本地文件: ${item.title}` }
                    : {};

                  return (
                    <a
                      key={ii}
                      {...linkProps}
                      target={hasFile ? '_blank' : undefined}
                      rel={hasFile ? 'noopener noreferrer' : undefined}
                      className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-300 group/item ${
                        hasFile
                          ? 'hover:bg-white/[0.05] cursor-pointer'
                          : 'opacity-60 cursor-default'
                      }`}
                    >
                      <span className={`text-[10px] font-bold ${accentText[tier.color]} mt-[2px] tabular-nums ${hasFile ? 'opacity-50 group-hover/item:opacity-80' : 'opacity-30'} transition-opacity`}>
                        {String(ii + 1).padStart(2, '0')}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium text-text-primary leading-relaxed group-hover/item:text-accent-cyan transition-colors flex items-start gap-1.5">
                          <span>{item.title}</span>
                          {hasFile ? (
                            <ExternalLink size={10} className="shrink-0 mt-[3px] opacity-0 group-hover/item:opacity-60 transition-all duration-300 text-accent-cyan" />
                          ) : (
                            <span className="text-[9px] text-text-muted mt-[2px] shrink-0">待添加</span>
                          )}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          {item.author && (
                            <span className={`text-[10px] px-1.5 py-[1px] rounded-md ${badgeStyles[tier.color]}`}>
                              {item.author}
                            </span>
                          )}
                          <span className="text-[10px] text-text-muted truncate">{item.note}</span>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
