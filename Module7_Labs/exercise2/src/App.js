
import {useState} from 'react';
import React from 'react';

import { EmojiContext } from './components/EmojiContext';
import Emoji from './components/Emoji';


function App() {

  return (
    <div className="App">
      <header className="App-header">

        <Emoji/>

        <EmojiContext.Provider value = {{emoji, setEmoji}}>
          
        </EmojiContext.Provider>
       

      </header>
    </div>
  );
}

export default App;