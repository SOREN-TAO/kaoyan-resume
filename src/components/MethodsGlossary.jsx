import { motion } from 'framer-motion';
import { Beaker, Quote, Lightbulb } from 'lucide-react';
import SectionHeader from './SectionHeader';

const methods = [
  { mentor: '霍巍', method: '二重证据法', desc: '地下出土实物 ↔ 纸上文献记载，互证研究', color: 'teal' },
  { mentor: '霍巍', method: '文化因素分析法', desc: '形态分类→年代序列→本土/外来因素辨别', color: 'teal' },
  { mentor: '霍巍', method: '跨文明比较研究', desc: '控制变量、同异比较、传播路径推测', color: 'teal' },
  { mentor: '吴永强', method: '知识论考察', desc: '福柯"知识考古学"、视觉文化研究', color: 'cyan' },
  { mentor: '吴永强', method: '代际分析方法', desc: '按出生年代划分艺术家群体，比较风格差异', color: 'cyan' },
  { mentor: '陈默', method: '学术史综述', desc: '系统检索→分类→评述→空白识别', color: 'blue' },
  { mentor: '陈默', method: '史料批判分析', desc: '档案/日记/文史资料/密报/报刊交叉互证', color: 'blue' },
  { mentor: '陈默', method: '制度史与派系分析', desc: '从军事制度切入，分析派系政治对战时治理的影响', color: 'blue' },
  { mentor: '李艳', method: '类型电影分析', desc: '类型范式→反类型策略→文化语境改写', color: 'purple' },
  { mentor: '李艳', method: '空间三元理论', desc: '列斐伏尔：空间实践/空间表象/表征性空间', color: 'purple' },
  { mentor: '李艳', method: '"他者"理论', desc: '后殖民批评视角下的跨文化影像分析', color: 'purple' },
  { mentor: '李艳', method: '大传统/小传统', desc: '雷德菲尔德：精英文化与民间文化的互动', color: 'purple' },
];

const answerExample = `【示例】问：谈谈你对三星堆考古意义的理解。

答：霍巍教授在《三星堆考古与中国古史传承体系》中，运用王国维
"二重证据法"，将三星堆考古遗存与古史传承体系中的帝系谱系
（黄帝-昌意-颛顼）进行了对应性研究，揭示了考古实物与文献记载
之间可相互印证的"史实素地"。

同时，在《殷墟传统之外》一文中，霍巍教授进一步从学术史角度
论证了1934年葛维汉主持的三星堆首次科学发掘，构成了中国考古学
"安阳殷墟传统"之外的"西南样本"……

答题技巧：导师观点 + 两篇以上论文串联 + 形成个人见解`;

const colorMap = {
  cyan:   { bg: 'bg-accent-cyan/[0.04]', border: 'border-accent-cyan/20', text: 'text-accent-cyan', badge: 'bg-accent-cyan/10 text-accent-cyan/80 border-accent-cyan/20' },
  teal:   { bg: 'bg-accent-teal/[0.04]', border: 'border-accent-teal/20', text: 'text-accent-teal', badge: 'bg-accent-teal/10 text-accent-teal/80 border-accent-teal/20' },
  blue:   { bg: 'bg-accent-blue/[0.04]', border: 'border-accent-blue/20', text: 'text-accent-blue', badge: 'bg-accent-blue/10 text-accent-blue/80 border-accent-blue/20' },
  purple: { bg: 'bg-accent-purple/[0.04]', border: 'border-accent-purple/20', text: 'text-accent-purple', badge: 'bg-accent-purple/10 text-accent-purple/80 border-accent-purple/20' },
};

export default function MethodsGlossary() {
  return (
    <section id="methods" className="relative py-24 px-6">
      <div className="max-w-[1700px] mx-auto">
        <SectionHeader
          tag="Research Methods"
          title="研究方法论速成 & 答题技巧"
          subtitle="掌握导师的研究方法是高分的关键 · 12种方法 + 答题模板"
          accentClass="text-accent-purple"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Methods grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Beaker size={16} className="text-accent-purple" />
              <h3 className="text-sm font-bold text-text-primary">12种研究方法速查</h3>
            </div>
            <div className="space-y-2">
              {methods.map((m, i) => {
                const c = colorMap[m.color];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className={`flex items-center gap-3 p-3 rounded-xl border ${c.border} ${c.bg} hover:bg-white/[0.04] transition-colors duration-300`}
                  >
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg border ${c.badge} shrink-0`}>
                      {m.mentor}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-text-primary">{m.method}</p>
                      <p className="text-[11px] text-text-muted truncate">{m.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Answer template */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-5">
              <Quote size={16} className="text-accent-cyan" />
              <h3 className="text-sm font-bold text-text-primary">答题模板示例</h3>
            </div>
            <div className="flex-1 p-5 rounded-2xl border border-accent-cyan/20 bg-deep-850/50 backdrop-blur-sm font-mono">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb size={14} className="text-accent-cyan" />
                <span className="text-[11px] font-bold text-accent-cyan uppercase tracking-wider">
                  答题技巧：导师观点 + 两篇以上论文串联 + 形成个人见解
                </span>
              </div>
              <pre className="text-[11px] text-text-secondary leading-relaxed whitespace-pre-wrap font-mono">
                {answerExample}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
