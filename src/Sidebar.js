import Sticky from "react-sticky-el"
import Profile from "./Profile";
import Footer from "./Footer.js";
import image from "./images/profile.jpeg";

function Sidebar() {
    return (
        <div className="sidebar">
          <Profile
            username="tim_thac"
            caption="Thanaphat C."
            urlText="Switch"
            iconSize="big"
            image={image}
          />
          <Footer />
        </div>      
    )
}

export default Sidebar;