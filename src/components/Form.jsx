import {useState, useEffect} from 'react'
import ErrorMessage from './ErrorMessage'

const Form = ({ pacientsList, setPacientsList, pacientToUpdate, setPacientToUpdate }) => {

    //Genera un id para el objeto de paciente
    const generateId = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    //Llenar form con datos de paciente para editar
    useEffect(() => {
      if(Object.keys(pacientToUpdate).length>0){
        setPacient({
                id: pacientToUpdate.id,
                petName: pacientToUpdate.petName,
                ownerName: pacientToUpdate.ownerName,
                email: pacientToUpdate.email,
                entryDate: pacientToUpdate.entryDate,
                symptoms: pacientToUpdate.symptoms
        })
      }
    }, [pacientToUpdate])
    

    const [pacient, setPacient] = useState({
        petName: '',
        ownerName: '',
        email: '',
        entryDate: '',
        symptoms: ''
    })

    const [error, setError] = useState(false)

    //Toma el valor de name en cada caso y le pasa su respectivo value.
    //agregándolo al state de *pacient*
    const handleChange = (e) => {
        const value = e.target.value
        setPacient({
            ...pacient,
            [e.target.name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if([pacient.petName, pacient.ownerName, pacient.email, pacient.entryDate, pacient.symptoms].includes('')){
            setError(true)
        }
        else{
            setError(false)
            if(pacientToUpdate.id){
                //Update
                const updatedPacientsList = pacientsList.map( pacientState => 
                    pacientState.id === pacient.id ?
                    pacient
                    :
                    pacientState
                )
                setPacientsList(updatedPacientsList)
                setPacientToUpdate({})
            }else{
                //Create
                pacient.id=generateId()
                setPacientsList([...pacientsList, pacient])
            }
            //Clean the fields
            setPacient({
                id: '',
                petName: '',
                ownerName: '',
                email: '',
                entryDate: '',
                symptoms: ''
            })
        }
    }

  return (
    <div className="md:w-1/2 lg:w-2/5 md:mx-10">
        <h2 className="font-black text-3xl text-center">
            Pacients Follow-Up
        </h2>
        <p className="m-5 text-center text-lg">
        <span className="text-indigo-600 font-bold">
            Add and Manage {''}
        </span>  
            your pacients
            
        </p>

        <form onSubmit={(e) => handleSubmit(e)} className="bg-white shadow-md rounded-lg py-10 px-5 mx-2 mb-10">
            { error && <ErrorMessage></ErrorMessage> }
            <div className="mb-4">
                <label 
                className="block text-gray-700 uppercase font-bold" htmlFor="petName">
                    Pet's Name:
                </label>
                <input
                id="petName"
                className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-b-md" 
                type="text" 
                placeholder="Pet's name"
                value={pacient.petName}
                name="petName"
                onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label 
                className="block text-gray-700 uppercase font-bold" htmlFor="ownerName">
                    Owner's Name:
                </label>
                <input
                id="ownerName"
                className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-b-md" 
                type="text"
                placeholder="Owner's fullname"
                name="ownerName"
                value={pacient.ownerName}
                onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label 
                className="block text-gray-700 uppercase font-bold" htmlFor="email">
                    E-mail:
                </label>
                <input
                id="email"
                className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-b-md" 
                type="email"
                placeholder="Owner's e-mail"
                name="email"
                value={pacient.email}
                onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label 
                className="block text-gray-700 uppercase font-bold" htmlFor="entryDate">
                    Entry Date:
                </label>
                <input
                id="entryDate"
                className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-b-md" 
                type="date"
                name="entryDate"
                value={pacient.entryDate}
                onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label 
                className="block text-gray-700 uppercase font-bold" htmlFor="syntoms">
                    Symtoms:
                </label>
                <textarea
                id="syntoms"
                className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-b-md" 
                name="symptoms"
                value={pacient.symptoms}
                onChange={handleChange}
                />
            </div>
            <input type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-500 cursor-pointer"
            value={ pacientToUpdate.id ? "Update Pacient" : "Add Pacient" }
            />
        </form>
    </div>
  )
}

export default Form