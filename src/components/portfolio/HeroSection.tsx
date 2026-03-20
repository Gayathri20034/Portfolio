import { motion } from "framer-motion";
import { Download, ArrowRight, Mail } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-lavender-light opacity-50 blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-sky-light opacity-40 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-peach-light opacity-30 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lavender-light border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary font-poppins font-medium text-sm">Data Science & AI Professional</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground mb-6"
            >
              Hi, I'm{" "}
              <span className="gradient-text">Gayathri</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-foreground/80">
                Data Science &amp;{" "}
                <span className="gradient-accent-text">AI Enthusiast</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-inter text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg"
            >
              Dedicated and results-driven Data Science professional with a strong
              foundation in Artificial Intelligence and Machine Learning. Skilled in
              data analysis, model development, and building intelligent systems to
              solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => scrollTo("projects")}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full gradient-primary-bg text-primary-foreground font-poppins font-semibold shadow-glow hover:shadow-glow transition-all duration-300"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                onClick={() => scrollTo("contact")}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-card border border-primary/30 text-primary font-poppins font-semibold shadow-soft hover:shadow-card transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </motion.button>

              <motion.a
                href="/Gayathri_CV.pdf"
                download
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent/10 border border-accent/30 text-accent font-poppins font-semibold hover:bg-accent/20 transition-all duration-300"
                
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-8 mt-12"
            >
              {[
                { val: "4+", label: "Projects" },
                { val: "2+", label: "Internships" },
                { val: "5+", label: "Certifications" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-poppins font-bold text-2xl gradient-text">{s.val}</p>
                  <p className="font-inter text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 blur-2xl scale-110 animate-pulse-glow" />

              {/* Blob bg */}
              <div className="absolute inset-2 blob-shape bg-gradient-to-br from-lavender-light via-sky-light to-peach-light" />

              {/* Profile image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img
                  src="https://i.postimg.cc/s2K5RDJC/Whats-App-Image-2026-03-09-at-12-32-17-PM-(1).jpg"
                  alt="Gayathri – Data Scientist"
                  className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover object-top border-4 border-card shadow-glow"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Gayathri&background=8B5CF6&color=fff&size=400&bold=true";
                  }}
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-4 top-1/4 card-glass rounded-2xl px-3 py-2 shadow-card border border-white/60"
              >
                <p className="font-poppins font-semibold text-xs text-primary">🤖 AI & ML</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 top-1/3 card-glass rounded-2xl px-3 py-2 shadow-card border border-white/60"
              >
                <p className="font-poppins font-semibold text-xs text-secondary">📊 Data Science</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 card-glass rounded-2xl px-3 py-2 shadow-card border border-white/60"
              >
                <p className="font-poppins font-semibold text-xs text-accent">🧠 NLP & LLMs</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-muted-foreground font-inter">Scroll down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-primary/30 rounded-full flex items-start justify-center pt-1"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
