import './App.css';
import { useState } from 'react';

function App() {
    //state
    const [divCount, setDivCount] = useState(0);

    const appendChilddiv = (e) => {
      e.preventDefault()
      let v = document.getElementById("field").value;

      setDivCount(parseInt(v));
    };
    // document.getElementById("field").value="" ;
   
  return (
    <div className="App">
 <form>
        <input
          id="field"
          type="number"
        />
        <button onClick={appendChilddiv} type="submit">submit</button>
      </form>

      <div>
  
      {divCount>0 &&<p><input type="checkbox" name="" id="" /> All checkbox</p>}
      
          {Array(divCount)
            .fill(0)
            .map((x, id) => (
              <div key={id}>
                <input type="checkbox" name="" id="" />
                <input type="number" name="" id=""/>
              </div>
            ))}
  
      </div>
    </div>
  );
}

export default App;
