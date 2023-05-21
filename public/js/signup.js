const signin = document.querySelector(".signup-submit");
signin.addEventListener("click", (e) => {
  // e.preventDefault();
  const ten = document.querySelector("#email").value;
  const mk = document.querySelector("#pass").value;
  const mkagain = document.querySelector("#passagain").value;
  getUser(ten, mk, mkagain);
});

async function getUser(ten, mk, mkagain) {
  try {
    console.log("try to axios");
    const response = await axios.post("http://localhost:3000/signupon", {
      method: "POST",
      body: {
        ten: ten,
        mk: mk,
        mkagain: mkagain,
      },
    });
    console.log(response);
  } catch (error) {
    if (error.response.status == 400) {
      document.getElementsByClassName("extra")[0].textContent =
        "bạn không được để trống";
    }
    if (error.response.status == 401) {
      document.getElementsByClassName("extra")[0].textContent =
        "tài khoản mật khẩu không phù hợp";
    }
    if (error.response.status == 402) {
      document.getElementsByClassName("extra")[0].textContent =
        "cần nhập mật khẩu lần nữa";
    }
    if (error.response.status == 403) {
      document.getElementsByClassName("extra")[0].textContent =
        "mật khẩu và mật khẩu nhập lại không đồng nhất";
    }
    if (error.response.status == 404) {
      document.getElementsByClassName("extra")[0].textContent =
        "ten tai khoan da dc dung";
    }
    console.error(error.response.data);
  }
}
