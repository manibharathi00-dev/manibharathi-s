import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Users, Lightbulb } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "Bishop Heber College",
      year: "2025",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "PRIST University",
      year: "2022",
      icon: <Award className="h-6 w-6" />,
    },
  ];

  const qualities = [
    {
      title: "Problem-solving",
      description: "Strong analytical thinking and logical approach to challenges",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: "Teamwork",
      description: "Collaborative mindset with excellent communication skills",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Adaptability",
      description: "Quick to learn new technologies and adapt to changing requirements",
      icon: <Award className="h-6 w-6" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-portfolio-section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-primary">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Educational Background */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Educational Background</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="portfolio-card">
                    <div className="flex items-start space-x-4">
                      <div className="text-accent">
                        {edu.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{edu.degree}</h4>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        <p className="text-sm text-accent font-medium">{edu.year}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Key Qualities */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Key Qualities</h3>
              <div className="space-y-4">
                {qualities.map((quality, index) => (
                  <Card key={index} className="portfolio-card">
                    <div className="flex items-start space-x-4">
                      <div className="text-accent">
                        {quality.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold">{quality.title}</h4>
                        <p className="text-muted-foreground text-sm">{quality.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="portfolio-card bg-accent/5 border-accent/20">
              <div className="text-center space-y-4">
                <h4 className="text-xl font-semibold text-primary">Ready to Start My Career</h4>
                <p className="text-muted-foreground">
                  Seeking opportunities to apply my technical knowledge and contribute to 
                  innovative software development projects while continuing to grow and learn 
                  in a professional environment.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;