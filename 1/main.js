$(() => {
  $("#method").on("change", function () {
    (this.value == "POST") ? $("#request-body").css("display", "block") : $("#request-body").css("display", "none")
    }
  );

  $("#submit").click(function (e) {
    e.preventDefault();
    const method = $("#method").val();
    method == "GET" ? sendGetRequest() : sendPostRequest();
  });

  const sendGetRequest = () => {
    const URL = $("#url").val();
    let status = null;
    $.ajax({
      url: URL,
      type: "GET",
      success: function (response) {
        $("#response-body").text(JSON.stringify(response));
         status = 200;
      },
      error: function (err) {
        $("#response-body").text(err);
         status = -1;
      },
    });
  };

  const sendPostRequest = () => {
    const URL = $("#url").val();
    const postData = $("#request-body").val();
    let status = null;
    $.ajax({
      url: URL,
      type: "POST",
      contentType : "application/json; charset=utf-8",
      data: postData,
      success: function (response,_status,xmlhttprequest) {
        console.log(xmlhttprequest);
        $("#response-body").text(JSON.stringify(response));
        status = 200;
        $("#status").text(` plainText : JSON status : ${status} `)

      },
      eror: function (err) {
        $("#response-body").text(err);
        status = -1;
      },
    });
  };
});
