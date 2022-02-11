import PacientInfo from './PacientInfo'

const PacientsList = ({pacientsList, setPacient, deletePacient}) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
        <h2 className='font-black text-3xl text-center'>
            Pacients List
        </h2>
        {
        pacientsList.length > 0 ?
        <p className='text-lg my-5 text-center'>
            Manage your {''}
            <span className='text-indigo-600 font-bold'>
                pacients and dates
            </span>
        </p>
        :
        <p className='text-lg my-5 text-center'>
            There is no pacients yet. <br />  Start adding your {''}
            <span className='text-indigo-600 font-bold'>
                pacients now
            </span>
        </p>
        }
        
        {
        pacientsList.map(pacient => {
          return (
            <PacientInfo
            key={pacient.id}
            pacient={pacient}
            setPacient={setPacient}
            deletePacient={deletePacient}
            ></PacientInfo>
          )
        })
        }

    </div>
  )
}

export default PacientsList