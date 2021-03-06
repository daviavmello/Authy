import React from "react";
import styled from "styled-components";

export const Hero: React.FC = () => {

  return (
    <HeroWrapper>
      <h2>
        Your safety
        <br />
        in first place
        <br />
        today and always.
      </h2>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  width: calc(50% - 7.5rem);
  height: calc(95vh - 6rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 1rem;

  @media (max-width: 767px) {
    width: 100%;
    padding-right: 0;
  }

  @media (min-width: 768px) {
    width: calc(50% - 1rem);
  }

  @media (min-width: 992px) {
    width: calc(50% - 1rem);
  }
`;