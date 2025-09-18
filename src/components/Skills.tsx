import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Brain, Users2, Zap } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    {
      name: "Python",
      icon: <Code className="h-6 w-6" />,
      description: "Application development and automation",
    },
    {
      name: "SQL",
      icon: <Database className="h-6 w-6" />,
      description: "Database management and optimization",
    },
    {
      name: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      description: "HTML, CSS, JavaScript",
    },
    {
      name: "Database Management",
      icon: <Database className="h-6 w-6" />,
      description: "Design and implementation",
    },
  ];

  const softSkills = [
    {
      name: "Problem-solving",
      icon: <Brain className="h-6 w-6" />,
      description: "Analytical thinking and logical approach",
    },
    {
      name: "Teamwork",
      icon: <Users2 className="h-6 w-6" />,
      description: "Collaborative project work",
    },
    {
      name: "Quick Adaptability",
      icon: <Zap className="h-6 w-6" />,
      description: "Learning new technologies rapidly",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-primary">Skills & Expertise</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Technical Skills</h3>
            <div className="grid gap-4">
              {technicalSkills.map((skill, index) => (
                <Card key={index} className="portfolio-card group hover:border-accent/50">
                  <div className="flex items-start space-x-4">
                    <div className="text-accent group-hover:scale-110 transition-transform duration-200">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{skill.name}</h4>
                      <p className="text-muted-foreground text-sm">{skill.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Soft Skills</h3>
            <div className="grid gap-4">
              {softSkills.map((skill, index) => (
                <Card key={index} className="portfolio-card group hover:border-accent/50">
                  <div className="flex items-start space-x-4">
                    <div className="text-accent group-hover:scale-110 transition-transform duration-200">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{skill.name}</h4>
                      <p className="text-muted-foreground text-sm">{skill.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Skills Summary */}
            <Card className="portfolio-card bg-accent/5 border-accent/20">
              <div className="text-center space-y-4">
                <h4 className="text-xl font-semibold text-primary">Continuous Learning</h4>
                <p className="text-muted-foreground">
                  Always eager to explore new technologies and methodologies 
                  to stay current with industry trends and best practices.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Python", "SQL", "JavaScript", "Database Design", "Problem Solving", "Team Collaboration"].map((tag) => (
                    <span key={tag} className="skill-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;