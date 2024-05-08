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
       <Character
           name={'Marge Simpson'}
           image={'https://icons.veryicon.com/png/Movie%20%26%20TV/Simpsons%204/Marge%20Simpson.png'}>
               Marjorie Jacqueline "Marge" Simpson(Born March 19) is the homemaker and ' +
               'matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series. ' +
               'She and her husband Homer have three children: Bart, Lisa, and Maggie. Marge is the moralistic force in ' +
               'her family and often provides a raspy and grounding voice in the midst of her family\'s antics by trying ' +
               'to maintain order in the Simpson household. Aside from her duties at home, Marge has flirted briefly with' +
               'a number of careers ranging from a police officer to an anti-violence activist.

       </Character>
       </>
  );
}

export default App;
