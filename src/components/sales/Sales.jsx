import React from 'react'
import "./sales.css"

const Sales = () => {
  return (
    <div className='centerdiv'>

        <h3>Card sales</h3>
        <label>Mobile number</label>
        <input type='number' className='input' placeholder='Enter your mobile number' />
        <label>Card number</label>
        <div className='carddiv'>
            <input type='number' className='input11' placeholder='Type card number'/>
            <input type='number' className='input12' />

            
        </div>
        <label>Customer name</label><br></br>
        <input type='text' className='input13' placeholder='Enter your name' />
        <label>Remarks</label><br></br>
        <input type='text' className='input14' placeholder='Enter remarks' />
        <label>Payment method</label>
        <div className='radiodiv'>
            <input type='radio' />Cash&nbsp;&nbsp;&nbsp;
            <input type='radio' />UPI
        </div>
        <div>
            <button className='cancel'>Cancel</button>
            <button className='done'>Done</button>
        </div>


    </div>
  )
}

export default Sales