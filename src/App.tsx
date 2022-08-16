//React

//Styles
import './styles.css';
import styled from 'styled-components';

//Components
import AppContainer from './components/AppContainer';
import Navigation from './components/Navigation';
import Technologies from './components/Technologies';
import Projects from './components/Projects';

function App() {
  return (
    <AppContainer>
      <Navigation />
      <ContentContainer>
        <Technologies />
        <Projects />
      </ContentContainer>
    </AppContainer>
  );
}

export default App;

const ContentContainer = styled.div`
    width: 100%;
    margin-left: 20%;
`;