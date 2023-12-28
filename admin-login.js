// checking email
if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
  alert("Please enter a valid email!");
  email.focus();
  return false;
}
// checking password
if (!psw.value.match(/^.{5,15}$/)) {
  alert("Password length must be between 5-15 characters!");
  psw.focus();
  return false;
}
