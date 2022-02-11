import { useState, useEffect } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import PacientsList from './components/PacientsList'

function App() {

  const [pacientsList, setPacientsList] = useState([])
  const [pacient, setPacient] = useState({})

  useEffect(() => {
    const getLS = () =>{ 
      const pacientsLS = JSON.parse(localStorage.getItem('pacients')) ?? [] 
      setPacientsList(pacientsLS)
    }
    getLS()
  }, [])

  useEffect(() => {
    localStorage.setItem('pacients', JSON.stringify(pacientsList))
  }, [pacientsList])

  const deletePacient = id => {
    //Update the pacientsList with the options not deleted
    const updatedPacients = pacientsList.filter( pacient => pacient.id !== id);
    setPacientsList(updatedPacients);
  }

  return (
    <div className="bg-slate-100 min-h-screen">
      <Header></Header>
      <div className='sm:block md:flex'>
      <Form
      pacientsList={ pacientsList }
      setPacientsList={ setPacientsList }
      pacientToUpdate={pacient}
      setPacientToUpdate={setPacient}
      ></Form>
      <PacientsList
      pacientsList={pacientsList}
      setPacient={setPacient}
      deletePacient={deletePacient}
      ></PacientsList>
      </div>
    </div>
  )
}

export default App
