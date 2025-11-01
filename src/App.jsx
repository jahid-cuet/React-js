import './App.css'
import ClockList from './ClockList';
import Form from './Form';
import Calculator from './Calculator';

// import Text from './inheritance/Text'
import Text from './composition/Text'
import Emoji from './composition/Emoji'

import  ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'
import Counter from './Counter'

function App() {

  return (
    <>

  <HoverCounter />

  <Counter  
  render={(count, incrementCount) => (
    <ClickCounter count={count} incrementCount={incrementCount} />
  )}
/> 
    </>
  )
}

export default App
