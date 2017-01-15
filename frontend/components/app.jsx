import React from 'react';
import Material from 'material-ui/styles/MuiThemeProvider';
import Header from './header/header';

const App = (props) => {
  return (
    <Material>
      <Header />
    </Material>
  );
};

export default App;
