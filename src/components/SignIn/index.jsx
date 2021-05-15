import React from "react";

import FormInput from "../FormInput";
import CustomButton from "../CustomButton";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

import { SignInContainer, Text, CustomForm, ButtonsContainer } from "./styles";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <SignInContainer>
        <Text as="h2">already have an account</Text>
        <Text>Sign in with your email and password</Text>

        <CustomForm onSubmit={this.handleSubmit}>
          <FormInput
            label="email"
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />

          <FormInput
            label="password"
            type="password"
            name="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />
          <ButtonsContainer>
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              {" "}
              Sign in Google{" "}
            </CustomButton>
          </ButtonsContainer>
        </CustomForm>
      </SignInContainer>
    );
  }
}

export default SignIn;
