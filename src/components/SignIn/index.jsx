import React from "react";

import FormInput from "../FormInput";
import CustomButton from "../CustomButton";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./index.scss";

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

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="sign-in">
        <h2>already have an account</h2>
        <span>Sign in with your email and password</span>

        <form>
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
          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {" "}
              Sign in Google{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
