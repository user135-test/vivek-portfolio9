import { useState } from 'react';
import { ArrowRight, Code, Database, Globe, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Server, Layers, Wifi, Palette, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import SkillCard from '@/components/SkillCard';
import ProjectCard from '@/components/ProjectCard';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

// Import images
import heroImage from '@/assets/vivek-new-profile.jpg';
import studyBuddyImage from '@/assets/studybuddy-project.jpg';
import wanderlustImage from '@/assets/wanderlust-project.jpg';

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_kh718cr',     // Service ID
        'template_fsly6vr',    // Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'aPsZOvjUKDrM91VcX'    // Public Key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      skills: ["C", "C++", "Python", "JavaScript", "TypeScript"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Material UI", "Tailwind CSS"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB", "Socket.io", "RESTful APIs"]
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Real-time Technologies",
      skills: ["WebRTC", "Socket.io", "Peer-to-Peer Communication", "Video Conferencing", "Real-time Chat"]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX & Design",
      skills: ["Responsive Design", "Material UI", "Component Libraries", "User Interface Design", "Cross-platform Development"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Authentication & Security",
      skills: ["User Authentication", "Secure Login Systems", "Session Management", "Data Protection", "Privacy Controls"]
    }
  ];

  const projects = [
    {
      title: "EchoMeet – Real-time Video Conferencing Platform",
      description: "Built a secure authentication system and lobby management flow for seamless meeting access. Designed and implemented a responsive UI workflow, ensuring smooth user navigation across devices. Integrated real-time peer-to-peer communication using WebRTC, achieving low-latency video calls and stable performance.",
      tools: ["React.js", "Node.js", "WebRTC", "Socket.io", "Material UI"],
      image: studyBuddyImage,
      githubLink: "https://github.com/Vivek210404/EchoMeet"
    },
    {
      title: "Wanderlust – Hotel Listing Platform", 
      description: "A web-based platform for location-based hotel listings with real-time dynamic search, interactive cards, and geocoding integration.",
      tools: ["NodeJs", "ExpressJs", "MongoDB", "EJS"],
      image: wanderlustImage,
      githubLink: "https://github.com/Vivek210404/Airbnb"
    },
    {
      title: "AI Powered StudyBuddy Assistant",
      description: "AI-powered study partner for students providing roadmap generation and analysis with a user-friendly interface.",
      tools: ["React", "NodeJS", "ExpressJS", "Gemini"],
      image: studyBuddyImage,
      githubLink: "https://github.com/Vivek210404/StudyBuddy"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dots">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Hello, I'm</span>
                <br />
                <span className="text-gradient glow-text">Vivek Kumar</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 font-medium">
                Front-End Developer
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Building modern, interactive, and user-friendly web experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => {
                    const element = document.getElementById('portfolio');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="cursor-pointer"
                >
                  View Portfolio
                </Button>
                <Button 
                  variant="portfolio" 
                  size="xl"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="cursor-pointer"
                >
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-20 animate-pulse-slow" />
                <img 
                  src={heroImage} 
                  alt="Vivek Kumar" 
                  className="relative w-80 h-80 sm:w-96 sm:h-96 object-cover rounded-full border-4 border-primary/20 shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am Vivek Kumar, a front-end developer passionate about creating clean, responsive, and interactive web applications. Currently pursuing my B.Tech in Computer Science and Engineering from IIIT Ranchi (Graduating in 2027). I specialize in developing modern web solutions using cutting-edge technologies.
              </p>
              <div className="bg-muted/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Education</h3>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <span className="font-medium">B.Tech in Computer Science & Engineering</span>
                  <span>•</span>
                  <span>IIIT Ranchi</span>
                  <span>•</span>
                  <span>2023–2027</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What I <span className="text-gradient">Do</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Services I offer to help bring your vision to life
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover-lift hover-glow transition-all duration-300 animate-fade-in">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-xl text-primary">
                  <Globe className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Front-End Development</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I design and build user-friendly, modern, and responsive web interfaces, ensuring excellent performance and smooth user experience. From concept to deployment, I create web applications that engage users and drive results.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover-lift hover-glow transition-all duration-300 animate-fade-in">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-xl text-primary">
                  <Server className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Backend Development</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I build robust and scalable server-side applications with secure APIs, efficient database management, and optimized performance. From authentication systems to complex business logic, I ensure your backend architecture supports your application's growth.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover-lift hover-glow transition-all duration-300 animate-fade-in">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-xl text-primary">
                  <Layers className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Full Stack Development</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I provide end-to-end web development solutions, seamlessly integrating frontend and backend technologies. From database design to user interface, I deliver complete web applications that are maintainable, scalable, and user-focused.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              My <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent projects and achievements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your next project or just say hello
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <a 
                    href="mailto:vivek210404@gmail.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm">vivek210404@gmail.com</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/vivek-kumar-2k23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm">linkedin.com/in/vivek-kumar-2k23</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com/Vivek210404"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-sm">github.com/Vivek210404</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message..."
                      required
                      rows={4}
                      className="bg-muted/50 border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Message"} <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Vivek Kumar. Crafted with passion and code.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;