import './App.css'
import ClockList from './ClockList';
import Form from './Form';
import Calculator from './Calculator';

// import Text from './inheritance/Text'
import Text from './composition/Text'
import Emoji from './composition/Emoji'

import  ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'
import Counter from './Counter';
import Section from './section';
import React, { Component } from "react";
import themeContext from './themeContext';
class App extends Component {

  state={
    theme: 'light'
  }

switchTheme = () => {
  this.setState(({ theme }) => {
    if (theme === 'dark') {
      return { theme: 'light' };
    } else {
      return { theme: 'dark' };
    }
  });
};

  render() {
    
    const {theme}=this.state;
    return (
      <>
        <HoverCounter />
        <themeContext.Provider value={{theme, switchTheme:this.switchTheme}}>
        <Section/></themeContext.Provider>

     
      </>
    );
  }
}

export default App;
