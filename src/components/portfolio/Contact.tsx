import { Mail, Send, MapPin, Linkedin, Github, Phone } from "lucide-react";
import { ScrollAnimation, ScaleOnHover } from "@/components/animations/ScrollAnimation";
import { motion } from "framer-motion";


const Contact = () => {

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <ScrollAnimation className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Let's work <span className="text-gradient">together</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
          </ScrollAnimation>

          <div className="max-w-xl mx-auto">
            <ScrollAnimation className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Ready to start a project?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently available for freelance work and full-time opportunities.
                  If you have a project that needs expert React development, let's talk!
                </p>
              </div>

              <div className="space-y-4">
                <ScaleOnHover>
                  <motion.a
                    href="mailto:maheswarib257@gmail.com"
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary hover:shadow-md transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">maheswarib257@gmail.com</p>
                    </div>
                  </motion.a>
                </ScaleOnHover>

                <ScaleOnHover>
                  <motion.div
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">India</p>
                    </div>
                  </motion.div>
                </ScaleOnHover>

                <ScaleOnHover>
                  <motion.a
                    href="https://wa.me/9245253276"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-green-500 hover:shadow-md transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    {/* <div className="w-12 h-12 rounded-lg bg-green-500 dark:bg-green-400 flex items-center justify-center group-hover:bg-green-600 dark:group-hover:bg-green-500 transition-colors">
                      <Phone className="w-6 h-6 text-white dark:text-green-900" />
                    </div> */}
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-medium text-foreground">+91 92452 53276</p>
                    </div>
                  </motion.a>
                </ScaleOnHover>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/maheswaribaskaran" },
                    { icon: Github, href: "https://github.com/Maheswari-BaskaranS" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
