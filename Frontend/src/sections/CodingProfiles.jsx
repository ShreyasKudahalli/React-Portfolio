import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import {
  GitBranch,
  Code2,
  Share2,
  ExternalLink,
} from "lucide-react";

import { MdEmail } from "react-icons/md";

const profiles = [
  {
    name: "GitHub",
    icon: GitBranch,
    description: "Explore my repositories and open-source contributions",
    link: "https://github.com/ShreyasKudahalli",
    color: "from-gray-700 to-gray-900",
    stats: "50+ Repositories",
  },
  {
    name: "LeetCode",
    icon: Code2,
    description: "500+ problems solved with strong consistency",
    link: "https://leetcode.com/u/Shreyas-23/",
    color: "from-yellow-600 to-yellow-800",
    stats: "Knight Badge",
  },
  {
    name: "GeeksforGeeks",
    icon: Code2,
    description: "Active contributor and community member",
    link: "https://geeksforgeeks.org",
    color: "from-green-600 to-green-800",
    stats: "250+ Articles",
  },
  {
    name: "LinkedIn",
    icon: Share2,
    description: "Professional profile and industry connections",
    link: "https://www.linkedin.com/in/shreyaskudahalli/",
    color: "from-blue-600 to-blue-800",
    stats: "500+ Connections",
  },
];

export const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Online Presence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Connect on
            <span className="font-serif italic font-normal text-white">
              {" "}
              coding platforms.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Find me on various coding and professional platforms where I share my work and expertise.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, idx) => (
            <a
              key={idx}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="glass p-6 rounded-2xl h-full flex flex-col transition-all duration-300 hover:scale-105 hover:border-primary/50">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${profile.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <profile.icon className="w-6 h-6 text-white" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {profile.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {profile.description}
                </p>

                {/* Stats */}
                <div className="mb-4 pt-4 border-t border-border/50">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                    {profile.stats}
                  </span>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:text-primary transition-colors duration-300">
                  Visit Profile
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-20 glass p-12 rounded-3xl glow-border animate-fade-in animation-delay-500">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-secondary-foreground mb-4">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in interesting projects and opportunities. Whether you want to collaborate, have a question, or just want to say hi – feel free to reach out through any of my profiles!
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: <FaGithub />, link: "https://github.com/ShreyasKudahalli" },
                  { label: <FaLinkedin />, link: "https://www.linkedin.com/in/shreyaskudahalli/" },
                  { label: <FaHackerrank />, link: "https://hackerrank.com" },
                  { label: <SiLeetcode />, link: "https://leetcode.com" },
                  { label: <SiGeeksforgeeks />, link: "https://geeksforgeeks.org" },
                  { label: <MdEmail />, link: "mailto:hello@example.com" },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: GitBranch, text: "Check my code repositories" },
                { icon: Code2, text: "Solve algorithms with me" },
                { icon: Share2, text: "Follow my professional journey" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
