import { ExternalLink, ShoppingCart, Users, Building2, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollAnimation, ScaleOnHover } from "@/components/animations/ScrollAnimation";
import { motion } from "framer-motion";

import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectHiring from "@/assets/project-hiring.jpg";
import projectErp from "@/assets/project-erp.jpg";
import projectRealestate from "@/assets/project-realestate.jpg";
import tmk from "@/assets/tmk.png"
import eco from "@/assets/eco.png"
const projects = [
    {
      title: "Insightful Dashboard",
      description:
        "A modern admin dashboard featuring user management, lead tracking, and customizable settings. Built for efficient business operations and analytics.",
      features: [
        "User management",
        "Lead tracking",
        "Settings configuration",
        "Responsive design",
        "Role-based access control",
      ],
      tech: ["React.js", "TypeScript", "REST API", "Vercel"],
      icon: Home,
      color: "primary",
      image: projectRealestate, // Placeholder, update if you have a specific image
      links: [
        { url: "https://insightful-dashboard.vercel.app/", label: "Insightful Dashboard" },
      ],
    },
  {
    title: "E-Commerce Grocery Platform",
    description:
      "A fully responsive e-commerce web application with product browsing, cart management, wishlist, and seamless checkout experience.",
    features: [
      "Stripe payment integration",
      "User authentication",
      "Order history & tracking",
      "Performance optimized",
    ],
    tech: ["React.js", "TypeScript", "Stripe", "REST API"],
    icon: ShoppingCart,
    color: "primary",
    image: projectEcommerce,
    links: [
      { url: "https://erpv4b2c.appxes-erp.in/", label: "ERP V4 B2C" },
      { url: "https://catchyfive.com/", label: "CatchyFive" },
    ],
  },
  {
    title: "Dual-Portal Hiring Platform",
    description:
      "A comprehensive hiring solution with separate portals for helpers and employers, streamlining the recruitment workflow.",
    features: [
      "Helper profile management",
      "Employer browsing & filtering",
      "Interview scheduling",
      "Advanced search system",
    ],
    tech: ["React.js", "State Management", "REST API"],
    icon: Users,
    color: "accent",
    image: projectHiring,
    link: "https://jpbweb.appxes-erp.in/",
  },
  {
    title: "ERP V4 System",
    description:
      "Enterprise Resource Planning modules for Inventory, Sales, and Purchase management with dynamic tax calculations.",
    features: [
      "Multi-tax support (CGST, SGST, IGST, VAT)",
      "Product variants & pricing",
      "Organization configurations",
      "Reusable component library",
    ],
    tech: ["React.js", "TypeScript", "Enterprise Architecture"],
    icon: Building2,
    color: "tertiary",
    image: projectErp,
    links: [
      { url: "https://erpv4.appxes-erp.in/login", label: "ERP V4 Login" },
    ],
  },
  {
    title: "Best Buy – Enterprise Portal",
    description:
      "A comprehensive Real Estate Management Solution integrating CRM, Valuation, Facility Management, and HRMS modules.",
    features: [
      "Spring Boot backend",
      "Auto-configuration updates",
      "Multi-module integration",
      "Excellent client feedback",
    ],
    tech: ["React.js", "TypeScript", "Spring Boot", "REST API"],
    icon: Home,
    color: "primary",
    image: eco,
  },
  // TMK project hidden
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <ScrollAnimation className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my expertise in building
              enterprise-grade applications
            </p>
          </ScrollAnimation>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation
                key={project.title}
                delay={index * 0.1}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <ScaleOnHover>
                  <article className="group bg-gradient-card rounded-2xl border border-border shadow-card overflow-hidden hover:shadow-lg transition-all duration-300">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                      <div
                        className={`absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center ${
                          project.color === "primary"
                            ? "bg-primary/90 text-primary-foreground"
                            : project.color === "accent"
                            ? "bg-accent/90 text-accent-foreground"
                            : "bg-tertiary/90 text-tertiary-foreground"
                        }`}
                      >
                        <project.icon className="w-6 h-6" />
                      </div>
                      <div className="absolute top-4 right-4">
                        {project.links ? (
                          <div className="flex gap-2">
                            {project.links.map((link) => (
                              <a
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit ${link.label} website`}
                              >
                                <Button
                                  variant="secondary"
                                  size="icon"
                                  className="bg-background/80 backdrop-blur-sm"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </Button>
                              </a>
                            ))}
                          </div>
                        ) : project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${project.title} website`}
                          >
                            <Button
                              variant="secondary"
                              size="icon"
                              className="bg-background/80 backdrop-blur-sm"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </a>
                        ) : (
                          <Button
                            variant="secondary"
                            size="icon"
                            className="bg-background/80 backdrop-blur-sm"
                            disabled
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 mb-4">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-sm text-muted-foreground flex items-center gap-2"
                          >
                            <motion.span
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              className="w-1.5 h-1.5 rounded-full bg-primary"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </ScaleOnHover>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
