var submit = document.getElementById('submit');
submit.addEventListener('click', login);

function login() {
  var username = document.getElementById('username').value.trim();
  if (username.length <= 0) {
    alert('username is empty');
    return false;
  }
  localStorage.setItem('username', username);
}
