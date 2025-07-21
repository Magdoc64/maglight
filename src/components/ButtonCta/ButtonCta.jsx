import './buttonCta.css';
import PropTypes from 'prop-types';

const ButtonCta = ({ text, onClick }) => {
  return (
    <button className="button-cta" onClick={onClick}>
      {text}
    </button>
  );
}

ButtonCta.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
export default ButtonCta;