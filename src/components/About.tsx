import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, var(--deep-charcoal) 0%, #0f0f0f 100%);
  display: flex;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
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

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutCard = styled(motion.div)`
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;

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
`;

const AboutText = styled.p`
  font-family: var(--font-sora);
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--muted-white);
  margin-bottom: 2rem;
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const ToolItem = styled(motion.div)`
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid var(--electric-cyan);
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  font-family: var(--font-orbitron);
  font-size: 0.9rem;
  color: var(--electric-cyan);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 255, 0.2);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const CTAButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-family: var(--font-orbitron);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  background: linear-gradient(
    45deg,
    var(--electric-cyan),
    var(--electric-violet)
  );
  color: var(--deep-charcoal);
  margin-top: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 255, 255, 0.3);
  }
`;

const About: React.FC = () => {
  const tools = [
    "React",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "Java",
    "Git",
    "REST APIs",
    "Vite",
    "Frontend Mentor",
    "Responsive Design",
  ];

  return (
    <AboutContainer>
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </SectionTitle>

        <AboutGrid>
          <AboutCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <AboutText>
              I'm Aubrey Anup Martin, a passionate Full Stack Developer and
              Master's Student in Software Engineering. I specialize in building
              responsive web applications using modern technologies like React,
              Node.js, and MongoDB.
            </AboutText>
            <AboutText>
              With a strong foundation in both frontend and backend development,
              I love creating user-friendly applications that solve real-world
              problems. I'm currently pursuing my Master's degree while actively
              contributing to open-source projects and building my portfolio.
            </AboutText>
            <CTAButton
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Let's Collaborate
            </CTAButton>
          </AboutCard>

          <AboutCard
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <h3
              style={{
                fontFamily: "var(--font-orbitron)",
                fontSize: "1.5rem",
                marginBottom: "1.5rem",
                color: "var(--electric-cyan)",
              }}
            >
              Favorite Tools & Stacks
            </h3>
            <ToolsGrid>
              {tools.map((tool, index) => (
                <ToolItem
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tool}
                </ToolItem>
              ))}
            </ToolsGrid>
          </AboutCard>
        </AboutGrid>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;
