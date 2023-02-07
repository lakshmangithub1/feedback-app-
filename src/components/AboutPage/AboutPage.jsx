import './index.css' 
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <div className='about-card'>
      <h1 className='about-head'>About this project.</h1> 
      <p className='about-para'>This is a React app to leave feedback for a product or service.</p>
      <p className='about-para'>Version 1.00</p> 
      <Link to="/" className='about-para2'>Back to home</Link>
    </div>
  )
}

export default AboutPage
