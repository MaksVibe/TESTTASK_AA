import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import { createUser } from "../../redux/users/usersOperations";
import { getUserCreated } from "../../redux/users/usersSelector";
import "./SignUpForm.scss";

const regexEmail =
  "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

const SignUpForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState<any>(null);
  const [position, setPosition] = useState("");
  const [focused, setFocused] = useState<string | null>(null);
  const [errorUser, setErrorUser] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorPhone, setErrorPhone] = useState<boolean>(false);
  const [errorFile, setErrorFile] = useState<boolean>(false);

  const userCreated = useSelector(getUserCreated);
  const dispatch = useDispatch();

  const user = {
    name: userName,
    email: email,
    phone: phone,
    position_id: parseInt(position),
    photo: file,
  };

  const clearForm = () => {
    setUserName("");
    setEmail("");
    setPhone("");
    setFile(null);
    setPosition("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.photo) {
      dispatch(createUser(user));
    }
    clearForm();
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(e.target.value);
  };

  const handleFocusedInput = (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    setFocused(e.target.title);

    if (e.target.title === "Your name") {
      setErrorUser(false);
    } else if (e.target.title === "Email") {
      setErrorEmail(false);
    } else if (e.target.title === "Phone") {
      setErrorPhone(false);
    }
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setFocused(null);

    if (
      e.target.title === "Your name" &&
      (e.target.validity.patternMismatch || userName.length === 0)
    ) {
      setErrorUser(true);
    } else if (
      e.target.title === "Email" &&
      (e.target.validity.patternMismatch || email.length === 0)
    ) {
      setErrorEmail(true);
    } else if (
      e.target.title === "Phone" &&
      (e.target.validity.patternMismatch || phone.length === 0)
    ) {
      setErrorPhone(true);
    }
  };

  const handleFileUpload = (e: any) => {
    setErrorFile(false);
    console.log("Files", e.target.files);
    if (e.target.files[0].size > 5242880) {
      alert("File is too big!");
      setErrorFile(true);
      return;
    }
    setFile(e.target.files[0]);
  };

  return (
    <div className="form-wrapper" id="singUp">
      <Title signUp />
      <form className="form" onSubmit={e => handleSubmit(e)}>
        <div className="form__input">
          <label
            className={`form__input--label ${errorUser ? "error__label" : ""}`}
            hidden={focused !== "Your name" && userName.length === 0}
          >
            Your name
          </label>
          <input
            type="text"
            title="Your name"
            value={userName}
            className={`form__input--field ${errorUser ? "error__input" : ""}`}
            placeholder={focused === "Your name" ? "" : "Your name"}
            onChange={e => setUserName(e.target.value)}
            onFocus={e => handleFocusedInput(e)}
            onBlur={e => handleOnBlur(e)}
            minLength={2}
            maxLength={60}
          />
          {errorUser && (
            <p role="alert" className="error__text">
              Please make sure you've entered a name
            </p>
          )}
        </div>
        <div className="form__input">
          <label
            className={`form__input--label ${errorEmail ? "error__label" : ""}`}
            hidden={focused !== "Email" && email.length === 0}
          >
            Email
          </label>
          <input
            type="email"
            title="Email"
            value={email}
            pattern={regexEmail}
            className={`form__input--field ${errorEmail ? "error__input" : ""}`}
            placeholder={focused === "Email" ? "" : "Email"}
            onChange={e => setEmail(e.target.value)}
            onFocus={e => handleFocusedInput(e)}
            onBlur={e => handleOnBlur(e)}
            minLength={2}
            maxLength={100}
          />
          {errorEmail && (
            <p role="alert" className="error__text">
              Please make sure you've entered an email
            </p>
          )}
        </div>
        <div className="form__input">
          <label
            className={`form__input--label ${errorPhone ? "error__label" : ""}`}
            hidden={focused !== "Phone" && phone.length === 0}
          >
            Phone
          </label>
          <input
            type="phone"
            title="Phone"
            value={phone}
            pattern="^[\+]{0,1}380([0-9]{9})$"
            className={`form__input--field ${errorPhone ? "error__input" : ""}`}
            placeholder={focused === "Phone" ? "" : "Phone"}
            onChange={e => setPhone(e.target.value)}
            onFocus={e => handleFocusedInput(e)}
            onBlur={e => handleOnBlur(e)}
            maxLength={20}
          />
          {errorPhone && (
            <p role="alert" className="error__text">
              Please make sure you've entered a phone
            </p>
          )}
        </div>
        <div className="form__selection">
          <p style={{ marginBottom: "4px" }}>Select your position</p>
          <div>
            <input
              id="fd"
              type="radio"
              value="1"
              checked={position === "1"}
              className="form__input--radio"
              onChange={e => handleValueChange(e)}
            />
            <label htmlFor="fd" style={{ marginLeft: "12px" }}>
              Frontend developer
            </label>
          </div>
          <div>
            <input
              id="be"
              type="radio"
              value="2"
              checked={position === "2"}
              className="form__input--radio"
              onChange={e => handleValueChange(e)}
            />
            <label htmlFor="be" style={{ marginLeft: "12px" }}>
              Backend developer
            </label>
          </div>
          <div>
            <input
              id="des"
              type="radio"
              value="3"
              checked={position === "3"}
              className="form__input--radio"
              onChange={e => handleValueChange(e)}
            />
            <label htmlFor="des" style={{ marginLeft: "12px" }}>
              Designer
            </label>
          </div>
          <div>
            <input
              id="qa"
              type="radio"
              value="4"
              checked={position === "4"}
              className="form__input--radio"
              onChange={e => handleValueChange(e)}
            />
            <label htmlFor="qa" style={{ marginLeft: "12px" }}>
              QA
            </label>
          </div>
        </div>
        <div style={{ marginBottom: "50px" }}>
          <div style={{ display: "flex" }}>
            <label
              htmlFor="upload"
              className={`form__upload ${errorFile ? "error__input" : ""}`}
            >
              Upload
            </label>
            <input
              type="file"
              accept="image/jpeg, image/jpg"
              hidden
              id="upload"
              onChange={e => handleFileUpload(e)}
            />
            <p
              className={`form__upload--text ${
                errorFile ? "error__input" : ""
              }`}
              title="file"
            >
              {file ? file.name : "Upload your photo"}
            </p>
          </div>
          {errorFile && (
            <p
              style={{
                textAlign: "left",
                marginLeft: "16px",
                marginTop: "4px",
              }}
              className="error__text"
            >
              Please make sure you've uploaded a photo
            </p>
          )}
        </div>
        {userCreated && <p style={{ color: "green" }}>{userCreated}!</p>}
        <Button
          signUp
          type="submit"
          disabled={
            userName.length < 1 ||
            email.length < 1 ||
            phone.length < 1 ||
            position.length < 1 ||
            !file
          }
        />
      </form>
    </div>
  );
};

export default SignUpForm;
