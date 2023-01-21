function createuserCard  ({id,avatar,email,first_name,last_name})  {
    return `
    <div class="col-lg-4 col-md-6 col-12">
        <div class="card shadow rounded-4">
  <img src="${avatar}" class="card-img-top p-2 rounded-4" alt="${id}">
  
            <div class="card-body">
                <h5 class="card-title text-center">${first_name} ${last_name}</h5>
                <h4 class="card-title text-center">${email}</h4>
                
                <button
                    onclick="handleOnClickProfileBtn(${id})" 
                    class="btn btn-primary rounded-3 w-100"
                  >  Profile
                </button>
            </div>
        </div>
    </div>
  `;
  }
   function createUserList  ()  {
    let userListBody = "";
    for (user of userList) {
      userListBody += createuserCard(user);
    }
    return userListBody;
  };
  const renderUserList = ()=>  {
    $("#userList").html("");
    $("#usersList").html(`${createUserList()}`)
  
  };