const stdname = document.querySelector("#name");
const stdid = document.querySelector("#id");

function onFormSubmit() {
  let isStdnameValid = checkStdname(),
    isStdIdValid = checkStdId();

  let isFormValid = isStdnameValid && isStdIdValid;
  if (isFormValid) {
  }
}


/*Student ID*/
const isStdIdValid = (stdid) => {
  const re = /^(SOC)[0-9]{8}$/;
  return re.test(stdid);
};
function checkStdId() {
  let valid = false;
  const mini = 11;
  const studentId = stdid.value.trim();
  if (!idIsRequired(studentId)) {
    showError(stdid, "Student ID cannot be blank");
  } else if (studentId.length < mini) {
    showError(stdid, `Student ID shoud have atleast ${mini} characters (Example: SOC20120038).`);
  } else if (studentId.length > mini) {
    showError(stdid, `Student ID shoud have maximum ${mini} characters with 'SOC' followed by the student enrollment number (Example: SOC20120038).`) 
  } else if (!isStdIdValid(studentId)) {
    showError(stdid, "StudentID is not valid. First three character should be SOC followed by enrollment number (Example: SOC20120038).");
  } else {
    showSuccess(stdid);
    valid = true;
  }
  return valid;
}
let idIsRequired = (value) => (value === "" ? false : true);

/*Student name*/
const isStdnameValid = (stdname) => {
  const no = /^(([a-z A-Z])+)$/;
  return no.test(stdname);
};

function checkStdname() {
  let valid = false;
  const min = 3,
    max = 25;
  const username = stdname.value.trim();
  if (!isRequired(username)) {
    showError(stdname, "Student name cannot be blank");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      stdname,
      `Name should have character  between ${min} and ${max} .`
    );
  } else if (!isStdnameValid(username)) {
    showError(stdname, "Invalid value: Number and special character are not accepted");
  } else {
    showSuccess(stdname);
    valid = true;
  }
  return valid;
}

let isRequired = (value) => (value === "" ? false : true);

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

let showError = (input, message) => {
  let formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");

  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");
  formField.querySelector("small").textContent = "";
};
