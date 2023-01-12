import {FaTimes} from 'react-icons/fa'
import './index.css'

function FeedbackList({feedbackDetails}) { 
  

  return (
    <div className='feedback-bg'> 
      
      <h4 className='name'>{feedbackDetails.name}</h4>
      <p className='role'>{feedbackDetails.role}</p> 
      <p className='feedback'>{feedbackDetails.feedback}</p>
      
    </div>
  )
}

export default FeedbackList
