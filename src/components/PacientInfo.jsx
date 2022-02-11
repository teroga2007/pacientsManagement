const PacientInfo = ({pacient, setPacient, deletePacient}) => {

const { petName, ownerName, email, entryDate, symptoms, id } = pacient

  return (
    <div className='m-3 bg-white shadow-md rounded-lg py-10 px-5'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Pet's Name: 
            <span className='ml-1 font-normal normal-case'>
                {petName}
            </span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Owner's Name: 
            <span className='ml-1 font-normal normal-case'>
                {ownerName}
            </span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
            E-mail: 
            <span className='ml-1 font-normal normal-case'>
                {email}
            </span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Entry Date: 
            <span className='ml-1 font-normal normal-case'>
                {entryDate}
            </span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Symptoms:
            <span className='ml-1 font-normal normal-case'>
            {symptoms}
            </span>
        </p>

        <div className="mt-7">
            <button
            type="button"
            className="py-2 px-10 bg-indigo-600 text-white hover:bg-indigo-500 uppercase rounded-sm font-bold mr-2"
            onClick={() => setPacient(pacient)}
            >
                Editar
            </button>
            <button
            type="button"
            className="py-2 px-10 bg-red-600 text-white hover:bg-red-500 uppercase rounded-sm font-bold"
            onClick={() => deletePacient(pacient.id)}
            >
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default PacientInfo