import './App.css';
import { useEffect, useState } from 'react';

function App() {
  //state
  const [divCount, setDivCount] = useState(0);
  const [checks, setChecks] = useState([]);

  useEffect(()=>{
    if(checks.length===0){
      document.getElementById("singleCalculate").style.display = "none"; 
    }
  }, [checks]);

  const appendChildDiv = (e) => {
    e.preventDefault();
    let div = document.getElementById("field").value;

    setDivCount(parseInt(div));

  };

  let totalNumber = 0;


 
  checks.map(function (element) {
    let value = document.getElementById(`${element}`).value;
    totalNumber = totalNumber + parseFloat(value);
    console.log(checks.length);
    console.log(checks);
    document.getElementById("s").innerHTML = totalNumber;   
return totalNumber;
  });


  const handleSelect = (e) => {
    let checked = e.target.checked;
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let inputNumbers = document.querySelectorAll('input[type="number"]');
    setChecks([]);

    for (let checkbox of checkboxes) {
     
      if (checked) {
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
    

      if (!isNaN(total) === true) {
        document.getElementById("total").innerHTML = total;
      }
      else {
        document.getElementById("total").innerHTML = 0;
      }
    }

  }


  const handleCheck = (e, id) => {
   
    const checked=e.target.checked;
    let position = id + 1;

  if(checked){
    if (!checks.includes(position)) {
      let allCheck = [...checks, position];
      setChecks(allCheck);
    }

    document.getElementById("allSelect").checked = false;
    document.getElementById("calculate").style.display = "none";
    document.getElementById("singleCalculate").style.display = "block";
  }
else{
  const remaining = checks.filter((f) => (f !== position));
  setChecks(remaining);
}

  }

  // sort all checked item
  checks.sort((a, b) => a - b);


  return (
    <div className="App">
      <div className='title-div'>
        <img className='t-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3cmyiUlgVRv-q5zNr8PhIjusSulS5T9B08-UHGiNlYqSWGofdRT_0XKX6EGXiTduP6KQ&usqp=CAU" alt="" />
        <span className='title'>Textbox Generator</span>
      </div>

      <form>
        <input
          id="field"
          type="text"
          className='numOfTextBoxField'
          placeholder='Enter Number of Textbox'
        />
        <button
          className='add-textbox-button'
          onClick={appendChildDiv}
          type="submit">
          Add Textbox
        </button>
      </form>

      <div className='result-div'>
        <div>
          <div className='all-check-div'>
            {
              divCount > 0 && <p>
                <input 
                name="allSelect" 
                type="checkbox" 
                id="allSelect" 
                onChange={(e) =>handleSelect(e)} />
                <span className='all-check'>All check</span>
              </p>
            }
          </div>



          {Array(divCount)
            .fill(0)
            .map((x, id) => (
              <div className='single-row' key={id}>
                <input
                  onChange={(e) => handleCheck(e, id)}
                  type="checkbox"
                  className='singleCheck'
                  id={id}
                />
                <input
                  className='number-field'
                  type="number"
                  name="number"
                  id={id + 1}
                  placeholder='Enter a valid number'
                />
              </div>
            ))}

          <p id="calculate" className='result'>Selected All                     <span className='count'>{divCount}</span> items and Total number is  <span id="total" className='count'></span>
          </p>
          <p id="singleCalculate" className='result'>
            Selected <span className='count'>{checks.length} </span>
            Items, there position is
            {
              checks.map((p, _id) => (
                <span key={_id} className="count"> {_id !== 0 && (_id === checks.length - 1 ? " and" : ",")} {p} </span>
              ))
            } and Total Number is <span id="s" className='count'></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
