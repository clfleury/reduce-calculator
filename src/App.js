import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function ButtonClick(index, numbersForCalculation){
  numbersForCalculation.push(index);
  console.log(numbersForCalculation);
}

function AddNumbers(numbersForCalculation){

  if(numbersForCalculation.length < 1){
    return 0;
  }

  return numbersForCalculation.reduce((accumulator, currentValue) => accumulator + currentValue);
}
function SubtractNumbers(numbersForCalculation){
  if(numbersForCalculation.length < 1){
    return 0;
  }

  return numbersForCalculation.reduce((accumulator, currentValue) => accumulator - currentValue);
}

function ShowNumbers(props){
  //const [displayNumber, updateDisplayNumber] = useState(props.numbers);
  let concatenatedNumber = '';
  //console.log(displayNumber, 'improps');
  props.numbers.forEach((index) => {
    concatenatedNumber = concatenatedNumber + ' ' + index
  });
  return(
    <div style={{color: 'rgb(18, 218, 174)', fontWeight: 'bold', fontSize: '30px', maxWidth: '100%',
    overflowWrap: 'break-word', margin: '30px auto', maxWidth: '40%', padding: '20px',
    backgroundColor: '#d7f8fd', minHeight: '35px'}}>
    {concatenatedNumber}
    </div>
  )
}

function App() {
  const calcNumbers = [0,1,2,3,4,5,6,7,8,9];
  const [numbersForCalculation, updateNumber] = useState([]);
  const [finalCalculation, computeResult] = useState(0);

  console.log(numbersForCalculation, 'imnumbersforcalc');

  return (
    <div className="calculator-container">
      <ShowNumbers numbers={numbersForCalculation} />
      <div style={{margin: '0 auto'}}>
      <div className="calculator" style={{width: '240px', margin: '0 auto'}}>
      <button onClick={() => computeResult(() => AddNumbers(numbersForCalculation))}>+</button>
      <button onClick={() => computeResult(() => SubtractNumbers(numbersForCalculation))}>-</button>
          {calcNumbers.map(function(index){
            return(
              <button onClick={() => updateNumber(numbersForCalculation => numbersForCalculation.concat(index))}>
                {index}
              </button>
            )
          })}
      </div>
      <div style={{textAlign: 'center', marginTop: '30px', fontSize: '60px',
    color: 'rgb(4, 61, 69)'}}>Final Result: <span style={{textDecoration: 'underline'}}>{finalCalculation}</span></div>
      </div>
    <button onClick={() => {updateNumber([]); computeResult(0)}} style={{ margin: '30px auto', width: 'initial', padding: '20px 40px', backgroundColor: '#00b8c3', display: 'block', fontSize: '25px', fontWeight: 'normal', color: '#fff', height: 'initial'}}>Clear All</button>
    </div>
  );
}

export default App;
