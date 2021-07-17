'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
    	if (this.props.commentID) {
    		return 'You liked comment number ' + this.props.commentID;
    	} else {
    		return 'You liked this.';
    	}
    }

    return (
    	<button onClick={()=> this.setState({liked: true})}>
      Like
      </button>
    );
  }
}

// 渲染模板代码
const domContainer = document.querySelector('#react_root');
ReactDOM.render(e(LikeButton), domContainer);


// 组件复用
document.querySelectorAll('.like_button_container')
	.forEach(domContainer => {
		// 通过data-*属性读取commentID
		const commentID = parseInt(domContainer.dataset.commentid, 10);
		ReactDOM.render(
			e(LikeButton, {
				commentID: commentID
			}),
			domContainer
		)
	});
