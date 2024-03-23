import React from 'react';

const Menu = () => {
  const list_of_labs = ['Лабораторная работа 1', 'Лабораторная работа 2', 'Лабораторная работа 3'];
  const menuStyle = {
    position: 'fixed',
    top: '100px',
    height: '80%',
    width: '18%',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    boxSizing: 'border-box',
    borderRight: '1px solid #ccc',
  };

  return (
    <nav style={menuStyle}> 
      <ul>
        {list_of_labs.map((elem, index) => (
          <a href="#1"><li id='1' key={index}>{elem}</li></a>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;