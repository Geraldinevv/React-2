import pikachu from '../assets/img/pikachu.png'

const Home = () => {

  return (
    <div className='mt-5 text-center'>
      <h1>BIENVENIDO MAESTRO POKEMON</h1>
      <img height='300' src={pikachu} alt='Pikachu' />
    </div>
  )
}

export default Home;
