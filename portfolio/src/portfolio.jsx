import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Layout, Database, Terminal } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description: "Built a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented user authentication, shopping cart, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Developed a responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Created a weather dashboard that displays current weather and 5-day forecast using OpenWeather API. Implemented location-based weather detection.",
      tech: ["JavaScript", "REST API", "HTML5", "CSS3"],
      github: "#",
      live: "#"
    }
  ];

  const skills = {
    "Frontend": ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Redux"],
    "Backend": ["Node.js", "Express", "MongoDB", "Firebase"],
    "Tools": ["Git", "VS Code", "Postman", "npm"]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-700 sm:text-3xl">
              GANDHAM SANDEEP GOUD
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Web Developer | Full Stack Engineer
            </p>
            <div className="mt-6 flex justify-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
          <p className="text-lg text-gray-600">
            I'm a passionate web developer with a strong foundation in both frontend and backend technologies. 
            Recently graduated with a degree in Computer Science, I love building responsive and user-friendly 
            web applications. Currently seeking opportunities to contribute to innovative projects and grow as a developer.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  {category === "Frontend" && <Layout className="text-blue-500" />}
                  {category === "Backend" && <Database className="text-green-500" />}
                  {category === "Tools" && <Terminal className="text-purple-500" />}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a href={project.live} className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            feel free to reach out!
          </p>
          <a 
            href="mailto:your.email@example.com" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            <Mail className="mr-2" size={20} />
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;