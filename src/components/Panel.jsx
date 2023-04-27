import "../static/css/Panel.css"

function Panel({imgsrc, imgClassName="panel-pic-left", imgalt, title, text}) {
  return (
    <div className="panel">
      <img className={`panel-pic ${imgClassName}`} src={imgsrc} alt={imgalt} />
      <h3 className="panel-title">{title}</h3>
      <p className="panel-text">{text}</p>
    </div>
  )
}

export default Panel