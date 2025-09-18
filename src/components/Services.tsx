import { Card } from "@/components/ui/card";
import { Code, Database, Globe, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Software Development",
      icon: <Code className="h-8 w-8" />,
      description: "Building applications using Python with clean, maintainable code following best practices.",
      capabilities: [
        "Python application development",
        "Code optimization and debugging",
        "Software architecture design",
        "Testing and quality assurance",
      ],
    },
    {
      title: "Database Management",
      icon: <Database className="h-8 w-8" />,
      description: "Creating and managing efficient database systems with SQL for optimal data storage and retrieval.",
      capabilities: [
        "Database design and modeling",
        "SQL query optimization",
        "Data migration and backup",
        "Performance monitoring",
      ],
    },
    {
      title: "Web Development",
      icon: <Globe className="h-8 w-8" />,
      description: "Designing and developing responsive websites using modern web technologies and best practices.",
      capabilities: [
        "Responsive web design",
        "Frontend development (HTML, CSS, JS)",
        "User interface optimization",
        "Cross-browser compatibility",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-portfolio-section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-primary">Services I Offer</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="portfolio-card group hover:shadow-xl transition-all duration-300">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>

                <div className="space-y-3 text-left">
                  <h4 className="font-medium text-primary">What I can do:</h4>
                  <ul className="space-y-2">
                    {service.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="portfolio-card bg-accent/5 border-accent/20 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Ready to Collaborate</h3>
              <p className="text-muted-foreground text-lg">
                I'm excited to bring fresh perspectives and dedication to your projects. 
                Whether you need a reliable team member or someone to take on challenging 
                development tasks, I'm ready to contribute and learn.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Python Development", "Database Design", "Web Technologies", "Problem Solving", "Team Player"].map((tag) => (
                  <span key={tag} className="skill-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;