import { ReactComponent as Like } from "./images/like.svg";
import { ReactComponent as Comment } from "./images/comment.svg";
import { ReactComponent as Send } from "./images/send.svg";
import { ReactComponent as Save } from "./images/save.svg";

function CardMenu() {
    return (<div className="cardMenu">
    <div className="interactions">
      <Like className="icon" />
      <Comment className="icon" />
      <Send className="icon" />
    </div>
    <Save className="icon" />
  </div>
);
}

export default CardMenu;