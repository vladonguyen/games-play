import {Routes, Route} from 'react-router-dom'

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import GameList from './components/game-list/Game-list'
import GameCreate from './components/game-create/GameCreate'


function App() {

  return (
    <div id="box">
     <Header />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/games' element={<GameList />} />
      <Route path='/games/create' element={<GameCreate />}/>
     </Routes>
     <Home />
      </div>
     
    
  )
}

export default App
