import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import JoinGamePage from './components/JoinGamePage'
import StartGamePage from './components/StartGamePage'
import HomePage from './components/HomePage'
import Players from './components/Players'
import MainPage from './components/MainPage'
import GenerateCode from './components/GenerateCode'
import WaitPage from './components/WaitPage'
import MafiaScreen from './components/MafiaScreen'
import DoctorScreen from './components/DoctorScreen'
import PoliceScreen from './components/PoliceScreen'
import VillagerScreen from './components/VillagerScreen'
import VillagerWin from './components/VillagerWin'
import MafiaWin from './components/MafiaWin'
import { Provider } from 'react-redux'
import {store, persistor} from './services/store'
import Loading from './components/Loading'
import { PersistGate } from "redux-persist/integration/react";
import PlayerRoleScreen from './components/PlayerRoleScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path='/homePage' element={<HomePage/>}></Route>
            <Route path='/mainPage' element={<MainPage/>}></Route>
            <Route path='/joinGame' element={<JoinGamePage/>}></Route>
            <Route path='/startGame' element={<StartGamePage/>}></Route>
            <Route path='/players' element={<Players/>}></Route>
            <Route path='/generateCode' element={<GenerateCode/>}></Route>
            <Route path='/waitingPage' element={<WaitPage/>}></Route>
            <Route path='/mafiaScreen' element={<MafiaScreen/>}></Route>
            <Route path='/doctorScreen' element={<DoctorScreen/>}></Route>
            <Route path='/policeScreen' element={<PoliceScreen/>}></Route>
            <Route path='/villagerScreen' element={<VillagerScreen/>}></Route>
            <Route path='/villagerWin' element={<VillagerWin/>}></Route>
            <Route path='/mafiaWin' element={<MafiaWin/>}></Route>
            <Route path='/playerRoleScreen' element={<PlayerRoleScreen/>}></Route>
          </Routes>
        </Router>
        </PersistGate>
      </Provider>
    
    </>

  )
}

export default App
