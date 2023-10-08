import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../../pages/Home'
import About from '../../pages/About'
import Travel from '../../pages/Travel'
import Login from '../../pages/Login'
import Register from '../../pages/Register'

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/travel' element={<Travel/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing