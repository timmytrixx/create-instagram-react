

function Comment(props) {
    const { accountName, comment } = props;

  return (
    <div className="commentContainer">
      <div className="accountNamePost">{accountName}</div>
      <div className="comment">{comment}</div>
    </div>
  );

}

export default Comment;