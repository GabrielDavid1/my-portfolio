//React

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

function App() {
  return (
    <AppContainer>
      <Navigation />
      <ContentContainer>
        <Presentation />
        <Technologies />
        <Projects />
        <Improvement />
      </ContentContainer>
    </AppContainer>
  );
}

export default App;

const ContentContainer = styled.div`
    width: 100%;
    margin-left: 20%;
`;