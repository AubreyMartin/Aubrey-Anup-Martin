import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--glass-border);
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-family: var(--font-orbitron);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--electric-cyan);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a<{ active: boolean }>`
  color: ${(props) =>
    props.active ? "var(--electric-cyan)" : "var(--muted-white)"};
  text-decoration: none;
  font-family: var(--font-sora);
  font-weight: 500;
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${(props) => (props.active ? "100%" : "0%")};
    height: 2px;
    background: var(--electric-cyan);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--electric-cyan);
    &::after {
      width: 100%;
    }
  }
`;

interface NavigationProps {
  currentSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <NavContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavContent>
        <Logo onClick={() => scrollToSection("home")}>AM</Logo>

        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              active={currentSection === item.id}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

export default Navigation;
