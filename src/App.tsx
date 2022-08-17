//React
import { useEffect, useState } from "react";

//Styles
import "./styles.css";
import styled from "styled-components";

//Components
import AppContainer from "./components/AppContainer";
import Navigation from "./components/Navigation";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Presentation from "./components/Presentation";
import Improvement from "./components/Improvement";
import Marker from "./components/Marker";

export default function App() {
  const [index, setIndex] = useState<number>(1);
  const [toggleLanguage, setToggleLanguage] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppContainer>
      <Navigation
        setIndex={setIndex}
        toggleLanguage={toggleLanguage}
        setToggleLanguage={setToggleLanguage}
      />
      <ContentContainer>
        <Presentation toggleLanguage={toggleLanguage} />
        <Technologies />
        <Projects toggleLanguage={toggleLanguage} />
        <Improvement
          toggleLanguage={toggleLanguage}
        />
        <Marker index={index} />
      </ContentContainer>
    </AppContainer>
  );
}

const ContentContainer = styled.div`
  width: 100%;
  margin-left: 20%;
`;
