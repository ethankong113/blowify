import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const Header = (props) => {
  return (
    <header>
      <AppBar title="Blowify"
        iconElementLeft={<div></div>}
        iconElementRight={<div><FlatButton label={"Signup"}/><FlatButton label={"Login"}/></div>}
        />
    </header>
  );
};

export default Header;
