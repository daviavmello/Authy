import React from "react";
import { Moon, Sun } from "react-feather";
import styled from "styled-components";
import { useColorMode } from "../../contexts/colorContext";
import { Logo } from "./Logo";

export const Navbar: React.FC = () => {
  const { colorMode, setColorMode } = useColorMode();

  const handleColorMode = (color: string) => {
    localStorage.setItem("color-mode", color);
    setColorMode(color);
  };

  return (
    <NavWrapper>
      <Logo />
      {colorMode === "dark" ? (
        <SunIcon onClick={() => handleColorMode("light")} />
      ) : (
        <MoonIcon onClick={() => handleColorMode("dark")} />
      )}
    </NavWrapper>
  );
};
const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  height: 5vh;
`;

const SunIcon = styled(Sun)`
  cursor: pointer;
  width: auto;
  color: ${({ theme }) => theme.medium};
`;

const MoonIcon = styled(Moon)`
  cursor: pointer;
  width: auto;
  color: ${({ theme }) => theme.medium};
`;
