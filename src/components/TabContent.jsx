import Form from './Form';
import '../static/css/TabContent.css';

function TabContent({ tab }) {
  const snsContactInfo = (
    <div className="sns-info">
      <div className='sns-item'>
        <i className="gg-instagram"></i>
        <a className="sns-link" href="https://www.instagram.com/jiangspluto/" target='_blank' rel='noreferrer'>
          <span>
            Instagram
          </span>
          <i className="gg-external"></i>
        </a>
      </div>

      <div className="sns-item">
        <i className="gg-git-fork"></i>
        <a className="sns-link" href="https://github.com/hellomomiji" target='_blank' rel='noreferrer'>
          <span>
            Github
          </span>
          <i className="gg-external"></i>
        </a>
        
      </div>  
      
      <div className="sns-item">
        <i className="gg-briefcase"></i>
        <a
          className="sns-link"
          href="https://www.linkedin.com/in/yang-jiang-koyo/"
          target='_blank' rel='noreferrer'
        >
          <span>
            Linkedin
          </span>
          <i className="gg-external"></i>
        </a>
      </div>
      
      
    </div>
  );

  return (
    <div className="tab-content">
      {tab === 'sns' && snsContactInfo}
      {tab === 'form' && <Form />}
    </div>
  );
}

export default TabContent;
