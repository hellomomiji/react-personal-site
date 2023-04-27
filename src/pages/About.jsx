import "../static/css/About.css"
import Panel from '../components/Panel';
import panel from "../static/data/panel";


function About() {
  const panelList = panel.map(item => {
    return (
      <Panel
        key={item.id} 
        imgsrc={item.imgsrc}
        imgalt={item.imgalt}
        imgClassName={item.imgClassName}
        title={item.title}
        text={item.text} 
      />
    )
  })
  return (
    <div className="about">
      <h2>About Yang</h2>
      <div className="panels">
        {panelList}     
      </div>
    </div>
  );
}

export default About;
