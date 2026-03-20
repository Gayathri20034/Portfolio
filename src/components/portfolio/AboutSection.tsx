import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Brain, Database, TrendingUp } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const education = [
  {
    degree: "MSc Data Science and Analytics",
    school: "Jain Deemed to be University",
    year: "2024 – 2026",
    color: "from-primary/20 to-secondary/10",
    dot: "bg-primary",
  },
  {
    degree: "BCA – Bachelor of Computer Applications",
    school: "St Aloysius Deemed to be University",
    year: "2021 – 2024",
    color: "from-secondary/20 to-accent/10",
    dot: "bg-secondary",
  },
  {
    degree: "PUC Science(CBSE)",
    school: "Oxford English School",
    year: "2019 – 2021",
    color: "from-accent/20 to-primary/10",
    dot: "bg-accent",
  },
];

const highlights = [
  { icon: Brain, label: "AI & ML Enthusiast", color: "text-primary bg-lavender-light" },
  { icon: Database, label: "Data-Driven Problem Solver", color: "text-secondary bg-sky-light" },
  { icon: TrendingUp, label: "Analytical Thinker", color: "text-accent bg-peach-light" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="font-poppins font-semibold text-sm text-primary uppercase tracking-widest">About Me</span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl mt-2 text-foreground">
            Know More <span className="gradient-text">About Gayathri</span>
          </h2>
          <div className="w-16 h-1 rounded-full gradient-primary-bg mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Summary + Highlights */}
          <div>
            <motion.div
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="card-glass rounded-3xl p-8 shadow-card border border-white/60 mb-8"
            >
              <h3 className="font-poppins font-bold text-xl mb-4 gradient-text">Professional Summary</h3>
              <p className="font-inter text-muted-foreground leading-relaxed text-base">
                I am a passionate Data Science and Analytics student pursuing my MSc at Jain University.
                With hands-on experience across machine learning, NLP, time series forecasting, and data
                visualization, I thrive on turning complex datasets into meaningful insights.
              </p>
              <p className="font-inter text-muted-foreground leading-relaxed text-base mt-3">
                My journey spans internships in data analysis and cybersecurity, as well as multiple
                real-world projects — from AI-powered PDF chat systems to agricultural AI platforms.
                I am driven by the belief that data-driven solutions can make a real-world difference.
              </p>
            </motion.div>

            {/* Highlights */}
            <div className="grid grid-cols-1 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  custom={i + 2}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeUp}
                  className="flex items-center gap-4 card-glass rounded-2xl px-6 py-4 border border-white/60 shadow-soft"
                  whileHover={{ x: 6 }}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${h.color}`}>
                    <h.icon className="w-5 h-5" />
                  </div>
                  <span className="font-poppins font-semibold text-foreground">{h.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Education Timeline */}
          <div>
            <motion.div
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl gradient-primary-bg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-poppins font-bold text-xl text-foreground">Education</h3>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary/60 via-secondary/40 to-accent/30 rounded-full" />

                <div className="flex flex-col gap-6">
                  {education.map((edu, i) => (
                    <motion.div
                      key={edu.degree}
                      custom={i + 2}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={fadeUp}
                      className="pl-12 relative"
                    >
                      {/* Dot */}
                      <div className={`absolute left-2.5 top-4 w-3 h-3 rounded-full ${edu.dot} border-2 border-white shadow-soft`} />

                      <div className={`card-glass rounded-2xl p-5 border border-white/60 shadow-soft bg-gradient-to-br ${edu.color}`}>
                        <div className="flex items-start justify-between gap-3 flex-wrap">
                          <div>
                            <h4 className="font-poppins font-bold text-base text-foreground">{edu.degree}</h4>
                            <p className="font-inter text-sm text-muted-foreground mt-1">{edu.school}</p>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-card/80 text-xs font-poppins font-semibold text-primary border border-primary/20 whitespace-nowrap">
                            {edu.year}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
