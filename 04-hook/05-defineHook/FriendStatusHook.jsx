const { useState, useEffect } = window.React;

// function useFriendsStatus() {}

function FriendStatus(props) {
  const [friendsStatus, setFriendsStatus] = useState([
    {
      friendStatus: null,
    },
    {
      friendStatus: null,
    },
    {
      friendStatus: null,
    },
  ]);
  useEffect(() => {
    subscribeToFriendsStatus(props.friendIds, handleFriendStatusInit);
    return () => {
      unsubscribeToFriendsStatus();
    };
  }, []);
  const handleFriendStatusChange = (e) => {
    const friendsStatusCopy = friendsStatus.slice();
    const fid = parseInt(e.target.value);
    console.log(fid);
    friendsStatusCopy[fid].friendStatus = e.target.checked;
    setFriendsStatus(friendsStatusCopy);
  };

  const handleFriendStatusInit = (id) => {
    const friendsStatusCopy = friendsStatus.slice();
    const fid = id;
    for (let i = 0; i < fid.length; i++) {
      friendsStatusCopy[i].friendStatus = true;
    }
    setFriendsStatus(friendsStatusCopy);
  };
  const subscribeToFriendsStatus = (id, handleChange) => {
    handleChange(id);
  };
  const unsubscribeToFriendsStatus = () => console.log("监听解除");

  const onlineFriends = () => {
    return friendsStatus.map((v, index) => {
      return (
        <div key={index}>
          friendStatus
          {index}
          {v.friendStatus ? "is online" : "is offline"}
        </div>
      );
    });
  };

  const onlineCheckboxs = () =>
    friendsStatus.map((v, index) => {
      return (
        <div key={index}>
          <input
            type="checkbox"
            name={index + ""}
            id={index + ""}
            onChange={handleFriendStatusChange}
            checked={v.friendStatus || ""}
            value={index}
          />
        </div>
      );
    });
  return (
    <div>
      <div>{onlineFriends()}</div>
      <hr />
      <div>{onlineCheckboxs()}</div>
    </div>
  );
}

ReactDOM.render(
  <FriendStatus friendIds={[0, 1]} />,
  document.querySelector("#root")
);
