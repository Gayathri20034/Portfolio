import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart2,
  PieChart,
  Brain,
  TrendingUp,
  MessageSquare,
  Code2,
} from "lucide-react";

const services = [
  {
    icon: BarChart2,
    title: "Data Analysis & EDA",
    description: "Deep exploratory analysis to uncover patterns, trends, and insights from raw datasets.",
    color: "text-primary",
    bg: "bg-lavender-light",
    gradient: "from-primary/10 to-primary/5",
    border: "border-primary/15",
  },
  {
    icon: PieChart,
    title: "Data Visualization & Dashboards",
    description: "Beautiful, interactive dashboards with Power BI, Tableau, and Python to communicate data clearly.",
    color: "text-secondary",
    bg: "bg-sky-light",
    gradient: "from-secondary/10 to-secondary/5",
    border: "border-secondary/15",
  },
  {
    icon: Brain,
    title: "Machine Learning Models",
    description: "End-to-end ML pipelines — from data preprocessing to model training, evaluation, and deployment.",
    color: "text-primary",
    bg: "bg-lavender-light",
    gradient: "from-primary/10 to-secondary/5",
    border: "border-primary/15",
  },
  {
    icon: TrendingUp,
    title: "Time Series Forecasting",
    description: "Accurate temporal predictions using SARIMA, LSTM, and other advanced forecasting methods.",
    color: "text-accent",
    bg: "bg-peach-light",
    gradient: "from-accent/10 to-accent/5",
    border: "border-accent/15",
  },
  {
    icon: MessageSquare,
    title: "AI & NLP Solutions",
    description: "Natural language processing solutions using spaCy, NLTK, Transformers, and LLM-based architectures.",
    color: "text-secondary",
    bg: "bg-sky-light",
    gradient: "from-secondary/10 to-primary/5",
    border: "border-secondary/15",
  },
  {
    icon: Code2,
    title: "End-to-End Data Projects",
    description: "Full-cycle data projects from business problem definition through insights delivery and model deployment.",
    color: "text-accent",
    bg: "bg-peach-light",
    gradient: "from-accent/10 to-secondary/5",
    border: "border-accent/15",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding bg-muted/20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-poppins font-semibold text-sm text-primary uppercase tracking-widest">What I Offer</span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl mt-2 text-foreground">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-16 h-1 rounded-full gradient-primary-bg mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`card-glass rounded-3xl p-7 border ${service.border} shadow-soft hover:shadow-card transition-all duration-300 bg-gradient-to-br ${service.gradient} group`}
            >
              <div className={`w-12 h-12 rounded-2xl ${service.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-6 h-6 ${service.color}`} />
              </div>
              <h3 className="font-poppins font-bold text-base text-foreground mb-3">{service.title}</h3>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
