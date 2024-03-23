import React from 'react';

const Header = () => {
  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#355',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    zIndex: 1000 
  };
  return (
    <header style={headerStyle}>
      <h1>Header</h1>
    </header>
  );
};

export default Header;