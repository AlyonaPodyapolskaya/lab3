import React from 'react';

//Создание компонента кнопки, которая содержит текст, а так же имеет имя класса
const Button = ({ onClick, text}) =>
{ return (<button onClick={onClick}>{text}</button>) };


export default Button;