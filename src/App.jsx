

import {Routes,Route} from 'react-router-dom'

import './App.css'
import Home from './Components/Home'
import Edci312 from './Components/Edci312'
import Edci321 from './Components/Edci321'
import Edci335 from './Components/Edci335'
import Edci337 from './Components/Edci337'
import Geo322 from './Components/Geo322'
import Kisw310 from './Components/Kisw310'
import Kisw311 from './Components/Kisw311'
import Epsc331 from './Components/Epsc331'
import Nopage from './Components/Nopage'
import Geo312 from './Components/Geo312'
import About from './Components/About'


function App() {
  

  return (
    <div> 
      
      <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/edci312' element={<Edci312/>} />
      <Route path='/edci321' element={<Edci321/>} />
      <Route path='/edci335' element={<Edci335/>} />
      <Route path='/edci337' element={<Edci337/>} />
      <Route path='/epsc331' element={<Epsc331/>} />
      <Route path='/kisw310' element={<Kisw310/>} />
      <Route path='/kisw311' element={<Kisw311/>} />
      <Route path='/geog312' element={<Geo312/>} />
      <Route path='/geog322' element={<Geo322/>} />
      <Route path='/about' element={<About/>} />
      <Route path='*' element={<Nopage/>} />
      
</Routes>

    </div>
  )
}

export default App
