//React
import React from 'react';

//Styles
import './styles.css';

//Components
import Presentation from './components/Presentation';
import AppContainer from './components/AppContainer';
import Navigation from './components/Navigation';

function App() {
  return (
    <AppContainer>
      <Navigation />
      <Presentation />
    </AppContainer>
  );
}

export default App;
