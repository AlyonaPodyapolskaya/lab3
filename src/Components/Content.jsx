import React from 'react';

const Content = ({ contents_of_component, children }) => {
    const contentStyle = {
        marginLeft: '20%',
        padding: '10px',
        boxSizing: 'border-box',
        marginTop: '100px',
      };
  return (
    <div style={contentStyle}>
      <h2>Содержимое</h2>
      <p>{contents_of_component}</p>
      {children}
    </div>
  );
};

export default Content;