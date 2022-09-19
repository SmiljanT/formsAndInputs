import useBasicFormInput from "../hooks/useBasicFormInput";


const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    valueIsValid: firstNameIsValid,
    hasError: firstNameHasError,
    enteredValueHandler: firstNameHandler,
    blurHandler: firstNameBlur,
    reset: resetFirstName,
  } = useBasicFormInput(isNotEmpty);

  const {
    value: enteredLastName,
    valueIsValid: lastNameIsValid,
    hasError: lastNameHasError,
    enteredValueHandler: lastNameHandler,
    blurHandler: lastNameBlur,
    reset: resetLastName,
  } = useBasicFormInput(isNotEmpty);

  const {
    value: enteredEmail,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    enteredValueHandler: emailHandler,
    blurHandler: emailBlur,
    reset: resetEmail,
  } = useBasicFormInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!firstNameIsValid) {
      return;
    }

    console.log("Submitted");
    console.log({ enteredFirstName, enteredLastName, enteredEmail });

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const nameInputClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameHandler}
            onBlur={firstNameBlur}
            value={enteredFirstName}
          />
          {firstNameHasError && (
            <p className="error-text">First name cannot be empty</p>
          )}
        </div>

        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameHandler}
            onBlur={lastNameBlur}
            value={enteredLastName}
          />
          {lastNameHasError && (
            <p className="error-text">Last name cannot be empty</p>
          )}
        </div>
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailHandler}
          onBlur={emailBlur}
          value={enteredEmail}
        />
        {emailHasError && <p className="error-text">Email must contain an @</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
