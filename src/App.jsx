import './App.css'
import ClockList from './ClockList';
import Form from './Form';


function App() {
const quantities=[1,2,3];
  return (
    <>
    <div> < ClockList  quantities={quantities}/></div>    
    <div> < Form/></div>    
    </>
  )
}

export default App
