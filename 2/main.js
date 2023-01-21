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
        renderUserList()
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
  pagination();

})
