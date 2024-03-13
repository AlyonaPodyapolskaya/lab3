import React from 'react';
import Page from './Components/Page';
import Button from './Components/Button';
import Navigation from './Components/Navigation';
import Container from './Components/Container';

const App = () => {
  const handleClick = () => {
    console.log("Кнопка нажата");;
  };
  return (
      <Page>
        <Container>
          <h3>Hello World</h3>
          <Navigation>
          </Navigation>
          <Button onClick={handleClick} text="Кнопка"/>
        </Container>
      </Page>
  );
};

export default App;