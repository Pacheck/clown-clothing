import React from "react";

import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";

import { SignInAndSignOutContainer } from "./styles";

const SignPage = () => {
  return (
    <SignInAndSignOutContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignOutContainer>
  );
};

export default SignPage;
