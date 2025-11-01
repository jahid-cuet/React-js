import React from 'react';
export default function ClickCounter({count,incrementCount,theme,switchTheme}){
    
  const style= theme==='dark'?{
    backgroundColor: '#000000', color: '#ffffff'
  } :null
return(
    <div>
  <button type="button" onClick={incrementCount} style={style}>
        Clicked {count} times
      </button>

  <button type='button' onClick={switchTheme}>Change Theme</button>
    </div>

)

    }



