import React, { useEffect, useState } from "react";
import { LogIn } from "react-feather";
import styled from "styled-components";

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    const emailFormat = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (emailFormat.test(email)) {
      console.log(email);
    } else {
      console.log(`wrong format ${email}`);
    }
  }, [email]);

  return (
    <FormWrapper>
      <Input
        type="email"
        placeholder="e-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <SubmitButton disabled={isDisabled}>
        submit&nbsp;
        <LogintIcon />
      </SubmitButton>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  width: calc(50% - 7.5rem);
  height: calc(95vh - 6rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
  @media (max-width: 767px) {
    width: 100%;
    padding-left: 0;
  }
  @media (min-width: 768px) {
    width: calc(50% - 1rem);
  }
  @media (min-width: 992px) {
    width: calc(50% - 1rem);
  }
`;

const Input = styled.input``;
const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0.25rem 1rem;
`;
const LogintIcon = styled(LogIn)`
  width: 1rem;
`;

const ValidationText = styled.h4`
  font-family: "Consolas", "Courier", monospace;
  color: ${({ theme }) => theme.tertiary};
`;

