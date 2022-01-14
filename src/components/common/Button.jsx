import PropTypes from 'prop-types'

const Button = ({ label, icon, handleClick, color, colorText }) => {
  return (
    <button onClick={handleClick} className={`flex space-x-4 ${color} text-${colorText} border w-72 flex justify-center py-2 text-sm font-semibold rounded-full`}>
      <div>
        <img src={icon} alt="" />
      </div>
      <div>
        {label}
      </div>
      <div></div>
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  handleClick: PropTypes.func,
  color: PropTypes.string,
  colorText: PropTypes.string
};

export default Button;