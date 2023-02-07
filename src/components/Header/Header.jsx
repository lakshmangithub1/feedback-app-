import './index.css' 
import { useState} from 'react'
import FeedbackList from '../FeedbackList/FeedbackList'
import FeedbackForm from '../FeedbackForm/FeedbackForm' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import AboutPage from '../AboutPage/AboutPage' 
import { Link } from 'react-router-dom'

const userDetailsList = []


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
    <Router> 
      
      <div className="main-container">  
        <div className='main-head-bg'>
          <h1 className='main-head'>Feedback UI</h1> 
          
        </div>  

        <Routes>
          <Route exact path = "/" element = {
            <>
              
              <div className='main-form'>
                <FeedbackForm addFeedback={addFeedback}/>
              </div>
              
              <div className='feedback-container'> 
                <h3 className='feedback-count'>feedbacks: {feedbacks.length}</h3> 

                {feedbacks.length === 0 ? (<h1 className='white'>No feedbacks.</h1>) : (<div className='soya'>
                  {feedbacks.map((eachItem) => (
                    <FeedbackList key={eachItem.uniqueNo} feedbackDetails={eachItem} deleteItem={deleteItem} />
                  ))}
                </div>)}
                
                
              </div>
          
            </>
          }></Route> 

          <Route path="/about" element = {<div className='main-form'><AboutPage/></div>}></Route>
        </Routes>

        
         
        
      </div>
      
    </Router>
  )
}

export default Header
