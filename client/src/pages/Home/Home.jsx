import React from 'react';
import NavBar from '../../components/NavBar/NavBar.jsx';
import Form from '../../components/Form/Form.jsx';
import Hero from '../../components/Hero/Hero.jsx';

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Form/>
    </div>
  )
}
