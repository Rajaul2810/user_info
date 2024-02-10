//import { useState } from 'react'

import { Route,Routes } from 'react-router-dom'
import './App.css'
import UserListPage from './pages/UserListPage'
import UserDetailsPage from './pages/UserDetailsPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
       <Route path='/' element={ <UserListPage/>}/> 
       <Route path='/user' element={ <UserListPage/>}/> 
       <Route path='/user/:id' element={ <UserDetailsPage/>}/> 
      </Routes>
    </>
  )
}

export default App
