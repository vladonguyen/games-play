import { Routes, Route, useNavigate } from 'react-router-dom'

import  {AuthProvider} from './context/authContext';
import Path from "./paths";

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import GameList from './components/game-list/GameList'
import GameCreate from './components/game-create/GameCreate'
import Login from './components/login/Login'
import Logout from "./components/logout/Logout";
import Register from './components/register/Register'
import GameDetails from './components/game-details/GameDetails'
import GameEdit from './components/game-edit/GameEdit';
import GameDelete from './components/game-delete/GameDelete';
import ErrorBoundary from './components/ErrorBoundary';


function App() {
 
  return (
    <ErrorBoundary>
    <AuthProvider>
      <div id="box">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games' element={<GameList />} />
          <Route path='/games/create' element={<GameCreate />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/games/:gameId' element={<GameDetails />} />
          <Route path={Path.GameEdit} element={<GameEdit />} />
          <Route path={Path.Logout} element={<Logout />} />
          <Route path={Path.GameDelete} element={<GameDelete />} />
        </Routes>

      </div>
    </AuthProvider >
    </ErrorBoundary>
  )
}

export default App
