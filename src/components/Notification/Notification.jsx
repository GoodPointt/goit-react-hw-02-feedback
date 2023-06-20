import PropTypes from 'prop-types';

export const Notification = ({ message }) => <p>{message}</p>;

Notification.propType = {
  message: PropTypes.string,
};
