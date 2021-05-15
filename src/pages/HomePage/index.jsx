import React from "react";

import Directory from "../../components/DirectoryMenu";

import { HomePageContainer } from "./styles";

const HomePage = () => {
  return (
    <HomePageContainer className="homepage">
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
