import BrandButton from '../components/common/BrandButton'
import Button from '../components/common/Button'

const Landing = () => {

  const styles = {
    bgImage: {
      backgroundImage: `url('https://abs.twimg.com/sticky/illustrations/lohp_850x623.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '95vh',
    }
  }

  return (
    <div className='flex flex-col'>
      {/* Main Page */}
      <div className='flex flex-col-reverse lg:flex-row'>
        <div style={styles.bgImage} className='w-full lg:w-3/12 flex justify-center items-center'>
          <img className='w-8/12 object-center object-cover' src="https://cutewallpaper.org/24/white-twitter-png/twitter-logo-png-images-free-download.png" alt="" />
        </div>
        <div className='bg-black p-10 md:px-32 w-full lg:w-10/12 lg:px-16'>
          <div>
            <img className='w-10' src="https://cutewallpaper.org/24/white-twitter-png/twitter-logo-png-images-free-download.png" alt="" />
          </div>
          <div className='text-gray-100 font-bold text-7xl py-14'>
            Lo que está pasando ahora
          </div>
          <div className='text-gray-400 font-bold text-4xl pb-10'>
            Únete a twitter hoy mismo.
          </div>
          <div className='space-y-4'>
            <BrandButton icon='Google' label='Registrarse con Google' />
            <BrandButton icon='' label='Registrarse con Apple' />
          </div>
          <div>
            <div className='h-0.5 w-72 bg-gray-500 flex justify-center items-center my-6 text-white bg-opacity-30'>
              <div className='absolute p-1 bg-black'>o</div>
            </div>
          </div>
          <div>
            <Button color='bg-blue-500' colorText='gray-100' label='Registrate con numero de telefono' />
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className='w-full bg-black text-gray-600 text-sm flex px-8 flex-wrap space-x-4 py-3'>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <button>sad</button>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <button>sad</button>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <button>sad</button>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <button>sad</button>
        <button>asd</button>
      </div>
    </div>
  )
}

export default Landing;