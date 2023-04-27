import "../static/css/Card.css";

function Card({ title, src, imgalt, text, techStack, link, linkname }) {

  return (
    <div className="card">
          <h3 className="card-title">{title}</h3>
          <img className="card-img" src={src} alt={imgalt} />
          <p className="card-text">{text}</p>
          <p className="card-tech-text">Tech Stack: {techStack}</p>
          <a className="card-link" href={link} target='_blank' rel='noreferrer'><span>{linkname}</span><i className="gg-external"></i></a>
        </div>
  );
}

export default Card;