import './index.css' 
import { useState} from 'react'
import FeedbackList from '../FeedbackList/FeedbackList'
import FeedbackForm from '../FeedbackForm/FeedbackForm'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer', 
    feedback: "One of the things I admire about you is your ability to manage a team remotely."
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
    feedback: "One of the things I admire about you is your ability to manage a team remotely."
  },
  {
    uniqueNo: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
    feedback: "One of the things I admire about you is your ability to manage a team remotely."
  },
  {
    uniqueNo: 4,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/esther-devon-lane.png',
    name: 'Devon Lane',
    role: 'Software Developer',
    feedback: "One of the things I admire about you is your ability to manage a team remotely."
  },
  {
    uniqueNo: 5,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/esther-devon-lane.png',
    name: 'Patric Jane',
    role: 'Software Developer',
    feedback: "One of the things I admire about you is your ability to manage a team remotely."
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
  
  return (
    <header> 
      
      <div className="main-container">

        <div className='main-head-bg'>
          <h1 className='main-head'>Feedback UI</h1>
        </div>  
        <div className='main-form'>
          <FeedbackForm />
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
