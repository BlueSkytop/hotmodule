import React from 'react';

import './App.css';
import Character from "./components/character/Character";

function App() {
  return (
   <>
       <Character name={'Bart Simpson'}
                  image={'https://seeklogo.com/images/B/bart-simpson-logo-A3BCF65934-seeklogo.com.png'}
       />
       <Character name={'Homer Simpson'}
                  image={'https://static.miraheze.org/loathsomecharacterswiki/thumb/3/32/Mmm_pork_rinds.png/300px-Mmm_pork_rinds.png'}
       />
       </>
  );
}

export default App;
