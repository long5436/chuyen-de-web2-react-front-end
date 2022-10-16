import PropTypes from 'prop-types';
import './Global.scss';

function GlobalStyles({ children }) {
  return <>{children}</>;
}

export default GlobalStyles;

GlobalStyles.propTypes = {
  children: PropTypes.node,
};
