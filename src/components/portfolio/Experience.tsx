import { Briefcase, Calendar, MapPin } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/animations/ScrollAnimation";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <ScrollAnimation className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Career
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building enterprise solutions at one of the world's largest IT services companies
            </p>
          </ScrollAnimation>

          {/* Experience card: TCS */}
          <div className="relative mb-12">
            {/* Timeline line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-8 top-0 w-0.5 bg-border hidden md:block"
            />

            <ScrollAnimation direction="left" className="relative md:pl-20">
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute left-6 top-8 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block shadow-glow"
              />

              <div className="bg-gradient-card rounded-2xl border border-border shadow-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <Briefcase className="w-5 h-5 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-foreground">
                        Assistant System Engineer
                      </h3>
                    </div>
                    <p className="text-lg text-primary font-medium">
                      Tata Consultancy Services (TCS)
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>June 2021 – June 2023</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>India</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Worked on enterprise-level web applications, developing and maintaining
                    complex frontend systems using React.js and TypeScript. Consistently
                    delivered projects within deadlines and received excellent client feedback.
                  </p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Contributions:</h4>
                    <StaggerContainer className="grid md:grid-cols-2 gap-3">
                      {[
                        "Built reusable React component libraries",
                        "Developed REST APIs for dynamic data handling",
                        "Implemented auto-configuration updates for faster deployments",
                        "Created multi-module enterprise applications",
                        "Integrated CRM, HRMS, and Financial modules",
                        "Optimized application performance",
                      ].map((item) => (
                        <StaggerItem key={item}>
                          <motion.li
                            className="flex items-start gap-2 text-sm text-muted-foreground list-none"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            {item}
                          </motion.li>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Experience card: Twilight IT Solutions */}
          <div className="relative mb-12">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-8 top-0 w-0.5 bg-border hidden md:block"
            />
            <ScrollAnimation direction="left" className="relative md:pl-20">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute left-6 top-8 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block shadow-glow"
              />
              <div className="bg-gradient-card rounded-2xl border border-border shadow-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <Briefcase className="w-5 h-5 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-foreground">
                        Software Engineer
                      </h3>
                    </div>
                    <p className="text-lg text-primary font-medium">
                      Twilight IT Solutions
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Mar 2024 – Dec 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>India</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Created reusable code and components. Built logic to save users' data automatically in the database for future reference. Consistently received positive client feedback for high-quality, responsive web applications. Delivered two projects on time.
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Contributions:</h4>
                    <StaggerContainer className="grid md:grid-cols-2 gap-3">
                      {[
                        "Created reusable code and components",
                        "Built logic to save users' data automatically in the database",
                        "Consistently received positive client feedback",
                        "Delivered two projects on time",
                        "Developed responsive web applications",
                        "Ensured high-quality and maintainable code",
                      ].map((item) => (
                        <StaggerItem key={item}>
                          <motion.li
                            className="flex items-start gap-2 text-sm text-muted-foreground list-none"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            {item}
                          </motion.li>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Experience card: AppXperts Enterprise Solutions */}
          <div className="relative mb-12">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-8 top-0 w-0.5 bg-border hidden md:block"
            />
            <ScrollAnimation direction="left" className="relative md:pl-20">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute left-6 top-8 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block shadow-glow"
              />
              <div className="bg-gradient-card rounded-2xl border border-border shadow-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <Briefcase className="w-5 h-5 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-foreground">
                        Software Engineer
                      </h3>
                    </div>
                    <p className="text-lg text-primary font-medium">
                      AppXperts Enterprise Solutions
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Dec 2024 – Present</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>India</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Built responsive and user-friendly interfaces using React.js, ensuring seamless performance and optimal user experience across devices. Working with cross-functional teams to design, develop, and deploy web solutions, adhering to coding standards and delivering high-quality features within project timelines.
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Contributions:</h4>
                    <StaggerContainer className="grid md:grid-cols-2 gap-3">
                      {[
                        "Built responsive and user-friendly interfaces using React.js",
                        "Ensured seamless performance and optimal user experience",
                        "Collaborated with cross-functional teams",
                        "Designed, developed, and deployed web solutions",
                        "Adhered to coding standards and best practices",
                        "Delivered high-quality features within project timelines",
                      ].map((item) => (
                        <StaggerItem key={item}>
                          <motion.li
                            className="flex items-start gap-2 text-sm text-muted-foreground list-none"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            {item}
                          </motion.li>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Training section */}
          <ScrollAnimation delay={0.3} className="mt-12">
            <h3 className="text-xl font-bold text-foreground text-center mb-8">
              Training & Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-all duration-300"
              >
                <h4 className="font-semibold text-foreground mb-3">Inplant Training</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    BSNL, Puducherry (2019)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    JP Infotech, Puducherry (2018)
                  </li>
                </ul>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-all duration-300"
              >
                <h4 className="font-semibold text-foreground mb-3">NPTEL & Other Certifications</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Microprocessors & Microcontrollers (2020)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Elite in Digital Circuits (2019)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Hacker Rank Front End Developer Role Certification (2026)
                  </li>
                </ul>
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Experience;
