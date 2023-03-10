const saveUserInfo = (id) => {
  const user = userList.find((user) => user.id == id);
console.log(user.id);
  const inputs = document.querySelectorAll(".updateInputs");
  for (let input of inputs) {
    console.log(user[input.id]);

    if (input.value.trim() === "") return alert("invalid input");
    if (input.id =="id") {
      user[input.id] = Number(input.value);
      continue;
    }
    user[input.id] = input.value;
  }
  renderUserList()
};
const deleteUserInfo = (id)=> {
  userList = userList.filter((user) => user.id !== id)
  renderUserList()

}

function editUserInfo(id) {
  let userInfo = document.getElementById("user-info");
  const user = userList.find((user) => user.id == id);
  userInfo.innerHTML = Object.keys(targetUser)
    .map((property) => {
           if (property == "id") {
      
        return `<input  type="text" id="${property}" class=" form-control updateInputs m-2 p-2" value="${user[property]}" placeholder="${property}" disabled/><br>`;
      }
      return `<input  type="text" id="${property}" class=" form-control updateInputs m-2 p-2" value="${user[property]}" placeholder="${property}"/><br>`;
    })
    .join("");

  userInfo.innerHTML += ` <button
                onclick="saveUserInfo(${targetUser.id})" 
                class="btn btn-success rounded-3 w-100"
                 >
                save
            </button>`;
}
const generateUserInfo = function ({
  id,
  avatar,
  email,
  first_name,
  last_name,
}) {
  return `
    <div class="col-lg-4 col-md-6 col-12">
    <div class="card shadow rounded-4">
<img src="${avatar}" class="card-img-top p-2 rounded-4" alt="${id}">

        <div class="card-body">
            <h5 class="card-title text-center">${first_name} ${last_name}</h5>
            <h4 class="card-title text-center">${email}</h4>
            
            <button
                onclick="editUserInfo(${id})" 
                class="btn btn-warning mS rounded-3 w-100">
                edit
            </button>
            <button
                onclick="deleteUserInfo(${id})" 
                class="btn btn-danger rounded-3 w-100">
                delete
            </button>
        </div>
    </div>
</div>
`;
};
const id = window.location.search.split("=")[1];
const targetUser = userList.find((user) => user.id == id);
console.log(userList);
document.getElementById("user-info").innerHTML = generateUserInfo(targetUser);
