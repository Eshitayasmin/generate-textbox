import './App.css';
import { useState } from 'react';

function App() {
    //state
    const [divCount, setDivCount] = useState(0);
    const [checks, setChecks] = useState([]);
 

   


    const appendChilddiv = (e) => {
      e.preventDefault()
      let v = document.getElementById("field").value;

      setDivCount(parseInt(v));
    };
    // document.getElementById("field").value="" ;

    let t=0;
    checks.map(function sum(element){
        let i = document.getElementById(`${element}`).value;
        t=t+parseFloat(i);
       console.log("tttt", t);
       document.getElementById("s").innerHTML=t;
      return t;
  });
   
    const handleSelect =()=>{
      let checkboxes = document.querySelectorAll('input[type="checkbox"]');
      let inputNumbers = document.querySelectorAll('input[type="number"]');
      console.log(inputNumbers);
      for(let checkbox of checkboxes){
         if(checkbox.checked===false){
          checkbox.checked = true;
          document.getElementById("allSelect").checked= true;
          document.getElementById("calculate").style.display="block";
          document.getElementById("singleCalculate").style.display="none";
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

   
   const handleCheck =(id)=>{
      let position = id+1;
      let allCheck = [...checks, position];
       setChecks(allCheck);
      document.getElementById("singleCalculate").style.display="block";
   }

   checks.sort((a, b) => a-b);
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
  
      {divCount>0 &&<p><input name="allSelect" type="checkbox" id="allSelect" onChange={handleSelect}/> All check</p>}
      
          {Array(divCount)
            .fill(0)
            .map((x, id) => (
              <div key={id}>
                <input onClick={()=>handleCheck(id)} type="checkbox" name="" id="singleCheck" />
                <input type="number" name="number" id={id+1}/>
              </div>
            ))}

  <p id="calculate">Selected all {divCount} items and Total number is <span id="total"></span></p>
  <p id="singleCalculate">selected {checks.length} Items, There position is
   { checks.map((p, _id )=> <span key={_id}>{p},</span>)}
   and Total Number is <span id="s"></span></p>
      </div>
    </div>
  );
}

export default App;
