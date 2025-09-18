import { Heart } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Manibharathi S</h3>
            <p className="text-primary-foreground/80"> Software Developer</p>
          </div>
          
          <div className="flex items-center justify-center space-x-1 text-sm">
            
          </div>

          <div className="pt-4 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-sm">
              Ready to build something amazing together? Let's connect!
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;