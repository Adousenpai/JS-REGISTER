const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const btn = document.querySelector('#btn');
const errorMsg = document.querySelector('#error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

btn.addEventListener('click', () => {
  const errorArray = [];

  if (!VerifyUserLength(username.value)) {
    errorArray.push('Username must contain more than 3 characters');
  }

  if (!ComparePassword(password.value, password2.value)) {
    errorArray.push('Passwords are different.');
  }

  if (!VerifyEmail(email.value)) {
    errorArray.push('Please enter a valid email.');
  }

  if (errorArray.length > 0) {
    errorMsg.style.display = 'flex';
    errorArray.map((error, index) => {
      let msg = document.createElement('span');
      let closeMsg = document.createElement('div');
      errorMsg.appendChild(msg).innerHTML = '- ' + error;
      msg.appendChild(closeMsg).innerHTML = '+';

      closeMsg.addEventListener('click', () => {
        errorMsg.removeChild(msg);
      });
    });
  }
});

function VerifyUserLength(username) {
  if (username.length > 3) return true;
  return false;
}

function ComparePassword(password, password2) {
  if (password === password2) return true;
  return false;
}

function VerifyEmail(email) {
  return email.includes('@');
}
