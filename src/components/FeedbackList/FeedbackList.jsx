
import './index.css'

function FeedbackList({feedbackDetails, deleteItem}) { 
  
  const onClickDelete = () => {
    deleteItem(feedbackDetails.uniqueNo)
  }

  return (
    <div className='feedback-bg'> 
      
      <h4 className='name'>{feedbackDetails.name}</h4>
      <p className='role'>{feedbackDetails.role}</p> 
      <p className='feedback'>{feedbackDetails.feedback}</p>
      <button type="button" onClick={onClickDelete} className='buttu'>Delete</button>
    </div>
  )
}

export default FeedbackList
