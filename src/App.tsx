//React
import React from 'react';

//Styles
import './styles.css';

//Components
import AppContainer from './components/AppContainer';
import Navigation from './components/Navigation';
import Technologies from './components/Technologies';

function App() {
  return (
    <AppContainer>
      <Navigation />
      <Technologies />
    </AppContainer>
  );
}

export default App;
