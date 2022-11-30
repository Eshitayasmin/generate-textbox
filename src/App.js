import './App.css';
import { useState } from 'react';

function App() {
    //state
    const [divCount, setDivCount] = useState(0);
    const [check, setCheck] = useState(false);

    const appendChilddiv = (e) => {
      e.preventDefault()
      let v = document.getElementById("field").value;

      setDivCount(parseInt(v));
    };
    // document.getElementById("field").value="" ;
   
    const handleSelect =()=>{
      let checkboxes = document.querySelectorAll('input[type="checkbox"]');
      let inputNumbers = document.querySelectorAll('input[type="number"]');
      console.log(inputNumbers);
      for(let checkbox of checkboxes){
         if(checkbox.checked===false){
          checkbox.checked = true;
          document.getElementById("allSelect").checked= true;
          document.getElementById("calculate").style.display="block";
         }
         else{
          checkbox.checked = false;
          document.getElementById("allSelect").checked= false;
          document.getElementById("calculate").style.display="none";
         } 
      }
      let total=0;
      for(let number of inputNumbers){
       total= total+ parseFloat(number.value); 
       console.log(total);
       document.getElementById("total").innerHTML=total;
      }
      
    }

   
  return (
    <div className="App">
 <form>
        <input
          id="field"
          type="text"
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
                <input type="number" name="number" className="f"/>
              </div>
            ))}
  <p id="calculate">Selected all {divCount} items and Total number is <span id="total"></span></p>
      </div>
    </div>
  );
}

export default App;
