import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, var(--deep-charcoal) 0%, #1a1a1a 100%);
`;

const BackgroundParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

const ContentContainer = styled.div`
  text-align: center;
  z-index: 2;
  position: relative;
  max-width: 800px;
  padding: 0 2rem;
`;

const Title = styled(motion.h1)`
  font-family: var(--font-orbitron);
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(
    45deg,
    var(--electric-cyan),
    var(--electric-violet),
    var(--electric-lime)
  );
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled(motion.p)`
  font-family: var(--font-sora);
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  color: var(--muted-grey);
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
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
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  background: linear-gradient(
    45deg,
    var(--electric-cyan),
    var(--electric-violet)
  );
  color: var(--deep-charcoal);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0, 255, 255, 0.4);

    &::before {
      left: 100%;
    }
  }
`;

const SecondaryButton = styled(CTAButton)`
  background: transparent;
  border: 2px solid var(--electric-cyan);
  color: var(--electric-cyan);

  &:hover {
    background: var(--electric-cyan);
    color: var(--deep-charcoal);
  }
`;

const Hero: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticles = () => {
      if (!particlesRef.current) return;

      const particles: HTMLDivElement[] = [];
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 3 + "s";
        particle.style.animationDuration = Math.random() * 3 + 2 + "s";
        particlesRef.current.appendChild(particle);
        particles.push(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <HeroContainer>
      <BackgroundParticles ref={particlesRef} />

      <ContentContainer>
        <Title
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Aubrey Anup Martin
        </Title>

        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Full Stack Developer | Master's Student in Software Engineering |
          Passionate about building responsive web applications with React,
          Node.js, and MongoDB.
        </Subtitle>

        <ButtonContainer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <CTAButton
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            🚀 View Projects
          </CTAButton>

          <SecondaryButton
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1G3TrKKtRXE-BQYSq3QQekTo8pU0CUFRr/view?usp=sharing",
                "_blank"
              )
            }
          >
            📄 Download Resume
          </SecondaryButton>

          <CTAButton
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            ⚡ Contact Me
          </CTAButton>
        </ButtonContainer>
      </ContentContainer>
    </HeroContainer>
  );
};

export default Hero;
