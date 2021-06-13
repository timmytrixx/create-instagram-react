
function ProfileIcon(props) {
    const { iconSize, storyBorder, image} = props;

    function getRandomInt(Max){
        return Math.floor(Math.random() * Max);
    }

    let randomId = getRandomInt(70);
    let profileImage = image ? image : `https://i.pravatar.cc/150?img=${randomId}`;
    
    return (
        <div className={storyBorder ? "storyBorder" : ""}>
      <img className={`profileIcon ${iconSize}`} src={profileImage} alt="profile"/></div>
    )
}

export default ProfileIcon;