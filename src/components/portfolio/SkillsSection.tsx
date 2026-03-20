import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming",
    color: "from-primary/15 to-primary/5",
    border: "border-primary/20",
    badge: "bg-lavender-light text-primary",
    skills: ["Python", "R", "SQL", "SAS", "Java", "C", "HTML", "CSS", "PHP"],
  },
  {
    title: "Data Science",
    color: "from-secondary/15 to-secondary/5",
    border: "border-secondary/20",
    badge: "bg-sky-light text-secondary",
    skills: ["Exploratory Data Analysis", "Statistical Analysis", "Machine Learning"],
  },
  {
    title: "Time Series",
    color: "from-accent/15 to-accent/5",
    border: "border-accent/20",
    badge: "bg-peach-light text-accent",
    skills: ["SARIMA", "LSTM", "Forecasting"],
  },
  {
    title: "AI / NLP",
    color: "from-primary/15 to-accent/5",
    border: "border-primary/20",
    badge: "bg-lavender-light text-primary",
    skills: ["NLTK", "spaCy", "Transformers", "LLM Basics"],
  },
  {
    title: "Libraries",
    color: "from-secondary/10 to-primary/5",
    border: "border-secondary/20",
    badge: "bg-sky-light text-secondary",
    skills: ["Scikit-learn", "Pandas", "NumPy", "Statsmodels"],
  },
  {
    title: "Tools & Platforms",
    color: "from-accent/10 to-secondary/5",
    border: "border-accent/20",
    badge: "bg-peach-light text-accent",
    skills: ["Power BI", "Tableau", "Excel", "MySQL", "Jupyter", "Colab", "RStudio", "VS Code"],
  },
  {
    title: "Big Data",
    color: "from-primary/10 to-secondary/10",
    border: "border-primary/20",
    badge: "bg-lavender-light text-primary",
    skills: ["Hadoop", "Apache Spark", "REST APIs"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-poppins font-semibold text-sm text-primary uppercase tracking-widest">What I Know</span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl mt-2 text-foreground">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 rounded-full gradient-primary-bg mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`rounded-2xl p-6 bg-gradient-to-br ${cat.color} border ${cat.border} shadow-soft hover:shadow-card transition-all duration-300`}
            >
              <h3 className="font-poppins font-bold text-base text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-xs font-poppins font-semibold ${cat.badge}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
