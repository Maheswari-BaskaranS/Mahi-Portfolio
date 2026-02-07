import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/animations/ScrollAnimation";
import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: 95, category: "core" },
  { name: "TypeScript", level: 90, category: "core" },
  { name: "JavaScript (ES6+)", level: 95, category: "core" },
  { name: "HTML5 & CSS3", level: 90, category: "core" },
  { name: "Tailwind CSS", level: 85, category: "styling" },
  { name: "REST APIs", level: 90, category: "backend" },
  { name: "State Management", level: 88, category: "core" },
  { name: "Stripe Integration", level: 80, category: "backend" },
  { name: "Responsive Design", level: 92, category: "styling" },
  { name: "Performance Optimization", level: 85, category: "core" },
];

const additionalSkills = [
  "Git & Version Control",
  "Component Architecture",
  "Spring Boot (Backend)",
  "Agile/Scrum",
  "Code Review",
  "Unit Testing",
];

const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
          {name}
        </span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 + 0.3, duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <ScrollAnimation className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Technical Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Technologies I <span className="text-gradient">work with</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable web applications
            </p>
          </ScrollAnimation>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
            ))}
          </div>

          {/* Additional skills */}
          <ScrollAnimation className="text-center">
            <h3 className="font-semibold text-foreground mb-6">Also experienced with:</h3>
            <StaggerContainer className="flex flex-wrap justify-center gap-3">
              {additionalSkills.map((skill) => (
                <StaggerItem key={skill}>
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 inline-block cursor-default"
                  >
                    {skill}
                  </motion.span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Skills;
