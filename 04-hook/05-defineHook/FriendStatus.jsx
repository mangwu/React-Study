class FriendStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsStatus: [
        {
          friendStatus: null,
        },
        {
          friendStatus: null,
        },
        {
          friendStatus: null,
        },
      ],
    };
    this.handleFriendStatusChange = this.handleFriendStatusChange.bind(this);
    this.subscribeToFriendsStatus = this.subscribeToFriendsStatus.bind(this);
    this.handleFriendStatusInit = this.handleFriendStatusInit.bind(this);
  }
  handleFriendStatusChange(e) {
    const friendsStatus = this.state.friendsStatus.slice();
    const fid = parseInt(e.target.value);
    friendsStatus[fid].friendStatus = e.target.checked;
    this.setState({
      friendsStatus: friendsStatus,
    });
  }
  handleFriendStatusInit(id) {
    const friendsStatus = this.state.friendsStatus.slice();
    const fid = id;
    for (let i = 0; i < fid.length; i++) {
      friendsStatus[i].friendStatus = true;
    }
    this.setState({
      friendsStatus: friendsStatus,
    });
  }
  subscribeToFriendsStatus(id, handleChange) {
    handleChange(id);
  }
  unsubscribeToFriendsStatus() {
    console.log("监听解除");
  }
  componentDidMount() {
    // 副作用，处理订阅好友的在线状态(模拟对好友的在在线状态处于持续监听下)
    this.subscribeToFriendsStatus(
      this.props.friendIds,
      this.handleFriendStatusInit
    );
  }
  componentWillUnmount() {
    // 清除副作用
    this.unsubscribeToFriendsStatus();
  }

  render() {
    const friendsStatus = this.state.friendsStatus.slice();
    console.log(friendsStatus);
    const onlineFriends = friendsStatus.map((v, index) => {
      return (
        <div key={index}>
          friendStatus
          {index}
          {v.friendStatus ? "is online" : "is offline"}
        </div>
      );
    });
    console.log(onlineFriends);
    const onlineCheckboxs = friendsStatus.map((v, index) => {
      return (
        <div key={index}>
          <input
            type="checkbox"
            name={index + ""}
            id={index + ""}
            onChange={this.handleFriendStatusChange}
            checked={v.friendStatus}
            value={index}
          />
        </div>
      );
    });
    console.log(onlineCheckboxs);
    return (
      <div>
        <div>{onlineFriends}</div>
        <hr />
        <div>{onlineCheckboxs}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <FriendStatus friendIds={[0, 1]} />,
  document.querySelector("#root")
);
