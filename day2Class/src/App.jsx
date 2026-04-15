
import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
//Example of score State//  
  const [score, setScore] = useState(0)
  console.log(score)
   if(score != 10){
    setScore(10)
   }

  return (
    <>
    Score: {score}
    <Header/>
    <Dashboard/>
    <Footer company="Lubeth" />
    </>
  )
}

export default App
