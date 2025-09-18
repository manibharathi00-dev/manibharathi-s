import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Award, Calendar, Building } from "lucide-react";
import certificateSample from "@/assets/certificate-sample.jpg";

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample certificates - in a real app, these would be dynamically loaded
  const certificates = [
    {
      id: 1,
      title: "Python Programming Certificate",
      organization: "Programming Institute",
      date: "2024",
      image: certificateSample,
      description: "Completed comprehensive Python programming course covering fundamentals to advanced concepts",
    },
    {
      id: 2,
      title: "Database Management Certificate",
      organization: "Tech Academy",
      date: "2024",
      image: certificateSample,
      description: "Certification in SQL and database design principles",
    },
    {
      id: 3,
      title: "Web Development Certificate",
      organization: "Online Learning Platform",
      date: "2023",
      image: certificateSample,
      description: "Frontend web development certification covering HTML, CSS, and JavaScript",
    },
    {
      id: 4,
      title: "Software Development Practices",
      organization: "Professional Institute",
      date: "2023",
      image: certificateSample,
      description: "Certification in software development methodologies and best practices",
    },
    {
      id: 5,
      title: "Computer Applications Certificate",
      organization: "Bishop Heber College",
      date: "2025",
      image: certificateSample,
      description: "Academic achievement certificate for Master of Computer Applications",
    },
  ];

  const nextCertificate = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="certificates" className="py-20 bg-portfolio-section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-primary">Certificates & Achievements</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Main Certificate Display */}
          <Card className="portfolio-card overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Certificate Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden certificate-card">
                  <img
                    src={certificates[currentIndex].image}
                    alt={certificates[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Navigation Arrows */}
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevCertificate}
                    className="bg-white/80 hover:bg-white shadow-md ml-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextCertificate}
                    className="bg-white/80 hover:bg-white shadow-md mr-2"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 text-accent mb-2">
                    <Award className="h-5 w-5" />
                    <span className="text-sm font-medium uppercase tracking-wide">Certificate</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    {certificates[currentIndex].title}
                  </h3>
                  <p className="text-muted-foreground mt-3">
                    {certificates[currentIndex].description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Issuing Organization</p>
                      <p className="text-muted-foreground text-sm">
                        {certificates[currentIndex].organization}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Date Issued</p>
                      <p className="text-muted-foreground text-sm">
                        {certificates[currentIndex].date}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Certificate Counter */}
                <div className="bg-accent/5 rounded-lg p-4">
                  <p className="text-center text-sm text-muted-foreground">
                    Certificate {currentIndex + 1} of {certificates.length}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Certificate Thumbnails */}
          <div className="mt-8">
            <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
              {certificates.map((cert, index) => (
                <button
                  key={cert.id}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentIndex
                      ? "border-accent scale-105"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="mt-8 text-center">
            <Card className="portfolio-card bg-accent/5 border-accent/20">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Continuous Learning Journey</h3>
                <p className="text-muted-foreground">
                  These certificates represent my commitment to continuous learning and 
                  professional development. Each certification has enhanced my technical 
                  skills and prepared me for the challenges of modern software development.
                </p>
                <div className="flex justify-center">
                  <span className="skill-badge bg-accent text-accent-foreground">
                    {certificates.length} Certificates Earned
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;