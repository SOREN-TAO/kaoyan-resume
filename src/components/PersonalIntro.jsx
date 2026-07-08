import { motion } from 'framer-motion';
import {
  User, MapPin, Calendar, GraduationCap, Target, BookOpen,
  Quote,
} from 'lucide-react';

const highlights = [
  { icon: MapPin, label: '坐标', value: '成都 · 四川大学' },
  { icon: Calendar, label: '目标', value: '2026 考研上岸' },
  { icon: GraduationCap, label: '方向', value: '美术史论 / 考古学 / 近现代史' },
  { icon: BookOpen, label: '状态', value: '全力备考中' },
];

const skills = [
  { name: '美术史论与批评', level: 85, color: 'cyan' },
  { name: '考古学方法论', level: 75, color: 'teal' },
  { name: '近现代史研究', level: 70, color: 'blue' },
  { name: '影视文化分析', level: 80, color: 'purple' },
  { name: '文献综述写作', level: 82, color: 'indigo' },
];

const colorBar = {
  cyan: 'bg-accent-cyan',
  teal: 'bg-accent-teal',
  blue: 'bg-accent-blue',
  purple: 'bg-accent-purple',
  indigo: 'bg-accent-indigo',
};

const colorText = {
  cyan: 'text-accent-cyan',
  teal: 'text-accent-teal',
  blue: 'text-accent-blue',
  purple: 'text-accent-purple',
  indigo: 'text-accent-indigo',
};

export default function PersonalIntro() {
  return (
    <section id="intro" className="relative py-24 px-6">
      <div className="max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          {/* Left: Avatar + basic info card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col"
          >
            <div className="flex-1 p-8 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm flex flex-col items-center text-center relative overflow-hidden group hover:border-white/[0.15] transition-all duration-500">
              {/* Background glow */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-accent-cyan/[0.04] blur-[80px] pointer-events-none group-hover:bg-accent-cyan/[0.07] transition-colors duration-700" />

              <div className="relative z-10">
                {/* Avatar - real photo */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="w-32 h-32 rounded-3xl mx-auto mb-6 relative overflow-hidden border-2 border-white/[0.12] shadow-2xl shadow-accent-cyan/10 group-hover:border-accent-cyan/30 transition-all duration-500"
                >
                  <img
                    src="/avatar.jpg"
                    alt="陶帅的不行"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </motion.div>

                {/* Name */}
                <h2 className="text-2xl font-black text-text-primary mb-1 tracking-tight">
                  陶帅的不行
                </h2>
                <p className="text-sm text-accent-cyan font-medium mb-6">2026 考研备战 · 四川大学</p>

                {/* Quote */}
                <div className="relative mb-8 px-6">
                  <Quote size={20} className="text-accent-cyan/20 absolute -top-1 -left-0" />
                  <p className="text-sm text-text-secondary leading-relaxed italic">
                    以讲义打基础，以论文提深度。<br />
                    在学术的星海中寻找属于自己的研究坐标。
                  </p>
                </div>

                {/* Basic info grid */}
                <div className="grid grid-cols-2 gap-3 w-full">
                  {highlights.map((h, i) => (
                    <motion.div
                      key={h.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                      className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-left hover:bg-white/[0.06] transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <h.icon size={13} className="text-accent-cyan/60" />
                        <span className="text-[10px] text-text-muted uppercase tracking-wider">{h.label}</span>
                      </div>
                      <p className="text-xs font-semibold text-text-primary leading-tight">{h.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio + skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 flex flex-col gap-6"
          >
            {/* Bio card */}
            <div className="flex-1 p-8 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm hover:border-white/[0.15] transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-accent-purple/[0.03] blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-xl bg-accent-cyan/10 flex items-center justify-center">
                    <Target size={15} className="text-accent-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">个人介绍</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    你好，我是<strong className="text-text-primary">陶帅的不行</strong>——一个正在全力备战2026年考研的学术探索者。
                    目前聚焦于<strong className="text-accent-cyan">美术史论与艺术批评</strong>、<strong className="text-accent-teal">考古学与中华文明</strong>、
                    <strong className="text-accent-blue">中国近现代史</strong>以及<strong className="text-accent-purple">影视与文化综合研究</strong>四大方向。
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    通过对5位核心导师（吴永强、霍巍、陈默、李艳、吕红亮）30余篇论文的深度研读，以及5套课程讲义的系统学习，
                    构建了约<strong className="text-text-primary">120万字</strong>的完整学术知识图谱，覆盖6大学科门类。
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    独创"<strong className="text-accent-cyan">三维一体</strong>"学习法：讲义筑基 → 论文提深 → 跨学科横向串联，
                    将分散的研究成果整合为具备内在逻辑的应试知识体系。当前正处于第三阶段整合冲刺期，
                    重点突破审美现代性、三星堆考古、战时军政协作三大高频考点。
                  </p>
                </div>
              </div>
            </div>

            {/* Skills card */}
            <div className="p-8 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm hover:border-white/[0.15] transition-all duration-500 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent-blue/[0.03] blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                    <BookOpen size={15} className="text-accent-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">研究方向掌握度</h3>
                </div>
                <div className="space-y-4">
                  {skills.map((s, i) => (
                    <motion.div
                      key={s.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-text-secondary">{s.name}</span>
                        <span className={`text-xs font-bold ${colorText[s.color]}`}>{s.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true, margin: '-30px' }}
                          transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
                          className={`h-full rounded-full ${colorBar[s.color]}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
