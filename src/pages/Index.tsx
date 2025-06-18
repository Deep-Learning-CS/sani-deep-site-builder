import { Github, ExternalLink, Mail, Code, Database, Brain, ArrowRight, Building, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleViewWork = () => {
    console.log("View Work button clicked");
    toast({
      title: "Audio Noise Reduction using Deep Learning",
      description: "Redirecting to my audio denoising web application showcasing machine learning models for noise reduction...",
      duration: 3000,
    });
    
    setTimeout(() => {
      console.log("Opening Audio Noise Reduction project URL");
      window.open('https://course-project-deep-learning.vercel.app/', '_blank');
    }, 2000);
  };

  const handleGithubProfile = () => {
    console.log("GitHub Profile button clicked");
    window.open('https://github.com/Deep-Learning-CS', '_blank');
  };

  const projects = [
    {
      title: "Audio Noise Reduction using Deep Learning",
      description: "Full-stack audio denoising web app integrating 3 ML models with optimized audio chunking",
      tech: ["Python", "React", "FastAPI", "PyTorch", "DNS48"],
      github: "https://course-project-deep-learning.vercel.app/",
      featured: true
    },
    {
      title: "Expert System for Neurological Disorder Detection",
      description: "Python expert system analyzing 20+ neurological symptoms for diagnostic confidence scoring",
      tech: ["Python", "Machine Learning", "Medical AI", "Fuzzy Logic"],
      github: "https://github.com/sanidhaya/Expert-System-for-neurological-disorder",
      featured: true
    }
  ];

  const experience = [
    {
      company: "PFW",
      role: "IT Help Desk",
      period: "November 2024 — Present",
      description: "Managing system configurations and security updates, ensuring compliance with organizational IT policies."
    },
    {
      company: "EPAM Systems",
      role: "Software Engineer",
      period: "March 2024 — July 2024",
      description: "Built 3 web applications using .NET C framework. Reduced page load time by 40% and increased user satisfaction scores by 25%."
    },
    {
      company: "Telkes Technologies",
      role: "Backend Engineer",
      period: "November 2023 — February 2024",
      description: "Built 5 RESTful APIs with 98.6% uptime rating. Implemented disaster recovery plan reducing system downtime from 4 hours to 30 minutes."
    },
    {
      company: "Dunzo",
      role: "Software Engineering Intern",
      period: "January 2023 — July 2023",
      description: "Automated 8 manual workflows using Python scripts. Built 3 internal tools for performance requests processing 300+ requests monthly."
    }
  ];

  const skills = [
    { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "Java", "C++"] },
    { category: "AI/ML", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV"] },
    { category: "Web Dev", items: ["React", "Node.js", "Express", "HTML/CSS", "REST APIs"] },
    { category: "Tools", items: ["Git", "Docker", "VS Code", "Jupyter", "Linux"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20" />
        <div className="container mx-auto px-6 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Sanidhaya
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                Software Developer & Deep Learning Enthusiast
              </p>
              <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
                Passionate about building intelligent systems and creating innovative solutions 
                through code. Exploring the intersection of software development and artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 group cursor-pointer transition-all duration-200 hover:scale-105"
                  onClick={handleViewWork}
                  type="button"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-slate-600 text-slate-300 bg-transparent hover:bg-slate-700 hover:text-white hover:border-slate-500 cursor-pointer transition-all duration-200"
                  onClick={handleGithubProfile}
                  type="button"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-slate-800/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              My journey in software development and technology roles
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {experience.map((exp, index) => (
              <Card 
                key={index} 
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-white text-xl flex items-center gap-2">
                        <Building className="h-5 w-5 text-blue-400" />
                        {exp.company}
                      </CardTitle>
                      <p className="text-cyan-400 font-medium mt-1">{exp.role}</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0 w-fit">
                      <Calendar className="h-3 w-3 mr-1" />
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A collection of my work spanning deep learning, software development, and innovative solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-white text-xl mb-2 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      {project.featured && (
                        <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0 mb-3">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className="text-slate-400 hover:text-white hover:bg-slate-700"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardDescription className="text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-slate-700 text-slate-300 hover:bg-slate-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
            <p className="text-slate-400 text-lg">
              Technologies I work with to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-white text-lg flex items-center gap-2">
                    {skillGroup.category === "Languages" && <Code className="h-5 w-5 text-blue-400" />}
                    {skillGroup.category === "AI/ML" && <Brain className="h-5 w-5 text-cyan-400" />}
                    {skillGroup.category === "Web Dev" && <ExternalLink className="h-5 w-5 text-green-400" />}
                    {skillGroup.category === "Tools" && <Database className="h-5 w-5 text-purple-400" />}
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="border-slate-600 text-slate-300 hover:border-blue-400 hover:text-blue-400 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
            <div className="text-lg text-slate-300 leading-relaxed space-y-6">
              <p>
                I'm a passionate software developer with a strong focus on deep learning and artificial intelligence. 
                My journey in technology spans across multiple domains, from building web applications to developing 
                sophisticated machine learning models.
              </p>
              <p>
                With experience in both theoretical computer science and practical software development, 
                I enjoy tackling complex problems and finding elegant solutions. My work involves everything 
                from neural network architectures to full-stack web development.
              </p>
              <p>
                I'm always eager to learn new technologies and collaborate on innovative projects that push 
                the boundaries of what's possible with code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
            <p className="text-lg text-slate-300 mb-12">
              Interested in collaborating or have a project in mind? I'd love to hear from you!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 cursor-pointer"
                onClick={() => window.open('https://github.com/sanidhaya', '_blank')}
                type="button"
              >
                <Github className="mr-2 h-5 w-5" />
                Main GitHub
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 cursor-pointer"
                onClick={() => window.open('https://github.com/Deep-Learning-CS', '_blank')}
                type="button"
              >
                <Brain className="mr-2 h-5 w-5" />
                Deep Learning Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white cursor-pointer"
                onClick={() => window.open('mailto:your.email@example.com', '_blank')}
                type="button"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center text-slate-400">
            <p>&copy; 2024 Sanidhaya. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
