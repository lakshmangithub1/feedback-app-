import './index.css' 
import { useState} from 'react'
import FeedbackList from '../FeedbackList/FeedbackList'
import FeedbackForm from '../FeedbackForm/FeedbackForm'

const userDetailsList = [
  {
    uniqueNo: 1,
    
    name: 'Esther Howard',
    role: 'Software Developer', 
    feedback: "One of the things I admire about you is your ability to manage a team remotely.",
    rate:5
  },
  {
    uniqueNo: 2,
    
    name: 'Floyd Miles',
    role: 'Software Developer',
    feedback: "One of the things I admire about you is your ability to manage a team remotely.",
    rate:5
  },
  {
    uniqueNo: 3,
    
    name: 'Jacob Jones',
    role: 'Software Developer',
    feedback: "One of the things I admire about you is your ability to manage a team remotely.",
    rate:4
  },
  {
    uniqueNo: 4,
    
    name: 'Devon Lane',
    role: 'Software Developer',
    feedback: "One of the things I admire about you is your ability to manage a team remotely.",
    rate:5
  },
  {
    uniqueNo: 5,
    
    name: 'Patric Jane',
    role: 'Software Developer',
    feedback: "One of the things I admire about you is your ability to manage a team remotely.",
    rate:4
  }
]


function Header() { 
  const [feedbacks, setFeedbacks] = useState(userDetailsList)

  const deleteItem = (id) => { 
    
    if(window.confirm('Are you sure you want to delete')) {
      const filteredItems = feedbacks.filter(item => item.uniqueNo !== id) 
      setFeedbacks(filteredItems) 
      return feedbacks
    }
    

  } 

  const addFeedback = (newFeedback) => {
    setFeedbacks([newFeedback, ...feedbacks])
  }
  
  return (
    <header> 
      
      <div className="main-container">

        <div className='main-head-bg'>
          <h1 className='main-head'>Feedback UI</h1>
        </div>  
        <div className='main-form'>
          <FeedbackForm addFeedback={addFeedback}/>
        </div>
        
        <div className='feedback-container'> 
          <h3 className='feedback-count'>feedbacks: {feedbacks.length}</h3>
          {feedbacks.map((eachItem) => (
            <FeedbackList key={eachItem.uniqueNo} feedbackDetails={eachItem} deleteItem={deleteItem} />
          ))}
        </div>
        
         
      </div>
      
    </header>
  )
}

export default Header
