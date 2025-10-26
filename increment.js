
const domContainer=document.querySelector("#root");

// const myElement =React.createElement("div",null,[
//     React.createElement("p",null,"hello world"),
//     React.createElement("p",null,"hello world"),
// ]);
const Increment=()=>{
    const[counter,setCounter]=React.useState(0);
    return(
 <div>
    <h1 id="display">{ counter} </h1>
    <button id="button" onClick={ ()=>setCounter(counter+1) }>Increment +</button>
  </div>
    );

};

// ✅ React 18 way
const root = ReactDOM.createRoot(domContainer);
root.render(<Increment />);
