import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:manibharathigps@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.open(mailtoLink);

    toast({
      title: "Email Client Opened!",
      description: "Your message has been prepared in your email client.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "manibharathigps@gmail.com",
      href: "mailto:manibharathigps@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 7502558479",
      href: "tel:+917502558479",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Tamil Nadu, India",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-primary">Get In Touch</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Let's Connect</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm always excited to discuss new opportunities, collaborate on projects, 
                  or simply connect with fellow developers and professionals. Whether you 
                  have a project in mind or just want to say hello, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="portfolio-card">
                    <a
                      href={item.href}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="text-accent group-hover:scale-110 transition-transform duration-200">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-medium text-primary">{item.label}</p>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary">Connect with me</h4>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline" size="sm">
                    <a 
                      href="https://www.linkedin.com/in/manibharathiselvam" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  
                  <Button asChild variant="outline" size="sm">
                    <a 
                      href="https://github.com/manibharathi00-dev" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  
                  <Button asChild variant="outline" size="sm">
                    <a 
                      href="https://wa.me/917502558479" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              <Card className="portfolio-card bg-accent/5 border-accent/20">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary">Open to Opportunities</h4>
                  <p className="text-muted-foreground">
                    I'm actively seeking entry-level positions in software development, 
                    web development, or database management. I'm particularly interested 
                    in roles that offer growth opportunities and the chance to work with 
                    modern technologies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Full-time", "Internship", "Freelance", "Remote", "On-site"].map((tag) => (
                      <span key={tag} className="skill-badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="portfolio-card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-6">Send a Message</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or opportunity..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full portfolio-gradient text-white border-0 hover:opacity-90"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    I typically respond within 24 hours.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;