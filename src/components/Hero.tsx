import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="home" className="min-h-screen bg-portfolio-hero flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                🎓 Available for new opportunities
              </div>
              <h1 className="hero-text text-primary">
                Hey, I'm <span className="text-accent">Manibharathi</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-portfolio-textLight font-medium">
                Aspiring Software Developer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">I am Manibharathi, MCA graduate from Bishop Heber College (2025). I have a strong interest in software development and possess skills in Python, SQL, and web technologies. I am eager to begin my career in IT, contribute to innovative projects, and continue building my technical expertise.</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToAbout} className="portfolio-gradient text-white border-0 hover:opacity-90">
                Learn More About Me
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img src={profilePhoto} alt="Manibharathi S - Software Developer" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-lg">
                <span className="font-semibold">MCA Graduate 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;