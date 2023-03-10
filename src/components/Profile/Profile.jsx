import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({
  username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  followers,
  views,
  likes,
}) => (
  <div class={css.profile}>
    <div class={css.description}>
      <img src={avatar} alt={username} class={css.avatar} />
      <p class={css.name}>Petra Marica</p>
      <p class={css.tag}>@{tag}</p>
      <p class={css.location}>{location}</p>
    </div>

    <ul class={css.stats}>
      <li class={css.stats_item}>
        <span class={css.label}>Followers</span>
        <span class={css.quantity}> {followers}</span>
      </li>
      <li class={css.stats_item}>
        <span class={css.label}>Views</span>
        <span class={css.quantity}> {views}</span>
      </li>
      <li class={css.stats_item}>
        <span class={css.label}>Likes</span>
        <span class={css.quantity}> {likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  //string
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  //number
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
