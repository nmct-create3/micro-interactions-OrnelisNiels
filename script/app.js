let email = {},
  password = {},
  signInButton;

function handleFloatingLabel() {
  const input = document.querySelector('.js-input-email');
  const label = document.querySelector('.js-label');
  input.addEventListener('blur', function () {
    if (isEmpty(input.value)) {
      console.log('empty');
      label.classList.remove('is-floating');
    } else {
      console.log('notempty');
      label.classList.add('is-floating');
    }
  });
}

function handlePasswordSwitcher() {
  const passwordInput = document.querySelector('.js-input');
  const passwordSwitcher = document.querySelector('#togglePassword');
  passwordSwitcher.addEventListener('change', function () {
    if (passwordInput.type === 'password') {
      passwordInput.setAttribute('type', 'text');
    } else {
      passwordInput.setAttribute('type', 'password');
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded!');
  if ('.js-interactions') {
    handlePasswordSwitcher();
    handleFloatingLabel();
  } else {
    getDOMElements();
    enableListeners();
  }
});

function getDOMElements() {
  email.input = document.querySelector('#username');
  email.field = email.input.parentElement;
  email.error = email.field.querySelector('.js-errorMessageEmail');
  password.input = document.querySelector('#password');
  password.field = password.input.parentElement;
  password.error = password.field.querySelector('.js-errorMessagePassword');
  signInButton = document.querySelector('.js-sign-in-button');
}

function enableListeners() {
  email.input.addEventListener(
    'blur',
    function (e) {
      //   e.target.style.background = 'pink';
      console.log('EMAIL');
    },
    true
  );
  password.input.addEventListener(
    'blur',
    function (e) {
      //   e.target.style.background = 'pink';
      console.log('W8WOORD');
    },
    true
  );
  signInButton.addEventListener('click', function (e) {
    console.log('SIGN IN');
  });
}

const isValidEmailAddress = function (emailAddress) {
  // Basis manier om e-mailadres te checken.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function (fieldValue) {
  return !fieldValue || !fieldValue.length;
};
