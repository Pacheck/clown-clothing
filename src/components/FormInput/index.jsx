import React from "react";

import { GroupContainer, InputForm, FormLabel } from "./styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <InputForm onChange={handleChange} {...otherProps} />
    {label ? (
      <FormLabel {...(otherProps.value.length ? "shrink" : "")}>
        {label}
      </FormLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
