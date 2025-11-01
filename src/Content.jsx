import themeContext from "./themeContext";
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";

import { useContext } from "react";

export default function Content() {

const context=useContext(themeContext)
const {theme,switchTheme}=context;


  return (
    <div>
      <h1>This is Content</h1>
      <Counter>
        {(count, incrementCount) => (
              <ClickCounter
                count={count}
                incrementCount={incrementCount}
                theme={theme}
                switchTheme={switchTheme}
              />
            )}
          
      </Counter>
    </div>
  );
}

//For Class based
//   return (
// <div>
// <h1>This is Content</h1>
// <Counter>
// {(count, incrementCount) => (
// <themeContext.Consumer>
// {({ theme ,switchTheme}) => (
// <ClickCounter
// count={count}
// incrementCount={incrementCount}
// theme={theme}
// switchTheme={switchTheme}
// />
// )}
// </themeContext.Consumer>
// )}
// </Counter>
// </div>
// );

