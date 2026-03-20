import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 px-4 sm:px-8 bg-foreground text-foreground-foreground">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-poppins font-bold text-xl text-primary-foreground">
            Gayathri<span className="text-accent">.</span>
          </p>
          <p className="font-inter text-xs text-primary-foreground/50 mt-1">
            Data Science & AI Professional
          </p>
        </div>

        <p className="font-inter text-xs text-primary-foreground/50 text-center">
          © {new Date().getFullYear()} Gayathri. Crafted with passion & data.
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/Gayathri20034" },
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Mail, href: "mailto:gayathri@example.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
