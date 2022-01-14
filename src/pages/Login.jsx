import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import BrandButton from '../components/common/BrandButton';

const Login = () => {
  return (
    // Black Screen
    <div className='w-full bg-gray-900 bg-opacity-90 h-screen flex justify-center items-center'>
      {/* Login */}
      <div className='w-full md:w-9/12 h-full md:h-auto lg:w-6/12 xl:w-5/12 2xl:w-4/12 bg-black md:rounded-lg p-4 flex justify-between flex-col'>
        {/* Top div - Login */}
        <div className='flex justify-between text-gray-50 items-center'>
          <div>
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div>
            <img className='w-7' src="https://cutewallpaper.org/24/white-twitter-png/twitter-logo-png-images-free-download.png" alt="" />
          </div>
          <div></div>
        </div>
        {/* Middle Div - Login */}
        <div>
          {/* Title */}
          <div className='text-center font-bold text-gray-300 py-8 text-2xl'>
            Inicia sesión en Twitter
          </div>
          {/* Brands Buttons */}
          <div className='space-y-6 flex flex-col items-center'>
            <BrandButton icon="Google" label='Iniciar sesión con Google' />
            <BrandButton icon="" label='Iniciar sesión con Apple' />
          </div>
          {/* Divider */}
          <div className='flex justify-center py-8'>
            <div className='w-72 h-0.5 bg-gray-500 flex justify-center relative items-center'>
              <div className='absolute px-2 bg-black text-gray-50'>
                ó
              </div>
            </div>
          </div>
          {/* Login Input */}
          <div className='flex justify-center'>
            <input type="text" placeholder='Telefono, correo electronico o nombre de usuario' className='placeholder:text-xs w-72 bg-transparent py-5 rounded-md text-sm text-gray-50 px-2 focus:outline-none border border-gray-400' />
          </div>
          {/* Login by Input and Forget Password */}
          <div className='flex flex-col items-center py-8 space-y-6'>
            <Button color='white' label='Siguiente' />
            <Button color='black' label='¿Olvidaste tu contraseña?' colorText='gray-50' />
          </div>
          {/* Register Link */}
          <div className='flex justify-center'>
            <div className='w-72 text-sm'>
              <span className='text-gray-400 text-opacity-50 font-semibold'>¿No tienes una cuenta?  </span> <Link to='/register' className='text-blue-400'>Registrate</Link>
            </div>
          </div>
        </div>
        {/* Bottom Div - Login */}
        <div></div>
      </div>
    </div>
  )
}

export default Login;