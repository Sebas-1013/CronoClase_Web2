
import { useState } from 'react'
import './App.css'
import InicioSesion from './pages/InicioSesion'
import { MainView } from './pages/MainView'

function App() {

  const [showCalendar, setShowCalendar] = useState(false)

  if (showCalendar) {
    return <MainView />
  }

  return <InicioSesion onEnter={() => setShowCalendar(true)} />
}

export default App
