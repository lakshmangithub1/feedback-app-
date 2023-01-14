import './index.css' 
import { useState } from 'react' 
import Button from '../Button/Button'

function FeedbackForm() { 
  const [text, setText] = useState('') 
  
  const [message, setMessage] = useState('')

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
  
  return (
    <div className="form-container"> 
      <h2 className='rate-head'>How could you rate your service with us?</h2>  
      <div className='input-card'>
        <input type='text' placeholder='Write your feedback' onChange={getTheFeedback} value={text}></input>  
        {message && <div className="msg">{message}</div>}
        <div className='butt'>
          <Button type="submit" >submit</Button>
        </div> 
        
        
      </div>
      
    </div>
  )
}

export default FeedbackForm
