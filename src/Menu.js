import { ReactComponent as Home } from "./images/home.svg"
import { ReactComponent as Msg } from "./images/message.svg"
import { ReactComponent as Exp } from "./images/explore.svg"
import { ReactComponent as Noti } from "./images/notification.svg"
import ProfileIcon from "./ProfileIcon";
import image from "./images/profile.jpeg"

function Menu () {
    return(
        <div className="menu">
            <Home className="icon" />
            <Msg className="icon" />
            <Exp className="icon" />
            <Noti className="icon" />
            <ProfileIcon iconSize="small" image={image} />
        </div>
        
    )
}

export default Menu;