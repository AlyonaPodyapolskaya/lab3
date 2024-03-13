import React from 'react';

//Создание контейнера, в котором могут содержаться другие элементы страницы, так же имеет имя класса
const Navigation = ({ children}) => {
  return (<nav>
            <ol>
                <li><a href="https://ru.legacy.reactjs.org/">Cтраница React</a></li>
                <li><a href="/another">Ссылка на другую страницу</a></li>
            </ol>
            { children }
        </nav>)
};

export default Navigation;