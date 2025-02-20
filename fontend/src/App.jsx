import { useState } from 'react'

import './App.css'
import {Routes,Route} from 'react-router-dom'
//import {LoginPage,SignupPage,home} from './Routes/Routes'
import Login from './components/Login/Login'
function App() {
  


  return (
    <>
    <Login/>
     {/* <Routes>
      <Route path='/Login' element={<LoginPage/>}></Route>
      <Route path='/Signup' element={<SignupPage/>}></Route>
      <Route path='/' element={<home/>}></Route>
      </Routes> */}



    </>
  )
}

export default App