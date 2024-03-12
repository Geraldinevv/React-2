import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import Detail from './views/Detail'
import Home from './views/Home'
import Pokemons from './views/Pokemons'
import './App.css'
import PokeCard from './components/PokeCard'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <MyApp />
    </BrowserRouter>
  </React.StrictMode>
)

function MyApp () {

  return (

    <div className='App'>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemons' element={<Pokemons />} />
        <Route path='/pokemons/:name' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default MyApp