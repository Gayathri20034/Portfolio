import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import airbnbImg from "@/assets/airbnb-dashboard.jpg";
import pdfChatImg from "@/assets/pdf-chat.jpg";
import agridostImg from "@/assets/agridost.jpg";
import musicDnaImg from "@/assets/music-dna.jpg";

const projects = [
  {
    id: 1,
    featured: true,
    badge: "AI Project",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
    title: "AI PDF Chat System",
    description:
      "AI-powered system enabling users to upload multiple PDFs and interact with them using a natural language chat interface for intelligent document understanding.",
    highlights: ["NLP-based document processing", "Chat-based interaction", "Multi-document querying"],
    github: "https://github.com/Gayathri20034/Pdf_reader1",
    image: pdfChatImg,
    dark: true,
    gradient: "from-[hsl(265,60%,8%)] to-[hsl(240,30%,12%)]",
    glow: "group-hover:shadow-glow",
  },
  {
    id: 2,
    featured: true,
    badge: "Data Analysis",
    badgeColor: "bg-secondary/10 text-secondary border-secondary/20",
    title: "Airbnb NYC Market Analysis",
    description:
      "End-to-end data analysis and ML project analyzing ~49K Airbnb listings to uncover pricing trends and build predictive models with interactive dashboards.",
    highlights: ["EDA + Visualization", "Regression + Random Forest", "Interactive dashboard"],
    github: "https://github.com/Gayathri20034/Airbnbproject",
    image: airbnbImg,
    dark: false,
    gradient: "from-secondary/5 to-primary/5",
    glow: "group-hover:shadow-glow-sky",
  },
  {
    id: 3,
    featured: true,
    badge: "AgriTech AI",
    badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    title: "AgriDost – AI Farming Assistant",
    description:
      "AI-powered platform providing farmers with market insights, subsidy information, and intelligent personalized recommendations for sustainable agriculture.",
    highlights: ["Real-world impact", "Multi-module system", "AI-based advisory"],
    github: "https://github.com/Gayathri20034/Agridost",
    image: agridostImg,
    dark: false,
    gradient: "from-emerald-50 to-teal-50",
    glow: "group-hover:shadow-[0_0_40px_hsl(160,60%,40%/0.25)]",
    accentColor: "text-emerald-600",
  },
  {
    id: 4,
    featured: false,
    badge: "Web App",
    badgeColor: "bg-accent/10 text-accent border-accent/20",
    title: "Music DNA Analyzer",
    description:
      "Interactive web app analyzing music preferences using the iTunes API to evaluate user taste patterns and generate unique musical DNA profiles.",
    highlights: ["API integration", "Interactive UI", "User-driven analysis"],
    github: "https://github.com/Gayathri20034/MusicDNA-analyzer",
    image: musicDnaImg,
    dark: false,
    gradient: "from-accent/5 to-primary/5",
    glow: "group-hover:shadow-[0_0_40px_hsl(20,90%,68%/0.25)]",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-poppins font-semibold text-sm text-primary uppercase tracking-widest">Portfolio</span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl mt-2 text-foreground">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 rounded-full gradient-primary-bg mx-auto mt-4" />
        </motion.div>

        {/* Featured 3 — large cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {projects.filter((p) => p.featured).map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className={`group relative rounded-3xl overflow-hidden border transition-all duration-300 shadow-soft ${project.glow} ${
                project.dark ? "border-primary/30" : "border-white/60 card-glass"
              } bg-gradient-to-br ${project.gradient}`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 ${project.dark ? "bg-gradient-to-b from-transparent to-[hsl(265,60%,8%)]" : "bg-gradient-to-b from-transparent to-card/20"}`} />
                {/* Badge */}
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-poppins font-bold border backdrop-blur-sm ${project.badgeColor}`}>
                  {project.badge}
                </span>
              </div>

              {/* Content */}
              <div className={`p-5 ${project.dark ? "text-white" : ""}`}>
                <h3 className={`font-poppins font-bold text-lg mb-2 ${project.dark ? "text-white" : "text-foreground"}`}>
                  {project.title}
                </h3>
                <p className={`font-inter text-sm leading-relaxed mb-4 ${project.dark ? "text-white/70" : "text-muted-foreground"}`}>
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className={`text-xs px-2 py-0.5 rounded-full font-inter ${
                        project.dark
                          ? "bg-primary/20 text-primary-foreground/80 border border-primary/30"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-poppins font-semibold transition-colors ${
                    project.dark ? "text-primary hover:text-primary/80" : project.accentColor || "text-primary hover:text-primary/80"
                  }`}
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Non-featured — compact cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.filter((p) => !p.featured).map((project, i) => (
            <motion.div
              key={project.id}
              custom={i + 3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className={`group relative rounded-3xl overflow-hidden border card-glass border-white/60 shadow-soft transition-all duration-300 ${project.glow} bg-gradient-to-br ${project.gradient} flex`}
            >
              <div className="w-40 h-auto overflow-hidden flex-shrink-0">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex flex-col justify-between">
                <div>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-poppins font-bold border mb-2 ${project.badgeColor}`}>
                    {project.badge}
                  </span>
                  <h3 className="font-poppins font-bold text-base text-foreground mb-1">{project.title}</h3>
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-poppins font-semibold text-primary mt-3 hover:text-primary/80 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
