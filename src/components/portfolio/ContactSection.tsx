import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nambiargayatri1@gmail.com",
    href: "mailto:nambiargayatri1@gmail.com",
    color: "text-primary bg-lavender-light",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7012681613",
    href: "tel:+917012681613",
    color: "text-secondary bg-sky-light",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/gayathri-gangadharan",
    href: "https://www.linkedin.com/in/gayathri-gangadharan-626aa22a3/",
    color: "text-accent bg-peach-light",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Gayathri20034",
    href: "https://github.com/Gayathri20034",
    color: "text-primary bg-lavender-light",
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

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.message) {
    alert("Please fill all fields");
    return;
  }

  const subject = "Portfolio Contact Message";

  const body = `Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`;

  // ✅ Gmail direct compose link
  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=nambiargayatri1@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.open(gmailURL, "_blank");

  // UI feedback
  setSubmitted(true);
  setTimeout(() => setSubmitted(false), 4000);
  setForm({ name: "", email: "", message: "" });
};

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-poppins font-semibold text-sm text-primary uppercase tracking-widest">Get In Touch</span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl mt-2 text-foreground">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-16 h-1 rounded-full gradient-primary-bg mx-auto mt-4" />
          <p className="font-inter text-muted-foreground mt-4 max-w-md mx-auto">
            Open to internships, collaborations, and full-time opportunities. Let's build something great together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            <h3 className="font-poppins font-bold text-xl text-foreground mb-6">Contact Information</h3>
            <div className="flex flex-col gap-4 mb-8">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 card-glass rounded-2xl px-5 py-4 border border-white/60 shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${info.color}`}>
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-poppins font-semibold text-xs text-muted-foreground uppercase tracking-wide">{info.label}</p>
                    <p className="font-inter text-sm text-foreground mt-0.5">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CTA Banner */}
            <div className="rounded-3xl p-6 gradient-primary-bg text-primary-foreground shadow-glow">
              <h4 className="font-poppins font-bold text-lg mb-2">Ready to collaborate? 🚀</h4>
              <p className="font-inter text-sm opacity-90 leading-relaxed">
                Whether it's a data project, ML model, or AI solution — I'm excited to bring value to your team.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            <div className="card-glass rounded-3xl p-8 border border-white/60 shadow-card">
              <h3 className="font-poppins font-bold text-xl text-foreground mb-6">Send a Message</h3>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-10 gap-3"
                >
                  <CheckCircle2 className="w-12 h-12 text-primary" />
                  <p className="font-poppins font-bold text-lg text-foreground">Message Sent!</p>
                  <p className="font-inter text-sm text-muted-foreground">I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="font-poppins font-semibold text-xs text-muted-foreground uppercase tracking-wide block mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-inter text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all placeholder:text-muted-foreground/60"
                    />
                  </div>
                  <div>
                    <label className="font-poppins font-semibold text-xs text-muted-foreground uppercase tracking-wide block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-inter text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all placeholder:text-muted-foreground/60"
                    />
                  </div>
                  <div>
                    <label className="font-poppins font-semibold text-xs text-muted-foreground uppercase tracking-wide block mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="Hi Gayathri, I'd love to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-inter text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all resize-none placeholder:text-muted-foreground/60"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl gradient-primary-bg text-primary-foreground font-poppins font-bold shadow-glow hover:shadow-glow transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
