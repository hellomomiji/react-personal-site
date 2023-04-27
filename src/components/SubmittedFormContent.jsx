import '../static/css/SubmittedFormContent.css' 

function SubmittedFormContent({
  category,
  categoryOther,
  message,
  isAnonymous,
  name,
  email,
}) {
  return (
    <div>
      <h3>Successfully submitted!</h3>
      <div className="content-area">
        <div className="content-item">
          <span className='content-title'>Category:</span> <span>{category}</span>
        </div>

        <div className="content-item">
          <span className='content-title'>Category Other: </span><span>{categoryOther || 'NA'}</span>
        </div>
        <div className="content-item">
          <span className='content-title'>Message:</span> <span>{message}</span>
        </div>
      {!isAnonymous && 
        <div>
          <div className="content-item">
            <span className='content-title'>Name:</span> <span>{name || 'NA'}</span>
          </div>
          <div className="content-item">
            <span className='content-title'>Email:</span> <span>{email || 'NA'}</span>
          </div>
        </div>
      }
      </div>
    </div>
  );
}

export default SubmittedFormContent;
