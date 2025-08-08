import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SkillsContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, var(--deep-charcoal) 0%, #0f0f0f 100%);
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

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const ToggleButton = styled.button<{ active: boolean }>`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-family: var(--font-orbitron);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${(props) =>
    props.active
      ? "linear-gradient(45deg, var(--electric-cyan), var(--electric-violet))"
      : "transparent"};
  color: ${(props) =>
    props.active ? "var(--deep-charcoal)" : "var(--electric-cyan)"};
  border: 2px solid var(--electric-cyan);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 255, 0.3);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

const SkillCard = styled(motion.div)`
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
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

const SkillIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const SkillName = styled.h3`
  font-family: var(--font-orbitron);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--electric-cyan);
  margin-bottom: 1rem;
`;

const SkillLevel = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1rem;
`;

const SkillProgress = styled.div<{ level: number }>`
  height: 100%;
  background: linear-gradient(
    90deg,
    var(--electric-cyan),
    var(--electric-violet)
  );
  width: ${(props) => props.level}%;
  transition: width 0.3s ease;
`;

const Skills: React.FC = () => {
  const [activeView, setActiveView] = useState<"dev" | "design" | "ai">("dev");

  const skills = {
    dev: [
      { name: "React", icon: "⚛️", level: 95 },
      { name: "TypeScript", icon: "📘", level: 90 },
      { name: "Node.js", icon: "🟢", level: 88 },
      { name: "Python", icon: "🐍", level: 85 },
      { name: "AWS", icon: "☁️", level: 80 },
      { name: "Docker", icon: "🐳", level: 75 },
      { name: "MongoDB", icon: "🍃", level: 85 },
      { name: "PostgreSQL", icon: "🐘", level: 80 },
    ],
    design: [
      { name: "Figma", icon: "🎨", level: 90 },
      { name: "Adobe XD", icon: "✏️", level: 85 },
      { name: "Sketch", icon: "📐", level: 80 },
      { name: "InVision", icon: "👁️", level: 75 },
      { name: "Principle", icon: "🎭", level: 70 },
      { name: "Framer", icon: "🚀", level: 85 },
    ],
    ai: [
      { name: "TensorFlow", icon: "🧠", level: 85 },
      { name: "OpenAI API", icon: "🤖", level: 90 },
      { name: "PyTorch", icon: "🔥", level: 80 },
      { name: "Scikit-learn", icon: "📊", level: 85 },
      { name: "Hugging Face", icon: "🤗", level: 75 },
      { name: "LangChain", icon: "🔗", level: 80 },
    ],
  };

  return (
    <SkillsContainer>
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills
        </SectionTitle>

        <ToggleContainer>
          <ToggleButton
            active={activeView === "dev"}
            onClick={() => setActiveView("dev")}
          >
            Dev View
          </ToggleButton>
          <ToggleButton
            active={activeView === "design"}
            onClick={() => setActiveView("design")}
          >
            Design View
          </ToggleButton>
          <ToggleButton
            active={activeView === "ai"}
            onClick={() => setActiveView("ai")}
          >
            AI Tools
          </ToggleButton>
        </ToggleContainer>

        <SkillsGrid>
          {skills[activeView].map((skill, index) => (
            <SkillCard
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillName>{skill.name}</SkillName>
              <SkillLevel>
                <SkillProgress level={skill.level} />
              </SkillLevel>
            </SkillCard>
          ))}
        </SkillsGrid>
      </ContentWrapper>
    </SkillsContainer>
  );
};

export default Skills;
