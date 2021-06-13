import Profile from "./Profile";
import { ReactComponent as Option } from "./images/option.svg";
import CardMenu from "./CardMenu";
import Comment from "./Comment";

function CardPost(props) {
    const {
        storyBorder,
        image,
        comments,
        likedByNumber,
        hours,
    } = props;

    return (
        <div className="card">
      <header>
        <Profile iconSize="medium" storyBorder={storyBorder} />
        <Option className="Option" />
      </header>
      <img className="cardImage" src={image} alt="card content" />
      <CardMenu />
      <div className="likedBy">
        <span>
          <strong>{likedByNumber} likes</strong>
        </span>
      </div>
      <div className="comments">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              accountName={comment.user}
              comment={comment.text}
            />
          );
        })}
      </div>
      <div className="timePosted">{hours} HOURS AGO</div>
      <div className="addComment">
        <div className="commentText">Add a comment...</div>
        <div className="postText">Post</div>
      </div>
    </div>        
    )
}

export default CardPost;