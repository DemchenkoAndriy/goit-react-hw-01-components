import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ id, avatar, name, isOnline }) => (
  <li key={id} class={css.item}>
    <span
      class={css.status}
      style={{ backgroundColor: isOnline ? 'green' : 'red' }}
    ></span>
    <img class={css.avatar} src={avatar} alt={name} width="48" />
    <p class={css.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
