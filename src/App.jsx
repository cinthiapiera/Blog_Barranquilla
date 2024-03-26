import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import TouristicAttractions from './pages/TouristicAttractions'
import TouristicAttraction from './pages/TouristicAttraction'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/TouristicAttractions' element={<TouristicAttractions/>}/>
          <Route path='/TouristicAttractions/:id' element={<TouristicAttraction/>}/>
        </Routes>
    </BrowserRouter>

  )
}

export default App
