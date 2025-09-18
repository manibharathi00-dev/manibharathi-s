import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, Code, Users } from "lucide-react";
import iwayProject from "@/assets/iway-project.jpg";

const Portfolio = () => {
  const project = {
    title: "I-Way Internet Café Website",
    type: "Freelance Web Development Project",
    description: "A comprehensive static website developed for I-Way Internet Café, showcasing services and facilitating customer engagement.",
    image: iwayProject,
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive design for all devices",
      "Service showcase (Internet, Printing, Photocopying)",
      "Customer-friendly interface",
      "Professional business presentation",
      "Optimized for students and professionals",
    ],
    highlights: [
      {
        icon: <Globe className="h-5 w-5" />,
        title: "Web Design",
        description: "Created modern, user-friendly interface"
      },
      {
        icon: <Code className="h-5 w-5" />,
        title: "Clean Code",
        description: "Well-structured, maintainable codebase"
      },
      {
        icon: <Users className="h-5 w-5" />,
        title: "Client Communication",
        description: "Professional client interaction and delivery"
      },
    ],
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-primary">Portfolio</h2>
        
        <div className="max-w-6xl mx-auto">
          <Card className="portfolio-card overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Project Image */}
              <div className="relative group">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <Button variant="secondary" className="bg-white/90 text-primary">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <p className="text-accent font-medium text-sm uppercase tracking-wide">{project.type}</p>
                  <h3 className="text-2xl font-bold text-primary mt-2">{project.title}</h3>
                  <p className="text-muted-foreground mt-3">{project.description}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-primary mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-primary mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Project Highlights */}
            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-semibold text-primary mb-6 text-center">Project Highlights</h4>
              <div className="grid md:grid-cols-3 gap-6">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 text-accent rounded-xl">
                      {highlight.icon}
                    </div>
                    <h5 className="font-semibold">{highlight.title}</h5>
                    <p className="text-muted-foreground text-sm">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 pt-8 border-t border-border text-center">
              <h4 className="text-lg font-semibold text-primary mb-3">Hands-on Experience</h4>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                This project provided valuable experience in client communication, project management, 
                and delivering professional web solutions. It demonstrates my ability to work independently 
                and deliver quality results that meet client requirements.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;