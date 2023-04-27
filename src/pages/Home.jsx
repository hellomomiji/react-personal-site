import "../static/css/Home.css"
import ButtonLink from "../components/ButtonLink"

function Home({setPage}) {
  return (
    <div className="home">
      <h2 className="home-title">Hello! My name is Yang Jiang.</h2>
      <div className="home-text-block">
      <p>I am an aspiring software engineer.</p> 
      <p>Currently a master's student in Information Systems at Northeastern University in the US.</p>
      <p>I worked as a technology consultant and project manager before in Japan.</p>
      </div>
      <div className="home-pic-block">
        <img className="home-headshot" src="/img/home-headshot.jpg" alt="Yang's headshot" />
      </div>
      <div className="home-button-area">
      <ButtonLink
        name="check out my experience" 
        visual="button" 
        onClick={(e) => {
          e.preventDefault();
          setPage("Experience");
        } } />
      </div>
    </div>
  )
}

export default Home