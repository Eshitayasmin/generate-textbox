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

  let t = 0;
  checks.map(function sum(element) {
    let value = document.getElementById(`${element}`).value;
    t = t + parseFloat(value);
    //  console.log("tttt", t);

    document.getElementById("s").innerHTML = t;



    return t;
  });


  const handleSelect = () => {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let inputNumbers = document.querySelectorAll('input[type="number"]');
    // console.log(inputNumbers);
    for (let checkbox of checkboxes) {
      if (checkbox.checked === false) {
        checkbox.checked = true;
        document.getElementById("allSelect").checked = true;
        document.getElementById("calculate").style.display = "block";
        document.getElementById("singleCalculate").style.display = "none";
      }
      else {
        checkbox.checked = false;
        document.getElementById("allSelect").checked = false;
        document.getElementById("calculate").style.display = "none";
      }
    }
    let total = 0;
    for (let number of inputNumbers) {
      total = total + parseFloat(number.value);
      //  console.log(total);

      if (!isNaN(total) === true) {
        document.getElementById("total").innerHTML = total;
      }
      else {
        document.getElementById("total").innerHTML = 0;
      }
    }

  }



  const handleCheck = (id) => {

    let position = id + 1;
    if (!checks.includes(position)) {
      let allCheck = [...checks, position];
      setChecks(allCheck);
    }

    document.getElementById("allSelect").checked = false;
    document.getElementById("calculate").style.display = "none";
    document.getElementById("singleCalculate").style.display = "block";



  }

  checks.sort((a, b) => a - b);
  return (
    <div className="App">
      <form>
        <input
          id="field"
          type="text"
          className='numOfTextBoxField'
          placeholder='Enter Number of Textbox'
        />
        <button className='add-textbox-button' onClick={appendChilddiv} type="submit">Add Textbox</button>
      </form>

      <div className='result-div'>

        <div>
          <div className='all-check-div'>
          {divCount > 0 && <p><input name="allSelect" type="checkbox" id="allSelect" onChange={handleSelect} /> <span className='all-check'>All check</span></p>}
          </div>



          {Array(divCount)
            .fill(0)
            .map((x, id) => (
              <div className='single-row' key={id}>
                <input onChange={() => handleCheck(id)} type="checkbox" name="" className='singleCheck' id={id} />
                <input className='number-field' type="number" name="number" id={id + 1} placeholder='Enter a valid number' />
              </div>
            ))}

          <p id="calculate" className='result'>Selected All <span className='count'>{divCount}</span> items and Total number is <span id="total" className='count'></span>
          </p>
          <p id="singleCalculate" className='result'>Selected <span className='count'>{checks.length}</span> Items, there position is 
             
             {checks.map((p, _id) => <span key={_id} className="count"> {_id !== 0 && (_id === checks.length - 1 ? " and" : ",")} {p} </span>)}
             and Total Number is <span id="s" className='count'></span></p></div>
      </div>
    </div>
  );
}

export default App;
