import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CursorDot = styled.div<{ x: number; y: number; isHovering: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid var(--electric-cyan);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: all 0.1s ease;
  mix-blend-mode: difference;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  transform: ${(props) => (props.isHovering ? "scale(1.5)" : "scale(1)")};
  border-color: ${(props) =>
    props.isHovering ? "var(--electric-violet)" : "var(--electric-cyan)"};
  box-shadow: ${(props) =>
    props.isHovering
      ? "0 0 20px var(--electric-violet)"
      : "0 0 5px var(--electric-cyan)"};
`;

const CursorFollower = styled.div<{
  x: number;
  y: number;
  isHovering: boolean;
}>`
  width: 8px;
  height: 8px;
  background: ${(props) =>
    props.isHovering ? "var(--electric-violet)" : "var(--electric-cyan)"};
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: all 0.3s ease;
  mix-blend-mode: difference;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  transform: ${(props) => (props.isHovering ? "scale(0.5)" : "scale(1)")};
`;

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX - 10, y: e.clientY - 10 });
    };

    const updateFollowerPosition = (e: MouseEvent) => {
      setFollowerPosition({ x: e.clientX - 4, y: e.clientY - 4 });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        (target.closest && target.closest("button")) ||
        target.tagName === "A" ||
        (target.closest && target.closest("a"))
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mousemove", updateFollowerPosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mousemove", updateFollowerPosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <CursorDot x={position.x} y={position.y} isHovering={isHovering} />
      <CursorFollower
        x={followerPosition.x}
        y={followerPosition.y}
        isHovering={isHovering}
      />
    </>
  );
};

export default CustomCursor;
