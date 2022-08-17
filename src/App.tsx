//React
import { useEffect, useRef, useState } from "react";

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

export default function App() {
  const [positionScroll, setPositionScroll] = useState<boolean>(false);
  const [toggleLanguage, setToggleLanguage] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppContainer>
      <Navigation
        toggleLanguage={toggleLanguage}
        positionScroll={positionScroll}
        setPositionScroll={setPositionScroll}
        setToggleLanguage={setToggleLanguage}
      />
      <ContentContainer>
        <Presentation toggleLanguage={toggleLanguage} />
        <Technologies />
        <Projects toggleLanguage={toggleLanguage} />
        <Improvement
          toggleLanguage={toggleLanguage}
          positionScroll={positionScroll}
        />
      </ContentContainer>
    </AppContainer>
  );
}

const ContentContainer = styled.div`
  width: 100%;
  margin-left: 20%;
`;
