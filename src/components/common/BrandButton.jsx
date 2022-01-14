import PropTypes from 'prop-types'

const BrandButton = ({ label, icon }) => {
  return (
    <button className='text-black bg-white w-72 flex justify-center space-x-4 select-none py-2 rounded-3xl items-center text-sm font-semibold hover:bg-blue-50 transition duration-300'>
      <div>
        <img className='w-6' src={icon.toString() === 'Google' ? `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png` : `http://simpleicon.com/wp-content/uploads/apple.png`} alt="" />
      </div>
      <div>
        {label}
      </div>
    </button>
  )
}

BrandButton.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
}

export default BrandButton;