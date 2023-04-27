import '../static/css/Form.css';
import ButtonLink from '../components/ButtonLink';
import SubmittedFormContent from './SubmittedFormContent';
import { useId, useState } from 'react';

function Form() {
  const id = useId();

  const [showOther, setShowOther] = useState(false);
  const [isAnonymous, setisAnonymous] = useState(false);

  const [category, setCategory] = useState(['', true]);
  const [categoryOther, setCategoryOther] = useState(['', true]);
  const [message, setMessage] = useState(['', true]);
  const [name, setName] = useState(['', true]);
  const [email, setEmail] = useState(['', true]);
  const [submitted, setSubmitted] = useState(false);

  const emptyError = <span className="error">This field is required.</span>;
  const emailError = (
    <span className="error">Email Address must contain @ mark.</span>
  );

  function updateCategory(e) {
    if (e.target.value) {
      setCategory([e.target.value, true]);
    } else {
      setCategory(['', false]);
    }
    showOtherSelection(e);
  }

  function showOtherSelection(e) {
    if (e.target.value === 'other') {
      setShowOther(true);
    } else {
      setShowOther(false);
      setCategoryOther('');
    }
  }

  function updateCategoryOther(e) {
    if (showOther) {
      if (e.target.value){
        setCategoryOther([e.target.value, true]);
      } else {
        setCategoryOther(['', false]);
      }
    }
    else {
      setCategoryOther(['', true])
    } 
  }

  function updateMessage(e) {
    if (e.target.value) {
      setMessage([e.target.value, true]);
    } else {
      setMessage(['', false]);
    }
  }

  function handleCheckbox(e) {
    setisAnonymous(!isAnonymous);
    if (isAnonymous) {
      setName('');
      setEmail('');
    }
  }

  function updateName(e) {
    if (!isAnonymous) {
      if (e.target.value) {
        setName([e.target.value, true]);
      } else {
        setName(['', false]);
      }
    }
    else {
      setName(['', true]);
    }
  }

  function updateEmail(e) {
    if (!isAnonymous) {
      if (e.target.value.includes('@')) {
        setEmail([e.target.value, true]);
      } else {
        setEmail([e.target.value, false]);
      }
    }
    else {
      setEmail(['', true]);
    }
  }

  function checkSubmissionErrors() {
    if (!category[0]) {
      setCategory(['', false]);
      return false;
    }
    console.log(category);
    if (category[0] === 'other' && !categoryOther[0]) {
      setCategoryOther(['', false]);
      return false;
    }
    if (!message[0]) {
      setMessage(['', false]);
      return false;
    }
    if (!isAnonymous) {
      if (!name[0]) {
        setName(['', false]);
        return false;
      }
      if (!email[1]) {
        setEmail(['', false]);
        return false;
      }
    }
    return true;
  }

  function submitForm(e) {
    console.log({ category, categoryOther, message, isAnonymous, name, email });
    const valid = checkSubmissionErrors();
    if (!valid) {
      e.preventDefault();
    } else {
      e.preventDefault();
      setSubmitted(true);
    }
  }

  return submitted ? (
    <SubmittedFormContent
      category={category}
      categoryOther={categoryOther}
      message={message}
      isAnonymous={isAnonymous}
      name={name}
      email={email}
    />
  ) : (
    <form className="form" action="/submit" method="post" onSubmit={submitForm}>
      <div className="form-item">
        <label className="form-label" htmlFor={`${id}-category`}>
          Category
          <span>
            <em>* Required</em>
          </span>
        </label>

        <select
          name="category"
          className="form-input"
          onChange={updateCategory}
          id={`${id}-category`}
        >
          <option value="">Please Select</option>
          <option value="greeting">Greeting</option>
          <option value="request">Information Request</option>
          <option value="chat">Reserve a coffee Chat</option>
          <option value="other">Other Request...</option>
        </select>
        {!category[1] && emptyError}

        {showOther && (
          <div className="form-item">
            <label className="form-label" htmlFor={`${id}-categoryOther`}>
              Other Category
              <span>
                <em>* Required</em>
              </span>
            </label>
            <input
              type="text"
              name="categoryOther"
              id={`${id}-categoryOther`}
              onInput={updateCategoryOther}
              className="form-input form-input-other"
              placeholder="Please leave your request title"
              aria-label="categoryOther"
            />
            {showOther && !categoryOther[1] && emptyError}
          </div>
        )}
      </div>

      <div className="form-item">
        <label className="form-label" htmlFor={`${id}-message`}>
          Message
          <span>
            <em>* Required</em>
          </span>
        </label>

        <textarea
          className="form-input form-input-message"
          placeholder="Please leave your Message..."
          name="message"
          id={`${id}-message`}
          onInput={updateMessage}
        />
        {!message[1] && emptyError}
      </div>

      <div className="form-item-anonymous">
        <label className="form-label" htmlFor={`${id}-anonymous`}>
          Leave Anonymous Message to me?
        </label>

        <input
          type="checkbox"
          name="anonymous"
          className="form-input-anonymous"
          id={`${id}-anonymous`}
          onClick={handleCheckbox}
        />
      </div>

      {!isAnonymous && (
        <div>
          <div className="form-item">
            <label className="form-label" htmlFor={`${id}-name`}>
              Name
              <span>
                <em>* Required</em>
              </span>
            </label>

            <input
              type="text"
              name="name"
              id={`${id}-name`}
              className="form-input form-name"
              placeholder="Your Name"
              onInput={updateName}
            />
            {!isAnonymous && !name[1] && emptyError}
          </div>

          <div className="form-item">
            <label className="form-label" htmlFor={`${id}-email`}>
              Email
              <span>
                <em>* Required</em>
              </span>
            </label>

            <input
              type="text"
              name="email"
              id={`${id}-email`}
              className="form-input form-email"
              placeholder="Your Email Address"
              onInput={updateEmail}
            />
            {(!isAnonymous && !email[0] && !email[1]) && emptyError}
            {!isAnonymous && email[0] && !email[1] && emailError}
          </div>
        </div>
      )}

      <ButtonLink name="Submit" type="submit" className="submit-button" />
      <div>
        <p>This is a demo form, please contact me by <a href="mailto:jiangyang.jnu@gmail.com?body=Hello!">Email</a>.</p>
      </div>
    </form>
  );
}

export default Form;
