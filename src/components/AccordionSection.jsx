import { useState } from "react";
import "../static/css/AccordionSection.css"

function AccordionSection({company, title, period, details}) {
  const [isOpen, setIsOpen] = useState(false);
  const openClass = isOpen ? "accordion-title--open" : "";
  
  const detailList = details.map(detail => {
    return (
      <li className="accordion-content-text" key={detail.id}>{detail.point}</li>
    )
  })

  return (
    <div className="accordion-section">
      <button 
        className={`accordion-title ${openClass}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen ? "true": "false"}
      >
        <span>{company}</span>
      </button>
      {isOpen &&
        (<div className="accordion-content">
          <h3 className="accordion-content-title">{title}</h3>
          <p className="accordion-content-period">{period}</p>
          <ul className="accordion-content-details">
            {detailList}
          </ul>
        </div>)
      }
    </div>
  )
}

export default AccordionSection;