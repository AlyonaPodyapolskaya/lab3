import React from 'react';

const Footer = () => {
  const footerStyle = {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#355',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
  };
  return (
    <footer style={footerStyle}>
      <h2>Footer</h2>
    </footer>
  );
};

export default Footer;