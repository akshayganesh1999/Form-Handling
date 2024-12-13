import './App.css'
import { Routes, Route } from 'react-router-dom'
import FormValidation from './assets/FormValidation'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<FormValidation/>}/>
    </Routes>
      
    </>
  )
}

export default App
