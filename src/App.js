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
   
    const handleSelect =()=>{
      let checkboxes = document.querySelectorAll('input[type="checkbox"]');
      console.log(checkboxes);
      for(let checkbox of checkboxes){
         if(checkbox.checked===false){
          checkbox.checked = true;
          document.getElementById("allSelect").checked= true;
         }
         else{
          checkbox.checked = false;
          document.getElementById("allSelect").checked= false;
         }
         
      }
      
    }
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
  
      {divCount>0 &&<p><input name="allSelect" type="checkbox" id="allSelect" onChange={handleSelect}/> All checkbox</p>}
      
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
