import JustMobile from './JustMobile'

const Header = () => {
  return (
    <div className='py-10'>
        <h1 className='font-black text-5xl text-center mx-auto md:w-2/3'>
            <span className='text-indigo-600'>Vet Pacients</span>
            {''} Management
        </h1>
        <br />
        <JustMobile>
          <div className='text-center'>
            <a className='text-indigo-600' href="#pacientsList">See the pacients list.</a>
          </div>
        </JustMobile>
    </div>
  )
}

export default Header