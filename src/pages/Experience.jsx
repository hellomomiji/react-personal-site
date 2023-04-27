import "../static/css/Experience.css";
import AccordionSection from "../components/AccordionSection";
import experience from "../static/data/experience";

function Experience() {
  const experienceList = experience.map(item => {
    return (
      <AccordionSection
        key={item.id} 
        company={item.company}
        title={item.title}
        period={item.period}
        details={item.details}
      />
    )
  })

  return (
    <div className="experience">
      <h2 className="experience-title">Where I've worked</h2>
      <div className="accordion">
        {experienceList}
      </div>
    </div>
  )
}

export default Experience