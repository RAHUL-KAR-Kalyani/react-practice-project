// Router
import React from 'react'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
import Home from './router-pages/Home'
import Contact from './router-pages/Contact'
import About from './router-pages/About'

function Routing() {
  return (
    <div>
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default Routing