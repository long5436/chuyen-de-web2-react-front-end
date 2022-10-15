import PropTypes from 'prop-types';

function DefaultLayout({ children }) {
  return <div>{children}</div>;
}

export default DefaultLayout;

DefaultLayout.propTypes = {
  children: PropTypes.node,
};
