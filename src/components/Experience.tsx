import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ExperienceContainer = styled.section`
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

const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      180deg,
      var(--electric-cyan),
      var(--electric-violet)
    );
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 2rem;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  width: 100%;

  &:nth-child(odd) {
    .timeline-content {
      margin-left: 0;
      margin-right: 50%;
      text-align: right;
      padding-right: 3rem;

      @media (max-width: 768px) {
        margin-right: 0;
        margin-left: 4rem;
        text-align: left;
        padding-right: 0;
        padding-left: 2rem;
      }
    }

    .timeline-dot {
      left: 50%;
      transform: translateX(-50%);

      @media (max-width: 768px) {
        left: 2rem;
        transform: translateX(-50%);
      }
    }
  }

  &:nth-child(even) {
    .timeline-content {
      margin-left: 50%;
      margin-right: 0;
      text-align: left;
      padding-left: 3rem;

      @media (max-width: 768px) {
        margin-left: 4rem;
        margin-right: 0;
        padding-left: 2rem;
      }
    }

    .timeline-dot {
      right: 50%;
      transform: translateX(50%);

      @media (max-width: 768px) {
        left: 2rem;
        right: auto;
        transform: translateX(-50%);
      }
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: var(--electric-cyan);
  border-radius: 50%;
  border: 4px solid var(--deep-charcoal);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
  z-index: 2;
`;

const TimelineContent = styled.div`
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 2rem;
  position: relative;

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

const TimelineTitle = styled.h3`
  font-family: var(--font-orbitron);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--electric-cyan);
  margin-bottom: 0.5rem;
`;

const TimelineCompany = styled.h4`
  font-family: var(--font-sora);
  font-size: 1.1rem;
  color: var(--electric-violet);
  margin-bottom: 0.5rem;
`;

const TimelineDate = styled.span`
  font-family: var(--font-sora);
  font-size: 0.9rem;
  color: var(--muted-grey);
  margin-bottom: 1rem;
  display: block;
`;

const TimelineDescription = styled.p`
  font-family: var(--font-sora);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--muted-white);
`;

const DownloadButton = styled.button`
  display: block;
  margin: 3rem auto 0;
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
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 255, 255, 0.3);
  }
`;

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Freelance/Self-Employed",
      date: "2023 - Present",
      description:
        "Building responsive web applications using React, Node.js, and MongoDB. Specializing in modern frontend development with TypeScript and creating RESTful APIs.",
    },
    {
      id: 2,
      title: "Master's Student in Software Engineering",
      company: "University",
      date: "2023 - Present",
      description:
        "Currently pursuing a Master's degree in Software Engineering, focusing on modern web development technologies, software architecture, and best practices.",
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Personal Projects",
      date: "2022 - Present",
      description:
        "Developed multiple frontend projects including personal blogs, product feedback apps, and interactive components using React, TypeScript, and modern CSS.",
    },
    {
      id: 4,
      title: "Backend Developer",
      company: "Personal Projects",
      date: "2022 - Present",
      description:
        "Created REST APIs and backend services using Node.js and MongoDB. Built full-stack applications with modern development practices and database design.",
    },
  ];

  return (
    <ExperienceContainer>
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </SectionTitle>

        <TimelineContainer>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TimelineDot className="timeline-dot" />
              <TimelineContent className="timeline-content">
                <TimelineTitle>{experience.title}</TimelineTitle>
                <TimelineCompany>{experience.company}</TimelineCompany>
                <TimelineDate>{experience.date}</TimelineDate>
                <TimelineDescription>
                  {experience.description}
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>

        <DownloadButton
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1G3TrKKtRXE-BQYSq3QQekTo8pU0CUFRr/view?usp=sharing",
              "_blank"
            )
          }
        >
          📄 Download Resume
        </DownloadButton>
      </ContentWrapper>
    </ExperienceContainer>
  );
};

export default Experience;
