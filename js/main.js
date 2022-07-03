function emailValidate(email) {
  var exp = new RegExp(
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
  );
  if (exp.test(email) == false) {
    return false;
  } else {
    return true;
  }
}

function validEmail() {
  let form = document.querySelector(".form");
  let inputValue;

  form.addEventListener("keyup", function () {
    inputValue = document.querySelector(".form__input").value;
    if (!emailValidate(inputValue)) {
      this.classList.add("invalid");
    } else {
      this.classList.remove("invalid");
    }
  });
}

window.addEventListener(
  "load",
  function () {
    validEmail();
  },
  true
);
