import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Data Analysis Intern",
    company: "Cognifyz Technologies",
    period: "2024",
    type: "Data Science",
    color: "from-primary/10 to-secondary/5",
    border: "border-primary/20",
    dot: "bg-primary",
    badgeColor: "bg-lavender-light text-primary",
    description:
      "Performed exploratory data analysis, built visualizations and predictive models to deliver actionable business insights.",
    skills: ["Python", "Pandas", "Power BI", "EDA", "Visualization", "Predictive Modeling"],
  },
  {
    role: "Cybersecurity Intern",
    company: "Honeywell",
    period: "2023",
    type: "Security",
    color: "from-secondary/10 to-accent/5",
    border: "border-secondary/20",
    dot: "bg-secondary",
    badgeColor: "bg-sky-light text-secondary",
    description:
      "Conducted threat and vulnerability analysis, applied security best practices to identify and resolve potential system weaknesses.",
    skills: ["Threat Analysis", "Vulnerability Assessment", "Security Protocols", "Risk Management"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-background" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-poppins font-semibold text-sm text-primary uppercase tracking-widest">Work History</span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl mt-2 text-foreground">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 rounded-full gradient-primary-bg mx-auto mt-4" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary/60 to-secondary/30 rounded-full hidden sm:block" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                custom={i}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                className="sm:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 top-6 w-5 h-5 rounded-full ${exp.dot} border-4 border-background shadow-soft hidden sm:block`} />

                <motion.div
                  whileHover={{ x: 4 }}
                  className={`card-glass rounded-3xl p-7 border ${exp.border} shadow-soft bg-gradient-to-br ${exp.color}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-2xl gradient-primary-bg flex items-center justify-center flex-shrink-0 shadow-soft`}>
                        <Briefcase className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-poppins font-bold text-lg text-foreground">{exp.role}</h3>
                        <p className="font-inter font-semibold text-primary">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-poppins font-semibold ${exp.badgeColor}`}>
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-poppins font-semibold bg-muted text-muted-foreground">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="font-inter text-muted-foreground text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="px-2.5 py-1 rounded-full bg-card/80 border border-border text-xs font-poppins font-medium text-foreground/80">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
