import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  image: string;
  link?: string;
  githubLink?: string;
}

const ProjectCard = ({ title, description, tools, image, link, githubLink }: ProjectCardProps) => {
  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden hover-lift hover-glow transition-all duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-foreground p-2 rounded-full hover:bg-background transition-all duration-200 hover:scale-110"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={20} />
          </a>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {link && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              View Project
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium border border-border hover:border-primary hover:text-primary transition-colors duration-200"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;