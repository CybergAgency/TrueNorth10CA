import { Link } from "react-router-dom";
import  game1BackImg from "../images/game1-back.webp";
import  game2BackImg from "../images/game2-back.webp";
import  game3BackImg from "../images/game3-back.webp";

const blogsData = [
  {
    title: (
      <>
        Live Streaming Casino
        <br /> Game
      </>
    ),
    image: game1BackImg,
    description:
      "Experience the atmosphere of a real casino with Live Streaming! Play in real-time with real dealers, participate in interactive games, and enjoy an authentic casino experience anywhere.",
  },
  {
    title: (
      <>
        Casino Game
        <br /> News
      </>
    ),
    image: game2BackImg,
    description:
      "Stay up to date with the latest casino games! Read news about new game releases, strategies, trends, and exclusive updates to stay ahead of the game and find the best opportunities.",
  },
  {
    title: (
      <>
        Casino Game
        <br /> Tournaments
      </>
    ),
    image: game3BackImg,
    description:
      "Join exciting casino game tournaments and compete against players from around the world! Test your skills in poker, blackjack, slots, and other games in daily and seasonal events.",
  },
];

const Blogs = () => {
  return (
    <>
      <section className="blog_area">
        <div className="container">
          <div className="blog_title">
            <h2>
              YOU ARE WELCOME
              <br />
              TO THE CASINO GAMING WORLD.
            </h2>
          </div>
          <div className="blog_cnt_wrapper">
            {blogsData.map(({ title, image, description }, index) => (
              <div key={index} className="blog_cnt">
                <div className="blog_img">
                  <img src={image} alt={title} />
                </div>
                <div className="blog_cnt_inner">
                  <h3>
                    <Link to={"/"}>{title}</Link>
                  </h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
