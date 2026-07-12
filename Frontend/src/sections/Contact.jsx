
import { Mail, Phone, Share2, GitBranch, MapPin, Send, Code2, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/Buttons";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",
    link: "mailto:your.email@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7676590858",
    link: "tel:+91",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chikkamagakuru, Karnataka",
    link: "#",
  },
  {
    icon: Share2,
    label: "LinkedIn",
    value: "Connect with me",
    link: "https://www.linkedin.com/in/shreyaskudahalli/",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's
            <span className="font-serif italic font-normal text-white">
              {" "}
              connect!
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-secondary-foreground mb-6">
                Contact Information
              </h3>
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.link}
                  {...(method.link.startsWith('http') && { target: "_blank", rel: "noopener noreferrer" })}
                  className="glass p-6 rounded-xl border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 animate-fade-in group block"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="flex items-start gap-4 justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors duration-300 mt-0.5">
                        <method.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-1">{method.label}</p>
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300 break-all">
                          {method.value}
                        </p>
                      </div>
                    </div>
                    <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-10 pt-10 border-t border-border/30">
              <h3 className="text-lg font-semibold text-secondary-foreground mb-4">
                Follow Me
              </h3>
              <div className="flex gap-3">
                {[
                  { icon: GitBranch, link: "https://github.com/ShreyasKudahalli", label: "GitHub" },
                  { icon: Share2, link: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Mail, link: "mailto:your.shreyaskudahalli1857@gmail.com", label: "Email" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg glass border border-border/30 flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl animate-fade-in animation-delay-300">
            <h3 className="text-2xl font-semibold text-secondary-foreground mb-6">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder-muted-foreground resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center glass p-8 rounded-2xl glow-border animate-fade-in animation-delay-400">
          <h3 className="text-2xl font-semibold text-secondary-foreground mb-4">
            Ready to work together?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting projects. Reach out and let's create something amazing together!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
};