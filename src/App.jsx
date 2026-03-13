import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import ThankYouPage from './pages/ThankYouPage'
import Layout from './pages/Layout'

function App() {

  return (
      <Routes>
        <Route element={<Layout />}>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/thankYou' element={<ThankYouPage />}/>
        </Route>
      </Routes>
  )
}

export default App
