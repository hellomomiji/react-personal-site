import "../static/css/Projects.css";
import projects from "../static/data/projects"
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import slides from "../static/data/slides";


function Projects() {
  const cardList = projects.map(item => {
    return (
      <Card
        key={item.id}
        title={item.title}
        src={item.img}
        imgalt={item.imgalt}
        text={item.text}
        techStack={item.techStack}
        link={item.link}
        linkname={item.linkname}
        />
    )
  })
  return (
    <div className="projects">
      <h2>Some Projects I've Built</h2>
      <Carousel slides={slides}>

      </Carousel>
      <div className="cards">
        {cardList}
      </div>
    </div>
  )
}

export default Projects