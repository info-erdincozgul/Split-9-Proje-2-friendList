import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../contexts/AuthContext';

export default function FriendsList(props) {
  const [friends, setFriends] = useState([]);
  const { authUserInfo } = useAuthContext();

  useEffect(() => {
    if (authUserInfo && authUserInfo.token) {
      axios
        .get('https://nextgen-project.onrender.com/api/s11d2/friends', {
          headers: {
            Authorization: authUserInfo.token,
          },
        })
        .then((response) => {
          setFriends(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [authUserInfo]);

  return (
    <div className="friendListDiv">
      <h1>FRIENDS LIST</h1>
      {friends.map((friend, key) => (
        <div className="friendList" key={key}>
          -{friend.name}-{friend.email}
        </div>
      ))}
    </div>
  );
}



