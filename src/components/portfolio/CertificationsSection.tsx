import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Data Visualization – Tata",
    issuer: "Tata Group",
    type: "Data Viz",
    color: "from-primary/10 to-primary/5",
    border: "border-primary/20",
    badge: "bg-lavender-light text-primary",
    iconColor: "text-primary",
  },
  {
    title: "Data Analytics Simulation",
    issuer: "Accenture",
    type: "Analytics",
    color: "from-secondary/10 to-secondary/5",
    border: "border-secondary/20",
    badge: "bg-sky-light text-secondary",
    iconColor: "text-secondary",
  },
  {
    title: "Data Analytics Simulation",
    issuer: "Deloitte",
    type: "Analytics",
    color: "from-accent/10 to-accent/5",
    border: "border-accent/20",
    badge: "bg-peach-light text-accent",
    iconColor: "text-accent",
  },
  {
    title: "Deep Learning Fundamentals",
    issuer: "Infosys",
    type: "Deep Learning",
    color: "from-primary/10 to-secondary/5",
    border: "border-primary/20",
    badge: "bg-lavender-light text-primary",
    iconColor: "text-primary",
  },
  {
    title: "Probability & Statistics",
    issuer: "University of Colorado",
    type: "Statistics",
    color: "from-secondary/10 to-accent/5",
    border: "border-secondary/20",
    badge: "bg-sky-light text-secondary",
    iconColor: "text-secondary",
  },
];

const fadeUp = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function CertificationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="section-padding bg-card/50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-poppins font-semibold text-sm text-primary uppercase tracking-widest">Achievements</span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl mt-2 text-foreground">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 h-1 rounded-full gradient-primary-bg mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={`${cert.title}-${cert.issuer}`}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className={`card-glass rounded-2xl p-6 border ${cert.border} shadow-soft hover:shadow-card transition-all duration-300 bg-gradient-to-br ${cert.color}`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-11 h-11 rounded-xl bg-card flex items-center justify-center flex-shrink-0 shadow-soft`}>
                  <Award className={`w-5 h-5 ${cert.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-sm text-foreground leading-snug">{cert.title}</h3>
                  <p className="font-inter text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                  <span className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-poppins font-semibold ${cert.badge}`}>
                    {cert.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
