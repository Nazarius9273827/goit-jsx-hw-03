import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import './FriendList.css';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
