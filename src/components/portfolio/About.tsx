import { Code2, Rocket, Users, Zap } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/animations/ScrollAnimation";
import profilePhoto from "@/assets/Mahi.png";


const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with best practices",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing applications for speed and user experience",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with cross-functional teams",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Consistently delivering projects on time",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <ScrollAnimation className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Passionate about building <span className="text-gradient">great products</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A dedicated React developer focused on creating seamless user experiences
              and delivering value through technology.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About text with image */}
            <ScrollAnimation direction="left" className="space-y-6">
              {/* Profile image */}
              <div className="mb-8 flex justify-center md:justify-start">
                <div className="relative">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-lg">
                    <img
                      src={profilePhoto}
                      alt="Maheswari B"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-primary/10 rounded-2xl -z-10" />
                  <div className="absolute -top-3 -left-3 w-16 h-16 bg-accent/10 rounded-full -z-10" />
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <strong className="text-foreground">Maheswari B</strong>, a React Developer with 
                over 4 years of experience in building enterprise-grade web applications. My journey 
                in tech began at <strong className="text-foreground">Tata Consultancy Services (TCS)</strong> (2021–2023),
                followed by <strong className="text-foreground">Twilight IT Solutions</strong> (2024), and currently at
                <strong className="text-foreground"> AppXperts Enterprise Solutions</strong> (2024–Present).
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in creating responsive, high-performance applications using 
                <span className="text-primary"> React.js</span>, 
                <span className="text-primary"> TypeScript</span>, and modern frontend technologies. 
                I have a proven track record of delivering projects on time and receiving 
                excellent client feedback.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond coding, I'm a regional-level chess player, an art enthusiast who held a solo 
                exhibition at JIPMER, and an active member of TCS's Maitree Quiz Club.
              </p>
            </ScrollAnimation>

            {/* Highlights grid */}
            <StaggerContainer className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <StaggerItem key={item.title}>
                  <ScaleOnHover>
                    <div className="p-6 bg-gradient-card rounded-xl border border-border shadow-card hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </ScaleOnHover>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
