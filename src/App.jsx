import './App.css'
import ClockList from './ClockList';
import Form from './Form';
import Calculator from './Calculator';

// import Text from './inheritance/Text'
import Text from './composition/Text'
import Emoji from './composition/Emoji'

import  ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

function App() {
// const quantities=[1,2,3];
  return (
    <>
    {/* <div> < ClockList  quantities={quantities}/></div>     */}
    {/* <div> < Form/></div>     */}

    {/* <Calculator/> */}
    {/* <Text/> */}
{/* <Emoji>
  {({ addEmoji }) => <Text addEmoji={addEmoji} />}
</Emoji> */}

  <ClickCounter />
  <HoverCounter />
    </>
  )
}

export default App
