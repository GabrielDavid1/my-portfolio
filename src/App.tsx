//React
import { useState } from 'react';

//Styles
import './styles.css';
import styled from 'styled-components';

//Components
import AppContainer from './components/AppContainer';
import Navigation from './components/Navigation';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Presentation from './components/Presentation';
import Improvement from './components/Improvement';

export default function App() {
  const [toggleLanguage, setToggleLanguage] = useState(false);

  return (
    <AppContainer>
      <Navigation toggleLanguage={toggleLanguage} setToggleLanguage={setToggleLanguage} />
      <ContentContainer>
        <Presentation toggleLanguage={toggleLanguage} />
        <Technologies />
        <Projects toggleLanguage={toggleLanguage} />
        <Improvement toggleLanguage={toggleLanguage} />
      </ContentContainer>
    </AppContainer>
  );
}

const ContentContainer = styled.div`
    width: 100%;
    margin-left: 20%;
`;