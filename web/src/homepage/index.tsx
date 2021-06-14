import React from 'react';
import Content from './Content';
import NavBar from './NavBar';
import Title from './Title';

const index = () => {
  return (
    <div className="Homepage">
      <NavBar></NavBar>
      <Title></Title>
      <Content></Content>
    </div>
  )
}

export default index