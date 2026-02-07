import { Award, Trophy, Palette, Globe, Users } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/animations/ScrollAnimation";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: Award,
    title: "TECHgium 2020 Recognition",
    description: "Certificate of Recognition for innovative concept at L&T Technology Services",
    color: "primary",
  },
  {
    icon: Trophy,
    title: "Chess Champion",
    description: "First place in Chess Competition at TCS",
    color: "accent",
  },
  {
    icon: Palette,
    title: "Solo Art Exhibition",
    description: "Featured exhibition at JIPMER Auditorium during Golden Jubilee Celebration",
    color: "tertiary",
  },
];

const activities = [
  { icon: Trophy, text: "Regional-level Chess Player" },
  { icon: Palette, text: "Drawing & Art Enthusiast" },
  { icon: Users, text: "Member of Maitree Quiz Club (TCS)" },
  { icon: Users, text: "Student Coordinator – Elektor Club (SMVEC)" },
  { icon: Award, text: "Symposium Coordinator – STREAKZ 2019" },
];

const languages = ["English", "Tamil", "Hindi"];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <ScrollAnimation className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Recognition
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Achievements & <span className="text-gradient">Activities</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond code: awards, interests, and community involvement
            </p>
          </ScrollAnimation>

          {/* Achievements grid */}
          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-16">
            {achievements.map((achievement) => (
              <StaggerItem key={achievement.title}>
                <ScaleOnHover>
                  <div className="text-center p-8 bg-gradient-card rounded-2xl border border-border shadow-card hover:shadow-lg transition-all duration-300">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center ${
                        achievement.color === "primary"
                          ? "bg-primary/10 text-primary"
                          : achievement.color === "accent"
                          ? "bg-accent/10 text-accent"
                          : "bg-tertiary/10 text-tertiary"
                      }`}
                    >
                      <achievement.icon className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Activities & Languages */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Extra-curricular */}
            <ScrollAnimation direction="left">
              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Extra-Curricular Activities
                </h3>
                <ul className="space-y-4">
                  {activities.map((activity, index) => (
                    <motion.li
                      key={activity.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-default"
                    >
                      <activity.icon className="w-4 h-4 text-primary shrink-0" />
                      <span>{activity.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>

            {/* Languages */}
            <ScrollAnimation direction="right">
              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Languages
                </h3>
                <div className="space-y-4">
                  {languages.map((language, index) => (
                    <motion.div
                      key={language}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <span className="font-medium text-foreground min-w-24">{language}</span>
                      <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: language === "English" ? "95%" : "90%" }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 pt-6 border-t border-border"
                >
                  <p className="text-sm text-muted-foreground">
                    Fluent in multiple languages, enabling effective communication
                    with diverse teams and stakeholders.
                  </p>
                </motion.div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
