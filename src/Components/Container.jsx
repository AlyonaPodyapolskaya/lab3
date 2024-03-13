import React from 'react';

//Создание контейнера, в котором могут содержаться другие элементы страницы, так же имеет имя класса
const Container = ({ children}) => {
  return (<div>{children}</div>)
};

export default Container;