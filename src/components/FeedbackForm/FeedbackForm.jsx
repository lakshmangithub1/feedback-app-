import './index.css' 
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react' 


function FeedbackForm({addFeedback}) { 
  const [text, setText] = useState('')  
  const [name, setName] = useState('')
  const [designation, setDesignation] = useState('')
  const [rate, setRate] = useState('') 
  
  const [message, setMessage] = useState('') 

  const getTheName = (e) => {
    setName(e.target.value) 
    
  }

  const getTheDesignation = (e) => {
    setDesignation(e.target.value) 
    
  }

  const getTheFeedback = (e) => { 
    if (text === '') {
      setMessage(null)
    } else if (text!=='' && text.trim().length<=10) {
      setMessage('Note: Feedback must be atleast 10 characters')
    } else {
      setMessage(null)
    }
    
    setText(e.target.value)
  } 

  const getText = (e) => {
    setRate(e.target.value)
  }
  
  const getAll = () => {
    const newFeedback = {
      uniqueNo: uuidv4(),
      name:name,
      role:designation,
      feedback:text, 
      rate:rate
      



    } 
    addFeedback(newFeedback) 
    console.log(newFeedback)

  }


  
  return (
    <div className="form-container"> 
      <h2 className='rate-head'>How could you rate your service with us?</h2>  
      <div className='input-card'>
        <div className='personal-details'>
          <input type='text' placeholder='Enter Your FullName' className='name-input' onChange={getTheName} value = {name}/>  
          <input type='text' placeholder='Enter Your Designation' className='name-input' onChange={getTheDesignation} value = {designation}/>  
        </div>
        
        <div className="rating">
        
    
          <input  className="but" type="button" value='1' onClick={getText}/>
          <input  className="but" type="button" value='2' onClick={getText}/>
          <input  className="but" type="button" value='3' onClick={getText}/>
          <input  className="but" type="button" value='4' onClick={getText}/>
          <input  className="but" type="button" value='5' onClick={getText}/>
        
        </div>
        <input type='text' placeholder='Write your feedback' onChange={getTheFeedback} value={text} />  
        {message && <div className="msg">{message}</div>} 
        
        <div className='butt'>
          <button type="submit" onClick={getAll} className="btn">submit</button>
        </div> 
        
        
      </div>
      
    </div>
  )
}

export default FeedbackForm
