import React from "react";
import { Key } from "react-feather";
import styled from "styled-components";

export const Logo: React.FC = () => {
  return (
    <LogoWrapper>
      <KeyLogo />
      <h1>authy</h1>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const KeyLogo = styled(Key)`
  margin-right: 1rem;
  width: auto;
  color: ${({ theme }) => theme.medium};
`;
