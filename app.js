window.onload = function () {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  var remember = document.getElementById("remember");
  remember.onchange = function () {
    var checked = this.checked;
    if (checked) {
      localStorage.setItem("username", username.value);
      localStorage.setItem("password", password.value);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }
  };
  var usernameData = localStorage.getItem("username");
  var passwordData = localStorage.getItem("password");

  if (usernameData != null) {
    username.value = usernameData;
    password.value = passwordData;
    remember.checked = true;
  }
};
