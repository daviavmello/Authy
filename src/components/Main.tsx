import React from "react";
import styled from "styled-components";
import { Login } from "./form/Login";
import { Hero } from "./hero/Hero";

export const Main: React.FC = () => {
  return (
    <MainWrapper>
      <Hero />
      <Login />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
