import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './News/navbar';
import News from './News/news';
import OtherNews from './News/othernews';
function App() {
  const [data, setData] = useState([])

  return (
    <Router>
    <Navbar setData={setData} />
    <div>
      <Routes >
        <Route path='/' element={<News articles={data}/>}></Route>
        <Route path='/:id' element={<OtherNews/>}></Route>
        
      </Routes>
    </div>

    </Router> 
      
  )
}

export default App
