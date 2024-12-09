import React from 'react'
import DragIcon from '../../assests/icons/drag.svg'
import { FUNCTION_INPUT_PATTERN, INPUT_ERROR_MSG } from '../../utils/constants';
import { isValidExpression } from '../../utils/util';
import vector1 from '../../assests/icons/vector1.svg';
import vector2 from '../../assests/icons/vector2.svg';
import vector4 from '../../assests/icons/vector4.svg';
import vector5 from '../../assests/icons/vector5.svg';
import './style.css'

const Function = ({ functionData, update, updateFunctions, data }) => {
  const { name,equation, next, error } = functionData;

  const handleUpdate = (key) => (event) => {
    updateFunctions({
      ...functionData,
      [key]: event.target.value,
      ...(!isValidExpression(event.target.value) ? { error: INPUT_ERROR_MSG } : { error: '' })
    })
  }

  const handleTopLevelChange = (key) => (event) => {
    update({ [key]: event.target.value })
  }

  const functionList = data.functions.filter((func) => func.name !== name);

  return (
    <>
      {data.entryPoint === name
        ? <div className='entry-container'>
          <div className='entry-label'>Initial value of x</div>
          <div className='entry'>
            <input 
             type={'number'}
             value={data.initialInput} 
             onChange={handleTopLevelChange('initialInput')} 
            />
            <div className='conn-center'> <div className='connector'><div></div></div> </div>
          </div>
          <img src={vector5} alt=''/>
        </div>
        : null}
      <div className="equationCont">
        <div className="funcName">
          <img src={DragIcon} alt="" />
          <div>{name}</div>
        </div>

        <div className="equation">
          <label htmlFor="equation">Equation</label>
          <input
            type="text"
            value={equation}
            onChange={handleUpdate('equation')}
            pattern={FUNCTION_INPUT_PATTERN}
            style={{
              borderColor: error ? "red" : "initial",
            }}
          />
          {error ? <p className='error-msg'>{error}</p> : null}
        </div>

        <div className="next">
          <label htmlFor="next">Next function</label>
          <select disabled name="next" id="next" onChange={handleUpdate('next')}>
            <option>-</option>
            {functionList.map((func, idx) => (
              <option
                key={idx}
                selected={func.name === next}
                value={func.name}
              >
                {func.name}
              </option>
            ))}

          </select>
        </div>

        <div className="inOutContainer">
          <div>
            <div className='connector'><div></div></div>
            <span>Input</span>
          </div>
          <div className='output'>
            <span>Output</span>
            <div className='connector'><div></div></div>
          </div>
        </div>
      </div>
      {name === 'Function 1' ? <img className='func1' src={vector1} alt=''/>: null}
      {name === 'Function 2' ? <img className='func2' src={vector2} alt=''/>: null}
      {name === 'Function 4' ? <img className='func4' src={vector1} alt=''/>: null}
      {name === 'Function 5' ? <img className='func5' src={vector4} alt=''/>: null}
      {data.exitPoint === name
        ? <div className='exit-container'>
          <div className='exit-label'>Final Output y</div>
          <div className='exit'>
            <div className='conn-center'> <div className='connector'><div></div></div> </div>
            <input value={data.finalOutput} disabled />
          </div>
          <img src={vector5} alt=''/>
        </div>
        : null}
    </>

  )
}

export default Function;

