import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0f0f0f 0%, var(--deep-charcoal) 100%);
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-family: var(--font-orbitron);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(
    45deg,
    var(--electric-cyan),
    var(--electric-violet)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      var(--electric-cyan),
      var(--electric-violet)
    );
  }

  &:hover {
    border-color: var(--electric-cyan);
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
  }
`;

const ProjectImage = styled.div<{ bgImage?: string }>`
  width: 100%;
  height: 200px;
  background: ${(props) =>
    props.bgImage
      ? `url(${props.bgImage})`
      : "linear-gradient(45deg, var(--electric-cyan), var(--electric-violet))"};
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(0, 255, 255, 0.1),
      rgba(138, 43, 226, 0.1)
    );
  }
`;

const ProjectTitle = styled.h3`
  font-family: var(--font-orbitron);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--electric-cyan);
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-family: var(--font-sora);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--muted-white);
  margin-bottom: 1.5rem;
`;

const StackIcons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const StackIcon = styled.span`
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid var(--electric-cyan);
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
  color: var(--electric-cyan);
  font-family: var(--font-orbitron);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-family: var(--font-orbitron);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.8rem;
  background: linear-gradient(
    45deg,
    var(--electric-cyan),
    var(--electric-violet)
  );
  color: var(--deep-charcoal);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 255, 0.3);
  }
`;

const SecondaryButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-family: var(--font-orbitron);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.8rem;
  background: transparent;
  border: 1px solid var(--electric-cyan);
  color: var(--electric-cyan);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 255, 0.3);
  }
`;

interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  image?: string;
  liveUrl?: string;
  codeUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Personal Blog Frontend",
      description:
        "A modern, responsive personal blog built with React and Vite, inspired by Frontend Mentor. Features dynamic article listing from JSON, modular components, and clean design.",
      stack: ["React", "Vite", "CSS", "JavaScript"],
      codeUrl: "https://github.com/AubreyMartin/personal-blog-frontend-mento",
    },
    {
      id: 2,
      title: "Product Feedback App",
      description:
        "A comprehensive product feedback application built with TypeScript, featuring user authentication, feedback management, and real-time updates.",
      stack: ["TypeScript", "React", "Node.js", "MongoDB"],
      codeUrl: "https://github.com/AubreyMartin/product-feedback-app",
    },
    {
      id: 3,
      title: "Product Feedback REST API",
      description:
        "A simple REST API built with Node.js and MongoDB for collecting, managing, and retrieving product feedback. Provides endpoints for CRUD operations.",
      stack: ["Node.js", "MongoDB", "REST API", "JavaScript"],
      codeUrl: "https://github.com/AubreyMartin/product-feedback-restapi",
    },
    {
      id: 4,
      title: "Book My Consultation",
      description:
        "A consultation booking platform with user interface and backend services. Features appointment scheduling, user management, and responsive design.",
      stack: ["JavaScript", "React", "Node.js", "MongoDB"],
      codeUrl: "https://github.com/AubreyMartin/bookmyconsultation",
    },
    {
      id: 5,
      title: "Bento Grid Layout",
      description:
        "A modern bento grid layout component with responsive design and interactive elements. Perfect for showcasing content in an organized grid format.",
      stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      codeUrl: "https://github.com/AubreyMartin/bento-grid-layout",
    },
    {
      id: 6,
      title: "Launch Countdown Timer",
      description:
        "An interactive countdown timer application with modern design and smooth animations. Features customizable countdown periods and visual feedback.",
      stack: ["HTML", "CSS", "JavaScript", "Animations"],
      codeUrl: "https://github.com/AubreyMartin/launch-countdown-timer",
    },
  ];

  return (
    <ProjectsContainer>
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </SectionTitle>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
              }}
            >
              <ProjectImage bgImage={project.image} />

              <ProjectTitle>{project.title}</ProjectTitle>

              <ProjectDescription>{project.description}</ProjectDescription>

              <StackIcons>
                {project.stack.map((tech) => (
                  <StackIcon key={tech}>{tech}</StackIcon>
                ))}
              </StackIcons>

              <ButtonGroup>
                {project.liveUrl && (
                  <PrimaryButton
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    🚀 View Live
                  </PrimaryButton>
                )}

                {project.codeUrl && (
                  <SecondaryButton
                    onClick={() => window.open(project.codeUrl, "_blank")}
                  >
                    👾 View Code
                  </SecondaryButton>
                )}
              </ButtonGroup>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ContentWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
