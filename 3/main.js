const submitBtn = document.getElementById("submit");
const nameInp = document.getElementById("name");
const familyInp = document.getElementById("family");
const emailInp = document.getElementById("email");
const passInp = document.getElementById("pass");

console.log(passInp.value);

submitBtn.onclick = function (e) {
  e.preventDefault();

  if (!/^.{1,30}$/.test(nameInp.value)) return alert("invalid name input");

  if (!/^.{1,30}$/.test(familyInp.value)) return alert("invalid family input");

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInp.value))
    return alert("invalid email input");
    
  if (
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      passInp.value
    )
  )
    return alert("invalid pass input");
};
