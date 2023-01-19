let totalPage = 0;
let userList = [];
const getUserListPerPage = (pageNumber) => {
  $.ajax({
    methode: "GET",
    url: `https://reqres.in/api/users?page=${pageNumber}`,
    async: false,
    success: function (response) {
      userList = response.data;
      renderUserList()
    },
    error: function (err) {
      console.log(err);
    },
  });
};
const handleOnClickProfileBtn = (id)=>{
  window.location.href = `./info.html?id=${id}`;
}
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
                  data-bs-toggle="modal" data-bs-target="#userProfileModal">
                  Profile
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
function renderUserList  ()  {
  $("#userList").html("");
  $("#usersList").html(`${createUserList()}`)

};
$(() => {
  $.ajax({
    methode: "GET",
    url: "https://reqres.in/api/users?page=1",
    async: false,
    success: function (response) {
      if (
        response.data &&
        Array.isArray(response.data) &&
        response.data.length
      ) {
        userList = response.data;
        totalPage = response.total_pages;
      }
    },
    error: function (err) {
      console.log(err);
    },
  });

  const pagination = () => {
    for (let i = 1; i <= totalPage; i++) {
      $("#pagination-btn--container")
        .append(`<li id="page_${i}" class="page-item ${
        i === 1 ? "active" : ""
      }">
      <button
       class="page-link"
       onclick="getUserListPerPage(${i})"
      >${i}</button></li>`);
    }
  };
  
  renderUserList();
  pagination();
});
