import Stories from "./Stories";
import CardPost from "./CardPost";

function Cards() {
    const commentsOne = [
      {
        user: "landokmai",
        text: "I'm totally in love with this pics 😍",
        id: 1,
      },
      {
        user: "safeplanet",
        text: "Dope!!",
        id: 2,
      },
      {
        user: "morvasu",
        text: "Wow, fascinating",
        id: 3,
      },
    ];
  
    const commentsTwo = [
      {
        user: "violett",
        text: "Obsessed with your content, LOVE IT",
        id: 4,
      },
    ];
  
    const commentsThree = [
      {
        user: "dept",
        text: "Keet it up man!",
        id: 5,
      },
    ];
  
    return (
      <div className="cards">
        <Stories />
  
        <CardPost
          accountName="whitebeans_official"
          image="https://picsum.photos/800/900"
          comments={commentsOne}
          likedByNumber={89}
          hours={6}
        />
        <CardPost
          accountName="Telex_telexs"
          image="https://picsum.photos/800"
          comments={commentsTwo}
          likedByNumber={47}
          hours={21}
        />
        <CardPost
          accountName="utada_hikaru"
          image="https://picsum.photos/800/1000"
          comments={commentsThree}
          likedByNumber={90}
          hours={3}
        />
      </div>
    );
  }

export default Cards;