
import './App.css'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import EmailVerification from './components/EmailVerification'

import Feed from './components/Feed'
import MyTasks from './components/MyTasks'
import Requests from './components/Requests'
import MyRequests from './components/MyRequests'
import Setting from './components/Setting'
import Layout from './Layout'
import AddTasks from './components/AddTasks'


function App() {
  

  return (
    <>
   <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/email" element={<EmailVerification />} />

        
        <Route element={<Layout/>}>
          <Route path="/feed" element={<Feed />} />
          <Route path="/tasks" element={<MyTasks/>} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/my-requests" element={<MyRequests />} />
          <Route path="/add-task" element={<AddTasks/>} />
          <Route path="/settings" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
      
    </>
  )
}

export default App
